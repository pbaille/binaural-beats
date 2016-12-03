(ns binaural-beats.macros)

(defmacro styles> [hm]
  `(fn [x#]
     (.. x#
         ~@(for [[k v] hm]
             `(~'style ~(name k) ~v)))))

(defmacro attrs> [hm]
  `(fn [x#]
     (.. x#
         ~@(for [[k v] hm]
             `(~'attr ~(name k) ~v)))))

