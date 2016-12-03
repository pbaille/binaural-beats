// Compiled by ClojureScript 1.9.229 {}
goog.provide('binaural_beats.utils');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.d3');
binaural_beats.utils.log = (function binaural_beats$utils$log(var_args){
var args__27507__auto__ = [];
var len__27500__auto___28636 = arguments.length;
var i__27501__auto___28637 = (0);
while(true){
if((i__27501__auto___28637 < len__27500__auto___28636)){
args__27507__auto__.push((arguments[i__27501__auto___28637]));

var G__28638 = (i__27501__auto___28637 + (1));
i__27501__auto___28637 = G__28638;
continue;
} else {
}
break;
}

var argseq__27508__auto__ = ((((0) < args__27507__auto__.length))?(new cljs.core.IndexedSeq(args__27507__auto__.slice((0)),(0),null)):null);
return binaural_beats.utils.log.cljs$core$IFn$_invoke$arity$variadic(argseq__27508__auto__);
});

binaural_beats.utils.log.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.apply.call(null,console.log,xs);
});

binaural_beats.utils.log.cljs$lang$maxFixedArity = (0);

binaural_beats.utils.log.cljs$lang$applyTo = (function (seq28635){
return binaural_beats.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28635));
});

binaural_beats.utils.tval = (function binaural_beats$utils$tval(x){
return x.target.value;
});
binaural_beats.utils.now = (function binaural_beats$utils$now(){
return (new Date()).getTime();
});
binaural_beats.utils.get_mouse_signal = (function binaural_beats$utils$get_mouse_signal(var_args){
var args__27507__auto__ = [];
var len__27500__auto___28644 = arguments.length;
var i__27501__auto___28645 = (0);
while(true){
if((i__27501__auto___28645 < len__27500__auto___28644)){
args__27507__auto__.push((arguments[i__27501__auto___28645]));

var G__28646 = (i__27501__auto___28645 + (1));
i__27501__auto___28645 = G__28646;
continue;
} else {
}
break;
}

var argseq__27508__auto__ = ((((0) < args__27507__auto__.length))?(new cljs.core.IndexedSeq(args__27507__auto__.slice((0)),(0),null)):null);
return binaural_beats.utils.get_mouse_signal.cljs$core$IFn$_invoke$arity$variadic(argseq__27508__auto__);
});

binaural_beats.utils.get_mouse_signal.cljs$core$IFn$_invoke$arity$variadic = (function (p__28640){
var vec__28641 = p__28640;
var el = cljs.core.nth.call(null,vec__28641,(0),null);
var mouse_position = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
((function (){var or__26425__auto__ = el;
if(cljs.core.truth_(or__26425__auto__)){
return or__26425__auto__;
} else {
return document;
}
})()["onmousemove"] = ((function (mouse_position,vec__28641,el){
return (function (e){
console.log(e);

return cljs.core.reset_BANG_.call(null,mouse_position,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),e.offsetY,new cljs.core.Keyword(null,"x","x",2099068185),e.offsetX], null));
});})(mouse_position,vec__28641,el))
);

return mouse_position;
});

binaural_beats.utils.get_mouse_signal.cljs$lang$maxFixedArity = (0);

binaural_beats.utils.get_mouse_signal.cljs$lang$applyTo = (function (seq28639){
return binaural_beats.utils.get_mouse_signal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28639));
});

