(ns editors.barchart
  (:require-macros [cljs.core.async.macros :refer [go-loop go]])
  (:require [utils.core :refer [d3 js>] :as u]
            [rum.core :as rum]
            [utils.rum-mixins :as mixins]
            [cljs.core.async :as async]))

;; helpers --------------------------------------------

(defn move-point-args [{:keys [svg bar-width bar-margin bar-max-height]}]
  (let [[x y] (js->clj (.mouse d3 (.node svg)))]
    [(js/Math.floor (/ x bar-width))
     ((u/bounder 0 1)
       (/ (+ (- bar-max-height y)
             bar-margin)
          bar-max-height))]))

(defn hover-tracker [{:keys [svg bar-width hover]}]
  (when-let [[x _] (js->clj (.mouse d3 (.node svg)))]
    (let [idx (js/Math.floor (/ x bar-width))]
      (when-not (= idx hover)
        idx))))

(defn- comparable-args [s]
  (dissoc (update (first (:rum/args s))
                  :points
                  (fn [ps] (map (partial u/with-precision 2) ps)))
          :dispatch
          :dispatch-sync
          :notify
          :in-chan
          :out-chan))

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
   :set-dragged
   (fn [s v] (assoc s :dragged v))
   :set-hover
   (fn [s v] (assoc s :hover v))})

(def notifications
  {:move-point (fn [s idx value] [:point-moved (:points s) idx value])
   :set-hover (fn [_ v] [:hover v])
   :set-dragged (fn [_ v] [:dragged v])})

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
                 (selectAll "rect")
                 (data (js> (map-indexed vector points))))]

    (.. bars
        enter
        (append "rect")
        (attr "y" height)
        (attr "fill" "grey")
        (call #(u/a&s % (:bars styles)))

        (merge bars)
        (attr "x" (fn [[i x]] (+ bar-margin (* bar-width i))))
        (attr "width" (- bar-width bar-margin))
        (attr "height" (fn [[i x]] (* bar-max-height x)))
        (attr "y" (fn [[i x]] (+ bar-margin (- bar-max-height (* bar-max-height x)))))
        (transition 30)
        (attr "opacity" (fn [_ i] (if (= i (:hover @s)) 0.6 0.2))))

    (.. bars exit remove)

    (.. svg
        (on "mousedown"
            #(dispatch-sync
               [:set-dragged true]
               [:move-point (move-point-args @s)]))

        (on "mouseup"
            #(dispatch-sync [:set-dragged false]))

        (on "mousemove"
            (fn []
              (let [new-idx (hover-tracker @s)]
                (cond
                  (:dragged @s) (dispatch-sync [:move-point (move-point-args @s)])
                  new-idx (dispatch-sync [:set-hover new-idx])))))

        (on "mouseout"
            #(dispatch-sync [:set-hover nil])))))

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

;; exemple ----------------------------------------------

(let [out-chan (async/chan)
      in-chan (async/chan)]
  (go-loop []
           (let [m (async/<! out-chan)]
             (println m)
             (recur)))

  (rum/mount (barchart-editor
               {:points [0 0.5 0.7 0.2]
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
