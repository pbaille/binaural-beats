// Compiled by ClojureScript 1.9.229 {}
goog.provide('binaural_beats.audio');
goog.require('cljs.core');
goog.require('cljs_bach.synthesis');
goog.require('binaural_beats.utils');
/**
 * timeline
 */
binaural_beats.audio.tl = (function binaural_beats$audio$tl(s){
if(typeof s === 'number'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),s], null)], null);
} else {
return s;
}
});
binaural_beats.audio.linear_to = (function binaural_beats$audio$linear_to(x,v,at){
return x.linearRampToValueAtTime(v,at);
});
binaural_beats.audio.exp_to = (function binaural_beats$audio$exp_to(x,v,at){
return x.exponentialRampToValueAtTime(v,at);
});
binaural_beats.audio.set_val_at = (function binaural_beats$audio$set_val_at(x,v,at){
return x.setValueAtTime(v,at);
});
binaural_beats.audio.tlmod = (function binaural_beats$audio$tlmod(p__28861){
var map__28871 = p__28861;
var map__28871__$1 = ((((!((map__28871 == null)))?((((map__28871.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28871.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28871):map__28871);
var interp_type = cljs.core.get.call(null,map__28871__$1,new cljs.core.Keyword(null,"interp-type","interp-type",1738849188));
var tl = cljs.core.get.call(null,map__28871__$1,new cljs.core.Keyword(null,"tl","tl",-35265210));
var path = cljs.core.get.call(null,map__28871__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return ((function (map__28871,map__28871__$1,interp_type,tl,path){
return (function (this$){
var ct = this$.context.currentTime;
var p = cljs.core.reduce.call(null,((function (ct,map__28871,map__28871__$1,interp_type,tl,path){
return (function (p1__28859_SHARP_,p2__28860_SHARP_){
return (p1__28859_SHARP_[p2__28860_SHARP_]);
});})(ct,map__28871,map__28871__$1,interp_type,tl,path))
,this$,path);
var f = (function (){var pred__28873 = cljs.core._EQ_;
var expr__28874 = interp_type;
if(cljs.core.truth_(pred__28873.call(null,new cljs.core.Keyword(null,"exp","exp",-261706262),expr__28874))){
return binaural_beats.audio.exp_to;
} else {
if(cljs.core.truth_(pred__28873.call(null,new cljs.core.Keyword(null,"linear","linear",872268697),expr__28874))){
return binaural_beats.audio.linear_to;
} else {
if(cljs.core.truth_(pred__28873.call(null,new cljs.core.Keyword(null,"none","none",1333468478),expr__28874))){
return binaural_beats.audio.set_val_at;
} else {
if(cljs.core.truth_(pred__28873.call(null,null,expr__28874))){
return binaural_beats.audio.set_val_at;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28874)].join('')));
}
}
}
}
})();
return cljs.core.mapv.call(null,((function (ct,p,f,map__28871,map__28871__$1,interp_type,tl,path){
return (function (p__28876){
var vec__28877 = p__28876;
var x = cljs.core.nth.call(null,vec__28877,(0),null);
var y = cljs.core.nth.call(null,vec__28877,(1),null);
return f.call(null,p,y,(ct + x));
});})(ct,p,f,map__28871,map__28871__$1,interp_type,tl,path))
,tl);
});
;})(map__28871,map__28871__$1,interp_type,tl,path))
});
binaural_beats.audio.custom_osc = (function binaural_beats$audio$custom_osc(p__28880){
var map__28886 = p__28880;
var map__28886__$1 = ((((!((map__28886 == null)))?((((map__28886.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28886.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28886):map__28886);
var wavetable = cljs.core.get.call(null,map__28886__$1,new cljs.core.Keyword(null,"wavetable","wavetable",-459938492));
var fqs = cljs.core.get.call(null,map__28886__$1,new cljs.core.Keyword(null,"fqs","fqs",-876300361));
var interp_type = cljs.core.get.call(null,map__28886__$1,new cljs.core.Keyword(null,"interp-type","interp-type",1738849188));
return ((function (map__28886,map__28886__$1,wavetable,fqs,interp_type){
return (function (context,at,duration){
var vec__28888 = wavetable;
var real = cljs.core.nth.call(null,vec__28888,(0),null);
var imag = cljs.core.nth.call(null,vec__28888,(1),null);
var osc = context.createOscillator();
var fmod = binaural_beats.audio.tlmod.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"interp-type","interp-type",1738849188),(function (){var or__26425__auto__ = interp_type;
if(cljs.core.truth_(or__26425__auto__)){
return or__26425__auto__;
} else {
return new cljs.core.Keyword(null,"exp","exp",-261706262);
}
})(),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["frequency"], null),new cljs.core.Keyword(null,"tl","tl",-35265210),fqs], null));
osc.setPeriodicWave(context.createPeriodicWave((new Float32Array(cljs.core.clj__GT_js.call(null,real))),(new Float32Array(cljs.core.clj__GT_js.call(null,imag)))));

osc.start(at);

osc.stop(((at + duration) + 1.0));

fmod.call(null,osc);

return cljs_bach.synthesis.source.call(null,osc);
});
;})(map__28886,map__28886__$1,wavetable,fqs,interp_type))
});
binaural_beats.audio.trem = (function binaural_beats$audio$trem(p__28891){
var map__28895 = p__28891;
var map__28895__$1 = ((((!((map__28895 == null)))?((((map__28895.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28895.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28895):map__28895);
var min = cljs.core.get.call(null,map__28895__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.call(null,map__28895__$1,new cljs.core.Keyword(null,"max","max",61366548));
var f = cljs.core.get.call(null,map__28895__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
return ((function (map__28895,map__28895__$1,min,max,f){
return (function (ctx,at,dur){
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__28897 = ctx.createGain();
(G__28897["gain"]["value"] = (min + max));

cljs_bach.synthesis.plug.call(null,G__28897.gain,cljs_bach.synthesis.sine.call(null,f),ctx,at,dur);

return G__28897;
})());
});
;})(map__28895,map__28895__$1,min,max,f))
});
binaural_beats.audio.osc_line = (function binaural_beats$audio$osc_line(p__28898){
var map__28905 = p__28898;
var map__28905__$1 = ((((!((map__28905 == null)))?((((map__28905.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28905.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28905):map__28905);
var init = cljs.core.get.call(null,map__28905__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var points = cljs.core.get.call(null,map__28905__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var type = cljs.core.get.call(null,map__28905__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return ((function (map__28905,map__28905__$1,init,points,type){
return (function (context,at,duration){
var osc = context.createOscillator();
osc.frequency.setValueAtTime(init,at);

(osc["type"] = (function (){var or__26425__auto__ = type;
if(cljs.core.truth_(or__26425__auto__)){
return or__26425__auto__;
} else {
return "sine";
}
})());

osc.start(at);

osc.stop((duration + at));

cljs.core.mapv.call(null,((function (osc,map__28905,map__28905__$1,init,points,type){
return (function (p__28907){
var vec__28908 = p__28907;
var x = cljs.core.nth.call(null,vec__28908,(0),null);
var y = cljs.core.nth.call(null,vec__28908,(1),null);
return osc.frequency.linearRampToValueAtTime(y,(at + x));
});})(osc,map__28905,map__28905__$1,init,points,type))
,points);

return cljs_bach.synthesis.source.call(null,osc);
});
;})(map__28905,map__28905__$1,init,points,type))
});
/**
 * Build an envelope out of [segment-duration final-level] coordinates.
 */
binaural_beats.audio.envelop = (function binaural_beats$audio$envelop(corners){
return (function (context,at,duration){
var audio_node = context.createGain();
audio_node.gain.setValueAtTime((0),at);

cljs.core.mapv.call(null,((function (audio_node){
return (function (p__28915){
var vec__28916 = p__28915;
var x = cljs.core.nth.call(null,vec__28916,(0),null);
var y = cljs.core.nth.call(null,vec__28916,(1),null);
return audio_node.gain.linearRampToValueAtTime(y,(at + x));
});})(audio_node))
,corners);

return cljs_bach.synthesis.subgraph.call(null,audio_node);
});
});
binaural_beats.audio.pink_noise = (function binaural_beats$audio$pink_noise(){
return (function (context,at,duration){
var pinky = context.createPinkNoise();
pinky.start(at);

pinky.stop((duration + at));

return cljs_bach.synthesis.source.call(null,pinky);
});
});
binaural_beats.audio.play_pink = (function binaural_beats$audio$play_pink(p__28919){
var map__28922 = p__28919;
var map__28922__$1 = ((((!((map__28922 == null)))?((((map__28922.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28922.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28922):map__28922);
var ctx = cljs.core.get.call(null,map__28922__$1,new cljs.core.Keyword(null,"ctx","ctx",-493610118));
var gain = cljs.core.get.call(null,map__28922__$1,new cljs.core.Keyword(null,"gain","gain",1350925045));
var duration = cljs.core.get.call(null,map__28922__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
return cljs_bach.synthesis.run_with.call(null,cljs_bach.synthesis.connect__GT_.call(null,binaural_beats.audio.pink_noise.call(null),cljs_bach.synthesis.gain.call(null,gain),cljs_bach.synthesis.destination),ctx,cljs_bach.synthesis.current_time.call(null,ctx),duration);
});
/**
 * return a seq of source nodes
 */
binaural_beats.audio.synth = (function binaural_beats$audio$synth(p__28925){
var map__28944 = p__28925;
var map__28944__$1 = ((((!((map__28944 == null)))?((((map__28944.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28944.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28944):map__28944);
var init = cljs.core.get.call(null,map__28944__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var fqs = cljs.core.get.call(null,map__28944__$1,new cljs.core.Keyword(null,"fqs","fqs",-876300361));
var harmonics = cljs.core.get.call(null,map__28944__$1,new cljs.core.Keyword(null,"harmonics","harmonics",-1090666048));
var pan = cljs.core.get.call(null,map__28944__$1,new cljs.core.Keyword(null,"pan","pan",-307712792));
var envelope = cljs.core.get.call(null,map__28944__$1,new cljs.core.Keyword(null,"envelope","envelope",-236796318));
var osc_types = cljs.core.get.call(null,map__28944__$1,new cljs.core.Keyword(null,"osc-types","osc-types",1954803390));
var normalize = ((function (map__28944,map__28944__$1,init,fqs,harmonics,pan,envelope,osc_types){
return (function (p1__28924_SHARP_){
var t = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,p1__28924_SHARP_));
return cljs.core.mapv.call(null,((function (t,map__28944,map__28944__$1,init,fqs,harmonics,pan,envelope,osc_types){
return (function (p__28946){
var vec__28947 = p__28946;
var x = cljs.core.nth.call(null,vec__28947,(0),null);
var y = cljs.core.nth.call(null,vec__28947,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y / t)], null);
});})(t,map__28944,map__28944__$1,init,fqs,harmonics,pan,envelope,osc_types))
,p1__28924_SHARP_);
});})(map__28944,map__28944__$1,init,fqs,harmonics,pan,envelope,osc_types))
;
var map_seconds = ((function (normalize,map__28944,map__28944__$1,init,fqs,harmonics,pan,envelope,osc_types){
return (function (f,coll){
return cljs.core.map.call(null,((function (normalize,map__28944,map__28944__$1,init,fqs,harmonics,pan,envelope,osc_types){
return (function (p__28950){
var vec__28951 = p__28950;
var x = cljs.core.nth.call(null,vec__28951,(0),null);
var y = cljs.core.nth.call(null,vec__28951,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,f.call(null,y)], null);
});})(normalize,map__28944,map__28944__$1,init,fqs,harmonics,pan,envelope,osc_types))
,coll);
});})(normalize,map__28944,map__28944__$1,init,fqs,harmonics,pan,envelope,osc_types))
;
var r = cljs.core.apply.call(null,cljs.core.concat,cljs.core.mapv.call(null,((function (normalize,map_seconds,map__28944,map__28944__$1,init,fqs,harmonics,pan,envelope,osc_types){
return (function (p__28954){
var vec__28955 = p__28954;
var osc_type = cljs.core.nth.call(null,vec__28955,(0),null);
var g1 = cljs.core.nth.call(null,vec__28955,(1),null);
return cljs.core.mapv.call(null,((function (vec__28955,osc_type,g1,normalize,map_seconds,map__28944,map__28944__$1,init,fqs,harmonics,pan,envelope,osc_types){
return (function (p__28958){
var vec__28959 = p__28958;
var n = cljs.core.nth.call(null,vec__28959,(0),null);
var g2 = cljs.core.nth.call(null,vec__28959,(1),null);
return cljs_bach.synthesis.connect__GT_.call(null,binaural_beats.audio.osc_line.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),osc_type,new cljs.core.Keyword(null,"init","init",-1875481434),(n * init),new cljs.core.Keyword(null,"points","points",-1486596883),map_seconds.call(null,cljs.core.partial.call(null,cljs.core._STAR_,n),fqs)], null)),binaural_beats.audio.envelop.call(null,map_seconds.call(null,cljs.core.partial.call(null,cljs.core._STAR_,g1,g2),envelope)),cljs_bach.synthesis.stereo_panner.call(null,pan),cljs_bach.synthesis.destination);
});})(vec__28955,osc_type,g1,normalize,map_seconds,map__28944,map__28944__$1,init,fqs,harmonics,pan,envelope,osc_types))
,normalize.call(null,harmonics));
});})(normalize,map_seconds,map__28944,map__28944__$1,init,fqs,harmonics,pan,envelope,osc_types))
,normalize.call(null,osc_types)));
return r;
});
binaural_beats.audio.run_all_with = (function binaural_beats$audio$run_all_with(xs,ctx,ct,duration){
return cljs.core.mapv.call(null,(function (p1__28962_SHARP_){
return cljs_bach.synthesis.run_with.call(null,p1__28962_SHARP_,ctx,ct,duration);
}),xs);
});
binaural_beats.audio.binaural_fq_seqs = (function binaural_beats$audio$binaural_fq_seqs(fqs,deltas,duration){
var main_seq = binaural_beats.utils.interp_seq.call(null,binaural_beats.utils.interpolator.call(null,fqs),(0),duration,0.1);
var delta_interp = binaural_beats.utils.interpolator.call(null,deltas);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.mapv.call(null,((function (main_seq,delta_interp){
return (function (p__28971){
var vec__28972 = p__28971;
var x = cljs.core.nth.call(null,vec__28972,(0),null);
var y = cljs.core.nth.call(null,vec__28972,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (delta_interp.call(null,x) / 2.0))], null);
});})(main_seq,delta_interp))
,main_seq),new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.mapv.call(null,((function (main_seq,delta_interp){
return (function (p__28975){
var vec__28976 = p__28975;
var x = cljs.core.nth.call(null,vec__28976,(0),null);
var y = cljs.core.nth.call(null,vec__28976,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - (delta_interp.call(null,x) / 2.0))], null);
});})(main_seq,delta_interp))
,main_seq)], null);
});
binaural_beats.audio.play_binaural_STAR_ = (function binaural_beats$audio$play_binaural_STAR_(p__28979){
var map__28984 = p__28979;
var map__28984__$1 = ((((!((map__28984 == null)))?((((map__28984.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28984.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28984):map__28984);
var ctx = cljs.core.get.call(null,map__28984__$1,new cljs.core.Keyword(null,"ctx","ctx",-493610118));
var fqs = cljs.core.get.call(null,map__28984__$1,new cljs.core.Keyword(null,"fqs","fqs",-876300361));
var deltas = cljs.core.get.call(null,map__28984__$1,new cljs.core.Keyword(null,"deltas","deltas",1038932606));
var envelope = cljs.core.get.call(null,map__28984__$1,new cljs.core.Keyword(null,"envelope","envelope",-236796318));
var duration = cljs.core.get.call(null,map__28984__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var map__28986 = binaural_beats.audio.binaural_fq_seqs.call(null,fqs,deltas,duration);
var map__28986__$1 = ((((!((map__28986 == null)))?((((map__28986.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28986.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28986):map__28986);
var left = cljs.core.get.call(null,map__28986__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.call(null,map__28986__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var ct = cljs_bach.synthesis.current_time.call(null,ctx);
cljs_bach.synthesis.run_with.call(null,cljs_bach.synthesis.connect__GT_.call(null,binaural_beats.audio.osc_line.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.ffirst.call(null,left),new cljs.core.Keyword(null,"points","points",-1486596883),left], null)),binaural_beats.audio.envelop.call(null,envelope),cljs_bach.synthesis.stereo_panner.call(null,(-1)),cljs_bach.synthesis.destination),ctx,ct,duration);

return cljs_bach.synthesis.run_with.call(null,cljs_bach.synthesis.connect__GT_.call(null,binaural_beats.audio.osc_line.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.ffirst.call(null,right),new cljs.core.Keyword(null,"points","points",-1486596883),right], null)),binaural_beats.audio.envelop.call(null,envelope),cljs_bach.synthesis.stereo_panner.call(null,(1)),cljs_bach.synthesis.destination),ctx,ct,duration);
});
binaural_beats.audio.play_binaural = (function binaural_beats$audio$play_binaural(p__28989){
var map__28994 = p__28989;
var map__28994__$1 = ((((!((map__28994 == null)))?((((map__28994.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28994.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28994):map__28994);
var ctx = cljs.core.get.call(null,map__28994__$1,new cljs.core.Keyword(null,"ctx","ctx",-493610118));
var fqs = cljs.core.get.call(null,map__28994__$1,new cljs.core.Keyword(null,"fqs","fqs",-876300361));
var deltas = cljs.core.get.call(null,map__28994__$1,new cljs.core.Keyword(null,"deltas","deltas",1038932606));
var envelope = cljs.core.get.call(null,map__28994__$1,new cljs.core.Keyword(null,"envelope","envelope",-236796318));
var duration = cljs.core.get.call(null,map__28994__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var map__28996 = binaural_beats.audio.binaural_fq_seqs.call(null,fqs,deltas,duration);
var map__28996__$1 = ((((!((map__28996 == null)))?((((map__28996.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28996.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28996):map__28996);
var left = cljs.core.get.call(null,map__28996__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.call(null,map__28996__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var ct = cljs_bach.synthesis.current_time.call(null,ctx);
return binaural_beats.audio.run_all_with.call(null,binaural_beats.audio.synth.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.ffirst.call(null,left),new cljs.core.Keyword(null,"fqs","fqs",-876300361),left,new cljs.core.Keyword(null,"harmonics","harmonics",-1090666048),new cljs.core.PersistentArrayMap(null, 4, [(1),(1),(2),0.5,(3),0.2,(4),(2)], null),new cljs.core.Keyword(null,"osc-types","osc-types",1954803390),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"pan","pan",-307712792),(-1),new cljs.core.Keyword(null,"envelope","envelope",-236796318),envelope], null)),ctx,ct,duration);
});
binaural_beats.audio.close_ctx = (function binaural_beats$audio$close_ctx(ctx){
return cljs.core.deref.call(null,ctx).close().then((function (){
return cljs.core.reset_BANG_.call(null,ctx,null);
}));
});
binaural_beats.audio.play = (function binaural_beats$audio$play(p__28998){
var map__29001 = p__28998;
var map__29001__$1 = ((((!((map__29001 == null)))?((((map__29001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29001):map__29001);
var ctx = cljs.core.get.call(null,map__29001__$1,new cljs.core.Keyword(null,"ctx","ctx",-493610118));
var deltas = cljs.core.get.call(null,map__29001__$1,new cljs.core.Keyword(null,"deltas","deltas",1038932606));
var fqs = cljs.core.get.call(null,map__29001__$1,new cljs.core.Keyword(null,"fqs","fqs",-876300361));
var duration = cljs.core.get.call(null,map__29001__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var envelope = cljs.core.get.call(null,map__29001__$1,new cljs.core.Keyword(null,"envelope","envelope",-236796318));
if(cljs.core.not.call(null,cljs.core.deref.call(null,ctx))){
cljs.core.reset_BANG_.call(null,ctx,cljs_bach.synthesis.audio_context.call(null));
} else {
}

binaural_beats.audio.play_binaural.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fqs","fqs",-876300361),fqs,new cljs.core.Keyword(null,"deltas","deltas",1038932606),deltas,new cljs.core.Keyword(null,"envelope","envelope",-236796318),cljs.core.map.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)),envelope),new cljs.core.Keyword(null,"duration","duration",1444101068),duration,new cljs.core.Keyword(null,"ctx","ctx",-493610118),cljs.core.deref.call(null,ctx)], null));

return binaural_beats.audio.play_pink.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"gain","gain",1350925045),(0),new cljs.core.Keyword(null,"duration","duration",1444101068),duration,new cljs.core.Keyword(null,"ctx","ctx",-493610118),cljs.core.deref.call(null,ctx)], null));
});
binaural_beats.audio.export_buffer = (function binaural_beats$audio$export_buffer(p__29003){
var map__29006 = p__29003;
var map__29006__$1 = ((((!((map__29006 == null)))?((((map__29006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29006):map__29006);
var opts = map__29006__$1;
var duration = cljs.core.get.call(null,map__29006__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var offline = (new OfflineAudioContext((2),(duration * (44100)),(44100)));
binaural_beats.audio.play.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"ctx","ctx",-493610118),cljs.core.atom.call(null,offline)));

offline.oncomplete = ((function (offline,map__29006,map__29006__$1,opts,duration){
return (function (e){
binaural_beats.utils.log.call(null,e.renderedBuffer);

var buffer = e.renderedBuffer;
var worker = (new Worker("/js/recorderWorker.js"));
worker.postMessage(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),"init",new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sampleRate","sampleRate",-541273751),(44100)], null)], null)));

worker.onmessage = ((function (buffer,worker,offline,map__29006,map__29006__$1,opts,duration){
return (function (e__$1){
binaural_beats.utils.log.call(null,e__$1.data);

var url = window.URL.createObjectURL(e__$1.data);
var a = document.createElement("a");
document.body.appendChild(a);

(a["style"] = "display: none");

(a["href"] = url);

(a["download"] = "test.wav");

a.click();

return window.URL.revokeObjectURL(url);
});})(buffer,worker,offline,map__29006,map__29006__$1,opts,duration))
;

worker.postMessage(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),"record",new cljs.core.Keyword(null,"buffer","buffer",617295198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [buffer.getChannelData((0)),buffer.getChannelData((1))], null)], null)));

return worker.postMessage(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),"exportWAV",new cljs.core.Keyword(null,"type","type",1174270348),"audio/wav"], null)));
});})(offline,map__29006,map__29006__$1,opts,duration))
;

return offline.startRendering();
});

//# sourceMappingURL=audio.js.map?rel=1480772921077