binaural_beats.utils.p = cljs.core.println;
binaural_beats.utils.mount = (function binaural_beats$utils$mount(c,id){
return reagent.core.render_component.call(null,c,document.getElementById(id));
});
binaural_beats.utils.d3 = d3;
binaural_beats.utils.js_GT_ = cljs.core.clj__GT_js;
binaural_beats.utils.line = d3.line();
binaural_beats.utils.attrs = (function binaural_beats$utils$attrs(x,s){
var seq__28657_28667 = cljs.core.seq.call(null,s);
var chunk__28658_28668 = null;
var count__28659_28669 = (0);
var i__28660_28670 = (0);
while(true){
if((i__28660_28670 < count__28659_28669)){
var vec__28661_28671 = cljs.core._nth.call(null,chunk__28658_28668,i__28660_28670);
var k_28672 = cljs.core.nth.call(null,vec__28661_28671,(0),null);
var v_28673 = cljs.core.nth.call(null,vec__28661_28671,(1),null);
x.attr(cljs.core.name.call(null,k_28672),v_28673);

var G__28674 = seq__28657_28667;
var G__28675 = chunk__28658_28668;
var G__28676 = count__28659_28669;
var G__28677 = (i__28660_28670 + (1));
seq__28657_28667 = G__28674;
chunk__28658_28668 = G__28675;
count__28659_28669 = G__28676;
i__28660_28670 = G__28677;
continue;
} else {
var temp__4657__auto___28678 = cljs.core.seq.call(null,seq__28657_28667);
if(temp__4657__auto___28678){
var seq__28657_28679__$1 = temp__4657__auto___28678;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28657_28679__$1)){
var c__27236__auto___28680 = cljs.core.chunk_first.call(null,seq__28657_28679__$1);
var G__28681 = cljs.core.chunk_rest.call(null,seq__28657_28679__$1);
var G__28682 = c__27236__auto___28680;
var G__28683 = cljs.core.count.call(null,c__27236__auto___28680);
var G__28684 = (0);
seq__28657_28667 = G__28681;
chunk__28658_28668 = G__28682;
count__28659_28669 = G__28683;
i__28660_28670 = G__28684;
continue;
} else {
var vec__28664_28685 = cljs.core.first.call(null,seq__28657_28679__$1);
var k_28686 = cljs.core.nth.call(null,vec__28664_28685,(0),null);
var v_28687 = cljs.core.nth.call(null,vec__28664_28685,(1),null);
x.attr(cljs.core.name.call(null,k_28686),v_28687);

var G__28688 = cljs.core.next.call(null,seq__28657_28679__$1);
var G__28689 = null;
var G__28690 = (0);
var G__28691 = (0);
seq__28657_28667 = G__28688;
chunk__28658_28668 = G__28689;
count__28659_28669 = G__28690;
i__28660_28670 = G__28691;
continue;
}
} else {
}
}
break;
}

return x;
});
binaural_beats.utils.styles = (function binaural_beats$utils$styles(x,s){
var seq__28702_28712 = cljs.core.seq.call(null,s);
var chunk__28703_28713 = null;
var count__28704_28714 = (0);
var i__28705_28715 = (0);
while(true){
if((i__28705_28715 < count__28704_28714)){
var vec__28706_28716 = cljs.core._nth.call(null,chunk__28703_28713,i__28705_28715);
var k_28717 = cljs.core.nth.call(null,vec__28706_28716,(0),null);
var v_28718 = cljs.core.nth.call(null,vec__28706_28716,(1),null);
x.style(cljs.core.name.call(null,k_28717),((typeof v_28718 === 'number')?v_28718:cljs.core.name.call(null,v_28718)));

var G__28719 = seq__28702_28712;
var G__28720 = chunk__28703_28713;
var G__28721 = count__28704_28714;
var G__28722 = (i__28705_28715 + (1));
seq__28702_28712 = G__28719;
chunk__28703_28713 = G__28720;
count__28704_28714 = G__28721;
i__28705_28715 = G__28722;
continue;
} else {
var temp__4657__auto___28723 = cljs.core.seq.call(null,seq__28702_28712);
if(temp__4657__auto___28723){
var seq__28702_28724__$1 = temp__4657__auto___28723;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28702_28724__$1)){
var c__27236__auto___28725 = cljs.core.chunk_first.call(null,seq__28702_28724__$1);
var G__28726 = cljs.core.chunk_rest.call(null,seq__28702_28724__$1);
var G__28727 = c__27236__auto___28725;
var G__28728 = cljs.core.count.call(null,c__27236__auto___28725);
var G__28729 = (0);
seq__28702_28712 = G__28726;
chunk__28703_28713 = G__28727;
count__28704_28714 = G__28728;
i__28705_28715 = G__28729;
continue;
} else {
var vec__28709_28730 = cljs.core.first.call(null,seq__28702_28724__$1);
var k_28731 = cljs.core.nth.call(null,vec__28709_28730,(0),null);
var v_28732 = cljs.core.nth.call(null,vec__28709_28730,(1),null);
x.style(cljs.core.name.call(null,k_28731),((typeof v_28732 === 'number')?v_28732:cljs.core.name.call(null,v_28732)));

var G__28733 = cljs.core.next.call(null,seq__28702_28724__$1);
var G__28734 = null;
var G__28735 = (0);
var G__28736 = (0);
seq__28702_28712 = G__28733;
chunk__28703_28713 = G__28734;
count__28704_28714 = G__28735;
i__28705_28715 = G__28736;
continue;
}
} else {
}
}
break;
}

