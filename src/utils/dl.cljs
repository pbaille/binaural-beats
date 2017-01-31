(ns utils.dl)

(defn download [data filename & [format]]
  (let [format (or format "application/octet-stream")
        a (.createElement js/document "a")]
    (aset a "href" (str "data:text/plain;charset=utf-8," (pr-str data)))
    (aset a "download" filename)
    (.click a)
    (.removeChild js/document a)))

