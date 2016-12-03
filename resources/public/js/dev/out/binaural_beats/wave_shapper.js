// Compiled by ClojureScript 1.9.229 {}
goog.provide('binaural_beats.wave_shapper');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('binaural_beats.audio');
goog.require('binaural_beats.spline_editor');
goog.require('cljs_bach.synthesis');
if(typeof binaural_beats.wave_shapper.ctx !== 'undefined'){
} else {
binaural_beats.wave_shapper.ctx = cljs_bach.synthesis.audio_context.call(null);
}
binaural_beats.wave_shapper.wave = (function binaural_beats$wave_shapper$wave(p__29190){
var map__29196 = p__29190;
var map__29196__$1 = ((((!((map__29196 == null)))?((((map__29196.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29196.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29196):map__29196);
var vec__29197 = cljs.core.get.call(null,map__29196__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
var real = cljs.core.nth.call(null,vec__29197,(0),null);
var imag = cljs.core.nth.call(null,vec__29197,(1),null);
var ctx = cljs.core.get.call(null,map__29196__$1,new cljs.core.Keyword(null,"ctx","ctx",-493610118));
return ctx.createPeriodicWave((new Float32Array(cljs.core.clj__GT_js.call(null,real))),(new Float32Array(cljs.core.clj__GT_js.call(null,imag))));
});
binaural_beats.wave_shapper.osc = (function binaural_beats$wave_shapper$osc(ctx){
return ctx.createOscillator();
});
binaural_beats.wave_shapper.set_wave = (function binaural_beats$wave_shapper$set_wave(osc,w){
if(cljs.core.map_QMARK_.call(null,w)){
return binaural_beats$wave_shapper$set_wave.call(null,osc,binaural_beats.wave_shapper.wave.call(null,w));
} else {
var G__29202 = osc;
G__29202.setPeriodicWave(w);

return G__29202;
}
});
binaural_beats.wave_shapper.gain = (function binaural_beats$wave_shapper$gain(ctx,v){
var G__29204 = ctx.createGain();
(G__29204["gain"]["value"] = v);

return G__29204;
});
binaural_beats.wave_shapper.c_GT_ = (function binaural_beats$wave_shapper$c_GT_(var_args){
var args__27507__auto__ = [];
var len__27500__auto___29216 = arguments.length;
var i__27501__auto___29217 = (0);
while(true){
if((i__27501__auto___29217 < len__27500__auto___29216)){
args__27507__auto__.push((arguments[i__27501__auto___29217]));

var G__29218 = (i__27501__auto___29217 + (1));
i__27501__auto___29217 = G__29218;
continue;
} else {
}
break;
}

var argseq__27508__auto__ = ((((0) < args__27507__auto__.length))?(new cljs.core.IndexedSeq(args__27507__auto__.slice((0)),(0),null)):null);
return binaural_beats.wave_shapper.c_GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__27508__auto__);
});

binaural_beats.wave_shapper.c_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var seq__29206 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),(1),nodes));
var chunk__29207 = null;
var count__29208 = (0);
var i__29209 = (0);
while(true){
if((i__29209 < count__29208)){
var vec__29210 = cljs.core._nth.call(null,chunk__29207,i__29209);
var a = cljs.core.nth.call(null,vec__29210,(0),null);
var b = cljs.core.nth.call(null,vec__29210,(1),null);
a.connect(b);

var G__29219 = seq__29206;
var G__29220 = chunk__29207;
var G__29221 = count__29208;
var G__29222 = (i__29209 + (1));
seq__29206 = G__29219;
chunk__29207 = G__29220;
count__29208 = G__29221;
i__29209 = G__29222;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29206);
if(temp__4657__auto__){
var seq__29206__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29206__$1)){
var c__27236__auto__ = cljs.core.chunk_first.call(null,seq__29206__$1);
var G__29223 = cljs.core.chunk_rest.call(null,seq__29206__$1);
var G__29224 = c__27236__auto__;
var G__29225 = cljs.core.count.call(null,c__27236__auto__);
var G__29226 = (0);
seq__29206 = G__29223;
chunk__29207 = G__29224;
count__29208 = G__29225;
i__29209 = G__29226;
continue;
} else {
var vec__29213 = cljs.core.first.call(null,seq__29206__$1);
var a = cljs.core.nth.call(null,vec__29213,(0),null);
var b = cljs.core.nth.call(null,vec__29213,(1),null);
a.connect(b);

var G__29227 = cljs.core.next.call(null,seq__29206__$1);
var G__29228 = null;
var G__29229 = (0);
var G__29230 = (0);
seq__29206 = G__29227;
chunk__29207 = G__29228;
count__29208 = G__29229;
i__29209 = G__29230;
continue;
}
} else {
return null;
}
}
break;
}
});

