(ns sandbox.rum
  (:require [rum.core :as rum]
            [editors.spline :refer [spline-editor]]
            [utils.core :as u]))

(defn scale-tool [{{[x-in-min x-in-max] :x
                    [y-in-min y-in-max] :y} :in
                   {[x-out-min x-out-max] :x
                    [y-out-min y-out-max] :y} :out}]
  {:>> (fn [xs]
         (map vector
              (map #(u/scale-range % x-in-min x-in-max x-out-min x-out-max) (map first xs))
              (map #(u/scale-range % y-in-min y-in-max y-out-min y-out-max) (map second xs))))
   :<< (fn [xs]
         (map vector
              (map #(u/scale-range % x-out-min x-out-max x-in-min x-in-max) (map first xs))
              (map #(u/scale-range % y-out-min y-out-max y-in-min y-in-max) (map second xs))))})

(rum/defcs spline-wrap <
  rum/reactive
  [_ {:keys [ranges points]}]
  (println "render swrap")
  (let [{:keys [>> <<]} (scale-tool {:in (rum/react ranges)
                                     :out {:x [0 1] :y [0 1]}})]
    (spline-editor
      {:points (>> (rum/react points))
       :on-change #(reset! points (<< %))
       :width 600
       :height 200})))

(def ps (atom [[0 10] [5 6] [9 1]]))
(def rs (atom {:x [0 10] :y [0 10]}))

(comment
  (swap! ps conj [1 1])
  (swap! rs assoc :y [0 30]))


(rum/mount
  (spline-wrap
    {:ranges rs
     :points ps})
  (.getElementById js/document "app"))
