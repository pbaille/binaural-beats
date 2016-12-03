// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args32100 = [];
var len__27500__auto___32106 = arguments.length;
var i__27501__auto___32107 = (0);
while(true){
if((i__27501__auto___32107 < len__27500__auto___32106)){
args32100.push((arguments[i__27501__auto___32107]));

var G__32108 = (i__27501__auto___32107 + (1));
i__27501__auto___32107 = G__32108;
continue;
} else {
}
break;
}

var G__32102 = args32100.length;
switch (G__32102) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32100.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async32103 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32103 = (function (f,blockable,meta32104){
this.f = f;
this.blockable = blockable;
this.meta32104 = meta32104;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32105,meta32104__$1){
var self__ = this;
var _32105__$1 = this;
return (new cljs.core.async.t_cljs$core$async32103(self__.f,self__.blockable,meta32104__$1));
});

cljs.core.async.t_cljs$core$async32103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32105){
var self__ = this;
var _32105__$1 = this;
return self__.meta32104;
});

cljs.core.async.t_cljs$core$async32103.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32103.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32103.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async32103.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32103.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32104","meta32104",-1397527396,null)], null);
});

cljs.core.async.t_cljs$core$async32103.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32103.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32103";

cljs.core.async.t_cljs$core$async32103.cljs$lang$ctorPrWriter = (function (this__27031__auto__,writer__27032__auto__,opt__27033__auto__){
return cljs.core._write.call(null,writer__27032__auto__,"cljs.core.async/t_cljs$core$async32103");
});

cljs.core.async.__GT_t_cljs$core$async32103 = (function cljs$core$async$__GT_t_cljs$core$async32103(f__$1,blockable__$1,meta32104){
return (new cljs.core.async.t_cljs$core$async32103(f__$1,blockable__$1,meta32104));
});

}

return (new cljs.core.async.t_cljs$core$async32103(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args32112 = [];
var len__27500__auto___32115 = arguments.length;
var i__27501__auto___32116 = (0);
while(true){
if((i__27501__auto___32116 < len__27500__auto___32115)){
args32112.push((arguments[i__27501__auto___32116]));

var G__32117 = (i__27501__auto___32116 + (1));
i__27501__auto___32116 = G__32117;
continue;
} else {
}
break;
}

var G__32114 = args32112.length;
switch (G__32114) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32112.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args32119 = [];
var len__27500__auto___32122 = arguments.length;
var i__27501__auto___32123 = (0);
while(true){
if((i__27501__auto___32123 < len__27500__auto___32122)){
args32119.push((arguments[i__27501__auto___32123]));

var G__32124 = (i__27501__auto___32123 + (1));
i__27501__auto___32123 = G__32124;
continue;
} else {
}
break;
}

var G__32121 = args32119.length;
switch (G__32121) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32119.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args32126 = [];
var len__27500__auto___32129 = arguments.length;
var i__27501__auto___32130 = (0);
while(true){
if((i__27501__auto___32130 < len__27500__auto___32129)){
args32126.push((arguments[i__27501__auto___32130]));

var G__32131 = (i__27501__auto___32130 + (1));
i__27501__auto___32130 = G__32131;
continue;
} else {
}
break;
}

var G__32128 = args32126.length;
switch (G__32128) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32126.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_32133 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32133);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32133,ret){
return (function (){
return fn1.call(null,val_32133);
});})(val_32133,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args32134 = [];
var len__27500__auto___32137 = arguments.length;
var i__27501__auto___32138 = (0);
while(true){
if((i__27501__auto___32138 < len__27500__auto___32137)){
args32134.push((arguments[i__27501__auto___32138]));

var G__32139 = (i__27501__auto___32138 + (1));
i__27501__auto___32138 = G__32139;
continue;
} else {
}
break;
}

var G__32136 = args32134.length;
switch (G__32136) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32134.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__27340__auto___32141 = n;
var x_32142 = (0);
while(true){
if((x_32142 < n__27340__auto___32141)){
(a[x_32142] = (0));

var G__32143 = (x_32142 + (1));
x_32142 = G__32143;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__32144 = (i + (1));
i = G__32144;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async32148 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32148 = (function (alt_flag,flag,meta32149){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta32149 = meta32149;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32150,meta32149__$1){
var self__ = this;
var _32150__$1 = this;
return (new cljs.core.async.t_cljs$core$async32148(self__.alt_flag,self__.flag,meta32149__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32148.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32150){
var self__ = this;
var _32150__$1 = this;
return self__.meta32149;
});})(flag))
;

cljs.core.async.t_cljs$core$async32148.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32148.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32148.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32148.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32148.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32149","meta32149",-1194808064,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32148.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32148.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32148";

cljs.core.async.t_cljs$core$async32148.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27031__auto__,writer__27032__auto__,opt__27033__auto__){
return cljs.core._write.call(null,writer__27032__auto__,"cljs.core.async/t_cljs$core$async32148");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async32148 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32148(alt_flag__$1,flag__$1,meta32149){
return (new cljs.core.async.t_cljs$core$async32148(alt_flag__$1,flag__$1,meta32149));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32148(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async32154 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32154 = (function (alt_handler,flag,cb,meta32155){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta32155 = meta32155;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32156,meta32155__$1){
var self__ = this;
var _32156__$1 = this;
return (new cljs.core.async.t_cljs$core$async32154(self__.alt_handler,self__.flag,self__.cb,meta32155__$1));
});

cljs.core.async.t_cljs$core$async32154.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32156){
var self__ = this;
var _32156__$1 = this;
return self__.meta32155;
});

cljs.core.async.t_cljs$core$async32154.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32154.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async32154.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32154.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32154.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32155","meta32155",937435878,null)], null);
});

cljs.core.async.t_cljs$core$async32154.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32154.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32154";

cljs.core.async.t_cljs$core$async32154.cljs$lang$ctorPrWriter = (function (this__27031__auto__,writer__27032__auto__,opt__27033__auto__){
return cljs.core._write.call(null,writer__27032__auto__,"cljs.core.async/t_cljs$core$async32154");
});

cljs.core.async.__GT_t_cljs$core$async32154 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32154(alt_handler__$1,flag__$1,cb__$1,meta32155){
return (new cljs.core.async.t_cljs$core$async32154(alt_handler__$1,flag__$1,cb__$1,meta32155));
});

}

