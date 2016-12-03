// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs_bach.synthesis');
goog.require('cljs.core');
/**
 * Construct an audio context in a way that works even if it's prefixed.
 */
cljs_bach.synthesis.audio_context = (function cljs_bach$synthesis$audio_context(){
if(cljs.core.truth_(window.AudioContext)){
return (new window.AudioContext());
} else {
return (new window.webkitAudioContext());
}
});
/**
 * Return the current time as recorded by the audio context.
 */
cljs_bach.synthesis.current_time = (function cljs_bach$synthesis$current_time(context){
return context.currentTime;
});
cljs_bach.synthesis.subgraph = (function cljs_bach$synthesis$subgraph(var_args){
var args27820 = [];
var len__27500__auto___27823 = arguments.length;
var i__27501__auto___27824 = (0);
while(true){
if((i__27501__auto___27824 < len__27500__auto___27823)){
args27820.push((arguments[i__27501__auto___27824]));

var G__27825 = (i__27501__auto___27824 + (1));
i__27501__auto___27824 = G__27825;
continue;
} else {
}
break;
}

var G__27822 = args27820.length;
switch (G__27822) {
case 2:
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27820.length)].join('')));

}
});

cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2 = (function (input,output){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),input,new cljs.core.Keyword(null,"output","output",-1105869043),output], null);
});

cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1 = (function (singleton){
return cljs_bach.synthesis.subgraph.call(null,singleton,singleton);
});

cljs_bach.synthesis.subgraph.cljs$lang$maxFixedArity = 2;

/**
 * A graph of synthesis nodes without an input, so another graph can't connect to it.
 */
cljs_bach.synthesis.source = (function cljs_bach$synthesis$source(node){
return cljs_bach.synthesis.subgraph.call(null,null,node);
});
/**
 * A graph of synthesis nodes without an output, so it can't connect to another graph.
 */
cljs_bach.synthesis.sink = (function cljs_bach$synthesis$sink(node){
return cljs_bach.synthesis.subgraph.call(null,node,null);
});
/**
 * Convert a synth (actually a reader fn) into a concrete subgraph by supplying context and timing.
 */
cljs_bach.synthesis.run_with = (function cljs_bach$synthesis$run_with(synth,context,at,duration){
return synth.call(null,context,at,duration);
});
/**
 * The destination of the audio context i.e. the speakers.
 */
cljs_bach.synthesis.destination = (function cljs_bach$synthesis$destination(context,at,duration){
return cljs_bach.synthesis.sink.call(null,context.destination);
});
cljs_bach.synthesis.plug = (function cljs_bach$synthesis$plug(param,input,context,at,duration){

if(typeof input === 'number'){
return param.setValueAtTime(input,at);
} else {
return new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(cljs_bach.synthesis.run_with.call(null,input,context,at,duration)).connect(param);
}
});
/**
 * Multiply the signal by level.
 */
cljs_bach.synthesis.gain = (function cljs_bach$synthesis$gain(level){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__27828 = context.createGain();
cljs_bach.synthesis.plug.call(null,G__27828.gain,level,context,at,duration);

return G__27828;
})());
});
});
/**
 * Pass the signal through unaltered.
 */
cljs_bach.synthesis.pass_through = cljs_bach.synthesis.gain.call(null,1.0);
/**
 * Build an envelope out of [segment-duration final-level] coordinates.
 */
cljs_bach.synthesis.envelope = (function cljs_bach$synthesis$envelope(var_args){
var args__27507__auto__ = [];
var len__27500__auto___27836 = arguments.length;
var i__27501__auto___27837 = (0);
while(true){
if((i__27501__auto___27837 < len__27500__auto___27836)){
args__27507__auto__.push((arguments[i__27501__auto___27837]));

var G__27838 = (i__27501__auto___27837 + (1));
i__27501__auto___27837 = G__27838;
continue;
} else {
}
break;
}

var argseq__27508__auto__ = ((((0) < args__27507__auto__.length))?(new cljs.core.IndexedSeq(args__27507__auto__.slice((0)),(0),null)):null);
return cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic(argseq__27508__auto__);
});

cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic = (function (corners){
return (function (context,at,duration){
var audio_node = context.createGain();
audio_node.gain.setValueAtTime((0),at);

var x_27839 = at;
var coordinates_27840 = corners;
while(true){
var temp__4657__auto___27841 = coordinates_27840;
if(cljs.core.truth_(temp__4657__auto___27841)){
var vec__27830_27842 = temp__4657__auto___27841;
var seq__27831_27843 = cljs.core.seq.call(null,vec__27830_27842);
var first__27832_27844 = cljs.core.first.call(null,seq__27831_27843);
var seq__27831_27845__$1 = cljs.core.next.call(null,seq__27831_27843);
var vec__27833_27846 = first__27832_27844;
var dx_27847 = cljs.core.nth.call(null,vec__27833_27846,(0),null);
var y_27848 = cljs.core.nth.call(null,vec__27833_27846,(1),null);
var remaining_27849 = seq__27831_27845__$1;
audio_node.gain.linearRampToValueAtTime(y_27848,(x_27839 + dx_27847));

var G__27850 = (dx_27847 + x_27839);
var G__27851 = remaining_27849;
x_27839 = G__27850;
coordinates_27840 = G__27851;
continue;
} else {
}
break;
}

return cljs_bach.synthesis.subgraph.call(null,audio_node);
});
});

cljs_bach.synthesis.envelope.cljs$lang$maxFixedArity = (0);

cljs_bach.synthesis.envelope.cljs$lang$applyTo = (function (seq27829){
return cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27829));
});

/**
 * An ADSR envelope that also lets you specify the hold duration.
 */
cljs_bach.synthesis.adshr = (function cljs_bach$synthesis$adshr(attack,decay,sustain,hold,release){
return cljs_bach.synthesis.envelope.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attack,1.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decay,sustain], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hold,sustain], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [release,(0)], null));
});
/**
 * A four-stage envelope.
 */
cljs_bach.synthesis.adsr = (function cljs_bach$synthesis$adsr(attack,decay,sustain,release){
return (function (context,at,duration){
var remainder = (((duration - attack) - decay) - sustain);
var hold = (function (){var x__26756__auto__ = 0.0;
var y__26757__auto__ = remainder;
return ((x__26756__auto__ > y__26757__auto__) ? x__26756__auto__ : y__26757__auto__);
})();
var node = cljs_bach.synthesis.adshr.call(null,attack,decay,sustain,hold,release);
return cljs_bach.synthesis.run_with.call(null,node,context,at,duration);
});
});
/**
 * A simple envelope.
 */
cljs_bach.synthesis.percussive = (function cljs_bach$synthesis$percussive(attack,decay){
return cljs_bach.synthesis.envelope.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attack,1.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decay,0.0], null));
});
/**
 * Like update-in, but for the node graph a synth will return (and variadic).
 */
cljs_bach.synthesis.update_graph = (function cljs_bach$synthesis$update_graph(var_args){
var args__27507__auto__ = [];
var len__27500__auto___27855 = arguments.length;
var i__27501__auto___27856 = (0);
while(true){
if((i__27501__auto___27856 < len__27500__auto___27855)){
args__27507__auto__.push((arguments[i__27501__auto___27856]));

var G__27857 = (i__27501__auto___27856 + (1));
i__27501__auto___27856 = G__27857;
continue;
} else {
}
break;
}

var argseq__27508__auto__ = ((((1) < args__27507__auto__.length))?(new cljs.core.IndexedSeq(args__27507__auto__.slice((1)),(0),null)):null);
return cljs_bach.synthesis.update_graph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27508__auto__);
});

