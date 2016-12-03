(ns binaural-beats.core
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [reagent.core :as r :refer [atom]]
            [binaural-beats.audio :as audio]
            [binaural-beats.spline-editor :as se]
            [binaural-beats.barchart-editor :as bce]
            [binaural-beats.utils :as u :refer [tval]]
            [binaural-beats.colors :refer [palettes]]
            [cljs.pprint :refer [pprint]]))

(enable-console-print!)

(def state
  (atom
    {:name "BinBits"
     :assets {}
     :duration 10
     :max-duration 10000
     :duration-step 1
     :tracks
     [{:type :binaural
       :delta [[0 4]]
       :fq [[0 100]]
       :gain [[0 0.5]]
       :harmonics [1 0.5 0.3 0.1 0.05 0.03]}
      {:type :pink
       :gain [[0 0.1]]}]

     :tracks-settings
     [{:delta
       {:range [0 12]
        :style (se/simple-styles "#F4B5BD" "#FD6467" "#FAEFD1")
        :bounds [0 200]
        :step 1}

       :fq
       {:range [60 400]
        :style (se/simple-styles "#E1AF00" "#EBCC2A" "#f3f3f3")
        :bounds [0 10000]
        :step 1}

       :gain
       {:range [0 1]
        :style (se/simple-styles "#24281A" "#FD6467" "#D5D5D3")
        :bounds [0 1]
        :step 0.01}

       :selected :delta
       :width 800
       :height 200}
      {:ranges {:gain [0 1]}}]}))

(defn binaural-editor [{:keys [track settings]}]
  (let [selected (r/cursor settings [:selected])
        width (reaction (:width @settings))
        height (reaction (:height @settings))
        selected-settings (reaction (get @settings @selected))
        style (reaction (:style @selected-settings))
        ranges (u/rwrap
                 (fn []
                   {:x [0 (:duration @state)] :y (:range @selected-settings)})
                 {settings (fn [x {y :y}]
                             (assoc-in x [@selected :range] y))
                  state (fn [x {[_ maxx] :x}]
                          (assoc x :duration maxx))})
        spline-editor? (reaction (#{:delta :fq :gain} @selected))]
    (fn []
      [:div.multi-spline
       [:select {:value (name @selected)
                 :on-change #(reset! selected (keyword (u/tval %)))}
        (for [s [:delta :fq :gain :harmonics]]
          [:option {:key s :value (name s)} (name s)])]
       (when @spline-editor?
         (let [[min max] (:y @ranges)
               [dwn up] (:bounds @selected-settings)
               step (:step @selected-settings)]
           [:span
            [:input {:type "number"
                     :style {:width :40px}
                     :value min
                     :min dwn
                     :max max
                     :step step
                     :on-change #(swap! ranges assoc-in [:y 0] (js/parseFloat (tval %)))}]
            [:input {:type "number"
                     :style {:width :40px}
                     :min min
                     :max up
                     :step step
                     :value max
                     :on-change #(swap! ranges assoc-in [:y 1] (js/parseFloat (tval %)))}]]))
       (if @spline-editor?
         [se/spline-editor
          {:points (r/cursor track [@selected])
           :style @style
           :ranges @ranges
           :height @height
           :width @width}]
         [bce/barchart-editor
          {:points (r/cursor track [@selected])
           :height @height
           :width @width}])])))

(defn main []
  (let [delta-pts (atom [{:x 1 :y 4}])
        fq-pts (atom [{:x 1 :y 90}])
        envelope (atom [{:x 1 :y 0.5}])
        duration (atom 10)
        ctx (atom nil)]
    (fn []
      [:div
       [:h1 "Binaural Beats Generator"]

       [binaural-editor
        {:track (r/cursor state [:tracks 0])
         :settings (r/cursor state [:tracks-settings 0])}]

       [:span "duration: "]
       [:input {:type "number"
                :style {:width :40px}
                :value (:duration @state)
                :on-change #(swap! state assoc :duration (int (tval %)))}]

       [:div
        [:button {:on-click #(if @ctx
                               (audio/close-ctx ctx)
                               (audio/play {:ctx ctx
                                            :deltas @delta-pts
                                            :fqs @fq-pts
                                            :duration @duration
                                            :envelope @envelope}))}
         "play/stop"]
        [:button {:on-click #(audio/export-buffer
                               {:deltas @delta-pts
                                :fqs @fq-pts
                                :duration @duration
                                :envelope @envelope})}
         "export"]]])))

(r/render-component [main]
                    (.getElementById js/document "app"))