return x;
});
binaural_beats.utils.a_AMPERSAND_s = (function binaural_beats$utils$a_AMPERSAND_s(x,s){
binaural_beats.utils.styles.call(null,binaural_beats.utils.attrs.call(null,x,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(s)),new cljs.core.Keyword(null,"styles","styles",1954480375).cljs$core$IFn$_invoke$arity$1(s));

return x;
});
binaural_beats.utils.index_of = (function binaural_beats$utils$index_of(coll,value){
return cljs.core.some.call(null,(function (p__28741){
var vec__28742 = p__28741;
var idx = cljs.core.nth.call(null,vec__28742,(0),null);
var item = cljs.core.nth.call(null,vec__28742,(1),null);
if(cljs.core._EQ_.call(null,value,item)){
return idx;
} else {
return null;
}
}),cljs.core.map_indexed.call(null,cljs.core.vector,coll));
});
binaural_beats.utils.rem_idx = (function binaural_beats$utils$rem_idx(v,idx){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,v,(0),idx),cljs.core.subvec.call(null,v,(idx + (1)))));
});
var merge_in_STAR_ = (function binaural_beats$utils$merge_in_STAR_(a,b){
if(cljs.core.map_QMARK_.call(null,a)){
return cljs.core.merge_with.call(null,binaural_beats$utils$merge_in_STAR_,a,b);
} else {
return b;
}
});
/**
 * Merge multiple nested maps.
 */
binaural_beats.utils.merge_in = (function binaural_beats$utils$merge_in(var_args){
var args__27507__auto__ = [];
var len__27500__auto___28746 = arguments.length;
var i__27501__auto___28747 = (0);
while(true){
if((i__27501__auto___28747 < len__27500__auto___28746)){
args__27507__auto__.push((arguments[i__27501__auto___28747]));

var G__28748 = (i__27501__auto___28747 + (1));
i__27501__auto___28747 = G__28748;
continue;
} else {
}
break;
}

var argseq__27508__auto__ = ((((0) < args__27507__auto__.length))?(new cljs.core.IndexedSeq(args__27507__auto__.slice((0)),(0),null)):null);
return binaural_beats.utils.merge_in.cljs$core$IFn$_invoke$arity$variadic(argseq__27508__auto__);
});

binaural_beats.utils.merge_in.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.reduce.call(null,merge_in_STAR_,null,args);
});

binaural_beats.utils.merge_in.cljs$lang$maxFixedArity = (0);

binaural_beats.utils.merge_in.cljs$lang$applyTo = (function (seq28745){
return binaural_beats.utils.merge_in.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28745));
});

binaural_beats.utils.with_precision = (function binaural_beats$utils$with_precision(p,n){
return parseFloat(n.toFixed(p));
});
binaural_beats.utils.bounder = (function binaural_beats$utils$bounder(min,max){
return (function (x){
if((x < min)){
return min;
} else {
if((x > max)){
return max;
} else {
return x;

}
}
});
});
/**
 * Scales a given input value within the specified input range to a
 *   corresponding value in the specified output range using the formula:
 * 
 *         (out-max - out-min) (x - in-min)
 * f (x) = --------------------------------  + out-min
 *                  in-max - in-min
 *   
 */