cljs_bach.synthesis.update_graph.cljs$core$IFn$_invoke$arity$variadic = (function (f,synths){
return (function (context,at,duration){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,(function (p1__27852_SHARP_){
return cljs_bach.synthesis.run_with.call(null,p1__27852_SHARP_,context,at,duration);
}),synths));
});
});

cljs_bach.synthesis.update_graph.cljs$lang$maxFixedArity = (1);

cljs_bach.synthesis.update_graph.cljs$lang$applyTo = (function (seq27853){
var G__27854 = cljs.core.first.call(null,seq27853);
var seq27853__$1 = cljs.core.next.call(null,seq27853);
return cljs_bach.synthesis.update_graph.cljs$core$IFn$_invoke$arity$variadic(G__27854,seq27853__$1);
});

/**
 * Use the output of one synth as the input to another.
 */
cljs_bach.synthesis.connect = (function cljs_bach$synthesis$connect(upstream_synth,downstream_synth){
return cljs_bach.synthesis.update_graph.call(null,(function (graph1,graph2){
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph1).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph2));

return cljs_bach.synthesis.subgraph.call(null,new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph1),new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph2));
}),upstream_synth,downstream_synth);
});
/**
 * Connect synths in series.
 */
cljs_bach.synthesis.connect__GT_ = (function cljs_bach$synthesis$connect__GT_(var_args){
var args__27507__auto__ = [];
var len__27500__auto___27859 = arguments.length;
var i__27501__auto___27860 = (0);
while(true){
if((i__27501__auto___27860 < len__27500__auto___27859)){
args__27507__auto__.push((arguments[i__27501__auto___27860]));

var G__27861 = (i__27501__auto___27860 + (1));
i__27501__auto___27860 = G__27861;
continue;
} else {
}
break;
}

var argseq__27508__auto__ = ((((0) < args__27507__auto__.length))?(new cljs.core.IndexedSeq(args__27507__auto__.slice((0)),(0),null)):null);
return cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__27508__auto__);
});

cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
return cljs.core.reduce.call(null,cljs_bach.synthesis.connect,nodes);
});

cljs_bach.synthesis.connect__GT_.cljs$lang$maxFixedArity = (0);

cljs_bach.synthesis.connect__GT_.cljs$lang$applyTo = (function (seq27858){
return cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27858));
});

/**
 * Join the graphs in parallel, with upstream and downstream as the source and sink.
 */
cljs_bach.synthesis.join = (function cljs_bach$synthesis$join(var_args){
var args__27507__auto__ = [];
var len__27500__auto___27869 = arguments.length;
var i__27501__auto___27870 = (0);
while(true){
if((i__27501__auto___27870 < len__27500__auto___27869)){
args__27507__auto__.push((arguments[i__27501__auto___27870]));

var G__27871 = (i__27501__auto___27870 + (1));
i__27501__auto___27870 = G__27871;
continue;
} else {
}
break;
}

var argseq__27508__auto__ = ((((2) < args__27507__auto__.length))?(new cljs.core.IndexedSeq(args__27507__auto__.slice((2)),(0),null)):null);
return cljs_bach.synthesis.join.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27508__auto__);
});

cljs_bach.synthesis.join.cljs$core$IFn$_invoke$arity$variadic = (function (upstream,downstream,graphs){
var seq__27865_27872 = cljs.core.seq.call(null,graphs);
var chunk__27866_27873 = null;
var count__27867_27874 = (0);
var i__27868_27875 = (0);
while(true){
if((i__27868_27875 < count__27867_27874)){
var graph_27876 = cljs.core._nth.call(null,chunk__27866_27873,i__27868_27875);
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph_27876).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_27876))){
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(upstream).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_27876));
} else {
}

