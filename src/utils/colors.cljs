(ns utils.colors)

(def wes-anderson
  {:bottlerocket ["#0C1707" "#550307" "#9B110E" "#4E2A1E" "#A42820" "#3F5151" "#5F5647"]
   :bottlerocket2 ["#1E1E1E" "#273046" "#354823" "#CB2314" "#FAD510"]
   :cavalcanti ["#02401B" "#972D15" "#81A88D" "#A2A475" "#D8B70A"]
   :chevalier ["#446455" "#C7B19C" "#FDD262" "#D3DDDC"]
   :darjeeling ["#FF0000" "#00A08A" "#F98400" "#5BBCD6" "#F2AD00"]
   :darjeeling2 ["#000000" "#046C9A" "#D69C4E" "#ECCBAE" "#ABDDDE"]
   :fantasticfox ["#B40F20" "#E58601" "#DD8D29" "#46ACC8" "#E2D200"]
   :grandbudapest ["#5B1A18" "#D67236" "#FD6467" "#F1BB7B"]
   :grandbudapest2 ["#7294D4" "#D8A499" "#E6A0C4" "#C6CDF7"]
   :moonrise1 ["#24281A" "#CEAB07" "#D5D5D3" "#F3DF6C"]
   :moonrise2 ["#29211F" "#C27D38" "#798E87" "#CCC591"]
   :moonrise3 ["#9C964A" "#CDC08C" "#F4B5BD" "#85D4E3" "#FAD77B"]
   :royal1 ["#C93312" "#DC863B" "#899DA4" "#FAEFD1"]
   :royal2 ["#9A8822" "#74A089" "#F8AFA8" "#F5CDB4" "#FDDDA0"]
   :rushmore ["#35274A" "#F2300F" "#0B775E" "#E1BD6D" "#EABE94"]
   :zissou ["#F21A00" "#3B9AB2" "#78B7C5" "#E1AF00" "#EBCC2A"]})

(defn palettes []
  [:div.palettes
   (for [[n cs] wes-anderson]
     [:div
      [:h3 (name n)]
      (for [c cs]
        [:div {:style {:display :inline-block}}
         [:div {:style {:background c :height "100px" :width "100px"}}]
         [:div c]])])])