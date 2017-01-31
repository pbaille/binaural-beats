(ns editors.multislider
  (:require-macros [cljs.core.async.macros :refer [go-loop go]])
  (:require [utils.core :refer [d3 js>] :as u]
            [utils.rum-mixins :as mixins]
            [rum.core :as rum]
            [cljs.core.async :as async]))

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
                  :border-radius "4px"}
         :attrs {:class "multislider-svg"}}})

(defn simple-styles [c1 c2 c3]
  {:points {:attrs {:fill c1
                    :stroke c2}}
   :line {:attrs {:fill c2}}
   :svg {:styles {:background c3}}})

;; helpers -------------------------------------------------------------

(defn- adj-idxs [ps idx]
  (let [p (get ps idx)
        sm (sort-by second (map-indexed vector ps))]
    [(or (->> sm
              (map (fn [[i v]] [i (- p v)]))
              (filter (comp pos? second))
              (sort-by second)
              ffirst)
         (ffirst (sort-by second > sm)))
     (or (->> sm
              (map (fn [[i v]] [i (- v p)]))
              (filter (comp pos? second))
              (sort-by second)
              ffirst)
         (ffirst (sort-by second sm)))]))

(defn keydown [s]
  (let [{:keys [dispatch-sync points selected]} @s
        c (count points)
        i selected
        [prev next] (adj-idxs points i)]
    (when i
      (condp = (.. d3 -event -keyCode)
        8 (dispatch-sync [:remove-point i])
        39 (dispatch-sync [:select-point next])
        37 (dispatch-sync [:select-point prev])
        nil))))

(defn mouse-scaled-value [{:keys [pad width svg]}]
  ((u/bounder 0 1)
    (/ (- (first (js->clj (.mouse d3 (.node svg))))
          pad)
       (- width (* 2 pad)))))

(defn- comparable-args [s]
  (update (first (:rum/args s))
          :points
          (fn [ps] (map (partial u/with-precision 2) ps))))

;; actions and notifications ------------------------------------------

(def actions
  {:set-points
   (fn [s ps]
     (assoc s :points ps))


   :select-point
   (fn [s idx]
     (assoc s :selected idx))

   :blur
   (fn [s]
     (assoc s :selected nil))


   :move-point
   (fn [s idx value]
     (update s :points assoc idx value))

   :add-point
   (fn [s value]
     #_(println "add-point "
                (:max-points-count s)
                (count (:points s))
                (< (:max-points-count s) (count (:points s))))
     (if (> (:max-points-count s) (count (:points s)))
       (let [ret (update s :points conj value)]
         #_((:dispatch s) [:select-point (count (:points s))] [:set-dragged true])
         ret)
       s))

   :remove-point
   (fn [s idx]
     (let [c (count (:points s))
           sel-value (get (:points s) (:selected s))
           sel? (= idx (:selected s))
           ret (update s :points u/rem-idx idx)
           sel-idx (if sel?
                     (if (= (dec c) idx) (dec idx) idx)
                     (u/index-of (:points ret) sel-value))]
       (when-not (= (:selected s) sel-idx)
         ((:dispatch s) [:select-point sel-idx]))
       ret))


   :set-dragged (fn [s v] (assoc s :dragged v))
   :set-hovered (fn [s v] (assoc s :hovered v))
   :set-hover (fn [s v] (assoc s :hover v))
   })

(def notifications
  {:move-point
   (fn [s idx value]
     (if (:dragged s)
       [:dragged-point (:points s) idx value]
       [:moved-point (:points s) idx value]))

   :add-point
   (fn [s value]
     [:added-point (:points s) value])

   :remove-point
   (fn [s idx]
     [:removed-point (:points s) idx])

   :blur
   (fn [s] [:blur])

   :select-point
   (fn [s idx]
     (if idx
       [:selected-point (:points s) idx]
       [:none]))})

;; lifecycle -----------------------------------------------------------