var G__27877 = seq__27865_27872;
var G__27878 = chunk__27866_27873;
var G__27879 = count__27867_27874;
var G__27880 = (i__27868_27875 + (1));
seq__27865_27872 = G__27877;
chunk__27866_27873 = G__27878;
count__27867_27874 = G__27879;
i__27868_27875 = G__27880;
continue;
} else {
var temp__4657__auto___27881 = cljs.core.seq.call(null,seq__27865_27872);
if(temp__4657__auto___27881){
var seq__27865_27882__$1 = temp__4657__auto___27881;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27865_27882__$1)){
var c__27236__auto___27883 = cljs.core.chunk_first.call(null,seq__27865_27882__$1);
var G__27884 = cljs.core.chunk_rest.call(null,seq__27865_27882__$1);
var G__27885 = c__27236__auto___27883;
var G__27886 = cljs.core.count.call(null,c__27236__auto___27883);
var G__27887 = (0);
seq__27865_27872 = G__27884;
chunk__27866_27873 = G__27885;
count__27867_27874 = G__27886;
i__27868_27875 = G__27887;
continue;
} else {
var graph_27888 = cljs.core.first.call(null,seq__27865_27882__$1);
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph_27888).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_27888))){
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(upstream).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_27888));
} else {
}

var G__27889 = cljs.core.next.call(null,seq__27865_27882__$1);
var G__27890 = null;
var G__27891 = (0);
var G__27892 = (0);
seq__27865_27872 = G__27889;
chunk__27866_27873 = G__27890;
count__27867_27874 = G__27891;
i__27868_27875 = G__27892;
continue;
}
} else {
}
}
break;
}

return cljs_bach.synthesis.subgraph.call(null,new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(upstream),new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(downstream));
});

cljs_bach.synthesis.join.cljs$lang$maxFixedArity = (2);

cljs_bach.synthesis.join.cljs$lang$applyTo = (function (seq27862){
var G__27863 = cljs.core.first.call(null,seq27862);
var seq27862__$1 = cljs.core.next.call(null,seq27862);
var G__27864 = cljs.core.first.call(null,seq27862__$1);
var seq27862__$2 = cljs.core.next.call(null,seq27862__$1);
return cljs_bach.synthesis.join.cljs$core$IFn$_invoke$arity$variadic(G__27863,G__27864,seq27862__$2);
});

/**
 * Add together synths by connecting them all to the same upstream and downstream gains.
 */
cljs_bach.synthesis.add = (function cljs_bach$synthesis$add(var_args){
var args__27507__auto__ = [];
var len__27500__auto___27894 = arguments.length;
var i__27501__auto___27895 = (0);
while(true){
if((i__27501__auto___27895 < len__27500__auto___27894)){
args__27507__auto__.push((arguments[i__27501__auto___27895]));

var G__27896 = (i__27501__auto___27895 + (1));
i__27501__auto___27895 = G__27896;
continue;
} else {
}
break;
}

var argseq__27508__auto__ = ((((0) < args__27507__auto__.length))?(new cljs.core.IndexedSeq(args__27507__auto__.slice((0)),(0),null)):null);
return cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic(argseq__27508__auto__);
});

cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic = (function (synths){
return cljs.core.apply.call(null,cljs_bach.synthesis.update_graph,cljs_bach.synthesis.join,cljs_bach.synthesis.pass_through,cljs_bach.synthesis.pass_through,synths);
});

cljs_bach.synthesis.add.cljs$lang$maxFixedArity = (0);

cljs_bach.synthesis.add.cljs$lang$applyTo = (function (seq27893){
return cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27893));
});

