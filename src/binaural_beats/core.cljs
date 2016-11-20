(ns binaural-beats.core
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [reagent.core :as r :refer [atom]]
            [cljs-bach.synthesis :as s]
            [binaural-beats.spline-editor :refer [spline-editor]]))

(enable-console-print!)

(defonce state
         (atom {:text "Hello Binaural"
                :duration 10
                :fq 100
                :delta 4
                :osc-line [100 [1 120] [2 80] [3 100]]}))

(defn tval [x]
  (.. x -target -value))

(defonce context (s/audio-context))

(defn play []
  (-> (s/connect-> (s/sine (:fq @state)) (s/gain 0.1) s/destination)
      (s/run-with context (s/current-time context) (:duration @state)))
  (-> (s/connect-> (s/sine (+ (:delta @state) (:fq @state))) (s/gain 0.1) s/destination)
      (s/run-with context (s/current-time context) (:duration @state))))

(defn osc-line
  "Build an envelope out of [segment-duration final-level] coordinates."
  [init & corners]
  (fn [context at duration]
    (let [osc (.createOscillator context)]
      (.. osc -frequency (setValueAtTime init (s/current-time context)))
      (aset osc "type" "sine")
      (.start osc (s/current-time context))
      (loop [x at, coordinates corners]
        (let [[[dx y] & remaining] coordinates]
          (-> osc .-frequency (.linearRampToValueAtTime y (+ x dx)))
          (if-not (seq remaining)
            (.stop osc (+ dx x))
            (recur (+ dx x) remaining))))
      (s/source osc))))

(defn pink-noise []
  (fn [context at duration]
    (let [pinky (.createPinkNoise context)]
      (.start pinky at)
      (.stop pinky (+ duration at))
      (s/source pinky))))

(comment
  (do
    (-> (s/connect->
          (osc-line 100 [1 99] [2 98] [3 100])
          (s/gain 0.2)
          s/destination)
        (s/run-with context (s/current-time context) (:duration @state)))
    (-> (s/connect->
          (osc-line 100 [1 101] [2 102] [3 100])
          (s/gain 0.2)
          s/destination)
        (s/run-with context (s/current-time context) (:duration @state))))

  (-> (s/connect->
        (pink-noise)
        (s/gain 0.2)
        s/destination)
      (s/run-with context (s/current-time context) (:duration @state))))

(defn get-mouse-signal [& [el]]
  (let [mouse-position (atom {:x 0 :y 0})]
    (aset (or el js/document)
          "onmousemove"
          (fn [e] (js/console.log e)
            (reset! mouse-position
                    {:y (.-offsetY e)
                     :x (.-offsetX e)})))
    mouse-position))


(defn points [{:keys [points mouse-position]}]
  (let [selected (atom nil)
        pts (reaction (if @selected
                        (assoc @points @selected @mouse-position)
                        @points))]
    (fn []
      (println "render points" @selected)
      [:g
       (doall
         (for [[i {:keys [x y]}] (map-indexed vector @pts)]
           [:circle {:key i
                     :on-click
                     (fn []
                       (println "click" (= i @selected))
                       (if (= i @selected)
                         (reset! selected nil)
                         (reset! selected i)))
                     :stroke (if (= i @selected) "red" "grey")
                     :cx x
                     :cy y
                     :r 8}]))
       (let [[fp & np] (sort-by :x @pts)]
         [:path {:d (str "M " (:x fp) "," (:y fp) " "
                         (reduce (fn [acc {:keys [x y]}]
                                   (str acc "L " x "," y " "))
                                 ""
                                 np))}])])))



(defn main []
  (let [pts (atom [{:x 10 :y 10} {:x 100 :y 100}])
        mouse-pos (atom {:x 0 :y 0})]
    (r/create-class
      {:component-did-mount
       (fn [this]
         (let [svg (.querySelector (r/dom-node this) "svg")]
           (js/console.log svg)
           (aset svg
                 "onmousemove"
                 (fn [e]
                   (reset! mouse-pos
                           {:y (.-offsetY e)
                            :x (.-offsetX e)})))))
       :reagent-render
       (fn []
         [spline-editor {:points pts :mouse-position mouse-pos :width 800 :height 200}]
         #_[:div
            [:h1 (:text @state)]
            [:h5 "duration"]
            [:input {:type "number"
                     :value (:duration @state)
                     :on-change #(swap! state assoc :duration (tval %))}]
            [:h5 "fq"]
            [:input {:type "number"
                     :value (:fq @state)
                     :on-change #(swap! state assoc :fq (tval %))}]
            [:h5 "delta"]
            [:input {:type "number"
                     :value (:delta @state)
                     :on-change #(swap! state assoc :delta (tval %))}]
            [:button {:on-click play} "play"]
            [:button {:on-click (fn [e] (js/console.log (.-nativeEvent e)))} "print e"]

            [spline]])})))



(r/render-component [main]
                    (.getElementById js/document "app"))

