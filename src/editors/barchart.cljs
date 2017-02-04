(ns editors.barchart
  (:require-macros [cljs.core.async.macros :refer [go-loop go]])
  (:require [utils.core :refer [d3 js>] :as u]
            [rum.core :as rum]
            [utils.rum-mixins :as mixins]
            [cljs.core.async :as async]))

;; helpers --------------------------------------------

(defn mouse-pos [svg]
  (try (js->clj (.mouse d3 (.node svg)))
       (catch :default e [0 0])))

(defn move-point-args [{:keys [svg bar-width pads bar-max-height]}]
  (let [[x y] (mouse-pos svg)]
    [(js/Math.floor (/ x bar-width))
     ((u/bounder 0 1)
       (/ (+ (- bar-max-height y)
             (:top pads))
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

(defn- update-bar-width
  "little helper to update bar-width when points are deleted/inserted"
  [{:keys [width bar-margin points]
    {pt :top pb :bottom pi :inter pr :right pl :left} :pads :as s}]
  (assoc s :bar-width (/ (+ pi (- width (+ pl pr))) (inc (count points)))))

;; actions and notifs -----------------------------------

(def actions
  {:set-points
   (fn [s ps]
     (assoc s :points ps))

   :move-point
   (fn [s [idx value]]
     (assoc-in s [:points idx] value))

   :add-point
   (fn [s idx value]
     (if (> (:max-points-count s) (count (:points s)))
       (-> s (update :points u/vinsert idx value) update-bar-width)
       s))
   :remove-point
   (fn [s idx]
     (if (< (:min-points-count s) (count (:points s)))
       (-> s (update :points u/rem-idx idx) update-bar-width)
       s))
   :set-dragged
   (fn [s v] (assoc s :dragged v))
   :set-hover
   (fn [s v] (assoc s :hover v))
   :set-mouse-in
   (fn [s v] (assoc s :mouse-in v))})

(def notifications
  {:move-point (fn [s idx value] [:point-moved (:points s) idx value])
   :set-dragged (fn [s idx] [:set-dragged (:points s) idx])
   :add-point (fn [s idx value] [:point-added (:points s) idx value])
   :remove-point (fn [s idx] [:point-removed (:points s) idx])})

;; controls --------------------------------------------

(defn controls [s]
  (let [{:keys [g
                svg
                points
                bar-width
                pads
                bar-max-height
                dispatch-sync]} @s

        bar-controls (.. g
                         (selectAll ".bar-control")
                         (data (js> (map-indexed vector points))))

        control-btn-width (/ (- bar-width (:inter pads)) 3)]

    (when (and (not (:dragged @s))
               (:mouse-in @s))

      (.. bar-controls
          enter
          (append "g")
          (attr "class" "bar-control")
          (append "rect")
          (attr "class" "barchart-btn insert-left")
          (select (fn [] (this-as this (.-parentNode this))))
          (append "rect")
          (attr "class" "barchart-btn delete")
          (select (fn [] (this-as this (.-parentNode this))))
          (append "rect")
          (attr "class" "barchart-btn insert-right")
          (select (fn [] (this-as this (.-parentNode this))))

          (merge bar-controls)
          (select ".insert-left")
          (attr "x" (fn [[i x]] (+ (:left pads) (* bar-width i))))
          (attr "width" control-btn-width)
          (attr "height" 20)
          (attr "y" (fn [[i x]] (+ (:top pads) (- bar-max-height 20))))
          (on "mousedown" (fn [[i _]]
                            (dispatch-sync [:add-point i 0.5])
                            (.. d3 -event stopPropagation)))

          (select (fn [] (this-as this (.-parentNode this))))
          (select ".delete")
          (attr "x" (fn [[i x]] (+ control-btn-width (:left pads) (* bar-width i))))
          (attr "width" control-btn-width)
          (attr "height" 20)
          (attr "y" (fn [[i x]] (+ (:top pads) (- bar-max-height 20))))
          (on "mousedown" (fn [[i _]]
                            (dispatch-sync [:remove-point i])
                            (.. d3 -event stopPropagation)))

          (select (fn [] (this-as this (.-parentNode this))))
          (select ".insert-right")
          (attr "x" (fn [[i x]] (+ (* 2 control-btn-width) (:left pads) (* bar-width i))))
          (attr "width" control-btn-width)
          (attr "height" 20)
          (attr "y" (fn [[i x]] (+ (:top pads) (- bar-max-height 20))))
          (on "mousedown" (fn [[i _]]
                            (dispatch-sync [:add-point (inc i) 0.5])
                            (.. d3 -event stopPropagation))))

      (.. bar-controls exit remove))))

;; lifecycle --------------------------------------------

(defn upd [s]

  (let [{:keys [g
                svg
                points
                height
                bar-width
                pads
                bar-max-height
                dispatch-sync]} @s

        data* (js> (map-indexed vector points))

        bars (.. g
                 (selectAll ".bar")
                 (data (js> (map-indexed vector points))))]

    (.. bars
        enter
        (append "rect")
        (attr "class" "bar")
        (attr "y" height)

        (merge bars)
        (attr "x" (fn [[i x]] (+ (:left pads) (* bar-width i))))
        (attr "width" (- bar-width (:inter pads)))
        (attr "height" (fn [[i x]] (* bar-max-height x)))
        (attr "y" (fn [[i x]] (+ (:top pads) (- bar-max-height (* bar-max-height x)))))
        (classed "hover" (fn [[i _]] (= i (:hover @s))))
        (on "mouseenter" (fn [[i _]] (dispatch-sync [:set-hover i])))
        (on "mouseleave" #(when-not (:dragged @s) (dispatch-sync [:set-hover nil]))))

    (.. bars exit remove)

    (controls s)

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
               nil #_(draw-controls s)))

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

(def default-args
  {:on-change identity
   :max-points-count 100
   :min-points-count 1
   :pads {:top 4 :bottom 4 :right 4 :left 4 :inter 4}})

(defn take-args [s]
  (let [{:keys [points width height on-change max-points-count min-points-count]
         {pt :top pb :bottom pi :inter pr :right pl :left} :pads}
        (merge default-args (first (:rum/args s)))]
    (swap! (:state s)
           into
           (assoc (merge default-args (first (:rum/args s)))
             :bar-max-height (- height (+ pb pt))
             :bar-width (/ (+ pi (- width (+ pl pr))) (count points))))
    s))

(defn init-base-elements [s]
  (let [node (rum/dom-node s)

        svg (.. d3
                (select node)
                (append "svg"))

        g (.append svg "g")

        {:keys [width height]} @(:state s)]

    (.. svg
        (attr "width" width)
        (attr "height" height))

    (.. d3
        (select node)
        (style "height" (str height "px")))

    (swap! (:state s)
           assoc
           :svg svg
           :node node
           :g g)
    s))

(defn draw [s]
  (upd (:state s))
  s)

(defn should-update [old-state new-state]
  (not= (comparable-args old-state)
        (comparable-args new-state)))

;; component -------------------------------------------

(def base-styles
  [:svg {:background "#FAFAFA"}
   [:.bar {:fill "grey"
           :opacity 0.2
           :transition "opacity .5s, fill .5s"}
    [:&.hover {:opacity 0.6}]]
   [:.bar-control
    {:opacity 0
     :transition "all .5s"}
    [:&:hover {:opacity 1}]
    [:.insert-left
     :.insert-right
     {:fill "lightgrey"}]
    [:.delete
     {:fill "tomato"}]]])

(rum/defc barchart-editor <
  (mixins/slave
    {:actions actions
     :notifications notifications
     :after #(upd %1)})
  (mixins/styled base-styles)
  {:should-update should-update
   :will-mount #(-> % take-args init-internal-state)
   :did-mount #(-> % init-base-elements draw)
   :will-update #(-> % take-args draw)}
  [opts]
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
                :max-points-count 6
                :min-points-count 2
                :on-change (fn [x] (println "on-change " x))
                :height 200
                :width 400
                :pads {:top 20 :bottom 0 :left 12 :right 4 :inter 10}
                :out-chan out-chan
                :in-chan in-chan})
             (.getElementById js/document "app")))

#_(rum/mount (barchart-editor {:points [0 0.5 0.7 0.2]
                               :on-change (fn [x] (println "on-change " x))
                               :styles (simple-styles "white" "pink")
                               :height 200
                               :width 800})
             (.getElementById js/document "app"))
