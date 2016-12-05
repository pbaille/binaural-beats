(ns audio.wave-shapper
  (:require-macros [reagent.ratom :refer [reaction run!]])
  (:require [reagent.core :as r]
            [audio.core :as audio]
            [editors.spline :refer [spline-editor]]
            [cljs-bach.synthesis :as s]))

(defonce ctx (s/audio-context))

(defn wave [{:keys [ctx] [real imag] :spec}]
  (.createPeriodicWave
    ctx
    (js/Float32Array. (clj->js real))
    (js/Float32Array. (clj->js imag))))

(defn osc [ctx] (.createOscillator ctx))

(defn set-wave [osc w]
  (if (map? w)
    (set-wave osc (wave w))
    (doto osc (.setPeriodicWave w))))

(defn gain [ctx v]
  (doto (.createGain ctx)
    (aset "gain" "value" v)))

(defn c> [& nodes]
  (doseq [[a b] (partition 2 1 nodes)]
    (.connect a b)))

(defn wave-shapper []
  (let [points (r/atom [{:x 0.2 :y 0.2} {:x 0.7 :y 0.7}])
        osc* (osc ctx)
        update-wave (fn [points]
                      (set-wave
                        osc*
                        {:ctx ctx
                         :spec (apply
                                 map
                                 vector
                                 (mapv (juxt :x :y) points))}))]

    (add-watch points
               :foo
               (fn [_ _ _ n]
                 (println "update")
                 (update-wave n)))

    (c> osc* (gain ctx 1) (.-destination ctx))

    (fn []
      [:div.wave-shapper
       [spline-editor {:points points
                       :ranges {:x [0 10] :y [0 10]}
                       :height 300
                       :width 300}]
       [:button {:on-click #(reset! points [{:x 0.2 :y 0.2} {:x 0.7 :y 0.7}])} "clean"]
       [:button {:on-click #(.start osc* (.-currentTime ctx))} "Play"]
       [:button {:on-click #(.stop osc* (.-currentTime ctx))} "Stop"]])))

(comment
  (r/render-component [wave-shapper]
                      (.getElementById js/document "app")))
