(ns editors.spline
  (:require [rum.core :as rum]
            [utils.core :as u :refer [d3 js>]]))

;; helpers -----------------------------------------------------

(defn scaled-mouse-coords [{:keys [pad svg width height]}]
  (let [[x y] (js->clj (.mouse d3 (.node svg)))
        bound (u/bounder 0 1)]
    [(bound (/ (- x pad) (- width (* 2 pad))))
     (bound (- 1 (/ (- y pad) (- height (* 2 pad)))))]))

;; event handlers ---------------------------------------------------------

(defn mousemove [{:keys [dragged selected] :as opts}]
  (when @dragged
    (let [scaled-point (scaled-mouse-coords opts)]
      (when-let [idx @selected]
        (let [opts (update opts
                           :points
                           (fn [ps]
                             (->> (assoc ps idx scaled-point)
                                  (sort-by first)
                                  vec)))
              idx (u/index-of (:points opts) scaled-point)]
          (reset! selected idx)
          (reset! dragged idx)
          opts)))))

(defn mousedown [{:keys [selected dragged] :as opts}]
  (when-not @dragged
    (let [scaled-point (scaled-mouse-coords opts)
          opts (update opts
                       :points
                       (fn [ps]
                         (->> (conj ps scaled-point)
                              (sort-by first)
                              vec)))
          idx (u/index-of (:points opts) scaled-point)]
      (reset! selected idx)
      (reset! dragged idx)
      opts)))

(defn keydown [{:keys [hover points selected] :as opts}]
  (let [c (count points)]
    (when-let [i (and @hover @selected)]
      (condp = (.. d3 -event -keyCode)

        8 (do (swap! selected
                     (fn [i]
                       (if (= (dec c) i)
                         (dec i)
                         i)))
              (update opts :points u/rem-idx i))

        39 (do (swap! selected (fn [x] (mod (inc x) c)))
               opts)

        37 (do (swap! selected (fn [x] (mod (dec x) c)))
               opts)
        nil))))

;; styles -----------------------------------------------------

(def default-styles
  {:points
   {:attrs {:fill "grey"
            :stroke "#FAFAFA"
            :stroke-width 2
            :r 6}
    :styles {:transition "all .5s"}}

   :selected-point
   {:attrs {:fill "#FAFAFA"
            :stroke "grey"
            :stroke-width 2
            :r 5}}

   :svg
   {:styles {:border "2px solid grey"
             :background :#FAFAFA}}

   :lines
   {:attrs {:stroke "grey"
            :stroke-width 2}}

   :background
   {:attrs {:stroke "none"
            :fill "transparent"
            :stroke-width 0}}})

(defn simple-styles [c1 c2 c3]
  {:points
   {:attrs {:fill c1
            :stroke c3
            :stroke-width 2
            :r 6}}

   :selected-point
   {:attrs {:fill c2
            :stroke c1
            :stroke-width 2
            :r 5}}

   :svg
   {:styles {:border (str "2px solid " c1)
             :border-radius :4px
             :background c3}}

   :lines
   {:attrs {:stroke c1
            :stroke-width 2}}

   :background
   {:attrs {:stroke "none"
            :fill "transparent"
            :stroke-width 0}}})

;; lifecycle --------------------------------------------------

(enable-console-print!)

(defn upd [{:keys [hover
                   selected
                   dragged
                   sync-fn
                   path
                   svg
                   points
                   pad
                   width
                   height
                   styles]
            :as opts}]

  (let [scaled-points
        (mapv (fn [[x y]]
                [(+ pad (* x (- width (* 2 pad))))
                 (+ pad (* (- 1 y) (- height (* 2 pad))))])
              points)

        line-points
        (as-> scaled-points ps
              (conj ps [width (second (last ps))])
              (cons [0 (second (first ps))] ps))

        circles
        (.. svg
            (selectAll "circle")
            (data (js> scaled-points)))]

    (.. path
        (datum (js> line-points))
        (attr "d" u/line))

    (.. circles exit remove)

    (.. circles
        enter
        (append "circle")
        (style "transition" "fill .5s, stroke .5s, r .5s")

        (merge circles)

        (attr "cx" (fn [x i] (aget x 0)))
        (attr "cy" (fn [x] (aget x 1)))
        (attrs #(if (= @selected %2)
                  (js> (get-in styles [:selected-point :attrs]))
                  (js> (get-in styles [:points :attrs]))))

        (on "mousedown"
            #(do (reset! selected %2)
                 (reset! dragged %2)
                 (.stopPropagation (.-event d3))
                 (upd opts))))

    (.. svg
        (on "mouseleave"
            #(do (reset! dragged nil)
                 (reset! hover nil)
                 (sync-fn opts)))

        (on "mouseenter"
            #(reset! hover true))

        (on "mousemove"
            #(when-let [new-opts (mousemove opts)]
               (upd new-opts)))

        (on "mouseup"
            #(do
               (reset! dragged nil)
               (sync-fn opts)
               (upd opts)))

        (on "mousedown"
            #(when-let [new-opts (mousedown opts)]
               (upd new-opts))))

    (when @hover
      (.. d3
          (select js/window)
          (on "keydown"
              #(when-let [new-opts (keydown opts)]
                   (upd new-opts)))))))

