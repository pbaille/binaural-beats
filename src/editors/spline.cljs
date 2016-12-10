(ns editors.spline
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [reagent.core :as r :refer [atom]]
            [utils.core :as u :refer [d3 js>]]))

;; event handlers ---------------------------------------------------------

(defn mousemove [{:keys [padding state svg width height on-done]}]
  (when (and (:dragged @state) #_(:selected @state))
    (let [m (.mouse d3 (.node svg))
          mx ((u/bounder padding (+ padding width)) (aget m 0))
          my ((u/bounder padding (+ padding height)) (aget m 1))
          idx (:selected @state)]

      (when idx
        (swap! state
               update
               :points
               (fn [pts]
                 (->> (assoc pts idx [mx my])
                      (sort-by first)
                      vec)))
        (on-done)))))

(defn mousedown [{:keys [svg state on-done]}]
  (when-let [[x y] (js->clj (.mouse d3 (.node svg)))]
    (println "mousedown" (u/index-of (:points @state) [x y]) [x y] (:points @state))
    (swap! state
           #(as-> % s
                  (update
                    s
                    :points
                    (fn [ps] (vec (sort-by first (conj ps [x y])))))
                  (assoc
                    s
                    :selected (u/index-of (:points s) [x y])
                    :dragged true)))
    (on-done)))

(defn keydown [{:keys [state on-done]}]
  (println (.. d3 -event -keyCode))
  (let [c (count (:points @state))]
    (when-let [i (:selected @state)]
      (condp = (.. d3 -event -keyCode)

        8 (do (swap! state
                     #(-> %
                          (update :points u/rem-idx i)
                          (update :selected (fn [i]
                                              (if (= (dec c) i)
                                                (dec i)
                                                i)))))
              (on-done)) ;delete pressed

        39 (do (swap! state
                      update
                      :selected
                      (fn [x] (mod (inc x) c)))
               (on-done))

        37 (do (swap! state
                      update
                      :selected
                      (fn [x] (mod (dec x) c)))
               (on-done))
        nil))))

;; styles -----------------------------------------------------

