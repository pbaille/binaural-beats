(ns editors.spline2
  (:require [rum.core :as rum]
            [utils.core :as u :refer [d3 js>]]
            cljsjs.d3))

;; helpers -----------------------------------------------------

(defn scaled-mouse-coords [{:keys [pad svg width height]}]
  (let [[x y] (js->clj (.mouse d3 (.node svg)))
        bound (u/bounder 0 1)]
    [(bound (/ (- x pad) (- width (* 2 pad))))
     (bound (- 1 (/ (- y pad) (- height (* 2 pad)))))]))

;; event handlers ---------------------------------------------------------

(defn mousemove [{:keys [pad dragged selected svg width height] :as opts}]
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

(defn mousedown [{:keys [selected dragged svg width height] :as opts}]
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
  (println (.. d3 -event -keyCode) "yop " @hover @selected)
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
            :stroke "lightgrey"
            :stroke-width 2
            :r 6}}
   :selected-point
   {:attrs {:fill "lightgrey"
            :stroke "grey"
            :stroke-width 2
            :r 7}}
   :svg
   {:styles {:border "2px solid grey"
             :border-radius :4px
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
            :stroke c2
            :stroke-width 2
            :r 6}}
   :selected-point
   {:attrs {:fill c2
            :stroke c1
            :stroke-width 2
            :r 7}}
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

(defn upd [{:keys [hover sync-fn path svg points pad width height styles selected dragged] :as opts}]
  (let [scaled-points (mapv (fn [[x y]]
                              [(+ pad (* x (- width (* 2 pad))))
                               (+ pad (* (- 1 y) (- height (* 2 pad))))])
                            points)
        line-points (as-> scaled-points ps
                          (conj ps [width (second (last ps))])
                          (cons [0 (second (first ps))] ps))

        circles (.. svg
                    (selectAll "circle")
                    (data (js> scaled-points) identity))]

    (.. path
        (datum (js> line-points))
        (attr "d" u/line))

    (.. circles
        enter
        (append "circle")
        (attr "cx" (fn [x i] (aget x 0)))
        (attr "cy" (fn [x] (aget x 1)))

        (merge circles)
        (on "mouseup"
            #(do (reset! dragged nil)
                 (sync-fn opts)
                 (upd opts)))

        (on "mousedown"
            #(do (reset! selected %2)
                 (reset! dragged %2)
                 (upd opts)))

        (call #(u/a&s %
                      (fn [d i]
                        (get styles
                             (if (= i @selected)
                               :selected-point
                               :points))))))

    (.. circles exit remove)

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

        (on "mousedown"
            #(when-let [new-opts (mousedown opts)]
               (upd new-opts))))

    (.. d3
        (select js/window)
        (on "keydown"
            #(when-let [new-opts (keydown opts)]
               (upd new-opts))))))

(defn initial-state [s]
  (let [{:keys [points styles width height] :as opts}
        (first (:rum/args s))
        styles (u/merge-in default-styles styles)
        pad (max (get-in styles [:points :attrs :r])
                 (get-in styles [:selected-point :attrs :r]))]
    (assoc s
      :opts
      {:styles styles
       :pad pad
       :points @points
       :width width
       :height height
       :dragged (atom false)
       :selected (atom nil)
       :hover (atom nil)
       :sync-fn #(do (println "sync-fn" @points (:points %)) (reset! points (:points %)))})))

(defn initial-setup [{{:keys [styles width height]} :opts :as s}]
  (let [node (rum/dom-node s)
        svg (.. d3
                (select node)
                (append "svg")
                (attr "width" width)
                (attr "height" height)
                (call #(u/a&s % (:svg styles))))
        path (.. svg
                 (append "path")
                 (attr "fill" "none")
                 (attr "class" "line")
                 (call #(u/a&s % (:lines styles))))
        s (-> s
              (assoc-in [:opts :svg] svg)
              (assoc-in [:opts :node] node)
              (assoc-in [:opts :path] path))]

    (upd (:opts s))
    s))

(defn sync-points [s]
  (println "sync")
  (let [ps @(:points (first (:rum/args s)))
        s (assoc-in s [:opts :points] ps)]
    (upd (:opts s))
    s))

(rum/defcs spline-editor <
  {:will-mount initial-state
   :did-mount initial-setup
   :did-update sync-points}
  rum/reactive
  [_ opts]
  (rum/react (:points opts))
  [:div.spline-editor-wrap])

(def ps (atom [[0 0] [0.5 0.2] [1 1]]))

(rum/mount
  (spline-editor
    {:points ps
     :styles (simple-styles "#24281A" "#FD6467" "#D5D5D3")
     :height 200
     :width 700})
  (.getElementById js/document "app"))