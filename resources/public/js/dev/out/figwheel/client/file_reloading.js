// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__26425__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__26425__auto__){
return or__26425__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__26425__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__26425__auto__)){
return or__26425__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34940_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34940_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__34945 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34946 = null;
var count__34947 = (0);
var i__34948 = (0);
while(true){
if((i__34948 < count__34947)){
var n = cljs.core._nth.call(null,chunk__34946,i__34948);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34949 = seq__34945;
var G__34950 = chunk__34946;
var G__34951 = count__34947;
var G__34952 = (i__34948 + (1));
seq__34945 = G__34949;
chunk__34946 = G__34950;
count__34947 = G__34951;
i__34948 = G__34952;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34945);
if(temp__4657__auto__){
var seq__34945__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34945__$1)){
var c__27236__auto__ = cljs.core.chunk_first.call(null,seq__34945__$1);
var G__34953 = cljs.core.chunk_rest.call(null,seq__34945__$1);
var G__34954 = c__27236__auto__;
var G__34955 = cljs.core.count.call(null,c__27236__auto__);
var G__34956 = (0);
seq__34945 = G__34953;
chunk__34946 = G__34954;
count__34947 = G__34955;
i__34948 = G__34956;
continue;
} else {
var n = cljs.core.first.call(null,seq__34945__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34957 = cljs.core.next.call(null,seq__34945__$1);
var G__34958 = null;
var G__34959 = (0);
var G__34960 = (0);
seq__34945 = G__34957;
chunk__34946 = G__34958;
count__34947 = G__34959;
i__34948 = G__34960;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__35011_35022 = cljs.core.seq.call(null,deps);
var chunk__35012_35023 = null;
var count__35013_35024 = (0);
var i__35014_35025 = (0);
while(true){
if((i__35014_35025 < count__35013_35024)){
var dep_35026 = cljs.core._nth.call(null,chunk__35012_35023,i__35014_35025);
topo_sort_helper_STAR_.call(null,dep_35026,(depth + (1)),state);

var G__35027 = seq__35011_35022;
var G__35028 = chunk__35012_35023;
var G__35029 = count__35013_35024;
var G__35030 = (i__35014_35025 + (1));
seq__35011_35022 = G__35027;
chunk__35012_35023 = G__35028;
count__35013_35024 = G__35029;
i__35014_35025 = G__35030;
continue;
} else {
var temp__4657__auto___35031 = cljs.core.seq.call(null,seq__35011_35022);
if(temp__4657__auto___35031){
var seq__35011_35032__$1 = temp__4657__auto___35031;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35011_35032__$1)){
var c__27236__auto___35033 = cljs.core.chunk_first.call(null,seq__35011_35032__$1);
var G__35034 = cljs.core.chunk_rest.call(null,seq__35011_35032__$1);
var G__35035 = c__27236__auto___35033;
var G__35036 = cljs.core.count.call(null,c__27236__auto___35033);
var G__35037 = (0);
seq__35011_35022 = G__35034;
chunk__35012_35023 = G__35035;
count__35013_35024 = G__35036;
i__35014_35025 = G__35037;
continue;
} else {
var dep_35038 = cljs.core.first.call(null,seq__35011_35032__$1);
topo_sort_helper_STAR_.call(null,dep_35038,(depth + (1)),state);

var G__35039 = cljs.core.next.call(null,seq__35011_35032__$1);
var G__35040 = null;
var G__35041 = (0);
var G__35042 = (0);
seq__35011_35022 = G__35039;
chunk__35012_35023 = G__35040;
count__35013_35024 = G__35041;
i__35014_35025 = G__35042;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__35015){
var vec__35019 = p__35015;
var seq__35020 = cljs.core.seq.call(null,vec__35019);
var first__35021 = cljs.core.first.call(null,seq__35020);
var seq__35020__$1 = cljs.core.next.call(null,seq__35020);
var x = first__35021;
var xs = seq__35020__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__35019,seq__35020,first__35021,seq__35020__$1,x,xs,get_deps__$1){
return (function (p1__34961_SHARP_){
return clojure.set.difference.call(null,p1__34961_SHARP_,x);
});})(vec__35019,seq__35020,first__35021,seq__35020__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__35055 = cljs.core.seq.call(null,provides);
var chunk__35056 = null;
var count__35057 = (0);
var i__35058 = (0);
while(true){
if((i__35058 < count__35057)){
var prov = cljs.core._nth.call(null,chunk__35056,i__35058);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35059_35067 = cljs.core.seq.call(null,requires);
var chunk__35060_35068 = null;
var count__35061_35069 = (0);
var i__35062_35070 = (0);
while(true){
if((i__35062_35070 < count__35061_35069)){
var req_35071 = cljs.core._nth.call(null,chunk__35060_35068,i__35062_35070);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35071,prov);

var G__35072 = seq__35059_35067;
var G__35073 = chunk__35060_35068;
var G__35074 = count__35061_35069;
var G__35075 = (i__35062_35070 + (1));
seq__35059_35067 = G__35072;
chunk__35060_35068 = G__35073;
count__35061_35069 = G__35074;
i__35062_35070 = G__35075;
continue;
} else {
var temp__4657__auto___35076 = cljs.core.seq.call(null,seq__35059_35067);
if(temp__4657__auto___35076){
var seq__35059_35077__$1 = temp__4657__auto___35076;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35059_35077__$1)){
var c__27236__auto___35078 = cljs.core.chunk_first.call(null,seq__35059_35077__$1);
var G__35079 = cljs.core.chunk_rest.call(null,seq__35059_35077__$1);
var G__35080 = c__27236__auto___35078;
var G__35081 = cljs.core.count.call(null,c__27236__auto___35078);
var G__35082 = (0);
seq__35059_35067 = G__35079;
chunk__35060_35068 = G__35080;
count__35061_35069 = G__35081;
i__35062_35070 = G__35082;
continue;
} else {
var req_35083 = cljs.core.first.call(null,seq__35059_35077__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35083,prov);

var G__35084 = cljs.core.next.call(null,seq__35059_35077__$1);
var G__35085 = null;
var G__35086 = (0);
var G__35087 = (0);
seq__35059_35067 = G__35084;
chunk__35060_35068 = G__35085;
count__35061_35069 = G__35086;
i__35062_35070 = G__35087;
continue;
}
} else {
}
}
break;
}

var G__35088 = seq__35055;
var G__35089 = chunk__35056;
var G__35090 = count__35057;
var G__35091 = (i__35058 + (1));
seq__35055 = G__35088;
chunk__35056 = G__35089;
count__35057 = G__35090;
i__35058 = G__35091;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35055);
if(temp__4657__auto__){
var seq__35055__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35055__$1)){
var c__27236__auto__ = cljs.core.chunk_first.call(null,seq__35055__$1);
var G__35092 = cljs.core.chunk_rest.call(null,seq__35055__$1);
var G__35093 = c__27236__auto__;
var G__35094 = cljs.core.count.call(null,c__27236__auto__);
var G__35095 = (0);
seq__35055 = G__35092;
chunk__35056 = G__35093;
count__35057 = G__35094;
i__35058 = G__35095;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35055__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35063_35096 = cljs.core.seq.call(null,requires);
var chunk__35064_35097 = null;
var count__35065_35098 = (0);
var i__35066_35099 = (0);
while(true){
if((i__35066_35099 < count__35065_35098)){
var req_35100 = cljs.core._nth.call(null,chunk__35064_35097,i__35066_35099);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35100,prov);

var G__35101 = seq__35063_35096;
var G__35102 = chunk__35064_35097;
var G__35103 = count__35065_35098;
var G__35104 = (i__35066_35099 + (1));
seq__35063_35096 = G__35101;
chunk__35064_35097 = G__35102;
count__35065_35098 = G__35103;
i__35066_35099 = G__35104;
continue;
} else {
var temp__4657__auto___35105__$1 = cljs.core.seq.call(null,seq__35063_35096);
if(temp__4657__auto___35105__$1){
var seq__35063_35106__$1 = temp__4657__auto___35105__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35063_35106__$1)){
var c__27236__auto___35107 = cljs.core.chunk_first.call(null,seq__35063_35106__$1);
var G__35108 = cljs.core.chunk_rest.call(null,seq__35063_35106__$1);
var G__35109 = c__27236__auto___35107;
var G__35110 = cljs.core.count.call(null,c__27236__auto___35107);
var G__35111 = (0);
seq__35063_35096 = G__35108;
chunk__35064_35097 = G__35109;
count__35065_35098 = G__35110;
i__35066_35099 = G__35111;
continue;
} else {
var req_35112 = cljs.core.first.call(null,seq__35063_35106__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35112,prov);

var G__35113 = cljs.core.next.call(null,seq__35063_35106__$1);
var G__35114 = null;
var G__35115 = (0);
var G__35116 = (0);
seq__35063_35096 = G__35113;
chunk__35064_35097 = G__35114;
count__35065_35098 = G__35115;
i__35066_35099 = G__35116;
continue;
}
} else {
}
}
break;
}