return (new cljs.core.async.t_cljs$core$async32154(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32157_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32157_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32158_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32158_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__26425__auto__ = wport;
if(cljs.core.truth_(or__26425__auto__)){
return or__26425__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32159 = (i + (1));
i = G__32159;
continue;
}
} else {
return null;
}
break;
}
})();
var or__26425__auto__ = ret;
if(cljs.core.truth_(or__26425__auto__)){
return or__26425__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__26413__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__26413__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__26413__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__27507__auto__ = [];
var len__27500__auto___32165 = arguments.length;
var i__27501__auto___32166 = (0);
while(true){
if((i__27501__auto___32166 < len__27500__auto___32165)){
args__27507__auto__.push((arguments[i__27501__auto___32166]));

var G__32167 = (i__27501__auto___32166 + (1));
i__27501__auto___32166 = G__32167;
continue;
} else {
}
break;
}

var argseq__27508__auto__ = ((((1) < args__27507__auto__.length))?(new cljs.core.IndexedSeq(args__27507__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27508__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32162){
var map__32163 = p__32162;
var map__32163__$1 = ((((!((map__32163 == null)))?((((map__32163.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32163.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32163):map__32163);
var opts = map__32163__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32160){
var G__32161 = cljs.core.first.call(null,seq32160);
var seq32160__$1 = cljs.core.next.call(null,seq32160);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32161,seq32160__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args32168 = [];
var len__27500__auto___32218 = arguments.length;
var i__27501__auto___32219 = (0);
while(true){
if((i__27501__auto___32219 < len__27500__auto___32218)){
args32168.push((arguments[i__27501__auto___32219]));

var G__32220 = (i__27501__auto___32219 + (1));
i__27501__auto___32219 = G__32220;
continue;
} else {
}
break;
}

var G__32170 = args32168.length;
switch (G__32170) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32168.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32055__auto___32222 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32055__auto___32222){
return (function (){
var f__32056__auto__ = (function (){var switch__31943__auto__ = ((function (c__32055__auto___32222){
return (function (state_32194){
var state_val_32195 = (state_32194[(1)]);
if((state_val_32195 === (7))){
var inst_32190 = (state_32194[(2)]);
var state_32194__$1 = state_32194;
var statearr_32196_32223 = state_32194__$1;
(statearr_32196_32223[(2)] = inst_32190);

(statearr_32196_32223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (1))){
var state_32194__$1 = state_32194;
var statearr_32197_32224 = state_32194__$1;
(statearr_32197_32224[(2)] = null);

(statearr_32197_32224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (4))){
var inst_32173 = (state_32194[(7)]);
var inst_32173__$1 = (state_32194[(2)]);
var inst_32174 = (inst_32173__$1 == null);
var state_32194__$1 = (function (){var statearr_32198 = state_32194;
(statearr_32198[(7)] = inst_32173__$1);

return statearr_32198;
})();
if(cljs.core.truth_(inst_32174)){
var statearr_32199_32225 = state_32194__$1;
(statearr_32199_32225[(1)] = (5));

} else {
var statearr_32200_32226 = state_32194__$1;
(statearr_32200_32226[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (13))){
var state_32194__$1 = state_32194;
var statearr_32201_32227 = state_32194__$1;
(statearr_32201_32227[(2)] = null);

(statearr_32201_32227[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (6))){
var inst_32173 = (state_32194[(7)]);
var state_32194__$1 = state_32194;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32194__$1,(11),to,inst_32173);
} else {
if((state_val_32195 === (3))){
var inst_32192 = (state_32194[(2)]);
var state_32194__$1 = state_32194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32194__$1,inst_32192);
} else {
if((state_val_32195 === (12))){
var state_32194__$1 = state_32194;
var statearr_32202_32228 = state_32194__$1;
(statearr_32202_32228[(2)] = null);

(statearr_32202_32228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (2))){
var state_32194__$1 = state_32194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32194__$1,(4),from);
} else {
if((state_val_32195 === (11))){
var inst_32183 = (state_32194[(2)]);
var state_32194__$1 = state_32194;
if(cljs.core.truth_(inst_32183)){
var statearr_32203_32229 = state_32194__$1;
(statearr_32203_32229[(1)] = (12));

} else {
var statearr_32204_32230 = state_32194__$1;
(statearr_32204_32230[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (9))){
var state_32194__$1 = state_32194;
var statearr_32205_32231 = state_32194__$1;
(statearr_32205_32231[(2)] = null);

(statearr_32205_32231[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (5))){
var state_32194__$1 = state_32194;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32206_32232 = state_32194__$1;
(statearr_32206_32232[(1)] = (8));

} else {
var statearr_32207_32233 = state_32194__$1;
(statearr_32207_32233[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (14))){
var inst_32188 = (state_32194[(2)]);
var state_32194__$1 = state_32194;
var statearr_32208_32234 = state_32194__$1;
(statearr_32208_32234[(2)] = inst_32188);

(statearr_32208_32234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (10))){
var inst_32180 = (state_32194[(2)]);
var state_32194__$1 = state_32194;
var statearr_32209_32235 = state_32194__$1;
(statearr_32209_32235[(2)] = inst_32180);

(statearr_32209_32235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (8))){
var inst_32177 = cljs.core.async.close_BANG_.call(null,to);
var state_32194__$1 = state_32194;
var statearr_32210_32236 = state_32194__$1;
(statearr_32210_32236[(2)] = inst_32177);

(statearr_32210_32236[(1)] = (10));


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
});})(c__32055__auto___32222))
;
return ((function (switch__31943__auto__,c__32055__auto___32222){
return (function() {
var cljs$core$async$state_machine__31944__auto__ = null;
var cljs$core$async$state_machine__31944__auto____0 = (function (){
var statearr_32214 = [null,null,null,null,null,null,null,null];
(statearr_32214[(0)] = cljs$core$async$state_machine__31944__auto__);

(statearr_32214[(1)] = (1));

return statearr_32214;
});
var cljs$core$async$state_machine__31944__auto____1 = (function (state_32194){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_32194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e32215){if((e32215 instanceof Object)){
var ex__31947__auto__ = e32215;
var statearr_32216_32237 = state_32194;
(statearr_32216_32237[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32238 = state_32194;
state_32194 = G__32238;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$state_machine__31944__auto__ = function(state_32194){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31944__auto____1.call(this,state_32194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31944__auto____0;
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31944__auto____1;
return cljs$core$async$state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32055__auto___32222))
})();
var state__32057__auto__ = (function (){var statearr_32217 = f__32056__auto__.call(null);
(statearr_32217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32055__auto___32222);

return statearr_32217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32057__auto__);
});})(c__32055__auto___32222))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__32426){
var vec__32427 = p__32426;
var v = cljs.core.nth.call(null,vec__32427,(0),null);
var p = cljs.core.nth.call(null,vec__32427,(1),null);
var job = vec__32427;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32055__auto___32613 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32055__auto___32613,res,vec__32427,v,p,job,jobs,results){
return (function (){
var f__32056__auto__ = (function (){var switch__31943__auto__ = ((function (c__32055__auto___32613,res,vec__32427,v,p,job,jobs,results){
return (function (state_32434){
var state_val_32435 = (state_32434[(1)]);
if((state_val_32435 === (1))){
var state_32434__$1 = state_32434;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32434__$1,(2),res,v);
} else {
if((state_val_32435 === (2))){
var inst_32431 = (state_32434[(2)]);
var inst_32432 = cljs.core.async.close_BANG_.call(null,res);
var state_32434__$1 = (function (){var statearr_32436 = state_32434;
(statearr_32436[(7)] = inst_32431);

return statearr_32436;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32434__$1,inst_32432);
} else {
return null;
}
}
});})(c__32055__auto___32613,res,vec__32427,v,p,job,jobs,results))
;
return ((function (switch__31943__auto__,c__32055__auto___32613,res,vec__32427,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0 = (function (){
var statearr_32440 = [null,null,null,null,null,null,null,null];
(statearr_32440[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__);

(statearr_32440[(1)] = (1));

return statearr_32440;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1 = (function (state_32434){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_32434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e32441){if((e32441 instanceof Object)){
var ex__31947__auto__ = e32441;
var statearr_32442_32614 = state_32434;
(statearr_32442_32614[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32615 = state_32434;
state_32434 = G__32615;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__ = function(state_32434){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1.call(this,state_32434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32055__auto___32613,res,vec__32427,v,p,job,jobs,results))
})();
var state__32057__auto__ = (function (){var statearr_32443 = f__32056__auto__.call(null);
(statearr_32443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32055__auto___32613);

return statearr_32443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32057__auto__);
});})(c__32055__auto___32613,res,vec__32427,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32444){
var vec__32445 = p__32444;
var v = cljs.core.nth.call(null,vec__32445,(0),null);
var p = cljs.core.nth.call(null,vec__32445,(1),null);
var job = vec__32445;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__27340__auto___32616 = n;
var __32617 = (0);
while(true){
if((__32617 < n__27340__auto___32616)){
var G__32448_32618 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__32448_32618) {
case "compute":
var c__32055__auto___32620 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32617,c__32055__auto___32620,G__32448_32618,n__27340__auto___32616,jobs,results,process,async){
return (function (){
var f__32056__auto__ = (function (){var switch__31943__auto__ = ((function (__32617,c__32055__auto___32620,G__32448_32618,n__27340__auto___32616,jobs,results,process,async){
return (function (state_32461){
var state_val_32462 = (state_32461[(1)]);
if((state_val_32462 === (1))){
var state_32461__$1 = state_32461;
var statearr_32463_32621 = state_32461__$1;
(statearr_32463_32621[(2)] = null);

(statearr_32463_32621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32462 === (2))){
var state_32461__$1 = state_32461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32461__$1,(4),jobs);
} else {
if((state_val_32462 === (3))){
var inst_32459 = (state_32461[(2)]);
var state_32461__$1 = state_32461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32461__$1,inst_32459);
} else {
if((state_val_32462 === (4))){
var inst_32451 = (state_32461[(2)]);
var inst_32452 = process.call(null,inst_32451);
var state_32461__$1 = state_32461;
if(cljs.core.truth_(inst_32452)){
var statearr_32464_32622 = state_32461__$1;
(statearr_32464_32622[(1)] = (5));

} else {
var statearr_32465_32623 = state_32461__$1;
(statearr_32465_32623[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32462 === (5))){
var state_32461__$1 = state_32461;
var statearr_32466_32624 = state_32461__$1;
(statearr_32466_32624[(2)] = null);

(statearr_32466_32624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32462 === (6))){
var state_32461__$1 = state_32461;
var statearr_32467_32625 = state_32461__$1;
(statearr_32467_32625[(2)] = null);

(statearr_32467_32625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32462 === (7))){
var inst_32457 = (state_32461[(2)]);
var state_32461__$1 = state_32461;
var statearr_32468_32626 = state_32461__$1;
(statearr_32468_32626[(2)] = inst_32457);

(statearr_32468_32626[(1)] = (3));


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
});})(__32617,c__32055__auto___32620,G__32448_32618,n__27340__auto___32616,jobs,results,process,async))
;
return ((function (__32617,switch__31943__auto__,c__32055__auto___32620,G__32448_32618,n__27340__auto___32616,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0 = (function (){
var statearr_32472 = [null,null,null,null,null,null,null];
(statearr_32472[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__);

(statearr_32472[(1)] = (1));

return statearr_32472;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1 = (function (state_32461){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_32461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e32473){if((e32473 instanceof Object)){
var ex__31947__auto__ = e32473;
var statearr_32474_32627 = state_32461;
(statearr_32474_32627[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32628 = state_32461;
state_32461 = G__32628;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__ = function(state_32461){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1.call(this,state_32461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__;
})()
;})(__32617,switch__31943__auto__,c__32055__auto___32620,G__32448_32618,n__27340__auto___32616,jobs,results,process,async))
})();
var state__32057__auto__ = (function (){var statearr_32475 = f__32056__auto__.call(null);
(statearr_32475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32055__auto___32620);

return statearr_32475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32057__auto__);
});})(__32617,c__32055__auto___32620,G__32448_32618,n__27340__auto___32616,jobs,results,process,async))
);


break;
case "async":
var c__32055__auto___32629 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32617,c__32055__auto___32629,G__32448_32618,n__27340__auto___32616,jobs,results,process,async){
return (function (){
var f__32056__auto__ = (function (){var switch__31943__auto__ = ((function (__32617,c__32055__auto___32629,G__32448_32618,n__27340__auto___32616,jobs,results,process,async){
return (function (state_32488){
var state_val_32489 = (state_32488[(1)]);
if((state_val_32489 === (1))){
var state_32488__$1 = state_32488;
var statearr_32490_32630 = state_32488__$1;
(statearr_32490_32630[(2)] = null);

(statearr_32490_32630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (2))){
var state_32488__$1 = state_32488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32488__$1,(4),jobs);
} else {
if((state_val_32489 === (3))){
var inst_32486 = (state_32488[(2)]);
var state_32488__$1 = state_32488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32488__$1,inst_32486);
} else {
if((state_val_32489 === (4))){
var inst_32478 = (state_32488[(2)]);
var inst_32479 = async.call(null,inst_32478);
var state_32488__$1 = state_32488;
if(cljs.core.truth_(inst_32479)){
var statearr_32491_32631 = state_32488__$1;
(statearr_32491_32631[(1)] = (5));

} else {
var statearr_32492_32632 = state_32488__$1;
(statearr_32492_32632[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (5))){
var state_32488__$1 = state_32488;
var statearr_32493_32633 = state_32488__$1;
(statearr_32493_32633[(2)] = null);

(statearr_32493_32633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (6))){
var state_32488__$1 = state_32488;
var statearr_32494_32634 = state_32488__$1;
(statearr_32494_32634[(2)] = null);

(statearr_32494_32634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (7))){
var inst_32484 = (state_32488[(2)]);
var state_32488__$1 = state_32488;
var statearr_32495_32635 = state_32488__$1;
(statearr_32495_32635[(2)] = inst_32484);

(statearr_32495_32635[(1)] = (3));


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
});})(__32617,c__32055__auto___32629,G__32448_32618,n__27340__auto___32616,jobs,results,process,async))
;
return ((function (__32617,switch__31943__auto__,c__32055__auto___32629,G__32448_32618,n__27340__auto___32616,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0 = (function (){
var statearr_32499 = [null,null,null,null,null,null,null];
(statearr_32499[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__);

(statearr_32499[(1)] = (1));

return statearr_32499;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1 = (function (state_32488){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_32488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e32500){if((e32500 instanceof Object)){
var ex__31947__auto__ = e32500;
var statearr_32501_32636 = state_32488;
(statearr_32501_32636[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32637 = state_32488;
state_32488 = G__32637;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__ = function(state_32488){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1.call(this,state_32488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__;
})()
;})(__32617,switch__31943__auto__,c__32055__auto___32629,G__32448_32618,n__27340__auto___32616,jobs,results,process,async))
})();
var state__32057__auto__ = (function (){var statearr_32502 = f__32056__auto__.call(null);
(statearr_32502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32055__auto___32629);

return statearr_32502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32057__auto__);
});})(__32617,c__32055__auto___32629,G__32448_32618,n__27340__auto___32616,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__32638 = (__32617 + (1));
__32617 = G__32638;
continue;
} else {
}
break;
}

var c__32055__auto___32639 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32055__auto___32639,jobs,results,process,async){
return (function (){
var f__32056__auto__ = (function (){var switch__31943__auto__ = ((function (c__32055__auto___32639,jobs,results,process,async){
return (function (state_32524){
var state_val_32525 = (state_32524[(1)]);
if((state_val_32525 === (1))){
var state_32524__$1 = state_32524;
var statearr_32526_32640 = state_32524__$1;
(statearr_32526_32640[(2)] = null);

(statearr_32526_32640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32525 === (2))){
var state_32524__$1 = state_32524;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32524__$1,(4),from);
} else {
if((state_val_32525 === (3))){
var inst_32522 = (state_32524[(2)]);
var state_32524__$1 = state_32524;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32524__$1,inst_32522);
} else {
if((state_val_32525 === (4))){
var inst_32505 = (state_32524[(7)]);
var inst_32505__$1 = (state_32524[(2)]);
var inst_32506 = (inst_32505__$1 == null);
var state_32524__$1 = (function (){var statearr_32527 = state_32524;
(statearr_32527[(7)] = inst_32505__$1);

return statearr_32527;
})();
if(cljs.core.truth_(inst_32506)){
var statearr_32528_32641 = state_32524__$1;
(statearr_32528_32641[(1)] = (5));

} else {
var statearr_32529_32642 = state_32524__$1;
(statearr_32529_32642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32525 === (5))){
var inst_32508 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32524__$1 = state_32524;
var statearr_32530_32643 = state_32524__$1;
(statearr_32530_32643[(2)] = inst_32508);

(statearr_32530_32643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32525 === (6))){
var inst_32510 = (state_32524[(8)]);
var inst_32505 = (state_32524[(7)]);
var inst_32510__$1 = cljs.core.async.chan.call(null,(1));
var inst_32511 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32512 = [inst_32505,inst_32510__$1];
var inst_32513 = (new cljs.core.PersistentVector(null,2,(5),inst_32511,inst_32512,null));
var state_32524__$1 = (function (){var statearr_32531 = state_32524;
(statearr_32531[(8)] = inst_32510__$1);

return statearr_32531;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32524__$1,(8),jobs,inst_32513);
} else {
if((state_val_32525 === (7))){
var inst_32520 = (state_32524[(2)]);
var state_32524__$1 = state_32524;
var statearr_32532_32644 = state_32524__$1;
(statearr_32532_32644[(2)] = inst_32520);

(statearr_32532_32644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32525 === (8))){
var inst_32510 = (state_32524[(8)]);
var inst_32515 = (state_32524[(2)]);
var state_32524__$1 = (function (){var statearr_32533 = state_32524;
(statearr_32533[(9)] = inst_32515);

return statearr_32533;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32524__$1,(9),results,inst_32510);
} else {
if((state_val_32525 === (9))){
var inst_32517 = (state_32524[(2)]);
var state_32524__$1 = (function (){var statearr_32534 = state_32524;
(statearr_32534[(10)] = inst_32517);

return statearr_32534;
})();
var statearr_32535_32645 = state_32524__$1;
(statearr_32535_32645[(2)] = null);

(statearr_32535_32645[(1)] = (2));


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
});})(c__32055__auto___32639,jobs,results,process,async))
;
return ((function (switch__31943__auto__,c__32055__auto___32639,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0 = (function (){
var statearr_32539 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32539[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__);

(statearr_32539[(1)] = (1));

return statearr_32539;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1 = (function (state_32524){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_32524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e32540){if((e32540 instanceof Object)){
var ex__31947__auto__ = e32540;
var statearr_32541_32646 = state_32524;
(statearr_32541_32646[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32647 = state_32524;
state_32524 = G__32647;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__ = function(state_32524){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1.call(this,state_32524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32055__auto___32639,jobs,results,process,async))
})();
var state__32057__auto__ = (function (){var statearr_32542 = f__32056__auto__.call(null);
(statearr_32542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32055__auto___32639);

return statearr_32542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32057__auto__);
});})(c__32055__auto___32639,jobs,results,process,async))
);


var c__32055__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32055__auto__,jobs,results,process,async){
return (function (){
var f__32056__auto__ = (function (){var switch__31943__auto__ = ((function (c__32055__auto__,jobs,results,process,async){
return (function (state_32580){
var state_val_32581 = (state_32580[(1)]);
if((state_val_32581 === (7))){
var inst_32576 = (state_32580[(2)]);
var state_32580__$1 = state_32580;
var statearr_32582_32648 = state_32580__$1;
(statearr_32582_32648[(2)] = inst_32576);

(statearr_32582_32648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (20))){
var state_32580__$1 = state_32580;
var statearr_32583_32649 = state_32580__$1;
(statearr_32583_32649[(2)] = null);

(statearr_32583_32649[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (1))){
var state_32580__$1 = state_32580;
var statearr_32584_32650 = state_32580__$1;
(statearr_32584_32650[(2)] = null);

(statearr_32584_32650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (4))){
var inst_32545 = (state_32580[(7)]);
var inst_32545__$1 = (state_32580[(2)]);
var inst_32546 = (inst_32545__$1 == null);
var state_32580__$1 = (function (){var statearr_32585 = state_32580;
(statearr_32585[(7)] = inst_32545__$1);

return statearr_32585;
})();
if(cljs.core.truth_(inst_32546)){
var statearr_32586_32651 = state_32580__$1;
(statearr_32586_32651[(1)] = (5));

} else {
var statearr_32587_32652 = state_32580__$1;
(statearr_32587_32652[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (15))){
var inst_32558 = (state_32580[(8)]);
var state_32580__$1 = state_32580;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32580__$1,(18),to,inst_32558);
} else {
if((state_val_32581 === (21))){
var inst_32571 = (state_32580[(2)]);
var state_32580__$1 = state_32580;
var statearr_32588_32653 = state_32580__$1;
(statearr_32588_32653[(2)] = inst_32571);

(statearr_32588_32653[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (13))){
var inst_32573 = (state_32580[(2)]);
var state_32580__$1 = (function (){var statearr_32589 = state_32580;
(statearr_32589[(9)] = inst_32573);

return statearr_32589;
})();
var statearr_32590_32654 = state_32580__$1;
(statearr_32590_32654[(2)] = null);

(statearr_32590_32654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (6))){
var inst_32545 = (state_32580[(7)]);
var state_32580__$1 = state_32580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32580__$1,(11),inst_32545);
} else {
if((state_val_32581 === (17))){
var inst_32566 = (state_32580[(2)]);
var state_32580__$1 = state_32580;
if(cljs.core.truth_(inst_32566)){
var statearr_32591_32655 = state_32580__$1;
(statearr_32591_32655[(1)] = (19));

} else {
var statearr_32592_32656 = state_32580__$1;
(statearr_32592_32656[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (3))){
var inst_32578 = (state_32580[(2)]);
var state_32580__$1 = state_32580;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32580__$1,inst_32578);
} else {
if((state_val_32581 === (12))){
var inst_32555 = (state_32580[(10)]);
var state_32580__$1 = state_32580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32580__$1,(14),inst_32555);
} else {
if((state_val_32581 === (2))){
var state_32580__$1 = state_32580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32580__$1,(4),results);
} else {
if((state_val_32581 === (19))){
var state_32580__$1 = state_32580;
var statearr_32593_32657 = state_32580__$1;
(statearr_32593_32657[(2)] = null);

(statearr_32593_32657[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (11))){
var inst_32555 = (state_32580[(2)]);
var state_32580__$1 = (function (){var statearr_32594 = state_32580;
(statearr_32594[(10)] = inst_32555);

return statearr_32594;
})();
var statearr_32595_32658 = state_32580__$1;
(statearr_32595_32658[(2)] = null);

(statearr_32595_32658[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (9))){
var state_32580__$1 = state_32580;
var statearr_32596_32659 = state_32580__$1;
(statearr_32596_32659[(2)] = null);

(statearr_32596_32659[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (5))){
var state_32580__$1 = state_32580;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32597_32660 = state_32580__$1;
(statearr_32597_32660[(1)] = (8));

} else {
var statearr_32598_32661 = state_32580__$1;
(statearr_32598_32661[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (14))){
var inst_32560 = (state_32580[(11)]);
var inst_32558 = (state_32580[(8)]);
var inst_32558__$1 = (state_32580[(2)]);
var inst_32559 = (inst_32558__$1 == null);
var inst_32560__$1 = cljs.core.not.call(null,inst_32559);
var state_32580__$1 = (function (){var statearr_32599 = state_32580;
(statearr_32599[(11)] = inst_32560__$1);

(statearr_32599[(8)] = inst_32558__$1);

return statearr_32599;
})();
if(inst_32560__$1){
var statearr_32600_32662 = state_32580__$1;
(statearr_32600_32662[(1)] = (15));

} else {
var statearr_32601_32663 = state_32580__$1;
(statearr_32601_32663[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (16))){
var inst_32560 = (state_32580[(11)]);
var state_32580__$1 = state_32580;
var statearr_32602_32664 = state_32580__$1;
(statearr_32602_32664[(2)] = inst_32560);

(statearr_32602_32664[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (10))){
var inst_32552 = (state_32580[(2)]);
var state_32580__$1 = state_32580;
var statearr_32603_32665 = state_32580__$1;
(statearr_32603_32665[(2)] = inst_32552);

(statearr_32603_32665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (18))){
var inst_32563 = (state_32580[(2)]);
var state_32580__$1 = state_32580;
var statearr_32604_32666 = state_32580__$1;
(statearr_32604_32666[(2)] = inst_32563);

(statearr_32604_32666[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (8))){
var inst_32549 = cljs.core.async.close_BANG_.call(null,to);
var state_32580__$1 = state_32580;
var statearr_32605_32667 = state_32580__$1;
(statearr_32605_32667[(2)] = inst_32549);

(statearr_32605_32667[(1)] = (10));


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
});})(c__32055__auto__,jobs,results,process,async))
;
return ((function (switch__31943__auto__,c__32055__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0 = (function (){
var statearr_32609 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32609[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__);

(statearr_32609[(1)] = (1));

return statearr_32609;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1 = (function (state_32580){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_32580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e32610){if((e32610 instanceof Object)){
var ex__31947__auto__ = e32610;
var statearr_32611_32668 = state_32580;
(statearr_32611_32668[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32669 = state_32580;
state_32580 = G__32669;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__ = function(state_32580){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1.call(this,state_32580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32055__auto__,jobs,results,process,async))
})();
var state__32057__auto__ = (function (){var statearr_32612 = f__32056__auto__.call(null);
(statearr_32612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32055__auto__);

return statearr_32612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32057__auto__);
});})(c__32055__auto__,jobs,results,process,async))
);

return c__32055__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args32670 = [];
var len__27500__auto___32673 = arguments.length;
var i__27501__auto___32674 = (0);
while(true){
if((i__27501__auto___32674 < len__27500__auto___32673)){
args32670.push((arguments[i__27501__auto___32674]));

var G__32675 = (i__27501__auto___32674 + (1));
i__27501__auto___32674 = G__32675;
continue;
} else {
}
break;
}

var G__32672 = args32670.length;
switch (G__32672) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32670.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args32677 = [];
var len__27500__auto___32680 = arguments.length;
var i__27501__auto___32681 = (0);
while(true){
if((i__27501__auto___32681 < len__27500__auto___32680)){
args32677.push((arguments[i__27501__auto___32681]));

var G__32682 = (i__27501__auto___32681 + (1));
i__27501__auto___32681 = G__32682;
continue;
} else {
}
break;
}

var G__32679 = args32677.length;
switch (G__32679) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32677.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args32684 = [];
var len__27500__auto___32737 = arguments.length;
var i__27501__auto___32738 = (0);
while(true){
if((i__27501__auto___32738 < len__27500__auto___32737)){
args32684.push((arguments[i__27501__auto___32738]));

var G__32739 = (i__27501__auto___32738 + (1));
i__27501__auto___32738 = G__32739;
continue;
} else {
}
break;
}

var G__32686 = args32684.length;
switch (G__32686) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32684.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__32055__auto___32741 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32055__auto___32741,tc,fc){
return (function (){
var f__32056__auto__ = (function (){var switch__31943__auto__ = ((function (c__32055__auto___32741,tc,fc){
return (function (state_32712){
var state_val_32713 = (state_32712[(1)]);
if((state_val_32713 === (7))){
var inst_32708 = (state_32712[(2)]);
var state_32712__$1 = state_32712;
var statearr_32714_32742 = state_32712__$1;
(statearr_32714_32742[(2)] = inst_32708);

(statearr_32714_32742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (1))){
var state_32712__$1 = state_32712;
var statearr_32715_32743 = state_32712__$1;
(statearr_32715_32743[(2)] = null);

(statearr_32715_32743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (4))){
var inst_32689 = (state_32712[(7)]);
var inst_32689__$1 = (state_32712[(2)]);
var inst_32690 = (inst_32689__$1 == null);
var state_32712__$1 = (function (){var statearr_32716 = state_32712;
(statearr_32716[(7)] = inst_32689__$1);

return statearr_32716;
})();
if(cljs.core.truth_(inst_32690)){
var statearr_32717_32744 = state_32712__$1;
(statearr_32717_32744[(1)] = (5));

} else {
var statearr_32718_32745 = state_32712__$1;
(statearr_32718_32745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (13))){
var state_32712__$1 = state_32712;
var statearr_32719_32746 = state_32712__$1;
(statearr_32719_32746[(2)] = null);

(statearr_32719_32746[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (6))){
var inst_32689 = (state_32712[(7)]);
var inst_32695 = p.call(null,inst_32689);
var state_32712__$1 = state_32712;
if(cljs.core.truth_(inst_32695)){
var statearr_32720_32747 = state_32712__$1;
(statearr_32720_32747[(1)] = (9));

} else {
var statearr_32721_32748 = state_32712__$1;
(statearr_32721_32748[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (3))){
var inst_32710 = (state_32712[(2)]);
var state_32712__$1 = state_32712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32712__$1,inst_32710);
} else {
if((state_val_32713 === (12))){
var state_32712__$1 = state_32712;
var statearr_32722_32749 = state_32712__$1;
(statearr_32722_32749[(2)] = null);

(statearr_32722_32749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (2))){
var state_32712__$1 = state_32712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32712__$1,(4),ch);
} else {
if((state_val_32713 === (11))){
var inst_32689 = (state_32712[(7)]);
var inst_32699 = (state_32712[(2)]);
var state_32712__$1 = state_32712;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32712__$1,(8),inst_32699,inst_32689);
} else {
if((state_val_32713 === (9))){
var state_32712__$1 = state_32712;
var statearr_32723_32750 = state_32712__$1;
(statearr_32723_32750[(2)] = tc);

(statearr_32723_32750[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (5))){
var inst_32692 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32693 = cljs.core.async.close_BANG_.call(null,fc);
var state_32712__$1 = (function (){var statearr_32724 = state_32712;
(statearr_32724[(8)] = inst_32692);

return statearr_32724;
})();
var statearr_32725_32751 = state_32712__$1;
(statearr_32725_32751[(2)] = inst_32693);

(statearr_32725_32751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (14))){
var inst_32706 = (state_32712[(2)]);
var state_32712__$1 = state_32712;
var statearr_32726_32752 = state_32712__$1;
(statearr_32726_32752[(2)] = inst_32706);

(statearr_32726_32752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (10))){
var state_32712__$1 = state_32712;
var statearr_32727_32753 = state_32712__$1;
(statearr_32727_32753[(2)] = fc);

(statearr_32727_32753[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (8))){
var inst_32701 = (state_32712[(2)]);
var state_32712__$1 = state_32712;
if(cljs.core.truth_(inst_32701)){
var statearr_32728_32754 = state_32712__$1;
(statearr_32728_32754[(1)] = (12));

} else {
var statearr_32729_32755 = state_32712__$1;
(statearr_32729_32755[(1)] = (13));

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
});})(c__32055__auto___32741,tc,fc))
;
return ((function (switch__31943__auto__,c__32055__auto___32741,tc,fc){
return (function() {
var cljs$core$async$state_machine__31944__auto__ = null;
var cljs$core$async$state_machine__31944__auto____0 = (function (){
var statearr_32733 = [null,null,null,null,null,null,null,null,null];
(statearr_32733[(0)] = cljs$core$async$state_machine__31944__auto__);

(statearr_32733[(1)] = (1));

return statearr_32733;
});
var cljs$core$async$state_machine__31944__auto____1 = (function (state_32712){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_32712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e32734){if((e32734 instanceof Object)){
var ex__31947__auto__ = e32734;
var statearr_32735_32756 = state_32712;
(statearr_32735_32756[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32757 = state_32712;
state_32712 = G__32757;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$state_machine__31944__auto__ = function(state_32712){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31944__auto____1.call(this,state_32712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31944__auto____0;
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31944__auto____1;
return cljs$core$async$state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32055__auto___32741,tc,fc))
})();
var state__32057__auto__ = (function (){var statearr_32736 = f__32056__auto__.call(null);
(statearr_32736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32055__auto___32741);

return statearr_32736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32057__auto__);
});})(c__32055__auto___32741,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32055__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32055__auto__){
return (function (){
var f__32056__auto__ = (function (){var switch__31943__auto__ = ((function (c__32055__auto__){
return (function (state_32821){
var state_val_32822 = (state_32821[(1)]);
if((state_val_32822 === (7))){
var inst_32817 = (state_32821[(2)]);
var state_32821__$1 = state_32821;
var statearr_32823_32844 = state_32821__$1;
(statearr_32823_32844[(2)] = inst_32817);

(statearr_32823_32844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (1))){
var inst_32801 = init;
var state_32821__$1 = (function (){var statearr_32824 = state_32821;
(statearr_32824[(7)] = inst_32801);

return statearr_32824;
})();
var statearr_32825_32845 = state_32821__$1;
(statearr_32825_32845[(2)] = null);

(statearr_32825_32845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (4))){
var inst_32804 = (state_32821[(8)]);
var inst_32804__$1 = (state_32821[(2)]);
var inst_32805 = (inst_32804__$1 == null);
var state_32821__$1 = (function (){var statearr_32826 = state_32821;
(statearr_32826[(8)] = inst_32804__$1);

return statearr_32826;
})();
if(cljs.core.truth_(inst_32805)){
var statearr_32827_32846 = state_32821__$1;
(statearr_32827_32846[(1)] = (5));

} else {
var statearr_32828_32847 = state_32821__$1;
(statearr_32828_32847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (6))){
var inst_32801 = (state_32821[(7)]);
var inst_32808 = (state_32821[(9)]);
var inst_32804 = (state_32821[(8)]);
var inst_32808__$1 = f.call(null,inst_32801,inst_32804);
var inst_32809 = cljs.core.reduced_QMARK_.call(null,inst_32808__$1);
var state_32821__$1 = (function (){var statearr_32829 = state_32821;
(statearr_32829[(9)] = inst_32808__$1);

return statearr_32829;
})();
if(inst_32809){
var statearr_32830_32848 = state_32821__$1;
(statearr_32830_32848[(1)] = (8));

} else {
var statearr_32831_32849 = state_32821__$1;
(statearr_32831_32849[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (3))){
var inst_32819 = (state_32821[(2)]);
var state_32821__$1 = state_32821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32821__$1,inst_32819);
} else {
if((state_val_32822 === (2))){
var state_32821__$1 = state_32821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32821__$1,(4),ch);
} else {
if((state_val_32822 === (9))){
var inst_32808 = (state_32821[(9)]);
var inst_32801 = inst_32808;
var state_32821__$1 = (function (){var statearr_32832 = state_32821;
(statearr_32832[(7)] = inst_32801);

return statearr_32832;
})();
var statearr_32833_32850 = state_32821__$1;
(statearr_32833_32850[(2)] = null);

(statearr_32833_32850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (5))){
var inst_32801 = (state_32821[(7)]);
var state_32821__$1 = state_32821;
var statearr_32834_32851 = state_32821__$1;
(statearr_32834_32851[(2)] = inst_32801);

(statearr_32834_32851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (10))){
var inst_32815 = (state_32821[(2)]);
var state_32821__$1 = state_32821;
var statearr_32835_32852 = state_32821__$1;
(statearr_32835_32852[(2)] = inst_32815);

(statearr_32835_32852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (8))){
var inst_32808 = (state_32821[(9)]);
var inst_32811 = cljs.core.deref.call(null,inst_32808);
var state_32821__$1 = state_32821;
var statearr_32836_32853 = state_32821__$1;
(statearr_32836_32853[(2)] = inst_32811);

(statearr_32836_32853[(1)] = (10));


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
});})(c__32055__auto__))
;
return ((function (switch__31943__auto__,c__32055__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31944__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31944__auto____0 = (function (){
var statearr_32840 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32840[(0)] = cljs$core$async$reduce_$_state_machine__31944__auto__);

(statearr_32840[(1)] = (1));

return statearr_32840;
});
var cljs$core$async$reduce_$_state_machine__31944__auto____1 = (function (state_32821){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_32821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e32841){if((e32841 instanceof Object)){
var ex__31947__auto__ = e32841;
var statearr_32842_32854 = state_32821;
(statearr_32842_32854[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32855 = state_32821;
state_32821 = G__32855;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31944__auto__ = function(state_32821){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31944__auto____1.call(this,state_32821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31944__auto____0;
cljs$core$async$reduce_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31944__auto____1;
return cljs$core$async$reduce_$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32055__auto__))
})();
var state__32057__auto__ = (function (){var statearr_32843 = f__32056__auto__.call(null);
(statearr_32843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32055__auto__);

return statearr_32843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32057__auto__);
});})(c__32055__auto__))
);

return c__32055__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__32055__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32055__auto__,f__$1){
return (function (){
var f__32056__auto__ = (function (){var switch__31943__auto__ = ((function (c__32055__auto__,f__$1){
return (function (state_32875){
var state_val_32876 = (state_32875[(1)]);
if((state_val_32876 === (1))){
var inst_32870 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_32875__$1 = state_32875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32875__$1,(2),inst_32870);
} else {
if((state_val_32876 === (2))){
var inst_32872 = (state_32875[(2)]);
var inst_32873 = f__$1.call(null,inst_32872);
var state_32875__$1 = state_32875;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32875__$1,inst_32873);
} else {
return null;
}
}
});})(c__32055__auto__,f__$1))
;
return ((function (switch__31943__auto__,c__32055__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__31944__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31944__auto____0 = (function (){
var statearr_32880 = [null,null,null,null,null,null,null];
(statearr_32880[(0)] = cljs$core$async$transduce_$_state_machine__31944__auto__);

(statearr_32880[(1)] = (1));

return statearr_32880;
});
var cljs$core$async$transduce_$_state_machine__31944__auto____1 = (function (state_32875){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_32875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e32881){if((e32881 instanceof Object)){
var ex__31947__auto__ = e32881;
var statearr_32882_32884 = state_32875;
(statearr_32882_32884[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32885 = state_32875;
state_32875 = G__32885;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31944__auto__ = function(state_32875){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31944__auto____1.call(this,state_32875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31944__auto____0;
cljs$core$async$transduce_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31944__auto____1;
return cljs$core$async$transduce_$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32055__auto__,f__$1))
})();
var state__32057__auto__ = (function (){var statearr_32883 = f__32056__auto__.call(null);
(statearr_32883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32055__auto__);

return statearr_32883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32057__auto__);
});})(c__32055__auto__,f__$1))
);

return c__32055__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args32886 = [];
var len__27500__auto___32938 = arguments.length;
var i__27501__auto___32939 = (0);
while(true){
if((i__27501__auto___32939 < len__27500__auto___32938)){
args32886.push((arguments[i__27501__auto___32939]));

var G__32940 = (i__27501__auto___32939 + (1));
i__27501__auto___32939 = G__32940;
continue;
} else {
}
break;
}

var G__32888 = args32886.length;
switch (G__32888) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32886.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32055__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32055__auto__){
return (function (){
var f__32056__auto__ = (function (){var switch__31943__auto__ = ((function (c__32055__auto__){
return (function (state_32913){
var state_val_32914 = (state_32913[(1)]);
if((state_val_32914 === (7))){
var inst_32895 = (state_32913[(2)]);
var state_32913__$1 = state_32913;
var statearr_32915_32942 = state_32913__$1;
(statearr_32915_32942[(2)] = inst_32895);

(statearr_32915_32942[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32914 === (1))){
var inst_32889 = cljs.core.seq.call(null,coll);
var inst_32890 = inst_32889;
var state_32913__$1 = (function (){var statearr_32916 = state_32913;
(statearr_32916[(7)] = inst_32890);

return statearr_32916;
})();
var statearr_32917_32943 = state_32913__$1;
(statearr_32917_32943[(2)] = null);

(statearr_32917_32943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32914 === (4))){
var inst_32890 = (state_32913[(7)]);
var inst_32893 = cljs.core.first.call(null,inst_32890);
var state_32913__$1 = state_32913;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32913__$1,(7),ch,inst_32893);
} else {
if((state_val_32914 === (13))){
var inst_32907 = (state_32913[(2)]);
var state_32913__$1 = state_32913;
var statearr_32918_32944 = state_32913__$1;
(statearr_32918_32944[(2)] = inst_32907);

(statearr_32918_32944[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32914 === (6))){
var inst_32898 = (state_32913[(2)]);
var state_32913__$1 = state_32913;
if(cljs.core.truth_(inst_32898)){
var statearr_32919_32945 = state_32913__$1;
(statearr_32919_32945[(1)] = (8));

} else {
var statearr_32920_32946 = state_32913__$1;
(statearr_32920_32946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32914 === (3))){
var inst_32911 = (state_32913[(2)]);
var state_32913__$1 = state_32913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32913__$1,inst_32911);
} else {
if((state_val_32914 === (12))){
var state_32913__$1 = state_32913;
var statearr_32921_32947 = state_32913__$1;
(statearr_32921_32947[(2)] = null);

(statearr_32921_32947[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32914 === (2))){
var inst_32890 = (state_32913[(7)]);
var state_32913__$1 = state_32913;
if(cljs.core.truth_(inst_32890)){
var statearr_32922_32948 = state_32913__$1;
(statearr_32922_32948[(1)] = (4));

} else {
var statearr_32923_32949 = state_32913__$1;
(statearr_32923_32949[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32914 === (11))){
var inst_32904 = cljs.core.async.close_BANG_.call(null,ch);
var state_32913__$1 = state_32913;
var statearr_32924_32950 = state_32913__$1;
(statearr_32924_32950[(2)] = inst_32904);

(statearr_32924_32950[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32914 === (9))){
var state_32913__$1 = state_32913;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32925_32951 = state_32913__$1;
(statearr_32925_32951[(1)] = (11));

} else {
var statearr_32926_32952 = state_32913__$1;
(statearr_32926_32952[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32914 === (5))){
var inst_32890 = (state_32913[(7)]);
var state_32913__$1 = state_32913;
var statearr_32927_32953 = state_32913__$1;
(statearr_32927_32953[(2)] = inst_32890);

(statearr_32927_32953[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32914 === (10))){
var inst_32909 = (state_32913[(2)]);
var state_32913__$1 = state_32913;
var statearr_32928_32954 = state_32913__$1;
(statearr_32928_32954[(2)] = inst_32909);

(statearr_32928_32954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32914 === (8))){
var inst_32890 = (state_32913[(7)]);
var inst_32900 = cljs.core.next.call(null,inst_32890);
var inst_32890__$1 = inst_32900;
var state_32913__$1 = (function (){var statearr_32929 = state_32913;
(statearr_32929[(7)] = inst_32890__$1);

return statearr_32929;
})();
var statearr_32930_32955 = state_32913__$1;
(statearr_32930_32955[(2)] = null);

(statearr_32930_32955[(1)] = (2));


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
});})(c__32055__auto__))
;
return ((function (switch__31943__auto__,c__32055__auto__){
return (function() {
var cljs$core$async$state_machine__31944__auto__ = null;
var cljs$core$async$state_machine__31944__auto____0 = (function (){
var statearr_32934 = [null,null,null,null,null,null,null,null];
(statearr_32934[(0)] = cljs$core$async$state_machine__31944__auto__);

(statearr_32934[(1)] = (1));

return statearr_32934;
});
var cljs$core$async$state_machine__31944__auto____1 = (function (state_32913){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_32913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e32935){if((e32935 instanceof Object)){
var ex__31947__auto__ = e32935;
var statearr_32936_32956 = state_32913;
(statearr_32936_32956[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32957 = state_32913;
state_32913 = G__32957;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$state_machine__31944__auto__ = function(state_32913){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31944__auto____1.call(this,state_32913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31944__auto____0;
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31944__auto____1;
return cljs$core$async$state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32055__auto__))
})();
var state__32057__auto__ = (function (){var statearr_32937 = f__32056__auto__.call(null);
(statearr_32937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32055__auto__);

return statearr_32937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32057__auto__);
});})(c__32055__auto__))
);

return c__32055__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__27088__auto__ = (((_ == null))?null:_);
var m__27089__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__27088__auto__)]);
if(!((m__27089__auto__ == null))){
return m__27089__auto__.call(null,_);
} else {
var m__27089__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__27089__auto____$1 == null))){
return m__27089__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__27088__auto__ = (((m == null))?null:m);
var m__27089__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__27088__auto__)]);
if(!((m__27089__auto__ == null))){
return m__27089__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__27089__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__27089__auto____$1 == null))){
return m__27089__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__27088__auto__ = (((m == null))?null:m);
var m__27089__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__27088__auto__)]);
if(!((m__27089__auto__ == null))){
return m__27089__auto__.call(null,m,ch);
} else {
var m__27089__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__27089__auto____$1 == null))){
return m__27089__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__27088__auto__ = (((m == null))?null:m);
var m__27089__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__27088__auto__)]);
if(!((m__27089__auto__ == null))){
return m__27089__auto__.call(null,m);
} else {
var m__27089__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__27089__auto____$1 == null))){
return m__27089__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async33183 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33183 = (function (mult,ch,cs,meta33184){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta33184 = meta33184;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33185,meta33184__$1){
var self__ = this;
var _33185__$1 = this;
return (new cljs.core.async.t_cljs$core$async33183(self__.mult,self__.ch,self__.cs,meta33184__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33183.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33185){
var self__ = this;
var _33185__$1 = this;
return self__.meta33184;
});})(cs))
;

cljs.core.async.t_cljs$core$async33183.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async33183.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33183.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async33183.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33183.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33183.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33183.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33184","meta33184",-476384697,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33183.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33183.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33183";

cljs.core.async.t_cljs$core$async33183.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27031__auto__,writer__27032__auto__,opt__27033__auto__){
return cljs.core._write.call(null,writer__27032__auto__,"cljs.core.async/t_cljs$core$async33183");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async33183 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33183(mult__$1,ch__$1,cs__$1,meta33184){
return (new cljs.core.async.t_cljs$core$async33183(mult__$1,ch__$1,cs__$1,meta33184));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33183(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__32055__auto___33408 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32055__auto___33408,cs,m,dchan,dctr,done){
return (function (){
var f__32056__auto__ = (function (){var switch__31943__auto__ = ((function (c__32055__auto___33408,cs,m,dchan,dctr,done){
return (function (state_33320){
var state_val_33321 = (state_33320[(1)]);
if((state_val_33321 === (7))){
var inst_33316 = (state_33320[(2)]);
var state_33320__$1 = state_33320;
var statearr_33322_33409 = state_33320__$1;
(statearr_33322_33409[(2)] = inst_33316);

(statearr_33322_33409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (20))){
var inst_33219 = (state_33320[(7)]);
var inst_33231 = cljs.core.first.call(null,inst_33219);
var inst_33232 = cljs.core.nth.call(null,inst_33231,(0),null);
var inst_33233 = cljs.core.nth.call(null,inst_33231,(1),null);
var state_33320__$1 = (function (){var statearr_33323 = state_33320;
(statearr_33323[(8)] = inst_33232);

return statearr_33323;
})();
if(cljs.core.truth_(inst_33233)){
var statearr_33324_33410 = state_33320__$1;
(statearr_33324_33410[(1)] = (22));

} else {
var statearr_33325_33411 = state_33320__$1;
(statearr_33325_33411[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (27))){
var inst_33263 = (state_33320[(9)]);
var inst_33268 = (state_33320[(10)]);
var inst_33261 = (state_33320[(11)]);
var inst_33188 = (state_33320[(12)]);
var inst_33268__$1 = cljs.core._nth.call(null,inst_33261,inst_33263);
var inst_33269 = cljs.core.async.put_BANG_.call(null,inst_33268__$1,inst_33188,done);
var state_33320__$1 = (function (){var statearr_33326 = state_33320;
(statearr_33326[(10)] = inst_33268__$1);

return statearr_33326;
})();
if(cljs.core.truth_(inst_33269)){
var statearr_33327_33412 = state_33320__$1;
(statearr_33327_33412[(1)] = (30));

} else {
var statearr_33328_33413 = state_33320__$1;
(statearr_33328_33413[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (1))){
var state_33320__$1 = state_33320;
var statearr_33329_33414 = state_33320__$1;
(statearr_33329_33414[(2)] = null);

(statearr_33329_33414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (24))){
var inst_33219 = (state_33320[(7)]);
var inst_33238 = (state_33320[(2)]);
var inst_33239 = cljs.core.next.call(null,inst_33219);
var inst_33197 = inst_33239;
var inst_33198 = null;
var inst_33199 = (0);
var inst_33200 = (0);
var state_33320__$1 = (function (){var statearr_33330 = state_33320;
(statearr_33330[(13)] = inst_33197);

(statearr_33330[(14)] = inst_33198);

(statearr_33330[(15)] = inst_33238);

(statearr_33330[(16)] = inst_33199);

(statearr_33330[(17)] = inst_33200);

return statearr_33330;
})();
var statearr_33331_33415 = state_33320__$1;
(statearr_33331_33415[(2)] = null);

(statearr_33331_33415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (39))){
var state_33320__$1 = state_33320;
var statearr_33335_33416 = state_33320__$1;
(statearr_33335_33416[(2)] = null);

(statearr_33335_33416[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (4))){
var inst_33188 = (state_33320[(12)]);
var inst_33188__$1 = (state_33320[(2)]);
var inst_33189 = (inst_33188__$1 == null);
var state_33320__$1 = (function (){var statearr_33336 = state_33320;
(statearr_33336[(12)] = inst_33188__$1);

return statearr_33336;
})();
if(cljs.core.truth_(inst_33189)){
var statearr_33337_33417 = state_33320__$1;
(statearr_33337_33417[(1)] = (5));

} else {
var statearr_33338_33418 = state_33320__$1;
(statearr_33338_33418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (15))){
var inst_33197 = (state_33320[(13)]);
var inst_33198 = (state_33320[(14)]);
var inst_33199 = (state_33320[(16)]);
var inst_33200 = (state_33320[(17)]);
var inst_33215 = (state_33320[(2)]);
var inst_33216 = (inst_33200 + (1));
var tmp33332 = inst_33197;
var tmp33333 = inst_33198;
var tmp33334 = inst_33199;
var inst_33197__$1 = tmp33332;
var inst_33198__$1 = tmp33333;
var inst_33199__$1 = tmp33334;
var inst_33200__$1 = inst_33216;
var state_33320__$1 = (function (){var statearr_33339 = state_33320;
(statearr_33339[(13)] = inst_33197__$1);

(statearr_33339[(18)] = inst_33215);

(statearr_33339[(14)] = inst_33198__$1);

(statearr_33339[(16)] = inst_33199__$1);

(statearr_33339[(17)] = inst_33200__$1);

return statearr_33339;
})();
var statearr_33340_33419 = state_33320__$1;
(statearr_33340_33419[(2)] = null);

(statearr_33340_33419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (21))){
var inst_33242 = (state_33320[(2)]);
var state_33320__$1 = state_33320;
var statearr_33344_33420 = state_33320__$1;
(statearr_33344_33420[(2)] = inst_33242);

(statearr_33344_33420[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (31))){
var inst_33268 = (state_33320[(10)]);
var inst_33272 = done.call(null,null);
var inst_33273 = cljs.core.async.untap_STAR_.call(null,m,inst_33268);
var state_33320__$1 = (function (){var statearr_33345 = state_33320;
(statearr_33345[(19)] = inst_33272);

return statearr_33345;
})();
var statearr_33346_33421 = state_33320__$1;
(statearr_33346_33421[(2)] = inst_33273);

(statearr_33346_33421[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (32))){
var inst_33263 = (state_33320[(9)]);
var inst_33260 = (state_33320[(20)]);
var inst_33262 = (state_33320[(21)]);
var inst_33261 = (state_33320[(11)]);
var inst_33275 = (state_33320[(2)]);
var inst_33276 = (inst_33263 + (1));
var tmp33341 = inst_33260;
var tmp33342 = inst_33262;
var tmp33343 = inst_33261;
var inst_33260__$1 = tmp33341;
var inst_33261__$1 = tmp33343;
var inst_33262__$1 = tmp33342;
var inst_33263__$1 = inst_33276;
var state_33320__$1 = (function (){var statearr_33347 = state_33320;
(statearr_33347[(9)] = inst_33263__$1);

(statearr_33347[(22)] = inst_33275);

(statearr_33347[(20)] = inst_33260__$1);

(statearr_33347[(21)] = inst_33262__$1);

(statearr_33347[(11)] = inst_33261__$1);

return statearr_33347;
})();
var statearr_33348_33422 = state_33320__$1;
(statearr_33348_33422[(2)] = null);

(statearr_33348_33422[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (40))){
var inst_33288 = (state_33320[(23)]);
var inst_33292 = done.call(null,null);
var inst_33293 = cljs.core.async.untap_STAR_.call(null,m,inst_33288);
var state_33320__$1 = (function (){var statearr_33349 = state_33320;
(statearr_33349[(24)] = inst_33292);

return statearr_33349;
})();
var statearr_33350_33423 = state_33320__$1;
(statearr_33350_33423[(2)] = inst_33293);

(statearr_33350_33423[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (33))){
var inst_33279 = (state_33320[(25)]);
var inst_33281 = cljs.core.chunked_seq_QMARK_.call(null,inst_33279);
var state_33320__$1 = state_33320;
if(inst_33281){
var statearr_33351_33424 = state_33320__$1;
(statearr_33351_33424[(1)] = (36));

} else {
var statearr_33352_33425 = state_33320__$1;
(statearr_33352_33425[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (13))){
var inst_33209 = (state_33320[(26)]);
var inst_33212 = cljs.core.async.close_BANG_.call(null,inst_33209);
var state_33320__$1 = state_33320;
var statearr_33353_33426 = state_33320__$1;
(statearr_33353_33426[(2)] = inst_33212);

(statearr_33353_33426[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (22))){
var inst_33232 = (state_33320[(8)]);
var inst_33235 = cljs.core.async.close_BANG_.call(null,inst_33232);
var state_33320__$1 = state_33320;
var statearr_33354_33427 = state_33320__$1;
(statearr_33354_33427[(2)] = inst_33235);

(statearr_33354_33427[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (36))){
var inst_33279 = (state_33320[(25)]);
var inst_33283 = cljs.core.chunk_first.call(null,inst_33279);
var inst_33284 = cljs.core.chunk_rest.call(null,inst_33279);
var inst_33285 = cljs.core.count.call(null,inst_33283);
var inst_33260 = inst_33284;
var inst_33261 = inst_33283;
var inst_33262 = inst_33285;
var inst_33263 = (0);
var state_33320__$1 = (function (){var statearr_33355 = state_33320;
(statearr_33355[(9)] = inst_33263);

(statearr_33355[(20)] = inst_33260);

(statearr_33355[(21)] = inst_33262);

(statearr_33355[(11)] = inst_33261);

return statearr_33355;
})();
var statearr_33356_33428 = state_33320__$1;
(statearr_33356_33428[(2)] = null);

(statearr_33356_33428[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (41))){
var inst_33279 = (state_33320[(25)]);
var inst_33295 = (state_33320[(2)]);
var inst_33296 = cljs.core.next.call(null,inst_33279);
var inst_33260 = inst_33296;
var inst_33261 = null;
var inst_33262 = (0);
var inst_33263 = (0);
var state_33320__$1 = (function (){var statearr_33357 = state_33320;
(statearr_33357[(9)] = inst_33263);

(statearr_33357[(27)] = inst_33295);

(statearr_33357[(20)] = inst_33260);

(statearr_33357[(21)] = inst_33262);

(statearr_33357[(11)] = inst_33261);

return statearr_33357;
})();
var statearr_33358_33429 = state_33320__$1;
(statearr_33358_33429[(2)] = null);

(statearr_33358_33429[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (43))){
var state_33320__$1 = state_33320;
var statearr_33359_33430 = state_33320__$1;
(statearr_33359_33430[(2)] = null);

(statearr_33359_33430[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (29))){
var inst_33304 = (state_33320[(2)]);
var state_33320__$1 = state_33320;
var statearr_33360_33431 = state_33320__$1;
(statearr_33360_33431[(2)] = inst_33304);

(statearr_33360_33431[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (44))){
var inst_33313 = (state_33320[(2)]);
var state_33320__$1 = (function (){var statearr_33361 = state_33320;
(statearr_33361[(28)] = inst_33313);

return statearr_33361;
})();
var statearr_33362_33432 = state_33320__$1;
(statearr_33362_33432[(2)] = null);

(statearr_33362_33432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (6))){
var inst_33252 = (state_33320[(29)]);
var inst_33251 = cljs.core.deref.call(null,cs);
var inst_33252__$1 = cljs.core.keys.call(null,inst_33251);
var inst_33253 = cljs.core.count.call(null,inst_33252__$1);
var inst_33254 = cljs.core.reset_BANG_.call(null,dctr,inst_33253);
var inst_33259 = cljs.core.seq.call(null,inst_33252__$1);
var inst_33260 = inst_33259;
var inst_33261 = null;
var inst_33262 = (0);
var inst_33263 = (0);
var state_33320__$1 = (function (){var statearr_33363 = state_33320;
(statearr_33363[(9)] = inst_33263);

(statearr_33363[(20)] = inst_33260);

(statearr_33363[(30)] = inst_33254);

(statearr_33363[(21)] = inst_33262);

(statearr_33363[(11)] = inst_33261);

(statearr_33363[(29)] = inst_33252__$1);

return statearr_33363;
})();
var statearr_33364_33433 = state_33320__$1;
(statearr_33364_33433[(2)] = null);

(statearr_33364_33433[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (28))){
var inst_33260 = (state_33320[(20)]);
var inst_33279 = (state_33320[(25)]);
var inst_33279__$1 = cljs.core.seq.call(null,inst_33260);
var state_33320__$1 = (function (){var statearr_33365 = state_33320;
(statearr_33365[(25)] = inst_33279__$1);

return statearr_33365;
})();
if(inst_33279__$1){
var statearr_33366_33434 = state_33320__$1;
(statearr_33366_33434[(1)] = (33));

} else {
var statearr_33367_33435 = state_33320__$1;
(statearr_33367_33435[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (25))){
var inst_33263 = (state_33320[(9)]);
var inst_33262 = (state_33320[(21)]);
var inst_33265 = (inst_33263 < inst_33262);
var inst_33266 = inst_33265;
var state_33320__$1 = state_33320;
if(cljs.core.truth_(inst_33266)){
var statearr_33368_33436 = state_33320__$1;
(statearr_33368_33436[(1)] = (27));

} else {
var statearr_33369_33437 = state_33320__$1;
(statearr_33369_33437[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (34))){
var state_33320__$1 = state_33320;
var statearr_33370_33438 = state_33320__$1;
(statearr_33370_33438[(2)] = null);

(statearr_33370_33438[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (17))){
var state_33320__$1 = state_33320;
var statearr_33371_33439 = state_33320__$1;
(statearr_33371_33439[(2)] = null);

(statearr_33371_33439[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (3))){
var inst_33318 = (state_33320[(2)]);
var state_33320__$1 = state_33320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33320__$1,inst_33318);
} else {
if((state_val_33321 === (12))){
var inst_33247 = (state_33320[(2)]);
var state_33320__$1 = state_33320;
var statearr_33372_33440 = state_33320__$1;
(statearr_33372_33440[(2)] = inst_33247);

(statearr_33372_33440[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (2))){
var state_33320__$1 = state_33320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33320__$1,(4),ch);
} else {
if((state_val_33321 === (23))){
var state_33320__$1 = state_33320;
var statearr_33373_33441 = state_33320__$1;
(statearr_33373_33441[(2)] = null);

(statearr_33373_33441[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (35))){
var inst_33302 = (state_33320[(2)]);
var state_33320__$1 = state_33320;
var statearr_33374_33442 = state_33320__$1;
(statearr_33374_33442[(2)] = inst_33302);

(statearr_33374_33442[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (19))){
var inst_33219 = (state_33320[(7)]);
var inst_33223 = cljs.core.chunk_first.call(null,inst_33219);
var inst_33224 = cljs.core.chunk_rest.call(null,inst_33219);
var inst_33225 = cljs.core.count.call(null,inst_33223);
var inst_33197 = inst_33224;
var inst_33198 = inst_33223;
var inst_33199 = inst_33225;
var inst_33200 = (0);
var state_33320__$1 = (function (){var statearr_33375 = state_33320;
(statearr_33375[(13)] = inst_33197);

(statearr_33375[(14)] = inst_33198);

(statearr_33375[(16)] = inst_33199);

(statearr_33375[(17)] = inst_33200);

return statearr_33375;
})();
var statearr_33376_33443 = state_33320__$1;
(statearr_33376_33443[(2)] = null);

(statearr_33376_33443[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (11))){
var inst_33197 = (state_33320[(13)]);
var inst_33219 = (state_33320[(7)]);
var inst_33219__$1 = cljs.core.seq.call(null,inst_33197);
var state_33320__$1 = (function (){var statearr_33377 = state_33320;
(statearr_33377[(7)] = inst_33219__$1);

return statearr_33377;
})();
if(inst_33219__$1){
var statearr_33378_33444 = state_33320__$1;
(statearr_33378_33444[(1)] = (16));

} else {
var statearr_33379_33445 = state_33320__$1;
(statearr_33379_33445[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (9))){
var inst_33249 = (state_33320[(2)]);
var state_33320__$1 = state_33320;
var statearr_33380_33446 = state_33320__$1;
(statearr_33380_33446[(2)] = inst_33249);

(statearr_33380_33446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (5))){
var inst_33195 = cljs.core.deref.call(null,cs);
var inst_33196 = cljs.core.seq.call(null,inst_33195);
var inst_33197 = inst_33196;
var inst_33198 = null;
var inst_33199 = (0);
var inst_33200 = (0);
var state_33320__$1 = (function (){var statearr_33381 = state_33320;
(statearr_33381[(13)] = inst_33197);

(statearr_33381[(14)] = inst_33198);

(statearr_33381[(16)] = inst_33199);

(statearr_33381[(17)] = inst_33200);

return statearr_33381;
})();
var statearr_33382_33447 = state_33320__$1;
(statearr_33382_33447[(2)] = null);

(statearr_33382_33447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (14))){
var state_33320__$1 = state_33320;
var statearr_33383_33448 = state_33320__$1;
(statearr_33383_33448[(2)] = null);

(statearr_33383_33448[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (45))){
var inst_33310 = (state_33320[(2)]);
var state_33320__$1 = state_33320;
var statearr_33384_33449 = state_33320__$1;
(statearr_33384_33449[(2)] = inst_33310);

(statearr_33384_33449[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (26))){
var inst_33252 = (state_33320[(29)]);
var inst_33306 = (state_33320[(2)]);
var inst_33307 = cljs.core.seq.call(null,inst_33252);
var state_33320__$1 = (function (){var statearr_33385 = state_33320;
(statearr_33385[(31)] = inst_33306);

return statearr_33385;
})();
if(inst_33307){
var statearr_33386_33450 = state_33320__$1;
(statearr_33386_33450[(1)] = (42));

} else {
var statearr_33387_33451 = state_33320__$1;
(statearr_33387_33451[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (16))){
var inst_33219 = (state_33320[(7)]);
var inst_33221 = cljs.core.chunked_seq_QMARK_.call(null,inst_33219);
var state_33320__$1 = state_33320;
if(inst_33221){
var statearr_33388_33452 = state_33320__$1;
(statearr_33388_33452[(1)] = (19));

} else {
var statearr_33389_33453 = state_33320__$1;
(statearr_33389_33453[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (38))){
var inst_33299 = (state_33320[(2)]);
var state_33320__$1 = state_33320;
var statearr_33390_33454 = state_33320__$1;
(statearr_33390_33454[(2)] = inst_33299);

(statearr_33390_33454[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (30))){
var state_33320__$1 = state_33320;
var statearr_33391_33455 = state_33320__$1;
(statearr_33391_33455[(2)] = null);

(statearr_33391_33455[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (10))){
var inst_33198 = (state_33320[(14)]);
var inst_33200 = (state_33320[(17)]);
var inst_33208 = cljs.core._nth.call(null,inst_33198,inst_33200);
var inst_33209 = cljs.core.nth.call(null,inst_33208,(0),null);
var inst_33210 = cljs.core.nth.call(null,inst_33208,(1),null);
var state_33320__$1 = (function (){var statearr_33392 = state_33320;
(statearr_33392[(26)] = inst_33209);

return statearr_33392;
})();
if(cljs.core.truth_(inst_33210)){
var statearr_33393_33456 = state_33320__$1;
(statearr_33393_33456[(1)] = (13));

} else {
var statearr_33394_33457 = state_33320__$1;
(statearr_33394_33457[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (18))){
var inst_33245 = (state_33320[(2)]);
var state_33320__$1 = state_33320;
var statearr_33395_33458 = state_33320__$1;
(statearr_33395_33458[(2)] = inst_33245);

(statearr_33395_33458[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (42))){
var state_33320__$1 = state_33320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33320__$1,(45),dchan);
} else {
if((state_val_33321 === (37))){
var inst_33288 = (state_33320[(23)]);
var inst_33279 = (state_33320[(25)]);
var inst_33188 = (state_33320[(12)]);
var inst_33288__$1 = cljs.core.first.call(null,inst_33279);
var inst_33289 = cljs.core.async.put_BANG_.call(null,inst_33288__$1,inst_33188,done);
var state_33320__$1 = (function (){var statearr_33396 = state_33320;
(statearr_33396[(23)] = inst_33288__$1);

return statearr_33396;
})();
if(cljs.core.truth_(inst_33289)){
var statearr_33397_33459 = state_33320__$1;
(statearr_33397_33459[(1)] = (39));

} else {
var statearr_33398_33460 = state_33320__$1;
(statearr_33398_33460[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (8))){
var inst_33199 = (state_33320[(16)]);
var inst_33200 = (state_33320[(17)]);
var inst_33202 = (inst_33200 < inst_33199);
var inst_33203 = inst_33202;
var state_33320__$1 = state_33320;
if(cljs.core.truth_(inst_33203)){
var statearr_33399_33461 = state_33320__$1;
(statearr_33399_33461[(1)] = (10));

} else {
var statearr_33400_33462 = state_33320__$1;
(statearr_33400_33462[(1)] = (11));

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
});})(c__32055__auto___33408,cs,m,dchan,dctr,done))
;
return ((function (switch__31943__auto__,c__32055__auto___33408,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31944__auto__ = null;
var cljs$core$async$mult_$_state_machine__31944__auto____0 = (function (){
var statearr_33404 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33404[(0)] = cljs$core$async$mult_$_state_machine__31944__auto__);

(statearr_33404[(1)] = (1));

return statearr_33404;
});
var cljs$core$async$mult_$_state_machine__31944__auto____1 = (function (state_33320){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_33320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e33405){if((e33405 instanceof Object)){
var ex__31947__auto__ = e33405;
var statearr_33406_33463 = state_33320;
(statearr_33406_33463[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33464 = state_33320;
state_33320 = G__33464;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31944__auto__ = function(state_33320){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31944__auto____1.call(this,state_33320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31944__auto____0;
cljs$core$async$mult_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31944__auto____1;
return cljs$core$async$mult_$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32055__auto___33408,cs,m,dchan,dctr,done))
})();
var state__32057__auto__ = (function (){var statearr_33407 = f__32056__auto__.call(null);
(statearr_33407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32055__auto___33408);

return statearr_33407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32057__auto__);
});})(c__32055__auto___33408,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args33465 = [];
var len__27500__auto___33468 = arguments.length;
var i__27501__auto___33469 = (0);
while(true){
if((i__27501__auto___33469 < len__27500__auto___33468)){
args33465.push((arguments[i__27501__auto___33469]));

var G__33470 = (i__27501__auto___33469 + (1));
i__27501__auto___33469 = G__33470;
continue;
} else {
}
break;
}

var G__33467 = args33465.length;
switch (G__33467) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33465.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__27088__auto__ = (((m == null))?null:m);
var m__27089__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__27088__auto__)]);
if(!((m__27089__auto__ == null))){
return m__27089__auto__.call(null,m,ch);
} else {
var m__27089__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__27089__auto____$1 == null))){
return m__27089__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__27088__auto__ = (((m == null))?null:m);
var m__27089__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__27088__auto__)]);
if(!((m__27089__auto__ == null))){
return m__27089__auto__.call(null,m,ch);
} else {
var m__27089__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__27089__auto____$1 == null))){
return m__27089__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__27088__auto__ = (((m == null))?null:m);
var m__27089__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__27088__auto__)]);
if(!((m__27089__auto__ == null))){
return m__27089__auto__.call(null,m);
} else {
var m__27089__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__27089__auto____$1 == null))){
return m__27089__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__27088__auto__ = (((m == null))?null:m);
var m__27089__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__27088__auto__)]);
if(!((m__27089__auto__ == null))){
return m__27089__auto__.call(null,m,state_map);
} else {
var m__27089__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__27089__auto____$1 == null))){
return m__27089__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__27088__auto__ = (((m == null))?null:m);
var m__27089__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__27088__auto__)]);
if(!((m__27089__auto__ == null))){
return m__27089__auto__.call(null,m,mode);
} else {
var m__27089__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__27089__auto____$1 == null))){
return m__27089__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__27507__auto__ = [];
var len__27500__auto___33482 = arguments.length;
var i__27501__auto___33483 = (0);
while(true){
if((i__27501__auto___33483 < len__27500__auto___33482)){
args__27507__auto__.push((arguments[i__27501__auto___33483]));

var G__33484 = (i__27501__auto___33483 + (1));
i__27501__auto___33483 = G__33484;
continue;
} else {
}
break;
}

var argseq__27508__auto__ = ((((3) < args__27507__auto__.length))?(new cljs.core.IndexedSeq(args__27507__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27508__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33476){
var map__33477 = p__33476;
var map__33477__$1 = ((((!((map__33477 == null)))?((((map__33477.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33477.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33477):map__33477);
var opts = map__33477__$1;
var statearr_33479_33485 = state;
(statearr_33479_33485[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__33477,map__33477__$1,opts){
return (function (val){
var statearr_33480_33486 = state;
(statearr_33480_33486[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33477,map__33477__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_33481_33487 = state;
(statearr_33481_33487[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33472){
var G__33473 = cljs.core.first.call(null,seq33472);
var seq33472__$1 = cljs.core.next.call(null,seq33472);
var G__33474 = cljs.core.first.call(null,seq33472__$1);
var seq33472__$2 = cljs.core.next.call(null,seq33472__$1);
var G__33475 = cljs.core.first.call(null,seq33472__$2);
var seq33472__$3 = cljs.core.next.call(null,seq33472__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33473,G__33474,G__33475,seq33472__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async33653 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33653 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33654){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33654 = meta33654;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33655,meta33654__$1){
var self__ = this;
var _33655__$1 = this;
return (new cljs.core.async.t_cljs$core$async33653(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33654__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33653.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33655){
var self__ = this;
var _33655__$1 = this;
return self__.meta33654;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33653.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async33653.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33653.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async33653.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33653.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33653.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33653.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33653.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33653.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33654","meta33654",749697966,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33653.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33653.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33653";

cljs.core.async.t_cljs$core$async33653.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27031__auto__,writer__27032__auto__,opt__27033__auto__){
return cljs.core._write.call(null,writer__27032__auto__,"cljs.core.async/t_cljs$core$async33653");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async33653 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33653(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33654){
return (new cljs.core.async.t_cljs$core$async33653(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33654));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33653(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32055__auto___33818 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32055__auto___33818,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32056__auto__ = (function (){var switch__31943__auto__ = ((function (c__32055__auto___33818,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33755){
var state_val_33756 = (state_33755[(1)]);
if((state_val_33756 === (7))){
var inst_33671 = (state_33755[(2)]);
var state_33755__$1 = state_33755;
var statearr_33757_33819 = state_33755__$1;
(statearr_33757_33819[(2)] = inst_33671);

(statearr_33757_33819[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (20))){
var inst_33683 = (state_33755[(7)]);
var state_33755__$1 = state_33755;
var statearr_33758_33820 = state_33755__$1;
(statearr_33758_33820[(2)] = inst_33683);

(statearr_33758_33820[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (27))){
var state_33755__$1 = state_33755;
var statearr_33759_33821 = state_33755__$1;
(statearr_33759_33821[(2)] = null);

(statearr_33759_33821[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (1))){
var inst_33659 = (state_33755[(8)]);
var inst_33659__$1 = calc_state.call(null);
var inst_33661 = (inst_33659__$1 == null);
var inst_33662 = cljs.core.not.call(null,inst_33661);
var state_33755__$1 = (function (){var statearr_33760 = state_33755;
(statearr_33760[(8)] = inst_33659__$1);

return statearr_33760;
})();
if(inst_33662){
var statearr_33761_33822 = state_33755__$1;
(statearr_33761_33822[(1)] = (2));

} else {
var statearr_33762_33823 = state_33755__$1;
(statearr_33762_33823[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (24))){
var inst_33715 = (state_33755[(9)]);
var inst_33706 = (state_33755[(10)]);
var inst_33729 = (state_33755[(11)]);
var inst_33729__$1 = inst_33706.call(null,inst_33715);
var state_33755__$1 = (function (){var statearr_33763 = state_33755;
(statearr_33763[(11)] = inst_33729__$1);

return statearr_33763;
})();
if(cljs.core.truth_(inst_33729__$1)){
var statearr_33764_33824 = state_33755__$1;
(statearr_33764_33824[(1)] = (29));

} else {
var statearr_33765_33825 = state_33755__$1;
(statearr_33765_33825[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (4))){
var inst_33674 = (state_33755[(2)]);
var state_33755__$1 = state_33755;
if(cljs.core.truth_(inst_33674)){
var statearr_33766_33826 = state_33755__$1;
(statearr_33766_33826[(1)] = (8));

} else {
var statearr_33767_33827 = state_33755__$1;
(statearr_33767_33827[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (15))){
var inst_33700 = (state_33755[(2)]);
var state_33755__$1 = state_33755;
if(cljs.core.truth_(inst_33700)){
var statearr_33768_33828 = state_33755__$1;
(statearr_33768_33828[(1)] = (19));

} else {
var statearr_33769_33829 = state_33755__$1;
(statearr_33769_33829[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (21))){
var inst_33705 = (state_33755[(12)]);
var inst_33705__$1 = (state_33755[(2)]);
var inst_33706 = cljs.core.get.call(null,inst_33705__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33707 = cljs.core.get.call(null,inst_33705__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33708 = cljs.core.get.call(null,inst_33705__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33755__$1 = (function (){var statearr_33770 = state_33755;
(statearr_33770[(10)] = inst_33706);

(statearr_33770[(12)] = inst_33705__$1);

(statearr_33770[(13)] = inst_33707);

return statearr_33770;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33755__$1,(22),inst_33708);
} else {
if((state_val_33756 === (31))){
var inst_33737 = (state_33755[(2)]);
var state_33755__$1 = state_33755;
if(cljs.core.truth_(inst_33737)){
var statearr_33771_33830 = state_33755__$1;
(statearr_33771_33830[(1)] = (32));

} else {
var statearr_33772_33831 = state_33755__$1;
(statearr_33772_33831[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (32))){
var inst_33714 = (state_33755[(14)]);
var state_33755__$1 = state_33755;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33755__$1,(35),out,inst_33714);
} else {
if((state_val_33756 === (33))){
var inst_33705 = (state_33755[(12)]);
var inst_33683 = inst_33705;
var state_33755__$1 = (function (){var statearr_33773 = state_33755;
(statearr_33773[(7)] = inst_33683);

return statearr_33773;
})();
var statearr_33774_33832 = state_33755__$1;
(statearr_33774_33832[(2)] = null);

(statearr_33774_33832[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (13))){
var inst_33683 = (state_33755[(7)]);
var inst_33690 = inst_33683.cljs$lang$protocol_mask$partition0$;
var inst_33691 = (inst_33690 & (64));
var inst_33692 = inst_33683.cljs$core$ISeq$;
var inst_33693 = (inst_33691) || (inst_33692);
var state_33755__$1 = state_33755;
if(cljs.core.truth_(inst_33693)){
var statearr_33775_33833 = state_33755__$1;
(statearr_33775_33833[(1)] = (16));

} else {
var statearr_33776_33834 = state_33755__$1;
(statearr_33776_33834[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (22))){
var inst_33715 = (state_33755[(9)]);
var inst_33714 = (state_33755[(14)]);
var inst_33713 = (state_33755[(2)]);
var inst_33714__$1 = cljs.core.nth.call(null,inst_33713,(0),null);
var inst_33715__$1 = cljs.core.nth.call(null,inst_33713,(1),null);
var inst_33716 = (inst_33714__$1 == null);
var inst_33717 = cljs.core._EQ_.call(null,inst_33715__$1,change);
var inst_33718 = (inst_33716) || (inst_33717);
var state_33755__$1 = (function (){var statearr_33777 = state_33755;
(statearr_33777[(9)] = inst_33715__$1);

(statearr_33777[(14)] = inst_33714__$1);

return statearr_33777;
})();
if(cljs.core.truth_(inst_33718)){
var statearr_33778_33835 = state_33755__$1;
(statearr_33778_33835[(1)] = (23));

} else {
var statearr_33779_33836 = state_33755__$1;
(statearr_33779_33836[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (36))){
var inst_33705 = (state_33755[(12)]);
var inst_33683 = inst_33705;
var state_33755__$1 = (function (){var statearr_33780 = state_33755;
(statearr_33780[(7)] = inst_33683);

return statearr_33780;
})();
var statearr_33781_33837 = state_33755__$1;
(statearr_33781_33837[(2)] = null);

(statearr_33781_33837[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (29))){
var inst_33729 = (state_33755[(11)]);
var state_33755__$1 = state_33755;
var statearr_33782_33838 = state_33755__$1;
(statearr_33782_33838[(2)] = inst_33729);

(statearr_33782_33838[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (6))){
var state_33755__$1 = state_33755;
var statearr_33783_33839 = state_33755__$1;
(statearr_33783_33839[(2)] = false);

(statearr_33783_33839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (28))){
var inst_33725 = (state_33755[(2)]);
var inst_33726 = calc_state.call(null);
var inst_33683 = inst_33726;
var state_33755__$1 = (function (){var statearr_33784 = state_33755;
(statearr_33784[(15)] = inst_33725);

(statearr_33784[(7)] = inst_33683);

return statearr_33784;
})();
var statearr_33785_33840 = state_33755__$1;
(statearr_33785_33840[(2)] = null);

(statearr_33785_33840[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (25))){
var inst_33751 = (state_33755[(2)]);
var state_33755__$1 = state_33755;
var statearr_33786_33841 = state_33755__$1;
(statearr_33786_33841[(2)] = inst_33751);

(statearr_33786_33841[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (34))){
var inst_33749 = (state_33755[(2)]);
var state_33755__$1 = state_33755;
var statearr_33787_33842 = state_33755__$1;
(statearr_33787_33842[(2)] = inst_33749);

(statearr_33787_33842[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (17))){
var state_33755__$1 = state_33755;
var statearr_33788_33843 = state_33755__$1;
(statearr_33788_33843[(2)] = false);

(statearr_33788_33843[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (3))){
var state_33755__$1 = state_33755;
var statearr_33789_33844 = state_33755__$1;
(statearr_33789_33844[(2)] = false);

(statearr_33789_33844[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (12))){
var inst_33753 = (state_33755[(2)]);
var state_33755__$1 = state_33755;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33755__$1,inst_33753);
} else {
if((state_val_33756 === (2))){
var inst_33659 = (state_33755[(8)]);
var inst_33664 = inst_33659.cljs$lang$protocol_mask$partition0$;
var inst_33665 = (inst_33664 & (64));
var inst_33666 = inst_33659.cljs$core$ISeq$;
var inst_33667 = (inst_33665) || (inst_33666);
var state_33755__$1 = state_33755;
if(cljs.core.truth_(inst_33667)){
var statearr_33790_33845 = state_33755__$1;
(statearr_33790_33845[(1)] = (5));

} else {
var statearr_33791_33846 = state_33755__$1;
(statearr_33791_33846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (23))){
var inst_33714 = (state_33755[(14)]);
var inst_33720 = (inst_33714 == null);
var state_33755__$1 = state_33755;
if(cljs.core.truth_(inst_33720)){
var statearr_33792_33847 = state_33755__$1;
(statearr_33792_33847[(1)] = (26));

} else {
var statearr_33793_33848 = state_33755__$1;
(statearr_33793_33848[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (35))){
var inst_33740 = (state_33755[(2)]);
var state_33755__$1 = state_33755;
if(cljs.core.truth_(inst_33740)){
var statearr_33794_33849 = state_33755__$1;
(statearr_33794_33849[(1)] = (36));

} else {
var statearr_33795_33850 = state_33755__$1;
(statearr_33795_33850[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (19))){
var inst_33683 = (state_33755[(7)]);
var inst_33702 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33683);
var state_33755__$1 = state_33755;
var statearr_33796_33851 = state_33755__$1;
(statearr_33796_33851[(2)] = inst_33702);

(statearr_33796_33851[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (11))){
var inst_33683 = (state_33755[(7)]);
var inst_33687 = (inst_33683 == null);
var inst_33688 = cljs.core.not.call(null,inst_33687);
var state_33755__$1 = state_33755;
if(inst_33688){
var statearr_33797_33852 = state_33755__$1;
(statearr_33797_33852[(1)] = (13));

} else {
var statearr_33798_33853 = state_33755__$1;
(statearr_33798_33853[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (9))){
var inst_33659 = (state_33755[(8)]);
var state_33755__$1 = state_33755;
var statearr_33799_33854 = state_33755__$1;
(statearr_33799_33854[(2)] = inst_33659);

(statearr_33799_33854[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (5))){
var state_33755__$1 = state_33755;
var statearr_33800_33855 = state_33755__$1;
(statearr_33800_33855[(2)] = true);

(statearr_33800_33855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (14))){
var state_33755__$1 = state_33755;
var statearr_33801_33856 = state_33755__$1;
(statearr_33801_33856[(2)] = false);

(statearr_33801_33856[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (26))){
var inst_33715 = (state_33755[(9)]);
var inst_33722 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33715);
var state_33755__$1 = state_33755;
var statearr_33802_33857 = state_33755__$1;
(statearr_33802_33857[(2)] = inst_33722);

(statearr_33802_33857[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (16))){
var state_33755__$1 = state_33755;
var statearr_33803_33858 = state_33755__$1;
(statearr_33803_33858[(2)] = true);

(statearr_33803_33858[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (38))){
var inst_33745 = (state_33755[(2)]);
var state_33755__$1 = state_33755;
var statearr_33804_33859 = state_33755__$1;
(statearr_33804_33859[(2)] = inst_33745);

(statearr_33804_33859[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (30))){
var inst_33715 = (state_33755[(9)]);
var inst_33706 = (state_33755[(10)]);
var inst_33707 = (state_33755[(13)]);
var inst_33732 = cljs.core.empty_QMARK_.call(null,inst_33706);
var inst_33733 = inst_33707.call(null,inst_33715);
var inst_33734 = cljs.core.not.call(null,inst_33733);
var inst_33735 = (inst_33732) && (inst_33734);
var state_33755__$1 = state_33755;
var statearr_33805_33860 = state_33755__$1;
(statearr_33805_33860[(2)] = inst_33735);

(statearr_33805_33860[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (10))){
var inst_33659 = (state_33755[(8)]);
var inst_33679 = (state_33755[(2)]);
var inst_33680 = cljs.core.get.call(null,inst_33679,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33681 = cljs.core.get.call(null,inst_33679,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33682 = cljs.core.get.call(null,inst_33679,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33683 = inst_33659;
var state_33755__$1 = (function (){var statearr_33806 = state_33755;
(statearr_33806[(16)] = inst_33681);

(statearr_33806[(17)] = inst_33682);

(statearr_33806[(18)] = inst_33680);

(statearr_33806[(7)] = inst_33683);

return statearr_33806;
})();
var statearr_33807_33861 = state_33755__$1;
(statearr_33807_33861[(2)] = null);

(statearr_33807_33861[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (18))){
var inst_33697 = (state_33755[(2)]);
var state_33755__$1 = state_33755;
var statearr_33808_33862 = state_33755__$1;
(statearr_33808_33862[(2)] = inst_33697);

(statearr_33808_33862[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (37))){
var state_33755__$1 = state_33755;
var statearr_33809_33863 = state_33755__$1;
(statearr_33809_33863[(2)] = null);

(statearr_33809_33863[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (8))){
var inst_33659 = (state_33755[(8)]);
var inst_33676 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33659);
var state_33755__$1 = state_33755;
var statearr_33810_33864 = state_33755__$1;
(statearr_33810_33864[(2)] = inst_33676);

(statearr_33810_33864[(1)] = (10));


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
});})(c__32055__auto___33818,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31943__auto__,c__32055__auto___33818,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31944__auto__ = null;
var cljs$core$async$mix_$_state_machine__31944__auto____0 = (function (){
var statearr_33814 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33814[(0)] = cljs$core$async$mix_$_state_machine__31944__auto__);

(statearr_33814[(1)] = (1));

return statearr_33814;
});
var cljs$core$async$mix_$_state_machine__31944__auto____1 = (function (state_33755){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_33755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e33815){if((e33815 instanceof Object)){
var ex__31947__auto__ = e33815;
var statearr_33816_33865 = state_33755;
(statearr_33816_33865[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33866 = state_33755;
state_33755 = G__33866;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31944__auto__ = function(state_33755){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31944__auto____1.call(this,state_33755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31944__auto____0;
cljs$core$async$mix_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31944__auto____1;
return cljs$core$async$mix_$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32055__auto___33818,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32057__auto__ = (function (){var statearr_33817 = f__32056__auto__.call(null);
(statearr_33817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32055__auto___33818);

return statearr_33817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32057__auto__);
});})(c__32055__auto___33818,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__27088__auto__ = (((p == null))?null:p);
var m__27089__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__27088__auto__)]);
if(!((m__27089__auto__ == null))){
return m__27089__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__27089__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__27089__auto____$1 == null))){
return m__27089__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__27088__auto__ = (((p == null))?null:p);
var m__27089__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__27088__auto__)]);
if(!((m__27089__auto__ == null))){
return m__27089__auto__.call(null,p,v,ch);
} else {
var m__27089__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__27089__auto____$1 == null))){
return m__27089__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args33867 = [];
var len__27500__auto___33870 = arguments.length;
var i__27501__auto___33871 = (0);
while(true){
if((i__27501__auto___33871 < len__27500__auto___33870)){
args33867.push((arguments[i__27501__auto___33871]));

var G__33872 = (i__27501__auto___33871 + (1));
i__27501__auto___33871 = G__33872;
continue;
} else {
}
break;
}

var G__33869 = args33867.length;
switch (G__33869) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33867.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__27088__auto__ = (((p == null))?null:p);
var m__27089__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27088__auto__)]);
if(!((m__27089__auto__ == null))){
return m__27089__auto__.call(null,p);
} else {
var m__27089__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27089__auto____$1 == null))){
return m__27089__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__27088__auto__ = (((p == null))?null:p);
var m__27089__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27088__auto__)]);
if(!((m__27089__auto__ == null))){
return m__27089__auto__.call(null,p,v);
} else {
var m__27089__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27089__auto____$1 == null))){
return m__27089__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args33875 = [];
var len__27500__auto___34000 = arguments.length;
var i__27501__auto___34001 = (0);
while(true){
if((i__27501__auto___34001 < len__27500__auto___34000)){
args33875.push((arguments[i__27501__auto___34001]));

var G__34002 = (i__27501__auto___34001 + (1));
i__27501__auto___34001 = G__34002;
continue;
} else {
}
break;
}

var G__33877 = args33875.length;
switch (G__33877) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33875.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__26425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__26425__auto__)){
return or__26425__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__26425__auto__,mults){
return (function (p1__33874_SHARP_){
if(cljs.core.truth_(p1__33874_SHARP_.call(null,topic))){
return p1__33874_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33874_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__26425__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async33878 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33878 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33879){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33879 = meta33879;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33878.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33880,meta33879__$1){
var self__ = this;
var _33880__$1 = this;
return (new cljs.core.async.t_cljs$core$async33878(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33879__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33878.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33880){
var self__ = this;
var _33880__$1 = this;
return self__.meta33879;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33878.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async33878.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33878.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async33878.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33878.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33878.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33878.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33878.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33879","meta33879",1267596450,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33878.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33878.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33878";

cljs.core.async.t_cljs$core$async33878.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27031__auto__,writer__27032__auto__,opt__27033__auto__){
return cljs.core._write.call(null,writer__27032__auto__,"cljs.core.async/t_cljs$core$async33878");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async33878 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async33878(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33879){
return (new cljs.core.async.t_cljs$core$async33878(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33879));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async33878(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32055__auto___34004 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32055__auto___34004,mults,ensure_mult,p){
return (function (){
var f__32056__auto__ = (function (){var switch__31943__auto__ = ((function (c__32055__auto___34004,mults,ensure_mult,p){
return (function (state_33952){
var state_val_33953 = (state_33952[(1)]);
if((state_val_33953 === (7))){
var inst_33948 = (state_33952[(2)]);
var state_33952__$1 = state_33952;
var statearr_33954_34005 = state_33952__$1;
(statearr_33954_34005[(2)] = inst_33948);

(statearr_33954_34005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (20))){
var state_33952__$1 = state_33952;
var statearr_33955_34006 = state_33952__$1;
(statearr_33955_34006[(2)] = null);

(statearr_33955_34006[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (1))){
var state_33952__$1 = state_33952;
var statearr_33956_34007 = state_33952__$1;
(statearr_33956_34007[(2)] = null);

(statearr_33956_34007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (24))){
var inst_33931 = (state_33952[(7)]);
var inst_33940 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33931);
var state_33952__$1 = state_33952;
var statearr_33957_34008 = state_33952__$1;
(statearr_33957_34008[(2)] = inst_33940);

(statearr_33957_34008[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (4))){
var inst_33883 = (state_33952[(8)]);
var inst_33883__$1 = (state_33952[(2)]);
var inst_33884 = (inst_33883__$1 == null);
var state_33952__$1 = (function (){var statearr_33958 = state_33952;
(statearr_33958[(8)] = inst_33883__$1);

return statearr_33958;
})();
if(cljs.core.truth_(inst_33884)){
var statearr_33959_34009 = state_33952__$1;
(statearr_33959_34009[(1)] = (5));

} else {
var statearr_33960_34010 = state_33952__$1;
(statearr_33960_34010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (15))){
var inst_33925 = (state_33952[(2)]);
var state_33952__$1 = state_33952;
var statearr_33961_34011 = state_33952__$1;
(statearr_33961_34011[(2)] = inst_33925);

(statearr_33961_34011[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (21))){
var inst_33945 = (state_33952[(2)]);
var state_33952__$1 = (function (){var statearr_33962 = state_33952;
(statearr_33962[(9)] = inst_33945);

return statearr_33962;
})();
var statearr_33963_34012 = state_33952__$1;
(statearr_33963_34012[(2)] = null);

(statearr_33963_34012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (13))){
var inst_33907 = (state_33952[(10)]);
var inst_33909 = cljs.core.chunked_seq_QMARK_.call(null,inst_33907);
var state_33952__$1 = state_33952;
if(inst_33909){
var statearr_33964_34013 = state_33952__$1;
(statearr_33964_34013[(1)] = (16));

} else {
var statearr_33965_34014 = state_33952__$1;
(statearr_33965_34014[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (22))){
var inst_33937 = (state_33952[(2)]);
var state_33952__$1 = state_33952;
if(cljs.core.truth_(inst_33937)){
var statearr_33966_34015 = state_33952__$1;
(statearr_33966_34015[(1)] = (23));

} else {
var statearr_33967_34016 = state_33952__$1;
(statearr_33967_34016[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (6))){
var inst_33883 = (state_33952[(8)]);
var inst_33931 = (state_33952[(7)]);
var inst_33933 = (state_33952[(11)]);
var inst_33931__$1 = topic_fn.call(null,inst_33883);
var inst_33932 = cljs.core.deref.call(null,mults);
var inst_33933__$1 = cljs.core.get.call(null,inst_33932,inst_33931__$1);
var state_33952__$1 = (function (){var statearr_33968 = state_33952;
(statearr_33968[(7)] = inst_33931__$1);

(statearr_33968[(11)] = inst_33933__$1);

return statearr_33968;
})();
if(cljs.core.truth_(inst_33933__$1)){
var statearr_33969_34017 = state_33952__$1;
(statearr_33969_34017[(1)] = (19));

} else {
var statearr_33970_34018 = state_33952__$1;
(statearr_33970_34018[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (25))){
var inst_33942 = (state_33952[(2)]);
var state_33952__$1 = state_33952;
var statearr_33971_34019 = state_33952__$1;
(statearr_33971_34019[(2)] = inst_33942);

(statearr_33971_34019[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (17))){
var inst_33907 = (state_33952[(10)]);
var inst_33916 = cljs.core.first.call(null,inst_33907);
var inst_33917 = cljs.core.async.muxch_STAR_.call(null,inst_33916);
var inst_33918 = cljs.core.async.close_BANG_.call(null,inst_33917);
var inst_33919 = cljs.core.next.call(null,inst_33907);
var inst_33893 = inst_33919;
var inst_33894 = null;
var inst_33895 = (0);
var inst_33896 = (0);
var state_33952__$1 = (function (){var statearr_33972 = state_33952;
(statearr_33972[(12)] = inst_33918);

(statearr_33972[(13)] = inst_33893);

(statearr_33972[(14)] = inst_33894);

(statearr_33972[(15)] = inst_33895);

(statearr_33972[(16)] = inst_33896);

return statearr_33972;
})();
var statearr_33973_34020 = state_33952__$1;
(statearr_33973_34020[(2)] = null);

(statearr_33973_34020[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (3))){
var inst_33950 = (state_33952[(2)]);
var state_33952__$1 = state_33952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33952__$1,inst_33950);
} else {
if((state_val_33953 === (12))){
var inst_33927 = (state_33952[(2)]);
var state_33952__$1 = state_33952;
var statearr_33974_34021 = state_33952__$1;
(statearr_33974_34021[(2)] = inst_33927);

(statearr_33974_34021[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (2))){
var state_33952__$1 = state_33952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33952__$1,(4),ch);
} else {
if((state_val_33953 === (23))){
var state_33952__$1 = state_33952;
var statearr_33975_34022 = state_33952__$1;
(statearr_33975_34022[(2)] = null);

(statearr_33975_34022[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (19))){
var inst_33883 = (state_33952[(8)]);
var inst_33933 = (state_33952[(11)]);
var inst_33935 = cljs.core.async.muxch_STAR_.call(null,inst_33933);
var state_33952__$1 = state_33952;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33952__$1,(22),inst_33935,inst_33883);
} else {
if((state_val_33953 === (11))){
var inst_33893 = (state_33952[(13)]);
var inst_33907 = (state_33952[(10)]);
var inst_33907__$1 = cljs.core.seq.call(null,inst_33893);
var state_33952__$1 = (function (){var statearr_33976 = state_33952;
(statearr_33976[(10)] = inst_33907__$1);

return statearr_33976;
})();
if(inst_33907__$1){
var statearr_33977_34023 = state_33952__$1;
(statearr_33977_34023[(1)] = (13));

} else {
var statearr_33978_34024 = state_33952__$1;
(statearr_33978_34024[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (9))){
var inst_33929 = (state_33952[(2)]);
var state_33952__$1 = state_33952;
var statearr_33979_34025 = state_33952__$1;
(statearr_33979_34025[(2)] = inst_33929);

(statearr_33979_34025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (5))){
var inst_33890 = cljs.core.deref.call(null,mults);
var inst_33891 = cljs.core.vals.call(null,inst_33890);
var inst_33892 = cljs.core.seq.call(null,inst_33891);
var inst_33893 = inst_33892;
var inst_33894 = null;
var inst_33895 = (0);
var inst_33896 = (0);
var state_33952__$1 = (function (){var statearr_33980 = state_33952;
(statearr_33980[(13)] = inst_33893);

(statearr_33980[(14)] = inst_33894);

(statearr_33980[(15)] = inst_33895);

(statearr_33980[(16)] = inst_33896);

return statearr_33980;
})();
var statearr_33981_34026 = state_33952__$1;
(statearr_33981_34026[(2)] = null);

(statearr_33981_34026[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (14))){
var state_33952__$1 = state_33952;
var statearr_33985_34027 = state_33952__$1;
(statearr_33985_34027[(2)] = null);

(statearr_33985_34027[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (16))){
var inst_33907 = (state_33952[(10)]);
var inst_33911 = cljs.core.chunk_first.call(null,inst_33907);
var inst_33912 = cljs.core.chunk_rest.call(null,inst_33907);
var inst_33913 = cljs.core.count.call(null,inst_33911);
var inst_33893 = inst_33912;
var inst_33894 = inst_33911;
var inst_33895 = inst_33913;
var inst_33896 = (0);
var state_33952__$1 = (function (){var statearr_33986 = state_33952;
(statearr_33986[(13)] = inst_33893);

(statearr_33986[(14)] = inst_33894);

(statearr_33986[(15)] = inst_33895);

(statearr_33986[(16)] = inst_33896);

return statearr_33986;
})();
var statearr_33987_34028 = state_33952__$1;
(statearr_33987_34028[(2)] = null);

(statearr_33987_34028[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (10))){
var inst_33893 = (state_33952[(13)]);
var inst_33894 = (state_33952[(14)]);
var inst_33895 = (state_33952[(15)]);
var inst_33896 = (state_33952[(16)]);
var inst_33901 = cljs.core._nth.call(null,inst_33894,inst_33896);
var inst_33902 = cljs.core.async.muxch_STAR_.call(null,inst_33901);
var inst_33903 = cljs.core.async.close_BANG_.call(null,inst_33902);
var inst_33904 = (inst_33896 + (1));
var tmp33982 = inst_33893;
var tmp33983 = inst_33894;
var tmp33984 = inst_33895;
var inst_33893__$1 = tmp33982;
var inst_33894__$1 = tmp33983;
var inst_33895__$1 = tmp33984;
var inst_33896__$1 = inst_33904;
var state_33952__$1 = (function (){var statearr_33988 = state_33952;
(statearr_33988[(13)] = inst_33893__$1);

(statearr_33988[(14)] = inst_33894__$1);

(statearr_33988[(15)] = inst_33895__$1);

(statearr_33988[(16)] = inst_33896__$1);

(statearr_33988[(17)] = inst_33903);

return statearr_33988;
})();
var statearr_33989_34029 = state_33952__$1;
(statearr_33989_34029[(2)] = null);

(statearr_33989_34029[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (18))){
var inst_33922 = (state_33952[(2)]);
var state_33952__$1 = state_33952;
var statearr_33990_34030 = state_33952__$1;
(statearr_33990_34030[(2)] = inst_33922);

(statearr_33990_34030[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (8))){
var inst_33895 = (state_33952[(15)]);
var inst_33896 = (state_33952[(16)]);
var inst_33898 = (inst_33896 < inst_33895);
var inst_33899 = inst_33898;
var state_33952__$1 = state_33952;
if(cljs.core.truth_(inst_33899)){
var statearr_33991_34031 = state_33952__$1;
(statearr_33991_34031[(1)] = (10));

} else {
var statearr_33992_34032 = state_33952__$1;
(statearr_33992_34032[(1)] = (11));

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
});})(c__32055__auto___34004,mults,ensure_mult,p))
;
return ((function (switch__31943__auto__,c__32055__auto___34004,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31944__auto__ = null;
var cljs$core$async$state_machine__31944__auto____0 = (function (){
var statearr_33996 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33996[(0)] = cljs$core$async$state_machine__31944__auto__);

(statearr_33996[(1)] = (1));

return statearr_33996;
});
var cljs$core$async$state_machine__31944__auto____1 = (function (state_33952){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_33952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e33997){if((e33997 instanceof Object)){
var ex__31947__auto__ = e33997;
var statearr_33998_34033 = state_33952;
(statearr_33998_34033[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34034 = state_33952;
state_33952 = G__34034;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$state_machine__31944__auto__ = function(state_33952){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31944__auto____1.call(this,state_33952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31944__auto____0;
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31944__auto____1;
return cljs$core$async$state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32055__auto___34004,mults,ensure_mult,p))
})();
var state__32057__auto__ = (function (){var statearr_33999 = f__32056__auto__.call(null);
(statearr_33999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32055__auto___34004);

return statearr_33999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32057__auto__);
});})(c__32055__auto___34004,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args34035 = [];
var len__27500__auto___34038 = arguments.length;
var i__27501__auto___34039 = (0);
while(true){
if((i__27501__auto___34039 < len__27500__auto___34038)){
args34035.push((arguments[i__27501__auto___34039]));

var G__34040 = (i__27501__auto___34039 + (1));
i__27501__auto___34039 = G__34040;
continue;
} else {
}
break;
}

var G__34037 = args34035.length;
switch (G__34037) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34035.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args34042 = [];
var len__27500__auto___34045 = arguments.length;
var i__27501__auto___34046 = (0);
while(true){
if((i__27501__auto___34046 < len__27500__auto___34045)){
args34042.push((arguments[i__27501__auto___34046]));

var G__34047 = (i__27501__auto___34046 + (1));
i__27501__auto___34046 = G__34047;
continue;
} else {
}
break;
}

var G__34044 = args34042.length;
switch (G__34044) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34042.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args34049 = [];
var len__27500__auto___34120 = arguments.length;
var i__27501__auto___34121 = (0);
while(true){
if((i__27501__auto___34121 < len__27500__auto___34120)){
args34049.push((arguments[i__27501__auto___34121]));

var G__34122 = (i__27501__auto___34121 + (1));
i__27501__auto___34121 = G__34122;
continue;
} else {
}
break;
}

var G__34051 = args34049.length;
switch (G__34051) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34049.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__32055__auto___34124 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32055__auto___34124,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32056__auto__ = (function (){var switch__31943__auto__ = ((function (c__32055__auto___34124,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34090){
var state_val_34091 = (state_34090[(1)]);
if((state_val_34091 === (7))){
var state_34090__$1 = state_34090;
var statearr_34092_34125 = state_34090__$1;
(statearr_34092_34125[(2)] = null);

(statearr_34092_34125[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34091 === (1))){
var state_34090__$1 = state_34090;
var statearr_34093_34126 = state_34090__$1;
(statearr_34093_34126[(2)] = null);

(statearr_34093_34126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34091 === (4))){
var inst_34054 = (state_34090[(7)]);
var inst_34056 = (inst_34054 < cnt);
var state_34090__$1 = state_34090;
if(cljs.core.truth_(inst_34056)){
var statearr_34094_34127 = state_34090__$1;
(statearr_34094_34127[(1)] = (6));

} else {
var statearr_34095_34128 = state_34090__$1;
(statearr_34095_34128[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34091 === (15))){
var inst_34086 = (state_34090[(2)]);
var state_34090__$1 = state_34090;
var statearr_34096_34129 = state_34090__$1;
(statearr_34096_34129[(2)] = inst_34086);

(statearr_34096_34129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34091 === (13))){
var inst_34079 = cljs.core.async.close_BANG_.call(null,out);
var state_34090__$1 = state_34090;
var statearr_34097_34130 = state_34090__$1;
(statearr_34097_34130[(2)] = inst_34079);

(statearr_34097_34130[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34091 === (6))){
var state_34090__$1 = state_34090;
var statearr_34098_34131 = state_34090__$1;
(statearr_34098_34131[(2)] = null);

(statearr_34098_34131[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34091 === (3))){
var inst_34088 = (state_34090[(2)]);
var state_34090__$1 = state_34090;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34090__$1,inst_34088);
} else {
if((state_val_34091 === (12))){
var inst_34076 = (state_34090[(8)]);
var inst_34076__$1 = (state_34090[(2)]);
var inst_34077 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34076__$1);
var state_34090__$1 = (function (){var statearr_34099 = state_34090;
(statearr_34099[(8)] = inst_34076__$1);

return statearr_34099;
})();
if(cljs.core.truth_(inst_34077)){
var statearr_34100_34132 = state_34090__$1;
(statearr_34100_34132[(1)] = (13));

} else {
var statearr_34101_34133 = state_34090__$1;
(statearr_34101_34133[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34091 === (2))){
var inst_34053 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_34054 = (0);
var state_34090__$1 = (function (){var statearr_34102 = state_34090;
(statearr_34102[(7)] = inst_34054);

(statearr_34102[(9)] = inst_34053);

return statearr_34102;
})();
var statearr_34103_34134 = state_34090__$1;
(statearr_34103_34134[(2)] = null);

(statearr_34103_34134[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34091 === (11))){
var inst_34054 = (state_34090[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34090,(10),Object,null,(9));
var inst_34063 = chs__$1.call(null,inst_34054);
var inst_34064 = done.call(null,inst_34054);
var inst_34065 = cljs.core.async.take_BANG_.call(null,inst_34063,inst_34064);
var state_34090__$1 = state_34090;
var statearr_34104_34135 = state_34090__$1;
(statearr_34104_34135[(2)] = inst_34065);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34090__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34091 === (9))){
var inst_34054 = (state_34090[(7)]);
var inst_34067 = (state_34090[(2)]);
var inst_34068 = (inst_34054 + (1));
var inst_34054__$1 = inst_34068;
var state_34090__$1 = (function (){var statearr_34105 = state_34090;
(statearr_34105[(7)] = inst_34054__$1);

(statearr_34105[(10)] = inst_34067);

return statearr_34105;
})();
var statearr_34106_34136 = state_34090__$1;
(statearr_34106_34136[(2)] = null);

(statearr_34106_34136[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34091 === (5))){
var inst_34074 = (state_34090[(2)]);
var state_34090__$1 = (function (){var statearr_34107 = state_34090;
(statearr_34107[(11)] = inst_34074);

return statearr_34107;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34090__$1,(12),dchan);
} else {
if((state_val_34091 === (14))){
var inst_34076 = (state_34090[(8)]);
var inst_34081 = cljs.core.apply.call(null,f,inst_34076);
var state_34090__$1 = state_34090;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34090__$1,(16),out,inst_34081);
} else {
if((state_val_34091 === (16))){
var inst_34083 = (state_34090[(2)]);
var state_34090__$1 = (function (){var statearr_34108 = state_34090;
(statearr_34108[(12)] = inst_34083);

return statearr_34108;
})();
var statearr_34109_34137 = state_34090__$1;
(statearr_34109_34137[(2)] = null);

(statearr_34109_34137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34091 === (10))){
var inst_34058 = (state_34090[(2)]);
var inst_34059 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_34090__$1 = (function (){var statearr_34110 = state_34090;
(statearr_34110[(13)] = inst_34058);

return statearr_34110;
})();
var statearr_34111_34138 = state_34090__$1;
(statearr_34111_34138[(2)] = inst_34059);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34090__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34091 === (8))){
var inst_34072 = (state_34090[(2)]);
var state_34090__$1 = state_34090;
var statearr_34112_34139 = state_34090__$1;
(statearr_34112_34139[(2)] = inst_34072);

(statearr_34112_34139[(1)] = (5));


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
});})(c__32055__auto___34124,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31943__auto__,c__32055__auto___34124,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31944__auto__ = null;
var cljs$core$async$state_machine__31944__auto____0 = (function (){
var statearr_34116 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34116[(0)] = cljs$core$async$state_machine__31944__auto__);

(statearr_34116[(1)] = (1));

return statearr_34116;
});
var cljs$core$async$state_machine__31944__auto____1 = (function (state_34090){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_34090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e34117){if((e34117 instanceof Object)){
var ex__31947__auto__ = e34117;
var statearr_34118_34140 = state_34090;
(statearr_34118_34140[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34141 = state_34090;
state_34090 = G__34141;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$state_machine__31944__auto__ = function(state_34090){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31944__auto____1.call(this,state_34090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31944__auto____0;
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31944__auto____1;
return cljs$core$async$state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32055__auto___34124,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32057__auto__ = (function (){var statearr_34119 = f__32056__auto__.call(null);
(statearr_34119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32055__auto___34124);

return statearr_34119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32057__auto__);
});})(c__32055__auto___34124,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args34143 = [];
var len__27500__auto___34201 = arguments.length;
var i__27501__auto___34202 = (0);
while(true){
if((i__27501__auto___34202 < len__27500__auto___34201)){
args34143.push((arguments[i__27501__auto___34202]));

var G__34203 = (i__27501__auto___34202 + (1));
i__27501__auto___34202 = G__34203;
continue;
} else {
}
break;
}

var G__34145 = args34143.length;
switch (G__34145) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34143.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32055__auto___34205 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32055__auto___34205,out){
return (function (){
var f__32056__auto__ = (function (){var switch__31943__auto__ = ((function (c__32055__auto___34205,out){
return (function (state_34177){
var state_val_34178 = (state_34177[(1)]);
if((state_val_34178 === (7))){
var inst_34156 = (state_34177[(7)]);
var inst_34157 = (state_34177[(8)]);
var inst_34156__$1 = (state_34177[(2)]);
var inst_34157__$1 = cljs.core.nth.call(null,inst_34156__$1,(0),null);
var inst_34158 = cljs.core.nth.call(null,inst_34156__$1,(1),null);
var inst_34159 = (inst_34157__$1 == null);
var state_34177__$1 = (function (){var statearr_34179 = state_34177;
(statearr_34179[(9)] = inst_34158);

(statearr_34179[(7)] = inst_34156__$1);

(statearr_34179[(8)] = inst_34157__$1);

return statearr_34179;
})();
if(cljs.core.truth_(inst_34159)){
var statearr_34180_34206 = state_34177__$1;
(statearr_34180_34206[(1)] = (8));

} else {
var statearr_34181_34207 = state_34177__$1;
(statearr_34181_34207[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34178 === (1))){
var inst_34146 = cljs.core.vec.call(null,chs);
var inst_34147 = inst_34146;
var state_34177__$1 = (function (){var statearr_34182 = state_34177;
(statearr_34182[(10)] = inst_34147);

return statearr_34182;
})();
var statearr_34183_34208 = state_34177__$1;
(statearr_34183_34208[(2)] = null);

(statearr_34183_34208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34178 === (4))){
var inst_34147 = (state_34177[(10)]);
var state_34177__$1 = state_34177;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34177__$1,(7),inst_34147);
} else {
if((state_val_34178 === (6))){
var inst_34173 = (state_34177[(2)]);
var state_34177__$1 = state_34177;
var statearr_34184_34209 = state_34177__$1;
(statearr_34184_34209[(2)] = inst_34173);

(statearr_34184_34209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34178 === (3))){
var inst_34175 = (state_34177[(2)]);
var state_34177__$1 = state_34177;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34177__$1,inst_34175);
} else {
if((state_val_34178 === (2))){
var inst_34147 = (state_34177[(10)]);
var inst_34149 = cljs.core.count.call(null,inst_34147);
var inst_34150 = (inst_34149 > (0));
var state_34177__$1 = state_34177;
if(cljs.core.truth_(inst_34150)){
var statearr_34186_34210 = state_34177__$1;
(statearr_34186_34210[(1)] = (4));

} else {
var statearr_34187_34211 = state_34177__$1;
(statearr_34187_34211[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34178 === (11))){
var inst_34147 = (state_34177[(10)]);
var inst_34166 = (state_34177[(2)]);
var tmp34185 = inst_34147;
var inst_34147__$1 = tmp34185;
var state_34177__$1 = (function (){var statearr_34188 = state_34177;
(statearr_34188[(10)] = inst_34147__$1);

(statearr_34188[(11)] = inst_34166);

return statearr_34188;
})();
var statearr_34189_34212 = state_34177__$1;
(statearr_34189_34212[(2)] = null);

(statearr_34189_34212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34178 === (9))){
var inst_34157 = (state_34177[(8)]);
var state_34177__$1 = state_34177;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34177__$1,(11),out,inst_34157);
} else {
if((state_val_34178 === (5))){
var inst_34171 = cljs.core.async.close_BANG_.call(null,out);
var state_34177__$1 = state_34177;
var statearr_34190_34213 = state_34177__$1;
(statearr_34190_34213[(2)] = inst_34171);

(statearr_34190_34213[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34178 === (10))){
var inst_34169 = (state_34177[(2)]);
var state_34177__$1 = state_34177;
var statearr_34191_34214 = state_34177__$1;
(statearr_34191_34214[(2)] = inst_34169);

(statearr_34191_34214[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34178 === (8))){
var inst_34158 = (state_34177[(9)]);
var inst_34156 = (state_34177[(7)]);
var inst_34147 = (state_34177[(10)]);
var inst_34157 = (state_34177[(8)]);
var inst_34161 = (function (){var cs = inst_34147;
var vec__34152 = inst_34156;
var v = inst_34157;
var c = inst_34158;
return ((function (cs,vec__34152,v,c,inst_34158,inst_34156,inst_34147,inst_34157,state_val_34178,c__32055__auto___34205,out){
return (function (p1__34142_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34142_SHARP_);
});
;})(cs,vec__34152,v,c,inst_34158,inst_34156,inst_34147,inst_34157,state_val_34178,c__32055__auto___34205,out))
})();
var inst_34162 = cljs.core.filterv.call(null,inst_34161,inst_34147);
var inst_34147__$1 = inst_34162;
var state_34177__$1 = (function (){var statearr_34192 = state_34177;
(statearr_34192[(10)] = inst_34147__$1);

return statearr_34192;
})();
var statearr_34193_34215 = state_34177__$1;
(statearr_34193_34215[(2)] = null);

(statearr_34193_34215[(1)] = (2));


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
});})(c__32055__auto___34205,out))
;
return ((function (switch__31943__auto__,c__32055__auto___34205,out){
return (function() {
var cljs$core$async$state_machine__31944__auto__ = null;
var cljs$core$async$state_machine__31944__auto____0 = (function (){
var statearr_34197 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34197[(0)] = cljs$core$async$state_machine__31944__auto__);

(statearr_34197[(1)] = (1));

return statearr_34197;
});
var cljs$core$async$state_machine__31944__auto____1 = (function (state_34177){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_34177);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e34198){if((e34198 instanceof Object)){
var ex__31947__auto__ = e34198;
var statearr_34199_34216 = state_34177;
(statearr_34199_34216[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34217 = state_34177;
state_34177 = G__34217;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$state_machine__31944__auto__ = function(state_34177){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31944__auto____1.call(this,state_34177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31944__auto____0;
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31944__auto____1;
return cljs$core$async$state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32055__auto___34205,out))
})();
var state__32057__auto__ = (function (){var statearr_34200 = f__32056__auto__.call(null);
(statearr_34200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32055__auto___34205);

return statearr_34200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32057__auto__);
});})(c__32055__auto___34205,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args34218 = [];
var len__27500__auto___34267 = arguments.length;
var i__27501__auto___34268 = (0);
while(true){
if((i__27501__auto___34268 < len__27500__auto___34267)){
args34218.push((arguments[i__27501__auto___34268]));

var G__34269 = (i__27501__auto___34268 + (1));
i__27501__auto___34268 = G__34269;
continue;
} else {
}
break;
}

var G__34220 = args34218.length;
switch (G__34220) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34218.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32055__auto___34271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32055__auto___34271,out){
return (function (){
var f__32056__auto__ = (function (){var switch__31943__auto__ = ((function (c__32055__auto___34271,out){
return (function (state_34244){
var state_val_34245 = (state_34244[(1)]);
if((state_val_34245 === (7))){
var inst_34226 = (state_34244[(7)]);
var inst_34226__$1 = (state_34244[(2)]);
var inst_34227 = (inst_34226__$1 == null);
var inst_34228 = cljs.core.not.call(null,inst_34227);
var state_34244__$1 = (function (){var statearr_34246 = state_34244;
(statearr_34246[(7)] = inst_34226__$1);

return statearr_34246;
})();
if(inst_34228){
var statearr_34247_34272 = state_34244__$1;
(statearr_34247_34272[(1)] = (8));

} else {
var statearr_34248_34273 = state_34244__$1;
(statearr_34248_34273[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34245 === (1))){
var inst_34221 = (0);
var state_34244__$1 = (function (){var statearr_34249 = state_34244;
(statearr_34249[(8)] = inst_34221);

return statearr_34249;
})();
var statearr_34250_34274 = state_34244__$1;
(statearr_34250_34274[(2)] = null);

(statearr_34250_34274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34245 === (4))){
var state_34244__$1 = state_34244;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34244__$1,(7),ch);
} else {
if((state_val_34245 === (6))){
var inst_34239 = (state_34244[(2)]);
var state_34244__$1 = state_34244;
var statearr_34251_34275 = state_34244__$1;
(statearr_34251_34275[(2)] = inst_34239);

(statearr_34251_34275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34245 === (3))){
var inst_34241 = (state_34244[(2)]);
var inst_34242 = cljs.core.async.close_BANG_.call(null,out);
var state_34244__$1 = (function (){var statearr_34252 = state_34244;
(statearr_34252[(9)] = inst_34241);

return statearr_34252;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34244__$1,inst_34242);
} else {
if((state_val_34245 === (2))){
var inst_34221 = (state_34244[(8)]);
var inst_34223 = (inst_34221 < n);
var state_34244__$1 = state_34244;
if(cljs.core.truth_(inst_34223)){
var statearr_34253_34276 = state_34244__$1;
(statearr_34253_34276[(1)] = (4));

} else {
var statearr_34254_34277 = state_34244__$1;
(statearr_34254_34277[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34245 === (11))){
var inst_34221 = (state_34244[(8)]);
var inst_34231 = (state_34244[(2)]);
var inst_34232 = (inst_34221 + (1));
var inst_34221__$1 = inst_34232;
var state_34244__$1 = (function (){var statearr_34255 = state_34244;
(statearr_34255[(8)] = inst_34221__$1);

(statearr_34255[(10)] = inst_34231);

return statearr_34255;
})();
var statearr_34256_34278 = state_34244__$1;
(statearr_34256_34278[(2)] = null);

(statearr_34256_34278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34245 === (9))){
var state_34244__$1 = state_34244;
var statearr_34257_34279 = state_34244__$1;
(statearr_34257_34279[(2)] = null);

(statearr_34257_34279[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34245 === (5))){
var state_34244__$1 = state_34244;
var statearr_34258_34280 = state_34244__$1;
(statearr_34258_34280[(2)] = null);

(statearr_34258_34280[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34245 === (10))){
var inst_34236 = (state_34244[(2)]);
var state_34244__$1 = state_34244;
var statearr_34259_34281 = state_34244__$1;
(statearr_34259_34281[(2)] = inst_34236);

(statearr_34259_34281[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34245 === (8))){
var inst_34226 = (state_34244[(7)]);
var state_34244__$1 = state_34244;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34244__$1,(11),out,inst_34226);
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
});})(c__32055__auto___34271,out))
;
return ((function (switch__31943__auto__,c__32055__auto___34271,out){
return (function() {
var cljs$core$async$state_machine__31944__auto__ = null;
var cljs$core$async$state_machine__31944__auto____0 = (function (){
var statearr_34263 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34263[(0)] = cljs$core$async$state_machine__31944__auto__);

(statearr_34263[(1)] = (1));

return statearr_34263;
});
var cljs$core$async$state_machine__31944__auto____1 = (function (state_34244){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_34244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e34264){if((e34264 instanceof Object)){
var ex__31947__auto__ = e34264;
var statearr_34265_34282 = state_34244;
(statearr_34265_34282[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34283 = state_34244;
state_34244 = G__34283;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$state_machine__31944__auto__ = function(state_34244){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31944__auto____1.call(this,state_34244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31944__auto____0;
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31944__auto____1;
return cljs$core$async$state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32055__auto___34271,out))
})();
var state__32057__auto__ = (function (){var statearr_34266 = f__32056__auto__.call(null);
(statearr_34266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32055__auto___34271);

return statearr_34266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32057__auto__);
});})(c__32055__auto___34271,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34291 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34291 = (function (map_LT_,f,ch,meta34292){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta34292 = meta34292;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34293,meta34292__$1){
var self__ = this;
var _34293__$1 = this;
return (new cljs.core.async.t_cljs$core$async34291(self__.map_LT_,self__.f,self__.ch,meta34292__$1));
});

cljs.core.async.t_cljs$core$async34291.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34293){
var self__ = this;
var _34293__$1 = this;
return self__.meta34292;
});

cljs.core.async.t_cljs$core$async34291.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async34291.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34291.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34291.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async34291.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async34294 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34294 = (function (map_LT_,f,ch,meta34292,_,fn1,meta34295){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta34292 = meta34292;
this._ = _;
this.fn1 = fn1;
this.meta34295 = meta34295;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34296,meta34295__$1){
var self__ = this;
var _34296__$1 = this;
return (new cljs.core.async.t_cljs$core$async34294(self__.map_LT_,self__.f,self__.ch,self__.meta34292,self__._,self__.fn1,meta34295__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34294.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34296){
var self__ = this;
var _34296__$1 = this;
return self__.meta34295;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34294.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async34294.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34294.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34294.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34284_SHARP_){
return f1.call(null,(((p1__34284_SHARP_ == null))?null:self__.f.call(null,p1__34284_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34294.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34292","meta34292",2075789232,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34291","cljs.core.async/t_cljs$core$async34291",857375459,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34295","meta34295",1555148874,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34294.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34294.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34294";

cljs.core.async.t_cljs$core$async34294.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27031__auto__,writer__27032__auto__,opt__27033__auto__){
return cljs.core._write.call(null,writer__27032__auto__,"cljs.core.async/t_cljs$core$async34294");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async34294 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34294(map_LT___$1,f__$1,ch__$1,meta34292__$1,___$2,fn1__$1,meta34295){
return (new cljs.core.async.t_cljs$core$async34294(map_LT___$1,f__$1,ch__$1,meta34292__$1,___$2,fn1__$1,meta34295));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34294(self__.map_LT_,self__.f,self__.ch,self__.meta34292,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__26413__auto__ = ret;
if(cljs.core.truth_(and__26413__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__26413__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async34291.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async34291.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34291.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34292","meta34292",2075789232,null)], null);
});

cljs.core.async.t_cljs$core$async34291.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34291.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34291";

cljs.core.async.t_cljs$core$async34291.cljs$lang$ctorPrWriter = (function (this__27031__auto__,writer__27032__auto__,opt__27033__auto__){
return cljs.core._write.call(null,writer__27032__auto__,"cljs.core.async/t_cljs$core$async34291");
});

cljs.core.async.__GT_t_cljs$core$async34291 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34291(map_LT___$1,f__$1,ch__$1,meta34292){
return (new cljs.core.async.t_cljs$core$async34291(map_LT___$1,f__$1,ch__$1,meta34292));
});

}

return (new cljs.core.async.t_cljs$core$async34291(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34300 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34300 = (function (map_GT_,f,ch,meta34301){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta34301 = meta34301;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34302,meta34301__$1){
var self__ = this;
var _34302__$1 = this;
return (new cljs.core.async.t_cljs$core$async34300(self__.map_GT_,self__.f,self__.ch,meta34301__$1));
});

cljs.core.async.t_cljs$core$async34300.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34302){
var self__ = this;
var _34302__$1 = this;
return self__.meta34301;
});

cljs.core.async.t_cljs$core$async34300.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async34300.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34300.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async34300.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34300.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async34300.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34300.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34301","meta34301",921752248,null)], null);
});

cljs.core.async.t_cljs$core$async34300.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34300.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34300";

cljs.core.async.t_cljs$core$async34300.cljs$lang$ctorPrWriter = (function (this__27031__auto__,writer__27032__auto__,opt__27033__auto__){
return cljs.core._write.call(null,writer__27032__auto__,"cljs.core.async/t_cljs$core$async34300");
});

cljs.core.async.__GT_t_cljs$core$async34300 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34300(map_GT___$1,f__$1,ch__$1,meta34301){
return (new cljs.core.async.t_cljs$core$async34300(map_GT___$1,f__$1,ch__$1,meta34301));
});

}

return (new cljs.core.async.t_cljs$core$async34300(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async34306 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34306 = (function (filter_GT_,p,ch,meta34307){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta34307 = meta34307;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34308,meta34307__$1){
var self__ = this;
var _34308__$1 = this;
return (new cljs.core.async.t_cljs$core$async34306(self__.filter_GT_,self__.p,self__.ch,meta34307__$1));
});

cljs.core.async.t_cljs$core$async34306.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34308){
var self__ = this;
var _34308__$1 = this;
return self__.meta34307;
});

cljs.core.async.t_cljs$core$async34306.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async34306.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34306.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34306.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async34306.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34306.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async34306.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34306.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34307","meta34307",459591920,null)], null);
});

cljs.core.async.t_cljs$core$async34306.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34306.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34306";

cljs.core.async.t_cljs$core$async34306.cljs$lang$ctorPrWriter = (function (this__27031__auto__,writer__27032__auto__,opt__27033__auto__){
return cljs.core._write.call(null,writer__27032__auto__,"cljs.core.async/t_cljs$core$async34306");
});

cljs.core.async.__GT_t_cljs$core$async34306 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34306(filter_GT___$1,p__$1,ch__$1,meta34307){
return (new cljs.core.async.t_cljs$core$async34306(filter_GT___$1,p__$1,ch__$1,meta34307));
});

}

return (new cljs.core.async.t_cljs$core$async34306(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args34309 = [];
var len__27500__auto___34353 = arguments.length;
var i__27501__auto___34354 = (0);
while(true){
if((i__27501__auto___34354 < len__27500__auto___34353)){
args34309.push((arguments[i__27501__auto___34354]));

var G__34355 = (i__27501__auto___34354 + (1));
i__27501__auto___34354 = G__34355;
continue;
} else {
}
break;
}

var G__34311 = args34309.length;
switch (G__34311) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34309.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32055__auto___34357 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32055__auto___34357,out){
return (function (){
var f__32056__auto__ = (function (){var switch__31943__auto__ = ((function (c__32055__auto___34357,out){
return (function (state_34332){
var state_val_34333 = (state_34332[(1)]);
if((state_val_34333 === (7))){
var inst_34328 = (state_34332[(2)]);
var state_34332__$1 = state_34332;
var statearr_34334_34358 = state_34332__$1;
(statearr_34334_34358[(2)] = inst_34328);

(statearr_34334_34358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (1))){
var state_34332__$1 = state_34332;
var statearr_34335_34359 = state_34332__$1;
(statearr_34335_34359[(2)] = null);

(statearr_34335_34359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (4))){
var inst_34314 = (state_34332[(7)]);
var inst_34314__$1 = (state_34332[(2)]);
var inst_34315 = (inst_34314__$1 == null);
var state_34332__$1 = (function (){var statearr_34336 = state_34332;
(statearr_34336[(7)] = inst_34314__$1);

return statearr_34336;
})();
if(cljs.core.truth_(inst_34315)){
var statearr_34337_34360 = state_34332__$1;
(statearr_34337_34360[(1)] = (5));

} else {
var statearr_34338_34361 = state_34332__$1;
(statearr_34338_34361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (6))){
var inst_34314 = (state_34332[(7)]);
var inst_34319 = p.call(null,inst_34314);
var state_34332__$1 = state_34332;
if(cljs.core.truth_(inst_34319)){
var statearr_34339_34362 = state_34332__$1;
(statearr_34339_34362[(1)] = (8));

} else {
var statearr_34340_34363 = state_34332__$1;
(statearr_34340_34363[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (3))){
var inst_34330 = (state_34332[(2)]);
var state_34332__$1 = state_34332;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34332__$1,inst_34330);
} else {
if((state_val_34333 === (2))){
var state_34332__$1 = state_34332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34332__$1,(4),ch);
} else {
if((state_val_34333 === (11))){
var inst_34322 = (state_34332[(2)]);
var state_34332__$1 = state_34332;
var statearr_34341_34364 = state_34332__$1;
(statearr_34341_34364[(2)] = inst_34322);

(statearr_34341_34364[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (9))){
var state_34332__$1 = state_34332;
var statearr_34342_34365 = state_34332__$1;
(statearr_34342_34365[(2)] = null);

(statearr_34342_34365[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (5))){
var inst_34317 = cljs.core.async.close_BANG_.call(null,out);
var state_34332__$1 = state_34332;
var statearr_34343_34366 = state_34332__$1;
(statearr_34343_34366[(2)] = inst_34317);

(statearr_34343_34366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (10))){
var inst_34325 = (state_34332[(2)]);
var state_34332__$1 = (function (){var statearr_34344 = state_34332;
(statearr_34344[(8)] = inst_34325);

return statearr_34344;
})();
var statearr_34345_34367 = state_34332__$1;
(statearr_34345_34367[(2)] = null);

(statearr_34345_34367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (8))){
var inst_34314 = (state_34332[(7)]);
var state_34332__$1 = state_34332;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34332__$1,(11),out,inst_34314);
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
});})(c__32055__auto___34357,out))
;
return ((function (switch__31943__auto__,c__32055__auto___34357,out){
return (function() {
var cljs$core$async$state_machine__31944__auto__ = null;
var cljs$core$async$state_machine__31944__auto____0 = (function (){
var statearr_34349 = [null,null,null,null,null,null,null,null,null];
(statearr_34349[(0)] = cljs$core$async$state_machine__31944__auto__);

(statearr_34349[(1)] = (1));

return statearr_34349;
});
var cljs$core$async$state_machine__31944__auto____1 = (function (state_34332){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_34332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e34350){if((e34350 instanceof Object)){
var ex__31947__auto__ = e34350;
var statearr_34351_34368 = state_34332;
(statearr_34351_34368[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34369 = state_34332;
state_34332 = G__34369;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$state_machine__31944__auto__ = function(state_34332){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31944__auto____1.call(this,state_34332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31944__auto____0;
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31944__auto____1;
return cljs$core$async$state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32055__auto___34357,out))
})();
var state__32057__auto__ = (function (){var statearr_34352 = f__32056__auto__.call(null);
(statearr_34352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32055__auto___34357);

return statearr_34352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32057__auto__);
});})(c__32055__auto___34357,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args34370 = [];
var len__27500__auto___34373 = arguments.length;
var i__27501__auto___34374 = (0);
while(true){
if((i__27501__auto___34374 < len__27500__auto___34373)){
args34370.push((arguments[i__27501__auto___34374]));

var G__34375 = (i__27501__auto___34374 + (1));
i__27501__auto___34374 = G__34375;
continue;
} else {
}
break;
}

var G__34372 = args34370.length;
switch (G__34372) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34370.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32055__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32055__auto__){
return (function (){
var f__32056__auto__ = (function (){var switch__31943__auto__ = ((function (c__32055__auto__){
return (function (state_34542){
var state_val_34543 = (state_34542[(1)]);
if((state_val_34543 === (7))){
var inst_34538 = (state_34542[(2)]);
var state_34542__$1 = state_34542;
var statearr_34544_34585 = state_34542__$1;
(statearr_34544_34585[(2)] = inst_34538);

(statearr_34544_34585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34543 === (20))){
var inst_34508 = (state_34542[(7)]);
var inst_34519 = (state_34542[(2)]);
var inst_34520 = cljs.core.next.call(null,inst_34508);
var inst_34494 = inst_34520;
var inst_34495 = null;
var inst_34496 = (0);
var inst_34497 = (0);
var state_34542__$1 = (function (){var statearr_34545 = state_34542;
(statearr_34545[(8)] = inst_34497);

(statearr_34545[(9)] = inst_34495);

(statearr_34545[(10)] = inst_34494);

(statearr_34545[(11)] = inst_34519);

(statearr_34545[(12)] = inst_34496);

return statearr_34545;
})();
var statearr_34546_34586 = state_34542__$1;
(statearr_34546_34586[(2)] = null);

(statearr_34546_34586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34543 === (1))){
var state_34542__$1 = state_34542;
var statearr_34547_34587 = state_34542__$1;
(statearr_34547_34587[(2)] = null);

(statearr_34547_34587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34543 === (4))){
var inst_34483 = (state_34542[(13)]);
var inst_34483__$1 = (state_34542[(2)]);
var inst_34484 = (inst_34483__$1 == null);
var state_34542__$1 = (function (){var statearr_34548 = state_34542;
(statearr_34548[(13)] = inst_34483__$1);

return statearr_34548;
})();
if(cljs.core.truth_(inst_34484)){
var statearr_34549_34588 = state_34542__$1;
(statearr_34549_34588[(1)] = (5));

} else {
var statearr_34550_34589 = state_34542__$1;
(statearr_34550_34589[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34543 === (15))){
var state_34542__$1 = state_34542;
var statearr_34554_34590 = state_34542__$1;
(statearr_34554_34590[(2)] = null);

(statearr_34554_34590[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34543 === (21))){
var state_34542__$1 = state_34542;
var statearr_34555_34591 = state_34542__$1;
(statearr_34555_34591[(2)] = null);

(statearr_34555_34591[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34543 === (13))){
var inst_34497 = (state_34542[(8)]);
var inst_34495 = (state_34542[(9)]);
var inst_34494 = (state_34542[(10)]);
var inst_34496 = (state_34542[(12)]);
var inst_34504 = (state_34542[(2)]);
var inst_34505 = (inst_34497 + (1));
var tmp34551 = inst_34495;
var tmp34552 = inst_34494;
var tmp34553 = inst_34496;
var inst_34494__$1 = tmp34552;
var inst_34495__$1 = tmp34551;
var inst_34496__$1 = tmp34553;
var inst_34497__$1 = inst_34505;
var state_34542__$1 = (function (){var statearr_34556 = state_34542;
(statearr_34556[(8)] = inst_34497__$1);

(statearr_34556[(9)] = inst_34495__$1);

(statearr_34556[(10)] = inst_34494__$1);

(statearr_34556[(14)] = inst_34504);

(statearr_34556[(12)] = inst_34496__$1);

return statearr_34556;
})();
var statearr_34557_34592 = state_34542__$1;
(statearr_34557_34592[(2)] = null);

(statearr_34557_34592[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34543 === (22))){
var state_34542__$1 = state_34542;
var statearr_34558_34593 = state_34542__$1;
(statearr_34558_34593[(2)] = null);

(statearr_34558_34593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34543 === (6))){
var inst_34483 = (state_34542[(13)]);
var inst_34492 = f.call(null,inst_34483);
var inst_34493 = cljs.core.seq.call(null,inst_34492);
var inst_34494 = inst_34493;
var inst_34495 = null;
var inst_34496 = (0);
var inst_34497 = (0);
var state_34542__$1 = (function (){var statearr_34559 = state_34542;
(statearr_34559[(8)] = inst_34497);

(statearr_34559[(9)] = inst_34495);

(statearr_34559[(10)] = inst_34494);

(statearr_34559[(12)] = inst_34496);

return statearr_34559;
})();
var statearr_34560_34594 = state_34542__$1;
(statearr_34560_34594[(2)] = null);

(statearr_34560_34594[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34543 === (17))){
var inst_34508 = (state_34542[(7)]);
var inst_34512 = cljs.core.chunk_first.call(null,inst_34508);
var inst_34513 = cljs.core.chunk_rest.call(null,inst_34508);
var inst_34514 = cljs.core.count.call(null,inst_34512);
var inst_34494 = inst_34513;
var inst_34495 = inst_34512;
var inst_34496 = inst_34514;
var inst_34497 = (0);
var state_34542__$1 = (function (){var statearr_34561 = state_34542;
(statearr_34561[(8)] = inst_34497);

(statearr_34561[(9)] = inst_34495);

(statearr_34561[(10)] = inst_34494);

(statearr_34561[(12)] = inst_34496);

return statearr_34561;
})();
var statearr_34562_34595 = state_34542__$1;
(statearr_34562_34595[(2)] = null);

(statearr_34562_34595[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34543 === (3))){
var inst_34540 = (state_34542[(2)]);
var state_34542__$1 = state_34542;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34542__$1,inst_34540);
} else {
if((state_val_34543 === (12))){
var inst_34528 = (state_34542[(2)]);
var state_34542__$1 = state_34542;
var statearr_34563_34596 = state_34542__$1;
(statearr_34563_34596[(2)] = inst_34528);

(statearr_34563_34596[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34543 === (2))){
var state_34542__$1 = state_34542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34542__$1,(4),in$);
} else {
if((state_val_34543 === (23))){
var inst_34536 = (state_34542[(2)]);
var state_34542__$1 = state_34542;
var statearr_34564_34597 = state_34542__$1;
(statearr_34564_34597[(2)] = inst_34536);

(statearr_34564_34597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34543 === (19))){
var inst_34523 = (state_34542[(2)]);
var state_34542__$1 = state_34542;
var statearr_34565_34598 = state_34542__$1;
(statearr_34565_34598[(2)] = inst_34523);

(statearr_34565_34598[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34543 === (11))){
var inst_34494 = (state_34542[(10)]);
var inst_34508 = (state_34542[(7)]);
var inst_34508__$1 = cljs.core.seq.call(null,inst_34494);
var state_34542__$1 = (function (){var statearr_34566 = state_34542;
(statearr_34566[(7)] = inst_34508__$1);

return statearr_34566;
})();
if(inst_34508__$1){
var statearr_34567_34599 = state_34542__$1;
(statearr_34567_34599[(1)] = (14));

} else {
var statearr_34568_34600 = state_34542__$1;
(statearr_34568_34600[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34543 === (9))){
var inst_34530 = (state_34542[(2)]);
var inst_34531 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34542__$1 = (function (){var statearr_34569 = state_34542;
(statearr_34569[(15)] = inst_34530);

return statearr_34569;
})();
if(cljs.core.truth_(inst_34531)){
var statearr_34570_34601 = state_34542__$1;
(statearr_34570_34601[(1)] = (21));

} else {
var statearr_34571_34602 = state_34542__$1;
(statearr_34571_34602[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34543 === (5))){
var inst_34486 = cljs.core.async.close_BANG_.call(null,out);
var state_34542__$1 = state_34542;
var statearr_34572_34603 = state_34542__$1;
(statearr_34572_34603[(2)] = inst_34486);

(statearr_34572_34603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34543 === (14))){
var inst_34508 = (state_34542[(7)]);
var inst_34510 = cljs.core.chunked_seq_QMARK_.call(null,inst_34508);
var state_34542__$1 = state_34542;
if(inst_34510){
var statearr_34573_34604 = state_34542__$1;
(statearr_34573_34604[(1)] = (17));

} else {
var statearr_34574_34605 = state_34542__$1;
(statearr_34574_34605[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34543 === (16))){
var inst_34526 = (state_34542[(2)]);
var state_34542__$1 = state_34542;
var statearr_34575_34606 = state_34542__$1;
(statearr_34575_34606[(2)] = inst_34526);

(statearr_34575_34606[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34543 === (10))){
var inst_34497 = (state_34542[(8)]);
var inst_34495 = (state_34542[(9)]);
var inst_34502 = cljs.core._nth.call(null,inst_34495,inst_34497);
var state_34542__$1 = state_34542;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34542__$1,(13),out,inst_34502);
} else {
if((state_val_34543 === (18))){
var inst_34508 = (state_34542[(7)]);
var inst_34517 = cljs.core.first.call(null,inst_34508);
var state_34542__$1 = state_34542;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34542__$1,(20),out,inst_34517);
} else {
if((state_val_34543 === (8))){
var inst_34497 = (state_34542[(8)]);
var inst_34496 = (state_34542[(12)]);
var inst_34499 = (inst_34497 < inst_34496);
var inst_34500 = inst_34499;
var state_34542__$1 = state_34542;
if(cljs.core.truth_(inst_34500)){
var statearr_34576_34607 = state_34542__$1;
(statearr_34576_34607[(1)] = (10));

} else {
var statearr_34577_34608 = state_34542__$1;
(statearr_34577_34608[(1)] = (11));

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
});})(c__32055__auto__))
;
return ((function (switch__31943__auto__,c__32055__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31944__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31944__auto____0 = (function (){
var statearr_34581 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34581[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31944__auto__);

(statearr_34581[(1)] = (1));

return statearr_34581;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31944__auto____1 = (function (state_34542){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_34542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e34582){if((e34582 instanceof Object)){
var ex__31947__auto__ = e34582;
var statearr_34583_34609 = state_34542;
(statearr_34583_34609[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34610 = state_34542;
state_34542 = G__34610;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31944__auto__ = function(state_34542){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31944__auto____1.call(this,state_34542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31944__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31944__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32055__auto__))
})();
var state__32057__auto__ = (function (){var statearr_34584 = f__32056__auto__.call(null);
(statearr_34584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32055__auto__);

return statearr_34584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32057__auto__);
});})(c__32055__auto__))
);

return c__32055__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args34611 = [];
var len__27500__auto___34614 = arguments.length;
var i__27501__auto___34615 = (0);
while(true){
if((i__27501__auto___34615 < len__27500__auto___34614)){
args34611.push((arguments[i__27501__auto___34615]));

var G__34616 = (i__27501__auto___34615 + (1));
i__27501__auto___34615 = G__34616;
continue;
} else {
}
break;
}

var G__34613 = args34611.length;
switch (G__34613) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34611.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args34618 = [];
var len__27500__auto___34621 = arguments.length;
var i__27501__auto___34622 = (0);
while(true){
if((i__27501__auto___34622 < len__27500__auto___34621)){
args34618.push((arguments[i__27501__auto___34622]));

var G__34623 = (i__27501__auto___34622 + (1));
i__27501__auto___34622 = G__34623;
continue;
} else {
}
break;
}

var G__34620 = args34618.length;
switch (G__34620) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34618.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args34625 = [];
var len__27500__auto___34676 = arguments.length;
var i__27501__auto___34677 = (0);
while(true){
if((i__27501__auto___34677 < len__27500__auto___34676)){
args34625.push((arguments[i__27501__auto___34677]));

var G__34678 = (i__27501__auto___34677 + (1));
i__27501__auto___34677 = G__34678;
continue;
} else {
}
break;
}

var G__34627 = args34625.length;
switch (G__34627) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34625.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32055__auto___34680 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32055__auto___34680,out){
return (function (){
var f__32056__auto__ = (function (){var switch__31943__auto__ = ((function (c__32055__auto___34680,out){
return (function (state_34651){
var state_val_34652 = (state_34651[(1)]);
if((state_val_34652 === (7))){
var inst_34646 = (state_34651[(2)]);
var state_34651__$1 = state_34651;
var statearr_34653_34681 = state_34651__$1;
(statearr_34653_34681[(2)] = inst_34646);

(statearr_34653_34681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34652 === (1))){
var inst_34628 = null;
var state_34651__$1 = (function (){var statearr_34654 = state_34651;
(statearr_34654[(7)] = inst_34628);

return statearr_34654;
})();
var statearr_34655_34682 = state_34651__$1;
(statearr_34655_34682[(2)] = null);

(statearr_34655_34682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34652 === (4))){
var inst_34631 = (state_34651[(8)]);
var inst_34631__$1 = (state_34651[(2)]);
var inst_34632 = (inst_34631__$1 == null);
var inst_34633 = cljs.core.not.call(null,inst_34632);
var state_34651__$1 = (function (){var statearr_34656 = state_34651;
(statearr_34656[(8)] = inst_34631__$1);

return statearr_34656;
})();
if(inst_34633){
var statearr_34657_34683 = state_34651__$1;
(statearr_34657_34683[(1)] = (5));

} else {
var statearr_34658_34684 = state_34651__$1;
(statearr_34658_34684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34652 === (6))){
var state_34651__$1 = state_34651;
var statearr_34659_34685 = state_34651__$1;
(statearr_34659_34685[(2)] = null);

(statearr_34659_34685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34652 === (3))){
var inst_34648 = (state_34651[(2)]);
var inst_34649 = cljs.core.async.close_BANG_.call(null,out);
var state_34651__$1 = (function (){var statearr_34660 = state_34651;
(statearr_34660[(9)] = inst_34648);

return statearr_34660;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34651__$1,inst_34649);
} else {
if((state_val_34652 === (2))){
var state_34651__$1 = state_34651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34651__$1,(4),ch);
} else {
if((state_val_34652 === (11))){
var inst_34631 = (state_34651[(8)]);
var inst_34640 = (state_34651[(2)]);
var inst_34628 = inst_34631;
var state_34651__$1 = (function (){var statearr_34661 = state_34651;
(statearr_34661[(7)] = inst_34628);

(statearr_34661[(10)] = inst_34640);

return statearr_34661;
})();
var statearr_34662_34686 = state_34651__$1;
(statearr_34662_34686[(2)] = null);

(statearr_34662_34686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34652 === (9))){
var inst_34631 = (state_34651[(8)]);
var state_34651__$1 = state_34651;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34651__$1,(11),out,inst_34631);
} else {
if((state_val_34652 === (5))){
var inst_34631 = (state_34651[(8)]);
var inst_34628 = (state_34651[(7)]);
var inst_34635 = cljs.core._EQ_.call(null,inst_34631,inst_34628);
var state_34651__$1 = state_34651;
if(inst_34635){
var statearr_34664_34687 = state_34651__$1;
(statearr_34664_34687[(1)] = (8));

} else {
var statearr_34665_34688 = state_34651__$1;
(statearr_34665_34688[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34652 === (10))){
var inst_34643 = (state_34651[(2)]);
var state_34651__$1 = state_34651;
var statearr_34666_34689 = state_34651__$1;
(statearr_34666_34689[(2)] = inst_34643);

(statearr_34666_34689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34652 === (8))){
var inst_34628 = (state_34651[(7)]);
var tmp34663 = inst_34628;
var inst_34628__$1 = tmp34663;
var state_34651__$1 = (function (){var statearr_34667 = state_34651;
(statearr_34667[(7)] = inst_34628__$1);

return statearr_34667;
})();
var statearr_34668_34690 = state_34651__$1;
(statearr_34668_34690[(2)] = null);

(statearr_34668_34690[(1)] = (2));


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
});})(c__32055__auto___34680,out))
;
return ((function (switch__31943__auto__,c__32055__auto___34680,out){
return (function() {
var cljs$core$async$state_machine__31944__auto__ = null;
var cljs$core$async$state_machine__31944__auto____0 = (function (){
var statearr_34672 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34672[(0)] = cljs$core$async$state_machine__31944__auto__);

(statearr_34672[(1)] = (1));

return statearr_34672;
});
var cljs$core$async$state_machine__31944__auto____1 = (function (state_34651){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_34651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e34673){if((e34673 instanceof Object)){
var ex__31947__auto__ = e34673;
var statearr_34674_34691 = state_34651;
(statearr_34674_34691[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34692 = state_34651;
state_34651 = G__34692;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$state_machine__31944__auto__ = function(state_34651){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31944__auto____1.call(this,state_34651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31944__auto____0;
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31944__auto____1;
return cljs$core$async$state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32055__auto___34680,out))
})();
var state__32057__auto__ = (function (){var statearr_34675 = f__32056__auto__.call(null);
(statearr_34675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32055__auto___34680);

return statearr_34675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32057__auto__);
});})(c__32055__auto___34680,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args34693 = [];
var len__27500__auto___34763 = arguments.length;
var i__27501__auto___34764 = (0);
while(true){
if((i__27501__auto___34764 < len__27500__auto___34763)){
args34693.push((arguments[i__27501__auto___34764]));

var G__34765 = (i__27501__auto___34764 + (1));
i__27501__auto___34764 = G__34765;
continue;
} else {
}
break;
}

var G__34695 = args34693.length;
switch (G__34695) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34693.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32055__auto___34767 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32055__auto___34767,out){
return (function (){
var f__32056__auto__ = (function (){var switch__31943__auto__ = ((function (c__32055__auto___34767,out){
return (function (state_34733){
var state_val_34734 = (state_34733[(1)]);
if((state_val_34734 === (7))){
var inst_34729 = (state_34733[(2)]);
var state_34733__$1 = state_34733;
var statearr_34735_34768 = state_34733__$1;
(statearr_34735_34768[(2)] = inst_34729);

(statearr_34735_34768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (1))){
var inst_34696 = (new Array(n));
var inst_34697 = inst_34696;
var inst_34698 = (0);
var state_34733__$1 = (function (){var statearr_34736 = state_34733;
(statearr_34736[(7)] = inst_34698);

(statearr_34736[(8)] = inst_34697);

return statearr_34736;
})();
var statearr_34737_34769 = state_34733__$1;
(statearr_34737_34769[(2)] = null);

(statearr_34737_34769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (4))){
var inst_34701 = (state_34733[(9)]);
var inst_34701__$1 = (state_34733[(2)]);
var inst_34702 = (inst_34701__$1 == null);
var inst_34703 = cljs.core.not.call(null,inst_34702);
var state_34733__$1 = (function (){var statearr_34738 = state_34733;
(statearr_34738[(9)] = inst_34701__$1);

return statearr_34738;
})();
if(inst_34703){
var statearr_34739_34770 = state_34733__$1;
(statearr_34739_34770[(1)] = (5));

} else {
var statearr_34740_34771 = state_34733__$1;
(statearr_34740_34771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (15))){
var inst_34723 = (state_34733[(2)]);
var state_34733__$1 = state_34733;
var statearr_34741_34772 = state_34733__$1;
(statearr_34741_34772[(2)] = inst_34723);

(statearr_34741_34772[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (13))){
var state_34733__$1 = state_34733;
var statearr_34742_34773 = state_34733__$1;
(statearr_34742_34773[(2)] = null);

(statearr_34742_34773[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (6))){
var inst_34698 = (state_34733[(7)]);
var inst_34719 = (inst_34698 > (0));
var state_34733__$1 = state_34733;
if(cljs.core.truth_(inst_34719)){
var statearr_34743_34774 = state_34733__$1;
(statearr_34743_34774[(1)] = (12));

} else {
var statearr_34744_34775 = state_34733__$1;
(statearr_34744_34775[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (3))){
var inst_34731 = (state_34733[(2)]);
var state_34733__$1 = state_34733;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34733__$1,inst_34731);
} else {
if((state_val_34734 === (12))){
var inst_34697 = (state_34733[(8)]);
var inst_34721 = cljs.core.vec.call(null,inst_34697);
var state_34733__$1 = state_34733;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34733__$1,(15),out,inst_34721);
} else {
if((state_val_34734 === (2))){
var state_34733__$1 = state_34733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34733__$1,(4),ch);
} else {
if((state_val_34734 === (11))){
var inst_34713 = (state_34733[(2)]);
var inst_34714 = (new Array(n));
var inst_34697 = inst_34714;
var inst_34698 = (0);
var state_34733__$1 = (function (){var statearr_34745 = state_34733;
(statearr_34745[(7)] = inst_34698);

(statearr_34745[(10)] = inst_34713);

(statearr_34745[(8)] = inst_34697);

return statearr_34745;
})();
var statearr_34746_34776 = state_34733__$1;
(statearr_34746_34776[(2)] = null);

(statearr_34746_34776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (9))){
var inst_34697 = (state_34733[(8)]);
var inst_34711 = cljs.core.vec.call(null,inst_34697);
var state_34733__$1 = state_34733;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34733__$1,(11),out,inst_34711);
} else {
if((state_val_34734 === (5))){
var inst_34698 = (state_34733[(7)]);
var inst_34706 = (state_34733[(11)]);
var inst_34697 = (state_34733[(8)]);
var inst_34701 = (state_34733[(9)]);
var inst_34705 = (inst_34697[inst_34698] = inst_34701);
var inst_34706__$1 = (inst_34698 + (1));
var inst_34707 = (inst_34706__$1 < n);
var state_34733__$1 = (function (){var statearr_34747 = state_34733;
(statearr_34747[(11)] = inst_34706__$1);

(statearr_34747[(12)] = inst_34705);

return statearr_34747;
})();
if(cljs.core.truth_(inst_34707)){
var statearr_34748_34777 = state_34733__$1;
(statearr_34748_34777[(1)] = (8));

} else {
var statearr_34749_34778 = state_34733__$1;
(statearr_34749_34778[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (14))){
var inst_34726 = (state_34733[(2)]);
var inst_34727 = cljs.core.async.close_BANG_.call(null,out);
var state_34733__$1 = (function (){var statearr_34751 = state_34733;
(statearr_34751[(13)] = inst_34726);

return statearr_34751;
})();
var statearr_34752_34779 = state_34733__$1;
(statearr_34752_34779[(2)] = inst_34727);

(statearr_34752_34779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (10))){
var inst_34717 = (state_34733[(2)]);
var state_34733__$1 = state_34733;
var statearr_34753_34780 = state_34733__$1;
(statearr_34753_34780[(2)] = inst_34717);

(statearr_34753_34780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (8))){
var inst_34706 = (state_34733[(11)]);
var inst_34697 = (state_34733[(8)]);
var tmp34750 = inst_34697;
var inst_34697__$1 = tmp34750;
var inst_34698 = inst_34706;
var state_34733__$1 = (function (){var statearr_34754 = state_34733;
(statearr_34754[(7)] = inst_34698);

(statearr_34754[(8)] = inst_34697__$1);

return statearr_34754;
})();
var statearr_34755_34781 = state_34733__$1;
(statearr_34755_34781[(2)] = null);

(statearr_34755_34781[(1)] = (2));


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
});})(c__32055__auto___34767,out))
;
return ((function (switch__31943__auto__,c__32055__auto___34767,out){
return (function() {
var cljs$core$async$state_machine__31944__auto__ = null;
var cljs$core$async$state_machine__31944__auto____0 = (function (){
var statearr_34759 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34759[(0)] = cljs$core$async$state_machine__31944__auto__);

(statearr_34759[(1)] = (1));

return statearr_34759;
});
var cljs$core$async$state_machine__31944__auto____1 = (function (state_34733){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_34733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e34760){if((e34760 instanceof Object)){
var ex__31947__auto__ = e34760;
var statearr_34761_34782 = state_34733;
(statearr_34761_34782[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34783 = state_34733;
state_34733 = G__34783;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$state_machine__31944__auto__ = function(state_34733){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31944__auto____1.call(this,state_34733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31944__auto____0;
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31944__auto____1;
return cljs$core$async$state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32055__auto___34767,out))
})();
var state__32057__auto__ = (function (){var statearr_34762 = f__32056__auto__.call(null);
(statearr_34762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32055__auto___34767);

return statearr_34762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32057__auto__);
});})(c__32055__auto___34767,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args34784 = [];
var len__27500__auto___34858 = arguments.length;
var i__27501__auto___34859 = (0);
while(true){
if((i__27501__auto___34859 < len__27500__auto___34858)){
args34784.push((arguments[i__27501__auto___34859]));

var G__34860 = (i__27501__auto___34859 + (1));
i__27501__auto___34859 = G__34860;
continue;
} else {
}
break;
}

var G__34786 = args34784.length;
switch (G__34786) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34784.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32055__auto___34862 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32055__auto___34862,out){
return (function (){
var f__32056__auto__ = (function (){var switch__31943__auto__ = ((function (c__32055__auto___34862,out){
return (function (state_34828){
var state_val_34829 = (state_34828[(1)]);
if((state_val_34829 === (7))){
var inst_34824 = (state_34828[(2)]);
var state_34828__$1 = state_34828;
var statearr_34830_34863 = state_34828__$1;
(statearr_34830_34863[(2)] = inst_34824);

(statearr_34830_34863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34829 === (1))){
var inst_34787 = [];
var inst_34788 = inst_34787;
var inst_34789 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34828__$1 = (function (){var statearr_34831 = state_34828;
(statearr_34831[(7)] = inst_34789);

(statearr_34831[(8)] = inst_34788);

return statearr_34831;
})();
var statearr_34832_34864 = state_34828__$1;
(statearr_34832_34864[(2)] = null);

(statearr_34832_34864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34829 === (4))){
var inst_34792 = (state_34828[(9)]);
var inst_34792__$1 = (state_34828[(2)]);
var inst_34793 = (inst_34792__$1 == null);
var inst_34794 = cljs.core.not.call(null,inst_34793);
var state_34828__$1 = (function (){var statearr_34833 = state_34828;
(statearr_34833[(9)] = inst_34792__$1);

return statearr_34833;
})();
if(inst_34794){
var statearr_34834_34865 = state_34828__$1;
(statearr_34834_34865[(1)] = (5));

} else {
var statearr_34835_34866 = state_34828__$1;
(statearr_34835_34866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34829 === (15))){
var inst_34818 = (state_34828[(2)]);
var state_34828__$1 = state_34828;
var statearr_34836_34867 = state_34828__$1;
(statearr_34836_34867[(2)] = inst_34818);

(statearr_34836_34867[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34829 === (13))){
var state_34828__$1 = state_34828;
var statearr_34837_34868 = state_34828__$1;
(statearr_34837_34868[(2)] = null);

(statearr_34837_34868[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34829 === (6))){
var inst_34788 = (state_34828[(8)]);
var inst_34813 = inst_34788.length;
var inst_34814 = (inst_34813 > (0));
var state_34828__$1 = state_34828;
if(cljs.core.truth_(inst_34814)){
var statearr_34838_34869 = state_34828__$1;
(statearr_34838_34869[(1)] = (12));

} else {
var statearr_34839_34870 = state_34828__$1;
(statearr_34839_34870[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34829 === (3))){
var inst_34826 = (state_34828[(2)]);
var state_34828__$1 = state_34828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34828__$1,inst_34826);
} else {
if((state_val_34829 === (12))){
var inst_34788 = (state_34828[(8)]);
var inst_34816 = cljs.core.vec.call(null,inst_34788);
var state_34828__$1 = state_34828;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34828__$1,(15),out,inst_34816);
} else {
if((state_val_34829 === (2))){
var state_34828__$1 = state_34828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34828__$1,(4),ch);
} else {
if((state_val_34829 === (11))){
var inst_34796 = (state_34828[(10)]);
var inst_34792 = (state_34828[(9)]);
var inst_34806 = (state_34828[(2)]);
var inst_34807 = [];
var inst_34808 = inst_34807.push(inst_34792);
var inst_34788 = inst_34807;
var inst_34789 = inst_34796;
var state_34828__$1 = (function (){var statearr_34840 = state_34828;
(statearr_34840[(7)] = inst_34789);

(statearr_34840[(11)] = inst_34808);

(statearr_34840[(8)] = inst_34788);

(statearr_34840[(12)] = inst_34806);

return statearr_34840;
})();
var statearr_34841_34871 = state_34828__$1;
(statearr_34841_34871[(2)] = null);

(statearr_34841_34871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34829 === (9))){
var inst_34788 = (state_34828[(8)]);
var inst_34804 = cljs.core.vec.call(null,inst_34788);
var state_34828__$1 = state_34828;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34828__$1,(11),out,inst_34804);
} else {
if((state_val_34829 === (5))){
var inst_34796 = (state_34828[(10)]);
var inst_34789 = (state_34828[(7)]);
var inst_34792 = (state_34828[(9)]);
var inst_34796__$1 = f.call(null,inst_34792);
var inst_34797 = cljs.core._EQ_.call(null,inst_34796__$1,inst_34789);
var inst_34798 = cljs.core.keyword_identical_QMARK_.call(null,inst_34789,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34799 = (inst_34797) || (inst_34798);
var state_34828__$1 = (function (){var statearr_34842 = state_34828;
(statearr_34842[(10)] = inst_34796__$1);

return statearr_34842;
})();
if(cljs.core.truth_(inst_34799)){
var statearr_34843_34872 = state_34828__$1;
(statearr_34843_34872[(1)] = (8));

} else {
var statearr_34844_34873 = state_34828__$1;
(statearr_34844_34873[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34829 === (14))){
var inst_34821 = (state_34828[(2)]);
var inst_34822 = cljs.core.async.close_BANG_.call(null,out);
var state_34828__$1 = (function (){var statearr_34846 = state_34828;
(statearr_34846[(13)] = inst_34821);

return statearr_34846;
})();
var statearr_34847_34874 = state_34828__$1;
(statearr_34847_34874[(2)] = inst_34822);

(statearr_34847_34874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34829 === (10))){
var inst_34811 = (state_34828[(2)]);
var state_34828__$1 = state_34828;
var statearr_34848_34875 = state_34828__$1;
(statearr_34848_34875[(2)] = inst_34811);

(statearr_34848_34875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34829 === (8))){
var inst_34796 = (state_34828[(10)]);
var inst_34788 = (state_34828[(8)]);
var inst_34792 = (state_34828[(9)]);
var inst_34801 = inst_34788.push(inst_34792);
var tmp34845 = inst_34788;
var inst_34788__$1 = tmp34845;
var inst_34789 = inst_34796;
var state_34828__$1 = (function (){var statearr_34849 = state_34828;
(statearr_34849[(7)] = inst_34789);

(statearr_34849[(14)] = inst_34801);

(statearr_34849[(8)] = inst_34788__$1);

return statearr_34849;
})();
var statearr_34850_34876 = state_34828__$1;
(statearr_34850_34876[(2)] = null);

(statearr_34850_34876[(1)] = (2));


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
});})(c__32055__auto___34862,out))
;
return ((function (switch__31943__auto__,c__32055__auto___34862,out){
return (function() {
var cljs$core$async$state_machine__31944__auto__ = null;
var cljs$core$async$state_machine__31944__auto____0 = (function (){
var statearr_34854 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34854[(0)] = cljs$core$async$state_machine__31944__auto__);

(statearr_34854[(1)] = (1));

return statearr_34854;
});
var cljs$core$async$state_machine__31944__auto____1 = (function (state_34828){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_34828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e34855){if((e34855 instanceof Object)){
var ex__31947__auto__ = e34855;
var statearr_34856_34877 = state_34828;
(statearr_34856_34877[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34855;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34878 = state_34828;
state_34828 = G__34878;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$state_machine__31944__auto__ = function(state_34828){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31944__auto____1.call(this,state_34828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31944__auto____0;
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31944__auto____1;
return cljs$core$async$state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32055__auto___34862,out))
})();
var state__32057__auto__ = (function (){var statearr_34857 = f__32056__auto__.call(null);
(statearr_34857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32055__auto___34862);

return statearr_34857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32057__auto__);
});})(c__32055__auto___34862,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1480772932343