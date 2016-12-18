(ns editors.tbchart
  (:require [rum.core :as r]
            [editors.barcharts :as bc]
            [editors.multislider :as ms]
            [utils.core :as u]
            [clojure.set :refer [superset? subset? difference]]))

(def sample
  {0 [0.1 0.6 0.8]
   0.5 [0.2 0.4 0.6]
   1 [1 0.2 0.8]})

(defn init [s]
  (update s
          :opts
          assoc
          :selected (atom nil)
          :pos (atom (or (-> s :rum/args first :pos) 0))
          :data (atom (-> s :rum/args first :data))))

(defn interpolate-points [data pos]
  (let [sorted (sort-by key data)]
    (cond
      (<= pos (ffirst sorted)) (second (first sorted))
      (>= pos (first (last sorted))) (second (last sorted))
      :else (let [[[p0 xs0] [p1 xs1]]
                  (first
                    (filter
                      (fn [[[ax] [bx]]]
                        (<= ax pos bx))
                      (partition 2 1 sorted)))]
              (mapv
                (fn [[x0 x1]]
                  (u/scale-range pos p0 p1 x0 x1))
                (map vector xs0 xs1))))))

(defn xdata-change [data xs]
  (let [data-keys (set (map key data))]
    (if (not= (count data) (count xs))
      (cond
        (subset? data-keys (set xs))
        (let [x (first (difference (set xs) data-keys))]
          (assoc data x (interpolate-points data x)))

        (superset? data-keys (set xs))
        (dissoc data (first (difference data-keys (set xs))))

        :else (do (println "several xs have changed :s" data-keys xs) data))

      (let [new-x (first (difference (set xs) data-keys))
            old-x (first (difference data-keys (set xs)))]
        (if (and new-x old-x)
          (assoc (dissoc data old-x)
            new-x
            (get data old-x))
          data)))))

(r/defcs editor
  <
  {:init init}
  r/reactive
  [s _]
  (let [{:keys [pos data selected]} (:opts s)
        p (r/react pos)
        d (r/react data)
        p* (fn [] (if @selected (nth (sort (keys @data)) @selected) p))]
    [:div.tlbchart
     (ms/multislider
       {:points (vec (sort (map key d)))
        :on-change #(swap! data xdata-change %)
        :on-drag #(swap! data xdata-change %)
        :on-select #(reset! selected %)
        :height 100
        :width 500})
     (bc/barchart-editor
       {:points (interpolate-points d (p*))
        :on-change (fn [ps] (swap! data assoc (p*) ps))
        :width 500
        :height 150})
     (ms/multislider
       {:points [(p*)]
        :on-change #(reset! pos (first %))
        :on-select #(reset! selected nil)
        :on-drag #(reset! pos (first %))
        :height 100
        :width 500})]))

(r/mount
  (editor {:pos 0.5 :data sample})
  (.getElementById js/document "app"))

