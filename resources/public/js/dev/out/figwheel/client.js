// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args37597 = [];
var len__27500__auto___37600 = arguments.length;
var i__27501__auto___37601 = (0);
while(true){
if((i__27501__auto___37601 < len__27500__auto___37600)){
args37597.push((arguments[i__27501__auto___37601]));

var G__37602 = (i__27501__auto___37601 + (1));
i__27501__auto___37601 = G__37602;
continue;
} else {
}
break;
}

var G__37599 = args37597.length;
switch (G__37599) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37597.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__27507__auto__ = [];
var len__27500__auto___37605 = arguments.length;
var i__27501__auto___37606 = (0);
while(true){
if((i__27501__auto___37606 < len__27500__auto___37605)){
args__27507__auto__.push((arguments[i__27501__auto___37606]));

var G__37607 = (i__27501__auto___37606 + (1));
i__27501__auto___37606 = G__37607;
continue;
} else {
}
break;
}

var argseq__27508__auto__ = ((((0) < args__27507__auto__.length))?(new cljs.core.IndexedSeq(args__27507__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27508__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37604){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37604));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__27507__auto__ = [];
var len__27500__auto___37609 = arguments.length;
var i__27501__auto___37610 = (0);
while(true){
if((i__27501__auto___37610 < len__27500__auto___37609)){
args__27507__auto__.push((arguments[i__27501__auto___37610]));

var G__37611 = (i__27501__auto___37610 + (1));
i__27501__auto___37610 = G__37611;
continue;
} else {
}
break;
}

var argseq__27508__auto__ = ((((0) < args__27507__auto__.length))?(new cljs.core.IndexedSeq(args__27507__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27508__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37608){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37608));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__37612 = cljs.core._EQ_;
var expr__37613 = (function (){var or__26425__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e37616){if((e37616 instanceof Error)){
var e = e37616;
return false;
} else {
throw e37616;

}
}})();
if(cljs.core.truth_(or__26425__auto__)){
return or__26425__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__37612.call(null,"true",expr__37613))){
return true;
} else {
if(cljs.core.truth_(pred__37612.call(null,"false",expr__37613))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__37613)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e37618){if((e37618 instanceof Error)){
var e = e37618;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e37618;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37619){
var map__37622 = p__37619;
var map__37622__$1 = ((((!((map__37622 == null)))?((((map__37622.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37622.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37622):map__37622);
var message = cljs.core.get.call(null,map__37622__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37622__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__26425__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__26425__auto__)){
return or__26425__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__26413__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__26413__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__26413__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__32055__auto___37784 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32055__auto___37784,ch){
return (function (){
var f__32056__auto__ = (function (){var switch__31943__auto__ = ((function (c__32055__auto___37784,ch){
return (function (state_37753){
var state_val_37754 = (state_37753[(1)]);
if((state_val_37754 === (7))){
var inst_37749 = (state_37753[(2)]);
var state_37753__$1 = state_37753;
var statearr_37755_37785 = state_37753__$1;
(statearr_37755_37785[(2)] = inst_37749);

(statearr_37755_37785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37754 === (1))){
var state_37753__$1 = state_37753;
var statearr_37756_37786 = state_37753__$1;
(statearr_37756_37786[(2)] = null);

(statearr_37756_37786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37754 === (4))){
var inst_37706 = (state_37753[(7)]);
var inst_37706__$1 = (state_37753[(2)]);
var state_37753__$1 = (function (){var statearr_37757 = state_37753;
(statearr_37757[(7)] = inst_37706__$1);

return statearr_37757;
})();
if(cljs.core.truth_(inst_37706__$1)){
var statearr_37758_37787 = state_37753__$1;
(statearr_37758_37787[(1)] = (5));

} else {
var statearr_37759_37788 = state_37753__$1;
(statearr_37759_37788[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37754 === (15))){
var inst_37713 = (state_37753[(8)]);
var inst_37728 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37713);
var inst_37729 = cljs.core.first.call(null,inst_37728);
var inst_37730 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37729);
var inst_37731 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_37730)].join('');
var inst_37732 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37731);
var state_37753__$1 = state_37753;
var statearr_37760_37789 = state_37753__$1;
(statearr_37760_37789[(2)] = inst_37732);

(statearr_37760_37789[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37754 === (13))){
var inst_37737 = (state_37753[(2)]);
var state_37753__$1 = state_37753;
var statearr_37761_37790 = state_37753__$1;
(statearr_37761_37790[(2)] = inst_37737);

(statearr_37761_37790[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37754 === (6))){
var state_37753__$1 = state_37753;
var statearr_37762_37791 = state_37753__$1;
(statearr_37762_37791[(2)] = null);

(statearr_37762_37791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37754 === (17))){
var inst_37735 = (state_37753[(2)]);
var state_37753__$1 = state_37753;
var statearr_37763_37792 = state_37753__$1;
(statearr_37763_37792[(2)] = inst_37735);

(statearr_37763_37792[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37754 === (3))){
var inst_37751 = (state_37753[(2)]);
var state_37753__$1 = state_37753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37753__$1,inst_37751);
} else {
if((state_val_37754 === (12))){
var inst_37712 = (state_37753[(9)]);
var inst_37726 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37712,opts);
var state_37753__$1 = state_37753;
if(cljs.core.truth_(inst_37726)){
var statearr_37764_37793 = state_37753__$1;
(statearr_37764_37793[(1)] = (15));

} else {
var statearr_37765_37794 = state_37753__$1;
(statearr_37765_37794[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37754 === (2))){
var state_37753__$1 = state_37753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37753__$1,(4),ch);
} else {
if((state_val_37754 === (11))){
var inst_37713 = (state_37753[(8)]);
var inst_37718 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37719 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37713);
var inst_37720 = cljs.core.async.timeout.call(null,(1000));
var inst_37721 = [inst_37719,inst_37720];
var inst_37722 = (new cljs.core.PersistentVector(null,2,(5),inst_37718,inst_37721,null));
var state_37753__$1 = state_37753;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37753__$1,(14),inst_37722);
} else {
if((state_val_37754 === (9))){
var inst_37713 = (state_37753[(8)]);
var inst_37739 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37740 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37713);
var inst_37741 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37740);
var inst_37742 = [cljs.core.str("Not loading: "),cljs.core.str(inst_37741)].join('');
var inst_37743 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37742);
var state_37753__$1 = (function (){var statearr_37766 = state_37753;
(statearr_37766[(10)] = inst_37739);

return statearr_37766;
})();
var statearr_37767_37795 = state_37753__$1;
(statearr_37767_37795[(2)] = inst_37743);

(statearr_37767_37795[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37754 === (5))){
var inst_37706 = (state_37753[(7)]);
var inst_37708 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37709 = (new cljs.core.PersistentArrayMap(null,2,inst_37708,null));
var inst_37710 = (new cljs.core.PersistentHashSet(null,inst_37709,null));
var inst_37711 = figwheel.client.focus_msgs.call(null,inst_37710,inst_37706);
var inst_37712 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37711);
var inst_37713 = cljs.core.first.call(null,inst_37711);
var inst_37714 = figwheel.client.autoload_QMARK_.call(null);
var state_37753__$1 = (function (){var statearr_37768 = state_37753;
(statearr_37768[(8)] = inst_37713);

(statearr_37768[(9)] = inst_37712);

return statearr_37768;
})();
if(cljs.core.truth_(inst_37714)){
var statearr_37769_37796 = state_37753__$1;
(statearr_37769_37796[(1)] = (8));

} else {
var statearr_37770_37797 = state_37753__$1;
(statearr_37770_37797[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37754 === (14))){
var inst_37724 = (state_37753[(2)]);
var state_37753__$1 = state_37753;
var statearr_37771_37798 = state_37753__$1;
(statearr_37771_37798[(2)] = inst_37724);

(statearr_37771_37798[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37754 === (16))){
var state_37753__$1 = state_37753;
var statearr_37772_37799 = state_37753__$1;
(statearr_37772_37799[(2)] = null);

(statearr_37772_37799[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37754 === (10))){
var inst_37745 = (state_37753[(2)]);
var state_37753__$1 = (function (){var statearr_37773 = state_37753;
(statearr_37773[(11)] = inst_37745);

return statearr_37773;
})();
var statearr_37774_37800 = state_37753__$1;
(statearr_37774_37800[(2)] = null);

(statearr_37774_37800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37754 === (8))){
var inst_37712 = (state_37753[(9)]);
var inst_37716 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37712,opts);
var state_37753__$1 = state_37753;
if(cljs.core.truth_(inst_37716)){
var statearr_37775_37801 = state_37753__$1;
(statearr_37775_37801[(1)] = (11));

} else {
var statearr_37776_37802 = state_37753__$1;
(statearr_37776_37802[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32055__auto___37784,ch))
;
return ((function (switch__31943__auto__,c__32055__auto___37784,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__31944__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__31944__auto____0 = (function (){
var statearr_37780 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37780[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__31944__auto__);

(statearr_37780[(1)] = (1));

return statearr_37780;
});
var figwheel$client$file_reloader_plugin_$_state_machine__31944__auto____1 = (function (state_37753){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_37753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e37781){if((e37781 instanceof Object)){
var ex__31947__auto__ = e37781;
var statearr_37782_37803 = state_37753;
(statearr_37782_37803[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37804 = state_37753;
state_37753 = G__37804;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__31944__auto__ = function(state_37753){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__31944__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__31944__auto____1.call(this,state_37753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__31944__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__31944__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32055__auto___37784,ch))
})();
var state__32057__auto__ = (function (){var statearr_37783 = f__32056__auto__.call(null);
(statearr_37783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32055__auto___37784);

return statearr_37783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32057__auto__);
});})(c__32055__auto___37784,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37805_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37805_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_37808 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37808){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e37807){if((e37807 instanceof Error)){
var e = e37807;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37808], null));
} else {
var e = e37807;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_37808))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37809){
var map__37818 = p__37809;
var map__37818__$1 = ((((!((map__37818 == null)))?((((map__37818.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37818.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37818):map__37818);
var opts = map__37818__$1;
var build_id = cljs.core.get.call(null,map__37818__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37818,map__37818__$1,opts,build_id){
return (function (p__37820){
var vec__37821 = p__37820;
var seq__37822 = cljs.core.seq.call(null,vec__37821);
var first__37823 = cljs.core.first.call(null,seq__37822);
var seq__37822__$1 = cljs.core.next.call(null,seq__37822);
var map__37824 = first__37823;
var map__37824__$1 = ((((!((map__37824 == null)))?((((map__37824.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37824.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37824):map__37824);
var msg = map__37824__$1;
var msg_name = cljs.core.get.call(null,map__37824__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37822__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37821,seq__37822,first__37823,seq__37822__$1,map__37824,map__37824__$1,msg,msg_name,_,map__37818,map__37818__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37821,seq__37822,first__37823,seq__37822__$1,map__37824,map__37824__$1,msg,msg_name,_,map__37818,map__37818__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37818,map__37818__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37832){
var vec__37833 = p__37832;
var seq__37834 = cljs.core.seq.call(null,vec__37833);
var first__37835 = cljs.core.first.call(null,seq__37834);
var seq__37834__$1 = cljs.core.next.call(null,seq__37834);
var map__37836 = first__37835;
var map__37836__$1 = ((((!((map__37836 == null)))?((((map__37836.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37836.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37836):map__37836);
var msg = map__37836__$1;
var msg_name = cljs.core.get.call(null,map__37836__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37834__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37838){
var map__37850 = p__37838;
var map__37850__$1 = ((((!((map__37850 == null)))?((((map__37850.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37850.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37850):map__37850);
var on_compile_warning = cljs.core.get.call(null,map__37850__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37850__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37850,map__37850__$1,on_compile_warning,on_compile_fail){
return (function (p__37852){
var vec__37853 = p__37852;
var seq__37854 = cljs.core.seq.call(null,vec__37853);
var first__37855 = cljs.core.first.call(null,seq__37854);
var seq__37854__$1 = cljs.core.next.call(null,seq__37854);
var map__37856 = first__37855;
var map__37856__$1 = ((((!((map__37856 == null)))?((((map__37856.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37856.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37856):map__37856);
var msg = map__37856__$1;
var msg_name = cljs.core.get.call(null,map__37856__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37854__$1;
var pred__37858 = cljs.core._EQ_;
var expr__37859 = msg_name;
if(cljs.core.truth_(pred__37858.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37859))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37858.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37859))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37850,map__37850__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__32055__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32055__auto__,msg_hist,msg_names,msg){
return (function (){
var f__32056__auto__ = (function (){var switch__31943__auto__ = ((function (c__32055__auto__,msg_hist,msg_names,msg){
return (function (state_38087){
var state_val_38088 = (state_38087[(1)]);
if((state_val_38088 === (7))){
var inst_38007 = (state_38087[(2)]);
var state_38087__$1 = state_38087;
if(cljs.core.truth_(inst_38007)){
var statearr_38089_38139 = state_38087__$1;
(statearr_38089_38139[(1)] = (8));

} else {
var statearr_38090_38140 = state_38087__$1;
(statearr_38090_38140[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38088 === (20))){
var inst_38081 = (state_38087[(2)]);
var state_38087__$1 = state_38087;
var statearr_38091_38141 = state_38087__$1;
(statearr_38091_38141[(2)] = inst_38081);

(statearr_38091_38141[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38088 === (27))){
var inst_38077 = (state_38087[(2)]);
var state_38087__$1 = state_38087;
var statearr_38092_38142 = state_38087__$1;
(statearr_38092_38142[(2)] = inst_38077);

(statearr_38092_38142[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38088 === (1))){
var inst_38000 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38087__$1 = state_38087;
if(cljs.core.truth_(inst_38000)){
var statearr_38093_38143 = state_38087__$1;
(statearr_38093_38143[(1)] = (2));

} else {
var statearr_38094_38144 = state_38087__$1;
(statearr_38094_38144[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38088 === (24))){
var inst_38079 = (state_38087[(2)]);
var state_38087__$1 = state_38087;
var statearr_38095_38145 = state_38087__$1;
(statearr_38095_38145[(2)] = inst_38079);

(statearr_38095_38145[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38088 === (4))){
var inst_38085 = (state_38087[(2)]);
var state_38087__$1 = state_38087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38087__$1,inst_38085);
} else {
if((state_val_38088 === (15))){
var inst_38083 = (state_38087[(2)]);
var state_38087__$1 = state_38087;
var statearr_38096_38146 = state_38087__$1;
(statearr_38096_38146[(2)] = inst_38083);

(statearr_38096_38146[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38088 === (21))){
var inst_38036 = (state_38087[(2)]);
var inst_38037 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38038 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38037);
var state_38087__$1 = (function (){var statearr_38097 = state_38087;
(statearr_38097[(7)] = inst_38036);

return statearr_38097;
})();
var statearr_38098_38147 = state_38087__$1;
(statearr_38098_38147[(2)] = inst_38038);

(statearr_38098_38147[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38088 === (31))){
var inst_38066 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38087__$1 = state_38087;
if(cljs.core.truth_(inst_38066)){
var statearr_38099_38148 = state_38087__$1;
(statearr_38099_38148[(1)] = (34));

} else {
var statearr_38100_38149 = state_38087__$1;
(statearr_38100_38149[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38088 === (32))){
var inst_38075 = (state_38087[(2)]);
var state_38087__$1 = state_38087;
var statearr_38101_38150 = state_38087__$1;
(statearr_38101_38150[(2)] = inst_38075);

(statearr_38101_38150[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38088 === (33))){
var inst_38062 = (state_38087[(2)]);
var inst_38063 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38064 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38063);
var state_38087__$1 = (function (){var statearr_38102 = state_38087;
(statearr_38102[(8)] = inst_38062);

return statearr_38102;
})();
var statearr_38103_38151 = state_38087__$1;
(statearr_38103_38151[(2)] = inst_38064);

(statearr_38103_38151[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38088 === (13))){
var inst_38021 = figwheel.client.heads_up.clear.call(null);
var state_38087__$1 = state_38087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38087__$1,(16),inst_38021);
} else {
if((state_val_38088 === (22))){
var inst_38042 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38043 = figwheel.client.heads_up.append_warning_message.call(null,inst_38042);
var state_38087__$1 = state_38087;
var statearr_38104_38152 = state_38087__$1;
(statearr_38104_38152[(2)] = inst_38043);

(statearr_38104_38152[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38088 === (36))){
var inst_38073 = (state_38087[(2)]);
var state_38087__$1 = state_38087;
var statearr_38105_38153 = state_38087__$1;
(statearr_38105_38153[(2)] = inst_38073);

(statearr_38105_38153[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38088 === (29))){
var inst_38053 = (state_38087[(2)]);
var inst_38054 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38055 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38054);
var state_38087__$1 = (function (){var statearr_38106 = state_38087;
(statearr_38106[(9)] = inst_38053);

return statearr_38106;
})();
var statearr_38107_38154 = state_38087__$1;
(statearr_38107_38154[(2)] = inst_38055);

(statearr_38107_38154[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38088 === (6))){
var inst_38002 = (state_38087[(10)]);
var state_38087__$1 = state_38087;
var statearr_38108_38155 = state_38087__$1;
(statearr_38108_38155[(2)] = inst_38002);

(statearr_38108_38155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38088 === (28))){
var inst_38049 = (state_38087[(2)]);
var inst_38050 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38051 = figwheel.client.heads_up.display_warning.call(null,inst_38050);
var state_38087__$1 = (function (){var statearr_38109 = state_38087;
(statearr_38109[(11)] = inst_38049);

return statearr_38109;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38087__$1,(29),inst_38051);
} else {
if((state_val_38088 === (25))){
var inst_38047 = figwheel.client.heads_up.clear.call(null);
var state_38087__$1 = state_38087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38087__$1,(28),inst_38047);
} else {
if((state_val_38088 === (34))){
var inst_38068 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38087__$1 = state_38087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38087__$1,(37),inst_38068);
} else {
if((state_val_38088 === (17))){
var inst_38027 = (state_38087[(2)]);
var inst_38028 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38029 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38028);
var state_38087__$1 = (function (){var statearr_38110 = state_38087;
(statearr_38110[(12)] = inst_38027);

return statearr_38110;
})();
var statearr_38111_38156 = state_38087__$1;
(statearr_38111_38156[(2)] = inst_38029);

(statearr_38111_38156[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38088 === (3))){
var inst_38019 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38087__$1 = state_38087;
if(cljs.core.truth_(inst_38019)){
var statearr_38112_38157 = state_38087__$1;
(statearr_38112_38157[(1)] = (13));

} else {
var statearr_38113_38158 = state_38087__$1;
(statearr_38113_38158[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38088 === (12))){
var inst_38015 = (state_38087[(2)]);
var state_38087__$1 = state_38087;
var statearr_38114_38159 = state_38087__$1;
(statearr_38114_38159[(2)] = inst_38015);

(statearr_38114_38159[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38088 === (2))){
var inst_38002 = (state_38087[(10)]);
var inst_38002__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38087__$1 = (function (){var statearr_38115 = state_38087;
(statearr_38115[(10)] = inst_38002__$1);

return statearr_38115;
})();
if(cljs.core.truth_(inst_38002__$1)){
var statearr_38116_38160 = state_38087__$1;
(statearr_38116_38160[(1)] = (5));

} else {
var statearr_38117_38161 = state_38087__$1;
(statearr_38117_38161[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38088 === (23))){
var inst_38045 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38087__$1 = state_38087;
if(cljs.core.truth_(inst_38045)){
var statearr_38118_38162 = state_38087__$1;
(statearr_38118_38162[(1)] = (25));

} else {
var statearr_38119_38163 = state_38087__$1;
(statearr_38119_38163[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38088 === (35))){
var state_38087__$1 = state_38087;
var statearr_38120_38164 = state_38087__$1;
(statearr_38120_38164[(2)] = null);

(statearr_38120_38164[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38088 === (19))){
var inst_38040 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38087__$1 = state_38087;
if(cljs.core.truth_(inst_38040)){
var statearr_38121_38165 = state_38087__$1;
(statearr_38121_38165[(1)] = (22));

} else {
var statearr_38122_38166 = state_38087__$1;
(statearr_38122_38166[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38088 === (11))){
var inst_38011 = (state_38087[(2)]);
var state_38087__$1 = state_38087;
var statearr_38123_38167 = state_38087__$1;
(statearr_38123_38167[(2)] = inst_38011);

(statearr_38123_38167[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38088 === (9))){
var inst_38013 = figwheel.client.heads_up.clear.call(null);
var state_38087__$1 = state_38087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38087__$1,(12),inst_38013);
} else {
if((state_val_38088 === (5))){
var inst_38004 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38087__$1 = state_38087;
var statearr_38124_38168 = state_38087__$1;
(statearr_38124_38168[(2)] = inst_38004);

(statearr_38124_38168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38088 === (14))){
var inst_38031 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38087__$1 = state_38087;
if(cljs.core.truth_(inst_38031)){
var statearr_38125_38169 = state_38087__$1;
(statearr_38125_38169[(1)] = (18));

} else {
var statearr_38126_38170 = state_38087__$1;
(statearr_38126_38170[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38088 === (26))){
var inst_38057 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38087__$1 = state_38087;
if(cljs.core.truth_(inst_38057)){
var statearr_38127_38171 = state_38087__$1;
(statearr_38127_38171[(1)] = (30));

} else {
var statearr_38128_38172 = state_38087__$1;
(statearr_38128_38172[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38088 === (16))){
var inst_38023 = (state_38087[(2)]);
var inst_38024 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38025 = figwheel.client.heads_up.display_exception.call(null,inst_38024);
var state_38087__$1 = (function (){var statearr_38129 = state_38087;
(statearr_38129[(13)] = inst_38023);

return statearr_38129;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38087__$1,(17),inst_38025);
} else {
if((state_val_38088 === (30))){
var inst_38059 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38060 = figwheel.client.heads_up.display_warning.call(null,inst_38059);
var state_38087__$1 = state_38087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38087__$1,(33),inst_38060);
} else {
if((state_val_38088 === (10))){
var inst_38017 = (state_38087[(2)]);
var state_38087__$1 = state_38087;
var statearr_38130_38173 = state_38087__$1;
(statearr_38130_38173[(2)] = inst_38017);

(statearr_38130_38173[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38088 === (18))){
var inst_38033 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38034 = figwheel.client.heads_up.display_exception.call(null,inst_38033);
var state_38087__$1 = state_38087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38087__$1,(21),inst_38034);
} else {
if((state_val_38088 === (37))){
var inst_38070 = (state_38087[(2)]);
var state_38087__$1 = state_38087;
var statearr_38131_38174 = state_38087__$1;
(statearr_38131_38174[(2)] = inst_38070);

(statearr_38131_38174[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38088 === (8))){
var inst_38009 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38087__$1 = state_38087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38087__$1,(11),inst_38009);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32055__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__31943__auto__,c__32055__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31944__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31944__auto____0 = (function (){
var statearr_38135 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38135[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31944__auto__);

(statearr_38135[(1)] = (1));

return statearr_38135;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31944__auto____1 = (function (state_38087){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_38087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e38136){if((e38136 instanceof Object)){
var ex__31947__auto__ = e38136;
var statearr_38137_38175 = state_38087;
(statearr_38137_38175[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38176 = state_38087;
state_38087 = G__38176;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31944__auto__ = function(state_38087){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31944__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31944__auto____1.call(this,state_38087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31944__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31944__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32055__auto__,msg_hist,msg_names,msg))
})();
var state__32057__auto__ = (function (){var statearr_38138 = f__32056__auto__.call(null);
(statearr_38138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32055__auto__);

return statearr_38138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32057__auto__);
});})(c__32055__auto__,msg_hist,msg_names,msg))
);

return c__32055__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__32055__auto___38239 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32055__auto___38239,ch){
return (function (){
var f__32056__auto__ = (function (){var switch__31943__auto__ = ((function (c__32055__auto___38239,ch){
return (function (state_38222){
var state_val_38223 = (state_38222[(1)]);
if((state_val_38223 === (1))){
var state_38222__$1 = state_38222;
var statearr_38224_38240 = state_38222__$1;
(statearr_38224_38240[(2)] = null);

(statearr_38224_38240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38223 === (2))){
var state_38222__$1 = state_38222;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38222__$1,(4),ch);
} else {
if((state_val_38223 === (3))){
var inst_38220 = (state_38222[(2)]);
var state_38222__$1 = state_38222;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38222__$1,inst_38220);
} else {
if((state_val_38223 === (4))){
var inst_38210 = (state_38222[(7)]);
var inst_38210__$1 = (state_38222[(2)]);
var state_38222__$1 = (function (){var statearr_38225 = state_38222;
(statearr_38225[(7)] = inst_38210__$1);

return statearr_38225;
})();
if(cljs.core.truth_(inst_38210__$1)){
var statearr_38226_38241 = state_38222__$1;
(statearr_38226_38241[(1)] = (5));

} else {
var statearr_38227_38242 = state_38222__$1;
(statearr_38227_38242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38223 === (5))){
var inst_38210 = (state_38222[(7)]);
var inst_38212 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38210);
var state_38222__$1 = state_38222;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38222__$1,(8),inst_38212);
} else {
if((state_val_38223 === (6))){
var state_38222__$1 = state_38222;
var statearr_38228_38243 = state_38222__$1;
(statearr_38228_38243[(2)] = null);

(statearr_38228_38243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38223 === (7))){
var inst_38218 = (state_38222[(2)]);
var state_38222__$1 = state_38222;
var statearr_38229_38244 = state_38222__$1;
(statearr_38229_38244[(2)] = inst_38218);

(statearr_38229_38244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38223 === (8))){
var inst_38214 = (state_38222[(2)]);
var state_38222__$1 = (function (){var statearr_38230 = state_38222;
(statearr_38230[(8)] = inst_38214);

return statearr_38230;
})();
var statearr_38231_38245 = state_38222__$1;
(statearr_38231_38245[(2)] = null);

(statearr_38231_38245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__32055__auto___38239,ch))
;
return ((function (switch__31943__auto__,c__32055__auto___38239,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__31944__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__31944__auto____0 = (function (){
var statearr_38235 = [null,null,null,null,null,null,null,null,null];
(statearr_38235[(0)] = figwheel$client$heads_up_plugin_$_state_machine__31944__auto__);

(statearr_38235[(1)] = (1));

return statearr_38235;
});
var figwheel$client$heads_up_plugin_$_state_machine__31944__auto____1 = (function (state_38222){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_38222);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e38236){if((e38236 instanceof Object)){
var ex__31947__auto__ = e38236;
var statearr_38237_38246 = state_38222;
(statearr_38237_38246[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38247 = state_38222;
state_38222 = G__38247;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__31944__auto__ = function(state_38222){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__31944__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__31944__auto____1.call(this,state_38222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__31944__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__31944__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32055__auto___38239,ch))
})();
var state__32057__auto__ = (function (){var statearr_38238 = f__32056__auto__.call(null);
(statearr_38238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32055__auto___38239);

return statearr_38238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32057__auto__);
});})(c__32055__auto___38239,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__32055__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32055__auto__){
return (function (){
var f__32056__auto__ = (function (){var switch__31943__auto__ = ((function (c__32055__auto__){
return (function (state_38268){
var state_val_38269 = (state_38268[(1)]);
if((state_val_38269 === (1))){
var inst_38263 = cljs.core.async.timeout.call(null,(3000));
var state_38268__$1 = state_38268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38268__$1,(2),inst_38263);
} else {
if((state_val_38269 === (2))){
var inst_38265 = (state_38268[(2)]);
var inst_38266 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38268__$1 = (function (){var statearr_38270 = state_38268;
(statearr_38270[(7)] = inst_38265);

return statearr_38270;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38268__$1,inst_38266);
} else {
return null;
}
}
});})(c__32055__auto__))
;
return ((function (switch__31943__auto__,c__32055__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__31944__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__31944__auto____0 = (function (){
var statearr_38274 = [null,null,null,null,null,null,null,null];
(statearr_38274[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__31944__auto__);

(statearr_38274[(1)] = (1));

return statearr_38274;
});
var figwheel$client$enforce_project_plugin_$_state_machine__31944__auto____1 = (function (state_38268){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_38268);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e38275){if((e38275 instanceof Object)){
var ex__31947__auto__ = e38275;
var statearr_38276_38278 = state_38268;
(statearr_38276_38278[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38279 = state_38268;
state_38268 = G__38279;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__31944__auto__ = function(state_38268){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__31944__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__31944__auto____1.call(this,state_38268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__31944__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__31944__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32055__auto__))
})();
var state__32057__auto__ = (function (){var statearr_38277 = f__32056__auto__.call(null);
(statearr_38277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32055__auto__);

return statearr_38277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32057__auto__);
});})(c__32055__auto__))
);

return c__32055__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__32055__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32055__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__32056__auto__ = (function (){var switch__31943__auto__ = ((function (c__32055__auto__,figwheel_version,temp__4657__auto__){
return (function (state_38302){
var state_val_38303 = (state_38302[(1)]);
if((state_val_38303 === (1))){
var inst_38296 = cljs.core.async.timeout.call(null,(2000));
var state_38302__$1 = state_38302;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38302__$1,(2),inst_38296);
} else {
if((state_val_38303 === (2))){
var inst_38298 = (state_38302[(2)]);
var inst_38299 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_38300 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38299);
var state_38302__$1 = (function (){var statearr_38304 = state_38302;
(statearr_38304[(7)] = inst_38298);

return statearr_38304;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38302__$1,inst_38300);
} else {
return null;
}
}
});})(c__32055__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__31943__auto__,c__32055__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31944__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31944__auto____0 = (function (){
var statearr_38308 = [null,null,null,null,null,null,null,null];
(statearr_38308[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31944__auto__);

(statearr_38308[(1)] = (1));

return statearr_38308;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31944__auto____1 = (function (state_38302){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_38302);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e38309){if((e38309 instanceof Object)){
var ex__31947__auto__ = e38309;
var statearr_38310_38312 = state_38302;
(statearr_38310_38312[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38313 = state_38302;
state_38302 = G__38313;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31944__auto__ = function(state_38302){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31944__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31944__auto____1.call(this,state_38302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31944__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31944__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32055__auto__,figwheel_version,temp__4657__auto__))
})();
var state__32057__auto__ = (function (){var statearr_38311 = f__32056__auto__.call(null);
(statearr_38311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32055__auto__);

return statearr_38311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32057__auto__);
});})(c__32055__auto__,figwheel_version,temp__4657__auto__))
);

return c__32055__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38314){
var map__38318 = p__38314;
var map__38318__$1 = ((((!((map__38318 == null)))?((((map__38318.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38318.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38318):map__38318);
var file = cljs.core.get.call(null,map__38318__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38318__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38318__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38320 = "";
var G__38320__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__38320),cljs.core.str("file "),cljs.core.str(file)].join(''):G__38320);
var G__38320__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__38320__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__38320__$1);
if(cljs.core.truth_((function (){var and__26413__auto__ = line;
if(cljs.core.truth_(and__26413__auto__)){
return column;
} else {
return and__26413__auto__;
}
})())){
return [cljs.core.str(G__38320__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__38320__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38321){
var map__38328 = p__38321;
var map__38328__$1 = ((((!((map__38328 == null)))?((((map__38328.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38328.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38328):map__38328);
var ed = map__38328__$1;
var formatted_exception = cljs.core.get.call(null,map__38328__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38328__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38328__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38330_38334 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38331_38335 = null;
var count__38332_38336 = (0);
var i__38333_38337 = (0);
while(true){
if((i__38333_38337 < count__38332_38336)){
var msg_38338 = cljs.core._nth.call(null,chunk__38331_38335,i__38333_38337);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38338);

var G__38339 = seq__38330_38334;
var G__38340 = chunk__38331_38335;
var G__38341 = count__38332_38336;
var G__38342 = (i__38333_38337 + (1));
seq__38330_38334 = G__38339;
chunk__38331_38335 = G__38340;
count__38332_38336 = G__38341;
i__38333_38337 = G__38342;
continue;
} else {
var temp__4657__auto___38343 = cljs.core.seq.call(null,seq__38330_38334);
if(temp__4657__auto___38343){
var seq__38330_38344__$1 = temp__4657__auto___38343;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38330_38344__$1)){
var c__27236__auto___38345 = cljs.core.chunk_first.call(null,seq__38330_38344__$1);
var G__38346 = cljs.core.chunk_rest.call(null,seq__38330_38344__$1);
var G__38347 = c__27236__auto___38345;
var G__38348 = cljs.core.count.call(null,c__27236__auto___38345);
var G__38349 = (0);
seq__38330_38334 = G__38346;
chunk__38331_38335 = G__38347;
count__38332_38336 = G__38348;
i__38333_38337 = G__38349;
continue;
} else {
var msg_38350 = cljs.core.first.call(null,seq__38330_38344__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38350);

var G__38351 = cljs.core.next.call(null,seq__38330_38344__$1);
var G__38352 = null;
var G__38353 = (0);
var G__38354 = (0);
seq__38330_38334 = G__38351;
chunk__38331_38335 = G__38352;
count__38332_38336 = G__38353;
i__38333_38337 = G__38354;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38355){
var map__38358 = p__38355;
var map__38358__$1 = ((((!((map__38358 == null)))?((((map__38358.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38358.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38358):map__38358);
var w = map__38358__$1;
var message = cljs.core.get.call(null,map__38358__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/dev/out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/dev/out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__26413__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__26413__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__26413__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__38370 = cljs.core.seq.call(null,plugins);
var chunk__38371 = null;
var count__38372 = (0);
var i__38373 = (0);
while(true){
if((i__38373 < count__38372)){
var vec__38374 = cljs.core._nth.call(null,chunk__38371,i__38373);
var k = cljs.core.nth.call(null,vec__38374,(0),null);
var plugin = cljs.core.nth.call(null,vec__38374,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38380 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38370,chunk__38371,count__38372,i__38373,pl_38380,vec__38374,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38380.call(null,msg_hist);
});})(seq__38370,chunk__38371,count__38372,i__38373,pl_38380,vec__38374,k,plugin))
);
} else {
}

var G__38381 = seq__38370;
var G__38382 = chunk__38371;
var G__38383 = count__38372;
var G__38384 = (i__38373 + (1));
seq__38370 = G__38381;
chunk__38371 = G__38382;
count__38372 = G__38383;
i__38373 = G__38384;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38370);
if(temp__4657__auto__){
var seq__38370__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38370__$1)){
var c__27236__auto__ = cljs.core.chunk_first.call(null,seq__38370__$1);
var G__38385 = cljs.core.chunk_rest.call(null,seq__38370__$1);
var G__38386 = c__27236__auto__;
var G__38387 = cljs.core.count.call(null,c__27236__auto__);
var G__38388 = (0);
seq__38370 = G__38385;
chunk__38371 = G__38386;
count__38372 = G__38387;
i__38373 = G__38388;
continue;
} else {
var vec__38377 = cljs.core.first.call(null,seq__38370__$1);
var k = cljs.core.nth.call(null,vec__38377,(0),null);
var plugin = cljs.core.nth.call(null,vec__38377,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38389 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38370,chunk__38371,count__38372,i__38373,pl_38389,vec__38377,k,plugin,seq__38370__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38389.call(null,msg_hist);
});})(seq__38370,chunk__38371,count__38372,i__38373,pl_38389,vec__38377,k,plugin,seq__38370__$1,temp__4657__auto__))
);
} else {
}

var G__38390 = cljs.core.next.call(null,seq__38370__$1);
var G__38391 = null;
var G__38392 = (0);
var G__38393 = (0);
seq__38370 = G__38390;
chunk__38371 = G__38391;
count__38372 = G__38392;
i__38373 = G__38393;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args38394 = [];
var len__27500__auto___38401 = arguments.length;
var i__27501__auto___38402 = (0);
while(true){
if((i__27501__auto___38402 < len__27500__auto___38401)){
args38394.push((arguments[i__27501__auto___38402]));

var G__38403 = (i__27501__auto___38402 + (1));
i__27501__auto___38402 = G__38403;
continue;
} else {
}
break;
}

var G__38396 = args38394.length;
switch (G__38396) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38394.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__38397_38405 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38398_38406 = null;
var count__38399_38407 = (0);
var i__38400_38408 = (0);
while(true){
if((i__38400_38408 < count__38399_38407)){
var msg_38409 = cljs.core._nth.call(null,chunk__38398_38406,i__38400_38408);
figwheel.client.socket.handle_incoming_message.call(null,msg_38409);

var G__38410 = seq__38397_38405;
var G__38411 = chunk__38398_38406;
var G__38412 = count__38399_38407;
var G__38413 = (i__38400_38408 + (1));
seq__38397_38405 = G__38410;
chunk__38398_38406 = G__38411;
count__38399_38407 = G__38412;
i__38400_38408 = G__38413;
continue;
} else {
var temp__4657__auto___38414 = cljs.core.seq.call(null,seq__38397_38405);
if(temp__4657__auto___38414){
var seq__38397_38415__$1 = temp__4657__auto___38414;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38397_38415__$1)){
var c__27236__auto___38416 = cljs.core.chunk_first.call(null,seq__38397_38415__$1);
var G__38417 = cljs.core.chunk_rest.call(null,seq__38397_38415__$1);
var G__38418 = c__27236__auto___38416;
var G__38419 = cljs.core.count.call(null,c__27236__auto___38416);
var G__38420 = (0);
seq__38397_38405 = G__38417;
chunk__38398_38406 = G__38418;
count__38399_38407 = G__38419;
i__38400_38408 = G__38420;
continue;
} else {
var msg_38421 = cljs.core.first.call(null,seq__38397_38415__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38421);

var G__38422 = cljs.core.next.call(null,seq__38397_38415__$1);
var G__38423 = null;
var G__38424 = (0);
var G__38425 = (0);
seq__38397_38405 = G__38422;
chunk__38398_38406 = G__38423;
count__38399_38407 = G__38424;
i__38400_38408 = G__38425;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__27507__auto__ = [];
var len__27500__auto___38430 = arguments.length;
var i__27501__auto___38431 = (0);
while(true){
if((i__27501__auto___38431 < len__27500__auto___38430)){
args__27507__auto__.push((arguments[i__27501__auto___38431]));

var G__38432 = (i__27501__auto___38431 + (1));
i__27501__auto___38431 = G__38432;
continue;
} else {
}
break;
}

var argseq__27508__auto__ = ((((0) < args__27507__auto__.length))?(new cljs.core.IndexedSeq(args__27507__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__27508__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38427){
var map__38428 = p__38427;
var map__38428__$1 = ((((!((map__38428 == null)))?((((map__38428.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38428.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38428):map__38428);
var opts = map__38428__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38426){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38426));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38434){if((e38434 instanceof Error)){
var e = e38434;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38434;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__38438){
var map__38439 = p__38438;
var map__38439__$1 = ((((!((map__38439 == null)))?((((map__38439.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38439.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38439):map__38439);
var msg_name = cljs.core.get.call(null,map__38439__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1480772939680