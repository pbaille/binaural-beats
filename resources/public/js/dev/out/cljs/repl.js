// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37026){
var map__37051 = p__37026;
var map__37051__$1 = ((((!((map__37051 == null)))?((((map__37051.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37051.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37051):map__37051);
var m = map__37051__$1;
var n = cljs.core.get.call(null,map__37051__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37051__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37053_37075 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37054_37076 = null;
var count__37055_37077 = (0);
var i__37056_37078 = (0);
while(true){
if((i__37056_37078 < count__37055_37077)){
var f_37079 = cljs.core._nth.call(null,chunk__37054_37076,i__37056_37078);
cljs.core.println.call(null,"  ",f_37079);

var G__37080 = seq__37053_37075;
var G__37081 = chunk__37054_37076;
var G__37082 = count__37055_37077;
var G__37083 = (i__37056_37078 + (1));
seq__37053_37075 = G__37080;
chunk__37054_37076 = G__37081;
count__37055_37077 = G__37082;
i__37056_37078 = G__37083;
continue;
} else {
var temp__4657__auto___37084 = cljs.core.seq.call(null,seq__37053_37075);
if(temp__4657__auto___37084){
var seq__37053_37085__$1 = temp__4657__auto___37084;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37053_37085__$1)){
var c__27236__auto___37086 = cljs.core.chunk_first.call(null,seq__37053_37085__$1);
var G__37087 = cljs.core.chunk_rest.call(null,seq__37053_37085__$1);
var G__37088 = c__27236__auto___37086;
var G__37089 = cljs.core.count.call(null,c__27236__auto___37086);
var G__37090 = (0);
seq__37053_37075 = G__37087;
chunk__37054_37076 = G__37088;
count__37055_37077 = G__37089;
i__37056_37078 = G__37090;
continue;
} else {
var f_37091 = cljs.core.first.call(null,seq__37053_37085__$1);
cljs.core.println.call(null,"  ",f_37091);

var G__37092 = cljs.core.next.call(null,seq__37053_37085__$1);
var G__37093 = null;
var G__37094 = (0);
var G__37095 = (0);
seq__37053_37075 = G__37092;
chunk__37054_37076 = G__37093;
count__37055_37077 = G__37094;
i__37056_37078 = G__37095;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37096 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__26425__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__26425__auto__)){
return or__26425__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37096);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37096)))?cljs.core.second.call(null,arglists_37096):arglists_37096));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37057_37097 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37058_37098 = null;
var count__37059_37099 = (0);
var i__37060_37100 = (0);
while(true){
if((i__37060_37100 < count__37059_37099)){
var vec__37061_37101 = cljs.core._nth.call(null,chunk__37058_37098,i__37060_37100);
var name_37102 = cljs.core.nth.call(null,vec__37061_37101,(0),null);
var map__37064_37103 = cljs.core.nth.call(null,vec__37061_37101,(1),null);
var map__37064_37104__$1 = ((((!((map__37064_37103 == null)))?((((map__37064_37103.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37064_37103.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37064_37103):map__37064_37103);
var doc_37105 = cljs.core.get.call(null,map__37064_37104__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37106 = cljs.core.get.call(null,map__37064_37104__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37102);

cljs.core.println.call(null," ",arglists_37106);

if(cljs.core.truth_(doc_37105)){
cljs.core.println.call(null," ",doc_37105);
} else {
}

var G__37107 = seq__37057_37097;
var G__37108 = chunk__37058_37098;
var G__37109 = count__37059_37099;
var G__37110 = (i__37060_37100 + (1));
seq__37057_37097 = G__37107;
chunk__37058_37098 = G__37108;
count__37059_37099 = G__37109;
i__37060_37100 = G__37110;
continue;
} else {
var temp__4657__auto___37111 = cljs.core.seq.call(null,seq__37057_37097);
if(temp__4657__auto___37111){
var seq__37057_37112__$1 = temp__4657__auto___37111;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37057_37112__$1)){
var c__27236__auto___37113 = cljs.core.chunk_first.call(null,seq__37057_37112__$1);
var G__37114 = cljs.core.chunk_rest.call(null,seq__37057_37112__$1);
var G__37115 = c__27236__auto___37113;
var G__37116 = cljs.core.count.call(null,c__27236__auto___37113);
var G__37117 = (0);
seq__37057_37097 = G__37114;
chunk__37058_37098 = G__37115;
count__37059_37099 = G__37116;
i__37060_37100 = G__37117;
continue;
} else {
var vec__37066_37118 = cljs.core.first.call(null,seq__37057_37112__$1);
var name_37119 = cljs.core.nth.call(null,vec__37066_37118,(0),null);
var map__37069_37120 = cljs.core.nth.call(null,vec__37066_37118,(1),null);
var map__37069_37121__$1 = ((((!((map__37069_37120 == null)))?((((map__37069_37120.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37069_37120.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37069_37120):map__37069_37120);
var doc_37122 = cljs.core.get.call(null,map__37069_37121__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37123 = cljs.core.get.call(null,map__37069_37121__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37119);

cljs.core.println.call(null," ",arglists_37123);

if(cljs.core.truth_(doc_37122)){
cljs.core.println.call(null," ",doc_37122);
} else {
}

var G__37124 = cljs.core.next.call(null,seq__37057_37112__$1);
var G__37125 = null;
var G__37126 = (0);
var G__37127 = (0);
seq__37057_37097 = G__37124;
chunk__37058_37098 = G__37125;
count__37059_37099 = G__37126;
i__37060_37100 = G__37127;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__37071 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37072 = null;
var count__37073 = (0);
var i__37074 = (0);
while(true){
if((i__37074 < count__37073)){
var role = cljs.core._nth.call(null,chunk__37072,i__37074);
var temp__4657__auto___37128__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37128__$1)){
var spec_37129 = temp__4657__auto___37128__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_37129));
} else {
}

var G__37130 = seq__37071;
var G__37131 = chunk__37072;
var G__37132 = count__37073;
var G__37133 = (i__37074 + (1));
seq__37071 = G__37130;
chunk__37072 = G__37131;
count__37073 = G__37132;
i__37074 = G__37133;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__37071);
if(temp__4657__auto____$1){
var seq__37071__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37071__$1)){
var c__27236__auto__ = cljs.core.chunk_first.call(null,seq__37071__$1);
var G__37134 = cljs.core.chunk_rest.call(null,seq__37071__$1);
var G__37135 = c__27236__auto__;
var G__37136 = cljs.core.count.call(null,c__27236__auto__);
var G__37137 = (0);
seq__37071 = G__37134;
chunk__37072 = G__37135;
count__37073 = G__37136;
i__37074 = G__37137;
continue;
} else {
var role = cljs.core.first.call(null,seq__37071__$1);
var temp__4657__auto___37138__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37138__$2)){
var spec_37139 = temp__4657__auto___37138__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_37139));
} else {
}

var G__37140 = cljs.core.next.call(null,seq__37071__$1);
var G__37141 = null;
var G__37142 = (0);
var G__37143 = (0);
seq__37071 = G__37140;
chunk__37072 = G__37141;
count__37073 = G__37142;
i__37074 = G__37143;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1480772937160