binaural_beats.utils.scale_range = (function binaural_beats$utils$scale_range(x,in_min,in_max,out_min,out_max){
return ((((out_max - out_min) * (x - in_min)) / (in_max - in_min)) + out_min);
});
binaural_beats.utils.interpolator = (function binaural_beats$utils$interpolator(pts){
var pts__$1 = cljs.core.sort_by.call(null,cljs.core.first,(cljs.core.truth_(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,pts)))?cljs.core.map.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)),pts):pts));
return ((function (pts__$1){
return (function (x){
if((x <= cljs.core.ffirst.call(null,pts__$1))){
return cljs.core.second.call(null,cljs.core.first.call(null,pts__$1));
} else {
if((x >= cljs.core.first.call(null,cljs.core.last.call(null,pts__$1)))){
return cljs.core.second.call(null,cljs.core.last.call(null,pts__$1));
} else {
var vec__28768 = cljs.core.first.call(null,cljs.core.filter.call(null,((function (pts__$1){
return (function (p__28777){
var vec__28778 = p__28777;
var vec__28781 = cljs.core.nth.call(null,vec__28778,(0),null);
var x1 = cljs.core.nth.call(null,vec__28781,(0),null);
var _ = cljs.core.nth.call(null,vec__28781,(1),null);
var vec__28784 = cljs.core.nth.call(null,vec__28778,(1),null);
var x2 = cljs.core.nth.call(null,vec__28784,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__28784,(1),null);
return ((x1 <= x)) && ((x <= x2));
});})(pts__$1))
,cljs.core.partition.call(null,(2),(1),pts__$1)));
var vec__28771 = cljs.core.nth.call(null,vec__28768,(0),null);
var x1 = cljs.core.nth.call(null,vec__28771,(0),null);
var y1 = cljs.core.nth.call(null,vec__28771,(1),null);
var vec__28774 = cljs.core.nth.call(null,vec__28768,(1),null);
var x2 = cljs.core.nth.call(null,vec__28774,(0),null);
var y2 = cljs.core.nth.call(null,vec__28774,(1),null);
return binaural_beats.utils.scale_range.call(null,x,x1,x2,y1,y2);

}
}
});
;})(pts__$1))
});
binaural_beats.utils.interp_seq = (function binaural_beats$utils$interp_seq(interpolator,start,end,step){
return cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,interpolator.call(null,x)], null);
}),cljs.core.range.call(null,start,(end + step),step));
});
binaural_beats.utils.rwrap = (function binaural_beats$utils$rwrap(var_args){
var args__27507__auto__ = [];
var len__27500__auto___28808 = arguments.length;
var i__27501__auto___28809 = (0);
while(true){
if((i__27501__auto___28809 < len__27500__auto___28808)){
args__27507__auto__.push((arguments[i__27501__auto___28809]));

var G__28810 = (i__27501__auto___28809 + (1));
i__27501__auto___28809 = G__28810;
continue;
} else {
}
break;
}

var argseq__27508__auto__ = ((((2) < args__27507__auto__.length))?(new cljs.core.IndexedSeq(args__27507__auto__.slice((2)),(0),null)):null);
return binaural_beats.utils.rwrap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27508__auto__);
});

