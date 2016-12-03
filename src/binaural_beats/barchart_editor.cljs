(ns binaural-beats.barchart-editor
  (:require [binaural-beats.utils :refer [d3 js>] :as u]
            [reagent.core :as r]))

;; handlers -------------------------------------------

(defn keydown [{:keys [state on-done]}]
  (println (.. d3 -event -keyCode))
  (let [c (count (:points @state))]
    (when-let [i (:selected @state)]
      (condp = (.. d3 -event -keyCode)
        8 (println "delete")
        39 (println "right")
        37 (println "left")
        nil))))

(defn mouse-upd [{:keys [svg height bar-width styles] :as opts}]
  (let [[x y] (js->clj (.mouse d3 (.node svg)))]
    (assoc-in opts
              [:points (js/Math.floor (/ x bar-width))]
              ((u/bounder 0 1) (/ (+ (- height y)
                                     (get-in styles [:bars :margin]))
                                  height)))))

;; styles -------------------------------------------------------------

(def default-styles
  {:bars {:attrs {:fill "white"
                  :opacity "0.3"
                  :stroke "white"
                  :stroke-width "3px"}
          :margin 20}
   :svg {:styles {:background "pink"
                  :border "2px solid white"
                  :border-radius "3px"}
         :attrs {:class "barchart-svg"}}})

;; draw ---------------------------------------------------------------

(defn init [{:keys [node points width height styles]}]

  (.. d3 (select node) (select ".barchart-svg") remove)

  (let [styles (u/merge-in default-styles styles)
        svg (.. d3
                (select node)
                (append "svg")
                (attr "width" width)
                (attr "height" height)
                (call #(u/a&s % (:svg styles))))]
    {:svg svg
     :g (.append svg "g")
     :styles styles
     :node node
     :points @points
     :width width
     :height height
     :bar-width (/ (- width (get-in styles [:bars :margin])) (count @points))
     :dragged (atom false)
     :selected (atom nil)
     :sync-fn (fn [{ps :points}]
                (println "before sync: " @points)
                (reset! points ps)
                (println "after sync: " @points))}))

(defn upd [{:keys [g svg points width height bar-width dragged sync-fn styles] :as opts}]

  (let [bars (.. g
                 (selectAll "rect")
                 (data (js> (map-indexed vector points))))
        bars-margin (get-in styles [:bars :margin])]

    (.. bars
        (attr "class" "update"))

    (.. bars
        enter
        (append "rect")
        (attr "class" "enter")
        (attr "x" (fn [[i x]] (+ bars-margin (* bar-width i))))
        (attr "y" height)
        (attr "width" (- bar-width bars-margin))
        (attr "fill" "grey")
        (call #(u/a&s % (:bars styles)))

        (merge bars)
        (attr "height" (fn [[i x]] (* height x)))
        (attr "y" (fn [[i x]] (+ bars-margin (- height (* height x))))))

    (.. bars exit remove)

    (.. svg
        (on "mousedown"
            (fn []
              (reset! dragged true)
              (upd (mouse-upd opts))))
        (on "mouseup"
            (fn []
              (reset! dragged false)
              (sync-fn opts)))
        (on "mousemove"
            #(when @dragged (upd (mouse-upd opts)))))))

(defn bc [opts]
  (r/create-class
    {:reagent-render
     (fn []
       (println "render ")
       [:div.barchart-editor-wrap])
     :component-did-mount
     #(upd (init (assoc opts :node (r/dom-node %))))}))

(u/mount [bc {:width 800
              :height 200
              :points (r/atom [1 0.5 0.3 0.7 0.09 0.6 1])}]
         "app")
