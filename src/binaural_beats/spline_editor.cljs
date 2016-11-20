(ns binaural-beats.spline-editor
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [reagent.core :as r :refer [atom]]
            [binaural-beats.utils :as u]
            cljsjs.d3))

(def d3 js/d3)
(def js> clj->js)
(defn log [& xs] (apply js/console.log xs))

(defn index-of [coll value]
  (some (fn [[idx item]] (if (= value item) idx))
        (map-indexed vector coll)))

(defn bounder [min max]
  (fn [x]
    (cond
      (< x min) min
      (> x max) max
      :else x)))

(def line (.line js/d3))

(defn- rem-idx [v idx]
  (vec (concat (subvec v 0 idx) (subvec v (inc idx)))))

(defn keydown [{:keys [points state on-done]}]
  (when-let [i (:selected @state)]
    (condp = (.. d3 -event -keyCode)
      8 (do (swap! points rem-idx i)
            (on-done)) ;delete pressed
      nil)))

(defn mousemove [{:keys [points state svg width height on-done]}]
  (when (and (:dragged @state) (:selected @state))
    (let [m (.mouse d3 (.node svg))
          mx ((bounder 0 width) (aget m 0))
          my ((bounder 0 height) (aget m 1))
          idx (:selected @state)]

      (when idx
        (swap! points
               (fn [pts]
                 (->> (update pts
                              idx
                              assoc
                              :y my
                              :x mx)
                      (sort-by :x)
                      vec)))
        (swap! state assoc :selected (index-of @points {:x mx :y my}))
        (on-done)))))

(defn mousedown [{:keys [points svg state on-done]}]
  (when-let [[x y] (js->clj (.mouse d3 (.node svg)))]
    (swap! points
           (fn [pts]
             (vec (sort-by :x (conj pts {:x x :y y})))))
    (swap! state
           assoc
           :selected (index-of @points {:x x :y y})
           :dragged true)
    (on-done)))

(defn redraw [this state scaled-points last-mousedown]

  (let [{:keys [width]} (r/props this)

        points scaled-points

        svg (.. d3
                (select (r/dom-node this))
                (select "svg"))

        circles (.. svg
                    (selectAll "circle")
                    (data (js> (map (juxt :x :y) @points)) identity))

        circle-mouse-down (fn [d idx]
                            (swap! state
                                   assoc
                                   :selected idx
                                   :dragged true)
                            (reset! last-mousedown (u/now))
                            (redraw this state points last-mousedown))

        circle-mouseup (fn [d i]
                         (when (< (- (u/now) @last-mousedown) 150)
                           (swap! points rem-idx i)
                           (swap! state assoc :selected nil :dragged nil)
                           (redraw this state points last-mousedown)))

        path-datum (js> (map (juxt :x :y)
                             (cons {:x 0 :y (-> @points first :y)}
                                   (conj (vec @points)
                                         {:x width :y (-> @points last :y)}))))

        circle-selected? (fn [[x y]]
                           (= {:x x :y y}
                              (get-in @state [:points (:selected @state)])))]

    (.. svg
        (select "path")
        (datum path-datum)
        (attr "fill" "none")
        (attr "d" line))

    (.. circles
        (classed "selected" circle-selected?)
        (on "mousedown" circle-mouse-down)
        (on "mouseup" circle-mouseup))

    (.. circles
        enter
        (append "circle")
        (on "mousedown" circle-mouse-down)
        (attr "r" 5)
        (attr "cx" (fn [x] (aget x 0)))
        (attr "cy" (fn [x] (aget x 1))))

    (.. circles exit remove)

    (when-let [e (.-event d3)]
      (.preventDefault e)
      (.stopPropagation e))))

(defn init [this state scaled-points]

  (.. d3
      (select (r/dom-node this))
      (select "svg")
      remove)

  (let [{:keys [width height]} (r/props this)
        points scaled-points
        last-mousedown (atom (u/now))
        redraw #(redraw this state points last-mousedown)
        svg (.. d3
                (select (r/dom-node this))
                (append "svg")
                (attr "width" width)
                (attr "height" height)
                (attr "tabindex" 1))]
    (.. svg
        (append "rect")
        (attr "width" width)
        (attr "height" height)
        (attr "stroke" "black")
        (attr "fill" "white")
        (on "mousedown" #(mousedown {:svg svg
                                     :points points
                                     :state state
                                     :on-done (fn []
                                                (reset! last-mousedown (u/now))
                                                (redraw))})))

    (.. svg
        (append "path")
        (datum (js> (map (juxt :x :y) @points)))
        (attr "d" line)
        (attr "stroke" "black")
        (attr "fill" "none")
        (attr "class" "line"))

    (.. d3
        (select (r/dom-node this))
        (on "mousemove" #(mousemove {:svg svg
                                     :points points
                                     :width width
                                     :height height
                                     :state state
                                     :on-done redraw}))
        (on "mouseup" #(swap! state assoc :dragged nil :selected nil)))

    (redraw)))

(defn points-viewer [p sp]
  [:div.points
   [:div "scaled" (pr-str @sp)]
   [:div "points" (pr-str @p)]])

(defn spline-editor [_]
  (let [state (atom {:dragged nil
                     :selected 0})
        scaled-points (fn [{:keys [points width height]
                            {[minx maxx] :x [miny maxy] :y} :ranges}]
                        (r/wrap (mapv (fn [{:keys [x y]}]
                                        {:x (u/scale-range x minx maxx 0 width)
                                         :y (u/scale-range y maxy miny 0 height)})
                                      @points)
                                #(reset! points
                                         (mapv (fn [{:keys [x y]}]
                                                 {:x (u/scale-range x 0 width minx maxx)
                                                  :y (u/scale-range y 0 height maxy miny)})
                                               %))))]
    (r/create-class
      {:reagent-render (fn [] [:div])
       :component-did-update #(init % state (scaled-points (r/props %)))
       :component-did-mount #(init % state (scaled-points (r/props %)))})))
