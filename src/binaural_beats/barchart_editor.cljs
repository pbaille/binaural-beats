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

(defn mouse-upd [{:keys [svg bar-width bar-margin bar-max-height] :as opts}]
  (let [[x y] (js->clj (.mouse d3 (.node svg)))]
    (assoc-in opts
              [:points (js/Math.floor (/ x bar-width))]
              ((u/bounder 0 1)
                (/ (+ (- bar-max-height y)
                      bar-margin)
                   bar-max-height)))))

(defn hover-tracker [{:keys [svg bar-width hover] :as opts}]
  (when-let [[x y] (js->clj (.mouse d3 (.node svg)))]
    (let [idx (js/Math.floor (/ x bar-width))]
      (when-not (= idx @hover)
        (reset! hover idx)))))

;; styles -------------------------------------------------------------

(def default-styles
  {:bars {:attrs {:fill "white"
                  :opacity "0.3"
                  :stroke "white"
                  :stroke-width "2px"}
          :margin 10}
   :svg {:styles {:background "pink"
                  :border "2px solid white"
                  :border-radius :4px}
         :attrs {:class "barchart-svg"}}})

(defn simple-styles [c1 c2]
  {:bars {:attrs {:fill c1
                  :stroke c2}}
   :svg {:styles {:background c2
                  :border (str "2px solid " c1)}}})

;; draw ---------------------------------------------------------------

(defn init [{:keys [node points width height styles]}]

  (.. d3 (select node) (select ".barchart-svg") remove)

  (let [styles (u/merge-in default-styles styles)
        svg (.. d3
                (select node)
                (append "svg")
                (attr "width" width)
                (attr "height" height)
                (call #(u/a&s % (:svg styles))))
        bar-margin (get-in styles [:bars :margin])]
    {:svg svg
     :g (.append svg "g")
     :styles styles
     :node node
     :points @points
     :width width
     :height height
     :bar-width (/ (- width bar-margin) (count @points))
     :bar-margin bar-margin
     :bar-max-height (- height (* 2 bar-margin))
     :dragged (atom false)
     :hover (atom nil)
     :sync-fn (fn [{ps :points}]
                (reset! points ps))}))

(defn upd [{:keys [g
                   svg
                   points
                   height
                   bar-width
                   dragged
                   sync-fn
                   styles
                   bar-margin
                   bar-max-height
                   hover]
            :as opts}]

  (let [bars (.. g
                 (selectAll "rect")
                 (data (js> (map-indexed vector points))))]

    (.. bars
        enter
        (append "rect")
        (attr "x" (fn [[i x]] (+ bar-margin (* bar-width i))))
        (attr "y" height)
        (attr "width" (- bar-width bar-margin))
        (attr "fill" "grey")
        (call #(u/a&s % (:bars styles)))

        (merge bars)
        (attr "height" (fn [[i x]] (* bar-max-height x)))
        (attr "y" (fn [[i x]] (+ bar-margin (- bar-max-height (* bar-max-height x)))))
        (transition 30)
        (attr "opacity" (fn [_ i] (if (= i @hover) 0.6 0.2))))

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
            (fn []
              (let [hover-changed? (hover-tracker opts)]
                (cond
                  @dragged (upd (mouse-upd opts))
                  hover-changed? (upd opts)))))
        (on "mouseout"
            (fn []
              (reset! hover nil)
              (upd opts))))))

(defn barchart-editor [opts]
  (let [refresh #(upd (init (assoc (r/props %) :node (r/dom-node %))))]
    (r/create-class
      {:reagent-render
       (fn []
         [:div.barchart-editor-wrap])
       :component-did-update refresh
       :component-did-mount refresh})))

