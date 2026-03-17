(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const v of document.querySelectorAll('link[rel="modulepreload"]'))c(v);new MutationObserver(v=>{for(const _ of v)if(_.type==="childList")for(const z of _.addedNodes)z.tagName==="LINK"&&z.rel==="modulepreload"&&c(z)}).observe(document,{childList:!0,subtree:!0});function f(v){const _={};return v.integrity&&(_.integrity=v.integrity),v.referrerPolicy&&(_.referrerPolicy=v.referrerPolicy),v.crossOrigin==="use-credentials"?_.credentials="include":v.crossOrigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function c(v){if(v.ep)return;v.ep=!0;const _=f(v);fetch(v.href,_)}})();function jh(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Ns={exports:{}},ii={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vf;function zh(){if(Vf)return ii;Vf=1;var s=Symbol.for("react.transitional.element"),h=Symbol.for("react.fragment");function f(c,v,_){var z=null;if(_!==void 0&&(z=""+_),v.key!==void 0&&(z=""+v.key),"key"in v){_={};for(var w in v)w!=="key"&&(_[w]=v[w])}else _=v;return v=_.ref,{$$typeof:s,type:c,key:z,ref:v!==void 0?v:null,props:_}}return ii.Fragment=h,ii.jsx=f,ii.jsxs=f,ii}var Yf;function Mh(){return Yf||(Yf=1,Ns.exports=zh()),Ns.exports}var r=Mh(),Gs={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xf;function Ch(){if(Xf)return ie;Xf=1;var s=Symbol.for("react.transitional.element"),h=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),_=Symbol.for("react.consumer"),z=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),F=Symbol.iterator;function ne(m){return m===null||typeof m!="object"?null:(m=F&&m[F]||m["@@iterator"],typeof m=="function"?m:null)}var xe={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},we=Object.assign,ze={};function P(m,D,H){this.props=m,this.context=D,this.refs=ze,this.updater=H||xe}P.prototype.isReactComponent={},P.prototype.setState=function(m,D){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,D,"setState")},P.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function $(){}$.prototype=P.prototype;function ue(m,D,H){this.props=m,this.context=D,this.refs=ze,this.updater=H||xe}var U=ue.prototype=new $;U.constructor=ue,we(U,P.prototype),U.isPureReactComponent=!0;var Y=Array.isArray;function X(){}var L={H:null,A:null,T:null,S:null},ce=Object.prototype.hasOwnProperty;function de(m,D,H){var G=H.ref;return{$$typeof:s,type:m,key:D,ref:G!==void 0?G:null,props:H}}function ee(m,D){return de(m.type,D,m.props)}function _e(m){return typeof m=="object"&&m!==null&&m.$$typeof===s}function ae(m){var D={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(H){return D[H]})}var Me=/\/+/g;function ot(m,D){return typeof m=="object"&&m!==null&&m.key!=null?ae(""+m.key):D.toString(36)}function he(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(X,X):(m.status="pending",m.then(function(D){m.status==="pending"&&(m.status="fulfilled",m.value=D)},function(D){m.status==="pending"&&(m.status="rejected",m.reason=D)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function j(m,D,H,G,le){var se=typeof m;(se==="undefined"||se==="boolean")&&(m=null);var Ae=!1;if(m===null)Ae=!0;else switch(se){case"bigint":case"string":case"number":Ae=!0;break;case"object":switch(m.$$typeof){case s:case h:Ae=!0;break;case V:return Ae=m._init,j(Ae(m._payload),D,H,G,le)}}if(Ae)return le=le(m),Ae=G===""?"."+ot(m,0):G,Y(le)?(H="",Ae!=null&&(H=Ae.replace(Me,"$&/")+"/"),j(le,D,H,"",function(Kt){return Kt})):le!=null&&(_e(le)&&(le=ee(le,H+(le.key==null||m&&m.key===le.key?"":(""+le.key).replace(Me,"$&/")+"/")+Ae)),D.push(le)),1;Ae=0;var We=G===""?".":G+":";if(Y(m))for(var qe=0;qe<m.length;qe++)G=m[qe],se=We+ot(G,qe),Ae+=j(G,D,H,se,le);else if(qe=ne(m),typeof qe=="function")for(m=qe.call(m),qe=0;!(G=m.next()).done;)G=G.value,se=We+ot(G,qe++),Ae+=j(G,D,H,se,le);else if(se==="object"){if(typeof m.then=="function")return j(he(m),D,H,G,le);throw D=String(m),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.")}return Ae}function k(m,D,H){if(m==null)return m;var G=[],le=0;return j(m,G,"","",function(se){return D.call(H,se,le++)}),G}function K(m){if(m._status===-1){var D=m._result;D=D(),D.then(function(H){(m._status===0||m._status===-1)&&(m._status=1,m._result=H)},function(H){(m._status===0||m._status===-1)&&(m._status=2,m._result=H)}),m._status===-1&&(m._status=0,m._result=D)}if(m._status===1)return m._result.default;throw m._result}var J=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var D=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(D))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)},Te={map:k,forEach:function(m,D,H){k(m,function(){D.apply(this,arguments)},H)},count:function(m){var D=0;return k(m,function(){D++}),D},toArray:function(m){return k(m,function(D){return D})||[]},only:function(m){if(!_e(m))throw Error("React.Children.only expected to receive a single React element child.");return m}};return ie.Activity=R,ie.Children=Te,ie.Component=P,ie.Fragment=f,ie.Profiler=v,ie.PureComponent=ue,ie.StrictMode=c,ie.Suspense=E,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,ie.__COMPILER_RUNTIME={__proto__:null,c:function(m){return L.H.useMemoCache(m)}},ie.cache=function(m){return function(){return m.apply(null,arguments)}},ie.cacheSignal=function(){return null},ie.cloneElement=function(m,D,H){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var G=we({},m.props),le=m.key;if(D!=null)for(se in D.key!==void 0&&(le=""+D.key),D)!ce.call(D,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&D.ref===void 0||(G[se]=D[se]);var se=arguments.length-2;if(se===1)G.children=H;else if(1<se){for(var Ae=Array(se),We=0;We<se;We++)Ae[We]=arguments[We+2];G.children=Ae}return de(m.type,le,G)},ie.createContext=function(m){return m={$$typeof:z,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:_,_context:m},m},ie.createElement=function(m,D,H){var G,le={},se=null;if(D!=null)for(G in D.key!==void 0&&(se=""+D.key),D)ce.call(D,G)&&G!=="key"&&G!=="__self"&&G!=="__source"&&(le[G]=D[G]);var Ae=arguments.length-2;if(Ae===1)le.children=H;else if(1<Ae){for(var We=Array(Ae),qe=0;qe<Ae;qe++)We[qe]=arguments[qe+2];le.children=We}if(m&&m.defaultProps)for(G in Ae=m.defaultProps,Ae)le[G]===void 0&&(le[G]=Ae[G]);return de(m,se,le)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(m){return{$$typeof:w,render:m}},ie.isValidElement=_e,ie.lazy=function(m){return{$$typeof:V,_payload:{_status:-1,_result:m},_init:K}},ie.memo=function(m,D){return{$$typeof:y,type:m,compare:D===void 0?null:D}},ie.startTransition=function(m){var D=L.T,H={};L.T=H;try{var G=m(),le=L.S;le!==null&&le(H,G),typeof G=="object"&&G!==null&&typeof G.then=="function"&&G.then(X,J)}catch(se){J(se)}finally{D!==null&&H.types!==null&&(D.types=H.types),L.T=D}},ie.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},ie.use=function(m){return L.H.use(m)},ie.useActionState=function(m,D,H){return L.H.useActionState(m,D,H)},ie.useCallback=function(m,D){return L.H.useCallback(m,D)},ie.useContext=function(m){return L.H.useContext(m)},ie.useDebugValue=function(){},ie.useDeferredValue=function(m,D){return L.H.useDeferredValue(m,D)},ie.useEffect=function(m,D){return L.H.useEffect(m,D)},ie.useEffectEvent=function(m){return L.H.useEffectEvent(m)},ie.useId=function(){return L.H.useId()},ie.useImperativeHandle=function(m,D,H){return L.H.useImperativeHandle(m,D,H)},ie.useInsertionEffect=function(m,D){return L.H.useInsertionEffect(m,D)},ie.useLayoutEffect=function(m,D){return L.H.useLayoutEffect(m,D)},ie.useMemo=function(m,D){return L.H.useMemo(m,D)},ie.useOptimistic=function(m,D){return L.H.useOptimistic(m,D)},ie.useReducer=function(m,D,H){return L.H.useReducer(m,D,H)},ie.useRef=function(m){return L.H.useRef(m)},ie.useState=function(m){return L.H.useState(m)},ie.useSyncExternalStore=function(m,D,H){return L.H.useSyncExternalStore(m,D,H)},ie.useTransition=function(){return L.H.useTransition()},ie.version="19.2.4",ie}var Qf;function Ws(){return Qf||(Qf=1,Gs.exports=Ch()),Gs.exports}var q=Ws();const sm=jh(q);var Vs={exports:{}},oi={},Ys={exports:{}},Xs={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zf;function Dh(){return Zf||(Zf=1,(function(s){function h(j,k){var K=j.length;j.push(k);e:for(;0<K;){var J=K-1>>>1,Te=j[J];if(0<v(Te,k))j[J]=k,j[K]=Te,K=J;else break e}}function f(j){return j.length===0?null:j[0]}function c(j){if(j.length===0)return null;var k=j[0],K=j.pop();if(K!==k){j[0]=K;e:for(var J=0,Te=j.length,m=Te>>>1;J<m;){var D=2*(J+1)-1,H=j[D],G=D+1,le=j[G];if(0>v(H,K))G<Te&&0>v(le,H)?(j[J]=le,j[G]=K,J=G):(j[J]=H,j[D]=K,J=D);else if(G<Te&&0>v(le,K))j[J]=le,j[G]=K,J=G;else break e}}return k}function v(j,k){var K=j.sortIndex-k.sortIndex;return K!==0?K:j.id-k.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var _=performance;s.unstable_now=function(){return _.now()}}else{var z=Date,w=z.now();s.unstable_now=function(){return z.now()-w}}var E=[],y=[],V=1,R=null,F=3,ne=!1,xe=!1,we=!1,ze=!1,P=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,ue=typeof setImmediate<"u"?setImmediate:null;function U(j){for(var k=f(y);k!==null;){if(k.callback===null)c(y);else if(k.startTime<=j)c(y),k.sortIndex=k.expirationTime,h(E,k);else break;k=f(y)}}function Y(j){if(we=!1,U(j),!xe)if(f(E)!==null)xe=!0,X||(X=!0,ae());else{var k=f(y);k!==null&&he(Y,k.startTime-j)}}var X=!1,L=-1,ce=5,de=-1;function ee(){return ze?!0:!(s.unstable_now()-de<ce)}function _e(){if(ze=!1,X){var j=s.unstable_now();de=j;var k=!0;try{e:{xe=!1,we&&(we=!1,$(L),L=-1),ne=!0;var K=F;try{t:{for(U(j),R=f(E);R!==null&&!(R.expirationTime>j&&ee());){var J=R.callback;if(typeof J=="function"){R.callback=null,F=R.priorityLevel;var Te=J(R.expirationTime<=j);if(j=s.unstable_now(),typeof Te=="function"){R.callback=Te,U(j),k=!0;break t}R===f(E)&&c(E),U(j)}else c(E);R=f(E)}if(R!==null)k=!0;else{var m=f(y);m!==null&&he(Y,m.startTime-j),k=!1}}break e}finally{R=null,F=K,ne=!1}k=void 0}}finally{k?ae():X=!1}}}var ae;if(typeof ue=="function")ae=function(){ue(_e)};else if(typeof MessageChannel<"u"){var Me=new MessageChannel,ot=Me.port2;Me.port1.onmessage=_e,ae=function(){ot.postMessage(null)}}else ae=function(){P(_e,0)};function he(j,k){L=P(function(){j(s.unstable_now())},k)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(j){j.callback=null},s.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ce=0<j?Math.floor(1e3/j):5},s.unstable_getCurrentPriorityLevel=function(){return F},s.unstable_next=function(j){switch(F){case 1:case 2:case 3:var k=3;break;default:k=F}var K=F;F=k;try{return j()}finally{F=K}},s.unstable_requestPaint=function(){ze=!0},s.unstable_runWithPriority=function(j,k){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var K=F;F=j;try{return k()}finally{F=K}},s.unstable_scheduleCallback=function(j,k,K){var J=s.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?J+K:J):K=J,j){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=K+Te,j={id:V++,callback:k,priorityLevel:j,startTime:K,expirationTime:Te,sortIndex:-1},K>J?(j.sortIndex=K,h(y,j),f(E)===null&&j===f(y)&&(we?($(L),L=-1):we=!0,he(Y,K-J))):(j.sortIndex=Te,h(E,j),xe||ne||(xe=!0,X||(X=!0,ae()))),j},s.unstable_shouldYield=ee,s.unstable_wrapCallback=function(j){var k=F;return function(){var K=F;F=k;try{return j.apply(this,arguments)}finally{F=K}}}})(Xs)),Xs}var Kf;function Oh(){return Kf||(Kf=1,Ys.exports=Dh()),Ys.exports}var Qs={exports:{}},ut={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jf;function wh(){if(Jf)return ut;Jf=1;var s=Ws();function h(E){var y="https://react.dev/errors/"+E;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var V=2;V<arguments.length;V++)y+="&args[]="+encodeURIComponent(arguments[V])}return"Minified React error #"+E+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var c={d:{f,r:function(){throw Error(h(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},v=Symbol.for("react.portal");function _(E,y,V){var R=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:v,key:R==null?null:""+R,children:E,containerInfo:y,implementation:V}}var z=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function w(E,y){if(E==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return ut.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,ut.createPortal=function(E,y){var V=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(h(299));return _(E,y,null,V)},ut.flushSync=function(E){var y=z.T,V=c.p;try{if(z.T=null,c.p=2,E)return E()}finally{z.T=y,c.p=V,c.d.f()}},ut.preconnect=function(E,y){typeof E=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,c.d.C(E,y))},ut.prefetchDNS=function(E){typeof E=="string"&&c.d.D(E)},ut.preinit=function(E,y){if(typeof E=="string"&&y&&typeof y.as=="string"){var V=y.as,R=w(V,y.crossOrigin),F=typeof y.integrity=="string"?y.integrity:void 0,ne=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;V==="style"?c.d.S(E,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:R,integrity:F,fetchPriority:ne}):V==="script"&&c.d.X(E,{crossOrigin:R,integrity:F,fetchPriority:ne,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},ut.preinitModule=function(E,y){if(typeof E=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var V=w(y.as,y.crossOrigin);c.d.M(E,{crossOrigin:V,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&c.d.M(E)},ut.preload=function(E,y){if(typeof E=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var V=y.as,R=w(V,y.crossOrigin);c.d.L(E,V,{crossOrigin:R,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},ut.preloadModule=function(E,y){if(typeof E=="string")if(y){var V=w(y.as,y.crossOrigin);c.d.m(E,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:V,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else c.d.m(E)},ut.requestFormReset=function(E){c.d.r(E)},ut.unstable_batchedUpdates=function(E,y){return E(y)},ut.useFormState=function(E,y,V){return z.H.useFormState(E,y,V)},ut.useFormStatus=function(){return z.H.useHostTransitionStatus()},ut.version="19.2.4",ut}var Pf;function Rh(){if(Pf)return Qs.exports;Pf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(h){console.error(h)}}return s(),Qs.exports=wh(),Qs.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ff;function Uh(){if(Ff)return oi;Ff=1;var s=Oh(),h=Ws(),f=Rh();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function v(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function z(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function w(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function E(e){if(_(e)!==e)throw Error(c(188))}function y(e){var t=e.alternate;if(!t){if(t=_(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return E(l),e;if(i===a)return E(l),t;i=i.sibling}throw Error(c(188))}if(n.return!==a.return)n=l,a=i;else{for(var o=!1,u=l.child;u;){if(u===n){o=!0,n=l,a=i;break}if(u===a){o=!0,a=l,n=i;break}u=u.sibling}if(!o){for(u=i.child;u;){if(u===n){o=!0,n=i,a=l;break}if(u===a){o=!0,a=i,n=l;break}u=u.sibling}if(!o)throw Error(c(189))}}if(n.alternate!==a)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function V(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=V(e),t!==null)return t;e=e.sibling}return null}var R=Object.assign,F=Symbol.for("react.element"),ne=Symbol.for("react.transitional.element"),xe=Symbol.for("react.portal"),we=Symbol.for("react.fragment"),ze=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),$=Symbol.for("react.consumer"),ue=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),de=Symbol.for("react.activity"),ee=Symbol.for("react.memo_cache_sentinel"),_e=Symbol.iterator;function ae(e){return e===null||typeof e!="object"?null:(e=_e&&e[_e]||e["@@iterator"],typeof e=="function"?e:null)}var Me=Symbol.for("react.client.reference");function ot(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Me?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case we:return"Fragment";case P:return"Profiler";case ze:return"StrictMode";case Y:return"Suspense";case X:return"SuspenseList";case de:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case xe:return"Portal";case ue:return e.displayName||"Context";case $:return(e._context.displayName||"Context")+".Consumer";case U:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case L:return t=e.displayName||null,t!==null?t:ot(e.type)||"Memo";case ce:t=e._payload,e=e._init;try{return ot(e(t))}catch{}}return null}var he=Array.isArray,j=h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},J=[],Te=-1;function m(e){return{current:e}}function D(e){0>Te||(e.current=J[Te],J[Te]=null,Te--)}function H(e,t){Te++,J[Te]=e.current,e.current=t}var G=m(null),le=m(null),se=m(null),Ae=m(null);function We(e,t){switch(H(se,t),H(le,e),H(G,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?df(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=df(t),e=ff(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}D(G),H(G,e)}function qe(){D(G),D(le),D(se)}function Kt(e){e.memoizedState!==null&&H(Ae,e);var t=G.current,n=ff(t,e.type);t!==n&&(H(le,e),H(G,n))}function pa(e){le.current===e&&(D(G),D(le)),Ae.current===e&&(D(Ae),ti._currentValue=K)}var ha,cl;function Jt(e){if(ha===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ha=t&&t[1]||"",cl=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ha+e+cl}var dl=!1;function ga(e,t){if(!e||dl)return"";dl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch(A){var T=A}Reflect.construct(e,[],O)}else{try{O.call()}catch(A){T=A}e.call(O.prototype)}}else{try{throw Error()}catch(A){T=A}(O=e())&&typeof O.catch=="function"&&O.catch(function(){})}}catch(A){if(A&&T&&typeof A.stack=="string")return[A.stack,T.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),o=i[0],u=i[1];if(o&&u){var d=o.split(`
`),S=u.split(`
`);for(l=a=0;a<d.length&&!d[a].includes("DetermineComponentFrameRoot");)a++;for(;l<S.length&&!S[l].includes("DetermineComponentFrameRoot");)l++;if(a===d.length||l===S.length)for(a=d.length-1,l=S.length-1;1<=a&&0<=l&&d[a]!==S[l];)l--;for(;1<=a&&0<=l;a--,l--)if(d[a]!==S[l]){if(a!==1||l!==1)do if(a--,l--,0>l||d[a]!==S[l]){var M=`
`+d[a].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),M}while(1<=a&&0<=l);break}}}finally{dl=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Jt(n):""}function Oo(e,t){switch(e.tag){case 26:case 27:case 5:return Jt(e.type);case 16:return Jt("Lazy");case 13:return e.child!==t&&t!==null?Jt("Suspense Fallback"):Jt("Suspense");case 19:return Jt("SuspenseList");case 0:case 15:return ga(e.type,!1);case 11:return ga(e.type.render,!1);case 1:return ga(e.type,!0);case 31:return Jt("Activity");default:return""}}function Pt(e){try{var t="",n=null;do t+=Oo(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Fn=Object.prototype.hasOwnProperty,va=s.unstable_scheduleCallback,ya=s.unstable_cancelCallback,wo=s.unstable_shouldYield,ri=s.unstable_requestPaint,rt=s.unstable_now,si=s.unstable_getCurrentPriorityLevel,$e=s.unstable_ImmediatePriority,ba=s.unstable_UserBlockingPriority,xn=s.unstable_NormalPriority,Sn=s.unstable_LowPriority,ui=s.unstable_IdlePriority,$s=s.log,xa=s.unstable_setDisableYieldValue,yt=null,st=null;function zt(e){if(typeof $s=="function"&&xa(e),st&&typeof st.setStrictMode=="function")try{st.setStrictMode(yt,e)}catch{}}var et=Math.clz32?Math.clz32:Ta,ci=Math.log,Sa=Math.LN2;function Ta(e){return e>>>=0,e===0?32:31-(ci(e)/Sa|0)|0}var Ft=256,Wt=262144,It=4194304;function $t(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _a(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var l=0,i=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var u=a&134217727;return u!==0?(a=u&~i,a!==0?l=$t(a):(o&=u,o!==0?l=$t(o):n||(n=u&~e,n!==0&&(l=$t(n))))):(u=a&~i,u!==0?l=$t(u):o!==0?l=$t(o):n||(n=a&~e,n!==0&&(l=$t(n)))),l===0?0:t!==0&&t!==l&&(t&i)===0&&(i=l&-l,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:l}function Tn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Lt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Aa(){var e=It;return It<<=1,(It&62914560)===0&&(It=4194304),e}function Ea(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function _n(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function di(e,t,n,a,l,i){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var u=e.entanglements,d=e.expirationTimes,S=e.hiddenUpdates;for(n=o&~n;0<n;){var M=31-et(n),O=1<<M;u[M]=0,d[M]=-1;var T=S[M];if(T!==null)for(S[M]=null,M=0;M<T.length;M++){var A=T[M];A!==null&&(A.lane&=-536870913)}n&=~O}a!==0&&fl(e,a,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(o&~t))}function fl(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-et(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function ml(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-et(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}function pl(e,t){var n=t&-t;return n=(n&42)!==0?1:ja(n),(n&(e.suspendedLanes|t))!==0?0:n}function ja(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function za(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function hl(){var e=k.p;return e!==0?e:(e=window.event,e===void 0?32:Bf(e.type))}function gl(e,t){var n=k.p;try{return k.p=e,t()}finally{k.p=n}}var Ht=Math.random().toString(36).slice(2),Qe="__reactFiber$"+Ht,tt="__reactProps$"+Ht,en="__reactContainer$"+Ht,Ma="__reactEvents$"+Ht,fi="__reactListeners$"+Ht,mi="__reactHandles$"+Ht,vl="__reactResources$"+Ht,An="__reactMarker$"+Ht;function b(e){delete e[Qe],delete e[tt],delete e[Ma],delete e[fi],delete e[mi]}function N(e){var t=e[Qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[en]||n[Qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=bf(e);e!==null;){if(n=e[Qe])return n;e=bf(e)}return t}e=n,n=e.parentNode}return null}function te(e){if(e=e[Qe]||e[en]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function fe(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function Se(e){var t=e[vl];return t||(t=e[vl]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ye(e){e[An]=!0}var ct=new Set,pi={};function Wn(e,t){Ca(e,t),Ca(e+"Capture",t)}function Ca(e,t){for(pi[e]=t,e=0;e<t.length;e++)ct.add(t[e])}var vm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),eu={},tu={};function ym(e){return Fn.call(tu,e)?!0:Fn.call(eu,e)?!1:vm.test(e)?tu[e]=!0:(eu[e]=!0,!1)}function hi(e,t,n){if(ym(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function gi(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function tn(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function Mt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function nu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function bm(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){n=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ro(e){if(!e._valueTracker){var t=nu(e)?"checked":"value";e._valueTracker=bm(e,t,""+e[t])}}function au(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=nu(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function vi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var xm=/[\n"\\]/g;function Ct(e){return e.replace(xm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Uo(e,t,n,a,l,i,o,u){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Mt(t)):e.value!==""+Mt(t)&&(e.value=""+Mt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?Bo(e,o,Mt(t)):n!=null?Bo(e,o,Mt(n)):a!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+Mt(u):e.removeAttribute("name")}function lu(e,t,n,a,l,i,o,u){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Ro(e);return}n=n!=null?""+Mt(n):"",t=t!=null?""+Mt(t):n,u||t===e.value||(e.value=t),e.defaultValue=t}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=u?e.checked:!!a,e.defaultChecked=!!a,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),Ro(e)}function Bo(e,t,n){t==="number"&&vi(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Da(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Mt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function iu(e,t,n){if(t!=null&&(t=""+Mt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Mt(n):""}function ou(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(c(92));if(he(a)){if(1<a.length)throw Error(c(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Mt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),Ro(e)}function Oa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Sm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ru(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||Sm.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function su(e,t,n){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in t)a=t[l],t.hasOwnProperty(l)&&n[l]!==a&&ru(e,l,a)}else for(var i in t)t.hasOwnProperty(i)&&ru(e,i,t[i])}function ko(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_m=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function yi(e){return _m.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function nn(){}var qo=null;function Lo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wa=null,Ra=null;function uu(e){var t=te(e);if(t&&(e=t.stateNode)){var n=e[tt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Uo(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ct(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=a[tt]||null;if(!l)throw Error(c(90));Uo(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&au(a)}break e;case"textarea":iu(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Da(e,!!n.multiple,t,!1)}}}var Ho=!1;function cu(e,t,n){if(Ho)return e(t,n);Ho=!0;try{var a=e(t);return a}finally{if(Ho=!1,(wa!==null||Ra!==null)&&(io(),wa&&(t=wa,e=Ra,Ra=wa=null,uu(t),e)))for(t=0;t<e.length;t++)uu(e[t])}}function yl(e,t){var n=e.stateNode;if(n===null)return null;var a=n[tt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var an=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),No=!1;if(an)try{var bl={};Object.defineProperty(bl,"passive",{get:function(){No=!0}}),window.addEventListener("test",bl,bl),window.removeEventListener("test",bl,bl)}catch{No=!1}var En=null,Go=null,bi=null;function du(){if(bi)return bi;var e,t=Go,n=t.length,a,l="value"in En?En.value:En.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(a=1;a<=o&&t[n-a]===l[i-a];a++);return bi=l.slice(e,1<a?1-a:void 0)}function xi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Si(){return!0}function fu(){return!1}function ft(e){function t(n,a,l,i,o){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Si:fu,this.isPropagationStopped=fu,this}return R(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Si)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Si)},persist:function(){},isPersistent:Si}),t}var In={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ti=ft(In),xl=R({},In,{view:0,detail:0}),Am=ft(xl),Vo,Yo,Sl,_i=R({},xl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Sl&&(Sl&&e.type==="mousemove"?(Vo=e.screenX-Sl.screenX,Yo=e.screenY-Sl.screenY):Yo=Vo=0,Sl=e),Vo)},movementY:function(e){return"movementY"in e?e.movementY:Yo}}),mu=ft(_i),Em=R({},_i,{dataTransfer:0}),jm=ft(Em),zm=R({},xl,{relatedTarget:0}),Xo=ft(zm),Mm=R({},In,{animationName:0,elapsedTime:0,pseudoElement:0}),Cm=ft(Mm),Dm=R({},In,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Om=ft(Dm),wm=R({},In,{data:0}),pu=ft(wm),Rm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Um={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function km(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Bm[e])?!!t[e]:!1}function Qo(){return km}var qm=R({},xl,{key:function(e){if(e.key){var t=Rm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Um[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qo,charCode:function(e){return e.type==="keypress"?xi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Lm=ft(qm),Hm=R({},_i,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hu=ft(Hm),Nm=R({},xl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qo}),Gm=ft(Nm),Vm=R({},In,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ym=ft(Vm),Xm=R({},_i,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qm=ft(Xm),Zm=R({},In,{newState:0,oldState:0}),Km=ft(Zm),Jm=[9,13,27,32],Zo=an&&"CompositionEvent"in window,Tl=null;an&&"documentMode"in document&&(Tl=document.documentMode);var Pm=an&&"TextEvent"in window&&!Tl,gu=an&&(!Zo||Tl&&8<Tl&&11>=Tl),vu=" ",yu=!1;function bu(e,t){switch(e){case"keyup":return Jm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ua=!1;function Fm(e,t){switch(e){case"compositionend":return xu(t);case"keypress":return t.which!==32?null:(yu=!0,vu);case"textInput":return e=t.data,e===vu&&yu?null:e;default:return null}}function Wm(e,t){if(Ua)return e==="compositionend"||!Zo&&bu(e,t)?(e=du(),bi=Go=En=null,Ua=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return gu&&t.locale!=="ko"?null:t.data;default:return null}}var Im={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Su(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Im[e.type]:t==="textarea"}function Tu(e,t,n,a){wa?Ra?Ra.push(a):Ra=[a]:wa=a,t=mo(t,"onChange"),0<t.length&&(n=new Ti("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var _l=null,Al=null;function $m(e){lf(e,0)}function Ai(e){var t=fe(e);if(au(t))return e}function _u(e,t){if(e==="change")return t}var Au=!1;if(an){var Ko;if(an){var Jo="oninput"in document;if(!Jo){var Eu=document.createElement("div");Eu.setAttribute("oninput","return;"),Jo=typeof Eu.oninput=="function"}Ko=Jo}else Ko=!1;Au=Ko&&(!document.documentMode||9<document.documentMode)}function ju(){_l&&(_l.detachEvent("onpropertychange",zu),Al=_l=null)}function zu(e){if(e.propertyName==="value"&&Ai(Al)){var t=[];Tu(t,Al,e,Lo(e)),cu($m,t)}}function ep(e,t,n){e==="focusin"?(ju(),_l=t,Al=n,_l.attachEvent("onpropertychange",zu)):e==="focusout"&&ju()}function tp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ai(Al)}function np(e,t){if(e==="click")return Ai(t)}function ap(e,t){if(e==="input"||e==="change")return Ai(t)}function lp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var bt=typeof Object.is=="function"?Object.is:lp;function El(e,t){if(bt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!Fn.call(t,l)||!bt(e[l],t[l]))return!1}return!0}function Mu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cu(e,t){var n=Mu(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mu(n)}}function Du(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Du(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ou(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=vi(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=vi(e.document)}return t}function Po(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var ip=an&&"documentMode"in document&&11>=document.documentMode,Ba=null,Fo=null,jl=null,Wo=!1;function wu(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wo||Ba==null||Ba!==vi(a)||(a=Ba,"selectionStart"in a&&Po(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),jl&&El(jl,a)||(jl=a,a=mo(Fo,"onSelect"),0<a.length&&(t=new Ti("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Ba)))}function $n(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ka={animationend:$n("Animation","AnimationEnd"),animationiteration:$n("Animation","AnimationIteration"),animationstart:$n("Animation","AnimationStart"),transitionrun:$n("Transition","TransitionRun"),transitionstart:$n("Transition","TransitionStart"),transitioncancel:$n("Transition","TransitionCancel"),transitionend:$n("Transition","TransitionEnd")},Io={},Ru={};an&&(Ru=document.createElement("div").style,"AnimationEvent"in window||(delete ka.animationend.animation,delete ka.animationiteration.animation,delete ka.animationstart.animation),"TransitionEvent"in window||delete ka.transitionend.transition);function ea(e){if(Io[e])return Io[e];if(!ka[e])return e;var t=ka[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ru)return Io[e]=t[n];return e}var Uu=ea("animationend"),Bu=ea("animationiteration"),ku=ea("animationstart"),op=ea("transitionrun"),rp=ea("transitionstart"),sp=ea("transitioncancel"),qu=ea("transitionend"),Lu=new Map,$o="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");$o.push("scrollEnd");function Nt(e,t){Lu.set(e,t),Wn(t,[e])}var Ei=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Dt=[],qa=0,er=0;function ji(){for(var e=qa,t=er=qa=0;t<e;){var n=Dt[t];Dt[t++]=null;var a=Dt[t];Dt[t++]=null;var l=Dt[t];Dt[t++]=null;var i=Dt[t];if(Dt[t++]=null,a!==null&&l!==null){var o=a.pending;o===null?l.next=l:(l.next=o.next,o.next=l),a.pending=l}i!==0&&Hu(n,l,i)}}function zi(e,t,n,a){Dt[qa++]=e,Dt[qa++]=t,Dt[qa++]=n,Dt[qa++]=a,er|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function tr(e,t,n,a){return zi(e,t,n,a),Mi(e)}function ta(e,t){return zi(e,null,null,t),Mi(e)}function Hu(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var l=!1,i=e.return;i!==null;)i.childLanes|=n,a=i.alternate,a!==null&&(a.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&t!==null&&(l=31-et(n),e=i.hiddenUpdates,a=e[l],a===null?e[l]=[t]:a.push(t),t.lane=n|536870912),i):null}function Mi(e){if(50<Jl)throw Jl=0,cs=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var La={};function up(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(e,t,n,a){return new up(e,t,n,a)}function nr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ln(e,t){var n=e.alternate;return n===null?(n=xt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Nu(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ci(e,t,n,a,l,i){var o=0;if(a=e,typeof e=="function")nr(e)&&(o=1);else if(typeof e=="string")o=ph(e,n,G.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case de:return e=xt(31,n,t,l),e.elementType=de,e.lanes=i,e;case we:return na(n.children,l,i,t);case ze:o=8,l|=24;break;case P:return e=xt(12,n,t,l|2),e.elementType=P,e.lanes=i,e;case Y:return e=xt(13,n,t,l),e.elementType=Y,e.lanes=i,e;case X:return e=xt(19,n,t,l),e.elementType=X,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ue:o=10;break e;case $:o=9;break e;case U:o=11;break e;case L:o=14;break e;case ce:o=16,a=null;break e}o=29,n=Error(c(130,e===null?"null":typeof e,"")),a=null}return t=xt(o,n,t,l),t.elementType=e,t.type=a,t.lanes=i,t}function na(e,t,n,a){return e=xt(7,e,a,t),e.lanes=n,e}function ar(e,t,n){return e=xt(6,e,null,t),e.lanes=n,e}function Gu(e){var t=xt(18,null,null,0);return t.stateNode=e,t}function lr(e,t,n){return t=xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Vu=new WeakMap;function Ot(e,t){if(typeof e=="object"&&e!==null){var n=Vu.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Pt(t)},Vu.set(e,t),t)}return{value:e,source:t,stack:Pt(t)}}var Ha=[],Na=0,Di=null,zl=0,wt=[],Rt=0,jn=null,Yt=1,Xt="";function on(e,t){Ha[Na++]=zl,Ha[Na++]=Di,Di=e,zl=t}function Yu(e,t,n){wt[Rt++]=Yt,wt[Rt++]=Xt,wt[Rt++]=jn,jn=e;var a=Yt;e=Xt;var l=32-et(a)-1;a&=~(1<<l),n+=1;var i=32-et(t)+l;if(30<i){var o=l-l%5;i=(a&(1<<o)-1).toString(32),a>>=o,l-=o,Yt=1<<32-et(t)+l|n<<l|a,Xt=i+e}else Yt=1<<i|n<<l|a,Xt=e}function ir(e){e.return!==null&&(on(e,1),Yu(e,1,0))}function or(e){for(;e===Di;)Di=Ha[--Na],Ha[Na]=null,zl=Ha[--Na],Ha[Na]=null;for(;e===jn;)jn=wt[--Rt],wt[Rt]=null,Xt=wt[--Rt],wt[Rt]=null,Yt=wt[--Rt],wt[Rt]=null}function Xu(e,t){wt[Rt++]=Yt,wt[Rt++]=Xt,wt[Rt++]=jn,Yt=t.id,Xt=t.overflow,jn=e}var nt=null,Le=null,be=!1,zn=null,Ut=!1,rr=Error(c(519));function Mn(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ml(Ot(t,e)),rr}function Qu(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[Qe]=e,t[tt]=a,n){case"dialog":pe("cancel",t),pe("close",t);break;case"iframe":case"object":case"embed":pe("load",t);break;case"video":case"audio":for(n=0;n<Fl.length;n++)pe(Fl[n],t);break;case"source":pe("error",t);break;case"img":case"image":case"link":pe("error",t),pe("load",t);break;case"details":pe("toggle",t);break;case"input":pe("invalid",t),lu(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":pe("invalid",t);break;case"textarea":pe("invalid",t),ou(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||uf(t.textContent,n)?(a.popover!=null&&(pe("beforetoggle",t),pe("toggle",t)),a.onScroll!=null&&pe("scroll",t),a.onScrollEnd!=null&&pe("scrollend",t),a.onClick!=null&&(t.onclick=nn),t=!0):t=!1,t||Mn(e,!0)}function Zu(e){for(nt=e.return;nt;)switch(nt.tag){case 5:case 31:case 13:Ut=!1;return;case 27:case 3:Ut=!0;return;default:nt=nt.return}}function Ga(e){if(e!==nt)return!1;if(!be)return Zu(e),be=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Es(e.type,e.memoizedProps)),n=!n),n&&Le&&Mn(e),Zu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Le=yf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Le=yf(e)}else t===27?(t=Le,Vn(e.type)?(e=Ds,Ds=null,Le=e):Le=t):Le=nt?kt(e.stateNode.nextSibling):null;return!0}function aa(){Le=nt=null,be=!1}function sr(){var e=zn;return e!==null&&(gt===null?gt=e:gt.push.apply(gt,e),zn=null),e}function Ml(e){zn===null?zn=[e]:zn.push(e)}var ur=m(null),la=null,rn=null;function Cn(e,t,n){H(ur,t._currentValue),t._currentValue=n}function sn(e){e._currentValue=ur.current,D(ur)}function cr(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function dr(e,t,n,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var o=l.child;i=i.firstContext;e:for(;i!==null;){var u=i;i=l;for(var d=0;d<t.length;d++)if(u.context===t[d]){i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),cr(i.return,n,e),a||(o=null);break e}i=u.next}}else if(l.tag===18){if(o=l.return,o===null)throw Error(c(341));o.lanes|=n,i=o.alternate,i!==null&&(i.lanes|=n),cr(o,n,e),o=null}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===e){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}}function Va(e,t,n,a){e=null;for(var l=t,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var o=l.alternate;if(o===null)throw Error(c(387));if(o=o.memoizedProps,o!==null){var u=l.type;bt(l.pendingProps.value,o.value)||(e!==null?e.push(u):e=[u])}}else if(l===Ae.current){if(o=l.alternate,o===null)throw Error(c(387));o.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(ti):e=[ti])}l=l.return}e!==null&&dr(t,e,n,a),t.flags|=262144}function Oi(e){for(e=e.firstContext;e!==null;){if(!bt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ia(e){la=e,rn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function at(e){return Ku(la,e)}function wi(e,t){return la===null&&ia(e),Ku(e,t)}function Ku(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},rn===null){if(e===null)throw Error(c(308));rn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else rn=rn.next=t;return n}var cp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},dp=s.unstable_scheduleCallback,fp=s.unstable_NormalPriority,Ze={$$typeof:ue,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fr(){return{controller:new cp,data:new Map,refCount:0}}function Cl(e){e.refCount--,e.refCount===0&&dp(fp,function(){e.controller.abort()})}var Dl=null,mr=0,Ya=0,Xa=null;function mp(e,t){if(Dl===null){var n=Dl=[];mr=0,Ya=gs(),Xa={status:"pending",value:void 0,then:function(a){n.push(a)}}}return mr++,t.then(Ju,Ju),t}function Ju(){if(--mr===0&&Dl!==null){Xa!==null&&(Xa.status="fulfilled");var e=Dl;Dl=null,Ya=0,Xa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function pp(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var Pu=j.S;j.S=function(e,t){wd=rt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&mp(e,t),Pu!==null&&Pu(e,t)};var oa=m(null);function pr(){var e=oa.current;return e!==null?e:ke.pooledCache}function Ri(e,t){t===null?H(oa,oa.current):H(oa,t.pool)}function Fu(){var e=pr();return e===null?null:{parent:Ze._currentValue,pool:e}}var Qa=Error(c(460)),hr=Error(c(474)),Ui=Error(c(542)),Bi={then:function(){}};function Wu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Iu(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(nn,nn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ec(e),e;default:if(typeof t.status=="string")t.then(nn,nn);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=a}},function(a){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ec(e),e}throw sa=t,Qa}}function ra(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(sa=n,Qa):n}}var sa=null;function $u(){if(sa===null)throw Error(c(459));var e=sa;return sa=null,e}function ec(e){if(e===Qa||e===Ui)throw Error(c(483))}var Za=null,Ol=0;function ki(e){var t=Ol;return Ol+=1,Za===null&&(Za=[]),Iu(Za,e,t)}function wl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function qi(e,t){throw t.$$typeof===F?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function tc(e){function t(g,p){if(e){var x=g.deletions;x===null?(g.deletions=[p],g.flags|=16):x.push(p)}}function n(g,p){if(!e)return null;for(;p!==null;)t(g,p),p=p.sibling;return null}function a(g){for(var p=new Map;g!==null;)g.key!==null?p.set(g.key,g):p.set(g.index,g),g=g.sibling;return p}function l(g,p){return g=ln(g,p),g.index=0,g.sibling=null,g}function i(g,p,x){return g.index=x,e?(x=g.alternate,x!==null?(x=x.index,x<p?(g.flags|=67108866,p):x):(g.flags|=67108866,p)):(g.flags|=1048576,p)}function o(g){return e&&g.alternate===null&&(g.flags|=67108866),g}function u(g,p,x,C){return p===null||p.tag!==6?(p=ar(x,g.mode,C),p.return=g,p):(p=l(p,x),p.return=g,p)}function d(g,p,x,C){var W=x.type;return W===we?M(g,p,x.props.children,C,x.key):p!==null&&(p.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===ce&&ra(W)===p.type)?(p=l(p,x.props),wl(p,x),p.return=g,p):(p=Ci(x.type,x.key,x.props,null,g.mode,C),wl(p,x),p.return=g,p)}function S(g,p,x,C){return p===null||p.tag!==4||p.stateNode.containerInfo!==x.containerInfo||p.stateNode.implementation!==x.implementation?(p=lr(x,g.mode,C),p.return=g,p):(p=l(p,x.children||[]),p.return=g,p)}function M(g,p,x,C,W){return p===null||p.tag!==7?(p=na(x,g.mode,C,W),p.return=g,p):(p=l(p,x),p.return=g,p)}function O(g,p,x){if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return p=ar(""+p,g.mode,x),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ne:return x=Ci(p.type,p.key,p.props,null,g.mode,x),wl(x,p),x.return=g,x;case xe:return p=lr(p,g.mode,x),p.return=g,p;case ce:return p=ra(p),O(g,p,x)}if(he(p)||ae(p))return p=na(p,g.mode,x,null),p.return=g,p;if(typeof p.then=="function")return O(g,ki(p),x);if(p.$$typeof===ue)return O(g,wi(g,p),x);qi(g,p)}return null}function T(g,p,x,C){var W=p!==null?p.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return W!==null?null:u(g,p,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ne:return x.key===W?d(g,p,x,C):null;case xe:return x.key===W?S(g,p,x,C):null;case ce:return x=ra(x),T(g,p,x,C)}if(he(x)||ae(x))return W!==null?null:M(g,p,x,C,null);if(typeof x.then=="function")return T(g,p,ki(x),C);if(x.$$typeof===ue)return T(g,p,wi(g,x),C);qi(g,x)}return null}function A(g,p,x,C,W){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return g=g.get(x)||null,u(p,g,""+C,W);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case ne:return g=g.get(C.key===null?x:C.key)||null,d(p,g,C,W);case xe:return g=g.get(C.key===null?x:C.key)||null,S(p,g,C,W);case ce:return C=ra(C),A(g,p,x,C,W)}if(he(C)||ae(C))return g=g.get(x)||null,M(p,g,C,W,null);if(typeof C.then=="function")return A(g,p,x,ki(C),W);if(C.$$typeof===ue)return A(g,p,x,wi(p,C),W);qi(p,C)}return null}function Q(g,p,x,C){for(var W=null,Ee=null,Z=p,re=p=0,ve=null;Z!==null&&re<x.length;re++){Z.index>re?(ve=Z,Z=null):ve=Z.sibling;var je=T(g,Z,x[re],C);if(je===null){Z===null&&(Z=ve);break}e&&Z&&je.alternate===null&&t(g,Z),p=i(je,p,re),Ee===null?W=je:Ee.sibling=je,Ee=je,Z=ve}if(re===x.length)return n(g,Z),be&&on(g,re),W;if(Z===null){for(;re<x.length;re++)Z=O(g,x[re],C),Z!==null&&(p=i(Z,p,re),Ee===null?W=Z:Ee.sibling=Z,Ee=Z);return be&&on(g,re),W}for(Z=a(Z);re<x.length;re++)ve=A(Z,g,re,x[re],C),ve!==null&&(e&&ve.alternate!==null&&Z.delete(ve.key===null?re:ve.key),p=i(ve,p,re),Ee===null?W=ve:Ee.sibling=ve,Ee=ve);return e&&Z.forEach(function(Kn){return t(g,Kn)}),be&&on(g,re),W}function I(g,p,x,C){if(x==null)throw Error(c(151));for(var W=null,Ee=null,Z=p,re=p=0,ve=null,je=x.next();Z!==null&&!je.done;re++,je=x.next()){Z.index>re?(ve=Z,Z=null):ve=Z.sibling;var Kn=T(g,Z,je.value,C);if(Kn===null){Z===null&&(Z=ve);break}e&&Z&&Kn.alternate===null&&t(g,Z),p=i(Kn,p,re),Ee===null?W=Kn:Ee.sibling=Kn,Ee=Kn,Z=ve}if(je.done)return n(g,Z),be&&on(g,re),W;if(Z===null){for(;!je.done;re++,je=x.next())je=O(g,je.value,C),je!==null&&(p=i(je,p,re),Ee===null?W=je:Ee.sibling=je,Ee=je);return be&&on(g,re),W}for(Z=a(Z);!je.done;re++,je=x.next())je=A(Z,g,re,je.value,C),je!==null&&(e&&je.alternate!==null&&Z.delete(je.key===null?re:je.key),p=i(je,p,re),Ee===null?W=je:Ee.sibling=je,Ee=je);return e&&Z.forEach(function(Eh){return t(g,Eh)}),be&&on(g,re),W}function Be(g,p,x,C){if(typeof x=="object"&&x!==null&&x.type===we&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ne:e:{for(var W=x.key;p!==null;){if(p.key===W){if(W=x.type,W===we){if(p.tag===7){n(g,p.sibling),C=l(p,x.props.children),C.return=g,g=C;break e}}else if(p.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===ce&&ra(W)===p.type){n(g,p.sibling),C=l(p,x.props),wl(C,x),C.return=g,g=C;break e}n(g,p);break}else t(g,p);p=p.sibling}x.type===we?(C=na(x.props.children,g.mode,C,x.key),C.return=g,g=C):(C=Ci(x.type,x.key,x.props,null,g.mode,C),wl(C,x),C.return=g,g=C)}return o(g);case xe:e:{for(W=x.key;p!==null;){if(p.key===W)if(p.tag===4&&p.stateNode.containerInfo===x.containerInfo&&p.stateNode.implementation===x.implementation){n(g,p.sibling),C=l(p,x.children||[]),C.return=g,g=C;break e}else{n(g,p);break}else t(g,p);p=p.sibling}C=lr(x,g.mode,C),C.return=g,g=C}return o(g);case ce:return x=ra(x),Be(g,p,x,C)}if(he(x))return Q(g,p,x,C);if(ae(x)){if(W=ae(x),typeof W!="function")throw Error(c(150));return x=W.call(x),I(g,p,x,C)}if(typeof x.then=="function")return Be(g,p,ki(x),C);if(x.$$typeof===ue)return Be(g,p,wi(g,x),C);qi(g,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,p!==null&&p.tag===6?(n(g,p.sibling),C=l(p,x),C.return=g,g=C):(n(g,p),C=ar(x,g.mode,C),C.return=g,g=C),o(g)):n(g,p)}return function(g,p,x,C){try{Ol=0;var W=Be(g,p,x,C);return Za=null,W}catch(Z){if(Z===Qa||Z===Ui)throw Z;var Ee=xt(29,Z,null,g.mode);return Ee.lanes=C,Ee.return=g,Ee}finally{}}}var ua=tc(!0),nc=tc(!1),Dn=!1;function gr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function On(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function wn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ce&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,t=Mi(e),Hu(e,null,n),t}return zi(e,a,t,n),Mi(e)}function Rl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,ml(e,n)}}function yr(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var br=!1;function Ul(){if(br){var e=Xa;if(e!==null)throw e}}function Bl(e,t,n,a){br=!1;var l=e.updateQueue;Dn=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var d=u,S=d.next;d.next=null,o===null?i=S:o.next=S,o=d;var M=e.alternate;M!==null&&(M=M.updateQueue,u=M.lastBaseUpdate,u!==o&&(u===null?M.firstBaseUpdate=S:u.next=S,M.lastBaseUpdate=d))}if(i!==null){var O=l.baseState;o=0,M=S=d=null,u=i;do{var T=u.lane&-536870913,A=T!==u.lane;if(A?(ge&T)===T:(a&T)===T){T!==0&&T===Ya&&(br=!0),M!==null&&(M=M.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var Q=e,I=u;T=t;var Be=n;switch(I.tag){case 1:if(Q=I.payload,typeof Q=="function"){O=Q.call(Be,O,T);break e}O=Q;break e;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=I.payload,T=typeof Q=="function"?Q.call(Be,O,T):Q,T==null)break e;O=R({},O,T);break e;case 2:Dn=!0}}T=u.callback,T!==null&&(e.flags|=64,A&&(e.flags|=8192),A=l.callbacks,A===null?l.callbacks=[T]:A.push(T))}else A={lane:T,tag:u.tag,payload:u.payload,callback:u.callback,next:null},M===null?(S=M=A,d=O):M=M.next=A,o|=T;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;A=u,u=A.next,A.next=null,l.lastBaseUpdate=A,l.shared.pending=null}}while(!0);M===null&&(d=O),l.baseState=d,l.firstBaseUpdate=S,l.lastBaseUpdate=M,i===null&&(l.shared.lanes=0),qn|=o,e.lanes=o,e.memoizedState=O}}function ac(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function lc(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ac(n[e],t)}var Ka=m(null),Li=m(0);function ic(e,t){e=vn,H(Li,e),H(Ka,t),vn=e|t.baseLanes}function xr(){H(Li,vn),H(Ka,Ka.current)}function Sr(){vn=Li.current,D(Ka),D(Li)}var St=m(null),Bt=null;function Rn(e){var t=e.alternate;H(Ye,Ye.current&1),H(St,e),Bt===null&&(t===null||Ka.current!==null||t.memoizedState!==null)&&(Bt=e)}function Tr(e){H(Ye,Ye.current),H(St,e),Bt===null&&(Bt=e)}function oc(e){e.tag===22?(H(Ye,Ye.current),H(St,e),Bt===null&&(Bt=e)):Un()}function Un(){H(Ye,Ye.current),H(St,St.current)}function Tt(e){D(St),Bt===e&&(Bt=null),D(Ye)}var Ye=m(0);function Hi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Ms(n)||Cs(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var un=0,oe=null,Re=null,Ke=null,Ni=!1,Ja=!1,ca=!1,Gi=0,kl=0,Pa=null,hp=0;function Ge(){throw Error(c(321))}function _r(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!bt(e[n],t[n]))return!1;return!0}function Ar(e,t,n,a,l,i){return un=i,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,j.H=e===null||e.memoizedState===null?Yc:Hr,ca=!1,i=n(a,l),ca=!1,Ja&&(i=sc(t,n,a,l)),rc(e),i}function rc(e){j.H=Hl;var t=Re!==null&&Re.next!==null;if(un=0,Ke=Re=oe=null,Ni=!1,kl=0,Pa=null,t)throw Error(c(300));e===null||Je||(e=e.dependencies,e!==null&&Oi(e)&&(Je=!0))}function sc(e,t,n,a){oe=e;var l=0;do{if(Ja&&(Pa=null),kl=0,Ja=!1,25<=l)throw Error(c(301));if(l+=1,Ke=Re=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}j.H=Xc,i=t(n,a)}while(Ja);return i}function gp(){var e=j.H,t=e.useState()[0];return t=typeof t.then=="function"?ql(t):t,e=e.useState()[0],(Re!==null?Re.memoizedState:null)!==e&&(oe.flags|=1024),t}function Er(){var e=Gi!==0;return Gi=0,e}function jr(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function zr(e){if(Ni){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ni=!1}un=0,Ke=Re=oe=null,Ja=!1,kl=Gi=0,Pa=null}function dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?oe.memoizedState=Ke=e:Ke=Ke.next=e,Ke}function Xe(){if(Re===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=Ke===null?oe.memoizedState:Ke.next;if(t!==null)Ke=t,Re=e;else{if(e===null)throw oe.alternate===null?Error(c(467)):Error(c(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Ke===null?oe.memoizedState=Ke=e:Ke=Ke.next=e}return Ke}function Vi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ql(e){var t=kl;return kl+=1,Pa===null&&(Pa=[]),e=Iu(Pa,e,t),t=oe,(Ke===null?t.memoizedState:Ke.next)===null&&(t=t.alternate,j.H=t===null||t.memoizedState===null?Yc:Hr),e}function Yi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ql(e);if(e.$$typeof===ue)return at(e)}throw Error(c(438,String(e)))}function Mr(e){var t=null,n=oe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=oe.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Vi(),oe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=ee;return t.index++,n}function cn(e,t){return typeof t=="function"?t(e):t}function Xi(e){var t=Xe();return Cr(t,Re,e)}function Cr(e,t,n){var a=e.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=n;var l=e.baseQueue,i=a.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}t.baseQueue=l=i,a.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{t=l.next;var u=o=null,d=null,S=t,M=!1;do{var O=S.lane&-536870913;if(O!==S.lane?(ge&O)===O:(un&O)===O){var T=S.revertLane;if(T===0)d!==null&&(d=d.next={lane:0,revertLane:0,gesture:null,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),O===Ya&&(M=!0);else if((un&T)===T){S=S.next,T===Ya&&(M=!0);continue}else O={lane:0,revertLane:S.revertLane,gesture:null,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},d===null?(u=d=O,o=i):d=d.next=O,oe.lanes|=T,qn|=T;O=S.action,ca&&n(i,O),i=S.hasEagerState?S.eagerState:n(i,O)}else T={lane:O,revertLane:S.revertLane,gesture:S.gesture,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},d===null?(u=d=T,o=i):d=d.next=T,oe.lanes|=O,qn|=O;S=S.next}while(S!==null&&S!==t);if(d===null?o=i:d.next=u,!bt(i,e.memoizedState)&&(Je=!0,M&&(n=Xa,n!==null)))throw n;e.memoizedState=i,e.baseState=o,e.baseQueue=d,a.lastRenderedState=i}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Dr(e){var t=Xe(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);bt(i,t.memoizedState)||(Je=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,a]}function uc(e,t,n){var a=oe,l=Xe(),i=be;if(i){if(n===void 0)throw Error(c(407));n=n()}else n=t();var o=!bt((Re||l).memoizedState,n);if(o&&(l.memoizedState=n,Je=!0),l=l.queue,Rr(fc.bind(null,a,l,e),[e]),l.getSnapshot!==t||o||Ke!==null&&Ke.memoizedState.tag&1){if(a.flags|=2048,Fa(9,{destroy:void 0},dc.bind(null,a,l,n,t),null),ke===null)throw Error(c(349));i||(un&127)!==0||cc(a,t,n)}return n}function cc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t=Vi(),oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function dc(e,t,n,a){t.value=n,t.getSnapshot=a,mc(t)&&pc(e)}function fc(e,t,n){return n(function(){mc(t)&&pc(e)})}function mc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!bt(e,n)}catch{return!0}}function pc(e){var t=ta(e,2);t!==null&&vt(t,e,2)}function Or(e){var t=dt();if(typeof e=="function"){var n=e;if(e=n(),ca){zt(!0);try{n()}finally{zt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cn,lastRenderedState:e},t}function hc(e,t,n,a){return e.baseState=n,Cr(e,Re,typeof a=="function"?a:cn)}function vp(e,t,n,a,l){if(Ki(e))throw Error(c(485));if(e=t.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){i.listeners.push(o)}};j.T!==null?n(!0):i.isTransition=!1,a(i),n=t.pending,n===null?(i.next=t.pending=i,gc(t,i)):(i.next=n.next,t.pending=n.next=i)}}function gc(e,t){var n=t.action,a=t.payload,l=e.state;if(t.isTransition){var i=j.T,o={};j.T=o;try{var u=n(l,a),d=j.S;d!==null&&d(o,u),vc(e,t,u)}catch(S){wr(e,t,S)}finally{i!==null&&o.types!==null&&(i.types=o.types),j.T=i}}else try{i=n(l,a),vc(e,t,i)}catch(S){wr(e,t,S)}}function vc(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){yc(e,t,a)},function(a){return wr(e,t,a)}):yc(e,t,n)}function yc(e,t,n){t.status="fulfilled",t.value=n,bc(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,gc(e,n)))}function wr(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,bc(t),t=t.next;while(t!==a)}e.action=null}function bc(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function xc(e,t){return t}function Sc(e,t){if(be){var n=ke.formState;if(n!==null){e:{var a=oe;if(be){if(Le){t:{for(var l=Le,i=Ut;l.nodeType!==8;){if(!i){l=null;break t}if(l=kt(l.nextSibling),l===null){l=null;break t}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){Le=kt(l.nextSibling),a=l.data==="F!";break e}}Mn(a)}a=!1}a&&(t=n[0])}}return n=dt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xc,lastRenderedState:t},n.queue=a,n=Nc.bind(null,oe,a),a.dispatch=n,a=Or(!1),i=Lr.bind(null,oe,!1,a.queue),a=dt(),l={state:t,dispatch:null,action:e,pending:null},a.queue=l,n=vp.bind(null,oe,l,i,n),l.dispatch=n,a.memoizedState=e,[t,n,!1]}function Tc(e){var t=Xe();return _c(t,Re,e)}function _c(e,t,n){if(t=Cr(e,t,xc)[0],e=Xi(cn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=ql(t)}catch(o){throw o===Qa?Ui:o}else a=t;t=Xe();var l=t.queue,i=l.dispatch;return n!==t.memoizedState&&(oe.flags|=2048,Fa(9,{destroy:void 0},yp.bind(null,l,n),null)),[a,i,e]}function yp(e,t){e.action=t}function Ac(e){var t=Xe(),n=Re;if(n!==null)return _c(t,n,e);Xe(),t=t.memoizedState,n=Xe();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Fa(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=oe.updateQueue,t===null&&(t=Vi(),oe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Ec(){return Xe().memoizedState}function Qi(e,t,n,a){var l=dt();oe.flags|=e,l.memoizedState=Fa(1|t,{destroy:void 0},n,a===void 0?null:a)}function Zi(e,t,n,a){var l=Xe();a=a===void 0?null:a;var i=l.memoizedState.inst;Re!==null&&a!==null&&_r(a,Re.memoizedState.deps)?l.memoizedState=Fa(t,i,n,a):(oe.flags|=e,l.memoizedState=Fa(1|t,i,n,a))}function jc(e,t){Qi(8390656,8,e,t)}function Rr(e,t){Zi(2048,8,e,t)}function bp(e){oe.flags|=4;var t=oe.updateQueue;if(t===null)t=Vi(),oe.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function zc(e){var t=Xe().memoizedState;return bp({ref:t,nextImpl:e}),function(){if((Ce&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function Mc(e,t){return Zi(4,2,e,t)}function Cc(e,t){return Zi(4,4,e,t)}function Dc(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Oc(e,t,n){n=n!=null?n.concat([e]):null,Zi(4,4,Dc.bind(null,t,e),n)}function Ur(){}function wc(e,t){var n=Xe();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&_r(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Rc(e,t){var n=Xe();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&_r(t,a[1]))return a[0];if(a=e(),ca){zt(!0);try{e()}finally{zt(!1)}}return n.memoizedState=[a,t],a}function Br(e,t,n){return n===void 0||(un&1073741824)!==0&&(ge&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Ud(),oe.lanes|=e,qn|=e,n)}function Uc(e,t,n,a){return bt(n,t)?n:Ka.current!==null?(e=Br(e,n,a),bt(e,t)||(Je=!0),e):(un&42)===0||(un&1073741824)!==0&&(ge&261930)===0?(Je=!0,e.memoizedState=n):(e=Ud(),oe.lanes|=e,qn|=e,t)}function Bc(e,t,n,a,l){var i=k.p;k.p=i!==0&&8>i?i:8;var o=j.T,u={};j.T=u,Lr(e,!1,t,n);try{var d=l(),S=j.S;if(S!==null&&S(u,d),d!==null&&typeof d=="object"&&typeof d.then=="function"){var M=pp(d,a);Ll(e,t,M,Et(e))}else Ll(e,t,a,Et(e))}catch(O){Ll(e,t,{then:function(){},status:"rejected",reason:O},Et())}finally{k.p=i,o!==null&&u.types!==null&&(o.types=u.types),j.T=o}}function xp(){}function kr(e,t,n,a){if(e.tag!==5)throw Error(c(476));var l=kc(e).queue;Bc(e,l,t,K,n===null?xp:function(){return qc(e),n(a)})}function kc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:cn,lastRenderedState:K},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:cn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function qc(e){var t=kc(e);t.next===null&&(t=e.alternate.memoizedState),Ll(e,t.next.queue,{},Et())}function qr(){return at(ti)}function Lc(){return Xe().memoizedState}function Hc(){return Xe().memoizedState}function Sp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Et();e=On(n);var a=wn(t,e,n);a!==null&&(vt(a,t,n),Rl(a,t,n)),t={cache:fr()},e.payload=t;return}t=t.return}}function Tp(e,t,n){var a=Et();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ki(e)?Gc(t,n):(n=tr(e,t,n,a),n!==null&&(vt(n,e,a),Vc(n,t,a)))}function Nc(e,t,n){var a=Et();Ll(e,t,n,a)}function Ll(e,t,n,a){var l={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ki(e))Gc(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,u=i(o,n);if(l.hasEagerState=!0,l.eagerState=u,bt(u,o))return zi(e,t,l,0),ke===null&&ji(),!1}catch{}finally{}if(n=tr(e,t,l,a),n!==null)return vt(n,e,a),Vc(n,t,a),!0}return!1}function Lr(e,t,n,a){if(a={lane:2,revertLane:gs(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ki(e)){if(t)throw Error(c(479))}else t=tr(e,n,a,2),t!==null&&vt(t,e,2)}function Ki(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function Gc(e,t){Ja=Ni=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vc(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,ml(e,n)}}var Hl={readContext:at,use:Yi,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useLayoutEffect:Ge,useInsertionEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useSyncExternalStore:Ge,useId:Ge,useHostTransitionStatus:Ge,useFormState:Ge,useActionState:Ge,useOptimistic:Ge,useMemoCache:Ge,useCacheRefresh:Ge};Hl.useEffectEvent=Ge;var Yc={readContext:at,use:Yi,useCallback:function(e,t){return dt().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:jc,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Qi(4194308,4,Dc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Qi(4194308,4,e,t)},useInsertionEffect:function(e,t){Qi(4,2,e,t)},useMemo:function(e,t){var n=dt();t=t===void 0?null:t;var a=e();if(ca){zt(!0);try{e()}finally{zt(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=dt();if(n!==void 0){var l=n(t);if(ca){zt(!0);try{n(t)}finally{zt(!1)}}}else l=t;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=Tp.bind(null,oe,e),[a.memoizedState,e]},useRef:function(e){var t=dt();return e={current:e},t.memoizedState=e},useState:function(e){e=Or(e);var t=e.queue,n=Nc.bind(null,oe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ur,useDeferredValue:function(e,t){var n=dt();return Br(n,e,t)},useTransition:function(){var e=Or(!1);return e=Bc.bind(null,oe,e.queue,!0,!1),dt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=oe,l=dt();if(be){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),ke===null)throw Error(c(349));(ge&127)!==0||cc(a,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,jc(fc.bind(null,a,i,e),[e]),a.flags|=2048,Fa(9,{destroy:void 0},dc.bind(null,a,i,n,t),null),n},useId:function(){var e=dt(),t=ke.identifierPrefix;if(be){var n=Xt,a=Yt;n=(a&~(1<<32-et(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Gi++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=hp++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:qr,useFormState:Sc,useActionState:Sc,useOptimistic:function(e){var t=dt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Lr.bind(null,oe,!0,n),n.dispatch=t,[e,t]},useMemoCache:Mr,useCacheRefresh:function(){return dt().memoizedState=Sp.bind(null,oe)},useEffectEvent:function(e){var t=dt(),n={impl:e};return t.memoizedState=n,function(){if((Ce&2)!==0)throw Error(c(440));return n.impl.apply(void 0,arguments)}}},Hr={readContext:at,use:Yi,useCallback:wc,useContext:at,useEffect:Rr,useImperativeHandle:Oc,useInsertionEffect:Mc,useLayoutEffect:Cc,useMemo:Rc,useReducer:Xi,useRef:Ec,useState:function(){return Xi(cn)},useDebugValue:Ur,useDeferredValue:function(e,t){var n=Xe();return Uc(n,Re.memoizedState,e,t)},useTransition:function(){var e=Xi(cn)[0],t=Xe().memoizedState;return[typeof e=="boolean"?e:ql(e),t]},useSyncExternalStore:uc,useId:Lc,useHostTransitionStatus:qr,useFormState:Tc,useActionState:Tc,useOptimistic:function(e,t){var n=Xe();return hc(n,Re,e,t)},useMemoCache:Mr,useCacheRefresh:Hc};Hr.useEffectEvent=zc;var Xc={readContext:at,use:Yi,useCallback:wc,useContext:at,useEffect:Rr,useImperativeHandle:Oc,useInsertionEffect:Mc,useLayoutEffect:Cc,useMemo:Rc,useReducer:Dr,useRef:Ec,useState:function(){return Dr(cn)},useDebugValue:Ur,useDeferredValue:function(e,t){var n=Xe();return Re===null?Br(n,e,t):Uc(n,Re.memoizedState,e,t)},useTransition:function(){var e=Dr(cn)[0],t=Xe().memoizedState;return[typeof e=="boolean"?e:ql(e),t]},useSyncExternalStore:uc,useId:Lc,useHostTransitionStatus:qr,useFormState:Ac,useActionState:Ac,useOptimistic:function(e,t){var n=Xe();return Re!==null?hc(n,Re,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Mr,useCacheRefresh:Hc};Xc.useEffectEvent=zc;function Nr(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:R({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Gr={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Et(),l=On(a);l.payload=t,n!=null&&(l.callback=n),t=wn(e,l,a),t!==null&&(vt(t,e,a),Rl(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Et(),l=On(a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=wn(e,l,a),t!==null&&(vt(t,e,a),Rl(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Et(),a=On(n);a.tag=2,t!=null&&(a.callback=t),t=wn(e,a,n),t!==null&&(vt(t,e,n),Rl(t,e,n))}};function Qc(e,t,n,a,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,o):t.prototype&&t.prototype.isPureReactComponent?!El(n,a)||!El(l,i):!0}function Zc(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Gr.enqueueReplaceState(t,t.state,null)}function da(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=R({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}function Kc(e){Ei(e)}function Jc(e){console.error(e)}function Pc(e){Ei(e)}function Ji(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Fc(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Vr(e,t,n){return n=On(n),n.tag=3,n.payload={element:null},n.callback=function(){Ji(e,t)},n}function Wc(e){return e=On(e),e.tag=3,e}function Ic(e,t,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var i=a.value;e.payload=function(){return l(i)},e.callback=function(){Fc(t,n,a)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){Fc(t,n,a),typeof l!="function"&&(Ln===null?Ln=new Set([this]):Ln.add(this));var u=a.stack;this.componentDidCatch(a.value,{componentStack:u!==null?u:""})})}function _p(e,t,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Va(t,n,l,!0),n=St.current,n!==null){switch(n.tag){case 31:case 13:return Bt===null?oo():n.alternate===null&&Ve===0&&(Ve=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===Bi?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),ms(e,a,l)),!1;case 22:return n.flags|=65536,a===Bi?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),ms(e,a,l)),!1}throw Error(c(435,n.tag))}return ms(e,a,l),oo(),!1}if(be)return t=St.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,a!==rr&&(e=Error(c(422),{cause:a}),Ml(Ot(e,n)))):(a!==rr&&(t=Error(c(423),{cause:a}),Ml(Ot(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=Ot(a,n),l=Vr(e.stateNode,a,l),yr(e,l),Ve!==4&&(Ve=2)),!1;var i=Error(c(520),{cause:a});if(i=Ot(i,n),Kl===null?Kl=[i]:Kl.push(i),Ve!==4&&(Ve=2),t===null)return!0;a=Ot(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=Vr(n.stateNode,a,e),yr(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Ln===null||!Ln.has(i))))return n.flags|=65536,l&=-l,n.lanes|=l,l=Wc(l),Ic(l,e,n,a),yr(n,l),!1}n=n.return}while(n!==null);return!1}var Yr=Error(c(461)),Je=!1;function lt(e,t,n,a){t.child=e===null?nc(t,null,n,a):ua(t,e.child,n,a)}function $c(e,t,n,a,l){n=n.render;var i=t.ref;if("ref"in a){var o={};for(var u in a)u!=="ref"&&(o[u]=a[u])}else o=a;return ia(t),a=Ar(e,t,n,o,i,l),u=Er(),e!==null&&!Je?(jr(e,t,l),dn(e,t,l)):(be&&u&&ir(t),t.flags|=1,lt(e,t,a,l),t.child)}function ed(e,t,n,a,l){if(e===null){var i=n.type;return typeof i=="function"&&!nr(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,td(e,t,i,a,l)):(e=Ci(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Wr(e,l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:El,n(o,a)&&e.ref===t.ref)return dn(e,t,l)}return t.flags|=1,e=ln(i,a),e.ref=t.ref,e.return=t,t.child=e}function td(e,t,n,a,l){if(e!==null){var i=e.memoizedProps;if(El(i,a)&&e.ref===t.ref)if(Je=!1,t.pendingProps=a=i,Wr(e,l))(e.flags&131072)!==0&&(Je=!0);else return t.lanes=e.lanes,dn(e,t,l)}return Xr(e,t,n,a,l)}function nd(e,t,n,a){var l=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(a=t.child=e.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;a=l&~i}else a=0,t.child=null;return ad(e,t,i,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ri(t,i!==null?i.cachePool:null),i!==null?ic(t,i):xr(),oc(t);else return a=t.lanes=536870912,ad(e,t,i!==null?i.baseLanes|n:n,n,a)}else i!==null?(Ri(t,i.cachePool),ic(t,i),Un(),t.memoizedState=null):(e!==null&&Ri(t,null),xr(),Un());return lt(e,t,l,n),t.child}function Nl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ad(e,t,n,a,l){var i=pr();return i=i===null?null:{parent:Ze._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&Ri(t,null),xr(),oc(t),e!==null&&Va(e,t,a,!0),t.childLanes=l,null}function Pi(e,t){return t=Wi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function ld(e,t,n){return ua(t,e.child,null,n),e=Pi(t,t.pendingProps),e.flags|=2,Tt(t),t.memoizedState=null,e}function Ap(e,t,n){var a=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(be){if(a.mode==="hidden")return e=Pi(t,a),t.lanes=536870912,Nl(null,e);if(Tr(t),(e=Le)?(e=vf(e,Ut),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:jn!==null?{id:Yt,overflow:Xt}:null,retryLane:536870912,hydrationErrors:null},n=Gu(e),n.return=t,t.child=n,nt=t,Le=null)):e=null,e===null)throw Mn(t);return t.lanes=536870912,null}return Pi(t,a)}var i=e.memoizedState;if(i!==null){var o=i.dehydrated;if(Tr(t),l)if(t.flags&256)t.flags&=-257,t=ld(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(Je||Va(e,t,n,!1),l=(n&e.childLanes)!==0,Je||l){if(a=ke,a!==null&&(o=pl(a,n),o!==0&&o!==i.retryLane))throw i.retryLane=o,ta(e,o),vt(a,e,o),Yr;oo(),t=ld(e,t,n)}else e=i.treeContext,Le=kt(o.nextSibling),nt=t,be=!0,zn=null,Ut=!1,e!==null&&Xu(t,e),t=Pi(t,a),t.flags|=4096;return t}return e=ln(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Fi(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Xr(e,t,n,a,l){return ia(t),n=Ar(e,t,n,a,void 0,l),a=Er(),e!==null&&!Je?(jr(e,t,l),dn(e,t,l)):(be&&a&&ir(t),t.flags|=1,lt(e,t,n,l),t.child)}function id(e,t,n,a,l,i){return ia(t),t.updateQueue=null,n=sc(t,a,n,l),rc(e),a=Er(),e!==null&&!Je?(jr(e,t,i),dn(e,t,i)):(be&&a&&ir(t),t.flags|=1,lt(e,t,n,i),t.child)}function od(e,t,n,a,l){if(ia(t),t.stateNode===null){var i=La,o=n.contextType;typeof o=="object"&&o!==null&&(i=at(o)),i=new n(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Gr,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},gr(t),o=n.contextType,i.context=typeof o=="object"&&o!==null?at(o):La,i.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Nr(t,n,o,a),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&Gr.enqueueReplaceState(i,i.state,null),Bl(t,a,i,l),Ul(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var u=t.memoizedProps,d=da(n,u);i.props=d;var S=i.context,M=n.contextType;o=La,typeof M=="object"&&M!==null&&(o=at(M));var O=n.getDerivedStateFromProps;M=typeof O=="function"||typeof i.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,M||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u||S!==o)&&Zc(t,i,a,o),Dn=!1;var T=t.memoizedState;i.state=T,Bl(t,a,i,l),Ul(),S=t.memoizedState,u||T!==S||Dn?(typeof O=="function"&&(Nr(t,n,O,a),S=t.memoizedState),(d=Dn||Qc(t,n,d,a,T,S,o))?(M||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=S),i.props=a,i.state=S,i.context=o,a=d):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,vr(e,t),o=t.memoizedProps,M=da(n,o),i.props=M,O=t.pendingProps,T=i.context,S=n.contextType,d=La,typeof S=="object"&&S!==null&&(d=at(S)),u=n.getDerivedStateFromProps,(S=typeof u=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==O||T!==d)&&Zc(t,i,a,d),Dn=!1,T=t.memoizedState,i.state=T,Bl(t,a,i,l),Ul();var A=t.memoizedState;o!==O||T!==A||Dn||e!==null&&e.dependencies!==null&&Oi(e.dependencies)?(typeof u=="function"&&(Nr(t,n,u,a),A=t.memoizedState),(M=Dn||Qc(t,n,M,a,T,A,d)||e!==null&&e.dependencies!==null&&Oi(e.dependencies))?(S||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,A,d),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,A,d)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=A),i.props=a,i.state=A,i.context=d,a=M):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,Fi(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=ua(t,e.child,null,l),t.child=ua(t,null,n,l)):lt(e,t,n,l),t.memoizedState=i.state,e=t.child):e=dn(e,t,l),e}function rd(e,t,n,a){return aa(),t.flags|=256,lt(e,t,n,a),t.child}var Qr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zr(e){return{baseLanes:e,cachePool:Fu()}}function Kr(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=At),e}function sd(e,t,n){var a=t.pendingProps,l=!1,i=(t.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(Ye.current&2)!==0),o&&(l=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(be){if(l?Rn(t):Un(),(e=Le)?(e=vf(e,Ut),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:jn!==null?{id:Yt,overflow:Xt}:null,retryLane:536870912,hydrationErrors:null},n=Gu(e),n.return=t,t.child=n,nt=t,Le=null)):e=null,e===null)throw Mn(t);return Cs(e)?t.lanes=32:t.lanes=536870912,null}var u=a.children;return a=a.fallback,l?(Un(),l=t.mode,u=Wi({mode:"hidden",children:u},l),a=na(a,l,n,null),u.return=t,a.return=t,u.sibling=a,t.child=u,a=t.child,a.memoizedState=Zr(n),a.childLanes=Kr(e,o,n),t.memoizedState=Qr,Nl(null,a)):(Rn(t),Jr(t,u))}var d=e.memoizedState;if(d!==null&&(u=d.dehydrated,u!==null)){if(i)t.flags&256?(Rn(t),t.flags&=-257,t=Pr(e,t,n)):t.memoizedState!==null?(Un(),t.child=e.child,t.flags|=128,t=null):(Un(),u=a.fallback,l=t.mode,a=Wi({mode:"visible",children:a.children},l),u=na(u,l,n,null),u.flags|=2,a.return=t,u.return=t,a.sibling=u,t.child=a,ua(t,e.child,null,n),a=t.child,a.memoizedState=Zr(n),a.childLanes=Kr(e,o,n),t.memoizedState=Qr,t=Nl(null,a));else if(Rn(t),Cs(u)){if(o=u.nextSibling&&u.nextSibling.dataset,o)var S=o.dgst;o=S,a=Error(c(419)),a.stack="",a.digest=o,Ml({value:a,source:null,stack:null}),t=Pr(e,t,n)}else if(Je||Va(e,t,n,!1),o=(n&e.childLanes)!==0,Je||o){if(o=ke,o!==null&&(a=pl(o,n),a!==0&&a!==d.retryLane))throw d.retryLane=a,ta(e,a),vt(o,e,a),Yr;Ms(u)||oo(),t=Pr(e,t,n)}else Ms(u)?(t.flags|=192,t.child=e.child,t=null):(e=d.treeContext,Le=kt(u.nextSibling),nt=t,be=!0,zn=null,Ut=!1,e!==null&&Xu(t,e),t=Jr(t,a.children),t.flags|=4096);return t}return l?(Un(),u=a.fallback,l=t.mode,d=e.child,S=d.sibling,a=ln(d,{mode:"hidden",children:a.children}),a.subtreeFlags=d.subtreeFlags&65011712,S!==null?u=ln(S,u):(u=na(u,l,n,null),u.flags|=2),u.return=t,a.return=t,a.sibling=u,t.child=a,Nl(null,a),a=t.child,u=e.child.memoizedState,u===null?u=Zr(n):(l=u.cachePool,l!==null?(d=Ze._currentValue,l=l.parent!==d?{parent:d,pool:d}:l):l=Fu(),u={baseLanes:u.baseLanes|n,cachePool:l}),a.memoizedState=u,a.childLanes=Kr(e,o,n),t.memoizedState=Qr,Nl(e.child,a)):(Rn(t),n=e.child,e=n.sibling,n=ln(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Jr(e,t){return t=Wi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Wi(e,t){return e=xt(22,e,null,t),e.lanes=0,e}function Pr(e,t,n){return ua(t,e.child,null,n),e=Jr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ud(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),cr(e.return,t,n)}function Fr(e,t,n,a,l,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l,treeForkCount:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=n,o.tailMode=l,o.treeForkCount=i)}function cd(e,t,n){var a=t.pendingProps,l=a.revealOrder,i=a.tail;a=a.children;var o=Ye.current,u=(o&2)!==0;if(u?(o=o&1|2,t.flags|=128):o&=1,H(Ye,o),lt(e,t,a,n),a=be?zl:0,!u&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ud(e,n,t);else if(e.tag===19)ud(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Hi(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Fr(t,!1,l,n,i,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Hi(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Fr(t,!0,n,null,i,a);break;case"together":Fr(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function dn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),qn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Va(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=ln(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ln(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Wr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Oi(e)))}function Ep(e,t,n){switch(t.tag){case 3:We(t,t.stateNode.containerInfo),Cn(t,Ze,e.memoizedState.cache),aa();break;case 27:case 5:Kt(t);break;case 4:We(t,t.stateNode.containerInfo);break;case 10:Cn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Tr(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Rn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?sd(e,t,n):(Rn(t),e=dn(e,t,n),e!==null?e.sibling:null);Rn(t);break;case 19:var l=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Va(e,t,n,!1),a=(n&t.childLanes)!==0),l){if(a)return cd(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),H(Ye,Ye.current),a)break;return null;case 22:return t.lanes=0,nd(e,t,n,t.pendingProps);case 24:Cn(t,Ze,e.memoizedState.cache)}return dn(e,t,n)}function dd(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Je=!0;else{if(!Wr(e,n)&&(t.flags&128)===0)return Je=!1,Ep(e,t,n);Je=(e.flags&131072)!==0}else Je=!1,be&&(t.flags&1048576)!==0&&Yu(t,zl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=ra(t.elementType),t.type=e,typeof e=="function")nr(e)?(a=da(e,a),t.tag=1,t=od(null,t,e,a,n)):(t.tag=0,t=Xr(null,t,e,a,n));else{if(e!=null){var l=e.$$typeof;if(l===U){t.tag=11,t=$c(null,t,e,a,n);break e}else if(l===L){t.tag=14,t=ed(null,t,e,a,n);break e}}throw t=ot(e)||e,Error(c(306,t,""))}}return t;case 0:return Xr(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,l=da(a,t.pendingProps),od(e,t,a,l,n);case 3:e:{if(We(t,t.stateNode.containerInfo),e===null)throw Error(c(387));a=t.pendingProps;var i=t.memoizedState;l=i.element,vr(e,t),Bl(t,a,null,n);var o=t.memoizedState;if(a=o.cache,Cn(t,Ze,a),a!==i.cache&&dr(t,[Ze],n,!0),Ul(),a=o.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=rd(e,t,a,n);break e}else if(a!==l){l=Ot(Error(c(424)),t),Ml(l),t=rd(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Le=kt(e.firstChild),nt=t,be=!0,zn=null,Ut=!0,n=nc(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(aa(),a===l){t=dn(e,t,n);break e}lt(e,t,a,n)}t=t.child}return t;case 26:return Fi(e,t),e===null?(n=_f(t.type,null,t.pendingProps,null))?t.memoizedState=n:be||(n=t.type,e=t.pendingProps,a=po(se.current).createElement(n),a[Qe]=t,a[tt]=e,it(a,n,e),ye(a),t.stateNode=a):t.memoizedState=_f(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Kt(t),e===null&&be&&(a=t.stateNode=xf(t.type,t.pendingProps,se.current),nt=t,Ut=!0,l=Le,Vn(t.type)?(Ds=l,Le=kt(a.firstChild)):Le=l),lt(e,t,t.pendingProps.children,n),Fi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&be&&((l=a=Le)&&(a=th(a,t.type,t.pendingProps,Ut),a!==null?(t.stateNode=a,nt=t,Le=kt(a.firstChild),Ut=!1,l=!0):l=!1),l||Mn(t)),Kt(t),l=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Es(l,i)?a=null:o!==null&&Es(l,o)&&(t.flags|=32),t.memoizedState!==null&&(l=Ar(e,t,gp,null,null,n),ti._currentValue=l),Fi(e,t),lt(e,t,a,n),t.child;case 6:return e===null&&be&&((e=n=Le)&&(n=nh(n,t.pendingProps,Ut),n!==null?(t.stateNode=n,nt=t,Le=null,e=!0):e=!1),e||Mn(t)),null;case 13:return sd(e,t,n);case 4:return We(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=ua(t,null,a,n):lt(e,t,a,n),t.child;case 11:return $c(e,t,t.type,t.pendingProps,n);case 7:return lt(e,t,t.pendingProps,n),t.child;case 8:return lt(e,t,t.pendingProps.children,n),t.child;case 12:return lt(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Cn(t,t.type,a.value),lt(e,t,a.children,n),t.child;case 9:return l=t.type._context,a=t.pendingProps.children,ia(t),l=at(l),a=a(l),t.flags|=1,lt(e,t,a,n),t.child;case 14:return ed(e,t,t.type,t.pendingProps,n);case 15:return td(e,t,t.type,t.pendingProps,n);case 19:return cd(e,t,n);case 31:return Ap(e,t,n);case 22:return nd(e,t,n,t.pendingProps);case 24:return ia(t),a=at(Ze),e===null?(l=pr(),l===null&&(l=ke,i=fr(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=n),l=i),t.memoizedState={parent:a,cache:l},gr(t),Cn(t,Ze,l)):((e.lanes&n)!==0&&(vr(e,t),Bl(t,null,null,n),Ul()),l=e.memoizedState,i=t.memoizedState,l.parent!==a?(l={parent:a,cache:a},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Cn(t,Ze,a)):(a=i.cache,Cn(t,Ze,a),a!==l.cache&&dr(t,[Ze],n,!0))),lt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function fn(e){e.flags|=4}function Ir(e,t,n,a,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Ld())e.flags|=8192;else throw sa=Bi,hr}else e.flags&=-16777217}function fd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Mf(t))if(Ld())e.flags|=8192;else throw sa=Bi,hr}function Ii(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Aa():536870912,e.lanes|=t,el|=t)}function Gl(e,t){if(!be)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function jp(e,t,n){var a=t.pendingProps;switch(or(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return He(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),sn(Ze),qe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ga(t)?fn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,sr())),He(t),null;case 26:var l=t.type,i=t.memoizedState;return e===null?(fn(t),i!==null?(He(t),fd(t,i)):(He(t),Ir(t,l,null,a,n))):i?i!==e.memoizedState?(fn(t),He(t),fd(t,i)):(He(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&fn(t),He(t),Ir(t,l,e,a,n)),null;case 27:if(pa(t),n=se.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&fn(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return He(t),null}e=G.current,Ga(t)?Qu(t):(e=xf(l,a,n),t.stateNode=e,fn(t))}return He(t),null;case 5:if(pa(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&fn(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return He(t),null}if(i=G.current,Ga(t))Qu(t);else{var o=po(se.current);switch(i){case 1:i=o.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=o.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=o.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=o.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=o.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?o.createElement("select",{is:a.is}):o.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?o.createElement(l,{is:a.is}):o.createElement(l)}}i[Qe]=t,i[tt]=a;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)i.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=i;e:switch(it(i,l,a),l){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&fn(t)}}return He(t),Ir(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&fn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(c(166));if(e=se.current,Ga(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,l=nt,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[Qe]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||uf(e.nodeValue,n)),e||Mn(t,!0)}else e=po(e).createTextNode(a),e[Qe]=t,t.stateNode=e}return He(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=Ga(t),n!==null){if(e===null){if(!a)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[Qe]=t}else aa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;He(t),e=!1}else n=sr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Tt(t),t):(Tt(t),null);if((t.flags&128)!==0)throw Error(c(558))}return He(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Ga(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[Qe]=t}else aa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;He(t),l=!1}else l=sr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Tt(t),t):(Tt(t),null)}return Tt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==l&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ii(t,t.updateQueue),He(t),null);case 4:return qe(),e===null&&xs(t.stateNode.containerInfo),He(t),null;case 10:return sn(t.type),He(t),null;case 19:if(D(Ye),a=t.memoizedState,a===null)return He(t),null;if(l=(t.flags&128)!==0,i=a.rendering,i===null)if(l)Gl(a,!1);else{if(Ve!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Hi(e),i!==null){for(t.flags|=128,Gl(a,!1),e=i.updateQueue,t.updateQueue=e,Ii(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Nu(n,e),n=n.sibling;return H(Ye,Ye.current&1|2),be&&on(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&rt()>ao&&(t.flags|=128,l=!0,Gl(a,!1),t.lanes=4194304)}else{if(!l)if(e=Hi(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Ii(t,e),Gl(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!be)return He(t),null}else 2*rt()-a.renderingStartTime>ao&&n!==536870912&&(t.flags|=128,l=!0,Gl(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=rt(),e.sibling=null,n=Ye.current,H(Ye,l?n&1|2:n&1),be&&on(t,a.treeForkCount),e):(He(t),null);case 22:case 23:return Tt(t),Sr(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),n=t.updateQueue,n!==null&&Ii(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&D(oa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),sn(Ze),He(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function zp(e,t){switch(or(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return sn(Ze),qe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return pa(t),null;case 31:if(t.memoizedState!==null){if(Tt(t),t.alternate===null)throw Error(c(340));aa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Tt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));aa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(Ye),null;case 4:return qe(),null;case 10:return sn(t.type),null;case 22:case 23:return Tt(t),Sr(),e!==null&&D(oa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return sn(Ze),null;case 25:return null;default:return null}}function md(e,t){switch(or(t),t.tag){case 3:sn(Ze),qe();break;case 26:case 27:case 5:pa(t);break;case 4:qe();break;case 31:t.memoizedState!==null&&Tt(t);break;case 13:Tt(t);break;case 19:D(Ye);break;case 10:sn(t.type);break;case 22:case 23:Tt(t),Sr(),e!==null&&D(oa);break;case 24:sn(Ze)}}function Vl(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&e)===e){a=void 0;var i=n.create,o=n.inst;a=i(),o.destroy=a}n=n.next}while(n!==l)}}catch(u){Oe(t,t.return,u)}}function Bn(e,t,n){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&e)===e){var o=a.inst,u=o.destroy;if(u!==void 0){o.destroy=void 0,l=t;var d=n,S=u;try{S()}catch(M){Oe(l,d,M)}}}a=a.next}while(a!==i)}}catch(M){Oe(t,t.return,M)}}function pd(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{lc(t,n)}catch(a){Oe(e,e.return,a)}}}function hd(e,t,n){n.props=da(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Oe(e,t,a)}}function Yl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(l){Oe(e,t,l)}}function Qt(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){Oe(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){Oe(e,t,l)}else n.current=null}function gd(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){Oe(e,e.return,l)}}function $r(e,t,n){try{var a=e.stateNode;Pp(a,e.type,n,t),a[tt]=t}catch(l){Oe(e,e.return,l)}}function vd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Vn(e.type)||e.tag===4}function es(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Vn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ts(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=nn));else if(a!==4&&(a===27&&Vn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(ts(e,t,n),e=e.sibling;e!==null;)ts(e,t,n),e=e.sibling}function $i(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Vn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for($i(e,t,n),e=e.sibling;e!==null;)$i(e,t,n),e=e.sibling}function yd(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);it(t,a,n),t[Qe]=e,t[tt]=n}catch(i){Oe(e,e.return,i)}}var mn=!1,Pe=!1,ns=!1,bd=typeof WeakSet=="function"?WeakSet:Set,Ie=null;function Mp(e,t){if(e=e.containerInfo,_s=So,e=Ou(e),Po(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,u=-1,d=-1,S=0,M=0,O=e,T=null;t:for(;;){for(var A;O!==n||l!==0&&O.nodeType!==3||(u=o+l),O!==i||a!==0&&O.nodeType!==3||(d=o+a),O.nodeType===3&&(o+=O.nodeValue.length),(A=O.firstChild)!==null;)T=O,O=A;for(;;){if(O===e)break t;if(T===n&&++S===l&&(u=o),T===i&&++M===a&&(d=o),(A=O.nextSibling)!==null)break;O=T,T=O.parentNode}O=A}n=u===-1||d===-1?null:{start:u,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(As={focusedElem:e,selectionRange:n},So=!1,Ie=t;Ie!==null;)if(t=Ie,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ie=e;else for(;Ie!==null;){switch(t=Ie,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)l=e[n],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,n=t,l=i.memoizedProps,i=i.memoizedState,a=n.stateNode;try{var Q=da(n.type,l);e=a.getSnapshotBeforeUpdate(Q,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(I){Oe(n,n.return,I)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)zs(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":zs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Ie=e;break}Ie=t.return}}function xd(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:hn(e,n),a&4&&Vl(5,n);break;case 1:if(hn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(o){Oe(n,n.return,o)}else{var l=da(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){Oe(n,n.return,o)}}a&64&&pd(n),a&512&&Yl(n,n.return);break;case 3:if(hn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{lc(e,t)}catch(o){Oe(n,n.return,o)}}break;case 27:t===null&&a&4&&yd(n);case 26:case 5:hn(e,n),t===null&&a&4&&gd(n),a&512&&Yl(n,n.return);break;case 12:hn(e,n);break;case 31:hn(e,n),a&4&&_d(e,n);break;case 13:hn(e,n),a&4&&Ad(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=qp.bind(null,n),ah(e,n))));break;case 22:if(a=n.memoizedState!==null||mn,!a){t=t!==null&&t.memoizedState!==null||Pe,l=mn;var i=Pe;mn=a,(Pe=t)&&!i?gn(e,n,(n.subtreeFlags&8772)!==0):hn(e,n),mn=l,Pe=i}break;case 30:break;default:hn(e,n)}}function Sd(e){var t=e.alternate;t!==null&&(e.alternate=null,Sd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&b(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ne=null,mt=!1;function pn(e,t,n){for(n=n.child;n!==null;)Td(e,t,n),n=n.sibling}function Td(e,t,n){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(yt,n)}catch{}switch(n.tag){case 26:Pe||Qt(n,t),pn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Pe||Qt(n,t);var a=Ne,l=mt;Vn(n.type)&&(Ne=n.stateNode,mt=!1),pn(e,t,n),Il(n.stateNode),Ne=a,mt=l;break;case 5:Pe||Qt(n,t);case 6:if(a=Ne,l=mt,Ne=null,pn(e,t,n),Ne=a,mt=l,Ne!==null)if(mt)try{(Ne.nodeType===9?Ne.body:Ne.nodeName==="HTML"?Ne.ownerDocument.body:Ne).removeChild(n.stateNode)}catch(i){Oe(n,t,i)}else try{Ne.removeChild(n.stateNode)}catch(i){Oe(n,t,i)}break;case 18:Ne!==null&&(mt?(e=Ne,hf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),sl(e)):hf(Ne,n.stateNode));break;case 4:a=Ne,l=mt,Ne=n.stateNode.containerInfo,mt=!0,pn(e,t,n),Ne=a,mt=l;break;case 0:case 11:case 14:case 15:Bn(2,n,t),Pe||Bn(4,n,t),pn(e,t,n);break;case 1:Pe||(Qt(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&hd(n,t,a)),pn(e,t,n);break;case 21:pn(e,t,n);break;case 22:Pe=(a=Pe)||n.memoizedState!==null,pn(e,t,n),Pe=a;break;default:pn(e,t,n)}}function _d(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{sl(e)}catch(n){Oe(t,t.return,n)}}}function Ad(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{sl(e)}catch(n){Oe(t,t.return,n)}}function Cp(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new bd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new bd),t;default:throw Error(c(435,e.tag))}}function eo(e,t){var n=Cp(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var l=Lp.bind(null,e,a);a.then(l,l)}})}function pt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a],i=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 27:if(Vn(u.type)){Ne=u.stateNode,mt=!1;break e}break;case 5:Ne=u.stateNode,mt=!1;break e;case 3:case 4:Ne=u.stateNode.containerInfo,mt=!0;break e}u=u.return}if(Ne===null)throw Error(c(160));Td(i,o,l),Ne=null,mt=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Ed(t,e),t=t.sibling}var Gt=null;function Ed(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:pt(t,e),ht(e),a&4&&(Bn(3,e,e.return),Vl(3,e),Bn(5,e,e.return));break;case 1:pt(t,e),ht(e),a&512&&(Pe||n===null||Qt(n,n.return)),a&64&&mn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var l=Gt;if(pt(t,e),ht(e),a&512&&(Pe||n===null||Qt(n,n.return)),a&4){var i=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(a){case"title":i=l.getElementsByTagName("title")[0],(!i||i[An]||i[Qe]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(a),l.head.insertBefore(i,l.querySelector("head > title"))),it(i,a,n),i[Qe]=e,ye(i),a=i;break e;case"link":var o=jf("link","href",l).get(a+(n.href||""));if(o){for(var u=0;u<o.length;u++)if(i=o[u],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(u,1);break t}}i=l.createElement(a),it(i,a,n),l.head.appendChild(i);break;case"meta":if(o=jf("meta","content",l).get(a+(n.content||""))){for(u=0;u<o.length;u++)if(i=o[u],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){o.splice(u,1);break t}}i=l.createElement(a),it(i,a,n),l.head.appendChild(i);break;default:throw Error(c(468,a))}i[Qe]=e,ye(i),a=i}e.stateNode=a}else zf(l,e.type,e.stateNode);else e.stateNode=Ef(l,a,e.memoizedProps);else i!==a?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,a===null?zf(l,e.type,e.stateNode):Ef(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&$r(e,e.memoizedProps,n.memoizedProps)}break;case 27:pt(t,e),ht(e),a&512&&(Pe||n===null||Qt(n,n.return)),n!==null&&a&4&&$r(e,e.memoizedProps,n.memoizedProps);break;case 5:if(pt(t,e),ht(e),a&512&&(Pe||n===null||Qt(n,n.return)),e.flags&32){l=e.stateNode;try{Oa(l,"")}catch(Q){Oe(e,e.return,Q)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,$r(e,l,n!==null?n.memoizedProps:l)),a&1024&&(ns=!0);break;case 6:if(pt(t,e),ht(e),a&4){if(e.stateNode===null)throw Error(c(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(Q){Oe(e,e.return,Q)}}break;case 3:if(vo=null,l=Gt,Gt=ho(t.containerInfo),pt(t,e),Gt=l,ht(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{sl(t.containerInfo)}catch(Q){Oe(e,e.return,Q)}ns&&(ns=!1,jd(e));break;case 4:a=Gt,Gt=ho(e.stateNode.containerInfo),pt(t,e),ht(e),Gt=a;break;case 12:pt(t,e),ht(e);break;case 31:pt(t,e),ht(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,eo(e,a)));break;case 13:pt(t,e),ht(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(no=rt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,eo(e,a)));break;case 22:l=e.memoizedState!==null;var d=n!==null&&n.memoizedState!==null,S=mn,M=Pe;if(mn=S||l,Pe=M||d,pt(t,e),Pe=M,mn=S,ht(e),a&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||d||mn||Pe||fa(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){d=n=t;try{if(i=d.stateNode,l)o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{u=d.stateNode;var O=d.memoizedProps.style,T=O!=null&&O.hasOwnProperty("display")?O.display:null;u.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(Q){Oe(d,d.return,Q)}}}else if(t.tag===6){if(n===null){d=t;try{d.stateNode.nodeValue=l?"":d.memoizedProps}catch(Q){Oe(d,d.return,Q)}}}else if(t.tag===18){if(n===null){d=t;try{var A=d.stateNode;l?gf(A,!0):gf(d.stateNode,!1)}catch(Q){Oe(d,d.return,Q)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,eo(e,n))));break;case 19:pt(t,e),ht(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,eo(e,a)));break;case 30:break;case 21:break;default:pt(t,e),ht(e)}}function ht(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(vd(a)){n=a;break}a=a.return}if(n==null)throw Error(c(160));switch(n.tag){case 27:var l=n.stateNode,i=es(e);$i(e,i,l);break;case 5:var o=n.stateNode;n.flags&32&&(Oa(o,""),n.flags&=-33);var u=es(e);$i(e,u,o);break;case 3:case 4:var d=n.stateNode.containerInfo,S=es(e);ts(e,S,d);break;default:throw Error(c(161))}}catch(M){Oe(e,e.return,M)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function jd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;jd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function hn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)xd(e,t.alternate,t),t=t.sibling}function fa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Bn(4,t,t.return),fa(t);break;case 1:Qt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&hd(t,t.return,n),fa(t);break;case 27:Il(t.stateNode);case 26:case 5:Qt(t,t.return),fa(t);break;case 22:t.memoizedState===null&&fa(t);break;case 30:fa(t);break;default:fa(t)}e=e.sibling}}function gn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,l=e,i=t,o=i.flags;switch(i.tag){case 0:case 11:case 15:gn(l,i,n),Vl(4,i);break;case 1:if(gn(l,i,n),a=i,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(S){Oe(a,a.return,S)}if(a=i,l=a.updateQueue,l!==null){var u=a.stateNode;try{var d=l.shared.hiddenCallbacks;if(d!==null)for(l.shared.hiddenCallbacks=null,l=0;l<d.length;l++)ac(d[l],u)}catch(S){Oe(a,a.return,S)}}n&&o&64&&pd(i),Yl(i,i.return);break;case 27:yd(i);case 26:case 5:gn(l,i,n),n&&a===null&&o&4&&gd(i),Yl(i,i.return);break;case 12:gn(l,i,n);break;case 31:gn(l,i,n),n&&o&4&&_d(l,i);break;case 13:gn(l,i,n),n&&o&4&&Ad(l,i);break;case 22:i.memoizedState===null&&gn(l,i,n),Yl(i,i.return);break;case 30:break;default:gn(l,i,n)}t=t.sibling}}function as(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Cl(n))}function ls(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Cl(e))}function Vt(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)zd(e,t,n,a),t=t.sibling}function zd(e,t,n,a){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Vt(e,t,n,a),l&2048&&Vl(9,t);break;case 1:Vt(e,t,n,a);break;case 3:Vt(e,t,n,a),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Cl(e)));break;case 12:if(l&2048){Vt(e,t,n,a),e=t.stateNode;try{var i=t.memoizedProps,o=i.id,u=i.onPostCommit;typeof u=="function"&&u(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(d){Oe(t,t.return,d)}}else Vt(e,t,n,a);break;case 31:Vt(e,t,n,a);break;case 13:Vt(e,t,n,a);break;case 23:break;case 22:i=t.stateNode,o=t.alternate,t.memoizedState!==null?i._visibility&2?Vt(e,t,n,a):Xl(e,t):i._visibility&2?Vt(e,t,n,a):(i._visibility|=2,Wa(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),l&2048&&as(o,t);break;case 24:Vt(e,t,n,a),l&2048&&ls(t.alternate,t);break;default:Vt(e,t,n,a)}}function Wa(e,t,n,a,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,o=t,u=n,d=a,S=o.flags;switch(o.tag){case 0:case 11:case 15:Wa(i,o,u,d,l),Vl(8,o);break;case 23:break;case 22:var M=o.stateNode;o.memoizedState!==null?M._visibility&2?Wa(i,o,u,d,l):Xl(i,o):(M._visibility|=2,Wa(i,o,u,d,l)),l&&S&2048&&as(o.alternate,o);break;case 24:Wa(i,o,u,d,l),l&&S&2048&&ls(o.alternate,o);break;default:Wa(i,o,u,d,l)}t=t.sibling}}function Xl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,l=a.flags;switch(a.tag){case 22:Xl(n,a),l&2048&&as(a.alternate,a);break;case 24:Xl(n,a),l&2048&&ls(a.alternate,a);break;default:Xl(n,a)}t=t.sibling}}var Ql=8192;function Ia(e,t,n){if(e.subtreeFlags&Ql)for(e=e.child;e!==null;)Md(e,t,n),e=e.sibling}function Md(e,t,n){switch(e.tag){case 26:Ia(e,t,n),e.flags&Ql&&e.memoizedState!==null&&hh(n,Gt,e.memoizedState,e.memoizedProps);break;case 5:Ia(e,t,n);break;case 3:case 4:var a=Gt;Gt=ho(e.stateNode.containerInfo),Ia(e,t,n),Gt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Ql,Ql=16777216,Ia(e,t,n),Ql=a):Ia(e,t,n));break;default:Ia(e,t,n)}}function Cd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Zl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Ie=a,Od(a,e)}Cd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Dd(e),e=e.sibling}function Dd(e){switch(e.tag){case 0:case 11:case 15:Zl(e),e.flags&2048&&Bn(9,e,e.return);break;case 3:Zl(e);break;case 12:Zl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,to(e)):Zl(e);break;default:Zl(e)}}function to(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Ie=a,Od(a,e)}Cd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Bn(8,t,t.return),to(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,to(t));break;default:to(t)}e=e.sibling}}function Od(e,t){for(;Ie!==null;){var n=Ie;switch(n.tag){case 0:case 11:case 15:Bn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Cl(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Ie=a;else e:for(n=e;Ie!==null;){a=Ie;var l=a.sibling,i=a.return;if(Sd(a),a===n){Ie=null;break e}if(l!==null){l.return=i,Ie=l;break e}Ie=i}}}var Dp={getCacheForType:function(e){var t=at(Ze),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return at(Ze).controller.signal}},Op=typeof WeakMap=="function"?WeakMap:Map,Ce=0,ke=null,me=null,ge=0,De=0,_t=null,kn=!1,$a=!1,is=!1,vn=0,Ve=0,qn=0,ma=0,os=0,At=0,el=0,Kl=null,gt=null,rs=!1,no=0,wd=0,ao=1/0,lo=null,Ln=null,Fe=0,Hn=null,tl=null,yn=0,ss=0,us=null,Rd=null,Jl=0,cs=null;function Et(){return(Ce&2)!==0&&ge!==0?ge&-ge:j.T!==null?gs():hl()}function Ud(){if(At===0)if((ge&536870912)===0||be){var e=Wt;Wt<<=1,(Wt&3932160)===0&&(Wt=262144),At=e}else At=536870912;return e=St.current,e!==null&&(e.flags|=32),At}function vt(e,t,n){(e===ke&&(De===2||De===9)||e.cancelPendingCommit!==null)&&(nl(e,0),Nn(e,ge,At,!1)),_n(e,n),((Ce&2)===0||e!==ke)&&(e===ke&&((Ce&2)===0&&(ma|=n),Ve===4&&Nn(e,ge,At,!1)),Zt(e))}function Bd(e,t,n){if((Ce&6)!==0)throw Error(c(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Tn(e,t),l=a?Up(e,t):fs(e,t,!0),i=a;do{if(l===0){$a&&!a&&Nn(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!wp(n)){l=fs(e,t,!1),i=!1;continue}if(l===2){if(i=t,e.errorRecoveryDisabledLanes&i)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var u=e;l=Kl;var d=u.current.memoizedState.isDehydrated;if(d&&(nl(u,o).flags|=256),o=fs(u,o,!1),o!==2){if(is&&!d){u.errorRecoveryDisabledLanes|=i,ma|=i,l=4;break e}i=gt,gt=l,i!==null&&(gt===null?gt=i:gt.push.apply(gt,i))}l=o}if(i=!1,l!==2)continue}}if(l===1){nl(e,0),Nn(e,t,0,!0);break}e:{switch(a=e,i=l,i){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Nn(a,t,At,!kn);break e;case 2:gt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(l=no+300-rt(),10<l)){if(Nn(a,t,At,!kn),_a(a,0,!0)!==0)break e;yn=t,a.timeoutHandle=mf(kd.bind(null,a,n,gt,lo,rs,t,At,ma,el,kn,i,"Throttled",-0,0),l);break e}kd(a,n,gt,lo,rs,t,At,ma,el,kn,i,null,-0,0)}}break}while(!0);Zt(e)}function kd(e,t,n,a,l,i,o,u,d,S,M,O,T,A){if(e.timeoutHandle=-1,O=t.subtreeFlags,O&8192||(O&16785408)===16785408){O={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:nn},Md(t,i,O);var Q=(i&62914560)===i?no-rt():(i&4194048)===i?wd-rt():0;if(Q=gh(O,Q),Q!==null){yn=i,e.cancelPendingCommit=Q(Xd.bind(null,e,t,i,n,a,l,o,u,d,M,O,null,T,A)),Nn(e,i,o,!S);return}}Xd(e,t,i,n,a,l,o,u,d)}function wp(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],i=l.getSnapshot;l=l.value;try{if(!bt(i(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Nn(e,t,n,a){t&=~os,t&=~ma,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var l=t;0<l;){var i=31-et(l),o=1<<i;a[i]=-1,l&=~o}n!==0&&fl(e,n,t)}function io(){return(Ce&6)===0?(Pl(0),!1):!0}function ds(){if(me!==null){if(De===0)var e=me.return;else e=me,rn=la=null,zr(e),Za=null,Ol=0,e=me;for(;e!==null;)md(e.alternate,e),e=e.return;me=null}}function nl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Ip(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),yn=0,ds(),ke=e,me=n=ln(e.current,null),ge=t,De=0,_t=null,kn=!1,$a=Tn(e,t),is=!1,el=At=os=ma=qn=Ve=0,gt=Kl=null,rs=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var l=31-et(a),i=1<<l;t|=e[l],a&=~i}return vn=t,ji(),n}function qd(e,t){oe=null,j.H=Hl,t===Qa||t===Ui?(t=$u(),De=3):t===hr?(t=$u(),De=4):De=t===Yr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,_t=t,me===null&&(Ve=1,Ji(e,Ot(t,e.current)))}function Ld(){var e=St.current;return e===null?!0:(ge&4194048)===ge?Bt===null:(ge&62914560)===ge||(ge&536870912)!==0?e===Bt:!1}function Hd(){var e=j.H;return j.H=Hl,e===null?Hl:e}function Nd(){var e=j.A;return j.A=Dp,e}function oo(){Ve=4,kn||(ge&4194048)!==ge&&St.current!==null||($a=!0),(qn&134217727)===0&&(ma&134217727)===0||ke===null||Nn(ke,ge,At,!1)}function fs(e,t,n){var a=Ce;Ce|=2;var l=Hd(),i=Nd();(ke!==e||ge!==t)&&(lo=null,nl(e,t)),t=!1;var o=Ve;e:do try{if(De!==0&&me!==null){var u=me,d=_t;switch(De){case 8:ds(),o=6;break e;case 3:case 2:case 9:case 6:St.current===null&&(t=!0);var S=De;if(De=0,_t=null,al(e,u,d,S),n&&$a){o=0;break e}break;default:S=De,De=0,_t=null,al(e,u,d,S)}}Rp(),o=Ve;break}catch(M){qd(e,M)}while(!0);return t&&e.shellSuspendCounter++,rn=la=null,Ce=a,j.H=l,j.A=i,me===null&&(ke=null,ge=0,ji()),o}function Rp(){for(;me!==null;)Gd(me)}function Up(e,t){var n=Ce;Ce|=2;var a=Hd(),l=Nd();ke!==e||ge!==t?(lo=null,ao=rt()+500,nl(e,t)):$a=Tn(e,t);e:do try{if(De!==0&&me!==null){t=me;var i=_t;t:switch(De){case 1:De=0,_t=null,al(e,t,i,1);break;case 2:case 9:if(Wu(i)){De=0,_t=null,Vd(t);break}t=function(){De!==2&&De!==9||ke!==e||(De=7),Zt(e)},i.then(t,t);break e;case 3:De=7;break e;case 4:De=5;break e;case 7:Wu(i)?(De=0,_t=null,Vd(t)):(De=0,_t=null,al(e,t,i,7));break;case 5:var o=null;switch(me.tag){case 26:o=me.memoizedState;case 5:case 27:var u=me;if(o?Mf(o):u.stateNode.complete){De=0,_t=null;var d=u.sibling;if(d!==null)me=d;else{var S=u.return;S!==null?(me=S,ro(S)):me=null}break t}}De=0,_t=null,al(e,t,i,5);break;case 6:De=0,_t=null,al(e,t,i,6);break;case 8:ds(),Ve=6;break e;default:throw Error(c(462))}}Bp();break}catch(M){qd(e,M)}while(!0);return rn=la=null,j.H=a,j.A=l,Ce=n,me!==null?0:(ke=null,ge=0,ji(),Ve)}function Bp(){for(;me!==null&&!wo();)Gd(me)}function Gd(e){var t=dd(e.alternate,e,vn);e.memoizedProps=e.pendingProps,t===null?ro(e):me=t}function Vd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=id(n,t,t.pendingProps,t.type,void 0,ge);break;case 11:t=id(n,t,t.pendingProps,t.type.render,t.ref,ge);break;case 5:zr(t);default:md(n,t),t=me=Nu(t,vn),t=dd(n,t,vn)}e.memoizedProps=e.pendingProps,t===null?ro(e):me=t}function al(e,t,n,a){rn=la=null,zr(t),Za=null,Ol=0;var l=t.return;try{if(_p(e,l,t,n,ge)){Ve=1,Ji(e,Ot(n,e.current)),me=null;return}}catch(i){if(l!==null)throw me=l,i;Ve=1,Ji(e,Ot(n,e.current)),me=null;return}t.flags&32768?(be||a===1?e=!0:$a||(ge&536870912)!==0?e=!1:(kn=e=!0,(a===2||a===9||a===3||a===6)&&(a=St.current,a!==null&&a.tag===13&&(a.flags|=16384))),Yd(t,e)):ro(t)}function ro(e){var t=e;do{if((t.flags&32768)!==0){Yd(t,kn);return}e=t.return;var n=jp(t.alternate,t,vn);if(n!==null){me=n;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);Ve===0&&(Ve=5)}function Yd(e,t){do{var n=zp(e.alternate,e);if(n!==null){n.flags&=32767,me=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){me=e;return}me=e=n}while(e!==null);Ve=6,me=null}function Xd(e,t,n,a,l,i,o,u,d){e.cancelPendingCommit=null;do so();while(Fe!==0);if((Ce&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(i=t.lanes|t.childLanes,i|=er,di(e,n,i,o,u,d),e===ke&&(me=ke=null,ge=0),tl=t,Hn=e,yn=n,ss=i,us=l,Rd=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Hp(xn,function(){return Pd(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=j.T,j.T=null,l=k.p,k.p=2,o=Ce,Ce|=4;try{Mp(e,t,n)}finally{Ce=o,k.p=l,j.T=a}}Fe=1,Qd(),Zd(),Kd()}}function Qd(){if(Fe===1){Fe=0;var e=Hn,t=tl,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=j.T,j.T=null;var a=k.p;k.p=2;var l=Ce;Ce|=4;try{Ed(t,e);var i=As,o=Ou(e.containerInfo),u=i.focusedElem,d=i.selectionRange;if(o!==u&&u&&u.ownerDocument&&Du(u.ownerDocument.documentElement,u)){if(d!==null&&Po(u)){var S=d.start,M=d.end;if(M===void 0&&(M=S),"selectionStart"in u)u.selectionStart=S,u.selectionEnd=Math.min(M,u.value.length);else{var O=u.ownerDocument||document,T=O&&O.defaultView||window;if(T.getSelection){var A=T.getSelection(),Q=u.textContent.length,I=Math.min(d.start,Q),Be=d.end===void 0?I:Math.min(d.end,Q);!A.extend&&I>Be&&(o=Be,Be=I,I=o);var g=Cu(u,I),p=Cu(u,Be);if(g&&p&&(A.rangeCount!==1||A.anchorNode!==g.node||A.anchorOffset!==g.offset||A.focusNode!==p.node||A.focusOffset!==p.offset)){var x=O.createRange();x.setStart(g.node,g.offset),A.removeAllRanges(),I>Be?(A.addRange(x),A.extend(p.node,p.offset)):(x.setEnd(p.node,p.offset),A.addRange(x))}}}}for(O=[],A=u;A=A.parentNode;)A.nodeType===1&&O.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<O.length;u++){var C=O[u];C.element.scrollLeft=C.left,C.element.scrollTop=C.top}}So=!!_s,As=_s=null}finally{Ce=l,k.p=a,j.T=n}}e.current=t,Fe=2}}function Zd(){if(Fe===2){Fe=0;var e=Hn,t=tl,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=j.T,j.T=null;var a=k.p;k.p=2;var l=Ce;Ce|=4;try{xd(e,t.alternate,t)}finally{Ce=l,k.p=a,j.T=n}}Fe=3}}function Kd(){if(Fe===4||Fe===3){Fe=0,ri();var e=Hn,t=tl,n=yn,a=Rd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Fe=5:(Fe=0,tl=Hn=null,Jd(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Ln=null),za(n),t=t.stateNode,st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(yt,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=j.T,l=k.p,k.p=2,j.T=null;try{for(var i=e.onRecoverableError,o=0;o<a.length;o++){var u=a[o];i(u.value,{componentStack:u.stack})}}finally{j.T=t,k.p=l}}(yn&3)!==0&&so(),Zt(e),l=e.pendingLanes,(n&261930)!==0&&(l&42)!==0?e===cs?Jl++:(Jl=0,cs=e):Jl=0,Pl(0)}}function Jd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Cl(t)))}function so(){return Qd(),Zd(),Kd(),Pd()}function Pd(){if(Fe!==5)return!1;var e=Hn,t=ss;ss=0;var n=za(yn),a=j.T,l=k.p;try{k.p=32>n?32:n,j.T=null,n=us,us=null;var i=Hn,o=yn;if(Fe=0,tl=Hn=null,yn=0,(Ce&6)!==0)throw Error(c(331));var u=Ce;if(Ce|=4,Dd(i.current),zd(i,i.current,o,n),Ce=u,Pl(0,!1),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(yt,i)}catch{}return!0}finally{k.p=l,j.T=a,Jd(e,t)}}function Fd(e,t,n){t=Ot(n,t),t=Vr(e.stateNode,t,2),e=wn(e,t,2),e!==null&&(_n(e,2),Zt(e))}function Oe(e,t,n){if(e.tag===3)Fd(e,e,n);else for(;t!==null;){if(t.tag===3){Fd(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Ln===null||!Ln.has(a))){e=Ot(n,e),n=Wc(2),a=wn(t,n,2),a!==null&&(Ic(n,a,t,e),_n(a,2),Zt(a));break}}t=t.return}}function ms(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Op;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(is=!0,l.add(n),e=kp.bind(null,e,t,n),t.then(e,e))}function kp(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ke===e&&(ge&n)===n&&(Ve===4||Ve===3&&(ge&62914560)===ge&&300>rt()-no?(Ce&2)===0&&nl(e,0):os|=n,el===ge&&(el=0)),Zt(e)}function Wd(e,t){t===0&&(t=Aa()),e=ta(e,t),e!==null&&(_n(e,t),Zt(e))}function qp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Wd(e,n)}function Lp(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(t),Wd(e,n)}function Hp(e,t){return va(e,t)}var uo=null,ll=null,ps=!1,co=!1,hs=!1,Gn=0;function Zt(e){e!==ll&&e.next===null&&(ll===null?uo=ll=e:ll=ll.next=e),co=!0,ps||(ps=!0,Gp())}function Pl(e,t){if(!hs&&co){hs=!0;do for(var n=!1,a=uo;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var i=0;else{var o=a.suspendedLanes,u=a.pingedLanes;i=(1<<31-et(42|e)+1)-1,i&=l&~(o&~u),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,tf(a,i))}else i=ge,i=_a(a,a===ke?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Tn(a,i)||(n=!0,tf(a,i));a=a.next}while(n);hs=!1}}function Np(){Id()}function Id(){co=ps=!1;var e=0;Gn!==0&&Wp()&&(e=Gn);for(var t=rt(),n=null,a=uo;a!==null;){var l=a.next,i=$d(a,t);i===0?(a.next=null,n===null?uo=l:n.next=l,l===null&&(ll=n)):(n=a,(e!==0||(i&3)!==0)&&(co=!0)),a=l}Fe!==0&&Fe!==5||Pl(e),Gn!==0&&(Gn=0)}function $d(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var o=31-et(i),u=1<<o,d=l[o];d===-1?((u&n)===0||(u&a)!==0)&&(l[o]=Lt(u,t)):d<=t&&(e.expiredLanes|=u),i&=~u}if(t=ke,n=ge,n=_a(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(De===2||De===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&ya(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Tn(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&ya(a),za(n)){case 2:case 8:n=ba;break;case 32:n=xn;break;case 268435456:n=ui;break;default:n=xn}return a=ef.bind(null,e),n=va(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&ya(a),e.callbackPriority=2,e.callbackNode=null,2}function ef(e,t){if(Fe!==0&&Fe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(so()&&e.callbackNode!==n)return null;var a=ge;return a=_a(e,e===ke?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Bd(e,a,t),$d(e,rt()),e.callbackNode!=null&&e.callbackNode===n?ef.bind(null,e):null)}function tf(e,t){if(so())return null;Bd(e,t,!0)}function Gp(){$p(function(){(Ce&6)!==0?va($e,Np):Id()})}function gs(){if(Gn===0){var e=Ya;e===0&&(e=Ft,Ft<<=1,(Ft&261888)===0&&(Ft=256)),Gn=e}return Gn}function nf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:yi(""+e)}function af(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Vp(e,t,n,a,l){if(t==="submit"&&n&&n.stateNode===l){var i=nf((l[tt]||null).action),o=a.submitter;o&&(t=(t=o[tt]||null)?nf(t.formAction):o.getAttribute("formAction"),t!==null&&(i=t,o=null));var u=new Ti("action","action",null,a,l);e.push({event:u,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Gn!==0){var d=o?af(l,o):new FormData(l);kr(n,{pending:!0,data:d,method:l.method,action:i},null,d)}}else typeof i=="function"&&(u.preventDefault(),d=o?af(l,o):new FormData(l),kr(n,{pending:!0,data:d,method:l.method,action:i},i,d))},currentTarget:l}]})}}for(var vs=0;vs<$o.length;vs++){var ys=$o[vs],Yp=ys.toLowerCase(),Xp=ys[0].toUpperCase()+ys.slice(1);Nt(Yp,"on"+Xp)}Nt(Uu,"onAnimationEnd"),Nt(Bu,"onAnimationIteration"),Nt(ku,"onAnimationStart"),Nt("dblclick","onDoubleClick"),Nt("focusin","onFocus"),Nt("focusout","onBlur"),Nt(op,"onTransitionRun"),Nt(rp,"onTransitionStart"),Nt(sp,"onTransitionCancel"),Nt(qu,"onTransitionEnd"),Ca("onMouseEnter",["mouseout","mouseover"]),Ca("onMouseLeave",["mouseout","mouseover"]),Ca("onPointerEnter",["pointerout","pointerover"]),Ca("onPointerLeave",["pointerout","pointerover"]),Wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Wn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fl));function lf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var o=a.length-1;0<=o;o--){var u=a[o],d=u.instance,S=u.currentTarget;if(u=u.listener,d!==i&&l.isPropagationStopped())break e;i=u,l.currentTarget=S;try{i(l)}catch(M){Ei(M)}l.currentTarget=null,i=d}else for(o=0;o<a.length;o++){if(u=a[o],d=u.instance,S=u.currentTarget,u=u.listener,d!==i&&l.isPropagationStopped())break e;i=u,l.currentTarget=S;try{i(l)}catch(M){Ei(M)}l.currentTarget=null,i=d}}}}function pe(e,t){var n=t[Ma];n===void 0&&(n=t[Ma]=new Set);var a=e+"__bubble";n.has(a)||(of(t,e,2,!1),n.add(a))}function bs(e,t,n){var a=0;t&&(a|=4),of(n,e,a,t)}var fo="_reactListening"+Math.random().toString(36).slice(2);function xs(e){if(!e[fo]){e[fo]=!0,ct.forEach(function(n){n!=="selectionchange"&&(Qp.has(n)||bs(n,!1,e),bs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fo]||(t[fo]=!0,bs("selectionchange",!1,t))}}function of(e,t,n,a){switch(Bf(t)){case 2:var l=bh;break;case 8:l=xh;break;default:l=Bs}n=l.bind(null,t,n,e),l=void 0,!No||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Ss(e,t,n,a,l){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var u=a.stateNode.containerInfo;if(u===l)break;if(o===4)for(o=a.return;o!==null;){var d=o.tag;if((d===3||d===4)&&o.stateNode.containerInfo===l)return;o=o.return}for(;u!==null;){if(o=N(u),o===null)return;if(d=o.tag,d===5||d===6||d===26||d===27){a=i=o;continue e}u=u.parentNode}}a=a.return}cu(function(){var S=i,M=Lo(n),O=[];e:{var T=Lu.get(e);if(T!==void 0){var A=Ti,Q=e;switch(e){case"keypress":if(xi(n)===0)break e;case"keydown":case"keyup":A=Lm;break;case"focusin":Q="focus",A=Xo;break;case"focusout":Q="blur",A=Xo;break;case"beforeblur":case"afterblur":A=Xo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=mu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=jm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=Gm;break;case Uu:case Bu:case ku:A=Cm;break;case qu:A=Ym;break;case"scroll":case"scrollend":A=Am;break;case"wheel":A=Qm;break;case"copy":case"cut":case"paste":A=Om;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=hu;break;case"toggle":case"beforetoggle":A=Km}var I=(t&4)!==0,Be=!I&&(e==="scroll"||e==="scrollend"),g=I?T!==null?T+"Capture":null:T;I=[];for(var p=S,x;p!==null;){var C=p;if(x=C.stateNode,C=C.tag,C!==5&&C!==26&&C!==27||x===null||g===null||(C=yl(p,g),C!=null&&I.push(Wl(p,C,x))),Be)break;p=p.return}0<I.length&&(T=new A(T,Q,null,n,M),O.push({event:T,listeners:I}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",T&&n!==qo&&(Q=n.relatedTarget||n.fromElement)&&(N(Q)||Q[en]))break e;if((A||T)&&(T=M.window===M?M:(T=M.ownerDocument)?T.defaultView||T.parentWindow:window,A?(Q=n.relatedTarget||n.toElement,A=S,Q=Q?N(Q):null,Q!==null&&(Be=_(Q),I=Q.tag,Q!==Be||I!==5&&I!==27&&I!==6)&&(Q=null)):(A=null,Q=S),A!==Q)){if(I=mu,C="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(I=hu,C="onPointerLeave",g="onPointerEnter",p="pointer"),Be=A==null?T:fe(A),x=Q==null?T:fe(Q),T=new I(C,p+"leave",A,n,M),T.target=Be,T.relatedTarget=x,C=null,N(M)===S&&(I=new I(g,p+"enter",Q,n,M),I.target=x,I.relatedTarget=Be,C=I),Be=C,A&&Q)t:{for(I=Zp,g=A,p=Q,x=0,C=g;C;C=I(C))x++;C=0;for(var W=p;W;W=I(W))C++;for(;0<x-C;)g=I(g),x--;for(;0<C-x;)p=I(p),C--;for(;x--;){if(g===p||p!==null&&g===p.alternate){I=g;break t}g=I(g),p=I(p)}I=null}else I=null;A!==null&&rf(O,T,A,I,!1),Q!==null&&Be!==null&&rf(O,Be,Q,I,!0)}}e:{if(T=S?fe(S):window,A=T.nodeName&&T.nodeName.toLowerCase(),A==="select"||A==="input"&&T.type==="file")var Ee=_u;else if(Su(T))if(Au)Ee=ap;else{Ee=tp;var Z=ep}else A=T.nodeName,!A||A.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?S&&ko(S.elementType)&&(Ee=_u):Ee=np;if(Ee&&(Ee=Ee(e,S))){Tu(O,Ee,n,M);break e}Z&&Z(e,T,S),e==="focusout"&&S&&T.type==="number"&&S.memoizedProps.value!=null&&Bo(T,"number",T.value)}switch(Z=S?fe(S):window,e){case"focusin":(Su(Z)||Z.contentEditable==="true")&&(Ba=Z,Fo=S,jl=null);break;case"focusout":jl=Fo=Ba=null;break;case"mousedown":Wo=!0;break;case"contextmenu":case"mouseup":case"dragend":Wo=!1,wu(O,n,M);break;case"selectionchange":if(ip)break;case"keydown":case"keyup":wu(O,n,M)}var re;if(Zo)e:{switch(e){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Ua?bu(e,n)&&(ve="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ve="onCompositionStart");ve&&(gu&&n.locale!=="ko"&&(Ua||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Ua&&(re=du()):(En=M,Go="value"in En?En.value:En.textContent,Ua=!0)),Z=mo(S,ve),0<Z.length&&(ve=new pu(ve,e,null,n,M),O.push({event:ve,listeners:Z}),re?ve.data=re:(re=xu(n),re!==null&&(ve.data=re)))),(re=Pm?Fm(e,n):Wm(e,n))&&(ve=mo(S,"onBeforeInput"),0<ve.length&&(Z=new pu("onBeforeInput","beforeinput",null,n,M),O.push({event:Z,listeners:ve}),Z.data=re)),Vp(O,e,S,n,M)}lf(O,t)})}function Wl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function mo(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=yl(e,n),l!=null&&a.unshift(Wl(e,l,i)),l=yl(e,t),l!=null&&a.push(Wl(e,l,i))),e.tag===3)return a;e=e.return}return[]}function Zp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function rf(e,t,n,a,l){for(var i=t._reactName,o=[];n!==null&&n!==a;){var u=n,d=u.alternate,S=u.stateNode;if(u=u.tag,d!==null&&d===a)break;u!==5&&u!==26&&u!==27||S===null||(d=S,l?(S=yl(n,i),S!=null&&o.unshift(Wl(n,S,d))):l||(S=yl(n,i),S!=null&&o.push(Wl(n,S,d)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Kp=/\r\n?/g,Jp=/\u0000|\uFFFD/g;function sf(e){return(typeof e=="string"?e:""+e).replace(Kp,`
`).replace(Jp,"")}function uf(e,t){return t=sf(t),sf(e)===t}function Ue(e,t,n,a,l,i){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Oa(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Oa(e,""+a);break;case"className":gi(e,"class",a);break;case"tabIndex":gi(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":gi(e,n,a);break;case"style":su(e,a,i);break;case"data":if(t!=="object"){gi(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=yi(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&Ue(e,t,"name",l.name,l,null),Ue(e,t,"formEncType",l.formEncType,l,null),Ue(e,t,"formMethod",l.formMethod,l,null),Ue(e,t,"formTarget",l.formTarget,l,null)):(Ue(e,t,"encType",l.encType,l,null),Ue(e,t,"method",l.method,l,null),Ue(e,t,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=yi(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=nn);break;case"onScroll":a!=null&&pe("scroll",e);break;case"onScrollEnd":a!=null&&pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=yi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":pe("beforetoggle",e),pe("toggle",e),hi(e,"popover",a);break;case"xlinkActuate":tn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":tn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":tn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":tn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":tn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":tn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":tn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":tn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":tn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":hi(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Tm.get(n)||n,hi(e,n,a))}}function Ts(e,t,n,a,l,i){switch(n){case"style":su(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"children":typeof a=="string"?Oa(e,a):(typeof a=="number"||typeof a=="bigint")&&Oa(e,""+a);break;case"onScroll":a!=null&&pe("scroll",e);break;case"onScrollEnd":a!=null&&pe("scrollend",e);break;case"onClick":a!=null&&(e.onclick=nn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!pi.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),i=e[tt]||null,i=i!=null?i[n]:null,typeof i=="function"&&e.removeEventListener(t,i,l),typeof a=="function")){typeof i!="function"&&i!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,l);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):hi(e,n,a)}}}function it(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",e),pe("load",e);var a=!1,l=!1,i;for(i in n)if(n.hasOwnProperty(i)){var o=n[i];if(o!=null)switch(i){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ue(e,t,i,o,n,null)}}l&&Ue(e,t,"srcSet",n.srcSet,n,null),a&&Ue(e,t,"src",n.src,n,null);return;case"input":pe("invalid",e);var u=i=o=l=null,d=null,S=null;for(a in n)if(n.hasOwnProperty(a)){var M=n[a];if(M!=null)switch(a){case"name":l=M;break;case"type":o=M;break;case"checked":d=M;break;case"defaultChecked":S=M;break;case"value":i=M;break;case"defaultValue":u=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(c(137,t));break;default:Ue(e,t,a,M,n,null)}}lu(e,i,u,d,S,o,l,!1);return;case"select":pe("invalid",e),a=o=i=null;for(l in n)if(n.hasOwnProperty(l)&&(u=n[l],u!=null))switch(l){case"value":i=u;break;case"defaultValue":o=u;break;case"multiple":a=u;default:Ue(e,t,l,u,n,null)}t=i,n=o,e.multiple=!!a,t!=null?Da(e,!!a,t,!1):n!=null&&Da(e,!!a,n,!0);return;case"textarea":pe("invalid",e),i=l=a=null;for(o in n)if(n.hasOwnProperty(o)&&(u=n[o],u!=null))switch(o){case"value":a=u;break;case"defaultValue":l=u;break;case"children":i=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(c(91));break;default:Ue(e,t,o,u,n,null)}ou(e,a,l,i);return;case"option":for(d in n)if(n.hasOwnProperty(d)&&(a=n[d],a!=null))switch(d){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Ue(e,t,d,a,n,null)}return;case"dialog":pe("beforetoggle",e),pe("toggle",e),pe("cancel",e),pe("close",e);break;case"iframe":case"object":pe("load",e);break;case"video":case"audio":for(a=0;a<Fl.length;a++)pe(Fl[a],e);break;case"image":pe("error",e),pe("load",e);break;case"details":pe("toggle",e);break;case"embed":case"source":case"link":pe("error",e),pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(S in n)if(n.hasOwnProperty(S)&&(a=n[S],a!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ue(e,t,S,a,n,null)}return;default:if(ko(t)){for(M in n)n.hasOwnProperty(M)&&(a=n[M],a!==void 0&&Ts(e,t,M,a,n,void 0));return}}for(u in n)n.hasOwnProperty(u)&&(a=n[u],a!=null&&Ue(e,t,u,a,n,null))}function Pp(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,o=null,u=null,d=null,S=null,M=null;for(A in n){var O=n[A];if(n.hasOwnProperty(A)&&O!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":d=O;default:a.hasOwnProperty(A)||Ue(e,t,A,null,a,O)}}for(var T in a){var A=a[T];if(O=n[T],a.hasOwnProperty(T)&&(A!=null||O!=null))switch(T){case"type":i=A;break;case"name":l=A;break;case"checked":S=A;break;case"defaultChecked":M=A;break;case"value":o=A;break;case"defaultValue":u=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(c(137,t));break;default:A!==O&&Ue(e,t,T,A,a,O)}}Uo(e,o,u,d,S,M,i,l);return;case"select":A=o=u=T=null;for(i in n)if(d=n[i],n.hasOwnProperty(i)&&d!=null)switch(i){case"value":break;case"multiple":A=d;default:a.hasOwnProperty(i)||Ue(e,t,i,null,a,d)}for(l in a)if(i=a[l],d=n[l],a.hasOwnProperty(l)&&(i!=null||d!=null))switch(l){case"value":T=i;break;case"defaultValue":u=i;break;case"multiple":o=i;default:i!==d&&Ue(e,t,l,i,a,d)}t=u,n=o,a=A,T!=null?Da(e,!!n,T,!1):!!a!=!!n&&(t!=null?Da(e,!!n,t,!0):Da(e,!!n,n?[]:"",!1));return;case"textarea":A=T=null;for(u in n)if(l=n[u],n.hasOwnProperty(u)&&l!=null&&!a.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:Ue(e,t,u,null,a,l)}for(o in a)if(l=a[o],i=n[o],a.hasOwnProperty(o)&&(l!=null||i!=null))switch(o){case"value":T=l;break;case"defaultValue":A=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==i&&Ue(e,t,o,l,a,i)}iu(e,T,A);return;case"option":for(var Q in n)if(T=n[Q],n.hasOwnProperty(Q)&&T!=null&&!a.hasOwnProperty(Q))switch(Q){case"selected":e.selected=!1;break;default:Ue(e,t,Q,null,a,T)}for(d in a)if(T=a[d],A=n[d],a.hasOwnProperty(d)&&T!==A&&(T!=null||A!=null))switch(d){case"selected":e.selected=T&&typeof T!="function"&&typeof T!="symbol";break;default:Ue(e,t,d,T,a,A)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var I in n)T=n[I],n.hasOwnProperty(I)&&T!=null&&!a.hasOwnProperty(I)&&Ue(e,t,I,null,a,T);for(S in a)if(T=a[S],A=n[S],a.hasOwnProperty(S)&&T!==A&&(T!=null||A!=null))switch(S){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(c(137,t));break;default:Ue(e,t,S,T,a,A)}return;default:if(ko(t)){for(var Be in n)T=n[Be],n.hasOwnProperty(Be)&&T!==void 0&&!a.hasOwnProperty(Be)&&Ts(e,t,Be,void 0,a,T);for(M in a)T=a[M],A=n[M],!a.hasOwnProperty(M)||T===A||T===void 0&&A===void 0||Ts(e,t,M,T,a,A);return}}for(var g in n)T=n[g],n.hasOwnProperty(g)&&T!=null&&!a.hasOwnProperty(g)&&Ue(e,t,g,null,a,T);for(O in a)T=a[O],A=n[O],!a.hasOwnProperty(O)||T===A||T==null&&A==null||Ue(e,t,O,T,a,A)}function cf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Fp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var l=n[a],i=l.transferSize,o=l.initiatorType,u=l.duration;if(i&&u&&cf(o)){for(o=0,u=l.responseEnd,a+=1;a<n.length;a++){var d=n[a],S=d.startTime;if(S>u)break;var M=d.transferSize,O=d.initiatorType;M&&cf(O)&&(d=d.responseEnd,o+=M*(d<u?1:(u-S)/(d-S)))}if(--a,t+=8*(i+o)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var _s=null,As=null;function po(e){return e.nodeType===9?e:e.ownerDocument}function df(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ff(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Es(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var js=null;function Wp(){var e=window.event;return e&&e.type==="popstate"?e===js?!1:(js=e,!0):(js=null,!1)}var mf=typeof setTimeout=="function"?setTimeout:void 0,Ip=typeof clearTimeout=="function"?clearTimeout:void 0,pf=typeof Promise=="function"?Promise:void 0,$p=typeof queueMicrotask=="function"?queueMicrotask:typeof pf<"u"?function(e){return pf.resolve(null).then(e).catch(eh)}:mf;function eh(e){setTimeout(function(){throw e})}function Vn(e){return e==="head"}function hf(e,t){var n=t,a=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(l),sl(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")Il(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Il(n);for(var i=n.firstChild;i;){var o=i.nextSibling,u=i.nodeName;i[An]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=o}}else n==="body"&&Il(e.ownerDocument.body);n=l}while(n);sl(t)}function gf(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function zs(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":zs(n),b(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function th(e,t,n,a){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[An])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=kt(e.nextSibling),e===null)break}return null}function nh(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=kt(e.nextSibling),e===null))return null;return e}function vf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=kt(e.nextSibling),e===null))return null;return e}function Ms(e){return e.data==="$?"||e.data==="$~"}function Cs(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ah(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ds=null;function yf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return kt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function bf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function xf(e,t,n){switch(t=po(n),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Il(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);b(e)}var qt=new Map,Sf=new Set;function ho(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var bn=k.d;k.d={f:lh,r:ih,D:oh,C:rh,L:sh,m:uh,X:dh,S:ch,M:fh};function lh(){var e=bn.f(),t=io();return e||t}function ih(e){var t=te(e);t!==null&&t.tag===5&&t.type==="form"?qc(t):bn.r(e)}var il=typeof document>"u"?null:document;function Tf(e,t,n){var a=il;if(a&&typeof t=="string"&&t){var l=Ct(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),Sf.has(l)||(Sf.add(l),e={rel:e,crossOrigin:n,href:t},a.querySelector(l)===null&&(t=a.createElement("link"),it(t,"link",e),ye(t),a.head.appendChild(t)))}}function oh(e){bn.D(e),Tf("dns-prefetch",e,null)}function rh(e,t){bn.C(e,t),Tf("preconnect",e,t)}function sh(e,t,n){bn.L(e,t,n);var a=il;if(a&&e&&t){var l='link[rel="preload"][as="'+Ct(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+Ct(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+Ct(n.imageSizes)+'"]')):l+='[href="'+Ct(e)+'"]';var i=l;switch(t){case"style":i=ol(e);break;case"script":i=rl(e)}qt.has(i)||(e=R({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),qt.set(i,e),a.querySelector(l)!==null||t==="style"&&a.querySelector($l(i))||t==="script"&&a.querySelector(ei(i))||(t=a.createElement("link"),it(t,"link",e),ye(t),a.head.appendChild(t)))}}function uh(e,t){bn.m(e,t);var n=il;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Ct(a)+'"][href="'+Ct(e)+'"]',i=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=rl(e)}if(!qt.has(i)&&(e=R({rel:"modulepreload",href:e},t),qt.set(i,e),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ei(i)))return}a=n.createElement("link"),it(a,"link",e),ye(a),n.head.appendChild(a)}}}function ch(e,t,n){bn.S(e,t,n);var a=il;if(a&&e){var l=Se(a).hoistableStyles,i=ol(e);t=t||"default";var o=l.get(i);if(!o){var u={loading:0,preload:null};if(o=a.querySelector($l(i)))u.loading=5;else{e=R({rel:"stylesheet",href:e,"data-precedence":t},n),(n=qt.get(i))&&Os(e,n);var d=o=a.createElement("link");ye(d),it(d,"link",e),d._p=new Promise(function(S,M){d.onload=S,d.onerror=M}),d.addEventListener("load",function(){u.loading|=1}),d.addEventListener("error",function(){u.loading|=2}),u.loading|=4,go(o,t,a)}o={type:"stylesheet",instance:o,count:1,state:u},l.set(i,o)}}}function dh(e,t){bn.X(e,t);var n=il;if(n&&e){var a=Se(n).hoistableScripts,l=rl(e),i=a.get(l);i||(i=n.querySelector(ei(l)),i||(e=R({src:e,async:!0},t),(t=qt.get(l))&&ws(e,t),i=n.createElement("script"),ye(i),it(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function fh(e,t){bn.M(e,t);var n=il;if(n&&e){var a=Se(n).hoistableScripts,l=rl(e),i=a.get(l);i||(i=n.querySelector(ei(l)),i||(e=R({src:e,async:!0,type:"module"},t),(t=qt.get(l))&&ws(e,t),i=n.createElement("script"),ye(i),it(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function _f(e,t,n,a){var l=(l=se.current)?ho(l):null;if(!l)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ol(n.href),n=Se(l).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ol(n.href);var i=Se(l).hoistableStyles,o=i.get(e);if(o||(l=l.ownerDocument||l,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,o),(i=l.querySelector($l(e)))&&!i._p&&(o.instance=i,o.state.loading=5),qt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},qt.set(e,n),i||mh(l,e,n,o.state))),t&&a===null)throw Error(c(528,""));return o}if(t&&a!==null)throw Error(c(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=rl(n),n=Se(l).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function ol(e){return'href="'+Ct(e)+'"'}function $l(e){return'link[rel="stylesheet"]['+e+"]"}function Af(e){return R({},e,{"data-precedence":e.precedence,precedence:null})}function mh(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),it(t,"link",n),ye(t),e.head.appendChild(t))}function rl(e){return'[src="'+Ct(e)+'"]'}function ei(e){return"script[async]"+e}function Ef(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Ct(n.href)+'"]');if(a)return t.instance=a,ye(a),a;var l=R({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),ye(a),it(a,"style",l),go(a,n.precedence,e),t.instance=a;case"stylesheet":l=ol(n.href);var i=e.querySelector($l(l));if(i)return t.state.loading|=4,t.instance=i,ye(i),i;a=Af(n),(l=qt.get(l))&&Os(a,l),i=(e.ownerDocument||e).createElement("link"),ye(i);var o=i;return o._p=new Promise(function(u,d){o.onload=u,o.onerror=d}),it(i,"link",a),t.state.loading|=4,go(i,n.precedence,e),t.instance=i;case"script":return i=rl(n.src),(l=e.querySelector(ei(i)))?(t.instance=l,ye(l),l):(a=n,(l=qt.get(i))&&(a=R({},n),ws(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),ye(l),it(l,"link",a),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,go(a,n.precedence,e));return t.instance}function go(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,i=l,o=0;o<a.length;o++){var u=a[o];if(u.dataset.precedence===t)i=u;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Os(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ws(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var vo=null;function jf(e,t,n){if(vo===null){var a=new Map,l=vo=new Map;l.set(n,a)}else l=vo,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var i=n[l];if(!(i[An]||i[Qe]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var o=i.getAttribute(t)||"";o=e+o;var u=a.get(o);u?u.push(i):a.set(o,[i])}}return a}function zf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function ph(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Mf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function hh(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=ol(a.href),i=t.querySelector($l(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=yo.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,ye(i);return}i=t.ownerDocument||t,a=Af(a),(l=qt.get(l))&&Os(a,l),i=i.createElement("link"),ye(i);var o=i;o._p=new Promise(function(u,d){o.onload=u,o.onerror=d}),it(i,"link",a),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=yo.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Rs=0;function gh(e,t){return e.stylesheets&&e.count===0&&xo(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&xo(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Rs===0&&(Rs=62500*Fp());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&xo(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Rs?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(l)}}:null}function yo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)xo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var bo=null;function xo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,bo=new Map,t.forEach(vh,e),bo=null,yo.call(e))}function vh(e,t){if(!(t.state.loading&4)){var n=bo.get(e);if(n)var a=n.get(null);else{n=new Map,bo.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var o=l[i];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(n.set(o.dataset.precedence,o),a=o)}a&&n.set(null,a)}l=t.instance,o=l.getAttribute("data-precedence"),i=n.get(o)||a,i===a&&n.set(null,l),n.set(o,l),this.count++,a=yo.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var ti={$$typeof:ue,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function yh(e,t,n,a,l,i,o,u,d){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ea(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ea(0),this.hiddenUpdates=Ea(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function Cf(e,t,n,a,l,i,o,u,d,S,M,O){return e=new yh(e,t,n,o,d,S,M,O,u),t=1,i===!0&&(t|=24),i=xt(3,null,null,t),e.current=i,i.stateNode=e,t=fr(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:n,cache:t},gr(i),e}function Df(e){return e?(e=La,e):La}function Of(e,t,n,a,l,i){l=Df(l),a.context===null?a.context=l:a.pendingContext=l,a=On(t),a.payload={element:n},i=i===void 0?null:i,i!==null&&(a.callback=i),n=wn(e,a,t),n!==null&&(vt(n,e,t),Rl(n,e,t))}function wf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Us(e,t){wf(e,t),(e=e.alternate)&&wf(e,t)}function Rf(e){if(e.tag===13||e.tag===31){var t=ta(e,67108864);t!==null&&vt(t,e,67108864),Us(e,67108864)}}function Uf(e){if(e.tag===13||e.tag===31){var t=Et();t=ja(t);var n=ta(e,t);n!==null&&vt(n,e,t),Us(e,t)}}var So=!0;function bh(e,t,n,a){var l=j.T;j.T=null;var i=k.p;try{k.p=2,Bs(e,t,n,a)}finally{k.p=i,j.T=l}}function xh(e,t,n,a){var l=j.T;j.T=null;var i=k.p;try{k.p=8,Bs(e,t,n,a)}finally{k.p=i,j.T=l}}function Bs(e,t,n,a){if(So){var l=ks(a);if(l===null)Ss(e,t,a,To,n),kf(e,a);else if(Th(l,e,t,n,a))a.stopPropagation();else if(kf(e,a),t&4&&-1<Sh.indexOf(e)){for(;l!==null;){var i=te(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var o=$t(i.pendingLanes);if(o!==0){var u=i;for(u.pendingLanes|=2,u.entangledLanes|=2;o;){var d=1<<31-et(o);u.entanglements[1]|=d,o&=~d}Zt(i),(Ce&6)===0&&(ao=rt()+500,Pl(0))}}break;case 31:case 13:u=ta(i,2),u!==null&&vt(u,i,2),io(),Us(i,2)}if(i=ks(a),i===null&&Ss(e,t,a,To,n),i===l)break;l=i}l!==null&&a.stopPropagation()}else Ss(e,t,a,null,n)}}function ks(e){return e=Lo(e),qs(e)}var To=null;function qs(e){if(To=null,e=N(e),e!==null){var t=_(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=z(t),e!==null)return e;e=null}else if(n===31){if(e=w(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return To=e,null}function Bf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(si()){case $e:return 2;case ba:return 8;case xn:case Sn:return 32;case ui:return 268435456;default:return 32}default:return 32}}var Ls=!1,Yn=null,Xn=null,Qn=null,ni=new Map,ai=new Map,Zn=[],Sh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function kf(e,t){switch(e){case"focusin":case"focusout":Yn=null;break;case"dragenter":case"dragleave":Xn=null;break;case"mouseover":case"mouseout":Qn=null;break;case"pointerover":case"pointerout":ni.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ai.delete(t.pointerId)}}function li(e,t,n,a,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:i,targetContainers:[l]},t!==null&&(t=te(t),t!==null&&Rf(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Th(e,t,n,a,l){switch(t){case"focusin":return Yn=li(Yn,e,t,n,a,l),!0;case"dragenter":return Xn=li(Xn,e,t,n,a,l),!0;case"mouseover":return Qn=li(Qn,e,t,n,a,l),!0;case"pointerover":var i=l.pointerId;return ni.set(i,li(ni.get(i)||null,e,t,n,a,l)),!0;case"gotpointercapture":return i=l.pointerId,ai.set(i,li(ai.get(i)||null,e,t,n,a,l)),!0}return!1}function qf(e){var t=N(e.target);if(t!==null){var n=_(t);if(n!==null){if(t=n.tag,t===13){if(t=z(n),t!==null){e.blockedOn=t,gl(e.priority,function(){Uf(n)});return}}else if(t===31){if(t=w(n),t!==null){e.blockedOn=t,gl(e.priority,function(){Uf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _o(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ks(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);qo=a,n.target.dispatchEvent(a),qo=null}else return t=te(n),t!==null&&Rf(t),e.blockedOn=n,!1;t.shift()}return!0}function Lf(e,t,n){_o(e)&&n.delete(t)}function _h(){Ls=!1,Yn!==null&&_o(Yn)&&(Yn=null),Xn!==null&&_o(Xn)&&(Xn=null),Qn!==null&&_o(Qn)&&(Qn=null),ni.forEach(Lf),ai.forEach(Lf)}function Ao(e,t){e.blockedOn===t&&(e.blockedOn=null,Ls||(Ls=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,_h)))}var Eo=null;function Hf(e){Eo!==e&&(Eo=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Eo===e&&(Eo=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],l=e[t+2];if(typeof a!="function"){if(qs(a||n)===null)continue;break}var i=te(n);i!==null&&(e.splice(t,3),t-=3,kr(i,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function sl(e){function t(d){return Ao(d,e)}Yn!==null&&Ao(Yn,e),Xn!==null&&Ao(Xn,e),Qn!==null&&Ao(Qn,e),ni.forEach(t),ai.forEach(t);for(var n=0;n<Zn.length;n++){var a=Zn[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Zn.length&&(n=Zn[0],n.blockedOn===null);)qf(n),n.blockedOn===null&&Zn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],i=n[a+1],o=l[tt]||null;if(typeof i=="function")o||Hf(n);else if(o){var u=null;if(i&&i.hasAttribute("formAction")){if(l=i,o=i[tt]||null)u=o.formAction;else if(qs(l)!==null)continue}else u=o.action;typeof u=="function"?n[a+1]=u:(n.splice(a,3),a-=3),Hf(n)}}}function Nf(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(o){return l=o})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Hs(e){this._internalRoot=e}jo.prototype.render=Hs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var n=t.current,a=Et();Of(n,a,e,t,null,null)},jo.prototype.unmount=Hs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Of(e.current,2,null,e,null,null),io(),t[en]=null}};function jo(e){this._internalRoot=e}jo.prototype.unstable_scheduleHydration=function(e){if(e){var t=hl();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Zn.length&&t!==0&&t<Zn[n].priority;n++);Zn.splice(n,0,e),n===0&&qf(e)}};var Gf=h.version;if(Gf!=="19.2.4")throw Error(c(527,Gf,"19.2.4"));k.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=y(t),e=e!==null?V(e):null,e=e===null?null:e.stateNode,e};var Ah={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zo.isDisabled&&zo.supportsFiber)try{yt=zo.inject(Ah),st=zo}catch{}}return oi.createRoot=function(e,t){if(!v(e))throw Error(c(299));var n=!1,a="",l=Kc,i=Jc,o=Pc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Cf(e,1,!1,null,null,n,a,null,l,i,o,Nf),e[en]=t.current,xs(e),new Hs(t)},oi.hydrateRoot=function(e,t,n){if(!v(e))throw Error(c(299));var a=!1,l="",i=Kc,o=Jc,u=Pc,d=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(u=n.onRecoverableError),n.formState!==void 0&&(d=n.formState)),t=Cf(e,1,!0,t,n??null,a,l,d,i,o,u,Nf),t.context=Df(null),n=t.current,a=Et(),a=ja(a),l=On(a),l.callback=null,wn(n,l,a),n=a,t.current.lanes=n,_n(t,n),Zt(t),e[en]=t.current,xs(e),new jo(t)},oi.version="19.2.4",oi}var Wf;function Bh(){if(Wf)return Vs.exports;Wf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(h){console.error(h)}}return s(),Vs.exports=Uh(),Vs.exports}var kh=Bh();const qh="modulepreload",Lh=function(s){return"/docs/"+s},If={},B=function(h,f,c){let v=Promise.resolve();if(f&&f.length>0){let z=function(y){return Promise.all(y.map(V=>Promise.resolve(V).then(R=>({status:"fulfilled",value:R}),R=>({status:"rejected",reason:R}))))};document.getElementsByTagName("link");const w=document.querySelector("meta[property=csp-nonce]"),E=(w==null?void 0:w.nonce)||(w==null?void 0:w.getAttribute("nonce"));v=z(f.map(y=>{if(y=Lh(y),y in If)return;If[y]=!0;const V=y.endsWith(".css"),R=V?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${y}"]${R}`))return;const F=document.createElement("link");if(F.rel=V?"stylesheet":qh,V||(F.as="script"),F.crossOrigin="",F.href=y,E&&F.setAttribute("nonce",E),document.head.appendChild(F),V)return new Promise((ne,xe)=>{F.addEventListener("load",ne),F.addEventListener("error",()=>xe(new Error(`Unable to preload CSS for ${y}`)))})}))}function _(z){const w=new Event("vite:preloadError",{cancelable:!0});if(w.payload=z,window.dispatchEvent(w),!w.defaultPrevented)throw z}return v.then(z=>{for(const w of z||[])w.status==="rejected"&&_(w.reason);return h().catch(_)})},Mo={amber:{dark:{bg:"#09090b",sf:"#111114",sfH:"#18181c",bd:"#1e1e24",tx:"#e4e4e7",tx2:"#a1a1aa",txM:"#919199",ac:"#e8a845",acD:"rgba(232,168,69,0.12)",acT:"#fbbf24",cdBg:"#0c0c0f",cdTx:"#c4c4cc",sbBg:"#0c0c0e",hdBg:"rgba(9,9,11,0.85)"},light:{bg:"#fafaf9",sf:"#ffffff",sfH:"#f5f5f4",bd:"#e7e5e4",tx:"#1c1917",tx2:"#57534e",txM:"#706b66",ac:"#96640a",acD:"rgba(150,100,10,0.08)",acT:"#7a5208",cdBg:"#f5f3f0",cdTx:"#2c2520",sbBg:"#f5f5f3",hdBg:"rgba(250,250,249,0.85)"},fonts:{heading:"Instrument Serif",body:"DM Sans",code:"JetBrains Mono"}},editorial:{dark:{bg:"#080c1f",sf:"#0e1333",sfH:"#141940",bd:"#1a2050",tx:"#e8e6f0",tx2:"#b5b1c8",txM:"#9490ae",ac:"#ff6b4a",acD:"rgba(255,107,74,0.1)",acT:"#ff8a70",cdBg:"#0a0e27",cdTx:"#b8b4cc",sbBg:"#0a0e27",hdBg:"rgba(8,12,31,0.9)"},light:{bg:"#f6f4f0",sf:"#ffffff",sfH:"#eeece6",bd:"#ddd9d0",tx:"#1a1716",tx2:"#4a443e",txM:"#706960",ac:"#b83d22",acD:"rgba(184,61,34,0.07)",acT:"#9c3019",cdBg:"#edeae4",cdTx:"#3a3530",sbBg:"#f0ede8",hdBg:"rgba(246,244,240,0.92)"},fonts:{heading:"Cormorant Garamond",body:"Bricolage Grotesque",code:"Fira Code"}}},Hh=()=>r.jsx("svg",{width:22,height:22,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),Nh=()=>r.jsx("svg",{width:18,height:18,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("path",{d:"M18 6L6 18M6 6l12 12"})}),Gh=()=>r.jsx("svg",{width:16,height:16,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("path",{d:"M22 2L11 13M22 2l-7 20-4-9-9-4z"})});function um(s){let h="You are a helpful documentation assistant. Answer questions accurately based on the documentation provided below. If the answer isn't in the documentation, say so clearly. Keep answers concise and reference specific sections when possible.";if(s){const f=s.length>1e5?s.slice(0,1e5)+`

[Documentation truncated...]`:s;h+=`

Documentation:
${f}`}return h}async function Vh(s,h,f,c){var z,w,E;const v=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${h}`},body:JSON.stringify({model:f,messages:[{role:"system",content:um(c)},...s.map(y=>({role:y.role,content:y.content}))]})});if(!v.ok){const y=await v.text();throw new Error(`OpenAI API error (${v.status}): ${y}`)}return((E=(w=(z=(await v.json()).choices)==null?void 0:z[0])==null?void 0:w.message)==null?void 0:E.content)||"No response."}async function Yh(s,h,f,c){var z,w;const v=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":h,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:f,max_tokens:1024,system:um(c),messages:s.map(E=>({role:E.role,content:E.content}))})});if(!v.ok){const E=await v.text();throw new Error(`Anthropic API error (${v.status}): ${E}`)}return((w=(z=(await v.json()).content)==null?void 0:z[0])==null?void 0:w.text)||"No response."}function Xh(s){return s==="openai"?"gpt-4o-mini":"claude-sonnet-4-20250514"}function Qh({provider:s,model:h,apiKey:f,context:c}){const[v,_]=q.useState(!1),[z,w]=q.useState([]),[E,y]=q.useState(""),[V,R]=q.useState(!1),[F,ne]=q.useState(null),xe=q.useRef(null),we=q.useRef(null),ze=f||(typeof window<"u"?window.__TOME_AI_API_KEY__:void 0),P=h||Xh(s);q.useEffect(()=>{var U;(U=xe.current)==null||U.scrollIntoView({behavior:"smooth"})},[z]),q.useEffect(()=>{v&&setTimeout(()=>{var U;return(U=we.current)==null?void 0:U.focus()},100)},[v]);const $=q.useCallback(async()=>{const U=E.trim();if(!U||V||!ze)return;const Y={role:"user",content:U},X=[...z,Y];w(X),y(""),R(!0),ne(null);try{let L;s==="openai"?L=await Vh(X,ze,P,c):L=await Yh(X,ze,P,c),w(ce=>[...ce,{role:"assistant",content:L}])}catch(L){ne(L instanceof Error?L.message:"Failed to get response")}finally{R(!1)}},[E,V,z,s,ze,P,c]),ue=q.useCallback(U=>{U.key==="Enter"&&!U.shiftKey&&(U.preventDefault(),$())},[$]);return v?r.jsxs("div",{"data-testid":"ai-chat-panel",style:{position:"fixed",bottom:24,right:24,zIndex:900,width:380,maxWidth:"calc(100vw - 48px)",height:520,maxHeight:"calc(100vh - 48px)",background:"var(--sf)",border:"1px solid var(--bd)",borderRadius:12,boxShadow:"0 16px 64px rgba(0,0,0,0.3)",display:"flex",flexDirection:"column",overflow:"hidden",fontFamily:"var(--font-body)"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",borderBottom:"1px solid var(--bd)",flexShrink:0},children:[r.jsx("span",{style:{fontSize:14,fontWeight:600,color:"var(--tx)"},children:"Ask AI"}),r.jsx("button",{"data-testid":"ai-chat-close",onClick:()=>_(!1),"aria-label":"Close AI chat",style:{background:"none",border:"none",color:"var(--txM)",cursor:"pointer",display:"flex",padding:4},children:r.jsx(Nh,{})})]}),r.jsxs("div",{style:{flex:1,overflow:"auto",padding:"12px 16px"},children:[!ze&&r.jsxs("div",{"data-testid":"ai-chat-no-key",style:{textAlign:"center",color:"var(--txM)",fontSize:13,padding:"24px 8px",lineHeight:1.6},children:[r.jsx("p",{style:{marginBottom:8,fontWeight:500,color:"var(--tx)"},children:"AI not configured"}),r.jsxs("p",{style:{marginBottom:8},children:["To enable AI chat, set the ",r.jsx("code",{style:{fontFamily:"var(--font-code)",fontSize:"0.88em",background:"var(--cdBg)",padding:"0.15em 0.4em",borderRadius:4},children:"apiKeyEnv"})," in ",r.jsx("code",{style:{fontFamily:"var(--font-code)",fontSize:"0.88em",background:"var(--cdBg)",padding:"0.15em 0.4em",borderRadius:4},children:"tome.config.js"})," and provide the environment variable at build time."]}),r.jsxs("p",{style:{fontSize:11.5,color:"var(--txM)"},children:["Example: ",r.jsx("code",{style:{fontFamily:"var(--font-code)",fontSize:"0.88em",background:"var(--cdBg)",padding:"0.15em 0.4em",borderRadius:4},children:"TOME_AI_KEY=sk-... tome build"})]})]}),z.map((U,Y)=>r.jsx("div",{"data-testid":`ai-chat-message-${U.role}`,style:{marginBottom:12,display:"flex",justifyContent:U.role==="user"?"flex-end":"flex-start"},children:r.jsx("div",{style:{maxWidth:"85%",padding:"8px 12px",borderRadius:10,fontSize:13,lineHeight:1.55,whiteSpace:"pre-wrap",wordBreak:"break-word",background:U.role==="user"?"var(--ac)":"var(--cdBg)",color:U.role==="user"?"#fff":"var(--tx)"},children:U.content})},Y)),V&&r.jsx("div",{"data-testid":"ai-chat-loading",style:{display:"flex",justifyContent:"flex-start",marginBottom:12},children:r.jsx("div",{style:{padding:"8px 12px",borderRadius:10,fontSize:13,background:"var(--cdBg)",color:"var(--txM)"},children:"Thinking..."})}),F&&r.jsx("div",{"data-testid":"ai-chat-error",style:{padding:"8px 12px",borderRadius:8,fontSize:12,background:"rgba(220,50,50,0.1)",color:"#d44",marginBottom:12},children:F}),r.jsx("div",{ref:xe})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"10px 12px",borderTop:"1px solid var(--bd)",flexShrink:0},children:[r.jsx("input",{ref:we,"data-testid":"ai-chat-input",value:E,onChange:U=>y(U.target.value),onKeyDown:ue,placeholder:ze?"Ask a question...":"API key required",disabled:!ze,style:{flex:1,background:"var(--cdBg)",border:"1px solid var(--bd)",borderRadius:8,padding:"8px 12px",color:"var(--tx)",fontSize:13,fontFamily:"var(--font-body)",outline:"none"}}),r.jsx("button",{"data-testid":"ai-chat-send",onClick:$,disabled:!ze||!E.trim()||V,"aria-label":"Send message",style:{width:34,height:34,borderRadius:8,background:ze&&E.trim()?"var(--ac)":"var(--cdBg)",color:ze&&E.trim()?"#fff":"var(--txM)",border:"none",cursor:ze&&E.trim()?"pointer":"default",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:r.jsx(Gh,{})})]})]}):r.jsx("button",{"data-testid":"ai-chat-button",onClick:()=>_(!0),"aria-label":"Open AI chat",style:{position:"fixed",bottom:24,right:24,zIndex:900,width:48,height:48,borderRadius:"50%",background:"var(--ac)",color:"#fff",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 16px rgba(0,0,0,0.25)",transition:"transform 0.15s"},children:r.jsx(Hh,{})})}function Zh(s){const h=/^#([0-9a-f]{6})$/i.exec(s.trim());if(!h)return null;const f=parseInt(h[1],16);return[f>>16&255,f>>8&255,f&255]}function Kh(s,h){const f=Zh(s);if(!f)return null;const[c,v,_]=f,z=`rgba(${c},${v},${_},${h?.12:.08})`,w=h?1.15:.85,E=Math.min(255,Math.round(c*w)),y=Math.min(255,Math.round(v*w)),V=Math.min(255,Math.round(_*w)),R=`rgb(${E},${y},${V})`;return{ac:s,acD:z,acT:R}}const jt=({d:s,size:h=16})=>r.jsx("svg",{width:h,height:h,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("path",{d:s})}),cm=()=>r.jsx(jt,{d:"M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.3-4.3"}),$f=()=>r.jsx(jt,{d:"M9 18l6-6-6-6",size:14}),Zs=()=>r.jsx(jt,{d:"M6 9l6 6 6-6",size:14}),Jh=()=>r.jsx(jt,{d:"M3 12h18M3 6h18M3 18h18",size:20}),Ph=()=>r.jsx(jt,{d:"M18 6L6 18M6 6l12 12",size:18}),em=()=>r.jsx(jt,{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}),tm=()=>r.jsx(jt,{d:"M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0-4a1 1 0 0 1 1-1v-1a1 1 0 0 1-2 0v1a1 1 0 0 1 1 1Zm0 16a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1ZM4 12a1 1 0 0 1-1 1H2a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1Zm18-1h-1a1 1 0 0 1 0 2h1a1 1 0 0 1 0-2ZM6.34 6.34a1 1 0 0 1-1.41 0l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41Zm12.73-2.12-.71.71a1 1 0 0 1-1.41-1.41l.71-.71a1 1 0 1 1 1.41 1.41ZM6.34 17.66l-.71.71a1 1 0 0 1-1.41-1.41l.71-.71a1 1 0 0 1 1.41 1.41Zm12.73 2.12-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1-1.41 1.41Z"}),nm=()=>r.jsx(jt,{d:"M19 12H5M12 19l-7-7 7-7",size:14}),am=()=>r.jsx(jt,{d:"M5 12h14M12 5l7 7-7 7",size:14}),Fh=()=>r.jsx(jt,{d:"M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",size:13});function Wh(s){const h=new Date(s),c=new Date().getTime()-h.getTime();if(isNaN(c))return"";const v=Math.floor(c/1e3),_=Math.floor(v/60),z=Math.floor(_/60),w=Math.floor(z/24),E=Math.floor(w/30),y=Math.floor(w/365);return v<60?"just now":_<60?`${_} minute${_===1?"":"s"} ago`:z<24?`${z} hour${z===1?"":"s"} ago`:w<30?`${w} day${w===1?"":"s"} ago`:E<12?`${E} month${E===1?"":"s"} ago`:y>=1?`${y} year${y===1?"":"s"} ago`:h.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}let ul=null;const Ih="/_pagefind/pagefind.js";async function $h(){if(ul)return ul;try{return ul=await import(Ih),await ul.init(),ul}catch{return null}}let Co=null;function eg(){return Co||(Co=B(()=>import("./index-CwC6mnAb.js"),[]).catch(()=>null),Co)}function tg({appId:s,apiKey:h,indexName:f,onNavigate:c,onClose:v,basePath:_=""}){const[z,w]=q.useState(null),[E,y]=q.useState(!1);q.useEffect(()=>{eg().then(R=>{R&&R.DocSearch?w(()=>R.DocSearch):R&&R.default?w(()=>R.default):y(!0)})},[]);const V=q.useCallback(R=>{try{let ne=new URL(R,"http://localhost").pathname;if(_){const xe=_.replace(/\/$/,"");ne.startsWith(xe)&&(ne=ne.slice(xe.length))}return ne.replace(/^\//,"").replace(/\/index\.html$/,"").replace(/\.html$/,"")||"index"}catch{return"index"}},[_]);return E?r.jsx("div",{onClick:v,style:{position:"fixed",inset:0,zIndex:1e3,background:"rgba(0,0,0,0.55)",backdropFilter:"blur(6px)",display:"flex",alignItems:"flex-start",justifyContent:"center",paddingTop:"12vh"},children:r.jsx("div",{onClick:R=>R.stopPropagation(),style:{background:"var(--sf)",border:"1px solid var(--bd)",borderRadius:12,width:"100%",maxWidth:520,boxShadow:"0 24px 80px rgba(0,0,0,0.4)",padding:"32px 18px",textAlign:"center",color:"var(--txM)",fontSize:14},children:"Algolia DocSearch is not available. Install @docsearch/react to enable it."})}):z?r.jsx("div",{"data-testid":"algolia-search-modal",children:r.jsx(z,{appId:s,apiKey:h,indexName:f,navigator:{navigate({itemUrl:R}){const F=V(R);c(F)}},hitComponent:({hit:R,children:F})=>r.jsx("a",{href:R.url,onClick:ne=>{ne.preventDefault();const xe=V(R.url);c(xe)},children:F})})}):r.jsx("div",{onClick:v,style:{position:"fixed",inset:0,zIndex:1e3,background:"rgba(0,0,0,0.55)",backdropFilter:"blur(6px)",display:"flex",alignItems:"flex-start",justifyContent:"center",paddingTop:"12vh"},children:r.jsx("div",{style:{background:"var(--sf)",border:"1px solid var(--bd)",borderRadius:12,width:"100%",maxWidth:520,boxShadow:"0 24px 80px rgba(0,0,0,0.4)",padding:"32px 18px",textAlign:"center",color:"var(--txM)",fontSize:14},children:"Loading search..."})})}const ng=()=>r.jsx(jt,{d:"M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",size:14}),ag=()=>r.jsx(jt,{d:"M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 0 1 4 9 15 15 0 0 1-4 9 15 15 0 0 1-4-9 15 15 0 0 1 4-9Z",size:14}),lg=()=>r.jsx(jt,{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3",size:11}),ig={github:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",twitter:"M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z",discord:"M13.545 2.907a13.227 13.227 0 00-3.257-1.011.05.05 0 00-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 00-3.658 0 8.258 8.258 0 00-.412-.833.051.051 0 00-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 00-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 003.995 2.02.05.05 0 00.056-.019c.308-.42.582-.863.818-1.329a.05.05 0 00-.028-.07 8.735 8.735 0 01-1.248-.595.05.05 0 01-.005-.083c.084-.063.168-.129.248-.195a.05.05 0 01.051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 01.053.007c.08.066.164.132.248.195a.051.051 0 01-.004.085c-.399.232-.813.431-1.249.594a.05.05 0 00-.03.07c.24.465.515.909.817 1.329a.05.05 0 00.056.019 13.235 13.235 0 004.001-2.02.049.049 0 00.021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 00-.02-.019z",linkedin:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 01.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z",youtube:"M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 011.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 01-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 01-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 010 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 011.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 017.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z",mastodon:"M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765 2.79.765.504 1.783.504 5.253c-.005.995-.01 2.19.013 3.44.075 4.21.56 8.354 3.383 9.386 1.302.476 2.418.576 3.317.507 1.628-.125 2.541-.8 2.541-.8l-.054-1.182s-1.163.366-2.47.322c-1.293-.044-2.658-.138-2.867-1.716a3.23 3.23 0 01-.028-.465s1.27.31 2.879.384c.984.045 1.905-.058 2.842-.17zM13 8.59V5.319c0-.67-.17-1.2-.507-1.592-.348-.4-.806-.605-1.373-.605-.656 0-1.154.252-1.486.756L9.2 4.595l-.434-.717c-.332-.504-.83-.756-1.486-.756-.567 0-1.025.204-1.373.605-.338.392-.507.923-.507 1.592V8.59h1.69V5.468c0-.67.285-1.012.855-1.012.63 0 .946.404.946 1.204V7.11h1.682V5.66c0-.8.316-1.204.946-1.204.57 0 .855.342.855 1.012V8.59H13z",bluesky:"M3.468 1.948C5.303 3.325 7.276 6.118 8 7.616c.724-1.498 2.697-4.29 4.532-5.668C13.855 1.013 16 .638 16 3.14c0 .5-.286 4.2-.454 4.8-.585 2.093-2.716 2.628-4.544 2.305 3.195.564 4.007 2.433 2.25 4.302-3.337 3.548-4.8-1.244-5.252-2.547 0 0-.116-.334-.166-.334h.332C8.166 11.666 8.05 12 8.05 12c-.452 1.303-1.916 6.095-5.252 2.547-1.756-1.869-.946-3.738 2.25-4.302-1.829.323-3.96-.212-4.544-2.305C.336 7.34.05 3.64.05 3.14.05.638 2.195 1.013 3.468 1.948z"},og=({platform:s,customIcon:h})=>{const f=s==="custom"&&h?h:ig[s];return f?r.jsx("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"currentColor",children:r.jsx("path",{d:f})}):null},rg={Added:"#22c55e",Changed:"#3b82f6",Deprecated:"#f59e0b",Removed:"#ef4444",Fixed:"#8b5cf6",Security:"#f97316"};function sg({entries:s}){const[h,f]=q.useState(s.length<=5),c=h?s:s.slice(0,5);return r.jsxs("div",{"data-testid":"changelog-timeline",style:{position:"relative"},children:[r.jsx("div",{style:{position:"absolute",left:15,top:8,bottom:8,width:2,background:"var(--bd)"}}),c.map((v,_)=>r.jsxs("div",{"data-testid":`changelog-entry-${v.version}`,style:{position:"relative",paddingLeft:44,paddingBottom:_<c.length-1?32:0},children:[r.jsx("div",{style:{position:"absolute",left:8,top:6,width:16,height:16,borderRadius:"50%",background:v.version==="Unreleased"?"var(--txM)":"var(--ac)",border:"3px solid var(--bg, #1a1a1a)"}}),r.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:12,marginBottom:12},children:[r.jsx("span",{style:{fontSize:18,fontWeight:700,color:"var(--tx)",fontFamily:"var(--font-heading, inherit)"},children:v.url?r.jsx("a",{href:v.url,target:"_blank",rel:"noopener noreferrer",style:{color:"inherit",textDecoration:"none"},children:v.version}):v.version}),v.date&&r.jsx("span",{style:{fontSize:13,color:"var(--txM)",fontFamily:"var(--font-code, monospace)"},children:v.date})]}),v.sections.map(z=>{const w=rg[z.type]||"#6b7280";return r.jsxs("div",{style:{marginBottom:16},children:[r.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:6,marginBottom:8},children:[r.jsx("span",{style:{display:"inline-block",width:8,height:8,borderRadius:"50%",background:w}}),r.jsx("span",{style:{fontSize:12,fontWeight:600,textTransform:"uppercase",letterSpacing:".06em",color:w,fontFamily:"var(--font-code, monospace)"},children:z.type})]}),r.jsx("ul",{style:{margin:0,paddingLeft:18,listStyleType:"disc",color:"var(--tx2)"},children:z.items.map((E,y)=>r.jsx("li",{style:{fontSize:14,lineHeight:1.7,color:"var(--tx2)",marginBottom:2},children:E},y))})]},z.type)})]},v.version)),!h&&s.length>5&&r.jsx("div",{style:{textAlign:"center",marginTop:24},children:r.jsxs("button",{"data-testid":"changelog-show-more",onClick:()=>f(!0),style:{background:"none",border:"1px solid var(--bd)",borderRadius:2,padding:"8px 20px",color:"var(--tx2)",fontSize:13,fontFamily:"var(--font-body, inherit)",cursor:"pointer"},children:["Show all ",s.length," releases"]})})]})}function ug(s,h,f){if(h==="index")return[];for(const c of s)if(c.pages.find(_=>_.id===h)){const _=[],z=c.pages[0];return _.push({label:c.section,href:z?z.urlPath:null}),_.push({label:f,href:null}),_}return[]}function cg({config:s,navigation:h,currentPageId:f,pageHtml:c,pageComponent:v,mdxComponents:_,pageTitle:z,pageDescription:w,headings:E,tocEnabled:y=!0,editUrl:V,lastUpdated:R,changelogEntries:F,apiManifest:ne,apiBaseUrl:xe,apiPlayground:we,apiAuth:ze,ApiReferenceComponent:P,onNavigate:$,allPages:ue,versioning:U,currentVersion:Y,i18n:X,currentLocale:L,docContext:ce,basePath:de="",isDraft:ee,dir:_e,overrides:ae}){var Ea,_n,di,fl,ml,pl,ja,za,hl,gl,Ht,Qe,tt,en,Ma,fi,mi,vl,An;const Me=L||(X==null?void 0:X.defaultLocale)||"en",ot=_e||((Ea=X==null?void 0:X.localeDirs)==null?void 0:Ea[Me])||"ltr",he=ot==="rtl",j=((_n=s.theme)==null?void 0:_n.mode)||"auto",[k,K]=q.useState(()=>{var b;return j==="dark"?!0:j==="light"?!1:((b=window.matchMedia)==null?void 0:b.call(window,"(prefers-color-scheme: dark)").matches)??!0}),[J,Te]=q.useState(()=>typeof window<"u"&&window.innerWidth<768),[m,D]=q.useState(()=>typeof window<"u"&&window.innerWidth>=768),[H,G]=q.useState(!1),[le,se]=q.useState(!1),[Ae,We]=q.useState(!1),[qe,Kt]=q.useState(null),[pa,ha]=q.useState({}),[cl,Jt]=q.useState(()=>{var b;if(!((b=s.banner)!=null&&b.text))return!0;try{const N=Array.from(s.banner.text).reduce((te,fe)=>(te<<5)-te+fe.charCodeAt(0)|0,0).toString(36);return localStorage.getItem("tome-banner-dismissed")===N}catch{return!1}}),dl=U&&Y&&Y!==U.current,[ga,Oo]=q.useState(h.map(b=>b.section)),Pt=q.useRef(null),Fn=q.useRef(null),va=q.useRef(""),[ya,wo]=q.useState(()=>typeof window<"u"&&window.innerWidth>1100),ri=((di=s.theme)==null?void 0:di.preset)||"amber",rt=((fl=Mo[ri])==null?void 0:fl[k?"dark":"light"])||Mo.amber.dark,si=(ml=s.theme)!=null&&ml.accent?Kh(s.theme.accent,k):null,$e=si?{...rt,...si}:rt,ba=((pl=Mo[ri])==null?void 0:pl.fonts)||Mo.amber.fonts,xn={heading:((za=(ja=s.theme)==null?void 0:ja.fonts)==null?void 0:za.heading)||ba.heading,body:((gl=(hl=s.theme)==null?void 0:hl.fonts)==null?void 0:gl.body)||ba.body,code:((Qe=(Ht=s.theme)==null?void 0:Ht.fonts)==null?void 0:Qe.code)||ba.code};q.useEffect(()=>{if(j!=="auto")return;const b=window.matchMedia("(prefers-color-scheme: dark)"),N=te=>K(te.matches);return b.addEventListener("change",N),()=>b.removeEventListener("change",N)},[j]),q.useEffect(()=>{document.documentElement.classList.toggle("dark",k)},[k]),q.useEffect(()=>{const b=()=>{const N=window.innerWidth;wo(N>1100),Te(N<768)};return b(),window.addEventListener("resize",b),()=>window.removeEventListener("resize",b)},[]),q.useEffect(()=>{if(J&&m)return document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}},[J,m]),q.useEffect(()=>{var b;(b=Pt.current)==null||b.scrollTo(0,0)},[f]),q.useEffect(()=>{const b=Pt.current;if(!b)return;const N=te=>{const fe=te.target;fe.tagName==="IMG"&&fe.closest(".tome-content")&&Kt(fe.src)};return b.addEventListener("click",N),()=>b.removeEventListener("click",N)},[]),q.useEffect(()=>{const b=Pt.current;if(!b)return;const N=te=>{const fe=te.target.closest("a");if(!fe)return;const Se=fe.getAttribute("href");if(!Se||Se.startsWith("http://")||Se.startsWith("https://")||Se.startsWith("mailto:")||Se.startsWith("tel:")||Se.startsWith("//")||Se.startsWith("#"))return;te.preventDefault();let ye=Se.replace(/^\.\//,"").replace(/^\//,"").replace(/\.mdx?$/,"").replace(/\/$/,"");if(de){const ct=de.replace(/^\//,"").replace(/\/$/,"");ct&&ye.startsWith(ct+"/")?ye=ye.slice(ct.length+1):ct&&ye===ct&&(ye="index")}ye||(ye="index"),$(ye)};return b.addEventListener("click",N),()=>b.removeEventListener("click",N)},[$,de]),q.useEffect(()=>{if(!qe)return;const b=N=>{N.key==="Escape"&&Kt(null)};return window.addEventListener("keydown",b),()=>window.removeEventListener("keydown",b)},[qe]);const Sn=s.toc,ui=(Sn==null?void 0:Sn.depth)??3,xa=(Sn==null?void 0:Sn.enabled)!==!1&&y,yt=E.filter(b=>b.depth<=ui),[st,zt]=q.useState("");q.useEffect(()=>{if(!xa||yt.length<2)return;const b=Pt.current;if(!b)return;const N=setTimeout(()=>{const te=[];for(const Se of yt){const ye=b.querySelector(`#${CSS.escape(Se.id)}`);ye&&te.push(ye)}if(te.length===0)return;const fe=new IntersectionObserver(Se=>{const ye=Se.filter(ct=>ct.isIntersecting).sort((ct,pi)=>ct.boundingClientRect.top-pi.boundingClientRect.top);ye.length>0&&zt(ye[0].target.id)},{root:b,rootMargin:"0px 0px -80% 0px",threshold:0});for(const Se of te)fe.observe(Se);et.current=fe},100);return()=>{var te;clearTimeout(N),(te=et.current)==null||te.disconnect(),et.current=null}},[f,xa,yt.map(b=>b.id).join(",")]);const et=q.useRef(null);q.useEffect(()=>{zt("")},[f]),q.useEffect(()=>{if(!Fn.current||!c)return;const b=c.replace(/<h1[^>]*>[\s\S]*?<\/h1>\s*/,"");b!==va.current&&(Fn.current.innerHTML=b,va.current=b)},[c]);const ci=q.useCallback((b,N)=>{b.preventDefault();const te=Pt.current;if(!te)return;const fe=te.querySelector(`#${CSS.escape(N)}`);fe&&(fe.scrollIntoView({behavior:"smooth",block:"start"}),zt(N))},[]);q.useEffect(()=>{const b=N=>{(N.metaKey||N.ctrlKey)&&N.key==="k"&&(N.preventDefault(),G(!0)),N.key==="Escape"&&G(!1)};return window.addEventListener("keydown",b),()=>window.removeEventListener("keydown",b)},[]);const Sa=h.flatMap(b=>b.pages),Ta=Sa.findIndex(b=>b.id===f),Ft=Ta>0?Sa[Ta-1]:null,Wt=Ta<Sa.length-1?Sa[Ta+1]:null,It=ug(h,f,z),$t=b=>Oo(N=>N.includes(b)?N.filter(te=>te!==b):[...N,b]),_a={"--bg":$e.bg,"--sf":$e.sf,"--sfH":$e.sfH,"--bd":$e.bd,"--tx":$e.tx,"--tx2":$e.tx2,"--txM":$e.txM,"--ac":$e.ac,"--acD":$e.acD,"--acT":$e.acT,"--cdBg":$e.cdBg,"--cdTx":$e.cdTx,"--sbBg":$e.sbBg,"--hdBg":$e.hdBg,"--font-heading":`"${xn.heading}", serif`,"--font-body":`"${xn.body}", sans-serif`,"--font-code":`"${xn.code}", monospace`},Tn=v,Lt=(tt=s.banner)==null?void 0:tt.link,Aa=Lt?Lt.startsWith("#")||de&&Lt.startsWith(de+"/"):!1;return r.jsxs("div",{dir:ot,className:"tome-grain",style:{..._a,color:"var(--tx)",background:"var(--bg)",fontFamily:"var(--font-body)",height:"100vh",overflow:"hidden"},children:[((en=s.banner)==null?void 0:en.text)&&!cl&&r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,background:"var(--ac)",color:"#fff",padding:"8px 16px",fontSize:13,fontFamily:"var(--font-body)",fontWeight:500,textAlign:"center",width:"100vw",boxSizing:"border-box"},children:[s.banner.link?r.jsx("a",{href:Aa&&Lt.startsWith("#")?de+"/"+Lt.slice(1):Lt,...Aa?{}:{target:"_blank",rel:"noopener noreferrer"},style:{color:"#fff",textDecoration:"underline"},onClick:Aa?b=>{b.preventDefault();const N=de.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),te=Lt.startsWith("#")?Lt.slice(1):Lt.replace(new RegExp("^"+N+"/?"),"");$(te||"index")}:void 0,children:s.banner.text}):r.jsx("span",{children:s.banner.text}),s.banner.dismissible!==!1&&r.jsx("button",{onClick:()=>{Jt(!0);try{const b=Array.from(s.banner.text).reduce((N,te)=>(N<<5)-N+te.charCodeAt(0)|0,0).toString(36);localStorage.setItem("tome-banner-dismissed",b)}catch{}},"aria-label":"Dismiss banner",style:{background:"none",border:"none",color:"#fff",cursor:"pointer",fontSize:16,lineHeight:1,padding:0,opacity:.8},children:"×"})]}),H&&((Ma=s.search)==null?void 0:Ma.provider)==="algolia"&&s.search.appId&&s.search.apiKey&&s.search.indexName?r.jsx(tg,{appId:s.search.appId,apiKey:s.search.apiKey,indexName:s.search.indexName,onNavigate:b=>{$(b),G(!1)},onClose:()=>G(!1),basePath:de}):H?r.jsx(dg,{allPages:ue,onNavigate:b=>{$(b),G(!1)},onClose:()=>G(!1),mobile:J}):null,r.jsxs("div",{style:{display:"flex",flexDirection:he?"row-reverse":"row",flex:1,height:(fi=s.banner)!=null&&fi.text&&!cl?"calc(100vh - 32px)":"100vh"},children:[J&&m&&r.jsx("div",{onClick:()=>D(!1),style:{position:"fixed",inset:0,zIndex:200,background:"rgba(0,0,0,0.4)",backdropFilter:"blur(2px)"}}),ae!=null&&ae.Sidebar?r.jsx(ae.Sidebar,{config:s,navigation:h,currentPageId:f,onNavigate:$,mobile:J,sbOpen:m,setSbOpen:D,versioning:U,currentVersion:Y}):r.jsxs("aside",{style:{width:m?270:0,minWidth:m?270:0,background:"var(--sbBg)",[he?"borderLeft":"borderRight"]:"1px solid var(--bd)",display:"flex",flexDirection:"column",transition:"width .2s, min-width .2s",overflow:"hidden",...J?{position:"fixed",top:0,[he?"right":"left"]:0,bottom:0,zIndex:201}:{}},children:[r.jsxs("a",{href:"/",style:{padding:"18px 20px",display:"flex",alignItems:"baseline",gap:6,borderBottom:"1px solid var(--bd)",textDecoration:"none",color:"inherit"},children:[r.jsx("span",{style:{fontFamily:"var(--font-heading)",fontSize:22,fontWeight:700,fontStyle:"italic"},children:s.name}),r.jsx("span",{style:{width:5,height:5,borderRadius:"50%",background:"var(--ac)",display:"inline-block"}})]}),r.jsx("div",{style:{padding:"12px 14px"},children:r.jsxs("button",{onClick:()=>{G(!0),J&&D(!1)},style:{display:"flex",alignItems:"center",gap:8,width:"100%",background:"var(--cdBg)",border:"1px solid var(--bd)",borderRadius:2,padding:"8px 12px",cursor:"pointer",color:"var(--txM)",fontSize:12.5,fontFamily:"var(--font-body)"},children:[r.jsx(cm,{}),r.jsx("span",{style:{flex:1,textAlign:he?"right":"left"},children:"Search..."}),r.jsx("kbd",{style:{fontFamily:"var(--font-code)",fontSize:9,background:"var(--sf)",border:"1px solid var(--bd)",borderRadius:2,padding:"2px 6px"},children:"⌘K"})]})}),r.jsx("nav",{style:{flex:1,overflow:"auto",padding:"4px 10px 20px"},children:h.map(b=>r.jsxs("div",{style:{marginBottom:8},children:[r.jsxs("button",{onClick:()=>$t(b.section),style:{display:"flex",alignItems:"center",gap:6,width:"100%",background:"none",border:"none",padding:"8px 10px",cursor:"pointer",borderRadius:2,color:"var(--txM)",fontSize:10,fontWeight:600,textTransform:"uppercase",letterSpacing:".1em",fontFamily:"var(--font-code)"},children:[ga.includes(b.section)?r.jsx(Zs,{}):r.jsx($f,{}),b.section]}),ga.includes(b.section)&&r.jsx("div",{style:{[he?"marginRight":"marginLeft"]:8,[he?"borderRight":"borderLeft"]:"1px solid var(--bd)",[he?"paddingRight":"paddingLeft"]:0},children:b.pages.map(N=>{const te=f===N.id;return r.jsxs("button",{onClick:()=>{$(N.id),J&&D(!1)},style:{display:"flex",alignItems:"center",gap:10,width:"100%",textAlign:he?"right":"left",background:"none",border:"none",borderRadius:0,[he?"borderRight":"borderLeft"]:te?"2px solid var(--ac)":"2px solid transparent",padding:"7px 14px",cursor:"pointer",color:te?"var(--ac)":"var(--tx2)",fontSize:13,fontWeight:te?500:400,fontFamily:"var(--font-body)",transition:"all .12s"},children:[N.title,N.badge&&(()=>{const fe={default:{bg:"var(--sf)",text:"var(--tx2)"},info:{bg:"rgba(59,130,246,0.15)",text:"rgb(59,130,246)"},success:{bg:"rgba(34,197,94,0.15)",text:"rgb(34,197,94)"},warning:{bg:"rgba(234,179,8,0.15)",text:"rgb(202,138,4)"},danger:{bg:"rgba(239,68,68,0.15)",text:"rgb(239,68,68)"}},Se=fe[N.badge.variant||"default"]||fe.default;return r.jsx("span",{style:{fontSize:10,fontWeight:600,padding:"2px 6px",borderRadius:4,marginLeft:6,whiteSpace:"nowrap",background:Se.bg,color:Se.text},children:N.badge.text})})()]},N.id)})})]},b.section))}),U&&J&&r.jsx("div",{style:{padding:"8px 16px",borderTop:"1px solid var(--bd)",display:"flex",gap:6},children:U.versions.map(b=>r.jsxs("button",{onClick:()=>{const N=b===U.current?"index":`${b}/index`;$(N)},style:{flex:1,padding:"3px 0",textAlign:"center",background:b===(Y||U.current)?"var(--acD)":"var(--sf)",border:"1px solid var(--bd)",borderRadius:2,cursor:"pointer",color:b===(Y||U.current)?"var(--ac)":"var(--tx2)",fontSize:11,fontFamily:"var(--font-code)",fontWeight:b===U.current?600:400},children:[b,b===U.current?" (latest)":""]},b))}),r.jsxs("div",{style:{padding:"12px 16px",borderTop:"1px solid var(--bd)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[j==="auto"?r.jsx("button",{"aria-label":k?"Switch to light mode":"Switch to dark mode",onClick:()=>K(b=>!b),style:{background:"none",border:"none",color:"var(--txM)",cursor:"pointer",display:"flex"},children:k?r.jsx(tm,{}):r.jsx(em,{})}):r.jsx("div",{}),r.jsxs("span",{style:{fontSize:11,color:"var(--txM)",letterSpacing:.2},children:["Built with ","♡"," by Tome"]}),r.jsx("span",{style:{fontFamily:"var(--font-code)",fontSize:10,color:"var(--txM)"},children:"v0.3.3"})]})]}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[ae!=null&&ae.Header?r.jsx(ae.Header,{config:s,navigation:h,currentPageId:f,onNavigate:$,mobile:J,sbOpen:m,setSbOpen:D,isDark:k,setDark:K,versioning:U,currentVersion:Y,i18n:X,currentLocale:L,onSearchOpen:()=>G(!0),basePath:de}):r.jsxs("header",{style:{display:"flex",alignItems:"center",gap:J?8:12,padding:J?"8px 12px":"10px 24px",borderBottom:"1px solid var(--bd)",background:"var(--hdBg)",backdropFilter:"blur(12px)",maxWidth:"100vw",overflow:"visible",position:"relative",zIndex:200},children:[r.jsx("button",{"aria-label":m?"Close sidebar":"Open sidebar",onClick:()=>D(!m),style:{background:"none",border:"none",color:"var(--txM)",cursor:"pointer",display:"flex"},children:m?r.jsx(Ph,{}):r.jsx(Jh,{})}),J?r.jsx("span",{style:{fontSize:13,color:"var(--ac)",fontFamily:"var(--font-code)",flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:((mi=h.flatMap(b=>b.pages).find(b=>b.id===f))==null?void 0:mi.title)||""}):r.jsx("div",{style:{display:"flex",alignItems:"center",gap:8,fontFamily:"var(--font-code)",fontSize:11,color:"var(--txM)",letterSpacing:".03em",flex:1},children:h.map(b=>{const N=b.pages.find(te=>te.id===f);return N?r.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("span",{children:b.section}),r.jsx($f,{}),r.jsx("span",{style:{color:"var(--ac)"},children:N.title})]},b.section):null})}),s.topNav&&s.topNav.length>0&&!J&&r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[s.topNav.map(b=>{const N=b.href.startsWith("#")||de&&b.href.startsWith(de+"/"),te=!N;return r.jsxs("a",{href:N&&b.href.startsWith("#")?de+"/"+b.href.slice(1):b.href,...te?{target:"_blank",rel:"noopener noreferrer"}:{},onClick:N?fe=>{fe.preventDefault();const Se=b.href.startsWith("#")?b.href.slice(1):b.href.replace(new RegExp("^"+de.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"/?"),"");$(Se)}:void 0,style:{display:"flex",alignItems:"center",gap:4,color:"var(--txM)",textDecoration:"none",fontSize:12,fontFamily:"var(--font-body)",fontWeight:500,transition:"color .15s"},onMouseOver:fe=>fe.currentTarget.style.color="var(--ac)",onMouseOut:fe=>fe.currentTarget.style.color="var(--txM)",children:[b.label,te&&r.jsx(lg,{})]},b.label)}),r.jsx("span",{style:{width:1,height:16,background:"var(--bd)"}})]}),s.socialLinks&&s.socialLinks.length>0&&!J&&r.jsx("div",{style:{display:"flex",alignItems:"center",gap:8},children:s.socialLinks.map(b=>r.jsx("a",{href:b.url,target:"_blank",rel:"noopener noreferrer","aria-label":b.label||b.platform,"data-testid":`social-link-${b.platform}`,style:{display:"flex",alignItems:"center",justifyContent:"center",color:"var(--tx2)",cursor:"pointer",transition:"color .15s"},onMouseOver:N=>N.currentTarget.style.color="var(--tx)",onMouseOut:N=>N.currentTarget.style.color="var(--tx2)",children:r.jsx(og,{platform:b.platform,customIcon:b.icon})},b.url))}),J&&j==="auto"&&r.jsx("button",{"aria-label":k?"Switch to light mode":"Switch to dark mode",onClick:()=>K(b=>!b),style:{background:"none",border:"none",color:"var(--txM)",cursor:"pointer",display:"flex",flexShrink:0},children:k?r.jsx(tm,{}):r.jsx(em,{})}),U&&!J&&r.jsxs("div",{style:{position:"relative"},children:[r.jsxs("button",{"data-testid":"version-switcher",onClick:()=>se(b=>!b),style:{display:"flex",alignItems:"center",gap:6,background:"var(--sf)",border:"1px solid var(--bd)",borderRadius:2,padding:"5px 10px",cursor:"pointer",color:"var(--tx2)",fontSize:12,fontFamily:"var(--font-code)"},children:[r.jsx(ng,{}),Y||U.current,r.jsx(Zs,{})]}),le&&r.jsx("div",{"data-testid":"version-dropdown",style:{position:"absolute",top:"100%",right:0,marginTop:4,background:"var(--sf)",border:"1px solid var(--bd)",borderRadius:2,boxShadow:"0 8px 32px rgba(0,0,0,0.2)",overflow:"hidden",zIndex:100,minWidth:120},children:U.versions.map(b=>r.jsxs("button",{onClick:()=>{se(!1);const N=b===U.current?"index":`${b}/index`;$(N)},style:{display:"block",width:"100%",textAlign:"left",background:b===(Y||U.current)?"var(--acD)":"none",border:"none",padding:"8px 14px",cursor:"pointer",color:b===(Y||U.current)?"var(--ac)":"var(--tx2)",fontSize:12,fontFamily:"var(--font-code)",fontWeight:b===U.current?600:400},children:[b,b===U.current?" (latest)":""]},b))})]}),X&&X.locales.length>1&&!J&&r.jsxs("div",{style:{position:"relative"},children:[r.jsxs("button",{"data-testid":"language-switcher",onClick:()=>We(b=>!b),style:{display:"flex",alignItems:"center",gap:6,background:"var(--sf)",border:"1px solid var(--bd)",borderRadius:2,padding:"5px 10px",cursor:"pointer",color:"var(--tx2)",fontSize:12,fontFamily:"var(--font-body)"},children:[r.jsx(ag,{}),((vl=X.localeNames)==null?void 0:vl[L||X.defaultLocale])||L||X.defaultLocale,r.jsx(Zs,{})]}),Ae&&r.jsx("div",{"data-testid":"language-dropdown",style:{position:"absolute",top:"100%",right:0,marginTop:4,background:"var(--sf)",border:"1px solid var(--bd)",borderRadius:2,boxShadow:"0 8px 32px rgba(0,0,0,0.2)",overflow:"hidden",zIndex:100,minWidth:120},children:X.locales.map(b=>{var ct;const N=b===(L||X.defaultLocale),te=((ct=X.localeNames)==null?void 0:ct[b])||b,fe=L||X.defaultLocale;let Se=f;fe!==X.defaultLocale&&f.startsWith(`${fe}/`)&&(Se=f.slice(fe.length+1));const ye=b===X.defaultLocale?Se:`${b}/${Se}`;return r.jsx("button",{onClick:()=>{We(!1),$(ye)},style:{display:"block",width:"100%",textAlign:"left",background:N?"var(--acD)":"none",border:"none",padding:"8px 14px",cursor:"pointer",color:N?"var(--ac)":"var(--tx2)",fontSize:12,fontFamily:"var(--font-body)",fontWeight:N?600:400},children:te},b)})})]})]}),dl&&r.jsxs("div",{"data-testid":"old-version-banner",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,background:"var(--acD)",borderBottom:"1px solid var(--bd)",padding:"8px 24px",fontSize:13,color:"var(--tx2)"},children:[r.jsxs("span",{children:["You're viewing docs for ",Y,"."]}),r.jsx("button",{onClick:()=>{$("index")},style:{background:"none",border:"none",color:"var(--ac)",cursor:"pointer",fontWeight:600,fontSize:13,fontFamily:"var(--font-body)",textDecoration:"underline"},children:"Switch to latest."})]}),r.jsxs("div",{ref:Pt,style:{flex:1,overflow:"auto",display:"flex"},children:[r.jsxs("main",{style:{flex:1,maxWidth:J?"100%":760,padding:J?"24px 16px 60px":"40px 48px 80px",margin:"0 auto",minWidth:0},children:[It.length>0&&r.jsx("nav",{"aria-label":"Breadcrumbs","data-testid":"breadcrumbs",style:{display:"flex",alignItems:"center",gap:6,fontSize:13,color:"var(--tx2)",marginBottom:8},children:It.map((b,N)=>r.jsxs(sm.Fragment,{children:[N>0&&r.jsx("span",{style:{color:"var(--tx2)",opacity:.5},children:"›"}),N<It.length-1&&b.href!==null?r.jsx("a",{href:b.href,onClick:te=>{te.preventDefault();const fe=h.flatMap(Se=>Se.pages).find(Se=>Se.urlPath===b.href);fe&&$(fe.id)},style:{color:"var(--tx2)",textDecoration:"none",cursor:"pointer"},children:b.label}):r.jsx("span",{style:N===It.length-1?{color:"var(--tx)"}:void 0,children:b.label})]},N))}),r.jsx("h1",{style:{fontFamily:"var(--font-heading)",fontSize:J?26:38,fontWeight:400,fontStyle:"italic",lineHeight:1.15,marginBottom:8},children:z}),ee&&r.jsx("div",{"data-testid":"draft-banner",style:{background:"#fef3c7",color:"#92400e",padding:"8px 16px",borderRadius:6,fontSize:13,marginBottom:16},children:"Draft — This page is only visible in development"}),w&&r.jsx("p",{style:{fontSize:16,color:"var(--tx2)",lineHeight:1.6,marginBottom:32},children:w}),r.jsx("div",{style:{borderTop:"1px solid var(--bd)",paddingTop:28},children:ne&&P?r.jsx(P,{manifest:ne,baseUrl:xe,showPlayground:we,playgroundAuth:ze}):F&&F.length>0?r.jsx(sg,{entries:F}):Tn?r.jsx("div",{className:"tome-content",children:r.jsx(Tn,{components:_||{}})}):r.jsx("div",{className:"tome-content",ref:Fn})}),ae!=null&&ae.PageFooter?r.jsx(ae.PageFooter,{editUrl:V,lastUpdated:R,currentPageId:f,prev:Ft,next:Wt,onNavigate:$,mobile:J}):r.jsxs(r.Fragment,{children:[(V||R)&&r.jsxs("div",{style:{marginTop:40,display:"flex",flexDirection:J?"column":"row",alignItems:J?"flex-start":"center",justifyContent:"space-between",gap:J?8:16},children:[V&&r.jsx("div",{"data-testid":"edit-page-link",children:r.jsxs("a",{href:V,target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",alignItems:"center",gap:6,color:"var(--txM)",textDecoration:"none",fontSize:13,fontFamily:"var(--font-body)",transition:"color .15s"},onMouseOver:b=>b.currentTarget.style.color="var(--ac)",onMouseOut:b=>b.currentTarget.style.color="var(--txM)",children:[r.jsx(Fh,{})," Edit this page on GitHub"]})}),R&&r.jsxs("div",{"data-testid":"last-updated",style:{fontSize:12,color:"var(--txM)",fontFamily:"var(--font-body)"},children:["Last updated ",Wh(R)]})]}),r.jsx("div",{style:{display:"flex",alignItems:"center",gap:12,marginTop:24,padding:"12px 0"},children:pa[f]?r.jsx("span",{style:{fontSize:13,color:"var(--txM)",fontFamily:"var(--font-body)"},children:"Thanks for your feedback!"}):r.jsxs(r.Fragment,{children:[r.jsx("span",{style:{fontSize:13,color:"var(--txM)",fontFamily:"var(--font-body)"},children:"Was this helpful?"}),r.jsx("button",{onClick:()=>{ha(b=>({...b,[f]:!0}));try{localStorage.setItem(`tome-feedback-${f}`,"up")}catch{}},style:{background:"none",border:"1px solid var(--bd)",borderRadius:2,padding:"4px 10px",cursor:"pointer",fontSize:13,color:"var(--txM)",transition:"border-color .15s"},children:"👍"}),r.jsx("button",{onClick:()=>{ha(b=>({...b,[f]:!0}));try{localStorage.setItem(`tome-feedback-${f}`,"down")}catch{}},style:{background:"none",border:"1px solid var(--bd)",borderRadius:2,padding:"4px 10px",cursor:"pointer",fontSize:13,color:"var(--txM)",transition:"border-color .15s"},children:"👎"})]})}),r.jsxs("div",{style:{display:"flex",flexDirection:J?"column":"row",justifyContent:"space-between",marginTop:16,paddingTop:24,borderTop:"1px solid var(--bd)",gap:J?12:16},children:[Ft?r.jsxs("button",{onClick:()=>$(Ft.id),style:{display:"flex",alignItems:"center",gap:8,background:"none",border:"1px solid var(--bd)",borderRadius:2,padding:"10px 16px",cursor:"pointer",color:"var(--tx2)",fontSize:13,fontFamily:"var(--font-body)",transition:"border-color .15s, color .15s"},children:[he?r.jsx(am,{}):r.jsx(nm,{})," ",Ft.title]}):r.jsx("div",{}),Wt?r.jsxs("button",{onClick:()=>$(Wt.id),style:{display:"flex",alignItems:"center",gap:8,background:"none",border:"1px solid var(--bd)",borderRadius:2,padding:"10px 16px",cursor:"pointer",color:"var(--tx2)",fontSize:13,fontFamily:"var(--font-body)",transition:"border-color .15s, color .15s"},children:[Wt.title," ",he?r.jsx(nm,{}):r.jsx(am,{})]}):r.jsx("div",{})]})]})]}),ae!=null&&ae.Toc?xa&&yt.length>=2&&ya&&r.jsx(ae.Toc,{headings:yt,activeHeadingId:st,onScrollToHeading:ci}):xa&&yt.length>=2&&ya&&r.jsxs("aside",{"data-testid":"toc-sidebar",style:{width:200,padding:he?"40px 0 40px 16px":"40px 16px 40px 0",position:"sticky",top:0,alignSelf:"flex-start",flexShrink:0},children:[r.jsx("div",{style:{fontSize:10,fontWeight:600,textTransform:"uppercase",letterSpacing:".1em",color:"var(--txM)",marginBottom:12,fontFamily:"var(--font-code)"},children:"On this page"}),r.jsx("nav",{"aria-label":"Table of contents",style:{[he?"borderRight":"borderLeft"]:"1px solid var(--bd)",[he?"paddingRight":"paddingLeft"]:0},children:yt.map((b,N)=>{const te=st===b.id;return r.jsx("a",{href:`#${b.id}`,onClick:fe=>ci(fe,b.id),"data-testid":`toc-link-${b.id}`,style:{display:"block",fontSize:12,color:te?"var(--ac)":"var(--txM)",fontWeight:te?500:400,textDecoration:"none",padding:"4px 12px",[he?"paddingRight":"paddingLeft"]:12+(b.depth-2)*12,lineHeight:1.4,transition:"color .15s, font-weight .15s",[he?"borderRight":"borderLeft"]:te?"2px solid var(--ac)":"2px solid transparent",[he?"marginRight":"marginLeft"]:-1},children:b.text},N)})})]})]})]})]}),(ae==null?void 0:ae.Footer)&&r.jsx(ae.Footer,{config:s,navigation:h,currentPageId:f,onNavigate:$}),((An=s.ai)==null?void 0:An.enabled)&&r.jsx(Qh,{provider:s.ai.provider||"anthropic",model:s.ai.model,apiKey:typeof __TOME_AI_API_KEY__<"u"&&__TOME_AI_API_KEY__?__TOME_AI_API_KEY__:void 0,context:(ce==null?void 0:ce.map(b=>`## ${b.title}
${b.content}`).join(`

`))??ue.map(b=>`- ${b.title}${b.description?": "+b.description:""}`).join(`
`)}),qe&&r.jsx("div",{onClick:()=>Kt(null),style:{position:"fixed",inset:0,zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.7)",backdropFilter:"blur(8px)",cursor:"zoom-out"},children:r.jsx("img",{src:qe,alt:"",style:{maxWidth:"90vw",maxHeight:"90vh",objectFit:"contain",borderRadius:4,boxShadow:"0 16px 64px rgba(0,0,0,0.4)"}})})]})}function dg({allPages:s,onNavigate:h,onClose:f,mobile:c}){const[v,_]=q.useState(""),[z,w]=q.useState([]),[E,y]=q.useState(0),[V,R]=q.useState(null),F=q.useRef(null),ne=q.useRef(void 0);q.useEffect(()=>{$h().then(P=>R(!!P)),setTimeout(()=>{var P;return(P=F.current)==null?void 0:P.focus()},50)},[]);const xe=q.useCallback(P=>{if(!P.trim())return[];const $=P.toLowerCase();return s.filter(ue=>ue.title.toLowerCase().includes($)||(ue.description||"").toLowerCase().includes($)).slice(0,8).map(ue=>({id:ue.id,title:ue.title,excerpt:ue.description}))},[s]),we=q.useCallback(async P=>{var ue;if(!P.trim()){w([]),y(0);return}const $=ul;if($)try{const U=await $.search(P),Y=[];for(const X of U.results.slice(0,8)){const L=await X.data(),de=(L.url||"").replace(/^\//,"").replace(/\/index\.html$/,"").replace(/\.html$/,"")||"index";Y.push({id:de,title:((ue=L.meta)==null?void 0:ue.title)||de,excerpt:L.excerpt||void 0})}w(Y),y(0);return}catch{}w(xe(P)),y(0)},[xe]);q.useEffect(()=>(ne.current&&clearTimeout(ne.current),ne.current=setTimeout(()=>we(v),120),()=>{ne.current&&clearTimeout(ne.current)}),[v,we]);const ze=q.useCallback(P=>{P.key==="ArrowDown"?(P.preventDefault(),y($=>Math.min($+1,z.length-1))):P.key==="ArrowUp"?(P.preventDefault(),y($=>Math.max($-1,0))):P.key==="Enter"&&z.length>0&&(P.preventDefault(),h(z[E].id))},[z,E,h]);return r.jsx("div",{onClick:f,style:{position:"fixed",inset:0,zIndex:1e3,background:"rgba(0,0,0,0.55)",backdropFilter:"blur(6px)",display:"flex",alignItems:c?"stretch":"flex-start",justifyContent:"center",paddingTop:c?0:"12vh"},children:r.jsxs("div",{onClick:P=>P.stopPropagation(),style:{background:"var(--sf)",border:c?"none":"1px solid var(--bd)",borderRadius:c?0:2,width:"100%",maxWidth:c?"100%":520,boxShadow:c?"none":"0 24px 80px rgba(0,0,0,0.4)",overflow:"hidden",display:"flex",flexDirection:"column",...c?{height:"100%"}:{}},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"14px 18px",borderBottom:"1px solid var(--bd)"},children:[r.jsx(cm,{}),r.jsx("input",{ref:F,value:v,onChange:P=>_(P.target.value),onKeyDown:ze,placeholder:"Search documentation...",style:{flex:1,background:"none",border:"none",outline:"none",color:"var(--tx)",fontSize:15,fontFamily:"var(--font-body)"}}),r.jsx("kbd",{style:{fontFamily:"var(--font-code)",fontSize:10,color:"var(--txM)",background:"var(--cdBg)",padding:"2px 6px",borderRadius:2,border:"1px solid var(--bd)"},children:"ESC"})]}),z.length>0&&r.jsx("div",{style:{padding:6,maxHeight:c?"none":360,overflow:"auto",flex:c?1:void 0},children:z.map((P,$)=>r.jsxs("button",{onClick:()=>h(P.id),style:{display:"block",width:"100%",textAlign:"left",background:$===E?"var(--acD)":"none",border:"none",borderRadius:2,padding:"10px 14px",cursor:"pointer",color:"var(--tx)",fontFamily:"var(--font-body)"},onMouseEnter:()=>y($),children:[r.jsx("div",{style:{fontWeight:500,fontSize:14,marginBottom:2},children:P.title}),P.excerpt&&r.jsx("div",{style:{fontSize:12,color:"var(--txM)",lineHeight:1.3},dangerouslySetInnerHTML:{__html:P.excerpt}})]},P.id+$))}),v&&!z.length&&r.jsx("div",{style:{padding:"32px 18px",textAlign:"center",color:"var(--txM)",fontSize:14},children:"No results found"}),V===!1&&v&&z.length>0&&r.jsx("div",{style:{padding:"6px 18px 10px",fontSize:11,color:"var(--txM)",textAlign:"center"},children:"Showing title matches. Build your site for full-text search."})]})})}function dm(s,h,f){let c=s;h&&c.startsWith(h)&&(c=c.slice(h.length));const v=c.replace(/^\//,"").replace(/\/index\.html$/,"").replace(/\.html$/,"").replace(/\/$/,"")||"index";return f.find(z=>z.id===v)?v:null}function fg(s,h,f){const c=f.find(v=>v.id===s);return c?h+c.urlPath:h+"/"+s}function mg(s,h){if(!s||!h)return;const{repo:f,branch:c="main",dir:v=""}=s,_=v?`${v.replace(/\/$/,"")}/`:"";return`https://github.com/${f}/edit/${c}/${_}${h}`}function pg(s,h,f,c,v){var w;const _=v(s,c,f);if(_)return _;const z=h.startsWith("#")?h.slice(1):h;return z&&f.some(E=>E.id===z)?z:((w=f[0])==null?void 0:w.id)||"index"}async function fm(s,h,f){try{const c=h.find(_=>_.id===s),v=await f(s);return c!=null&&c.isMdx&&v.meta?{isMdx:!0,component:v.default,frontmatter:v.meta.frontmatter,headings:v.meta.headings}:v.default?v.isApiReference&&v.apiManifest?{isMdx:!1,isApiReference:!0,...v.default,apiManifest:v.apiManifest}:v.isChangelog&&v.changelogEntries?{isMdx:!1,...v.default,changelogEntries:v.changelogEntries}:{isMdx:!1,...v.default}:null}catch(c){return console.error(`Failed to load page: ${s}`,c),null}}function hg(s,h){return(s==null?void 0:s.version)||((h==null?void 0:h.current)??void 0)}const Jn={name:"Tome",basePath:"/docs/",theme:{preset:"editorial",mode:"auto"},navigation:[{group:"Getting Started",pages:["index","quickstart","installation","project-structure"]},{group:"Core Concepts",pages:["configuration","pages-routing","components","theming"]},{group:"API Reference",pages:["api-overview","api-endpoints","api-auth"]},{group:"Guides",pages:["guides/search","guides/versioning","guides/migration","guides/redirects","guides/configuration","guides/custom-theme","guides/api-reference","guides/draft-pages","guides/plugins","guides/content-sources","guides/typedoc","guides/code-blocks"]},{group:"Tutorials",pages:["tutorials/first-site","tutorials/deploy-to-cloud"]},{group:"Reference",pages:["reference/cli","reference/components","reference/config","reference/frontmatter","reference/theme-presets"]},{group:"Concepts",pages:["concepts/architecture","concepts/file-routing"]},{group:"CLI",pages:["cli"]}],search:{provider:"local"},versioning:{current:"v3",versions:["v3","v2","v1"]},toc:{enabled:!0,depth:3},banner:{text:"New in v3 — Agent-friendly output, MDX mermaid & math, JSON-LD schema markup!",link:"/docs/configuration",dismissible:!0},math:!1,strictLinks:!1,lastUpdated:!0,topNav:[{label:"Home",href:"/"},{label:"Dashboard",href:"/dashboard"}],redirects:[],socialLinks:[{platform:"github",url:"https://github.com/tomehq/tome"},{platform:"twitter",url:"https://x.com/tomedocs"}]},Pn=[{id:"api-auth",filePath:"v3/api-auth.md",urlPath:"/api-auth",frontmatter:{title:"Authentication",description:"Configure API authentication for the interactive playground — Bearer tokens, API keys, and custom headers.",icon:"lock",hidden:!1,draft:!1},isMdx:!1,version:"v3",lastUpdated:"2026-03-16T14:07:03-04:00"},{id:"api-endpoints",filePath:"v3/api-endpoints.md",urlPath:"/api-endpoints",frontmatter:{title:"Endpoints",description:"How Tome renders API endpoints from your OpenAPI spec — methods, parameters, schemas, and the interactive playground.",icon:"globe",hidden:!1,draft:!1},isMdx:!1,version:"v3",lastUpdated:"2026-03-16T14:07:03-04:00"},{id:"api-overview",filePath:"v3/api-overview.md",urlPath:"/api-overview",frontmatter:{title:"Overview",description:"Generate interactive API documentation from OpenAPI specs with Tome.",icon:"code",hidden:!1,draft:!1},isMdx:!1,version:"v3",lastUpdated:"2026-03-16T14:07:03-04:00"},{id:"cli",filePath:"v3/cli.md",urlPath:"/cli",frontmatter:{title:"CLI Reference",description:"Complete reference for every command and flag in the Tome CLI.",icon:"terminal",hidden:!1,draft:!1},isMdx:!1,version:"v3",lastUpdated:"2026-03-16T15:10:11-04:00"},{id:"components",filePath:"v3/components.mdx",urlPath:"/components",frontmatter:{title:"Components",description:"Built-in MDX components — Callout, Tabs, Card, Steps, Accordion, PackageManager, TypeTable, FileTree, and more.",icon:"puzzle",hidden:!1,draft:!1},isMdx:!0,version:"v3",lastUpdated:"2026-03-16T13:47:15-04:00"},{id:"concepts/architecture",filePath:"v3/concepts/architecture.md",urlPath:"/concepts/architecture",frontmatter:{title:"Architecture",description:"How Tome works internally — the Vite plugin, virtual modules, build pipeline, and theme system.",hidden:!1,draft:!1},isMdx:!1,version:"v3",lastUpdated:"2026-03-16T15:10:11-04:00"},{id:"concepts/file-routing",filePath:"v3/concepts/file-routing.md",urlPath:"/concepts/file-routing",frontmatter:{title:"File-System Routing",description:"How Tome maps files in the pages/ directory to URLs — naming conventions, nested routes, i18n, and versioning.",hidden:!1,draft:!1},isMdx:!1,version:"v3",lastUpdated:"2026-03-14T23:12:48-04:00"},{id:"configuration",filePath:"v3/configuration.mdx",urlPath:"/configuration",frontmatter:{title:"Configuration",description:"How to configure your Tome site using tome.config.js — name, logo, navigation, theme, and more.",icon:"gear",hidden:!1,draft:!1},isMdx:!0,version:"v3",lastUpdated:"2026-03-16T13:47:15-04:00"},{id:"guides/api-reference",filePath:"v3/guides/api-reference.md",urlPath:"/guides/api-reference",frontmatter:{title:"API Reference Setup",description:"How to generate an interactive API reference from an OpenAPI specification in Tome.",icon:"code",hidden:!1,draft:!1},isMdx:!1,version:"v3",lastUpdated:"2026-03-14T23:12:48-04:00"},{id:"guides/code-blocks",filePath:"v3/guides/code-blocks.md",urlPath:"/guides/code-blocks",frontmatter:{title:"Code Blocks",description:"Advanced code block features — syntax highlighting, line numbers, titles, line highlighting, and TypeScript hover types with Twoslash.",icon:"code",hidden:!1,draft:!1},isMdx:!1,version:"v3",lastUpdated:"2026-03-15T18:58:20-04:00"},{id:"guides/configuration",filePath:"v3/guides/configuration.mdx",urlPath:"/guides/configuration",frontmatter:{title:"Configuration",description:"How to configure your Tome site using tome.config.js — name, logo, navigation, theme, and more.",icon:"gear",hidden:!1,draft:!1},isMdx:!0,version:"v3",lastUpdated:"2026-03-16T14:07:03-04:00"},{id:"guides/content-sources",filePath:"v3/guides/content-sources.md",urlPath:"/guides/content-sources",frontmatter:{title:"Content Sources",description:"Pull documentation content from GitHub repositories or Notion databases alongside your local files.",icon:"cloud-download",hidden:!1,draft:!1},isMdx:!1,version:"v3",lastUpdated:"2026-03-16T14:07:03-04:00"},{id:"guides/custom-theme",filePath:"v3/guides/custom-theme.md",urlPath:"/guides/custom-theme",frontmatter:{title:"Custom Theme",description:"How to customize your Tome site's appearance — presets, accent colors, fonts, dark mode, and CSS variables.",icon:"palette",hidden:!1,draft:!1},isMdx:!1,version:"v3",lastUpdated:"2026-03-16T14:07:03-04:00"},{id:"guides/draft-pages",filePath:"v3/guides/draft-pages.md",urlPath:"/guides/draft-pages",frontmatter:{title:"Draft Pages",description:"Mark pages as drafts to hide them from production builds while keeping them visible in development.",icon:"eye-off",hidden:!1,draft:!1},isMdx:!1,version:"v3",lastUpdated:"2026-03-15T16:49:32-04:00"},{id:"guides/migration",filePath:"v3/guides/migration.md",urlPath:"/guides/migration",frontmatter:{title:"Migrate from GitBook or Mintlify",description:"Move your existing documentation to Tome with a single command. Covers content conversion, navigation, redirects, and assets.",icon:"arrow-right-arrow-left",hidden:!1,draft:!1},isMdx:!1,version:"v3",lastUpdated:"2026-03-16T14:07:03-04:00"},{id:"guides/plugins",filePath:"v3/guides/plugins.md",urlPath:"/guides/plugins",frontmatter:{title:"Plugin System",description:"Extend Tome with plugins that hook into the build lifecycle — modify routes, inject head tags, and run custom logic.",icon:"puzzle",hidden:!1,draft:!1},isMdx:!1,version:"v3",lastUpdated:"2026-03-15T16:49:32-04:00"},{id:"guides/redirects",filePath:"v3/guides/redirects.md",urlPath:"/guides/redirects",frontmatter:{title:"Redirects",description:"Set up URL redirects to preserve links when pages move. Supports config-level and per-page frontmatter redirects.",icon:"arrow-turn-right",hidden:!1,draft:!1},isMdx:!1,version:"v3",lastUpdated:"2026-03-16T14:07:03-04:00"},{id:"guides/search",filePath:"v3/guides/search.md",urlPath:"/guides/search",frontmatter:{title:"Search",description:"How to set up search in your Tome documentation site — built-in Pagefind and optional Algolia DocSearch.",icon:"search",hidden:!1,draft:!1},isMdx:!1,version:"v3",lastUpdated:"2026-03-15T16:49:32-04:00"},{id:"guides/typedoc",filePath:"v3/guides/typedoc.md",urlPath:"/guides/typedoc",frontmatter:{title:"TypeDoc Generation",description:"Generate API documentation from TypeScript source code using the built-in TypeDoc integration.",icon:"file-code",hidden:!1,draft:!1},isMdx:!1,version:"v3",lastUpdated:"2026-03-15T16:49:32-04:00"},{id:"guides/versioning",filePath:"v3/guides/versioning.md",urlPath:"/guides/versioning",frontmatter:{title:"Multi-Version Docs",description:"How to maintain multiple versions of your documentation with Tome's built-in versioning system.",icon:"layers",hidden:!1,draft:!1},isMdx:!1,version:"v3",lastUpdated:"2026-03-14T23:12:48-04:00"},{id:"index",filePath:"v3/index.md",urlPath:"/",frontmatter:{title:"Introduction",description:"Tome is an open-source documentation platform for Markdown and MDX. Beautiful docs without the $250/month price tag.",hidden:!1,draft:!1},isMdx:!1,version:"v3",lastUpdated:"2026-03-16T13:47:15-04:00"},{id:"installation",filePath:"v3/installation.mdx",urlPath:"/installation",frontmatter:{title:"Installation",description:"System requirements and detailed installation instructions for Tome.",icon:"download",hidden:!1,draft:!1},isMdx:!0,version:"v3",lastUpdated:"2026-03-16T13:47:15-04:00"},{id:"pages-routing",filePath:"v3/pages-routing.md",urlPath:"/pages-routing",frontmatter:{title:"Pages & Routing",description:"How Tome maps files in the pages/ directory to URLs — naming conventions, nested routes, i18n, and versioning.",icon:"map",hidden:!1,draft:!1},isMdx:!1,version:"v3",lastUpdated:"2026-03-14T23:12:48-04:00"},{id:"project-structure",filePath:"v3/project-structure.mdx",urlPath:"/project-structure",frontmatter:{title:"Project Structure",description:"How a Tome documentation project is organized — pages, config, entry point, and build output.",icon:"folder",hidden:!1,draft:!1},isMdx:!0,version:"v3",lastUpdated:"2026-03-16T14:07:03-04:00"},{id:"quickstart",filePath:"v3/quickstart.md",urlPath:"/quickstart",frontmatter:{title:"Quickstart",description:"Get a Tome documentation site running in under a minute.",icon:"zap",hidden:!1,badge:"New",draft:!1},isMdx:!1,version:"v3",lastUpdated:"2026-03-16T13:47:15-04:00"},{id:"reference/cli",filePath:"v3/reference/cli.md",urlPath:"/reference/cli",frontmatter:{title:"CLI Reference",description:"Complete reference for every command and flag in the Tome CLI.",icon:"terminal",hidden:!1,draft:!1},isMdx:!1,version:"v3",lastUpdated:"2026-03-16T15:10:11-04:00"},{id:"reference/components",filePath:"v3/reference/components.md",urlPath:"/reference/components",frontmatter:{title:"Components",description:"Reference for all built-in MDX components — Callout, Tabs, Card, Steps, Accordion, and more.",icon:"puzzle",hidden:!1,draft:!1},isMdx:!1,version:"v3",lastUpdated:"2026-03-16T14:07:03-04:00"},{id:"reference/config",filePath:"v3/reference/config.md",urlPath:"/reference/config",frontmatter:{title:"Config Reference",description:"Complete reference for every field in tome.config.js — types, defaults, and descriptions.",icon:"file-text",hidden:!1,draft:!1},isMdx:!1,version:"v3",lastUpdated:"2026-03-16T15:10:11-04:00"},{id:"reference/frontmatter",filePath:"v3/reference/frontmatter.md",urlPath:"/reference/frontmatter",frontmatter:{title:"Frontmatter",description:"Reference for all YAML frontmatter fields supported in Tome documentation pages.",icon:"file-text",hidden:!1,draft:!1},isMdx:!1,version:"v3",lastUpdated:"2026-03-15T16:49:32-04:00"},{id:"reference/theme-presets",filePath:"v3/reference/theme-presets.md",urlPath:"/reference/theme-presets",frontmatter:{title:"Theme Presets",description:"Detailed reference for Tome's built-in theme presets — color tokens, CSS variables, and font stacks.",icon:"swatches",hidden:!1,draft:!1},isMdx:!1,version:"v3",lastUpdated:"2026-03-14T23:12:48-04:00"},{id:"theming",filePath:"v3/theming.md",urlPath:"/theming",frontmatter:{title:"Theming",description:"Customize the look of your Tome site — presets, colors, fonts, dark mode, and CSS variables.",icon:"palette",hidden:!1,draft:!1},isMdx:!1,version:"v3",lastUpdated:"2026-03-14T23:12:48-04:00"},{id:"tutorials/deploy-to-cloud",filePath:"v3/tutorials/deploy-to-cloud.md",urlPath:"/tutorials/deploy-to-cloud",frontmatter:{title:"Deploy to Tome Cloud",description:"Publish your documentation site to Tome Cloud with a single command. Includes custom domain setup.",icon:"cloud",hidden:!1,draft:!1},isMdx:!1,version:"v3",lastUpdated:"2026-03-16T14:07:03-04:00"},{id:"tutorials/first-site",filePath:"v3/tutorials/first-site.md",urlPath:"/tutorials/first-site",frontmatter:{title:"Create Your First Site",description:"A step-by-step tutorial that walks you through creating a documentation site with Tome, from installation to running the dev server.",icon:"rocket",hidden:!1,draft:!1},isMdx:!1,version:"v3",lastUpdated:"2026-03-16T14:07:03-04:00"},{id:"v2/api-auth",filePath:"v2/api-auth.md",urlPath:"/v2/api-auth",frontmatter:{title:"Authentication",description:"Configure API authentication for the interactive playground — Bearer tokens, API keys, and custom headers.",icon:"lock",hidden:!1,draft:!1},isMdx:!1,version:"v2",lastUpdated:"2026-03-13T19:09:31-04:00"},{id:"v2/api-endpoints",filePath:"v2/api-endpoints.md",urlPath:"/v2/api-endpoints",frontmatter:{title:"Endpoints",description:"How Tome renders API endpoints from your OpenAPI spec — methods, parameters, schemas, and the interactive playground.",icon:"globe",hidden:!1,draft:!1},isMdx:!1,version:"v2",lastUpdated:"2026-03-13T19:09:31-04:00"},{id:"v2/api-overview",filePath:"v2/api-overview.md",urlPath:"/v2/api-overview",frontmatter:{title:"Overview",description:"Generate interactive API documentation from OpenAPI specs with Tome.",icon:"code",hidden:!1,draft:!1},isMdx:!1,version:"v2",lastUpdated:"2026-03-16T13:47:15-04:00"},{id:"v2/cli",filePath:"v2/cli.md",urlPath:"/v2/cli",frontmatter:{title:"CLI Reference",description:"Complete reference for every command and flag in the Tome CLI.",icon:"terminal",hidden:!1,draft:!1},isMdx:!1,version:"v2",lastUpdated:"2026-03-13T19:09:31-04:00"},{id:"v2/components",filePath:"v2/components.mdx",urlPath:"/v2/components",frontmatter:{title:"Components",description:"Built-in MDX components — Callout, Tabs, Card, Steps, Accordion, PackageManager, TypeTable, FileTree, and more.",icon:"puzzle",hidden:!1,draft:!1},isMdx:!0,version:"v2",lastUpdated:"2026-03-16T13:47:15-04:00"},{id:"v2/concepts/architecture",filePath:"v2/concepts/architecture.md",urlPath:"/v2/concepts/architecture",frontmatter:{title:"Architecture",description:"How Tome works internally — the Vite plugin, virtual modules, build pipeline, and theme system.",hidden:!1,draft:!1},isMdx:!1,version:"v2",lastUpdated:"2026-03-16T15:10:11-04:00"},{id:"v2/concepts/file-routing",filePath:"v2/concepts/file-routing.md",urlPath:"/v2/concepts/file-routing",frontmatter:{title:"File-System Routing",description:"How Tome maps files in the pages/ directory to URLs — naming conventions, nested routes, i18n, and versioning.",hidden:!1,draft:!1},isMdx:!1,version:"v2",lastUpdated:"2026-03-13T19:09:31-04:00"},{id:"v2/configuration",filePath:"v2/configuration.md",urlPath:"/v2/configuration",frontmatter:{title:"Configuration",description:"How to configure your Tome site using tome.config.js — name, logo, navigation, theme, and more.",icon:"gear",hidden:!1,draft:!1},isMdx:!1,version:"v2",lastUpdated:"2026-03-16T13:47:15-04:00"},{id:"v2/guides/api-reference",filePath:"v2/guides/api-reference.md",urlPath:"/v2/guides/api-reference",frontmatter:{title:"API Reference Setup",description:"How to generate an interactive API reference from an OpenAPI specification in Tome.",icon:"code",hidden:!1,draft:!1},isMdx:!1,version:"v2",lastUpdated:"2026-03-13T19:09:31-04:00"},{id:"v2/guides/configuration",filePath:"v2/guides/configuration.md",urlPath:"/v2/guides/configuration",frontmatter:{title:"Configuration",description:"How to configure your Tome site using tome.config.js — name, logo, navigation, theme, and more.",icon:"gear",hidden:!1,draft:!1},isMdx:!1,version:"v2",lastUpdated:"2026-03-13T19:09:31-04:00"},{id:"v2/guides/custom-theme",filePath:"v2/guides/custom-theme.md",urlPath:"/v2/guides/custom-theme",frontmatter:{title:"Custom Theme",description:"How to customize your Tome site's appearance — presets, accent colors, fonts, dark mode, and CSS variables.",icon:"palette",hidden:!1,draft:!1},isMdx:!1,version:"v2",lastUpdated:"2026-03-13T19:09:31-04:00"},{id:"v2/guides/migration",filePath:"v2/guides/migration.md",urlPath:"/v2/guides/migration",frontmatter:{title:"Migrate from GitBook or Mintlify",description:"Move your existing documentation to Tome with a single command. Covers content conversion, navigation, redirects, and assets.",icon:"arrow-right-arrow-left",hidden:!1,draft:!1},isMdx:!1,version:"v2",lastUpdated:"2026-03-15T16:49:32-04:00"},{id:"v2/guides/redirects",filePath:"v2/guides/redirects.md",urlPath:"/v2/guides/redirects",frontmatter:{title:"Redirects",description:"Set up URL redirects to preserve links when pages move. Supports config-level and per-page frontmatter redirects.",icon:"arrow-turn-right",hidden:!1,draft:!1},isMdx:!1,version:"v2",lastUpdated:"2026-03-13T19:09:31-04:00"},{id:"v2/guides/search",filePath:"v2/guides/search.md",urlPath:"/v2/guides/search",frontmatter:{title:"Search",description:"How to set up search in your Tome documentation site — built-in Pagefind and optional Algolia DocSearch.",icon:"search",hidden:!1,draft:!1},isMdx:!1,version:"v2",lastUpdated:"2026-03-15T16:49:32-04:00"},{id:"v2/guides/versioning",filePath:"v2/guides/versioning.md",urlPath:"/v2/guides/versioning",frontmatter:{title:"Multi-Version Docs",description:"How to maintain multiple versions of your documentation with Tome's built-in versioning system.",icon:"layers",hidden:!1,draft:!1},isMdx:!1,version:"v2",lastUpdated:"2026-03-13T19:09:31-04:00"},{id:"v2/index",filePath:"v2/index.md",urlPath:"/v2",frontmatter:{title:"Introduction",description:"Tome is an open-source documentation platform for Markdown and MDX. Beautiful docs without the $250/month price tag.",hidden:!1,draft:!1},isMdx:!1,version:"v2",lastUpdated:"2026-03-16T13:47:15-04:00"},{id:"v2/installation",filePath:"v2/installation.mdx",urlPath:"/v2/installation",frontmatter:{title:"Installation",description:"System requirements and detailed installation instructions for Tome.",icon:"download",hidden:!1,draft:!1},isMdx:!0,version:"v2",lastUpdated:"2026-03-16T13:47:15-04:00"},{id:"v2/pages-routing",filePath:"v2/pages-routing.md",urlPath:"/v2/pages-routing",frontmatter:{title:"Pages & Routing",description:"How Tome maps files in the pages/ directory to URLs — naming conventions, nested routes, i18n, and versioning.",icon:"map",hidden:!1,draft:!1},isMdx:!1,version:"v2",lastUpdated:"2026-03-13T19:09:31-04:00"},{id:"v2/project-structure",filePath:"v2/project-structure.mdx",urlPath:"/v2/project-structure",frontmatter:{title:"Project Structure",description:"How a Tome documentation project is organized — pages, config, entry point, and build output.",icon:"folder",hidden:!1,draft:!1},isMdx:!0,version:"v2",lastUpdated:"2026-03-16T13:47:15-04:00"},{id:"v2/quickstart",filePath:"v2/quickstart.md",urlPath:"/v2/quickstart",frontmatter:{title:"Quickstart",description:"Get a Tome documentation site running in under a minute.",icon:"zap",hidden:!1,draft:!1},isMdx:!1,version:"v2",lastUpdated:"2026-03-16T13:47:15-04:00"},{id:"v2/reference/cli",filePath:"v2/reference/cli.md",urlPath:"/v2/reference/cli",frontmatter:{title:"CLI Reference",description:"Complete reference for every command and flag in the Tome CLI.",icon:"terminal",hidden:!1,draft:!1},isMdx:!1,version:"v2",lastUpdated:"2026-03-13T19:09:31-04:00"},{id:"v2/reference/components",filePath:"v2/reference/components.md",urlPath:"/v2/reference/components",frontmatter:{title:"Components",description:"Reference for all built-in MDX components — Callout, Tabs, Card, Steps, Accordion, and more.",icon:"puzzle",hidden:!1,draft:!1},isMdx:!1,version:"v2",lastUpdated:"2026-03-13T19:09:31-04:00"},{id:"v2/reference/config",filePath:"v2/reference/config.md",urlPath:"/v2/reference/config",frontmatter:{title:"Config Reference",description:"Complete reference for every field in tome.config.js — types, defaults, and descriptions.",icon:"file-text",hidden:!1,draft:!1},isMdx:!1,version:"v2",lastUpdated:"2026-03-13T19:09:31-04:00"},{id:"v2/reference/frontmatter",filePath:"v2/reference/frontmatter.md",urlPath:"/v2/reference/frontmatter",frontmatter:{title:"Frontmatter",description:"Reference for all YAML frontmatter fields supported in Tome documentation pages.",icon:"file-text",hidden:!1,draft:!1},isMdx:!1,version:"v2",lastUpdated:"2026-03-13T19:09:31-04:00"},{id:"v2/reference/theme-presets",filePath:"v2/reference/theme-presets.md",urlPath:"/v2/reference/theme-presets",frontmatter:{title:"Theme Presets",description:"Detailed reference for Tome's built-in theme presets — color tokens, CSS variables, and font stacks.",icon:"swatches",hidden:!1,draft:!1},isMdx:!1,version:"v2",lastUpdated:"2026-03-13T19:09:31-04:00"},{id:"v2/theming",filePath:"v2/theming.md",urlPath:"/v2/theming",frontmatter:{title:"Theming",description:"Customize the look of your Tome site — presets, colors, fonts, dark mode, and CSS variables.",icon:"palette",hidden:!1,draft:!1},isMdx:!1,version:"v2",lastUpdated:"2026-03-13T19:09:31-04:00"},{id:"v2/tutorials/deploy-to-cloud",filePath:"v2/tutorials/deploy-to-cloud.md",urlPath:"/v2/tutorials/deploy-to-cloud",frontmatter:{title:"Deploy to Tome Cloud",description:"Publish your documentation site to Tome Cloud with a single command. Includes custom domain setup.",icon:"cloud",hidden:!1,draft:!1},isMdx:!1,version:"v2",lastUpdated:"2026-03-15T16:49:32-04:00"},{id:"v2/tutorials/first-site",filePath:"v2/tutorials/first-site.md",urlPath:"/v2/tutorials/first-site",frontmatter:{title:"Create Your First Site",description:"A step-by-step tutorial that walks you through creating a documentation site with Tome, from installation to running the dev server.",icon:"rocket",hidden:!1,draft:!1},isMdx:!1,version:"v2",lastUpdated:"2026-03-13T19:09:31-04:00"},{id:"v1/api-auth",filePath:"v1/api-auth.md",urlPath:"/v1/api-auth",frontmatter:{title:"Authentication",description:"Configure API authentication for the interactive playground — Bearer tokens, API keys, and custom headers.",icon:"lock",hidden:!1,draft:!1},isMdx:!1,version:"v1",lastUpdated:"2026-03-13T19:09:31-04:00"},{id:"v1/api-endpoints",filePath:"v1/api-endpoints.md",urlPath:"/v1/api-endpoints",frontmatter:{title:"Endpoints",description:"How Tome renders API endpoints from your OpenAPI spec — methods, parameters, schemas, and the interactive playground.",icon:"globe",hidden:!1,draft:!1},isMdx:!1,version:"v1",lastUpdated:"2026-03-13T19:09:31-04:00"},{id:"v1/api-overview",filePath:"v1/api-overview.md",urlPath:"/v1/api-overview",frontmatter:{title:"Overview",description:"Generate interactive API documentation from OpenAPI specs with Tome.",icon:"code",hidden:!1,draft:!1},isMdx:!1,version:"v1",lastUpdated:"2026-03-16T13:47:15-04:00"},{id:"v1/cli",filePath:"v1/cli.md",urlPath:"/v1/cli",frontmatter:{title:"CLI Reference",description:"Complete reference for every command and flag in the Tome CLI.",icon:"terminal",hidden:!1,draft:!1},isMdx:!1,version:"v1",lastUpdated:"2026-03-13T19:09:31-04:00"},{id:"v1/components",filePath:"v1/components.mdx",urlPath:"/v1/components",frontmatter:{title:"Components",description:"Built-in MDX components — Callout, Tabs, Card, Steps, Accordion, PackageManager, TypeTable, FileTree, and more.",icon:"puzzle",hidden:!1,draft:!1},isMdx:!0,version:"v1",lastUpdated:"2026-03-16T13:47:15-04:00"},{id:"v1/concepts/architecture",filePath:"v1/concepts/architecture.md",urlPath:"/v1/concepts/architecture",frontmatter:{title:"Architecture",description:"How Tome works internally — the Vite plugin, virtual modules, build pipeline, and theme system.",hidden:!1,draft:!1},isMdx:!1,version:"v1",lastUpdated:"2026-03-16T15:10:11-04:00"},{id:"v1/concepts/file-routing",filePath:"v1/concepts/file-routing.md",urlPath:"/v1/concepts/file-routing",frontmatter:{title:"File-System Routing",description:"How Tome maps files in the pages/ directory to URLs — naming conventions, nested routes, i18n, and versioning.",hidden:!1,draft:!1},isMdx:!1,version:"v1",lastUpdated:"2026-03-13T19:09:31-04:00"},{id:"v1/configuration",filePath:"v1/configuration.md",urlPath:"/v1/configuration",frontmatter:{title:"Configuration",description:"How to configure your Tome site using tome.config.js — name, logo, navigation, theme, and more.",icon:"gear",hidden:!1,draft:!1},isMdx:!1,version:"v1",lastUpdated:"2026-03-16T13:47:15-04:00"},{id:"v1/guides/api-reference",filePath:"v1/guides/api-reference.md",urlPath:"/v1/guides/api-reference",frontmatter:{title:"API Reference Setup",description:"How to generate an interactive API reference from an OpenAPI specification in Tome.",icon:"code",hidden:!1,draft:!1},isMdx:!1,version:"v1",lastUpdated:"2026-03-13T19:09:31-04:00"},{id:"v1/guides/configuration",filePath:"v1/guides/configuration.md",urlPath:"/v1/guides/configuration",frontmatter:{title:"Configuration",description:"How to configure your Tome site using tome.config.js — name, logo, navigation, theme, and more.",icon:"gear",hidden:!1,draft:!1},isMdx:!1,version:"v1",lastUpdated:"2026-03-13T19:09:31-04:00"},{id:"v1/guides/custom-theme",filePath:"v1/guides/custom-theme.md",urlPath:"/v1/guides/custom-theme",frontmatter:{title:"Custom Theme",description:"How to customize your Tome site's appearance — presets, accent colors, fonts, dark mode, and CSS variables.",icon:"palette",hidden:!1,draft:!1},isMdx:!1,version:"v1",lastUpdated:"2026-03-13T19:09:31-04:00"},{id:"v1/guides/search",filePath:"v1/guides/search.md",urlPath:"/v1/guides/search",frontmatter:{title:"Search",description:"How to set up search in your Tome documentation site — built-in Pagefind and optional Algolia DocSearch.",icon:"search",hidden:!1,draft:!1},isMdx:!1,version:"v1",lastUpdated:"2026-03-15T16:49:32-04:00"},{id:"v1/guides/versioning",filePath:"v1/guides/versioning.md",urlPath:"/v1/guides/versioning",frontmatter:{title:"Multi-Version Docs",description:"How to maintain multiple versions of your documentation with Tome's built-in versioning system.",icon:"layers",hidden:!1,draft:!1},isMdx:!1,version:"v1",lastUpdated:"2026-03-13T19:09:31-04:00"},{id:"v1/index",filePath:"v1/index.md",urlPath:"/v1",frontmatter:{title:"Introduction",description:"Tome is an open-source documentation platform for Markdown and MDX. Beautiful docs without the $250/month price tag.",hidden:!1,draft:!1},isMdx:!1,version:"v1",lastUpdated:"2026-03-16T13:47:15-04:00"},{id:"v1/installation",filePath:"v1/installation.mdx",urlPath:"/v1/installation",frontmatter:{title:"Installation",description:"System requirements and detailed installation instructions for Tome.",icon:"download",hidden:!1,draft:!1},isMdx:!0,version:"v1",lastUpdated:"2026-03-16T13:47:15-04:00"},{id:"v1/pages-routing",filePath:"v1/pages-routing.md",urlPath:"/v1/pages-routing",frontmatter:{title:"Pages & Routing",description:"How Tome maps files in the pages/ directory to URLs — naming conventions, nested routes, i18n, and versioning.",icon:"map",hidden:!1,draft:!1},isMdx:!1,version:"v1",lastUpdated:"2026-03-13T19:09:31-04:00"},{id:"v1/project-structure",filePath:"v1/project-structure.mdx",urlPath:"/v1/project-structure",frontmatter:{title:"Project Structure",description:"How a Tome documentation project is organized — pages, config, entry point, and build output.",icon:"folder",hidden:!1,draft:!1},isMdx:!0,version:"v1",lastUpdated:"2026-03-16T13:47:15-04:00"},{id:"v1/quickstart",filePath:"v1/quickstart.md",urlPath:"/v1/quickstart",frontmatter:{title:"Quickstart",description:"Get a Tome documentation site running in under a minute.",icon:"zap",hidden:!1,draft:!1},isMdx:!1,version:"v1",lastUpdated:"2026-03-16T13:47:15-04:00"},{id:"v1/reference/cli",filePath:"v1/reference/cli.md",urlPath:"/v1/reference/cli",frontmatter:{title:"CLI Reference",description:"Complete reference for every command and flag in the Tome CLI.",icon:"terminal",hidden:!1,draft:!1},isMdx:!1,version:"v1",lastUpdated:"2026-03-13T19:09:31-04:00"},{id:"v1/reference/components",filePath:"v1/reference/components.md",urlPath:"/v1/reference/components",frontmatter:{title:"Components",description:"Reference for all built-in MDX components — Callout, Tabs, Card, Steps, Accordion, and more.",icon:"puzzle",hidden:!1,draft:!1},isMdx:!1,version:"v1",lastUpdated:"2026-03-13T19:09:31-04:00"},{id:"v1/reference/config",filePath:"v1/reference/config.md",urlPath:"/v1/reference/config",frontmatter:{title:"Config Reference",description:"Complete reference for every field in tome.config.js — types, defaults, and descriptions.",icon:"file-text",hidden:!1,draft:!1},isMdx:!1,version:"v1",lastUpdated:"2026-03-13T19:09:31-04:00"},{id:"v1/reference/frontmatter",filePath:"v1/reference/frontmatter.md",urlPath:"/v1/reference/frontmatter",frontmatter:{title:"Frontmatter",description:"Reference for all YAML frontmatter fields supported in Tome documentation pages.",icon:"file-text",hidden:!1,draft:!1},isMdx:!1,version:"v1",lastUpdated:"2026-03-13T19:09:31-04:00"},{id:"v1/reference/theme-presets",filePath:"v1/reference/theme-presets.md",urlPath:"/v1/reference/theme-presets",frontmatter:{title:"Theme Presets",description:"Detailed reference for Tome's built-in theme presets — color tokens, CSS variables, and font stacks.",icon:"swatches",hidden:!1,draft:!1},isMdx:!1,version:"v1",lastUpdated:"2026-03-13T19:09:31-04:00"},{id:"v1/theming",filePath:"v1/theming.md",urlPath:"/v1/theming",frontmatter:{title:"Theming",description:"Customize the look of your Tome site — presets, colors, fonts, dark mode, and CSS variables.",icon:"palette",hidden:!1,draft:!1},isMdx:!1,version:"v1",lastUpdated:"2026-03-13T19:09:31-04:00"},{id:"v1/tutorials/deploy-to-cloud",filePath:"v1/tutorials/deploy-to-cloud.md",urlPath:"/v1/tutorials/deploy-to-cloud",frontmatter:{title:"Deploy to Tome Cloud",description:"Publish your documentation site to Tome Cloud with a single command. Includes custom domain setup.",icon:"cloud",hidden:!1,draft:!1},isMdx:!1,version:"v1",lastUpdated:"2026-03-15T16:49:32-04:00"},{id:"v1/tutorials/first-site",filePath:"v1/tutorials/first-site.md",urlPath:"/v1/tutorials/first-site",frontmatter:{title:"Create Your First Site",description:"A step-by-step tutorial that walks you through creating a documentation site with Tome, from installation to running the dev server.",icon:"rocket",hidden:!1,draft:!1},isMdx:!1,version:"v1",lastUpdated:"2026-03-13T19:09:31-04:00"}],gg=[{section:"Getting Started",pages:[{title:"Introduction",id:"index",urlPath:"/"},{title:"Quickstart",id:"quickstart",urlPath:"/quickstart",icon:"zap",badge:{text:"New",variant:"default"}},{title:"Installation",id:"installation",urlPath:"/installation",icon:"download"},{title:"Project Structure",id:"project-structure",urlPath:"/project-structure",icon:"folder"}]},{section:"Core Concepts",pages:[{title:"Configuration",id:"configuration",urlPath:"/configuration",icon:"gear"},{title:"Pages & Routing",id:"pages-routing",urlPath:"/pages-routing",icon:"map"},{title:"Components",id:"components",urlPath:"/components",icon:"puzzle"},{title:"Theming",id:"theming",urlPath:"/theming",icon:"palette"}]},{section:"API Reference",pages:[{title:"Overview",id:"api-overview",urlPath:"/api-overview",icon:"code"},{title:"Endpoints",id:"api-endpoints",urlPath:"/api-endpoints",icon:"globe"},{title:"Authentication",id:"api-auth",urlPath:"/api-auth",icon:"lock"}]},{section:"Guides",pages:[{title:"Search",id:"guides/search",urlPath:"/guides/search",icon:"search"},{title:"Multi-Version Docs",id:"guides/versioning",urlPath:"/guides/versioning",icon:"layers"},{title:"Migrate from GitBook or Mintlify",id:"guides/migration",urlPath:"/guides/migration",icon:"arrow-right-arrow-left"},{title:"Redirects",id:"guides/redirects",urlPath:"/guides/redirects",icon:"arrow-turn-right"},{title:"Configuration",id:"guides/configuration",urlPath:"/guides/configuration",icon:"gear"},{title:"Custom Theme",id:"guides/custom-theme",urlPath:"/guides/custom-theme",icon:"palette"},{title:"API Reference Setup",id:"guides/api-reference",urlPath:"/guides/api-reference",icon:"code"},{title:"Draft Pages",id:"guides/draft-pages",urlPath:"/guides/draft-pages",icon:"eye-off"},{title:"Plugin System",id:"guides/plugins",urlPath:"/guides/plugins",icon:"puzzle"},{title:"Content Sources",id:"guides/content-sources",urlPath:"/guides/content-sources",icon:"cloud-download"},{title:"TypeDoc Generation",id:"guides/typedoc",urlPath:"/guides/typedoc",icon:"file-code"},{title:"Code Blocks",id:"guides/code-blocks",urlPath:"/guides/code-blocks",icon:"code"}]},{section:"Tutorials",pages:[{title:"Create Your First Site",id:"tutorials/first-site",urlPath:"/tutorials/first-site",icon:"rocket"},{title:"Deploy to Tome Cloud",id:"tutorials/deploy-to-cloud",urlPath:"/tutorials/deploy-to-cloud",icon:"cloud"}]},{section:"Reference",pages:[{title:"CLI Reference",id:"reference/cli",urlPath:"/reference/cli",icon:"terminal"},{title:"Components",id:"reference/components",urlPath:"/reference/components",icon:"puzzle"},{title:"Config Reference",id:"reference/config",urlPath:"/reference/config",icon:"file-text"},{title:"Frontmatter",id:"reference/frontmatter",urlPath:"/reference/frontmatter",icon:"file-text"},{title:"Theme Presets",id:"reference/theme-presets",urlPath:"/reference/theme-presets",icon:"swatches"}]},{section:"Concepts",pages:[{title:"Architecture",id:"concepts/architecture",urlPath:"/concepts/architecture"},{title:"File-System Routing",id:"concepts/file-routing",urlPath:"/concepts/file-routing"}]},{section:"CLI",pages:[{title:"CLI Reference",id:"cli",urlPath:"/cli",icon:"terminal"}]}],lm={current:"v3",versions:["v3","v2","v1"]},Ks=null,vg={"api-auth":()=>B(()=>import("./api-auth-Dl8RmfNO.js"),[]),"api-endpoints":()=>B(()=>import("./api-endpoints-BhjOtv7I.js"),[]),"api-overview":()=>B(()=>import("./api-overview-BQcY3lE5.js"),[]),cli:()=>B(()=>import("./cli-wBINDAWF.js"),[]),components:()=>B(()=>import("./components-CHD1dN1N.js"),[]),"concepts/architecture":()=>B(()=>import("./architecture-C-6SNn1C.js"),[]),"concepts/file-routing":()=>B(()=>import("./file-routing-Dw65VE9g.js"),[]),configuration:()=>B(()=>import("./configuration-CaT3w37G.js"),[]),"guides/api-reference":()=>B(()=>import("./api-reference-b2AZkNie.js"),[]),"guides/code-blocks":()=>B(()=>import("./code-blocks-D5saY7-t.js"),[]),"guides/configuration":()=>B(()=>import("./configuration-CNEwgt_y.js"),[]),"guides/content-sources":()=>B(()=>import("./content-sources-BaUvlfIh.js"),[]),"guides/custom-theme":()=>B(()=>import("./custom-theme-hwZP1X5W.js"),[]),"guides/draft-pages":()=>B(()=>import("./draft-pages-D6Bz02Ir.js"),[]),"guides/migration":()=>B(()=>import("./migration-BzYlxo0H.js"),[]),"guides/plugins":()=>B(()=>import("./plugins-CHX8Br4K.js"),[]),"guides/redirects":()=>B(()=>import("./redirects-7P0gAbiW.js"),[]),"guides/search":()=>B(()=>import("./search-DETstkUu.js"),[]),"guides/typedoc":()=>B(()=>import("./typedoc-D0RVHgwX.js"),[]),"guides/versioning":()=>B(()=>import("./versioning-BtluP-Zz.js"),[]),index:()=>B(()=>import("./index-CLvYB2bE.js"),[]),installation:()=>B(()=>import("./installation-6G3EVqB3.js"),[]),"pages-routing":()=>B(()=>import("./pages-routing-Dd90JtDN.js"),[]),"project-structure":()=>B(()=>import("./project-structure-B-HJZ_Kj.js"),[]),quickstart:()=>B(()=>import("./quickstart-uAyub0ID.js"),[]),"reference/cli":()=>B(()=>import("./cli-BFHRQ6OV.js"),[]),"reference/components":()=>B(()=>import("./components-CYobeg2G.js"),[]),"reference/config":()=>B(()=>import("./config-Cr4xfbfG.js"),[]),"reference/frontmatter":()=>B(()=>import("./frontmatter-DBUtOdTG.js"),[]),"reference/theme-presets":()=>B(()=>import("./theme-presets-Dm0l_qvl.js"),[]),theming:()=>B(()=>import("./theming-CgmcicVv.js"),[]),"tutorials/deploy-to-cloud":()=>B(()=>import("./deploy-to-cloud-CKuv7QMY.js"),[]),"tutorials/first-site":()=>B(()=>import("./first-site-CobayukG.js"),[]),"v2/api-auth":()=>B(()=>import("./api-auth-Byjz-iV9.js"),[]),"v2/api-endpoints":()=>B(()=>import("./api-endpoints-TqCZlt0q.js"),[]),"v2/api-overview":()=>B(()=>import("./api-overview-B9pVkSKE.js"),[]),"v2/cli":()=>B(()=>import("./cli-yDlNjo18.js"),[]),"v2/components":()=>B(()=>import("./components-C1PLBqNC.js"),[]),"v2/concepts/architecture":()=>B(()=>import("./architecture-S3BRqBw7.js"),[]),"v2/concepts/file-routing":()=>B(()=>import("./file-routing-fRO6-5Ap.js"),[]),"v2/configuration":()=>B(()=>import("./configuration-Rd3HYmpr.js"),[]),"v2/guides/api-reference":()=>B(()=>import("./api-reference-Dq_uyr41.js"),[]),"v2/guides/configuration":()=>B(()=>import("./configuration-DoKt2MNK.js"),[]),"v2/guides/custom-theme":()=>B(()=>import("./custom-theme-D1JC2bin.js"),[]),"v2/guides/migration":()=>B(()=>import("./migration-DKsr8Ohn.js"),[]),"v2/guides/redirects":()=>B(()=>import("./redirects-rHgYe5nE.js"),[]),"v2/guides/search":()=>B(()=>import("./search-qXAft3Oe.js"),[]),"v2/guides/versioning":()=>B(()=>import("./versioning-CAwPRAO2.js"),[]),"v2/index":()=>B(()=>import("./index-CjEx2vSx.js"),[]),"v2/installation":()=>B(()=>import("./installation-CmHQJojf.js"),[]),"v2/pages-routing":()=>B(()=>import("./pages-routing-ryyM9Mg7.js"),[]),"v2/project-structure":()=>B(()=>import("./project-structure-BVM8fZJz.js"),[]),"v2/quickstart":()=>B(()=>import("./quickstart-CbGYoTuL.js"),[]),"v2/reference/cli":()=>B(()=>import("./cli-zNYYdWE0.js"),[]),"v2/reference/components":()=>B(()=>import("./components-oxsuT-ad.js"),[]),"v2/reference/config":()=>B(()=>import("./config-mMkyFvNw.js"),[]),"v2/reference/frontmatter":()=>B(()=>import("./frontmatter-C1Z2em6H.js"),[]),"v2/reference/theme-presets":()=>B(()=>import("./theme-presets-DpG_w7fN.js"),[]),"v2/theming":()=>B(()=>import("./theming-B0AnkweM.js"),[]),"v2/tutorials/deploy-to-cloud":()=>B(()=>import("./deploy-to-cloud-2OKGSp7A.js"),[]),"v2/tutorials/first-site":()=>B(()=>import("./first-site-D08TNHOP.js"),[]),"v1/api-auth":()=>B(()=>import("./api-auth-CcxBQtOi.js"),[]),"v1/api-endpoints":()=>B(()=>import("./api-endpoints-BiYCpfQi.js"),[]),"v1/api-overview":()=>B(()=>import("./api-overview-BgTuotA2.js"),[]),"v1/cli":()=>B(()=>import("./cli-VG7wjGqT.js"),[]),"v1/components":()=>B(()=>import("./components-DYda1HTP.js"),[]),"v1/concepts/architecture":()=>B(()=>import("./architecture-CivgVtai.js"),[]),"v1/concepts/file-routing":()=>B(()=>import("./file-routing-D5THgrFi.js"),[]),"v1/configuration":()=>B(()=>import("./configuration-DroydRdM.js"),[]),"v1/guides/api-reference":()=>B(()=>import("./api-reference-DWpxqQWI.js"),[]),"v1/guides/configuration":()=>B(()=>import("./configuration-Cl11Q11p.js"),[]),"v1/guides/custom-theme":()=>B(()=>import("./custom-theme-BKCfH7kl.js"),[]),"v1/guides/search":()=>B(()=>import("./search-Bpy7almg.js"),[]),"v1/guides/versioning":()=>B(()=>import("./versioning-DvkOHnTT.js"),[]),"v1/index":()=>B(()=>import("./index--SrdKw7y.js"),[]),"v1/installation":()=>B(()=>import("./installation-CohizCkd.js"),[]),"v1/pages-routing":()=>B(()=>import("./pages-routing-DRlSamyp.js"),[]),"v1/project-structure":()=>B(()=>import("./project-structure-DjLlVvcU.js"),[]),"v1/quickstart":()=>B(()=>import("./quickstart-BKYnj45b.js"),[]),"v1/reference/cli":()=>B(()=>import("./cli-Dn7shT7j.js"),[]),"v1/reference/components":()=>B(()=>import("./components-tclV2FlS.js"),[]),"v1/reference/config":()=>B(()=>import("./config-C_s3eA3Y.js"),[]),"v1/reference/frontmatter":()=>B(()=>import("./frontmatter-B4Lu0l4F.js"),[]),"v1/reference/theme-presets":()=>B(()=>import("./theme-presets-BltaXSPM.js"),[]),"v1/theming":()=>B(()=>import("./theming-BRrZLtP0.js"),[]),"v1/tutorials/deploy-to-cloud":()=>B(()=>import("./deploy-to-cloud-1pcn5rdP.js"),[]),"v1/tutorials/first-site":()=>B(()=>import("./first-site-DEd5jgY_.js"),[])};function mm(s){const h=vg[s];return h?h():Promise.resolve({default:null})}const yg=[{id:"api-auth",title:"Authentication",content:`
The API playground supports several authentication methods. Users can enter credentials that are included in test requests.

## Configuration

Add auth settings to your API config:

\`\`\`javascript
export default {
  api: {
    spec: "./openapi.yaml",
    playground: true,
    auth: {
      type: "bearer",  // "bearer", "apiKey", or "basic"
    },
  },
};
\`\`\`

## Bearer token

The most common pattern for modern APIs. A token input appears in the playground header:

\`\`\`javascript
auth: {
  type: "bearer",
}
\`\`\`

Requests include the header:
\`\`\`
Authorization: Bearer <user-entered-token>
\`\`\`

## API key

For APIs that use key-based authentication:

\`\`\`javascript
auth: {
  type: "apiKey",
  name: "X-API-Key",     // Header name
  in: "header",          // "header" or "query"
}
\`\`\`

When \`in\` is \`"query"\`, the key is appended as a URL parameter instead.

## Basic auth

For username/password authentication:

\`\`\`javascript
auth: {
  type: "basic",
}
\`\`\`

The playground shows username and password fields. The value is sent as a Base64-encoded \`Authorization: Basic\` header.

## OpenAPI security schemes

If your OpenAPI spec defines security schemes, Tome reads them automatically:

\`\`\`yaml
components:
  securitySchemes:
    BearerAuth:
      type: http
      scheme: bearer
    ApiKeyAuth:
      type: apiKey
      in: header
      name: X-API-Key
\`\`\`

When security schemes are defined in the spec, Tome uses them instead of the manual config. You don't need to configure \`auth\` separately.

## Security notes

- Credentials entered in the playground are stored only in browser memory for the current session
- Credentials are never sent to Tome's servers — requests go directly from the browser to your API
- CORS must be enabled on your API server for playground requests to work
- For production APIs, consider providing a sandbox environment URL through the \`baseUrl\` config
`},{id:"api-endpoints",title:"Endpoints",content:`
Tome renders each API operation from your OpenAPI spec as a structured endpoint section with method badges, parameter tables, request/response schemas, and an optional interactive playground.

## Endpoint layout

Each endpoint displays:

1. **Method badge** — Color-coded (GET, POST, PUT, DELETE, PATCH)
2. **Path** — The endpoint URL with path parameters highlighted
3. **Description** — From the operation's \`summary\` and \`description\` fields
4. **Parameters** — Path, query, and header parameters in a table
5. **Request body** — Schema rendered with types and descriptions
6. **Responses** — Status codes with response schemas

## Tag grouping

Endpoints are organized by their OpenAPI tags. Each tag becomes a section heading:

\`\`\`yaml
paths:
  /users:
    get:
      tags: [Users]
      summary: List all users
  /users/{id}:
    get:
      tags: [Users]
      summary: Get user by ID
  /projects:
    get:
      tags: [Projects]
      summary: List projects
\`\`\`

This generates two groups: "Users" with two endpoints and "Projects" with one.

## Parameter rendering

Parameters are rendered in a table with type information:

| Name | Type | In | Required | Description |
|------|------|----|----------|-------------|
| \`id\` | string | path | yes | The user ID |
| \`limit\` | integer | query | no | Max results (default: 20) |
| \`offset\` | integer | query | no | Pagination offset |

## Schema display

Request and response schemas are rendered recursively. Nested objects show their properties with types:

\`\`\`
UserResponse {
  id: string          — Unique identifier
  name: string        — Display name
  email: string       — Email address
  created_at: string  — ISO 8601 timestamp
  settings: {
    theme: string     — "light" or "dark"
    locale: string    — Language code
  }
}
\`\`\`

Arrays, enums, and \`oneOf\`/\`anyOf\` unions are all supported.

## Interactive playground

When \`playground\` is true in your config, each endpoint gets a "Try it" section where users can:

- Fill in path and query parameters
- Edit the request body as JSON
- Set authentication headers
- Send the request and view the response

\`\`\`javascript
api: {
  spec: "./openapi.yaml",
  playground: true,
  baseUrl: "https://api.example.com",  // Override base URL
},
\`\`\`

The playground uses \`fetch\` directly from the browser. CORS must be enabled on your API for cross-origin requests.
`},{id:"api-overview",title:"Overview",content:`
Tome generates a complete API reference from an OpenAPI 3.x specification. Point it at a spec file and get rendered endpoint documentation with an interactive playground — no manual writing required.

## Setup

Add the \`api\` section to your \`tome.config.js\`:

\`\`\`javascript
export default {
  name: "My API Docs",
  api: {
    spec: "./openapi.yaml",   // Path to your OpenAPI spec
    playground: true,           // Enable interactive playground
  },
};
\`\`\`

Tome parses the spec at build time and generates:

- Endpoint listing organized by tags
- Request/response schema documentation
- Parameter tables with types and descriptions
- An interactive playground for testing endpoints

## Supported formats

| Format | Extension |
|--------|-----------|
| OpenAPI 3.0 | \`.json\`, \`.yaml\`, \`.yml\` |
| OpenAPI 3.1 | \`.json\`, \`.yaml\`, \`.yml\` |

Swagger 2.x specs are not directly supported. Convert them first using tools like \`swagger2openapi\`.

## What gets generated

From a single spec file, Tome creates:

- **Endpoint pages** — Each operation (GET, POST, PUT, DELETE) gets its own section with method, path, description, and parameters.
- **Schema documentation** — Request bodies and response objects are rendered with type information.
- **Tag grouping** — Operations are organized by their OpenAPI tags.
- **Try it** — The playground lets users send real requests with custom parameters and see responses.

## Spec organization

For the best results, make sure your OpenAPI spec includes:

- Descriptive \`summary\` and \`description\` fields on each operation
- Tags to group related endpoints
- Schema definitions with \`description\` fields
- Example values for parameters and request bodies

## Next steps

- **[Endpoints](./api-endpoints)** for details on how endpoints are rendered
- **[Authentication](./api-auth)** for configuring auth in the playground
`},{id:"cli",title:"CLI Reference",content:`
The \`tome\` CLI is the primary interface for creating, developing, building, and deploying documentation sites.

## Installation

\`\`\`bash
npm install -D @tomehq/cli
# or globally
npm install -g @tomehq/cli
\`\`\`

## Commands

### \`tome init [name]\`

Create a new Tome documentation project.

\`\`\`bash
tome init my-docs
\`\`\`

| Argument | Default | Description |
|----------|---------|-------------|
| \`name\` | \`my-docs\` | Project directory name |

| Flag | Default | Description |
|------|---------|-------------|
| \`-t, --template <name>\` | \`default\` | Starter template |

Creates \`tome.config.js\`, \`package.json\`, \`index.html\`, \`.tome/entry.tsx\`, starter pages in \`pages/\`, and \`public/\` and \`styles/\` directories.

---

### \`tome dev\`

Start the development server with hot reloading.

\`\`\`bash
tome dev
tome dev -p 4000
tome dev --host
\`\`\`

| Flag | Default | Description |
|------|---------|-------------|
| \`-p, --port <number>\` | \`3000\` | Server port |
| \`--host\` | \`false\` | Expose to network (bind \`0.0.0.0\`) |

Watches \`pages/\` for file changes and reloads automatically. Config changes trigger a full reload.

---

### \`tome build\`

Build the documentation site for production.

\`\`\`bash
tome build
tome build -o dist
\`\`\`

| Flag | Default | Description |
|------|---------|-------------|
| \`-o, --outDir <dir>\` | \`out\` | Output directory |

Produces a static site and runs Pagefind to build the search index.

---

### \`tome deploy\`

Deploy the site to Tome Cloud. Requires \`tome login\` first.

\`\`\`bash
tome deploy
\`\`\`

Builds, collects output files, and uploads using hash-based deduplication.

---

### \`tome login\`

Authenticate with Tome Cloud.

\`\`\`bash
tome login
\`\`\`

Prompts for email and sends a magic link. Stores the API token locally.

---

### \`tome domains:add <domain>\`

Add a custom domain. Returns DNS records to configure.

\`\`\`bash
tome domains:add docs.example.com
\`\`\`

### \`tome domains:verify <domain>\`

Verify DNS configuration for a custom domain.

\`\`\`bash
tome domains:verify docs.example.com
\`\`\`

### \`tome domains:list\`

List all custom domains for the current project.

### \`tome domains:remove <domain>\`

Remove a custom domain.

---

### \`tome algolia:init\`

Initialize an Algolia DocSearch index. Prompts for credentials and creates a crawler configuration.

---

### \`tome typedoc <files...>\`

Generate API reference documentation from TypeScript source files.

\`\`\`bash
tome typedoc src/index.ts
tome typedoc src/index.ts src/utils.ts
\`\`\`

Parses exported functions, interfaces, and type aliases using the TypeScript compiler API. Generates a Markdown page per export with signatures, parameters, return types, and JSDoc descriptions.

---

### \`tome mcp\`

Start the MCP (Model Context Protocol) stdio server for AI tool integration. Exposes documentation content as MCP resources and tools.
`},{id:"components",title:"Components",content:`
Tome includes a set of built-in components available in any \`.mdx\` file. No imports needed — they're injected automatically.

## Callout

Highlight important information with a styled callout:

<Callout title="Important">
  This is critical information that users should not miss.
</Callout>

\`\`\`mdx
<Callout title="Important">
  This is critical information that users should not miss.
</Callout>
\`\`\`

Callouts support a \`type\` prop for different styles:

| Type | Use case |
|------|----------|
| \`info\` | General information (default) |
| \`warning\` | Cautions and potential issues |
| \`error\` | Critical warnings and breaking changes |
| \`tip\` | Helpful suggestions and best practices |

<Callout type="warning" title="Deprecation Notice">
  This API endpoint will be removed in v3.0.
</Callout>

\`\`\`mdx
<Callout type="warning" title="Deprecation Notice">
  This API endpoint will be removed in v3.0.
</Callout>
\`\`\`

## Tabs

Present content variants — useful for multiple languages or platform-specific instructions:

<Tabs items={["npm", "pnpm", "yarn"]}>
  <div>npm install @tomehq/cli</div>
  <div>pnpm add @tomehq/cli</div>
  <div>yarn add @tomehq/cli</div>
</Tabs>

\`\`\`mdx
<Tabs items={["npm", "pnpm", "yarn"]}>
  <div>npm install @tomehq/cli</div>
  <div>pnpm add @tomehq/cli</div>
  <div>yarn add @tomehq/cli</div>
</Tabs>
\`\`\`

The active tab persists across page navigations within the same session.

## Card

Link to related pages or external resources:

<Card title="Quickstart" href="./quickstart">
  Get up and running in under a minute.
</Card>

\`\`\`mdx
<Card title="Quickstart" href="./quickstart">
  Get up and running in under a minute.
</Card>
\`\`\`

### Card group

Arrange cards in a responsive grid:

<CardGroup cols={3}>
  <Card title="Setup">Step 1</Card>
  <Card title="Configure">Step 2</Card>
  <Card title="Deploy">Step 3</Card>
</CardGroup>

\`\`\`mdx
<CardGroup cols={3}>
  <Card title="Setup">Step 1</Card>
  <Card title="Configure">Step 2</Card>
  <Card title="Deploy">Step 3</Card>
</CardGroup>
\`\`\`

The \`cols\` prop accepts \`2\`, \`3\`, or \`4\`. Defaults to \`2\`.

## Steps

Ordered procedural instructions with visual step indicators:

<Steps>
  <div>**Install dependencies** — Run \`npm install\` in your project directory.</div>
  <div>**Configure** — Edit \`tome.config.js\` with your settings.</div>
  <div>**Deploy** — Run \`tome deploy\` to publish your site.</div>
</Steps>

\`\`\`mdx
<Steps>
  <div>**Install dependencies** — Run \`npm install\` in your project directory.</div>
  <div>**Configure** — Edit \`tome.config.js\` with your settings.</div>
  <div>**Deploy** — Run \`tome deploy\` to publish your site.</div>
</Steps>
\`\`\`

## Accordion

Collapsible content sections for FAQs or optional details:

<Accordion title="How do I deploy?">
  Run \`npx @tomehq/cli deploy\` from your project directory. See the deployment guide for details.
</Accordion>

\`\`\`mdx
<Accordion title="How do I deploy?">
  Run \`npx @tomehq/cli deploy\` from your project directory. See the deployment guide for details.
</Accordion>
\`\`\`

Multiple accordions stack vertically. Only one opens at a time by default.

## PackageManager

Display install commands across all package managers with automatic translation:

<PackageManager command="install @tomehq/cli" />

Pass any npm command string and Tome translates it for yarn, pnpm, and bun:

\`\`\`mdx
<PackageManager command="install @tomehq/cli" />
\`\`\`

It works with dev dependencies too:

<PackageManager command="install -D vitest" />

\`\`\`mdx
<PackageManager command="install -D vitest" />
\`\`\`

## TypeTable

Document TypeScript interfaces and prop types with a structured table:

<TypeTable
  name="TomeConfig"
  fields={[
    { name: "name", type: "string", required: true, description: "Your documentation site name" },
    { name: "theme", type: "ThemeConfig", required: false, default: '{ preset: "amber" }', description: "Theme and appearance settings" },
    { name: "navigation", type: "NavGroup[]", required: true, description: "Sidebar navigation structure" },
    { name: "math", type: "boolean", required: false, default: "false", description: "Enable KaTeX math rendering" },
    { name: "banner", type: "BannerConfig", required: false, description: "Top-of-page announcement banner" },
  ]}
/>

\`\`\`mdx
<TypeTable
  name="TomeConfig"
  fields={[
    { name: "name", type: "string", required: true, description: "Site name" },
    { name: "theme", type: "ThemeConfig", default: '{ preset: "amber" }', description: "Theme settings" },
    { name: "math", type: "boolean", default: "false", description: "Enable KaTeX" },
  ]}
/>
\`\`\`

## FileTree

Visualize directory structures with collapsible folders:

<FileTree>
  <FileTree.Folder name="pages" defaultOpen>
    <FileTree.File name="index.md" />
    <FileTree.File name="quickstart.mdx" />
    <FileTree.Folder name="guides">
      <FileTree.File name="setup.md" />
      <FileTree.File name="deploy.md" />
    </FileTree.Folder>
  </FileTree.Folder>
  <FileTree.Folder name=".tome">
    <FileTree.File name="entry.tsx" />
  </FileTree.Folder>
  <FileTree.File name="tome.config.js" />
  <FileTree.File name="package.json" />
</FileTree>

\`\`\`mdx
<FileTree>
  <FileTree.Folder name="pages" defaultOpen>
    <FileTree.File name="index.md" />
    <FileTree.File name="quickstart.mdx" />
    <FileTree.Folder name="guides">
      <FileTree.File name="setup.md" />
      <FileTree.File name="deploy.md" />
    </FileTree.Folder>
  </FileTree.Folder>
  <FileTree.File name="tome.config.js" />
</FileTree>
\`\`\`

Click any folder to expand or collapse it. Use \`defaultOpen\` to start a folder in the expanded state.

## LinkCard

A card component that links to another page or URL. Use \`CardGrid\` to arrange multiple cards in a responsive grid.

<LinkCard title="Getting Started" description="Learn the basics of Tome" href="./quickstart" />

<CardGrid>
  <LinkCard title="Configuration" description="Customize your site" href="./configuration" />
  <LinkCard title="Theming" description="Change colors and fonts" href="./theming" />
  <LinkCard title="Components" description="Built-in MDX components" href="./components" />
</CardGrid>

\`\`\`mdx
<LinkCard title="Getting Started" description="Learn the basics of Tome" href="/quickstart" />

<CardGrid>
  <LinkCard title="Configuration" description="Customize your site" href="/configuration" />
  <LinkCard title="Theming" description="Change colors and fonts" href="/theming" />
  <LinkCard title="Components" description="Built-in MDX components" href="/components" />
</CardGrid>
\`\`\`

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| \`title\` | \`string\` | Yes | Card heading text |
| \`description\` | \`string\` | No | Short description below the title |
| \`href\` | \`string\` | Yes | Link destination (page path or URL) |

\`CardGrid\` renders children in a responsive 2–3 column grid.

## CodeSamples

Display tabbed code samples, typically used for showing API calls in multiple languages.

<CodeSamples
  samples={[
    { label: "cURL", language: "bash", code: 'curl -X GET https://api.example.com/users' },
    { label: "JavaScript", language: "js", code: 'const res = await fetch("https://api.example.com/users")' },
    { label: "Python", language: "python", code: 'requests.get("https://api.example.com/users")' },
  ]}
/>

\`\`\`mdx
<CodeSamples
  samples={[
    { label: "cURL", language: "bash", code: 'curl -X GET https://api.example.com/users' },
    { label: "JavaScript", language: "js", code: 'const res = await fetch("https://api.example.com/users")' },
    { label: "Python", language: "python", code: 'requests.get("https://api.example.com/users")' },
  ]}
/>
\`\`\`

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| \`samples\` | \`{ label: string, language: string, code: string }[]\` | Yes | Array of code samples to display as tabs |

## Using components

Components are only available in \`.mdx\` files. If your file uses the \`.md\` extension, rename it to \`.mdx\` to enable component support.

\`\`\`
pages/
├── index.md          # Standard Markdown only
├── quickstart.mdx    # Markdown + components
\`\`\`

No import statements are needed. Tome injects all built-in components automatically:

\`\`\`mdx
---
title: Getting Started
---

# Getting Started

<Callout type="tip" title="Prerequisites">
  Make sure you have Node.js 20+ installed.
</Callout>

<Steps>
  <Step title="Create project">
    Run \`npx @tomehq/cli init my-docs\`
  </Step>
  <Step title="Start dev server">
    Run \`npm run dev\`
  </Step>
</Steps>
\`\`\`
`},{id:"concepts/architecture",title:"Architecture",content:`
Tome is built on Vite and React. Understanding the architecture helps when debugging build issues or building advanced customizations.

## Overview

A Tome site is a Vite application with a custom plugin that handles page discovery, routing, and content processing. The theme package provides the React UI shell.

\`\`\`mermaid
flowchart LR
    A["tome.config.js"] --> B["Vite Plugin"]
    B --> C["Virtual Modules"]
    C --> D["Theme Shell"]
    D --> E["Static Site"]
\`\`\`

## Vite plugin

The core of Tome is \`vite-plugin-tome\` in \`@tomehq/core\`. It has three responsibilities:

**1. Page discovery** — On startup, the plugin scans \`pages/\` for \`.md\` and \`.mdx\` files, extracts frontmatter, and builds a route table. It watches for file changes during development and triggers hot reloads.

**2. Virtual modules** — The plugin exposes content through Vite's virtual module system:

| Module | Contents |
|--------|----------|
| \`virtual:tome/config\` | The resolved config as JSON |
| \`virtual:tome/routes\` | Route table with IDs, URLs, and frontmatter |
| \`virtual:tome/page/:id\` | Processed page content |
| \`virtual:tome/api\` | Parsed OpenAPI manifest |
| \`virtual:tome/analytics\` | Analytics provider settings |

**3. Build-time generation** — During builds, the plugin injects analytics scripts, JSON-LD schema markup, and generates machine-readable files (\`mcp.json\`, \`llms.txt\`, \`skill.md\`, \`robots.txt\`, \`search.json\`).

## Theme system

The theme package (\`@tomehq/theme\`) provides the React shell:

- **Shell component** — Header, sidebar, content area, footer
- **Preset system** — Color tokens and CSS variables per preset
- **Search integration** — Pagefind or Algolia, loaded dynamically
- **AI chat** — Optional floating widget

The entry point (\`.tome/entry.tsx\`) bootstraps the shell by importing \`@tomehq/theme/entry\`.

## Content pipeline

\`\`\`mermaid
flowchart TD
    A["pages/*.md"] --> B["gray-matter"]
    B --> C["Frontmatter"]
    B --> D["Markdown body"]
    D --> E["remark + rehype"]
    E --> F["Shiki highlighting"]
    F --> G["DOMPurify sanitize"]
    G --> H["HTML + headings"]

    I["pages/*.mdx"] --> J["Extract frontmatter"]
    J --> K["@mdx-js/rollup"]
    K --> L["React component"]
\`\`\`

### Markdown (\`.md\`)

1. Frontmatter extracted via \`gray-matter\`
2. Markdown processed through remark (GFM, math) and rehype (slugs, autolink headings)
3. Code blocks highlighted with Shiki (mermaid blocks converted to client-side placeholders)
4. HTML sanitized with DOMPurify, headings extracted for table of contents
5. HTML + headings + frontmatter served as virtual module

### MDX (\`.mdx\`)

1. Frontmatter and headings extracted from raw source
2. Custom remark plugins transform \`mermaid\` and \`math\` code blocks into JSX placeholder elements
3. File passed to \`@mdx-js/rollup\` for JSX compilation
4. Virtual module re-exports the compiled React component + metadata
5. Client-side: mermaid and KaTeX render the placeholders (same as \`.md\` files)

## Build output

\`\`\`text
out/
├── index.html           # SPA entry with JSON-LD schema
├── assets/
│   ├── index-[hash].js  # Application bundle
│   └── index-[hash].css # Styles
├── [page]/index.html    # Per-page HTML shells (SEO + Pagefind)
├── _pagefind/           # Search index
├── mcp.json             # MCP manifest
├── llms.txt             # AI-readable page index
├── llms-full.txt        # Full page content for LLMs
├── skill.md             # Agent capability file
├── robots.txt           # Crawler directives (AI-friendly)
├── search.json          # Structured page index (JSON API)
├── og/                  # Auto-generated Open Graph images
└── 404.html             # Error page
\`\`\`

The output is a single-page application with per-page HTML shells for SEO and search indexing. Each page shell contains the content in a \`data-pagefind-body\` div for Pagefind and a \`TechArticle\` JSON-LD schema in the \`<head>\`.

Six machine-readable files are auto-generated at build time to make your docs discoverable by AI tools, search engines, and language models — no configuration needed.

## Package structure

| Package | Purpose |
|---------|---------|
| \`@tomehq/cli\` | CLI commands (init, dev, build, deploy, mcp, typedoc) |
| \`@tomehq/core\` | Config, routing, Vite plugin, markdown processing, MCP server |
| \`@tomehq/theme\` | Shell UI, presets, search, AI chat |
| \`@tomehq/components\` | MDX components (Callout, Tabs, Card, etc.) |
| \`@tomehq/landing\` | Marketing landing page |
| \`@tomehq/dashboard\` | Tome Cloud dashboard |
`},{id:"concepts/file-routing",title:"File-System Routing",content:"\nEvery `.md` or `.mdx` file in the `pages/` directory becomes a page. The file path determines the URL.\n\n## Basic routing\n\n| File path | URL |\n|-----------|-----|\n| `pages/index.md` | `/` |\n| `pages/quickstart.md` | `/quickstart` |\n| `pages/guides/deployment.md` | `/guides/deployment` |\n| `pages/api/endpoints.md` | `/api/endpoints` |\n| `pages/api/index.md` | `/api` |\n\n**Rules:**\n\n- `index.md` serves at the directory's root path\n- File extensions are stripped from the URL\n- Directory nesting maps directly to URL segments\n\n## Page IDs\n\nEach page has an ID derived from its path relative to `pages/`:\n\n| File | Page ID |\n|------|---------|\n| `pages/index.md` | `index` |\n| `pages/quickstart.md` | `quickstart` |\n| `pages/guides/deployment.md` | `guides/deployment` |\n\nPage IDs are used in `navigation` config to control sidebar order.\n\n## Navigation vs. routing\n\nAll pages in `pages/` are routable regardless of whether they appear in `navigation`. Navigation only controls the sidebar.\n\nPages can be hidden from the sidebar using `hidden: true` in frontmatter while remaining accessible at their URL.\n\n## i18n routing\n\nWhen multiple locales are configured, organize pages by locale subdirectory:\n\n```text\npages/\n├── en/            # Default locale\n│   ├── index.md\n│   └── quickstart.md\n├── es/            # Spanish\n│   ├── index.md\n│   └── quickstart.md\n```\n\n| File | URL |\n|------|-----|\n| `pages/en/index.md` | `/` (default — no prefix) |\n| `pages/es/index.md` | `/es/` |\n| `pages/es/quickstart.md` | `/es/quickstart` |\n\nThe default locale serves at the root without a prefix. When `fallback: true` and a page doesn't exist in a non-default locale, the default version is used.\n\n## Versioned routing\n\nWhen versioning is configured:\n\n```text\npages/\n├── current/       # Latest version\n│   ├── index.md\n│   └── api.md\n├── v1.0/\n│   ├── index.md\n│   └── api.md\n```\n\n| File | URL |\n|------|-----|\n| `pages/current/index.md` | `/` |\n| `pages/v1.0/index.md` | `/v1.0/` |\n| `pages/v1.0/api.md` | `/v1.0/api` |\n\nThe `current` directory serves at the root. Older versions are prefixed.\n\n## File discovery\n\nTome discovers pages by scanning `pages/` for `**/*.{md,mdx}` files. Discovery runs at startup and again whenever files are added, removed, or renamed during development.\n"},{id:"configuration",title:"Configuration",content:`
All site configuration lives in \`tome.config.js\` (or \`.mjs\` / \`.ts\`) at your project root. Tome validates the config with Zod and provides clear error messages if anything is wrong.

## Minimal config

\`\`\`javascript
export default {
  name: "My Docs",
};
\`\`\`

This is all you need. Tome uses sensible defaults for everything else.

## Site metadata

\`\`\`javascript
export default {
  name: "My Docs",
  logo: "/logo.svg",        // Path relative to public/
  favicon: "/favicon.ico",  // Path relative to public/
  baseUrl: "https://docs.example.com",
};
\`\`\`

\`baseUrl\` is used for generating canonical URLs and analytics endpoints. It should be the full URL where your site is hosted.

## Navigation

The \`navigation\` array defines your sidebar structure. Each group has a label and a list of page IDs (filenames without extensions):

\`\`\`javascript
navigation: [
  {
    group: "Getting Started",
    pages: ["index", "quickstart"],
  },
  {
    group: "API",
    pages: ["api/authentication", "api/endpoints", "api/errors"],
  },
],
\`\`\`

Pages not listed in navigation still exist at their URL — they're just hidden from the sidebar.

### Nested groups

Groups can be nested for complex documentation structures:

\`\`\`javascript
navigation: [
  {
    group: "SDK",
    pages: [
      "sdk/overview",
      {
        group: "Languages",
        pages: ["sdk/javascript", "sdk/python", "sdk/go"],
      },
    ],
  },
],
\`\`\`

## Top navigation

Add links to the header bar:

\`\`\`javascript
topNav: [
  { label: "Blog", href: "https://blog.example.com" },
  { label: "Changelog", href: "/changelog" },
],
\`\`\`

## Theme

\`\`\`javascript
theme: {
  preset: "editorial",   // "amber" or "editorial"
  accent: "#ff6b4a",     // Custom accent color (hex)
  mode: "auto",          // "light", "dark", or "auto"
  fonts: {
    heading: "Playfair Display",
    body: "Source Sans Pro",
    code: "Fira Code",
  },
},
\`\`\`

See **[Theming](./theming)** for full customization details.

## Base path

If your docs are served under a subpath (e.g., \`example.com/docs/\`), set \`basePath\`:

\`\`\`javascript
basePath: "/docs/",
\`\`\`

This configures Vite's \`base\` option so all asset paths resolve correctly.

## Search

Pagefind is enabled by default with no configuration. To use Algolia DocSearch instead:

\`\`\`javascript
search: {
  provider: "algolia",
  appId: "YOUR_APP_ID",
  apiKey: "YOUR_SEARCH_KEY",
  indexName: "your-index",
},
\`\`\`

## Banner

Display an announcement banner at the top of every page:

<Callout type="tip" title="Live example">
  Look at the top of this page — the coral banner saying "New in v3" is a live banner configured in this site's \`tome.config.js\`.
</Callout>

\`\`\`javascript
banner: {
  text: "v2.0 is now available!",
  link: "/changelog",         // Optional — makes the text a link
  dismissible: true,          // Default: true — shows a close button
},
\`\`\`

When a user dismisses the banner, it stays hidden until you change the text. Updating the \`text\` value automatically shows the banner again for all users.

## Math rendering

Use \` \`\`\`math \` fenced code blocks for display math in both \`.md\` and \`.mdx\` files:

\`\`\`math
E = mc^2
\`\`\`

\`\`\`math
\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}
\`\`\`

Math is rendered client-side with KaTeX loaded from CDN — no dependencies to install, no config flag needed. Just write the code block and it works.

For \`.md\` files, you can also enable inline math with \`$E = mc^2$\` and display math with \`$$\` blocks by setting:

\`\`\`javascript
math: true,
\`\`\`

## Mermaid diagrams

Mermaid diagrams work out of the box with no configuration. Use a \`mermaid\` code fence in any \`.md\` or \`.mdx\` file:

\`\`\`mermaid
flowchart LR
    A["Write Markdown"] --> B["Tome builds"]
    B --> C["Beautiful docs"]
\`\`\`

\`\`\`mermaid
sequenceDiagram
    participant User
    participant Tome
    participant CDN
    User->>Tome: tome build
    Tome->>CDN: Deploy static files
    CDN-->>User: Fast docs site
\`\`\`

Diagrams are rendered client-side and automatically adapt to your site's light/dark theme. Colors, labels, and borders adjust for both light and dark mode with proper contrast.

## Agent-friendly output

Tome automatically generates six machine-readable files at build time — no configuration needed:

| File | Description |
|------|-------------|
| \`llms.txt\` | Page index with titles, descriptions, and URLs |
| \`llms-full.txt\` | Full raw Markdown content of all non-hidden pages |
| \`skill.md\` | Agent capability file — site structure, available resources, and usage instructions |
| \`robots.txt\` | Crawler directives — explicitly allows AI crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.) |
| \`search.json\` | Structured page index with titles, headings, tags, and word counts |
| \`mcp.json\` | MCP manifest with page metadata, headings, and optional content |

Every HTML page also gets **JSON-LD schema markup** injected into the \`<head>\`:
- \`WebSite\` schema on the homepage (with \`SearchAction\`)
- \`TechArticle\` schema on each documentation page

Hidden pages (with \`hidden: true\` in frontmatter) are excluded from all generated files.

## Full example

\`\`\`javascript
export default {
  name: "Acme Docs",
  logo: "/acme-logo.svg",
  favicon: "/favicon.ico",
  baseUrl: "https://docs.acme.com",
  theme: {
    preset: "editorial",
    accent: "#2563eb",
    mode: "auto",
  },
  navigation: [
    { group: "Overview", pages: ["index", "quickstart"] },
    { group: "Guides", pages: ["guides/auth", "guides/deploy"] },
    { group: "API", pages: ["api/rest", "api/webhooks"] },
  ],
  topNav: [
    { label: "Changelog", href: "/changelog" },
  ],
  search: { provider: "local" },
  banner: {
    text: "v2.0 is now available!",
    link: "/changelog",
    dismissible: true,
  },
  math: true,
};
\`\`\`
`},{id:"guides/api-reference",title:"API Reference Setup",content:`
Tome can generate a full API reference from an OpenAPI 3.x specification. The reference includes endpoint documentation, request/response schemas, and an interactive playground for testing endpoints.

## 1. Add your OpenAPI spec

Place your OpenAPI spec file (JSON or YAML) in your project:

\`\`\`text
my-docs/
├── openapi.yaml      # Your API spec
├── tome.config.js
└── pages/
\`\`\`

## 2. Configure Tome

Add the \`api\` section to your config:

\`\`\`javascript
export default {
  name: "My API Docs",
  api: {
    spec: "./openapi.yaml",
    playground: true,
    baseUrl: "https://api.example.com",
    auth: {
      type: "bearer",
      header: "Authorization",
    },
  },
};
\`\`\`

### Options

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| \`spec\` | string | — | Path to your OpenAPI spec file (required) |
| \`playground\` | boolean | \`true\` | Enable the interactive API playground |
| \`baseUrl\` | string | — | Base URL for playground requests |
| \`auth.type\` | string | — | Auth type: \`"bearer"\`, \`"apiKey"\`, or \`"oauth2"\` |
| \`auth.header\` | string | — | Header name for the auth token |

## 3. View the reference

Start the dev server and navigate to \`/api\`. Tome parses the spec and renders:

- **Endpoint groups** organized by OpenAPI tags
- **Request parameters** with types, descriptions, and required markers
- **Response schemas** with expandable nested objects
- **Code examples** for \`curl\`, JavaScript, and Python

## 4. Interactive playground

When \`playground: true\`, each endpoint includes a "Try It" panel where users can:

- Set path parameters and query strings
- Edit the request body with JSON validation
- Add authentication headers
- Send requests and view formatted responses

The playground sends requests directly from the browser, so CORS must be configured on your API server.

## Supported spec formats

Tome supports OpenAPI 3.0 and 3.1 specifications in JSON or YAML format. Swagger 2.x specs are not supported — convert them with tools like \`swagger2openapi\`.
`},{id:"guides/code-blocks",title:"Code Blocks",content:`
Tome uses [Shiki](https://shiki.style) for syntax highlighting. All standard fenced code blocks work out of the box with no configuration. This guide covers the additional features available on top of basic highlighting.

## Syntax highlighting

Use a language identifier after the opening fence:

\`\`\`javascript
const greeting = "hello";
console.log(greeting);
\`\`\`

Shiki supports [200+ languages](https://shiki.style/languages). Common identifiers: \`javascript\`, \`typescript\`, \`python\`, \`go\`, \`rust\`, \`bash\`, \`json\`, \`yaml\`, \`sql\`, \`graphql\`, \`html\`, \`css\`.

## Code block titles

Add a \`title\` attribute to show a filename or label above the code block:

\`\`\`javascript title="tome.config.js"
export default {
  name: "My Docs",
};
\`\`\`

The title renders as a label bar above the code, styled to match your theme.

## Line highlighting

Highlight specific lines using curly braces after the language:

\`\`\`javascript {2,4}
const a = 1;
const b = 2; // highlighted
const c = 3;
const d = 4; // highlighted
\`\`\`

Use ranges for consecutive lines:

\`\`\`javascript {1,3-5}
import { config } from "./config";  // highlighted

export function init() {   // highlighted
  config.load();            // highlighted
  config.validate();        // highlighted
}
\`\`\`

Highlighted lines receive a subtle background color that works in both light and dark mode.

## Line numbers

Show line numbers in the gutter with \`showLineNumbers\`:

\`\`\`typescript showLineNumbers
interface User {
  id: string;
  name: string;
  email: string;
}
\`\`\`

You can also use \`lineNumbers\` as an alias.

## Combining features

All meta attributes can be combined on a single code fence:

\`\`\`typescript title="types.ts" showLineNumbers {3-4}
interface Config {
  name: string;
  theme: ThemeOptions;   // highlighted
  plugins: Plugin[];     // highlighted
}
\`\`\`

## Twoslash (TypeScript hover types)

Twoslash renders TypeScript type information inline — the same hover popups you see in VS Code, but rendered statically in your docs. This is powerful for documenting TypeScript APIs where seeing inferred types matters.

\`\`\`\`markdown
\`\`\`ts twoslash
const user = {
  name: "Alice",
  age: 30,
};

user.name;
//   ^?
\`\`\`
\`\`\`\`

The \`^?\` marker tells Twoslash to show the inferred type at that position. In the rendered output, hovering over \`user.name\` displays \`(property) name: string\`.

### Setup

Twoslash requires an optional peer dependency:

\`\`\`bash
npm install @shikijs/twoslash
\`\`\`

If the package is not installed, Tome logs a warning and renders the code block without type annotations — your build won't break.

### Twoslash features

| Syntax | Effect |
|--------|--------|
| \`//  ^?\` | Show type at cursor position |
| \`// @errors: 2304\` | Expect and display a TypeScript error |
| \`// @noErrors\` | Suppress all TypeScript errors |
| \`// ---cut---\` | Hide code above this line (setup code) |

Example with hidden setup code:

\`\`\`\`markdown
\`\`\`ts twoslash
interface User {
  id: string;
  name: string;
}
// ---cut---
function greet(user: User) {
  return \`Hello, \${user.name}\`;
}
//              ^?
\`\`\`
\`\`\`\`

Only the code below \`---cut---\` is shown in the rendered output, but the \`User\` type is still available for inference.

## Copy button

Every code block includes a copy-to-clipboard button in the top-right corner. This is automatic — no configuration or markup needed.

## Diff highlighting

Show added and removed lines in code blocks using inline markers:

\`\`\`javascript
const config = {
  name: "My Docs",    // [!code --]
  name: "Acme Docs",  // [!code ++]
};
\`\`\`

Lines marked with \`// [!code --]\` are styled with a red background, and \`// [!code ++]\` with a green background. The markers are stripped from the rendered output.
`},{id:"guides/configuration",title:"Configuration",content:`
All site configuration lives in \`tome.config.js\` (or \`.mjs\` / \`.ts\`) at your project root. Tome validates the config with Zod and provides clear error messages if anything is wrong.

## Minimal config

\`\`\`javascript
export default {
  name: "My Docs",
};
\`\`\`

This is all you need. Tome uses sensible defaults for everything else.

## Site metadata

\`\`\`javascript
export default {
  name: "My Docs",
  logo: "/logo.svg",        // Path relative to public/
  favicon: "/favicon.ico",  // Path relative to public/
  baseUrl: "https://docs.example.com",
};
\`\`\`

\`baseUrl\` is used for generating canonical URLs and analytics endpoints. It should be the full URL where your site is hosted.

## Navigation

The \`navigation\` array defines your sidebar structure. Each group has a label and a list of page IDs (filenames without extensions):

\`\`\`javascript
navigation: [
  {
    group: "Getting Started",
    pages: ["index", "quickstart"],
  },
  {
    group: "API",
    pages: ["api/authentication", "api/endpoints", "api/errors"],
  },
],
\`\`\`

Pages not listed in navigation still exist at their URL — they're just hidden from the sidebar.

### Nested groups

Groups can be nested for complex documentation structures:

\`\`\`javascript
navigation: [
  {
    group: "SDK",
    pages: [
      "sdk/overview",
      {
        group: "Languages",
        pages: ["sdk/javascript", "sdk/python", "sdk/go"],
      },
    ],
  },
],
\`\`\`

## Top navigation

Add links to the header bar:

\`\`\`javascript
topNav: [
  { label: "Blog", href: "https://blog.example.com" },
  { label: "GitHub", href: "https://github.com/example/docs" },
],
\`\`\`

## Theme

See the [Custom theme guide](./guides/custom-theme) for full details.

\`\`\`javascript
theme: {
  preset: "editorial",   // "amber" or "editorial"
  accent: "#ff6b4a",     // Custom accent color (hex)
  mode: "auto",          // "light", "dark", or "auto"
  fonts: {
    heading: "Playfair Display",
    body: "Source Sans Pro",
    code: "Fira Code",
  },
},
\`\`\`

## Base path

If your docs are served under a subpath (e.g., \`example.com/docs/\`), set \`basePath\`:

\`\`\`javascript
basePath: "/docs/",
\`\`\`

This configures Vite's \`base\` option so all asset paths resolve correctly.

## Banner

Show an announcement at the top of every page:

<Callout type="tip" title="Live example">
  Look at the top of this page — the coral banner saying "New in v3" is a live banner configured in this site's \`tome.config.js\`.
</Callout>

\`\`\`javascript
banner: {
  text: "We just launched v2.0!",
  link: "/changelog",       // Optional — wraps text in a link
  dismissible: true,        // Default true — shows close button
},
\`\`\`

The banner uses your accent color as its background. When a user dismisses it, a hash of the text is saved to localStorage. Change the text to show the banner again for all users.

## Math / KaTeX

Use \` \`\`\`math \` fenced code blocks for display math in both \`.md\` and \`.mdx\` files:

\`\`\`math
E = mc^2
\`\`\`

\`\`\`math
\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}
\`\`\`

Math is rendered client-side with KaTeX loaded from CDN — no dependencies to install, no config flag needed. Just write the code block and it works.

For \`.md\` files, you can also enable inline math with \`$...$\` and display math with \`$$...$$\` blocks by setting:

\`\`\`javascript
math: true,
\`\`\`

## Mermaid diagrams

Mermaid diagrams require no configuration. Use a \`mermaid\` code fence in any page:

\`\`\`mermaid
flowchart LR
    A["Write Markdown"] --> B["Tome builds"]
    B --> C["Beautiful docs"]
\`\`\`

\`\`\`mermaid
sequenceDiagram
    participant User
    participant Tome
    participant CDN
    User->>Tome: tome build
    Tome->>CDN: Deploy static files
    CDN-->>User: Fast docs site
\`\`\`

Mermaid is loaded from a CDN on demand — no install needed. Diagrams adapt to your light/dark theme automatically.

## AI discoverability (llms.txt)

At build time, Tome automatically generates:

- **\`llms.txt\`** — Page index with titles, descriptions, and URLs
- **\`llms-full.txt\`** — Complete Markdown content of every non-hidden page

No configuration needed. Hidden pages (frontmatter \`hidden: true\`) are excluded. These files help AI assistants and language models understand your documentation.

## Full example

\`\`\`javascript
export default {
  name: "Acme Docs",
  logo: "/acme-logo.svg",
  favicon: "/favicon.ico",
  baseUrl: "https://docs.acme.com",
  theme: {
    preset: "editorial",
    accent: "#2563eb",
    mode: "auto",
  },
  navigation: [
    { group: "Overview", pages: ["index", "quickstart"] },
    { group: "Guides", pages: ["guides/auth", "guides/deploy"] },
    { group: "API", pages: ["api/rest", "api/webhooks"] },
  ],
  topNav: [
    { label: "GitHub", href: "https://github.com/acme/docs" },
  ],
  search: { provider: "local" },
};
\`\`\`

See the [Config reference](./reference/config) for every available field.
`},{id:"guides/content-sources",title:"Content Sources",content:`
Content sources let you pull documentation from external services — GitHub repos, Notion databases, or custom APIs — and merge them with your local pages at build time. Remote pages are treated exactly like local files: they appear in navigation, search, and the route manifest.

## Configuration

Add content sources to the \`contentSources\` array in your config:

\`\`\`javascript
import { githubSource, notionSource } from "@tomehq/core/content-source";

export default {
  name: "My Docs",
  contentSources: [
    githubSource({
      owner: "acme",
      repo: "sdk-docs",
      path: "docs",
    }),
  ],
};
\`\`\`

## GitHub source

Pull \`.md\` and \`.mdx\` files from a GitHub repository:

\`\`\`javascript
import { githubSource } from "@tomehq/core/content-source";

githubSource({
  owner: "acme",          // GitHub org or user
  repo: "sdk-docs",       // Repository name
  branch: "main",         // Branch to pull from (default: "main")
  path: "docs",           // Directory within the repo (default: "docs")
  token: process.env.GH_TOKEN,  // Optional — required for private repos
})
\`\`\`

The source fetches the repo tree via the GitHub API, then downloads each \`.md\` / \`.mdx\` file from the specified path. File paths within the directory become page IDs — \`docs/getting-started.md\` becomes the page ID \`getting-started\`.

### Private repositories

For private repos, pass a GitHub personal access token (classic or fine-grained) with \`contents:read\` permission:

\`\`\`javascript
githubSource({
  owner: "acme",
  repo: "internal-docs",
  token: process.env.GH_TOKEN,
})
\`\`\`

## Notion source

Pull pages from a Notion database:

\`\`\`javascript
import { notionSource } from "@tomehq/core/content-source";

notionSource({
  databaseId: "abc123...",           // Notion database ID
  apiKey: process.env.NOTION_TOKEN,  // Notion integration token
})
\`\`\`

Each page in the database is converted to Markdown:

- The page title becomes the \`title\` frontmatter field
- Headings, paragraphs, lists, code blocks, quotes, and dividers are converted
- Bold, italic, code, and link annotations are preserved
- The title is slugified to create the page ID (\`Getting Started\` becomes \`getting-started\`)

### Setting up the Notion integration

1. Go to [notion.so/my-integrations](https://www.notion.so/my-integrations) and create a new integration
2. Copy the integration token
3. Share your database with the integration (click "..." on the database, then "Connections")

## Custom content sources

Use \`defineContentSource\` to create your own source with full type checking:

\`\`\`javascript
import { defineContentSource } from "@tomehq/core/content-source";

const apiSource = defineContentSource({
  name: "my-api",

  async fetchPages() {
    const res = await fetch("https://api.example.com/docs");
    const data = await res.json();

    return data.pages.map((page) => ({
      id: page.slug,
      content: \`---\\ntitle: \${page.title}\\n---\\n\\n\${page.body}\`,
      format: "md",
      lastModified: page.updatedAt,
    }));
  },
});
\`\`\`

Each page must return:

| Field | Type | Description |
|-------|------|-------------|
| \`id\` | \`string\` | Page identifier (used for URL and navigation) |
| \`content\` | \`string\` | Raw Markdown/MDX including frontmatter |
| \`format\` | \`"md"\` or \`"mdx"\` | File format |
| \`lastModified\` | \`string?\` | ISO 8601 date (optional) |

Custom sources can also implement an optional \`watch\` method for development mode — return a cleanup function to stop watching:

\`\`\`javascript
defineContentSource({
  name: "polling-api",
  async fetchPages() { /* ... */ },

  watch(onChange) {
    const interval = setInterval(async () => {
      const pages = await this.fetchPages();
      onChange(pages);
    }, 30000); // Poll every 30 seconds

    return () => clearInterval(interval);
  },
});
\`\`\`

## Using multiple sources

You can combine any number of content sources. Remote pages are merged with local files — if a remote page has the same ID as a local page, the local page takes priority.

\`\`\`javascript
import { githubSource, notionSource } from "@tomehq/core/content-source";

export default {
  name: "My Docs",
  contentSources: [
    githubSource({ owner: "acme", repo: "sdk-docs", path: "docs" }),
    notionSource({ databaseId: "abc123", apiKey: process.env.NOTION_TOKEN }),
  ],
};
\`\`\`

Content is fetched once at build time (and on startup in dev mode). Failed sources log a warning but don't block the build — your local pages will still work.

## External group in the sidebar

When you use an explicit \`navigation\` array in your config, remote pages that are **not** listed in the navigation will automatically appear under an "External" group at the bottom of the sidebar. This ensures fetched content is always accessible even if you haven't manually added every remote page to your navigation config. If you want full control over placement, add the remote page IDs to your \`navigation\` array and they will appear in the specified group instead.
`},{id:"guides/custom-theme",title:"Custom Theme",content:`
Tome ships with two theme presets and extensive customization options. Every visual aspect — colors, fonts, spacing — can be adjusted through configuration or CSS variables.

## Presets

Choose between two built-in presets:

### Amber (default)

A warm, approachable aesthetic with golden accent tones. Good for developer documentation and technical guides.

\`\`\`javascript
theme: {
  preset: "amber",
}
\`\`\`

### Editorial

A refined, high-contrast aesthetic inspired by Swiss poster design and literary magazines. Features serif headings and a more dramatic visual presence.

\`\`\`javascript
theme: {
  preset: "editorial",
}
\`\`\`

See [Theme presets reference](./reference/theme-presets) for the exact color values.

## Accent color

Override the preset's accent color with any hex value:

\`\`\`javascript
theme: {
  preset: "amber",
  accent: "#2563eb",  // Blue accent instead of amber
}
\`\`\`

Tome derives tint and dim variants automatically from your accent color.

## Color mode

Control dark/light mode behavior:

| Value | Behavior |
|-------|----------|
| \`"auto"\` | Follows system preference (default) |
| \`"light"\` | Always light mode |
| \`"dark"\` | Always dark mode |

Users can toggle the mode using the theme switch in the header.

## Custom fonts

Override any font family. Make sure to add the appropriate \`<link>\` tag to \`index.html\` if using custom Google Fonts.

\`\`\`javascript
theme: {
  fonts: {
    heading: "Playfair Display",
    body: "Source Sans Pro",
    code: "Fira Code",
  },
}
\`\`\`

## CSS variables

For fine-grained control, override CSS variables in a custom stylesheet. The key variables are:

| Variable | Description |
|----------|-------------|
| \`--ac\` | Accent color |
| \`--acD\` | Accent dark variant |
| \`--acT\` | Accent tint |
| \`--bg\` | Page background |
| \`--sf\` | Surface (cards, sidebar) |
| \`--sfH\` | Surface hover state |
| \`--bd\` | Border color |
| \`--tx\` | Primary text |
| \`--tx2\` | Secondary text |
| \`--txM\` | Muted text |

See the [Theme presets reference](./reference/theme-presets) for the complete variable list with values per preset.

## Border radius

Adjust the global border radius:

\`\`\`javascript
theme: {
  radius: "4px",   // Sharper corners
  radius: "12px",  // Rounder corners
}
\`\`\`
`},{id:"guides/draft-pages",title:"Draft Pages",content:`
Tome supports draft pages — content that is visible during local development but automatically excluded from production builds. This is useful for work-in-progress content, internal notes, or pages you want to preview before publishing.

## Marking a page as a draft

Add \`draft: true\` to the page's frontmatter:

\`\`\`markdown
---
title: Upcoming Feature
draft: true
---

This page is a work in progress. It won't appear in production.
\`\`\`

That's it. No other configuration is needed.

## How drafts behave

### Development (\`tome dev\`)

Draft pages are **included** in development. They appear in the sidebar navigation and are fully routable. A yellow banner is shown at the top of the page:

> Draft — This page is only visible in development

This makes it easy to tell at a glance which pages are drafts while you work.

### Production (\`tome build\`)

Draft pages are **excluded** from production builds:

- Removed from the sidebar navigation
- Removed from the route manifest (no URL is generated)
- Excluded from \`llms.txt\` and \`search.json\`
- Not included in the page loader bundle

If someone navigates to a draft page's URL in production, they'll get a 404.

## Use cases

**Work-in-progress content.** Start writing a new guide and set \`draft: true\`. Preview it locally, share the dev URL with teammates, then remove the flag when it's ready.

**Internal notes.** Keep internal-only pages (runbooks, architecture decisions) as permanent drafts so they never leak into the public site.

**Staged launches.** Write docs for an upcoming feature ahead of time. When the feature ships, remove \`draft: true\` from all related pages and redeploy.

## Combining with \`hidden\`

Drafts and hidden pages are different:

| Frontmatter | Dev sidebar | Dev URL | Prod sidebar | Prod URL |
|-------------|-------------|---------|-------------- |----------|
| *(default)* | Visible | Works | Visible | Works |
| \`hidden: true\` | Hidden | Works | Hidden | Works |
| \`draft: true\` | Visible | Works | Hidden | 404 |

Use \`hidden\` for pages that should exist in production but not appear in navigation (e.g., linked from other pa`}],bg={};function xg(s){return s>=200&&s<300?"#22c55e":s>=400&&s<500?"#f59e0b":s>=500?"#ef4444":"#6b7280"}function Sg(s,h,f,c){let v=h;for(const[z,w]of Object.entries(f))v=v.replace(`{${z}}`,encodeURIComponent(w));const _=new URL(v,s);for(const[z,w]of Object.entries(c))w&&_.searchParams.set(z,w);return _.toString()}function Tg(s){return s==="bearer"?"Authorization":"X-API-Key"}const Fs={width:"100%",padding:"6px 10px",border:"1px solid var(--bd)",borderRadius:4,background:"var(--bg)",color:"var(--tx)",fontSize:13,fontFamily:"var(--font-code, monospace)",boxSizing:"border-box"};function Js({param:s,value:h,onChange:f}){return r.jsxs("div",{style:{marginBottom:10},children:[r.jsxs("label",{style:{display:"block",fontSize:12,fontWeight:600,marginBottom:3,color:"var(--tx)"},children:[s.name,s.required&&r.jsx("span",{style:{color:"#ef4444",marginLeft:2},children:"*"}),r.jsxs("span",{style:{fontWeight:400,color:"var(--txM)",marginLeft:6,fontSize:11},children:[s.in," · ",s.type]})]}),r.jsx("input",{"data-testid":`param-input-${s.name}`,style:Fs,placeholder:s.description||s.name,value:h,onChange:c=>f(c.target.value)})]})}function _g({endpoint:s,baseUrl:h,auth:f}){var de;const[c,v]=q.useState(!1),[_,z]=q.useState({}),[w,E]=q.useState((de=s.requestBody)!=null&&de.schema?JSON.stringify(s.requestBody.schema,null,2):""),[y,V]=q.useState(""),[R,F]=q.useState(!1),[ne,xe]=q.useState(null),[we,ze]=q.useState(null),[P,$]=q.useState(!1),ue=(ee,_e)=>z(ae=>({...ae,[ee]:_e})),U=s.parameters.filter(ee=>ee.in==="path"),Y=s.parameters.filter(ee=>ee.in==="query"),X=s.parameters.filter(ee=>ee.in==="header"),L=s.requestBody!=null,ce=async()=>{F(!0),xe(null),ze(null);const ee={};for(const Me of U)ee[Me.name]=_[Me.name]||"";const _e={};for(const Me of Y)_[Me.name]&&(_e[Me.name]=_[Me.name]);const ae={};for(const Me of X)_[Me.name]&&(ae[Me.name]=_[Me.name]);if(L&&(ae["Content-Type"]="application/json"),f&&y){const Me=f.header||Tg(f.type);ae[Me]=f.type==="bearer"?`Bearer ${y}`:y}try{const Me=Sg(h,s.path,ee,_e),ot=Date.now(),he=await fetch(Me,{method:s.method.toUpperCase(),headers:ae,body:L&&w?w:void 0}),j=Date.now()-ot,k={};he.headers.forEach((Te,m)=>{k[m]=Te});let K;if((he.headers.get("content-type")||"").includes("json")){const Te=await he.json();K=JSON.stringify(Te,null,2)}else K=await he.text();xe({status:he.status,statusText:he.statusText,headers:k,body:K,time:j})}catch(Me){ze(Me instanceof Error?Me.message:"Network error")}finally{F(!1)}};return r.jsxs("div",{"data-testid":"api-playground",style:{border:"1px solid var(--bd)",borderRadius:6,overflow:"hidden",marginTop:8},children:[r.jsxs("button",{"data-testid":"playground-toggle",onClick:()=>v(!c),style:{display:"flex",alignItems:"center",gap:8,width:"100%",padding:"10px 14px",background:"var(--sf)",border:"none",cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:600,color:"var(--ac)"},children:[r.jsx("span",{style:{fontSize:14},children:c?"▼":"▶"}),"Try it out"]}),c&&r.jsxs("div",{style:{padding:"14px 16px",borderTop:"1px solid var(--bd)"},children:[f&&r.jsxs("div",{style:{marginBottom:12},children:[r.jsx("label",{style:{display:"block",fontSize:12,fontWeight:600,marginBottom:3,color:"var(--tx)"},children:f.type==="bearer"?"Bearer Token":"API Key"}),r.jsx("input",{"data-testid":"auth-input",type:"password",style:Fs,placeholder:f.type==="bearer"?"Enter bearer token":"Enter API key",value:y,onChange:ee=>V(ee.target.value)})]}),U.length>0&&r.jsxs("div",{style:{marginBottom:4},children:[r.jsx("div",{style:{fontSize:11,fontWeight:700,textTransform:"uppercase",color:"var(--txM)",marginBottom:6,letterSpacing:"0.05em"},children:"Path Parameters"}),U.map(ee=>r.jsx(Js,{param:ee,value:_[ee.name]||"",onChange:_e=>ue(ee.name,_e)},ee.name))]}),Y.length>0&&r.jsxs("div",{style:{marginBottom:4},children:[r.jsx("div",{style:{fontSize:11,fontWeight:700,textTransform:"uppercase",color:"var(--txM)",marginBottom:6,letterSpacing:"0.05em"},children:"Query Parameters"}),Y.map(ee=>r.jsx(Js,{param:ee,value:_[ee.name]||"",onChange:_e=>ue(ee.name,_e)},ee.name))]}),X.length>0&&r.jsxs("div",{style:{marginBottom:4},children:[r.jsx("div",{style:{fontSize:11,fontWeight:700,textTransform:"uppercase",color:"var(--txM)",marginBottom:6,letterSpacing:"0.05em"},children:"Header Parameters"}),X.map(ee=>r.jsx(Js,{param:ee,value:_[ee.name]||"",onChange:_e=>ue(ee.name,_e)},ee.name))]}),L&&r.jsxs("div",{style:{marginBottom:12},children:[r.jsx("label",{style:{display:"block",fontSize:12,fontWeight:600,marginBottom:3,color:"var(--tx)"},children:"Request Body"}),r.jsx("textarea",{"data-testid":"request-body",style:{...Fs,minHeight:100,resize:"vertical",lineHeight:1.5},value:w,onChange:ee=>E(ee.target.value)})]}),r.jsx("button",{"data-testid":"send-request",onClick:ce,disabled:R,style:{padding:"8px 20px",borderRadius:4,border:"none",background:"var(--ac)",color:"#fff",fontWeight:600,fontSize:13,cursor:R?"wait":"pointer",opacity:R?.7:1,fontFamily:"inherit"},children:R?"Sending...":"Send Request"}),we&&r.jsx("div",{"data-testid":"playground-error",style:{marginTop:12,padding:"10px 14px",borderRadius:4,background:"#ef444418",border:"1px solid #ef444444",color:"#ef4444",fontSize:13},children:we}),ne&&r.jsxs("div",{"data-testid":"playground-response",style:{marginTop:12},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:8},children:[r.jsxs("span",{"data-testid":"response-status",style:{padding:"2px 10px",borderRadius:4,fontSize:13,fontWeight:700,fontFamily:"var(--font-code, monospace)",color:"#fff",background:xg(ne.status)},children:[ne.status," ",ne.statusText]}),r.jsxs("span",{style:{fontSize:12,color:"var(--txM)"},children:[ne.time,"ms"]})]}),r.jsxs("button",{"data-testid":"toggle-headers",onClick:()=>$(!P),style:{display:"flex",alignItems:"center",gap:4,background:"none",border:"none",cursor:"pointer",fontSize:12,color:"var(--txM)",padding:"4px 0",fontFamily:"inherit",marginBottom:4},children:[r.jsx("span",{style:{transform:P?"rotate(90deg)":"rotate(0)",transition:"transform 0.15s"},children:"▶"}),"Response Headers"]}),P&&r.jsx("pre",{style:{background:"var(--sf)",padding:10,borderRadius:4,fontSize:11,fontFamily:"var(--font-code, monospace)",overflow:"auto",lineHeight:1.5,marginBottom:8,color:"var(--tx2)",margin:"0 0 8px 0"},children:Object.entries(ne.headers).map(([ee,_e])=>`${ee}: ${_e}`).join(`
`)}),r.jsx("pre",{"data-testid":"response-body",style:{background:"var(--cdBg)",color:"var(--cdTx)",padding:14,borderRadius:6,fontSize:12,fontFamily:"var(--font-code, monospace)",overflow:"auto",lineHeight:1.6,margin:0,maxHeight:400},children:ne.body})]})]})]})}function pm({samples:s}){var c;const[h,f]=q.useState(0);return s.length===0?null:r.jsxs("div",{"data-testid":"code-samples",style:{border:"1px solid var(--bd)",borderRadius:8,overflow:"hidden"},children:[r.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--bd)",background:"var(--sf)",overflowX:"auto",WebkitOverflowScrolling:"touch"},children:s.map((v,_)=>r.jsx("button",{onClick:()=>f(_),style:{padding:"8px 16px",fontSize:13,fontWeight:500,background:_===h?"var(--cdBg)":"transparent",color:_===h?"var(--tx)":"var(--tx2)",border:"none",borderBottom:_===h?"2px solid var(--ac)":"2px solid transparent",cursor:"pointer",fontFamily:"var(--font-body)",whiteSpace:"nowrap"},children:v.label},v.language))}),r.jsx("pre",{style:{margin:0,padding:16,background:"var(--cdBg)",overflow:"auto"},children:r.jsx("code",{style:{fontSize:13,fontFamily:"var(--font-code)"},children:(c=s[h])==null?void 0:c.code})})]})}const hm={get:"#22c55e",post:"#3b82f6",put:"#f59e0b",delete:"#ef4444",patch:"#a78bfa",head:"#6b7280",options:"#6b7280"};function Ag({method:s}){const h=hm[s.toLowerCase()]||"#6b7280";return r.jsx("span",{"data-testid":"method-badge",style:{display:"inline-block",padding:"2px 8px",borderRadius:4,fontSize:11,fontWeight:700,fontFamily:"var(--font-code, monospace)",textTransform:"uppercase",color:"#fff",background:h,letterSpacing:"0.05em"},children:s.toUpperCase()})}function Eg({parameters:s}){return s.length===0?null:r.jsx("div",{style:{overflowX:"auto",marginBottom:16},children:r.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:13,lineHeight:1.5},children:[r.jsx("thead",{children:r.jsxs("tr",{style:{borderBottom:"2px solid var(--bd)",textAlign:"left"},children:[r.jsx("th",{style:{padding:"8px 12px",fontWeight:600,color:"var(--tx)"},children:"Name"}),r.jsx("th",{style:{padding:"8px 12px",fontWeight:600,color:"var(--tx)"},children:"Type"}),r.jsx("th",{style:{padding:"8px 12px",fontWeight:600,color:"var(--tx)"},children:"In"}),r.jsx("th",{style:{padding:"8px 12px",fontWeight:600,color:"var(--tx)"},children:"Required"}),r.jsx("th",{style:{padding:"8px 12px",fontWeight:600,color:"var(--tx)"},children:"Description"})]})}),r.jsx("tbody",{children:s.map((h,f)=>r.jsxs("tr",{style:{borderBottom:"1px solid var(--bd)"},children:[r.jsx("td",{style:{padding:"8px 12px",fontFamily:"var(--font-code, monospace)",fontWeight:500,color:h.in==="path"?"var(--ac)":"var(--tx)"},children:h.name}),r.jsx("td",{style:{padding:"8px 12px",fontFamily:"var(--font-code, monospace)",color:"var(--tx2)"},children:h.type}),r.jsx("td",{style:{padding:"8px 12px",color:"var(--txM)"},children:r.jsx("span",{style:{padding:"1px 6px",borderRadius:3,fontSize:11,background:h.in==="path"?"var(--ac)22":"var(--sf)",color:h.in==="path"?"var(--ac)":"var(--txM)"},children:h.in})}),r.jsx("td",{style:{padding:"8px 12px"},children:h.required?r.jsx("span",{"data-testid":"required-badge",style:{padding:"1px 6px",borderRadius:3,fontSize:11,fontWeight:600,background:"#ef444422",color:"#ef4444"},children:"required"}):r.jsx("span",{style:{color:"var(--txM)",fontSize:12},children:"optional"})}),r.jsx("td",{style:{padding:"8px 12px",color:"var(--tx2)"},children:h.description||"—"})]},`${h.name}-${f}`))})]})})}function jg({requestBody:s}){return r.jsxs("div",{style:{marginBottom:16},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:8},children:[r.jsx("span",{style:{padding:"2px 8px",borderRadius:4,fontSize:11,fontFamily:"var(--font-code, monospace)",background:"var(--sf)",color:"var(--tx2)"},children:s.contentType}),s.required&&r.jsx("span",{style:{padding:"1px 6px",borderRadius:3,fontSize:11,fontWeight:600,background:"#ef444422",color:"#ef4444"},children:"required"})]}),s.description&&r.jsx("p",{style:{fontSize:13,color:"var(--tx2)",marginBottom:8,marginTop:0},children:s.description}),s.schema&&r.jsx("pre",{style:{background:"var(--cdBg)",color:"var(--cdTx)",padding:16,borderRadius:6,fontSize:12,fontFamily:"var(--font-code, monospace)",overflow:"auto",lineHeight:1.6,margin:0},children:JSON.stringify(s.schema,null,2)})]})}function zg(s){return s.startsWith("2")?"#22c55e":s.startsWith("4")?"#f59e0b":s.startsWith("5")?"#ef4444":"#6b7280"}function Mg({responses:s}){return s.length===0?null:r.jsx("div",{style:{marginBottom:16},children:s.map((h,f)=>{const c=zg(h.statusCode);return r.jsxs("div",{style:{border:"1px solid var(--bd)",borderRadius:6,marginBottom:8,overflow:"hidden"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"10px 14px",background:"var(--sf)"},children:[r.jsx("span",{"data-testid":"status-badge",style:{padding:"2px 8px",borderRadius:4,fontSize:12,fontWeight:700,fontFamily:"var(--font-code, monospace)",color:"#fff",background:c},children:h.statusCode}),r.jsx("span",{style:{fontSize:13,color:"var(--tx2)"},children:h.description})]}),h.schema&&r.jsx("pre",{style:{background:"var(--cdBg)",color:"var(--cdTx)",padding:14,fontSize:12,fontFamily:"var(--font-code, monospace)",overflow:"auto",lineHeight:1.6,margin:0,borderTop:"1px solid var(--bd)"},children:JSON.stringify(h.schema,null,2)})]},`${h.statusCode}-${f}`)})})}function Cg(s,h){const f=h+s.path,c=[`curl -X ${s.method.toUpperCase()} "${f}"`],v=s.parameters.filter(_=>_.in==="header");for(const _ of v)c.push(`  -H "${_.name}: <value>"`);return s.requestBody&&(c.push(`  -H "Content-Type: ${s.requestBody.contentType}"`),s.requestBody.schema&&c.push(`  -d '${JSON.stringify(s.requestBody.schema,null,2)}'`)),c.join(` \\
`)}function Dg(s,h){var z;const f=h+s.path,c=[];c.push(`  method: "${s.method.toUpperCase()}",`);const v={},_=s.parameters.filter(w=>w.in==="header");for(const w of _)v[w.name]="<value>";return s.requestBody&&(v["Content-Type"]=s.requestBody.contentType),Object.keys(v).length>0&&c.push(`  headers: ${JSON.stringify(v,null,4).replace(/\n/g,`
  `)},`),(z=s.requestBody)!=null&&z.schema&&c.push(`  body: JSON.stringify(${JSON.stringify(s.requestBody.schema,null,4).replace(/\n/g,`
  `)}),`),`fetch("${f}", {
${c.join(`
`)}
});`}function Og(s,h){var w,E;const f=h+s.path,c=["import requests",""],v={},_=s.parameters.filter(y=>y.in==="header");for(const y of _)v[y.name]="<value>";s.requestBody&&(v["Content-Type"]=s.requestBody.contentType),Object.keys(v).length>0&&(c.push(`headers = ${JSON.stringify(v,null,4)}`),c.push("")),(w=s.requestBody)!=null&&w.schema&&(c.push(`data = ${JSON.stringify(s.requestBody.schema,null,4)}`),c.push(""));const z=[`"${f}"`];return Object.keys(v).length>0&&z.push("headers=headers"),(E=s.requestBody)!=null&&E.schema&&z.push("json=data"),c.push(`response = requests.${s.method}(${z.join(", ")})`),c.push("print(response.json())"),c.join(`
`)}function wg(s,h){var _,z;const f=h+s.path,c=["package main","","import (",'  "fmt"','  "net/http"'];(_=s.requestBody)!=null&&_.schema&&c.push('  "bytes"','  "encoding/json"'),c.push('  "io"',")",""),c.push("func main() {"),(z=s.requestBody)!=null&&z.schema?(c.push(`  body, _ := json.Marshal(${JSON.stringify(s.requestBody.schema)})`),c.push(`  req, _ := http.NewRequest("${s.method.toUpperCase()}", "${f}", bytes.NewBuffer(body))`)):c.push(`  req, _ := http.NewRequest("${s.method.toUpperCase()}", "${f}", nil)`);const v=s.parameters.filter(w=>w.in==="header");for(const w of v)c.push(`  req.Header.Set("${w.name}", "<value>")`);return s.requestBody&&c.push(`  req.Header.Set("Content-Type", "${s.requestBody.contentType}")`),c.push("  resp, _ := http.DefaultClient.Do(req)"),c.push("  defer resp.Body.Close()"),c.push("  data, _ := io.ReadAll(resp.Body)"),c.push("  fmt.Println(string(data))"),c.push("}"),c.join(`
`)}function Rg(s,h){var _;const f=h+s.path,c=["import java.net.http.*;","import java.net.URI;","","var client = HttpClient.newHttpClient();"];(_=s.requestBody)!=null&&_.schema?(c.push(`var body = ${JSON.stringify(JSON.stringify(s.requestBody.schema))};`),c.push("var request = HttpRequest.newBuilder()"),c.push(`  .uri(URI.create("${f}"))`),c.push(`  .method("${s.method.toUpperCase()}", HttpRequest.BodyPublishers.ofString(body))`)):(c.push("var request = HttpRequest.newBuilder()"),c.push(`  .uri(URI.create("${f}"))`),c.push(`  .method("${s.method.toUpperCase()}", HttpRequest.BodyPublishers.noBody())`));const v=s.parameters.filter(z=>z.in==="header");for(const z of v)c.push(`  .header("${z.name}", "<value>")`);return s.requestBody&&c.push(`  .header("Content-Type", "${s.requestBody.contentType}")`),c.push("  .build();"),c.push(""),c.push("var response = client.send(request, HttpResponse.BodyHandlers.ofString());"),c.push("System.out.println(response.body());"),c.join(`
`)}function Ug(s,h){var _;const f=h+s.path,c=["using var client = new HttpClient();","",`var request = new HttpRequestMessage(HttpMethod.${s.method.charAt(0).toUpperCase()+s.method.slice(1)}, "${f}");`],v=s.parameters.filter(z=>z.in==="header");for(const z of v)c.push(`request.Headers.Add("${z.name}", "<value>");`);return(_=s.requestBody)!=null&&_.schema&&(c.push("request.Content = new StringContent("),c.push(`  ${JSON.stringify(JSON.stringify(s.requestBody.schema))},`),c.push("  System.Text.Encoding.UTF8,"),c.push(`  "${s.requestBody.contentType}");`)),c.push(""),c.push("var response = await client.SendAsync(request);"),c.push("var body = await response.Content.ReadAsStringAsync();"),c.push("Console.WriteLine(body);"),c.join(`
`)}function Bg({endpoint:s,baseUrl:h="https://api.example.com"}){const[f,c]=q.useState(0),v=["cURL","JavaScript","Python","Go","Java","C#"],_=[Cg(s,h),Dg(s,h),Og(s,h),wg(s,h),Rg(s,h),Ug(s,h)];return r.jsxs("div",{style:{marginBottom:16},children:[r.jsx("div",{style:{display:"flex",gap:0,borderBottom:"1px solid var(--bd)",overflowX:"auto",WebkitOverflowScrolling:"touch"},children:v.map((z,w)=>r.jsx("button",{onClick:()=>c(w),style:{padding:"6px 14px",background:"none",border:"none",borderBottom:f===w?"2px solid var(--ac)":"2px solid transparent",color:f===w?"var(--ac)":"var(--txM)",fontWeight:f===w?600:400,fontSize:12,cursor:"pointer",fontFamily:"inherit",whiteSpace:"nowrap"},children:z},z))}),r.jsx("pre",{style:{background:"var(--cdBg)",color:"var(--cdTx)",padding:16,borderRadius:"0 0 6px 6px",fontSize:12,fontFamily:"var(--font-code, monospace)",overflow:"auto",lineHeight:1.6,margin:0},children:_[f]})]})}function kg({endpoint:s,baseUrl:h,defaultExpanded:f=!1,showPlayground:c,playgroundAuth:v}){const[_,z]=q.useState(f),w=(s.operationId||`${s.method}-${s.path}`).toLowerCase().replace(/[^a-z0-9]+/g,"-"),E=s.parameters.length>0||s.requestBody!=null||s.responses.length>0;return r.jsxs("div",{id:w,style:{border:"1px solid var(--bd)",borderRadius:8,marginBottom:12,overflow:"hidden",scrollMarginTop:24},children:[r.jsxs("button",{onClick:()=>E&&z(!_),style:{display:"flex",alignItems:"center",gap:10,width:"100%",padding:"14px 18px",background:"var(--sf)",border:"none",cursor:E?"pointer":"default",textAlign:"left",fontFamily:"inherit",color:"var(--tx)"},children:[r.jsx(Ag,{method:s.method}),r.jsx("span",{style:{fontFamily:"var(--font-code, monospace)",fontSize:14,fontWeight:500},children:s.path}),s.deprecated&&r.jsx("span",{"data-testid":"deprecated-badge",style:{padding:"1px 6px",borderRadius:3,fontSize:10,fontWeight:700,background:"#f59e0b33",color:"#f59e0b",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Deprecated"}),s.tags.map(y=>r.jsx("span",{style:{padding:"1px 6px",borderRadius:3,fontSize:10,background:"var(--bd)",color:"var(--txM)"},children:y},y)),r.jsx("span",{style:{flex:1}}),s.summary&&r.jsx("span",{style:{fontSize:13,color:"var(--tx2)",marginRight:8},children:s.summary}),E&&r.jsx("span",{style:{transform:_?"rotate(180deg)":"rotate(0)",transition:"transform 0.2s",fontSize:12,color:"var(--txM)"},children:"▾"})]}),_&&r.jsxs("div",{style:{padding:"16px 18px",borderTop:"1px solid var(--bd)"},children:[s.description&&r.jsx("p",{style:{fontSize:14,color:"var(--tx2)",lineHeight:1.65,marginTop:0,marginBottom:16},children:s.description}),s.parameters.length>0&&r.jsxs("div",{style:{marginBottom:16},children:[r.jsx("h4",{style:{fontSize:13,fontWeight:600,marginBottom:8,color:"var(--tx)"},children:"Parameters"}),r.jsx(Eg,{parameters:s.parameters})]}),s.requestBody&&r.jsxs("div",{style:{marginBottom:16},children:[r.jsx("h4",{style:{fontSize:13,fontWeight:600,marginBottom:8,color:"var(--tx)"},children:"Request Body"}),r.jsx(jg,{requestBody:s.requestBody})]}),s.responses.length>0&&r.jsxs("div",{style:{marginBottom:16},children:[r.jsx("h4",{style:{fontSize:13,fontWeight:600,marginBottom:8,color:"var(--tx)"},children:"Responses"}),r.jsx(Mg,{responses:s.responses})]}),r.jsxs("div",{children:[r.jsx("h4",{style:{fontSize:13,fontWeight:600,marginBottom:8,color:"var(--tx)"},children:"Code Examples"}),s.codeSamples&&s.codeSamples.length>0?r.jsx(pm,{samples:s.codeSamples}):r.jsx(Bg,{endpoint:s,baseUrl:h})]}),c&&r.jsx("div",{style:{marginTop:16},children:r.jsx(_g,{endpoint:s,baseUrl:h||"https://api.example.com",auth:v})})]})]})}function qg({manifest:s,baseUrl:h,showPlayground:f,playgroundAuth:c}){const v=h||(s.servers.length>0?s.servers[0].url:"https://api.example.com"),_=new Map;for(const E of s.endpoints){const y=E.tags.length>0?E.tags[0]:"Other";_.has(y)||_.set(y,[]),_.get(y).push(E)}const z=[];for(const E of s.tags)_.has(E.name)&&z.push(E.name);for(const E of _.keys())z.includes(E)||z.push(E);const w=new Map;for(const E of s.tags)w.set(E.name,E.description);return r.jsxs("div",{style:{display:"flex",gap:32},children:[r.jsxs("nav",{"data-testid":"api-toc",style:{width:200,flexShrink:0,position:"sticky",top:24,alignSelf:"flex-start",maxHeight:"calc(100vh - 48px)",overflowY:"auto"},children:[r.jsx("div",{style:{fontSize:11,fontWeight:700,textTransform:"uppercase",color:"var(--txM)",marginBottom:12,letterSpacing:"0.05em"},children:"Endpoints"}),z.map(E=>{const y=E.toLowerCase().replace(/\s+/g,"-");return r.jsxs("div",{style:{marginBottom:14},children:[r.jsx("a",{href:`#${y}`,onClick:V=>{var R;V.preventDefault(),(R=document.getElementById(y))==null||R.scrollIntoView({behavior:"smooth",block:"start"})},style:{display:"block",fontSize:13,fontWeight:600,color:"var(--tx)",textDecoration:"none",marginBottom:4},children:E}),(_.get(E)||[]).map(V=>{const R=(V.operationId||`${V.method}-${V.path}`).toLowerCase().replace(/[^a-z0-9]+/g,"-");return r.jsxs("a",{href:`#${R}`,onClick:F=>{var ne;F.preventDefault(),(ne=document.getElementById(R))==null||ne.scrollIntoView({behavior:"smooth",block:"start"})},style:{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"var(--tx2)",textDecoration:"none",padding:"3px 0"},children:[r.jsx("span",{style:{fontSize:9,fontWeight:700,fontFamily:"var(--font-code, monospace)",color:hm[V.method]||"#6b7280",width:36,textTransform:"uppercase"},children:V.method}),r.jsx("span",{style:{fontFamily:"var(--font-code, monospace)"},children:V.path})]},`${V.method}-${V.path}`)})]},E)})]}),r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsxs("div",{style:{marginBottom:32},children:[r.jsx("h1",{style:{fontSize:28,fontWeight:700,marginBottom:4},children:s.title}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:8},children:[r.jsxs("span",{style:{padding:"2px 8px",borderRadius:4,fontSize:11,fontWeight:600,background:"var(--sf)",color:"var(--txM)"},children:["v",s.version]}),s.servers.length>0&&r.jsx("span",{style:{fontSize:12,fontFamily:"var(--font-code, monospace)",color:"var(--tx2)"},children:s.servers[0].url})]}),s.description&&r.jsx("p",{style:{fontSize:14,color:"var(--tx2)",lineHeight:1.65,marginTop:0},children:s.description})]}),z.map(E=>r.jsxs("section",{id:E.toLowerCase().replace(/\s+/g,"-"),"data-testid":"tag-section",style:{marginBottom:40},children:[r.jsx("h2",{style:{fontSize:20,fontWeight:700,marginBottom:4},children:E}),w.get(E)&&r.jsx("p",{style:{fontSize:14,color:"var(--tx2)",lineHeight:1.65,marginTop:0,marginBottom:16},children:w.get(E)}),(_.get(E)||[]).map(y=>r.jsx(kg,{endpoint:y,baseUrl:v,showPlayground:f,playgroundAuth:c},`${y.method}-${y.path}`))]},E))]})]})}function Lg({href:s,title:h,description:f,icon:c,external:v}){const _=v??s.startsWith("http");return r.jsxs("a",{href:s,target:_?"_blank":void 0,rel:_?"noopener noreferrer":void 0,style:{display:"block",padding:"16px 20px",border:"1px solid var(--bd)",borderRadius:8,textDecoration:"none",color:"inherit",background:"var(--sf)",transition:"border-color 0.15s, background 0.15s",cursor:"pointer"},onMouseEnter:z=>{z.currentTarget.style.borderColor="var(--ac)",z.currentTarget.style.background="var(--sfH)"},onMouseLeave:z=>{z.currentTarget.style.borderColor="var(--bd)",z.currentTarget.style.background="var(--sf)"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[c&&r.jsx("span",{style:{fontSize:18},children:c}),r.jsx("span",{style:{fontWeight:600,fontSize:15,color:"var(--tx)"},children:h}),r.jsx("span",{style:{marginLeft:"auto",color:"var(--tx2)",fontSize:14},children:_?"↗":"→"})]}),f&&r.jsx("p",{style:{margin:"6px 0 0",fontSize:13,color:"var(--tx2)",lineHeight:1.5},children:f})]})}function Hg({columns:s=2,children:h}){return r.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${s}, 1fr)`,gap:12,marginTop:16,marginBottom:16},children:h})}const Ng={Added:"#22c55e",Changed:"#3b82f6",Deprecated:"#f59e0b",Removed:"#ef4444",Fixed:"#8b5cf6",Security:"#f97316"};function im(s){return Ng[s]||"#6b7280"}function Gg({entries:s,initialLimit:h}){const[f,c]=q.useState(!h),v=f?s:s.slice(0,h||s.length);return s.length===0?r.jsx("div",{"data-testid":"changelog-empty",style:{padding:"40px 0",textAlign:"center",color:"var(--txM)",fontSize:14},children:"No changelog entries found."}):r.jsxs("div",{"data-testid":"changelog-timeline",style:{position:"relative"},children:[r.jsx("div",{style:{position:"absolute",left:15,top:8,bottom:8,width:2,background:"var(--bd)"}}),v.map((_,z)=>r.jsxs("div",{"data-testid":`changelog-entry-${_.version}`,style:{position:"relative",paddingLeft:44,paddingBottom:z<v.length-1?32:0},children:[r.jsx("div",{style:{position:"absolute",left:8,top:6,width:16,height:16,borderRadius:"50%",background:_.version==="Unreleased"?"var(--txM)":"var(--ac)",border:"3px solid var(--bg, #1a1a1a)"}}),r.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:12,marginBottom:12},children:[r.jsx("span",{style:{fontSize:18,fontWeight:700,color:"var(--tx)",fontFamily:"var(--font-heading, inherit)"},children:_.url?r.jsx("a",{href:_.url,target:"_blank",rel:"noopener noreferrer",style:{color:"inherit",textDecoration:"none"},children:_.version}):_.version}),_.date&&r.jsx("span",{style:{fontSize:13,color:"var(--txM)",fontFamily:"var(--font-code, monospace)"},children:_.date})]}),_.sections.map(w=>r.jsxs("div",{style:{marginBottom:16},children:[r.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:6,marginBottom:8},children:[r.jsx("span",{style:{display:"inline-block",width:8,height:8,borderRadius:"50%",background:im(w.type)}}),r.jsx("span",{style:{fontSize:12,fontWeight:600,textTransform:"uppercase",letterSpacing:".06em",color:im(w.type),fontFamily:"var(--font-code, monospace)"},children:w.type})]}),r.jsx("ul",{style:{margin:0,paddingLeft:18,listStyleType:"disc",color:"var(--tx2)"},children:w.items.map((E,y)=>r.jsx("li",{style:{fontSize:14,lineHeight:1.7,color:"var(--tx2)",marginBottom:2},children:E},y))})]},w.type))]},_.version)),!f&&s.length>(h||0)&&r.jsx("div",{style:{textAlign:"center",marginTop:24},children:r.jsxs("button",{"data-testid":"changelog-show-more",onClick:()=>c(!0),style:{background:"none",border:"1px solid var(--bd)",borderRadius:2,padding:"8px 20px",color:"var(--tx2)",fontSize:13,fontFamily:"var(--font-body, inherit)",cursor:"pointer",transition:"border-color .15s, color .15s"},children:["Show all ",s.length," releases"]})})]})}const om={info:{color:"#3b82f6",label:"INFO"},warning:{color:"#f59e0b",label:"WARNING"},tip:{color:"var(--ac, #a78bfa)",label:"TIP"},danger:{color:"#ef4444",label:"DANGER"}};function Vg({type:s="info",title:h,children:f}){const c=om[s]||om.info;return r.jsxs("div",{style:{borderLeft:`3px solid ${c.color}`,background:`${c.color}11`,borderRadius:"0 2px 2px 0",padding:"14px 18px",marginBottom:20},children:[h?r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:4},children:[r.jsx("span",{style:{fontWeight:700,fontSize:10,letterSpacing:".08em",color:c.color,fontFamily:"var(--font-code, monospace)"},children:c.label}),r.jsx("span",{style:{fontWeight:600,fontSize:13,color:c.color},children:h})]}):r.jsx("div",{style:{marginBottom:4},children:r.jsx("span",{style:{fontWeight:700,fontSize:10,letterSpacing:".08em",color:c.color,fontFamily:"var(--font-code, monospace)"},children:c.label})}),r.jsx("div",{style:{fontSize:14,lineHeight:1.65,color:"var(--tx2)"},children:f})]})}function Yg({items:s,children:h}){const[f,c]=q.useState(0);return r.jsxs("div",{style:{marginBottom:20},children:[r.jsx("div",{style:{display:"flex",gap:0,borderBottom:"1px solid var(--bd)"},children:s.map((v,_)=>r.jsx("button",{onClick:()=>c(_),style:{padding:"8px 16px",background:"none",border:"none",borderBottom:f===_?"2px solid var(--ac)":"2px solid transparent",color:f===_?"var(--ac)":"var(--txM)",fontWeight:f===_?600:400,fontSize:13,cursor:"pointer",fontFamily:"inherit"},children:v},_))}),r.jsx("div",{style:{padding:"16px 0"},children:h[f]})]})}function Xg({title:s,icon:h,href:f,children:c}){const v=r.jsxs("div",{style:{border:"1px solid var(--bd)",borderRadius:2,padding:"20px",transition:"border-color 0.15s",cursor:f?"pointer":"default"},children:[h&&r.jsx("span",{style:{fontSize:24,marginBottom:8,display:"block"},children:h}),r.jsx("div",{style:{fontWeight:600,fontSize:14,marginBottom:4},children:s}),c&&r.jsx("div",{style:{fontSize:13,color:"var(--txM)",lineHeight:1.5},children:c})]});return f?r.jsx("a",{href:f,style:{textDecoration:"none",color:"inherit"},children:v}):v}function Qg({cols:s=2,children:h}){return r.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${s}, 1fr)`,gap:12,marginBottom:20},children:h})}function Zg({children:s}){return r.jsx("div",{style:{paddingLeft:24,borderLeft:"2px solid var(--bd)",marginBottom:20},children:sm.Children.map(s,(h,f)=>r.jsxs("div",{style:{position:"relative",paddingBottom:20},children:[r.jsx("div",{style:{position:"absolute",left:-33,top:0,width:20,height:20,borderRadius:"50%",background:"var(--ac)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700},children:f+1}),r.jsx("div",{style:{paddingLeft:8},children:h})]}))})}function Kg({title:s,children:h}){const[f,c]=q.useState(!1);return r.jsxs("div",{style:{border:"1px solid var(--bd)",borderRadius:2,marginBottom:8,overflow:"hidden"},children:[r.jsxs("button",{onClick:()=>c(!f),style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"12px 16px",background:"var(--sf)",border:"none",cursor:"pointer",fontWeight:500,fontSize:14,color:"var(--tx)",fontFamily:"inherit"},children:[s,r.jsx("span",{style:{transform:f?"rotate(180deg)":"rotate(0)",transition:"transform 0.2s"},children:"▾"})]}),f&&r.jsx("div",{style:{padding:"12px 16px",borderTop:"1px solid var(--bd)",fontSize:14,color:"var(--tx2)",lineHeight:1.65},children:h})]})}const Jg={install:{npm:"npm install",yarn:"yarn add",pnpm:"pnpm add",bun:"bun add"},"install -D":{npm:"npm install -D",yarn:"yarn add -D",pnpm:"pnpm add -D",bun:"bun add -d"},uninstall:{npm:"npm uninstall",yarn:"yarn remove",pnpm:"pnpm remove",bun:"bun remove"},run:{npm:"npm run",yarn:"yarn",pnpm:"pnpm",bun:"bun run"},exec:{npm:"npx",yarn:"yarn dlx",pnpm:"pnpm dlx",bun:"bunx"},init:{npm:"npm init",yarn:"yarn init",pnpm:"pnpm init",bun:"bun init"},create:{npm:"npm create",yarn:"yarn create",pnpm:"pnpm create",bun:"bun create"}};function Pg(s,h){for(const[f,c]of Object.entries(Jg))if(s.startsWith(f+" ")||s===f){const v=s.slice(f.length);return(c[h]||f)+v}return`${h} ${s}`}function Fg({command:s}){const[h,f]=q.useState(0),[c,v]=q.useState(!1),_=["npm","yarn","pnpm","bun"],z=Pg(s,_[h]);return r.jsxs("div",{style:{border:"1px solid var(--bd)",borderRadius:2,marginBottom:16,overflow:"hidden"},children:[r.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--bd)",background:"var(--sf)",overflowX:"auto"},children:_.map((w,E)=>r.jsx("button",{onClick:()=>{f(E),v(!1)},style:{padding:"8px 14px",background:"none",border:"none",cursor:"pointer",fontSize:12,fontFamily:"var(--font-code)",fontWeight:E===h?600:400,color:E===h?"var(--ac)":"var(--txM)",borderBottom:E===h?"2px solid var(--ac)":"2px solid transparent",whiteSpace:"nowrap"},children:w},w))}),r.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"10px 14px",background:"var(--cdBg)",gap:8},children:[r.jsx("code",{style:{flex:1,fontFamily:"var(--font-code)",fontSize:13,color:"var(--cdTx)",whiteSpace:"pre",overflowX:"auto"},children:z}),r.jsx("button",{onClick:()=>{var w;(w=navigator.clipboard)==null||w.writeText(z),v(!0),setTimeout(()=>v(!1),2e3)},style:{background:"none",border:"none",cursor:"pointer",color:"var(--txM)",fontSize:12,fontFamily:"var(--font-code)",flexShrink:0},children:c?"✓":"Copy"})]})]})}function Wg({name:s,fields:h}){return r.jsxs("div",{style:{marginBottom:16},children:[s&&r.jsx("h4",{style:{fontFamily:"var(--font-code)",fontSize:15,marginBottom:8,color:"var(--tx)"},children:s}),r.jsx("div",{style:{overflowX:"auto",WebkitOverflowScrolling:"touch"},children:r.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:13,fontFamily:"var(--font-body)"},children:[r.jsx("thead",{children:r.jsx("tr",{style:{borderBottom:"2px solid var(--bd)"},children:["Property","Type","Required","Default","Description"].map(f=>r.jsx("th",{style:{textAlign:"left",padding:"8px 10px",color:"var(--txM)",fontWeight:600,fontSize:11,textTransform:"uppercase",letterSpacing:".05em",whiteSpace:"nowrap"},children:f},f))})}),r.jsx("tbody",{children:h.map(f=>r.jsxs("tr",{style:{borderBottom:"1px solid var(--bd)"},children:[r.jsx("td",{style:{padding:"8px 10px",fontFamily:"var(--font-code)",fontWeight:500,color:"var(--tx)"},children:f.name}),r.jsx("td",{style:{padding:"8px 10px",fontFamily:"var(--font-code)",fontSize:12,color:"var(--ac)"},children:f.type}),r.jsx("td",{style:{padding:"8px 10px"},children:f.required&&r.jsx("span",{style:{fontSize:10,fontWeight:600,color:"#e04040",background:"rgba(224,64,64,0.1)",padding:"2px 6px",borderRadius:2},children:"required"})}),r.jsx("td",{style:{padding:"8px 10px",fontFamily:"var(--font-code)",fontSize:12,color:"var(--txM)"},children:f.default||"—"}),r.jsx("td",{style:{padding:"8px 10px",color:"var(--tx2)"},children:f.description||""})]},f.name))})]})})]})}function Ig({name:s}){return r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"3px 0",fontFamily:"var(--font-code)",fontSize:13,color:"var(--tx2)"},children:[r.jsx("span",{style:{opacity:.6},children:"📄"})," ",s]})}function $g({name:s,defaultOpen:h,children:f}){const[c,v]=q.useState(h??!1);return r.jsxs("div",{children:[r.jsxs("button",{onClick:()=>v(!c),style:{display:"flex",alignItems:"center",gap:6,padding:"3px 0",background:"none",border:"none",cursor:"pointer",fontFamily:"var(--font-code)",fontSize:13,color:"var(--tx)",fontWeight:500},children:[r.jsx("span",{children:c?"📂":"📁"})," ",s]}),c&&r.jsx("div",{style:{paddingLeft:18,borderLeft:"1px solid var(--bd)",marginLeft:8},children:f})]})}function Is({children:s}){return r.jsx("div",{style:{border:"1px solid var(--bd)",borderRadius:2,padding:"12px 16px",background:"var(--cdBg)",marginBottom:16},children:s})}Is.File=Ig;Is.Folder=$g;const e0={Callout:Vg,Tabs:Yg,Card:Xg,CardGroup:Qg,Steps:Zg,Accordion:Kg,ChangelogTimeline:Gg,PackageManager:Fg,TypeTable:Wg,FileTree:Is,CodeSamples:pm,LinkCard:Lg,CardGrid:Hg},t0=`
  @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,700&family=Fira+Code:wght@400;500;600&display=swap');

  html, body { margin: 0; padding: 0; height: 100%; overflow: hidden; }
  #tome-root { height: 100%; overflow: hidden; }

  .tome-content h1 { display: none; }
  .tome-content h2 { font-family: var(--font-body); font-size: 1.35em; font-weight: 600; margin-top: 2em; margin-bottom: 0.5em; display: flex; align-items: center; gap: 10px; letter-spacing: 0.01em; }
  .tome-content h2::before { content: "#"; font-family: var(--font-heading); font-size: 1.2em; font-weight: 300; font-style: italic; color: var(--ac); opacity: 0.5; }
  .tome-content h3 { font-family: var(--font-body); font-size: 1.15em; font-weight: 600; margin-top: 1.5em; margin-bottom: 0.5em; }
  .tome-content h4 { font-family: var(--font-body); font-size: 1.05em; font-weight: 600; margin-top: 1.2em; margin-bottom: 0.5em; }
  .tome-content p { color: var(--tx2); line-height: 1.8; margin-bottom: 1em; font-size: 14.5px; }
  .tome-content a { color: var(--ac); text-decoration: none; }
  .tome-content a:hover { text-decoration: underline; }
  .tome-content .heading-anchor { display: none; }
  .tome-content ul, .tome-content ol { color: var(--tx2); padding-inline-start: 1.5em; margin-bottom: 1em; }
  .tome-content li { margin-bottom: 0.3em; line-height: 1.7; }
  .tome-content code { font-family: var(--font-code); font-size: 0.88em; background: var(--cdBg); padding: 0.15em 0.4em; border-radius: 2px; color: var(--ac); }
  .tome-content pre { margin-bottom: 1.2em; border-radius: 2px; overflow-x: auto; border: 1px solid var(--bd); }
  .tome-content pre code { background: none; padding: 1em 1.2em; display: block; font-size: 12.5px; line-height: 1.7; color: var(--cdTx); }
  .tome-content blockquote { border-inline-start: 3px solid var(--ac); padding: 0.5em 1em; margin: 1em 0; background: var(--acD); border-radius: 0 2px 2px 0; }
  .tome-content blockquote p { color: var(--tx2); margin: 0; }
  .tome-content table { width: 100%; border-collapse: collapse; margin-bottom: 1em; }
  .tome-content th, .tome-content td { padding: 0.5em 0.8em; border: 1px solid var(--bd); text-align: start; font-size: 0.9em; }
  .tome-content th { background: var(--sf); font-weight: 600; }
  .tome-content img { max-width: 100%; border-radius: 2px; cursor: zoom-in; }
  .tome-content hr { border: none; border-top: 1px solid var(--bd); margin: 2em 0; }
  .tome-mermaid { margin: 1.2em 0; text-align: center; overflow-x: auto; }
  .tome-mermaid svg { max-width: 100%; height: auto; overflow: visible; }
  .tome-mermaid svg .nodeLabel { overflow: visible; white-space: nowrap; }
  /* Ensure mermaid text meets WCAG AA contrast in light mode */
  /* Mermaid v11 uses foreignObject with inline-styled spans — !important needed */
  html:not(.dark) .tome-mermaid svg .nodeLabel,
  html:not(.dark) .tome-mermaid svg .nodeLabel span,
  html:not(.dark) .tome-mermaid svg .nodeLabel div,
  html:not(.dark) .tome-mermaid svg foreignObject div,
  html:not(.dark) .tome-mermaid svg foreignObject span { color: #1a1a1a !important; }
  html:not(.dark) .tome-mermaid svg .edgeLabel,
  html:not(.dark) .tome-mermaid svg .edgeLabel span { color: #333 !important; }
  html:not(.dark) .tome-mermaid svg text { fill: #1a1a1a !important; }
  html:not(.dark) .tome-mermaid svg .node rect,
  html:not(.dark) .tome-mermaid svg .node polygon { stroke: #555 !important; }
  /* Dark mode: force bright text in mermaid nodes for readability */
  html.dark .tome-mermaid svg .nodeLabel,
  html.dark .tome-mermaid svg .nodeLabel span,
  html.dark .tome-mermaid svg .nodeLabel div,
  html.dark .tome-mermaid svg foreignObject div,
  html.dark .tome-mermaid svg foreignObject span { color: #f0f0f0 !important; }
  html.dark .tome-mermaid svg .edgeLabel,
  html.dark .tome-mermaid svg .edgeLabel span { color: #ddd !important; }
  html.dark .tome-mermaid svg text { fill: #f0f0f0 !important; }

  /* Mobile responsive content */
  @media (max-width: 767px) {
    .tome-content h2 { font-size: 1.2em; margin-top: 1.5em; }
    .tome-content h3 { font-size: 1.05em; }
    .tome-content pre code { font-size: 12px; padding: 0.8em 1em; }
    .tome-content table { display: block; overflow-x: auto; -webkit-overflow-scrolling: touch; }
    .tome-content blockquote { margin: 0.8em 0; }
  }

  /* Selection style */
  ::selection { background: var(--acD); color: var(--ac); }

  /* Scrollbar style */
  ::-webkit-scrollbar { width: 5px; height: 5px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: var(--bd); border-radius: 10px; }

  /* Grain overlay */
  .tome-grain::before {
    content: ""; position: fixed; inset: 0; z-index: 9999; pointer-events: none;
    opacity: .35;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
    background-repeat: repeat; background-size: 256px;
  }

  /* ── Expressive code blocks ───────────────────────────── */

  /* Code block wrapper (for titled blocks) */
  .tome-code-block-wrapper { position: relative; margin-bottom: 1.2em; border: 1px solid var(--bd); border-radius: 2px; overflow: hidden; }
  .tome-code-block-wrapper pre { margin-bottom: 0; border: none; border-radius: 0; }
  .tome-code-title {
    font-family: var(--font-code); font-size: 12px; color: var(--tx2);
    background: var(--sf); padding: 6px 12px; border-bottom: 1px solid var(--bd);
    letter-spacing: 0.01em; font-weight: 500;
  }

  /* Line highlighting */
  .tome-content pre .line.tome-line-highlight {
    background: rgba(139, 148, 158, 0.1);
    display: inline-block; width: 100%; margin: 0 -1.2em; padding: 0 1.2em;
  }
  html.dark .tome-content pre .line.tome-line-highlight {
    background: rgba(200, 210, 220, 0.08);
  }

  /* Diff lines */
  .tome-content pre .line.tome-line-added {
    background: rgba(34, 197, 94, 0.12);
    display: inline-block; width: 100%; margin: 0 -1.2em; padding: 0 1.2em;
  }
  .tome-content pre .line.tome-line-removed {
    background: rgba(239, 68, 68, 0.12);
    display: inline-block; width: 100%; margin: 0 -1.2em; padding: 0 1.2em;
  }
  html.dark .tome-content pre .line.tome-line-added { background: rgba(34, 197, 94, 0.15); }
  html.dark .tome-content pre .line.tome-line-removed { background: rgba(239, 68, 68, 0.15); }

  /* Line numbers (CSS counter) */
  .tome-content pre[data-line-numbers] code {
    counter-reset: line;
  }
  .tome-content pre[data-line-numbers] .line::before {
    counter-increment: line;
    content: counter(line);
    display: inline-block; width: 2.5em; margin-inline-end: 1em;
    text-align: end; color: var(--txM); opacity: 0.4;
    font-size: 0.85em; user-select: none;
    border-inline-end: 1px solid var(--bd); padding-inline-end: 0.8em; margin-inline-end: 0.8em;
  }

  /* Word highlighting */
  .tome-word-highlight {
    background: rgba(139, 148, 158, 0.2); border-radius: 2px;
    padding: 1px 3px; margin: 0 -1px;
  }
  html.dark .tome-word-highlight {
    background: rgba(200, 210, 220, 0.15);
  }

  /* Copy button */
  .tome-content pre { position: relative; }
  .tome-copy-btn {
    position: absolute; top: 8px; inset-inline-end: 8px;
    font-family: var(--font-code); font-size: 11px;
    color: var(--tx2); background: var(--sf); border: 1px solid var(--bd);
    padding: 3px 8px; border-radius: 2px; cursor: pointer;
    opacity: 0; transition: opacity 0.15s;
    z-index: 2; line-height: 1.4;
  }
  .tome-content pre:hover .tome-copy-btn,
  .tome-copy-btn:focus { opacity: 1; }
  .tome-copy-btn:hover { background: var(--sfH); }

  /* Shiki dual-theme support */
  .shiki { background: var(--cdBg) !important; }

  /* Dark mode: switch Shiki tokens from light-theme inline colors to --shiki-dark CSS vars */
  html.dark .shiki,
  html.dark .shiki span {
    color: var(--shiki-dark) !important;
  }

  /* Brighten dim comment tokens (github-dark #6A737D is too low-contrast on dark backgrounds) */
  html.dark .shiki span[style*="--shiki-dark:#6A737D"] {
    --shiki-dark: #a0aab5 !important;
  }

  /* Light mode: darken low-contrast github-light tokens for WCAG AA on --cdBg backgrounds */
  html:not(.dark) .shiki span[style*="color:#6A737D"] { color: #57606a !important; }
  html:not(.dark) .shiki span[style*="color:#E36209"] { color: #b35405 !important; }
  html:not(.dark) .shiki span[style*="color:#6F42C1"] { color: #5a32a3 !important; }
  html:not(.dark) .shiki span[style*="color:#22863A"] { color: #1a6e2e !important; }
  html:not(.dark) .shiki span[style*="color:#D73A49"] { color: #b62324 !important; }
  html:not(.dark) .shiki span[style*="color:#005CC5"] { color: #0349b4 !important; }

  /* ── Twoslash type hover tooltips ───────────────────── */
  .twoslash-hover {
    position: relative;
    border-bottom: 1px dotted var(--tx2);
    cursor: help;
  }
  .twoslash-popup-container {
    position: absolute;
    opacity: 0;
    display: none;
    z-index: 10;
    left: 0;
    top: 100%;
    margin-top: 4px;
    padding: 6px 10px;
    background: var(--sf);
    border: 1px solid var(--bd);
    border-radius: 6px;
    font-size: 12px;
    font-family: var(--font-code);
    color: var(--tx);
    white-space: pre-wrap;
    max-width: 500px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    pointer-events: none;
  }
  .twoslash-hover:hover .twoslash-popup-container {
    opacity: 1;
    display: block;
  }
  /* Twoslash error/warning underlines */
  .twoslash-error {
    position: relative;
    background: rgba(239, 68, 68, 0.1);
    border-bottom: 2px wavy rgba(239, 68, 68, 0.6);
  }
  /* Twoslash highlighted identifiers */
  .twoslash-highlighted {
    background: rgba(139, 148, 158, 0.15);
    border-radius: 2px;
    padding: 1px 2px;
  }
  /* Twoslash type annotation line (^?) */
  .twoslash-popup-code .shiki { background: transparent !important; padding: 0; margin: 0; }
  .twoslash-popup-code .shiki code { padding: 0; font-size: 12px; }
  html.dark .twoslash-popup-container {
    background: var(--sf);
    border-color: var(--bd);
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  }
`,Do=(Jn.basePath||"/").replace(/\/$/,"");function n0(s){return dm(s,Do,Pn)}function Ps(s){return fg(s,Do,Pn)}const gm=pg(window.location.pathname,window.location.hash,Pn,Do,dm),a0=fm(gm,Pn,mm);function l0(){var ze,P,$,ue;const[s,h]=q.useState(gm),[f,c]=q.useState(null),[v,_]=q.useState(!0),z=q.useCallback(async(U,Y)=>{_(!0),h(U);const X=Ps(U);Y!=null&&Y.replace?window.history.replaceState(null,"",X):window.history.pushState(null,"",X);const L=await fm(U,Pn,mm);if(c(L),_(!1),!(Y!=null&&Y.skipScroll)){const ce=window.location.hash.slice(1);ce?requestAnimationFrame(()=>{const de=document.getElementById(ce);de&&de.scrollIntoView({behavior:"smooth",block:"start"})}):window.scrollTo(0,0)}},[]);q.useEffect(()=>{const U=window.location.hash.slice(1);if(U&&Pn.some(Y=>Y.id===U)){const Y=Ps(U);window.history.replaceState(null,"",Y),z(U,{replace:!0})}else{const Y=Ps(s);window.history.replaceState(null,"",Y),a0.then(X=>{c(X),_(!1)})}},[]),q.useEffect(()=>{const U=()=>{const Y=n0(window.location.pathname);Y&&Y!==s&&z(Y,{replace:!0,skipScroll:!0})};return window.addEventListener("popstate",U),()=>window.removeEventListener("popstate",U)},[s,z]);const w=q.useRef(null),[E,y]=q.useState(()=>{var Y,X;if(typeof document>"u")return"light";if(document.documentElement.classList.contains("dark"))return"dark";const U=((Y=Jn.theme)==null?void 0:Y.mode)||"auto";return U==="dark"?"dark":U==="light"?"light":(X=window.matchMedia)!=null&&X.call(window,"(prefers-color-scheme: dark)").matches?"dark":"light"});q.useEffect(()=>{const U=new MutationObserver(()=>{const Y=document.documentElement.classList.contains("dark");y(Y?"dark":"light")});return U.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),()=>U.disconnect()},[]),q.useEffect(()=>{const U=document.querySelectorAll(".tome-mermaid[data-mermaid]");if(U.length===0)return;let Y=!1;const X="https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs";return(async()=>{try{w.current||(w.current=(await import(X)).default);const L=w.current;if(Y)return;const ce=E==="dark",de=getComputedStyle(document.documentElement).getPropertyValue("--font-body").trim()||"sans-serif";L.initialize({startOnLoad:!1,theme:ce?"dark":"default",fontFamily:de,flowchart:{padding:15,nodeSpacing:30,rankSpacing:40}});for(let ee=0;ee<U.length;ee++){const _e=U[ee],ae=_e.getAttribute("data-mermaid");if(ae)try{const Me=atob(ae),{svg:ot}=await L.render(`tome-mermaid-${ee}-${Date.now()}`,Me);Y||(_e.innerHTML=ot)}catch(Me){console.warn("[tome] Mermaid render failed:",Me),_e.textContent="Diagram rendering failed",_e.style.cssText="padding:16px;color:var(--txM);font-size:13px;border:1px dashed var(--bd);border-radius:2px;text-align:center;"}}}catch(L){console.warn("[tome] Failed to load mermaid from CDN:",L),U.forEach(ce=>{ce.textContent="Failed to load diagram renderer",ce.style.cssText="padding:16px;color:var(--txM);font-size:13px;border:1px dashed var(--bd);border-radius:2px;text-align:center;"})}})(),()=>{Y=!0}},[f,v,E]),q.useEffect(()=>{if(v)return;const U=document.querySelectorAll(".tome-content pre"),Y=[];return U.forEach(X=>{if(X.querySelector(".tome-copy-btn"))return;const L=document.createElement("button");L.className="tome-copy-btn",L.textContent="Copy",L.addEventListener("click",async()=>{const ce=X.querySelector("code");if(ce)try{await navigator.clipboard.writeText(ce.textContent||""),L.textContent="Copied!",setTimeout(()=>{L.textContent="Copy"},2e3)}catch{L.textContent="Failed",setTimeout(()=>{L.textContent="Copy"},2e3)}}),X.appendChild(L),Y.push(L)}),()=>{Y.forEach(X=>X.remove())}},[f,v]);const V=Pn.map(U=>({id:U.id,title:U.frontmatter.title,description:U.frontmatter.description})),R=Pn.find(U=>U.id===s),F=hg(R,lm),ne=mg(Jn.editLink,R==null?void 0:R.filePath),xe=(R==null?void 0:R.locale)||(Ks==null?void 0:Ks.defaultLocale)||"en",we="ltr";return q.useEffect(()=>{const U=document.querySelectorAll(".tome-math[data-math]").length>0;if(!Jn.math&&!U)return;const Y="tome-katex-css";if(document.getElementById(Y))return;const X=document.createElement("link");X.id=Y,X.rel="stylesheet",X.href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css",X.crossOrigin="anonymous",document.head.appendChild(X)},[f,v]),q.useEffect(()=>{const U=document.querySelectorAll(".tome-math[data-math]");if(U.length===0)return;let Y=!1;const X="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.mjs";return(async()=>{try{const L=(await import(X)).default;if(Y)return;for(const ce of U){const de=ce.getAttribute("data-math");if(de)try{const ee=atob(de),_e=ce.classList.contains("tome-math-block");L.render(ee,ce,{displayMode:_e,throwOnError:!1})}catch(ee){console.warn("[tome] KaTeX render failed:",ee)}}}catch(L){console.warn("[tome] Failed to load KaTeX from CDN:",L)}})(),()=>{Y=!0}},[f,v]),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:t0}),r.jsx(cg,{config:Jn,navigation:gg,currentPageId:s,pageHtml:f!=null&&f.isMdx?void 0:v?"":(f==null?void 0:f.html)||"<p>Page not found</p>",pageComponent:f!=null&&f.isMdx?f.component:void 0,mdxComponents:e0,pageTitle:(f==null?void 0:f.frontmatter.title)||(v?"":"Not Found"),pageDescription:f==null?void 0:f.frontmatter.description,headings:(f==null?void 0:f.headings)||[],tocEnabled:(f==null?void 0:f.frontmatter.toc)!==!1,editUrl:ne,lastUpdated:R==null?void 0:R.lastUpdated,changelogEntries:f!=null&&f.isMdx||f==null?void 0:f.changelogEntries,apiManifest:!(f!=null&&f.isMdx)&&(f!=null&&f.isApiReference)?f.apiManifest:void 0,apiBaseUrl:(ze=Jn.api)==null?void 0:ze.baseUrl,apiPlayground:(P=Jn.api)==null?void 0:P.playground,apiAuth:($=Jn.api)==null?void 0:$.auth,ApiReferenceComponent:qg,onNavigate:z,allPages:V,docContext:yg,versioning:lm||void 0,currentVersion:F,basePath:Do,isDraft:((ue=R==null?void 0:R.frontmatter)==null?void 0:ue.draft)===!0,dir:we,i18n:void 0,currentLocale:xe,overrides:bg})]})}const rm=document.getElementById("tome-root");rm&&kh.createRoot(rm).render(r.jsx(l0,{}));export{q as a,sm as e,r as j,Rh as r};