(def default-styles
  {:points {:fill "grey"
            :stroke "lightgrey"
            :stroke-width 2
            :r 6}
   :selected-point {:fill "lightgrey"
                    :stroke "grey"
                    :stroke-width 2
                    :r 7}
   :svg {:border "2px solid grey"
         :border-radius :4px
         :background :#FAFAFA}
   :lines {:stroke "grey"
           :stroke-width 2}
   :background {:stroke "none"
                :fill "transparent"
                :stroke-width 0}})

(defn simple-styles [c1 c2 c3]
  {:points {:fill c1
            :stroke c2
            :stroke-width 2
            :r 6}
   :selected-point {:fill c2
                    :stroke c1
                    :stroke-width 2
                    :r 7}
   :svg {:border (str "2px solid " c1)
         :border-radius :4px
         :background c3}
   :lines {:stroke c1
           :stroke-width 2}
   :background {:stroke "none"
                :fill "transparent"
                :stroke-width 0}})

(defn merged-with-defaults [s]
  (into {}
        (map (fn [[k v]]
               [k (merge v (get s k))])
             default-styles)))

;; lifecycle --------------------------------------------------

(defn redraw [{:keys [this state sync-fn] :as opts}]

  (let [points (:points @state)

        {:keys [width style]} (r/props this)

        padding (:padding style 0)

        svg (.. d3
                (select (r/dom-node this))
                (select "svg"))

        circles (.. svg
                    (selectAll "circle")
                    (data (js> points) identity))

        {path-styles :lines
         circles-styles :points
         selected-styles :selected-point} (merged-with-defaults style)

        get-circle-styles (fn [idx]
                            (if (= idx (:selected @state))
                              selected-styles
                              circles-styles))

        circle-mouse-down (fn [d idx]
                            (swap! state
                                   assoc
                                   :selected idx
                                   :dragged true)
                            (redraw opts))

        circle-mouseup (fn [d i]
                         (swap! state assoc :dragged nil)
                         (sync-fn))

        path-datum (js> (cons [0 (-> points first second)]
                              (conj (vec points)
                                    [(+ (* 2 padding) width) (-> points last second)])))

        circle-selected? (fn [d i]
                           (= i (:selected @state)))

        path (.. svg (select "path"))]

    (.. path
        (datum path-datum)
        (attr "d" u/line))

    (u/attrs path path-styles)

    (.. circles
        (classed "selected" circle-selected?)
        (on "mousedown" circle-mouse-down)
        (on "mouseup" circle-mouseup))

    (.. circles
        enter
        (append "circle")
        (on "mousedown" circle-mouse-down)
        (attr "cx" (fn [x i] (println "enter " i) (aget x 0)))
        (attr "cy" (fn [x] (aget x 1))))

    (.. circles exit remove)

    (.. svg
        (selectAll "circle")
        (transition 500)
        (attr "r" (fn [d i] (:r (get-circle-styles i))))
        (attr "fill" (fn [d i] (:fill (get-circle-styles i))))
        (attr "stroke" (fn [d i] (:stroke (get-circle-styles i))))
        (attr "stroke-width" (fn [d i] (:stroke-width (get-circle-styles i)))))

    (when-let [e (.-event d3)]
      (.preventDefault e)
      (.stopPropagation e))))

(defn init [{:keys [this state sync-fn]}]

  (let [{:keys [width height style]} (r/props this)
        points (:points @state)
        redraw #(redraw {:this this
                         :state state
                         :sync-fn sync-fn})

        svg (.. d3
                (select (r/dom-node this))
                (select "svg"))]

    (u/styles svg (:svg (merged-with-defaults style)))

    (.. svg
        (on "mousedown" #(mousedown {:svg svg
                                     :state state
                                     :on-done redraw})))

    (.. svg
        (append "path")
        (datum (js> (map (juxt :x :y) points)))
        (attr "d" u/line)
        (attr "fill" "none")
        (attr "class" "line"))

    (.. d3
        (select js/window)
        (on "keydown"
            #(keydown {:points points
                       :on-done redraw
                       :state state})))

    (.. d3
        (select (r/dom-node this))
        (select "svg")
        (on "mousemove"
            #(mousemove {:svg svg
                         :width width
                         :height height
                         :padding (:padding style 0)
                         :state state
                         :on-done redraw}))
        (on "mouseup"
            #(do (swap! state assoc :dragged nil)
                 (sync-fn))))

    (redraw)))

;; component --------------------------------------------------------

(defn spline-editor [{:keys [width height style ranges points]}]
  (let [padding (:padding style 0)
        scale-points (fn [{[minx maxx] :x [miny maxy] :y} points]
                       (mapv (fn [[x y]]
                               [(u/scale-range x minx maxx padding (+ padding width))
                                (u/scale-range y maxy miny padding (+ padding height))])
                             points))

        state (cljs.core/atom
                {:dragged nil
                 :selected 0
                 :points (scale-points ranges @points)})

        sync-points (fn [{[minx maxx] :x [miny maxy] :y} ps]
                      (reset! ps
                              (mapv (fn [[x y]]
                                      [(u/scale-range x padding (+ padding width) minx maxx)
                                       (u/scale-range y padding (+ padding height) maxy miny)])
                                    (:points @state))))]
    (r/create-class
      {:reagent-render (fn []
                         [:div.spline-editor-wrap
                          [:svg {:width (+ (* 2 (:padding style 0)) width)
                                 :height (+ (* 2 (:padding style 0)) height)}]])
       :component-did-update
       (fn [this]
         (let [{rs :ranges ps :points} (r/props this)]
           (swap! state assoc :points (scale-points rs @ps))
           (init {:this this
                  :state state
                  :sync-fn (partial sync-points rs ps)})))
       :component-did-mount
       (fn [this]
         (let [{rs :ranges ps :points} (r/props this)]
           (init {:this this
                  :state state
                  :sync-fn (partial sync-points rs ps)})))})))