binaural_beats.utils.rwrap.cljs$core$IFn$_invoke$arity$variadic = (function (build,reaction_map,p__28790){
var vec__28791 = p__28790;
var debug = cljs.core.nth.call(null,vec__28791,(0),null);
var a1 = reagent.core.atom.call(null,build.call(null));
var refs = cljs.core.keys.call(null,reaction_map);
var shorts = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var log_state = ((function (a1,refs,shorts,vec__28791,debug){
return (function (){
binaural_beats.utils.p.call(null,cljs.core.deref.call(null,a1));

binaural_beats.utils.p.call(null,refs);

return binaural_beats.utils.p.call(null,cljs.core.deref.call(null,shorts));
});})(a1,refs,shorts,vec__28791,debug))
;
cljs.core.add_watch.call(null,a1,new cljs.core.Keyword(null,"build","build",964396370),((function (a1,refs,shorts,log_state,vec__28791,debug){
return (function (_,___$1,o,n){
if(cljs.core.truth_(debug)){
binaural_beats.utils.p.call(null,"---- a1 start: ----");

log_state.call(null);
} else {
}

if(cljs.core.truth_(cljs.core.deref.call(null,shorts).call(null,a1))){
cljs.core.swap_BANG_.call(null,shorts,cljs.core.disj,a1);
} else {
if(cljs.core.seq.call(null,cljs.core.deref.call(null,shorts))){
} else {
cljs.core.swap_BANG_.call(null,shorts,cljs.core.into,refs);

var seq__28794_28811 = cljs.core.seq.call(null,reaction_map);
var chunk__28795_28812 = null;
var count__28796_28813 = (0);
var i__28797_28814 = (0);
while(true){
if((i__28797_28814 < count__28796_28813)){
var vec__28798_28815 = cljs.core._nth.call(null,chunk__28795_28812,i__28797_28814);
var ref_28816 = cljs.core.nth.call(null,vec__28798_28815,(0),null);
var upd_28817 = cljs.core.nth.call(null,vec__28798_28815,(1),null);
cljs.core.swap_BANG_.call(null,shorts,cljs.core.disj,ref_28816);

cljs.core.swap_BANG_.call(null,ref_28816,(function (){var or__26425__auto__ = upd_28817;
if(cljs.core.truth_(or__26425__auto__)){
return or__26425__auto__;
} else {
return ((function (seq__28794_28811,chunk__28795_28812,count__28796_28813,i__28797_28814,or__26425__auto__,vec__28798_28815,ref_28816,upd_28817,a1,refs,shorts,log_state,vec__28791,debug){
return (function (x,___$2){
return x;
});
;})(seq__28794_28811,chunk__28795_28812,count__28796_28813,i__28797_28814,or__26425__auto__,vec__28798_28815,ref_28816,upd_28817,a1,refs,shorts,log_state,vec__28791,debug))
}
})(),n);

var G__28818 = seq__28794_28811;
var G__28819 = chunk__28795_28812;
var G__28820 = count__28796_28813;
var G__28821 = (i__28797_28814 + (1));
seq__28794_28811 = G__28818;
chunk__28795_28812 = G__28819;
count__28796_28813 = G__28820;
i__28797_28814 = G__28821;
continue;
} else {
var temp__4657__auto___28822 = cljs.core.seq.call(null,seq__28794_28811);
if(temp__4657__auto___28822){
var seq__28794_28823__$1 = temp__4657__auto___28822;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28794_28823__$1)){
var c__27236__auto___28824 = cljs.core.chunk_first.call(null,seq__28794_28823__$1);
var G__28825 = cljs.core.chunk_rest.call(null,seq__28794_28823__$1);
var G__28826 = c__27236__auto___28824;
var G__28827 = cljs.core.count.call(null,c__27236__auto___28824);
var G__28828 = (0);
seq__28794_28811 = G__28825;
chunk__28795_28812 = G__28826;
count__28796_28813 = G__28827;
i__28797_28814 = G__28828;
continue;
} else {
var vec__28801_28829 = cljs.core.first.call(null,seq__28794_28823__$1);
var ref_28830 = cljs.core.nth.call(null,vec__28801_28829,(0),null);
var upd_28831 = cljs.core.nth.call(null,vec__28801_28829,(1),null);
cljs.core.swap_BANG_.call(null,shorts,cljs.core.disj,ref_28830);

cljs.core.swap_BANG_.call(null,ref_28830,(function (){var or__26425__auto__ = upd_28831;
if(cljs.core.truth_(or__26425__auto__)){
return or__26425__auto__;
} else {
return ((function (seq__28794_28811,chunk__28795_28812,count__28796_28813,i__28797_28814,or__26425__auto__,vec__28801_28829,ref_28830,upd_28831,seq__28794_28823__$1,temp__4657__auto___28822,a1,refs,shorts,log_state,vec__28791,debug){
return (function (x,___$2){
return x;
});
;})(seq__28794_28811,chunk__28795_28812,count__28796_28813,i__28797_28814,or__26425__auto__,vec__28801_28829,ref_28830,upd_28831,seq__28794_28823__$1,temp__4657__auto___28822,a1,refs,shorts,log_state,vec__28791,debug))
}
})(),n);

var G__28832 = cljs.core.next.call(null,seq__28794_28823__$1);
var G__28833 = null;
var G__28834 = (0);
var G__28835 = (0);
seq__28794_28811 = G__28832;
chunk__28795_28812 = G__28833;
count__28796_28813 = G__28834;
i__28797_28814 = G__28835;
continue;
}
} else {
}
}
break;
}
}
}

if(cljs.core.truth_(debug)){
binaural_beats.utils.p.call(null,"---- a1 end: ----");

return log_state.call(null);
} else {
return null;
}
});})(a1,refs,shorts,log_state,vec__28791,debug))
);