cljs_bach.synthesis.raw_buffer = (function cljs_bach$synthesis$raw_buffer(generate_bit_BANG_,context,duration){
var sample_rate = (44100);
var frame_count = (sample_rate * duration);
var buffer = context.createBuffer((1),frame_count,sample_rate);
var data = buffer.getChannelData((0));
var seq__27901_27905 = cljs.core.seq.call(null,cljs.core.range.call(null,sample_rate));
var chunk__27902_27906 = null;
var count__27903_27907 = (0);
var i__27904_27908 = (0);
while(true){
if((i__27904_27908 < count__27903_27907)){
var i_27909 = cljs.core._nth.call(null,chunk__27902_27906,i__27904_27908);
(data[i_27909] = generate_bit_BANG_.call(null,i_27909));

var G__27910 = seq__27901_27905;
var G__27911 = chunk__27902_27906;
var G__27912 = count__27903_27907;
var G__27913 = (i__27904_27908 + (1));
seq__27901_27905 = G__27910;
chunk__27902_27906 = G__27911;
count__27903_27907 = G__27912;
i__27904_27908 = G__27913;
continue;
} else {
var temp__4657__auto___27914 = cljs.core.seq.call(null,seq__27901_27905);
if(temp__4657__auto___27914){
var seq__27901_27915__$1 = temp__4657__auto___27914;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27901_27915__$1)){
var c__27236__auto___27916 = cljs.core.chunk_first.call(null,seq__27901_27915__$1);
var G__27917 = cljs.core.chunk_rest.call(null,seq__27901_27915__$1);
var G__27918 = c__27236__auto___27916;
var G__27919 = cljs.core.count.call(null,c__27236__auto___27916);
var G__27920 = (0);
seq__27901_27905 = G__27917;
chunk__27902_27906 = G__27918;
count__27903_27907 = G__27919;
i__27904_27908 = G__27920;
continue;
} else {
var i_27921 = cljs.core.first.call(null,seq__27901_27915__$1);
(data[i_27921] = generate_bit_BANG_.call(null,i_27921));

var G__27922 = cljs.core.next.call(null,seq__27901_27915__$1);
var G__27923 = null;
var G__27924 = (0);
var G__27925 = (0);
seq__27901_27905 = G__27922;
chunk__27902_27906 = G__27923;
count__27903_27907 = G__27924;
i__27904_27908 = G__27925;
continue;
}
} else {
}
}
break;
}

return buffer;
});
cljs_bach.synthesis.buffer = cljs.core.memoize.call(null,cljs_bach.synthesis.raw_buffer);
/**
 * Make noise according to the supplied strategy for creating bits.
 */
cljs_bach.synthesis.noise = (function cljs_bach$synthesis$noise(generate_bit_BANG_){
return (function (context,at,duration){
return cljs_bach.synthesis.source.call(null,(function (){var G__27927 = context.createBufferSource();
G__27927.buffer = cljs_bach.synthesis.buffer.call(null,generate_bit_BANG_,context,(duration + 1.0));

G__27927.start(at);

return G__27927;
})());
});
});
/**
 * Random noise.
 */
cljs_bach.synthesis.white_noise = (function (){var white = (function (_){
return ((Math.random() * 2.0) - 1.0);
});
return cljs_bach.synthesis.noise.call(null,white);
})();
/**
 * Make a constant value by creating noise with a fixed value.
 */
cljs_bach.synthesis.constant = (function cljs_bach$synthesis$constant(x){
return cljs_bach.synthesis.noise.call(null,cljs.core.constantly.call(null,x));
});
/**
 * A periodic wave.
 */
cljs_bach.synthesis.oscillator = (function cljs_bach$synthesis$oscillator(type,freq){
return (function (context,at,duration){
return cljs_bach.synthesis.source.call(null,(function (){var G__27929 = context.createOscillator();
G__27929.frequency.value = (0);

cljs_bach.synthesis.plug.call(null,G__27929.frequency,freq,context,at,duration);

G__27929.type = type;

G__27929.start(at);

G__27929.stop(((at + duration) + 1.0));

return G__27929;
})());
});
});
cljs_bach.synthesis.sine = cljs.core.partial.call(null,cljs_bach.synthesis.oscillator,"sine");
cljs_bach.synthesis.sawtooth = cljs.core.partial.call(null,cljs_bach.synthesis.oscillator,"sawtooth");
cljs_bach.synthesis.square = cljs.core.partial.call(null,cljs_bach.synthesis.oscillator,"square");
cljs_bach.synthesis.triangle = cljs.core.partial.call(null,cljs_bach.synthesis.oscillator,"triangle");
/**
 * Attenuate frequencies beyond the cutoff, and intensify the cutoff frequency based on the value of q.
 */