(defn format-args [s]
  (let [{:keys [points styles width height on-change] :as opts}
        (first (:rum/args s))
        styles (u/merge-in default-styles styles)
        pad (max (get-in styles [:points :attrs :r])
                 (get-in styles [:selected-point :attrs :r]))
        short-circuit (atom false)]
    (update s
            :opts
            assoc
            :styles styles
            :pad pad
            :points (vec (sort-by first points))
            :width width
            :height height
            :short-circuit short-circuit
            :sync-fn #(do (reset! short-circuit true) (on-change (:points %))))))

(defn init-internal-state [s]
  (update s
          :opts
          assoc
          :dragged (atom false)
          :selected (atom nil)
          :hover (atom nil)))

(defn init-base-elements [s]
  (let [node (rum/dom-node s)

        svg (.. d3
                (select node)
                (append "svg"))

        path (.. svg
                 (append "path")
                 (attr "fill" "none")
                 (attr "class" "line"))]
    (update s
            :opts
            assoc
            :svg svg
            :node node
            :path path)))

(defn apply-base-styles [{{:keys [svg width height styles]} :opts :as s}]
  (.. svg
      (attr "width" width)
      (attr "height" height)
      (call #(u/a&s % (:svg styles))))

  (.. svg
      (select "path")
      (call #(u/a&s % (:lines styles))))
  s)

(defn draw [s]
  (upd (:opts s))
  s)

(defn should-update [o _]
  (if @(get-in o [:opts :short-circuit])
    (reset! (get-in o [:opts :short-circuit]) false)
    true))

(rum/defc spline-editor <
  {:will-mount #(-> % format-args init-internal-state)
   :did-mount #(-> % init-base-elements apply-base-styles draw)
   :should-update should-update
   :will-update #(-> % format-args apply-base-styles draw)}
  [{:keys [points on-change width height styles] :as opts}]
  [:div.spline-editor-wrap])

(comment
  (rum/mount
    (spline-editor
      {:points [[0 1] [1 0]]
       ;:styles (simple-styles "#24281A" "#FD6467" "#D5D5D3")
       :on-change identity
       :height 200
       :width 700})
    (.getElementById js/document "app")))

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

(rum/defc spline-editor* <
  rum/reactive
  [{:keys [ranges points] :as opts}]
  (let [{:keys [>> <<]} (scale-tool {:in (rum/react ranges)
                                     :out {:x [0 1] :y [0 1]}})]
    (spline-editor
      (assoc opts
        :points (>> (rum/react points))
        :on-change #(reset! points (<< %))))))

(comment

  (def ps (atom [[0 10] [5 6] [9 1]]))
  (def rs (atom {:x [0 10] :y [0 10]}))

  (comment
    (swap! ps conj [1 1])
    (swap! rs assoc :y [0 30]))

  (rum/mount
    (spline-editor*
      {:ranges rs
       :points ps})
    (.getElementById js/document "app")))