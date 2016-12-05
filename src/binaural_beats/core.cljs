(ns binaural-beats.core
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [reagent.core :as r :refer [atom]]
            [audio.core :as audio]
            [editors.spline :as se]
            [editors.barcharts :as bce]
            [utils.core :as u :refer [tval]]
            [utils.colors :refer [palettes]]
            [cljs.pprint :refer [pprint]]
            [cljs-bach.synthesis :as s]))

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
       :harmonics [1 0.5 0.3 0.1 0.05 0.03]
       :oscs [1 0 0 0]}
      {:type :brown
       :gain [[0 0.1]]
       :pan [[0 0.5]]}]

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

       :harmonics
       {:style (bce/simple-styles "white" "pink")}

       :oscs
       {:style (bce/simple-styles "black" "grey")}

       :selected :delta
       :width 800
       :height 200}
      {:pan {:range [0 1]
             :bounds [0 1]
             :style (se/simple-styles "#E1AF00" "#EBCC2A" "#f3f3f3")
             :step 0.01}
       :gain {:range [0 1]
              :style (se/simple-styles "#24281A" "#FD6467" "#D5D5D3")
              :bounds [0 1]
              :step 0.01}
       :selected :gain
       :width 800
       :height 150}]}))

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
        spline-editor? (reaction (#{:delta :fq :gain} @selected))
        barchart-editor? (reaction (#{:harmonics :oscs} @selected))]
    (fn []
      [:div.multi-spline
       [:select {:value (name @selected)
                 :on-change #(reset! selected (keyword (u/tval %)))}
        (for [s [:delta :fq :gain :harmonics :oscs]]
          [:option {:key s :value (name s)} (name s)])]
       (when @spline-editor?
         (doall
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
                       :on-change #(swap! ranges assoc-in [:y 1] (js/parseFloat (tval %)))}]])))
       (cond
         @spline-editor?
         [se/spline-editor
          {:points (r/cursor track [@selected])
           :style @style
           :ranges @ranges
           :height @height
           :width @width}]

         @barchart-editor?
         [bce/barchart-editor
          {:s @selected
           :points (r/cursor track [@selected])
           :styles @style
           :height @height
           :width @width}])])))

(defn noise-editor [{:keys [track settings]}]
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
                          (assoc x :duration maxx))})]
    (fn []
      [:div.multi-spline
       [:select {:value (name @selected)
                 :on-change #(reset! selected (keyword (u/tval %)))}
        (for [s [:gain :pan]]
          [:option {:key s :value (name s)} (name s)])]

       [se/spline-editor
        {:points (r/cursor track [@selected])
         :style @style
         :ranges @ranges
         :height @height
         :width @width}]])))

(defonce ctx (s/audio-context))

(defn main []
  (fn []
    [:div
     [:h1 "Binaural Beats Generator"]

     [binaural-editor
      {:track (r/cursor state [:tracks 0])
       :settings (r/cursor state [:tracks-settings 0])}]

     [noise-editor
      {:track (r/cursor state [:tracks 1])
       :settings (r/cursor state [:tracks-settings 1])}]

     [:span "duration: "]
     [:input {:type "number"
              :style {:width :40px}
              :value (:duration @state)
              :on-change #(swap! state assoc :duration (int (tval %)))}]

     [:div
      [:button {:on-click #(audio/play-tracks
                            {:ctx ctx
                             :duration (:duration @state)
                             :decay 2
                             :tracks (:tracks @state)})}
       "play/stop"]
      [:button {:on-click #(audio/export-buffer
                             {:ctx ctx
                              :duration (:duration @state)
                              :decay 2
                              :tracks (:tracks @state)})}
       "export"]]]))

(r/render-component [main]
                    (.getElementById js/document "app"))

