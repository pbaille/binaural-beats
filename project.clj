(defproject binaural-beats "0.1.0-SNAPSHOT"
            :description "FIXME: write description"
            :url "http://example.com/FIXME"
            :license {:name "Eclipse Public License"
                      :url "http://www.eclipse.org/legal/epl-v10.html"}
            :dependencies [[org.clojure/clojure "1.8.0"]
                           [org.clojure/clojurescript "1.9.229"]
                           [org.clojure/core.async "0.2.395"]
                           [figwheel-sidecar "0.5.8"]
                           [reagent "0.6.0"]
                           [cljs-http "0.1.39"]
                           [cljs-bach "0.2.0"]
                           [cljsjs/d3 "4.3.0-1"]]
            :plugins [[lein-cljsbuild "1.1.4"]
                      [lein-externs "0.1.6"]]
            :source-paths ["src" "script"]
            :cljsbuild {:builds [{:id           "min"
                                  :source-paths ["src"]
                                  :compiler     {:main          binaural-beats.core
                                                 :asset-path    "js/out"
                                                 :optimizations :advanced
                                                 :externs ["resources/public/js/externs.js"]
                                                 :output-to     "resources/public/js/out/main.min.js"
                                                 :output-dir    "resources/public/js/out"}}]})
