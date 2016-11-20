(ns binaural-beats.utils)

(defn log [& xs] (apply js/console.log xs))

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

(defn tval [x]
  (.. x -target -value))

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
