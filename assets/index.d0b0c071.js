var Z0=Object.defineProperty;var K0=(n,e,t)=>e in n?Z0(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ne=(n,e,t)=>(K0(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var Q0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function J0(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var lt={exports:{}},Ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ro=Symbol.for("react.element"),ev=Symbol.for("react.portal"),tv=Symbol.for("react.fragment"),nv=Symbol.for("react.strict_mode"),iv=Symbol.for("react.profiler"),rv=Symbol.for("react.provider"),sv=Symbol.for("react.context"),ov=Symbol.for("react.forward_ref"),av=Symbol.for("react.suspense"),lv=Symbol.for("react.memo"),uv=Symbol.for("react.lazy"),pd=Symbol.iterator;function cv(n){return n===null||typeof n!="object"?null:(n=pd&&n[pd]||n["@@iterator"],typeof n=="function"?n:null)}var im={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},rm=Object.assign,sm={};function Ts(n,e,t){this.props=n,this.context=e,this.refs=sm,this.updater=t||im}Ts.prototype.isReactComponent={};Ts.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Ts.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function om(){}om.prototype=Ts.prototype;function of(n,e,t){this.props=n,this.context=e,this.refs=sm,this.updater=t||im}var af=of.prototype=new om;af.constructor=of;rm(af,Ts.prototype);af.isPureReactComponent=!0;var md=Array.isArray,am=Object.prototype.hasOwnProperty,lf={current:null},lm={key:!0,ref:!0,__self:!0,__source:!0};function um(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)am.call(e,i)&&!lm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ro,type:n,key:s,ref:o,props:r,_owner:lf.current}}function fv(n,e){return{$$typeof:Ro,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function uf(n){return typeof n=="object"&&n!==null&&n.$$typeof===Ro}function dv(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var gd=/\/+/g;function Gl(n,e){return typeof n=="object"&&n!==null&&n.key!=null?dv(""+n.key):e.toString(36)}function Aa(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Ro:case ev:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Gl(o,0):i,md(r)?(t="",n!=null&&(t=n.replace(gd,"$&/")+"/"),Aa(r,e,t,"",function(u){return u})):r!=null&&(uf(r)&&(r=fv(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(gd,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",md(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Gl(s,a);o+=Aa(s,e,t,l,r)}else if(l=cv(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Gl(s,a++),o+=Aa(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Bo(n,e,t){if(n==null)return n;var i=[],r=0;return Aa(n,i,"","",function(s){return e.call(t,s,r++)}),i}function hv(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var It={current:null},La={transition:null},pv={ReactCurrentDispatcher:It,ReactCurrentBatchConfig:La,ReactCurrentOwner:lf};function cm(){throw Error("act(...) is not supported in production builds of React.")}Ae.Children={map:Bo,forEach:function(n,e,t){Bo(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Bo(n,function(){e++}),e},toArray:function(n){return Bo(n,function(e){return e})||[]},only:function(n){if(!uf(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ae.Component=Ts;Ae.Fragment=tv;Ae.Profiler=iv;Ae.PureComponent=of;Ae.StrictMode=nv;Ae.Suspense=av;Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pv;Ae.act=cm;Ae.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=rm({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=lf.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)am.call(e,l)&&!lm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Ro,type:n.type,key:r,ref:s,props:i,_owner:o}};Ae.createContext=function(n){return n={$$typeof:sv,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:rv,_context:n},n.Consumer=n};Ae.createElement=um;Ae.createFactory=function(n){var e=um.bind(null,n);return e.type=n,e};Ae.createRef=function(){return{current:null}};Ae.forwardRef=function(n){return{$$typeof:ov,render:n}};Ae.isValidElement=uf;Ae.lazy=function(n){return{$$typeof:uv,_payload:{_status:-1,_result:n},_init:hv}};Ae.memo=function(n,e){return{$$typeof:lv,type:n,compare:e===void 0?null:e}};Ae.startTransition=function(n){var e=La.transition;La.transition={};try{n()}finally{La.transition=e}};Ae.unstable_act=cm;Ae.useCallback=function(n,e){return It.current.useCallback(n,e)};Ae.useContext=function(n){return It.current.useContext(n)};Ae.useDebugValue=function(){};Ae.useDeferredValue=function(n){return It.current.useDeferredValue(n)};Ae.useEffect=function(n,e){return It.current.useEffect(n,e)};Ae.useId=function(){return It.current.useId()};Ae.useImperativeHandle=function(n,e,t){return It.current.useImperativeHandle(n,e,t)};Ae.useInsertionEffect=function(n,e){return It.current.useInsertionEffect(n,e)};Ae.useLayoutEffect=function(n,e){return It.current.useLayoutEffect(n,e)};Ae.useMemo=function(n,e){return It.current.useMemo(n,e)};Ae.useReducer=function(n,e,t){return It.current.useReducer(n,e,t)};Ae.useRef=function(n){return It.current.useRef(n)};Ae.useState=function(n){return It.current.useState(n)};Ae.useSyncExternalStore=function(n,e,t){return It.current.useSyncExternalStore(n,e,t)};Ae.useTransition=function(){return It.current.useTransition()};Ae.version="18.3.1";(function(n){n.exports=Ae})(lt);const Wa=J0(lt.exports);var Qu={},fm={exports:{}},Qt={},dm={exports:{}},hm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(F,I){var b=F.length;F.push(I);e:for(;0<b;){var A=b-1>>>1,D=F[A];if(0<r(D,I))F[A]=I,F[b]=D,b=A;else break e}}function t(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var I=F[0],b=F.pop();if(b!==I){F[0]=b;e:for(var A=0,D=F.length,k=D>>>1;A<k;){var U=2*(A+1)-1,$=F[U],R=U+1,se=F[R];if(0>r($,b))R<D&&0>r(se,$)?(F[A]=se,F[R]=b,A=R):(F[A]=$,F[U]=b,A=U);else if(R<D&&0>r(se,b))F[A]=se,F[R]=b,A=R;else break e}}return I}function r(F,I){var b=F.sortIndex-I.sortIndex;return b!==0?b:F.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,d=3,g=!1,x=!1,p=!1,h=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(F){for(var I=t(u);I!==null;){if(I.callback===null)i(u);else if(I.startTime<=F)i(u),I.sortIndex=I.expirationTime,e(l,I);else break;I=t(u)}}function S(F){if(p=!1,_(F),!x)if(t(l)!==null)x=!0,X(w);else{var I=t(u);I!==null&&Q(S,I.startTime-F)}}function w(F,I){x=!1,p&&(p=!1,m(y),y=-1),g=!0;var b=d;try{for(_(I),f=t(l);f!==null&&(!(f.expirationTime>I)||F&&!G());){var A=f.callback;if(typeof A=="function"){f.callback=null,d=f.priorityLevel;var D=A(f.expirationTime<=I);I=n.unstable_now(),typeof D=="function"?f.callback=D:f===t(l)&&i(l),_(I)}else i(l);f=t(l)}if(f!==null)var k=!0;else{var U=t(u);U!==null&&Q(S,U.startTime-I),k=!1}return k}finally{f=null,d=b,g=!1}}var T=!1,P=null,y=-1,L=5,O=-1;function G(){return!(n.unstable_now()-O<L)}function ie(){if(P!==null){var F=n.unstable_now();O=F;var I=!0;try{I=P(!0,F)}finally{I?ee():(T=!1,P=null)}}else T=!1}var ee;if(typeof v=="function")ee=function(){v(ie)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,K=B.port2;B.port1.onmessage=ie,ee=function(){K.postMessage(null)}}else ee=function(){h(ie,0)};function X(F){P=F,T||(T=!0,ee())}function Q(F,I){y=h(function(){F(n.unstable_now())},I)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(F){F.callback=null},n.unstable_continueExecution=function(){x||g||(x=!0,X(w))},n.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<F?Math.floor(1e3/F):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(F){switch(d){case 1:case 2:case 3:var I=3;break;default:I=d}var b=d;d=I;try{return F()}finally{d=b}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(F,I){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var b=d;d=F;try{return I()}finally{d=b}},n.unstable_scheduleCallback=function(F,I,b){var A=n.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?A+b:A):b=A,F){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=b+D,F={id:c++,callback:I,priorityLevel:F,startTime:b,expirationTime:D,sortIndex:-1},b>A?(F.sortIndex=b,e(u,F),t(l)===null&&F===t(u)&&(p?(m(y),y=-1):p=!0,Q(S,b-A))):(F.sortIndex=D,e(l,F),x||g||(x=!0,X(w))),F},n.unstable_shouldYield=G,n.unstable_wrapCallback=function(F){var I=d;return function(){var b=d;d=I;try{return F.apply(this,arguments)}finally{d=b}}}})(hm);(function(n){n.exports=hm})(dm);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mv=lt.exports,Kt=dm.exports;function J(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pm=new Set,fo={};function yr(n,e){ps(n,e),ps(n+"Capture",e)}function ps(n,e){for(fo[n]=e,n=0;n<e.length;n++)pm.add(e[n])}var si=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ju=Object.prototype.hasOwnProperty,gv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vd={},_d={};function vv(n){return Ju.call(_d,n)?!0:Ju.call(vd,n)?!1:gv.test(n)?_d[n]=!0:(vd[n]=!0,!1)}function _v(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function xv(n,e,t,i){if(e===null||typeof e>"u"||_v(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function kt(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var yt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){yt[n]=new kt(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];yt[e]=new kt(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){yt[n]=new kt(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){yt[n]=new kt(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){yt[n]=new kt(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){yt[n]=new kt(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){yt[n]=new kt(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){yt[n]=new kt(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){yt[n]=new kt(n,5,!1,n.toLowerCase(),null,!1,!1)});var cf=/[\-:]([a-z])/g;function ff(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(cf,ff);yt[e]=new kt(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(cf,ff);yt[e]=new kt(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(cf,ff);yt[e]=new kt(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){yt[n]=new kt(n,1,!1,n.toLowerCase(),null,!1,!1)});yt.xlinkHref=new kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){yt[n]=new kt(n,1,!1,n.toLowerCase(),null,!0,!0)});function df(n,e,t,i){var r=yt.hasOwnProperty(e)?yt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(xv(e,t,r,i)&&(t=null),i||r===null?vv(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var ui=mv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vo=Symbol.for("react.element"),Xr=Symbol.for("react.portal"),$r=Symbol.for("react.fragment"),hf=Symbol.for("react.strict_mode"),ec=Symbol.for("react.profiler"),mm=Symbol.for("react.provider"),gm=Symbol.for("react.context"),pf=Symbol.for("react.forward_ref"),tc=Symbol.for("react.suspense"),nc=Symbol.for("react.suspense_list"),mf=Symbol.for("react.memo"),yi=Symbol.for("react.lazy"),vm=Symbol.for("react.offscreen"),xd=Symbol.iterator;function Ns(n){return n===null||typeof n!="object"?null:(n=xd&&n[xd]||n["@@iterator"],typeof n=="function"?n:null)}var Ye=Object.assign,Hl;function qs(n){if(Hl===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Hl=e&&e[1]||""}return`
`+Hl+n}var Wl=!1;function jl(n,e){if(!n||Wl)return"";Wl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Wl=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?qs(n):""}function yv(n){switch(n.tag){case 5:return qs(n.type);case 16:return qs("Lazy");case 13:return qs("Suspense");case 19:return qs("SuspenseList");case 0:case 2:case 15:return n=jl(n.type,!1),n;case 11:return n=jl(n.type.render,!1),n;case 1:return n=jl(n.type,!0),n;default:return""}}function ic(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case $r:return"Fragment";case Xr:return"Portal";case ec:return"Profiler";case hf:return"StrictMode";case tc:return"Suspense";case nc:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case gm:return(n.displayName||"Context")+".Consumer";case mm:return(n._context.displayName||"Context")+".Provider";case pf:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case mf:return e=n.displayName||null,e!==null?e:ic(n.type)||"Memo";case yi:e=n._payload,n=n._init;try{return ic(n(e))}catch{}}return null}function Sv(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ic(e);case 8:return e===hf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Oi(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function _m(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function wv(n){var e=_m(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Go(n){n._valueTracker||(n._valueTracker=wv(n))}function xm(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=_m(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function ja(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function rc(n,e){var t=e.checked;return Ye({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:n._wrapperState.initialChecked})}function yd(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Oi(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ym(n,e){e=e.checked,e!=null&&df(n,"checked",e,!1)}function sc(n,e){ym(n,e);var t=Oi(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?oc(n,e.type,t):e.hasOwnProperty("defaultValue")&&oc(n,e.type,Oi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Sd(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function oc(n,e,t){(e!=="number"||ja(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Ys=Array.isArray;function os(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Oi(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function ac(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(J(91));return Ye({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function wd(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(J(92));if(Ys(t)){if(1<t.length)throw Error(J(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Oi(t)}}function Sm(n,e){var t=Oi(e.value),i=Oi(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Md(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function wm(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lc(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?wm(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ho,Mm=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Ho=Ho||document.createElement("div"),Ho.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ho.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function ho(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var to={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Mv=["Webkit","ms","Moz","O"];Object.keys(to).forEach(function(n){Mv.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),to[e]=to[n]})});function Em(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||to.hasOwnProperty(n)&&to[n]?(""+e).trim():e+"px"}function bm(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Em(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var Ev=Ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function uc(n,e){if(e){if(Ev[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(J(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(J(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(J(61))}if(e.style!=null&&typeof e.style!="object")throw Error(J(62))}}function cc(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fc=null;function gf(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var dc=null,as=null,ls=null;function Ed(n){if(n=No(n)){if(typeof dc!="function")throw Error(J(280));var e=n.stateNode;e&&(e=Sl(e),dc(n.stateNode,n.type,e))}}function Tm(n){as?ls?ls.push(n):ls=[n]:as=n}function Cm(){if(as){var n=as,e=ls;if(ls=as=null,Ed(n),e)for(n=0;n<e.length;n++)Ed(e[n])}}function Am(n,e){return n(e)}function Lm(){}var Xl=!1;function Pm(n,e,t){if(Xl)return n(e,t);Xl=!0;try{return Am(n,e,t)}finally{Xl=!1,(as!==null||ls!==null)&&(Lm(),Cm())}}function po(n,e){var t=n.stateNode;if(t===null)return null;var i=Sl(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(J(231,e,typeof t));return t}var hc=!1;if(si)try{var Fs={};Object.defineProperty(Fs,"passive",{get:function(){hc=!0}}),window.addEventListener("test",Fs,Fs),window.removeEventListener("test",Fs,Fs)}catch{hc=!1}function bv(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var no=!1,Xa=null,$a=!1,pc=null,Tv={onError:function(n){no=!0,Xa=n}};function Cv(n,e,t,i,r,s,o,a,l){no=!1,Xa=null,bv.apply(Tv,arguments)}function Av(n,e,t,i,r,s,o,a,l){if(Cv.apply(this,arguments),no){if(no){var u=Xa;no=!1,Xa=null}else throw Error(J(198));$a||($a=!0,pc=u)}}function Sr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Dm(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function bd(n){if(Sr(n)!==n)throw Error(J(188))}function Lv(n){var e=n.alternate;if(!e){if(e=Sr(n),e===null)throw Error(J(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return bd(r),n;if(s===i)return bd(r),e;s=s.sibling}throw Error(J(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(J(189))}}if(t.alternate!==i)throw Error(J(190))}if(t.tag!==3)throw Error(J(188));return t.stateNode.current===t?n:e}function Rm(n){return n=Lv(n),n!==null?Im(n):null}function Im(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Im(n);if(e!==null)return e;n=n.sibling}return null}var km=Kt.unstable_scheduleCallback,Td=Kt.unstable_cancelCallback,Pv=Kt.unstable_shouldYield,Dv=Kt.unstable_requestPaint,nt=Kt.unstable_now,Rv=Kt.unstable_getCurrentPriorityLevel,vf=Kt.unstable_ImmediatePriority,Nm=Kt.unstable_UserBlockingPriority,qa=Kt.unstable_NormalPriority,Iv=Kt.unstable_LowPriority,Fm=Kt.unstable_IdlePriority,vl=null,Bn=null;function kv(n){if(Bn&&typeof Bn.onCommitFiberRoot=="function")try{Bn.onCommitFiberRoot(vl,n,void 0,(n.current.flags&128)===128)}catch{}}var Cn=Math.clz32?Math.clz32:zv,Nv=Math.log,Fv=Math.LN2;function zv(n){return n>>>=0,n===0?32:31-(Nv(n)/Fv|0)|0}var Wo=64,jo=4194304;function Zs(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ya(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Zs(a):(s&=o,s!==0&&(i=Zs(s)))}else o=t&~r,o!==0?i=Zs(o):s!==0&&(i=Zs(s));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if((i&4)!==0&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Cn(e),r=1<<t,i|=n[t],e&=~r;return i}function Ov(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Uv(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Cn(s),a=1<<o,l=r[o];l===-1?((a&t)===0||(a&i)!==0)&&(r[o]=Ov(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function mc(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function zm(){var n=Wo;return Wo<<=1,(Wo&4194240)===0&&(Wo=64),n}function $l(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Io(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Cn(e),n[e]=t}function Bv(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Cn(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function _f(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Cn(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var ze=0;function Om(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Um,xf,Bm,Vm,Gm,gc=!1,Xo=[],Ai=null,Li=null,Pi=null,mo=new Map,go=new Map,Mi=[],Vv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cd(n,e){switch(n){case"focusin":case"focusout":Ai=null;break;case"dragenter":case"dragleave":Li=null;break;case"mouseover":case"mouseout":Pi=null;break;case"pointerover":case"pointerout":mo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":go.delete(e.pointerId)}}function zs(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=No(e),e!==null&&xf(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function Gv(n,e,t,i,r){switch(e){case"focusin":return Ai=zs(Ai,n,e,t,i,r),!0;case"dragenter":return Li=zs(Li,n,e,t,i,r),!0;case"mouseover":return Pi=zs(Pi,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return mo.set(s,zs(mo.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,go.set(s,zs(go.get(s)||null,n,e,t,i,r)),!0}return!1}function Hm(n){var e=er(n.target);if(e!==null){var t=Sr(e);if(t!==null){if(e=t.tag,e===13){if(e=Dm(t),e!==null){n.blockedOn=e,Gm(n.priority,function(){Bm(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Pa(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=vc(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);fc=i,t.target.dispatchEvent(i),fc=null}else return e=No(t),e!==null&&xf(e),n.blockedOn=t,!1;e.shift()}return!0}function Ad(n,e,t){Pa(n)&&t.delete(e)}function Hv(){gc=!1,Ai!==null&&Pa(Ai)&&(Ai=null),Li!==null&&Pa(Li)&&(Li=null),Pi!==null&&Pa(Pi)&&(Pi=null),mo.forEach(Ad),go.forEach(Ad)}function Os(n,e){n.blockedOn===e&&(n.blockedOn=null,gc||(gc=!0,Kt.unstable_scheduleCallback(Kt.unstable_NormalPriority,Hv)))}function vo(n){function e(r){return Os(r,n)}if(0<Xo.length){Os(Xo[0],n);for(var t=1;t<Xo.length;t++){var i=Xo[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Ai!==null&&Os(Ai,n),Li!==null&&Os(Li,n),Pi!==null&&Os(Pi,n),mo.forEach(e),go.forEach(e),t=0;t<Mi.length;t++)i=Mi[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Mi.length&&(t=Mi[0],t.blockedOn===null);)Hm(t),t.blockedOn===null&&Mi.shift()}var us=ui.ReactCurrentBatchConfig,Za=!0;function Wv(n,e,t,i){var r=ze,s=us.transition;us.transition=null;try{ze=1,yf(n,e,t,i)}finally{ze=r,us.transition=s}}function jv(n,e,t,i){var r=ze,s=us.transition;us.transition=null;try{ze=4,yf(n,e,t,i)}finally{ze=r,us.transition=s}}function yf(n,e,t,i){if(Za){var r=vc(n,e,t,i);if(r===null)iu(n,e,i,Ka,t),Cd(n,i);else if(Gv(r,n,e,t,i))i.stopPropagation();else if(Cd(n,i),e&4&&-1<Vv.indexOf(n)){for(;r!==null;){var s=No(r);if(s!==null&&Um(s),s=vc(n,e,t,i),s===null&&iu(n,e,i,Ka,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else iu(n,e,i,null,t)}}var Ka=null;function vc(n,e,t,i){if(Ka=null,n=gf(i),n=er(n),n!==null)if(e=Sr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Dm(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Ka=n,null}function Wm(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rv()){case vf:return 1;case Nm:return 4;case qa:case Iv:return 16;case Fm:return 536870912;default:return 16}default:return 16}}var bi=null,Sf=null,Da=null;function jm(){if(Da)return Da;var n,e=Sf,t=e.length,i,r="value"in bi?bi.value:bi.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Da=r.slice(n,1<i?1-i:void 0)}function Ra(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function $o(){return!0}function Ld(){return!1}function Jt(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$o:Ld,this.isPropagationStopped=Ld,this}return Ye(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=$o)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=$o)},persist:function(){},isPersistent:$o}),e}var Cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wf=Jt(Cs),ko=Ye({},Cs,{view:0,detail:0}),Xv=Jt(ko),ql,Yl,Us,_l=Ye({},ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mf,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Us&&(Us&&n.type==="mousemove"?(ql=n.screenX-Us.screenX,Yl=n.screenY-Us.screenY):Yl=ql=0,Us=n),ql)},movementY:function(n){return"movementY"in n?n.movementY:Yl}}),Pd=Jt(_l),$v=Ye({},_l,{dataTransfer:0}),qv=Jt($v),Yv=Ye({},ko,{relatedTarget:0}),Zl=Jt(Yv),Zv=Ye({},Cs,{animationName:0,elapsedTime:0,pseudoElement:0}),Kv=Jt(Zv),Qv=Ye({},Cs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Jv=Jt(Qv),e_=Ye({},Cs,{data:0}),Dd=Jt(e_),t_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},n_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},i_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function r_(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=i_[n])?!!e[n]:!1}function Mf(){return r_}var s_=Ye({},ko,{key:function(n){if(n.key){var e=t_[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Ra(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?n_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mf,charCode:function(n){return n.type==="keypress"?Ra(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ra(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),o_=Jt(s_),a_=Ye({},_l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rd=Jt(a_),l_=Ye({},ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mf}),u_=Jt(l_),c_=Ye({},Cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),f_=Jt(c_),d_=Ye({},_l,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),h_=Jt(d_),p_=[9,13,27,32],Ef=si&&"CompositionEvent"in window,io=null;si&&"documentMode"in document&&(io=document.documentMode);var m_=si&&"TextEvent"in window&&!io,Xm=si&&(!Ef||io&&8<io&&11>=io),Id=String.fromCharCode(32),kd=!1;function $m(n,e){switch(n){case"keyup":return p_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qm(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var qr=!1;function g_(n,e){switch(n){case"compositionend":return qm(e);case"keypress":return e.which!==32?null:(kd=!0,Id);case"textInput":return n=e.data,n===Id&&kd?null:n;default:return null}}function v_(n,e){if(qr)return n==="compositionend"||!Ef&&$m(n,e)?(n=jm(),Da=Sf=bi=null,qr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Xm&&e.locale!=="ko"?null:e.data;default:return null}}var __={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nd(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!__[n.type]:e==="textarea"}function Ym(n,e,t,i){Tm(i),e=Qa(e,"onChange"),0<e.length&&(t=new wf("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var ro=null,_o=null;function x_(n){og(n,0)}function xl(n){var e=Kr(n);if(xm(e))return n}function y_(n,e){if(n==="change")return e}var Zm=!1;if(si){var Kl;if(si){var Ql="oninput"in document;if(!Ql){var Fd=document.createElement("div");Fd.setAttribute("oninput","return;"),Ql=typeof Fd.oninput=="function"}Kl=Ql}else Kl=!1;Zm=Kl&&(!document.documentMode||9<document.documentMode)}function zd(){ro&&(ro.detachEvent("onpropertychange",Km),_o=ro=null)}function Km(n){if(n.propertyName==="value"&&xl(_o)){var e=[];Ym(e,_o,n,gf(n)),Pm(x_,e)}}function S_(n,e,t){n==="focusin"?(zd(),ro=e,_o=t,ro.attachEvent("onpropertychange",Km)):n==="focusout"&&zd()}function w_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return xl(_o)}function M_(n,e){if(n==="click")return xl(e)}function E_(n,e){if(n==="input"||n==="change")return xl(e)}function b_(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Dn=typeof Object.is=="function"?Object.is:b_;function xo(n,e){if(Dn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Ju.call(e,r)||!Dn(n[r],e[r]))return!1}return!0}function Od(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ud(n,e){var t=Od(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Od(t)}}function Qm(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Qm(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Jm(){for(var n=window,e=ja();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=ja(n.document)}return e}function bf(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function T_(n){var e=Jm(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Qm(t.ownerDocument.documentElement,t)){if(i!==null&&bf(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Ud(t,s);var o=Ud(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var C_=si&&"documentMode"in document&&11>=document.documentMode,Yr=null,_c=null,so=null,xc=!1;function Bd(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;xc||Yr==null||Yr!==ja(i)||(i=Yr,"selectionStart"in i&&bf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),so&&xo(so,i)||(so=i,i=Qa(_c,"onSelect"),0<i.length&&(e=new wf("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Yr)))}function qo(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Zr={animationend:qo("Animation","AnimationEnd"),animationiteration:qo("Animation","AnimationIteration"),animationstart:qo("Animation","AnimationStart"),transitionend:qo("Transition","TransitionEnd")},Jl={},eg={};si&&(eg=document.createElement("div").style,"AnimationEvent"in window||(delete Zr.animationend.animation,delete Zr.animationiteration.animation,delete Zr.animationstart.animation),"TransitionEvent"in window||delete Zr.transitionend.transition);function yl(n){if(Jl[n])return Jl[n];if(!Zr[n])return n;var e=Zr[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in eg)return Jl[n]=e[t];return n}var tg=yl("animationend"),ng=yl("animationiteration"),ig=yl("animationstart"),rg=yl("transitionend"),sg=new Map,Vd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vi(n,e){sg.set(n,e),yr(e,[n])}for(var eu=0;eu<Vd.length;eu++){var tu=Vd[eu],A_=tu.toLowerCase(),L_=tu[0].toUpperCase()+tu.slice(1);Vi(A_,"on"+L_)}Vi(tg,"onAnimationEnd");Vi(ng,"onAnimationIteration");Vi(ig,"onAnimationStart");Vi("dblclick","onDoubleClick");Vi("focusin","onFocus");Vi("focusout","onBlur");Vi(rg,"onTransitionEnd");ps("onMouseEnter",["mouseout","mouseover"]);ps("onMouseLeave",["mouseout","mouseover"]);ps("onPointerEnter",["pointerout","pointerover"]);ps("onPointerLeave",["pointerout","pointerover"]);yr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yr("onBeforeInput",["compositionend","keypress","textInput","paste"]);yr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ks="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),P_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ks));function Gd(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,Av(i,e,void 0,n),n.currentTarget=null}function og(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Gd(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Gd(r,a,u),s=l}}}if($a)throw n=pc,$a=!1,pc=null,n}function Ge(n,e){var t=e[Ec];t===void 0&&(t=e[Ec]=new Set);var i=n+"__bubble";t.has(i)||(ag(e,n,2,!1),t.add(i))}function nu(n,e,t){var i=0;e&&(i|=4),ag(t,n,i,e)}var Yo="_reactListening"+Math.random().toString(36).slice(2);function yo(n){if(!n[Yo]){n[Yo]=!0,pm.forEach(function(t){t!=="selectionchange"&&(P_.has(t)||nu(t,!1,n),nu(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Yo]||(e[Yo]=!0,nu("selectionchange",!1,e))}}function ag(n,e,t,i){switch(Wm(e)){case 1:var r=Wv;break;case 4:r=jv;break;default:r=yf}t=r.bind(null,e,t,n),r=void 0,!hc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function iu(n,e,t,i,r){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=er(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Pm(function(){var u=s,c=gf(t),f=[];e:{var d=sg.get(n);if(d!==void 0){var g=wf,x=n;switch(n){case"keypress":if(Ra(t)===0)break e;case"keydown":case"keyup":g=o_;break;case"focusin":x="focus",g=Zl;break;case"focusout":x="blur",g=Zl;break;case"beforeblur":case"afterblur":g=Zl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Pd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=qv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=u_;break;case tg:case ng:case ig:g=Kv;break;case rg:g=f_;break;case"scroll":g=Xv;break;case"wheel":g=h_;break;case"copy":case"cut":case"paste":g=Jv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Rd}var p=(e&4)!==0,h=!p&&n==="scroll",m=p?d!==null?d+"Capture":null:d;p=[];for(var v=u,_;v!==null;){_=v;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,m!==null&&(S=po(v,m),S!=null&&p.push(So(v,S,_)))),h)break;v=v.return}0<p.length&&(d=new g(d,x,null,t,c),f.push({event:d,listeners:p}))}}if((e&7)===0){e:{if(d=n==="mouseover"||n==="pointerover",g=n==="mouseout"||n==="pointerout",d&&t!==fc&&(x=t.relatedTarget||t.fromElement)&&(er(x)||x[oi]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(x=t.relatedTarget||t.toElement,g=u,x=x?er(x):null,x!==null&&(h=Sr(x),x!==h||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=u),g!==x)){if(p=Pd,S="onMouseLeave",m="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(p=Rd,S="onPointerLeave",m="onPointerEnter",v="pointer"),h=g==null?d:Kr(g),_=x==null?d:Kr(x),d=new p(S,v+"leave",g,t,c),d.target=h,d.relatedTarget=_,S=null,er(c)===u&&(p=new p(m,v+"enter",x,t,c),p.target=_,p.relatedTarget=h,S=p),h=S,g&&x)t:{for(p=g,m=x,v=0,_=p;_;_=Cr(_))v++;for(_=0,S=m;S;S=Cr(S))_++;for(;0<v-_;)p=Cr(p),v--;for(;0<_-v;)m=Cr(m),_--;for(;v--;){if(p===m||m!==null&&p===m.alternate)break t;p=Cr(p),m=Cr(m)}p=null}else p=null;g!==null&&Hd(f,d,g,p,!1),x!==null&&h!==null&&Hd(f,h,x,p,!0)}}e:{if(d=u?Kr(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var w=y_;else if(Nd(d))if(Zm)w=E_;else{w=w_;var T=S_}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(w=M_);if(w&&(w=w(n,u))){Ym(f,w,t,c);break e}T&&T(n,d,u),n==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&oc(d,"number",d.value)}switch(T=u?Kr(u):window,n){case"focusin":(Nd(T)||T.contentEditable==="true")&&(Yr=T,_c=u,so=null);break;case"focusout":so=_c=Yr=null;break;case"mousedown":xc=!0;break;case"contextmenu":case"mouseup":case"dragend":xc=!1,Bd(f,t,c);break;case"selectionchange":if(C_)break;case"keydown":case"keyup":Bd(f,t,c)}var P;if(Ef)e:{switch(n){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else qr?$m(n,t)&&(y="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(y="onCompositionStart");y&&(Xm&&t.locale!=="ko"&&(qr||y!=="onCompositionStart"?y==="onCompositionEnd"&&qr&&(P=jm()):(bi=c,Sf="value"in bi?bi.value:bi.textContent,qr=!0)),T=Qa(u,y),0<T.length&&(y=new Dd(y,n,null,t,c),f.push({event:y,listeners:T}),P?y.data=P:(P=qm(t),P!==null&&(y.data=P)))),(P=m_?g_(n,t):v_(n,t))&&(u=Qa(u,"onBeforeInput"),0<u.length&&(c=new Dd("onBeforeInput","beforeinput",null,t,c),f.push({event:c,listeners:u}),c.data=P))}og(f,e)})}function So(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Qa(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=po(n,t),s!=null&&i.unshift(So(n,s,r)),s=po(n,e),s!=null&&i.push(So(n,s,r))),n=n.return}return i}function Cr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Hd(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=po(t,s),l!=null&&o.unshift(So(t,l,a))):r||(l=po(t,s),l!=null&&o.push(So(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var D_=/\r\n?/g,R_=/\u0000|\uFFFD/g;function Wd(n){return(typeof n=="string"?n:""+n).replace(D_,`
`).replace(R_,"")}function Zo(n,e,t){if(e=Wd(e),Wd(n)!==e&&t)throw Error(J(425))}function Ja(){}var yc=null,Sc=null;function wc(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Mc=typeof setTimeout=="function"?setTimeout:void 0,I_=typeof clearTimeout=="function"?clearTimeout:void 0,jd=typeof Promise=="function"?Promise:void 0,k_=typeof queueMicrotask=="function"?queueMicrotask:typeof jd<"u"?function(n){return jd.resolve(null).then(n).catch(N_)}:Mc;function N_(n){setTimeout(function(){throw n})}function ru(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),vo(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);vo(e)}function Di(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Xd(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var As=Math.random().toString(36).slice(2),On="__reactFiber$"+As,wo="__reactProps$"+As,oi="__reactContainer$"+As,Ec="__reactEvents$"+As,F_="__reactListeners$"+As,z_="__reactHandles$"+As;function er(n){var e=n[On];if(e)return e;for(var t=n.parentNode;t;){if(e=t[oi]||t[On]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Xd(n);n!==null;){if(t=n[On])return t;n=Xd(n)}return e}n=t,t=n.parentNode}return null}function No(n){return n=n[On]||n[oi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Kr(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(J(33))}function Sl(n){return n[wo]||null}var bc=[],Qr=-1;function Gi(n){return{current:n}}function He(n){0>Qr||(n.current=bc[Qr],bc[Qr]=null,Qr--)}function Ve(n,e){Qr++,bc[Qr]=n.current,n.current=e}var Ui={},Tt=Gi(Ui),Ot=Gi(!1),fr=Ui;function ms(n,e){var t=n.type.contextTypes;if(!t)return Ui;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Ut(n){return n=n.childContextTypes,n!=null}function el(){He(Ot),He(Tt)}function $d(n,e,t){if(Tt.current!==Ui)throw Error(J(168));Ve(Tt,e),Ve(Ot,t)}function lg(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(J(108,Sv(n)||"Unknown",r));return Ye({},t,i)}function tl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ui,fr=Tt.current,Ve(Tt,n),Ve(Ot,Ot.current),!0}function qd(n,e,t){var i=n.stateNode;if(!i)throw Error(J(169));t?(n=lg(n,e,fr),i.__reactInternalMemoizedMergedChildContext=n,He(Ot),He(Tt),Ve(Tt,n)):He(Ot),Ve(Ot,t)}var Qn=null,wl=!1,su=!1;function ug(n){Qn===null?Qn=[n]:Qn.push(n)}function O_(n){wl=!0,ug(n)}function Hi(){if(!su&&Qn!==null){su=!0;var n=0,e=ze;try{var t=Qn;for(ze=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Qn=null,wl=!1}catch(r){throw Qn!==null&&(Qn=Qn.slice(n+1)),km(vf,Hi),r}finally{ze=e,su=!1}}return null}var Jr=[],es=0,nl=null,il=0,rn=[],sn=0,dr=null,ei=1,ti="";function Yi(n,e){Jr[es++]=il,Jr[es++]=nl,nl=n,il=e}function cg(n,e,t){rn[sn++]=ei,rn[sn++]=ti,rn[sn++]=dr,dr=n;var i=ei;n=ti;var r=32-Cn(i)-1;i&=~(1<<r),t+=1;var s=32-Cn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ei=1<<32-Cn(e)+r|t<<r|i,ti=s+n}else ei=1<<s|t<<r|i,ti=n}function Tf(n){n.return!==null&&(Yi(n,1),cg(n,1,0))}function Cf(n){for(;n===nl;)nl=Jr[--es],Jr[es]=null,il=Jr[--es],Jr[es]=null;for(;n===dr;)dr=rn[--sn],rn[sn]=null,ti=rn[--sn],rn[sn]=null,ei=rn[--sn],rn[sn]=null}var Zt=null,Yt=null,We=!1,Mn=null;function fg(n,e){var t=ln(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Yd(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Zt=n,Yt=Di(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Zt=n,Yt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=dr!==null?{id:ei,overflow:ti}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=ln(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Zt=n,Yt=null,!0):!1;default:return!1}}function Tc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Cc(n){if(We){var e=Yt;if(e){var t=e;if(!Yd(n,e)){if(Tc(n))throw Error(J(418));e=Di(t.nextSibling);var i=Zt;e&&Yd(n,e)?fg(i,t):(n.flags=n.flags&-4097|2,We=!1,Zt=n)}}else{if(Tc(n))throw Error(J(418));n.flags=n.flags&-4097|2,We=!1,Zt=n}}}function Zd(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Zt=n}function Ko(n){if(n!==Zt)return!1;if(!We)return Zd(n),We=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!wc(n.type,n.memoizedProps)),e&&(e=Yt)){if(Tc(n))throw dg(),Error(J(418));for(;e;)fg(n,e),e=Di(e.nextSibling)}if(Zd(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(J(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Yt=Di(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Yt=null}}else Yt=Zt?Di(n.stateNode.nextSibling):null;return!0}function dg(){for(var n=Yt;n;)n=Di(n.nextSibling)}function gs(){Yt=Zt=null,We=!1}function Af(n){Mn===null?Mn=[n]:Mn.push(n)}var U_=ui.ReactCurrentBatchConfig;function Bs(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(J(309));var i=t.stateNode}if(!i)throw Error(J(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(J(284));if(!t._owner)throw Error(J(290,n))}return n}function Qo(n,e){throw n=Object.prototype.toString.call(e),Error(J(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Kd(n){var e=n._init;return e(n._payload)}function hg(n){function e(m,v){if(n){var _=m.deletions;_===null?(m.deletions=[v],m.flags|=16):_.push(v)}}function t(m,v){if(!n)return null;for(;v!==null;)e(m,v),v=v.sibling;return null}function i(m,v){for(m=new Map;v!==null;)v.key!==null?m.set(v.key,v):m.set(v.index,v),v=v.sibling;return m}function r(m,v){return m=Ni(m,v),m.index=0,m.sibling=null,m}function s(m,v,_){return m.index=_,n?(_=m.alternate,_!==null?(_=_.index,_<v?(m.flags|=2,v):_):(m.flags|=2,v)):(m.flags|=1048576,v)}function o(m){return n&&m.alternate===null&&(m.flags|=2),m}function a(m,v,_,S){return v===null||v.tag!==6?(v=du(_,m.mode,S),v.return=m,v):(v=r(v,_),v.return=m,v)}function l(m,v,_,S){var w=_.type;return w===$r?c(m,v,_.props.children,S,_.key):v!==null&&(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===yi&&Kd(w)===v.type)?(S=r(v,_.props),S.ref=Bs(m,v,_),S.return=m,S):(S=Ua(_.type,_.key,_.props,null,m.mode,S),S.ref=Bs(m,v,_),S.return=m,S)}function u(m,v,_,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=hu(_,m.mode,S),v.return=m,v):(v=r(v,_.children||[]),v.return=m,v)}function c(m,v,_,S,w){return v===null||v.tag!==7?(v=ar(_,m.mode,S,w),v.return=m,v):(v=r(v,_),v.return=m,v)}function f(m,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=du(""+v,m.mode,_),v.return=m,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Vo:return _=Ua(v.type,v.key,v.props,null,m.mode,_),_.ref=Bs(m,null,v),_.return=m,_;case Xr:return v=hu(v,m.mode,_),v.return=m,v;case yi:var S=v._init;return f(m,S(v._payload),_)}if(Ys(v)||Ns(v))return v=ar(v,m.mode,_,null),v.return=m,v;Qo(m,v)}return null}function d(m,v,_,S){var w=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return w!==null?null:a(m,v,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Vo:return _.key===w?l(m,v,_,S):null;case Xr:return _.key===w?u(m,v,_,S):null;case yi:return w=_._init,d(m,v,w(_._payload),S)}if(Ys(_)||Ns(_))return w!==null?null:c(m,v,_,S,null);Qo(m,_)}return null}function g(m,v,_,S,w){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(_)||null,a(v,m,""+S,w);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Vo:return m=m.get(S.key===null?_:S.key)||null,l(v,m,S,w);case Xr:return m=m.get(S.key===null?_:S.key)||null,u(v,m,S,w);case yi:var T=S._init;return g(m,v,_,T(S._payload),w)}if(Ys(S)||Ns(S))return m=m.get(_)||null,c(v,m,S,w,null);Qo(v,S)}return null}function x(m,v,_,S){for(var w=null,T=null,P=v,y=v=0,L=null;P!==null&&y<_.length;y++){P.index>y?(L=P,P=null):L=P.sibling;var O=d(m,P,_[y],S);if(O===null){P===null&&(P=L);break}n&&P&&O.alternate===null&&e(m,P),v=s(O,v,y),T===null?w=O:T.sibling=O,T=O,P=L}if(y===_.length)return t(m,P),We&&Yi(m,y),w;if(P===null){for(;y<_.length;y++)P=f(m,_[y],S),P!==null&&(v=s(P,v,y),T===null?w=P:T.sibling=P,T=P);return We&&Yi(m,y),w}for(P=i(m,P);y<_.length;y++)L=g(P,m,y,_[y],S),L!==null&&(n&&L.alternate!==null&&P.delete(L.key===null?y:L.key),v=s(L,v,y),T===null?w=L:T.sibling=L,T=L);return n&&P.forEach(function(G){return e(m,G)}),We&&Yi(m,y),w}function p(m,v,_,S){var w=Ns(_);if(typeof w!="function")throw Error(J(150));if(_=w.call(_),_==null)throw Error(J(151));for(var T=w=null,P=v,y=v=0,L=null,O=_.next();P!==null&&!O.done;y++,O=_.next()){P.index>y?(L=P,P=null):L=P.sibling;var G=d(m,P,O.value,S);if(G===null){P===null&&(P=L);break}n&&P&&G.alternate===null&&e(m,P),v=s(G,v,y),T===null?w=G:T.sibling=G,T=G,P=L}if(O.done)return t(m,P),We&&Yi(m,y),w;if(P===null){for(;!O.done;y++,O=_.next())O=f(m,O.value,S),O!==null&&(v=s(O,v,y),T===null?w=O:T.sibling=O,T=O);return We&&Yi(m,y),w}for(P=i(m,P);!O.done;y++,O=_.next())O=g(P,m,y,O.value,S),O!==null&&(n&&O.alternate!==null&&P.delete(O.key===null?y:O.key),v=s(O,v,y),T===null?w=O:T.sibling=O,T=O);return n&&P.forEach(function(ie){return e(m,ie)}),We&&Yi(m,y),w}function h(m,v,_,S){if(typeof _=="object"&&_!==null&&_.type===$r&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Vo:e:{for(var w=_.key,T=v;T!==null;){if(T.key===w){if(w=_.type,w===$r){if(T.tag===7){t(m,T.sibling),v=r(T,_.props.children),v.return=m,m=v;break e}}else if(T.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===yi&&Kd(w)===T.type){t(m,T.sibling),v=r(T,_.props),v.ref=Bs(m,T,_),v.return=m,m=v;break e}t(m,T);break}else e(m,T);T=T.sibling}_.type===$r?(v=ar(_.props.children,m.mode,S,_.key),v.return=m,m=v):(S=Ua(_.type,_.key,_.props,null,m.mode,S),S.ref=Bs(m,v,_),S.return=m,m=S)}return o(m);case Xr:e:{for(T=_.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){t(m,v.sibling),v=r(v,_.children||[]),v.return=m,m=v;break e}else{t(m,v);break}else e(m,v);v=v.sibling}v=hu(_,m.mode,S),v.return=m,m=v}return o(m);case yi:return T=_._init,h(m,v,T(_._payload),S)}if(Ys(_))return x(m,v,_,S);if(Ns(_))return p(m,v,_,S);Qo(m,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(t(m,v.sibling),v=r(v,_),v.return=m,m=v):(t(m,v),v=du(_,m.mode,S),v.return=m,m=v),o(m)):t(m,v)}return h}var vs=hg(!0),pg=hg(!1),rl=Gi(null),sl=null,ts=null,Lf=null;function Pf(){Lf=ts=sl=null}function Df(n){var e=rl.current;He(rl),n._currentValue=e}function Ac(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function cs(n,e){sl=n,Lf=ts=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&e)!==0&&(zt=!0),n.firstContext=null)}function dn(n){var e=n._currentValue;if(Lf!==n)if(n={context:n,memoizedValue:e,next:null},ts===null){if(sl===null)throw Error(J(308));ts=n,sl.dependencies={lanes:0,firstContext:n}}else ts=ts.next=n;return e}var tr=null;function Rf(n){tr===null?tr=[n]:tr.push(n)}function mg(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Rf(e)):(t.next=r.next,r.next=t),e.interleaved=t,ai(n,i)}function ai(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Si=!1;function If(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gg(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ni(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Ri(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,(Pe&2)!==0){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ai(n,t)}return r=i.interleaved,r===null?(e.next=e,Rf(i)):(e.next=r.next,r.next=e),i.interleaved=e,ai(n,t)}function Ia(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,_f(n,t)}}function Qd(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function ol(n,e,t,i){var r=n.updateQueue;Si=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=n,p=a;switch(d=e,g=t,p.tag){case 1:if(x=p.payload,typeof x=="function"){f=x.call(g,f,d);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=p.payload,d=typeof x=="function"?x.call(g,f,d):x,d==null)break e;f=Ye({},f,d);break e;case 2:Si=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=f):c=c.next=g,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(1);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);pr|=o,n.lanes=o,n.memoizedState=f}}function Jd(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(J(191,r));r.call(i)}}}var Fo={},Vn=Gi(Fo),Mo=Gi(Fo),Eo=Gi(Fo);function nr(n){if(n===Fo)throw Error(J(174));return n}function kf(n,e){switch(Ve(Eo,e),Ve(Mo,n),Ve(Vn,Fo),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:lc(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=lc(e,n)}He(Vn),Ve(Vn,e)}function _s(){He(Vn),He(Mo),He(Eo)}function vg(n){nr(Eo.current);var e=nr(Vn.current),t=lc(e,n.type);e!==t&&(Ve(Mo,n),Ve(Vn,t))}function Nf(n){Mo.current===n&&(He(Vn),He(Mo))}var Xe=Gi(0);function al(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ou=[];function Ff(){for(var n=0;n<ou.length;n++)ou[n]._workInProgressVersionPrimary=null;ou.length=0}var ka=ui.ReactCurrentDispatcher,au=ui.ReactCurrentBatchConfig,hr=0,qe=null,at=null,dt=null,ll=!1,oo=!1,bo=0,B_=0;function St(){throw Error(J(321))}function zf(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Dn(n[t],e[t]))return!1;return!0}function Of(n,e,t,i,r,s){if(hr=s,qe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ka.current=n===null||n.memoizedState===null?W_:j_,n=t(i,r),oo){s=0;do{if(oo=!1,bo=0,25<=s)throw Error(J(301));s+=1,dt=at=null,e.updateQueue=null,ka.current=X_,n=t(i,r)}while(oo)}if(ka.current=ul,e=at!==null&&at.next!==null,hr=0,dt=at=qe=null,ll=!1,e)throw Error(J(300));return n}function Uf(){var n=bo!==0;return bo=0,n}function Fn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?qe.memoizedState=dt=n:dt=dt.next=n,dt}function hn(){if(at===null){var n=qe.alternate;n=n!==null?n.memoizedState:null}else n=at.next;var e=dt===null?qe.memoizedState:dt.next;if(e!==null)dt=e,at=n;else{if(n===null)throw Error(J(310));at=n,n={memoizedState:at.memoizedState,baseState:at.baseState,baseQueue:at.baseQueue,queue:at.queue,next:null},dt===null?qe.memoizedState=dt=n:dt=dt.next=n}return dt}function To(n,e){return typeof e=="function"?e(n):e}function lu(n){var e=hn(),t=e.queue;if(t===null)throw Error(J(311));t.lastRenderedReducer=n;var i=at,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((hr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,qe.lanes|=c,pr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Dn(i,e.memoizedState)||(zt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,qe.lanes|=s,pr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function uu(n){var e=hn(),t=e.queue;if(t===null)throw Error(J(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);Dn(s,e.memoizedState)||(zt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function _g(){}function xg(n,e){var t=qe,i=hn(),r=e(),s=!Dn(i.memoizedState,r);if(s&&(i.memoizedState=r,zt=!0),i=i.queue,Bf(wg.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||dt!==null&&dt.memoizedState.tag&1){if(t.flags|=2048,Co(9,Sg.bind(null,t,i,r,e),void 0,null),mt===null)throw Error(J(349));(hr&30)!==0||yg(t,e,r)}return r}function yg(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=qe.updateQueue,e===null?(e={lastEffect:null,stores:null},qe.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Sg(n,e,t,i){e.value=t,e.getSnapshot=i,Mg(e)&&Eg(n)}function wg(n,e,t){return t(function(){Mg(e)&&Eg(n)})}function Mg(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Dn(n,t)}catch{return!0}}function Eg(n){var e=ai(n,1);e!==null&&An(e,n,1,-1)}function eh(n){var e=Fn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:n},e.queue=n,n=n.dispatch=H_.bind(null,qe,n),[e.memoizedState,n]}function Co(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=qe.updateQueue,e===null?(e={lastEffect:null,stores:null},qe.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function bg(){return hn().memoizedState}function Na(n,e,t,i){var r=Fn();qe.flags|=n,r.memoizedState=Co(1|e,t,void 0,i===void 0?null:i)}function Ml(n,e,t,i){var r=hn();i=i===void 0?null:i;var s=void 0;if(at!==null){var o=at.memoizedState;if(s=o.destroy,i!==null&&zf(i,o.deps)){r.memoizedState=Co(e,t,s,i);return}}qe.flags|=n,r.memoizedState=Co(1|e,t,s,i)}function th(n,e){return Na(8390656,8,n,e)}function Bf(n,e){return Ml(2048,8,n,e)}function Tg(n,e){return Ml(4,2,n,e)}function Cg(n,e){return Ml(4,4,n,e)}function Ag(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Lg(n,e,t){return t=t!=null?t.concat([n]):null,Ml(4,4,Ag.bind(null,e,n),t)}function Vf(){}function Pg(n,e){var t=hn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&zf(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Dg(n,e){var t=hn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&zf(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Rg(n,e,t){return(hr&21)===0?(n.baseState&&(n.baseState=!1,zt=!0),n.memoizedState=t):(Dn(t,e)||(t=zm(),qe.lanes|=t,pr|=t,n.baseState=!0),e)}function V_(n,e){var t=ze;ze=t!==0&&4>t?t:4,n(!0);var i=au.transition;au.transition={};try{n(!1),e()}finally{ze=t,au.transition=i}}function Ig(){return hn().memoizedState}function G_(n,e,t){var i=ki(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},kg(n))Ng(e,t);else if(t=mg(n,e,t,i),t!==null){var r=Pt();An(t,n,i,r),Fg(t,e,i)}}function H_(n,e,t){var i=ki(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(kg(n))Ng(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,Dn(a,o)){var l=e.interleaved;l===null?(r.next=r,Rf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=mg(n,e,r,i),t!==null&&(r=Pt(),An(t,n,i,r),Fg(t,e,i))}}function kg(n){var e=n.alternate;return n===qe||e!==null&&e===qe}function Ng(n,e){oo=ll=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Fg(n,e,t){if((t&4194240)!==0){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,_f(n,t)}}var ul={readContext:dn,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useInsertionEffect:St,useLayoutEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useMutableSource:St,useSyncExternalStore:St,useId:St,unstable_isNewReconciler:!1},W_={readContext:dn,useCallback:function(n,e){return Fn().memoizedState=[n,e===void 0?null:e],n},useContext:dn,useEffect:th,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Na(4194308,4,Ag.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Na(4194308,4,n,e)},useInsertionEffect:function(n,e){return Na(4,2,n,e)},useMemo:function(n,e){var t=Fn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Fn();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=G_.bind(null,qe,n),[i.memoizedState,n]},useRef:function(n){var e=Fn();return n={current:n},e.memoizedState=n},useState:eh,useDebugValue:Vf,useDeferredValue:function(n){return Fn().memoizedState=n},useTransition:function(){var n=eh(!1),e=n[0];return n=V_.bind(null,n[1]),Fn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=qe,r=Fn();if(We){if(t===void 0)throw Error(J(407));t=t()}else{if(t=e(),mt===null)throw Error(J(349));(hr&30)!==0||yg(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,th(wg.bind(null,i,s,n),[n]),i.flags|=2048,Co(9,Sg.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Fn(),e=mt.identifierPrefix;if(We){var t=ti,i=ei;t=(i&~(1<<32-Cn(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=bo++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=B_++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},j_={readContext:dn,useCallback:Pg,useContext:dn,useEffect:Bf,useImperativeHandle:Lg,useInsertionEffect:Tg,useLayoutEffect:Cg,useMemo:Dg,useReducer:lu,useRef:bg,useState:function(){return lu(To)},useDebugValue:Vf,useDeferredValue:function(n){var e=hn();return Rg(e,at.memoizedState,n)},useTransition:function(){var n=lu(To)[0],e=hn().memoizedState;return[n,e]},useMutableSource:_g,useSyncExternalStore:xg,useId:Ig,unstable_isNewReconciler:!1},X_={readContext:dn,useCallback:Pg,useContext:dn,useEffect:Bf,useImperativeHandle:Lg,useInsertionEffect:Tg,useLayoutEffect:Cg,useMemo:Dg,useReducer:uu,useRef:bg,useState:function(){return uu(To)},useDebugValue:Vf,useDeferredValue:function(n){var e=hn();return at===null?e.memoizedState=n:Rg(e,at.memoizedState,n)},useTransition:function(){var n=uu(To)[0],e=hn().memoizedState;return[n,e]},useMutableSource:_g,useSyncExternalStore:xg,useId:Ig,unstable_isNewReconciler:!1};function Sn(n,e){if(n&&n.defaultProps){e=Ye({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Lc(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Ye({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var El={isMounted:function(n){return(n=n._reactInternals)?Sr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Pt(),r=ki(n),s=ni(i,r);s.payload=e,t!=null&&(s.callback=t),e=Ri(n,s,r),e!==null&&(An(e,n,r,i),Ia(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Pt(),r=ki(n),s=ni(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Ri(n,s,r),e!==null&&(An(e,n,r,i),Ia(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Pt(),i=ki(n),r=ni(t,i);r.tag=2,e!=null&&(r.callback=e),e=Ri(n,r,i),e!==null&&(An(e,n,i,t),Ia(e,n,i))}};function nh(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!xo(t,i)||!xo(r,s):!0}function zg(n,e,t){var i=!1,r=Ui,s=e.contextType;return typeof s=="object"&&s!==null?s=dn(s):(r=Ut(e)?fr:Tt.current,i=e.contextTypes,s=(i=i!=null)?ms(n,r):Ui),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=El,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function ih(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&El.enqueueReplaceState(e,e.state,null)}function Pc(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},If(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=dn(s):(s=Ut(e)?fr:Tt.current,r.context=ms(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Lc(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&El.enqueueReplaceState(r,r.state,null),ol(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function xs(n,e){try{var t="",i=e;do t+=yv(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function cu(n,e,t){return{value:n,source:null,stack:t!=null?t:null,digest:e!=null?e:null}}function Dc(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var $_=typeof WeakMap=="function"?WeakMap:Map;function Og(n,e,t){t=ni(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){fl||(fl=!0,Vc=i),Dc(n,e)},t}function Ug(n,e,t){t=ni(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Dc(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Dc(n,e),typeof i!="function"&&(Ii===null?Ii=new Set([this]):Ii.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function rh(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new $_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=ax.bind(null,n,e,t),e.then(n,n))}function sh(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function oh(n,e,t,i,r){return(n.mode&1)===0?(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=ni(-1,1),e.tag=2,Ri(t,e,1))),t.lanes|=1),n):(n.flags|=65536,n.lanes=r,n)}var q_=ui.ReactCurrentOwner,zt=!1;function Lt(n,e,t,i){e.child=n===null?pg(e,null,t,i):vs(e,n.child,t,i)}function ah(n,e,t,i,r){t=t.render;var s=e.ref;return cs(e,r),i=Of(n,e,t,i,s,r),t=Uf(),n!==null&&!zt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,li(n,e,r)):(We&&t&&Tf(e),e.flags|=1,Lt(n,e,i,r),e.child)}function lh(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Yf(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Bg(n,e,s,i,r)):(n=Ua(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,(n.lanes&r)===0){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:xo,t(o,i)&&n.ref===e.ref)return li(n,e,r)}return e.flags|=1,n=Ni(s,i),n.ref=e.ref,n.return=e,e.child=n}function Bg(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(xo(s,i)&&n.ref===e.ref)if(zt=!1,e.pendingProps=i=s,(n.lanes&r)!==0)(n.flags&131072)!==0&&(zt=!0);else return e.lanes=n.lanes,li(n,e,r)}return Rc(n,e,t,i,r)}function Vg(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ve(is,$t),$t|=t;else{if((t&1073741824)===0)return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Ve(is,$t),$t|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Ve(is,$t),$t|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Ve(is,$t),$t|=i;return Lt(n,e,r,t),e.child}function Gg(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Rc(n,e,t,i,r){var s=Ut(t)?fr:Tt.current;return s=ms(e,s),cs(e,r),t=Of(n,e,t,i,s,r),i=Uf(),n!==null&&!zt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,li(n,e,r)):(We&&i&&Tf(e),e.flags|=1,Lt(n,e,t,r),e.child)}function uh(n,e,t,i,r){if(Ut(t)){var s=!0;tl(e)}else s=!1;if(cs(e,r),e.stateNode===null)Fa(n,e),zg(e,t,i),Pc(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=dn(u):(u=Ut(t)?fr:Tt.current,u=ms(e,u));var c=t.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&ih(e,o,i,u),Si=!1;var d=e.memoizedState;o.state=d,ol(e,i,o,r),l=e.memoizedState,a!==i||d!==l||Ot.current||Si?(typeof c=="function"&&(Lc(e,t,c,i),l=e.memoizedState),(a=Si||nh(e,t,a,i,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,gg(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:Sn(e.type,a),o.props=u,f=e.pendingProps,d=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=dn(l):(l=Ut(t)?fr:Tt.current,l=ms(e,l));var g=t.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&ih(e,o,i,l),Si=!1,d=e.memoizedState,o.state=d,ol(e,i,o,r);var x=e.memoizedState;a!==f||d!==x||Ot.current||Si?(typeof g=="function"&&(Lc(e,t,g,i),x=e.memoizedState),(u=Si||nh(e,t,u,i,d,x,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return Ic(n,e,t,i,s,r)}function Ic(n,e,t,i,r,s){Gg(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&qd(e,t,!1),li(n,e,s);i=e.stateNode,q_.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=vs(e,n.child,null,s),e.child=vs(e,null,a,s)):Lt(n,e,a,s),e.memoizedState=i.state,r&&qd(e,t,!0),e.child}function Hg(n){var e=n.stateNode;e.pendingContext?$d(n,e.pendingContext,e.pendingContext!==e.context):e.context&&$d(n,e.context,!1),kf(n,e.containerInfo)}function ch(n,e,t,i,r){return gs(),Af(r),e.flags|=256,Lt(n,e,t,i),e.child}var kc={dehydrated:null,treeContext:null,retryLane:0};function Nc(n){return{baseLanes:n,cachePool:null,transitions:null}}function Wg(n,e,t){var i=e.pendingProps,r=Xe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Ve(Xe,r&1),n===null)return Cc(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((e.mode&1)===0?e.lanes=1:n.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Cl(o,i,0,null),n=ar(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Nc(t),e.memoizedState=kc,n):Gf(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Y_(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return(o&1)===0&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ni(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ni(a,s):(s=ar(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Nc(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=kc,i}return s=n.child,n=s.sibling,i=Ni(s,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Gf(n,e){return e=Cl({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Jo(n,e,t,i){return i!==null&&Af(i),vs(e,n.child,null,t),n=Gf(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Y_(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=cu(Error(J(422))),Jo(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Cl({mode:"visible",children:i.children},r,0,null),s=ar(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,(e.mode&1)!==0&&vs(e,n.child,null,o),e.child.memoizedState=Nc(o),e.memoizedState=kc,s);if((e.mode&1)===0)return Jo(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(J(419)),i=cu(s,i,void 0),Jo(n,e,o,i)}if(a=(o&n.childLanes)!==0,zt||a){if(i=mt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(i.suspendedLanes|o))!==0?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ai(n,r),An(i,n,r,-1))}return qf(),i=cu(Error(J(421))),Jo(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=lx.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Yt=Di(r.nextSibling),Zt=e,We=!0,Mn=null,n!==null&&(rn[sn++]=ei,rn[sn++]=ti,rn[sn++]=dr,ei=n.id,ti=n.overflow,dr=e),e=Gf(e,i.children),e.flags|=4096,e)}function fh(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Ac(n.return,e,t)}function fu(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function jg(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Lt(n,e,i.children,t),i=Xe.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&fh(n,t,e);else if(n.tag===19)fh(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Ve(Xe,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&al(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),fu(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&al(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}fu(e,!0,t,null,s);break;case"together":fu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Fa(n,e){(e.mode&1)===0&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function li(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),pr|=e.lanes,(t&e.childLanes)===0)return null;if(n!==null&&e.child!==n.child)throw Error(J(153));if(e.child!==null){for(n=e.child,t=Ni(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Ni(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Z_(n,e,t){switch(e.tag){case 3:Hg(e),gs();break;case 5:vg(e);break;case 1:Ut(e.type)&&tl(e);break;case 4:kf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ve(rl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ve(Xe,Xe.current&1),e.flags|=128,null):(t&e.child.childLanes)!==0?Wg(n,e,t):(Ve(Xe,Xe.current&1),n=li(n,e,t),n!==null?n.sibling:null);Ve(Xe,Xe.current&1);break;case 19:if(i=(t&e.childLanes)!==0,(n.flags&128)!==0){if(i)return jg(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ve(Xe,Xe.current),i)break;return null;case 22:case 23:return e.lanes=0,Vg(n,e,t)}return li(n,e,t)}var Xg,Fc,$g,qg;Xg=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Fc=function(){};$g=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,nr(Vn.current);var s=null;switch(t){case"input":r=rc(n,r),i=rc(n,i),s=[];break;case"select":r=Ye({},r,{value:void 0}),i=Ye({},i,{value:void 0}),s=[];break;case"textarea":r=ac(n,r),i=ac(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Ja)}uc(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(fo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(fo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ge("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};qg=function(n,e,t,i){t!==i&&(e.flags|=4)};function Vs(n,e){if(!We)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function wt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function K_(n,e,t){var i=e.pendingProps;switch(Cf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(e),null;case 1:return Ut(e.type)&&el(),wt(e),null;case 3:return i=e.stateNode,_s(),He(Ot),He(Tt),Ff(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Ko(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Mn!==null&&(Wc(Mn),Mn=null))),Fc(n,e),wt(e),null;case 5:Nf(e);var r=nr(Eo.current);if(t=e.type,n!==null&&e.stateNode!=null)$g(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(J(166));return wt(e),null}if(n=nr(Vn.current),Ko(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[On]=e,i[wo]=s,n=(e.mode&1)!==0,t){case"dialog":Ge("cancel",i),Ge("close",i);break;case"iframe":case"object":case"embed":Ge("load",i);break;case"video":case"audio":for(r=0;r<Ks.length;r++)Ge(Ks[r],i);break;case"source":Ge("error",i);break;case"img":case"image":case"link":Ge("error",i),Ge("load",i);break;case"details":Ge("toggle",i);break;case"input":yd(i,s),Ge("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ge("invalid",i);break;case"textarea":wd(i,s),Ge("invalid",i)}uc(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Zo(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Zo(i.textContent,a,n),r=["children",""+a]):fo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ge("scroll",i)}switch(t){case"input":Go(i),Sd(i,s,!0);break;case"textarea":Go(i),Md(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ja)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=wm(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[On]=e,n[wo]=i,Xg(n,e,!1,!1),e.stateNode=n;e:{switch(o=cc(t,i),t){case"dialog":Ge("cancel",n),Ge("close",n),r=i;break;case"iframe":case"object":case"embed":Ge("load",n),r=i;break;case"video":case"audio":for(r=0;r<Ks.length;r++)Ge(Ks[r],n);r=i;break;case"source":Ge("error",n),r=i;break;case"img":case"image":case"link":Ge("error",n),Ge("load",n),r=i;break;case"details":Ge("toggle",n),r=i;break;case"input":yd(n,i),r=rc(n,i),Ge("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Ye({},i,{value:void 0}),Ge("invalid",n);break;case"textarea":wd(n,i),r=ac(n,i),Ge("invalid",n);break;default:r=i}uc(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?bm(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Mm(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&ho(n,l):typeof l=="number"&&ho(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(fo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ge("scroll",n):l!=null&&df(n,s,l,o))}switch(t){case"input":Go(n),Sd(n,i,!1);break;case"textarea":Go(n),Md(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Oi(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?os(n,!!i.multiple,s,!1):i.defaultValue!=null&&os(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Ja)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return wt(e),null;case 6:if(n&&e.stateNode!=null)qg(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(J(166));if(t=nr(Eo.current),nr(Vn.current),Ko(e)){if(i=e.stateNode,t=e.memoizedProps,i[On]=e,(s=i.nodeValue!==t)&&(n=Zt,n!==null))switch(n.tag){case 3:Zo(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Zo(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[On]=e,e.stateNode=i}return wt(e),null;case 13:if(He(Xe),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(We&&Yt!==null&&(e.mode&1)!==0&&(e.flags&128)===0)dg(),gs(),e.flags|=98560,s=!1;else if(s=Ko(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(J(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(J(317));s[On]=e}else gs(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;wt(e),s=!1}else Mn!==null&&(Wc(Mn),Mn=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(n===null||(Xe.current&1)!==0?ut===0&&(ut=3):qf())),e.updateQueue!==null&&(e.flags|=4),wt(e),null);case 4:return _s(),Fc(n,e),n===null&&yo(e.stateNode.containerInfo),wt(e),null;case 10:return Df(e.type._context),wt(e),null;case 17:return Ut(e.type)&&el(),wt(e),null;case 19:if(He(Xe),s=e.memoizedState,s===null)return wt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Vs(s,!1);else{if(ut!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(o=al(n),o!==null){for(e.flags|=128,Vs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Ve(Xe,Xe.current&1|2),e.child}n=n.sibling}s.tail!==null&&nt()>ys&&(e.flags|=128,i=!0,Vs(s,!1),e.lanes=4194304)}else{if(!i)if(n=al(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Vs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!We)return wt(e),null}else 2*nt()-s.renderingStartTime>ys&&t!==1073741824&&(e.flags|=128,i=!0,Vs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=nt(),e.sibling=null,t=Xe.current,Ve(Xe,i?t&1|2:t&1),e):(wt(e),null);case 22:case 23:return $f(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?($t&1073741824)!==0&&(wt(e),e.subtreeFlags&6&&(e.flags|=8192)):wt(e),null;case 24:return null;case 25:return null}throw Error(J(156,e.tag))}function Q_(n,e){switch(Cf(e),e.tag){case 1:return Ut(e.type)&&el(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return _s(),He(Ot),He(Tt),Ff(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 5:return Nf(e),null;case 13:if(He(Xe),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(J(340));gs()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return He(Xe),null;case 4:return _s(),null;case 10:return Df(e.type._context),null;case 22:case 23:return $f(),null;case 24:return null;default:return null}}var ea=!1,bt=!1,J_=typeof WeakSet=="function"?WeakSet:Set,de=null;function ns(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Qe(n,e,i)}else t.current=null}function zc(n,e,t){try{t()}catch(i){Qe(n,e,i)}}var dh=!1;function ex(n,e){if(yc=Za,n=Jm(),bf(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=n,d=null;t:for(;;){for(var g;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)d=f,f=g;for(;;){if(f===n)break t;if(d===t&&++u===r&&(a=o),d===s&&++c===i&&(l=o),(g=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=g}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Sc={focusedElem:n,selectionRange:t},Za=!1,de=e;de!==null;)if(e=de,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,de=n;else for(;de!==null;){e=de;try{var x=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var p=x.memoizedProps,h=x.memoizedState,m=e.stateNode,v=m.getSnapshotBeforeUpdate(e.elementType===e.type?p:Sn(e.type,p),h);m.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(J(163))}}catch(S){Qe(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,de=n;break}de=e.return}return x=dh,dh=!1,x}function ao(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&zc(e,t,s)}r=r.next}while(r!==i)}}function bl(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Oc(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Yg(n){var e=n.alternate;e!==null&&(n.alternate=null,Yg(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[On],delete e[wo],delete e[Ec],delete e[F_],delete e[z_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Zg(n){return n.tag===5||n.tag===3||n.tag===4}function hh(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Zg(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Uc(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Ja));else if(i!==4&&(n=n.child,n!==null))for(Uc(n,e,t),n=n.sibling;n!==null;)Uc(n,e,t),n=n.sibling}function Bc(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Bc(n,e,t),n=n.sibling;n!==null;)Bc(n,e,t),n=n.sibling}var _t=null,wn=!1;function di(n,e,t){for(t=t.child;t!==null;)Kg(n,e,t),t=t.sibling}function Kg(n,e,t){if(Bn&&typeof Bn.onCommitFiberUnmount=="function")try{Bn.onCommitFiberUnmount(vl,t)}catch{}switch(t.tag){case 5:bt||ns(t,e);case 6:var i=_t,r=wn;_t=null,di(n,e,t),_t=i,wn=r,_t!==null&&(wn?(n=_t,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):_t.removeChild(t.stateNode));break;case 18:_t!==null&&(wn?(n=_t,t=t.stateNode,n.nodeType===8?ru(n.parentNode,t):n.nodeType===1&&ru(n,t),vo(n)):ru(_t,t.stateNode));break;case 4:i=_t,r=wn,_t=t.stateNode.containerInfo,wn=!0,di(n,e,t),_t=i,wn=r;break;case 0:case 11:case 14:case 15:if(!bt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&zc(t,e,o),r=r.next}while(r!==i)}di(n,e,t);break;case 1:if(!bt&&(ns(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Qe(t,e,a)}di(n,e,t);break;case 21:di(n,e,t);break;case 22:t.mode&1?(bt=(i=bt)||t.memoizedState!==null,di(n,e,t),bt=i):di(n,e,t);break;default:di(n,e,t)}}function ph(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new J_),e.forEach(function(i){var r=ux.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function mn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:_t=a.stateNode,wn=!1;break e;case 3:_t=a.stateNode.containerInfo,wn=!0;break e;case 4:_t=a.stateNode.containerInfo,wn=!0;break e}a=a.return}if(_t===null)throw Error(J(160));Kg(s,o,r),_t=null,wn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Qe(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Qg(e,n),e=e.sibling}function Qg(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(mn(e,n),Nn(n),i&4){try{ao(3,n,n.return),bl(3,n)}catch(p){Qe(n,n.return,p)}try{ao(5,n,n.return)}catch(p){Qe(n,n.return,p)}}break;case 1:mn(e,n),Nn(n),i&512&&t!==null&&ns(t,t.return);break;case 5:if(mn(e,n),Nn(n),i&512&&t!==null&&ns(t,t.return),n.flags&32){var r=n.stateNode;try{ho(r,"")}catch(p){Qe(n,n.return,p)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&ym(r,s),cc(a,o);var u=cc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?bm(r,f):c==="dangerouslySetInnerHTML"?Mm(r,f):c==="children"?ho(r,f):df(r,c,f,u)}switch(a){case"input":sc(r,s);break;case"textarea":Sm(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?os(r,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?os(r,!!s.multiple,s.defaultValue,!0):os(r,!!s.multiple,s.multiple?[]:"",!1))}r[wo]=s}catch(p){Qe(n,n.return,p)}}break;case 6:if(mn(e,n),Nn(n),i&4){if(n.stateNode===null)throw Error(J(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(p){Qe(n,n.return,p)}}break;case 3:if(mn(e,n),Nn(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{vo(e.containerInfo)}catch(p){Qe(n,n.return,p)}break;case 4:mn(e,n),Nn(n);break;case 13:mn(e,n),Nn(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(jf=nt())),i&4&&ph(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(bt=(u=bt)||c,mn(e,n),bt=u):mn(e,n),Nn(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&(n.mode&1)!==0)for(de=n,c=n.child;c!==null;){for(f=de=c;de!==null;){switch(d=de,g=d.child,d.tag){case 0:case 11:case 14:case 15:ao(4,d,d.return);break;case 1:ns(d,d.return);var x=d.stateNode;if(typeof x.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(p){Qe(i,t,p)}}break;case 5:ns(d,d.return);break;case 22:if(d.memoizedState!==null){gh(f);continue}}g!==null?(g.return=d,de=g):gh(f)}c=c.sibling}e:for(c=null,f=n;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Em("display",o))}catch(p){Qe(n,n.return,p)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(p){Qe(n,n.return,p)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:mn(e,n),Nn(n),i&4&&ph(n);break;case 21:break;default:mn(e,n),Nn(n)}}function Nn(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Zg(t)){var i=t;break e}t=t.return}throw Error(J(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ho(r,""),i.flags&=-33);var s=hh(n);Bc(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=hh(n);Uc(n,a,o);break;default:throw Error(J(161))}}catch(l){Qe(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function tx(n,e,t){de=n,Jg(n)}function Jg(n,e,t){for(var i=(n.mode&1)!==0;de!==null;){var r=de,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ea;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||bt;a=ea;var u=bt;if(ea=o,(bt=l)&&!u)for(de=r;de!==null;)o=de,l=o.child,o.tag===22&&o.memoizedState!==null?vh(r):l!==null?(l.return=o,de=l):vh(r);for(;s!==null;)de=s,Jg(s),s=s.sibling;de=r,ea=a,bt=u}mh(n)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,de=s):mh(n)}}function mh(n){for(;de!==null;){var e=de;if((e.flags&8772)!==0){var t=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:bt||bl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!bt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Sn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Jd(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Jd(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&vo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(J(163))}bt||e.flags&512&&Oc(e)}catch(d){Qe(e,e.return,d)}}if(e===n){de=null;break}if(t=e.sibling,t!==null){t.return=e.return,de=t;break}de=e.return}}function gh(n){for(;de!==null;){var e=de;if(e===n){de=null;break}var t=e.sibling;if(t!==null){t.return=e.return,de=t;break}de=e.return}}function vh(n){for(;de!==null;){var e=de;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{bl(4,e)}catch(l){Qe(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Qe(e,r,l)}}var s=e.return;try{Oc(e)}catch(l){Qe(e,s,l)}break;case 5:var o=e.return;try{Oc(e)}catch(l){Qe(e,o,l)}}}catch(l){Qe(e,e.return,l)}if(e===n){de=null;break}var a=e.sibling;if(a!==null){a.return=e.return,de=a;break}de=e.return}}var nx=Math.ceil,cl=ui.ReactCurrentDispatcher,Hf=ui.ReactCurrentOwner,cn=ui.ReactCurrentBatchConfig,Pe=0,mt=null,st=null,xt=0,$t=0,is=Gi(0),ut=0,Ao=null,pr=0,Tl=0,Wf=0,lo=null,Ft=null,jf=0,ys=1/0,Zn=null,fl=!1,Vc=null,Ii=null,ta=!1,Ti=null,dl=0,uo=0,Gc=null,za=-1,Oa=0;function Pt(){return(Pe&6)!==0?nt():za!==-1?za:za=nt()}function ki(n){return(n.mode&1)===0?1:(Pe&2)!==0&&xt!==0?xt&-xt:U_.transition!==null?(Oa===0&&(Oa=zm()),Oa):(n=ze,n!==0||(n=window.event,n=n===void 0?16:Wm(n.type)),n)}function An(n,e,t,i){if(50<uo)throw uo=0,Gc=null,Error(J(185));Io(n,t,i),((Pe&2)===0||n!==mt)&&(n===mt&&((Pe&2)===0&&(Tl|=t),ut===4&&Ei(n,xt)),Bt(n,i),t===1&&Pe===0&&(e.mode&1)===0&&(ys=nt()+500,wl&&Hi()))}function Bt(n,e){var t=n.callbackNode;Uv(n,e);var i=Ya(n,n===mt?xt:0);if(i===0)t!==null&&Td(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Td(t),e===1)n.tag===0?O_(_h.bind(null,n)):ug(_h.bind(null,n)),k_(function(){(Pe&6)===0&&Hi()}),t=null;else{switch(Om(i)){case 1:t=vf;break;case 4:t=Nm;break;case 16:t=qa;break;case 536870912:t=Fm;break;default:t=qa}t=a0(t,e0.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function e0(n,e){if(za=-1,Oa=0,(Pe&6)!==0)throw Error(J(327));var t=n.callbackNode;if(fs()&&n.callbackNode!==t)return null;var i=Ya(n,n===mt?xt:0);if(i===0)return null;if((i&30)!==0||(i&n.expiredLanes)!==0||e)e=hl(n,i);else{e=i;var r=Pe;Pe|=2;var s=n0();(mt!==n||xt!==e)&&(Zn=null,ys=nt()+500,or(n,e));do try{sx();break}catch(a){t0(n,a)}while(1);Pf(),cl.current=s,Pe=r,st!==null?e=0:(mt=null,xt=0,e=ut)}if(e!==0){if(e===2&&(r=mc(n),r!==0&&(i=r,e=Hc(n,r))),e===1)throw t=Ao,or(n,0),Ei(n,i),Bt(n,nt()),t;if(e===6)Ei(n,i);else{if(r=n.current.alternate,(i&30)===0&&!ix(r)&&(e=hl(n,i),e===2&&(s=mc(n),s!==0&&(i=s,e=Hc(n,s))),e===1))throw t=Ao,or(n,0),Ei(n,i),Bt(n,nt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(J(345));case 2:Zi(n,Ft,Zn);break;case 3:if(Ei(n,i),(i&130023424)===i&&(e=jf+500-nt(),10<e)){if(Ya(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Pt(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Mc(Zi.bind(null,n,Ft,Zn),e);break}Zi(n,Ft,Zn);break;case 4:if(Ei(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-Cn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=nt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*nx(i/1960))-i,10<i){n.timeoutHandle=Mc(Zi.bind(null,n,Ft,Zn),i);break}Zi(n,Ft,Zn);break;case 5:Zi(n,Ft,Zn);break;default:throw Error(J(329))}}}return Bt(n,nt()),n.callbackNode===t?e0.bind(null,n):null}function Hc(n,e){var t=lo;return n.current.memoizedState.isDehydrated&&(or(n,e).flags|=256),n=hl(n,e),n!==2&&(e=Ft,Ft=t,e!==null&&Wc(e)),n}function Wc(n){Ft===null?Ft=n:Ft.push.apply(Ft,n)}function ix(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Dn(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ei(n,e){for(e&=~Wf,e&=~Tl,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Cn(e),i=1<<t;n[t]=-1,e&=~i}}function _h(n){if((Pe&6)!==0)throw Error(J(327));fs();var e=Ya(n,0);if((e&1)===0)return Bt(n,nt()),null;var t=hl(n,e);if(n.tag!==0&&t===2){var i=mc(n);i!==0&&(e=i,t=Hc(n,i))}if(t===1)throw t=Ao,or(n,0),Ei(n,e),Bt(n,nt()),t;if(t===6)throw Error(J(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Zi(n,Ft,Zn),Bt(n,nt()),null}function Xf(n,e){var t=Pe;Pe|=1;try{return n(e)}finally{Pe=t,Pe===0&&(ys=nt()+500,wl&&Hi())}}function mr(n){Ti!==null&&Ti.tag===0&&(Pe&6)===0&&fs();var e=Pe;Pe|=1;var t=cn.transition,i=ze;try{if(cn.transition=null,ze=1,n)return n()}finally{ze=i,cn.transition=t,Pe=e,(Pe&6)===0&&Hi()}}function $f(){$t=is.current,He(is)}function or(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,I_(t)),st!==null)for(t=st.return;t!==null;){var i=t;switch(Cf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&el();break;case 3:_s(),He(Ot),He(Tt),Ff();break;case 5:Nf(i);break;case 4:_s();break;case 13:He(Xe);break;case 19:He(Xe);break;case 10:Df(i.type._context);break;case 22:case 23:$f()}t=t.return}if(mt=n,st=n=Ni(n.current,null),xt=$t=e,ut=0,Ao=null,Wf=Tl=pr=0,Ft=lo=null,tr!==null){for(e=0;e<tr.length;e++)if(t=tr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}tr=null}return n}function t0(n,e){do{var t=st;try{if(Pf(),ka.current=ul,ll){for(var i=qe.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ll=!1}if(hr=0,dt=at=qe=null,oo=!1,bo=0,Hf.current=null,t===null||t.return===null){ut=1,Ao=e,st=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=xt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if((c.mode&1)===0&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=sh(o);if(g!==null){g.flags&=-257,oh(g,o,a,s,e),g.mode&1&&rh(s,u,e),e=g,l=u;var x=e.updateQueue;if(x===null){var p=new Set;p.add(l),e.updateQueue=p}else x.add(l);break e}else{if((e&1)===0){rh(s,u,e),qf();break e}l=Error(J(426))}}else if(We&&a.mode&1){var h=sh(o);if(h!==null){(h.flags&65536)===0&&(h.flags|=256),oh(h,o,a,s,e),Af(xs(l,a));break e}}s=l=xs(l,a),ut!==4&&(ut=2),lo===null?lo=[s]:lo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=Og(s,l,e);Qd(s,m);break e;case 1:a=l;var v=s.type,_=s.stateNode;if((s.flags&128)===0&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Ii===null||!Ii.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Ug(s,a,e);Qd(s,S);break e}}s=s.return}while(s!==null)}r0(t)}catch(w){e=w,st===t&&t!==null&&(st=t=t.return);continue}break}while(1)}function n0(){var n=cl.current;return cl.current=ul,n===null?ul:n}function qf(){(ut===0||ut===3||ut===2)&&(ut=4),mt===null||(pr&268435455)===0&&(Tl&268435455)===0||Ei(mt,xt)}function hl(n,e){var t=Pe;Pe|=2;var i=n0();(mt!==n||xt!==e)&&(Zn=null,or(n,e));do try{rx();break}catch(r){t0(n,r)}while(1);if(Pf(),Pe=t,cl.current=i,st!==null)throw Error(J(261));return mt=null,xt=0,ut}function rx(){for(;st!==null;)i0(st)}function sx(){for(;st!==null&&!Pv();)i0(st)}function i0(n){var e=o0(n.alternate,n,$t);n.memoizedProps=n.pendingProps,e===null?r0(n):st=e,Hf.current=null}function r0(n){var e=n;do{var t=e.alternate;if(n=e.return,(e.flags&32768)===0){if(t=K_(t,e,$t),t!==null){st=t;return}}else{if(t=Q_(t,e),t!==null){t.flags&=32767,st=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ut=6,st=null;return}}if(e=e.sibling,e!==null){st=e;return}st=e=n}while(e!==null);ut===0&&(ut=5)}function Zi(n,e,t){var i=ze,r=cn.transition;try{cn.transition=null,ze=1,ox(n,e,t,i)}finally{cn.transition=r,ze=i}return null}function ox(n,e,t,i){do fs();while(Ti!==null);if((Pe&6)!==0)throw Error(J(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(J(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(Bv(n,s),n===mt&&(st=mt=null,xt=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||ta||(ta=!0,a0(qa,function(){return fs(),null})),s=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||s){s=cn.transition,cn.transition=null;var o=ze;ze=1;var a=Pe;Pe|=4,Hf.current=null,ex(n,t),Qg(t,n),T_(Sc),Za=!!yc,Sc=yc=null,n.current=t,tx(t),Dv(),Pe=a,ze=o,cn.transition=s}else n.current=t;if(ta&&(ta=!1,Ti=n,dl=r),s=n.pendingLanes,s===0&&(Ii=null),kv(t.stateNode),Bt(n,nt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(fl)throw fl=!1,n=Vc,Vc=null,n;return(dl&1)!==0&&n.tag!==0&&fs(),s=n.pendingLanes,(s&1)!==0?n===Gc?uo++:(uo=0,Gc=n):uo=0,Hi(),null}function fs(){if(Ti!==null){var n=Om(dl),e=cn.transition,t=ze;try{if(cn.transition=null,ze=16>n?16:n,Ti===null)var i=!1;else{if(n=Ti,Ti=null,dl=0,(Pe&6)!==0)throw Error(J(331));var r=Pe;for(Pe|=4,de=n.current;de!==null;){var s=de,o=s.child;if((de.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(de=u;de!==null;){var c=de;switch(c.tag){case 0:case 11:case 15:ao(8,c,s)}var f=c.child;if(f!==null)f.return=c,de=f;else for(;de!==null;){c=de;var d=c.sibling,g=c.return;if(Yg(c),c===u){de=null;break}if(d!==null){d.return=g,de=d;break}de=g}}}var x=s.alternate;if(x!==null){var p=x.child;if(p!==null){x.child=null;do{var h=p.sibling;p.sibling=null,p=h}while(p!==null)}}de=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,de=o;else e:for(;de!==null;){if(s=de,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:ao(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,de=m;break e}de=s.return}}var v=n.current;for(de=v;de!==null;){o=de;var _=o.child;if((o.subtreeFlags&2064)!==0&&_!==null)_.return=o,de=_;else e:for(o=v;de!==null;){if(a=de,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:bl(9,a)}}catch(w){Qe(a,a.return,w)}if(a===o){de=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,de=S;break e}de=a.return}}if(Pe=r,Hi(),Bn&&typeof Bn.onPostCommitFiberRoot=="function")try{Bn.onPostCommitFiberRoot(vl,n)}catch{}i=!0}return i}finally{ze=t,cn.transition=e}}return!1}function xh(n,e,t){e=xs(t,e),e=Og(n,e,1),n=Ri(n,e,1),e=Pt(),n!==null&&(Io(n,1,e),Bt(n,e))}function Qe(n,e,t){if(n.tag===3)xh(n,n,t);else for(;e!==null;){if(e.tag===3){xh(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ii===null||!Ii.has(i))){n=xs(t,n),n=Ug(e,n,1),e=Ri(e,n,1),n=Pt(),e!==null&&(Io(e,1,n),Bt(e,n));break}}e=e.return}}function ax(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Pt(),n.pingedLanes|=n.suspendedLanes&t,mt===n&&(xt&t)===t&&(ut===4||ut===3&&(xt&130023424)===xt&&500>nt()-jf?or(n,0):Wf|=t),Bt(n,e)}function s0(n,e){e===0&&((n.mode&1)===0?e=1:(e=jo,jo<<=1,(jo&130023424)===0&&(jo=4194304)));var t=Pt();n=ai(n,e),n!==null&&(Io(n,e,t),Bt(n,t))}function lx(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),s0(n,t)}function ux(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(J(314))}i!==null&&i.delete(e),s0(n,t)}var o0;o0=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Ot.current)zt=!0;else{if((n.lanes&t)===0&&(e.flags&128)===0)return zt=!1,Z_(n,e,t);zt=(n.flags&131072)!==0}else zt=!1,We&&(e.flags&1048576)!==0&&cg(e,il,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Fa(n,e),n=e.pendingProps;var r=ms(e,Tt.current);cs(e,t),r=Of(null,e,i,n,r,t);var s=Uf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ut(i)?(s=!0,tl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,If(e),r.updater=El,e.stateNode=r,r._reactInternals=e,Pc(e,i,n,t),e=Ic(null,e,i,!0,s,t)):(e.tag=0,We&&s&&Tf(e),Lt(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Fa(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=fx(i),n=Sn(i,n),r){case 0:e=Rc(null,e,i,n,t);break e;case 1:e=uh(null,e,i,n,t);break e;case 11:e=ah(null,e,i,n,t);break e;case 14:e=lh(null,e,i,Sn(i.type,n),t);break e}throw Error(J(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Sn(i,r),Rc(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Sn(i,r),uh(n,e,i,r,t);case 3:e:{if(Hg(e),n===null)throw Error(J(387));i=e.pendingProps,s=e.memoizedState,r=s.element,gg(n,e),ol(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=xs(Error(J(423)),e),e=ch(n,e,i,t,r);break e}else if(i!==r){r=xs(Error(J(424)),e),e=ch(n,e,i,t,r);break e}else for(Yt=Di(e.stateNode.containerInfo.firstChild),Zt=e,We=!0,Mn=null,t=pg(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(gs(),i===r){e=li(n,e,t);break e}Lt(n,e,i,t)}e=e.child}return e;case 5:return vg(e),n===null&&Cc(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,wc(i,r)?o=null:s!==null&&wc(i,s)&&(e.flags|=32),Gg(n,e),Lt(n,e,o,t),e.child;case 6:return n===null&&Cc(e),null;case 13:return Wg(n,e,t);case 4:return kf(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=vs(e,null,i,t):Lt(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Sn(i,r),ah(n,e,i,r,t);case 7:return Lt(n,e,e.pendingProps,t),e.child;case 8:return Lt(n,e,e.pendingProps.children,t),e.child;case 12:return Lt(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ve(rl,i._currentValue),i._currentValue=o,s!==null)if(Dn(s.value,o)){if(s.children===r.children&&!Ot.current){e=li(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ni(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Ac(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(J(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Ac(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Lt(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,cs(e,t),r=dn(r),i=i(r),e.flags|=1,Lt(n,e,i,t),e.child;case 14:return i=e.type,r=Sn(i,e.pendingProps),r=Sn(i.type,r),lh(n,e,i,r,t);case 15:return Bg(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Sn(i,r),Fa(n,e),e.tag=1,Ut(i)?(n=!0,tl(e)):n=!1,cs(e,t),zg(e,i,r),Pc(e,i,r,t),Ic(null,e,i,!0,n,t);case 19:return jg(n,e,t);case 22:return Vg(n,e,t)}throw Error(J(156,e.tag))};function a0(n,e){return km(n,e)}function cx(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ln(n,e,t,i){return new cx(n,e,t,i)}function Yf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function fx(n){if(typeof n=="function")return Yf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===pf)return 11;if(n===mf)return 14}return 2}function Ni(n,e){var t=n.alternate;return t===null?(t=ln(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Ua(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Yf(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case $r:return ar(t.children,r,s,e);case hf:o=8,r|=8;break;case ec:return n=ln(12,t,e,r|2),n.elementType=ec,n.lanes=s,n;case tc:return n=ln(13,t,e,r),n.elementType=tc,n.lanes=s,n;case nc:return n=ln(19,t,e,r),n.elementType=nc,n.lanes=s,n;case vm:return Cl(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case mm:o=10;break e;case gm:o=9;break e;case pf:o=11;break e;case mf:o=14;break e;case yi:o=16,i=null;break e}throw Error(J(130,n==null?n:typeof n,""))}return e=ln(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function ar(n,e,t,i){return n=ln(7,n,i,e),n.lanes=t,n}function Cl(n,e,t,i){return n=ln(22,n,i,e),n.elementType=vm,n.lanes=t,n.stateNode={isHidden:!1},n}function du(n,e,t){return n=ln(6,n,null,e),n.lanes=t,n}function hu(n,e,t){return e=ln(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function dx(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$l(0),this.expirationTimes=$l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$l(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Zf(n,e,t,i,r,s,o,a,l){return n=new dx(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ln(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},If(s),n}function hx(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xr,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function l0(n){if(!n)return Ui;n=n._reactInternals;e:{if(Sr(n)!==n||n.tag!==1)throw Error(J(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ut(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(J(171))}if(n.tag===1){var t=n.type;if(Ut(t))return lg(n,t,e)}return e}function u0(n,e,t,i,r,s,o,a,l){return n=Zf(t,i,!0,n,r,s,o,a,l),n.context=l0(null),t=n.current,i=Pt(),r=ki(t),s=ni(i,r),s.callback=e!=null?e:null,Ri(t,s,r),n.current.lanes=r,Io(n,r,i),Bt(n,i),n}function Al(n,e,t,i){var r=e.current,s=Pt(),o=ki(r);return t=l0(t),e.context===null?e.context=t:e.pendingContext=t,e=ni(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Ri(r,e,o),n!==null&&(An(n,r,o,s),Ia(n,r,o)),o}function pl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function yh(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Kf(n,e){yh(n,e),(n=n.alternate)&&yh(n,e)}function px(){return null}var c0=typeof reportError=="function"?reportError:function(n){console.error(n)};function Qf(n){this._internalRoot=n}Ll.prototype.render=Qf.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(J(409));Al(n,e,null,null)};Ll.prototype.unmount=Qf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;mr(function(){Al(null,n,null,null)}),e[oi]=null}};function Ll(n){this._internalRoot=n}Ll.prototype.unstable_scheduleHydration=function(n){if(n){var e=Vm();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Mi.length&&e!==0&&e<Mi[t].priority;t++);Mi.splice(t,0,n),t===0&&Hm(n)}};function Jf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Pl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Sh(){}function mx(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=pl(o);s.call(u)}}var o=u0(e,i,n,0,null,!1,!1,"",Sh);return n._reactRootContainer=o,n[oi]=o.current,yo(n.nodeType===8?n.parentNode:n),mr(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=pl(l);a.call(u)}}var l=Zf(n,0,!1,null,null,!1,!1,"",Sh);return n._reactRootContainer=l,n[oi]=l.current,yo(n.nodeType===8?n.parentNode:n),mr(function(){Al(e,l,t,i)}),l}function Dl(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=pl(o);a.call(l)}}Al(e,o,n,r)}else o=mx(t,e,n,r,i);return pl(o)}Um=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Zs(e.pendingLanes);t!==0&&(_f(e,t|1),Bt(e,nt()),(Pe&6)===0&&(ys=nt()+500,Hi()))}break;case 13:mr(function(){var i=ai(n,1);if(i!==null){var r=Pt();An(i,n,1,r)}}),Kf(n,1)}};xf=function(n){if(n.tag===13){var e=ai(n,134217728);if(e!==null){var t=Pt();An(e,n,134217728,t)}Kf(n,134217728)}};Bm=function(n){if(n.tag===13){var e=ki(n),t=ai(n,e);if(t!==null){var i=Pt();An(t,n,e,i)}Kf(n,e)}};Vm=function(){return ze};Gm=function(n,e){var t=ze;try{return ze=n,e()}finally{ze=t}};dc=function(n,e,t){switch(e){case"input":if(sc(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Sl(i);if(!r)throw Error(J(90));xm(i),sc(i,r)}}}break;case"textarea":Sm(n,t);break;case"select":e=t.value,e!=null&&os(n,!!t.multiple,e,!1)}};Am=Xf;Lm=mr;var gx={usingClientEntryPoint:!1,Events:[No,Kr,Sl,Tm,Cm,Xf]},Gs={findFiberByHostInstance:er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vx={bundleType:Gs.bundleType,version:Gs.version,rendererPackageName:Gs.rendererPackageName,rendererConfig:Gs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ui.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Rm(n),n===null?null:n.stateNode},findFiberByHostInstance:Gs.findFiberByHostInstance||px,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var na=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!na.isDisabled&&na.supportsFiber)try{vl=na.inject(vx),Bn=na}catch{}}Qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gx;Qt.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jf(e))throw Error(J(200));return hx(n,e,null,t)};Qt.createRoot=function(n,e){if(!Jf(n))throw Error(J(299));var t=!1,i="",r=c0;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Zf(n,1,!1,null,null,t,!1,i,r),n[oi]=e.current,yo(n.nodeType===8?n.parentNode:n),new Qf(e)};Qt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(J(188)):(n=Object.keys(n).join(","),Error(J(268,n)));return n=Rm(e),n=n===null?null:n.stateNode,n};Qt.flushSync=function(n){return mr(n)};Qt.hydrate=function(n,e,t){if(!Pl(e))throw Error(J(200));return Dl(null,n,e,!0,t)};Qt.hydrateRoot=function(n,e,t){if(!Jf(n))throw Error(J(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=c0;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=u0(e,null,n,1,t!=null?t:null,r,!1,s,o),n[oi]=e.current,yo(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Ll(e)};Qt.render=function(n,e,t){if(!Pl(e))throw Error(J(200));return Dl(null,n,e,!1,t)};Qt.unmountComponentAtNode=function(n){if(!Pl(n))throw Error(J(40));return n._reactRootContainer?(mr(function(){Dl(null,null,n,!1,function(){n._reactRootContainer=null,n[oi]=null})}),!0):!1};Qt.unstable_batchedUpdates=Xf;Qt.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Pl(t))throw Error(J(200));if(n==null||n._reactInternals===void 0)throw Error(J(38));return Dl(n,e,t,!1,i)};Qt.version="18.3.1-next-f1338f8080-20240426";(function(n){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}e(),n.exports=Qt})(fm);var wh=fm.exports;Qu.createRoot=wh.createRoot,Qu.hydrateRoot=wh.hydrateRoot;let _x=0;function xx(n,e){const t=`atom${++_x}`,i={toString:()=>t};return typeof n=="function"?i.read=n:(i.init=n,i.read=r=>r(i),i.write=(r,s,o)=>s(i,typeof o=="function"?o(r(i)):o)),e&&(i.write=e),i}const Bi=Symbol(),jc=n=>!!n[Bi],ia=n=>!n[Bi].c,Hs=n=>{var e;const{b:t,c:i}=n[Bi];i&&(i(),(e=Sx.get(t))==null||e())},Ba=(n,e)=>{const t=n[Bi].o,i=e[Bi].o;return t===i||n===i||jc(t)&&Ba(t,e)},Xc=(n,e)=>{const t={b:n,o:e,c:null},i=new Promise(r=>{t.c=()=>{t.c=null,r()},e.finally(t.c)});return i[Bi]=t,i},yx=n=>Xc(n[Bi].b,n[Bi].o),Sx=new WeakMap,ra=n=>"init"in n,$c="r",qc="w",ml="c",Yc="s",Mh="h",wx="n",Mx="l",Ex="a",bx="m",Tx=n=>{const e=new WeakMap,t=new WeakMap,i=new Map;let r,s;if(({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&(r=new Set,s=new Set),n)for(const[b,A]of n){const D={v:A,r:0,y:!0,d:new Map};({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&(Object.freeze(D),ra(b)||console.warn("Found initial value for derived atom which can cause unexpected behavior",b)),e.set(b,D)}const o=new WeakMap,a=(b,A,D)=>{let k=o.get(A);k||(k=new Map,o.set(A,k)),D.then(()=>{k.get(b)===D&&(k.delete(b),k.size||o.delete(A))}),k.set(b,D)},l=b=>{const A=new Set,D=o.get(b);return D&&(o.delete(b),D.forEach((k,U)=>{Hs(k),A.add(U)})),A},u=new WeakMap,c=b=>{let A=u.get(b);return A||(A=new Map,u.set(b,A)),A},f=(b,A)=>{if(b){const D=c(b);let k=D.get(A);return k||(k=f(b.p,A),k&&"p"in k&&ia(k.p)&&(k=void 0),k&&D.set(A,k)),k}return e.get(A)},d=(b,A,D)=>{if(({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&Object.freeze(D),b)c(b).set(A,D);else{const k=e.get(A);e.set(A,D),i.has(A)||i.set(A,k)}},g=(b,A=new Map,D)=>{if(!D)return A;const k=new Map;let U=!1;return D.forEach($=>{var R;const se=((R=f(b,$))==null?void 0:R.r)||0;k.set($,se),A.get($)!==se&&(U=!0)}),A.size===k.size&&!U?A:k},x=(b,A,D,k,U)=>{const $=f(b,A);if($){if(U&&(!("p"in $)||!Ba($.p,U)))return $;"p"in $&&Hs($.p)}const R={v:D,r:($==null?void 0:$.r)||0,y:!0,d:g(b,$==null?void 0:$.d,k)};let se=!($!=null&&$.y);return!$||!("v"in $)||!Object.is($.v,D)?(se=!0,++R.r,R.d.has(A)&&(R.d=new Map(R.d).set(A,R.r))):R.d!==$.d&&(R.d.size!==$.d.size||!Array.from(R.d.keys()).every(me=>$.d.has(me)))&&(se=!0,Promise.resolve().then(()=>{K(b)})),$&&!se?$:(d(b,A,R),R)},p=(b,A,D,k,U)=>{const $=f(b,A);if($){if(U&&(!("p"in $)||!Ba($.p,U)))return $;"p"in $&&Hs($.p)}const R={e:D,r:(($==null?void 0:$.r)||0)+1,y:!0,d:g(b,$==null?void 0:$.d,k)};return d(b,A,R),R},h=(b,A,D,k)=>{const U=f(b,A);if(U&&"p"in U){if(Ba(U.p,D)&&!ia(U.p))return U.y?U:{...U,y:!0};Hs(U.p)}a(b,A,D);const $={p:D,r:((U==null?void 0:U.r)||0)+1,y:!0,d:g(b,U==null?void 0:U.d,k)};return d(b,A,$),$},m=(b,A,D,k)=>{if(D instanceof Promise){const U=Xc(D,D.then($=>{x(b,A,$,k,U)}).catch($=>{if($ instanceof Promise)return jc($)?$.then(()=>{_(b,A,!0)}):$;p(b,A,$,k,U)}));return h(b,A,U,k)}return x(b,A,D,k)},v=(b,A)=>{const D=f(b,A);if(D){const k={...D,y:!1};d(b,A,k)}else({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&console.warn("[Bug] could not invalidate non existing atom",A)},_=(b,A,D)=>{if(!D){const U=f(b,A);if(U){if(U.y&&"p"in U&&!ia(U.p))return U;if(U.d.forEach(($,R)=>{if(R!==A)if(!t.has(R))_(b,R);else{const se=f(b,R);se&&!se.y&&_(b,R)}}),Array.from(U.d).every(([$,R])=>{const se=f(b,$);return se&&!("p"in se)&&se.r===R}))return U.y?U:{...U,y:!0}}}const k=new Set;try{const U=A.read($=>{k.add($);const R=$===A?f(b,$):_(b,$);if(R){if("e"in R)throw R.e;if("p"in R)throw R.p;return R.v}if(ra($))return $.init;throw new Error("no atom init")});return m(b,A,U,k)}catch(U){if(U instanceof Promise){const $=jc(U)&&ia(U)?yx(U):Xc(U,U);return h(b,A,$,k)}return p(b,A,U,k)}},S=(b,A)=>_(A,b),w=(b,A)=>{let D=t.get(A);return D||(D=ie(b,A)),D},T=(b,A)=>!A.l.size&&(!A.t.size||A.t.size===1&&A.t.has(b)),P=(b,A)=>{const D=t.get(A);D&&T(A,D)&&ee(b,A)},y=(b,A)=>{const D=t.get(A);D==null||D.t.forEach(k=>{k!==A&&(v(b,k),y(b,k))})},L=(b,A,D)=>{let k=!0;const U=(se,me)=>{const ge=_(b,se);if("e"in ge)throw ge.e;if("p"in ge){if(me!=null&&me.unstable_promise)return ge.p.then(()=>{const ce=f(b,se);return ce&&"p"in ce&&ce.p===ge.p?new Promise(Ie=>setTimeout(Ie)).then(()=>U(se,me)):U(se,me)});throw({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&console.info("Reading pending atom state in write operation. We throw a promise for now.",se),ge.p}if("v"in ge)return ge.v;throw({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&console.warn("[Bug] no value found while reading atom in write operation. This is probably a bug.",se),new Error("no value found")},$=(se,me)=>{let ge;if(se===A){if(!ra(se))throw new Error("atom not writable");l(se).forEach(xe=>{xe!==b&&m(xe,se,me)});const Ie=f(b,se),Me=m(b,se,me);Ie!==Me&&y(b,se)}else ge=L(b,se,me);return k||K(b),ge},R=A.write(U,$,D);return k=!1,R},O=(b,A,D)=>{const k=L(D,b,A);return K(D),k},G=b=>!!b.write,ie=(b,A,D)=>{const k={t:new Set(D&&[D]),l:new Set};if(t.set(A,k),({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&s.add(A),_(void 0,A).d.forEach(($,R)=>{const se=t.get(R);se?se.t.add(A):R!==A&&ie(b,R,A)}),G(A)&&A.onMount){const $=se=>O(A,se,b),R=A.onMount($);b=void 0,R&&(k.u=R)}return k},ee=(b,A)=>{var D;const k=(D=t.get(A))==null?void 0:D.u;k&&k(),t.delete(A),({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&s.delete(A);const U=f(b,A);U?("p"in U&&Hs(U.p),U.d.forEach(($,R)=>{if(R!==A){const se=t.get(R);se&&(se.t.delete(A),T(R,se)&&ee(b,R))}})):({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&console.warn("[Bug] could not find atom state to unmount",A)},B=(b,A,D,k)=>{const U=new Set(D.d.keys());k==null||k.forEach(($,R)=>{if(U.has(R)){U.delete(R);return}const se=t.get(R);se&&(se.t.delete(A),T(R,se)&&ee(b,R))}),U.forEach($=>{const R=t.get($);R?R.t.add(A):t.has(A)&&ie(b,$,A)})},K=b=>{if(b){c(b).forEach((D,k)=>{const U=e.get(k);if(D!==U){const $=t.get(k);$==null||$.l.forEach(R=>R(b))}});return}for(;i.size;){const A=Array.from(i);i.clear(),A.forEach(([D,k])=>{const U=f(void 0,D);if(U&&U.d!==(k==null?void 0:k.d)&&B(void 0,D,U,k==null?void 0:k.d),k&&!k.y&&(U==null?void 0:U.y))return;const $=t.get(D);$==null||$.l.forEach(R=>R())})}({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&r.forEach(A=>A())},X=b=>{c(b).forEach((D,k)=>{const U=e.get(k);(!U||D.r>U.r||D.y!==U.y||D.r===U.r&&D.d!==U.d)&&(e.set(k,D),D.d!==(U==null?void 0:U.d)&&B(b,k,D,U==null?void 0:U.d))})},Q=(b,A)=>{A&&X(A),K(void 0)},F=(b,A,D)=>{const U=w(D,b).l;return U.add(A),()=>{U.delete(A),P(D,b)}},I=(b,A)=>{for(const[D,k]of b)ra(D)&&(m(A,D,k),y(A,D));K(A)};return({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"?{[$c]:S,[qc]:O,[ml]:Q,[Yc]:F,[Mh]:I,[wx]:b=>(r.add(b),()=>{r.delete(b)}),[Mx]:()=>s.values(),[Ex]:b=>e.get(b),[bx]:b=>t.get(b)}:{[$c]:S,[qc]:O,[ml]:Q,[Yc]:F,[Mh]:I}},Cx=(n,e)=>({s:e?e(n).SECRET_INTERNAL_store:Tx(n)}),pu=new Map,f0=n=>(pu.has(n)||pu.set(n,lt.exports.createContext(Cx())),pu.get(n));function ed(n,e){return xx(n,e)}function Ls(n,e){const t=f0(e),i=lt.exports.useContext(t),{s:r,v:s}=i,o=d=>{const g=r[$c](n,d);if(({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&!g.y)throw new Error("should not be invalidated");if("e"in g)throw g.e;if("p"in g)throw g.p;if("v"in g)return g.v;throw new Error("no atom value")},[[a,l,u],c]=lt.exports.useReducer((d,g)=>{const x=o(g);return Object.is(d[1],x)&&d[2]===n?d:[g,x,n]},s,d=>{const g=o(d);return[d,g,n]});let f=l;return u!==n&&(c(a),f=o(a)),lt.exports.useEffect(()=>{const{v:d}=i;d&&r[ml](n,d);const g=r[Yc](n,c,d);return c(d),g},[r,n,i]),lt.exports.useEffect(()=>{r[ml](n,a)}),lt.exports.useDebugValue(f),f}function td(n,e){const t=f0(e),{s:i,w:r}=lt.exports.useContext(t);return lt.exports.useCallback(o=>{if(({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&!("write"in n))throw new Error("not writable atom");const a=l=>i[qc](n,o,l);return r?r(a):a()},[i,r,n])}function Ax(n,e){return"scope"in n&&(console.warn("atom.scope is deprecated. Please do useAtom(atom, scope) instead."),e=n.scope),[Ls(n,e),td(n,e)]}var d0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Eh=Wa.createContext&&Wa.createContext(d0),nd={exports:{}},Rl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lx=lt.exports,Px=Symbol.for("react.element"),Dx=Symbol.for("react.fragment"),Rx=Object.prototype.hasOwnProperty,Ix=Lx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kx={key:!0,ref:!0,__self:!0,__source:!0};function h0(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Rx.call(e,i)&&!kx.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Px,type:n,key:s,ref:o,props:r,_owner:Ix.current}}Rl.Fragment=Dx;Rl.jsx=h0;Rl.jsxs=h0;(function(n){n.exports=Rl})(nd);const $e=nd.exports.jsx,lr=nd.exports.jsxs;var Fi=globalThis&&globalThis.__assign||function(){return Fi=Object.assign||function(n){for(var e,t=1,i=arguments.length;t<i;t++){e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},Fi.apply(this,arguments)},Nx=globalThis&&globalThis.__rest||function(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t};function p0(n){return n&&n.map(function(e,t){return Wa.createElement(e.tag,Fi({key:t},e.attr),p0(e.child))})}function Fx(n){return function(e){return $e(zx,{...Fi({attr:Fi({},n.attr)},e),children:p0(n.child)})}}function zx(n){var e=function(t){var i=n.attr,r=n.size,s=n.title,o=Nx(n,["attr","size","title"]),a=r||t.size||"1em",l;return t.className&&(l=t.className),n.className&&(l=(l?l+" ":"")+n.className),lr("svg",{...Fi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,o,{className:l,style:Fi(Fi({color:n.color||t.color},t.style),n.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),children:[s&&$e("title",{children:s}),n.children]})};return Eh!==void 0?$e(Eh.Consumer,{children:function(t){return e(t)}}):e(d0)}function Ox(n){return Fx({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z",clipRule:"evenodd"}}]})(n)}const id=ed({show:!1,message:""});/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rd="143",Ux=0,bh=1,Bx=2,m0=1,Vx=2,Qs=3,Lo=0,Ln=1,Ss=2,Gx=1,zi=0,ds=1,Th=2,Ch=3,Ah=4,Hx=5,Wr=100,Wx=101,jx=102,Lh=103,Ph=104,Xx=200,$x=201,qx=202,Yx=203,g0=204,v0=205,Zx=206,Kx=207,Qx=208,Jx=209,ey=210,ty=0,ny=1,iy=2,Zc=3,ry=4,sy=5,oy=6,ay=7,_0=0,ly=1,uy=2,ii=0,cy=1,fy=2,dy=3,hy=4,py=5,x0=300,ws=301,Ms=302,Kc=303,Qc=304,Il=306,Jc=1e3,En=1001,ef=1002,ht=1003,Dh=1004,Rh=1005,on=1006,my=1007,kl=1008,gr=1009,gy=1010,vy=1011,y0=1012,_y=1013,ir=1014,rr=1015,Po=1016,xy=1017,yy=1018,hs=1020,Sy=1021,wy=1022,Un=1023,My=1024,Ey=1025,ur=1026,Es=1027,by=1028,Ty=1029,Cy=1030,Ay=1031,Ly=1033,mu=33776,gu=33777,vu=33778,_u=33779,Ih=35840,kh=35841,Nh=35842,Fh=35843,Py=36196,zh=37492,Oh=37496,Uh=37808,Bh=37809,Vh=37810,Gh=37811,Hh=37812,Wh=37813,jh=37814,Xh=37815,$h=37816,qh=37817,Yh=37818,Zh=37819,Kh=37820,Qh=37821,Jh=36492,vr=3e3,je=3001,Dy=3200,Ry=3201,Iy=0,ky=1,Kn="srgb",sr="srgb-linear",xu=7680,Ny=519,ep=35044,tp="300 es",tf=1035;class wr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yu=Math.PI/180,np=180/Math.PI;function zo(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[i&255]+Mt[i>>8&255]+Mt[i>>16&255]+Mt[i>>24&255]).toLowerCase()}function qt(n,e,t){return Math.max(e,Math.min(t,n))}function Fy(n,e){return(n%e+e)%e}function Su(n,e,t){return(1-t)*n+t*e}function ip(n){return(n&n-1)===0&&n!==0}function nf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class un{constructor(){un.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],g=i[5],x=i[8],p=r[0],h=r[3],m=r[6],v=r[1],_=r[4],S=r[7],w=r[2],T=r[5],P=r[8];return s[0]=o*p+a*v+l*w,s[3]=o*h+a*_+l*T,s[6]=o*m+a*S+l*P,s[1]=u*p+c*v+f*w,s[4]=u*h+c*_+f*T,s[7]=u*m+c*S+f*P,s[2]=d*p+g*v+x*w,s[5]=d*h+g*_+x*T,s[8]=d*m+g*S+x*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,d=a*l-c*s,g=u*s-o*l,x=t*f+i*d+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/x;return e[0]=f*p,e[1]=(r*u-c*i)*p,e[2]=(a*i-r*o)*p,e[3]=d*p,e[4]=(c*t-r*l)*p,e[5]=(r*s-a*t)*p,e[6]=g*p,e[7]=(i*l-u*t)*p,e[8]=(o*t-i*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],u=r[4],c=r[7];return r[0]=t*s+i*l,r[3]=t*o+i*u,r[6]=t*a+i*c,r[1]=-i*s+t*l,r[4]=-i*o+t*u,r[7]=-i*a+t*c,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function S0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>65535)return!0;return!1}function Do(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function cr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Va(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const wu={[Kn]:{[sr]:cr},[sr]:{[Kn]:Va}},gn={legacyMode:!0,get workingColorSpace(){return sr},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(wu[e]&&wu[e][t]!==void 0){const i=wu[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},w0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ot={r:0,g:0,b:0},vn={h:0,s:0,l:0},sa={h:0,s:0,l:0};function Mu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function oa(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class Be{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=sr){return this.r=e,this.g=t,this.b=i,gn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=sr){if(e=Fy(e,1),t=qt(t,0,1),i=qt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Mu(o,s,e+1/3),this.g=Mu(o,s,e),this.b=Mu(o,s,e-1/3)}return gn.toWorkingColorSpace(this,r),this}setStyle(e,t=Kn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,gn.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,gn.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseInt(s[2],10)/100,c=parseInt(s[3],10)/100;return i(s[4]),this.setHSL(l,u,c,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,gn.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,gn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Kn){const i=w0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}copyLinearToSRGB(e){return this.r=Va(e.r),this.g=Va(e.g),this.b=Va(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return gn.fromWorkingColorSpace(oa(this,ot),e),qt(ot.r*255,0,255)<<16^qt(ot.g*255,0,255)<<8^qt(ot.b*255,0,255)<<0}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=sr){gn.fromWorkingColorSpace(oa(this,ot),t);const i=ot.r,r=ot.g,s=ot.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=sr){return gn.fromWorkingColorSpace(oa(this,ot),t),e.r=ot.r,e.g=ot.g,e.b=ot.b,e}getStyle(e=Kn){return gn.fromWorkingColorSpace(oa(this,ot),e),e!==Kn?`color(${e} ${ot.r} ${ot.g} ${ot.b})`:`rgb(${ot.r*255|0},${ot.g*255|0},${ot.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(vn),vn.h+=e,vn.s+=t,vn.l+=i,this.setHSL(vn.h,vn.s,vn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(vn),e.getHSL(sa);const i=Su(vn.h,sa.h,t),r=Su(vn.s,sa.s,t),s=Su(vn.l,sa.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Be.NAMES=w0;let Ar;class M0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ar===void 0&&(Ar=Do("canvas")),Ar.width=e.width,Ar.height=e.height;const i=Ar.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ar}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Do("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=cr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(cr(t[i]/255)*255):t[i]=cr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class E0{constructor(e=null){this.isSource=!0,this.uuid=zo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Eu(r[o].image)):s.push(Eu(r[o]))}else s=Eu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Eu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?M0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zy=0;class pn extends wr{constructor(e=pn.DEFAULT_IMAGE,t=pn.DEFAULT_MAPPING,i=En,r=En,s=on,o=kl,a=Un,l=gr,u=1,c=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zy++}),this.uuid=zo(),this.name="",this.source=new E0(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new un,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==x0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jc:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case ef:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jc:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case ef:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=x0;class pt{constructor(e=0,t=0,i=0,r=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],g=l[5],x=l[9],p=l[2],h=l[6],m=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-p)<.01&&Math.abs(x-h)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+p)<.1&&Math.abs(x+h)<.1&&Math.abs(u+g+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(u+1)/2,S=(g+1)/2,w=(m+1)/2,T=(c+d)/4,P=(f+p)/4,y=(x+h)/4;return _>S&&_>w?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=T/i,s=P/i):S>w?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=y/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=P/s,r=y/s),this.set(i,r,s,t),this}let v=Math.sqrt((h-x)*(h-x)+(f-p)*(f-p)+(d-c)*(d-c));return Math.abs(v)<.001&&(v=1),this.x=(h-x)/v,this.y=(f-p)/v,this.z=(d-c)/v,this.w=Math.acos((u+g+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _r extends wr{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new pn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:on,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new E0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class b0 extends pn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ht,this.minFilter=ht,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oy extends pn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ht,this.minFilter=ht,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ps{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const d=s[o+0],g=s[o+1],x=s[o+2],p=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=g,e[t+2]=x,e[t+3]=p;return}if(f!==p||l!==d||u!==g||c!==x){let h=1-a;const m=l*d+u*g+c*x+f*p,v=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const w=Math.sqrt(_),T=Math.atan2(w,m*v);h=Math.sin(h*T)/w,a=Math.sin(a*T)/w}const S=a*v;if(l=l*h+d*S,u=u*h+g*S,c=c*h+x*S,f=f*h+p*S,h===1-a){const w=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=w,u*=w,c*=w,f*=w}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],d=s[o+1],g=s[o+2],x=s[o+3];return e[t]=a*x+c*f+l*g-u*d,e[t+1]=l*x+c*d+u*f-a*g,e[t+2]=u*x+c*g+a*d-l*f,e[t+3]=c*x-a*f-l*d-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),d=l(i/2),g=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=d*c*f+u*g*x,this._y=u*g*f-d*c*x,this._z=u*c*x+d*g*f,this._w=u*c*f-d*g*x;break;case"YXZ":this._x=d*c*f+u*g*x,this._y=u*g*f-d*c*x,this._z=u*c*x-d*g*f,this._w=u*c*f+d*g*x;break;case"ZXY":this._x=d*c*f-u*g*x,this._y=u*g*f+d*c*x,this._z=u*c*x+d*g*f,this._w=u*c*f-d*g*x;break;case"ZYX":this._x=d*c*f-u*g*x,this._y=u*g*f+d*c*x,this._z=u*c*x-d*g*f,this._w=u*c*f+d*g*x;break;case"YZX":this._x=d*c*f+u*g*x,this._y=u*g*f+d*c*x,this._z=u*c*x-d*g*f,this._w=u*c*f-d*g*x;break;case"XZY":this._x=d*c*f-u*g*x,this._y=u*g*f-d*c*x,this._z=u*c*x+d*g*f,this._w=u*c*f+d*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],d=i+a+f;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(c-l)*g,this._y=(s-u)*g,this._z=(o-r)*g}else if(i>a&&i>f){const g=2*Math.sqrt(1+i-a-f);this._w=(c-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+u)/g}else if(a>f){const g=2*Math.sqrt(1+a-i-f);this._w=(s-u)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+c)/g}else{const g=2*Math.sqrt(1+f-i-a);this._w=(o-r)/g,this._x=(s+u)/g,this._y=(l+c)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*i+t*this._x,this._y=g*r+t*this._y,this._z=g*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,d=Math.sin(t*c)/u;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*t+o*r-a*i,c=l*i+a*t-s*r,f=l*r+s*i-o*t,d=-s*t-o*i-a*r;return this.x=u*l+d*-s+c*-a-f*-o,this.y=c*l+d*-o+f*-s-u*-a,this.z=f*l+d*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bu.copy(this).projectOnVector(e),this.sub(bu)}reflect(e){return this.sub(bu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bu=new z,rp=new Ps;class Oo{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],f=e[l+1],d=e[l+2];c<t&&(t=c),f<i&&(i=f),d<r&&(r=d),c>s&&(s=c),f>o&&(o=f),d>a&&(a=d)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),f=e.getY(l),d=e.getZ(l);c<t&&(t=c),f<i&&(i=f),d<r&&(r=d),c>s&&(s=c),f>o&&(o=f),d>a&&(a=d)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ji.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)ji.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ji)}else i.boundingBox===null&&i.computeBoundingBox(),Tu.copy(i.boundingBox),Tu.applyMatrix4(e.matrixWorld),this.union(Tu);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ji),ji.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ws),aa.subVectors(this.max,Ws),Lr.subVectors(e.a,Ws),Pr.subVectors(e.b,Ws),Dr.subVectors(e.c,Ws),hi.subVectors(Pr,Lr),pi.subVectors(Dr,Pr),Xi.subVectors(Lr,Dr);let t=[0,-hi.z,hi.y,0,-pi.z,pi.y,0,-Xi.z,Xi.y,hi.z,0,-hi.x,pi.z,0,-pi.x,Xi.z,0,-Xi.x,-hi.y,hi.x,0,-pi.y,pi.x,0,-Xi.y,Xi.x,0];return!Cu(t,Lr,Pr,Dr,aa)||(t=[1,0,0,0,1,0,0,0,1],!Cu(t,Lr,Pr,Dr,aa))?!1:(la.crossVectors(hi,pi),t=[la.x,la.y,la.z],Cu(t,Lr,Pr,Dr,aa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ji.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(ji).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const jn=[new z,new z,new z,new z,new z,new z,new z,new z],ji=new z,Tu=new Oo,Lr=new z,Pr=new z,Dr=new z,hi=new z,pi=new z,Xi=new z,Ws=new z,aa=new z,la=new z,$i=new z;function Cu(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){$i.fromArray(n,s);const a=r.x*Math.abs($i.x)+r.y*Math.abs($i.y)+r.z*Math.abs($i.z),l=e.dot($i),u=t.dot($i),c=i.dot($i);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Uy=new Oo,sp=new z,ua=new z,Au=new z;class Nl{constructor(e=new z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Uy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Au.subVectors(e,this.center);const t=Au.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(Au.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?ua.set(0,0,1).multiplyScalar(e.radius):ua.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(sp.copy(e.center).add(ua)),this.expandByPoint(sp.copy(e.center).sub(ua)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xn=new z,Lu=new z,ca=new z,mi=new z,Pu=new z,fa=new z,Du=new z;class sd{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.direction).multiplyScalar(t).add(this.origin),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Lu.copy(e).add(t).multiplyScalar(.5),ca.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(Lu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ca),a=mi.dot(this.direction),l=-mi.dot(ca),u=mi.lengthSq(),c=Math.abs(1-o*o);let f,d,g,x;if(c>0)if(f=o*l-a,d=o*a-l,x=s*c,f>=0)if(d>=-x)if(d<=x){const p=1/c;f*=p,d*=p,g=f*(f+o*d+2*a)+d*(o*f+d+2*l)+u}else d=s,f=Math.max(0,-(o*d+a)),g=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(o*d+a)),g=-f*f+d*(d+2*l)+u;else d<=-x?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),g=-f*f+d*(d+2*l)+u):d<=x?(f=0,d=Math.min(Math.max(-s,-l),s),g=d*(d+2*l)+u):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),g=-f*f+d*(d+2*l)+u);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),g=-f*f+d*(d+2*l)+u;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(ca).multiplyScalar(d).add(Lu),g}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);const i=Xn.dot(this.direction),r=Xn.dot(Xn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,i,r,s){Pu.subVectors(t,e),fa.subVectors(i,e),Du.crossVectors(Pu,fa);let o=this.direction.dot(Du),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mi.subVectors(this.origin,e);const l=a*this.direction.dot(fa.crossVectors(mi,fa));if(l<0)return null;const u=a*this.direction.dot(Pu.cross(mi));if(u<0||l+u>o)return null;const c=-a*mi.dot(Du);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,o,a,l,u,c,f,d,g,x,p,h){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=u,m[6]=c,m[10]=f,m[14]=d,m[3]=g,m[7]=x,m[11]=p,m[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Rr.setFromMatrixColumn(e,0).length(),s=1/Rr.setFromMatrixColumn(e,1).length(),o=1/Rr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*c,g=o*f,x=a*c,p=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=g+x*u,t[5]=d-p*u,t[9]=-a*l,t[2]=p-d*u,t[6]=x+g*u,t[10]=o*l}else if(e.order==="YXZ"){const d=l*c,g=l*f,x=u*c,p=u*f;t[0]=d+p*a,t[4]=x*a-g,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=g*a-x,t[6]=p+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*c,g=l*f,x=u*c,p=u*f;t[0]=d-p*a,t[4]=-o*f,t[8]=x+g*a,t[1]=g+x*a,t[5]=o*c,t[9]=p-d*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*c,g=o*f,x=a*c,p=a*f;t[0]=l*c,t[4]=x*u-g,t[8]=d*u+p,t[1]=l*f,t[5]=p*u+d,t[9]=g*u-x,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,g=o*u,x=a*l,p=a*u;t[0]=l*c,t[4]=p-d*f,t[8]=x*f+g,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=g*f+x,t[10]=d-p*f}else if(e.order==="XZY"){const d=o*l,g=o*u,x=a*l,p=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=d*f+p,t[5]=o*c,t[9]=g*f-x,t[2]=x*f-g,t[6]=a*c,t[10]=p*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(By,e,Vy)}lookAt(e,t,i){const r=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),gi.crossVectors(i,Wt),gi.lengthSq()===0&&(Math.abs(i.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),gi.crossVectors(i,Wt)),gi.normalize(),da.crossVectors(Wt,gi),r[0]=gi.x,r[4]=da.x,r[8]=Wt.x,r[1]=gi.y,r[5]=da.y,r[9]=Wt.y,r[2]=gi.z,r[6]=da.z,r[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],g=i[13],x=i[2],p=i[6],h=i[10],m=i[14],v=i[3],_=i[7],S=i[11],w=i[15],T=r[0],P=r[4],y=r[8],L=r[12],O=r[1],G=r[5],ie=r[9],ee=r[13],B=r[2],K=r[6],X=r[10],Q=r[14],F=r[3],I=r[7],b=r[11],A=r[15];return s[0]=o*T+a*O+l*B+u*F,s[4]=o*P+a*G+l*K+u*I,s[8]=o*y+a*ie+l*X+u*b,s[12]=o*L+a*ee+l*Q+u*A,s[1]=c*T+f*O+d*B+g*F,s[5]=c*P+f*G+d*K+g*I,s[9]=c*y+f*ie+d*X+g*b,s[13]=c*L+f*ee+d*Q+g*A,s[2]=x*T+p*O+h*B+m*F,s[6]=x*P+p*G+h*K+m*I,s[10]=x*y+p*ie+h*X+m*b,s[14]=x*L+p*ee+h*Q+m*A,s[3]=v*T+_*O+S*B+w*F,s[7]=v*P+_*G+S*K+w*I,s[11]=v*y+_*ie+S*X+w*b,s[15]=v*L+_*ee+S*Q+w*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],g=e[14],x=e[3],p=e[7],h=e[11],m=e[15];return x*(+s*l*f-r*u*f-s*a*d+i*u*d+r*a*g-i*l*g)+p*(+t*l*g-t*u*d+s*o*d-r*o*g+r*u*c-s*l*c)+h*(+t*u*f-t*a*g-s*o*f+i*o*g+s*a*c-i*u*c)+m*(-r*a*c-t*l*f+t*a*d+r*o*f-i*o*d+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],g=e[11],x=e[12],p=e[13],h=e[14],m=e[15],v=f*h*u-p*d*u+p*l*g-a*h*g-f*l*m+a*d*m,_=x*d*u-c*h*u-x*l*g+o*h*g+c*l*m-o*d*m,S=c*p*u-x*f*u+x*a*g-o*p*g-c*a*m+o*f*m,w=x*f*l-c*p*l-x*a*d+o*p*d+c*a*h-o*f*h,T=t*v+i*_+r*S+s*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/T;return e[0]=v*P,e[1]=(p*d*s-f*h*s-p*r*g+i*h*g+f*r*m-i*d*m)*P,e[2]=(a*h*s-p*l*s+p*r*u-i*h*u-a*r*m+i*l*m)*P,e[3]=(f*l*s-a*d*s-f*r*u+i*d*u+a*r*g-i*l*g)*P,e[4]=_*P,e[5]=(c*h*s-x*d*s+x*r*g-t*h*g-c*r*m+t*d*m)*P,e[6]=(x*l*s-o*h*s-x*r*u+t*h*u+o*r*m-t*l*m)*P,e[7]=(o*d*s-c*l*s+c*r*u-t*d*u-o*r*g+t*l*g)*P,e[8]=S*P,e[9]=(x*f*s-c*p*s-x*i*g+t*p*g+c*i*m-t*f*m)*P,e[10]=(o*p*s-x*a*s+x*i*u-t*p*u-o*i*m+t*a*m)*P,e[11]=(c*a*s-o*f*s-c*i*u+t*f*u+o*i*g-t*a*g)*P,e[12]=w*P,e[13]=(c*p*r-x*f*r+x*i*d-t*p*d-c*i*h+t*f*h)*P,e[14]=(x*a*r-o*p*r-x*i*l+t*p*l+o*i*h-t*a*h)*P,e[15]=(o*f*r-c*a*r+c*i*l-t*f*l-o*i*d+t*a*d)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,d=s*u,g=s*c,x=s*f,p=o*c,h=o*f,m=a*f,v=l*u,_=l*c,S=l*f,w=i.x,T=i.y,P=i.z;return r[0]=(1-(p+m))*w,r[1]=(g+S)*w,r[2]=(x-_)*w,r[3]=0,r[4]=(g-S)*T,r[5]=(1-(d+m))*T,r[6]=(h+v)*T,r[7]=0,r[8]=(x+_)*P,r[9]=(h-v)*P,r[10]=(1-(d+p))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Rr.set(r[0],r[1],r[2]).length();const o=Rr.set(r[4],r[5],r[6]).length(),a=Rr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],_n.copy(this);const u=1/s,c=1/o,f=1/a;return _n.elements[0]*=u,_n.elements[1]*=u,_n.elements[2]*=u,_n.elements[4]*=c,_n.elements[5]*=c,_n.elements[6]*=c,_n.elements[8]*=f,_n.elements[9]*=f,_n.elements[10]*=f,t.setFromRotationMatrix(_n),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){const a=this.elements,l=2*s/(t-e),u=2*s/(i-r),c=(t+e)/(t-e),f=(i+r)/(i-r),d=-(o+s)/(o-s),g=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=g,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,l=1/(t-e),u=1/(i-r),c=1/(o-s),f=(t+e)*l,d=(i+r)*u,g=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-g,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Rr=new z,_n=new Je,By=new z(0,0,0),Vy=new z(1,1,1),gi=new z,da=new z,Wt=new z,op=new Je,ap=new Ps;class Ds{constructor(e=0,t=0,i=0,r=Ds.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return op.makeRotationFromQuaternion(e),this.setFromRotationMatrix(op,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ap.setFromEuler(this),this.setFromQuaternion(ap,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ds.DefaultOrder="XYZ";Ds.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class od{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gy=0;const lp=new z,Ir=new Ps,$n=new Je,ha=new z,js=new z,Hy=new z,Wy=new Ps,up=new z(1,0,0),cp=new z(0,1,0),fp=new z(0,0,1),jy={type:"added"},dp={type:"removed"};class Vt extends wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gy++}),this.uuid=zo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DefaultUp.clone();const e=new z,t=new Ds,i=new Ps,r=new z(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Je},normalMatrix:{value:new un}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=Vt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new od,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.premultiply(Ir),this}rotateX(e){return this.rotateOnAxis(up,e)}rotateY(e){return this.rotateOnAxis(cp,e)}rotateZ(e){return this.rotateOnAxis(fp,e)}translateOnAxis(e,t){return lp.copy(e).applyQuaternion(this.quaternion),this.position.add(lp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(up,e)}translateY(e){return this.translateOnAxis(cp,e)}translateZ(e){return this.translateOnAxis(fp,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ha.copy(e):ha.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(js,ha,this.up):$n.lookAt(ha,js,this.up),this.quaternion.setFromRotationMatrix($n),r&&($n.extractRotation(r.matrixWorld),Ir.setFromRotationMatrix($n),this.quaternion.premultiply(Ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(jy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(dp)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,e,Hy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,Wy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),d=o(e.skeletons),g=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Vt.DefaultUp=new z(0,1,0);Vt.DefaultMatrixAutoUpdate=!0;const xn=new z,qn=new z,Ru=new z,Yn=new z,kr=new z,Nr=new z,hp=new z,Iu=new z,ku=new z,Nu=new z;class Jn{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),xn.subVectors(e,t),r.cross(xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){xn.subVectors(r,t),qn.subVectors(i,t),Ru.subVectors(e,t);const o=xn.dot(xn),a=xn.dot(qn),l=xn.dot(Ru),u=qn.dot(qn),c=qn.dot(Ru),f=o*u-a*a;if(f===0)return s.set(-2,-1,-1);const d=1/f,g=(u*l-a*c)*d,x=(o*c-a*l)*d;return s.set(1-g-x,x,g)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Yn),Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getUV(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Yn),l.set(0,0),l.addScaledVector(s,Yn.x),l.addScaledVector(o,Yn.y),l.addScaledVector(a,Yn.z),l}static isFrontFacing(e,t,i,r){return xn.subVectors(i,t),qn.subVectors(e,t),xn.cross(qn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),xn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Jn.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;kr.subVectors(r,i),Nr.subVectors(s,i),Iu.subVectors(e,i);const l=kr.dot(Iu),u=Nr.dot(Iu);if(l<=0&&u<=0)return t.copy(i);ku.subVectors(e,r);const c=kr.dot(ku),f=Nr.dot(ku);if(c>=0&&f<=c)return t.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(kr,o);Nu.subVectors(e,s);const g=kr.dot(Nu),x=Nr.dot(Nu);if(x>=0&&g<=x)return t.copy(s);const p=g*u-l*x;if(p<=0&&u>=0&&x<=0)return a=u/(u-x),t.copy(i).addScaledVector(Nr,a);const h=c*x-g*f;if(h<=0&&f-c>=0&&g-x>=0)return hp.subVectors(s,r),a=(f-c)/(f-c+(g-x)),t.copy(r).addScaledVector(hp,a);const m=1/(h+p+d);return o=p*m,a=d*m,t.copy(i).addScaledVector(kr,o).addScaledVector(Nr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Xy=0;class Uo extends wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xy++}),this.uuid=zo(),this.name="",this.type="Material",this.blending=ds,this.side=Lo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=g0,this.blendDst=v0,this.blendEquation=Wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Zc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ny,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xu,this.stencilZFail=xu,this.stencilZPass=xu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===Gx;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(i.blending=this.blending),this.side!==Lo&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ci extends Uo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rt=new z,pa=new Oe;class Pn{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=ep,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new Be),t[i++]=o.r,t[i++]=o.g,t[i++]=o.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new Oe),t[i++]=o.x,t[i++]=o.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new z),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new pt),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z,t[i++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)pa.fromBufferAttribute(this,t),pa.applyMatrix3(e),this.setXY(t,pa.x,pa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ep&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class T0 extends Pn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class C0 extends Pn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class fn extends Pn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let $y=0;const nn=new Je,Fu=new Vt,Fr=new z,jt=new Oo,Xs=new Oo,ft=new z;class Gn extends wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$y++}),this.uuid=zo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(S0(e)?C0:T0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new un().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,t,i){return nn.makeTranslation(e,t,i),this.applyMatrix4(nn),this}scale(e,t,i){return nn.makeScale(e,t,i),this.applyMatrix4(nn),this}lookAt(e){return Fu.lookAt(e),Fu.updateMatrix(),this.applyMatrix4(Fu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new fn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];jt.setFromBufferAttribute(s),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Xs.setFromBufferAttribute(a),this.morphTargetsRelative?(ft.addVectors(jt.min,Xs.min),jt.expandByPoint(ft),ft.addVectors(jt.max,Xs.max),jt.expandByPoint(ft)):(jt.expandByPoint(Xs.min),jt.expandByPoint(Xs.max))}jt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)ft.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ft));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)ft.fromBufferAttribute(a,u),l&&(Fr.fromBufferAttribute(e,u),ft.add(Fr)),r=Math.max(r,i.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let O=0;O<a;O++)u[O]=new z,c[O]=new z;const f=new z,d=new z,g=new z,x=new Oe,p=new Oe,h=new Oe,m=new z,v=new z;function _(O,G,ie){f.fromArray(r,O*3),d.fromArray(r,G*3),g.fromArray(r,ie*3),x.fromArray(o,O*2),p.fromArray(o,G*2),h.fromArray(o,ie*2),d.sub(f),g.sub(f),p.sub(x),h.sub(x);const ee=1/(p.x*h.y-h.x*p.y);!isFinite(ee)||(m.copy(d).multiplyScalar(h.y).addScaledVector(g,-p.y).multiplyScalar(ee),v.copy(g).multiplyScalar(p.x).addScaledVector(d,-h.x).multiplyScalar(ee),u[O].add(m),u[G].add(m),u[ie].add(m),c[O].add(v),c[G].add(v),c[ie].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let O=0,G=S.length;O<G;++O){const ie=S[O],ee=ie.start,B=ie.count;for(let K=ee,X=ee+B;K<X;K+=3)_(i[K+0],i[K+1],i[K+2])}const w=new z,T=new z,P=new z,y=new z;function L(O){P.fromArray(s,O*3),y.copy(P);const G=u[O];w.copy(G),w.sub(P.multiplyScalar(P.dot(G))).normalize(),T.crossVectors(y,G);const ee=T.dot(c[O])<0?-1:1;l[O*4]=w.x,l[O*4+1]=w.y,l[O*4+2]=w.z,l[O*4+3]=ee}for(let O=0,G=S.length;O<G;++O){const ie=S[O],ee=ie.start,B=ie.count;for(let K=ee,X=ee+B;K<X;K+=3)L(i[K+0]),L(i[K+1]),L(i[K+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,g=i.count;d<g;d++)i.setXYZ(d,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,u=new z,c=new z,f=new z;if(e)for(let d=0,g=e.count;d<g;d+=3){const x=e.getX(d+0),p=e.getX(d+1),h=e.getX(d+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,h),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,p),u.fromBufferAttribute(i,h),a.add(c),l.add(c),u.add(c),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(h,u.x,u.y,u.z)}else for(let d=0,g=t.count;d<g;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const o=i[r].array,a=e.attributes[r],l=a.array,u=a.itemSize*t,c=Math.min(l.length,o.length-u);for(let f=0,d=u;f<c;f++,d++)o[d]=l[f]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,d=new u.constructor(l.length*c);let g=0,x=0;for(let p=0,h=l.length;p<h;p++){a.isInterleavedBufferAttribute?g=l[p]*a.data.stride+a.offset:g=l[p]*c;for(let m=0;m<c;m++)d[x++]=u[g++]}return new Pn(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const d=u[c],g=e(d,i);l.push(g)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const g=u[f];c.push(g.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,g=f.length;d<g;d++)c.push(f[d].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const pp=new Je,zr=new sd,zu=new Nl,vi=new z,_i=new z,xi=new z,Ou=new z,Uu=new z,Bu=new z,ma=new z,ga=new z,va=new z,_a=new Oe,xa=new Oe,ya=new Oe,Vu=new z,Sa=new z;class Tn extends Vt{constructor(e=new Gn,t=new Ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),zu.copy(i.boundingSphere),zu.applyMatrix4(s),e.ray.intersectsSphere(zu)===!1)||(pp.copy(s).invert(),zr.copy(e.ray).applyMatrix4(pp),i.boundingBox!==null&&zr.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,u=i.morphAttributes.position,c=i.morphTargetsRelative,f=i.attributes.uv,d=i.attributes.uv2,g=i.groups,x=i.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,h=g.length;p<h;p++){const m=g[p],v=r[m.materialIndex],_=Math.max(m.start,x.start),S=Math.min(a.count,Math.min(m.start+m.count,x.start+x.count));for(let w=_,T=S;w<T;w+=3){const P=a.getX(w),y=a.getX(w+1),L=a.getX(w+2);o=wa(this,v,e,zr,l,u,c,f,d,P,y,L),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const p=Math.max(0,x.start),h=Math.min(a.count,x.start+x.count);for(let m=p,v=h;m<v;m+=3){const _=a.getX(m),S=a.getX(m+1),w=a.getX(m+2);o=wa(this,r,e,zr,l,u,c,f,d,_,S,w),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,h=g.length;p<h;p++){const m=g[p],v=r[m.materialIndex],_=Math.max(m.start,x.start),S=Math.min(l.count,Math.min(m.start+m.count,x.start+x.count));for(let w=_,T=S;w<T;w+=3){const P=w,y=w+1,L=w+2;o=wa(this,v,e,zr,l,u,c,f,d,P,y,L),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const p=Math.max(0,x.start),h=Math.min(l.count,x.start+x.count);for(let m=p,v=h;m<v;m+=3){const _=m,S=m+1,w=m+2;o=wa(this,r,e,zr,l,u,c,f,d,_,S,w),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}}function qy(n,e,t,i,r,s,o,a){let l;if(e.side===Ln?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side!==Ss,a),l===null)return null;Sa.copy(a),Sa.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Sa);return u<t.near||u>t.far?null:{distance:u,point:Sa.clone(),object:n}}function wa(n,e,t,i,r,s,o,a,l,u,c,f){vi.fromBufferAttribute(r,u),_i.fromBufferAttribute(r,c),xi.fromBufferAttribute(r,f);const d=n.morphTargetInfluences;if(s&&d){ma.set(0,0,0),ga.set(0,0,0),va.set(0,0,0);for(let x=0,p=s.length;x<p;x++){const h=d[x],m=s[x];h!==0&&(Ou.fromBufferAttribute(m,u),Uu.fromBufferAttribute(m,c),Bu.fromBufferAttribute(m,f),o?(ma.addScaledVector(Ou,h),ga.addScaledVector(Uu,h),va.addScaledVector(Bu,h)):(ma.addScaledVector(Ou.sub(vi),h),ga.addScaledVector(Uu.sub(_i),h),va.addScaledVector(Bu.sub(xi),h)))}vi.add(ma),_i.add(ga),xi.add(va)}n.isSkinnedMesh&&(n.boneTransform(u,vi),n.boneTransform(c,_i),n.boneTransform(f,xi));const g=qy(n,e,t,i,vi,_i,xi,Vu);if(g){a&&(_a.fromBufferAttribute(a,u),xa.fromBufferAttribute(a,c),ya.fromBufferAttribute(a,f),g.uv=Jn.getUV(Vu,vi,_i,xi,_a,xa,ya,new Oe)),l&&(_a.fromBufferAttribute(l,u),xa.fromBufferAttribute(l,c),ya.fromBufferAttribute(l,f),g.uv2=Jn.getUV(Vu,vi,_i,xi,_a,xa,ya,new Oe));const x={a:u,b:c,c:f,normal:new z,materialIndex:0};Jn.getNormal(vi,_i,xi,x.normal),g.face=x}return g}class Mr extends Gn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let d=0,g=0;x("z","y","x",-1,-1,i,t,e,o,s,0),x("z","y","x",1,-1,i,t,-e,o,s,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new fn(u,3)),this.setAttribute("normal",new fn(c,3)),this.setAttribute("uv",new fn(f,2));function x(p,h,m,v,_,S,w,T,P,y,L){const O=S/P,G=w/y,ie=S/2,ee=w/2,B=T/2,K=P+1,X=y+1;let Q=0,F=0;const I=new z;for(let b=0;b<X;b++){const A=b*G-ee;for(let D=0;D<K;D++){const k=D*O-ie;I[p]=k*v,I[h]=A*_,I[m]=B,u.push(I.x,I.y,I.z),I[p]=0,I[h]=0,I[m]=T>0?1:-1,c.push(I.x,I.y,I.z),f.push(D/P),f.push(1-b/y),Q+=1}}for(let b=0;b<y;b++)for(let A=0;A<P;A++){const D=d+A+K*b,k=d+A+K*(b+1),U=d+(A+1)+K*(b+1),$=d+(A+1)+K*b;l.push(D,k,$),l.push(k,U,$),F+=6}a.addGroup(g,F,L),g+=F,d+=Q}}static fromJSON(e){return new Mr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Et(n){const e={};for(let t=0;t<n.length;t++){const i=bs(n[t]);for(const r in i)e[r]=i[r]}return e}function Yy(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}const Zy={clone:bs,merge:Et};var Ky=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xr extends Uo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ky,this.fragmentShader=Qy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bs(e.uniforms),this.uniformsGroups=Yy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class A0 extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class an extends A0{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=np*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return np*2*Math.atan(Math.tan(yu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yu*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Or=90,Ur=1;class Jy extends Vt{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new an(Or,Ur,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new z(1,0,0)),this.add(r);const s=new an(Or,Ur,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new z(-1,0,0)),this.add(s);const o=new an(Or,Ur,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new z(0,1,0)),this.add(o);const a=new an(Or,Ur,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new z(0,-1,0)),this.add(a);const l=new an(Or,Ur,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new z(0,0,1)),this.add(l);const u=new an(Or,Ur,e,t);u.layers=this.layers,u.up.set(0,-1,0),u.lookAt(new z(0,0,-1)),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=ii,e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(c),e.toneMapping=f,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class ad extends pn{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:ws,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class eS extends _r{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ad(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:on}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Mr(5,5,5),s=new xr({name:"CubemapFromEquirect",uniforms:bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ln,blending:zi});s.uniforms.tEquirect.value=t;const o=new Tn(r,s),a=t.minFilter;return t.minFilter===kl&&(t.minFilter=on),new Jy(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Gu=new z,tS=new z,nS=new un;class Ki{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Gu.subVectors(i,t).cross(tS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Gu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||nS.getNormalMatrix(e),r=this.coplanarPoint(Gu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Br=new Nl,Ma=new z;class L0{constructor(e=new Ki,t=new Ki,i=new Ki,r=new Ki,s=new Ki,o=new Ki){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],c=i[6],f=i[7],d=i[8],g=i[9],x=i[10],p=i[11],h=i[12],m=i[13],v=i[14],_=i[15];return t[0].setComponents(a-r,f-l,p-d,_-h).normalize(),t[1].setComponents(a+r,f+l,p+d,_+h).normalize(),t[2].setComponents(a+s,f+u,p+g,_+m).normalize(),t[3].setComponents(a-s,f-u,p-g,_-m).normalize(),t[4].setComponents(a-o,f-c,p-x,_-v).normalize(),t[5].setComponents(a+o,f+c,p+x,_+v).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Br.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSprite(e){return Br.center.set(0,0,0),Br.radius=.7071067811865476,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ma.x=r.normal.x>0?e.max.x:e.min.x,Ma.y=r.normal.y>0?e.max.y:e.min.y,Ma.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ma)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function P0(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function iS(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,d=u.usage,g=n.createBuffer();n.bindBuffer(c,g),n.bufferData(c,f,d),u.onUploadCallback();let x;if(f instanceof Float32Array)x=5126;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(f instanceof Int16Array)x=5122;else if(f instanceof Uint32Array)x=5125;else if(f instanceof Int32Array)x=5124;else if(f instanceof Int8Array)x=5120;else if(f instanceof Uint8Array)x=5121;else if(f instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,f){const d=c.array,g=c.updateRange;n.bindBuffer(f,u),g.count===-1?n.bufferSubData(f,0,d):(t?n.bufferSubData(f,g.offset*d.BYTES_PER_ELEMENT,d,g.offset,g.count):n.bufferSubData(f,g.offset*d.BYTES_PER_ELEMENT,d.subarray(g.offset,g.offset+g.count)),g.count=-1)}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f===void 0?i.set(u,r(u,c)):f.version<u.version&&(s(f.buffer,u,c),f.version=u.version)}return{get:o,remove:a,update:l}}class ld extends Gn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,d=t/l,g=[],x=[],p=[],h=[];for(let m=0;m<c;m++){const v=m*d-o;for(let _=0;_<u;_++){const S=_*f-s;x.push(S,-v,0),p.push(0,0,1),h.push(_/a),h.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){const _=v+u*m,S=v+u*(m+1),w=v+1+u*(m+1),T=v+1+u*m;g.push(_,S,T),g.push(S,w,T)}this.setIndex(g),this.setAttribute("position",new fn(x,3)),this.setAttribute("normal",new fn(p,3)),this.setAttribute("uv",new fn(h,2))}static fromJSON(e){return new ld(e.width,e.height,e.widthSegments,e.heightSegments)}}var rS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,sS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,aS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cS="vec3 transformed = vec3( position );",fS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dS=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,hS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,gS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_S=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,SS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,wS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,MS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,ES=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bS=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,TS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,CS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,AS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,LS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,PS="gl_FragColor = linearToOutputTexel( gl_FragColor );",DS=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,RS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,IS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,NS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,FS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,US=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,BS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,VS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,GS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,HS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,WS=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,jS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,XS=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,$S=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,YS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ZS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,KS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,QS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,JS=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,e1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,t1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,n1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,i1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,s1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,o1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,a1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,l1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,u1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,c1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,f1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,d1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,h1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,p1=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,m1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,g1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,v1=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,S1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,w1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,M1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,E1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,b1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,T1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,C1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,A1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,L1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,P1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,D1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,R1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,I1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k1=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,N1=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,F1=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,z1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,O1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,U1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,B1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,V1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,G1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,H1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,W1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,j1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,X1=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,$1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,q1=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Y1=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Z1=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,K1=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Q1=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,J1=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,ew=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nw=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,iw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rw=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,sw=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ow=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,aw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,uw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,fw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hw=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mw=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gw=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_w=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Sw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ww=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ew=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Aw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lw=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Dw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ce={alphamap_fragment:rS,alphamap_pars_fragment:sS,alphatest_fragment:oS,alphatest_pars_fragment:aS,aomap_fragment:lS,aomap_pars_fragment:uS,begin_vertex:cS,beginnormal_vertex:fS,bsdfs:dS,iridescence_fragment:hS,bumpmap_pars_fragment:pS,clipping_planes_fragment:mS,clipping_planes_pars_fragment:gS,clipping_planes_pars_vertex:vS,clipping_planes_vertex:_S,color_fragment:xS,color_pars_fragment:yS,color_pars_vertex:SS,color_vertex:wS,common:MS,cube_uv_reflection_fragment:ES,defaultnormal_vertex:bS,displacementmap_pars_vertex:TS,displacementmap_vertex:CS,emissivemap_fragment:AS,emissivemap_pars_fragment:LS,encodings_fragment:PS,encodings_pars_fragment:DS,envmap_fragment:RS,envmap_common_pars_fragment:IS,envmap_pars_fragment:kS,envmap_pars_vertex:NS,envmap_physical_pars_fragment:XS,envmap_vertex:FS,fog_vertex:zS,fog_pars_vertex:OS,fog_fragment:US,fog_pars_fragment:BS,gradientmap_pars_fragment:VS,lightmap_fragment:GS,lightmap_pars_fragment:HS,lights_lambert_vertex:WS,lights_pars_begin:jS,lights_toon_fragment:$S,lights_toon_pars_fragment:qS,lights_phong_fragment:YS,lights_phong_pars_fragment:ZS,lights_physical_fragment:KS,lights_physical_pars_fragment:QS,lights_fragment_begin:JS,lights_fragment_maps:e1,lights_fragment_end:t1,logdepthbuf_fragment:n1,logdepthbuf_pars_fragment:i1,logdepthbuf_pars_vertex:r1,logdepthbuf_vertex:s1,map_fragment:o1,map_pars_fragment:a1,map_particle_fragment:l1,map_particle_pars_fragment:u1,metalnessmap_fragment:c1,metalnessmap_pars_fragment:f1,morphcolor_vertex:d1,morphnormal_vertex:h1,morphtarget_pars_vertex:p1,morphtarget_vertex:m1,normal_fragment_begin:g1,normal_fragment_maps:v1,normal_pars_fragment:_1,normal_pars_vertex:x1,normal_vertex:y1,normalmap_pars_fragment:S1,clearcoat_normal_fragment_begin:w1,clearcoat_normal_fragment_maps:M1,clearcoat_pars_fragment:E1,iridescence_pars_fragment:b1,output_fragment:T1,packing:C1,premultiplied_alpha_fragment:A1,project_vertex:L1,dithering_fragment:P1,dithering_pars_fragment:D1,roughnessmap_fragment:R1,roughnessmap_pars_fragment:I1,shadowmap_pars_fragment:k1,shadowmap_pars_vertex:N1,shadowmap_vertex:F1,shadowmask_pars_fragment:z1,skinbase_vertex:O1,skinning_pars_vertex:U1,skinning_vertex:B1,skinnormal_vertex:V1,specularmap_fragment:G1,specularmap_pars_fragment:H1,tonemapping_fragment:W1,tonemapping_pars_fragment:j1,transmission_fragment:X1,transmission_pars_fragment:$1,uv_pars_fragment:q1,uv_pars_vertex:Y1,uv_vertex:Z1,uv2_pars_fragment:K1,uv2_pars_vertex:Q1,uv2_vertex:J1,worldpos_vertex:ew,background_vert:tw,background_frag:nw,cube_vert:iw,cube_frag:rw,depth_vert:sw,depth_frag:ow,distanceRGBA_vert:aw,distanceRGBA_frag:lw,equirect_vert:uw,equirect_frag:cw,linedashed_vert:fw,linedashed_frag:dw,meshbasic_vert:hw,meshbasic_frag:pw,meshlambert_vert:mw,meshlambert_frag:gw,meshmatcap_vert:vw,meshmatcap_frag:_w,meshnormal_vert:xw,meshnormal_frag:yw,meshphong_vert:Sw,meshphong_frag:ww,meshphysical_vert:Mw,meshphysical_frag:Ew,meshtoon_vert:bw,meshtoon_frag:Tw,points_vert:Cw,points_frag:Aw,shadow_vert:Lw,shadow_frag:Pw,sprite_vert:Dw,sprite_frag:Rw},oe={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new un},uv2Transform:{value:new un},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new un}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new un}}},zn={basic:{uniforms:Et([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:Et([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.fog,oe.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:Et([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:Et([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:Et([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:Et([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:Et([oe.points,oe.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:Et([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:Et([oe.common,oe.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:Et([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.meshnormal_vert,fragmentShader:Ce.meshnormal_frag},sprite:{uniforms:Et([oe.sprite,oe.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new un},t2D:{value:null}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},cube:{uniforms:Et([oe.envmap,{opacity:{value:1}}]),vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distanceRGBA:{uniforms:Et([oe.common,oe.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distanceRGBA_vert,fragmentShader:Ce.distanceRGBA_frag},shadow:{uniforms:Et([oe.lights,oe.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};zn.physical={uniforms:Et([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};function Iw(n,e,t,i,r,s){const o=new Be(0);let a=r===!0?0:1,l,u,c=null,f=0,d=null;function g(p,h){let m=!1,v=h.isScene===!0?h.background:null;v&&v.isTexture&&(v=e.get(v));const _=n.xr,S=_.getSession&&_.getSession();S&&S.environmentBlendMode==="additive"&&(v=null),v===null?x(o,a):v&&v.isColor&&(x(v,1),m=!0),(n.autoClear||m)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Il)?(u===void 0&&(u=new Tn(new Mr(1,1,1),new xr({name:"BackgroundCubeMaterial",uniforms:bs(zn.cube.uniforms),vertexShader:zn.cube.vertexShader,fragmentShader:zn.cube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,(c!==v||f!==v.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,c=v,f=v.version,d=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Tn(new ld(2,2),new xr({name:"BackgroundMaterial",uniforms:bs(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Lo,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(c!==v||f!==v.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,c=v,f=v.version,d=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function x(p,h){t.buffers.color.setClear(p.r,p.g,p.b,h,s)}return{getClearColor:function(){return o},setClearColor:function(p,h=1){o.set(p),a=h,x(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,x(o,a)},render:g}}function kw(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=h(null);let u=l,c=!1;function f(B,K,X,Q,F){let I=!1;if(o){const b=p(Q,X,K);u!==b&&(u=b,g(u.object)),I=m(B,Q,X,F),I&&v(B,Q,X,F)}else{const b=K.wireframe===!0;(u.geometry!==Q.id||u.program!==X.id||u.wireframe!==b)&&(u.geometry=Q.id,u.program=X.id,u.wireframe=b,I=!0)}F!==null&&t.update(F,34963),(I||c)&&(c=!1,y(B,K,X,Q),F!==null&&n.bindBuffer(34963,t.get(F).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function g(B){return i.isWebGL2?n.bindVertexArray(B):s.bindVertexArrayOES(B)}function x(B){return i.isWebGL2?n.deleteVertexArray(B):s.deleteVertexArrayOES(B)}function p(B,K,X){const Q=X.wireframe===!0;let F=a[B.id];F===void 0&&(F={},a[B.id]=F);let I=F[K.id];I===void 0&&(I={},F[K.id]=I);let b=I[Q];return b===void 0&&(b=h(d()),I[Q]=b),b}function h(B){const K=[],X=[],Q=[];for(let F=0;F<r;F++)K[F]=0,X[F]=0,Q[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:X,attributeDivisors:Q,object:B,attributes:{},index:null}}function m(B,K,X,Q){const F=u.attributes,I=K.attributes;let b=0;const A=X.getAttributes();for(const D in A)if(A[D].location>=0){const U=F[D];let $=I[D];if($===void 0&&(D==="instanceMatrix"&&B.instanceMatrix&&($=B.instanceMatrix),D==="instanceColor"&&B.instanceColor&&($=B.instanceColor)),U===void 0||U.attribute!==$||$&&U.data!==$.data)return!0;b++}return u.attributesNum!==b||u.index!==Q}function v(B,K,X,Q){const F={},I=K.attributes;let b=0;const A=X.getAttributes();for(const D in A)if(A[D].location>=0){let U=I[D];U===void 0&&(D==="instanceMatrix"&&B.instanceMatrix&&(U=B.instanceMatrix),D==="instanceColor"&&B.instanceColor&&(U=B.instanceColor));const $={};$.attribute=U,U&&U.data&&($.data=U.data),F[D]=$,b++}u.attributes=F,u.attributesNum=b,u.index=Q}function _(){const B=u.newAttributes;for(let K=0,X=B.length;K<X;K++)B[K]=0}function S(B){w(B,0)}function w(B,K){const X=u.newAttributes,Q=u.enabledAttributes,F=u.attributeDivisors;X[B]=1,Q[B]===0&&(n.enableVertexAttribArray(B),Q[B]=1),F[B]!==K&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,K),F[B]=K)}function T(){const B=u.newAttributes,K=u.enabledAttributes;for(let X=0,Q=K.length;X<Q;X++)K[X]!==B[X]&&(n.disableVertexAttribArray(X),K[X]=0)}function P(B,K,X,Q,F,I){i.isWebGL2===!0&&(X===5124||X===5125)?n.vertexAttribIPointer(B,K,X,F,I):n.vertexAttribPointer(B,K,X,Q,F,I)}function y(B,K,X,Q){if(i.isWebGL2===!1&&(B.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const F=Q.attributes,I=X.getAttributes(),b=K.defaultAttributeValues;for(const A in I){const D=I[A];if(D.location>=0){let k=F[A];if(k===void 0&&(A==="instanceMatrix"&&B.instanceMatrix&&(k=B.instanceMatrix),A==="instanceColor"&&B.instanceColor&&(k=B.instanceColor)),k!==void 0){const U=k.normalized,$=k.itemSize,R=t.get(k);if(R===void 0)continue;const se=R.buffer,me=R.type,ge=R.bytesPerElement;if(k.isInterleavedBufferAttribute){const ce=k.data,Ie=ce.stride,Me=k.offset;if(ce.isInstancedInterleavedBuffer){for(let xe=0;xe<D.locationSize;xe++)w(D.location+xe,ce.meshPerAttribute);B.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let xe=0;xe<D.locationSize;xe++)S(D.location+xe);n.bindBuffer(34962,se);for(let xe=0;xe<D.locationSize;xe++)P(D.location+xe,$/D.locationSize,me,U,Ie*ge,(Me+$/D.locationSize*xe)*ge)}else{if(k.isInstancedBufferAttribute){for(let ce=0;ce<D.locationSize;ce++)w(D.location+ce,k.meshPerAttribute);B.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let ce=0;ce<D.locationSize;ce++)S(D.location+ce);n.bindBuffer(34962,se);for(let ce=0;ce<D.locationSize;ce++)P(D.location+ce,$/D.locationSize,me,U,$*ge,$/D.locationSize*ce*ge)}}else if(b!==void 0){const U=b[A];if(U!==void 0)switch(U.length){case 2:n.vertexAttrib2fv(D.location,U);break;case 3:n.vertexAttrib3fv(D.location,U);break;case 4:n.vertexAttrib4fv(D.location,U);break;default:n.vertexAttrib1fv(D.location,U)}}}}T()}function L(){ie();for(const B in a){const K=a[B];for(const X in K){const Q=K[X];for(const F in Q)x(Q[F].object),delete Q[F];delete K[X]}delete a[B]}}function O(B){if(a[B.id]===void 0)return;const K=a[B.id];for(const X in K){const Q=K[X];for(const F in Q)x(Q[F].object),delete Q[F];delete K[X]}delete a[B.id]}function G(B){for(const K in a){const X=a[K];if(X[B.id]===void 0)continue;const Q=X[B.id];for(const F in Q)x(Q[F].object),delete Q[F];delete X[B.id]}}function ie(){ee(),c=!0,u!==l&&(u=l,g(u.object))}function ee(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:ie,resetDefaultState:ee,dispose:L,releaseStatesOfGeometry:O,releaseStatesOfProgram:G,initAttributes:_,enableAttribute:S,disableUnusedAttributes:T}}function Nw(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){n.drawArrays(s,u,c),t.update(c,s,1)}function l(u,c,f){if(f===0)return;let d,g;if(r)d=n,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](s,u,c,f),t.update(c,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function Fw(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(P){if(P==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,f=n.getParameter(34930),d=n.getParameter(35660),g=n.getParameter(3379),x=n.getParameter(34076),p=n.getParameter(34921),h=n.getParameter(36347),m=n.getParameter(36348),v=n.getParameter(36349),_=d>0,S=o||e.has("OES_texture_float"),w=_&&S,T=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:h,maxVaryings:m,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:S,floatVertexTextures:w,maxSamples:T}}function zw(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Ki,a=new un,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d,g){const x=f.length!==0||d||i!==0||r;return r=d,t=c(f,g,0),i=f.length,x},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1,u()},this.setState=function(f,d,g){const x=f.clippingPlanes,p=f.clipIntersection,h=f.clipShadows,m=n.get(f);if(!r||x===null||x.length===0||s&&!h)s?c(null):u();else{const v=s?0:i,_=v*4;let S=m.clippingState||null;l.value=S,S=c(x,d,_,g);for(let w=0;w!==_;++w)S[w]=t[w];m.clippingState=S,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,g,x){const p=f!==null?f.length:0;let h=null;if(p!==0){if(h=l.value,x!==!0||h===null){const m=g+p*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(h===null||h.length<m)&&(h=new Float32Array(m));for(let _=0,S=g;_!==p;++_,S+=4)o.copy(f[_]).applyMatrix4(v,a),o.normal.toArray(h,S),h[S+3]=o.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,h}}function Ow(n){let e=new WeakMap;function t(o,a){return a===Kc?o.mapping=ws:a===Qc&&(o.mapping=Ms),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Kc||a===Qc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new eS(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Uw extends A0{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const rs=4,mp=[.125,.215,.35,.446,.526,.582],Ji=20,Hu=new Uw,gp=new Be;let Wu=null;const Qi=(1+Math.sqrt(5))/2,Vr=1/Qi,vp=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,Qi,Vr),new z(0,Qi,-Vr),new z(Vr,0,Qi),new z(-Vr,0,Qi),new z(Qi,Vr,0),new z(-Qi,Vr,0)];class _p{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Wu=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wu),e.scissorTest=!1,Ea(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ws||e.mapping===Ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wu=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:on,minFilter:on,generateMipmaps:!1,type:Po,format:Un,encoding:vr,depthBuffer:!1},r=xp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xp(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bw(s)),this._blurMaterial=Vw(s,e,t)}return r}_compileMaterial(e){const t=new Tn(this._lodPlanes[0],e);this._renderer.compile(t,Hu)}_sceneToCubeUV(e,t,i,r){const a=new an(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(gp),c.toneMapping=ii,c.autoClear=!1;const g=new Ci({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1}),x=new Tn(new Mr,g);let p=!1;const h=e.background;h?h.isColor&&(g.color.copy(h),e.background=null,p=!0):(g.color.copy(gp),p=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(a.up.set(0,l[m],0),a.lookAt(u[m],0,0)):v===1?(a.up.set(0,0,l[m]),a.lookAt(0,u[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,u[m]));const _=this._cubeSize;Ea(r,v*_,m>2?_:0,_,_),c.setRenderTarget(r),p&&c.render(x,a),c.render(e,a)}x.geometry.dispose(),x.material.dispose(),c.toneMapping=d,c.autoClear=f,e.background=h}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ws||e.mapping===Ms;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Tn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ea(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Hu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=vp[(r-1)%vp.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Tn(this._lodPlanes[r],u),d=u.uniforms,g=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Ji-1),p=s/x,h=isFinite(s)?1+Math.floor(c*p):Ji;h>Ji&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Ji}`);const m=[];let v=0;for(let P=0;P<Ji;++P){const y=P/p,L=Math.exp(-y*y/2);m.push(L),P===0?v+=L:P<h&&(v+=2*L)}for(let P=0;P<m.length;P++)m[P]=m[P]/v;d.envMap.value=e.texture,d.samples.value=h,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=x,d.mipInt.value=_-i;const S=this._sizeLods[r],w=3*S*(r>_-rs?r-_+rs:0),T=4*(this._cubeSize-S);Ea(t,w,T,3*S,2*S),l.setRenderTarget(t),l.render(f,Hu)}}function Bw(n){const e=[],t=[],i=[];let r=n;const s=n-rs+1+mp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-rs?l=mp[o-n+rs-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],g=6,x=6,p=3,h=2,m=1,v=new Float32Array(p*x*g),_=new Float32Array(h*x*g),S=new Float32Array(m*x*g);for(let T=0;T<g;T++){const P=T%3*2/3-1,y=T>2?0:-1,L=[P,y,0,P+2/3,y,0,P+2/3,y+1,0,P,y,0,P+2/3,y+1,0,P,y+1,0];v.set(L,p*x*T),_.set(d,h*x*T);const O=[T,T,T,T,T,T];S.set(O,m*x*T)}const w=new Gn;w.setAttribute("position",new Pn(v,p)),w.setAttribute("uv",new Pn(_,h)),w.setAttribute("faceIndex",new Pn(S,m)),e.push(w),r>rs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function xp(n,e,t){const i=new _r(n,e,t);return i.texture.mapping=Il,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ea(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Vw(n,e,t){const i=new Float32Array(Ji),r=new z(0,1,0);return new xr({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function yp(){return new xr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Sp(){return new xr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function ud(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Gw(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Kc||l===Qc,c=l===ws||l===Ms;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new _p(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&r(f)){t===null&&(t=new _p(n));const d=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Hw(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Ww(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",o),delete r[d.id];const g=s.get(d);g&&(e.remove(g),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const x in d)e.update(d[x],34962);const g=f.morphAttributes;for(const x in g){const p=g[x];for(let h=0,m=p.length;h<m;h++)e.update(p[h],34962)}}function u(f){const d=[],g=f.index,x=f.attributes.position;let p=0;if(g!==null){const v=g.array;p=g.version;for(let _=0,S=v.length;_<S;_+=3){const w=v[_+0],T=v[_+1],P=v[_+2];d.push(w,T,T,P,P,w)}}else{const v=x.array;p=x.version;for(let _=0,S=v.length/3-1;_<S;_+=3){const w=_+0,T=_+1,P=_+2;d.push(w,T,T,P,P,w)}}const h=new(S0(d)?C0:T0)(d,1);h.version=p;const m=s.get(f);m&&e.remove(m),s.set(f,h)}function c(f){const d=s.get(f);if(d){const g=f.index;g!==null&&d.version<g.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function jw(n,e,t,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,l;function u(d){a=d.type,l=d.bytesPerElement}function c(d,g){n.drawElements(s,g,a,d*l),t.update(g,s,1)}function f(d,g,x){if(x===0)return;let p,h;if(r)p=n,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](s,g,a,d*l,x),t.update(g,s,x)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f}function Xw(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function $w(n,e){return n[0]-e[0]}function qw(n,e){return Math.abs(e[1])-Math.abs(n[1])}function ju(n,e){let t=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Uint8Array?t=255:i instanceof Uint16Array?t=65535:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),n.divideScalar(t)}function Yw(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new pt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f,d){const g=u.morphTargetInfluences;if(e.isWebGL2===!0){const p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,h=p!==void 0?p.length:0;let m=s.get(c);if(m===void 0||m.count!==h){let X=function(){B.dispose(),s.delete(c),c.removeEventListener("dispose",X)};var x=X;m!==void 0&&m.texture.dispose();const S=c.morphAttributes.position!==void 0,w=c.morphAttributes.normal!==void 0,T=c.morphAttributes.color!==void 0,P=c.morphAttributes.position||[],y=c.morphAttributes.normal||[],L=c.morphAttributes.color||[];let O=0;S===!0&&(O=1),w===!0&&(O=2),T===!0&&(O=3);let G=c.attributes.position.count*O,ie=1;G>e.maxTextureSize&&(ie=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const ee=new Float32Array(G*ie*4*h),B=new b0(ee,G,ie,h);B.type=rr,B.needsUpdate=!0;const K=O*4;for(let Q=0;Q<h;Q++){const F=P[Q],I=y[Q],b=L[Q],A=G*ie*4*Q;for(let D=0;D<F.count;D++){const k=D*K;S===!0&&(o.fromBufferAttribute(F,D),F.normalized===!0&&ju(o,F),ee[A+k+0]=o.x,ee[A+k+1]=o.y,ee[A+k+2]=o.z,ee[A+k+3]=0),w===!0&&(o.fromBufferAttribute(I,D),I.normalized===!0&&ju(o,I),ee[A+k+4]=o.x,ee[A+k+5]=o.y,ee[A+k+6]=o.z,ee[A+k+7]=0),T===!0&&(o.fromBufferAttribute(b,D),b.normalized===!0&&ju(o,b),ee[A+k+8]=o.x,ee[A+k+9]=o.y,ee[A+k+10]=o.z,ee[A+k+11]=b.itemSize===4?o.w:1)}}m={count:h,texture:B,size:new Oe(G,ie)},s.set(c,m),c.addEventListener("dispose",X)}let v=0;for(let S=0;S<g.length;S++)v+=g[S];const _=c.morphTargetsRelative?1:1-v;d.getUniforms().setValue(n,"morphTargetBaseInfluence",_),d.getUniforms().setValue(n,"morphTargetInfluences",g),d.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const p=g===void 0?0:g.length;let h=i[c.id];if(h===void 0||h.length!==p){h=[];for(let w=0;w<p;w++)h[w]=[w,0];i[c.id]=h}for(let w=0;w<p;w++){const T=h[w];T[0]=w,T[1]=g[w]}h.sort(qw);for(let w=0;w<8;w++)w<p&&h[w][1]?(a[w][0]=h[w][0],a[w][1]=h[w][1]):(a[w][0]=Number.MAX_SAFE_INTEGER,a[w][1]=0);a.sort($w);const m=c.morphAttributes.position,v=c.morphAttributes.normal;let _=0;for(let w=0;w<8;w++){const T=a[w],P=T[0],y=T[1];P!==Number.MAX_SAFE_INTEGER&&y?(m&&c.getAttribute("morphTarget"+w)!==m[P]&&c.setAttribute("morphTarget"+w,m[P]),v&&c.getAttribute("morphNormal"+w)!==v[P]&&c.setAttribute("morphNormal"+w,v[P]),r[w]=y,_+=y):(m&&c.hasAttribute("morphTarget"+w)===!0&&c.deleteAttribute("morphTarget"+w),v&&c.hasAttribute("morphNormal"+w)===!0&&c.deleteAttribute("morphNormal"+w),r[w]=0)}const S=c.morphTargetsRelative?1:1-_;d.getUniforms().setValue(n,"morphTargetBaseInfluence",S),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Zw(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);return r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const D0=new pn,R0=new b0,I0=new Oy,k0=new ad,wp=[],Mp=[],Ep=new Float32Array(16),bp=new Float32Array(9),Tp=new Float32Array(4);function Rs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=wp[r];if(s===void 0&&(s=new Float32Array(r),wp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Rt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Fl(n,e){let t=Mp[e];t===void 0&&(t=new Int32Array(e),Mp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Kw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Qw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2fv(this.addr,e),Rt(t,e)}}function Jw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;n.uniform3fv(this.addr,e),Rt(t,e)}}function eM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4fv(this.addr,e),Rt(t,e)}}function tM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(Dt(t,i))return;Tp.set(i),n.uniformMatrix2fv(this.addr,!1,Tp),Rt(t,i)}}function nM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(Dt(t,i))return;bp.set(i),n.uniformMatrix3fv(this.addr,!1,bp),Rt(t,i)}}function iM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(Dt(t,i))return;Ep.set(i),n.uniformMatrix4fv(this.addr,!1,Ep),Rt(t,i)}}function rM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function sM(n,e){const t=this.cache;Dt(t,e)||(n.uniform2iv(this.addr,e),Rt(t,e))}function oM(n,e){const t=this.cache;Dt(t,e)||(n.uniform3iv(this.addr,e),Rt(t,e))}function aM(n,e){const t=this.cache;Dt(t,e)||(n.uniform4iv(this.addr,e),Rt(t,e))}function lM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function uM(n,e){const t=this.cache;Dt(t,e)||(n.uniform2uiv(this.addr,e),Rt(t,e))}function cM(n,e){const t=this.cache;Dt(t,e)||(n.uniform3uiv(this.addr,e),Rt(t,e))}function fM(n,e){const t=this.cache;Dt(t,e)||(n.uniform4uiv(this.addr,e),Rt(t,e))}function dM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||D0,r)}function hM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||I0,r)}function pM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||k0,r)}function mM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||R0,r)}function gM(n){switch(n){case 5126:return Kw;case 35664:return Qw;case 35665:return Jw;case 35666:return eM;case 35674:return tM;case 35675:return nM;case 35676:return iM;case 5124:case 35670:return rM;case 35667:case 35671:return sM;case 35668:case 35672:return oM;case 35669:case 35673:return aM;case 5125:return lM;case 36294:return uM;case 36295:return cM;case 36296:return fM;case 35678:case 36198:case 36298:case 36306:case 35682:return dM;case 35679:case 36299:case 36307:return hM;case 35680:case 36300:case 36308:case 36293:return pM;case 36289:case 36303:case 36311:case 36292:return mM}}function vM(n,e){n.uniform1fv(this.addr,e)}function _M(n,e){const t=Rs(e,this.size,2);n.uniform2fv(this.addr,t)}function xM(n,e){const t=Rs(e,this.size,3);n.uniform3fv(this.addr,t)}function yM(n,e){const t=Rs(e,this.size,4);n.uniform4fv(this.addr,t)}function SM(n,e){const t=Rs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function wM(n,e){const t=Rs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function MM(n,e){const t=Rs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function EM(n,e){n.uniform1iv(this.addr,e)}function bM(n,e){n.uniform2iv(this.addr,e)}function TM(n,e){n.uniform3iv(this.addr,e)}function CM(n,e){n.uniform4iv(this.addr,e)}function AM(n,e){n.uniform1uiv(this.addr,e)}function LM(n,e){n.uniform2uiv(this.addr,e)}function PM(n,e){n.uniform3uiv(this.addr,e)}function DM(n,e){n.uniform4uiv(this.addr,e)}function RM(n,e,t){const i=e.length,r=Fl(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2D(e[s]||D0,r[s])}function IM(n,e,t){const i=e.length,r=Fl(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture3D(e[s]||I0,r[s])}function kM(n,e,t){const i=e.length,r=Fl(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTextureCube(e[s]||k0,r[s])}function NM(n,e,t){const i=e.length,r=Fl(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||R0,r[s])}function FM(n){switch(n){case 5126:return vM;case 35664:return _M;case 35665:return xM;case 35666:return yM;case 35674:return SM;case 35675:return wM;case 35676:return MM;case 5124:case 35670:return EM;case 35667:case 35671:return bM;case 35668:case 35672:return TM;case 35669:case 35673:return CM;case 5125:return AM;case 36294:return LM;case 36295:return PM;case 36296:return DM;case 35678:case 36198:case 36298:case 36306:case 35682:return RM;case 35679:case 36299:case 36307:return IM;case 35680:case 36300:case 36308:case 36293:return kM;case 36289:case 36303:case 36311:case 36292:return NM}}class zM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=gM(t.type)}}class OM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=FM(t.type)}}class UM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Xu=/(\w+)(\])?(\[|\.)?/g;function Cp(n,e){n.seq.push(e),n.map[e.id]=e}function BM(n,e,t){const i=n.name,r=i.length;for(Xu.lastIndex=0;;){const s=Xu.exec(i),o=Xu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Cp(t,u===void 0?new zM(a,n,e):new OM(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new UM(a),Cp(t,f)),t=f}}}class Ga{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);BM(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Ap(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let VM=0;function GM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function HM(n){switch(n){case vr:return["Linear","( value )"];case je:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Lp(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+GM(n.getShaderSource(e),o)}else return r}function WM(n,e){const t=HM(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function jM(n,e){let t;switch(e){case cy:t="Linear";break;case fy:t="Reinhard";break;case dy:t="OptimizedCineon";break;case hy:t="ACESFilmic";break;case py:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function XM(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Js).join(`
`)}function $M(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function qM(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Js(n){return n!==""}function Pp(n,e){return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const YM=/^[ \t]*#include +<([\w\d./]+)>/gm;function rf(n){return n.replace(YM,ZM)}function ZM(n,e){const t=Ce[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return rf(t)}const KM=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,QM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rp(n){return n.replace(QM,N0).replace(KM,JM)}function JM(n,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),N0(n,e,t,i)}function N0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ip(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function eE(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===m0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Vx?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Qs&&(e="SHADOWMAP_TYPE_VSM"),e}function tE(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ws:case Ms:e="ENVMAP_TYPE_CUBE";break;case Il:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nE(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ms:e="ENVMAP_MODE_REFRACTION";break}return e}function iE(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case _0:e="ENVMAP_BLENDING_MULTIPLY";break;case ly:e="ENVMAP_BLENDING_MIX";break;case uy:e="ENVMAP_BLENDING_ADD";break}return e}function rE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function sE(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=eE(t),u=tE(t),c=nE(t),f=iE(t),d=rE(t),g=t.isWebGL2?"":XM(t),x=$M(s),p=r.createProgram();let h,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=[x].filter(Js).join(`
`),h.length>0&&(h+=`
`),m=[g,x].filter(Js).join(`
`),m.length>0&&(m+=`
`)):(h=[Ip(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),m=[g,Ip(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?Ce.tonemapping_pars_fragment:"",t.toneMapping!==ii?jM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ce.encodings_pars_fragment,WM("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Js).join(`
`)),o=rf(o),o=Pp(o,t),o=Dp(o,t),a=rf(a),a=Pp(a,t),a=Dp(a,t),o=Rp(o),a=Rp(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,m=["#define varying in",t.glslVersion===tp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=v+h+o,S=v+m+a,w=Ap(r,35633,_),T=Ap(r,35632,S);if(r.attachShader(p,w),r.attachShader(p,T),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),n.debug.checkShaderErrors){const L=r.getProgramInfoLog(p).trim(),O=r.getShaderInfoLog(w).trim(),G=r.getShaderInfoLog(T).trim();let ie=!0,ee=!0;if(r.getProgramParameter(p,35714)===!1){ie=!1;const B=Lp(r,w,"vertex"),K=Lp(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+L+`
`+B+`
`+K)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(O===""||G==="")&&(ee=!1);ee&&(this.diagnostics={runnable:ie,programLog:L,vertexShader:{log:O,prefix:h},fragmentShader:{log:G,prefix:m}})}r.deleteShader(w),r.deleteShader(T);let P;this.getUniforms=function(){return P===void 0&&(P=new Ga(r,p)),P};let y;return this.getAttributes=function(){return y===void 0&&(y=qM(r,p)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=VM++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=T,this}let oE=0;class aE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const i=new lE(e);t.set(e,i)}return t.get(e)}}class lE{constructor(e){this.id=oE++,this.code=e,this.usedTimes=0}}function uE(n,e,t,i,r,s,o){const a=new od,l=new aE,u=[],c=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y,L,O,G,ie){const ee=G.fog,B=ie.geometry,K=y.isMeshStandardMaterial?G.environment:null,X=(y.isMeshStandardMaterial?t:e).get(y.envMap||K),Q=!!X&&X.mapping===Il?X.image.height:null,F=x[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const I=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,b=I!==void 0?I.length:0;let A=0;B.morphAttributes.position!==void 0&&(A=1),B.morphAttributes.normal!==void 0&&(A=2),B.morphAttributes.color!==void 0&&(A=3);let D,k,U,$;if(F){const Ie=zn[F];D=Ie.vertexShader,k=Ie.fragmentShader}else D=y.vertexShader,k=y.fragmentShader,l.update(y),U=l.getVertexShaderID(y),$=l.getFragmentShaderID(y);const R=n.getRenderTarget(),se=y.alphaTest>0,me=y.clearcoat>0,ge=y.iridescence>0;return{isWebGL2:c,shaderID:F,shaderName:y.type,vertexShader:D,fragmentShader:k,defines:y.defines,customVertexShaderID:U,customFragmentShaderID:$,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,instancing:ie.isInstancedMesh===!0,instancingColor:ie.isInstancedMesh===!0&&ie.instanceColor!==null,supportsVertexTextures:d,outputEncoding:R===null?n.outputEncoding:R.isXRRenderTarget===!0?R.texture.encoding:vr,map:!!y.map,matcap:!!y.matcap,envMap:!!X,envMapMode:X&&X.mapping,envMapCubeUVHeight:Q,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===ky,tangentSpaceNormalMap:y.normalMapType===Iy,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===je,clearcoat:me,clearcoatMap:me&&!!y.clearcoatMap,clearcoatRoughnessMap:me&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:me&&!!y.clearcoatNormalMap,iridescence:ge,iridescenceMap:ge&&!!y.iridescenceMap,iridescenceThicknessMap:ge&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===ds,alphaMap:!!y.alphaMap,alphaTest:se,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!B.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!ee,useFog:y.fog===!0,fogExp2:ee&&ee.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:f,skinning:ie.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:b,morphTextureStride:A,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:y.toneMapped?n.toneMapping:ii,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ss,flipSided:y.side===Ln,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function h(y){const L=[];if(y.shaderID?L.push(y.shaderID):(L.push(y.customVertexShaderID),L.push(y.customFragmentShaderID)),y.defines!==void 0)for(const O in y.defines)L.push(O),L.push(y.defines[O]);return y.isRawShaderMaterial===!1&&(m(L,y),v(L,y),L.push(n.outputEncoding)),L.push(y.customProgramCacheKey),L.join()}function m(y,L){y.push(L.precision),y.push(L.outputEncoding),y.push(L.envMapMode),y.push(L.envMapCubeUVHeight),y.push(L.combine),y.push(L.vertexUvs),y.push(L.fogExp2),y.push(L.sizeAttenuation),y.push(L.morphTargetsCount),y.push(L.morphAttributeCount),y.push(L.numDirLights),y.push(L.numPointLights),y.push(L.numSpotLights),y.push(L.numHemiLights),y.push(L.numRectAreaLights),y.push(L.numDirLightShadows),y.push(L.numPointLightShadows),y.push(L.numSpotLightShadows),y.push(L.shadowMapType),y.push(L.toneMapping),y.push(L.numClippingPlanes),y.push(L.numClipIntersection),y.push(L.depthPacking)}function v(y,L){a.disableAll(),L.isWebGL2&&a.enable(0),L.supportsVertexTextures&&a.enable(1),L.instancing&&a.enable(2),L.instancingColor&&a.enable(3),L.map&&a.enable(4),L.matcap&&a.enable(5),L.envMap&&a.enable(6),L.lightMap&&a.enable(7),L.aoMap&&a.enable(8),L.emissiveMap&&a.enable(9),L.bumpMap&&a.enable(10),L.normalMap&&a.enable(11),L.objectSpaceNormalMap&&a.enable(12),L.tangentSpaceNormalMap&&a.enable(13),L.clearcoat&&a.enable(14),L.clearcoatMap&&a.enable(15),L.clearcoatRoughnessMap&&a.enable(16),L.clearcoatNormalMap&&a.enable(17),L.iridescence&&a.enable(18),L.iridescenceMap&&a.enable(19),L.iridescenceThicknessMap&&a.enable(20),L.displacementMap&&a.enable(21),L.specularMap&&a.enable(22),L.roughnessMap&&a.enable(23),L.metalnessMap&&a.enable(24),L.gradientMap&&a.enable(25),L.alphaMap&&a.enable(26),L.alphaTest&&a.enable(27),L.vertexColors&&a.enable(28),L.vertexAlphas&&a.enable(29),L.vertexUvs&&a.enable(30),L.vertexTangents&&a.enable(31),L.uvsVertexOnly&&a.enable(32),L.fog&&a.enable(33),y.push(a.mask),a.disableAll(),L.useFog&&a.enable(0),L.flatShading&&a.enable(1),L.logarithmicDepthBuffer&&a.enable(2),L.skinning&&a.enable(3),L.morphTargets&&a.enable(4),L.morphNormals&&a.enable(5),L.morphColors&&a.enable(6),L.premultipliedAlpha&&a.enable(7),L.shadowMapEnabled&&a.enable(8),L.physicallyCorrectLights&&a.enable(9),L.doubleSided&&a.enable(10),L.flipSided&&a.enable(11),L.useDepthPacking&&a.enable(12),L.dithering&&a.enable(13),L.specularIntensityMap&&a.enable(14),L.specularColorMap&&a.enable(15),L.transmission&&a.enable(16),L.transmissionMap&&a.enable(17),L.thicknessMap&&a.enable(18),L.sheen&&a.enable(19),L.sheenColorMap&&a.enable(20),L.sheenRoughnessMap&&a.enable(21),L.decodeVideoTexture&&a.enable(22),L.opaque&&a.enable(23),y.push(a.mask)}function _(y){const L=x[y.type];let O;if(L){const G=zn[L];O=Zy.clone(G.uniforms)}else O=y.uniforms;return O}function S(y,L){let O;for(let G=0,ie=u.length;G<ie;G++){const ee=u[G];if(ee.cacheKey===L){O=ee,++O.usedTimes;break}}return O===void 0&&(O=new sE(n,L,y,s),u.push(O)),O}function w(y){if(--y.usedTimes===0){const L=u.indexOf(y);u[L]=u[u.length-1],u.pop(),y.destroy()}}function T(y){l.remove(y)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:_,acquireProgram:S,releaseProgram:w,releaseShaderCache:T,programs:u,dispose:P}}function cE(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function fE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function kp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Np(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,g,x,p,h){let m=n[e];return m===void 0?(m={id:f.id,object:f,geometry:d,material:g,groupOrder:x,renderOrder:f.renderOrder,z:p,group:h},n[e]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=g,m.groupOrder=x,m.renderOrder=f.renderOrder,m.z=p,m.group=h),e++,m}function a(f,d,g,x,p,h){const m=o(f,d,g,x,p,h);g.transmission>0?i.push(m):g.transparent===!0?r.push(m):t.push(m)}function l(f,d,g,x,p,h){const m=o(f,d,g,x,p,h);g.transmission>0?i.unshift(m):g.transparent===!0?r.unshift(m):t.unshift(m)}function u(f,d){t.length>1&&t.sort(f||fE),i.length>1&&i.sort(d||kp),r.length>1&&r.sort(d||kp)}function c(){for(let f=e,d=n.length;f<d;f++){const g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function dE(){let n=new WeakMap;function e(i,r){let s;return n.has(i)===!1?(s=new Np,n.set(i,[s])):r>=n.get(i).length?(s=new Np,n.get(i).push(s)):s=n.get(i)[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function hE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Be};break;case"SpotLight":t={position:new z,direction:new z,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function pE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let mE=0;function gE(n,e){return(e.castShadow?1:0)-(n.castShadow?1:0)}function vE(n,e){const t=new hE,i=pE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let c=0;c<9;c++)r.probe.push(new z);const s=new z,o=new Je,a=new Je;function l(c,f){let d=0,g=0,x=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let p=0,h=0,m=0,v=0,_=0,S=0,w=0,T=0;c.sort(gE);const P=f!==!0?Math.PI:1;for(let L=0,O=c.length;L<O;L++){const G=c[L],ie=G.color,ee=G.intensity,B=G.distance,K=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)d+=ie.r*ee*P,g+=ie.g*ee*P,x+=ie.b*ee*P;else if(G.isLightProbe)for(let X=0;X<9;X++)r.probe[X].addScaledVector(G.sh.coefficients[X],ee);else if(G.isDirectionalLight){const X=t.get(G);if(X.color.copy(G.color).multiplyScalar(G.intensity*P),G.castShadow){const Q=G.shadow,F=i.get(G);F.shadowBias=Q.bias,F.shadowNormalBias=Q.normalBias,F.shadowRadius=Q.radius,F.shadowMapSize=Q.mapSize,r.directionalShadow[p]=F,r.directionalShadowMap[p]=K,r.directionalShadowMatrix[p]=G.shadow.matrix,S++}r.directional[p]=X,p++}else if(G.isSpotLight){const X=t.get(G);if(X.position.setFromMatrixPosition(G.matrixWorld),X.color.copy(ie).multiplyScalar(ee*P),X.distance=B,X.coneCos=Math.cos(G.angle),X.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),X.decay=G.decay,G.castShadow){const Q=G.shadow,F=i.get(G);F.shadowBias=Q.bias,F.shadowNormalBias=Q.normalBias,F.shadowRadius=Q.radius,F.shadowMapSize=Q.mapSize,r.spotShadow[m]=F,r.spotShadowMap[m]=K,r.spotShadowMatrix[m]=G.shadow.matrix,T++}r.spot[m]=X,m++}else if(G.isRectAreaLight){const X=t.get(G);X.color.copy(ie).multiplyScalar(ee),X.halfWidth.set(G.width*.5,0,0),X.halfHeight.set(0,G.height*.5,0),r.rectArea[v]=X,v++}else if(G.isPointLight){const X=t.get(G);if(X.color.copy(G.color).multiplyScalar(G.intensity*P),X.distance=G.distance,X.decay=G.decay,G.castShadow){const Q=G.shadow,F=i.get(G);F.shadowBias=Q.bias,F.shadowNormalBias=Q.normalBias,F.shadowRadius=Q.radius,F.shadowMapSize=Q.mapSize,F.shadowCameraNear=Q.camera.near,F.shadowCameraFar=Q.camera.far,r.pointShadow[h]=F,r.pointShadowMap[h]=K,r.pointShadowMatrix[h]=G.shadow.matrix,w++}r.point[h]=X,h++}else if(G.isHemisphereLight){const X=t.get(G);X.skyColor.copy(G.color).multiplyScalar(ee*P),X.groundColor.copy(G.groundColor).multiplyScalar(ee*P),r.hemi[_]=X,_++}}v>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=g,r.ambient[2]=x;const y=r.hash;(y.directionalLength!==p||y.pointLength!==h||y.spotLength!==m||y.rectAreaLength!==v||y.hemiLength!==_||y.numDirectionalShadows!==S||y.numPointShadows!==w||y.numSpotShadows!==T)&&(r.directional.length=p,r.spot.length=m,r.rectArea.length=v,r.point.length=h,r.hemi.length=_,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=w,r.spotShadowMatrix.length=T,y.directionalLength=p,y.pointLength=h,y.spotLength=m,y.rectAreaLength=v,y.hemiLength=_,y.numDirectionalShadows=S,y.numPointShadows=w,y.numSpotShadows=T,r.version=mE++)}function u(c,f){let d=0,g=0,x=0,p=0,h=0;const m=f.matrixWorldInverse;for(let v=0,_=c.length;v<_;v++){const S=c[v];if(S.isDirectionalLight){const w=r.directional[d];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),d++}else if(S.isSpotLight){const w=r.spot[x];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),x++}else if(S.isRectAreaLight){const w=r.rectArea[p];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),a.identity(),o.copy(S.matrixWorld),o.premultiply(m),a.extractRotation(o),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),p++}else if(S.isPointLight){const w=r.point[g];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),g++}else if(S.isHemisphereLight){const w=r.hemi[h];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(m),h++}}}return{setup:l,setupView:u,state:r}}function Fp(n,e){const t=new vE(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function u(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function _E(n,e){let t=new WeakMap;function i(s,o=0){let a;return t.has(s)===!1?(a=new Fp(n,e),t.set(s,[a])):o>=t.get(s).length?(a=new Fp(n,e),t.get(s).push(a)):a=t.get(s)[o],a}function r(){t=new WeakMap}return{get:i,dispose:r}}class xE extends Uo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yE extends Uo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new z,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const SE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ME(n,e,t){let i=new L0;const r=new Oe,s=new Oe,o=new pt,a=new xE({depthPacking:Ry}),l=new yE,u={},c=t.maxTextureSize,f={0:Ln,1:Lo,2:Ss},d=new xr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:SE,fragmentShader:wE}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const x=new Gn;x.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Tn(x,d),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=m0,this.render=function(S,w,T){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||S.length===0)return;const P=n.getRenderTarget(),y=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),O=n.state;O.setBlending(zi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);for(let G=0,ie=S.length;G<ie;G++){const ee=S[G],B=ee.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const K=B.getFrameExtents();if(r.multiply(K),s.copy(B.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/K.x),r.x=s.x*K.x,B.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/K.y),r.y=s.y*K.y,B.mapSize.y=s.y)),B.map===null){const Q=this.type!==Qs?{minFilter:ht,magFilter:ht}:{};B.map=new _r(r.x,r.y,Q),B.map.texture.name=ee.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const X=B.getViewportCount();for(let Q=0;Q<X;Q++){const F=B.getViewport(Q);o.set(s.x*F.x,s.y*F.y,s.x*F.z,s.y*F.w),O.viewport(o),B.updateMatrices(ee,Q),i=B.getFrustum(),_(w,T,B.camera,ee,this.type)}B.isPointLightShadow!==!0&&this.type===Qs&&m(B,T),B.needsUpdate=!1}h.needsUpdate=!1,n.setRenderTarget(P,y,L)};function m(S,w){const T=e.update(p);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,g.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new _r(r.x,r.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(w,null,T,d,p,null),g.uniforms.shadow_pass.value=S.mapPass.texture,g.uniforms.resolution.value=S.mapSize,g.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(w,null,T,g,p,null)}function v(S,w,T,P,y,L){let O=null;const G=T.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(G!==void 0?O=G:O=T.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0){const ie=O.uuid,ee=w.uuid;let B=u[ie];B===void 0&&(B={},u[ie]=B);let K=B[ee];K===void 0&&(K=O.clone(),B[ee]=K),O=K}return O.visible=w.visible,O.wireframe=w.wireframe,L===Qs?O.side=w.shadowSide!==null?w.shadowSide:w.side:O.side=w.shadowSide!==null?w.shadowSide:f[w.side],O.alphaMap=w.alphaMap,O.alphaTest=w.alphaTest,O.clipShadows=w.clipShadows,O.clippingPlanes=w.clippingPlanes,O.clipIntersection=w.clipIntersection,O.displacementMap=w.displacementMap,O.displacementScale=w.displacementScale,O.displacementBias=w.displacementBias,O.wireframeLinewidth=w.wireframeLinewidth,O.linewidth=w.linewidth,T.isPointLight===!0&&O.isMeshDistanceMaterial===!0&&(O.referencePosition.setFromMatrixPosition(T.matrixWorld),O.nearDistance=P,O.farDistance=y),O}function _(S,w,T,P,y){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===Qs)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,S.matrixWorld);const G=e.update(S),ie=S.material;if(Array.isArray(ie)){const ee=G.groups;for(let B=0,K=ee.length;B<K;B++){const X=ee[B],Q=ie[X.materialIndex];if(Q&&Q.visible){const F=v(S,Q,P,T.near,T.far,y);n.renderBufferDirect(T,null,G,F,S,X)}}}else if(ie.visible){const ee=v(S,ie,P,T.near,T.far,y);n.renderBufferDirect(T,null,G,ee,S,null)}}const O=S.children;for(let G=0,ie=O.length;G<ie;G++)_(O[G],w,T,P,y)}}function EE(n,e,t){const i=t.isWebGL2;function r(){let N=!1;const fe=new pt;let q=null;const ue=new pt(0,0,0,0);return{setMask:function(ae){q!==ae&&!N&&(n.colorMask(ae,ae,ae,ae),q=ae)},setLocked:function(ae){N=ae},setClear:function(ae,De,ct,tt,ci){ci===!0&&(ae*=tt,De*=tt,ct*=tt),fe.set(ae,De,ct,tt),ue.equals(fe)===!1&&(n.clearColor(ae,De,ct,tt),ue.copy(fe))},reset:function(){N=!1,q=null,ue.set(-1,0,0,0)}}}function s(){let N=!1,fe=null,q=null,ue=null;return{setTest:function(ae){ae?se(2929):me(2929)},setMask:function(ae){fe!==ae&&!N&&(n.depthMask(ae),fe=ae)},setFunc:function(ae){if(q!==ae){if(ae)switch(ae){case ty:n.depthFunc(512);break;case ny:n.depthFunc(519);break;case iy:n.depthFunc(513);break;case Zc:n.depthFunc(515);break;case ry:n.depthFunc(514);break;case sy:n.depthFunc(518);break;case oy:n.depthFunc(516);break;case ay:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);q=ae}},setLocked:function(ae){N=ae},setClear:function(ae){ue!==ae&&(n.clearDepth(ae),ue=ae)},reset:function(){N=!1,fe=null,q=null,ue=null}}}function o(){let N=!1,fe=null,q=null,ue=null,ae=null,De=null,ct=null,tt=null,ci=null;return{setTest:function(Ze){N||(Ze?se(2960):me(2960))},setMask:function(Ze){fe!==Ze&&!N&&(n.stencilMask(Ze),fe=Ze)},setFunc:function(Ze,Wn,en){(q!==Ze||ue!==Wn||ae!==en)&&(n.stencilFunc(Ze,Wn,en),q=Ze,ue=Wn,ae=en)},setOp:function(Ze,Wn,en){(De!==Ze||ct!==Wn||tt!==en)&&(n.stencilOp(Ze,Wn,en),De=Ze,ct=Wn,tt=en)},setLocked:function(Ze){N=Ze},setClear:function(Ze){ci!==Ze&&(n.clearStencil(Ze),ci=Ze)},reset:function(){N=!1,fe=null,q=null,ue=null,ae=null,De=null,ct=null,tt=null,ci=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,f=new WeakMap;let d={},g={},x=new WeakMap,p=[],h=null,m=!1,v=null,_=null,S=null,w=null,T=null,P=null,y=null,L=!1,O=null,G=null,ie=null,ee=null,B=null;const K=n.getParameter(35661);let X=!1,Q=0;const F=n.getParameter(7938);F.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(F)[1]),X=Q>=1):F.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),X=Q>=2);let I=null,b={};const A=n.getParameter(3088),D=n.getParameter(2978),k=new pt().fromArray(A),U=new pt().fromArray(D);function $(N,fe,q){const ue=new Uint8Array(4),ae=n.createTexture();n.bindTexture(N,ae),n.texParameteri(N,10241,9728),n.texParameteri(N,10240,9728);for(let De=0;De<q;De++)n.texImage2D(fe+De,0,6408,1,1,0,6408,5121,ue);return ae}const R={};R[3553]=$(3553,3553,1),R[34067]=$(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),se(2929),l.setFunc(Zc),Ct(!1),Rn(bh),se(2884),gt(zi);function se(N){d[N]!==!0&&(n.enable(N),d[N]=!0)}function me(N){d[N]!==!1&&(n.disable(N),d[N]=!1)}function ge(N,fe){return g[N]!==fe?(n.bindFramebuffer(N,fe),g[N]=fe,i&&(N===36009&&(g[36160]=fe),N===36160&&(g[36009]=fe)),!0):!1}function ce(N,fe){let q=p,ue=!1;if(N)if(q=x.get(fe),q===void 0&&(q=[],x.set(fe,q)),N.isWebGLMultipleRenderTargets){const ae=N.texture;if(q.length!==ae.length||q[0]!==36064){for(let De=0,ct=ae.length;De<ct;De++)q[De]=36064+De;q.length=ae.length,ue=!0}}else q[0]!==36064&&(q[0]=36064,ue=!0);else q[0]!==1029&&(q[0]=1029,ue=!0);ue&&(t.isWebGL2?n.drawBuffers(q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(q))}function Ie(N){return h!==N?(n.useProgram(N),h=N,!0):!1}const Me={[Wr]:32774,[Wx]:32778,[jx]:32779};if(i)Me[Lh]=32775,Me[Ph]=32776;else{const N=e.get("EXT_blend_minmax");N!==null&&(Me[Lh]=N.MIN_EXT,Me[Ph]=N.MAX_EXT)}const xe={[Xx]:0,[$x]:1,[qx]:768,[g0]:770,[ey]:776,[Qx]:774,[Zx]:772,[Yx]:769,[v0]:771,[Jx]:775,[Kx]:773};function gt(N,fe,q,ue,ae,De,ct,tt){if(N===zi){m===!0&&(me(3042),m=!1);return}if(m===!1&&(se(3042),m=!0),N!==Hx){if(N!==v||tt!==L){if((_!==Wr||T!==Wr)&&(n.blendEquation(32774),_=Wr,T=Wr),tt)switch(N){case ds:n.blendFuncSeparate(1,771,1,771);break;case Th:n.blendFunc(1,1);break;case Ch:n.blendFuncSeparate(0,769,0,1);break;case Ah:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ds:n.blendFuncSeparate(770,771,1,771);break;case Th:n.blendFunc(770,1);break;case Ch:n.blendFuncSeparate(0,769,0,1);break;case Ah:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}S=null,w=null,P=null,y=null,v=N,L=tt}return}ae=ae||fe,De=De||q,ct=ct||ue,(fe!==_||ae!==T)&&(n.blendEquationSeparate(Me[fe],Me[ae]),_=fe,T=ae),(q!==S||ue!==w||De!==P||ct!==y)&&(n.blendFuncSeparate(xe[q],xe[ue],xe[De],xe[ct]),S=q,w=ue,P=De,y=ct),v=N,L=null}function Gt(N,fe){N.side===Ss?me(2884):se(2884);let q=N.side===Ln;fe&&(q=!q),Ct(q),N.blending===ds&&N.transparent===!1?gt(zi):gt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const ue=N.stencilWrite;u.setTest(ue),ue&&(u.setMask(N.stencilWriteMask),u.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),u.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ue(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?se(32926):me(32926)}function Ct(N){O!==N&&(N?n.frontFace(2304):n.frontFace(2305),O=N)}function Rn(N){N!==Ux?(se(2884),N!==G&&(N===bh?n.cullFace(1029):N===Bx?n.cullFace(1028):n.cullFace(1032))):me(2884),G=N}function vt(N){N!==ie&&(X&&n.lineWidth(N),ie=N)}function Ue(N,fe,q){N?(se(32823),(ee!==fe||B!==q)&&(n.polygonOffset(fe,q),ee=fe,B=q)):me(32823)}function Hn(N){N?se(3089):me(3089)}function In(N){N===void 0&&(N=33984+K-1),I!==N&&(n.activeTexture(N),I=N)}function C(N,fe){I===null&&In();let q=b[I];q===void 0&&(q={type:void 0,texture:void 0},b[I]=q),(q.type!==N||q.texture!==fe)&&(n.bindTexture(N,fe||R[N]),q.type=N,q.texture=fe)}function M(){const N=b[I];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Y(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Se(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function he(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(N){k.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),k.copy(N))}function pe(N){U.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),U.copy(N))}function Ee(N,fe){let q=f.get(fe);q===void 0&&(q=new WeakMap,f.set(fe,q));let ue=q.get(N);ue===void 0&&(ue=n.getUniformBlockIndex(fe,N.name),q.set(N,ue))}function ke(N,fe){const ue=f.get(fe).get(N);c.get(N)!==ue&&(n.uniformBlockBinding(fe,ue,N.__bindingPointIndex),c.set(N,ue))}function et(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},I=null,b={},g={},x=new WeakMap,p=[],h=null,m=!1,v=null,_=null,S=null,w=null,T=null,P=null,y=null,L=!1,O=null,G=null,ie=null,ee=null,B=null,k.set(0,0,n.canvas.width,n.canvas.height),U.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:se,disable:me,bindFramebuffer:ge,drawBuffers:ce,useProgram:Ie,setBlending:gt,setMaterial:Gt,setFlipSided:Ct,setCullFace:Rn,setLineWidth:vt,setPolygonOffset:Ue,setScissorTest:Hn,activeTexture:In,bindTexture:C,unbindTexture:M,compressedTexImage2D:Y,texImage2D:_e,texImage3D:he,updateUBOMapping:Ee,uniformBlockBinding:ke,texStorage2D:Se,texStorage3D:j,texSubImage2D:te,texSubImage3D:re,compressedTexSubImage2D:le,scissor:ve,viewport:pe,reset:et}}function bE(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let p;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,M){return m?new OffscreenCanvas(C,M):Do("canvas")}function _(C,M,Y,te){let re=1;if((C.width>te||C.height>te)&&(re=te/Math.max(C.width,C.height)),re<1||M===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const le=M?nf:Math.floor,Se=le(re*C.width),j=le(re*C.height);p===void 0&&(p=v(Se,j));const _e=Y?v(Se,j):p;return _e.width=Se,_e.height=j,_e.getContext("2d").drawImage(C,0,0,Se,j),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Se+"x"+j+")."),_e}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function S(C){return ip(C.width)&&ip(C.height)}function w(C){return a?!1:C.wrapS!==En||C.wrapT!==En||C.minFilter!==ht&&C.minFilter!==on}function T(C,M){return C.generateMipmaps&&M&&C.minFilter!==ht&&C.minFilter!==on}function P(C){n.generateMipmap(C)}function y(C,M,Y,te,re=!1){if(a===!1)return M;if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let le=M;return M===6403&&(Y===5126&&(le=33326),Y===5131&&(le=33325),Y===5121&&(le=33321)),M===33319&&(Y===5126&&(le=33328),Y===5131&&(le=33327),Y===5121&&(le=33323)),M===6408&&(Y===5126&&(le=34836),Y===5131&&(le=34842),Y===5121&&(le=te===je&&re===!1?35907:32856),Y===32819&&(le=32854),Y===32820&&(le=32855)),(le===33325||le===33326||le===33327||le===33328||le===34842||le===34836)&&e.get("EXT_color_buffer_float"),le}function L(C,M,Y){return T(C,Y)===!0||C.isFramebufferTexture&&C.minFilter!==ht&&C.minFilter!==on?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function O(C){return C===ht||C===Dh||C===Rh?9728:9729}function G(C){const M=C.target;M.removeEventListener("dispose",G),ee(M),M.isVideoTexture&&x.delete(M)}function ie(C){const M=C.target;M.removeEventListener("dispose",ie),K(M)}function ee(C){const M=i.get(C);if(M.__webglInit===void 0)return;const Y=C.source,te=h.get(Y);if(te){const re=te[M.__cacheKey];re.usedTimes--,re.usedTimes===0&&B(C),Object.keys(te).length===0&&h.delete(Y)}i.remove(C)}function B(C){const M=i.get(C);n.deleteTexture(M.__webglTexture);const Y=C.source,te=h.get(Y);delete te[M.__cacheKey],o.memory.textures--}function K(C){const M=C.texture,Y=i.get(C),te=i.get(M);if(te.__webglTexture!==void 0&&(n.deleteTexture(te.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)n.deleteFramebuffer(Y.__webglFramebuffer[re]),Y.__webglDepthbuffer&&n.deleteRenderbuffer(Y.__webglDepthbuffer[re]);else{if(n.deleteFramebuffer(Y.__webglFramebuffer),Y.__webglDepthbuffer&&n.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let re=0;re<Y.__webglColorRenderbuffer.length;re++)Y.__webglColorRenderbuffer[re]&&n.deleteRenderbuffer(Y.__webglColorRenderbuffer[re]);Y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let re=0,le=M.length;re<le;re++){const Se=i.get(M[re]);Se.__webglTexture&&(n.deleteTexture(Se.__webglTexture),o.memory.textures--),i.remove(M[re])}i.remove(M),i.remove(C)}let X=0;function Q(){X=0}function F(){const C=X;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),X+=1,C}function I(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.encoding),M.join()}function b(C,M){const Y=i.get(C);if(C.isVideoTexture&&Hn(C),C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){const te=C.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(Y,C,M);return}}t.activeTexture(33984+M),t.bindTexture(3553,Y.__webglTexture)}function A(C,M){const Y=i.get(C);if(C.version>0&&Y.__version!==C.version){me(Y,C,M);return}t.activeTexture(33984+M),t.bindTexture(35866,Y.__webglTexture)}function D(C,M){const Y=i.get(C);if(C.version>0&&Y.__version!==C.version){me(Y,C,M);return}t.activeTexture(33984+M),t.bindTexture(32879,Y.__webglTexture)}function k(C,M){const Y=i.get(C);if(C.version>0&&Y.__version!==C.version){ge(Y,C,M);return}t.activeTexture(33984+M),t.bindTexture(34067,Y.__webglTexture)}const U={[Jc]:10497,[En]:33071,[ef]:33648},$={[ht]:9728,[Dh]:9984,[Rh]:9986,[on]:9729,[my]:9985,[kl]:9987};function R(C,M,Y){if(Y?(n.texParameteri(C,10242,U[M.wrapS]),n.texParameteri(C,10243,U[M.wrapT]),(C===32879||C===35866)&&n.texParameteri(C,32882,U[M.wrapR]),n.texParameteri(C,10240,$[M.magFilter]),n.texParameteri(C,10241,$[M.minFilter])):(n.texParameteri(C,10242,33071),n.texParameteri(C,10243,33071),(C===32879||C===35866)&&n.texParameteri(C,32882,33071),(M.wrapS!==En||M.wrapT!==En)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(C,10240,O(M.magFilter)),n.texParameteri(C,10241,O(M.minFilter)),M.minFilter!==ht&&M.minFilter!==on&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(M.type===rr&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Po&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(n.texParameterf(C,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function se(C,M){let Y=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",G));const te=M.source;let re=h.get(te);re===void 0&&(re={},h.set(te,re));const le=I(M);if(le!==C.__cacheKey){re[le]===void 0&&(re[le]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),re[le].usedTimes++;const Se=re[C.__cacheKey];Se!==void 0&&(re[C.__cacheKey].usedTimes--,Se.usedTimes===0&&B(M)),C.__cacheKey=le,C.__webglTexture=re[le].texture}return Y}function me(C,M,Y){let te=3553;M.isDataArrayTexture&&(te=35866),M.isData3DTexture&&(te=32879);const re=se(C,M),le=M.source;if(t.activeTexture(33984+Y),t.bindTexture(te,C.__webglTexture),le.version!==le.__currentVersion||re===!0){n.pixelStorei(37440,M.flipY),n.pixelStorei(37441,M.premultiplyAlpha),n.pixelStorei(3317,M.unpackAlignment),n.pixelStorei(37443,0);const Se=w(M)&&S(M.image)===!1;let j=_(M.image,Se,!1,c);j=In(M,j);const _e=S(j)||a,he=s.convert(M.format,M.encoding);let ve=s.convert(M.type),pe=y(M.internalFormat,he,ve,M.encoding,M.isVideoTexture);R(te,M,_e);let Ee;const ke=M.mipmaps,et=a&&M.isVideoTexture!==!0,N=le.__currentVersion===void 0||re===!0,fe=L(M,j,_e);if(M.isDepthTexture)pe=6402,a?M.type===rr?pe=36012:M.type===ir?pe=33190:M.type===hs?pe=35056:pe=33189:M.type===rr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===ur&&pe===6402&&M.type!==y0&&M.type!==ir&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=ir,ve=s.convert(M.type)),M.format===Es&&pe===6402&&(pe=34041,M.type!==hs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=hs,ve=s.convert(M.type))),N&&(et?t.texStorage2D(3553,1,pe,j.width,j.height):t.texImage2D(3553,0,pe,j.width,j.height,0,he,ve,null));else if(M.isDataTexture)if(ke.length>0&&_e){et&&N&&t.texStorage2D(3553,fe,pe,ke[0].width,ke[0].height);for(let q=0,ue=ke.length;q<ue;q++)Ee=ke[q],et?t.texSubImage2D(3553,q,0,0,Ee.width,Ee.height,he,ve,Ee.data):t.texImage2D(3553,q,pe,Ee.width,Ee.height,0,he,ve,Ee.data);M.generateMipmaps=!1}else et?(N&&t.texStorage2D(3553,fe,pe,j.width,j.height),t.texSubImage2D(3553,0,0,0,j.width,j.height,he,ve,j.data)):t.texImage2D(3553,0,pe,j.width,j.height,0,he,ve,j.data);else if(M.isCompressedTexture){et&&N&&t.texStorage2D(3553,fe,pe,ke[0].width,ke[0].height);for(let q=0,ue=ke.length;q<ue;q++)Ee=ke[q],M.format!==Un?he!==null?et?t.compressedTexSubImage2D(3553,q,0,0,Ee.width,Ee.height,he,Ee.data):t.compressedTexImage2D(3553,q,pe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?t.texSubImage2D(3553,q,0,0,Ee.width,Ee.height,he,ve,Ee.data):t.texImage2D(3553,q,pe,Ee.width,Ee.height,0,he,ve,Ee.data)}else if(M.isDataArrayTexture)et?(N&&t.texStorage3D(35866,fe,pe,j.width,j.height,j.depth),t.texSubImage3D(35866,0,0,0,0,j.width,j.height,j.depth,he,ve,j.data)):t.texImage3D(35866,0,pe,j.width,j.height,j.depth,0,he,ve,j.data);else if(M.isData3DTexture)et?(N&&t.texStorage3D(32879,fe,pe,j.width,j.height,j.depth),t.texSubImage3D(32879,0,0,0,0,j.width,j.height,j.depth,he,ve,j.data)):t.texImage3D(32879,0,pe,j.width,j.height,j.depth,0,he,ve,j.data);else if(M.isFramebufferTexture){if(N)if(et)t.texStorage2D(3553,fe,pe,j.width,j.height);else{let q=j.width,ue=j.height;for(let ae=0;ae<fe;ae++)t.texImage2D(3553,ae,pe,q,ue,0,he,ve,null),q>>=1,ue>>=1}}else if(ke.length>0&&_e){et&&N&&t.texStorage2D(3553,fe,pe,ke[0].width,ke[0].height);for(let q=0,ue=ke.length;q<ue;q++)Ee=ke[q],et?t.texSubImage2D(3553,q,0,0,he,ve,Ee):t.texImage2D(3553,q,pe,he,ve,Ee);M.generateMipmaps=!1}else et?(N&&t.texStorage2D(3553,fe,pe,j.width,j.height),t.texSubImage2D(3553,0,0,0,he,ve,j)):t.texImage2D(3553,0,pe,he,ve,j);T(M,_e)&&P(te),le.__currentVersion=le.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ge(C,M,Y){if(M.image.length!==6)return;const te=se(C,M),re=M.source;if(t.activeTexture(33984+Y),t.bindTexture(34067,C.__webglTexture),re.version!==re.__currentVersion||te===!0){n.pixelStorei(37440,M.flipY),n.pixelStorei(37441,M.premultiplyAlpha),n.pixelStorei(3317,M.unpackAlignment),n.pixelStorei(37443,0);const le=M.isCompressedTexture||M.image[0].isCompressedTexture,Se=M.image[0]&&M.image[0].isDataTexture,j=[];for(let q=0;q<6;q++)!le&&!Se?j[q]=_(M.image[q],!1,!0,u):j[q]=Se?M.image[q].image:M.image[q],j[q]=In(M,j[q]);const _e=j[0],he=S(_e)||a,ve=s.convert(M.format,M.encoding),pe=s.convert(M.type),Ee=y(M.internalFormat,ve,pe,M.encoding),ke=a&&M.isVideoTexture!==!0,et=re.__currentVersion===void 0||te===!0;let N=L(M,_e,he);R(34067,M,he);let fe;if(le){ke&&et&&t.texStorage2D(34067,N,Ee,_e.width,_e.height);for(let q=0;q<6;q++){fe=j[q].mipmaps;for(let ue=0;ue<fe.length;ue++){const ae=fe[ue];M.format!==Un?ve!==null?ke?t.compressedTexSubImage2D(34069+q,ue,0,0,ae.width,ae.height,ve,ae.data):t.compressedTexImage2D(34069+q,ue,Ee,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?t.texSubImage2D(34069+q,ue,0,0,ae.width,ae.height,ve,pe,ae.data):t.texImage2D(34069+q,ue,Ee,ae.width,ae.height,0,ve,pe,ae.data)}}}else{fe=M.mipmaps,ke&&et&&(fe.length>0&&N++,t.texStorage2D(34067,N,Ee,j[0].width,j[0].height));for(let q=0;q<6;q++)if(Se){ke?t.texSubImage2D(34069+q,0,0,0,j[q].width,j[q].height,ve,pe,j[q].data):t.texImage2D(34069+q,0,Ee,j[q].width,j[q].height,0,ve,pe,j[q].data);for(let ue=0;ue<fe.length;ue++){const De=fe[ue].image[q].image;ke?t.texSubImage2D(34069+q,ue+1,0,0,De.width,De.height,ve,pe,De.data):t.texImage2D(34069+q,ue+1,Ee,De.width,De.height,0,ve,pe,De.data)}}else{ke?t.texSubImage2D(34069+q,0,0,0,ve,pe,j[q]):t.texImage2D(34069+q,0,Ee,ve,pe,j[q]);for(let ue=0;ue<fe.length;ue++){const ae=fe[ue];ke?t.texSubImage2D(34069+q,ue+1,0,0,ve,pe,ae.image[q]):t.texImage2D(34069+q,ue+1,Ee,ve,pe,ae.image[q])}}}T(M,he)&&P(34067),re.__currentVersion=re.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ce(C,M,Y,te,re){const le=s.convert(Y.format,Y.encoding),Se=s.convert(Y.type),j=y(Y.internalFormat,le,Se,Y.encoding);i.get(M).__hasExternalTextures||(re===32879||re===35866?t.texImage3D(re,0,j,M.width,M.height,M.depth,0,le,Se,null):t.texImage2D(re,0,j,M.width,M.height,0,le,Se,null)),t.bindFramebuffer(36160,C),Ue(M)?d.framebufferTexture2DMultisampleEXT(36160,te,re,i.get(Y).__webglTexture,0,vt(M)):n.framebufferTexture2D(36160,te,re,i.get(Y).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ie(C,M,Y){if(n.bindRenderbuffer(36161,C),M.depthBuffer&&!M.stencilBuffer){let te=33189;if(Y||Ue(M)){const re=M.depthTexture;re&&re.isDepthTexture&&(re.type===rr?te=36012:re.type===ir&&(te=33190));const le=vt(M);Ue(M)?d.renderbufferStorageMultisampleEXT(36161,le,te,M.width,M.height):n.renderbufferStorageMultisample(36161,le,te,M.width,M.height)}else n.renderbufferStorage(36161,te,M.width,M.height);n.framebufferRenderbuffer(36160,36096,36161,C)}else if(M.depthBuffer&&M.stencilBuffer){const te=vt(M);Y&&Ue(M)===!1?n.renderbufferStorageMultisample(36161,te,35056,M.width,M.height):Ue(M)?d.renderbufferStorageMultisampleEXT(36161,te,35056,M.width,M.height):n.renderbufferStorage(36161,34041,M.width,M.height),n.framebufferRenderbuffer(36160,33306,36161,C)}else{const te=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let re=0;re<te.length;re++){const le=te[re],Se=s.convert(le.format,le.encoding),j=s.convert(le.type),_e=y(le.internalFormat,Se,j,le.encoding),he=vt(M);Y&&Ue(M)===!1?n.renderbufferStorageMultisample(36161,he,_e,M.width,M.height):Ue(M)?d.renderbufferStorageMultisampleEXT(36161,he,_e,M.width,M.height):n.renderbufferStorage(36161,_e,M.width,M.height)}}n.bindRenderbuffer(36161,null)}function Me(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),b(M.depthTexture,0);const te=i.get(M.depthTexture).__webglTexture,re=vt(M);if(M.depthTexture.format===ur)Ue(M)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,re):n.framebufferTexture2D(36160,36096,3553,te,0);else if(M.depthTexture.format===Es)Ue(M)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,re):n.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function xe(C){const M=i.get(C),Y=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Me(M.__webglFramebuffer,C)}else if(Y){M.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(36160,M.__webglFramebuffer[te]),M.__webglDepthbuffer[te]=n.createRenderbuffer(),Ie(M.__webglDepthbuffer[te],C,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),Ie(M.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function gt(C,M,Y){const te=i.get(C);M!==void 0&&ce(te.__webglFramebuffer,C,C.texture,36064,3553),Y!==void 0&&xe(C)}function Gt(C){const M=C.texture,Y=i.get(C),te=i.get(M);C.addEventListener("dispose",ie),C.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=M.version,o.memory.textures++);const re=C.isWebGLCubeRenderTarget===!0,le=C.isWebGLMultipleRenderTargets===!0,Se=S(C)||a;if(re){Y.__webglFramebuffer=[];for(let j=0;j<6;j++)Y.__webglFramebuffer[j]=n.createFramebuffer()}else{if(Y.__webglFramebuffer=n.createFramebuffer(),le)if(r.drawBuffers){const j=C.texture;for(let _e=0,he=j.length;_e<he;_e++){const ve=i.get(j[_e]);ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&Ue(C)===!1){const j=le?M:[M];Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,Y.__webglMultisampledFramebuffer);for(let _e=0;_e<j.length;_e++){const he=j[_e];Y.__webglColorRenderbuffer[_e]=n.createRenderbuffer(),n.bindRenderbuffer(36161,Y.__webglColorRenderbuffer[_e]);const ve=s.convert(he.format,he.encoding),pe=s.convert(he.type),Ee=y(he.internalFormat,ve,pe,he.encoding),ke=vt(C);n.renderbufferStorageMultisample(36161,ke,Ee,C.width,C.height),n.framebufferRenderbuffer(36160,36064+_e,36161,Y.__webglColorRenderbuffer[_e])}n.bindRenderbuffer(36161,null),C.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),Ie(Y.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(re){t.bindTexture(34067,te.__webglTexture),R(34067,M,Se);for(let j=0;j<6;j++)ce(Y.__webglFramebuffer[j],C,M,36064,34069+j);T(M,Se)&&P(34067),t.unbindTexture()}else if(le){const j=C.texture;for(let _e=0,he=j.length;_e<he;_e++){const ve=j[_e],pe=i.get(ve);t.bindTexture(3553,pe.__webglTexture),R(3553,ve,Se),ce(Y.__webglFramebuffer,C,ve,36064+_e,3553),T(ve,Se)&&P(3553)}t.unbindTexture()}else{let j=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?j=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(j,te.__webglTexture),R(j,M,Se),ce(Y.__webglFramebuffer,C,M,36064,j),T(M,Se)&&P(j),t.unbindTexture()}C.depthBuffer&&xe(C)}function Ct(C){const M=S(C)||a,Y=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let te=0,re=Y.length;te<re;te++){const le=Y[te];if(T(le,M)){const Se=C.isWebGLCubeRenderTarget?34067:3553,j=i.get(le).__webglTexture;t.bindTexture(Se,j),P(Se),t.unbindTexture()}}}function Rn(C){if(a&&C.samples>0&&Ue(C)===!1){const M=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],Y=C.width,te=C.height;let re=16384;const le=[],Se=C.stencilBuffer?33306:36096,j=i.get(C),_e=C.isWebGLMultipleRenderTargets===!0;if(_e)for(let he=0;he<M.length;he++)t.bindFramebuffer(36160,j.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+he,36161,null),t.bindFramebuffer(36160,j.__webglFramebuffer),n.framebufferTexture2D(36009,36064+he,3553,null,0);t.bindFramebuffer(36008,j.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,j.__webglFramebuffer);for(let he=0;he<M.length;he++){le.push(36064+he),C.depthBuffer&&le.push(Se);const ve=j.__ignoreDepthValues!==void 0?j.__ignoreDepthValues:!1;if(ve===!1&&(C.depthBuffer&&(re|=256),C.stencilBuffer&&(re|=1024)),_e&&n.framebufferRenderbuffer(36008,36064,36161,j.__webglColorRenderbuffer[he]),ve===!0&&(n.invalidateFramebuffer(36008,[Se]),n.invalidateFramebuffer(36009,[Se])),_e){const pe=i.get(M[he]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,pe,0)}n.blitFramebuffer(0,0,Y,te,0,0,Y,te,re,9728),g&&n.invalidateFramebuffer(36008,le)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),_e)for(let he=0;he<M.length;he++){t.bindFramebuffer(36160,j.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+he,36161,j.__webglColorRenderbuffer[he]);const ve=i.get(M[he]).__webglTexture;t.bindFramebuffer(36160,j.__webglFramebuffer),n.framebufferTexture2D(36009,36064+he,3553,ve,0)}t.bindFramebuffer(36009,j.__webglMultisampledFramebuffer)}}function vt(C){return Math.min(f,C.samples)}function Ue(C){const M=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Hn(C){const M=o.render.frame;x.get(C)!==M&&(x.set(C,M),C.update())}function In(C,M){const Y=C.encoding,te=C.format,re=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===tf||Y!==vr&&(Y===je?a===!1?e.has("EXT_sRGB")===!0&&te===Un?(C.format=tf,C.minFilter=on,C.generateMipmaps=!1):M=M0.sRGBToLinear(M):(te!==Un||re!==gr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",Y)),M}this.allocateTextureUnit=F,this.resetTextureUnits=Q,this.setTexture2D=b,this.setTexture2DArray=A,this.setTexture3D=D,this.setTextureCube=k,this.rebindTextures=gt,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=Rn,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Ue}function TE(n,e,t){const i=t.isWebGL2;function r(s,o=null){let a;if(s===gr)return 5121;if(s===xy)return 32819;if(s===yy)return 32820;if(s===gy)return 5120;if(s===vy)return 5122;if(s===y0)return 5123;if(s===_y)return 5124;if(s===ir)return 5125;if(s===rr)return 5126;if(s===Po)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Sy)return 6406;if(s===Un)return 6408;if(s===My)return 6409;if(s===Ey)return 6410;if(s===ur)return 6402;if(s===Es)return 34041;if(s===by)return 6403;if(s===wy)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===tf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Ty)return 36244;if(s===Cy)return 33319;if(s===Ay)return 33320;if(s===Ly)return 36249;if(s===mu||s===gu||s===vu||s===_u)if(o===je)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===mu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===gu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===vu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===_u)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===mu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===gu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===vu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===_u)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ih||s===kh||s===Nh||s===Fh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Ih)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===kh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Nh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Fh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Py)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===zh||s===Oh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===zh)return o===je?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Oh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Uh||s===Bh||s===Vh||s===Gh||s===Hh||s===Wh||s===jh||s===Xh||s===$h||s===qh||s===Yh||s===Zh||s===Kh||s===Qh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Uh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Bh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Vh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Gh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Hh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Wh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===jh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Xh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===$h)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===qh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Yh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Zh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Kh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Qh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Jh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Jh)return o===je?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===hs?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class CE extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class eo extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AE={type:"move"};class $u{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new eo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new eo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new eo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const p of e.hand.values()){const h=t.getJointPose(p,i);if(u.joints[p.jointName]===void 0){const v=new eo;v.matrixAutoUpdate=!1,v.visible=!1,u.joints[p.jointName]=v,u.add(v)}const m=u.joints[p.jointName];h!==null&&(m.matrix.fromArray(h.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=h.radius),m.visible=h!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),g=.02,x=.005;u.inputState.pinching&&d>g+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=g-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(AE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}}class LE extends pn{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:ur,c!==ur&&c!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===ur&&(i=ir),i===void 0&&c===Es&&(i=hs),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ht,this.minFilter=l!==void 0?l:ht,this.flipY=!1,this.generateMipmaps=!1}}class PE extends wr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=null,u=null,c=null,f=null,d=null,g=null;const x=t.getContextAttributes();let p=null,h=null;const m=[],v=[],_=new an;_.layers.enable(1),_.viewport=new pt;const S=new an;S.layers.enable(2),S.viewport=new pt;const w=[_,S],T=new CE;T.layers.enable(1),T.layers.enable(2);let P=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let b=m[I];return b===void 0&&(b=new $u,m[I]=b),b.getTargetRaySpace()},this.getControllerGrip=function(I){let b=m[I];return b===void 0&&(b=new $u,m[I]=b),b.getGripSpace()},this.getHand=function(I){let b=m[I];return b===void 0&&(b=new $u,m[I]=b),b.getHandSpace()};function L(I){const b=v.indexOf(I.inputSource);if(b===-1)return;const A=m[b];A!==void 0&&A.dispatchEvent({type:I.type,data:I.inputSource})}function O(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",G);for(let I=0;I<m.length;I++){const b=v[I];b!==null&&(v[I]=null,m[I].disconnect(b))}P=null,y=null,e.setRenderTarget(p),d=null,f=null,c=null,r=null,h=null,F.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){s=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(I){l=I},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return c},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(I){if(r=I,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",O),r.addEventListener("inputsourceschange",G),x.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const b={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:x.alpha,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,b),r.updateRenderState({baseLayer:d}),h=new _r(d.framebufferWidth,d.framebufferHeight,{format:Un,type:gr,encoding:e.outputEncoding})}else{let b=null,A=null,D=null;x.depth&&(D=x.stencil?35056:33190,b=x.stencil?Es:ur,A=x.stencil?hs:ir);const k={colorFormat:32856,depthFormat:D,scaleFactor:s};c=new XRWebGLBinding(r,t),f=c.createProjectionLayer(k),r.updateRenderState({layers:[f]}),h=new _r(f.textureWidth,f.textureHeight,{format:Un,type:gr,depthTexture:new LE(f.textureWidth,f.textureHeight,A,void 0,void 0,void 0,void 0,void 0,void 0,b),stencilBuffer:x.stencil,encoding:e.outputEncoding,samples:x.antialias?4:0});const U=e.properties.get(h);U.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),F.setContext(r),F.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function G(I){for(let b=0;b<I.removed.length;b++){const A=I.removed[b],D=v.indexOf(A);D>=0&&(v[D]=null,m[D].dispatchEvent({type:"disconnected",data:A}))}for(let b=0;b<I.added.length;b++){const A=I.added[b];let D=v.indexOf(A);if(D===-1){for(let U=0;U<m.length;U++)if(U>=v.length){v.push(A),D=U;break}else if(v[U]===null){v[U]=A,D=U;break}if(D===-1)break}const k=m[D];k&&k.dispatchEvent({type:"connected",data:A})}}const ie=new z,ee=new z;function B(I,b,A){ie.setFromMatrixPosition(b.matrixWorld),ee.setFromMatrixPosition(A.matrixWorld);const D=ie.distanceTo(ee),k=b.projectionMatrix.elements,U=A.projectionMatrix.elements,$=k[14]/(k[10]-1),R=k[14]/(k[10]+1),se=(k[9]+1)/k[5],me=(k[9]-1)/k[5],ge=(k[8]-1)/k[0],ce=(U[8]+1)/U[0],Ie=$*ge,Me=$*ce,xe=D/(-ge+ce),gt=xe*-ge;b.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(gt),I.translateZ(xe),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const Gt=$+xe,Ct=R+xe,Rn=Ie-gt,vt=Me+(D-gt),Ue=se*R/Ct*Gt,Hn=me*R/Ct*Gt;I.projectionMatrix.makePerspective(Rn,vt,Ue,Hn,Gt,Ct)}function K(I,b){b===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(b.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(r===null)return;T.near=S.near=_.near=I.near,T.far=S.far=_.far=I.far,(P!==T.near||y!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),P=T.near,y=T.far);const b=I.parent,A=T.cameras;K(T,b);for(let k=0;k<A.length;k++)K(A[k],b);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),I.position.copy(T.position),I.quaternion.copy(T.quaternion),I.scale.copy(T.scale),I.matrix.copy(T.matrix),I.matrixWorld.copy(T.matrixWorld);const D=I.children;for(let k=0,U=D.length;k<U;k++)D[k].updateMatrixWorld(!0);A.length===2?B(T,_,S):T.projectionMatrix.copy(_.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(I){f!==null&&(f.fixedFoveation=I),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=I)};let X=null;function Q(I,b){if(u=b.getViewerPose(l||o),g=b,u!==null){const A=u.views;d!==null&&(e.setRenderTargetFramebuffer(h,d.framebuffer),e.setRenderTarget(h));let D=!1;A.length!==T.cameras.length&&(T.cameras.length=0,D=!0);for(let k=0;k<A.length;k++){const U=A[k];let $=null;if(d!==null)$=d.getViewport(U);else{const se=c.getViewSubImage(f,U);$=se.viewport,k===0&&(e.setRenderTargetTextures(h,se.colorTexture,f.ignoreDepthValues?void 0:se.depthStencilTexture),e.setRenderTarget(h))}let R=w[k];R===void 0&&(R=new an,R.layers.enable(k),R.viewport=new pt,w[k]=R),R.matrix.fromArray(U.transform.matrix),R.projectionMatrix.fromArray(U.projectionMatrix),R.viewport.set($.x,$.y,$.width,$.height),k===0&&T.matrix.copy(R.matrix),D===!0&&T.cameras.push(R)}}for(let A=0;A<m.length;A++){const D=v[A],k=m[A];D!==null&&k!==void 0&&k.update(D,b,l||o)}X&&X(I,b),g=null}const F=new P0;F.setAnimationLoop(Q),this.setAnimationLoop=function(I){X=I},this.dispose=function(){}}}function DE(n,e){function t(p,h){p.fogColor.value.copy(h.color),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function i(p,h,m,v,_){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),c(p,h)):h.isMeshPhongMaterial?(r(p,h),u(p,h)):h.isMeshStandardMaterial?(r(p,h),f(p,h),h.isMeshPhysicalMaterial&&d(p,h,_)):h.isMeshMatcapMaterial?(r(p,h),g(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),x(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(s(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?a(p,h,m,v):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.bumpMap&&(p.bumpMap.value=h.bumpMap,p.bumpScale.value=h.bumpScale,h.side===Ln&&(p.bumpScale.value*=-1)),h.displacementMap&&(p.displacementMap.value=h.displacementMap,p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap),h.normalMap&&(p.normalMap.value=h.normalMap,p.normalScale.value.copy(h.normalScale),h.side===Ln&&p.normalScale.value.negate()),h.specularMap&&(p.specularMap.value=h.specularMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const m=e.get(h).envMap;if(m&&(p.envMap.value=m,p.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const S=n.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*S}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity);let v;h.map?v=h.map:h.specularMap?v=h.specularMap:h.displacementMap?v=h.displacementMap:h.normalMap?v=h.normalMap:h.bumpMap?v=h.bumpMap:h.roughnessMap?v=h.roughnessMap:h.metalnessMap?v=h.metalnessMap:h.alphaMap?v=h.alphaMap:h.emissiveMap?v=h.emissiveMap:h.clearcoatMap?v=h.clearcoatMap:h.clearcoatNormalMap?v=h.clearcoatNormalMap:h.clearcoatRoughnessMap?v=h.clearcoatRoughnessMap:h.iridescenceMap?v=h.iridescenceMap:h.iridescenceThicknessMap?v=h.iridescenceThicknessMap:h.specularIntensityMap?v=h.specularIntensityMap:h.specularColorMap?v=h.specularColorMap:h.transmissionMap?v=h.transmissionMap:h.thicknessMap?v=h.thicknessMap:h.sheenColorMap?v=h.sheenColorMap:h.sheenRoughnessMap&&(v=h.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix));let _;h.aoMap?_=h.aoMap:h.lightMap&&(_=h.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uv2Transform.value.copy(_.matrix))}function s(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function a(p,h,m,v){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*m,p.scale.value=v*.5,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let _;h.map?_=h.map:h.alphaMap&&(_=h.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let m;h.map?m=h.map:h.alphaMap&&(m=h.alphaMap),m!==void 0&&(m.matrixAutoUpdate===!0&&m.updateMatrix(),p.uvTransform.value.copy(m.matrix))}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function c(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.roughness.value=h.roughness,p.metalness.value=h.metalness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function d(p,h,m){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),p.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===Ln&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=m.texture,p.transmissionSamplerSize.value.set(m.width,m.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap)}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function x(p,h){p.referencePosition.value.copy(h.referencePosition),p.nearDistance.value=h.nearDistance,p.farDistance.value=h.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function RE(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(35375):0;function l(v,_){const S=_.program;i.uniformBlockBinding(v,S)}function u(v,_){let S=r[v.id];S===void 0&&(x(v),S=c(v),r[v.id]=S,v.addEventListener("dispose",h));const w=_.program;i.updateUBOMapping(v,w);const T=e.render.frame;s[v.id]!==T&&(d(v),s[v.id]=T)}function c(v){const _=f();v.__bindingPointIndex=_;const S=n.createBuffer(),w=v.__size,T=v.usage;return n.bindBuffer(35345,S),n.bufferData(35345,w,T),n.bindBuffer(35345,null),n.bindBufferBase(35345,_,S),S}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const _=r[v.id],S=v.uniforms,w=v.__cache;n.bindBuffer(35345,_);for(let T=0,P=S.length;T<P;T++){const y=S[T];if(g(y,T,w)===!0){const L=y.value,O=y.__offset;typeof L=="number"?(y.__data[0]=L,n.bufferSubData(35345,O,y.__data)):(y.value.isMatrix3?(y.__data[0]=y.value.elements[0],y.__data[1]=y.value.elements[1],y.__data[2]=y.value.elements[2],y.__data[3]=y.value.elements[0],y.__data[4]=y.value.elements[3],y.__data[5]=y.value.elements[4],y.__data[6]=y.value.elements[5],y.__data[7]=y.value.elements[0],y.__data[8]=y.value.elements[6],y.__data[9]=y.value.elements[7],y.__data[10]=y.value.elements[8],y.__data[11]=y.value.elements[0]):L.toArray(y.__data),n.bufferSubData(35345,O,y.__data))}}n.bindBuffer(35345,null)}function g(v,_,S){const w=v.value;if(S[_]===void 0)return typeof w=="number"?S[_]=w:S[_]=w.clone(),!0;if(typeof w=="number"){if(S[_]!==w)return S[_]=w,!0}else{const T=S[_];if(T.equals(w)===!1)return T.copy(w),!0}return!1}function x(v){const _=v.uniforms;let S=0;const w=16;let T=0;for(let P=0,y=_.length;P<y;P++){const L=_[P],O=p(L);if(L.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=S,P>0){T=S%w;const G=w-T;T!==0&&G-O.boundary<0&&(S+=w-T,L.__offset=S)}S+=O.storage}return T=S%w,T>0&&(S+=w-T),v.__size=S,v.__cache={},this}function p(v){const _=v.value,S={boundary:0,storage:0};return typeof _=="number"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=48,S.storage=48):_.isMatrix4?(S.boundary=64,S.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),S}function h(v){const _=v.target;_.removeEventListener("dispose",h);const S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function m(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:m}}function IE(){const n=Do("canvas");return n.style.display="block",n}function F0(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:IE(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",u=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let c;t!==null?c=t.getContextAttributes().alpha:c=n.alpha!==void 0?n.alpha:!1;let f=null,d=null;const g=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=vr,this.physicallyCorrectLights=!1,this.toneMapping=ii,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let h=!1,m=0,v=0,_=null,S=-1,w=null;const T=new pt,P=new pt;let y=null,L=e.width,O=e.height,G=1,ie=null,ee=null;const B=new pt(0,0,L,O),K=new pt(0,0,L,O);let X=!1;const Q=new L0;let F=!1,I=!1,b=null;const A=new Je,D=new Oe,k=new z,U={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function $(){return _===null?G:1}let R=t;function se(E,V){for(let W=0;W<E.length;W++){const H=E[W],Z=e.getContext(H,V);if(Z!==null)return Z}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${rd}`),e.addEventListener("webglcontextlost",Ee,!1),e.addEventListener("webglcontextrestored",ke,!1),e.addEventListener("webglcontextcreationerror",et,!1),R===null){const V=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&V.shift(),R=se(V,E),R===null)throw se(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}R.getShaderPrecisionFormat===void 0&&(R.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let me,ge,ce,Ie,Me,xe,gt,Gt,Ct,Rn,vt,Ue,Hn,In,C,M,Y,te,re,le,Se,j,_e,he;function ve(){me=new Hw(R),ge=new Fw(R,me,n),me.init(ge),j=new TE(R,me,ge),ce=new EE(R,me,ge),Ie=new Xw,Me=new cE,xe=new bE(R,me,ce,Me,ge,j,Ie),gt=new Ow(p),Gt=new Gw(p),Ct=new iS(R,ge),_e=new kw(R,me,Ct,ge),Rn=new Ww(R,Ct,Ie,_e),vt=new Zw(R,Rn,Ct,Ie),re=new Yw(R,ge,xe),M=new zw(Me),Ue=new uE(p,gt,Gt,me,ge,_e,M),Hn=new DE(p,Me),In=new dE,C=new _E(me,ge),te=new Iw(p,gt,ce,vt,c,o),Y=new ME(p,vt,ge),he=new RE(R,Ie,ge,ce),le=new Nw(R,me,Ie,ge),Se=new jw(R,me,Ie,ge),Ie.programs=Ue.programs,p.capabilities=ge,p.extensions=me,p.properties=Me,p.renderLists=In,p.shadowMap=Y,p.state=ce,p.info=Ie}ve();const pe=new PE(p,R);this.xr=pe,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const E=me.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=me.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(E){E!==void 0&&(G=E,this.setSize(L,O,!1))},this.getSize=function(E){return E.set(L,O)},this.setSize=function(E,V,W){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=E,O=V,e.width=Math.floor(E*G),e.height=Math.floor(V*G),W!==!1&&(e.style.width=E+"px",e.style.height=V+"px"),this.setViewport(0,0,E,V)},this.getDrawingBufferSize=function(E){return E.set(L*G,O*G).floor()},this.setDrawingBufferSize=function(E,V,W){L=E,O=V,G=W,e.width=Math.floor(E*W),e.height=Math.floor(V*W),this.setViewport(0,0,E,V)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(B)},this.setViewport=function(E,V,W,H){E.isVector4?B.set(E.x,E.y,E.z,E.w):B.set(E,V,W,H),ce.viewport(T.copy(B).multiplyScalar(G).floor())},this.getScissor=function(E){return E.copy(K)},this.setScissor=function(E,V,W,H){E.isVector4?K.set(E.x,E.y,E.z,E.w):K.set(E,V,W,H),ce.scissor(P.copy(K).multiplyScalar(G).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(E){ce.setScissorTest(X=E)},this.setOpaqueSort=function(E){ie=E},this.setTransparentSort=function(E){ee=E},this.getClearColor=function(E){return E.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(E=!0,V=!0,W=!0){let H=0;E&&(H|=16384),V&&(H|=256),W&&(H|=1024),R.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",ke,!1),e.removeEventListener("webglcontextcreationerror",et,!1),In.dispose(),C.dispose(),Me.dispose(),gt.dispose(),Gt.dispose(),vt.dispose(),_e.dispose(),he.dispose(),Ue.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",De),pe.removeEventListener("sessionend",ct),b&&(b.dispose(),b=null),tt.stop()};function Ee(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),h=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),h=!1;const E=Ie.autoReset,V=Y.enabled,W=Y.autoUpdate,H=Y.needsUpdate,Z=Y.type;ve(),Ie.autoReset=E,Y.enabled=V,Y.autoUpdate=W,Y.needsUpdate=H,Y.type=Z}function et(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function N(E){const V=E.target;V.removeEventListener("dispose",N),fe(V)}function fe(E){q(E),Me.remove(E)}function q(E){const V=Me.get(E).programs;V!==void 0&&(V.forEach(function(W){Ue.releaseProgram(W)}),E.isShaderMaterial&&Ue.releaseShaderCache(E))}this.renderBufferDirect=function(E,V,W,H,Z,ye){V===null&&(V=U);const we=Z.isMesh&&Z.matrixWorld.determinant()<0,Te=X0(E,V,W,H,Z);ce.setMaterial(H,we);let be=W.index;const Fe=W.attributes.position;if(be===null){if(Fe===void 0||Fe.count===0)return}else if(be.count===0)return;let Le=1;H.wireframe===!0&&(be=Rn.getWireframeAttribute(W),Le=2),_e.setup(Z,H,Te,W,be);let Re,Ke=le;be!==null&&(Re=Ct.get(be),Ke=Se,Ke.setIndex(Re));const Wi=be!==null?be.count:Fe.count,Er=W.drawRange.start*Le,br=W.drawRange.count*Le,kn=ye!==null?ye.start*Le:0,Ne=ye!==null?ye.count*Le:1/0,Tr=Math.max(Er,kn),it=Math.min(Wi,Er+br,kn+Ne)-1,tn=Math.max(0,it-Tr+1);if(tn!==0){if(Z.isMesh)H.wireframe===!0?(ce.setLineWidth(H.wireframeLinewidth*$()),Ke.setMode(1)):Ke.setMode(4);else if(Z.isLine){let fi=H.linewidth;fi===void 0&&(fi=1),ce.setLineWidth(fi*$()),Z.isLineSegments?Ke.setMode(1):Z.isLineLoop?Ke.setMode(2):Ke.setMode(3)}else Z.isPoints?Ke.setMode(0):Z.isSprite&&Ke.setMode(4);if(Z.isInstancedMesh)Ke.renderInstances(Tr,tn,Z.count);else if(W.isInstancedBufferGeometry){const fi=Math.min(W.instanceCount,W._maxInstanceCount);Ke.renderInstances(Tr,tn,fi)}else Ke.render(Tr,tn)}},this.compile=function(E,V){d=C.get(E),d.init(),x.push(d),E.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(d.pushLight(W),W.castShadow&&d.pushShadow(W))}),d.setupLights(p.physicallyCorrectLights),E.traverse(function(W){const H=W.material;if(H)if(Array.isArray(H))for(let Z=0;Z<H.length;Z++){const ye=H[Z];Ol(ye,E,W)}else Ol(H,E,W)}),x.pop(),d=null};let ue=null;function ae(E){ue&&ue(E)}function De(){tt.stop()}function ct(){tt.start()}const tt=new P0;tt.setAnimationLoop(ae),typeof self<"u"&&tt.setContext(self),this.setAnimationLoop=function(E){ue=E,pe.setAnimationLoop(E),E===null?tt.stop():tt.start()},pe.addEventListener("sessionstart",De),pe.addEventListener("sessionend",ct),this.render=function(E,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;E.autoUpdate===!0&&E.updateMatrixWorld(),V.parent===null&&V.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(V),V=pe.getCamera()),E.isScene===!0&&E.onBeforeRender(p,E,V,_),d=C.get(E,x.length),d.init(),x.push(d),A.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Q.setFromProjectionMatrix(A),I=this.localClippingEnabled,F=M.init(this.clippingPlanes,I,V),f=In.get(E,g.length),f.init(),g.push(f),ci(E,V,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(ie,ee),F===!0&&M.beginShadows();const W=d.state.shadowsArray;if(Y.render(W,E,V),F===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(f,E),d.setupLights(p.physicallyCorrectLights),V.isArrayCamera){const H=V.cameras;for(let Z=0,ye=H.length;Z<ye;Z++){const we=H[Z];Ze(f,E,we,we.viewport)}}else Ze(f,E,V);_!==null&&(xe.updateMultisampleRenderTarget(_),xe.updateRenderTargetMipmap(_)),E.isScene===!0&&E.onAfterRender(p,E,V),_e.resetDefaultState(),S=-1,w=null,x.pop(),x.length>0?d=x[x.length-1]:d=null,g.pop(),g.length>0?f=g[g.length-1]:f=null};function ci(E,V,W,H){if(E.visible===!1)return;if(E.layers.test(V.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(V);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Q.intersectsSprite(E)){H&&k.setFromMatrixPosition(E.matrixWorld).applyMatrix4(A);const we=vt.update(E),Te=E.material;Te.visible&&f.push(E,we,Te,W,k.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Ie.render.frame&&(E.skeleton.update(),E.skeleton.frame=Ie.render.frame),!E.frustumCulled||Q.intersectsObject(E))){H&&k.setFromMatrixPosition(E.matrixWorld).applyMatrix4(A);const we=vt.update(E),Te=E.material;if(Array.isArray(Te)){const be=we.groups;for(let Fe=0,Le=be.length;Fe<Le;Fe++){const Re=be[Fe],Ke=Te[Re.materialIndex];Ke&&Ke.visible&&f.push(E,we,Ke,W,k.z,Re)}}else Te.visible&&f.push(E,we,Te,W,k.z,null)}}const ye=E.children;for(let we=0,Te=ye.length;we<Te;we++)ci(ye[we],V,W,H)}function Ze(E,V,W,H){const Z=E.opaque,ye=E.transmissive,we=E.transparent;d.setupLightsView(W),ye.length>0&&Wn(Z,V,W),H&&ce.viewport(T.copy(H)),Z.length>0&&en(Z,V,W),ye.length>0&&en(ye,V,W),we.length>0&&en(we,V,W),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function Wn(E,V,W){const H=ge.isWebGL2;b===null&&(b=new _r(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")?Po:gr,minFilter:kl,samples:H&&s===!0?4:0})),p.getDrawingBufferSize(D),H?b.setSize(D.x,D.y):b.setSize(nf(D.x),nf(D.y));const Z=p.getRenderTarget();p.setRenderTarget(b),p.clear();const ye=p.toneMapping;p.toneMapping=ii,en(E,V,W),p.toneMapping=ye,xe.updateMultisampleRenderTarget(b),xe.updateRenderTargetMipmap(b),p.setRenderTarget(Z)}function en(E,V,W){const H=V.isScene===!0?V.overrideMaterial:null;for(let Z=0,ye=E.length;Z<ye;Z++){const we=E[Z],Te=we.object,be=we.geometry,Fe=H===null?we.material:H,Le=we.group;Te.layers.test(W.layers)&&j0(Te,V,W,be,Fe,Le)}}function j0(E,V,W,H,Z,ye){E.onBeforeRender(p,V,W,H,Z,ye),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Z.onBeforeRender(p,V,W,H,E,ye),Z.transparent===!0&&Z.side===Ss?(Z.side=Ln,Z.needsUpdate=!0,p.renderBufferDirect(W,V,H,Z,E,ye),Z.side=Lo,Z.needsUpdate=!0,p.renderBufferDirect(W,V,H,Z,E,ye),Z.side=Ss):p.renderBufferDirect(W,V,H,Z,E,ye),E.onAfterRender(p,V,W,H,Z,ye)}function Ol(E,V,W){V.isScene!==!0&&(V=U);const H=Me.get(E),Z=d.state.lights,ye=d.state.shadowsArray,we=Z.state.version,Te=Ue.getParameters(E,Z.state,ye,V,W),be=Ue.getProgramCacheKey(Te);let Fe=H.programs;H.environment=E.isMeshStandardMaterial?V.environment:null,H.fog=V.fog,H.envMap=(E.isMeshStandardMaterial?Gt:gt).get(E.envMap||H.environment),Fe===void 0&&(E.addEventListener("dispose",N),Fe=new Map,H.programs=Fe);let Le=Fe.get(be);if(Le!==void 0){if(H.currentProgram===Le&&H.lightsStateVersion===we)return dd(E,Te),Le}else Te.uniforms=Ue.getUniforms(E),E.onBuild(W,Te,p),E.onBeforeCompile(Te,p),Le=Ue.acquireProgram(Te,be),Fe.set(be,Le),H.uniforms=Te.uniforms;const Re=H.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Re.clippingPlanes=M.uniform),dd(E,Te),H.needsLights=q0(E),H.lightsStateVersion=we,H.needsLights&&(Re.ambientLightColor.value=Z.state.ambient,Re.lightProbe.value=Z.state.probe,Re.directionalLights.value=Z.state.directional,Re.directionalLightShadows.value=Z.state.directionalShadow,Re.spotLights.value=Z.state.spot,Re.spotLightShadows.value=Z.state.spotShadow,Re.rectAreaLights.value=Z.state.rectArea,Re.ltc_1.value=Z.state.rectAreaLTC1,Re.ltc_2.value=Z.state.rectAreaLTC2,Re.pointLights.value=Z.state.point,Re.pointLightShadows.value=Z.state.pointShadow,Re.hemisphereLights.value=Z.state.hemi,Re.directionalShadowMap.value=Z.state.directionalShadowMap,Re.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Re.spotShadowMap.value=Z.state.spotShadowMap,Re.spotShadowMatrix.value=Z.state.spotShadowMatrix,Re.pointShadowMap.value=Z.state.pointShadowMap,Re.pointShadowMatrix.value=Z.state.pointShadowMatrix);const Ke=Le.getUniforms(),Wi=Ga.seqWithValue(Ke.seq,Re);return H.currentProgram=Le,H.uniformsList=Wi,Le}function dd(E,V){const W=Me.get(E);W.outputEncoding=V.outputEncoding,W.instancing=V.instancing,W.skinning=V.skinning,W.morphTargets=V.morphTargets,W.morphNormals=V.morphNormals,W.morphColors=V.morphColors,W.morphTargetsCount=V.morphTargetsCount,W.numClippingPlanes=V.numClippingPlanes,W.numIntersection=V.numClipIntersection,W.vertexAlphas=V.vertexAlphas,W.vertexTangents=V.vertexTangents,W.toneMapping=V.toneMapping}function X0(E,V,W,H,Z){V.isScene!==!0&&(V=U),xe.resetTextureUnits();const ye=V.fog,we=H.isMeshStandardMaterial?V.environment:null,Te=_===null?p.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:vr,be=(H.isMeshStandardMaterial?Gt:gt).get(H.envMap||we),Fe=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Le=!!H.normalMap&&!!W.attributes.tangent,Re=!!W.morphAttributes.position,Ke=!!W.morphAttributes.normal,Wi=!!W.morphAttributes.color,Er=H.toneMapped?p.toneMapping:ii,br=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,kn=br!==void 0?br.length:0,Ne=Me.get(H),Tr=d.state.lights;if(F===!0&&(I===!0||E!==w)){const Ht=E===w&&H.id===S;M.setState(H,E,Ht)}let it=!1;H.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Tr.state.version||Ne.outputEncoding!==Te||Z.isInstancedMesh&&Ne.instancing===!1||!Z.isInstancedMesh&&Ne.instancing===!0||Z.isSkinnedMesh&&Ne.skinning===!1||!Z.isSkinnedMesh&&Ne.skinning===!0||Ne.envMap!==be||H.fog===!0&&Ne.fog!==ye||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==M.numPlanes||Ne.numIntersection!==M.numIntersection)||Ne.vertexAlphas!==Fe||Ne.vertexTangents!==Le||Ne.morphTargets!==Re||Ne.morphNormals!==Ke||Ne.morphColors!==Wi||Ne.toneMapping!==Er||ge.isWebGL2===!0&&Ne.morphTargetsCount!==kn)&&(it=!0):(it=!0,Ne.__version=H.version);let tn=Ne.currentProgram;it===!0&&(tn=Ol(H,V,Z));let fi=!1,Is=!1,Ul=!1;const At=tn.getUniforms(),ks=Ne.uniforms;if(ce.useProgram(tn.program)&&(fi=!0,Is=!0,Ul=!0),H.id!==S&&(S=H.id,Is=!0),fi||w!==E){if(At.setValue(R,"projectionMatrix",E.projectionMatrix),ge.logarithmicDepthBuffer&&At.setValue(R,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),w!==E&&(w=E,Is=!0,Ul=!0),H.isShaderMaterial||H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshStandardMaterial||H.envMap){const Ht=At.map.cameraPosition;Ht!==void 0&&Ht.setValue(R,k.setFromMatrixPosition(E.matrixWorld))}(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&At.setValue(R,"isOrthographic",E.isOrthographicCamera===!0),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial||H.isShadowMaterial||Z.isSkinnedMesh)&&At.setValue(R,"viewMatrix",E.matrixWorldInverse)}if(Z.isSkinnedMesh){At.setOptional(R,Z,"bindMatrix"),At.setOptional(R,Z,"bindMatrixInverse");const Ht=Z.skeleton;Ht&&(ge.floatVertexTextures?(Ht.boneTexture===null&&Ht.computeBoneTexture(),At.setValue(R,"boneTexture",Ht.boneTexture,xe),At.setValue(R,"boneTextureSize",Ht.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Bl=W.morphAttributes;if((Bl.position!==void 0||Bl.normal!==void 0||Bl.color!==void 0&&ge.isWebGL2===!0)&&re.update(Z,W,H,tn),(Is||Ne.receiveShadow!==Z.receiveShadow)&&(Ne.receiveShadow=Z.receiveShadow,At.setValue(R,"receiveShadow",Z.receiveShadow)),Is&&(At.setValue(R,"toneMappingExposure",p.toneMappingExposure),Ne.needsLights&&$0(ks,Ul),ye&&H.fog===!0&&Hn.refreshFogUniforms(ks,ye),Hn.refreshMaterialUniforms(ks,H,G,O,b),Ga.upload(R,Ne.uniformsList,ks,xe)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ga.upload(R,Ne.uniformsList,ks,xe),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&At.setValue(R,"center",Z.center),At.setValue(R,"modelViewMatrix",Z.modelViewMatrix),At.setValue(R,"normalMatrix",Z.normalMatrix),At.setValue(R,"modelMatrix",Z.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ht=H.uniformsGroups;for(let Vl=0,Y0=Ht.length;Vl<Y0;Vl++)if(ge.isWebGL2){const hd=Ht[Vl];he.update(hd,tn),he.bind(hd,tn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return tn}function $0(E,V){E.ambientLightColor.needsUpdate=V,E.lightProbe.needsUpdate=V,E.directionalLights.needsUpdate=V,E.directionalLightShadows.needsUpdate=V,E.pointLights.needsUpdate=V,E.pointLightShadows.needsUpdate=V,E.spotLights.needsUpdate=V,E.spotLightShadows.needsUpdate=V,E.rectAreaLights.needsUpdate=V,E.hemisphereLights.needsUpdate=V}function q0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(E,V,W){Me.get(E.texture).__webglTexture=V,Me.get(E.depthTexture).__webglTexture=W;const H=Me.get(E);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=W===void 0,H.__autoAllocateDepthBuffer||me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,V){const W=Me.get(E);W.__webglFramebuffer=V,W.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(E,V=0,W=0){_=E,m=V,v=W;let H=!0;if(E){const be=Me.get(E);be.__useDefaultFramebuffer!==void 0?(ce.bindFramebuffer(36160,null),H=!1):be.__webglFramebuffer===void 0?xe.setupRenderTarget(E):be.__hasExternalTextures&&xe.rebindTextures(E,Me.get(E.texture).__webglTexture,Me.get(E.depthTexture).__webglTexture)}let Z=null,ye=!1,we=!1;if(E){const be=E.texture;(be.isData3DTexture||be.isDataArrayTexture)&&(we=!0);const Fe=Me.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Z=Fe[V],ye=!0):ge.isWebGL2&&E.samples>0&&xe.useMultisampledRTT(E)===!1?Z=Me.get(E).__webglMultisampledFramebuffer:Z=Fe,T.copy(E.viewport),P.copy(E.scissor),y=E.scissorTest}else T.copy(B).multiplyScalar(G).floor(),P.copy(K).multiplyScalar(G).floor(),y=X;if(ce.bindFramebuffer(36160,Z)&&ge.drawBuffers&&H&&ce.drawBuffers(E,Z),ce.viewport(T),ce.scissor(P),ce.setScissorTest(y),ye){const be=Me.get(E.texture);R.framebufferTexture2D(36160,36064,34069+V,be.__webglTexture,W)}else if(we){const be=Me.get(E.texture),Fe=V||0;R.framebufferTextureLayer(36160,36064,be.__webglTexture,W||0,Fe)}S=-1},this.readRenderTargetPixels=function(E,V,W,H,Z,ye,we){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Me.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(Te=Te[we]),Te){ce.bindFramebuffer(36160,Te);try{const be=E.texture,Fe=be.format,Le=be.type;if(Fe!==Un&&j.convert(Fe)!==R.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Re=Le===Po&&(me.has("EXT_color_buffer_half_float")||ge.isWebGL2&&me.has("EXT_color_buffer_float"));if(Le!==gr&&j.convert(Le)!==R.getParameter(35738)&&!(Le===rr&&(ge.isWebGL2||me.has("OES_texture_float")||me.has("WEBGL_color_buffer_float")))&&!Re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=E.width-H&&W>=0&&W<=E.height-Z&&R.readPixels(V,W,H,Z,j.convert(Fe),j.convert(Le),ye)}finally{const be=_!==null?Me.get(_).__webglFramebuffer:null;ce.bindFramebuffer(36160,be)}}},this.copyFramebufferToTexture=function(E,V,W=0){const H=Math.pow(2,-W),Z=Math.floor(V.image.width*H),ye=Math.floor(V.image.height*H);xe.setTexture2D(V,0),R.copyTexSubImage2D(3553,W,0,0,E.x,E.y,Z,ye),ce.unbindTexture()},this.copyTextureToTexture=function(E,V,W,H=0){const Z=V.image.width,ye=V.image.height,we=j.convert(W.format),Te=j.convert(W.type);xe.setTexture2D(W,0),R.pixelStorei(37440,W.flipY),R.pixelStorei(37441,W.premultiplyAlpha),R.pixelStorei(3317,W.unpackAlignment),V.isDataTexture?R.texSubImage2D(3553,H,E.x,E.y,Z,ye,we,Te,V.image.data):V.isCompressedTexture?R.compressedTexSubImage2D(3553,H,E.x,E.y,V.mipmaps[0].width,V.mipmaps[0].height,we,V.mipmaps[0].data):R.texSubImage2D(3553,H,E.x,E.y,we,Te,V.image),H===0&&W.generateMipmaps&&R.generateMipmap(3553),ce.unbindTexture()},this.copyTextureToTexture3D=function(E,V,W,H,Z=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ye=E.max.x-E.min.x+1,we=E.max.y-E.min.y+1,Te=E.max.z-E.min.z+1,be=j.convert(H.format),Fe=j.convert(H.type);let Le;if(H.isData3DTexture)xe.setTexture3D(H,0),Le=32879;else if(H.isDataArrayTexture)xe.setTexture2DArray(H,0),Le=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(37440,H.flipY),R.pixelStorei(37441,H.premultiplyAlpha),R.pixelStorei(3317,H.unpackAlignment);const Re=R.getParameter(3314),Ke=R.getParameter(32878),Wi=R.getParameter(3316),Er=R.getParameter(3315),br=R.getParameter(32877),kn=W.isCompressedTexture?W.mipmaps[0]:W.image;R.pixelStorei(3314,kn.width),R.pixelStorei(32878,kn.height),R.pixelStorei(3316,E.min.x),R.pixelStorei(3315,E.min.y),R.pixelStorei(32877,E.min.z),W.isDataTexture||W.isData3DTexture?R.texSubImage3D(Le,Z,V.x,V.y,V.z,ye,we,Te,be,Fe,kn.data):W.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),R.compressedTexSubImage3D(Le,Z,V.x,V.y,V.z,ye,we,Te,be,kn.data)):R.texSubImage3D(Le,Z,V.x,V.y,V.z,ye,we,Te,be,Fe,kn),R.pixelStorei(3314,Re),R.pixelStorei(32878,Ke),R.pixelStorei(3316,Wi),R.pixelStorei(3315,Er),R.pixelStorei(32877,br),Z===0&&H.generateMipmaps&&R.generateMipmap(Le),ce.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?xe.setTextureCube(E,0):E.isData3DTexture?xe.setTexture3D(E,0):E.isDataArrayTexture?xe.setTexture2DArray(E,0):xe.setTexture2D(E,0),ce.unbindTexture()},this.resetState=function(){m=0,v=0,_=null,ce.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class kE extends F0{}kE.prototype.isWebGL1Renderer=!0;class NE extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class zp extends Pn{constructor(e,t,i,r=1){typeof i=="number"&&(r=i,i=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Op=new Je,Up=new Je,ba=[],$s=new Tn;class z0 extends Tn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zp(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.frustumCulled=!1}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if($s.geometry=this.geometry,$s.material=this.material,$s.material!==void 0)for(let s=0;s<r;s++){this.getMatrixAt(s,Op),Up.multiplyMatrices(i,Op),$s.matrixWorld=Up,$s.raycast(e,ba);for(let o=0,a=ba.length;o<a;o++){const l=ba[o];l.instanceId=s,l.object=this,t.push(l)}ba.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new zp(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class O0 extends Uo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bp=new z,Vp=new z,Gp=new Je,qu=new sd,Ta=new Nl;class FE extends Vt{constructor(e=new Gn,t=new O0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Bp.fromBufferAttribute(t,r-1),Vp.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Bp.distanceTo(Vp);e.setAttribute("lineDistance",new fn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ta.copy(i.boundingSphere),Ta.applyMatrix4(r),Ta.radius+=s,e.ray.intersectsSphere(Ta)===!1)return;Gp.copy(r).invert(),qu.copy(e.ray).applyMatrix4(Gp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new z,c=new z,f=new z,d=new z,g=this.isLineSegments?2:1,x=i.index,h=i.attributes.position;if(x!==null){const m=Math.max(0,o.start),v=Math.min(x.count,o.start+o.count);for(let _=m,S=v-1;_<S;_+=g){const w=x.getX(_),T=x.getX(_+1);if(u.fromBufferAttribute(h,w),c.fromBufferAttribute(h,T),qu.distanceSqToSegment(u,c,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(d);y<e.near||y>e.far||t.push({distance:y,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),v=Math.min(h.count,o.start+o.count);for(let _=m,S=v-1;_<S;_+=g){if(u.fromBufferAttribute(h,_),c.fromBufferAttribute(h,_+1),qu.distanceSqToSegment(u,c,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(d);T<e.near||T>e.far||t.push({distance:T,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Hp=new z,Wp=new z;class U0 extends FE{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Hp.fromBufferAttribute(t,r),Wp.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Hp.distanceTo(Wp);e.setAttribute("lineDistance",new fn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class zE extends Gn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,r=new z,s=new z;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let u=0,c=l.length;u<c;++u){const f=l[u],d=f.start,g=f.count;for(let x=d,p=d+g;x<p;x+=3)for(let h=0;h<3;h++){const m=a.getX(x+h),v=a.getX(x+(h+1)%3);r.fromBufferAttribute(o,m),s.fromBufferAttribute(o,v),jp(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let u=0;u<3;u++){const c=3*a+u,f=3*a+(u+1)%3;r.fromBufferAttribute(o,c),s.fromBufferAttribute(o,f),jp(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new fn(t,3))}}}function jp(n,e,t){const i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}const Xp={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class OE{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,d=u.length;f<d;f+=2){const g=u[f],x=u[f+1];if(g.global&&(g.lastIndex=0),g.test(c))return x}return null}}}const UE=new OE;class cd{constructor(e){this.manager=e!==void 0?e:UE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class B0 extends cd{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Xp.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Do("img");function l(){c(),Xp.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(f){c(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class BE extends cd{constructor(e){super(e)}load(e,t,i,r){const s=new ad,o=new B0(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(u){o.load(e[u],function(c){s.images[u]=c,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let u=0;u<e.length;++u)l(u);return s}}class VE extends cd{constructor(e){super(e)}load(e,t,i,r){const s=new pn,o=new B0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class GE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=$p(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=$p();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function $p(){return(typeof performance>"u"?Date:performance).now()}class jr{constructor(e,t,i=0,r=1/0){this.ray=new sd(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new od,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return sf(e,this,i,t),i.sort(qp),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)sf(e[r],this,i,t);return i.sort(qp),i}}function qp(n,e){return n.distance-e.distance}function sf(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)sf(r[s],e,t,!0)}}class HE extends U0{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Gn;r.setAttribute("position",new fn(t,3)),r.setAttribute("color",new fn(i,3));const s=new O0({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,i){const r=new Be,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rd);var V0={exports:{}};(function(n,e){(function(t,i){n.exports=i()})(Q0,function(){var t=function(){function i(g){return o.appendChild(g.dom),g}function r(g){for(var x=0;x<o.children.length;x++)o.children[x].style.display=x===g?"block":"none";s=g}var s=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(g){g.preventDefault(),r(++s%o.children.length)},!1);var a=(performance||Date).now(),l=a,u=0,c=i(new t.Panel("FPS","#0ff","#002")),f=i(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var d=i(new t.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:o,addPanel:i,showPanel:r,begin:function(){a=(performance||Date).now()},end:function(){u++;var g=(performance||Date).now();if(f.update(g-a,200),g>l+1e3&&(c.update(1e3*u/(g-l),100),l=g,u=0,d)){var x=performance.memory;d.update(x.usedJSHeapSize/1048576,x.jsHeapSizeLimit/1048576)}return g},update:function(){a=this.end()},domElement:o,setMode:r}};return t.Panel=function(i,r,s){var o=1/0,a=0,l=Math.round,u=l(window.devicePixelRatio||1),c=80*u,f=48*u,d=3*u,g=2*u,x=3*u,p=15*u,h=74*u,m=30*u,v=document.createElement("canvas");v.width=c,v.height=f,v.style.cssText="width:80px;height:48px";var _=v.getContext("2d");return _.font="bold "+9*u+"px Helvetica,Arial,sans-serif",_.textBaseline="top",_.fillStyle=s,_.fillRect(0,0,c,f),_.fillStyle=r,_.fillText(i,d,g),_.fillRect(x,p,h,m),_.fillStyle=s,_.globalAlpha=.9,_.fillRect(x,p,h,m),{dom:v,update:function(S,w){o=Math.min(o,S),a=Math.max(a,S),_.fillStyle=s,_.globalAlpha=1,_.fillRect(0,0,c,p),_.fillStyle=r,_.fillText(l(S)+" "+i+" ("+l(o)+"-"+l(a)+")",d,g),_.drawImage(v,x+u,p,h-u,m,x,p,h-u,m),_.fillRect(x+h-u,p,u,m),_.fillStyle=s,_.globalAlpha=.9,_.fillRect(x+h-u,p,u,l((1-S/w)*m))}}},t})})(V0);const WE=V0.exports;var zl=(n=>(n.grass="grass",n.dirt="dirt",n.cobblestone="cobblestone",n.oak_log="oak_log",n.leaves_oak="leaves_oak",n))(zl||{});const Gr=new Ds(0,0,0,"YXZ"),Hr=new z,jE={type:"change"},XE={type:"lock"},$E={type:"unlock"},Yp=Math.PI/2;class qE extends wr{constructor(e,t){super(),t===void 0&&(console.warn('THREE.PointerLockControls: The second parameter "domElement" is now mandatory.'),t=document.body),this.domElement=t,this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1;const i=this;function r(a){if(i.isLocked===!1)return;const l=a.movementX||a.mozMovementX||a.webkitMovementX||0,u=a.movementY||a.mozMovementY||a.webkitMovementY||0;Gr.setFromQuaternion(e.quaternion),Gr.y-=l*.002*i.pointerSpeed,Gr.x-=u*.002*i.pointerSpeed,Gr.x=Math.max(Yp-i.maxPolarAngle,Math.min(Yp-i.minPolarAngle,Gr.x)),e.quaternion.setFromEuler(Gr),i.dispatchEvent(jE)}function s(){i.domElement.ownerDocument.pointerLockElement===i.domElement?(i.dispatchEvent(XE),i.isLocked=!0):(i.dispatchEvent($E),i.isLocked=!1)}function o(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}this.connect=function(){i.domElement.ownerDocument.addEventListener("mousemove",r),i.domElement.ownerDocument.addEventListener("pointerlockchange",s),i.domElement.ownerDocument.addEventListener("pointerlockerror",o)},this.disconnect=function(){i.domElement.ownerDocument.removeEventListener("mousemove",r),i.domElement.ownerDocument.removeEventListener("pointerlockchange",s),i.domElement.ownerDocument.removeEventListener("pointerlockerror",o)},this.dispose=function(){this.disconnect()},this.getObject=function(){return e},this.getDirection=function(){const a=new z(0,0,-1);return function(l){return l.copy(a).applyQuaternion(e.quaternion)}}(),this.moveForward=function(a){Hr.setFromMatrixColumn(e.matrix,0),Hr.crossVectors(e.up,Hr),e.position.addScaledVector(Hr,a)},this.moveRight=function(a){Hr.setFromMatrixColumn(e.matrix,0),e.position.addScaledVector(Hr,a)},this.lock=function(){this.domElement.requestPointerLock()},this.unlock=function(){i.domElement.ownerDocument.exitPointerLock()},this.connect()}}const YE={position:{offset:new z(0,1,0)},rotation:{default:{x:0,y:0,z:0}}},Zp=new z;class ZE{constructor(e){ne(this,"player");ne(this,"experience");ne(this,"scene");ne(this,"camera");ne(this,"controls");ne(this,"state",YE);ne(this,"angle",new z);this.player=e,this.experience=new ri,this.scene=this.experience.scene,this.camera=this.experience.camera,this.controls=new qE(this.camera,document.body),this.controls.getObject().position.copy(this.camera.position),this.scene.add(this.controls.getObject());const{x:t,y:i,z:r}=this.state.rotation.default;this.camera.rotation.set(t,i,r),this.setControls()}setControls(){var e;(e=this.experience.targetElement)==null||e.addEventListener("click",()=>{this.controls.lock()}),this.controls.addEventListener("lock",()=>{this.experience.trigger("lock",[])})}update(){!this.experience.world||(this.player.mesh.getWorldPosition(Zp),this.camera.position.copy(Zp).add(this.state.position.offset))}}const KE=50,Yu=new Ps,yn=new z(0,0,0);class QE{constructor(){ne(this,"experience");ne(this,"camera");ne(this,"scene");ne(this,"state");ne(this,"clockState");ne(this,"mesh");ne(this,"playerCamera");ne(this,"selector");ne(this,"playerState");ne(this,"raycaster",{front:new jr,back:new jr,right:new jr,left:new jr,bottom:new jr});ne(this,"collision",{front:null,back:null,right:null,left:null,bottom:null})}$setControls(){this.raycaster.front.far=1,this.raycaster.back.far=1,this.raycaster.left.far=1,this.raycaster.right.far=1,this.raycaster.bottom.far=1,document.addEventListener("pointerdown",e=>{if(!this.playerCamera.controls.isLocked||!this.experience.world)return;const{x:t,y:i,z:r}=this.selector.position,s=this.experience.world;e.button===0?(s.terrain.placeBlock(this.playerState.selectedBlock,t,i,r),this.selector.reset()):e.button===2&&s.terrain.removeBlock(t-this.selector.normal.x,i-this.selector.normal.y,r-this.selector.normal.z)}),document.addEventListener("keydown",e=>{!this.playerCamera.controls.isLocked||(e.code==="KeyW"?this.state.moving.forward=!0:e.code==="KeyS"?this.state.moving.backward=!0:e.code==="KeyA"?this.state.moving.left=!0:e.code==="KeyD"?this.state.moving.right=!0:e.code==="Space"&&(this.state.jumping||(this.mesh.position.y+=.5,yn.y+=KE),this.state.jumping=!0))}),document.addEventListener("keyup",e=>{!this.playerCamera.controls.isLocked||(e.code==="KeyW"?this.state.moving.forward=!1:e.code==="KeyS"?this.state.moving.backward=!1:e.code==="KeyA"?this.state.moving.left=!1:e.code==="KeyD"&&(this.state.moving.right=!1))})}updateControls(e){const t=this.clockState.deltaTime;this.playerCamera.controls.getObject().getWorldQuaternion(Yu),this.mesh.quaternion.set(0,Yu.y,0,Yu.w);const i=new z(0,0,-1).applyQuaternion(this.camera.quaternion);let r=Math.atan2(i.x,i.z);this.$collisionCheck(e);const s=Math.trunc(r);let o=this.collision.front,a=this.collision.back,l=this.collision.left,u=this.collision.right;s===3||s===-3||s===2||s==-2?(o=this.collision.back,a=this.collision.front):s===0?(l=this.collision.right,u=this.collision.left):s===1?(o=this.collision.right,a=this.collision.left,l=this.collision.back,u=this.collision.front):s===-1&&(o=this.collision.left,a=this.collision.right,l=this.collision.front,u=this.collision.back),this.state.direction.z=Number(this.state.moving.forward)-Number(this.state.moving.backward),this.state.direction.x=Number(this.state.moving.left)-Number(this.state.moving.right),this.state.direction.normalize(),yn.y-=9.8*t,this.state.moving.forward||this.state.moving.backward?(this.state.velocity.z=-this.state.direction.z*this.state.speed*t,yn.z=this.state.velocity.z,(this.state.direction.z>0&&!o||this.state.direction.z<0&&!a)&&this.mesh.translateZ(yn.z*t)):yn.z=0,this.state.moving.left||this.state.moving.right?(this.state.velocity.x=-this.state.direction.x*this.state.speed*t,yn.x=this.state.velocity.x,(this.state.direction.x>0&&!l||this.state.direction.x<0&&!u)&&this.mesh.translateX(yn.x*t)):yn.x=0,this.state.jumping&&(this.mesh.position.y+=yn.y*t),this.collision.bottom&&this.collision.bottom.distance<=.5&&this.collision.bottom?(yn.y=0,this.mesh.position.y=Math.round(this.mesh.position.y),this.state.jumping=!1):this.mesh.position.y+=yn.y*t}$collisionCheck(e){this.$collisionCheckSide("front",e),this.$collisionCheckSide("back",e),this.$collisionCheckSide("right",e),this.$collisionCheckSide("left",e),this.$collisionCheckSide("bottom",e)}$collisionCheckSide(e,t){let i=this.raycaster.front;switch(e){case"front":{i=this.raycaster.front,i.ray.origin=this.mesh.position,i.ray.direction.set(0,0,1);break}case"back":{i=this.raycaster.back,i.ray.origin=this.mesh.position,i.ray.direction.set(0,0,-1);break}case"right":{i=this.raycaster.right,i.ray.origin=this.mesh.position,i.ray.direction.set(1,0,0);break}case"left":{i=this.raycaster.left,i.ray.origin=this.mesh.position,i.ray.direction.set(-1,0,0);break}case"bottom":{i=this.raycaster.bottom,i.ray.origin=this.mesh.position,i.ray.direction.set(0,-1,0);break}}const r=i.intersectObject(t);this.collision[e]=r.length?r[0]:null}}const Nt={type:"block",loader:"texture",path:"assets/textures/blocks",iconPath:"assets/icons/blocks",definitions:{grass:{type:"grass",colorFilter:!0,icon:"grass.png",sounds:{removed:["assets/sound-effects/dig/grass1.ogg","assets/sound-effects/dig/grass2.ogg","assets/sound-effects/dig/grass3.ogg","assets/sound-effects/dig/grass4.ogg"],step:["assets/sound-effects/step/grass1.ogg","assets/sound-effects/step/grass2.ogg","assets/sound-effects/step/grass3.ogg","assets/sound-effects/step/grass4.ogg","assets/sound-effects/step/grass5.ogg","assets/sound-effects/step/grass6.ogg"]},assets:{default:"gwapo.png",top:"gwapo.png",bottom:"gwapo.png"}},dirt:{type:"sand",icon:"dirt.png",sounds:{removed:["assets/sound-effects/dig/sand1.ogg","assets/sound-effects/dig/sand2.ogg","assets/sound-effects/dig/sand3.ogg","assets/sound-effects/dig/sand4.ogg"],step:["assets/sound-effects/step/sand1.ogg","assets/sound-effects/step/sand2.ogg","assets/sound-effects/step/sand3.ogg","assets/sound-effects/step/sand4.ogg","assets/sound-effects/step/sand5.ogg"]},assets:{default:"dirt.png"}},cobblestone:{type:"stone",icon:"cobblestone.png",sounds:{removed:["assets/sound-effects/dig/stone1.ogg","assets/sound-effects/dig/stone2.ogg","assets/sound-effects/dig/stone3.ogg","assets/sound-effects/dig/stone4.ogg"],step:["assets/sound-effects/step/stone1.ogg","assets/sound-effects/step/stone2.ogg","assets/sound-effects/step/stone3.ogg","assets/sound-effects/step/stone4.ogg","assets/sound-effects/step/stone5.ogg","assets/sound-effects/step/stone6.ogg"]},assets:{default:"cobblestone.png"}},oak_log:{type:"wood",icon:"log_oak.png",sounds:{removed:["assets/sound-effects/dig/wood1.ogg","assets/sound-effects/dig/wood2.ogg","assets/sound-effects/dig/wood3.ogg","assets/sound-effects/dig/wood4.ogg"],step:["assets/sound-effects/step/wood1.ogg","assets/sound-effects/step/wood2.ogg","assets/sound-effects/step/wood3.ogg","assets/sound-effects/step/wood4.ogg","assets/sound-effects/step/wood5.ogg","assets/sound-effects/step/wood6.ogg"]},assets:{default:"log_oak.png",top:"log_oak_top.png",bottom:"log_oak_top.png"}},leaves_oak:{type:"leaves",icon:"leaves_oak.png",colorFilter:!0,transparent:!0,assets:{default:"leaves_oak_opaque.png"}}}},Zu={forest:{color:{default:"#98f15d",grass:"#98f15d",leaves:"#2a6b0e"}},snow:{color:{default:"#98f15d",grass:"#98f15d",leaves:"#98f15d"}}},JE={Top:2,Bottom:3},Xt=class{constructor(e){ne(this,"assets");this.assets=e.assets,this.initBlockMaterials()}initBlockMaterials(){const e="forest";for(const t of Object.keys(Nt.definitions)){const i=t,r=Xt.blocks[i],s=Nt.definitions[i];if(r==null){const o=Xt.blocks[i]=Xt.getTexture(i,this.assets.blocks);if(s.colorFilter){const a=Zu[e].color.hasOwnProperty(s.type)?Zu[e].color[s.type]:Zu[e].color.default;Array.isArray(o)?o.forEach((l,u)=>{u===JE.Top&&l.color.set(a)}):o.color.set(a)}}}}static get(e){return Xt.blocks[e]}static getTexture(e,t){let i,r=null,s=null,o;const a=Nt.definitions[e],l=Xt.getMapTexture(e,t);return i=a.transparent?new Ci({map:l.default,alphaMap:l.default,transparent:!0,opacity:1}):new Ci({map:l.default}),Xt.utilBlocks[e]=i,l.top||l.bottom?(l.top&&l.topName&&(r=Xt.utilBlocks[l.topName],r||(r=new Ci({map:l.top}),Xt.utilBlocks[l.topName]=r)),l.bottom&&l.bottomName&&(s=Xt.utilBlocks[l.bottomName],s||(s=new Ci({map:l.bottom}),Xt.utilBlocks[l.bottomName]=s)),o=[i,i,r!=null?r:i,s!=null?s:i,i,i]):o=i,Xt.blocks[e]=o,o}static getMapTexture(e,t){var o,a;const i=Nt.definitions[e],r=i.assets.default.split(".")[0],s=t[r];if(!s)throw new Error(`Error: Can't generate ${e} block. Asset could not be found.`);if(i.assets.top||i.assets.bottom){const l=(o=i.assets.top)==null?void 0:o.split(".")[0],u=l?t[l]:null,c=(a=i.assets.bottom)==null?void 0:a.split(".")[0],f=c?t[c]:null;return{default:s,topName:l,top:u,bottomName:c,bottom:f}}return{default:s}}};let ss=Xt;ne(ss,"blocks",{}),ne(ss,"utilBlocks",{});class e3{constructor(e,t,i=0,r=0,s=0){ne(this,"type");ne(this,"index");ne(this,"x");ne(this,"y");ne(this,"z");ne(this,"removed",!1);ne(this,"placed",!0);ne(this,"blockType");this.type=e.name,this.index=t,this.x=i,this.y=r,this.z=s,this.blockType=e}}const qi=new Vt,wi=class{constructor(e){ne(this,"name");ne(this,"def");ne(this,"mesh");ne(this,"count",0);this.mesh=new z0(wi.geometry,ss.get(e),wi.maxCount),this.name=e,this.mesh.name=e,this.def=Nt.definitions[e]}set(e=0,t=0,i=0,r=0){if(wi.blocks[`${t}_${i}_${r}`])return;let s=e!=null?e:this.count;qi.scale.setScalar(1),qi.position.set(t,i,r),qi.updateMatrix(),this.mesh.setMatrixAt(s,qi.matrix);const o=new e3(this,s,t,i,r);return wi.blocks[`${t}_${i}_${r}`]=o,this.mesh.instanceMatrix.count=this.count,this.needsUpdate(),this.count+=1,o}remove(e=0,t=0,i=0){const r=wi.blocks[`${e}_${t}_${i}`];!r||(delete wi.blocks[`${e}_${t}_${i}`],qi.scale.setScalar(0),qi.updateMatrix(),this.mesh.setMatrixAt(r.index,qi.matrix),this.needsUpdate())}needsUpdate(){this.mesh.instanceMatrix.needsUpdate=!0}forceUpdate(){this.mesh.updateMatrix()}};let bn=wi;ne(bn,"geometry",new Mr(1,1,1)),ne(bn,"maxCount",530),ne(bn,"blocks",{});const Ca=new Vt,Kp=new Je;class t3{constructor(){ne(this,"experience");ne(this,"scene");ne(this,"mesh");ne(this,"camera");ne(this,"raycaster",new jr);ne(this,"pointer",new Oe);ne(this,"position",{x:0,y:0,z:0});ne(this,"normal",{x:0,y:0,z:0});this.experience=new ri,this.scene=this.experience.scene,this.camera=this.experience.camera,this.raycaster.far=6;const e=new zE(bn.geometry);this.mesh=new U0(e);const t=this.mesh.material;t.depthTest=!1,t.opacity=.25,t.transparent=!0,t.color.set("#FFFFFF"),this.mesh.visible=!0,this.mesh.position.set(0,2,0),this.scene.add(this.mesh)}reset(){this.mesh.visible=!1}update(e,t){var a;this.raycaster.setFromCamera(this.pointer,this.camera);const i=this.raycaster.intersectObject(e);if(i.length===0){this.mesh.visible=!1;return}const r=i[0],s=(a=i[0].face)==null?void 0:a.normal;r.instanceId&&s&&(e.getMatrixAt(r.instanceId,Kp),Ca.position.setFromMatrixPosition(Kp),this.normal={...s},this.position.x=Ca.position.x+this.normal.x,this.position.y=Ca.position.y+this.normal.y,this.position.z=Ca.position.z+this.normal.z);const o=t[`${this.position.x}_${this.position.y}_${this.position.z}`];o!=null&&o.placed||(this.mesh.position.set(this.position.x,this.position.y,this.position.z),this.mesh.visible=!0)}}const Qp={color:"blue",direction:new z,mass:1,speed:1e3,velocity:new z,position:{default:{x:0,y:1,z:0}},jumping:!1,moving:{forward:!1,backward:!1,left:!1,right:!1}},Jp=new Je;class n3 extends QE{constructor(){super();ne(this,"experience");ne(this,"scene");ne(this,"camera");ne(this,"clockState");ne(this,"playerState");ne(this,"mesh");ne(this,"state",Qp);ne(this,"playerCamera",new ZE(this));ne(this,"selector",new t3);this.experience=new ri,this.scene=this.experience.scene,this.camera=this.experience.camera,this.playerState=this.experience.state.player,this.clockState=this.experience.state.clock,this.state={...Qp,...this.experience.state.player||{}},this.mesh=new Tn(new Mr(1,1,1),new Ci({color:this.state.color})),this.mesh.position.y=this.state.position.default.y,this.experience.debug||this.$setControls()}setColor(t){this.state.color=t,this.mesh.material.color.set(this.state.color),this.experience.renderUpdate()}update(){let t=0;const i={},r=new z0(bn.geometry,new Ci,600);for(const s of Object.keys(bn.blocks)){const o=bn.blocks[s];o.placed&&(i[`${o.x}_${o.y}_${o.z}`]=o,Jp.setPosition(o.x,o.y,o.z),r.setMatrixAt(t++,Jp))}r.updateMatrix(),this.playerCamera.update(),this.updateControls(r),this.selector.update(r,i)}}class i3{constructor(e){ne(this,"experience");ne(this,"scene");ne(this,"world");ne(this,"group",new eo);ne(this,"assets");ne(this,"blocks",[]);ne(this,"sounds");this.experience=new ri,this.scene=this.experience.scene,this.sounds=this.experience.resource.sounds,this.assets=this.experience.resource.assets.blocks,this.world=e,this.experience.debug||this.scene.add(this.group),this.initBlocks(),this.init()}initBlocks(){for(const e of Object.keys(Nt.definitions)){const t=e,i=new bn(t);this.blocks.push(i),this.group.add(i.mesh)}}init(){const e=this.blocks.find(i=>i.name==="grass");if(!e)return;let t=0;for(let i=-10;i<10;i++)for(let r=-10;r<10;r++)e.set(t,i,0,r),t++;e.needsUpdate()}placeBlock(e,t=0,i=0,r=0){var l;const s=this.blocks.find(u=>u.name===e);if(!s)return;s.set(null,t,i,r),s.forceUpdate();const o=this.sounds[s.def.type],a=(l=o.placed)!=null&&l.length?o.placed:o.removed;if(a!=null&&a.length){const u=a[Math.floor(Math.random()*a.length)];u.volume=.5,u.currentTime=0,u.play()}}removeBlock(e=0,t=0,i=0){var o;const r=bn.blocks[`${e}_${t}_${i}`];if(!(r!=null&&r.placed))return;r.blockType.remove(e,t,i),r.blockType.forceUpdate();const s=this.sounds[r.blockType.def.type];if((o=s.removed)!=null&&o.length){const a=s.removed[Math.floor(Math.random()*s.removed.length)];a.volume=.5,a.currentTime=0,a.play()}}update(){}}class r3{constructor(){ne(this,"experience");ne(this,"scene");ne(this,"camera");ne(this,"renderer");ne(this,"state");ne(this,"terrain");ne(this,"player");this.experience=new ri,this.camera=this.experience.camera,this.renderer=this.experience.renderer,this.scene=this.experience.scene,this.terrain=new i3(this),this.player=new n3}update(){this.terrain.update(),this.player.update(),this.renderer.render(this.scene,this.camera)}}async function*s3(n,e,t){const i=new Set;async function r(){const[s,o]=await Promise.race(i);return i.delete(s),o}for(const s of e){const o=(async()=>await t(s,e))().then(a=>[o,a]);i.add(o),i.size>=n&&(yield await r())}for(;i.size;)yield await r()}var em=s3;class G0{constructor(){this.callbacks={},this.callbacks.base={}}on(e,t){const i=this;return typeof e>"u"||e===""?(console.warn("wrong names"),!1):typeof t>"u"?(console.warn("wrong callback"),!1):(this.resolveNames(e).forEach(function(s){const o=i.resolveName(s);i.callbacks[o.namespace]instanceof Object||(i.callbacks[o.namespace]={}),i.callbacks[o.namespace][o.value]instanceof Array||(i.callbacks[o.namespace][o.value]=[]),i.callbacks[o.namespace][o.value].push(t)}),this)}off(e){const t=this;return typeof e>"u"||e===""?(console.warn("wrong name"),!1):(this.resolveNames(e).forEach(function(r){const s=t.resolveName(r);if(s.namespace!=="base"&&s.value==="")delete t.callbacks[s.namespace];else if(s.namespace==="base")for(const o in t.callbacks)t.callbacks[o]instanceof Object&&t.callbacks[o][s.value]instanceof Array&&(delete t.callbacks[o][s.value],Object.keys(t.callbacks[o]).length===0&&delete t.callbacks[o]);else t.callbacks[s.namespace]instanceof Object&&t.callbacks[s.namespace][s.value]instanceof Array&&(delete t.callbacks[s.namespace][s.value],Object.keys(t.callbacks[s.namespace]).length===0&&delete t.callbacks[s.namespace])}),this)}trigger(e,t){if(typeof e>"u"||e==="")return console.warn("wrong name"),!1;const i=this;let r=null;const s=t instanceof Array?t:[];let o=this.resolveNames(e);const a=this.resolveName(o[0]);if(a.namespace==="base")for(const l in i.callbacks)i.callbacks[l]instanceof Object&&i.callbacks[l][a.value]instanceof Array&&i.callbacks[l][a.value].forEach(function(u){u.apply(i,s)});else if(this.callbacks[a.namespace]instanceof Object){if(a.value==="")return console.warn("wrong name"),this;i.callbacks[a.namespace][a.value].forEach(function(l){l.apply(i,s)})}return r}resolveNames(e){let t=e;return t=t.replace(/[^a-zA-Z0-9 ,/.]/g,""),t=t.replace(/[,/]+/g," "),t.split(" ")}resolveName(e){const t={original:"",value:"",namespace:""},i=e.split(".");return t.original=e,t.value=i[0],t.namespace="base",i.length>1&&i[1]!==""&&(t.namespace=i[1]),t}}function o3(n,e,t){return t.indexOf(n)===e}const tm=5,gl=class extends G0{constructor(t){super();ne(this,"status",{total:0,pending:0,loaded:0});ne(this,"rawAssets",[]);ne(this,"sounds",{grass:{},leaves:{},sand:{},stone:{},wood:{}});ne(this,"assets",{blocks:{},envMaps:{}});this.rawAssets=t}async loadAssets(){var o,a,l;const t=this.rawAssets.filter(u=>u.loader==="texture"),i=this.rawAssets.filter(u=>u.loader==="cube_texture"),r=this.rawAssets.filter(u=>u.loader==="audio"),s={sounds:[],textures:[],cubeTextures:[]};if(this.trigger("loading",[this.status]),i.length){for(const u of i)if(u.type==="env_map"){const c=u.path;u.definitions.forEach(f=>{s.cubeTextures.push({name:f.name,px:c+"/"+f.name+"/"+f.px,nx:c+"/"+f.name+"/"+f.nx,py:c+"/"+f.name+"/"+f.py,ny:c+"/"+f.name+"/"+f.ny,pz:c+"/"+f.name+"/"+f.pz,nz:c+"/"+f.name+"/"+f.nz})})}this.status.total+=s.cubeTextures.length,s.cubeTextures.length&&await this.$loadCubeTextures(s.cubeTextures)}if(t.length){for(const u of t)if(u.type==="block"){const c=u.path;for(const f of Object.keys(u.definitions)){const d=u.definitions[f];s.textures.push(c+"/"+d.assets.default),d.assets.top&&s.textures.push(c+"/"+d.assets.top),d.assets.bottom&&s.textures.push(c+"/"+d.assets.bottom)}}s.textures=s.textures.filter(o3),this.status.total+=s.textures.length,s.textures.length&&await this.$loadTextures(s.textures)}if(r.length){for(const u of r)if(u.type==="sound_effect"){const c=u.path;for(const f of Object.keys(u.definitions)){const d=f,g=u.definitions[d];this.sounds[d]={placed:((o=g.placed)==null?void 0:o.map(x=>new Audio(c+"/"+x)))||[],removed:((a=g.removed)==null?void 0:a.map(x=>new Audio(c+"/"+x)))||[],step:((l=g.step)==null?void 0:l.map(x=>new Audio(c+"/"+x)))||[]}}}}this.trigger("loaded",[this.status])}async $loadCubeTextures(t){const i=[];t.forEach(r=>{const s=gl.loaders.cubeTexture.loadAsync([r.px,r.nx,r.py,r.ny,r.pz,r.nz]);i.push({name:r.name,promise:s}),this.status.pending+=1});for await(const r of em(tm,i,async s=>{try{const o=await s.promise;o.encoding=je,o.minFilter=ht,o.magFilter=ht,this.assets.envMaps[s.name]=o,this.status.pending-=1,this.status.loaded+=1}catch(o){console.error(`Failed to load cube texture asset: ${s.name}.`),console.error(o)}}));}async $loadTextures(t){const i=[];t.forEach(r=>{const s=gl.loaders.texture.loadAsync(r),a=r.split("/").at(-1).split(".")[0];i.push({url:r,name:a,promise:s}),this.status.pending+=1});for await(const r of em(tm,i,async s=>{try{const o=await s.promise;o.generateMipmaps=!1,o.minFilter=ht,o.magFilter=ht,this.assets.blocks[s.name]=o,this.status.pending-=1,this.status.loaded+=1}catch(o){console.error(`Failed to load texture asset: ${s.name} at "${s.url}".`),console.error(o)}}));}};let Ha=gl;ne(Ha,"loaders",{texture:new VE,cubeTexture:new BE});const a3={type:"env_map",loader:"cube_texture",path:"assets/envMaps",definitions:[{name:"background",px:"px.png",nx:"nx.png",py:"py.png",ny:"ny.png",pz:"pz.png",nz:"nz.png"}]},l3={type:"sound_effect",loader:"audio",path:"assets/sound-effects",definitions:{grass:{removed:["dig/grass1.ogg","dig/grass2.ogg","dig/grass3.ogg","dig/grass4.ogg"],step:["step/grass1.ogg","step/grass2.ogg","step/grass3.ogg","step/grass4.ogg","step/grass5.ogg","step/grass6.ogg"]},leaves:{removed:["dig/grass1.ogg","dig/grass2.ogg","dig/grass3.ogg","dig/grass4.ogg"],step:["step/grass1.ogg","step/grass2.ogg","step/grass3.ogg","step/grass4.ogg","step/grass5.ogg","step/grass6.ogg"]},sand:{removed:["dig/sand1.ogg","dig/sand2.ogg","dig/sand3.ogg","dig/sand4.ogg"],step:["step/sand1.ogg","step/sand2.ogg","step/sand3.ogg","step/sand4.ogg","step/sand5.ogg"]},stone:{removed:["dig/stone1.ogg","dig/stone2.ogg","dig/stone3.ogg","dig/stone4.ogg"],step:["step/stone1.ogg","step/stone2.ogg","step/stone3.ogg","step/stone4.ogg","step/stone5.ogg","step/stone6.ogg"]},wood:{removed:["dig/wood1.ogg","dig/wood2.ogg","dig/wood3.ogg","dig/wood4.ogg"],step:["step/wood1.ogg","step/wood2.ogg","step/wood3.ogg","step/wood4.ogg","step/wood5.ogg","step/wood6.ogg"]}}},u3=[l3,Nt,a3],nm={player:{selectedBlock:zl.grass},clock:{deltaTime:0,previousTime:0}},co=class extends G0{constructor(t){if(co.instance)return co.instance;super();ne(this,"targetElement");ne(this,"state",nm);ne(this,"width",window.innerWidth);ne(this,"height",window.innerHeight);ne(this,"clock",new GE);ne(this,"scene",new NE);ne(this,"camera",new an(75,this.width/this.height,.1,1e3));ne(this,"renderer",new F0({antialias:!0}));ne(this,"debug",!1);ne(this,"world");ne(this,"resource");if(co.instance=this,!t||t&&t.targetElement==null)throw new Error("Target element is undefined.");this.targetElement=t.targetElement,this.state={...nm,...t.state||{}},this.$setStats(),this.$setDebug(),this.resource=new Ha(u3),this.scene.background=new Be(8366591),this.renderer.setSize(this.width,this.height),this.targetElement.appendChild(this.renderer.domElement),this.update(),window.addEventListener("resize",()=>{this.$resize()}),this.resource.loadAssets(),this.resource.on("loading",i=>{this.trigger("loading",[i])}),this.resource.on("loaded",i=>{var s;this.trigger("loaded",[i]),console.log(`Finished loading: ${i.loaded} out of ${i.total} assets has been loaded.`);const r=(s=this.resource)==null?void 0:s.assets.envMaps.background;r&&(this.scene.background=r,this.scene.environment=r),this.materials=new ss(this.resource),this.world=new r3})}setSelectedBlock(t){this.state.player.selectedBlock=t}$setDebug(){if(!this.debug)return;const t=new HE(8);this.scene.add(t)}$setStats(){const t=document.getElementById("stats");if(!t){console.error("Could not find target element for stats.");return}this.stats=new WE,this.stats.showPanel(0),t.appendChild(this.stats.dom)}$resize(){this.width=window.innerWidth,this.height=window.innerHeight,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}renderUpdate(){this.renderer.render(this.scene,this.camera)}update(){var i;const t=this.clock.getElapsedTime();this.state.clock.deltaTime=t-this.state.clock.previousTime,this.state.clock.previousTime=t,this.stats.begin(),(i=this.world)==null||i.update(),this.stats.end(),window.requestAnimationFrame(()=>{this.update()})}};let ri=co;ne(ri,"instance");const fd=ed(zl.grass),H0=ed([...Object.values(zl)]);function c3(){const[n]=lt.exports.useState(new Audio("assets/music/calm1.ogg"));return lt.exports.useEffect(()=>{n.loop=!0,n.volume=.5},[]),n}function f3(){const n=lt.exports.useRef(null),e=lt.exports.useRef(null),t=Ls(fd),i=td(id),r=c3();return lt.exports.useEffect(()=>{n.current!=null&&(e.current=new ri({targetElement:n.current,state:{player:{selectedBlock:t}}}),e.current.on("loading",()=>{}),e.current.on("loaded",()=>{i({show:!1,message:""})}),e.current.on("lock",()=>{r.play()}))},[]),lt.exports.useEffect(()=>{!e.current||e.current.setSelectedBlock(t)},[t]),$e("div",{ref:n,id:"game"})}function d3(){const n=Ls(id);return n.show?$e("div",{className:"min-h-full bg-slate-900 flex items-center justify-center",children:lr("div",{className:"text-center font-mono text-white",children:[$e("h1",{className:"my-2 text-3xl font-bold",children:"Loading your Gameau"}),$e("p",{className:"my-1 text-xl",children:n.message})]})}):null}function W0(n){var e,t,i="";if(typeof n=="string"||typeof n=="number")i+=n;else if(typeof n=="object")if(Array.isArray(n)){var r=n.length;for(e=0;e<r;e++)n[e]&&(t=W0(n[e]))&&(i&&(i+=" "),i+=t)}else for(t in n)n[t]&&(i&&(i+=" "),i+=t);return i}function h3(){for(var n,e,t=0,i="",r=arguments.length;t<r;t++)(n=arguments[t])&&(e=W0(n))&&(i&&(i+=" "),i+=e);return i}const p3=h3;function Ku({name:n,selected:e,imageSrc:t,onClick:i}){return $e("button",{type:"button",className:p3("h-16 w-16 flex items-center justify-center bg-slate-900 bg-opacity-50 ring-inset ring-4",e?"scale-110 ring-white rounded border-2 border-slate-900":"ring-slate-400 border border-slate-600"),onClick:i,disabled:!n,children:n?$e("img",{src:t,className:"h-12 w-12 bg-no-repeat bg-cover",alt:n}):$e("span",{className:"sr-only",children:"Empty Slot"})})}const m3=9;function g3(){const n=Ls(H0),[e,t]=Ax(fd),i=r=>{t(r)};return lr("div",{children:[lr("div",{className:"hidden md:flex items-center justify-center rounded border-2 border-slate-900",children:[n.map(r=>{const s=Nt.definitions[r];return $e(Ku,{name:r,selected:r===e,imageSrc:Nt.iconPath?Nt.iconPath+"/"+s.icon:Nt.path+"/"+s.assets.default,onClick:()=>i(r)},r)}),new Array(m3-Object.keys(Nt.definitions).length).fill(0).map((r,s)=>$e(Ku,{},s))]}),$e("div",{className:"block md:hidden rounded border-2 border-slate-900",children:$e(Ku,{name:e,imageSrc:Nt.path+"/"+Nt.definitions[e].assets.default})})]})}function v3(){const n=td(fd),e=Ls(H0);return i=>{let r=!1;const s=o=>{e[o]&&(r=!0,n(e[o]))};switch(i){case"Digit1":{s(0);break}case"Digit2":{s(1);break}case"Digit3":{s(2);break}case"Digit4":{s(3);break}case"Digit5":{s(4);break}case"Digit6":{s(5);break}case"Digit7":{s(6);break}case"Digit8":{s(7);break}case"Digit9":{s(8);break}}return r}}function _3(){const n=v3(),e=t=>{n(t.code)};lt.exports.useEffect(()=>(document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}),[])}function x3(){const n=Ls(id);return _3(),lr("main",{className:"min-h-full h-full bg-slate-900",children:[$e(d3,{}),lr("div",{hidden:n.show,children:[$e("div",{id:"stats",className:"absolute top-2 left-0"}),$e(Ox,{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-6 w-6 text-white"}),lr("div",{className:"absolute bottom-0 left-0 p-2 w-full flex items-center justify-between",children:[$e("div",{"aria-hidden":"true"}),$e(g3,{}),$e("div",{"aria-hidden":"true"})]}),$e(f3,{})]})]})}Qu.createRoot(document.getElementById("root")).render($e(Wa.StrictMode,{children:$e(x3,{})}));
