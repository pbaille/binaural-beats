(ns editors.multislider
  (:require [utils.core :refer [d3 js>] :as u]
            [rum.core :as rum]))

(defn mouse-upd [{:keys [svg selected width pad] :as opts}]
  (when @selected
    (let [[x y] (js->clj (.mouse d3 (.node svg)))]
      (assoc-in opts
                [:points @selected]
                ((u/bounder 0 1)
                  (/ (- x pad) (- width (* 2 pad))))))))

#_(defn hover-tracker [{:keys [svg bar-width hover] :as opts}]
    (when-let [[x y] (js->clj (.mouse d3 (.node svg)))]
      (let [idx (js/Math.floor (/ x bar-width))]
        (when-not (= idx @hover)
          (reset! hover idx)))))

(defn keydown [{:keys [points selected] :as opts}]
  (println (.. d3 -event -keyCode))
  (let [c (count points)]
    (when-let [i @selected]
      (condp = (.. d3 -event -keyCode)

        8 (do (reset! selected (if (= (dec c) i)
                                 (dec i)
                                 i))
              (update opts :points u/rem-idx i))

        39 (do (swap! selected (fn [x] (mod (inc x) c)))
               opts)

        37 (do (swap! selected (fn [x] (mod (dec x) c)))
               opts)
        opts))))

;; styles -------------------------------------------------------------

(def default-styles
  {:points {:attrs {:fill "#70d233"
                    :stroke "grey"
                    :r 6
                    :stroke-width "2px"}}
   :selected-point {:attrs {:fill "#ff247f"
                            :stroke "grey"
                            :r 7
                            :stroke-width "2px"}}
   :line {:attrs {:fill "grey"
                  :height 2}
          :margin 14}
   :svg {:styles {:background "#dedede"
                  :border "none"
                  :border-radius :4px}
         :attrs {:class "multislider-svg"}}})

(defn simple-styles [c1 c2 c3]
  {:points {:attrs {:fill c1
                    :stroke c2}}
   :line {:attrs {:fill c2}}
   :svg {:styles {:background c3}}})

;; lifecycle -----------------------------------------------------------

(defn upd [{:keys [svg
                   points
                   line-height
                   width
                   dragged
                   sync-fn
                   styles
                   pad
                   hover
                   selected]
            :as opts}]

  (let [circles (.. svg
                    (selectAll "circle")
                    (data (js> (map-indexed vector points))))

        get-circle-styles (fn [idx]
                            (if (= idx @selected)
                              (:selected-point styles)
                              (:points styles)))]

    (.. circles
        enter
        (append "circle")
        (attr "cx" (fn [[i x]] (+ pad (* x (- width (* 2 pad))))))
        (attr "cy" (+ (/ line-height 2) pad))
        (call #(u/a&s % (:points styles)))

        (merge circles)
        (attr "cx" (fn [[i x]] (+ pad (* x (- width (* 2 pad))))))
        (on "mousedown" (fn [[i x]] (reset! selected i)))
        (each (fn [[i x]]
                (this-as this
                  (.. d3
                      (select this)
                      (call #(u/a&s % (get-circle-styles i))))))))

    (.. circles exit remove)

    (.. d3
        (select js/window)
        (on "keydown"
            #(let [opts (keydown opts)]
               (upd opts)
               (sync-fn opts))))

    (.. svg
        (on "mousedown"
            (fn []
              (.. svg (style "cursor" "none"))
              (if @selected
                (do (reset! dragged true)
                    (upd (mouse-upd opts)))
                (do (reset! selected (count points))
                    (reset! dragged true)
                    (upd (mouse-upd (update opts :points conj 0)))))))
        (on "mouseup"
            (fn []
              (reset! dragged false)
              (.. svg (style "cursor" "inherit"))
              (sync-fn opts)
              (upd opts)))
        (on "mousemove"
            (fn []
              (let [hover-changed? false #_(hover-tracker opts)]
                (cond
                  @dragged (upd (mouse-upd opts))
                  hover-changed? (upd opts)))))
        (on "mouseout"
            (fn []
              (reset! hover nil)
              (upd opts))))))

(defn initial-state [s]
  (let [{:keys [points styles width] :as opts}
        (first (:rum/args s))
        styles (u/merge-in default-styles styles)]
    (assoc s
      :opts
      {:styles styles
       :points @points
       :width width
       :line-height (-> styles :line :attrs :height)
       :pad (get-in styles [:line :margin])
       :dragged (atom false)
       :selected (atom nil)
       :hover (atom nil)
       :sync-fn #(reset! points (:points %))})))

(defn initial-setup
  [{{:keys [styles pad line-height width]} :opts :as s}]

  (let [node (rum/dom-node s)
        svg (.. d3
                (select node)
                (append "svg"))
        s (-> s
              (assoc-in [:opts :svg] svg)
              (assoc-in [:opts :node] node))]

    (.. svg
        (attr "width" width)
        (attr "height" (+ line-height (* 2 pad)))
        (call #(u/a&s % (:svg styles)))
        (append "rect")
        (attr "x" pad)
        (attr "y" pad)
        (attr "width" (- width (* 2 pad)))
        (call #(u/a&s % (:line styles))))

    (upd (:opts s))
    s))

(rum/defcs ms <
  (rum/local 0 ::selected)
  (rum/local false ::hover)
  (rum/local false ::dragged)
  {:will-mount initial-state
   :did-mount initial-setup
   :did-update (fn [s]
                 (let [ps @(:points (first (:rum/args s)))
                       s (assoc-in s [:opts :points] ps)]
                   (upd (:opts s))
                   s))}
  rum/reactive
  [state opts]
  (rum/react (:points opts))
  [:div.multislider-editor-wrap])

(def ps (atom [0 0.2 0.5 0.9 1]))

(comment (reset! ps [0 1]))


(rum/mount (let [dps (u/rwrap (fn [] (conj @ps 0.1))
                              {ps (fn [_ v] (vec (butlast v)))})]
             (ms
               {:points dps
                :height 100
                :width 800}))
           (.getElementById js/document "app"))

(comment
  (.. d3
      (select "#app")
      (append "div")
      (each (fn []))
      (style "padding" (fn [x] (println "in pad" x) "20px"))
      (style "background" "red")))