var seq__28804_28836 = cljs.core.seq.call(null,refs);
var chunk__28805_28837 = null;
var count__28806_28838 = (0);
var i__28807_28839 = (0);
while(true){
if((i__28807_28839 < count__28806_28838)){
var r_28840 = cljs.core._nth.call(null,chunk__28805_28837,i__28807_28839);
cljs.core.add_watch.call(null,r_28840,cljs.core.keyword.call(null,cljs.core.gensym.call(null)),((function (seq__28804_28836,chunk__28805_28837,count__28806_28838,i__28807_28839,r_28840,a1,refs,shorts,log_state,vec__28791,debug){
return (function (_,___$1,___$2,___$3){
if(cljs.core.truth_(debug)){
binaural_beats.utils.p.call(null,"---- r start:",r_28840," ----");

log_state.call(null);
} else {
}

if(cljs.core.seq.call(null,cljs.core.deref.call(null,shorts))){
} else {
cljs.core.swap_BANG_.call(null,shorts,cljs.core.conj,a1);

cljs.core.reset_BANG_.call(null,a1,build.call(null));
}

if(cljs.core.truth_(debug)){
binaural_beats.utils.p.call(null,"---- r end:",r_28840," ----");

return log_state.call(null);
} else {
return null;
}
});})(seq__28804_28836,chunk__28805_28837,count__28806_28838,i__28807_28839,r_28840,a1,refs,shorts,log_state,vec__28791,debug))
);

var G__28841 = seq__28804_28836;
var G__28842 = chunk__28805_28837;
var G__28843 = count__28806_28838;
var G__28844 = (i__28807_28839 + (1));
seq__28804_28836 = G__28841;
chunk__28805_28837 = G__28842;
count__28806_28838 = G__28843;
i__28807_28839 = G__28844;
continue;
} else {
var temp__4657__auto___28845 = cljs.core.seq.call(null,seq__28804_28836);
if(temp__4657__auto___28845){
var seq__28804_28846__$1 = temp__4657__auto___28845;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28804_28846__$1)){
var c__27236__auto___28847 = cljs.core.chunk_first.call(null,seq__28804_28846__$1);
var G__28848 = cljs.core.chunk_rest.call(null,seq__28804_28846__$1);
var G__28849 = c__27236__auto___28847;
var G__28850 = cljs.core.count.call(null,c__27236__auto___28847);
var G__28851 = (0);
seq__28804_28836 = G__28848;
chunk__28805_28837 = G__28849;
count__28806_28838 = G__28850;
i__28807_28839 = G__28851;
continue;
} else {
var r_28852 = cljs.core.first.call(null,seq__28804_28846__$1);
cljs.core.add_watch.call(null,r_28852,cljs.core.keyword.call(null,cljs.core.gensym.call(null)),((function (seq__28804_28836,chunk__28805_28837,count__28806_28838,i__28807_28839,r_28852,seq__28804_28846__$1,temp__4657__auto___28845,a1,refs,shorts,log_state,vec__28791,debug){
return (function (_,___$1,___$2,___$3){
if(cljs.core.truth_(debug)){
binaural_beats.utils.p.call(null,"---- r start:",r_28852," ----");

log_state.call(null);
} else {
}

if(cljs.core.seq.call(null,cljs.core.deref.call(null,shorts))){
} else {
cljs.core.swap_BANG_.call(null,shorts,cljs.core.conj,a1);

cljs.core.reset_BANG_.call(null,a1,build.call(null));
}

if(cljs.core.truth_(debug)){
binaural_beats.utils.p.call(null,"---- r end:",r_28852," ----");

return log_state.call(null);
} else {
return null;
}
});})(seq__28804_28836,chunk__28805_28837,count__28806_28838,i__28807_28839,r_28852,seq__28804_28846__$1,temp__4657__auto___28845,a1,refs,shorts,log_state,vec__28791,debug))
);

var G__28853 = cljs.core.next.call(null,seq__28804_28846__$1);
var G__28854 = null;
var G__28855 = (0);
var G__28856 = (0);
seq__28804_28836 = G__28853;
chunk__28805_28837 = G__28854;
count__28806_28838 = G__28855;
i__28807_28839 = G__28856;
continue;
}
} else {
}
}
break;
}

return a1;
});

binaural_beats.utils.rwrap.cljs$lang$maxFixedArity = (2);

binaural_beats.utils.rwrap.cljs$lang$applyTo = (function (seq28787){
var G__28788 = cljs.core.first.call(null,seq28787);
var seq28787__$1 = cljs.core.next.call(null,seq28787);
var G__28789 = cljs.core.first.call(null,seq28787__$1);
var seq28787__$2 = cljs.core.next.call(null,seq28787__$1);
return binaural_beats.utils.rwrap.cljs$core$IFn$_invoke$arity$variadic(G__28788,G__28789,seq28787__$2);
});


//# sourceMappingURL=utils.js.map?rel=1480772920747