var G__35117 = cljs.core.next.call(null,seq__35055__$1);
var G__35118 = null;
var G__35119 = (0);
var G__35120 = (0);
seq__35055 = G__35117;
chunk__35056 = G__35118;
count__35057 = G__35119;
i__35058 = G__35120;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__35125_35129 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35126_35130 = null;
var count__35127_35131 = (0);
var i__35128_35132 = (0);
while(true){
if((i__35128_35132 < count__35127_35131)){
var ns_35133 = cljs.core._nth.call(null,chunk__35126_35130,i__35128_35132);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35133);

var G__35134 = seq__35125_35129;
var G__35135 = chunk__35126_35130;
var G__35136 = count__35127_35131;
var G__35137 = (i__35128_35132 + (1));
seq__35125_35129 = G__35134;
chunk__35126_35130 = G__35135;
count__35127_35131 = G__35136;
i__35128_35132 = G__35137;
continue;
} else {
var temp__4657__auto___35138 = cljs.core.seq.call(null,seq__35125_35129);
if(temp__4657__auto___35138){
var seq__35125_35139__$1 = temp__4657__auto___35138;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35125_35139__$1)){
var c__27236__auto___35140 = cljs.core.chunk_first.call(null,seq__35125_35139__$1);
var G__35141 = cljs.core.chunk_rest.call(null,seq__35125_35139__$1);
var G__35142 = c__27236__auto___35140;
var G__35143 = cljs.core.count.call(null,c__27236__auto___35140);
var G__35144 = (0);
seq__35125_35129 = G__35141;
chunk__35126_35130 = G__35142;
count__35127_35131 = G__35143;
i__35128_35132 = G__35144;
continue;
} else {
var ns_35145 = cljs.core.first.call(null,seq__35125_35139__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35145);

var G__35146 = cljs.core.next.call(null,seq__35125_35139__$1);
var G__35147 = null;
var G__35148 = (0);
var G__35149 = (0);
seq__35125_35129 = G__35146;
chunk__35126_35130 = G__35147;
count__35127_35131 = G__35148;
i__35128_35132 = G__35149;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__26425__auto__ = goog.require__;
if(cljs.core.truth_(or__26425__auto__)){
return or__26425__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__35150__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35150 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35151__i = 0, G__35151__a = new Array(arguments.length -  0);
while (G__35151__i < G__35151__a.length) {G__35151__a[G__35151__i] = arguments[G__35151__i + 0]; ++G__35151__i;}
  args = new cljs.core.IndexedSeq(G__35151__a,0);
} 
return G__35150__delegate.call(this,args);};
G__35150.cljs$lang$maxFixedArity = 0;
G__35150.cljs$lang$applyTo = (function (arglist__35152){
var args = cljs.core.seq(arglist__35152);
return G__35150__delegate(args);
});
G__35150.cljs$core$IFn$_invoke$arity$variadic = G__35150__delegate;
return G__35150;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35154 = cljs.core._EQ_;
var expr__35155 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35154.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35155))){
var path_parts = ((function (pred__35154,expr__35155){
return (function (p1__35153_SHARP_){
return clojure.string.split.call(null,p1__35153_SHARP_,/[\/\\]/);
});})(pred__35154,expr__35155))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__35154,expr__35155){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35157){if((e35157 instanceof Error)){
var e = e35157;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35157;

}
}})());
});
;})(path_parts,sep,root,pred__35154,expr__35155))
} else {
if(cljs.core.truth_(pred__35154.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35155))){
return ((function (pred__35154,expr__35155){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__35154,expr__35155){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__35154,expr__35155))
);

return deferred.addErrback(((function (deferred,pred__35154,expr__35155){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__35154,expr__35155))
);
});
;})(pred__35154,expr__35155))
} else {
return ((function (pred__35154,expr__35155){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35154,expr__35155))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35158,callback){
var map__35161 = p__35158;
var map__35161__$1 = ((((!((map__35161 == null)))?((((map__35161.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35161.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35161):map__35161);
var file_msg = map__35161__$1;
var request_url = cljs.core.get.call(null,map__35161__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35161,map__35161__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35161,map__35161__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__32055__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32055__auto__){
return (function (){
var f__32056__auto__ = (function (){var switch__31943__auto__ = ((function (c__32055__auto__){
return (function (state_35185){
var state_val_35186 = (state_35185[(1)]);
if((state_val_35186 === (7))){
var inst_35181 = (state_35185[(2)]);
var state_35185__$1 = state_35185;
var statearr_35187_35207 = state_35185__$1;
(statearr_35187_35207[(2)] = inst_35181);

(statearr_35187_35207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35186 === (1))){
var state_35185__$1 = state_35185;
var statearr_35188_35208 = state_35185__$1;
(statearr_35188_35208[(2)] = null);

(statearr_35188_35208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35186 === (4))){
var inst_35165 = (state_35185[(7)]);
var inst_35165__$1 = (state_35185[(2)]);
var state_35185__$1 = (function (){var statearr_35189 = state_35185;
(statearr_35189[(7)] = inst_35165__$1);

return statearr_35189;
})();
if(cljs.core.truth_(inst_35165__$1)){
var statearr_35190_35209 = state_35185__$1;
(statearr_35190_35209[(1)] = (5));

} else {
var statearr_35191_35210 = state_35185__$1;
(statearr_35191_35210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35186 === (6))){
var state_35185__$1 = state_35185;
var statearr_35192_35211 = state_35185__$1;
(statearr_35192_35211[(2)] = null);

(statearr_35192_35211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35186 === (3))){
var inst_35183 = (state_35185[(2)]);
var state_35185__$1 = state_35185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35185__$1,inst_35183);
} else {
if((state_val_35186 === (2))){
var state_35185__$1 = state_35185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35185__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35186 === (11))){
var inst_35177 = (state_35185[(2)]);
var state_35185__$1 = (function (){var statearr_35193 = state_35185;
(statearr_35193[(8)] = inst_35177);

return statearr_35193;
})();
var statearr_35194_35212 = state_35185__$1;
(statearr_35194_35212[(2)] = null);

(statearr_35194_35212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35186 === (9))){
var inst_35171 = (state_35185[(9)]);
var inst_35169 = (state_35185[(10)]);
var inst_35173 = inst_35171.call(null,inst_35169);
var state_35185__$1 = state_35185;
var statearr_35195_35213 = state_35185__$1;
(statearr_35195_35213[(2)] = inst_35173);

(statearr_35195_35213[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35186 === (5))){
var inst_35165 = (state_35185[(7)]);
var inst_35167 = figwheel.client.file_reloading.blocking_load.call(null,inst_35165);
var state_35185__$1 = state_35185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35185__$1,(8),inst_35167);
} else {
if((state_val_35186 === (10))){
var inst_35169 = (state_35185[(10)]);
var inst_35175 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35169);
var state_35185__$1 = state_35185;
var statearr_35196_35214 = state_35185__$1;
(statearr_35196_35214[(2)] = inst_35175);

(statearr_35196_35214[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35186 === (8))){
var inst_35171 = (state_35185[(9)]);
var inst_35165 = (state_35185[(7)]);
var inst_35169 = (state_35185[(2)]);
var inst_35170 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35171__$1 = cljs.core.get.call(null,inst_35170,inst_35165);
var state_35185__$1 = (function (){var statearr_35197 = state_35185;
(statearr_35197[(9)] = inst_35171__$1);

(statearr_35197[(10)] = inst_35169);

return statearr_35197;
})();
if(cljs.core.truth_(inst_35171__$1)){
var statearr_35198_35215 = state_35185__$1;
(statearr_35198_35215[(1)] = (9));

} else {
var statearr_35199_35216 = state_35185__$1;
(statearr_35199_35216[(1)] = (10));

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
});})(c__32055__auto__))
;
return ((function (switch__31943__auto__,c__32055__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__31944__auto__ = null;
var figwheel$client$file_reloading$state_machine__31944__auto____0 = (function (){
var statearr_35203 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35203[(0)] = figwheel$client$file_reloading$state_machine__31944__auto__);

(statearr_35203[(1)] = (1));

return statearr_35203;
});
var figwheel$client$file_reloading$state_machine__31944__auto____1 = (function (state_35185){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_35185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e35204){if((e35204 instanceof Object)){
var ex__31947__auto__ = e35204;
var statearr_35205_35217 = state_35185;
(statearr_35205_35217[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35218 = state_35185;
state_35185 = G__35218;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__31944__auto__ = function(state_35185){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__31944__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__31944__auto____1.call(this,state_35185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__31944__auto____0;
figwheel$client$file_reloading$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__31944__auto____1;
return figwheel$client$file_reloading$state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32055__auto__))
})();
var state__32057__auto__ = (function (){var statearr_35206 = f__32056__auto__.call(null);
(statearr_35206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32055__auto__);

return statearr_35206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32057__auto__);
});})(c__32055__auto__))
);

return c__32055__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35219,callback){
var map__35222 = p__35219;
var map__35222__$1 = ((((!((map__35222 == null)))?((((map__35222.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35222.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35222):map__35222);
var file_msg = map__35222__$1;
var namespace = cljs.core.get.call(null,map__35222__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35222,map__35222__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35222,map__35222__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35224){
var map__35227 = p__35224;
var map__35227__$1 = ((((!((map__35227 == null)))?((((map__35227.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35227.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35227):map__35227);
var file_msg = map__35227__$1;
var namespace = cljs.core.get.call(null,map__35227__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__26413__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__26413__auto__){
var or__26425__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__26425__auto__)){
return or__26425__auto__;
} else {
var or__26425__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__26425__auto____$1)){
return or__26425__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__26413__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35229,callback){
var map__35232 = p__35229;
var map__35232__$1 = ((((!((map__35232 == null)))?((((map__35232.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35232.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35232):map__35232);
var file_msg = map__35232__$1;
var request_url = cljs.core.get.call(null,map__35232__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35232__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__32055__auto___35336 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32055__auto___35336,out){
return (function (){
var f__32056__auto__ = (function (){var switch__31943__auto__ = ((function (c__32055__auto___35336,out){
return (function (state_35318){
var state_val_35319 = (state_35318[(1)]);
if((state_val_35319 === (1))){
var inst_35292 = cljs.core.seq.call(null,files);
var inst_35293 = cljs.core.first.call(null,inst_35292);
var inst_35294 = cljs.core.next.call(null,inst_35292);
var inst_35295 = files;
var state_35318__$1 = (function (){var statearr_35320 = state_35318;
(statearr_35320[(7)] = inst_35293);

(statearr_35320[(8)] = inst_35295);

(statearr_35320[(9)] = inst_35294);

return statearr_35320;
})();
var statearr_35321_35337 = state_35318__$1;
(statearr_35321_35337[(2)] = null);

(statearr_35321_35337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35319 === (2))){
var inst_35301 = (state_35318[(10)]);
var inst_35295 = (state_35318[(8)]);
var inst_35300 = cljs.core.seq.call(null,inst_35295);
var inst_35301__$1 = cljs.core.first.call(null,inst_35300);
var inst_35302 = cljs.core.next.call(null,inst_35300);
var inst_35303 = (inst_35301__$1 == null);
var inst_35304 = cljs.core.not.call(null,inst_35303);
var state_35318__$1 = (function (){var statearr_35322 = state_35318;
(statearr_35322[(10)] = inst_35301__$1);

(statearr_35322[(11)] = inst_35302);

return statearr_35322;
})();
if(inst_35304){
var statearr_35323_35338 = state_35318__$1;
(statearr_35323_35338[(1)] = (4));

} else {
var statearr_35324_35339 = state_35318__$1;
(statearr_35324_35339[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35319 === (3))){
var inst_35316 = (state_35318[(2)]);
var state_35318__$1 = state_35318;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35318__$1,inst_35316);
} else {
if((state_val_35319 === (4))){
var inst_35301 = (state_35318[(10)]);
var inst_35306 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35301);
var state_35318__$1 = state_35318;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35318__$1,(7),inst_35306);
} else {
if((state_val_35319 === (5))){
var inst_35312 = cljs.core.async.close_BANG_.call(null,out);
var state_35318__$1 = state_35318;
var statearr_35325_35340 = state_35318__$1;
(statearr_35325_35340[(2)] = inst_35312);

(statearr_35325_35340[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35319 === (6))){
var inst_35314 = (state_35318[(2)]);
var state_35318__$1 = state_35318;
var statearr_35326_35341 = state_35318__$1;
(statearr_35326_35341[(2)] = inst_35314);

(statearr_35326_35341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35319 === (7))){
var inst_35302 = (state_35318[(11)]);
var inst_35308 = (state_35318[(2)]);
var inst_35309 = cljs.core.async.put_BANG_.call(null,out,inst_35308);
var inst_35295 = inst_35302;
var state_35318__$1 = (function (){var statearr_35327 = state_35318;
(statearr_35327[(8)] = inst_35295);

(statearr_35327[(12)] = inst_35309);

return statearr_35327;
})();
var statearr_35328_35342 = state_35318__$1;
(statearr_35328_35342[(2)] = null);

(statearr_35328_35342[(1)] = (2));


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
});})(c__32055__auto___35336,out))
;
return ((function (switch__31943__auto__,c__32055__auto___35336,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto____0 = (function (){
var statearr_35332 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35332[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto__);

(statearr_35332[(1)] = (1));

return statearr_35332;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto____1 = (function (state_35318){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_35318);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e35333){if((e35333 instanceof Object)){
var ex__31947__auto__ = e35333;
var statearr_35334_35343 = state_35318;
(statearr_35334_35343[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35318);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35344 = state_35318;
state_35318 = G__35344;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto__ = function(state_35318){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto____1.call(this,state_35318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32055__auto___35336,out))
})();
var state__32057__auto__ = (function (){var statearr_35335 = f__32056__auto__.call(null);
(statearr_35335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32055__auto___35336);

return statearr_35335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32057__auto__);
});})(c__32055__auto___35336,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35345,opts){
var map__35349 = p__35345;
var map__35349__$1 = ((((!((map__35349 == null)))?((((map__35349.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35349.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35349):map__35349);
var eval_body__$1 = cljs.core.get.call(null,map__35349__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35349__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__26413__auto__ = eval_body__$1;
if(cljs.core.truth_(and__26413__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__26413__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e35351){var e = e35351;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__35352_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35352_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__35361){
var vec__35362 = p__35361;
var k = cljs.core.nth.call(null,vec__35362,(0),null);
var v = cljs.core.nth.call(null,vec__35362,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35365){
var vec__35366 = p__35365;
var k = cljs.core.nth.call(null,vec__35366,(0),null);
var v = cljs.core.nth.call(null,vec__35366,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35372,p__35373){
var map__35620 = p__35372;
var map__35620__$1 = ((((!((map__35620 == null)))?((((map__35620.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35620.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35620):map__35620);
var opts = map__35620__$1;
var before_jsload = cljs.core.get.call(null,map__35620__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35620__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35620__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35621 = p__35373;
var map__35621__$1 = ((((!((map__35621 == null)))?((((map__35621.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35621.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35621):map__35621);
var msg = map__35621__$1;
var files = cljs.core.get.call(null,map__35621__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35621__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35621__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__32055__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32055__auto__,map__35620,map__35620__$1,opts,before_jsload,on_jsload,reload_dependents,map__35621,map__35621__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__32056__auto__ = (function (){var switch__31943__auto__ = ((function (c__32055__auto__,map__35620,map__35620__$1,opts,before_jsload,on_jsload,reload_dependents,map__35621,map__35621__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35774){
var state_val_35775 = (state_35774[(1)]);
if((state_val_35775 === (7))){
var inst_35636 = (state_35774[(7)]);
var inst_35635 = (state_35774[(8)]);
var inst_35638 = (state_35774[(9)]);
var inst_35637 = (state_35774[(10)]);
var inst_35643 = cljs.core._nth.call(null,inst_35636,inst_35638);
var inst_35644 = figwheel.client.file_reloading.eval_body.call(null,inst_35643,opts);
var inst_35645 = (inst_35638 + (1));
var tmp35776 = inst_35636;
var tmp35777 = inst_35635;
var tmp35778 = inst_35637;
var inst_35635__$1 = tmp35777;
var inst_35636__$1 = tmp35776;
var inst_35637__$1 = tmp35778;
var inst_35638__$1 = inst_35645;
var state_35774__$1 = (function (){var statearr_35779 = state_35774;
(statearr_35779[(7)] = inst_35636__$1);

(statearr_35779[(8)] = inst_35635__$1);

(statearr_35779[(9)] = inst_35638__$1);

(statearr_35779[(10)] = inst_35637__$1);

(statearr_35779[(11)] = inst_35644);

return statearr_35779;
})();
var statearr_35780_35866 = state_35774__$1;
(statearr_35780_35866[(2)] = null);

(statearr_35780_35866[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (20))){
var inst_35678 = (state_35774[(12)]);
var inst_35686 = figwheel.client.file_reloading.sort_files.call(null,inst_35678);
var state_35774__$1 = state_35774;
var statearr_35781_35867 = state_35774__$1;
(statearr_35781_35867[(2)] = inst_35686);

(statearr_35781_35867[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (27))){
var state_35774__$1 = state_35774;
var statearr_35782_35868 = state_35774__$1;
(statearr_35782_35868[(2)] = null);

(statearr_35782_35868[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (1))){
var inst_35627 = (state_35774[(13)]);
var inst_35624 = before_jsload.call(null,files);
var inst_35625 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35626 = (function (){return ((function (inst_35627,inst_35624,inst_35625,state_val_35775,c__32055__auto__,map__35620,map__35620__$1,opts,before_jsload,on_jsload,reload_dependents,map__35621,map__35621__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35369_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35369_SHARP_);
});
;})(inst_35627,inst_35624,inst_35625,state_val_35775,c__32055__auto__,map__35620,map__35620__$1,opts,before_jsload,on_jsload,reload_dependents,map__35621,map__35621__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35627__$1 = cljs.core.filter.call(null,inst_35626,files);
var inst_35628 = cljs.core.not_empty.call(null,inst_35627__$1);
var state_35774__$1 = (function (){var statearr_35783 = state_35774;
(statearr_35783[(13)] = inst_35627__$1);

(statearr_35783[(14)] = inst_35625);

(statearr_35783[(15)] = inst_35624);

return statearr_35783;
})();
if(cljs.core.truth_(inst_35628)){
var statearr_35784_35869 = state_35774__$1;
(statearr_35784_35869[(1)] = (2));

} else {
var statearr_35785_35870 = state_35774__$1;
(statearr_35785_35870[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (24))){
var state_35774__$1 = state_35774;
var statearr_35786_35871 = state_35774__$1;
(statearr_35786_35871[(2)] = null);

(statearr_35786_35871[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (39))){
var inst_35728 = (state_35774[(16)]);
var state_35774__$1 = state_35774;
var statearr_35787_35872 = state_35774__$1;
(statearr_35787_35872[(2)] = inst_35728);

(statearr_35787_35872[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (46))){
var inst_35769 = (state_35774[(2)]);
var state_35774__$1 = state_35774;
var statearr_35788_35873 = state_35774__$1;
(statearr_35788_35873[(2)] = inst_35769);

(statearr_35788_35873[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (4))){
var inst_35672 = (state_35774[(2)]);
var inst_35673 = cljs.core.List.EMPTY;
var inst_35674 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35673);
var inst_35675 = (function (){return ((function (inst_35672,inst_35673,inst_35674,state_val_35775,c__32055__auto__,map__35620,map__35620__$1,opts,before_jsload,on_jsload,reload_dependents,map__35621,map__35621__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35370_SHARP_){
var and__26413__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35370_SHARP_);
if(cljs.core.truth_(and__26413__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35370_SHARP_));
} else {
return and__26413__auto__;
}
});
;})(inst_35672,inst_35673,inst_35674,state_val_35775,c__32055__auto__,map__35620,map__35620__$1,opts,before_jsload,on_jsload,reload_dependents,map__35621,map__35621__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35676 = cljs.core.filter.call(null,inst_35675,files);
var inst_35677 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35678 = cljs.core.concat.call(null,inst_35676,inst_35677);
var state_35774__$1 = (function (){var statearr_35789 = state_35774;
(statearr_35789[(12)] = inst_35678);

(statearr_35789[(17)] = inst_35674);

(statearr_35789[(18)] = inst_35672);

return statearr_35789;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35790_35874 = state_35774__$1;
(statearr_35790_35874[(1)] = (16));

} else {
var statearr_35791_35875 = state_35774__$1;
(statearr_35791_35875[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (15))){
var inst_35662 = (state_35774[(2)]);
var state_35774__$1 = state_35774;
var statearr_35792_35876 = state_35774__$1;
(statearr_35792_35876[(2)] = inst_35662);

(statearr_35792_35876[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (21))){
var inst_35688 = (state_35774[(19)]);
var inst_35688__$1 = (state_35774[(2)]);
var inst_35689 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35688__$1);
var state_35774__$1 = (function (){var statearr_35793 = state_35774;
(statearr_35793[(19)] = inst_35688__$1);

return statearr_35793;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35774__$1,(22),inst_35689);
} else {
if((state_val_35775 === (31))){
var inst_35772 = (state_35774[(2)]);
var state_35774__$1 = state_35774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35774__$1,inst_35772);
} else {
if((state_val_35775 === (32))){
var inst_35728 = (state_35774[(16)]);
var inst_35733 = inst_35728.cljs$lang$protocol_mask$partition0$;
var inst_35734 = (inst_35733 & (64));
var inst_35735 = inst_35728.cljs$core$ISeq$;
var inst_35736 = (inst_35734) || (inst_35735);
var state_35774__$1 = state_35774;
if(cljs.core.truth_(inst_35736)){
var statearr_35794_35877 = state_35774__$1;
(statearr_35794_35877[(1)] = (35));

} else {
var statearr_35795_35878 = state_35774__$1;
(statearr_35795_35878[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (40))){
var inst_35749 = (state_35774[(20)]);
var inst_35748 = (state_35774[(2)]);
var inst_35749__$1 = cljs.core.get.call(null,inst_35748,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35750 = cljs.core.get.call(null,inst_35748,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35751 = cljs.core.not_empty.call(null,inst_35749__$1);
var state_35774__$1 = (function (){var statearr_35796 = state_35774;
(statearr_35796[(20)] = inst_35749__$1);

(statearr_35796[(21)] = inst_35750);

return statearr_35796;
})();
if(cljs.core.truth_(inst_35751)){
var statearr_35797_35879 = state_35774__$1;
(statearr_35797_35879[(1)] = (41));

} else {
var statearr_35798_35880 = state_35774__$1;
(statearr_35798_35880[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (33))){
var state_35774__$1 = state_35774;
var statearr_35799_35881 = state_35774__$1;
(statearr_35799_35881[(2)] = false);

(statearr_35799_35881[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (13))){
var inst_35648 = (state_35774[(22)]);
var inst_35652 = cljs.core.chunk_first.call(null,inst_35648);
var inst_35653 = cljs.core.chunk_rest.call(null,inst_35648);
var inst_35654 = cljs.core.count.call(null,inst_35652);
var inst_35635 = inst_35653;
var inst_35636 = inst_35652;
var inst_35637 = inst_35654;
var inst_35638 = (0);
var state_35774__$1 = (function (){var statearr_35800 = state_35774;
(statearr_35800[(7)] = inst_35636);

(statearr_35800[(8)] = inst_35635);

(statearr_35800[(9)] = inst_35638);

(statearr_35800[(10)] = inst_35637);

return statearr_35800;
})();
var statearr_35801_35882 = state_35774__$1;
(statearr_35801_35882[(2)] = null);

(statearr_35801_35882[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (22))){
var inst_35688 = (state_35774[(19)]);
var inst_35692 = (state_35774[(23)]);
var inst_35691 = (state_35774[(24)]);
var inst_35696 = (state_35774[(25)]);
var inst_35691__$1 = (state_35774[(2)]);
var inst_35692__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35691__$1);
var inst_35693 = (function (){var all_files = inst_35688;
var res_SINGLEQUOTE_ = inst_35691__$1;
var res = inst_35692__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35688,inst_35692,inst_35691,inst_35696,inst_35691__$1,inst_35692__$1,state_val_35775,c__32055__auto__,map__35620,map__35620__$1,opts,before_jsload,on_jsload,reload_dependents,map__35621,map__35621__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35371_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35371_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35688,inst_35692,inst_35691,inst_35696,inst_35691__$1,inst_35692__$1,state_val_35775,c__32055__auto__,map__35620,map__35620__$1,opts,before_jsload,on_jsload,reload_dependents,map__35621,map__35621__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35694 = cljs.core.filter.call(null,inst_35693,inst_35691__$1);
var inst_35695 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35696__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35695);
var inst_35697 = cljs.core.not_empty.call(null,inst_35696__$1);
var state_35774__$1 = (function (){var statearr_35802 = state_35774;
(statearr_35802[(23)] = inst_35692__$1);

(statearr_35802[(26)] = inst_35694);

(statearr_35802[(24)] = inst_35691__$1);

(statearr_35802[(25)] = inst_35696__$1);

return statearr_35802;
})();
if(cljs.core.truth_(inst_35697)){
var statearr_35803_35883 = state_35774__$1;
(statearr_35803_35883[(1)] = (23));

} else {
var statearr_35804_35884 = state_35774__$1;
(statearr_35804_35884[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (36))){
var state_35774__$1 = state_35774;
var statearr_35805_35885 = state_35774__$1;
(statearr_35805_35885[(2)] = false);

(statearr_35805_35885[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (41))){
var inst_35749 = (state_35774[(20)]);
var inst_35753 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35754 = cljs.core.map.call(null,inst_35753,inst_35749);
var inst_35755 = cljs.core.pr_str.call(null,inst_35754);
var inst_35756 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_35755)].join('');
var inst_35757 = figwheel.client.utils.log.call(null,inst_35756);
var state_35774__$1 = state_35774;
var statearr_35806_35886 = state_35774__$1;
(statearr_35806_35886[(2)] = inst_35757);

(statearr_35806_35886[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (43))){
var inst_35750 = (state_35774[(21)]);
var inst_35760 = (state_35774[(2)]);
var inst_35761 = cljs.core.not_empty.call(null,inst_35750);
var state_35774__$1 = (function (){var statearr_35807 = state_35774;
(statearr_35807[(27)] = inst_35760);

return statearr_35807;
})();
if(cljs.core.truth_(inst_35761)){
var statearr_35808_35887 = state_35774__$1;
(statearr_35808_35887[(1)] = (44));

} else {
var statearr_35809_35888 = state_35774__$1;
(statearr_35809_35888[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (29))){
var inst_35688 = (state_35774[(19)]);
var inst_35728 = (state_35774[(16)]);
var inst_35692 = (state_35774[(23)]);
var inst_35694 = (state_35774[(26)]);
var inst_35691 = (state_35774[(24)]);
var inst_35696 = (state_35774[(25)]);
var inst_35724 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35727 = (function (){var all_files = inst_35688;
var res_SINGLEQUOTE_ = inst_35691;
var res = inst_35692;
var files_not_loaded = inst_35694;
var dependencies_that_loaded = inst_35696;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35688,inst_35728,inst_35692,inst_35694,inst_35691,inst_35696,inst_35724,state_val_35775,c__32055__auto__,map__35620,map__35620__$1,opts,before_jsload,on_jsload,reload_dependents,map__35621,map__35621__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35726){
var map__35810 = p__35726;
var map__35810__$1 = ((((!((map__35810 == null)))?((((map__35810.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35810.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35810):map__35810);
var namespace = cljs.core.get.call(null,map__35810__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35688,inst_35728,inst_35692,inst_35694,inst_35691,inst_35696,inst_35724,state_val_35775,c__32055__auto__,map__35620,map__35620__$1,opts,before_jsload,on_jsload,reload_dependents,map__35621,map__35621__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35728__$1 = cljs.core.group_by.call(null,inst_35727,inst_35694);
var inst_35730 = (inst_35728__$1 == null);
var inst_35731 = cljs.core.not.call(null,inst_35730);
var state_35774__$1 = (function (){var statearr_35812 = state_35774;
(statearr_35812[(16)] = inst_35728__$1);

(statearr_35812[(28)] = inst_35724);

return statearr_35812;
})();
if(inst_35731){
var statearr_35813_35889 = state_35774__$1;
(statearr_35813_35889[(1)] = (32));

} else {
var statearr_35814_35890 = state_35774__$1;
(statearr_35814_35890[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (44))){
var inst_35750 = (state_35774[(21)]);
var inst_35763 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35750);
var inst_35764 = cljs.core.pr_str.call(null,inst_35763);
var inst_35765 = [cljs.core.str("not required: "),cljs.core.str(inst_35764)].join('');
var inst_35766 = figwheel.client.utils.log.call(null,inst_35765);
var state_35774__$1 = state_35774;
var statearr_35815_35891 = state_35774__$1;
(statearr_35815_35891[(2)] = inst_35766);

(statearr_35815_35891[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (6))){
var inst_35669 = (state_35774[(2)]);
var state_35774__$1 = state_35774;
var statearr_35816_35892 = state_35774__$1;
(statearr_35816_35892[(2)] = inst_35669);

(statearr_35816_35892[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (28))){
var inst_35694 = (state_35774[(26)]);
var inst_35721 = (state_35774[(2)]);
var inst_35722 = cljs.core.not_empty.call(null,inst_35694);
var state_35774__$1 = (function (){var statearr_35817 = state_35774;
(statearr_35817[(29)] = inst_35721);

return statearr_35817;
})();
if(cljs.core.truth_(inst_35722)){
var statearr_35818_35893 = state_35774__$1;
(statearr_35818_35893[(1)] = (29));

} else {
var statearr_35819_35894 = state_35774__$1;
(statearr_35819_35894[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (25))){
var inst_35692 = (state_35774[(23)]);
var inst_35708 = (state_35774[(2)]);
var inst_35709 = cljs.core.not_empty.call(null,inst_35692);
var state_35774__$1 = (function (){var statearr_35820 = state_35774;
(statearr_35820[(30)] = inst_35708);

return statearr_35820;
})();
if(cljs.core.truth_(inst_35709)){
var statearr_35821_35895 = state_35774__$1;
(statearr_35821_35895[(1)] = (26));

} else {
var statearr_35822_35896 = state_35774__$1;
(statearr_35822_35896[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (34))){
var inst_35743 = (state_35774[(2)]);
var state_35774__$1 = state_35774;
if(cljs.core.truth_(inst_35743)){
var statearr_35823_35897 = state_35774__$1;
(statearr_35823_35897[(1)] = (38));

} else {
var statearr_35824_35898 = state_35774__$1;
(statearr_35824_35898[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (17))){
var state_35774__$1 = state_35774;
var statearr_35825_35899 = state_35774__$1;
(statearr_35825_35899[(2)] = recompile_dependents);

(statearr_35825_35899[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (3))){
var state_35774__$1 = state_35774;
var statearr_35826_35900 = state_35774__$1;
(statearr_35826_35900[(2)] = null);

(statearr_35826_35900[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (12))){
var inst_35665 = (state_35774[(2)]);
var state_35774__$1 = state_35774;
var statearr_35827_35901 = state_35774__$1;
(statearr_35827_35901[(2)] = inst_35665);

(statearr_35827_35901[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (2))){
var inst_35627 = (state_35774[(13)]);
var inst_35634 = cljs.core.seq.call(null,inst_35627);
var inst_35635 = inst_35634;
var inst_35636 = null;
var inst_35637 = (0);
var inst_35638 = (0);
var state_35774__$1 = (function (){var statearr_35828 = state_35774;
(statearr_35828[(7)] = inst_35636);

(statearr_35828[(8)] = inst_35635);

(statearr_35828[(9)] = inst_35638);

(statearr_35828[(10)] = inst_35637);

return statearr_35828;
})();
var statearr_35829_35902 = state_35774__$1;
(statearr_35829_35902[(2)] = null);

(statearr_35829_35902[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (23))){
var inst_35688 = (state_35774[(19)]);
var inst_35692 = (state_35774[(23)]);
var inst_35694 = (state_35774[(26)]);
var inst_35691 = (state_35774[(24)]);
var inst_35696 = (state_35774[(25)]);
var inst_35699 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35701 = (function (){var all_files = inst_35688;
var res_SINGLEQUOTE_ = inst_35691;
var res = inst_35692;
var files_not_loaded = inst_35694;
var dependencies_that_loaded = inst_35696;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35688,inst_35692,inst_35694,inst_35691,inst_35696,inst_35699,state_val_35775,c__32055__auto__,map__35620,map__35620__$1,opts,before_jsload,on_jsload,reload_dependents,map__35621,map__35621__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35700){
var map__35830 = p__35700;
var map__35830__$1 = ((((!((map__35830 == null)))?((((map__35830.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35830.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35830):map__35830);
var request_url = cljs.core.get.call(null,map__35830__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35688,inst_35692,inst_35694,inst_35691,inst_35696,inst_35699,state_val_35775,c__32055__auto__,map__35620,map__35620__$1,opts,before_jsload,on_jsload,reload_dependents,map__35621,map__35621__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35702 = cljs.core.reverse.call(null,inst_35696);
var inst_35703 = cljs.core.map.call(null,inst_35701,inst_35702);
var inst_35704 = cljs.core.pr_str.call(null,inst_35703);
var inst_35705 = figwheel.client.utils.log.call(null,inst_35704);
var state_35774__$1 = (function (){var statearr_35832 = state_35774;
(statearr_35832[(31)] = inst_35699);

return statearr_35832;
})();
var statearr_35833_35903 = state_35774__$1;
(statearr_35833_35903[(2)] = inst_35705);

(statearr_35833_35903[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (35))){
var state_35774__$1 = state_35774;
var statearr_35834_35904 = state_35774__$1;
(statearr_35834_35904[(2)] = true);

(statearr_35834_35904[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (19))){
var inst_35678 = (state_35774[(12)]);
var inst_35684 = figwheel.client.file_reloading.expand_files.call(null,inst_35678);
var state_35774__$1 = state_35774;
var statearr_35835_35905 = state_35774__$1;
(statearr_35835_35905[(2)] = inst_35684);

(statearr_35835_35905[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (11))){
var state_35774__$1 = state_35774;
var statearr_35836_35906 = state_35774__$1;
(statearr_35836_35906[(2)] = null);

(statearr_35836_35906[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (9))){
var inst_35667 = (state_35774[(2)]);
var state_35774__$1 = state_35774;
var statearr_35837_35907 = state_35774__$1;
(statearr_35837_35907[(2)] = inst_35667);

(statearr_35837_35907[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (5))){
var inst_35638 = (state_35774[(9)]);
var inst_35637 = (state_35774[(10)]);
var inst_35640 = (inst_35638 < inst_35637);
var inst_35641 = inst_35640;
var state_35774__$1 = state_35774;
if(cljs.core.truth_(inst_35641)){
var statearr_35838_35908 = state_35774__$1;
(statearr_35838_35908[(1)] = (7));

} else {
var statearr_35839_35909 = state_35774__$1;
(statearr_35839_35909[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (14))){
var inst_35648 = (state_35774[(22)]);
var inst_35657 = cljs.core.first.call(null,inst_35648);
var inst_35658 = figwheel.client.file_reloading.eval_body.call(null,inst_35657,opts);
var inst_35659 = cljs.core.next.call(null,inst_35648);
var inst_35635 = inst_35659;
var inst_35636 = null;
var inst_35637 = (0);
var inst_35638 = (0);
var state_35774__$1 = (function (){var statearr_35840 = state_35774;
(statearr_35840[(7)] = inst_35636);

(statearr_35840[(8)] = inst_35635);

(statearr_35840[(9)] = inst_35638);

(statearr_35840[(10)] = inst_35637);

(statearr_35840[(32)] = inst_35658);

return statearr_35840;
})();
var statearr_35841_35910 = state_35774__$1;
(statearr_35841_35910[(2)] = null);

(statearr_35841_35910[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (45))){
var state_35774__$1 = state_35774;
var statearr_35842_35911 = state_35774__$1;
(statearr_35842_35911[(2)] = null);

(statearr_35842_35911[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (26))){
var inst_35688 = (state_35774[(19)]);
var inst_35692 = (state_35774[(23)]);
var inst_35694 = (state_35774[(26)]);
var inst_35691 = (state_35774[(24)]);
var inst_35696 = (state_35774[(25)]);
var inst_35711 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35713 = (function (){var all_files = inst_35688;
var res_SINGLEQUOTE_ = inst_35691;
var res = inst_35692;
var files_not_loaded = inst_35694;
var dependencies_that_loaded = inst_35696;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35688,inst_35692,inst_35694,inst_35691,inst_35696,inst_35711,state_val_35775,c__32055__auto__,map__35620,map__35620__$1,opts,before_jsload,on_jsload,reload_dependents,map__35621,map__35621__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35712){
var map__35843 = p__35712;
var map__35843__$1 = ((((!((map__35843 == null)))?((((map__35843.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35843.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35843):map__35843);
var namespace = cljs.core.get.call(null,map__35843__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35843__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35688,inst_35692,inst_35694,inst_35691,inst_35696,inst_35711,state_val_35775,c__32055__auto__,map__35620,map__35620__$1,opts,before_jsload,on_jsload,reload_dependents,map__35621,map__35621__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35714 = cljs.core.map.call(null,inst_35713,inst_35692);
var inst_35715 = cljs.core.pr_str.call(null,inst_35714);
var inst_35716 = figwheel.client.utils.log.call(null,inst_35715);
var inst_35717 = (function (){var all_files = inst_35688;
var res_SINGLEQUOTE_ = inst_35691;
var res = inst_35692;
var files_not_loaded = inst_35694;
var dependencies_that_loaded = inst_35696;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35688,inst_35692,inst_35694,inst_35691,inst_35696,inst_35711,inst_35713,inst_35714,inst_35715,inst_35716,state_val_35775,c__32055__auto__,map__35620,map__35620__$1,opts,before_jsload,on_jsload,reload_dependents,map__35621,map__35621__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35688,inst_35692,inst_35694,inst_35691,inst_35696,inst_35711,inst_35713,inst_35714,inst_35715,inst_35716,state_val_35775,c__32055__auto__,map__35620,map__35620__$1,opts,before_jsload,on_jsload,reload_dependents,map__35621,map__35621__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35718 = setTimeout(inst_35717,(10));
var state_35774__$1 = (function (){var statearr_35845 = state_35774;
(statearr_35845[(33)] = inst_35711);

(statearr_35845[(34)] = inst_35716);

return statearr_35845;
})();
var statearr_35846_35912 = state_35774__$1;
(statearr_35846_35912[(2)] = inst_35718);

(statearr_35846_35912[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (16))){
var state_35774__$1 = state_35774;
var statearr_35847_35913 = state_35774__$1;
(statearr_35847_35913[(2)] = reload_dependents);

(statearr_35847_35913[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (38))){
var inst_35728 = (state_35774[(16)]);
var inst_35745 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35728);
var state_35774__$1 = state_35774;
var statearr_35848_35914 = state_35774__$1;
(statearr_35848_35914[(2)] = inst_35745);

(statearr_35848_35914[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (30))){
var state_35774__$1 = state_35774;
var statearr_35849_35915 = state_35774__$1;
(statearr_35849_35915[(2)] = null);

(statearr_35849_35915[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (10))){
var inst_35648 = (state_35774[(22)]);
var inst_35650 = cljs.core.chunked_seq_QMARK_.call(null,inst_35648);
var state_35774__$1 = state_35774;
if(inst_35650){
var statearr_35850_35916 = state_35774__$1;
(statearr_35850_35916[(1)] = (13));

} else {
var statearr_35851_35917 = state_35774__$1;
(statearr_35851_35917[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (18))){
var inst_35682 = (state_35774[(2)]);
var state_35774__$1 = state_35774;
if(cljs.core.truth_(inst_35682)){
var statearr_35852_35918 = state_35774__$1;
(statearr_35852_35918[(1)] = (19));

} else {
var statearr_35853_35919 = state_35774__$1;
(statearr_35853_35919[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (42))){
var state_35774__$1 = state_35774;
var statearr_35854_35920 = state_35774__$1;
(statearr_35854_35920[(2)] = null);

(statearr_35854_35920[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (37))){
var inst_35740 = (state_35774[(2)]);
var state_35774__$1 = state_35774;
var statearr_35855_35921 = state_35774__$1;
(statearr_35855_35921[(2)] = inst_35740);

(statearr_35855_35921[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (8))){
var inst_35635 = (state_35774[(8)]);
var inst_35648 = (state_35774[(22)]);
var inst_35648__$1 = cljs.core.seq.call(null,inst_35635);
var state_35774__$1 = (function (){var statearr_35856 = state_35774;
(statearr_35856[(22)] = inst_35648__$1);

return statearr_35856;
})();
if(inst_35648__$1){
var statearr_35857_35922 = state_35774__$1;
(statearr_35857_35922[(1)] = (10));

} else {
var statearr_35858_35923 = state_35774__$1;
(statearr_35858_35923[(1)] = (11));

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
});})(c__32055__auto__,map__35620,map__35620__$1,opts,before_jsload,on_jsload,reload_dependents,map__35621,map__35621__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__31943__auto__,c__32055__auto__,map__35620,map__35620__$1,opts,before_jsload,on_jsload,reload_dependents,map__35621,map__35621__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto____0 = (function (){
var statearr_35862 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35862[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto__);

(statearr_35862[(1)] = (1));

return statearr_35862;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto____1 = (function (state_35774){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_35774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e35863){if((e35863 instanceof Object)){
var ex__31947__auto__ = e35863;
var statearr_35864_35924 = state_35774;
(statearr_35864_35924[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35925 = state_35774;
state_35774 = G__35925;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto__ = function(state_35774){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto____1.call(this,state_35774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32055__auto__,map__35620,map__35620__$1,opts,before_jsload,on_jsload,reload_dependents,map__35621,map__35621__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__32057__auto__ = (function (){var statearr_35865 = f__32056__auto__.call(null);
(statearr_35865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32055__auto__);

return statearr_35865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32057__auto__);
});})(c__32055__auto__,map__35620,map__35620__$1,opts,before_jsload,on_jsload,reload_dependents,map__35621,map__35621__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__32055__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35928,link){
var map__35931 = p__35928;
var map__35931__$1 = ((((!((map__35931 == null)))?((((map__35931.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35931.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35931):map__35931);
var file = cljs.core.get.call(null,map__35931__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__35931,map__35931__$1,file){
return (function (p1__35926_SHARP_,p2__35927_SHARP_){
if(cljs.core._EQ_.call(null,p1__35926_SHARP_,p2__35927_SHARP_)){
return p1__35926_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__35931,map__35931__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35937){
var map__35938 = p__35937;
var map__35938__$1 = ((((!((map__35938 == null)))?((((map__35938.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35938.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35938):map__35938);
var match_length = cljs.core.get.call(null,map__35938__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35938__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35933_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35933_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args35940 = [];
var len__27500__auto___35943 = arguments.length;
var i__27501__auto___35944 = (0);
while(true){
if((i__27501__auto___35944 < len__27500__auto___35943)){
args35940.push((arguments[i__27501__auto___35944]));

var G__35945 = (i__27501__auto___35944 + (1));
i__27501__auto___35944 = G__35945;
continue;
} else {
}
break;
}

var G__35942 = args35940.length;
switch (G__35942) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35940.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35947_SHARP_,p2__35948_SHARP_){
return cljs.core.assoc.call(null,p1__35947_SHARP_,cljs.core.get.call(null,p2__35948_SHARP_,key),p2__35948_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__35949){
var map__35952 = p__35949;
var map__35952__$1 = ((((!((map__35952 == null)))?((((map__35952.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35952.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35952):map__35952);
var f_data = map__35952__$1;
var file = cljs.core.get.call(null,map__35952__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35954,p__35955){
var map__35964 = p__35954;
var map__35964__$1 = ((((!((map__35964 == null)))?((((map__35964.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35964.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35964):map__35964);
var opts = map__35964__$1;
var on_cssload = cljs.core.get.call(null,map__35964__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35965 = p__35955;
var map__35965__$1 = ((((!((map__35965 == null)))?((((map__35965.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35965.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35965):map__35965);
var files_msg = map__35965__$1;
var files = cljs.core.get.call(null,map__35965__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__35968_35972 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__35969_35973 = null;
var count__35970_35974 = (0);
var i__35971_35975 = (0);
while(true){
if((i__35971_35975 < count__35970_35974)){
var f_35976 = cljs.core._nth.call(null,chunk__35969_35973,i__35971_35975);
figwheel.client.file_reloading.reload_css_file.call(null,f_35976);

var G__35977 = seq__35968_35972;
var G__35978 = chunk__35969_35973;
var G__35979 = count__35970_35974;
var G__35980 = (i__35971_35975 + (1));
seq__35968_35972 = G__35977;
chunk__35969_35973 = G__35978;
count__35970_35974 = G__35979;
i__35971_35975 = G__35980;
continue;
} else {
var temp__4657__auto___35981 = cljs.core.seq.call(null,seq__35968_35972);
if(temp__4657__auto___35981){
var seq__35968_35982__$1 = temp__4657__auto___35981;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35968_35982__$1)){
var c__27236__auto___35983 = cljs.core.chunk_first.call(null,seq__35968_35982__$1);
var G__35984 = cljs.core.chunk_rest.call(null,seq__35968_35982__$1);
var G__35985 = c__27236__auto___35983;
var G__35986 = cljs.core.count.call(null,c__27236__auto___35983);
var G__35987 = (0);
seq__35968_35972 = G__35984;
chunk__35969_35973 = G__35985;
count__35970_35974 = G__35986;
i__35971_35975 = G__35987;
continue;
} else {
var f_35988 = cljs.core.first.call(null,seq__35968_35982__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_35988);

var G__35989 = cljs.core.next.call(null,seq__35968_35982__$1);
var G__35990 = null;
var G__35991 = (0);
var G__35992 = (0);
seq__35968_35972 = G__35989;
chunk__35969_35973 = G__35990;
count__35970_35974 = G__35991;
i__35971_35975 = G__35992;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__35964,map__35964__$1,opts,on_cssload,map__35965,map__35965__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__35964,map__35964__$1,opts,on_cssload,map__35965,map__35965__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1480772933894