(defn upd [s]

  (let [{:keys [svg
                points
                line-height
                width
                styles
                pad
                dispatch-sync]} @s

        circles (.. svg
                    (selectAll "circle")
                    (data (js> (map-indexed vector points))))

        get-circle-styles (fn [idx]
                            (if (= idx (:selected @s))
                              (:selected-point styles)
                              (:points styles)))]

    (.. circles

        enter

        (append "circle")
        (attr "cx" (fn [[i x]] (+ pad (* x (- width (* 2 pad))))))
        (attr "cy" (+ (/ line-height 2) pad))
        (call #(u/a&s % (:points styles)))

        (merge circles)

        (attr "cx"
              (fn [[i x]]
                (+ pad (* x (- width (* 2 pad))))))

        (on "mousedown"
            (fn [[i _]]
              (dispatch-sync
                [:set-dragged true]
                [:select-point i])))

        (on "mouseup"
            (fn [[i x]]
              (when (:dragged @s)
                (dispatch-sync
                  [:set-dragged nil]
                  #_[:move-point (:selected @s) (mouse-scaled-value @s)]))))

        (on "mouseenter"
            (fn [[i _]]
              (when-not (:dragged @s)
                (dispatch-sync [:set-hovered i]))))

        (on "mouseout"
            #(dispatch-sync [:set-hovered nil]))

        (each (fn [[i _]]
                (this-as this
                  (.. d3
                      (select this)
                      (call #(u/a&s % (get-circle-styles i))))))))

    (.. circles exit remove)

    (when (:selected @s)
      (.. d3
          (select js/window)
          (on "keydown"
              #(keydown s))))

    (.. svg
        (on "mousedown"
            (fn []
              (.. svg (style "cursor" "none"))
              (when-not (and (:dragged @s) (:selected @s))
                (let [v (mouse-scaled-value @s)
                      idx (count (:points @s))]
                  (when (> (:max-points-count @s) idx)
                    (dispatch-sync
                      [:add-point v]
                      [:select-point idx]
                      [:set-dragged true]))))))

        (on "mouseup"
            (fn []
              (.. svg (style "cursor" "inherit"))))

        (on "mousemove"
            (fn []
              (when (:dragged @s)
                (dispatch-sync
                  [:move-point
                   (:selected @s)
                   (mouse-scaled-value @s)]))))

        (on "mouseenter"
            #(dispatch-sync [:set-hover true]))

        (on "mouseleave"
            #(dispatch-sync [:set-hover false])))))

(defn init-internal-state [s]
  (swap!
    (:state s)
    assoc
    :dragged false
    :selected nil
    :hovered nil
    :hover nil)
  s)

(defn take-args [s]
  (let [{:keys [points styles width max-points-count]}
        (first (:rum/args s))
        styles (u/merge-in default-styles styles)]

    (swap! (:state s)
           (fn [s]
             (assoc s
               :styles styles
               :points points
               :width width
               :max-points-count (or max-points-count js/Infinity)
               :line-height (-> styles :line :attrs :height)
               :pad (get-in styles [:line :margin]))))
    s))

(defn init-base-elements [s]
  (let [node (rum/dom-node s)

        svg (.. d3
                (select node)
                (append "svg"))

        rect (.. svg (append "rect"))]

    (swap! (:state s)
           (fn [s]
             (assoc s
               :svg svg
               :rect rect
               :node node)))

    s))

(defn apply-base-styles [s]
  (let [{:keys [svg pad line-height width styles rect]} @(:state s)]
    (.. svg
        (attr "width" width)
        (attr "height" (+ line-height (* 2 pad)))
        (call #(u/a&s % (:svg styles))))

    (.. rect
        (attr "x" pad)
        (attr "y" pad)
        (attr "width" (- width (* 2 pad)))
        (call #(u/a&s % (:line styles))))
    s))

(defn draw [s]
  (upd (:state s))
  s)

(defn should-update [old-state new-state]
  (not= (comparable-args old-state)
        (comparable-args new-state)))

(rum/defc multislider <
  (mixins/slave
    {:actions actions
     :notifications notifications
     ;:before #(println %2)
     :after #(upd %1)})
  {:should-update should-update
   :will-mount #(-> % init-internal-state take-args)
   :did-mount #(-> % init-base-elements apply-base-styles draw)
   :will-update #(-> % take-args apply-base-styles draw)}
  [opts]
  [:div.multislider-editor-wrap])

;; test zone -----------------------------------------------------------------

(def in-chan (async/chan))
(def out-chan (async/chan))

(go-loop []
         (println (async/<! out-chan))
         (recur))

(rum/defc test-ms
  []
  [:div
   [:button {:on-click #(go (async/>! in-chan [[:set-points [0 0.5 1]]]))}]
   (multislider
     {:points [0.1 0.5 0.9]
      :out-chan out-chan
      :in-chan in-chan
      :height 100
      :width 500})])

(.clear js/console)
(rum/mount (test-ms)
             (.getElementById js/document "app"))

