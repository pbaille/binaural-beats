(ns audio.noises
  (:require [cljs-bach.synthesis :as s]))

(def length (* 44100 5))

(defn constant-source [offset]
  (let [data (js/Float32Array. length)
        kbuffer #(doto (.createBuffer % 1 length (.-sampleRate %))
                   (-> (.getChannelData 0) (.set data)))]
    (doseq [i (range length)]
      (aset data i offset))
    (fn [ctx at duration]
      (let [k (doto (.createBufferSource ctx)
                (-> .-buffer (set! (kbuffer ctx)))
                (-> .-loop (set! true)))]

        (.start k at)
        (.stop k (+ duration at 1))
        (s/source k)))))

(defn osc
  "osc in the given range"
  [type freq range]
  (s/connect->
    (s/add
      (s/oscillator type freq)
      (constant-source 1))
    (s/add
      (s/gain (- (second range) (first range)))
      (constant-source (first range)))))

(comment
  (defonce ctx (s/audio-context))
  (-> (s/connect->
        (s/oscillator "sine" (osc "sine" 1 [100 200]))
        s/destination)
      (s/run-with ctx (+ 2 (s/current-time ctx)) 10)))

;; brown noise ------------------------------------------------

(def brown-buffer (atom nil))

(def brown-data
  (let [noise-data (js/Float32Array. length)]
    (loop [last-out 0 idx 0]
      (when (< idx length)
        (let [v (-> (rand)
                    (* 2)
                    (- 1)
                    (* 0.02)
                    (+ last-out)
                    (/ 1.02))]
          (aset noise-data idx (* 3.5 v))
          (recur v (inc idx)))))
    noise-data))

(defn brown-noise []
  (fn [ctx at duration]
    (when-not @brown-buffer
      (reset! brown-buffer
              (doto (.createBuffer ctx 1 length (.-sampleRate ctx))
                (-> (.getChannelData 0) (.set brown-data)))))
    (let [browny (doto (.createBufferSource ctx)
                   (-> .-buffer (set! @brown-buffer))
                   (-> .-loop (set! true)))]

      (.start browny at)
      (.stop browny (+ duration at))
      (s/source browny))))

(comment
  (defonce ctx (s/audio-context))
  (-> (s/connect->
        (brown-noise)
        (s/gain 0.5)
        s/destination)
      (s/run-with ctx (+ 2 (s/current-time ctx)) 3)))

;; pink noise doesn't work as intended -------------

(def pink-buffer (atom nil))

(def pink-data
  (let [noise-data (js/Float32Array. length)]
    (loop [idx 0 [b0 b1 b2 b3 b4 b5 b6] [0.0 0.0 0.0 0.0 0.0 0.0 0.0]]
      (when (< idx length)
        (let [white (-> (rand) (* 2) (- 1))
              b0* (+ (* b0 0.99886) (* white 0.0555179))
              b1* (+ (* b1 0.99332) (* white 0.0750759))
              b2* (+ (* b2 0.96900) (* white 0.1538520))
              b3* (+ (* b3 0.86650) (* white 0.3104856))
              b4* (+ (* b4 0.55000) (* white 0.5329522))
              b5* (- (* b5 (- 0.7616)) (* white 0.0168980))
              b6* (* white 0.115926)]
          (aset noise-data
                idx
                (* 0.11
                   (+ b0* b1* b2* b3* b4* b5* b6
                      (* white 0.5362))))
          (recur (inc idx)
                 [b0* b1* b2* b3* b4* b5* b6*]))))
    noise-data))

(defn pink-noise []
  (fn [ctx at duration]
    (when-not @pink-buffer
      (reset! pink-buffer
              (doto (.createBuffer ctx 1 length (.-sampleRate ctx))
                (-> (.getChannelData 0) (.set pink-data)))))
    (let [pinky (doto (.createBufferSource ctx)
                  (-> .-buffer (set! @pink-buffer))
                  (-> .-loop (set! true)))]

      (.start pinky at)
      (.stop pinky (+ duration at))
      (s/source pinky))))

(comment
  (defonce ctx (s/audio-context))
  (js/console.log pink-data)
  (-> (s/connect->
        (pink-noise)
        (s/gain 0.5)
        s/destination)
      (s/run-with ctx (+ 2 (s/current-time ctx)) 3)))