binaural_beats.wave_shapper.c_GT_.cljs$lang$maxFixedArity = (0);

binaural_beats.wave_shapper.c_GT_.cljs$lang$applyTo = (function (seq29205){
return binaural_beats.wave_shapper.c_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29205));
});

binaural_beats.wave_shapper.wave_shapper = (function binaural_beats$wave_shapper$wave_shapper(){
var points = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),0.2,new cljs.core.Keyword(null,"y","y",-1757859776),0.2], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),0.7,new cljs.core.Keyword(null,"y","y",-1757859776),0.7], null)], null));
var osc_STAR_ = binaural_beats.wave_shapper.osc.call(null,binaural_beats.wave_shapper.ctx);
var update_wave = ((function (points,osc_STAR_){
return (function (points__$1){
return binaural_beats.wave_shapper.set_wave.call(null,osc_STAR_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ctx","ctx",-493610118),binaural_beats.wave_shapper.ctx,new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.apply.call(null,cljs.core.map,cljs.core.vector,cljs.core.mapv.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)),points__$1))], null));
});})(points,osc_STAR_))
;
cljs.core.add_watch.call(null,points,new cljs.core.Keyword(null,"foo","foo",1268894036),((function (points,osc_STAR_,update_wave){
return (function (_,___$1,___$2,n){
cljs.core.println.call(null,"update");

return update_wave.call(null,n);
});})(points,osc_STAR_,update_wave))
);

binaural_beats.wave_shapper.c_GT_.call(null,osc_STAR_,binaural_beats.wave_shapper.gain.call(null,binaural_beats.wave_shapper.ctx,(1)),binaural_beats.wave_shapper.ctx.destination);

return ((function (points,osc_STAR_,update_wave){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.wave-shapper","div.wave-shapper",-449069313),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [binaural_beats.spline_editor.spline_editor,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"points","points",-1486596883),points,new cljs.core.Keyword(null,"ranges","ranges",1887686682),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null)], null),new cljs.core.Keyword(null,"height","height",1025178622),(300),new cljs.core.Keyword(null,"width","width",-384071477),(300)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (points,osc_STAR_,update_wave){
return (function (){
return cljs.core.reset_BANG_.call(null,points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),0.2,new cljs.core.Keyword(null,"y","y",-1757859776),0.2], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),0.7,new cljs.core.Keyword(null,"y","y",-1757859776),0.7], null)], null));
});})(points,osc_STAR_,update_wave))
], null),"clean"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (points,osc_STAR_,update_wave){
return (function (){
return osc_STAR_.start(binaural_beats.wave_shapper.ctx.currentTime);
});})(points,osc_STAR_,update_wave))
], null),"Play"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (points,osc_STAR_,update_wave){
return (function (){
return osc_STAR_.stop(binaural_beats.wave_shapper.ctx.currentTime);
});})(points,osc_STAR_,update_wave))
], null),"Stop"], null)], null);
});
;})(points,osc_STAR_,update_wave))
});

//# sourceMappingURL=wave_shapper.js.map?rel=1480772921673