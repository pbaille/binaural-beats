(ns editors.barchart
  (:require-macros [cljs.core.async.macros :refer [go-loop go]])
  (:require [utils.core :refer [d3 js>] :as u]
            [rum.core :as rum]
            [utils.rum-mixins :as mixins]
            [cljs.core.async :as async]))

;; helpers --------------------------------------------

(defn mouse-pos [svg]
  (js->clj (.mouse d3 (.node svg))))

(defn move-point-args [{:keys [svg bar-width bar-margin bar-max-height]}]
  (let [[x y] (mouse-pos svg)]
    [(js/Math.floor (/ x bar-width))
     ((u/bounder 0 1)
       (/ (+ (- bar-max-height y)
             bar-margin)
          bar-max-height))]))

(defn hover-tracker [{:keys [svg bar-width hover]}]
  (when-let [[x _] (mouse-pos svg)]
    (let [idx (js/Math.floor (/ x bar-width))]
      (when-not (= idx hover)
        idx))))

(defn- comparable-args [s]
  (update (first (:rum/args s))
          :points
          (fn [ps] (map (partial u/with-precision 2) ps))))

;; styles ----------------------------------------------

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

;; actions and notifs -----------------------------------

(def actions
  {:move-point
   (fn [s [idx value]]
     (assoc-in s [:points idx] value))
   :add-point
   (fn [s idx value]
     (if (> (:points-max-count s) (count (:points s)))
       (let [{:keys [width bar-margin points]} s
             bwidth (/ (- width bar-margin) (inc (count points)))]
         (-> s
             (update :points u/vinsert idx value)
             (assoc :bar-width bwidth)))
       s))
   :remove-point
   (fn [s idx]
     (if (< (:points-min-count s) (count (:points s)))
       (let [{:keys [width bar-margin points]} s
             bwidth (/ (- width bar-margin) (dec (count points)))]
         (-> s
             (update :points u/rem-idx idx)
             (assoc :bar-width bwidth)))
       s))
   :set-dragged
   (fn [s v] (assoc s :dragged v))
   :set-hover
   (fn [s v] (assoc s :hover v))
   :set-mouse-in
   (fn [s v] (assoc s :mouse-in v))})

(def notifications
  {:move-point (fn [s idx value] [:point-moved (:points s) idx value])
   :add-point (fn [s idx value] [:point-added (:points s) idx value])
   :remove-point (fn [s idx] [:point-removed (:points s) idx])
   :set-hover (fn [_ v] [:hover v])
   :set-dragged (fn [_ v] [:dragged v])
   :set-mouse-in (fn [_ v] [:mouse-in v])})

;; controls --------------------------------------------

(defn draw-button [{:keys [svg x y r on-click op]}]

  (let [g (.. svg
              (append "g")
              (attr "class" "controls"))]

    (.. g
        (append "circle")
        (attr "class" "control")
        (attr "cx" x)
        (attr "cy" y)
        (attr "r" r)
        (attr "fill" "white")
        (style "opacity" 0.7)
        (on "mousedown" on-click))

    (.. g
        (append "rect")
        (attr "class" "control")
        (attr "x" (- x (* 0.5 r)))
        (attr "y" (- y (* 0.1 r)))
        (attr "height" (* 0.2 r))
        (attr "width" r)
        (attr "fill" "pink")
        (on "mousedown" on-click))

    (when (= op :plus)
      (.. g
          (append "rect")
          (attr "class" "control")
          (attr "x" (- x (* 0.1 r)))
          (attr "y" (- y (* 0.5 r)))
          (attr "height" r)
          (attr "width" (* 0.2 r))
          (attr "fill" "pink")
          (on "mousedown" on-click)))))

(defn draw-controls [s]
  (let [{:keys [g
                svg
                points
                height
                bar-width
                styles
                bar-margin
                bar-max-height
                dispatch-sync]} @s]

    (.. svg (selectAll ".controls") remove)

    (when (and (not (:dragged @s))
               (:mouse-in @s))
      (let [[x y] (mouse-pos svg)
            between-ranges (take (inc (count points))
                                 (map (fn [[i [x y]]] [i (- x 10) (+ y 10)])
                                      (map-indexed vector
                                                   (partition 2 (reductions + 0 (cycle [bar-margin (- bar-width bar-margin)]))))))]
        (when-let [[idx min max] (and
                                   (< (/ height 4) y (* 0.75 height))
                                   (first (filter (fn [[_ l g]] (<= l x g)) between-ranges)))]
          (draw-button
            {:svg svg
             :g g
             :x (/ (+ min max) 2)
             :y (+ bar-margin (/ bar-max-height 2))
             :r 15
             :on-click #(dispatch-sync [:add-point idx 0.5])
             :op :plus}))

        (when (and (not (:dragged @s))
                   (> y (* 0.75 height)))
          (let [idx (js/Math.floor (/ x bar-width))]
            (draw-button
              {:svg svg
               :g g
               :x (+ (* idx bar-width) (/ bar-width 2) (/ bar-margin 2))
               :y (- height (/ bar-margin 2))
               :r 15
               :on-click #(dispatch-sync [:remove-point idx])
               :op :minus})))))))

