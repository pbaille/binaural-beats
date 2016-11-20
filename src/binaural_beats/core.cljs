(ns binaural-beats.core
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [reagent.core :as r :refer [atom]]
            [cljs-bach.synthesis :as s]
            [binaural-beats.spline-editor :refer [spline-editor]]
            [binaural-beats.utils :as u :refer [tval]]
            [cljs.pprint :refer [pprint]]))

(enable-console-print!)

(defonce state
         (atom {:text "Hello Binaural"
                :duration 2
                :fq 200
                :bb-gain 0.2
                :pink-gain 0.0}))

(comment

  (defonce context (s/audio-context))

  (do
    (-> (s/connect->
          (pink-noise)
          (s/gain 0.2)
          s/destination)
        (s/run-with context (s/current-time context) 3))

    (-> (s/connect->
          (s/sine 200)
          (s/gain 0.1)
          s/destination)
        (s/run-with context (s/current-time context) 2))
    (-> (s/connect->
          (s/sine 204)
          (s/gain 0.1)
          s/destination)
        (s/run-with context (s/current-time context) 2))))

(defn osc-line
  [init & corners]
  (fn [context at duration]
    (let [osc (.createOscillator context)]
      (.. osc -frequency (setValueAtTime init at))
      (aset osc "type" "sine")
      (.start osc at)
      (.stop osc (+ duration at))
      (mapv (fn [[x y]] (.. osc -frequency (linearRampToValueAtTime y x))) corners)
      (s/source osc))))

(defn pink-noise []
  (fn [context at duration]
    (let [pinky (.createPinkNoise context)]
      (.start pinky at)
      (.stop pinky (+ duration at))
      (s/source pinky))))

(defn play-pink [{:keys [ctx gain duration]}]
  (-> (s/connect->
        (pink-noise)
        (s/gain gain)
        s/destination)
      (s/run-with ctx (s/current-time ctx) duration)))

(defn binaural-fq-seqs [fqs deltas duration]
  (let [main-seq (u/interp-seq (u/interpolator fqs) 0 duration 0.1)
        delta-interp (u/interpolator deltas)]
    {:left (mapv (fn [[x y]] [x (+ y (/ (delta-interp x) 2.0))]) main-seq)
     :right (mapv (fn [[x y]] [x (- y (/ (delta-interp x) 2.0))]) main-seq)}))

(defn envelope*
  "Build an envelope out of [segment-duration final-level] coordinates."
  [corners]
  (fn [context at duration]
    (let [audio-node (.createGain context)]
      (.. audio-node -gain (setValueAtTime 0 at))
      (mapv (fn [[x y]] (.. audio-node -gain (linearRampToValueAtTime y x))) corners)
      (s/subgraph audio-node))))

(defn play-binaural [{:keys [ctx fqs deltas envelope duration]}]
  (let [{:keys [left right]} (binaural-fq-seqs fqs deltas duration)
        ct (s/current-time ctx)]

    (-> (s/connect->
          (apply osc-line (ffirst left) left)
          (envelope* envelope)
          (s/stereo-panner -1)
          s/destination)
        (s/run-with ctx ct duration))

    (-> (s/connect->
          (apply osc-line (ffirst right) right)
          (envelope* envelope)
          (s/stereo-panner 1)
          s/destination)
        (s/run-with ctx ct duration))))

(defn close-ctx [ctx]
  (.then (.close @ctx) (fn [] (reset! ctx nil))))

(defn play [{:keys [ctx deltas fqs duration envelope]}]
  (if-not @ctx (reset! ctx (s/audio-context)))
  (play-binaural
    {:fqs fqs
     :deltas deltas
     :envelope (map (juxt :x :y) envelope)
     :duration duration
     :ctx @ctx})
  (play-pink
    {:gain (:pink-gain @state)
     :duration duration
     :ctx @ctx}))

(comment
  (pprint (binaural-fq-seqs [{:x 0 :y 200} {:x 2 :y 100} {:x 3 :y 150}]
                            [{:x 0 :y 1} {:x 2 :y 7} {:x 3 :y 4}]
                            3)))

(defn export-buffer [{:keys [duration deltas fqs envelope] :as opts}]
  (let [offline (js/OfflineAudioContext. 2 (* duration 44100) 44100)]
    (play (assoc opts :ctx (atom offline)))
    (set! (.-oncomplete offline)
          (fn [e] (u/log (.-renderedBuffer e))
            (let [buffer (.-renderedBuffer e)
                  worker (js/Worker. "/js/recorderWorker.js")]
              (.postMessage worker
                            (clj->js
                              {:command "init"
                               :config {:sampleRate 44100}}))
              (set! (.-onmessage worker)
                    (fn [e]
                      (u/log (.-data e))
                      (let [url (js/window.URL.createObjectURL (.-data e))
                            a (.createElement js/document "a")]
                        (.appendChild js/document.body a)
                        (aset a "style" "display: none")
                        (aset a "href" url)
                        (aset a "download" "test.wav")
                        (.click a)
                        (js/window.URL.revokeObjectURL url))))
              (.postMessage worker
                            (clj->js
                              {:command "record"
                               :buffer [(.getChannelData buffer 0)
                                        (.getChannelData buffer 1)]}))
              (.postMessage worker
                            (clj->js
                              {:command "exportWAV"
                               :type "audio/wav"})))))
    (.startRendering offline)))

(defn main []
  (let [delta-pts (atom [{:x 0 :y 1} {:x 2 :y 7} {:x 3 :y 4}])
        fq-pts (atom [{:x 0 :y 200} {:x 2 :y 100} {:x 3 :y 150}])
        envelope (atom [{:x 0 :y 0.5} {:x 1 :y 0.7} {:x 2 :y 0.3}])
        duration (atom 3)
        current-spline (atom :delta)
        ctx (atom nil)]
    (fn []
      [:div
       [:h1 "Binaural Beats Generator"]

       [:select {:value (name @current-spline)
                 :on-change #(reset! current-spline (keyword (tval %)))}
        (for [s [:delta :freq :envelope]]
          [:option {:key s :value (name s)} (name s)])]

       (condp = @current-spline
         :delta [spline-editor {:points delta-pts
                                :width 800 :height 200
                                :ranges {:x [0 @duration] :y [0 12]}}]
         :freq [spline-editor {:points fq-pts
                               :width 800 :height 200
                               :ranges {:x [0 @duration] :y [0 400]}}]
         :envelope [spline-editor {:points envelope
                                   :width 800 :height 200
                                   :ranges {:x [0 @duration] :y [0 1]}}])

       [:span "duration: "]
       [:input {:type "number"
                :style {:width :40px}
                :value @duration
                :on-change #(reset! duration (tval %))}]

       [:div
        [:button {:on-click #(if @ctx
                               (close-ctx ctx)
                               (play {:ctx ctx
                                      :deltas @delta-pts
                                      :fqs @fq-pts
                                      :duration @duration
                                      :envelope @envelope}))}
         "play/stop"]
        [:button {:on-click #(export-buffer
                              {:deltas @delta-pts
                               :fqs @fq-pts
                               :duration @duration
                               :envelope @envelope})}
         "export"]]])))

(r/render-component [main]
                    (.getElementById js/document "app"))

