(ns binaural-beats.utils
  (:require [reagent.core :as r]
            cljsjs.d3))

;; generics ------------------------------------------------

(defn log [& xs] (apply js/console.log xs))

(defn tval [x] (.. x -target -value))

(defn now [] (.getTime (js/Date.)))

(defn get-mouse-signal [& [el]]
  (let [mouse-position (atom {:x 0 :y 0})]
    (aset (or el js/document)
          "onmousemove"
          (fn [e] (js/console.log e)
            (reset! mouse-position
                    {:y (.-offsetY e)
                     :x (.-offsetX e)})))
    mouse-position))

(def p println)

(defn mount [c id]
  (r/render-component
    c
    (.getElementById js/document id)))

;; d3 ------------------------------------------------------

(def d3 js/d3)
(def js> clj->js)

(def line (.line js/d3))

(defn attrs [x s]
  (doseq [[k v] s]
    (.attr x (name k) v))
  x)

(defn styles [x s]
  (doseq [[k v] s]
    (.style x (name k) (if (number? v) v (name v))))
  x)

(defn a&s [x s]
  (-> x
      (attrs (:attrs s))
      (styles (:styles s)))
  x)

;; colls -----------------------------------------------------

(defn index-of [coll value]
  (some (fn [[idx item]] (if (= value item) idx))
        (map-indexed vector coll)))

(defn rem-idx [v idx]
  (vec (concat (subvec v 0 idx) (subvec v (inc idx)))))

(letfn [(merge-in* [a b]
          (if (map? a)
            (merge-with merge-in* a b)
            b))]
  (defn merge-in
    "Merge multiple nested maps."
    [& args]
    (reduce merge-in* nil args)))

;; numerics --------------------------------------------------

(defn with-precision [p n]
  (js/parseFloat (.toFixed n p)))

(defn bounder [min max]
  (fn [x]
    (cond
      (< x min) min
      (> x max) max
      :else x)))

;from overtone
(defn scale-range
  "Scales a given input value within the specified input range to a
  corresponding value in the specified output range using the formula:

           (out-max - out-min) (x - in-min)
   f (x) = --------------------------------  + out-min
                    in-max - in-min
  "
  [x in-min in-max out-min out-max]
  (+ (/ (* (- out-max out-min) (- x in-min))
        (- in-max in-min))
     out-min))

(defn interpolator [pts]
  (let [pts (sort-by first (if (:x (first pts)) (map (juxt :x :y) pts) pts))]
    (fn [x]
      (cond
        (<= x (ffirst pts)) (-> pts first second)
        (>= x (-> pts last first)) (-> pts last second)
        :else
        (let [[[x1 y1] [x2 y2]] (first (filter (fn [[[x1 _] [x2 _]]] (<= x1 x x2)) (partition 2 1 pts)))]
          (scale-range x x1 x2 y1 y2))))))

(defn interp-seq [interpolator start end step]
  (map (fn [x] [x (interpolator x)]) (range start (+ end step) step)))



;; reagent ---------------------------------------------------------

(defn rwrap [build reaction-map & [debug]]
  (let [a1 (r/atom (build))
        refs (keys reaction-map)
        shorts (atom #{})
        log-state (fn []
                    (p @a1)
                    (p refs)
                    (p @shorts))]
    (add-watch a1
               :build
               (fn [_ _ o n]
                 ;(p "build" (@shorts a1) (not (seq @shorts)))
                 (when debug
                   (p "---- a1 start: ----")
                   (log-state))
                 (if (@shorts a1)
                   (swap! shorts disj a1)
                   (when-not (seq @shorts)
                     (swap! shorts into refs)
                     (doseq [[ref upd] reaction-map]
                       (swap! shorts disj ref)
                       (swap! ref (or upd (fn [x _] x)) n))))
                 (when debug
                   (p "---- a1 end: ----")
                   (log-state))
                 ))
    (doseq [r refs]
      (add-watch r
                 (keyword (gensym))
                 (fn [_ _ _ _]
                   ;(p "react" (@shorts r) (not (seq @shorts)))
                   (when debug
                     (p "---- r start:" r " ----")
                     (log-state))
                   (when-not (seq @shorts)
                     (swap! shorts conj a1)
                     (reset! a1 (build)))
                   (when debug
                     (p "---- r end:" r " ----")
                     (log-state))
                   )))
    a1))

(comment
  (let [a (r/atom 10)
        b (r/atom 0)
        s (rwrap (fn [] {:a @a :b @b})
                 {a (fn [_ v] (:a v))
                  b (fn [_ v] (:b v))})]

    (p ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
    (p "(swap! s update :a inc)")
    (swap! s update :a inc)

    (p ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
    (p "(swap! s update :a inc)")
    (swap! s update :a inc)

    (p ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
    (p "(swap! a inc)")
    (swap! a inc)

    (p ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
    (p "(swap! a inc)")
    (swap! a inc)

    (p ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
    (p "(swap! b dec)")
    (swap! b dec)
    ))
