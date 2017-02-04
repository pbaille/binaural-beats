(ns utils.rum-mixins
  (:require-macros [cljs.core.async.macros :refer [go-loop go]])
  (:require [cljs.core.async :as async :refer [chan >! <!]]
            [rum.core :as rum]
            [utils.core :as u]
            [garden.core :refer [css style]]
            [goog.style :as gs]
            [thi.ng.domus.core :as dom]))

;; styled
;; --------------------------------------------------------------

(defn styled
  "simple mixin for styling components with garden"
  [& ss]
  (let [uniq-class (str (gensym "styled-component-"))]
    {:did-mount
     (fn [s] (dom/add-class! (rum/dom-node s) uniq-class)
       (gs/installStyles (css (into [(keyword (str "." uniq-class))]
                                    (conj (vec ss) (:styled (first (:rum/args s)))))))
       s)}))

;; slave
;; --------------------------------------------------------------

;; helpers

(defn notify [s m]
  ((:notify s) m))

(defn dispatch [s m]
  ((:dispatch s) m))

(defn- parse-notif [n]
  (if (fn? n)
    n
    (fn [s & xs] (into [n] xs))))

(defn dispatcher [state {:keys [actions notifications after before]
                         :or {before identity
                              after identity}}]
  (fn [& messages]
    (before state messages)
    (doseq [[type & args] messages]
      (let [action (get actions type)
            notif (parse-notif (get notifications type type))]
        (swap! state #(apply action % args))
        (notify @state (apply notif @state args))))
    (after state messages)))

;; mixin

(defn slave [{:keys [before after actions notifications] :as opts}]
  {:init
   (fn [s]
     (let [s (assoc s :state (atom nil))
           dispatch (dispatcher (:state s) opts)
           {:keys [in-chan out-chan]
            :or {in-chan (chan)
                 out-chan (chan)}}
           (first (:rum/args s))]

       (swap! (:state s)
              assoc
              :in-chan in-chan
              :out-chan out-chan
              :dispatch-sync dispatch
              :dispatch #(go (async/>! in-chan %&))
              :notify #(go (async/>! out-chan %)))

       (go-loop []
                (apply dispatch (async/<! in-chan))
                (recur))

       s))})

;; exmple -------------------------------------------------------------

(defn demo []

  (defn rand-color-str []
    (str "rgb(" (rand-int 255) "," (rand-int 255) "," (rand-int 255) ")"))

  (rum/defcs slaved
    <
    (slave {:actions {:change-color (fn [s c] (println "executing change-color message") (assoc s :color c))
                      :shrink (fn [s] (println "executing shrink message") (update s :size * 0.5))
                      :grow (fn [s mult] (println "executing grow message") (update s :size * mult))}

            :notifications {;if notification value is a keyword just switching message type to it
                            ;shorthand for (fn [s color] [:changed-color s color]) in this case
                            :change-color :changed-color
                            ;notification can be built with a function taking state and message args
                            :grow (fn [s mult] (println "buiding grow notif") [:dynamic-grow-notif mult])
                            :shrink (fn [s] [:shrinked "yeah"])}

            :before
            #(println "----------\n called before each message is interpreted with state and args")

            :after
            #(println "called after each message is interpreted with state and args")})

    {:did-mount
     (fn [s]
       (swap! (:state s)
              into
              (first (:rum/args s)))
       s)}
    rum/reactive
    [state _]
    (let [s (rum/react (:state state))
          dispatch (:dispatch s)]
      [:div.a-wrap
       {:style {:margin-top :10px
                :background :#FAFAFA
                :padding :10px}}
       [:div "child"]
       [:button {:on-click #(dispatch [:shrink])} "shrink"]
       [:button {:on-click #(dispatch [:grow 2])} "grow"]
       [:button {:on-click #(dispatch [:change-color (rand-color-str)])} "color"]
       [:div {:style {:margin-top :10px
                      :background (:color s)
                      :width (:size s)
                      :height (:size s)}}]]))

  (rum/defcs tiran
    <
    {:init (fn [s]
             (let [to-slave (chan)
                   from-slave (chan)]

               (go-loop []
                        (let [received (<! from-slave)]
                          (println "notified from child" received)
                          (recur)))

               (assoc s :to-slave to-slave :from-slave from-slave)))}

    [{:keys [from-slave to-slave]}]
    (let [send #(do (println "sent from parent to child" %)
                    (go (>! to-slave %)))]
      [:div
       {:style {:background :lightgrey
                :padding :10px}}
       [:div "parent"]
       [:button {:on-click #(send [:shrink])} "shrink"]
       [:button {:on-click #(send [:grow 1.2])} "grow"]
       [:button {:on-click #(send [:change-color (rand-color-str)])} "color"]
       (slaved
         {:color "tomato"
          :size 50
          :in-chan to-slave
          :out-chan from-slave})]))

  (rum/mount
    (tiran)
    (.getElementById js/document "app")))

#_(demo)