;; lifecycle --------------------------------------------

(defn upd [s]

  (let [{:keys [g
                svg
                points
                height
                bar-width
                styles
                bar-margin
                bar-max-height
                dispatch-sync]} @s

        bars (.. g
                 (selectAll ".bar")
                 (data (js> (map-indexed vector points))))]

    (.. bars
        enter
        (append "rect")
        (attr "class" "bar")
        (attr "y" height)
        (attr "fill" "grey")
        (call #(u/a&s % (:bars styles)))

        (merge bars)
        (attr "x" (fn [[i x]] (+ bar-margin (* bar-width i))))
        (attr "width" (- bar-width bar-margin))
        (attr "height" (fn [[i x]] (* bar-max-height x)))
        (attr "y" (fn [[i x]] (+ bar-margin (- bar-max-height (* bar-max-height x)))))
        (on "mouseenter" (fn [[i _]] (dispatch-sync [:set-hover i])))
        (on "mouseleave" #(when-not (:dragged @s) (dispatch-sync [:set-hover nil])))
        (transition 30)
        (attr "opacity" (fn [_ i] (if (= i (:hover @s)) 0.6 0.2))))

    (.. bars exit remove)

    (draw-controls s)

    (.. svg
        (on "mousedown"
            #(dispatch-sync
               [:set-dragged true]
               [:set-hover (hover-tracker @s)]
               [:move-point (move-point-args @s)]))

        (on "mouseup"
            #(dispatch-sync [:set-dragged false]))

        (on "mousemove"
            #(if (:dragged @s)
               (dispatch-sync [:move-point (move-point-args @s)])
               (draw-controls s)))

        (on "mouseenter"
            #(dispatch-sync [:set-mouse-in true]))

        (on "mouseleave"
            #(dispatch-sync [:set-mouse-in false])))))

(defn init-internal-state [s]
  (swap! (:state s)
         assoc
         :dragged false
         :hover nil)
  s)

(defn take-args [s]
  (let [{:keys [points styles width height on-change]
         :or {on-change identity}}
        (first (:rum/args s))
        styles (u/merge-in default-styles styles)
        bar-margin (get-in styles [:bars :margin])]
    (swap! (:state s)
           assoc
           :styles styles
           :points points
           :width width
           :height height
           :bar-width (/ (- width bar-margin) (count points))
           :bar-margin bar-margin
           :bar-max-height (- height (* 2 bar-margin)))
    s))

(defn init-base-elements [s]
  (let [node (rum/dom-node s)

        svg (.. d3
                (select node)
                (append "svg"))

        g (.append svg "g")]

    (swap! (:state s)
           assoc
           :svg svg
           :node node
           :g g)
    s))

(defn apply-base-styles [s]
  (let [{:keys [svg width height styles]} @(:state s)]
    (.. svg
        (attr "width" width)
        (attr "height" height)
        (call #(u/a&s % (:svg styles))))
    s))

(defn draw [s]
  (upd (:state s))
  s)

(defn should-update [old-state new-state]
  (not= (comparable-args old-state)
        (comparable-args new-state)))

;; component -------------------------------------------

(rum/defc barchart-editor <
  (mixins/slave
    {:actions actions
     :notifications notifications
     ;:before #(println %2)
     :after #(upd %1)})
  {:should-update should-update
   :will-mount #(-> % take-args init-internal-state)
   :did-mount #(-> % init-base-elements apply-base-styles draw)
   :will-update #(-> % take-args apply-base-styles draw)}
  [opts]
  #_(println "barchart render")
  [:div.barchart-editor-wrap])

;; example ----------------------------------------------

(let [out-chan (async/chan)
      in-chan (async/chan)]
  (go-loop []
           (let [m (async/<! out-chan)]
             (println m)
             (recur)))

  (rum/mount (barchart-editor
               {:points [0 0.5 0.7 0.2]
                :points-max-count 6
                :points-min-count 2
                :on-change (fn [x] (println "on-change " x))
                :styles (simple-styles "white" "pink")
                :height 200
                :width 800
                :out-chan out-chan
                :in-chan in-chan})
             (.getElementById js/document "app")))

#_(rum/mount (barchart-editor {:points [0 0.5 0.7 0.2]
                               :on-change (fn [x] (println "on-change " x))
                               :styles (simple-styles "white" "pink")
                               :height 200
                               :width 800})
             (.getElementById js/document "app"))
