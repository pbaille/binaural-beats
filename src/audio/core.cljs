(ns audio.core
  (:require [cljs-bach.synthesis :as s]
            [utils.core :as u]))

;; aliases --------------------------------------

(defn linear-to [x v at]
  (.linearRampToValueAtTime x v at))

(defn exp-to [x v at]
  (.exponentialRampToValueAtTime x v at))

(defn set-val-at [x v at]
  (.setValueAtTime x v at))

;; custom osc -------------------------------------------

(defn tlmod [{:keys [interp-type tl path]}]
  (fn [this]
    (let [ct (.-currentTime (.-context this))
          p (reduce #(aget %1 %2) this path)
          f (condp = interp-type
              :exp exp-to
              :linear linear-to
              :none set-val-at
              nil set-val-at)]
      (mapv
        (fn [[x y]] (f p y (+ ct x)))
        tl))))

(defn custom-osc
  "have to test this... maybe broken"
  [{:keys [wavetable fqs interp-type]}]
  (fn [context at duration]
    (let [[real imag] wavetable
          osc (.createOscillator context)
          fmod (tlmod {:interp-type (or interp-type :exp)
                       :path ["frequency"]
                       :tl fqs})]
      (.setPeriodicWave
        osc
        (.createPeriodicWave
          context
          (js/Float32Array. (clj->js real))
          (js/Float32Array. (clj->js imag))))
      (.start osc at)
      (.stop osc (+ at duration 1.0))
      (fmod osc)
      (s/source osc))))

;; nodes -------------------------------------------

(defn osc-line
  "type: sine | square | sawtooth | triangle
   init: initial frequency
   points: frequency timeline ex: [[t1 f1][t2 f2]]"
  [{:keys [init points type]}]
  (fn [context at duration]
    (let [osc (.createOscillator context)]
      (.. osc -frequency (setValueAtTime init at))
      (aset osc "type" (or type "sine"))
      (.start osc at)
      (.stop osc (+ duration at))
      (mapv (fn [[x y]] (.. osc -frequency (linearRampToValueAtTime y (+ at x)))) points)
      (s/source osc))))

(defn envelop
  "corners: gain timeline ex: [[t1 g1][t2 g2]]"
  [corners]
  (fn [context at duration]
    (let [audio-node (.createGain context)]
      (.. audio-node -gain (setValueAtTime 0 at))
      (mapv (fn [[x y]] (.. audio-node -gain (linearRampToValueAtTime y (+ at x)))) corners)
      (s/subgraph audio-node))))

(defn pans
  "corners: pan timeline ex: [[t1 p1][t2 p2]]
   pan value must be in [0 .. 1]"
  [corners]
  (fn [context at duration]
    (let [audio-node (.createStereoPanner context)]
      (.. audio-node -pan (setValueAtTime 0 at))
      (mapv (fn [[x y]] (.. audio-node -pan (linearRampToValueAtTime (dec (* 2 y)) (+ at x)))) corners)
      (s/subgraph audio-node))))

(defn trem
  "min: minimal gain
   max: maximal gain
   f: tremolo frequency"
  [{:keys [min max f]}]
  (fn [ctx at dur]
    (s/subgraph
      (doto (.createGain ctx)
        (aset "gain" "value" (+ min max))
        (-> .-gain (s/plug (s/sine f) ctx at dur))))))

(comment
  (defonce context (s/audio-context))

  (.-context (.createOscillator context))

  (-> (s/connect->
        (s/sine 200)
        (s/gain 0.5) #_(trem {:f 4})
        (pans [[0 -1] [1 2] [2 -1] [3 2]])
        s/destination)
      (s/run-with context (+ 2 (s/current-time context)) 3))

  (-> (s/connect->
        (custom-osc {:wavetable [[0 0.5] [0 0]]
                     :fqs [[0 300]]})
        (s/gain 0.5) #_(trem {:f 4})
        s/destination)
      (s/run-with context (s/current-time context) 3)))

;; noise nodes ---------------------------------------------

(defn pink-noise []
  (fn [context at duration]
    (let [pinky (.createPinkNoise context)]
      (.start pinky at)
      (.stop pinky (+ duration at))
      (s/source pinky))))

(defn play-pink [{:keys [ctx at duration]
                  {:keys [gain pan]} :track}]
  (-> (s/connect->
        (pink-noise)
        (envelop gain)
        (pans pan)
        s/destination)
      (s/run-with ctx at duration)))

(defn brown-noise []
  (fn [context at duration]
    (let [browny (.createBrownNoise context)]
      (.start browny at)
      (.stop browny (+ duration at))
      (s/source browny))))

(defn play-brown [{:keys [ctx at duration]
                   {:keys [gain pan]} :track}]
  (-> (s/connect->
        (pink-noise)
        (envelop gain)
        (pans pan)
        s/destination)
      (s/run-with ctx at duration)))

;; synth --------------------------------------------------

(defn format-multidimensional-timeline
  "[[0 [1 2 3]] [1 [4 5 6]]]
   ;=> [[0 {1 1, 2 2, 3 3}]
        [1 {1 4, 2 5, 3 6}]]"
  [x]
  (mapv (fn [[k v]]
          [k (if (vector? v)
               (into {} (map-indexed (fn [i v] [(inc i) v]) v))
               v)])
        x))

(defn transpose-multidimensional-timeline
  "[[0 {1 1, 2 2, 3 3}]
    [1 {1 4, 2 5, 3 6}]]
   ;=>
   {1 [[0 1] [1 4]],
    2 [[0 2] [1 5]],
    3 [[0 3] [1 6]]}
   can also take non formatted mtl see above"
  [x]
  (let [formated (format-multidimensional-timeline x)
        ks (set (mapcat (comp keys second) formated))]
    (reduce
      (fn [acc [t hm]]
        (reduce
          (fn [acc [k v]]
            (update acc k conj [t v]))
          acc
          hm))
      (apply hash-map (interleave ks (repeat [])))
      formated)))

