(ns editors.multislider
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [utils.core :refer [d3 js>] :as u]
            [rum.core :as rum]
            [cljs.core.async :as async]))

(defn mouse-upd [{:keys [svg selected width pad on-drag on-select] :as opts}]
  (when @selected
    (let [[x _] (js->clj (.mouse d3 (.node svg)))
          new-point ((u/bounder 0 1)
                      (/ (- x pad) (- width (* 2 pad))))
          new-points (vec (sort (assoc (:points opts) @selected new-point)))
          idx (u/index-of new-points new-point)
          opts (assoc opts :points new-points)]
      (when (not= idx @selected)
        (reset! selected idx)
        (on-select opts))
      (when on-drag (on-drag opts))
      opts)))

(defn keydown [{:keys [points selected on-select] :as opts}]
  #_(println (.. d3 -event -keyCode))
  (let [c (count points)]
    (when-let [i @selected]
      (condp = (.. d3 -event -keyCode)

        8 (do (reset! selected (if (= (dec c) i) (dec i) i))
              (on-select opts)
              (update opts :points u/rem-idx i))

        39 (do (swap! selected (fn [x] (mod (inc x) c)))
               (on-select opts)
               opts)

        37 (do (swap! selected (fn [x] (mod (dec x) c)))
               (on-select opts)
               opts)

        opts))))

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
                  :border-radius :4px}
         :attrs {:class "multislider-svg"}}})

(defn simple-styles [c1 c2 c3]
  {:points {:attrs {:fill c1
                    :stroke c2}}
   :line {:attrs {:fill c2}}
   :svg {:styles {:background c3}}})

;; lifecycle -----------------------------------------------------------

(defn upd [{:keys [svg
                   points
                   line-height
                   width
                   dragged
                   on-change
                   on-select
                   styles
                   pad
                   hovered
                   selected
                   hover]
            :as opts}]

  (let [circles (.. svg
                    (selectAll "circle")
                    (data (js> (map-indexed vector points))))

        get-circle-styles (fn [idx]
                            (if (= idx @selected)
                              (:selected-point styles)
                              (:points styles)))]

    (.. circles
        enter
        (append "circle")
        (attr "cx" (fn [[i x]] (+ pad (* x (- width (* 2 pad))))))
        (attr "cy" (+ (/ line-height 2) pad))
        (call #(u/a&s % (:points styles)))

        (merge circles)
        (attr "cx" (fn [[i x]] (+ pad (* x (- width (* 2 pad))))))
        (on "mousedown" (fn [[i x]] (reset! selected i) (on-select opts)))
        (on "mouseenter" (fn [[i x]] (reset! hovered i)))
        (on "mouseout" (fn [[i x]] (reset! hovered nil)))
        (each (fn [[i x]]
                (this-as this
                  (.. d3
                      (select this)
                      (call #(u/a&s % (get-circle-styles i))))))))

    (.. circles exit remove)

    (.. d3
        (select js/window)
        (on "keydown"
            #(let [opts (keydown opts)]
               (upd opts)
               (on-change opts)))
        #_(on "mousedown"
              (fn []
                (when-not @hover
                  (reset! selected nil)
                  (on-select opts)
                  (upd opts)))))

    (.. svg
        (on "mousedown"
            (fn []
              (.. svg (style "cursor" "none"))
              (if (and @hovered @selected)
                (do (reset! dragged true)
                    (upd (mouse-upd opts)))
                (do (reset! selected (count points))
                    (reset! dragged true)
                    (upd (mouse-upd (update opts :points conj 0)))))))
        (on "mouseup"
            (fn []
              (reset! dragged false)
              (.. svg (style "cursor" "inherit"))
              (on-change opts)
              (upd opts)))
        (on "mousemove"
            (fn []
              (let [hovered-changed? false #_(hovered-tracker opts)]
                (cond
                  @dragged (upd (mouse-upd opts))
                  hovered-changed? (upd opts)))))
        (on "mouseenter"
            (fn []
              (reset! hover true)
              (upd opts)))
        (on "mouseleave"
            (fn []
              (reset! hover false)
              (upd opts))))))

(defn init-internal-state [s]
  (let [{:keys [in-chan out-chan]} (first (:rum/args s))]
    (update s
            :opts
            assoc
            :dragged (atom false)
            :selected (atom nil)
            :hovered (atom nil)
            :hover (atom nil)
            :out-chan out-chan
            :in-chan in-chan)))

(defn take-args [s]
  (let [{:keys [points styles width on-change on-select on-drag]
         :or {on-change identity
              on-drag identity
              on-select identity}}
        (first (:rum/args s))
        styles (u/merge-in default-styles styles)]
    (update s
            :opts
            assoc
            :styles styles
            :points points
            :width width
            :line-height (-> styles :line :attrs :height)
            :pad (get-in styles [:line :margin])
            :on-select #(on-select @(:selected %) ((:points %) @(:selected %)))
            :on-drag #(on-drag (:points %))
            :on-change #(on-change (:points %)))))

(defn init-base-elements [s]
  (let [node (rum/dom-node s)

        svg (.. d3
                (select node)
                (append "svg"))

        rect (.. svg (append "rect"))]

    (update s
            :opts
            assoc
            :svg svg
            :rect rect
            :node node)))

(defn apply-base-styles [{{:keys [svg pad line-height width styles rect]} :opts :as s}]
  (.. svg
      (attr "width" width)
      (attr "height" (+ line-height (* 2 pad)))
      (call #(u/a&s % (:svg styles))))

  (.. rect
      (attr "x" pad)
      (attr "y" pad)
      (attr "width" (- width (* 2 pad)))
      (call #(u/a&s % (:line styles))))
  s)

(defn draw [s]
  (upd (:opts s))
  s)

(defn should-update [old-state new-state]
  (not= (dissoc (update (first (:rum/args old-state))
                        :points
                        (fn [ps] (map (partial u/with-precision 2) ps)))
                :on-change)
        (dissoc (update (first (:rum/args new-state))
                        :points
                        (fn [ps] (map (partial u/with-precision 2) ps)))
                :on-change)))

(defn listen [message-handler]
  {:did-mount
   (fn [s]
     (let [{:keys [in-chan]} (first (:rum/args s))]
       (go-loop []
         (let [m (async/<! in-chan)]
           (message-handler m)
           (recur))))
     s)})

(rum/defc multislider <
  {:should-update should-update
   :will-mount #(-> % take-args init-internal-state)
   :did-mount #(-> % init-base-elements apply-base-styles draw)
   :will-update #(-> % take-args apply-base-styles draw)}
  [opts]
  #_(println "render ms")
  [:div.multislider-editor-wrap])

#_(rum/mount (multislider
               {:points [0.1 0.5 0.9]
                :on-change #(println "points changed: " %)
                :sync-on-drag false
                :height 100
                :width 800})
             (.getElementById js/document "app"))
