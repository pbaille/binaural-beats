// Compiled by ClojureScript 1.9.229 {}
goog.provide('binaural_beats.barchart_editor');
goog.require('cljs.core');
goog.require('binaural_beats.utils');
goog.require('reagent.core');
binaural_beats.barchart_editor.keydown = (function binaural_beats$barchart_editor$keydown(p__29284){
var map__29290 = p__29284;
var map__29290__$1 = ((((!((map__29290 == null)))?((((map__29290.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29290.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29290):map__29290);
var state = cljs.core.get.call(null,map__29290__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var on_done = cljs.core.get.call(null,map__29290__$1,new cljs.core.Keyword(null,"on-done","on-done",-699252077));
cljs.core.println.call(null,binaural_beats.utils.d3.event.keyCode);

var c = cljs.core.count.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
var temp__4657__auto__ = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
if(cljs.core.truth_(temp__4657__auto__)){
var i = temp__4657__auto__;
var pred__29292 = cljs.core._EQ_;
var expr__29293 = binaural_beats.utils.d3.event.keyCode;
if(cljs.core.truth_(pred__29292.call(null,(8),expr__29293))){
return cljs.core.println.call(null,"delete");
} else {
if(cljs.core.truth_(pred__29292.call(null,(39),expr__29293))){
return cljs.core.println.call(null,"right");
} else {
if(cljs.core.truth_(pred__29292.call(null,(37),expr__29293))){
return cljs.core.println.call(null,"left");
} else {
return null;
}
}
}
} else {
return null;
}
});
binaural_beats.barchart_editor.mouse_upd = (function binaural_beats$barchart_editor$mouse_upd(p__29295){
var map__29301 = p__29295;
var map__29301__$1 = ((((!((map__29301 == null)))?((((map__29301.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29301.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29301):map__29301);
var opts = map__29301__$1;
var svg = cljs.core.get.call(null,map__29301__$1,new cljs.core.Keyword(null,"svg","svg",856789142));
var bar_width = cljs.core.get.call(null,map__29301__$1,new cljs.core.Keyword(null,"bar-width","bar-width",1233240523));
var bar_margin = cljs.core.get.call(null,map__29301__$1,new cljs.core.Keyword(null,"bar-margin","bar-margin",-1909676061));
var bar_max_height = cljs.core.get.call(null,map__29301__$1,new cljs.core.Keyword(null,"bar-max-height","bar-max-height",-2101884306));
var vec__29303 = cljs.core.js__GT_clj.call(null,binaural_beats.utils.d3.mouse(svg.node()));
var x = cljs.core.nth.call(null,vec__29303,(0),null);
var y = cljs.core.nth.call(null,vec__29303,(1),null);
return cljs.core.assoc_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883),Math.floor((x / bar_width))], null),binaural_beats.utils.bounder.call(null,(0),(1)).call(null,(((bar_max_height - y) + bar_margin) / bar_max_height)));
});
binaural_beats.barchart_editor.hover_tracker = (function binaural_beats$barchart_editor$hover_tracker(p__29306){
var map__29312 = p__29306;
var map__29312__$1 = ((((!((map__29312 == null)))?((((map__29312.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29312.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29312):map__29312);
var opts = map__29312__$1;
var svg = cljs.core.get.call(null,map__29312__$1,new cljs.core.Keyword(null,"svg","svg",856789142));
var bar_width = cljs.core.get.call(null,map__29312__$1,new cljs.core.Keyword(null,"bar-width","bar-width",1233240523));
var hover = cljs.core.get.call(null,map__29312__$1,new cljs.core.Keyword(null,"hover","hover",-341141711));
var temp__4657__auto__ = cljs.core.js__GT_clj.call(null,binaural_beats.utils.d3.mouse(svg.node()));
if(cljs.core.truth_(temp__4657__auto__)){
var vec__29314 = temp__4657__auto__;
var x = cljs.core.nth.call(null,vec__29314,(0),null);
var y = cljs.core.nth.call(null,vec__29314,(1),null);
var idx = Math.floor((x / bar_width));
if(cljs.core._EQ_.call(null,idx,cljs.core.deref.call(null,hover))){
return null;
} else {
return cljs.core.reset_BANG_.call(null,hover,idx);
}
} else {
return null;
}
});
binaural_beats.barchart_editor.default_styles = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bars","bars",-586907130),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"opacity","opacity",397153780),"0.3",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"white",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"3px"], null),new cljs.core.Keyword(null,"margin","margin",-995903681),(20)], null),new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background","background",-863952629),"pink",new cljs.core.Keyword(null,"border","border",1444987323),"2px solid white",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"3px"], null),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"barchart-svg"], null)], null)], null);
binaural_beats.barchart_editor.init = (function binaural_beats$barchart_editor$init(p__29318){
var map__29324 = p__29318;
var map__29324__$1 = ((((!((map__29324 == null)))?((((map__29324.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29324.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29324):map__29324);
var node = cljs.core.get.call(null,map__29324__$1,new cljs.core.Keyword(null,"node","node",581201198));
var points = cljs.core.get.call(null,map__29324__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var width = cljs.core.get.call(null,map__29324__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__29324__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var styles = cljs.core.get.call(null,map__29324__$1,new cljs.core.Keyword(null,"styles","styles",1954480375));
binaural_beats.utils.d3.select(node).select(".barchart-svg").remove();

var styles__$1 = binaural_beats.utils.merge_in.call(null,binaural_beats.barchart_editor.default_styles,styles);
var svg = binaural_beats.utils.d3.select(node).append("svg").attr("width",width).attr("height",height).call(((function (styles__$1,map__29324,map__29324__$1,node,points,width,height,styles){
return (function (p1__29317_SHARP_){
return binaural_beats.utils.a_AMPERSAND_s.call(null,p1__29317_SHARP_,new cljs.core.Keyword(null,"svg","svg",856789142).cljs$core$IFn$_invoke$arity$1(styles__$1));
});})(styles__$1,map__29324,map__29324__$1,node,points,width,height,styles))
);
var bar_margin = cljs.core.get_in.call(null,styles__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bars","bars",-586907130),new cljs.core.Keyword(null,"margin","margin",-995903681)], null));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bar-margin","bar-margin",-1909676061),new cljs.core.Keyword(null,"sync-fn","sync-fn",1366504042),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"bar-width","bar-width",1233240523),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"bar-max-height","bar-max-height",-2101884306),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.Keyword(null,"dragged","dragged",208354265),new cljs.core.Keyword(null,"height","height",1025178622)],[bar_margin,((function (styles__$1,svg,bar_margin,map__29324,map__29324__$1,node,points,width,height,styles){
return (function (p__29326){
var map__29327 = p__29326;
var map__29327__$1 = ((((!((map__29327 == null)))?((((map__29327.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29327.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29327):map__29327);
var ps = cljs.core.get.call(null,map__29327__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return cljs.core.reset_BANG_.call(null,points,ps);
});})(styles__$1,svg,bar_margin,map__29324,map__29324__$1,node,points,width,height,styles))
,width,((width - bar_margin) / cljs.core.count.call(null,cljs.core.deref.call(null,points))),cljs.core.deref.call(null,points),node,(height - ((2) * bar_margin)),svg.append("g"),cljs.core.atom.call(null,null),svg,styles__$1,cljs.core.atom.call(null,false),height]);
});
binaural_beats.barchart_editor.upd = (function binaural_beats$barchart_editor$upd(p__29330){
var map__29345 = p__29330;
var map__29345__$1 = ((((!((map__29345 == null)))?((((map__29345.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29345.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29345):map__29345);
var opts = map__29345__$1;
var dragged = cljs.core.get.call(null,map__29345__$1,new cljs.core.Keyword(null,"dragged","dragged",208354265));
var height = cljs.core.get.call(null,map__29345__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var bar_margin = cljs.core.get.call(null,map__29345__$1,new cljs.core.Keyword(null,"bar-margin","bar-margin",-1909676061));
var sync_fn = cljs.core.get.call(null,map__29345__$1,new cljs.core.Keyword(null,"sync-fn","sync-fn",1366504042));
var bar_width = cljs.core.get.call(null,map__29345__$1,new cljs.core.Keyword(null,"bar-width","bar-width",1233240523));
var points = cljs.core.get.call(null,map__29345__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var bar_max_height = cljs.core.get.call(null,map__29345__$1,new cljs.core.Keyword(null,"bar-max-height","bar-max-height",-2101884306));
var hover = cljs.core.get.call(null,map__29345__$1,new cljs.core.Keyword(null,"hover","hover",-341141711));
var g = cljs.core.get.call(null,map__29345__$1,new cljs.core.Keyword(null,"g","g",1738089905));
var svg = cljs.core.get.call(null,map__29345__$1,new cljs.core.Keyword(null,"svg","svg",856789142));
var styles = cljs.core.get.call(null,map__29345__$1,new cljs.core.Keyword(null,"styles","styles",1954480375));
var bars = g.selectAll("rect").data(binaural_beats.utils.js_GT_.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,points)));
bars.enter().append("rect").attr("x",((function (bars,map__29345,map__29345__$1,opts,dragged,height,bar_margin,sync_fn,bar_width,points,bar_max_height,hover,g,svg,styles){
return (function (p__29347){
var vec__29348 = p__29347;
var i = cljs.core.nth.call(null,vec__29348,(0),null);
var x = cljs.core.nth.call(null,vec__29348,(1),null);
return (bar_margin + (bar_width * i));
});})(bars,map__29345,map__29345__$1,opts,dragged,height,bar_margin,sync_fn,bar_width,points,bar_max_height,hover,g,svg,styles))
).attr("y",height).attr("width",(bar_width - bar_margin)).attr("fill","grey").call(((function (bars,map__29345,map__29345__$1,opts,dragged,height,bar_margin,sync_fn,bar_width,points,bar_max_height,hover,g,svg,styles){
return (function (p1__29329_SHARP_){
return binaural_beats.utils.a_AMPERSAND_s.call(null,p1__29329_SHARP_,new cljs.core.Keyword(null,"bars","bars",-586907130).cljs$core$IFn$_invoke$arity$1(styles));
});})(bars,map__29345,map__29345__$1,opts,dragged,height,bar_margin,sync_fn,bar_width,points,bar_max_height,hover,g,svg,styles))
).merge(bars).attr("height",((function (bars,map__29345,map__29345__$1,opts,dragged,height,bar_margin,sync_fn,bar_width,points,bar_max_height,hover,g,svg,styles){
return (function (p__29351){
var vec__29352 = p__29351;
var i = cljs.core.nth.call(null,vec__29352,(0),null);
var x = cljs.core.nth.call(null,vec__29352,(1),null);
return (bar_max_height * x);
});})(bars,map__29345,map__29345__$1,opts,dragged,height,bar_margin,sync_fn,bar_width,points,bar_max_height,hover,g,svg,styles))
).attr("y",((function (bars,map__29345,map__29345__$1,opts,dragged,height,bar_margin,sync_fn,bar_width,points,bar_max_height,hover,g,svg,styles){
return (function (p__29355){
var vec__29356 = p__29355;
var i = cljs.core.nth.call(null,vec__29356,(0),null);
var x = cljs.core.nth.call(null,vec__29356,(1),null);
return (bar_margin + (bar_max_height - (bar_max_height * x)));
});})(bars,map__29345,map__29345__$1,opts,dragged,height,bar_margin,sync_fn,bar_width,points,bar_max_height,hover,g,svg,styles))
).transition((30)).attr("opacity",((function (bars,map__29345,map__29345__$1,opts,dragged,height,bar_margin,sync_fn,bar_width,points,bar_max_height,hover,g,svg,styles){
return (function (_,i){
if(cljs.core._EQ_.call(null,i,cljs.core.deref.call(null,hover))){
return 0.6;
} else {
return 0.2;
}
});})(bars,map__29345,map__29345__$1,opts,dragged,height,bar_margin,sync_fn,bar_width,points,bar_max_height,hover,g,svg,styles))
);

bars.exit().remove();

return svg.on("mousedown",((function (bars,map__29345,map__29345__$1,opts,dragged,height,bar_margin,sync_fn,bar_width,points,bar_max_height,hover,g,svg,styles){
return (function (){
cljs.core.reset_BANG_.call(null,dragged,true);

return binaural_beats$barchart_editor$upd.call(null,binaural_beats.barchart_editor.mouse_upd.call(null,opts));
});})(bars,map__29345,map__29345__$1,opts,dragged,height,bar_margin,sync_fn,bar_width,points,bar_max_height,hover,g,svg,styles))
).on("mouseup",((function (bars,map__29345,map__29345__$1,opts,dragged,height,bar_margin,sync_fn,bar_width,points,bar_max_height,hover,g,svg,styles){
return (function (){
cljs.core.reset_BANG_.call(null,dragged,false);

return sync_fn.call(null,opts);
});})(bars,map__29345,map__29345__$1,opts,dragged,height,bar_margin,sync_fn,bar_width,points,bar_max_height,hover,g,svg,styles))
).on("mousemove",((function (bars,map__29345,map__29345__$1,opts,dragged,height,bar_margin,sync_fn,bar_width,points,bar_max_height,hover,g,svg,styles){
return (function (){
var hover_changed_QMARK_ = binaural_beats.barchart_editor.hover_tracker.call(null,opts);
if(cljs.core.truth_(cljs.core.deref.call(null,dragged))){
return binaural_beats$barchart_editor$upd.call(null,binaural_beats.barchart_editor.mouse_upd.call(null,opts));
} else {
if(cljs.core.truth_(hover_changed_QMARK_)){
return binaural_beats$barchart_editor$upd.call(null,opts);
} else {
return null;
}
}
});})(bars,map__29345,map__29345__$1,opts,dragged,height,bar_margin,sync_fn,bar_width,points,bar_max_height,hover,g,svg,styles))
).on("mouseout",((function (bars,map__29345,map__29345__$1,opts,dragged,height,bar_margin,sync_fn,bar_width,points,bar_max_height,hover,g,svg,styles){
return (function (){
cljs.core.reset_BANG_.call(null,hover,null);

return binaural_beats$barchart_editor$upd.call(null,opts);
});})(bars,map__29345,map__29345__$1,opts,dragged,height,bar_margin,sync_fn,bar_width,points,bar_max_height,hover,g,svg,styles))
);
});
binaural_beats.barchart_editor.barchart_editor = (function binaural_beats$barchart_editor$barchart_editor(opts){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
cljs.core.println.call(null,"render ");

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.barchart-editor-wrap","div.barchart-editor-wrap",-487870810)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (p1__29359_SHARP_){
return binaural_beats.barchart_editor.upd.call(null,binaural_beats.barchart_editor.init.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"node","node",581201198),reagent.core.dom_node.call(null,p1__29359_SHARP_))));
})], null));
});

//# sourceMappingURL=barchart_editor.js.map?rel=1480772922547