(defn synth
  "init: initial frequency
   fq: frequency timeline
   harmonics: harmonics timeline ex: [[t0 {coef1 gain1 coef2 gain2}][t1 {...}]]
   pan: pan timeline
   gain: gain timeline
   oscs: osctypes timeline ex [[t0 {\"sine\" 1 \"square\" 0.5}][t1 {...}]]"
  [{:keys [init fq harmonics pan gain oscs]}]
  (let [ths (transpose-multidimensional-timeline harmonics)
        oscs (transpose-multidimensional-timeline oscs)
        idx->osc-type {1 "sine"
                       2 "square"
                       3 "triangle"
                       4 "sawtooth"}
        map-seconds (fn [f coll] (map (fn [[x y]] [x (f y)]) coll))
        gain-node (envelop gain)
        pan-node (pans pan)]
    (apply
      concat
      (mapv
        (fn [[idx g1]]
          (let [osc-type (idx->osc-type idx)
                osc-gain-node (envelop g1)]
            (mapv (fn [[coef g2]]
                    (s/connect->
                      (osc-line {:type osc-type
                                 :init (* coef init)
                                 :points (map-seconds (partial * coef) fq)})
                      (envelop g2)
                      osc-gain-node
                      gain-node
                      pan-node
                      s/destination))
                  ths)))
        oscs))))

(comment "test synth"
         (def ctx (s/audio-context))
         (-> (synth {:init 100
                     :fq [[0 100]]
                     :gain [[0 1]]
                     :harmonics [[0 {1 1 2 0.5 5 0.1}] [0.5 {1 1 2 0.1 5 0.5}]]
                     :oscs [[0 {"sine" 1 "square" 0}]]
                     :pan [[0 0.5]]})
             (run-all-with ctx (+ 2 (s/current-time ctx)) 3)))

;; eq -----------------------------------------------------

(def flat-eq-points
  (map
    (fn [x]
      {:fq x
       :gain 0
       :q 1})
    (take 11 (iterate (partial * 2) 24))))

(defn eq [points]
  (apply
    s/connect->
    (mapv
      (fn [{:keys [fq gain q]}]
        (fn [context at duration]
          (s/subgraph
            (doto (.createBiquadFilter context)
              (-> .-frequency .-value (set! fq))
              (-> .-gain .-value (set! gain))
              (-> .-Q .-value (set! q))
              (-> .-type (set! "peaking"))))))
      points)))

(comment

  (def ctx (s/audio-context))

  (do (-> (s/connect->
            (osc-line {:type "sine"
                       :init 200
                       :points [[0 200]]})
            (s/gain 0.5)
            (s/stereo-panner 1)
            s/destination)
          (s/run-with ctx (+ 2 (s/current-time ctx)) 3))

      (-> (s/connect->
            (osc-line {:type "sine"
                       :init 204
                       :points [[0 204]]})
            (s/gain 0.5)
            (s/stereo-panner -1)
            s/destination)
          (s/run-with ctx (+ 2 (s/current-time ctx)) 3)))

  (s/run-with
    (s/connect->
      (pink-noise)
      (s/gain 0.1)
      (eq [{:fq 1000 :gain -10 :q 0.4}
           {:fq 100 :gain 10 :q 1}
           {:fq 500 :gain 10 :q 1}])
      s/destination)
    ctx
    (+ 2 (s/current-time ctx))
    3)

  (s/add
    (s/sine 10)
    (s/source (new js/ConstantSourceNode 1)))

  (-> (synth {:init 100
              :fq [[0 100]]
              :gain [[0 1]]
              :harmonics [[0 {1 1 2 0.5 5 0.1}]]
              :oscs [[0 {"sine" 1 "square" 0.1}]]
              :pan 0.5})
      (run-all-with ctx (+ 2 (s/current-time ctx)) 3)))

;; binaural-beats ---------------------------------------------------

;; helpers ----

(defn close-ctx [ctx]
  (.then (.close @ctx)
         (fn [] (reset! ctx nil))))

(defn run-all-with [xs ctx ct duration]
  (mapv #(s/run-with % ctx ct duration) xs))

(defn binaural-fq-seqs [fqs deltas duration]
  (let [main-seq (u/interp-seq (u/interpolator fqs) 0 duration 0.1)
        delta-interp (u/interpolator deltas)]
    {:left (mapv (fn [[x y]] [x (+ y (/ (delta-interp x) 2.0))]) main-seq)
     :right (mapv (fn [[x y]] [x (- y (/ (delta-interp x) 2.0))]) main-seq)}))

(defn scale-timeline [dur tl]
  (mapv (fn [[t v]] [(* dur t) v]) tl))

;; main -------

(defn play-binaural [{ctx :ctx
                      {:keys [fq delta gain harmonics oscs]} :track
                      dur :duration
                      at :at}]
  (let [[fq delta gain harmonics oscs]
        (mapv (partial scale-timeline dur)
              [fq delta gain harmonics oscs])
        {:keys [left right]} (binaural-fq-seqs fq delta dur)]
    (-> (synth {:init (ffirst left)
                :fq left
                :harmonics harmonics
                :oscs oscs
                :pan [[0 0]]
                :gain gain})
        (run-all-with ctx at dur))

    (-> (synth {:init (ffirst right)
                :fq right
                :harmonics harmonics
                :oscs oscs
                :pan [[0 1]]
                :gain gain})
        (run-all-with ctx at dur))))

(defn play-tracks [{:keys [ctx tracks decay duration]}]
  (let [at (+ (or decay 2) (s/current-time ctx))]
    (doseq [t tracks]
      (condp = (:type t)
        :binaural
        (play-binaural
          {:ctx ctx
           :at at
           :track t
           :duration duration})
        :pink
        (play-pink
          {:track t
           :at at
           :duration duration
           :ctx ctx})
        :brown
        (play-pink
          {:track t
           :at at
           :duration duration
           :ctx ctx})))))

(defn export-buffer [{:keys [duration] :as opts}]
  (let [offline (js/OfflineAudioContext. 2 (* duration 44100) 44100)]
    (play-tracks (assoc opts :ctx offline))
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

(comment

  (pprint
    (binaural-fq-seqs
      [{:x 0 :y 200} {:x 2 :y 100} {:x 3 :y 150}]
      [{:x 0 :y 1} {:x 2 :y 7} {:x 3 :y 4}]
      3))

  (defonce context (s/audio-context))

  (-> (s/connect->
        (custom-osc {:wavetable [[0 0.5 0] [0 0.5 1]]
                     :init 300
                     :fqs [[1 200] [3 600]]})
        (s/gain 0.5)
        s/destination)
      (s/run-with context (s/current-time context) 3))


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