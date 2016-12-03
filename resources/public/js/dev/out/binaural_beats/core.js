// Compiled by ClojureScript 1.9.229 {}
goog.provide('binaural_beats.core');
goog.require('cljs.core');
goog.require('binaural_beats.audio');
goog.require('binaural_beats.barchart_editor');
goog.require('binaural_beats.utils');
goog.require('reagent.core');
goog.require('cljs.pprint');
goog.require('binaural_beats.colors');
goog.require('binaural_beats.spline_editor');
cljs.core.enable_console_print_BANG_.call(null);
binaural_beats.core.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),"BinBits",new cljs.core.Keyword(null,"assets","assets",210278279),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"duration","duration",1444101068),(10),new cljs.core.Keyword(null,"max-duration","max-duration",-1608458034),(10000),new cljs.core.Keyword(null,"duration-step","duration-step",364365009),(1),new cljs.core.Keyword(null,"tracks","tracks",-326768501),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"binaural","binaural",-1856985312),new cljs.core.Keyword(null,"delta","delta",108939957),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4)], null)], null),new cljs.core.Keyword(null,"fq","fq",-307514859),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(100)], null)], null),new cljs.core.Keyword(null,"gain","gain",1350925045),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.5], null)], null),new cljs.core.Keyword(null,"harmonics","harmonics",-1090666048),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),0.5,0.3,0.1,0.05,0.03], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pink","pink",393815864),new cljs.core.Keyword(null,"gain","gain",1350925045),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.1], null)], null)], null)], null),new cljs.core.Keyword(null,"tracks-settings","tracks-settings",-1157289090),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"delta","delta",108939957),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(12)], null),new cljs.core.Keyword(null,"style","style",-496642736),binaural_beats.spline_editor.simple_styles.call(null,"#F4B5BD","#FD6467","#FAEFD1"),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(200)], null),new cljs.core.Keyword(null,"step","step",1288888124),(1)], null),new cljs.core.Keyword(null,"fq","fq",-307514859),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(60),(400)], null),new cljs.core.Keyword(null,"style","style",-496642736),binaural_beats.spline_editor.simple_styles.call(null,"#E1AF00","#EBCC2A","#f3f3f3"),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10000)], null),new cljs.core.Keyword(null,"step","step",1288888124),(1)], null),new cljs.core.Keyword(null,"gain","gain",1350925045),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.Keyword(null,"style","style",-496642736),binaural_beats.spline_editor.simple_styles.call(null,"#24281A","#FD6467","#D5D5D3"),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.Keyword(null,"step","step",1288888124),0.01], null),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"delta","delta",108939957),new cljs.core.Keyword(null,"width","width",-384071477),(800),new cljs.core.Keyword(null,"height","height",1025178622),(200)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ranges","ranges",1887686682),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gain","gain",1350925045),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null)], null)], null)], null));
binaural_beats.core.binaural_editor = (function binaural_beats$core$binaural_editor(p__38456){
var map__38478 = p__38456;
var map__38478__$1 = ((((!((map__38478 == null)))?((((map__38478.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38478.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38478):map__38478);
var track = cljs.core.get.call(null,map__38478__$1,new cljs.core.Keyword(null,"track","track",195787487));
var settings = cljs.core.get.call(null,map__38478__$1,new cljs.core.Keyword(null,"settings","settings",1556144875));
var selected = reagent.core.cursor.call(null,settings,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764)], null));
var width = reagent.ratom.make_reaction.call(null,((function (selected,map__38478,map__38478__$1,track,settings){
return (function (){
return new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,settings));
});})(selected,map__38478,map__38478__$1,track,settings))
);
var height = reagent.ratom.make_reaction.call(null,((function (selected,width,map__38478,map__38478__$1,track,settings){
return (function (){
return new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,settings));
});})(selected,width,map__38478,map__38478__$1,track,settings))
);
var selected_settings = reagent.ratom.make_reaction.call(null,((function (selected,width,height,map__38478,map__38478__$1,track,settings){
return (function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,settings),cljs.core.deref.call(null,selected));
});})(selected,width,height,map__38478,map__38478__$1,track,settings))
);
var style = reagent.ratom.make_reaction.call(null,((function (selected,width,height,selected_settings,map__38478,map__38478__$1,track,settings){
return (function (){
return new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,selected_settings));
});})(selected,width,height,selected_settings,map__38478,map__38478__$1,track,settings))
);
var ranges = binaural_beats.utils.rwrap.call(null,((function (selected,width,height,selected_settings,style,map__38478,map__38478__$1,track,settings){
return (function (){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,binaural_beats.core.state))], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,selected_settings))], null);
});})(selected,width,height,selected_settings,style,map__38478,map__38478__$1,track,settings))
,cljs.core.PersistentArrayMap.fromArray([settings,((function (selected,width,height,selected_settings,style,map__38478,map__38478__$1,track,settings){
return (function (x,p__38480){
var map__38481 = p__38480;
var map__38481__$1 = ((((!((map__38481 == null)))?((((map__38481.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38481.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38481):map__38481);
var y = cljs.core.get.call(null,map__38481__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs.core.assoc_in.call(null,x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,selected),new cljs.core.Keyword(null,"range","range",1639692286)], null),y);
});})(selected,width,height,selected_settings,style,map__38478,map__38478__$1,track,settings))
,binaural_beats.core.state,((function (selected,width,height,selected_settings,style,map__38478,map__38478__$1,track,settings){
return (function (x,p__38483){
var map__38484 = p__38483;
var map__38484__$1 = ((((!((map__38484 == null)))?((((map__38484.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38484.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38484):map__38484);
var vec__38485 = cljs.core.get.call(null,map__38484__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var _ = cljs.core.nth.call(null,vec__38485,(0),null);
var maxx = cljs.core.nth.call(null,vec__38485,(1),null);
return cljs.core.assoc.call(null,x,new cljs.core.Keyword(null,"duration","duration",1444101068),maxx);
});})(selected,width,height,selected_settings,style,map__38478,map__38478__$1,track,settings))
], true, false));
var spline_editor_QMARK_ = reagent.ratom.make_reaction.call(null,((function (selected,width,height,selected_settings,style,ranges,map__38478,map__38478__$1,track,settings){
return (function (){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fq","fq",-307514859),null,new cljs.core.Keyword(null,"delta","delta",108939957),null,new cljs.core.Keyword(null,"gain","gain",1350925045),null], null), null).call(null,cljs.core.deref.call(null,selected));
});})(selected,width,height,selected_settings,style,ranges,map__38478,map__38478__$1,track,settings))
);
return ((function (selected,width,height,selected_settings,style,ranges,spline_editor_QMARK_,map__38478,map__38478__$1,track,settings){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.multi-spline","div.multi-spline",743960526),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name.call(null,cljs.core.deref.call(null,selected)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (selected,width,height,selected_settings,style,ranges,spline_editor_QMARK_,map__38478,map__38478__$1,track,settings){
return (function (p1__38453_SHARP_){
return cljs.core.reset_BANG_.call(null,selected,cljs.core.keyword.call(null,binaural_beats.utils.tval.call(null,p1__38453_SHARP_)));
});})(selected,width,height,selected_settings,style,ranges,spline_editor_QMARK_,map__38478,map__38478__$1,track,settings))
], null),(function (){var iter__27205__auto__ = ((function (selected,width,height,selected_settings,style,ranges,spline_editor_QMARK_,map__38478,map__38478__$1,track,settings){
return (function binaural_beats$core$binaural_editor_$_iter__38489(s__38490){
return (new cljs.core.LazySeq(null,((function (selected,width,height,selected_settings,style,ranges,spline_editor_QMARK_,map__38478,map__38478__$1,track,settings){
return (function (){
var s__38490__$1 = s__38490;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__38490__$1);
if(temp__4657__auto__){
var s__38490__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38490__$2)){
var c__27203__auto__ = cljs.core.chunk_first.call(null,s__38490__$2);
var size__27204__auto__ = cljs.core.count.call(null,c__27203__auto__);
var b__38492 = cljs.core.chunk_buffer.call(null,size__27204__auto__);
if((function (){var i__38491 = (0);
while(true){
if((i__38491 < size__27204__auto__)){
var s = cljs.core._nth.call(null,c__27203__auto__,i__38491);
cljs.core.chunk_append.call(null,b__38492,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),s,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name.call(null,s)], null),cljs.core.name.call(null,s)], null));

var G__38499 = (i__38491 + (1));
i__38491 = G__38499;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38492),binaural_beats$core$binaural_editor_$_iter__38489.call(null,cljs.core.chunk_rest.call(null,s__38490__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38492),null);
}
} else {
var s = cljs.core.first.call(null,s__38490__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),s,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name.call(null,s)], null),cljs.core.name.call(null,s)], null),binaural_beats$core$binaural_editor_$_iter__38489.call(null,cljs.core.rest.call(null,s__38490__$2)));
}
} else {
return null;
}
break;
}
});})(selected,width,height,selected_settings,style,ranges,spline_editor_QMARK_,map__38478,map__38478__$1,track,settings))
,null,null));
});})(selected,width,height,selected_settings,style,ranges,spline_editor_QMARK_,map__38478,map__38478__$1,track,settings))
;
return iter__27205__auto__.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delta","delta",108939957),new cljs.core.Keyword(null,"fq","fq",-307514859),new cljs.core.Keyword(null,"gain","gain",1350925045),new cljs.core.Keyword(null,"harmonics","harmonics",-1090666048)], null));
})()], null),(cljs.core.truth_(cljs.core.deref.call(null,spline_editor_QMARK_))?(function (){var vec__38493 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ranges));
var min = cljs.core.nth.call(null,vec__38493,(0),null);
var max = cljs.core.nth.call(null,vec__38493,(1),null);
var vec__38496 = new cljs.core.Keyword(null,"bounds","bounds",1691609455).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,selected_settings));
var dwn = cljs.core.nth.call(null,vec__38496,(0),null);
var up = cljs.core.nth.call(null,vec__38496,(1),null);
var step = new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,selected_settings));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"40px","40px",-1191086507)], null),new cljs.core.Keyword(null,"value","value",305978217),min,new cljs.core.Keyword(null,"min","min",444991522),dwn,new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"step","step",1288888124),step,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (vec__38493,min,max,vec__38496,dwn,up,step,selected,width,height,selected_settings,style,ranges,spline_editor_QMARK_,map__38478,map__38478__$1,track,settings){
return (function (p1__38454_SHARP_){
return cljs.core.swap_BANG_.call(null,ranges,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),parseFloat(binaural_beats.utils.tval.call(null,p1__38454_SHARP_)));
});})(vec__38493,min,max,vec__38496,dwn,up,step,selected,width,height,selected_settings,style,ranges,spline_editor_QMARK_,map__38478,map__38478__$1,track,settings))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"40px","40px",-1191086507)], null),new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),up,new cljs.core.Keyword(null,"step","step",1288888124),step,new cljs.core.Keyword(null,"value","value",305978217),max,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (vec__38493,min,max,vec__38496,dwn,up,step,selected,width,height,selected_settings,style,ranges,spline_editor_QMARK_,map__38478,map__38478__$1,track,settings){
return (function (p1__38455_SHARP_){
return cljs.core.swap_BANG_.call(null,ranges,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),parseFloat(binaural_beats.utils.tval.call(null,p1__38455_SHARP_)));
});})(vec__38493,min,max,vec__38496,dwn,up,step,selected,width,height,selected_settings,style,ranges,spline_editor_QMARK_,map__38478,map__38478__$1,track,settings))
], null)], null)], null);
})():null),(cljs.core.truth_(cljs.core.deref.call(null,spline_editor_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [binaural_beats.spline_editor.spline_editor,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"points","points",-1486596883),reagent.core.cursor.call(null,track,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,selected)], null)),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.deref.call(null,style),new cljs.core.Keyword(null,"ranges","ranges",1887686682),cljs.core.deref.call(null,ranges),new cljs.core.Keyword(null,"height","height",1025178622),cljs.core.deref.call(null,height),new cljs.core.Keyword(null,"width","width",-384071477),cljs.core.deref.call(null,width)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [binaural_beats.barchart_editor.barchart_editor,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"points","points",-1486596883),reagent.core.cursor.call(null,track,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,selected)], null)),new cljs.core.Keyword(null,"height","height",1025178622),cljs.core.deref.call(null,height),new cljs.core.Keyword(null,"width","width",-384071477),cljs.core.deref.call(null,width)], null)], null))], null);
});
;})(selected,width,height,selected_settings,style,ranges,spline_editor_QMARK_,map__38478,map__38478__$1,track,settings))
});
binaural_beats.core.main = (function binaural_beats$core$main(){
var delta_pts = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(4)], null)], null));
var fq_pts = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(90)], null)], null));
var envelope = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),0.5], null)], null));
var duration = reagent.core.atom.call(null,(10));
var ctx = reagent.core.atom.call(null,null);
return ((function (delta_pts,fq_pts,envelope,duration,ctx){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Binaural Beats Generator"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [binaural_beats.core.binaural_editor,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"track","track",195787487),reagent.core.cursor.call(null,binaural_beats.core.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tracks","tracks",-326768501),(0)], null)),new cljs.core.Keyword(null,"settings","settings",1556144875),reagent.core.cursor.call(null,binaural_beats.core.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tracks-settings","tracks-settings",-1157289090),(0)], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"duration: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"40px","40px",-1191086507)], null),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,binaural_beats.core.state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (delta_pts,fq_pts,envelope,duration,ctx){
return (function (p1__38500_SHARP_){
return cljs.core.swap_BANG_.call(null,binaural_beats.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"duration","duration",1444101068),(binaural_beats.utils.tval.call(null,p1__38500_SHARP_) | (0)));
});})(delta_pts,fq_pts,envelope,duration,ctx))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (delta_pts,fq_pts,envelope,duration,ctx){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,ctx))){
return binaural_beats.audio.close_ctx.call(null,ctx);
} else {
return binaural_beats.audio.play.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ctx","ctx",-493610118),ctx,new cljs.core.Keyword(null,"deltas","deltas",1038932606),cljs.core.deref.call(null,delta_pts),new cljs.core.Keyword(null,"fqs","fqs",-876300361),cljs.core.deref.call(null,fq_pts),new cljs.core.Keyword(null,"duration","duration",1444101068),cljs.core.deref.call(null,duration),new cljs.core.Keyword(null,"envelope","envelope",-236796318),cljs.core.deref.call(null,envelope)], null));
}
});})(delta_pts,fq_pts,envelope,duration,ctx))
], null),"play/stop"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (delta_pts,fq_pts,envelope,duration,ctx){
return (function (){
return binaural_beats.audio.export_buffer.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"deltas","deltas",1038932606),cljs.core.deref.call(null,delta_pts),new cljs.core.Keyword(null,"fqs","fqs",-876300361),cljs.core.deref.call(null,fq_pts),new cljs.core.Keyword(null,"duration","duration",1444101068),cljs.core.deref.call(null,duration),new cljs.core.Keyword(null,"envelope","envelope",-236796318),cljs.core.deref.call(null,envelope)], null));
});})(delta_pts,fq_pts,envelope,duration,ctx))
], null),"export"], null)], null)], null);
});
;})(delta_pts,fq_pts,envelope,duration,ctx))
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [binaural_beats.core.main], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map?rel=1480773034121