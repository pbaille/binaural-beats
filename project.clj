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
                 #_[cljsjs/d3 "4.3.0-1"]
                 [rum "0.10.7"]
                 [garden "1.3.2"]
                 [thi.ng/domus "0.3.0-SNAPSHOT"]
                 [org.clojure/test.check "0.9.0"]]
  :plugins [[lein-cljsbuild "1.1.4"]
            [lein-externs "0.1.6"]]
  :profiles {:dev {:dependencies [[com.cemerick/piggieback "0.2.1"]
                                  [figwheel-sidecar "0.5.8"]]
                   :source-paths ["src"]}}
  :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
  :source-paths ["src"]
  :cljsbuild {:builds [{:id "dev"
                        :figwheel true
                        :source-paths ["src"]
                        :compiler {:main binaural-beats.core
                                   :asset-path "js/out"
                                   :output-to "resources/public/js/out/main.js"
                                   :output-dir "resources/public/js/out"
                                   :verbose true}}
                       #_{:id "min"
                        :source-paths ["src"]
                        :compiler {:main binaural-beats.core
                                   :asset-path "js/out"
                                   :optimizations :advanced
                                   :externs ["resources/public/js/externs.js"]
                                   :output-to "resources/public/js/out/main.min.js"
                                   :output-dir "resources/public/js/out"}}]})
