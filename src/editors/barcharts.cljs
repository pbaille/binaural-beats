(ns editors.barcharts
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [utils.core :refer [d3 js>] :as u]
            [reagent.core :as r]
            [rum.core :as rum]))

;; handlers -------------------------------------------

(defn mouse-upd [{:keys [svg bar-width bar-margin bar-max-height] :as opts}]
  (let [[x y] (js->clj (.mouse d3 (.node svg)))]
    (assoc-in opts
              [:points (js/Math.floor (/ x bar-width))]
              ((u/bounder 0 1)
                (/ (+ (- bar-max-height y)
                      bar-margin)
                   bar-max-height)))))

(defn hover-tracker [{:keys [svg bar-width hover] :as opts}]
  (when-let [[x _] (js->clj (.mouse d3 (.node svg)))]
    (let [idx (js/Math.floor (/ x bar-width))]
      (when-not (= idx @hover)
        (reset! hover idx)))))

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

;; lifecycle --------------------------------------------

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
        (attr "y" height)
        (attr "fill" "grey")
        (call #(u/a&s % (:bars styles)))

        (merge bars)
        (attr "x" (fn [[i x]] (+ bar-margin (* bar-width i))))
        (attr "width" (- bar-width bar-margin))
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

(defn initial-state [s]
  (let [{:keys [points styles width height] :as opts}
        (first (:rum/args s))
        styles (u/merge-in default-styles styles)
        bar-margin (get-in styles [:bars :margin])]
    (assoc s
      :opts
      {:styles styles
       :points @points
       :width width
       :height height
       :bar-width (/ (- width bar-margin) (count @points))
       :bar-margin bar-margin
       :bar-max-height (- height (* 2 bar-margin))
       :dragged (atom false)
       :hover (atom nil)
       :sync-fn (fn [{ps :points}]
                  (reset! points ps))})))

(defn initial-setup
  [{{:keys [styles width height]} :opts :as s}]

  (let [node (rum/dom-node s)

        svg (.. d3
                (select node)
                (append "svg")
                (attr "width" width)
                (attr "height" height)
                (call #(u/a&s % (:svg styles))))

        g (.append svg "g")

        s (-> s
              (assoc-in [:opts :svg] svg)
              (assoc-in [:opts :node] node)
              (assoc-in [:opts :g] g))]

    (upd (:opts s))
    s))

(defn sync-points [s]
  (let [ps @(:points (first (:rum/args s)))
        opts (:opts s)
        s (-> s
              (assoc-in [:opts :points] ps)
              (assoc-in [:opts :bar-width]
                        (/ (- (:width opts) (:bar-margin opts))
                           (count ps))))]
    (upd (:opts s))
    s))

;; component -------------------------------------------

(rum/defcs barchart-editor <
  {:will-mount initial-state
   :did-mount initial-setup
   :did-update sync-points}
  rum/reactive
  [_ opts]
  (rum/react (:points opts))
  [:div.barchart-editor-wrap])

;; exemple ----------------------------------------------

(comment

  (def ps (atom [0 0.5 0.7 0.2]))

  (comment (swap! ps conj 1))

  (println @ps)

  (rum/mount (barchart-editor {:points ps
                               :styles (simple-styles "white" "pink")
                               :height 200
                               :width 800})
             (.getElementById js/document "app")))