cljs_bach.synthesis.biquad_filter = (function cljs_bach$synthesis$biquad_filter(var_args){
var args27930 = [];
var len__27500__auto___27934 = arguments.length;
var i__27501__auto___27935 = (0);
while(true){
if((i__27501__auto___27935 < len__27500__auto___27934)){
args27930.push((arguments[i__27501__auto___27935]));

var G__27936 = (i__27501__auto___27935 + (1));
i__27501__auto___27935 = G__27936;
continue;
} else {
}
break;
}

var G__27932 = args27930.length;
switch (G__27932) {
case 2:
return cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27930.length)].join('')));

}
});

cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$2 = (function (type,freq){
return cljs_bach.synthesis.biquad_filter.call(null,type,freq,1.0);
});

cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$3 = (function (type,freq,q){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__27933 = context.createBiquadFilter();
G__27933.frequency.value = (0);

cljs_bach.synthesis.plug.call(null,G__27933.frequency,freq,context,at,duration);

cljs_bach.synthesis.plug.call(null,G__27933.Q,q,context,at,duration);

G__27933.type = type;

return G__27933;
})());
});
});

cljs_bach.synthesis.biquad_filter.cljs$lang$maxFixedArity = 3;

cljs_bach.synthesis.low_pass = cljs.core.partial.call(null,cljs_bach.synthesis.biquad_filter,"lowpass");
cljs_bach.synthesis.high_pass = cljs.core.partial.call(null,cljs_bach.synthesis.biquad_filter,"highpass");
/**
 * Pan the signal left (-1) or right (1).
 */
cljs_bach.synthesis.stereo_panner = (function cljs_bach$synthesis$stereo_panner(pan){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__27939 = context.createStereoPanner();
cljs_bach.synthesis.plug.call(null,G__27939.pan,pan,context,at,duration);

return G__27939;
})());
});
});
/**
 * Delay the signal.
 */
cljs_bach.synthesis.delay_line = (function cljs_bach$synthesis$delay_line(seconds){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var maximum = (5);
var G__27941 = context.createDelay(maximum);
cljs_bach.synthesis.plug.call(null,G__27941.delayTime,seconds,context,at,duration);

return G__27941;
})());
});
});
/**
 * Linear convolution.
 */
cljs_bach.synthesis.convolver = (function cljs_bach$synthesis$convolver(generate_bit_BANG_){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__27943 = context.createConvolver();
G__27943.buffer = cljs_bach.synthesis.buffer.call(null,generate_bit_BANG_,context,(duration + 1.0));

return G__27943;
})());
});
});
/**
 * Crude reverb.
 */
cljs_bach.synthesis.reverb = (function (){var duration = (5);
var decay = (3);
var sample_rate = (44100);
var length = (sample_rate * (duration + 1.0));
var logarithmic_decay = ((function (duration,decay,sample_rate,length){
return (function (i){
return (((Math.random(i) * 2.0) - 1.0) * Math.pow(((1) - (i / length)),decay));
});})(duration,decay,sample_rate,length))
;
return cljs_bach.synthesis.convolver.call(null,logarithmic_decay);
})();
/**
 * Mix the original signal with one with the effect applied.
 */
cljs_bach.synthesis.enhance = (function cljs_bach$synthesis$enhance(effect,level){
return cljs_bach.synthesis.add.call(null,cljs_bach.synthesis.pass_through,cljs_bach.synthesis.connect__GT_.call(null,effect,cljs_bach.synthesis.gain.call(null,level)));
});

//# sourceMappingURL=synthesis.js.map?rel=1480772917165