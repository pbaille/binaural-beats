;; timeline barchart editor

(ns editors.tbchart
  (:require-macros [cljs.core.async.macros :refer [go-loop go]])
  (:require [cljs.core.async :as async :refer [chan >! <!]]
            [rum.core :as r]
            [editors.barchart :as bc]
            [editors.multislider :as ms]
            [editors.multislider :as ms2]
            [utils.core :as u]
            [utils.rum-mixins :as rm]
            [clojure.set :refer [superset? subset? difference]]))

(defn interpolate-points [data pos]
  #_(println "interpolate points" data)
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

(defn init [s]
  (let [ms1-in (chan)
        ms1-out (chan)
        ms2-in (chan)
        ms2-out (chan)
        bc-in (chan)
        bc-out (chan)
        pos* (atom (or (-> s :rum/args first :pos) 0))
        data* (-> s :rum/args first :data)
        _ (println "initial selection: " (or (-> s :rum/args first :selected) 0))
        selected* (atom (or (-> s :rum/args first :selected) 0))
        s (update s
                  :opts
                  assoc
                  :pos pos*
                  :data data*
                  :selected selected*
                  :ms1-chans {:in ms1-in :out ms1-out}
                  :ms2-chans {:in ms2-in :out ms2-out}
                  :bc-chans {:in bc-in :out bc-out})]

    ;; hooking subcomponents together

    (go-loop []
             (let [[v & [a1 a2 a3 :as args] :as m] (<! ms1-out)]
               (println "ms1: " m)
               (condp = v
                 :selected-point
                 (do (reset! selected* a2)
                     (>! ms2-in [[:blur]
                                 [:move-point 0 (get a1 a2)]]))

                 :added-point
                 (swap! data* (fn [d] (conj d [a2 (interpolate-points d a2)])))

                 :removed-point
                 (swap! data* u/rem-idx a2)

                 :dragged-point
                 (do (swap! data* assoc-in [a2 0] a3)
                     (>! ms2-in [[:move-point 0 (get a1 a2)]]))

                 nil)
               (recur)))

    (go-loop []
             (let [[v & [a1 a2 a3 :as args] :as m] (<! ms2-out)]
               (println "ms2: " m)
               (condp = v
                 ;when ms2 selection, unselect ms1
                 :selected-point
                 (>! ms1-in [[:blur]])

                 ;when ms2 moved,
                 :dragged-point
                 (do (reset! selected* nil)
                     (reset! pos* a3)
                     (>! bc-in [[:set-points (interpolate-points @data* @pos*)]]))

                 :moved-point
                 (do (reset! pos* a3)
                     (>! bc-in [[:set-points (interpolate-points @data* @pos*)]]))

                 nil)
               (recur)))

    (go-loop []
             (let [[v & [a1 a2 a3 :as args] :as m] (<! bc-out)]
               (println "bc: " m)
               (condp = v

                 :point-added
                 (swap! data* (fn [d] (mapv (fn [[k v]] [k (u/vinsert v a2 a3)]) d)))

                 :point-removed
                 (swap! data* (fn [d] (mapv (fn [[k v]] [k (u/rem-idx v a2)]) d)))

                 :set-dragged
                 (when-not a2
                   (if @selected*
                     (swap! data* assoc-in [@selected* 1] a1)
                     (do
                       ;; add new data point
                       (swap! data* conj [@pos* a1])
                       ;; select new data point
                       (reset! selected* (u/index-of (map first @data*) @pos*)))))
                 nil)
               (recur)))
    s))

(def ms-styles
  (let [white* "rgba(255,255,255,.7)"
        base {:line {:attrs {:fill "rgba(255,255,255,.5)"}
                     :margin 10}
              :selected-point {:attrs {:fill "pink"
                                       :stroke "white"
                                       :r 6}}
              :points {:attrs {:fill "pink"
                               :stroke white*}}
              :svg {:styles {:background "pink"}}}]
    {:top (assoc-in base [:svg :styles :border-radius] "4px 4px 0 0")
     :bottom (assoc-in base [:svg :styles :border-radius] "0 0 4px 4px")}))

(def styles
  [:.tlbchart
   {:background :blue}])

(r/defcs editor <
  r/reactive
  (rm/styled styles)
  {:init init}
  [s {:keys [width height data]}]
  (let [{:keys [pos ms1-chans ms2-chans bc-chans]} (:opts s)
        p (r/react pos)
        d (r/react data)]
    [:div.tlbchart
     (ms2/multislider
       {:points (mapv key d)
        :in-chan (:in ms1-chans)
        :out-chan (:out ms1-chans)
        :width width})
     (bc/barchart-editor
       {:points (interpolate-points d p)
        :in-chan (:in bc-chans)
        :out-chan (:out bc-chans)
        :pads {:top 0 :bottom 0 :right 10 :left 10 :inter 10}
        :width width
        :height 150})
     (ms2/multislider
       {:points [p]
        :in-chan (:in ms2-chans)
        :out-chan (:out ms2-chans)
        :max-points-count 1
        :width width})]))

;; test --------------------------------------------------------------

(do (.clear js/console)
    (r/mount
      (editor {:data (atom [[0 [1 0 0 0]] [1 [1 0 0 0]]])
               :width 800
               :height 300})
      (.getElementById js/document "app")))
