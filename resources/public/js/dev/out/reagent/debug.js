// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__28047__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__28047 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28048__i = 0, G__28048__a = new Array(arguments.length -  0);
while (G__28048__i < G__28048__a.length) {G__28048__a[G__28048__i] = arguments[G__28048__i + 0]; ++G__28048__i;}
  args = new cljs.core.IndexedSeq(G__28048__a,0);
} 
return G__28047__delegate.call(this,args);};
G__28047.cljs$lang$maxFixedArity = 0;
G__28047.cljs$lang$applyTo = (function (arglist__28049){
var args = cljs.core.seq(arglist__28049);
return G__28047__delegate(args);
});
G__28047.cljs$core$IFn$_invoke$arity$variadic = G__28047__delegate;
return G__28047;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__28050__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__28050 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28051__i = 0, G__28051__a = new Array(arguments.length -  0);
while (G__28051__i < G__28051__a.length) {G__28051__a[G__28051__i] = arguments[G__28051__i + 0]; ++G__28051__i;}
  args = new cljs.core.IndexedSeq(G__28051__a,0);
} 
return G__28050__delegate.call(this,args);};
G__28050.cljs$lang$maxFixedArity = 0;
G__28050.cljs$lang$applyTo = (function (arglist__28052){
var args = cljs.core.seq(arglist__28052);
return G__28050__delegate(args);
});
G__28050.cljs$core$IFn$_invoke$arity$variadic = G__28050__delegate;
return G__28050;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1480772917491