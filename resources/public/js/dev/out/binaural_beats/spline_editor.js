// Compiled by ClojureScript 1.9.229 {}
goog.provide('binaural_beats.spline_editor');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('binaural_beats.utils');
goog.require('cljsjs.d3');
binaural_beats.spline_editor.mousemove = (function binaural_beats$spline_editor$mousemove(p__29064){
var map__29067 = p__29064;
var map__29067__$1 = ((((!((map__29067 == null)))?((((map__29067.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29067.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29067):map__29067);
var padding = cljs.core.get.call(null,map__29067__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
var state = cljs.core.get.call(null,map__29067__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var svg = cljs.core.get.call(null,map__29067__$1,new cljs.core.Keyword(null,"svg","svg",856789142));
var width = cljs.core.get.call(null,map__29067__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__29067__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var on_done = cljs.core.get.call(null,map__29067__$1,new cljs.core.Keyword(null,"on-done","on-done",-699252077));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dragged","dragged",208354265).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))){
var m = binaural_beats.utils.d3.mouse(svg.node());
var mx = binaural_beats.utils.bounder.call(null,padding,(padding + width)).call(null,(m[(0)]));
var my = binaural_beats.utils.bounder.call(null,padding,(padding + height)).call(null,(m[(1)]));
var idx = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
if(cljs.core.truth_(idx)){
cljs.core.swap_BANG_.call(null,state,cljs.core.update,new cljs.core.Keyword(null,"points","points",-1486596883),((function (m,mx,my,idx,map__29067,map__29067__$1,padding,state,svg,width,height,on_done){
return (function (pts){
return cljs.core.vec.call(null,cljs.core.sort_by.call(null,cljs.core.first,cljs.core.assoc.call(null,pts,idx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mx,my], null))));
});})(m,mx,my,idx,map__29067,map__29067__$1,padding,state,svg,width,height,on_done))
);

return on_done.call(null);
} else {
return null;
}
} else {
return null;
}
});
binaural_beats.spline_editor.mousedown = (function binaural_beats$spline_editor$mousedown(p__29070){
var map__29076 = p__29070;
var map__29076__$1 = ((((!((map__29076 == null)))?((((map__29076.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29076.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29076):map__29076);
var svg = cljs.core.get.call(null,map__29076__$1,new cljs.core.Keyword(null,"svg","svg",856789142));
var state = cljs.core.get.call(null,map__29076__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var on_done = cljs.core.get.call(null,map__29076__$1,new cljs.core.Keyword(null,"on-done","on-done",-699252077));
var temp__4657__auto__ = cljs.core.js__GT_clj.call(null,binaural_beats.utils.d3.mouse(svg.node()));
if(cljs.core.truth_(temp__4657__auto__)){
var vec__29078 = temp__4657__auto__;
var x = cljs.core.nth.call(null,vec__29078,(0),null);
var y = cljs.core.nth.call(null,vec__29078,(1),null);
cljs.core.println.call(null,"mousedown",binaural_beats.utils.index_of.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));

cljs.core.swap_BANG_.call(null,state,((function (vec__29078,x,y,temp__4657__auto__,map__29076,map__29076__$1,svg,state,on_done){
return (function (p1__29069_SHARP_){
var s = p1__29069_SHARP_;
var s__$1 = cljs.core.update.call(null,s,new cljs.core.Keyword(null,"points","points",-1486596883),((function (s,vec__29078,x,y,temp__4657__auto__,map__29076,map__29076__$1,svg,state,on_done){
return (function (ps){
return cljs.core.vec.call(null,cljs.core.sort_by.call(null,cljs.core.first,cljs.core.conj.call(null,ps,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))));
});})(s,vec__29078,x,y,temp__4657__auto__,map__29076,map__29076__$1,svg,state,on_done))
);
return cljs.core.assoc.call(null,s__$1,new cljs.core.Keyword(null,"selected","selected",574897764),binaural_beats.utils.index_of.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(s__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),new cljs.core.Keyword(null,"dragged","dragged",208354265),true);
});})(vec__29078,x,y,temp__4657__auto__,map__29076,map__29076__$1,svg,state,on_done))
);

return on_done.call(null);
} else {
return null;
}
});
binaural_beats.spline_editor.keydown = (function binaural_beats$spline_editor$keydown(p__29082){
var map__29088 = p__29082;
var map__29088__$1 = ((((!((map__29088 == null)))?((((map__29088.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29088.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29088):map__29088);
var state = cljs.core.get.call(null,map__29088__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var on_done = cljs.core.get.call(null,map__29088__$1,new cljs.core.Keyword(null,"on-done","on-done",-699252077));
cljs.core.println.call(null,binaural_beats.utils.d3.event.keyCode);

var c = cljs.core.count.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
var temp__4657__auto__ = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
if(cljs.core.truth_(temp__4657__auto__)){
var i = temp__4657__auto__;
var pred__29090 = cljs.core._EQ_;
var expr__29091 = binaural_beats.utils.d3.event.keyCode;
if(cljs.core.truth_(pred__29090.call(null,(8),expr__29091))){
cljs.core.swap_BANG_.call(null,state,((function (pred__29090,expr__29091,i,temp__4657__auto__,c,map__29088,map__29088__$1,state,on_done){
return (function (p1__29081_SHARP_){
return cljs.core.update.call(null,cljs.core.update.call(null,p1__29081_SHARP_,new cljs.core.Keyword(null,"points","points",-1486596883),binaural_beats.utils.rem_idx,i),new cljs.core.Keyword(null,"selected","selected",574897764),((function (pred__29090,expr__29091,i,temp__4657__auto__,c,map__29088,map__29088__$1,state,on_done){
return (function (i__$1){
if(cljs.core._EQ_.call(null,(c - (1)),i__$1)){
return (i__$1 - (1));
} else {
return i__$1;
}
});})(pred__29090,expr__29091,i,temp__4657__auto__,c,map__29088,map__29088__$1,state,on_done))
);
});})(pred__29090,expr__29091,i,temp__4657__auto__,c,map__29088,map__29088__$1,state,on_done))
);

return on_done.call(null);
} else {
if(cljs.core.truth_(pred__29090.call(null,(39),expr__29091))){
cljs.core.swap_BANG_.call(null,state,cljs.core.update,new cljs.core.Keyword(null,"selected","selected",574897764),((function (pred__29090,expr__29091,i,temp__4657__auto__,c,map__29088,map__29088__$1,state,on_done){
return (function (x){
return cljs.core.mod.call(null,(x + (1)),c);
});})(pred__29090,expr__29091,i,temp__4657__auto__,c,map__29088,map__29088__$1,state,on_done))
);

return on_done.call(null);
} else {
if(cljs.core.truth_(pred__29090.call(null,(37),expr__29091))){
cljs.core.swap_BANG_.call(null,state,cljs.core.update,new cljs.core.Keyword(null,"selected","selected",574897764),((function (pred__29090,expr__29091,i,temp__4657__auto__,c,map__29088,map__29088__$1,state,on_done){
return (function (x){
return cljs.core.mod.call(null,(x - (1)),c);
});})(pred__29090,expr__29091,i,temp__4657__auto__,c,map__29088,map__29088__$1,state,on_done))
);

return on_done.call(null);
} else {
return null;
}
}
}
} else {
return null;
}
});
binaural_beats.spline_editor.default_styles = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fill","fill",883462889),"grey",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"lightgrey",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(2),new cljs.core.Keyword(null,"r","r",-471384190),(6)], null),new cljs.core.Keyword(null,"selected-point","selected-point",728560533),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fill","fill",883462889),"lightgrey",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"grey",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(2),new cljs.core.Keyword(null,"r","r",-471384190),(7)], null),new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"2px solid grey",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"4px","4px",200148326),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"#FAFAFA","#FAFAFA",1627320261)], null),new cljs.core.Keyword(null,"lines","lines",-700165781),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"grey",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(2)], null),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none",new cljs.core.Keyword(null,"fill","fill",883462889),"transparent",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(0)], null)], null);
binaural_beats.spline_editor.simple_styles = (function binaural_beats$spline_editor$simple_styles(c1,c2,c3){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fill","fill",883462889),c1,new cljs.core.Keyword(null,"stroke","stroke",1741823555),c2,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(2),new cljs.core.Keyword(null,"r","r",-471384190),(6)], null),new cljs.core.Keyword(null,"selected-point","selected-point",728560533),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fill","fill",883462889),c2,new cljs.core.Keyword(null,"stroke","stroke",1741823555),c1,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(2),new cljs.core.Keyword(null,"r","r",-471384190),(7)], null),new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),[cljs.core.str("2px solid "),cljs.core.str(c1)].join(''),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"4px","4px",200148326),new cljs.core.Keyword(null,"background","background",-863952629),c3], null),new cljs.core.Keyword(null,"lines","lines",-700165781),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),c1,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(2)], null),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none",new cljs.core.Keyword(null,"fill","fill",883462889),"transparent",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(0)], null)], null);
});
binaural_beats.spline_editor.merged_with_defaults = (function binaural_beats$spline_editor$merged_with_defaults(s){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__29097){
var vec__29098 = p__29097;
var k = cljs.core.nth.call(null,vec__29098,(0),null);
var v = cljs.core.nth.call(null,vec__29098,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.merge.call(null,v,cljs.core.get.call(null,s,k))], null);
}),binaural_beats.spline_editor.default_styles));
});
binaural_beats.spline_editor.redraw = (function binaural_beats$spline_editor$redraw(p__29101){
var map__29108 = p__29101;
var map__29108__$1 = ((((!((map__29108 == null)))?((((map__29108.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29108.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29108):map__29108);
var opts = map__29108__$1;
var this$ = cljs.core.get.call(null,map__29108__$1,new cljs.core.Keyword(null,"this","this",-611633625));
var state = cljs.core.get.call(null,map__29108__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var sync_fn = cljs.core.get.call(null,map__29108__$1,new cljs.core.Keyword(null,"sync-fn","sync-fn",1366504042));
var points = new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var map__29110 = reagent.core.props.call(null,this$);
var map__29110__$1 = ((((!((map__29110 == null)))?((((map__29110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29110):map__29110);
var width = cljs.core.get.call(null,map__29110__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var style = cljs.core.get.call(null,map__29110__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var padding = new cljs.core.Keyword(null,"padding","padding",1660304693).cljs$core$IFn$_invoke$arity$2(style,(0));
var svg = binaural_beats.utils.d3.select(reagent.core.dom_node.call(null,this$)).select("svg");
var circles = svg.selectAll("circle").data(binaural_beats.utils.js_GT_.call(null,points),cljs.core.identity);
var map__29111 = binaural_beats.spline_editor.merged_with_defaults.call(null,style);
var map__29111__$1 = ((((!((map__29111 == null)))?((((map__29111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29111):map__29111);
var path_styles = cljs.core.get.call(null,map__29111__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var circles_styles = cljs.core.get.call(null,map__29111__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var selected_styles = cljs.core.get.call(null,map__29111__$1,new cljs.core.Keyword(null,"selected-point","selected-point",728560533));
var get_circle_styles = ((function (points,map__29110,map__29110__$1,width,style,padding,svg,circles,map__29111,map__29111__$1,path_styles,circles_styles,selected_styles,map__29108,map__29108__$1,opts,this$,state,sync_fn){
return (function (idx){
if(cljs.core._EQ_.call(null,idx,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))){
return selected_styles;
} else {
return circles_styles;
}
});})(points,map__29110,map__29110__$1,width,style,padding,svg,circles,map__29111,map__29111__$1,path_styles,circles_styles,selected_styles,map__29108,map__29108__$1,opts,this$,state,sync_fn))
;
var circle_mouse_down = ((function (points,map__29110,map__29110__$1,width,style,padding,svg,circles,map__29111,map__29111__$1,path_styles,circles_styles,selected_styles,get_circle_styles,map__29108,map__29108__$1,opts,this$,state,sync_fn){
return (function (d,idx){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),idx,new cljs.core.Keyword(null,"dragged","dragged",208354265),true);

return binaural_beats$spline_editor$redraw.call(null,opts);
});})(points,map__29110,map__29110__$1,width,style,padding,svg,circles,map__29111,map__29111__$1,path_styles,circles_styles,selected_styles,get_circle_styles,map__29108,map__29108__$1,opts,this$,state,sync_fn))
;
var circle_mouseup = ((function (points,map__29110,map__29110__$1,width,style,padding,svg,circles,map__29111,map__29111__$1,path_styles,circles_styles,selected_styles,get_circle_styles,circle_mouse_down,map__29108,map__29108__$1,opts,this$,state,sync_fn){
return (function (d,i){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"dragged","dragged",208354265),null);

return sync_fn.call(null);
});})(points,map__29110,map__29110__$1,width,style,padding,svg,circles,map__29111,map__29111__$1,path_styles,circles_styles,selected_styles,get_circle_styles,circle_mouse_down,map__29108,map__29108__$1,opts,this$,state,sync_fn))
;
var path_datum = binaural_beats.utils.js_GT_.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.second.call(null,cljs.core.first.call(null,points))], null),cljs.core.conj.call(null,cljs.core.vec.call(null,points),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((2) * padding) + width),cljs.core.second.call(null,cljs.core.last.call(null,points))], null))));
var circle_selected_QMARK_ = ((function (points,map__29110,map__29110__$1,width,style,padding,svg,circles,map__29111,map__29111__$1,path_styles,circles_styles,selected_styles,get_circle_styles,circle_mouse_down,circle_mouseup,path_datum,map__29108,map__29108__$1,opts,this$,state,sync_fn){
return (function (d,i){
return cljs.core._EQ_.call(null,i,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
});})(points,map__29110,map__29110__$1,width,style,padding,svg,circles,map__29111,map__29111__$1,path_styles,circles_styles,selected_styles,get_circle_styles,circle_mouse_down,circle_mouseup,path_datum,map__29108,map__29108__$1,opts,this$,state,sync_fn))
;
var path = svg.select("path");
path.datum(path_datum).attr("d",binaural_beats.utils.line);

binaural_beats.utils.attrs.call(null,path,path_styles);

circles.classed("selected",circle_selected_QMARK_).on("mousedown",circle_mouse_down).on("mouseup",circle_mouseup);

circles.enter().append("circle").on("mousedown",circle_mouse_down).attr("cx",((function (points,map__29110,map__29110__$1,width,style,padding,svg,circles,map__29111,map__29111__$1,path_styles,circles_styles,selected_styles,get_circle_styles,circle_mouse_down,circle_mouseup,path_datum,circle_selected_QMARK_,path,map__29108,map__29108__$1,opts,this$,state,sync_fn){
return (function (x){
return (x[(0)]);
});})(points,map__29110,map__29110__$1,width,style,padding,svg,circles,map__29111,map__29111__$1,path_styles,circles_styles,selected_styles,get_circle_styles,circle_mouse_down,circle_mouseup,path_datum,circle_selected_QMARK_,path,map__29108,map__29108__$1,opts,this$,state,sync_fn))
).attr("cy",((function (points,map__29110,map__29110__$1,width,style,padding,svg,circles,map__29111,map__29111__$1,path_styles,circles_styles,selected_styles,get_circle_styles,circle_mouse_down,circle_mouseup,path_datum,circle_selected_QMARK_,path,map__29108,map__29108__$1,opts,this$,state,sync_fn){
return (function (x){
return (x[(1)]);
});})(points,map__29110,map__29110__$1,width,style,padding,svg,circles,map__29111,map__29111__$1,path_styles,circles_styles,selected_styles,get_circle_styles,circle_mouse_down,circle_mouseup,path_datum,circle_selected_QMARK_,path,map__29108,map__29108__$1,opts,this$,state,sync_fn))
);

circles.exit().remove();

svg.selectAll("circle").transition((500)).attr("r",((function (points,map__29110,map__29110__$1,width,style,padding,svg,circles,map__29111,map__29111__$1,path_styles,circles_styles,selected_styles,get_circle_styles,circle_mouse_down,circle_mouseup,path_datum,circle_selected_QMARK_,path,map__29108,map__29108__$1,opts,this$,state,sync_fn){
return (function (d,i){
return new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(get_circle_styles.call(null,i));
});})(points,map__29110,map__29110__$1,width,style,padding,svg,circles,map__29111,map__29111__$1,path_styles,circles_styles,selected_styles,get_circle_styles,circle_mouse_down,circle_mouseup,path_datum,circle_selected_QMARK_,path,map__29108,map__29108__$1,opts,this$,state,sync_fn))
).attr("fill",((function (points,map__29110,map__29110__$1,width,style,padding,svg,circles,map__29111,map__29111__$1,path_styles,circles_styles,selected_styles,get_circle_styles,circle_mouse_down,circle_mouseup,path_datum,circle_selected_QMARK_,path,map__29108,map__29108__$1,opts,this$,state,sync_fn){
return (function (d,i){
return new cljs.core.Keyword(null,"fill","fill",883462889).cljs$core$IFn$_invoke$arity$1(get_circle_styles.call(null,i));
});})(points,map__29110,map__29110__$1,width,style,padding,svg,circles,map__29111,map__29111__$1,path_styles,circles_styles,selected_styles,get_circle_styles,circle_mouse_down,circle_mouseup,path_datum,circle_selected_QMARK_,path,map__29108,map__29108__$1,opts,this$,state,sync_fn))
).attr("stroke",((function (points,map__29110,map__29110__$1,width,style,padding,svg,circles,map__29111,map__29111__$1,path_styles,circles_styles,selected_styles,get_circle_styles,circle_mouse_down,circle_mouseup,path_datum,circle_selected_QMARK_,path,map__29108,map__29108__$1,opts,this$,state,sync_fn){
return (function (d,i){
return new cljs.core.Keyword(null,"stroke","stroke",1741823555).cljs$core$IFn$_invoke$arity$1(get_circle_styles.call(null,i));
});})(points,map__29110,map__29110__$1,width,style,padding,svg,circles,map__29111,map__29111__$1,path_styles,circles_styles,selected_styles,get_circle_styles,circle_mouse_down,circle_mouseup,path_datum,circle_selected_QMARK_,path,map__29108,map__29108__$1,opts,this$,state,sync_fn))
).attr("stroke-width",((function (points,map__29110,map__29110__$1,width,style,padding,svg,circles,map__29111,map__29111__$1,path_styles,circles_styles,selected_styles,get_circle_styles,circle_mouse_down,circle_mouseup,path_datum,circle_selected_QMARK_,path,map__29108,map__29108__$1,opts,this$,state,sync_fn){
return (function (d,i){
return new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435).cljs$core$IFn$_invoke$arity$1(get_circle_styles.call(null,i));
});})(points,map__29110,map__29110__$1,width,style,padding,svg,circles,map__29111,map__29111__$1,path_styles,circles_styles,selected_styles,get_circle_styles,circle_mouse_down,circle_mouseup,path_datum,circle_selected_QMARK_,path,map__29108,map__29108__$1,opts,this$,state,sync_fn))
);

var temp__4657__auto__ = binaural_beats.utils.d3.event;
if(cljs.core.truth_(temp__4657__auto__)){
var e = temp__4657__auto__;
e.preventDefault();

return e.stopPropagation();
} else {
return null;
}
});
binaural_beats.spline_editor.init = (function binaural_beats$spline_editor$init(p__29114){
var map__29119 = p__29114;
var map__29119__$1 = ((((!((map__29119 == null)))?((((map__29119.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29119.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29119):map__29119);
var this$ = cljs.core.get.call(null,map__29119__$1,new cljs.core.Keyword(null,"this","this",-611633625));
var state = cljs.core.get.call(null,map__29119__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var sync_fn = cljs.core.get.call(null,map__29119__$1,new cljs.core.Keyword(null,"sync-fn","sync-fn",1366504042));
var map__29121 = reagent.core.props.call(null,this$);
var map__29121__$1 = ((((!((map__29121 == null)))?((((map__29121.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29121.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29121):map__29121);
var width = cljs.core.get.call(null,map__29121__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__29121__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var style = cljs.core.get.call(null,map__29121__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var points = new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var redraw = ((function (map__29121,map__29121__$1,width,height,style,points,map__29119,map__29119__$1,this$,state,sync_fn){
return (function (){
return binaural_beats.spline_editor.redraw.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"this","this",-611633625),this$,new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"sync-fn","sync-fn",1366504042),sync_fn], null));
});})(map__29121,map__29121__$1,width,height,style,points,map__29119,map__29119__$1,this$,state,sync_fn))
;
var svg = binaural_beats.utils.d3.select(reagent.core.dom_node.call(null,this$)).select("svg");
binaural_beats.utils.styles.call(null,svg,new cljs.core.Keyword(null,"svg","svg",856789142).cljs$core$IFn$_invoke$arity$1(binaural_beats.spline_editor.merged_with_defaults.call(null,style)));

svg.on("mousedown",((function (map__29121,map__29121__$1,width,height,style,points,redraw,svg,map__29119,map__29119__$1,this$,state,sync_fn){
return (function (){
return binaural_beats.spline_editor.mousedown.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"svg","svg",856789142),svg,new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"on-done","on-done",-699252077),redraw], null));
});})(map__29121,map__29121__$1,width,height,style,points,redraw,svg,map__29119,map__29119__$1,this$,state,sync_fn))
);

svg.append("path").datum(binaural_beats.utils.js_GT_.call(null,cljs.core.map.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)),points))).attr("d",binaural_beats.utils.line).attr("fill","none").attr("class","line");

binaural_beats.utils.d3.select(window).on("keydown",((function (map__29121,map__29121__$1,width,height,style,points,redraw,svg,map__29119,map__29119__$1,this$,state,sync_fn){
return (function (){
return binaural_beats.spline_editor.keydown.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"points","points",-1486596883),points,new cljs.core.Keyword(null,"on-done","on-done",-699252077),redraw,new cljs.core.Keyword(null,"state","state",-1988618099),state], null));
});})(map__29121,map__29121__$1,width,height,style,points,redraw,svg,map__29119,map__29119__$1,this$,state,sync_fn))
);

binaural_beats.utils.d3.select(reagent.core.dom_node.call(null,this$)).select("svg").on("mousemove",((function (map__29121,map__29121__$1,width,height,style,points,redraw,svg,map__29119,map__29119__$1,this$,state,sync_fn){
return (function (){
return binaural_beats.spline_editor.mousemove.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"svg","svg",856789142),svg,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"padding","padding",1660304693).cljs$core$IFn$_invoke$arity$2(style,(0)),new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"on-done","on-done",-699252077),redraw], null));
});})(map__29121,map__29121__$1,width,height,style,points,redraw,svg,map__29119,map__29119__$1,this$,state,sync_fn))
).on("mouseup",((function (map__29121,map__29121__$1,width,height,style,points,redraw,svg,map__29119,map__29119__$1,this$,state,sync_fn){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"dragged","dragged",208354265),null);

return sync_fn.call(null);
});})(map__29121,map__29121__$1,width,height,style,points,redraw,svg,map__29119,map__29119__$1,this$,state,sync_fn))
);

