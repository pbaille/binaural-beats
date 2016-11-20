(ns binaural-beats.spline-editor
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [reagent.core :as r :refer [atom]]
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
      8 (swap! points rem-idx i) ;delete pressed
      nil)
    (on-done)))

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

(defn redraw [this state]
  (println "redraw")
  (let [{:keys [points width]} (r/props this)
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
                            (redraw this state))
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
        (on "mousedown" circle-mouse-down))

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

(defn init [this state]
  (let [{:keys [width height points]} (r/props this)
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
                                     :on-done (fn [] (redraw this state))})))

    (.. svg
        (append "path")
        (datum (js> (map (juxt :x :y) @points)))
        (attr "d" line)
        (attr "stroke" "black")
        (attr "fill" "none")
        (attr "class" "line"))

    (.. d3
        (select js/window)
        (on "mousemove" #(mousemove {:svg svg
                                     :points points
                                     :width width
                                     :height height
                                     :state state
                                     :on-done (fn [] (redraw this state))}))
        (on "mouseup" #(swap! state assoc :dragged nil))
        (on "keydown" #(keydown {:points points
                                 :state state
                                 :on-done (fn [] (redraw this state))})))

    (redraw this state)))

(defn spline-editor [{:keys [points width height]}]
  (let [state (atom {:dragged nil
                     :selected 0})]
    (r/create-class
      {:reagent-render
       (fn [] [:div])
       :component-did-mount #(init % state)})))