return redraw.call(null);
});
binaural_beats.spline_editor.spline_editor = (function binaural_beats$spline_editor$spline_editor(p__29123){
var map__29156 = p__29123;
var map__29156__$1 = ((((!((map__29156 == null)))?((((map__29156.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29156.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29156):map__29156);
var width = cljs.core.get.call(null,map__29156__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__29156__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var style = cljs.core.get.call(null,map__29156__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var ranges = cljs.core.get.call(null,map__29156__$1,new cljs.core.Keyword(null,"ranges","ranges",1887686682));
var points = cljs.core.get.call(null,map__29156__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var padding = new cljs.core.Keyword(null,"padding","padding",1660304693).cljs$core$IFn$_invoke$arity$2(style,(0));
var scale_points = ((function (padding,map__29156,map__29156__$1,width,height,style,ranges,points){
return (function (p__29158,points__$1){
var map__29159 = p__29158;
var map__29159__$1 = ((((!((map__29159 == null)))?((((map__29159.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29159.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29159):map__29159);
var vec__29160 = cljs.core.get.call(null,map__29159__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var minx = cljs.core.nth.call(null,vec__29160,(0),null);
var maxx = cljs.core.nth.call(null,vec__29160,(1),null);
var vec__29163 = cljs.core.get.call(null,map__29159__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var miny = cljs.core.nth.call(null,vec__29163,(0),null);
var maxy = cljs.core.nth.call(null,vec__29163,(1),null);
return cljs.core.mapv.call(null,((function (map__29159,map__29159__$1,vec__29160,minx,maxx,vec__29163,miny,maxy,padding,map__29156,map__29156__$1,width,height,style,ranges,points){
return (function (p__29167){
var vec__29168 = p__29167;
var x = cljs.core.nth.call(null,vec__29168,(0),null);
var y = cljs.core.nth.call(null,vec__29168,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [binaural_beats.utils.scale_range.call(null,x,minx,maxx,padding,(padding + width)),binaural_beats.utils.scale_range.call(null,y,maxy,miny,padding,(padding + height))], null);
});})(map__29159,map__29159__$1,vec__29160,minx,maxx,vec__29163,miny,maxy,padding,map__29156,map__29156__$1,width,height,style,ranges,points))
,points__$1);
});})(padding,map__29156,map__29156__$1,width,height,style,ranges,points))
;
var state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dragged","dragged",208354265),null,new cljs.core.Keyword(null,"selected","selected",574897764),(0),new cljs.core.Keyword(null,"points","points",-1486596883),scale_points.call(null,ranges,cljs.core.deref.call(null,points))], null));
var sync_points = ((function (padding,scale_points,state,map__29156,map__29156__$1,width,height,style,ranges,points){
return (function (p__29171,ps){
var map__29172 = p__29171;
var map__29172__$1 = ((((!((map__29172 == null)))?((((map__29172.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29172.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29172):map__29172);
var vec__29173 = cljs.core.get.call(null,map__29172__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var minx = cljs.core.nth.call(null,vec__29173,(0),null);
var maxx = cljs.core.nth.call(null,vec__29173,(1),null);
var vec__29176 = cljs.core.get.call(null,map__29172__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var miny = cljs.core.nth.call(null,vec__29176,(0),null);
var maxy = cljs.core.nth.call(null,vec__29176,(1),null);
return cljs.core.reset_BANG_.call(null,ps,cljs.core.mapv.call(null,((function (map__29172,map__29172__$1,vec__29173,minx,maxx,vec__29176,miny,maxy,padding,scale_points,state,map__29156,map__29156__$1,width,height,style,ranges,points){
return (function (p__29180){
var vec__29181 = p__29180;
var x = cljs.core.nth.call(null,vec__29181,(0),null);
var y = cljs.core.nth.call(null,vec__29181,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [binaural_beats.utils.scale_range.call(null,x,padding,(padding + width),minx,maxx),binaural_beats.utils.scale_range.call(null,y,padding,(padding + height),maxy,miny)], null);
});})(map__29172,map__29172__$1,vec__29173,minx,maxx,vec__29176,miny,maxy,padding,scale_points,state,map__29156,map__29156__$1,width,height,style,ranges,points))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))));
});})(padding,scale_points,state,map__29156,map__29156__$1,width,height,style,ranges,points))
;
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (padding,scale_points,state,sync_points,map__29156,map__29156__$1,width,height,style,ranges,points){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.spline-editor-wrap","div.spline-editor-wrap",32705140),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(((2) * new cljs.core.Keyword(null,"padding","padding",1660304693).cljs$core$IFn$_invoke$arity$2(style,(0))) + width),new cljs.core.Keyword(null,"height","height",1025178622),(((2) * new cljs.core.Keyword(null,"padding","padding",1660304693).cljs$core$IFn$_invoke$arity$2(style,(0))) + height)], null)], null)], null);
});})(padding,scale_points,state,sync_points,map__29156,map__29156__$1,width,height,style,ranges,points))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (padding,scale_points,state,sync_points,map__29156,map__29156__$1,width,height,style,ranges,points){
return (function (this$){
var map__29184 = reagent.core.props.call(null,this$);
var map__29184__$1 = ((((!((map__29184 == null)))?((((map__29184.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29184.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29184):map__29184);
var rs = cljs.core.get.call(null,map__29184__$1,new cljs.core.Keyword(null,"ranges","ranges",1887686682));
var ps = cljs.core.get.call(null,map__29184__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"points","points",-1486596883),scale_points.call(null,rs,cljs.core.deref.call(null,ps)));

return binaural_beats.spline_editor.init.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"this","this",-611633625),this$,new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"sync-fn","sync-fn",1366504042),cljs.core.partial.call(null,sync_points,rs,ps)], null));
});})(padding,scale_points,state,sync_points,map__29156,map__29156__$1,width,height,style,ranges,points))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (padding,scale_points,state,sync_points,map__29156,map__29156__$1,width,height,style,ranges,points){
return (function (this$){
var map__29186 = reagent.core.props.call(null,this$);
var map__29186__$1 = ((((!((map__29186 == null)))?((((map__29186.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29186.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29186):map__29186);
var rs = cljs.core.get.call(null,map__29186__$1,new cljs.core.Keyword(null,"ranges","ranges",1887686682));
var ps = cljs.core.get.call(null,map__29186__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return binaural_beats.spline_editor.init.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"this","this",-611633625),this$,new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"sync-fn","sync-fn",1366504042),cljs.core.partial.call(null,sync_points,rs,ps)], null));
});})(padding,scale_points,state,sync_points,map__29156,map__29156__$1,width,height,style,ranges,points))
], null));
});

//# sourceMappingURL=spline_editor.js.map?rel=1480772921536