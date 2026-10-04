var A0=Object.defineProperty;var C0=(s,e,n)=>e in s?A0(s,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[e]=n;var jp=(s,e,n)=>C0(s,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function nx(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Au={exports:{}},Ia={},Cu={exports:{}},mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wp;function N0(){if(Wp)return mt;Wp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.iterator;function g(R){return R===null||typeof R!="object"?null:(R=S&&R[S]||R["@@iterator"],typeof R=="function"?R:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,N={};function y(R,re,ye){this.props=R,this.context=re,this.refs=N,this.updater=ye||b}y.prototype.isReactComponent={},y.prototype.setState=function(R,re){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,re,"setState")},y.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function _(){}_.prototype=y.prototype;function I(R,re,ye){this.props=R,this.context=re,this.refs=N,this.updater=ye||b}var z=I.prototype=new _;z.constructor=I,T(z,y.prototype),z.isPureReactComponent=!0;var C=Array.isArray,D=Object.prototype.hasOwnProperty,P={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function w(R,re,ye){var He,Ue={},Ge=null,se=null;if(re!=null)for(He in re.ref!==void 0&&(se=re.ref),re.key!==void 0&&(Ge=""+re.key),re)D.call(re,He)&&!O.hasOwnProperty(He)&&(Ue[He]=re[He]);var de=arguments.length-2;if(de===1)Ue.children=ye;else if(1<de){for(var Me=Array(de),Ye=0;Ye<de;Ye++)Me[Ye]=arguments[Ye+2];Ue.children=Me}if(R&&R.defaultProps)for(He in de=R.defaultProps,de)Ue[He]===void 0&&(Ue[He]=de[He]);return{$$typeof:s,type:R,key:Ge,ref:se,props:Ue,_owner:P.current}}function F(R,re){return{$$typeof:s,type:R.type,key:re,ref:R.ref,props:R.props,_owner:R._owner}}function k(R){return typeof R=="object"&&R!==null&&R.$$typeof===s}function H(R){var re={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(ye){return re[ye]})}var Z=/\/+/g;function ie(R,re){return typeof R=="object"&&R!==null&&R.key!=null?H(""+R.key):re.toString(36)}function X(R,re,ye,He,Ue){var Ge=typeof R;(Ge==="undefined"||Ge==="boolean")&&(R=null);var se=!1;if(R===null)se=!0;else switch(Ge){case"string":case"number":se=!0;break;case"object":switch(R.$$typeof){case s:case e:se=!0}}if(se)return se=R,Ue=Ue(se),R=He===""?"."+ie(se,0):He,C(Ue)?(ye="",R!=null&&(ye=R.replace(Z,"$&/")+"/"),X(Ue,re,ye,"",function(Ye){return Ye})):Ue!=null&&(k(Ue)&&(Ue=F(Ue,ye+(!Ue.key||se&&se.key===Ue.key?"":(""+Ue.key).replace(Z,"$&/")+"/")+R)),re.push(Ue)),1;if(se=0,He=He===""?".":He+":",C(R))for(var de=0;de<R.length;de++){Ge=R[de];var Me=He+ie(Ge,de);se+=X(Ge,re,ye,Me,Ue)}else if(Me=g(R),typeof Me=="function")for(R=Me.call(R),de=0;!(Ge=R.next()).done;)Ge=Ge.value,Me=He+ie(Ge,de++),se+=X(Ge,re,ye,Me,Ue);else if(Ge==="object")throw re=String(R),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return se}function Q(R,re,ye){if(R==null)return R;var He=[],Ue=0;return X(R,He,"","",function(Ge){return re.call(ye,Ge,Ue++)}),He}function he(R){if(R._status===-1){var re=R._result;re=re(),re.then(function(ye){(R._status===0||R._status===-1)&&(R._status=1,R._result=ye)},function(ye){(R._status===0||R._status===-1)&&(R._status=2,R._result=ye)}),R._status===-1&&(R._status=0,R._result=re)}if(R._status===1)return R._result.default;throw R._result}var ee={current:null},$={transition:null},q={ReactCurrentDispatcher:ee,ReactCurrentBatchConfig:$,ReactCurrentOwner:P};function Y(){throw Error("act(...) is not supported in production builds of React.")}return mt.Children={map:Q,forEach:function(R,re,ye){Q(R,function(){re.apply(this,arguments)},ye)},count:function(R){var re=0;return Q(R,function(){re++}),re},toArray:function(R){return Q(R,function(re){return re})||[]},only:function(R){if(!k(R))throw Error("React.Children.only expected to receive a single React element child.");return R}},mt.Component=y,mt.Fragment=n,mt.Profiler=o,mt.PureComponent=I,mt.StrictMode=r,mt.Suspense=m,mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,mt.act=Y,mt.cloneElement=function(R,re,ye){if(R==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+R+".");var He=T({},R.props),Ue=R.key,Ge=R.ref,se=R._owner;if(re!=null){if(re.ref!==void 0&&(Ge=re.ref,se=P.current),re.key!==void 0&&(Ue=""+re.key),R.type&&R.type.defaultProps)var de=R.type.defaultProps;for(Me in re)D.call(re,Me)&&!O.hasOwnProperty(Me)&&(He[Me]=re[Me]===void 0&&de!==void 0?de[Me]:re[Me])}var Me=arguments.length-2;if(Me===1)He.children=ye;else if(1<Me){de=Array(Me);for(var Ye=0;Ye<Me;Ye++)de[Ye]=arguments[Ye+2];He.children=de}return{$$typeof:s,type:R.type,key:Ue,ref:Ge,props:He,_owner:se}},mt.createContext=function(R){return R={$$typeof:d,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},R.Provider={$$typeof:l,_context:R},R.Consumer=R},mt.createElement=w,mt.createFactory=function(R){var re=w.bind(null,R);return re.type=R,re},mt.createRef=function(){return{current:null}},mt.forwardRef=function(R){return{$$typeof:h,render:R}},mt.isValidElement=k,mt.lazy=function(R){return{$$typeof:v,_payload:{_status:-1,_result:R},_init:he}},mt.memo=function(R,re){return{$$typeof:p,type:R,compare:re===void 0?null:re}},mt.startTransition=function(R){var re=$.transition;$.transition={};try{R()}finally{$.transition=re}},mt.unstable_act=Y,mt.useCallback=function(R,re){return ee.current.useCallback(R,re)},mt.useContext=function(R){return ee.current.useContext(R)},mt.useDebugValue=function(){},mt.useDeferredValue=function(R){return ee.current.useDeferredValue(R)},mt.useEffect=function(R,re){return ee.current.useEffect(R,re)},mt.useId=function(){return ee.current.useId()},mt.useImperativeHandle=function(R,re,ye){return ee.current.useImperativeHandle(R,re,ye)},mt.useInsertionEffect=function(R,re){return ee.current.useInsertionEffect(R,re)},mt.useLayoutEffect=function(R,re){return ee.current.useLayoutEffect(R,re)},mt.useMemo=function(R,re){return ee.current.useMemo(R,re)},mt.useReducer=function(R,re,ye){return ee.current.useReducer(R,re,ye)},mt.useRef=function(R){return ee.current.useRef(R)},mt.useState=function(R){return ee.current.useState(R)},mt.useSyncExternalStore=function(R,re,ye){return ee.current.useSyncExternalStore(R,re,ye)},mt.useTransition=function(){return ee.current.useTransition()},mt.version="18.3.1",mt}var Xp;function sf(){return Xp||(Xp=1,Cu.exports=N0()),Cu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp;function R0(){if(qp)return Ia;qp=1;var s=sf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(h,m,p){var v,S={},g=null,b=null;p!==void 0&&(g=""+p),m.key!==void 0&&(g=""+m.key),m.ref!==void 0&&(b=m.ref);for(v in m)r.call(m,v)&&!l.hasOwnProperty(v)&&(S[v]=m[v]);if(h&&h.defaultProps)for(v in m=h.defaultProps,m)S[v]===void 0&&(S[v]=m[v]);return{$$typeof:e,type:h,key:g,ref:b,props:S,_owner:o.current}}return Ia.Fragment=n,Ia.jsx=d,Ia.jsxs=d,Ia}var Yp;function P0(){return Yp||(Yp=1,Au.exports=R0()),Au.exports}var u=P0(),et=sf();const D0=nx(et);var al={},Nu={exports:{}},Hn={},Ru={exports:{}},Pu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function L0(){return Kp||(Kp=1,(function(s){function e($,q){var Y=$.length;$.push(q);e:for(;0<Y;){var R=Y-1>>>1,re=$[R];if(0<o(re,q))$[R]=q,$[Y]=re,Y=R;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var q=$[0],Y=$.pop();if(Y!==q){$[0]=Y;e:for(var R=0,re=$.length,ye=re>>>1;R<ye;){var He=2*(R+1)-1,Ue=$[He],Ge=He+1,se=$[Ge];if(0>o(Ue,Y))Ge<re&&0>o(se,Ue)?($[R]=se,$[Ge]=Y,R=Ge):($[R]=Ue,$[He]=Y,R=He);else if(Ge<re&&0>o(se,Y))$[R]=se,$[Ge]=Y,R=Ge;else break e}}return q}function o($,q){var Y=$.sortIndex-q.sortIndex;return Y!==0?Y:$.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var d=Date,h=d.now();s.unstable_now=function(){return d.now()-h}}var m=[],p=[],v=1,S=null,g=3,b=!1,T=!1,N=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function z($){for(var q=n(p);q!==null;){if(q.callback===null)r(p);else if(q.startTime<=$)r(p),q.sortIndex=q.expirationTime,e(m,q);else break;q=n(p)}}function C($){if(N=!1,z($),!T)if(n(m)!==null)T=!0,he(D);else{var q=n(p);q!==null&&ee(C,q.startTime-$)}}function D($,q){T=!1,N&&(N=!1,_(w),w=-1),b=!0;var Y=g;try{for(z(q),S=n(m);S!==null&&(!(S.expirationTime>q)||$&&!H());){var R=S.callback;if(typeof R=="function"){S.callback=null,g=S.priorityLevel;var re=R(S.expirationTime<=q);q=s.unstable_now(),typeof re=="function"?S.callback=re:S===n(m)&&r(m),z(q)}else r(m);S=n(m)}if(S!==null)var ye=!0;else{var He=n(p);He!==null&&ee(C,He.startTime-q),ye=!1}return ye}finally{S=null,g=Y,b=!1}}var P=!1,O=null,w=-1,F=5,k=-1;function H(){return!(s.unstable_now()-k<F)}function Z(){if(O!==null){var $=s.unstable_now();k=$;var q=!0;try{q=O(!0,$)}finally{q?ie():(P=!1,O=null)}}else P=!1}var ie;if(typeof I=="function")ie=function(){I(Z)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,Q=X.port2;X.port1.onmessage=Z,ie=function(){Q.postMessage(null)}}else ie=function(){y(Z,0)};function he($){O=$,P||(P=!0,ie())}function ee($,q){w=y(function(){$(s.unstable_now())},q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function($){$.callback=null},s.unstable_continueExecution=function(){T||b||(T=!0,he(D))},s.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<$?Math.floor(1e3/$):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return n(m)},s.unstable_next=function($){switch(g){case 1:case 2:case 3:var q=3;break;default:q=g}var Y=g;g=q;try{return $()}finally{g=Y}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function($,q){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Y=g;g=$;try{return q()}finally{g=Y}},s.unstable_scheduleCallback=function($,q,Y){var R=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?R+Y:R):Y=R,$){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=Y+re,$={id:v++,callback:q,priorityLevel:$,startTime:Y,expirationTime:re,sortIndex:-1},Y>R?($.sortIndex=Y,e(p,$),n(m)===null&&$===n(p)&&(N?(_(w),w=-1):N=!0,ee(C,Y-R))):($.sortIndex=re,e(m,$),T||b||(T=!0,he(D))),$},s.unstable_shouldYield=H,s.unstable_wrapCallback=function($){var q=g;return function(){var Y=g;g=q;try{return $.apply(this,arguments)}finally{g=Y}}}})(Pu)),Pu}var $p;function I0(){return $p||($p=1,Ru.exports=L0()),Ru.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp;function F0(){if(Zp)return Hn;Zp=1;var s=sf(),e=I0();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},S={};function g(t){return m.call(S,t)?!0:m.call(v,t)?!1:p.test(t)?S[t]=!0:(v[t]=!0,!1)}function b(t,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,a,c){if(i===null||typeof i>"u"||b(t,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function N(t,i,a,c,f,x,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=x,this.removeEmptyString=E}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new N(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new N(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new N(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new N(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new N(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new N(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new N(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new N(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new N(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function I(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,I);y[i]=new N(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,I);y[i]=new N(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,I);y[i]=new N(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new N(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new N("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new N(t,1,!1,t.toLowerCase(),null,!0,!0)});function z(t,i,a,c){var f=y.hasOwnProperty(i)?y[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,a,f,c)&&(a=null),c||f===null?g(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):f.mustUseProperty?t[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,c=f.attributeNamespace,a===null?t.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?t.setAttributeNS(c,i,a):t.setAttribute(i,a))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,D=Symbol.for("react.element"),P=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),H=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),he=Symbol.for("react.lazy"),ee=Symbol.for("react.offscreen"),$=Symbol.iterator;function q(t){return t===null||typeof t!="object"?null:(t=$&&t[$]||t["@@iterator"],typeof t=="function"?t:null)}var Y=Object.assign,R;function re(t){if(R===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);R=i&&i[1]||""}return`
`+R+t}var ye=!1;function He(t,i){if(!t||ye)return"";ye=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ue){var c=ue}Reflect.construct(t,[],i)}else{try{i.call()}catch(ue){c=ue}t.call(i.prototype)}else{try{throw Error()}catch(ue){c=ue}t()}}catch(ue){if(ue&&c&&typeof ue.stack=="string"){for(var f=ue.stack.split(`
`),x=c.stack.split(`
`),E=f.length-1,U=x.length-1;1<=E&&0<=U&&f[E]!==x[U];)U--;for(;1<=E&&0<=U;E--,U--)if(f[E]!==x[U]){if(E!==1||U!==1)do if(E--,U--,0>U||f[E]!==x[U]){var B=`
`+f[E].replace(" at new "," at ");return t.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",t.displayName)),B}while(1<=E&&0<=U);break}}}finally{ye=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?re(t):""}function Ue(t){switch(t.tag){case 5:return re(t.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return t=He(t.type,!1),t;case 11:return t=He(t.type.render,!1),t;case 1:return t=He(t.type,!0),t;default:return""}}function Ge(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case O:return"Fragment";case P:return"Portal";case F:return"Profiler";case w:return"StrictMode";case ie:return"Suspense";case X:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case H:return(t.displayName||"Context")+".Consumer";case k:return(t._context.displayName||"Context")+".Provider";case Z:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Q:return i=t.displayName||null,i!==null?i:Ge(t.type)||"Memo";case he:i=t._payload,t=t._init;try{return Ge(t(i))}catch{}}return null}function se(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ge(i);case 8:return i===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function de(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Me(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ye(t){var i=Me(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),c=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,x=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){c=""+E,x.call(this,E)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function we(t){t._valueTracker||(t._valueTracker=Ye(t))}function nt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return t&&(c=Me(t)?t.checked?"true":"false":t.value),t=c,t!==a?(i.setValue(t),!0):!1}function Lt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function at(t,i){var a=i.checked;return Y({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function vt(t,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=de(i.value!=null?i.value:a),t._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function It(t,i){i=i.checked,i!=null&&z(t,"checked",i,!1)}function ft(t,i){It(t,i);var a=de(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Zt(t,i.type,a):i.hasOwnProperty("defaultValue")&&Zt(t,i.type,de(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ut(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function Zt(t,i,a){(i!=="number"||Lt(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var nn=Array.isArray;function Dt(t,i,a,c){if(t=t.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<t.length;a++)f=i.hasOwnProperty("$"+t[a].value),t[a].selected!==f&&(t[a].selected=f),f&&c&&(t[a].defaultSelected=!0)}else{for(a=""+de(a),i=null,f=0;f<t.length;f++){if(t[f].value===a){t[f].selected=!0,c&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function Gt(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return Y({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function j(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(nn(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:de(a)}}function an(t,i){var a=de(i.value),c=de(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),c!=null&&(t.defaultValue=""+c)}function Tt(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function L(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function M(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?L(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var K,le=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,f){MSApp.execUnsafeLocalFunction(function(){return t(i,a,c,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(K=K||document.createElement("div"),K.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=K.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function fe(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var be={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ae=["Webkit","ms","Moz","O"];Object.keys(be).forEach(function(t){Ae.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),be[i]=be[t]})});function pe(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||be.hasOwnProperty(t)&&be[t]?(""+i).trim():i+"px"}function xe(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=pe(a,i[a],c);a==="float"&&(a="cssFloat"),c?t.setProperty(a,f):t[a]=f}}var Re=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ke(t,i){if(i){if(Re[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Pe(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Te=null;function $e(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var tt=null,st=null,G=null;function Ce(t){if(t=_a(t)){if(typeof tt!="function")throw Error(n(280));var i=t.stateNode;i&&(i=So(i),tt(t.stateNode,t.type,i))}}function me(t){st?G?G.push(t):G=[t]:st=t}function Ne(){if(st){var t=st,i=G;if(G=st=null,Ce(t),i)for(t=0;t<i.length;t++)Ce(i[t])}}function ke(t,i){return t(i)}function ge(){}var Je=!1;function Xe(t,i,a){if(Je)return t(i,a);Je=!0;try{return ke(t,i,a)}finally{Je=!1,(st!==null||G!==null)&&(ge(),Ne())}}function At(t,i){var a=t.stateNode;if(a===null)return null;var c=So(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var bt=!1;if(h)try{var xn={};Object.defineProperty(xn,"passive",{get:function(){bt=!0}}),window.addEventListener("test",xn,xn),window.removeEventListener("test",xn,xn)}catch{bt=!1}function Qn(t,i,a,c,f,x,E,U,B){var ue=Array.prototype.slice.call(arguments,3);try{i.apply(a,ue)}catch(_e){this.onError(_e)}}var Pr=!1,ss=null,Dr=!1,Lr=null,$l={onError:function(t){Pr=!0,ss=t}};function no(t,i,a,c,f,x,E,U,B){Pr=!1,ss=null,Qn.apply($l,arguments)}function io(t,i,a,c,f,x,E,U,B){if(no.apply(this,arguments),Pr){if(Pr){var ue=ss;Pr=!1,ss=null}else throw Error(n(198));Dr||(Dr=!0,Lr=ue)}}function Nn(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function as(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Js(t){if(Nn(t)!==t)throw Error(n(188))}function ro(t){var i=t.alternate;if(!i){if(i=Nn(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,c=i;;){var f=a.return;if(f===null)break;var x=f.alternate;if(x===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===x.child){for(x=f.child;x;){if(x===a)return Js(f),t;if(x===c)return Js(f),i;x=x.sibling}throw Error(n(188))}if(a.return!==c.return)a=f,c=x;else{for(var E=!1,U=f.child;U;){if(U===a){E=!0,a=f,c=x;break}if(U===c){E=!0,c=f,a=x;break}U=U.sibling}if(!E){for(U=x.child;U;){if(U===a){E=!0,a=x,c=f;break}if(U===c){E=!0,c=x,a=f;break}U=U.sibling}if(!E)throw Error(n(189))}}if(a.alternate!==c)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function Ir(t){return t=ro(t),t!==null?Qs(t):null}function Qs(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Qs(t);if(i!==null)return i;t=t.sibling}return null}var Fr=e.unstable_scheduleCallback,ea=e.unstable_cancelCallback,so=e.unstable_shouldYield,Zl=e.unstable_requestPaint,Wt=e.unstable_now,Jl=e.unstable_getCurrentPriorityLevel,ta=e.unstable_ImmediatePriority,na=e.unstable_UserBlockingPriority,A=e.unstable_NormalPriority,V=e.unstable_LowPriority,ce=e.unstable_IdlePriority,te=null,J=null;function Ie(t){if(J&&typeof J.onCommitFiberRoot=="function")try{J.onCommitFiberRoot(te,t,void 0,(t.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:Ze,Le=Math.log,je=Math.LN2;function Ze(t){return t>>>=0,t===0?32:31-(Le(t)/je|0)|0}var ct=64,dt=4194304;function ze(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function _t(t,i){var a=t.pendingLanes;if(a===0)return 0;var c=0,f=t.suspendedLanes,x=t.pingedLanes,E=a&268435455;if(E!==0){var U=E&~f;U!==0?c=ze(U):(x&=E,x!==0&&(c=ze(x)))}else E=a&~f,E!==0?c=ze(E):x!==0&&(c=ze(x));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,x=i&-i,f>=x||f===16&&(x&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=c;0<i;)a=31-De(i),f=1<<a,c|=t[a],i&=~f;return c}function Jt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ot(t,i){for(var a=t.suspendedLanes,c=t.pingedLanes,f=t.expirationTimes,x=t.pendingLanes;0<x;){var E=31-De(x),U=1<<E,B=f[E];B===-1?((U&a)===0||(U&c)!==0)&&(f[E]=Jt(U,i)):B<=i&&(t.expiredLanes|=U),x&=~U}}function Pt(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function on(){var t=ct;return ct<<=1,(ct&4194240)===0&&(ct=64),t}function Oe(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function en(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-De(i),t[i]=a}function yt(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<a;){var f=31-De(a),x=1<<f;i[f]=0,c[f]=-1,t[f]=-1,a&=~x}}function Sn(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var c=31-De(a),f=1<<c;f&i|t[c]&i&&(t[c]|=i),a&=~f}}var ht=0;function ui(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var zi,Ct,Vt,di,Ft,ei=!1,fi=[],hi=null,sr=null,ar=null,ia=new Map,ra=new Map,or=[],Kx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Af(t,i){switch(t){case"focusin":case"focusout":hi=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":ia.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ra.delete(i.pointerId)}}function sa(t,i,a,c,f,x){return t===null||t.nativeEvent!==x?(t={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:x,targetContainers:[f]},i!==null&&(i=_a(i),i!==null&&Ct(i)),t):(t.eventSystemFlags|=c,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function $x(t,i,a,c,f){switch(i){case"focusin":return hi=sa(hi,t,i,a,c,f),!0;case"dragenter":return sr=sa(sr,t,i,a,c,f),!0;case"mouseover":return ar=sa(ar,t,i,a,c,f),!0;case"pointerover":var x=f.pointerId;return ia.set(x,sa(ia.get(x)||null,t,i,a,c,f)),!0;case"gotpointercapture":return x=f.pointerId,ra.set(x,sa(ra.get(x)||null,t,i,a,c,f)),!0}return!1}function Cf(t){var i=kr(t.target);if(i!==null){var a=Nn(i);if(a!==null){if(i=a.tag,i===13){if(i=as(a),i!==null){t.blockedOn=i,Ft(t.priority,function(){Vt(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ao(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=ec(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var c=new a.constructor(a.type,a);Te=c,a.target.dispatchEvent(c),Te=null}else return i=_a(a),i!==null&&Ct(i),t.blockedOn=a,!1;i.shift()}return!0}function Nf(t,i,a){ao(t)&&a.delete(i)}function Zx(){ei=!1,hi!==null&&ao(hi)&&(hi=null),sr!==null&&ao(sr)&&(sr=null),ar!==null&&ao(ar)&&(ar=null),ia.forEach(Nf),ra.forEach(Nf)}function aa(t,i){t.blockedOn===i&&(t.blockedOn=null,ei||(ei=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Zx)))}function oa(t){function i(f){return aa(f,t)}if(0<fi.length){aa(fi[0],t);for(var a=1;a<fi.length;a++){var c=fi[a];c.blockedOn===t&&(c.blockedOn=null)}}for(hi!==null&&aa(hi,t),sr!==null&&aa(sr,t),ar!==null&&aa(ar,t),ia.forEach(i),ra.forEach(i),a=0;a<or.length;a++)c=or[a],c.blockedOn===t&&(c.blockedOn=null);for(;0<or.length&&(a=or[0],a.blockedOn===null);)Cf(a),a.blockedOn===null&&or.shift()}var os=C.ReactCurrentBatchConfig,oo=!0;function Jx(t,i,a,c){var f=ht,x=os.transition;os.transition=null;try{ht=1,Ql(t,i,a,c)}finally{ht=f,os.transition=x}}function Qx(t,i,a,c){var f=ht,x=os.transition;os.transition=null;try{ht=4,Ql(t,i,a,c)}finally{ht=f,os.transition=x}}function Ql(t,i,a,c){if(oo){var f=ec(t,i,a,c);if(f===null)gc(t,i,c,lo,a),Af(t,c);else if($x(f,t,i,a,c))c.stopPropagation();else if(Af(t,c),i&4&&-1<Kx.indexOf(t)){for(;f!==null;){var x=_a(f);if(x!==null&&zi(x),x=ec(t,i,a,c),x===null&&gc(t,i,c,lo,a),x===f)break;f=x}f!==null&&c.stopPropagation()}else gc(t,i,c,null,a)}}var lo=null;function ec(t,i,a,c){if(lo=null,t=$e(c),t=kr(t),t!==null)if(i=Nn(t),i===null)t=null;else if(a=i.tag,a===13){if(t=as(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return lo=t,null}function Rf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jl()){case ta:return 1;case na:return 4;case A:case V:return 16;case ce:return 536870912;default:return 16}default:return 16}}var lr=null,tc=null,co=null;function Pf(){if(co)return co;var t,i=tc,a=i.length,c,f="value"in lr?lr.value:lr.textContent,x=f.length;for(t=0;t<a&&i[t]===f[t];t++);var E=a-t;for(c=1;c<=E&&i[a-c]===f[x-c];c++);return co=f.slice(t,1<c?1-c:void 0)}function uo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function fo(){return!0}function Df(){return!1}function jn(t){function i(a,c,f,x,E){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=x,this.target=E,this.currentTarget=null;for(var U in t)t.hasOwnProperty(U)&&(a=t[U],this[U]=a?a(x):x[U]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?fo:Df,this.isPropagationStopped=Df,this}return Y(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=fo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=fo)},persist:function(){},isPersistent:fo}),i}var ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nc=jn(ls),la=Y({},ls,{view:0,detail:0}),eg=jn(la),ic,rc,ca,ho=Y({},la,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ac,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ca&&(ca&&t.type==="mousemove"?(ic=t.screenX-ca.screenX,rc=t.screenY-ca.screenY):rc=ic=0,ca=t),ic)},movementY:function(t){return"movementY"in t?t.movementY:rc}}),Lf=jn(ho),tg=Y({},ho,{dataTransfer:0}),ng=jn(tg),ig=Y({},la,{relatedTarget:0}),sc=jn(ig),rg=Y({},ls,{animationName:0,elapsedTime:0,pseudoElement:0}),sg=jn(rg),ag=Y({},ls,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),og=jn(ag),lg=Y({},ls,{data:0}),If=jn(lg),cg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ug={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=dg[t])?!!i[t]:!1}function ac(){return fg}var hg=Y({},la,{key:function(t){if(t.key){var i=cg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=uo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ug[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ac,charCode:function(t){return t.type==="keypress"?uo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?uo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),pg=jn(hg),mg=Y({},ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ff=jn(mg),xg=Y({},la,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ac}),gg=jn(xg),vg=Y({},ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),_g=jn(vg),yg=Y({},ho,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Sg=jn(yg),Mg=[9,13,27,32],oc=h&&"CompositionEvent"in window,ua=null;h&&"documentMode"in document&&(ua=document.documentMode);var bg=h&&"TextEvent"in window&&!ua,kf=h&&(!oc||ua&&8<ua&&11>=ua),Uf=" ",Of=!1;function Bf(t,i){switch(t){case"keyup":return Mg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var cs=!1;function Eg(t,i){switch(t){case"compositionend":return zf(i);case"keypress":return i.which!==32?null:(Of=!0,Uf);case"textInput":return t=i.data,t===Uf&&Of?null:t;default:return null}}function wg(t,i){if(cs)return t==="compositionend"||!oc&&Bf(t,i)?(t=Pf(),co=tc=lr=null,cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return kf&&i.locale!=="ko"?null:i.data;default:return null}}var Tg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Tg[t.type]:i==="textarea"}function Gf(t,i,a,c){me(c),i=vo(i,"onChange"),0<i.length&&(a=new nc("onChange","change",null,a,c),t.push({event:a,listeners:i}))}var da=null,fa=null;function Ag(t){ah(t,0)}function po(t){var i=ps(t);if(nt(i))return t}function Cg(t,i){if(t==="change")return i}var Vf=!1;if(h){var lc;if(h){var cc="oninput"in document;if(!cc){var jf=document.createElement("div");jf.setAttribute("oninput","return;"),cc=typeof jf.oninput=="function"}lc=cc}else lc=!1;Vf=lc&&(!document.documentMode||9<document.documentMode)}function Wf(){da&&(da.detachEvent("onpropertychange",Xf),fa=da=null)}function Xf(t){if(t.propertyName==="value"&&po(fa)){var i=[];Gf(i,fa,t,$e(t)),Xe(Ag,i)}}function Ng(t,i,a){t==="focusin"?(Wf(),da=i,fa=a,da.attachEvent("onpropertychange",Xf)):t==="focusout"&&Wf()}function Rg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return po(fa)}function Pg(t,i){if(t==="click")return po(i)}function Dg(t,i){if(t==="input"||t==="change")return po(i)}function Lg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var pi=typeof Object.is=="function"?Object.is:Lg;function ha(t,i){if(pi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!m.call(i,f)||!pi(t[f],i[f]))return!1}return!0}function qf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Yf(t,i){var a=qf(t);t=0;for(var c;a;){if(a.nodeType===3){if(c=t+a.textContent.length,t<=i&&c>=i)return{node:a,offset:i-t};t=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=qf(a)}}function Kf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Kf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function $f(){for(var t=window,i=Lt();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=Lt(t.document)}return i}function uc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Ig(t){var i=$f(),a=t.focusedElem,c=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&Kf(a.ownerDocument.documentElement,a)){if(c!==null&&uc(a)){if(i=c.start,t=c.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=a.textContent.length,x=Math.min(c.start,f);c=c.end===void 0?x:Math.min(c.end,f),!t.extend&&x>c&&(f=c,c=x,x=f),f=Yf(a,x);var E=Yf(a,c);f&&E&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),x>c?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Fg=h&&"documentMode"in document&&11>=document.documentMode,us=null,dc=null,pa=null,fc=!1;function Zf(t,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;fc||us==null||us!==Lt(c)||(c=us,"selectionStart"in c&&uc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),pa&&ha(pa,c)||(pa=c,c=vo(dc,"onSelect"),0<c.length&&(i=new nc("onSelect","select",null,i,a),t.push({event:i,listeners:c}),i.target=us)))}function mo(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var ds={animationend:mo("Animation","AnimationEnd"),animationiteration:mo("Animation","AnimationIteration"),animationstart:mo("Animation","AnimationStart"),transitionend:mo("Transition","TransitionEnd")},hc={},Jf={};h&&(Jf=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function xo(t){if(hc[t])return hc[t];if(!ds[t])return t;var i=ds[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in Jf)return hc[t]=i[a];return t}var Qf=xo("animationend"),eh=xo("animationiteration"),th=xo("animationstart"),nh=xo("transitionend"),ih=new Map,rh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cr(t,i){ih.set(t,i),l(i,[t])}for(var pc=0;pc<rh.length;pc++){var mc=rh[pc],kg=mc.toLowerCase(),Ug=mc[0].toUpperCase()+mc.slice(1);cr(kg,"on"+Ug)}cr(Qf,"onAnimationEnd"),cr(eh,"onAnimationIteration"),cr(th,"onAnimationStart"),cr("dblclick","onDoubleClick"),cr("focusin","onFocus"),cr("focusout","onBlur"),cr(nh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Og=new Set("cancel close invalid load scroll toggle".split(" ").concat(ma));function sh(t,i,a){var c=t.type||"unknown-event";t.currentTarget=a,io(c,i,void 0,t),t.currentTarget=null}function ah(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var c=t[a],f=c.event;c=c.listeners;e:{var x=void 0;if(i)for(var E=c.length-1;0<=E;E--){var U=c[E],B=U.instance,ue=U.currentTarget;if(U=U.listener,B!==x&&f.isPropagationStopped())break e;sh(f,U,ue),x=B}else for(E=0;E<c.length;E++){if(U=c[E],B=U.instance,ue=U.currentTarget,U=U.listener,B!==x&&f.isPropagationStopped())break e;sh(f,U,ue),x=B}}}if(Dr)throw t=Lr,Dr=!1,Lr=null,t}function zt(t,i){var a=i[bc];a===void 0&&(a=i[bc]=new Set);var c=t+"__bubble";a.has(c)||(oh(i,t,2,!1),a.add(c))}function xc(t,i,a){var c=0;i&&(c|=4),oh(a,t,c,i)}var go="_reactListening"+Math.random().toString(36).slice(2);function xa(t){if(!t[go]){t[go]=!0,r.forEach(function(a){a!=="selectionchange"&&(Og.has(a)||xc(a,!1,t),xc(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[go]||(i[go]=!0,xc("selectionchange",!1,i))}}function oh(t,i,a,c){switch(Rf(i)){case 1:var f=Jx;break;case 4:f=Qx;break;default:f=Ql}a=f.bind(null,i,a,t),f=void 0,!bt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?t.addEventListener(i,a,{capture:!0,passive:f}):t.addEventListener(i,a,!0):f!==void 0?t.addEventListener(i,a,{passive:f}):t.addEventListener(i,a,!1)}function gc(t,i,a,c,f){var x=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var U=c.stateNode.containerInfo;if(U===f||U.nodeType===8&&U.parentNode===f)break;if(E===4)for(E=c.return;E!==null;){var B=E.tag;if((B===3||B===4)&&(B=E.stateNode.containerInfo,B===f||B.nodeType===8&&B.parentNode===f))return;E=E.return}for(;U!==null;){if(E=kr(U),E===null)return;if(B=E.tag,B===5||B===6){c=x=E;continue e}U=U.parentNode}}c=c.return}Xe(function(){var ue=x,_e=$e(a),Se=[];e:{var ve=ih.get(t);if(ve!==void 0){var Be=nc,We=t;switch(t){case"keypress":if(uo(a)===0)break e;case"keydown":case"keyup":Be=pg;break;case"focusin":We="focus",Be=sc;break;case"focusout":We="blur",Be=sc;break;case"beforeblur":case"afterblur":Be=sc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Be=Lf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Be=ng;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Be=gg;break;case Qf:case eh:case th:Be=sg;break;case nh:Be=_g;break;case"scroll":Be=eg;break;case"wheel":Be=Sg;break;case"copy":case"cut":case"paste":Be=og;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Be=Ff}var qe=(i&4)!==0,tn=!qe&&t==="scroll",ne=qe?ve!==null?ve+"Capture":null:ve;qe=[];for(var W=ue,ae;W!==null;){ae=W;var Ee=ae.stateNode;if(ae.tag===5&&Ee!==null&&(ae=Ee,ne!==null&&(Ee=At(W,ne),Ee!=null&&qe.push(ga(W,Ee,ae)))),tn)break;W=W.return}0<qe.length&&(ve=new Be(ve,We,null,a,_e),Se.push({event:ve,listeners:qe}))}}if((i&7)===0){e:{if(ve=t==="mouseover"||t==="pointerover",Be=t==="mouseout"||t==="pointerout",ve&&a!==Te&&(We=a.relatedTarget||a.fromElement)&&(kr(We)||We[Hi]))break e;if((Be||ve)&&(ve=_e.window===_e?_e:(ve=_e.ownerDocument)?ve.defaultView||ve.parentWindow:window,Be?(We=a.relatedTarget||a.toElement,Be=ue,We=We?kr(We):null,We!==null&&(tn=Nn(We),We!==tn||We.tag!==5&&We.tag!==6)&&(We=null)):(Be=null,We=ue),Be!==We)){if(qe=Lf,Ee="onMouseLeave",ne="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(qe=Ff,Ee="onPointerLeave",ne="onPointerEnter",W="pointer"),tn=Be==null?ve:ps(Be),ae=We==null?ve:ps(We),ve=new qe(Ee,W+"leave",Be,a,_e),ve.target=tn,ve.relatedTarget=ae,Ee=null,kr(_e)===ue&&(qe=new qe(ne,W+"enter",We,a,_e),qe.target=ae,qe.relatedTarget=tn,Ee=qe),tn=Ee,Be&&We)t:{for(qe=Be,ne=We,W=0,ae=qe;ae;ae=fs(ae))W++;for(ae=0,Ee=ne;Ee;Ee=fs(Ee))ae++;for(;0<W-ae;)qe=fs(qe),W--;for(;0<ae-W;)ne=fs(ne),ae--;for(;W--;){if(qe===ne||ne!==null&&qe===ne.alternate)break t;qe=fs(qe),ne=fs(ne)}qe=null}else qe=null;Be!==null&&lh(Se,ve,Be,qe,!1),We!==null&&tn!==null&&lh(Se,tn,We,qe,!0)}}e:{if(ve=ue?ps(ue):window,Be=ve.nodeName&&ve.nodeName.toLowerCase(),Be==="select"||Be==="input"&&ve.type==="file")var Qe=Cg;else if(Hf(ve))if(Vf)Qe=Dg;else{Qe=Rg;var it=Ng}else(Be=ve.nodeName)&&Be.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Qe=Pg);if(Qe&&(Qe=Qe(t,ue))){Gf(Se,Qe,a,_e);break e}it&&it(t,ve,ue),t==="focusout"&&(it=ve._wrapperState)&&it.controlled&&ve.type==="number"&&Zt(ve,"number",ve.value)}switch(it=ue?ps(ue):window,t){case"focusin":(Hf(it)||it.contentEditable==="true")&&(us=it,dc=ue,pa=null);break;case"focusout":pa=dc=us=null;break;case"mousedown":fc=!0;break;case"contextmenu":case"mouseup":case"dragend":fc=!1,Zf(Se,a,_e);break;case"selectionchange":if(Fg)break;case"keydown":case"keyup":Zf(Se,a,_e)}var rt;if(oc)e:{switch(t){case"compositionstart":var ot="onCompositionStart";break e;case"compositionend":ot="onCompositionEnd";break e;case"compositionupdate":ot="onCompositionUpdate";break e}ot=void 0}else cs?Bf(t,a)&&(ot="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ot="onCompositionStart");ot&&(kf&&a.locale!=="ko"&&(cs||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&cs&&(rt=Pf()):(lr=_e,tc="value"in lr?lr.value:lr.textContent,cs=!0)),it=vo(ue,ot),0<it.length&&(ot=new If(ot,t,null,a,_e),Se.push({event:ot,listeners:it}),rt?ot.data=rt:(rt=zf(a),rt!==null&&(ot.data=rt)))),(rt=bg?Eg(t,a):wg(t,a))&&(ue=vo(ue,"onBeforeInput"),0<ue.length&&(_e=new If("onBeforeInput","beforeinput",null,a,_e),Se.push({event:_e,listeners:ue}),_e.data=rt))}ah(Se,i)})}function ga(t,i,a){return{instance:t,listener:i,currentTarget:a}}function vo(t,i){for(var a=i+"Capture",c=[];t!==null;){var f=t,x=f.stateNode;f.tag===5&&x!==null&&(f=x,x=At(t,a),x!=null&&c.unshift(ga(t,x,f)),x=At(t,i),x!=null&&c.push(ga(t,x,f))),t=t.return}return c}function fs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function lh(t,i,a,c,f){for(var x=i._reactName,E=[];a!==null&&a!==c;){var U=a,B=U.alternate,ue=U.stateNode;if(B!==null&&B===c)break;U.tag===5&&ue!==null&&(U=ue,f?(B=At(a,x),B!=null&&E.unshift(ga(a,B,U))):f||(B=At(a,x),B!=null&&E.push(ga(a,B,U)))),a=a.return}E.length!==0&&t.push({event:i,listeners:E})}var Bg=/\r\n?/g,zg=/\u0000|\uFFFD/g;function ch(t){return(typeof t=="string"?t:""+t).replace(Bg,`
`).replace(zg,"")}function _o(t,i,a){if(i=ch(i),ch(t)!==i&&a)throw Error(n(425))}function yo(){}var vc=null,_c=null;function yc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Sc=typeof setTimeout=="function"?setTimeout:void 0,Hg=typeof clearTimeout=="function"?clearTimeout:void 0,uh=typeof Promise=="function"?Promise:void 0,Gg=typeof queueMicrotask=="function"?queueMicrotask:typeof uh<"u"?function(t){return uh.resolve(null).then(t).catch(Vg)}:Sc;function Vg(t){setTimeout(function(){throw t})}function Mc(t,i){var a=i,c=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){t.removeChild(f),oa(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);oa(i)}function ur(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function dh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var hs=Math.random().toString(36).slice(2),Ai="__reactFiber$"+hs,va="__reactProps$"+hs,Hi="__reactContainer$"+hs,bc="__reactEvents$"+hs,jg="__reactListeners$"+hs,Wg="__reactHandles$"+hs;function kr(t){var i=t[Ai];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Hi]||a[Ai]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=dh(t);t!==null;){if(a=t[Ai])return a;t=dh(t)}return i}t=a,a=t.parentNode}return null}function _a(t){return t=t[Ai]||t[Hi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ps(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function So(t){return t[va]||null}var Ec=[],ms=-1;function dr(t){return{current:t}}function Ht(t){0>ms||(t.current=Ec[ms],Ec[ms]=null,ms--)}function Bt(t,i){ms++,Ec[ms]=t.current,t.current=i}var fr={},Mn=dr(fr),kn=dr(!1),Ur=fr;function xs(t,i){var a=t.type.contextTypes;if(!a)return fr;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},x;for(x in a)f[x]=i[x];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function Un(t){return t=t.childContextTypes,t!=null}function Mo(){Ht(kn),Ht(Mn)}function fh(t,i,a){if(Mn.current!==fr)throw Error(n(168));Bt(Mn,i),Bt(kn,a)}function hh(t,i,a){var c=t.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(n(108,se(t)||"Unknown",f));return Y({},a,c)}function bo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||fr,Ur=Mn.current,Bt(Mn,t),Bt(kn,kn.current),!0}function ph(t,i,a){var c=t.stateNode;if(!c)throw Error(n(169));a?(t=hh(t,i,Ur),c.__reactInternalMemoizedMergedChildContext=t,Ht(kn),Ht(Mn),Bt(Mn,t)):Ht(kn),Bt(kn,a)}var Gi=null,Eo=!1,wc=!1;function mh(t){Gi===null?Gi=[t]:Gi.push(t)}function Xg(t){Eo=!0,mh(t)}function hr(){if(!wc&&Gi!==null){wc=!0;var t=0,i=ht;try{var a=Gi;for(ht=1;t<a.length;t++){var c=a[t];do c=c(!0);while(c!==null)}Gi=null,Eo=!1}catch(f){throw Gi!==null&&(Gi=Gi.slice(t+1)),Fr(ta,hr),f}finally{ht=i,wc=!1}}return null}var gs=[],vs=0,wo=null,To=0,ti=[],ni=0,Or=null,Vi=1,ji="";function Br(t,i){gs[vs++]=To,gs[vs++]=wo,wo=t,To=i}function xh(t,i,a){ti[ni++]=Vi,ti[ni++]=ji,ti[ni++]=Or,Or=t;var c=Vi;t=ji;var f=32-De(c)-1;c&=~(1<<f),a+=1;var x=32-De(i)+f;if(30<x){var E=f-f%5;x=(c&(1<<E)-1).toString(32),c>>=E,f-=E,Vi=1<<32-De(i)+f|a<<f|c,ji=x+t}else Vi=1<<x|a<<f|c,ji=t}function Tc(t){t.return!==null&&(Br(t,1),xh(t,1,0))}function Ac(t){for(;t===wo;)wo=gs[--vs],gs[vs]=null,To=gs[--vs],gs[vs]=null;for(;t===Or;)Or=ti[--ni],ti[ni]=null,ji=ti[--ni],ti[ni]=null,Vi=ti[--ni],ti[ni]=null}var Wn=null,Xn=null,jt=!1,mi=null;function gh(t,i){var a=ai(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function vh(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Wn=t,Xn=ur(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Wn=t,Xn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Or!==null?{id:Vi,overflow:ji}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ai(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,Wn=t,Xn=null,!0):!1;default:return!1}}function Cc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Nc(t){if(jt){var i=Xn;if(i){var a=i;if(!vh(t,i)){if(Cc(t))throw Error(n(418));i=ur(a.nextSibling);var c=Wn;i&&vh(t,i)?gh(c,a):(t.flags=t.flags&-4097|2,jt=!1,Wn=t)}}else{if(Cc(t))throw Error(n(418));t.flags=t.flags&-4097|2,jt=!1,Wn=t}}}function _h(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Wn=t}function Ao(t){if(t!==Wn)return!1;if(!jt)return _h(t),jt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!yc(t.type,t.memoizedProps)),i&&(i=Xn)){if(Cc(t))throw yh(),Error(n(418));for(;i;)gh(t,i),i=ur(i.nextSibling)}if(_h(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){Xn=ur(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}Xn=null}}else Xn=Wn?ur(t.stateNode.nextSibling):null;return!0}function yh(){for(var t=Xn;t;)t=ur(t.nextSibling)}function _s(){Xn=Wn=null,jt=!1}function Rc(t){mi===null?mi=[t]:mi.push(t)}var qg=C.ReactCurrentBatchConfig;function ya(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var c=a.stateNode}if(!c)throw Error(n(147,t));var f=c,x=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===x?i.ref:(i=function(E){var U=f.refs;E===null?delete U[x]:U[x]=E},i._stringRef=x,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function Co(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Sh(t){var i=t._init;return i(t._payload)}function Mh(t){function i(ne,W){if(t){var ae=ne.deletions;ae===null?(ne.deletions=[W],ne.flags|=16):ae.push(W)}}function a(ne,W){if(!t)return null;for(;W!==null;)i(ne,W),W=W.sibling;return null}function c(ne,W){for(ne=new Map;W!==null;)W.key!==null?ne.set(W.key,W):ne.set(W.index,W),W=W.sibling;return ne}function f(ne,W){return ne=Sr(ne,W),ne.index=0,ne.sibling=null,ne}function x(ne,W,ae){return ne.index=ae,t?(ae=ne.alternate,ae!==null?(ae=ae.index,ae<W?(ne.flags|=2,W):ae):(ne.flags|=2,W)):(ne.flags|=1048576,W)}function E(ne){return t&&ne.alternate===null&&(ne.flags|=2),ne}function U(ne,W,ae,Ee){return W===null||W.tag!==6?(W=Su(ae,ne.mode,Ee),W.return=ne,W):(W=f(W,ae),W.return=ne,W)}function B(ne,W,ae,Ee){var Qe=ae.type;return Qe===O?_e(ne,W,ae.props.children,Ee,ae.key):W!==null&&(W.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===he&&Sh(Qe)===W.type)?(Ee=f(W,ae.props),Ee.ref=ya(ne,W,ae),Ee.return=ne,Ee):(Ee=Jo(ae.type,ae.key,ae.props,null,ne.mode,Ee),Ee.ref=ya(ne,W,ae),Ee.return=ne,Ee)}function ue(ne,W,ae,Ee){return W===null||W.tag!==4||W.stateNode.containerInfo!==ae.containerInfo||W.stateNode.implementation!==ae.implementation?(W=Mu(ae,ne.mode,Ee),W.return=ne,W):(W=f(W,ae.children||[]),W.return=ne,W)}function _e(ne,W,ae,Ee,Qe){return W===null||W.tag!==7?(W=qr(ae,ne.mode,Ee,Qe),W.return=ne,W):(W=f(W,ae),W.return=ne,W)}function Se(ne,W,ae){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Su(""+W,ne.mode,ae),W.return=ne,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case D:return ae=Jo(W.type,W.key,W.props,null,ne.mode,ae),ae.ref=ya(ne,null,W),ae.return=ne,ae;case P:return W=Mu(W,ne.mode,ae),W.return=ne,W;case he:var Ee=W._init;return Se(ne,Ee(W._payload),ae)}if(nn(W)||q(W))return W=qr(W,ne.mode,ae,null),W.return=ne,W;Co(ne,W)}return null}function ve(ne,W,ae,Ee){var Qe=W!==null?W.key:null;if(typeof ae=="string"&&ae!==""||typeof ae=="number")return Qe!==null?null:U(ne,W,""+ae,Ee);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case D:return ae.key===Qe?B(ne,W,ae,Ee):null;case P:return ae.key===Qe?ue(ne,W,ae,Ee):null;case he:return Qe=ae._init,ve(ne,W,Qe(ae._payload),Ee)}if(nn(ae)||q(ae))return Qe!==null?null:_e(ne,W,ae,Ee,null);Co(ne,ae)}return null}function Be(ne,W,ae,Ee,Qe){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return ne=ne.get(ae)||null,U(W,ne,""+Ee,Qe);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case D:return ne=ne.get(Ee.key===null?ae:Ee.key)||null,B(W,ne,Ee,Qe);case P:return ne=ne.get(Ee.key===null?ae:Ee.key)||null,ue(W,ne,Ee,Qe);case he:var it=Ee._init;return Be(ne,W,ae,it(Ee._payload),Qe)}if(nn(Ee)||q(Ee))return ne=ne.get(ae)||null,_e(W,ne,Ee,Qe,null);Co(W,Ee)}return null}function We(ne,W,ae,Ee){for(var Qe=null,it=null,rt=W,ot=W=0,pn=null;rt!==null&&ot<ae.length;ot++){rt.index>ot?(pn=rt,rt=null):pn=rt.sibling;var Nt=ve(ne,rt,ae[ot],Ee);if(Nt===null){rt===null&&(rt=pn);break}t&&rt&&Nt.alternate===null&&i(ne,rt),W=x(Nt,W,ot),it===null?Qe=Nt:it.sibling=Nt,it=Nt,rt=pn}if(ot===ae.length)return a(ne,rt),jt&&Br(ne,ot),Qe;if(rt===null){for(;ot<ae.length;ot++)rt=Se(ne,ae[ot],Ee),rt!==null&&(W=x(rt,W,ot),it===null?Qe=rt:it.sibling=rt,it=rt);return jt&&Br(ne,ot),Qe}for(rt=c(ne,rt);ot<ae.length;ot++)pn=Be(rt,ne,ot,ae[ot],Ee),pn!==null&&(t&&pn.alternate!==null&&rt.delete(pn.key===null?ot:pn.key),W=x(pn,W,ot),it===null?Qe=pn:it.sibling=pn,it=pn);return t&&rt.forEach(function(Mr){return i(ne,Mr)}),jt&&Br(ne,ot),Qe}function qe(ne,W,ae,Ee){var Qe=q(ae);if(typeof Qe!="function")throw Error(n(150));if(ae=Qe.call(ae),ae==null)throw Error(n(151));for(var it=Qe=null,rt=W,ot=W=0,pn=null,Nt=ae.next();rt!==null&&!Nt.done;ot++,Nt=ae.next()){rt.index>ot?(pn=rt,rt=null):pn=rt.sibling;var Mr=ve(ne,rt,Nt.value,Ee);if(Mr===null){rt===null&&(rt=pn);break}t&&rt&&Mr.alternate===null&&i(ne,rt),W=x(Mr,W,ot),it===null?Qe=Mr:it.sibling=Mr,it=Mr,rt=pn}if(Nt.done)return a(ne,rt),jt&&Br(ne,ot),Qe;if(rt===null){for(;!Nt.done;ot++,Nt=ae.next())Nt=Se(ne,Nt.value,Ee),Nt!==null&&(W=x(Nt,W,ot),it===null?Qe=Nt:it.sibling=Nt,it=Nt);return jt&&Br(ne,ot),Qe}for(rt=c(ne,rt);!Nt.done;ot++,Nt=ae.next())Nt=Be(rt,ne,ot,Nt.value,Ee),Nt!==null&&(t&&Nt.alternate!==null&&rt.delete(Nt.key===null?ot:Nt.key),W=x(Nt,W,ot),it===null?Qe=Nt:it.sibling=Nt,it=Nt);return t&&rt.forEach(function(T0){return i(ne,T0)}),jt&&Br(ne,ot),Qe}function tn(ne,W,ae,Ee){if(typeof ae=="object"&&ae!==null&&ae.type===O&&ae.key===null&&(ae=ae.props.children),typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case D:e:{for(var Qe=ae.key,it=W;it!==null;){if(it.key===Qe){if(Qe=ae.type,Qe===O){if(it.tag===7){a(ne,it.sibling),W=f(it,ae.props.children),W.return=ne,ne=W;break e}}else if(it.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===he&&Sh(Qe)===it.type){a(ne,it.sibling),W=f(it,ae.props),W.ref=ya(ne,it,ae),W.return=ne,ne=W;break e}a(ne,it);break}else i(ne,it);it=it.sibling}ae.type===O?(W=qr(ae.props.children,ne.mode,Ee,ae.key),W.return=ne,ne=W):(Ee=Jo(ae.type,ae.key,ae.props,null,ne.mode,Ee),Ee.ref=ya(ne,W,ae),Ee.return=ne,ne=Ee)}return E(ne);case P:e:{for(it=ae.key;W!==null;){if(W.key===it)if(W.tag===4&&W.stateNode.containerInfo===ae.containerInfo&&W.stateNode.implementation===ae.implementation){a(ne,W.sibling),W=f(W,ae.children||[]),W.return=ne,ne=W;break e}else{a(ne,W);break}else i(ne,W);W=W.sibling}W=Mu(ae,ne.mode,Ee),W.return=ne,ne=W}return E(ne);case he:return it=ae._init,tn(ne,W,it(ae._payload),Ee)}if(nn(ae))return We(ne,W,ae,Ee);if(q(ae))return qe(ne,W,ae,Ee);Co(ne,ae)}return typeof ae=="string"&&ae!==""||typeof ae=="number"?(ae=""+ae,W!==null&&W.tag===6?(a(ne,W.sibling),W=f(W,ae),W.return=ne,ne=W):(a(ne,W),W=Su(ae,ne.mode,Ee),W.return=ne,ne=W),E(ne)):a(ne,W)}return tn}var ys=Mh(!0),bh=Mh(!1),No=dr(null),Ro=null,Ss=null,Pc=null;function Dc(){Pc=Ss=Ro=null}function Lc(t){var i=No.current;Ht(No),t._currentValue=i}function Ic(t,i,a){for(;t!==null;){var c=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),t===a)break;t=t.return}}function Ms(t,i){Ro=t,Pc=Ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(On=!0),t.firstContext=null)}function ii(t){var i=t._currentValue;if(Pc!==t)if(t={context:t,memoizedValue:i,next:null},Ss===null){if(Ro===null)throw Error(n(308));Ss=t,Ro.dependencies={lanes:0,firstContext:t}}else Ss=Ss.next=t;return i}var zr=null;function Fc(t){zr===null?zr=[t]:zr.push(t)}function Eh(t,i,a,c){var f=i.interleaved;return f===null?(a.next=a,Fc(i)):(a.next=f.next,f.next=a),i.interleaved=a,Wi(t,c)}function Wi(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var pr=!1;function kc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Xi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function mr(t,i,a){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(wt&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,Wi(t,a)}return f=c.interleaved,f===null?(i.next=i,Fc(c)):(i.next=f.next,f.next=i),c.interleaved=i,Wi(t,a)}function Po(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=t.pendingLanes,a|=c,i.lanes=a,Sn(t,a)}}function Th(t,i){var a=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,x=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};x===null?f=x=E:x=x.next=E,a=a.next}while(a!==null);x===null?f=x=i:x=x.next=i}else f=x=i;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:x,shared:c.shared,effects:c.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function Do(t,i,a,c){var f=t.updateQueue;pr=!1;var x=f.firstBaseUpdate,E=f.lastBaseUpdate,U=f.shared.pending;if(U!==null){f.shared.pending=null;var B=U,ue=B.next;B.next=null,E===null?x=ue:E.next=ue,E=B;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,U=_e.lastBaseUpdate,U!==E&&(U===null?_e.firstBaseUpdate=ue:U.next=ue,_e.lastBaseUpdate=B))}if(x!==null){var Se=f.baseState;E=0,_e=ue=B=null,U=x;do{var ve=U.lane,Be=U.eventTime;if((c&ve)===ve){_e!==null&&(_e=_e.next={eventTime:Be,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var We=t,qe=U;switch(ve=i,Be=a,qe.tag){case 1:if(We=qe.payload,typeof We=="function"){Se=We.call(Be,Se,ve);break e}Se=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=qe.payload,ve=typeof We=="function"?We.call(Be,Se,ve):We,ve==null)break e;Se=Y({},Se,ve);break e;case 2:pr=!0}}U.callback!==null&&U.lane!==0&&(t.flags|=64,ve=f.effects,ve===null?f.effects=[U]:ve.push(U))}else Be={eventTime:Be,lane:ve,tag:U.tag,payload:U.payload,callback:U.callback,next:null},_e===null?(ue=_e=Be,B=Se):_e=_e.next=Be,E|=ve;if(U=U.next,U===null){if(U=f.shared.pending,U===null)break;ve=U,U=ve.next,ve.next=null,f.lastBaseUpdate=ve,f.shared.pending=null}}while(!0);if(_e===null&&(B=Se),f.baseState=B,f.firstBaseUpdate=ue,f.lastBaseUpdate=_e,i=f.shared.interleaved,i!==null){f=i;do E|=f.lane,f=f.next;while(f!==i)}else x===null&&(f.shared.lanes=0);Vr|=E,t.lanes=E,t.memoizedState=Se}}function Ah(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var c=t[i],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(n(191,f));f.call(c)}}}var Sa={},Ci=dr(Sa),Ma=dr(Sa),ba=dr(Sa);function Hr(t){if(t===Sa)throw Error(n(174));return t}function Uc(t,i){switch(Bt(ba,i),Bt(Ma,t),Bt(Ci,Sa),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:M(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=M(i,t)}Ht(Ci),Bt(Ci,i)}function bs(){Ht(Ci),Ht(Ma),Ht(ba)}function Ch(t){Hr(ba.current);var i=Hr(Ci.current),a=M(i,t.type);i!==a&&(Bt(Ma,t),Bt(Ci,a))}function Oc(t){Ma.current===t&&(Ht(Ci),Ht(Ma))}var Xt=dr(0);function Lo(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Bc=[];function zc(){for(var t=0;t<Bc.length;t++)Bc[t]._workInProgressVersionPrimary=null;Bc.length=0}var Io=C.ReactCurrentDispatcher,Hc=C.ReactCurrentBatchConfig,Gr=0,qt=null,ln=null,fn=null,Fo=!1,Ea=!1,wa=0,Yg=0;function bn(){throw Error(n(321))}function Gc(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!pi(t[a],i[a]))return!1;return!0}function Vc(t,i,a,c,f,x){if(Gr=x,qt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Io.current=t===null||t.memoizedState===null?Jg:Qg,t=a(c,f),Ea){x=0;do{if(Ea=!1,wa=0,25<=x)throw Error(n(301));x+=1,fn=ln=null,i.updateQueue=null,Io.current=e0,t=a(c,f)}while(Ea)}if(Io.current=Oo,i=ln!==null&&ln.next!==null,Gr=0,fn=ln=qt=null,Fo=!1,i)throw Error(n(300));return t}function jc(){var t=wa!==0;return wa=0,t}function Ni(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?qt.memoizedState=fn=t:fn=fn.next=t,fn}function ri(){if(ln===null){var t=qt.alternate;t=t!==null?t.memoizedState:null}else t=ln.next;var i=fn===null?qt.memoizedState:fn.next;if(i!==null)fn=i,ln=t;else{if(t===null)throw Error(n(310));ln=t,t={memoizedState:ln.memoizedState,baseState:ln.baseState,baseQueue:ln.baseQueue,queue:ln.queue,next:null},fn===null?qt.memoizedState=fn=t:fn=fn.next=t}return fn}function Ta(t,i){return typeof i=="function"?i(t):i}function Wc(t){var i=ri(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var c=ln,f=c.baseQueue,x=a.pending;if(x!==null){if(f!==null){var E=f.next;f.next=x.next,x.next=E}c.baseQueue=f=x,a.pending=null}if(f!==null){x=f.next,c=c.baseState;var U=E=null,B=null,ue=x;do{var _e=ue.lane;if((Gr&_e)===_e)B!==null&&(B=B.next={lane:0,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),c=ue.hasEagerState?ue.eagerState:t(c,ue.action);else{var Se={lane:_e,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null};B===null?(U=B=Se,E=c):B=B.next=Se,qt.lanes|=_e,Vr|=_e}ue=ue.next}while(ue!==null&&ue!==x);B===null?E=c:B.next=U,pi(c,i.memoizedState)||(On=!0),i.memoizedState=c,i.baseState=E,i.baseQueue=B,a.lastRenderedState=c}if(t=a.interleaved,t!==null){f=t;do x=f.lane,qt.lanes|=x,Vr|=x,f=f.next;while(f!==t)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Xc(t){var i=ri(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var c=a.dispatch,f=a.pending,x=i.memoizedState;if(f!==null){a.pending=null;var E=f=f.next;do x=t(x,E.action),E=E.next;while(E!==f);pi(x,i.memoizedState)||(On=!0),i.memoizedState=x,i.baseQueue===null&&(i.baseState=x),a.lastRenderedState=x}return[x,c]}function Nh(){}function Rh(t,i){var a=qt,c=ri(),f=i(),x=!pi(c.memoizedState,f);if(x&&(c.memoizedState=f,On=!0),c=c.queue,qc(Lh.bind(null,a,c,t),[t]),c.getSnapshot!==i||x||fn!==null&&fn.memoizedState.tag&1){if(a.flags|=2048,Aa(9,Dh.bind(null,a,c,f,i),void 0,null),hn===null)throw Error(n(349));(Gr&30)!==0||Ph(a,i,f)}return f}function Ph(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=qt.updateQueue,i===null?(i={lastEffect:null,stores:null},qt.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Dh(t,i,a,c){i.value=a,i.getSnapshot=c,Ih(i)&&Fh(t)}function Lh(t,i,a){return a(function(){Ih(i)&&Fh(t)})}function Ih(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!pi(t,a)}catch{return!0}}function Fh(t){var i=Wi(t,1);i!==null&&_i(i,t,1,-1)}function kh(t){var i=Ni();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:t},i.queue=t,t=t.dispatch=Zg.bind(null,qt,t),[i.memoizedState,t]}function Aa(t,i,a,c){return t={tag:t,create:i,destroy:a,deps:c,next:null},i=qt.updateQueue,i===null?(i={lastEffect:null,stores:null},qt.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(c=a.next,a.next=t,t.next=c,i.lastEffect=t)),t}function Uh(){return ri().memoizedState}function ko(t,i,a,c){var f=Ni();qt.flags|=t,f.memoizedState=Aa(1|i,a,void 0,c===void 0?null:c)}function Uo(t,i,a,c){var f=ri();c=c===void 0?null:c;var x=void 0;if(ln!==null){var E=ln.memoizedState;if(x=E.destroy,c!==null&&Gc(c,E.deps)){f.memoizedState=Aa(i,a,x,c);return}}qt.flags|=t,f.memoizedState=Aa(1|i,a,x,c)}function Oh(t,i){return ko(8390656,8,t,i)}function qc(t,i){return Uo(2048,8,t,i)}function Bh(t,i){return Uo(4,2,t,i)}function zh(t,i){return Uo(4,4,t,i)}function Hh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Gh(t,i,a){return a=a!=null?a.concat([t]):null,Uo(4,4,Hh.bind(null,i,t),a)}function Yc(){}function Vh(t,i){var a=ri();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Gc(i,c[1])?c[0]:(a.memoizedState=[t,i],t)}function jh(t,i){var a=ri();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Gc(i,c[1])?c[0]:(t=t(),a.memoizedState=[t,i],t)}function Wh(t,i,a){return(Gr&21)===0?(t.baseState&&(t.baseState=!1,On=!0),t.memoizedState=a):(pi(a,i)||(a=on(),qt.lanes|=a,Vr|=a,t.baseState=!0),i)}function Kg(t,i){var a=ht;ht=a!==0&&4>a?a:4,t(!0);var c=Hc.transition;Hc.transition={};try{t(!1),i()}finally{ht=a,Hc.transition=c}}function Xh(){return ri().memoizedState}function $g(t,i,a){var c=_r(t);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},qh(t))Yh(i,a);else if(a=Eh(t,i,a,c),a!==null){var f=Pn();_i(a,t,c,f),Kh(a,i,c)}}function Zg(t,i,a){var c=_r(t),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(qh(t))Yh(i,f);else{var x=t.alternate;if(t.lanes===0&&(x===null||x.lanes===0)&&(x=i.lastRenderedReducer,x!==null))try{var E=i.lastRenderedState,U=x(E,a);if(f.hasEagerState=!0,f.eagerState=U,pi(U,E)){var B=i.interleaved;B===null?(f.next=f,Fc(i)):(f.next=B.next,B.next=f),i.interleaved=f;return}}catch{}finally{}a=Eh(t,i,f,c),a!==null&&(f=Pn(),_i(a,t,c,f),Kh(a,i,c))}}function qh(t){var i=t.alternate;return t===qt||i!==null&&i===qt}function Yh(t,i){Ea=Fo=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Kh(t,i,a){if((a&4194240)!==0){var c=i.lanes;c&=t.pendingLanes,a|=c,i.lanes=a,Sn(t,a)}}var Oo={readContext:ii,useCallback:bn,useContext:bn,useEffect:bn,useImperativeHandle:bn,useInsertionEffect:bn,useLayoutEffect:bn,useMemo:bn,useReducer:bn,useRef:bn,useState:bn,useDebugValue:bn,useDeferredValue:bn,useTransition:bn,useMutableSource:bn,useSyncExternalStore:bn,useId:bn,unstable_isNewReconciler:!1},Jg={readContext:ii,useCallback:function(t,i){return Ni().memoizedState=[t,i===void 0?null:i],t},useContext:ii,useEffect:Oh,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,ko(4194308,4,Hh.bind(null,i,t),a)},useLayoutEffect:function(t,i){return ko(4194308,4,t,i)},useInsertionEffect:function(t,i){return ko(4,2,t,i)},useMemo:function(t,i){var a=Ni();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var c=Ni();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},c.queue=t,t=t.dispatch=$g.bind(null,qt,t),[c.memoizedState,t]},useRef:function(t){var i=Ni();return t={current:t},i.memoizedState=t},useState:kh,useDebugValue:Yc,useDeferredValue:function(t){return Ni().memoizedState=t},useTransition:function(){var t=kh(!1),i=t[0];return t=Kg.bind(null,t[1]),Ni().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var c=qt,f=Ni();if(jt){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),hn===null)throw Error(n(349));(Gr&30)!==0||Ph(c,i,a)}f.memoizedState=a;var x={value:a,getSnapshot:i};return f.queue=x,Oh(Lh.bind(null,c,x,t),[t]),c.flags|=2048,Aa(9,Dh.bind(null,c,x,a,i),void 0,null),a},useId:function(){var t=Ni(),i=hn.identifierPrefix;if(jt){var a=ji,c=Vi;a=(c&~(1<<32-De(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=wa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Yg++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Qg={readContext:ii,useCallback:Vh,useContext:ii,useEffect:qc,useImperativeHandle:Gh,useInsertionEffect:Bh,useLayoutEffect:zh,useMemo:jh,useReducer:Wc,useRef:Uh,useState:function(){return Wc(Ta)},useDebugValue:Yc,useDeferredValue:function(t){var i=ri();return Wh(i,ln.memoizedState,t)},useTransition:function(){var t=Wc(Ta)[0],i=ri().memoizedState;return[t,i]},useMutableSource:Nh,useSyncExternalStore:Rh,useId:Xh,unstable_isNewReconciler:!1},e0={readContext:ii,useCallback:Vh,useContext:ii,useEffect:qc,useImperativeHandle:Gh,useInsertionEffect:Bh,useLayoutEffect:zh,useMemo:jh,useReducer:Xc,useRef:Uh,useState:function(){return Xc(Ta)},useDebugValue:Yc,useDeferredValue:function(t){var i=ri();return ln===null?i.memoizedState=t:Wh(i,ln.memoizedState,t)},useTransition:function(){var t=Xc(Ta)[0],i=ri().memoizedState;return[t,i]},useMutableSource:Nh,useSyncExternalStore:Rh,useId:Xh,unstable_isNewReconciler:!1};function xi(t,i){if(t&&t.defaultProps){i=Y({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function Kc(t,i,a,c){i=t.memoizedState,a=a(c,i),a=a==null?i:Y({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Bo={isMounted:function(t){return(t=t._reactInternals)?Nn(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var c=Pn(),f=_r(t),x=Xi(c,f);x.payload=i,a!=null&&(x.callback=a),i=mr(t,x,f),i!==null&&(_i(i,t,f,c),Po(i,t,f))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var c=Pn(),f=_r(t),x=Xi(c,f);x.tag=1,x.payload=i,a!=null&&(x.callback=a),i=mr(t,x,f),i!==null&&(_i(i,t,f,c),Po(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=Pn(),c=_r(t),f=Xi(a,c);f.tag=2,i!=null&&(f.callback=i),i=mr(t,f,c),i!==null&&(_i(i,t,c,a),Po(i,t,c))}};function $h(t,i,a,c,f,x,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,x,E):i.prototype&&i.prototype.isPureReactComponent?!ha(a,c)||!ha(f,x):!0}function Zh(t,i,a){var c=!1,f=fr,x=i.contextType;return typeof x=="object"&&x!==null?x=ii(x):(f=Un(i)?Ur:Mn.current,c=i.contextTypes,x=(c=c!=null)?xs(t,f):fr),i=new i(a,x),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Bo,t.stateNode=i,i._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=x),i}function Jh(t,i,a,c){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==t&&Bo.enqueueReplaceState(i,i.state,null)}function $c(t,i,a,c){var f=t.stateNode;f.props=a,f.state=t.memoizedState,f.refs={},kc(t);var x=i.contextType;typeof x=="object"&&x!==null?f.context=ii(x):(x=Un(i)?Ur:Mn.current,f.context=xs(t,x)),f.state=t.memoizedState,x=i.getDerivedStateFromProps,typeof x=="function"&&(Kc(t,i,x,a),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Bo.enqueueReplaceState(f,f.state,null),Do(t,a,f,c),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function Es(t,i){try{var a="",c=i;do a+=Ue(c),c=c.return;while(c);var f=a}catch(x){f=`
Error generating stack: `+x.message+`
`+x.stack}return{value:t,source:i,stack:f,digest:null}}function Zc(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function Jc(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var t0=typeof WeakMap=="function"?WeakMap:Map;function Qh(t,i,a){a=Xi(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Xo||(Xo=!0,hu=c),Jc(t,i)},a}function ep(t,i,a){a=Xi(-1,a),a.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;a.payload=function(){return c(f)},a.callback=function(){Jc(t,i)}}var x=t.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(a.callback=function(){Jc(t,i),typeof c!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),a}function tp(t,i,a){var c=t.pingCache;if(c===null){c=t.pingCache=new t0;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(a)||(f.add(a),t=m0.bind(null,t,i,a),i.then(t,t))}function np(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function ip(t,i,a,c,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Xi(-1,1),i.tag=2,mr(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var n0=C.ReactCurrentOwner,On=!1;function Rn(t,i,a,c){i.child=t===null?bh(i,null,a,c):ys(i,t.child,a,c)}function rp(t,i,a,c,f){a=a.render;var x=i.ref;return Ms(i,f),c=Vc(t,i,a,c,x,f),a=jc(),t!==null&&!On?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,qi(t,i,f)):(jt&&a&&Tc(i),i.flags|=1,Rn(t,i,c,f),i.child)}function sp(t,i,a,c,f){if(t===null){var x=a.type;return typeof x=="function"&&!yu(x)&&x.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=x,ap(t,i,x,c,f)):(t=Jo(a.type,null,c,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(x=t.child,(t.lanes&f)===0){var E=x.memoizedProps;if(a=a.compare,a=a!==null?a:ha,a(E,c)&&t.ref===i.ref)return qi(t,i,f)}return i.flags|=1,t=Sr(x,c),t.ref=i.ref,t.return=i,i.child=t}function ap(t,i,a,c,f){if(t!==null){var x=t.memoizedProps;if(ha(x,c)&&t.ref===i.ref)if(On=!1,i.pendingProps=c=x,(t.lanes&f)!==0)(t.flags&131072)!==0&&(On=!0);else return i.lanes=t.lanes,qi(t,i,f)}return Qc(t,i,a,c,f)}function op(t,i,a){var c=i.pendingProps,f=c.children,x=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Bt(Ts,qn),qn|=a;else{if((a&1073741824)===0)return t=x!==null?x.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Bt(Ts,qn),qn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=x!==null?x.baseLanes:a,Bt(Ts,qn),qn|=c}else x!==null?(c=x.baseLanes|a,i.memoizedState=null):c=a,Bt(Ts,qn),qn|=c;return Rn(t,i,f,a),i.child}function lp(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Qc(t,i,a,c,f){var x=Un(a)?Ur:Mn.current;return x=xs(i,x),Ms(i,f),a=Vc(t,i,a,c,x,f),c=jc(),t!==null&&!On?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,qi(t,i,f)):(jt&&c&&Tc(i),i.flags|=1,Rn(t,i,a,f),i.child)}function cp(t,i,a,c,f){if(Un(a)){var x=!0;bo(i)}else x=!1;if(Ms(i,f),i.stateNode===null)Ho(t,i),Zh(i,a,c),$c(i,a,c,f),c=!0;else if(t===null){var E=i.stateNode,U=i.memoizedProps;E.props=U;var B=E.context,ue=a.contextType;typeof ue=="object"&&ue!==null?ue=ii(ue):(ue=Un(a)?Ur:Mn.current,ue=xs(i,ue));var _e=a.getDerivedStateFromProps,Se=typeof _e=="function"||typeof E.getSnapshotBeforeUpdate=="function";Se||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==c||B!==ue)&&Jh(i,E,c,ue),pr=!1;var ve=i.memoizedState;E.state=ve,Do(i,c,E,f),B=i.memoizedState,U!==c||ve!==B||kn.current||pr?(typeof _e=="function"&&(Kc(i,a,_e,c),B=i.memoizedState),(U=pr||$h(i,a,U,c,ve,B,ue))?(Se||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=B),E.props=c,E.state=B,E.context=ue,c=U):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{E=i.stateNode,wh(t,i),U=i.memoizedProps,ue=i.type===i.elementType?U:xi(i.type,U),E.props=ue,Se=i.pendingProps,ve=E.context,B=a.contextType,typeof B=="object"&&B!==null?B=ii(B):(B=Un(a)?Ur:Mn.current,B=xs(i,B));var Be=a.getDerivedStateFromProps;(_e=typeof Be=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==Se||ve!==B)&&Jh(i,E,c,B),pr=!1,ve=i.memoizedState,E.state=ve,Do(i,c,E,f);var We=i.memoizedState;U!==Se||ve!==We||kn.current||pr?(typeof Be=="function"&&(Kc(i,a,Be,c),We=i.memoizedState),(ue=pr||$h(i,a,ue,c,ve,We,B)||!1)?(_e||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(c,We,B),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(c,We,B)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||U===t.memoizedProps&&ve===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&ve===t.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=We),E.props=c,E.state=We,E.context=B,c=ue):(typeof E.componentDidUpdate!="function"||U===t.memoizedProps&&ve===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&ve===t.memoizedState||(i.flags|=1024),c=!1)}return eu(t,i,a,c,x,f)}function eu(t,i,a,c,f,x){lp(t,i);var E=(i.flags&128)!==0;if(!c&&!E)return f&&ph(i,a,!1),qi(t,i,x);c=i.stateNode,n0.current=i;var U=E&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,t!==null&&E?(i.child=ys(i,t.child,null,x),i.child=ys(i,null,U,x)):Rn(t,i,U,x),i.memoizedState=c.state,f&&ph(i,a,!0),i.child}function up(t){var i=t.stateNode;i.pendingContext?fh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&fh(t,i.context,!1),Uc(t,i.containerInfo)}function dp(t,i,a,c,f){return _s(),Rc(f),i.flags|=256,Rn(t,i,a,c),i.child}var tu={dehydrated:null,treeContext:null,retryLane:0};function nu(t){return{baseLanes:t,cachePool:null,transitions:null}}function fp(t,i,a){var c=i.pendingProps,f=Xt.current,x=!1,E=(i.flags&128)!==0,U;if((U=E)||(U=t!==null&&t.memoizedState===null?!1:(f&2)!==0),U?(x=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Bt(Xt,f&1),t===null)return Nc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=c.children,t=c.fallback,x?(c=i.mode,x=i.child,E={mode:"hidden",children:E},(c&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=E):x=Qo(E,c,0,null),t=qr(t,c,a,null),x.return=i,t.return=i,x.sibling=t,i.child=x,i.child.memoizedState=nu(a),i.memoizedState=tu,t):iu(i,E));if(f=t.memoizedState,f!==null&&(U=f.dehydrated,U!==null))return i0(t,i,E,c,U,f,a);if(x){x=c.fallback,E=i.mode,f=t.child,U=f.sibling;var B={mode:"hidden",children:c.children};return(E&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=B,i.deletions=null):(c=Sr(f,B),c.subtreeFlags=f.subtreeFlags&14680064),U!==null?x=Sr(U,x):(x=qr(x,E,a,null),x.flags|=2),x.return=i,c.return=i,c.sibling=x,i.child=c,c=x,x=i.child,E=t.child.memoizedState,E=E===null?nu(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},x.memoizedState=E,x.childLanes=t.childLanes&~a,i.memoizedState=tu,c}return x=t.child,t=x.sibling,c=Sr(x,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=c,i.memoizedState=null,c}function iu(t,i){return i=Qo({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function zo(t,i,a,c){return c!==null&&Rc(c),ys(i,t.child,null,a),t=iu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function i0(t,i,a,c,f,x,E){if(a)return i.flags&256?(i.flags&=-257,c=Zc(Error(n(422))),zo(t,i,E,c)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(x=c.fallback,f=i.mode,c=Qo({mode:"visible",children:c.children},f,0,null),x=qr(x,f,E,null),x.flags|=2,c.return=i,x.return=i,c.sibling=x,i.child=c,(i.mode&1)!==0&&ys(i,t.child,null,E),i.child.memoizedState=nu(E),i.memoizedState=tu,x);if((i.mode&1)===0)return zo(t,i,E,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var U=c.dgst;return c=U,x=Error(n(419)),c=Zc(x,c,void 0),zo(t,i,E,c)}if(U=(E&t.childLanes)!==0,On||U){if(c=hn,c!==null){switch(E&-E){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|E))!==0?0:f,f!==0&&f!==x.retryLane&&(x.retryLane=f,Wi(t,f),_i(c,t,f,-1))}return _u(),c=Zc(Error(n(421))),zo(t,i,E,c)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=x0.bind(null,t),f._reactRetry=i,null):(t=x.treeContext,Xn=ur(f.nextSibling),Wn=i,jt=!0,mi=null,t!==null&&(ti[ni++]=Vi,ti[ni++]=ji,ti[ni++]=Or,Vi=t.id,ji=t.overflow,Or=i),i=iu(i,c.children),i.flags|=4096,i)}function hp(t,i,a){t.lanes|=i;var c=t.alternate;c!==null&&(c.lanes|=i),Ic(t.return,i,a)}function ru(t,i,a,c,f){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(x.isBackwards=i,x.rendering=null,x.renderingStartTime=0,x.last=c,x.tail=a,x.tailMode=f)}function pp(t,i,a){var c=i.pendingProps,f=c.revealOrder,x=c.tail;if(Rn(t,i,c.children,a),c=Xt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&hp(t,a,i);else if(t.tag===19)hp(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(Bt(Xt,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)t=a.alternate,t!==null&&Lo(t)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),ru(i,!1,f,a,x);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Lo(t)===null){i.child=f;break}t=f.sibling,f.sibling=a,a=f,f=t}ru(i,!0,a,null,x);break;case"together":ru(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ho(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function qi(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Vr|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=Sr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=Sr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function r0(t,i,a){switch(i.tag){case 3:up(i),_s();break;case 5:Ch(i);break;case 1:Un(i.type)&&bo(i);break;case 4:Uc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Bt(No,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Bt(Xt,Xt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?fp(t,i,a):(Bt(Xt,Xt.current&1),t=qi(t,i,a),t!==null?t.sibling:null);Bt(Xt,Xt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(t.flags&128)!==0){if(c)return pp(t,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Bt(Xt,Xt.current),c)break;return null;case 22:case 23:return i.lanes=0,op(t,i,a)}return qi(t,i,a)}var mp,su,xp,gp;mp=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},su=function(){},xp=function(t,i,a,c){var f=t.memoizedProps;if(f!==c){t=i.stateNode,Hr(Ci.current);var x=null;switch(a){case"input":f=at(t,f),c=at(t,c),x=[];break;case"select":f=Y({},f,{value:void 0}),c=Y({},c,{value:void 0}),x=[];break;case"textarea":f=Gt(t,f),c=Gt(t,c),x=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=yo)}Ke(a,c);var E;a=null;for(ue in f)if(!c.hasOwnProperty(ue)&&f.hasOwnProperty(ue)&&f[ue]!=null)if(ue==="style"){var U=f[ue];for(E in U)U.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else ue!=="dangerouslySetInnerHTML"&&ue!=="children"&&ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&ue!=="autoFocus"&&(o.hasOwnProperty(ue)?x||(x=[]):(x=x||[]).push(ue,null));for(ue in c){var B=c[ue];if(U=f!=null?f[ue]:void 0,c.hasOwnProperty(ue)&&B!==U&&(B!=null||U!=null))if(ue==="style")if(U){for(E in U)!U.hasOwnProperty(E)||B&&B.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in B)B.hasOwnProperty(E)&&U[E]!==B[E]&&(a||(a={}),a[E]=B[E])}else a||(x||(x=[]),x.push(ue,a)),a=B;else ue==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,U=U?U.__html:void 0,B!=null&&U!==B&&(x=x||[]).push(ue,B)):ue==="children"?typeof B!="string"&&typeof B!="number"||(x=x||[]).push(ue,""+B):ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&(o.hasOwnProperty(ue)?(B!=null&&ue==="onScroll"&&zt("scroll",t),x||U===B||(x=[])):(x=x||[]).push(ue,B))}a&&(x=x||[]).push("style",a);var ue=x;(i.updateQueue=ue)&&(i.flags|=4)}},gp=function(t,i,a,c){a!==c&&(i.flags|=4)};function Ca(t,i){if(!jt)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function En(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,c=0;if(i)for(var f=t.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=c,t.childLanes=a,i}function s0(t,i,a){var c=i.pendingProps;switch(Ac(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return En(i),null;case 1:return Un(i.type)&&Mo(),En(i),null;case 3:return c=i.stateNode,bs(),Ht(kn),Ht(Mn),zc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(Ao(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,mi!==null&&(xu(mi),mi=null))),su(t,i),En(i),null;case 5:Oc(i);var f=Hr(ba.current);if(a=i.type,t!==null&&i.stateNode!=null)xp(t,i,a,c,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(n(166));return En(i),null}if(t=Hr(Ci.current),Ao(i)){c=i.stateNode,a=i.type;var x=i.memoizedProps;switch(c[Ai]=i,c[va]=x,t=(i.mode&1)!==0,a){case"dialog":zt("cancel",c),zt("close",c);break;case"iframe":case"object":case"embed":zt("load",c);break;case"video":case"audio":for(f=0;f<ma.length;f++)zt(ma[f],c);break;case"source":zt("error",c);break;case"img":case"image":case"link":zt("error",c),zt("load",c);break;case"details":zt("toggle",c);break;case"input":vt(c,x),zt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!x.multiple},zt("invalid",c);break;case"textarea":j(c,x),zt("invalid",c)}Ke(a,x),f=null;for(var E in x)if(x.hasOwnProperty(E)){var U=x[E];E==="children"?typeof U=="string"?c.textContent!==U&&(x.suppressHydrationWarning!==!0&&_o(c.textContent,U,t),f=["children",U]):typeof U=="number"&&c.textContent!==""+U&&(x.suppressHydrationWarning!==!0&&_o(c.textContent,U,t),f=["children",""+U]):o.hasOwnProperty(E)&&U!=null&&E==="onScroll"&&zt("scroll",c)}switch(a){case"input":we(c),Ut(c,x,!0);break;case"textarea":we(c),Tt(c);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(c.onclick=yo)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{E=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=L(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=E.createElement(a,{is:c.is}):(t=E.createElement(a),a==="select"&&(E=t,c.multiple?E.multiple=!0:c.size&&(E.size=c.size))):t=E.createElementNS(t,a),t[Ai]=i,t[va]=c,mp(t,i,!1,!1),i.stateNode=t;e:{switch(E=Pe(a,c),a){case"dialog":zt("cancel",t),zt("close",t),f=c;break;case"iframe":case"object":case"embed":zt("load",t),f=c;break;case"video":case"audio":for(f=0;f<ma.length;f++)zt(ma[f],t);f=c;break;case"source":zt("error",t),f=c;break;case"img":case"image":case"link":zt("error",t),zt("load",t),f=c;break;case"details":zt("toggle",t),f=c;break;case"input":vt(t,c),f=at(t,c),zt("invalid",t);break;case"option":f=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},f=Y({},c,{value:void 0}),zt("invalid",t);break;case"textarea":j(t,c),f=Gt(t,c),zt("invalid",t);break;default:f=c}Ke(a,f),U=f;for(x in U)if(U.hasOwnProperty(x)){var B=U[x];x==="style"?xe(t,B):x==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&le(t,B)):x==="children"?typeof B=="string"?(a!=="textarea"||B!=="")&&fe(t,B):typeof B=="number"&&fe(t,""+B):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(o.hasOwnProperty(x)?B!=null&&x==="onScroll"&&zt("scroll",t):B!=null&&z(t,x,B,E))}switch(a){case"input":we(t),Ut(t,c,!1);break;case"textarea":we(t),Tt(t);break;case"option":c.value!=null&&t.setAttribute("value",""+de(c.value));break;case"select":t.multiple=!!c.multiple,x=c.value,x!=null?Dt(t,!!c.multiple,x,!1):c.defaultValue!=null&&Dt(t,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=yo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return En(i),null;case 6:if(t&&i.stateNode!=null)gp(t,i,t.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(n(166));if(a=Hr(ba.current),Hr(Ci.current),Ao(i)){if(c=i.stateNode,a=i.memoizedProps,c[Ai]=i,(x=c.nodeValue!==a)&&(t=Wn,t!==null))switch(t.tag){case 3:_o(c.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&_o(c.nodeValue,a,(t.mode&1)!==0)}x&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Ai]=i,i.stateNode=c}return En(i),null;case 13:if(Ht(Xt),c=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(jt&&Xn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)yh(),_s(),i.flags|=98560,x=!1;else if(x=Ao(i),c!==null&&c.dehydrated!==null){if(t===null){if(!x)throw Error(n(318));if(x=i.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(n(317));x[Ai]=i}else _s(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;En(i),x=!1}else mi!==null&&(xu(mi),mi=null),x=!0;if(!x)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Xt.current&1)!==0?cn===0&&(cn=3):_u())),i.updateQueue!==null&&(i.flags|=4),En(i),null);case 4:return bs(),su(t,i),t===null&&xa(i.stateNode.containerInfo),En(i),null;case 10:return Lc(i.type._context),En(i),null;case 17:return Un(i.type)&&Mo(),En(i),null;case 19:if(Ht(Xt),x=i.memoizedState,x===null)return En(i),null;if(c=(i.flags&128)!==0,E=x.rendering,E===null)if(c)Ca(x,!1);else{if(cn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(E=Lo(t),E!==null){for(i.flags|=128,Ca(x,!1),c=E.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)x=a,t=c,x.flags&=14680066,E=x.alternate,E===null?(x.childLanes=0,x.lanes=t,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=E.childLanes,x.lanes=E.lanes,x.child=E.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=E.memoizedProps,x.memoizedState=E.memoizedState,x.updateQueue=E.updateQueue,x.type=E.type,t=E.dependencies,x.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Bt(Xt,Xt.current&1|2),i.child}t=t.sibling}x.tail!==null&&Wt()>As&&(i.flags|=128,c=!0,Ca(x,!1),i.lanes=4194304)}else{if(!c)if(t=Lo(E),t!==null){if(i.flags|=128,c=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ca(x,!0),x.tail===null&&x.tailMode==="hidden"&&!E.alternate&&!jt)return En(i),null}else 2*Wt()-x.renderingStartTime>As&&a!==1073741824&&(i.flags|=128,c=!0,Ca(x,!1),i.lanes=4194304);x.isBackwards?(E.sibling=i.child,i.child=E):(a=x.last,a!==null?a.sibling=E:i.child=E,x.last=E)}return x.tail!==null?(i=x.tail,x.rendering=i,x.tail=i.sibling,x.renderingStartTime=Wt(),i.sibling=null,a=Xt.current,Bt(Xt,c?a&1|2:a&1),i):(En(i),null);case 22:case 23:return vu(),c=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(qn&1073741824)!==0&&(En(i),i.subtreeFlags&6&&(i.flags|=8192)):En(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function a0(t,i){switch(Ac(i),i.tag){case 1:return Un(i.type)&&Mo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return bs(),Ht(kn),Ht(Mn),zc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Oc(i),null;case 13:if(Ht(Xt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));_s()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ht(Xt),null;case 4:return bs(),null;case 10:return Lc(i.type._context),null;case 22:case 23:return vu(),null;case 24:return null;default:return null}}var Go=!1,wn=!1,o0=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function ws(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Qt(t,i,c)}else a.current=null}function au(t,i,a){try{a()}catch(c){Qt(t,i,c)}}var vp=!1;function l0(t,i){if(vc=oo,t=$f(),uc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,x=c.focusNode;c=c.focusOffset;try{a.nodeType,x.nodeType}catch{a=null;break e}var E=0,U=-1,B=-1,ue=0,_e=0,Se=t,ve=null;t:for(;;){for(var Be;Se!==a||f!==0&&Se.nodeType!==3||(U=E+f),Se!==x||c!==0&&Se.nodeType!==3||(B=E+c),Se.nodeType===3&&(E+=Se.nodeValue.length),(Be=Se.firstChild)!==null;)ve=Se,Se=Be;for(;;){if(Se===t)break t;if(ve===a&&++ue===f&&(U=E),ve===x&&++_e===c&&(B=E),(Be=Se.nextSibling)!==null)break;Se=ve,ve=Se.parentNode}Se=Be}a=U===-1||B===-1?null:{start:U,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(_c={focusedElem:t,selectionRange:a},oo=!1,Ve=i;Ve!==null;)if(i=Ve,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ve=t;else for(;Ve!==null;){i=Ve;try{var We=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(We!==null){var qe=We.memoizedProps,tn=We.memoizedState,ne=i.stateNode,W=ne.getSnapshotBeforeUpdate(i.elementType===i.type?qe:xi(i.type,qe),tn);ne.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var ae=i.stateNode.containerInfo;ae.nodeType===1?ae.textContent="":ae.nodeType===9&&ae.documentElement&&ae.removeChild(ae.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){Qt(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,Ve=t;break}Ve=i.return}return We=vp,vp=!1,We}function Na(t,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&t)===t){var x=f.destroy;f.destroy=void 0,x!==void 0&&au(i,a,x)}f=f.next}while(f!==c)}}function Vo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function ou(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function _p(t){var i=t.alternate;i!==null&&(t.alternate=null,_p(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Ai],delete i[va],delete i[bc],delete i[jg],delete i[Wg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function yp(t){return t.tag===5||t.tag===3||t.tag===4}function Sp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||yp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function lu(t,i,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=yo));else if(c!==4&&(t=t.child,t!==null))for(lu(t,i,a),t=t.sibling;t!==null;)lu(t,i,a),t=t.sibling}function cu(t,i,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(cu(t,i,a),t=t.sibling;t!==null;)cu(t,i,a),t=t.sibling}var gn=null,gi=!1;function xr(t,i,a){for(a=a.child;a!==null;)Mp(t,i,a),a=a.sibling}function Mp(t,i,a){if(J&&typeof J.onCommitFiberUnmount=="function")try{J.onCommitFiberUnmount(te,a)}catch{}switch(a.tag){case 5:wn||ws(a,i);case 6:var c=gn,f=gi;gn=null,xr(t,i,a),gn=c,gi=f,gn!==null&&(gi?(t=gn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):gn.removeChild(a.stateNode));break;case 18:gn!==null&&(gi?(t=gn,a=a.stateNode,t.nodeType===8?Mc(t.parentNode,a):t.nodeType===1&&Mc(t,a),oa(t)):Mc(gn,a.stateNode));break;case 4:c=gn,f=gi,gn=a.stateNode.containerInfo,gi=!0,xr(t,i,a),gn=c,gi=f;break;case 0:case 11:case 14:case 15:if(!wn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var x=f,E=x.destroy;x=x.tag,E!==void 0&&((x&2)!==0||(x&4)!==0)&&au(a,i,E),f=f.next}while(f!==c)}xr(t,i,a);break;case 1:if(!wn&&(ws(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(U){Qt(a,i,U)}xr(t,i,a);break;case 21:xr(t,i,a);break;case 22:a.mode&1?(wn=(c=wn)||a.memoizedState!==null,xr(t,i,a),wn=c):xr(t,i,a);break;default:xr(t,i,a)}}function bp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new o0),i.forEach(function(c){var f=g0.bind(null,t,c);a.has(c)||(a.add(c),c.then(f,f))})}}function vi(t,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var x=t,E=i,U=E;e:for(;U!==null;){switch(U.tag){case 5:gn=U.stateNode,gi=!1;break e;case 3:gn=U.stateNode.containerInfo,gi=!0;break e;case 4:gn=U.stateNode.containerInfo,gi=!0;break e}U=U.return}if(gn===null)throw Error(n(160));Mp(x,E,f),gn=null,gi=!1;var B=f.alternate;B!==null&&(B.return=null),f.return=null}catch(ue){Qt(f,i,ue)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Ep(i,t),i=i.sibling}function Ep(t,i){var a=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(vi(i,t),Ri(t),c&4){try{Na(3,t,t.return),Vo(3,t)}catch(qe){Qt(t,t.return,qe)}try{Na(5,t,t.return)}catch(qe){Qt(t,t.return,qe)}}break;case 1:vi(i,t),Ri(t),c&512&&a!==null&&ws(a,a.return);break;case 5:if(vi(i,t),Ri(t),c&512&&a!==null&&ws(a,a.return),t.flags&32){var f=t.stateNode;try{fe(f,"")}catch(qe){Qt(t,t.return,qe)}}if(c&4&&(f=t.stateNode,f!=null)){var x=t.memoizedProps,E=a!==null?a.memoizedProps:x,U=t.type,B=t.updateQueue;if(t.updateQueue=null,B!==null)try{U==="input"&&x.type==="radio"&&x.name!=null&&It(f,x),Pe(U,E);var ue=Pe(U,x);for(E=0;E<B.length;E+=2){var _e=B[E],Se=B[E+1];_e==="style"?xe(f,Se):_e==="dangerouslySetInnerHTML"?le(f,Se):_e==="children"?fe(f,Se):z(f,_e,Se,ue)}switch(U){case"input":ft(f,x);break;case"textarea":an(f,x);break;case"select":var ve=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!x.multiple;var Be=x.value;Be!=null?Dt(f,!!x.multiple,Be,!1):ve!==!!x.multiple&&(x.defaultValue!=null?Dt(f,!!x.multiple,x.defaultValue,!0):Dt(f,!!x.multiple,x.multiple?[]:"",!1))}f[va]=x}catch(qe){Qt(t,t.return,qe)}}break;case 6:if(vi(i,t),Ri(t),c&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,x=t.memoizedProps;try{f.nodeValue=x}catch(qe){Qt(t,t.return,qe)}}break;case 3:if(vi(i,t),Ri(t),c&4&&a!==null&&a.memoizedState.isDehydrated)try{oa(i.containerInfo)}catch(qe){Qt(t,t.return,qe)}break;case 4:vi(i,t),Ri(t);break;case 13:vi(i,t),Ri(t),f=t.child,f.flags&8192&&(x=f.memoizedState!==null,f.stateNode.isHidden=x,!x||f.alternate!==null&&f.alternate.memoizedState!==null||(fu=Wt())),c&4&&bp(t);break;case 22:if(_e=a!==null&&a.memoizedState!==null,t.mode&1?(wn=(ue=wn)||_e,vi(i,t),wn=ue):vi(i,t),Ri(t),c&8192){if(ue=t.memoizedState!==null,(t.stateNode.isHidden=ue)&&!_e&&(t.mode&1)!==0)for(Ve=t,_e=t.child;_e!==null;){for(Se=Ve=_e;Ve!==null;){switch(ve=Ve,Be=ve.child,ve.tag){case 0:case 11:case 14:case 15:Na(4,ve,ve.return);break;case 1:ws(ve,ve.return);var We=ve.stateNode;if(typeof We.componentWillUnmount=="function"){c=ve,a=ve.return;try{i=c,We.props=i.memoizedProps,We.state=i.memoizedState,We.componentWillUnmount()}catch(qe){Qt(c,a,qe)}}break;case 5:ws(ve,ve.return);break;case 22:if(ve.memoizedState!==null){Ap(Se);continue}}Be!==null?(Be.return=ve,Ve=Be):Ap(Se)}_e=_e.sibling}e:for(_e=null,Se=t;;){if(Se.tag===5){if(_e===null){_e=Se;try{f=Se.stateNode,ue?(x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(U=Se.stateNode,B=Se.memoizedProps.style,E=B!=null&&B.hasOwnProperty("display")?B.display:null,U.style.display=pe("display",E))}catch(qe){Qt(t,t.return,qe)}}}else if(Se.tag===6){if(_e===null)try{Se.stateNode.nodeValue=ue?"":Se.memoizedProps}catch(qe){Qt(t,t.return,qe)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===t)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===t)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===t)break e;_e===Se&&(_e=null),Se=Se.return}_e===Se&&(_e=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:vi(i,t),Ri(t),c&4&&bp(t);break;case 21:break;default:vi(i,t),Ri(t)}}function Ri(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(yp(a)){var c=a;break e}a=a.return}throw Error(n(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(fe(f,""),c.flags&=-33);var x=Sp(t);cu(t,x,f);break;case 3:case 4:var E=c.stateNode.containerInfo,U=Sp(t);lu(t,U,E);break;default:throw Error(n(161))}}catch(B){Qt(t,t.return,B)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function c0(t,i,a){Ve=t,wp(t)}function wp(t,i,a){for(var c=(t.mode&1)!==0;Ve!==null;){var f=Ve,x=f.child;if(f.tag===22&&c){var E=f.memoizedState!==null||Go;if(!E){var U=f.alternate,B=U!==null&&U.memoizedState!==null||wn;U=Go;var ue=wn;if(Go=E,(wn=B)&&!ue)for(Ve=f;Ve!==null;)E=Ve,B=E.child,E.tag===22&&E.memoizedState!==null?Cp(f):B!==null?(B.return=E,Ve=B):Cp(f);for(;x!==null;)Ve=x,wp(x),x=x.sibling;Ve=f,Go=U,wn=ue}Tp(t)}else(f.subtreeFlags&8772)!==0&&x!==null?(x.return=f,Ve=x):Tp(t)}}function Tp(t){for(;Ve!==null;){var i=Ve;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:wn||Vo(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!wn)if(a===null)c.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:xi(i.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var x=i.updateQueue;x!==null&&Ah(i,x,c);break;case 3:var E=i.updateQueue;if(E!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Ah(i,E,a)}break;case 5:var U=i.stateNode;if(a===null&&i.flags&4){a=U;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&a.focus();break;case"img":B.src&&(a.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ue=i.alternate;if(ue!==null){var _e=ue.memoizedState;if(_e!==null){var Se=_e.dehydrated;Se!==null&&oa(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}wn||i.flags&512&&ou(i)}catch(ve){Qt(i,i.return,ve)}}if(i===t){Ve=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ve=a;break}Ve=i.return}}function Ap(t){for(;Ve!==null;){var i=Ve;if(i===t){Ve=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ve=a;break}Ve=i.return}}function Cp(t){for(;Ve!==null;){var i=Ve;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Vo(4,i)}catch(B){Qt(i,a,B)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(B){Qt(i,f,B)}}var x=i.return;try{ou(i)}catch(B){Qt(i,x,B)}break;case 5:var E=i.return;try{ou(i)}catch(B){Qt(i,E,B)}}}catch(B){Qt(i,i.return,B)}if(i===t){Ve=null;break}var U=i.sibling;if(U!==null){U.return=i.return,Ve=U;break}Ve=i.return}}var u0=Math.ceil,jo=C.ReactCurrentDispatcher,uu=C.ReactCurrentOwner,si=C.ReactCurrentBatchConfig,wt=0,hn=null,rn=null,vn=0,qn=0,Ts=dr(0),cn=0,Ra=null,Vr=0,Wo=0,du=0,Pa=null,Bn=null,fu=0,As=1/0,Yi=null,Xo=!1,hu=null,gr=null,qo=!1,vr=null,Yo=0,Da=0,pu=null,Ko=-1,$o=0;function Pn(){return(wt&6)!==0?Wt():Ko!==-1?Ko:Ko=Wt()}function _r(t){return(t.mode&1)===0?1:(wt&2)!==0&&vn!==0?vn&-vn:qg.transition!==null?($o===0&&($o=on()),$o):(t=ht,t!==0||(t=window.event,t=t===void 0?16:Rf(t.type)),t)}function _i(t,i,a,c){if(50<Da)throw Da=0,pu=null,Error(n(185));en(t,a,c),((wt&2)===0||t!==hn)&&(t===hn&&((wt&2)===0&&(Wo|=a),cn===4&&yr(t,vn)),zn(t,c),a===1&&wt===0&&(i.mode&1)===0&&(As=Wt()+500,Eo&&hr()))}function zn(t,i){var a=t.callbackNode;Ot(t,i);var c=_t(t,t===hn?vn:0);if(c===0)a!==null&&ea(a),t.callbackNode=null,t.callbackPriority=0;else if(i=c&-c,t.callbackPriority!==i){if(a!=null&&ea(a),i===1)t.tag===0?Xg(Rp.bind(null,t)):mh(Rp.bind(null,t)),Gg(function(){(wt&6)===0&&hr()}),a=null;else{switch(ui(c)){case 1:a=ta;break;case 4:a=na;break;case 16:a=A;break;case 536870912:a=ce;break;default:a=A}a=Op(a,Np.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function Np(t,i){if(Ko=-1,$o=0,(wt&6)!==0)throw Error(n(327));var a=t.callbackNode;if(Cs()&&t.callbackNode!==a)return null;var c=_t(t,t===hn?vn:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||i)i=Zo(t,c);else{i=c;var f=wt;wt|=2;var x=Dp();(hn!==t||vn!==i)&&(Yi=null,As=Wt()+500,Wr(t,i));do try{h0();break}catch(U){Pp(t,U)}while(!0);Dc(),jo.current=x,wt=f,rn!==null?i=0:(hn=null,vn=0,i=cn)}if(i!==0){if(i===2&&(f=Pt(t),f!==0&&(c=f,i=mu(t,f))),i===1)throw a=Ra,Wr(t,0),yr(t,c),zn(t,Wt()),a;if(i===6)yr(t,c);else{if(f=t.current.alternate,(c&30)===0&&!d0(f)&&(i=Zo(t,c),i===2&&(x=Pt(t),x!==0&&(c=x,i=mu(t,x))),i===1))throw a=Ra,Wr(t,0),yr(t,c),zn(t,Wt()),a;switch(t.finishedWork=f,t.finishedLanes=c,i){case 0:case 1:throw Error(n(345));case 2:Xr(t,Bn,Yi);break;case 3:if(yr(t,c),(c&130023424)===c&&(i=fu+500-Wt(),10<i)){if(_t(t,0)!==0)break;if(f=t.suspendedLanes,(f&c)!==c){Pn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=Sc(Xr.bind(null,t,Bn,Yi),i);break}Xr(t,Bn,Yi);break;case 4:if(yr(t,c),(c&4194240)===c)break;for(i=t.eventTimes,f=-1;0<c;){var E=31-De(c);x=1<<E,E=i[E],E>f&&(f=E),c&=~x}if(c=f,c=Wt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*u0(c/1960))-c,10<c){t.timeoutHandle=Sc(Xr.bind(null,t,Bn,Yi),c);break}Xr(t,Bn,Yi);break;case 5:Xr(t,Bn,Yi);break;default:throw Error(n(329))}}}return zn(t,Wt()),t.callbackNode===a?Np.bind(null,t):null}function mu(t,i){var a=Pa;return t.current.memoizedState.isDehydrated&&(Wr(t,i).flags|=256),t=Zo(t,i),t!==2&&(i=Bn,Bn=a,i!==null&&xu(i)),t}function xu(t){Bn===null?Bn=t:Bn.push.apply(Bn,t)}function d0(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],x=f.getSnapshot;f=f.value;try{if(!pi(x(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function yr(t,i){for(i&=~du,i&=~Wo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-De(i),c=1<<a;t[a]=-1,i&=~c}}function Rp(t){if((wt&6)!==0)throw Error(n(327));Cs();var i=_t(t,0);if((i&1)===0)return zn(t,Wt()),null;var a=Zo(t,i);if(t.tag!==0&&a===2){var c=Pt(t);c!==0&&(i=c,a=mu(t,c))}if(a===1)throw a=Ra,Wr(t,0),yr(t,i),zn(t,Wt()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Xr(t,Bn,Yi),zn(t,Wt()),null}function gu(t,i){var a=wt;wt|=1;try{return t(i)}finally{wt=a,wt===0&&(As=Wt()+500,Eo&&hr())}}function jr(t){vr!==null&&vr.tag===0&&(wt&6)===0&&Cs();var i=wt;wt|=1;var a=si.transition,c=ht;try{if(si.transition=null,ht=1,t)return t()}finally{ht=c,si.transition=a,wt=i,(wt&6)===0&&hr()}}function vu(){qn=Ts.current,Ht(Ts)}function Wr(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,Hg(a)),rn!==null)for(a=rn.return;a!==null;){var c=a;switch(Ac(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Mo();break;case 3:bs(),Ht(kn),Ht(Mn),zc();break;case 5:Oc(c);break;case 4:bs();break;case 13:Ht(Xt);break;case 19:Ht(Xt);break;case 10:Lc(c.type._context);break;case 22:case 23:vu()}a=a.return}if(hn=t,rn=t=Sr(t.current,null),vn=qn=i,cn=0,Ra=null,du=Wo=Vr=0,Bn=Pa=null,zr!==null){for(i=0;i<zr.length;i++)if(a=zr[i],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,x=a.pending;if(x!==null){var E=x.next;x.next=f,c.next=E}a.pending=c}zr=null}return t}function Pp(t,i){do{var a=rn;try{if(Dc(),Io.current=Oo,Fo){for(var c=qt.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}Fo=!1}if(Gr=0,fn=ln=qt=null,Ea=!1,wa=0,uu.current=null,a===null||a.return===null){cn=1,Ra=i,rn=null;break}e:{var x=t,E=a.return,U=a,B=i;if(i=vn,U.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var ue=B,_e=U,Se=_e.tag;if((_e.mode&1)===0&&(Se===0||Se===11||Se===15)){var ve=_e.alternate;ve?(_e.updateQueue=ve.updateQueue,_e.memoizedState=ve.memoizedState,_e.lanes=ve.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Be=np(E);if(Be!==null){Be.flags&=-257,ip(Be,E,U,x,i),Be.mode&1&&tp(x,ue,i),i=Be,B=ue;var We=i.updateQueue;if(We===null){var qe=new Set;qe.add(B),i.updateQueue=qe}else We.add(B);break e}else{if((i&1)===0){tp(x,ue,i),_u();break e}B=Error(n(426))}}else if(jt&&U.mode&1){var tn=np(E);if(tn!==null){(tn.flags&65536)===0&&(tn.flags|=256),ip(tn,E,U,x,i),Rc(Es(B,U));break e}}x=B=Es(B,U),cn!==4&&(cn=2),Pa===null?Pa=[x]:Pa.push(x),x=E;do{switch(x.tag){case 3:x.flags|=65536,i&=-i,x.lanes|=i;var ne=Qh(x,B,i);Th(x,ne);break e;case 1:U=B;var W=x.type,ae=x.stateNode;if((x.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||ae!==null&&typeof ae.componentDidCatch=="function"&&(gr===null||!gr.has(ae)))){x.flags|=65536,i&=-i,x.lanes|=i;var Ee=ep(x,U,i);Th(x,Ee);break e}}x=x.return}while(x!==null)}Ip(a)}catch(Qe){i=Qe,rn===a&&a!==null&&(rn=a=a.return);continue}break}while(!0)}function Dp(){var t=jo.current;return jo.current=Oo,t===null?Oo:t}function _u(){(cn===0||cn===3||cn===2)&&(cn=4),hn===null||(Vr&268435455)===0&&(Wo&268435455)===0||yr(hn,vn)}function Zo(t,i){var a=wt;wt|=2;var c=Dp();(hn!==t||vn!==i)&&(Yi=null,Wr(t,i));do try{f0();break}catch(f){Pp(t,f)}while(!0);if(Dc(),wt=a,jo.current=c,rn!==null)throw Error(n(261));return hn=null,vn=0,cn}function f0(){for(;rn!==null;)Lp(rn)}function h0(){for(;rn!==null&&!so();)Lp(rn)}function Lp(t){var i=Up(t.alternate,t,qn);t.memoizedProps=t.pendingProps,i===null?Ip(t):rn=i,uu.current=null}function Ip(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=s0(a,i,qn),a!==null){rn=a;return}}else{if(a=a0(a,i),a!==null){a.flags&=32767,rn=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{cn=6,rn=null;return}}if(i=i.sibling,i!==null){rn=i;return}rn=i=t}while(i!==null);cn===0&&(cn=5)}function Xr(t,i,a){var c=ht,f=si.transition;try{si.transition=null,ht=1,p0(t,i,a,c)}finally{si.transition=f,ht=c}return null}function p0(t,i,a,c){do Cs();while(vr!==null);if((wt&6)!==0)throw Error(n(327));a=t.finishedWork;var f=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var x=a.lanes|a.childLanes;if(yt(t,x),t===hn&&(rn=hn=null,vn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||qo||(qo=!0,Op(A,function(){return Cs(),null})),x=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||x){x=si.transition,si.transition=null;var E=ht;ht=1;var U=wt;wt|=4,uu.current=null,l0(t,a),Ep(a,t),Ig(_c),oo=!!vc,_c=vc=null,t.current=a,c0(a),Zl(),wt=U,ht=E,si.transition=x}else t.current=a;if(qo&&(qo=!1,vr=t,Yo=f),x=t.pendingLanes,x===0&&(gr=null),Ie(a.stateNode),zn(t,Wt()),i!==null)for(c=t.onRecoverableError,a=0;a<i.length;a++)f=i[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(Xo)throw Xo=!1,t=hu,hu=null,t;return(Yo&1)!==0&&t.tag!==0&&Cs(),x=t.pendingLanes,(x&1)!==0?t===pu?Da++:(Da=0,pu=t):Da=0,hr(),null}function Cs(){if(vr!==null){var t=ui(Yo),i=si.transition,a=ht;try{if(si.transition=null,ht=16>t?16:t,vr===null)var c=!1;else{if(t=vr,vr=null,Yo=0,(wt&6)!==0)throw Error(n(331));var f=wt;for(wt|=4,Ve=t.current;Ve!==null;){var x=Ve,E=x.child;if((Ve.flags&16)!==0){var U=x.deletions;if(U!==null){for(var B=0;B<U.length;B++){var ue=U[B];for(Ve=ue;Ve!==null;){var _e=Ve;switch(_e.tag){case 0:case 11:case 15:Na(8,_e,x)}var Se=_e.child;if(Se!==null)Se.return=_e,Ve=Se;else for(;Ve!==null;){_e=Ve;var ve=_e.sibling,Be=_e.return;if(_p(_e),_e===ue){Ve=null;break}if(ve!==null){ve.return=Be,Ve=ve;break}Ve=Be}}}var We=x.alternate;if(We!==null){var qe=We.child;if(qe!==null){We.child=null;do{var tn=qe.sibling;qe.sibling=null,qe=tn}while(qe!==null)}}Ve=x}}if((x.subtreeFlags&2064)!==0&&E!==null)E.return=x,Ve=E;else e:for(;Ve!==null;){if(x=Ve,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:Na(9,x,x.return)}var ne=x.sibling;if(ne!==null){ne.return=x.return,Ve=ne;break e}Ve=x.return}}var W=t.current;for(Ve=W;Ve!==null;){E=Ve;var ae=E.child;if((E.subtreeFlags&2064)!==0&&ae!==null)ae.return=E,Ve=ae;else e:for(E=W;Ve!==null;){if(U=Ve,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:Vo(9,U)}}catch(Qe){Qt(U,U.return,Qe)}if(U===E){Ve=null;break e}var Ee=U.sibling;if(Ee!==null){Ee.return=U.return,Ve=Ee;break e}Ve=U.return}}if(wt=f,hr(),J&&typeof J.onPostCommitFiberRoot=="function")try{J.onPostCommitFiberRoot(te,t)}catch{}c=!0}return c}finally{ht=a,si.transition=i}}return!1}function Fp(t,i,a){i=Es(a,i),i=Qh(t,i,1),t=mr(t,i,1),i=Pn(),t!==null&&(en(t,1,i),zn(t,i))}function Qt(t,i,a){if(t.tag===3)Fp(t,t,a);else for(;i!==null;){if(i.tag===3){Fp(i,t,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(gr===null||!gr.has(c))){t=Es(a,t),t=ep(i,t,1),i=mr(i,t,1),t=Pn(),i!==null&&(en(i,1,t),zn(i,t));break}}i=i.return}}function m0(t,i,a){var c=t.pingCache;c!==null&&c.delete(i),i=Pn(),t.pingedLanes|=t.suspendedLanes&a,hn===t&&(vn&a)===a&&(cn===4||cn===3&&(vn&130023424)===vn&&500>Wt()-fu?Wr(t,0):du|=a),zn(t,i)}function kp(t,i){i===0&&((t.mode&1)===0?i=1:(i=dt,dt<<=1,(dt&130023424)===0&&(dt=4194304)));var a=Pn();t=Wi(t,i),t!==null&&(en(t,i,a),zn(t,a))}function x0(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),kp(t,a)}function g0(t,i){var a=0;switch(t.tag){case 13:var c=t.stateNode,f=t.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(n(314))}c!==null&&c.delete(i),kp(t,a)}var Up;Up=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||kn.current)On=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return On=!1,r0(t,i,a);On=(t.flags&131072)!==0}else On=!1,jt&&(i.flags&1048576)!==0&&xh(i,To,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Ho(t,i),t=i.pendingProps;var f=xs(i,Mn.current);Ms(i,a),f=Vc(null,i,c,t,f,a);var x=jc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Un(c)?(x=!0,bo(i)):x=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,kc(i),f.updater=Bo,i.stateNode=f,f._reactInternals=i,$c(i,c,t,a),i=eu(null,i,c,!0,x,a)):(i.tag=0,jt&&x&&Tc(i),Rn(null,i,f,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Ho(t,i),t=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=_0(c),t=xi(c,t),f){case 0:i=Qc(null,i,c,t,a);break e;case 1:i=cp(null,i,c,t,a);break e;case 11:i=rp(null,i,c,t,a);break e;case 14:i=sp(null,i,c,xi(c.type,t),a);break e}throw Error(n(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:xi(c,f),Qc(t,i,c,f,a);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:xi(c,f),cp(t,i,c,f,a);case 3:e:{if(up(i),t===null)throw Error(n(387));c=i.pendingProps,x=i.memoizedState,f=x.element,wh(t,i),Do(i,c,null,a);var E=i.memoizedState;if(c=E.element,x.isDehydrated)if(x={element:c,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=x,i.memoizedState=x,i.flags&256){f=Es(Error(n(423)),i),i=dp(t,i,c,a,f);break e}else if(c!==f){f=Es(Error(n(424)),i),i=dp(t,i,c,a,f);break e}else for(Xn=ur(i.stateNode.containerInfo.firstChild),Wn=i,jt=!0,mi=null,a=bh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(_s(),c===f){i=qi(t,i,a);break e}Rn(t,i,c,a)}i=i.child}return i;case 5:return Ch(i),t===null&&Nc(i),c=i.type,f=i.pendingProps,x=t!==null?t.memoizedProps:null,E=f.children,yc(c,f)?E=null:x!==null&&yc(c,x)&&(i.flags|=32),lp(t,i),Rn(t,i,E,a),i.child;case 6:return t===null&&Nc(i),null;case 13:return fp(t,i,a);case 4:return Uc(i,i.stateNode.containerInfo),c=i.pendingProps,t===null?i.child=ys(i,null,c,a):Rn(t,i,c,a),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:xi(c,f),rp(t,i,c,f,a);case 7:return Rn(t,i,i.pendingProps,a),i.child;case 8:return Rn(t,i,i.pendingProps.children,a),i.child;case 12:return Rn(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,x=i.memoizedProps,E=f.value,Bt(No,c._currentValue),c._currentValue=E,x!==null)if(pi(x.value,E)){if(x.children===f.children&&!kn.current){i=qi(t,i,a);break e}}else for(x=i.child,x!==null&&(x.return=i);x!==null;){var U=x.dependencies;if(U!==null){E=x.child;for(var B=U.firstContext;B!==null;){if(B.context===c){if(x.tag===1){B=Xi(-1,a&-a),B.tag=2;var ue=x.updateQueue;if(ue!==null){ue=ue.shared;var _e=ue.pending;_e===null?B.next=B:(B.next=_e.next,_e.next=B),ue.pending=B}}x.lanes|=a,B=x.alternate,B!==null&&(B.lanes|=a),Ic(x.return,a,i),U.lanes|=a;break}B=B.next}}else if(x.tag===10)E=x.type===i.type?null:x.child;else if(x.tag===18){if(E=x.return,E===null)throw Error(n(341));E.lanes|=a,U=E.alternate,U!==null&&(U.lanes|=a),Ic(E,a,i),E=x.sibling}else E=x.child;if(E!==null)E.return=x;else for(E=x;E!==null;){if(E===i){E=null;break}if(x=E.sibling,x!==null){x.return=E.return,E=x;break}E=E.return}x=E}Rn(t,i,f.children,a),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,Ms(i,a),f=ii(f),c=c(f),i.flags|=1,Rn(t,i,c,a),i.child;case 14:return c=i.type,f=xi(c,i.pendingProps),f=xi(c.type,f),sp(t,i,c,f,a);case 15:return ap(t,i,i.type,i.pendingProps,a);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:xi(c,f),Ho(t,i),i.tag=1,Un(c)?(t=!0,bo(i)):t=!1,Ms(i,a),Zh(i,c,f),$c(i,c,f,a),eu(null,i,c,!0,t,a);case 19:return pp(t,i,a);case 22:return op(t,i,a)}throw Error(n(156,i.tag))};function Op(t,i){return Fr(t,i)}function v0(t,i,a,c){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(t,i,a,c){return new v0(t,i,a,c)}function yu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _0(t){if(typeof t=="function")return yu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Z)return 11;if(t===Q)return 14}return 2}function Sr(t,i){var a=t.alternate;return a===null?(a=ai(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function Jo(t,i,a,c,f,x){var E=2;if(c=t,typeof t=="function")yu(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case O:return qr(a.children,f,x,i);case w:E=8,f|=8;break;case F:return t=ai(12,a,i,f|2),t.elementType=F,t.lanes=x,t;case ie:return t=ai(13,a,i,f),t.elementType=ie,t.lanes=x,t;case X:return t=ai(19,a,i,f),t.elementType=X,t.lanes=x,t;case ee:return Qo(a,f,x,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case k:E=10;break e;case H:E=9;break e;case Z:E=11;break e;case Q:E=14;break e;case he:E=16,c=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=ai(E,a,i,f),i.elementType=t,i.type=c,i.lanes=x,i}function qr(t,i,a,c){return t=ai(7,t,c,i),t.lanes=a,t}function Qo(t,i,a,c){return t=ai(22,t,c,i),t.elementType=ee,t.lanes=a,t.stateNode={isHidden:!1},t}function Su(t,i,a){return t=ai(6,t,null,i),t.lanes=a,t}function Mu(t,i,a){return i=ai(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function y0(t,i,a,c,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oe(0),this.expirationTimes=Oe(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oe(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function bu(t,i,a,c,f,x,E,U,B){return t=new y0(t,i,a,U,B),i===1?(i=1,x===!0&&(i|=8)):i=0,x=ai(3,null,null,i),t.current=x,x.stateNode=t,x.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},kc(x),t}function S0(t,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:c==null?null:""+c,children:t,containerInfo:i,implementation:a}}function Bp(t){if(!t)return fr;t=t._reactInternals;e:{if(Nn(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Un(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(Un(a))return hh(t,a,i)}return i}function zp(t,i,a,c,f,x,E,U,B){return t=bu(a,c,!0,t,f,x,E,U,B),t.context=Bp(null),a=t.current,c=Pn(),f=_r(a),x=Xi(c,f),x.callback=i??null,mr(a,x,f),t.current.lanes=f,en(t,f,c),zn(t,c),t}function el(t,i,a,c){var f=i.current,x=Pn(),E=_r(f);return a=Bp(a),i.context===null?i.context=a:i.pendingContext=a,i=Xi(x,E),i.payload={element:t},c=c===void 0?null:c,c!==null&&(i.callback=c),t=mr(f,i,E),t!==null&&(_i(t,f,E,x),Po(t,f,E)),E}function tl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Hp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function Eu(t,i){Hp(t,i),(t=t.alternate)&&Hp(t,i)}function M0(){return null}var Gp=typeof reportError=="function"?reportError:function(t){console.error(t)};function wu(t){this._internalRoot=t}nl.prototype.render=wu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));el(t,i,null,null)},nl.prototype.unmount=wu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;jr(function(){el(null,t,null,null)}),i[Hi]=null}};function nl(t){this._internalRoot=t}nl.prototype.unstable_scheduleHydration=function(t){if(t){var i=di();t={blockedOn:null,target:t,priority:i};for(var a=0;a<or.length&&i!==0&&i<or[a].priority;a++);or.splice(a,0,t),a===0&&Cf(t)}};function Tu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function il(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vp(){}function b0(t,i,a,c,f){if(f){if(typeof c=="function"){var x=c;c=function(){var ue=tl(E);x.call(ue)}}var E=zp(i,c,t,0,null,!1,!1,"",Vp);return t._reactRootContainer=E,t[Hi]=E.current,xa(t.nodeType===8?t.parentNode:t),jr(),E}for(;f=t.lastChild;)t.removeChild(f);if(typeof c=="function"){var U=c;c=function(){var ue=tl(B);U.call(ue)}}var B=bu(t,0,!1,null,null,!1,!1,"",Vp);return t._reactRootContainer=B,t[Hi]=B.current,xa(t.nodeType===8?t.parentNode:t),jr(function(){el(i,B,a,c)}),B}function rl(t,i,a,c,f){var x=a._reactRootContainer;if(x){var E=x;if(typeof f=="function"){var U=f;f=function(){var B=tl(E);U.call(B)}}el(i,E,t,f)}else E=b0(a,i,t,f,c);return tl(E)}zi=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=ze(i.pendingLanes);a!==0&&(Sn(i,a|1),zn(i,Wt()),(wt&6)===0&&(As=Wt()+500,hr()))}break;case 13:jr(function(){var c=Wi(t,1);if(c!==null){var f=Pn();_i(c,t,1,f)}}),Eu(t,1)}},Ct=function(t){if(t.tag===13){var i=Wi(t,134217728);if(i!==null){var a=Pn();_i(i,t,134217728,a)}Eu(t,134217728)}},Vt=function(t){if(t.tag===13){var i=_r(t),a=Wi(t,i);if(a!==null){var c=Pn();_i(a,t,i,c)}Eu(t,i)}},di=function(){return ht},Ft=function(t,i){var a=ht;try{return ht=t,i()}finally{ht=a}},tt=function(t,i,a){switch(i){case"input":if(ft(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==t&&c.form===t.form){var f=So(c);if(!f)throw Error(n(90));nt(c),ft(c,f)}}}break;case"textarea":an(t,a);break;case"select":i=a.value,i!=null&&Dt(t,!!a.multiple,i,!1)}},ke=gu,ge=jr;var E0={usingClientEntryPoint:!1,Events:[_a,ps,So,me,Ne,gu]},La={findFiberByHostInstance:kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},w0={bundleType:La.bundleType,version:La.version,rendererPackageName:La.rendererPackageName,rendererConfig:La.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ir(t),t===null?null:t.stateNode},findFiberByHostInstance:La.findFiberByHostInstance||M0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sl.isDisabled&&sl.supportsFiber)try{te=sl.inject(w0),J=sl}catch{}}return Hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E0,Hn.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tu(i))throw Error(n(200));return S0(t,i,null,a)},Hn.createRoot=function(t,i){if(!Tu(t))throw Error(n(299));var a=!1,c="",f=Gp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=bu(t,1,!1,null,null,a,!1,c,f),t[Hi]=i.current,xa(t.nodeType===8?t.parentNode:t),new wu(i)},Hn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Ir(i),t=t===null?null:t.stateNode,t},Hn.flushSync=function(t){return jr(t)},Hn.hydrate=function(t,i,a){if(!il(i))throw Error(n(200));return rl(null,t,i,!0,a)},Hn.hydrateRoot=function(t,i,a){if(!Tu(t))throw Error(n(405));var c=a!=null&&a.hydratedSources||null,f=!1,x="",E=Gp;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(x=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),i=zp(i,null,t,1,a??null,f,!1,x,E),t[Hi]=i.current,xa(t),c)for(t=0;t<c.length;t++)a=c[t],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new nl(i)},Hn.render=function(t,i,a){if(!il(i))throw Error(n(200));return rl(null,t,i,!1,a)},Hn.unmountComponentAtNode=function(t){if(!il(t))throw Error(n(40));return t._reactRootContainer?(jr(function(){rl(null,null,t,!1,function(){t._reactRootContainer=null,t[Hi]=null})}),!0):!1},Hn.unstable_batchedUpdates=gu,Hn.unstable_renderSubtreeIntoContainer=function(t,i,a,c){if(!il(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return rl(t,i,a,!1,c)},Hn.version="18.3.1-next-f1338f8080-20240426",Hn}var Jp;function k0(){if(Jp)return Nu.exports;Jp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Nu.exports=F0(),Nu.exports}var Qp;function U0(){if(Qp)return al;Qp=1;var s=k0();return al.createRoot=s.createRoot,al.hydrateRoot=s.hydrateRoot,al}var O0=U0();const B0=nx(O0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ix=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var H0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=et.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:d,...h},m)=>et.createElement("svg",{ref:m,...H0,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:ix("lucide",o),...h},[...d.map(([p,v])=>et.createElement(p,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=(s,e)=>{const n=et.forwardRef(({className:r,...o},l)=>et.createElement(G0,{ref:l,iconNode:e,className:ix(`lucide-${z0(s)}`,r),...o}));return n.displayName=`${s}`,n};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],j0=$t("ArrowLeft",V0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Wa=$t("ArrowRight",W0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],em=$t("ArrowUpRight",X0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],rx=$t("Award",q0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=[["path",{d:"M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z",key:"109fe4"}],["path",{d:"M18 11V4H6v7",key:"mon5oj"}],["path",{d:"M15 22v-4a3 3 0 0 0-3-3a3 3 0 0 0-3 3v4",key:"1k4jtn"}],["path",{d:"M22 11V9",key:"3zbp94"}],["path",{d:"M2 11V9",key:"1x5rnq"}],["path",{d:"M6 4V2",key:"1rsq15"}],["path",{d:"M18 4V2",key:"1jsdo1"}],["path",{d:"M10 4V2",key:"75d9ly"}],["path",{d:"M14 4V2",key:"8nj3z6"}]],sx=$t("Castle",Y0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],$0=$t("Check",K0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],ax=$t("ChevronRight",Z0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],ox=$t("CircleCheck",J0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],ev=$t("Clock",Q0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],nv=$t("Compass",tv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],rv=$t("Copy",iv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],av=$t("Eye",sv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],lv=$t("Mail",ov);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],af=$t("MapPin",cv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]],dv=$t("Maximize2",uv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",key:"143lza"}],["path",{d:"M11 12 5.12 2.2",key:"qhuxz6"}],["path",{d:"m13 12 5.88-9.8",key:"hbye0f"}],["path",{d:"M8 7h8",key:"i86dvs"}],["circle",{cx:"12",cy:"17",r:"5",key:"qbz8iq"}],["path",{d:"M12 18v-2h-.5",key:"fawc4q"}]],hv=$t("Medal",fv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],mv=$t("Phone",pv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],of=$t("Search",xv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],vv=$t("Send",gv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],lx=$t("Shield",_v);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]],lf=$t("Trophy",yv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],Mv=$t("Users",Sv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Wl=$t("X",bv),Ev=({onOpenCommandPalette:s,lang:e,setLang:n,isMotionPaused:r,setIsMotionPaused:o,textSize:l,setTextSize:d})=>{const[h,m]=et.useState(!1);return et.useEffect(()=>{const p=()=>{m(window.scrollY>40)};return window.addEventListener("scroll",p,{passive:!0}),()=>window.removeEventListener("scroll",p)},[]),u.jsxs("header",{className:"fixed top-0 left-0 right-0 z-50 transition-all duration-300",children:[u.jsx("div",{className:"bg-[#FBF8F7] border-b border-[#E6DAD8] text-[12px] font-sans py-1.5 px-4 sm:px-6",children:u.jsxs("div",{className:"max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2",children:[u.jsxs("div",{className:"flex items-center gap-4 text-[#5C5350]",children:[u.jsx("span",{className:"hidden sm:inline",children:"Registered society · Private sports club · Bengaluru"}),u.jsx("span",{className:"hidden md:inline",children:"·"}),u.jsxs("a",{href:"mailto:karnatakastatehockey@gmail.com",className:"hover:text-[#E3000F] transition-colors flex items-center gap-1",children:[u.jsx(lv,{className:"w-3 h-3"}),u.jsx("span",{children:"karnatakastatehockey@gmail.com"})]}),u.jsx("span",{className:"hidden lg:inline",children:"·"}),u.jsxs("a",{href:"tel:+917899236355",className:"hover:text-[#E3000F] transition-colors flex items-center gap-1",children:[u.jsx(mv,{className:"w-3 h-3"}),u.jsx("span",{children:"78992 36355"})]})]}),u.jsxs("div",{className:"flex items-center gap-1.5 text-[11px] font-mono",children:[u.jsx("button",{onClick:()=>d("sm"),className:`px-1.5 py-0.5 border rounded ${l==="sm"?"bg-black text-white border-black":"border-[#8F8482] text-black hover:border-black"}`,"aria-label":"Decrease text size",children:"A−"}),u.jsx("button",{onClick:()=>d("md"),className:`px-1.5 py-0.5 border rounded ${l==="md"?"bg-black text-white border-black":"border-[#8F8482] text-black hover:border-black"}`,"aria-label":"Default text size",children:"A"}),u.jsx("button",{onClick:()=>d("lg"),className:`px-1.5 py-0.5 border rounded ${l==="lg"?"bg-black text-white border-black":"border-[#8F8482] text-black hover:border-black"}`,"aria-label":"Increase text size",children:"A+"}),u.jsx("button",{onClick:()=>o(!r),className:`px-2 py-0.5 border rounded transition-colors ${r?"bg-black text-white border-black":"border-[#8F8482] text-black hover:border-black"}`,"aria-pressed":r,children:r?"Play motion":"Pause motion"}),u.jsx("button",{onClick:()=>n("en"),className:`px-2 py-0.5 border rounded font-semibold ${e==="en"?"bg-[#E3000F] text-white border-[#E3000F]":"border-[#8F8482] text-black"}`,children:"EN"}),u.jsx("button",{onClick:()=>n("kn"),className:`px-2 py-0.5 border rounded font-bold ${e==="kn"?"bg-[#E3000F] text-white border-[#E3000F]":"border-[#8F8482] text-black"}`,lang:"kn",children:"ಕನ್ನಡ"})]})]})}),u.jsx("div",{className:`px-4 sm:px-6 transition-all duration-300 ${h?"bg-white/95 backdrop-blur-md border-b border-[#E6DAD8] py-2.5 shadow-sm":"bg-white/80 backdrop-blur-sm border-b border-neutral-100 py-3.5"}`,children:u.jsxs("div",{className:"max-w-7xl mx-auto flex items-center justify-between",children:[u.jsxs("a",{href:"#overture",className:"flex items-center gap-3 group cursor-pointer",children:[u.jsx("img",{src:"/ksha-crest.png",alt:"KSHA Official Seal",className:"w-11 h-11 object-contain transition-transform group-hover:scale-105"}),u.jsxs("div",{className:"flex flex-col justify-center text-left",children:[u.jsx("span",{className:"disp text-2xl sm:text-[26px] tracking-[0.04em] text-black group-hover:text-[#E3000F] transition-colors leading-none block",children:"KSHA"}),u.jsx("span",{className:"text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#5C5350] whitespace-nowrap leading-tight block mt-1",children:"Estb 1937 · Bengaluru"})]})]}),u.jsxs("nav",{"aria-label":"Main",className:"hidden lg:flex items-center gap-1 font-mono text-xs uppercase tracking-[0.14em]",children:[u.jsx("a",{href:"#cup",className:"px-3 py-2 text-black hover:text-[#E3000F] transition-colors font-medium",children:e==="kn"?"ಟ್ರಾವಂಕೋರ್ ಕಪ್":"The Cup"}),u.jsx("a",{href:"#battlegrounds",className:"px-3 py-2 text-black hover:text-[#E3000F] transition-colors font-medium",children:e==="kn"?"ಲೀಗ್":"The League"}),u.jsx("a",{href:"#cradles",className:"px-3 py-2 text-black hover:text-[#E3000F] transition-colors font-medium",children:e==="kn"?"ಅಕಾಡೆಮಿ & ಜಿಲ್ಲೆಗಳು":"The Heirs"}),u.jsx("a",{href:"#immortals",className:"px-3 py-2 text-black hover:text-[#E3000F] transition-colors font-medium",children:e==="kn"?"೧೫ ದಿಗ್ಗಜರು":"The Legends"}),u.jsx("a",{href:"#colosseum",className:"px-3 py-2 text-black hover:text-[#E3000F] transition-colors font-medium",children:e==="kn"?"ಕ್ರೀಡಾಂಗಣ":"The Stadium"}),u.jsx("a",{href:"#pavilion",className:"px-3 py-2 text-black hover:text-[#E3000F] transition-colors font-medium",children:e==="kn"?"ಪ್ರೈವೇಟ್ ಕ್ಲಬ್":"The Club"}),u.jsx("a",{href:"#booking-facilities",className:"px-3 py-2 text-black hover:text-[#E3000F] transition-colors font-medium",children:e==="kn"?"ಬುಕಿಂಗ್ಸ್":"Bookings"}),u.jsx("a",{href:"#vault",className:"px-3 py-2 text-black hover:text-[#E3000F] transition-colors font-medium",children:e==="kn"?"ಆಡಳಿತ":"Gazette"}),u.jsx("a",{href:"#booking-facilities",className:"ml-2 px-4 py-2 bg-[#E3000F] hover:bg-[#9E000B] text-white font-bold transition-all shadow-sm",children:e==="kn"?"ಬುಕ್ ಮಾಡಿ":"Book Hall"})]}),u.jsx("div",{className:"flex items-center gap-2.5",children:u.jsxs("button",{onClick:s,className:"flex items-center gap-2 px-3 py-1.5 rounded bg-neutral-50 border border-neutral-300 hover:border-[#E3000F] text-neutral-900 transition-all text-xs font-mono group shadow-xs",children:[u.jsx(of,{className:"w-3.5 h-3.5 text-[#5C5350] group-hover:text-[#E3000F] transition-colors"}),u.jsx("span",{className:"hidden sm:inline font-medium",children:"Directory"}),u.jsx("kbd",{className:"hidden sm:inline-block px-1.5 py-0.5 text-[9px] bg-white border border-neutral-300 rounded text-neutral-600 group-hover:text-black",children:"⌘K"})]})})]})})]})};class wv{constructor(){jp(this,"isMuted",!0)}playStickStrike(){}playSplitFlap(){}playGloryChime(){}playGoalRoar(){}toggleAmbientDrone(e){return!1}setMute(e){this.isMuted=!0}}const gt=new wv,ol=[{id:"overture",num:"◆",name:"Overture",kannada:"ಮುನ್ನುಡಿ"},{id:"cup",num:"I",name:"The Cup",kannada:"ಟ್ರಾವಂಕೂರ್ ಕಪ್"},{id:"battlegrounds",num:"II",name:"The League",kannada:"ಲೀಗ್ಸ್"},{id:"cradles",num:"III",name:"The Heirs",kannada:"೧೮ ಜಿಲ್ಲೆಗಳು"},{id:"immortals",num:"IV",name:"The Legends",kannada:"ದಿಗ್ಗಜರು"},{id:"club",num:"V",name:"The Club",kannada:"ಕ್ಲಬ್ ಹೌಸ್"},{id:"vault",num:"VI",name:"The Vault",kannada:"ದಾಖಲೆಗಳು"},{id:"join",num:"VII",name:"Finale",kannada:"ಮುಕ್ತಾಯ"}],Tv=({lang:s})=>{const[e,n]=et.useState("overture");et.useEffect(()=>{const o=()=>{const l=window.scrollY+window.innerHeight*.35;for(let d=ol.length-1;d>=0;d--){const h=document.getElementById(ol[d].id);if(h&&h.offsetTop<=l){n(ol[d].id);break}}};return window.addEventListener("scroll",o,{passive:!0}),()=>window.removeEventListener("scroll",o)},[]);const r=o=>{gt.playSplitFlap();const l=document.getElementById(o);l&&l.scrollIntoView({behavior:"smooth"})};return u.jsx("nav",{"aria-label":"Chapter navigation",className:"fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center select-none pointer-events-auto",children:u.jsx("div",{className:"flex flex-col items-center gap-1.5 bg-white/90 backdrop-blur-md py-3 px-1.5 rounded-full border border-neutral-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.08)]",children:ol.map(o=>{const l=e===o.id;return u.jsxs("button",{onClick:()=>r(o.id),className:"group relative flex items-center justify-center w-8 h-8 rounded-full focus:outline-none","aria-label":`${o.name} (${o.num})`,children:[u.jsx("div",{className:"absolute right-full mr-3.5 top-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-1 group-hover:translate-x-0 z-50",children:u.jsxs("div",{className:"bg-[#111111] text-white text-[11px] font-mono tracking-wider uppercase px-2.5 py-1 rounded shadow-lg whitespace-nowrap flex items-center gap-1.5",children:[u.jsx("span",{className:"text-ksha-red font-bold",children:o.num}),u.jsx("span",{children:s==="kn"?o.kannada:o.name})]})}),u.jsx("span",{className:`font-cinzel text-[11px] font-bold rounded-full transition-all duration-200 flex items-center justify-center ${l?"w-7 h-7 bg-ksha-red text-white shadow-md shadow-ksha-red/40 scale-105":"w-6 h-6 text-neutral-500 hover:text-black hover:bg-neutral-100"}`,children:o.num})]},o.id)})})})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cf="186",Av=0,tm=1,Cv=2,Dl=1,Nv=2,Ga=3,ts=0,Vn=1,er=2,nr=0,js=1,nm=2,im=3,rm=4,Rv=5,Gs=100,Pv=101,Dv=102,Lv=103,Iv=104,Fv=200,kv=201,Uv=202,Ov=203,cx=204,ux=205,Bv=206,zv=207,Hv=208,Gv=209,Vv=210,jv=211,Wv=212,Xv=213,qv=214,fd=0,hd=1,pd=2,qa=3,md=4,xd=5,gd=6,vd=7,dx=0,Yv=1,Kv=2,ki=0,fx=1,hx=2,px=3,mx=4,xx=5,gx=6,vx=7,_x=300,ns=301,qs=302,Du=303,Lu=304,Xl=306,_d=1e3,tr=1001,yd=1002,_n=1003,$v=1004,ll=1005,Cn=1006,Iu=1007,Qr=1008,$n=1009,yx=1010,Sx=1011,Ya=1012,uf=1013,Ui=1014,Ii=1015,Oi=1016,df=1017,ff=1018,Ka=1020,Mx=35902,bx=35899,Ex=1021,wx=1022,Ei=1023,rr=1026,es=1027,Tx=1028,hf=1029,is=1030,pf=1031,mf=1033,Ll=33776,Il=33777,Fl=33778,kl=33779,Sd=35840,Md=35841,bd=35842,Ed=35843,wd=36196,Td=37492,Ad=37496,Cd=37488,Nd=37489,Ol=37490,Rd=37491,Pd=37808,Dd=37809,Ld=37810,Id=37811,Fd=37812,kd=37813,Ud=37814,Od=37815,Bd=37816,zd=37817,Hd=37818,Gd=37819,Vd=37820,jd=37821,Wd=36492,Xd=36494,qd=36495,Yd=36283,Kd=36284,Bl=36285,$d=36286,Zv=3200,Zd=0,Jv=1,Nr="",li="srgb",zl="srgb-linear",Hl="linear",kt="srgb",Fu=7680,Qv=519,e_=512,t_=513,n_=514,xf=515,i_=516,r_=517,gf=518,s_=519,a_=35044,sm="300 es",Fi=2e3,$a=2001;function o_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Gl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function l_(){const s=Gl("canvas");return s.style.display="block",s}const am={};function om(...s){const e="THREE."+s.shift();console.log(e,...s)}function Ax(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=s[1];n&&n.isStackTrace?s[0]+=" "+n.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function lt(...s){s=Ax(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...s)}}function Rt(...s){s=Ax(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...s)}}function Ws(...s){const e=s.join(" ");e in am||(am[e]=!0,lt(...s))}function c_(s,e,n){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}const u_={[fd]:hd,[pd]:gd,[md]:vd,[qa]:xd,[hd]:fd,[gd]:pd,[vd]:md,[xd]:qa};class rs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(n);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,d=o.length;l<d;l++)o[l].call(this,e);e.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ku=Math.PI/180,Jd=180/Math.PI;function Ja(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Tn[s&255]+Tn[s>>8&255]+Tn[s>>16&255]+Tn[s>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[n&63|128]+Tn[n>>8&255]+"-"+Tn[n>>16&255]+Tn[n>>24&255]+Tn[r&255]+Tn[r>>8&255]+Tn[r>>16&255]+Tn[r>>24&255]).toLowerCase()}function Mt(s,e,n){return Math.max(e,Math.min(n,s))}function d_(s,e){return(s%e+e)%e}function Uu(s,e,n){return(1-n)*s+n*e}function Fa(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Gn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Mf=class Mf{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),l=this.x-e.x,d=this.y-e.y;return this.x=l*r-d*o+e.x,this.y=l*o+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Mf.prototype.isVector2=!0;let Et=Mf;class Ks{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,l,d,h){let m=r[o+0],p=r[o+1],v=r[o+2],S=r[o+3],g=l[d+0],b=l[d+1],T=l[d+2],N=l[d+3];if(S!==N||m!==g||p!==b||v!==T){let y=m*g+p*b+v*T+S*N;y<0&&(g=-g,b=-b,T=-T,N=-N,y=-y);let _=1-h;if(y<.9995){const I=Math.acos(y),z=Math.sin(I);_=Math.sin(_*I)/z,h=Math.sin(h*I)/z,m=m*_+g*h,p=p*_+b*h,v=v*_+T*h,S=S*_+N*h}else{m=m*_+g*h,p=p*_+b*h,v=v*_+T*h,S=S*_+N*h;const I=1/Math.sqrt(m*m+p*p+v*v+S*S);m*=I,p*=I,v*=I,S*=I}}e[n]=m,e[n+1]=p,e[n+2]=v,e[n+3]=S}static multiplyQuaternionsFlat(e,n,r,o,l,d){const h=r[o],m=r[o+1],p=r[o+2],v=r[o+3],S=l[d],g=l[d+1],b=l[d+2],T=l[d+3];return e[n]=h*T+v*S+m*b-p*g,e[n+1]=m*T+v*g+p*S-h*b,e[n+2]=p*T+v*b+h*g-m*S,e[n+3]=v*T-h*S-m*g-p*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,l=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(r/2),v=h(o/2),S=h(l/2),g=m(r/2),b=m(o/2),T=m(l/2);switch(d){case"XYZ":this._x=g*v*S+p*b*T,this._y=p*b*S-g*v*T,this._z=p*v*T+g*b*S,this._w=p*v*S-g*b*T;break;case"YXZ":this._x=g*v*S+p*b*T,this._y=p*b*S-g*v*T,this._z=p*v*T-g*b*S,this._w=p*v*S+g*b*T;break;case"ZXY":this._x=g*v*S-p*b*T,this._y=p*b*S+g*v*T,this._z=p*v*T+g*b*S,this._w=p*v*S-g*b*T;break;case"ZYX":this._x=g*v*S-p*b*T,this._y=p*b*S+g*v*T,this._z=p*v*T-g*b*S,this._w=p*v*S+g*b*T;break;case"YZX":this._x=g*v*S+p*b*T,this._y=p*b*S+g*v*T,this._z=p*v*T-g*b*S,this._w=p*v*S-g*b*T;break;case"XZY":this._x=g*v*S-p*b*T,this._y=p*b*S-g*v*T,this._z=p*v*T+g*b*S,this._w=p*v*S+g*b*T;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],l=n[8],d=n[1],h=n[5],m=n[9],p=n[2],v=n[6],S=n[10],g=r+h+S;if(g>0){const b=.5/Math.sqrt(g+1);this._w=.25/b,this._x=(v-m)*b,this._y=(l-p)*b,this._z=(d-o)*b}else if(r>h&&r>S){const b=2*Math.sqrt(1+r-h-S);this._w=(v-m)/b,this._x=.25*b,this._y=(o+d)/b,this._z=(l+p)/b}else if(h>S){const b=2*Math.sqrt(1+h-r-S);this._w=(l-p)/b,this._x=(o+d)/b,this._y=.25*b,this._z=(m+v)/b}else{const b=2*Math.sqrt(1+S-r-h);this._w=(d-o)/b,this._x=(l+p)/b,this._y=(m+v)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,l=e._z,d=e._w,h=n._x,m=n._y,p=n._z,v=n._w;return this._x=r*v+d*h+o*p-l*m,this._y=o*v+d*m+l*h-r*p,this._z=l*v+d*p+r*m-o*h,this._w=d*v-r*h-o*m-l*p,this._onChangeCallback(),this}slerp(e,n){let r=e._x,o=e._y,l=e._z,d=e._w,h=this.dot(e);h<0&&(r=-r,o=-o,l=-l,d=-d,h=-h);let m=1-n;if(h<.9995){const p=Math.acos(h),v=Math.sin(p);m=Math.sin(m*p)/v,n=Math.sin(n*p)/v,this._x=this._x*m+r*n,this._y=this._y*m+o*n,this._z=this._z*m+l*n,this._w=this._w*m+d*n,this._onChangeCallback()}else this._x=this._x*m+r*n,this._y=this._y*m+o*n,this._z=this._z*m+l*n,this._w=this._w*m+d*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const bf=class bf{constructor(e=0,n=0,r=0){this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(lm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(lm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*o,this.y=l[1]*n+l[4]*r+l[7]*o,this.z=l[2]*n+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=e.elements,d=1/(l[3]*n+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*o+l[12])*d,this.y=(l[1]*n+l[5]*r+l[9]*o+l[13])*d,this.z=(l[2]*n+l[6]*r+l[10]*o+l[14])*d,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,l=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*o-h*r),v=2*(h*n-l*o),S=2*(l*r-d*n);return this.x=n+m*p+d*S-h*v,this.y=r+m*v+h*p-l*S,this.z=o+m*S+l*v-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*o,this.y=l[1]*n+l[5]*r+l[9]*o,this.z=l[2]*n+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this.z=Mt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this.z=Mt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,l=e.z,d=n.x,h=n.y,m=n.z;return this.x=o*m-l*h,this.y=l*d-r*m,this.z=r*h-o*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ou.copy(this).projectOnVector(e),this.sub(Ou)}reflect(e){return this.sub(Ou.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};bf.prototype.isVector3=!0;let oe=bf;const Ou=new oe,lm=new Ks,Ef=class Ef{constructor(e,n,r,o,l,d,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,d,h,m,p)}set(e,n,r,o,l,d,h,m,p){const v=this.elements;return v[0]=e,v[1]=o,v[2]=h,v[3]=n,v[4]=l,v[5]=m,v[6]=r,v[7]=d,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],v=r[4],S=r[7],g=r[2],b=r[5],T=r[8],N=o[0],y=o[3],_=o[6],I=o[1],z=o[4],C=o[7],D=o[2],P=o[5],O=o[8];return l[0]=d*N+h*I+m*D,l[3]=d*y+h*z+m*P,l[6]=d*_+h*C+m*O,l[1]=p*N+v*I+S*D,l[4]=p*y+v*z+S*P,l[7]=p*_+v*C+S*O,l[2]=g*N+b*I+T*D,l[5]=g*y+b*z+T*P,l[8]=g*_+b*C+T*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8];return n*d*v-n*h*p-r*l*v+r*h*m+o*l*p-o*d*m}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8],S=v*d-h*p,g=h*m-v*l,b=p*l-d*m,T=n*S+r*g+o*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const N=1/T;return e[0]=S*N,e[1]=(o*p-v*r)*N,e[2]=(h*r-o*d)*N,e[3]=g*N,e[4]=(v*n-o*m)*N,e[5]=(o*l-h*n)*N,e[6]=b*N,e[7]=(r*m-p*n)*N,e[8]=(d*n-r*l)*N,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,l,d,h){const m=Math.cos(l),p=Math.sin(l);return this.set(r*m,r*p,-r*(m*d+p*h)+d+e,-o*p,o*m,-o*(-p*d+m*h)+h+n,0,0,1),this}scale(e,n){return Ws("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bu.makeScale(e,n)),this}rotate(e){return Ws("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bu.makeRotation(-e)),this}translate(e,n){return Ws("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ef.prototype.isMatrix3=!0;let ut=Ef;const Bu=new ut,cm=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),um=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function f_(){const s={enabled:!0,workingColorSpace:zl,spaces:{},convert:function(o,l,d){return this.enabled===!1||l===d||!l||!d||(this.spaces[l].transfer===kt&&(o.r=ir(o.r),o.g=ir(o.g),o.b=ir(o.b)),this.spaces[l].primaries!==this.spaces[d].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===kt&&(o.r=Xs(o.r),o.g=Xs(o.g),o.b=Xs(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Nr?Hl:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,d){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Ws("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Ws("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[zl]:{primaries:e,whitePoint:r,transfer:Hl,toXYZ:cm,fromXYZ:um,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:e,whitePoint:r,transfer:kt,toXYZ:cm,fromXYZ:um,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),s}const St=f_();function ir(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Xs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ns;class h_{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ns===void 0&&(Ns=Gl("canvas")),Ns.width=e.width,Ns.height=e.height;const o=Ns.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Ns}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Gl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let d=0;d<l.length;d++)l[d]=ir(l[d]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(ir(n[r]/255)*255):n[r]=ir(n[r]);return{data:n,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let p_=0;class vf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:p_++}),this.uuid=Ja(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let d=0,h=o.length;d<h;d++)o[d].isDataTexture?l.push(zu(o[d].image)):l.push(zu(o[d]))}else l=zu(o);r.url=l}return n||(e.images[this.uuid]=r),r}}function zu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?h_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}let m_=0;const Hu=new oe;class In extends rs{constructor(e=In.DEFAULT_IMAGE,n=In.DEFAULT_MAPPING,r=tr,o=tr,l=Cn,d=Qr,h=Ei,m=$n,p=In.DEFAULT_ANISOTROPY,v=Nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=Ja(),this.name="",this.source=new vf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Hu).x}get height(){return this.source.getSize(Hu).y}get depth(){return this.source.getSize(Hu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){lt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){lt(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_x)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _d:e.x=e.x-Math.floor(e.x);break;case tr:e.x=e.x<0?0:1;break;case yd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _d:e.y=e.y-Math.floor(e.y);break;case tr:e.y=e.y<0?0:1;break;case yd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=_x;In.DEFAULT_ANISOTROPY=1;const wf=class wf{constructor(e=0,n=0,r=0,o=1){this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=this.w,d=e.elements;return this.x=d[0]*n+d[4]*r+d[8]*o+d[12]*l,this.y=d[1]*n+d[5]*r+d[9]*o+d[13]*l,this.z=d[2]*n+d[6]*r+d[10]*o+d[14]*l,this.w=d[3]*n+d[7]*r+d[11]*o+d[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,l;const m=e.elements,p=m[0],v=m[4],S=m[8],g=m[1],b=m[5],T=m[9],N=m[2],y=m[6],_=m[10];if(Math.abs(v-g)<.01&&Math.abs(S-N)<.01&&Math.abs(T-y)<.01){if(Math.abs(v+g)<.1&&Math.abs(S+N)<.1&&Math.abs(T+y)<.1&&Math.abs(p+b+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const z=(p+1)/2,C=(b+1)/2,D=(_+1)/2,P=(v+g)/4,O=(S+N)/4,w=(T+y)/4;return z>C&&z>D?z<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(z),o=P/r,l=O/r):C>D?C<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(C),r=P/o,l=w/o):D<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(D),r=O/l,o=w/l),this.set(r,o,l,n),this}let I=Math.sqrt((y-T)*(y-T)+(S-N)*(S-N)+(g-v)*(g-v));return Math.abs(I)<.001&&(I=1),this.x=(y-T)/I,this.y=(S-N)/I,this.z=(g-v)/I,this.w=Math.acos((p+b+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this.z=Mt(this.z,e.z,n.z),this.w=Mt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this.z=Mt(this.z,e,n),this.w=Mt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};wf.prototype.isVector4=!0;let Yt=wf;class x_ extends rs{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new Yt(0,0,e,n),this.scissorTest=!1,this.viewport=new Yt(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:r.depth},l=new In(o),d=r.count;for(let h=0;h<d;h++)this.textures[h]=l.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new vf(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends x_{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Cx extends In{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=_n,this.minFilter=_n,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class g_ extends In{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=_n,this.minFilter=_n,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const jl=class jl{constructor(e,n,r,o,l,d,h,m,p,v,S,g,b,T,N,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,d,h,m,p,v,S,g,b,T,N,y)}set(e,n,r,o,l,d,h,m,p,v,S,g,b,T,N,y){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=o,_[1]=l,_[5]=d,_[9]=h,_[13]=m,_[2]=p,_[6]=v,_[10]=S,_[14]=g,_[3]=b,_[7]=T,_[11]=N,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jl().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,r=e.elements,o=1/Rs.setFromMatrixColumn(e,0).length(),l=1/Rs.setFromMatrixColumn(e,1).length(),d=1/Rs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*d,n[9]=r[9]*d,n[10]=r[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,l=e.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(o),p=Math.sin(o),v=Math.cos(l),S=Math.sin(l);if(e.order==="XYZ"){const g=d*v,b=d*S,T=h*v,N=h*S;n[0]=m*v,n[4]=-m*S,n[8]=p,n[1]=b+T*p,n[5]=g-N*p,n[9]=-h*m,n[2]=N-g*p,n[6]=T+b*p,n[10]=d*m}else if(e.order==="YXZ"){const g=m*v,b=m*S,T=p*v,N=p*S;n[0]=g+N*h,n[4]=T*h-b,n[8]=d*p,n[1]=d*S,n[5]=d*v,n[9]=-h,n[2]=b*h-T,n[6]=N+g*h,n[10]=d*m}else if(e.order==="ZXY"){const g=m*v,b=m*S,T=p*v,N=p*S;n[0]=g-N*h,n[4]=-d*S,n[8]=T+b*h,n[1]=b+T*h,n[5]=d*v,n[9]=N-g*h,n[2]=-d*p,n[6]=h,n[10]=d*m}else if(e.order==="ZYX"){const g=d*v,b=d*S,T=h*v,N=h*S;n[0]=m*v,n[4]=T*p-b,n[8]=g*p+N,n[1]=m*S,n[5]=N*p+g,n[9]=b*p-T,n[2]=-p,n[6]=h*m,n[10]=d*m}else if(e.order==="YZX"){const g=d*m,b=d*p,T=h*m,N=h*p;n[0]=m*v,n[4]=N-g*S,n[8]=T*S+b,n[1]=S,n[5]=d*v,n[9]=-h*v,n[2]=-p*v,n[6]=b*S+T,n[10]=g-N*S}else if(e.order==="XZY"){const g=d*m,b=d*p,T=h*m,N=h*p;n[0]=m*v,n[4]=-S,n[8]=p*v,n[1]=g*S+N,n[5]=d*v,n[9]=b*S-T,n[2]=T*S-b,n[6]=h*v,n[10]=N*S+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(v_,e,__)}lookAt(e,n,r){const o=this.elements;return Yn.subVectors(e,n),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),br.crossVectors(r,Yn),br.lengthSq()===0&&(Math.abs(r.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),br.crossVectors(r,Yn)),br.normalize(),cl.crossVectors(Yn,br),o[0]=br.x,o[4]=cl.x,o[8]=Yn.x,o[1]=br.y,o[5]=cl.y,o[9]=Yn.y,o[2]=br.z,o[6]=cl.z,o[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],v=r[1],S=r[5],g=r[9],b=r[13],T=r[2],N=r[6],y=r[10],_=r[14],I=r[3],z=r[7],C=r[11],D=r[15],P=o[0],O=o[4],w=o[8],F=o[12],k=o[1],H=o[5],Z=o[9],ie=o[13],X=o[2],Q=o[6],he=o[10],ee=o[14],$=o[3],q=o[7],Y=o[11],R=o[15];return l[0]=d*P+h*k+m*X+p*$,l[4]=d*O+h*H+m*Q+p*q,l[8]=d*w+h*Z+m*he+p*Y,l[12]=d*F+h*ie+m*ee+p*R,l[1]=v*P+S*k+g*X+b*$,l[5]=v*O+S*H+g*Q+b*q,l[9]=v*w+S*Z+g*he+b*Y,l[13]=v*F+S*ie+g*ee+b*R,l[2]=T*P+N*k+y*X+_*$,l[6]=T*O+N*H+y*Q+_*q,l[10]=T*w+N*Z+y*he+_*Y,l[14]=T*F+N*ie+y*ee+_*R,l[3]=I*P+z*k+C*X+D*$,l[7]=I*O+z*H+C*Q+D*q,l[11]=I*w+z*Z+C*he+D*Y,l[15]=I*F+z*ie+C*ee+D*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],l=e[12],d=e[1],h=e[5],m=e[9],p=e[13],v=e[2],S=e[6],g=e[10],b=e[14],T=e[3],N=e[7],y=e[11],_=e[15],I=m*b-p*g,z=h*b-p*S,C=h*g-m*S,D=d*b-p*v,P=d*g-m*v,O=d*S-h*v;return n*(N*I-y*z+_*C)-r*(T*I-y*D+_*P)+o*(T*z-N*D+_*O)-l*(T*C-N*P+y*O)}determinantAffine(){const e=this.elements,n=e[0],r=e[4],o=e[8],l=e[1],d=e[5],h=e[9],m=e[2],p=e[6],v=e[10];return n*(d*v-h*p)-r*(l*v-h*m)+o*(l*p-d*m)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8],S=e[9],g=e[10],b=e[11],T=e[12],N=e[13],y=e[14],_=e[15],I=n*h-r*d,z=n*m-o*d,C=n*p-l*d,D=r*m-o*h,P=r*p-l*h,O=o*p-l*m,w=v*N-S*T,F=v*y-g*T,k=v*_-b*T,H=S*y-g*N,Z=S*_-b*N,ie=g*_-b*y,X=I*ie-z*Z+C*H+D*k-P*F+O*w;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/X;return e[0]=(h*ie-m*Z+p*H)*Q,e[1]=(o*Z-r*ie-l*H)*Q,e[2]=(N*O-y*P+_*D)*Q,e[3]=(g*P-S*O-b*D)*Q,e[4]=(m*k-d*ie-p*F)*Q,e[5]=(n*ie-o*k+l*F)*Q,e[6]=(y*C-T*O-_*z)*Q,e[7]=(v*O-g*C+b*z)*Q,e[8]=(d*Z-h*k+p*w)*Q,e[9]=(r*k-n*Z-l*w)*Q,e[10]=(T*P-N*C+_*I)*Q,e[11]=(S*C-v*P-b*I)*Q,e[12]=(h*F-d*H-m*w)*Q,e[13]=(n*H-r*F+o*w)*Q,e[14]=(N*z-T*D-y*I)*Q,e[15]=(v*D-S*z+g*I)*Q,this}scale(e){const n=this.elements,r=e.x,o=e.y,l=e.z;return n[0]*=r,n[4]*=o,n[8]*=l,n[1]*=r,n[5]*=o,n[9]*=l,n[2]*=r,n[6]*=o,n[10]*=l,n[3]*=r,n[7]*=o,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),l=1-r,d=e.x,h=e.y,m=e.z,p=l*d,v=l*h;return this.set(p*d+r,p*h-o*m,p*m+o*h,0,p*h+o*m,v*h+r,v*m-o*d,0,p*m-o*h,v*m+o*d,l*m*m+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,l,d){return this.set(1,r,l,0,e,1,d,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,l=n._x,d=n._y,h=n._z,m=n._w,p=l+l,v=d+d,S=h+h,g=l*p,b=l*v,T=l*S,N=d*v,y=d*S,_=h*S,I=m*p,z=m*v,C=m*S,D=r.x,P=r.y,O=r.z;return o[0]=(1-(N+_))*D,o[1]=(b+C)*D,o[2]=(T-z)*D,o[3]=0,o[4]=(b-C)*P,o[5]=(1-(g+_))*P,o[6]=(y+I)*P,o[7]=0,o[8]=(T+z)*O,o[9]=(y-I)*O,o[10]=(1-(g+N))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),n.identity(),this;let d=Rs.set(o[0],o[1],o[2]).length();const h=Rs.set(o[4],o[5],o[6]).length(),m=Rs.set(o[8],o[9],o[10]).length();l<0&&(d=-d),yi.copy(this);const p=1/d,v=1/h,S=1/m;return yi.elements[0]*=p,yi.elements[1]*=p,yi.elements[2]*=p,yi.elements[4]*=v,yi.elements[5]*=v,yi.elements[6]*=v,yi.elements[8]*=S,yi.elements[9]*=S,yi.elements[10]*=S,n.setFromRotationMatrix(yi),r.x=d,r.y=h,r.z=m,this}makePerspective(e,n,r,o,l,d,h=Fi,m=!1){const p=this.elements,v=2*l/(n-e),S=2*l/(r-o),g=(n+e)/(n-e),b=(r+o)/(r-o);let T,N;if(m)T=l/(d-l),N=d*l/(d-l);else if(h===Fi)T=-(d+l)/(d-l),N=-2*d*l/(d-l);else if(h===$a)T=-d/(d-l),N=-d*l/(d-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=S,p[9]=b,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=N,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,o,l,d,h=Fi,m=!1){const p=this.elements,v=2/(n-e),S=2/(r-o),g=-(n+e)/(n-e),b=-(r+o)/(r-o);let T,N;if(m)T=1/(d-l),N=d/(d-l);else if(h===Fi)T=-2/(d-l),N=-(d+l)/(d-l);else if(h===$a)T=-1/(d-l),N=-l/(d-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=S,p[9]=0,p[13]=b,p[2]=0,p[6]=0,p[10]=T,p[14]=N,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}};jl.prototype.isMatrix4=!0;let Kt=jl;const Rs=new oe,yi=new Kt,v_=new oe(0,0,0),__=new oe(1,1,1),br=new oe,cl=new oe,Yn=new oe,dm=new Kt,fm=new Ks;class Rr{constructor(e=0,n=0,r=0,o=Rr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,l=o[0],d=o[4],h=o[8],m=o[1],p=o[5],v=o[9],S=o[2],g=o[6],b=o[10];switch(n){case"XYZ":this._y=Math.asin(Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,b),this._z=Math.atan2(-d,l)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,b),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-S,l),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-S,b),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,l));break;case"ZYX":this._y=Math.asin(-Mt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(g,b),this._z=Math.atan2(m,l)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-S,l)):(this._x=0,this._y=Math.atan2(h,b));break;case"XZY":this._z=Math.asin(-Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(h,l)):(this._x=Math.atan2(-v,b),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return dm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return fm.setFromEuler(this),this.setFromQuaternion(fm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rr.DEFAULT_ORDER="XYZ";class Nx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let y_=0;const hm=new oe,Ps=new Ks,Ki=new Kt,ul=new oe,ka=new oe,S_=new oe,M_=new Ks,pm=new oe(1,0,0),mm=new oe(0,1,0),xm=new oe(0,0,1),gm={type:"added"},b_={type:"removed"},Ds={type:"childadded",child:null},Gu={type:"childremoved",child:null};class yn extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:y_++}),this.uuid=Ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const e=new oe,n=new Rr,r=new Ks,o=new oe(1,1,1);function l(){r.setFromEuler(n,!1)}function d(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Kt},normalMatrix:{value:new ut}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis(pm,e)}rotateY(e){return this.rotateOnAxis(mm,e)}rotateZ(e){return this.rotateOnAxis(xm,e)}translateOnAxis(e,n){return hm.copy(e).applyQuaternion(this.quaternion),this.position.add(hm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(pm,e)}translateY(e){return this.translateOnAxis(mm,e)}translateZ(e){return this.translateOnAxis(xm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?ul.copy(e):ul.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),ka.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(ka,ul,this.up):Ki.lookAt(ul,ka,this.up),this.quaternion.setFromRotationMatrix(Ki),o&&(Ki.extractRotation(o.matrixWorld),Ps.setFromRotationMatrix(Ki),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gm),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(b_),Gu.child=e,this.dispatchEvent(Gu),Gu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gm),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const d=this.children[r].getObjectByProperty(e,n);if(d!==void 0)return d}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let l=0,d=o.length;l<d;l++)o[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ka,e,S_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ka,M_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=n-l[0]*n-l[4]*r-l[8]*o,l[13]+=r-l[1]*n-l[5]*r-l[9]*o,l[14]+=o-l[2]*n-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),n===!0){const l=this.children;for(let d=0,h=l.length;d<h;d++)l[d].updateWorldMatrix(!1,!0,r)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const S=m[p];l(e.shapes,S)}else l(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(l(e.materials,this.material[m]));o.material=h}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];o.animations.push(l(e.animations,m))}}if(n){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),v=d(e.images),S=d(e.shapes),g=d(e.skeletons),b=d(e.animations),T=d(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),S.length>0&&(r.shapes=S),g.length>0&&(r.skeletons=g),b.length>0&&(r.animations=b),T.length>0&&(r.nodes=T)}return r.object=o,r;function d(h){const m=[];for(const p in h){const v=h[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}yn.DEFAULT_UP=new oe(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Va extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const E_={type:"move"};class Vu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Va,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Va,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Va,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,l=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const N of e.hand.values()){const y=n.getJointPose(N,r),_=this._getHandJoint(p,N);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const v=p.joints["index-finger-tip"],S=p.joints["thumb-tip"],g=v.position.distanceTo(S.position),b=.02,T=.005;p.inputState.pinching&&g>b+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=b-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(E_)))}return h!==null&&(h.visible=o!==null),m!==null&&(m.visible=l!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Va;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const Rx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Er={h:0,s:0,l:0},dl={h:0,s:0,l:0};function ju(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class xt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=St.workingColorSpace){return this.r=e,this.g=n,this.b=r,St.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=St.workingColorSpace){if(e=d_(e,1),n=Mt(n,0,1),r=Mt(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,d=2*r-l;this.r=ju(d,l,e+1/3),this.g=ju(d,l,e),this.b=ju(d,l,e-1/3)}return St.colorSpaceToWorking(this,o),this}setStyle(e,n=li){function r(l){l!==void 0&&parseFloat(l)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const d=o[1],h=o[2];switch(d){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:lt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],d=l.length;if(d===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(d===6)return this.setHex(parseInt(l,16),n);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=li){const r=Rx[e.toLowerCase()];return r!==void 0?this.setHex(r,n):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}copyLinearToSRGB(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=li){return St.workingToColorSpace(An.copy(this),e),Math.round(Mt(An.r*255,0,255))*65536+Math.round(Mt(An.g*255,0,255))*256+Math.round(Mt(An.b*255,0,255))}getHexString(e=li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=St.workingColorSpace){St.workingToColorSpace(An.copy(this),n);const r=An.r,o=An.g,l=An.b,d=Math.max(r,o,l),h=Math.min(r,o,l);let m,p;const v=(h+d)/2;if(h===d)m=0,p=0;else{const S=d-h;switch(p=v<=.5?S/(d+h):S/(2-d-h),d){case r:m=(o-l)/S+(o<l?6:0);break;case o:m=(l-r)/S+2;break;case l:m=(r-o)/S+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,n=St.workingColorSpace){return St.workingToColorSpace(An.copy(this),n),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=li){St.workingToColorSpace(An.copy(this),e);const n=An.r,r=An.g,o=An.b;return e!==li?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(Er),this.setHSL(Er.h+e,Er.s+n,Er.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Er),e.getHSL(dl);const r=Uu(Er.h,dl.h,n),o=Uu(Er.s,dl.s,n),l=Uu(Er.l,dl.l,n);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*o,this.g=l[1]*n+l[4]*r+l[7]*o,this.b=l[2]*n+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new xt;xt.NAMES=Rx;class w_ extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rr,this.environmentIntensity=1,this.environmentRotation=new Rr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Si=new oe,$i=new oe,Wu=new oe,Zi=new oe,Ls=new oe,Is=new oe,vm=new oe,Xu=new oe,qu=new oe,Yu=new oe,Ku=new Yt,$u=new Yt,Zu=new Yt;class bi{constructor(e=new oe,n=new oe,r=new oe){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),Si.subVectors(e,n),o.cross(Si);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,n,r,o,l){Si.subVectors(o,n),$i.subVectors(r,n),Wu.subVectors(e,n);const d=Si.dot(Si),h=Si.dot($i),m=Si.dot(Wu),p=$i.dot($i),v=$i.dot(Wu),S=d*p-h*h;if(S===0)return l.set(0,0,0),null;const g=1/S,b=(p*m-h*v)*g,T=(d*v-h*m)*g;return l.set(1-b-T,T,b)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(e,n,r,o,l,d,h,m){return this.getBarycoord(e,n,r,o,Zi)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(l,Zi.x),m.addScaledVector(d,Zi.y),m.addScaledVector(h,Zi.z),m)}static getInterpolatedAttribute(e,n,r,o,l,d){return Ku.setScalar(0),$u.setScalar(0),Zu.setScalar(0),Ku.fromBufferAttribute(e,n),$u.fromBufferAttribute(e,r),Zu.fromBufferAttribute(e,o),d.setScalar(0),d.addScaledVector(Ku,l.x),d.addScaledVector($u,l.y),d.addScaledVector(Zu,l.z),d}static isFrontFacing(e,n,r,o){return Si.subVectors(r,n),$i.subVectors(e,n),Si.cross($i).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),Si.cross($i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return bi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,l){return bi.getInterpolation(e,this.a,this.b,this.c,n,r,o,l)}containsPoint(e){return bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,l=this.c;let d,h;Ls.subVectors(o,r),Is.subVectors(l,r),Xu.subVectors(e,r);const m=Ls.dot(Xu),p=Is.dot(Xu);if(m<=0&&p<=0)return n.copy(r);qu.subVectors(e,o);const v=Ls.dot(qu),S=Is.dot(qu);if(v>=0&&S<=v)return n.copy(o);const g=m*S-v*p;if(g<=0&&m>=0&&v<=0)return d=m/(m-v),n.copy(r).addScaledVector(Ls,d);Yu.subVectors(e,l);const b=Ls.dot(Yu),T=Is.dot(Yu);if(T>=0&&b<=T)return n.copy(l);const N=b*p-m*T;if(N<=0&&p>=0&&T<=0)return h=p/(p-T),n.copy(r).addScaledVector(Is,h);const y=v*T-b*S;if(y<=0&&S-v>=0&&b-T>=0)return vm.subVectors(l,o),h=(S-v)/(S-v+(b-T)),n.copy(o).addScaledVector(vm,h);const _=1/(y+N+g);return d=N*_,h=g*_,n.copy(r).addScaledVector(Ls,d).addScaledVector(Is,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Qa{constructor(e=new oe(1/0,1/0,1/0),n=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Mi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Mi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Mi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=l.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Mi):Mi.fromBufferAttribute(l,d),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),fl.copy(r.boundingBox)),fl.applyMatrix4(e.matrixWorld),this.union(fl)}const o=e.children;for(let l=0,d=o.length;l<d;l++)this.expandByObject(o[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ua),hl.subVectors(this.max,Ua),Fs.subVectors(e.a,Ua),ks.subVectors(e.b,Ua),Us.subVectors(e.c,Ua),wr.subVectors(ks,Fs),Tr.subVectors(Us,ks),Yr.subVectors(Fs,Us);let n=[0,-wr.z,wr.y,0,-Tr.z,Tr.y,0,-Yr.z,Yr.y,wr.z,0,-wr.x,Tr.z,0,-Tr.x,Yr.z,0,-Yr.x,-wr.y,wr.x,0,-Tr.y,Tr.x,0,-Yr.y,Yr.x,0];return!Ju(n,Fs,ks,Us,hl)||(n=[1,0,0,0,1,0,0,0,1],!Ju(n,Fs,ks,Us,hl))?!1:(pl.crossVectors(wr,Tr),n=[pl.x,pl.y,pl.z],Ju(n,Fs,ks,Us,hl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ji=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],Mi=new oe,fl=new Qa,Fs=new oe,ks=new oe,Us=new oe,wr=new oe,Tr=new oe,Yr=new oe,Ua=new oe,hl=new oe,pl=new oe,Kr=new oe;function Ju(s,e,n,r,o){for(let l=0,d=s.length-3;l<=d;l+=3){Kr.fromArray(s,l);const h=o.x*Math.abs(Kr.x)+o.y*Math.abs(Kr.y)+o.z*Math.abs(Kr.z),m=e.dot(Kr),p=n.dot(Kr),v=r.dot(Kr);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>h)return!1}return!0}const sn=new oe,ml=new Et;let T_=0;class Ti extends rs{constructor(e,n,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:T_++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=a_,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)ml.fromBufferAttribute(this,n),ml.applyMatrix3(e),this.setXY(n,ml.x,ml.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)sn.fromBufferAttribute(this,n),sn.applyMatrix3(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)sn.fromBufferAttribute(this,n),sn.applyMatrix4(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)sn.fromBufferAttribute(this,n),sn.applyNormalMatrix(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)sn.fromBufferAttribute(this,n),sn.transformDirection(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Fa(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Gn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Fa(n,this.array)),n}setX(e,n){return this.normalized&&(n=Gn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Fa(n,this.array)),n}setY(e,n){return this.normalized&&(n=Gn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Fa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Gn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Fa(n,this.array)),n}setW(e,n){return this.normalized&&(n=Gn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Gn(n,this.array),r=Gn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Gn(n,this.array),r=Gn(r,this.array),o=Gn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,l){return e*=this.itemSize,this.normalized&&(n=Gn(n,this.array),r=Gn(r,this.array),o=Gn(o,this.array),l=Gn(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Px extends Ti{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Dx extends Ti{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Fn extends Ti{constructor(e,n,r){super(new Float32Array(e),n,r)}}const A_=new Qa,Oa=new oe,Qu=new oe;class ql{constructor(e=new oe,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):A_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,d=e.length;l<d;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oa.subVectors(e,this.center);const n=Oa.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Oa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oa.copy(e.center).add(Qu)),this.expandByPoint(Oa.copy(e.center).sub(Qu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let C_=0;const oi=new Kt,ed=new yn,Os=new oe,Kn=new Qa,Ba=new Qa,mn=new oe;class Jn extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:C_++}),this.uuid=Ja(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(o_(e)?Dx:Px)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ut().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,n,r){return oi.makeTranslation(e,n,r),this.applyMatrix4(oi),this}scale(e,n,r){return oi.makeScale(e,n,r),this.applyMatrix4(oi),this}lookAt(e){return ed.lookAt(e),ed.updateMatrix(),this.applyMatrix4(ed.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const d=e[o];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Fn(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const l=e[o];n.setXYZ(o,l.x,l.y,l.z||0)}e.length>n.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const l=n[r];Kn.setFromBufferAttribute(l),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ql);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(e){const r=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),n)for(let l=0,d=n.length;l<d;l++){const h=n[l];Ba.setFromBufferAttribute(h),this.morphTargetsRelative?(mn.addVectors(Kn.min,Ba.min),Kn.expandByPoint(mn),mn.addVectors(Kn.max,Ba.max),Kn.expandByPoint(mn)):(Kn.expandByPoint(Ba.min),Kn.expandByPoint(Ba.max))}Kn.getCenter(r);let o=0;for(let l=0,d=e.count;l<d;l++)mn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(mn));if(n)for(let l=0,d=n.length;l<d;l++){const h=n[l],m=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)mn.fromBufferAttribute(h,p),m&&(Os.fromBufferAttribute(e,p),mn.add(Os)),o=Math.max(o,r.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,l=n.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==r.count)&&(d=new Ti(new Float32Array(4*r.count),4),this.setAttribute("tangent",d));const h=[],m=[];for(let w=0;w<r.count;w++)h[w]=new oe,m[w]=new oe;const p=new oe,v=new oe,S=new oe,g=new Et,b=new Et,T=new Et,N=new oe,y=new oe;function _(w,F,k){p.fromBufferAttribute(r,w),v.fromBufferAttribute(r,F),S.fromBufferAttribute(r,k),g.fromBufferAttribute(l,w),b.fromBufferAttribute(l,F),T.fromBufferAttribute(l,k),v.sub(p),S.sub(p),b.sub(g),T.sub(g);const H=1/(b.x*T.y-T.x*b.y);isFinite(H)&&(N.copy(v).multiplyScalar(T.y).addScaledVector(S,-b.y).multiplyScalar(H),y.copy(S).multiplyScalar(b.x).addScaledVector(v,-T.x).multiplyScalar(H),h[w].add(N),h[F].add(N),h[k].add(N),m[w].add(y),m[F].add(y),m[k].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let w=0,F=I.length;w<F;++w){const k=I[w],H=k.start,Z=k.count;for(let ie=H,X=H+Z;ie<X;ie+=3)_(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const z=new oe,C=new oe,D=new oe,P=new oe;function O(w){D.fromBufferAttribute(o,w),P.copy(D);const F=h[w];z.copy(F),z.sub(D.multiplyScalar(D.dot(F))).normalize(),C.crossVectors(P,F);const H=C.dot(m[w])<0?-1:1;d.setXYZW(w,z.x,z.y,z.z,H)}for(let w=0,F=I.length;w<F;++w){const k=I[w],H=k.start,Z=k.count;for(let ie=H,X=H+Z;ie<X;ie+=3)O(e.getX(ie+0)),O(e.getX(ie+1)),O(e.getX(ie+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==n.count)r=new Ti(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let g=0,b=r.count;g<b;g++)r.setXYZ(g,0,0,0);const o=new oe,l=new oe,d=new oe,h=new oe,m=new oe,p=new oe,v=new oe,S=new oe;if(e)for(let g=0,b=e.count;g<b;g+=3){const T=e.getX(g+0),N=e.getX(g+1),y=e.getX(g+2);o.fromBufferAttribute(n,T),l.fromBufferAttribute(n,N),d.fromBufferAttribute(n,y),v.subVectors(d,l),S.subVectors(o,l),v.cross(S),h.fromBufferAttribute(r,T),m.fromBufferAttribute(r,N),p.fromBufferAttribute(r,y),h.add(v),m.add(v),p.add(v),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(N,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let g=0,b=n.count;g<b;g+=3)o.fromBufferAttribute(n,g+0),l.fromBufferAttribute(n,g+1),d.fromBufferAttribute(n,g+2),v.subVectors(d,l),S.subVectors(o,l),v.cross(S),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)mn.fromBufferAttribute(e,n),mn.normalize(),e.setXYZ(n,mn.x,mn.y,mn.z)}toNonIndexed(){function e(h,m){const p=h.array,v=h.itemSize,S=h.normalized,g=new p.constructor(m.length*v);let b=0,T=0;for(let N=0,y=m.length;N<y;N++){h.isInterleavedBufferAttribute?b=m[N]*h.data.stride+h.offset:b=m[N]*v;for(let _=0;_<v;_++)g[T++]=p[b++]}return new Ti(g,v,S)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Jn,r=this.index.array,o=this.attributes;for(const h in o){const m=o[h],p=e(m,r);n.setAttribute(h,p)}const l=this.morphAttributes;for(const h in l){const m=[],p=l[h];for(let v=0,S=p.length;v<S;v++){const g=p[v],b=e(g,r);m.push(b)}n.morphAttributes[h]=m}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let l=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let S=0,g=p.length;S<g;S++){const b=p[S];v.push(b.toJSON(e.data))}v.length>0&&(o[m]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const v=o[p];this.setAttribute(p,v.clone(n))}const l=e.morphAttributes;for(const p in l){const v=[],S=l[p];for(let g=0,b=S.length;g<b;g++)v.push(S[g].clone(n));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,v=d.length;p<v;p++){const S=d[p];this.addGroup(S.start,S.count,S.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const td=new oe,N_=new oe,R_=new ut;class Cr{constructor(e=new oe(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=td.subVectors(r,n).cross(N_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,r=!0){const o=e.delta(td),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(d<0||d>1)?null:n.copy(e.start).addScaledVector(o,d)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||R_.getNormalMatrix(e),o=this.coplanarPoint(td).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let P_=0;class $s extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=Ja(),this.name="",this.type="Material",this.blending=js,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cx,this.blendDst=ux,this.blendEquation=Gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=qa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fu,this.stencilZFail=Fu,this.stencilZPass=Fu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){lt(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){lt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const d=[];for(const h in l){const m=l[h];delete m.metadata,d.push(m)}return d}if(n){const l=o(e.textures),d=o(e.images);l.length>0&&(r.textures=l),d.length>0&&(r.images=d)}return r}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new xt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Cr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Et().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Et().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Qi=new oe,nd=new oe,xl=new oe,gl=new oe;class Lx{constructor(e=new oe,n=new oe(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Qi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Qi.copy(this.origin).addScaledVector(this.direction,n),Qi.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){nd.copy(e).add(n).multiplyScalar(.5),xl.copy(n).sub(e).normalize(),gl.copy(this.origin).sub(nd);const l=e.distanceTo(n)*.5,d=-this.direction.dot(xl),h=gl.dot(this.direction),m=-gl.dot(xl),p=gl.lengthSq(),v=Math.abs(1-d*d);let S,g,b,T;if(v>0)if(S=d*m-h,g=d*h-m,T=l*v,S>=0)if(g>=-T)if(g<=T){const N=1/v;S*=N,g*=N,b=S*(S+d*g+2*h)+g*(d*S+g+2*m)+p}else g=l,S=Math.max(0,-(d*g+h)),b=-S*S+g*(g+2*m)+p;else g=-l,S=Math.max(0,-(d*g+h)),b=-S*S+g*(g+2*m)+p;else g<=-T?(S=Math.max(0,-(-d*l+h)),g=S>0?-l:Math.min(Math.max(-l,-m),l),b=-S*S+g*(g+2*m)+p):g<=T?(S=0,g=Math.min(Math.max(-l,-m),l),b=g*(g+2*m)+p):(S=Math.max(0,-(d*l+h)),g=S>0?l:Math.min(Math.max(-l,-m),l),b=-S*S+g*(g+2*m)+p);else g=d>0?-l:l,S=Math.max(0,-(d*g+h)),b=-S*S+g*(g+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,S),o&&o.copy(nd).addScaledVector(xl,g),b}intersectSphere(e,n){if(e.radius<0)return null;Qi.subVectors(e.center,this.origin);const r=Qi.dot(this.direction),o=Qi.dot(Qi)-r*r,l=e.radius*e.radius;if(o>l)return null;const d=Math.sqrt(l-o),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,n):this.at(h,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,l,d,h,m;const p=1/this.direction.x,v=1/this.direction.y,S=1/this.direction.z,g=this.origin;return p>=0?(r=(e.min.x-g.x)*p,o=(e.max.x-g.x)*p):(r=(e.max.x-g.x)*p,o=(e.min.x-g.x)*p),v>=0?(l=(e.min.y-g.y)*v,d=(e.max.y-g.y)*v):(l=(e.max.y-g.y)*v,d=(e.min.y-g.y)*v),r>d||l>o||((l>r||isNaN(r))&&(r=l),(d<o||isNaN(o))&&(o=d),S>=0?(h=(e.min.z-g.z)*S,m=(e.max.z-g.z)*S):(h=(e.max.z-g.z)*S,m=(e.min.z-g.z)*S),r>m||h>o)||((h>r||r!==r)&&(r=h),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Qi)!==null}intersectTriangle(e,n,r,o,l){const d=this.origin,h=this.direction,m=h.x,p=h.y,v=h.z,S=e.x-d.x,g=e.y-d.y,b=e.z-d.z,T=n.x-d.x,N=n.y-d.y,y=n.z-d.z,_=r.x-d.x,I=r.y-d.y,z=r.z-d.z,C=Math.abs(m),D=Math.abs(p),P=Math.abs(v);let O,w,F,k,H,Z,ie,X,Q,he,ee,$;if(C>=D&&C>=P?(F=m,Z=S,Q=T,$=_,m>=0?(O=p,w=v,k=g,H=b,ie=N,X=y,he=I,ee=z):(O=v,w=p,k=b,H=g,ie=y,X=N,he=z,ee=I)):D>=P?(F=p,Z=g,Q=N,$=I,p>=0?(O=v,w=m,k=b,H=S,ie=y,X=T,he=z,ee=_):(O=m,w=v,k=S,H=b,ie=T,X=y,he=_,ee=z)):(F=v,Z=b,Q=y,$=z,v>=0?(O=m,w=p,k=S,H=g,ie=T,X=N,he=_,ee=I):(O=p,w=m,k=g,H=S,ie=N,X=T,he=I,ee=_)),F===0)return null;const q=O/F,Y=w/F,R=1/F,re=k-q*Z,ye=H-Y*Z,He=ie-q*Q,Ue=X-Y*Q,Ge=he-q*$,se=ee-Y*$,de=Ge*Ue-se*He,Me=re*se-ye*Ge,Ye=He*ye-Ue*re;if(o){if(de<0||Me<0||Ye<0)return null}else if((de<0||Me<0||Ye<0)&&(de>0||Me>0||Ye>0))return null;const we=de+Me+Ye;if(we===0)return null;const nt=R*(de*Z+Me*Q+Ye*$);return(we>0?nt<0:nt>0)?null:this.at(nt/we,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xa extends $s{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rr,this.combine=dx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _m=new Kt,$r=new Lx,vl=new ql,ym=new oe,_l=new oe,yl=new oe,Sl=new oe,id=new oe,Ml=new oe,Sm=new oe,bl=new oe;class Zn extends yn{constructor(e=new Jn,n=new Xa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=o.length;l<d;l++){const h=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,d=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(l&&h){Ml.set(0,0,0);for(let m=0,p=l.length;m<p;m++){const v=h[m],S=l[m];v!==0&&(id.fromBufferAttribute(S,e),d?Ml.addScaledVector(id,v):Ml.addScaledVector(id.sub(n),v))}n.add(Ml)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),vl.copy(r.boundingSphere),vl.applyMatrix4(l),$r.copy(e.ray).recast(e.near),!(vl.containsPoint($r.origin)===!1&&($r.intersectSphere(vl,ym)===null||$r.origin.distanceToSquared(ym)>(e.far-e.near)**2))&&(_m.copy(l).invert(),$r.copy(e.ray).applyMatrix4(_m),!(r.boundingBox!==null&&$r.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,$r)))}_computeIntersections(e,n,r){let o;const l=this.geometry,d=this.material,h=l.index,m=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,S=l.attributes.normal,g=l.groups,b=l.drawRange;if(h!==null)if(Array.isArray(d))for(let T=0,N=g.length;T<N;T++){const y=g[T],_=d[y.materialIndex],I=Math.max(y.start,b.start),z=Math.min(h.count,Math.min(y.start+y.count,b.start+b.count));for(let C=I,D=z;C<D;C+=3){const P=h.getX(C),O=h.getX(C+1),w=h.getX(C+2);o=El(this,_,e,r,p,v,S,P,O,w),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const T=Math.max(0,b.start),N=Math.min(h.count,b.start+b.count);for(let y=T,_=N;y<_;y+=3){const I=h.getX(y),z=h.getX(y+1),C=h.getX(y+2);o=El(this,d,e,r,p,v,S,I,z,C),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(d))for(let T=0,N=g.length;T<N;T++){const y=g[T],_=d[y.materialIndex],I=Math.max(y.start,b.start),z=Math.min(m.count,Math.min(y.start+y.count,b.start+b.count));for(let C=I,D=z;C<D;C+=3){const P=C,O=C+1,w=C+2;o=El(this,_,e,r,p,v,S,P,O,w),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const T=Math.max(0,b.start),N=Math.min(m.count,b.start+b.count);for(let y=T,_=N;y<_;y+=3){const I=y,z=y+1,C=y+2;o=El(this,d,e,r,p,v,S,I,z,C),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}}}function D_(s,e,n,r,o,l,d,h){let m;if(e.side===Vn?m=r.intersectTriangle(d,l,o,!0,h):m=r.intersectTriangle(o,l,d,e.side===ts,h),m===null)return null;bl.copy(h),bl.applyMatrix4(s.matrixWorld);const p=n.ray.origin.distanceTo(bl);return p<n.near||p>n.far?null:{distance:p,point:bl.clone(),object:s}}function El(s,e,n,r,o,l,d,h,m,p){s.getVertexPosition(h,_l),s.getVertexPosition(m,yl),s.getVertexPosition(p,Sl);const v=D_(s,e,n,r,_l,yl,Sl,Sm);if(v){const S=new oe;bi.getBarycoord(Sm,_l,yl,Sl,S),o&&(v.uv=bi.getInterpolatedAttribute(o,h,m,p,S,new Et)),l&&(v.uv1=bi.getInterpolatedAttribute(l,h,m,p,S,new Et)),d&&(v.normal=bi.getInterpolatedAttribute(d,h,m,p,S,new oe),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:h,b:m,c:p,normal:new oe,materialIndex:0};bi.getNormal(_l,yl,Sl,g.normal),v.face=g,v.barycoord=S}return v}class L_ extends In{constructor(e=null,n=1,r=1,o,l,d,h,m,p=_n,v=_n,S,g){super(null,d,h,m,p,v,o,l,S,g),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zr=new ql,I_=new Et(.5,.5),wl=new oe;class _f{constructor(e=new Cr,n=new Cr,r=new Cr,o=new Cr,l=new Cr,d=new Cr){this.planes=[e,n,r,o,l,d]}set(e,n,r,o,l,d){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(r),h[3].copy(o),h[4].copy(l),h[5].copy(d),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Fi,r=!1){const o=this.planes,l=e.elements,d=l[0],h=l[1],m=l[2],p=l[3],v=l[4],S=l[5],g=l[6],b=l[7],T=l[8],N=l[9],y=l[10],_=l[11],I=l[12],z=l[13],C=l[14],D=l[15];if(o[0].setComponents(p-d,b-v,_-T,D-I).normalize(),o[1].setComponents(p+d,b+v,_+T,D+I).normalize(),o[2].setComponents(p+h,b+S,_+N,D+z).normalize(),o[3].setComponents(p-h,b-S,_-N,D-z).normalize(),r)o[4].setComponents(m,g,y,C).normalize(),o[5].setComponents(p-m,b-g,_-y,D-C).normalize();else if(o[4].setComponents(p-m,b-g,_-y,D-C).normalize(),n===Fi)o[5].setComponents(p+m,b+g,_+y,D+C).normalize();else if(n===$a)o[5].setComponents(m,g,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zr)}intersectsSprite(e){Zr.center.set(0,0,0);const n=I_.distanceTo(e.center);return Zr.radius=.7071067811865476+n,Zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(wl.x=o.normal.x>0?e.max.x:e.min.x,wl.y=o.normal.y>0?e.max.y:e.min.y,wl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(wl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ix extends $s{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Mm=new Kt,Qd=new Lx,Tl=new ql,Al=new oe;class F_ extends yn{constructor(e=new Jn,n=new Ix){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Tl.copy(r.boundingSphere),Tl.applyMatrix4(o),Tl.radius+=l,e.ray.intersectsSphere(Tl)===!1)return;Mm.copy(o).invert(),Qd.copy(e.ray).applyMatrix4(Mm);const h=l/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=r.index,S=r.attributes.position;if(p!==null){const g=Math.max(0,d.start),b=Math.min(p.count,d.start+d.count);for(let T=g,N=b;T<N;T++){const y=p.getX(T);Al.fromBufferAttribute(S,y),bm(Al,y,m,o,e,n,this)}}else{const g=Math.max(0,d.start),b=Math.min(S.count,d.start+d.count);for(let T=g,N=b;T<N;T++)Al.fromBufferAttribute(S,T),bm(Al,T,m,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=o.length;l<d;l++){const h=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}}function bm(s,e,n,r,o,l,d){const h=Qd.distanceSqToPoint(s);if(h<n){const m=new oe;Qd.closestPointToPoint(s,m),m.applyMatrix4(r);const p=o.ray.origin.distanceTo(m);if(p<o.near||p>o.far)return;l.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class Fx extends In{constructor(e=[],n=ns,r,o,l,d,h,m,p,v){super(e,n,r,o,l,d,h,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Za extends In{constructor(e,n,r=Ui,o,l,d,h=_n,m=_n,p,v=rr,S=1){if(v!==rr&&v!==es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:n,depth:S};super(g,o,l,d,h,m,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class k_ extends Za{constructor(e,n=Ui,r=ns,o,l,d=_n,h=_n,m,p=rr){const v={width:e,height:e,depth:1},S=[v,v,v,v,v,v];super(e,e,n,r,o,l,d,h,m,p),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class kx extends In{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class eo extends Jn{constructor(e=1,n=1,r=1,o=1,l=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:l,depthSegments:d};const h=this;o=Math.floor(o),l=Math.floor(l),d=Math.floor(d);const m=[],p=[],v=[],S=[];let g=0,b=0;T("z","y","x",-1,-1,r,n,e,d,l,0),T("z","y","x",1,-1,r,n,-e,d,l,1),T("x","z","y",1,1,e,r,n,o,d,2),T("x","z","y",1,-1,e,r,-n,o,d,3),T("x","y","z",1,-1,e,n,r,o,l,4),T("x","y","z",-1,-1,e,n,-r,o,l,5),this.setIndex(m),this.setAttribute("position",new Fn(p,3)),this.setAttribute("normal",new Fn(v,3)),this.setAttribute("uv",new Fn(S,2));function T(N,y,_,I,z,C,D,P,O,w,F){const k=C/O,H=D/w,Z=C/2,ie=D/2,X=P/2,Q=O+1,he=w+1;let ee=0,$=0;const q=new oe;for(let Y=0;Y<he;Y++){const R=Y*H-ie;for(let re=0;re<Q;re++){const ye=re*k-Z;q[N]=ye*I,q[y]=R*z,q[_]=X,p.push(q.x,q.y,q.z),q[N]=0,q[y]=0,q[_]=P>0?1:-1,v.push(q.x,q.y,q.z),S.push(re/O),S.push(1-Y/w),ee+=1}}for(let Y=0;Y<w;Y++)for(let R=0;R<O;R++){const re=g+R+Q*Y,ye=g+R+Q*(Y+1),He=g+(R+1)+Q*(Y+1),Ue=g+(R+1)+Q*Y;m.push(re,ye,Ue),m.push(ye,He,Ue),$+=6}h.addGroup(b,$,F),b+=$,g+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class to extends Jn{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const l=e/2,d=n/2,h=Math.floor(r),m=Math.floor(o),p=h+1,v=m+1,S=e/h,g=n/m,b=[],T=[],N=[],y=[];for(let _=0;_<v;_++){const I=_*g-d;for(let z=0;z<p;z++){const C=z*S-l;T.push(C,-I,0),N.push(0,0,1),y.push(z/h),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let I=0;I<h;I++){const z=I+p*_,C=I+p*(_+1),D=I+1+p*(_+1),P=I+1+p*_;b.push(z,C,P),b.push(C,D,P)}this.setIndex(b),this.setAttribute("position",new Fn(T,3)),this.setAttribute("normal",new Fn(N,3)),this.setAttribute("uv",new Fn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new to(e.width,e.height,e.widthSegments,e.heightSegments)}}class yf extends Jn{constructor(e=1,n=32,r=16,o=0,l=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:o,phiLength:l,thetaStart:d,thetaLength:h},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const m=Math.min(d+h,Math.PI);let p=0;const v=[],S=new oe,g=new oe,b=[],T=[],N=[],y=[];for(let _=0;_<=r;_++){const I=[],z=_/r,C=d+z*h,D=e*Math.cos(C),P=Math.sqrt(e*e-D*D);let O=0;_===0&&d===0?O=.5/n:_===r&&m===Math.PI&&(O=-.5/n);for(let w=0;w<=n;w++){const F=w/n,k=o+F*l;S.x=-P*Math.cos(k),S.y=D,S.z=P*Math.sin(k),T.push(S.x,S.y,S.z),g.copy(S).normalize(),N.push(g.x,g.y,g.z),y.push(F+O,1-z),I.push(p++)}v.push(I)}for(let _=0;_<r;_++)for(let I=0;I<n;I++){const z=v[_][I+1],C=v[_][I],D=v[_+1][I],P=v[_+1][I+1];(_!==0||d>0)&&b.push(z,C,P),(_!==r-1||m<Math.PI)&&b.push(C,D,P)}this.setIndex(b),this.setAttribute("position",new Fn(T,3)),this.setAttribute("normal",new Fn(N,3)),this.setAttribute("uv",new Fn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Vl extends Jn{constructor(e=1,n=.4,r=12,o=48,l=Math.PI*2,d=0,h=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:r,tubularSegments:o,arc:l,thetaStart:d,thetaLength:h},r=Math.floor(r),o=Math.floor(o);const m=[],p=[],v=[],S=[],g=new oe,b=new oe,T=new oe;for(let N=0;N<=r;N++){const y=d+N/r*h;for(let _=0;_<=o;_++){const I=_/o*l;b.x=(e+n*Math.cos(y))*Math.cos(I),b.y=(e+n*Math.cos(y))*Math.sin(I),b.z=n*Math.sin(y),p.push(b.x,b.y,b.z),g.x=e*Math.cos(I),g.y=e*Math.sin(I),T.subVectors(b,g).normalize(),v.push(T.x,T.y,T.z),S.push(_/o),S.push(N/r)}}for(let N=1;N<=r;N++)for(let y=1;y<=o;y++){const _=(o+1)*N+y-1,I=(o+1)*(N-1)+y-1,z=(o+1)*(N-1)+y,C=(o+1)*N+y;m.push(_,I,C),m.push(I,z,C)}this.setIndex(m),this.setAttribute("position",new Fn(p,3)),this.setAttribute("normal",new Fn(v,3)),this.setAttribute("uv",new Fn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Ys(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];if(Em(o))o.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone();else if(Array.isArray(o))if(Em(o[0])){const l=[];for(let d=0,h=o.length;d<h;d++)l[d]=o[d].clone();e[n][r]=l}else e[n][r]=o.slice();else e[n][r]=o}}return e}function Dn(s){const e={};for(let n=0;n<s.length;n++){const r=Ys(s[n]);for(const o in r)e[o]=r[o]}return e}function Em(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function U_(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Ux(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const O_={clone:Ys,merge:Dn};var B_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,z_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bi extends $s{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=B_,this.fragmentShader=z_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=U_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const d=this.uniforms[o].value;d&&d.isTexture?n.uniforms[o]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?n.uniforms[o]={type:"c",value:d.getHex()}:d&&d.isVector2?n.uniforms[o]={type:"v2",value:d.toArray()}:d&&d.isVector3?n.uniforms[o]={type:"v3",value:d.toArray()}:d&&d.isVector4?n.uniforms[o]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?n.uniforms[o]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?n.uniforms[o]={type:"m4",value:d.toArray()}:n.uniforms[o]={value:d}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=n[o.value]||null;break;case"c":this.uniforms[r].value=new xt().setHex(o.value);break;case"v2":this.uniforms[r].value=new Et().fromArray(o.value);break;case"v3":this.uniforms[r].value=new oe().fromArray(o.value);break;case"v4":this.uniforms[r].value=new Yt().fromArray(o.value);break;case"m3":this.uniforms[r].value=new ut().fromArray(o.value);break;case"m4":this.uniforms[r].value=new Kt().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class H_ extends Bi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class G_ extends $s{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zd,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class V_ extends $s{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class j_ extends $s{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ox extends yn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const rd=new Kt,wm=new oe,Tm=new oe;class W_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.mapType=$n,this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _f,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new Yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;wm.setFromMatrixPosition(e.matrixWorld),n.position.copy(wm),Tm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Tm),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,r,o){rd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(rd,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,d=o?o.z/l.x:1,h=o?o.w/l.y:1,m=o?o.x/l.x:0,p=o?o.y/l.y:0;e.coordinateSystem===$a||e.reversedDepth?n.set(.5*d,0,0,.5*d+m,0,.5*h,0,.5*h+p,0,0,1,0,0,0,0,1):n.set(.5*d,0,0,.5*d+m,0,.5*h,0,.5*h+p,0,0,.5,.5,0,0,0,1),n.multiply(rd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Cl=new oe,Nl=new Ks,Pi=new oe;class Bx extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Cl,Nl,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cl,Nl,Pi.set(1,1,1)).invert()}updateWorldMatrix(e,n,r=!1){super.updateWorldMatrix(e,n,r),this.matrixWorld.decompose(Cl,Nl,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cl,Nl,Pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ar=new oe,Am=new Et,Cm=new Et;class ci extends Bx{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Jd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ku*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jd*2*Math.atan(Math.tan(ku*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z),Ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z)}getViewSize(e,n){return this.getViewBounds(e,Am,Cm),n.subVectors(Cm,Am)}setViewOffset(e,n,r,o,l,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ku*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,l=-.5*o;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;l+=d.offsetX*o/m,n-=d.offsetY*r/p,o*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(l+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Sf extends Bx{constructor(e=-1,n=1,r=1,o=-1,l=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=l,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,l,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,d=r+e,h=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,d=l+p*this.view.width,h-=v*this.view.offsetY,m=h-v*this.view.height}this.projectionMatrix.makeOrthographic(l,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class X_ extends W_{constructor(){super(new Sf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class q_ extends Ox{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new X_}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class Y_ extends Ox{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Bs=-90,zs=1;class K_ extends yn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ci(Bs,zs,e,n);o.layers=this.layers,this.add(o);const l=new ci(Bs,zs,e,n);l.layers=this.layers,this.add(l);const d=new ci(Bs,zs,e,n);d.layers=this.layers,this.add(d);const h=new ci(Bs,zs,e,n);h.layers=this.layers,this.add(h);const m=new ci(Bs,zs,e,n);m.layers=this.layers,this.add(m);const p=new ci(Bs,zs,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,l,d,h,m]=n;for(const p of n)this.remove(p);if(e===Fi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===$a)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,d,h,m,p,v]=this.children,S=e.getRenderTarget(),g=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const N=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),r.texture.generateMipmaps=N,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,v),e.setRenderTarget(S,g,b),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class $_ extends ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Tf=class Tf{constructor(e,n,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let r=0;r<4;r++)this.elements[r]=e[r+n];return this}set(e,n,r,o){const l=this.elements;return l[0]=e,l[2]=n,l[1]=r,l[3]=o,this}};Tf.prototype.isMatrix2=!0;let Nm=Tf;function Rm(s,e,n,r){const o=Z_(r);switch(n){case Ex:return s*e;case Tx:return s*e/o.components*o.byteLength;case hf:return s*e/o.components*o.byteLength;case is:return s*e*2/o.components*o.byteLength;case pf:return s*e*2/o.components*o.byteLength;case wx:return s*e*3/o.components*o.byteLength;case Ei:return s*e*4/o.components*o.byteLength;case mf:return s*e*4/o.components*o.byteLength;case Ll:case Il:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Fl:case kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Md:case Ed:return Math.max(s,16)*Math.max(e,8)/4;case Sd:case bd:return Math.max(s,8)*Math.max(e,8)/2;case wd:case Td:case Cd:case Nd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ad:case Ol:case Rd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Dd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ld:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Id:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Fd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case kd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Od:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Bd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case zd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Gd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Vd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case jd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Wd:case Xd:case qd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Yd:case Kd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Bl:case $d:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Z_(s){switch(s){case $n:case yx:return{byteLength:1,components:1};case Ya:case Sx:case Oi:return{byteLength:2,components:1};case df:case ff:return{byteLength:2,components:4};case Ui:case uf:case Ii:return{byteLength:4,components:1};case Mx:case bx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cf}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zx(){let s=null,e=!1,n=null,r=null;function o(l,d){r=s.requestAnimationFrame(o),n(l,d)}return{start:function(){e!==!0&&n!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function J_(s){const e=new WeakMap;function n(h,m){const p=h.array,v=h.usage,S=p.byteLength,g=s.createBuffer();s.bindBuffer(m,g),s.bufferData(m,p,v),h.onUploadCallback();let b;if(p instanceof Float32Array)b=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)b=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?b=s.HALF_FLOAT:b=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)b=s.SHORT;else if(p instanceof Uint32Array)b=s.UNSIGNED_INT;else if(p instanceof Int32Array)b=s.INT;else if(p instanceof Int8Array)b=s.BYTE;else if(p instanceof Uint8Array)b=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)b=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:b,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:S}}function r(h,m,p){const v=m.array,S=m.updateRanges;if(s.bindBuffer(p,h),S.length===0)s.bufferSubData(p,0,v);else{S.sort((b,T)=>b.start-T.start);let g=0;for(let b=1;b<S.length;b++){const T=S[g],N=S[b];N.start<=T.start+T.count+1?T.count=Math.max(T.count,N.start+N.count-T.start):(++g,S[g]=N)}S.length=g+1;for(let b=0,T=S.length;b<T;b++){const N=S[b];s.bufferSubData(p,N.start*v.BYTES_PER_ELEMENT,v,N.start,N.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function l(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(s.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,n(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:o,remove:l,update:d}}var Q_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ey=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ty=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ny=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ry=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ay=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ly=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fy=`#ifdef USE_IRIDESCENCE
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
#endif`,hy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,py=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,my=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_y=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Sy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,My=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,by=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
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
#endif`,Ey=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,wy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ty=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ay=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ny="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ry=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Py=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Dy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ly=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Iy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ky=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Uy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Oy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,By=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif
#include <lightprobes_pars_fragment>`,Wy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Xy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ky=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$y=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Zy=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,eS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tS=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,nS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,aS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_S=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,MS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ES=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,TS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,AS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,CS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,NS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,RS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,PS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,LS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,IS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,FS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,kS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,US=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,OS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,BS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,HS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,GS=`#ifdef USE_SKINNING
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
#endif`,VS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,WS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,XS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,YS=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,KS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$S=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ZS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,JS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const QS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,aM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,oM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,lM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,cM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,pM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,xM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,vM=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_M=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,SM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,MM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,EM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,TM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,CM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,DM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:Q_,alphahash_pars_fragment:ey,alphamap_fragment:ty,alphamap_pars_fragment:ny,alphatest_fragment:iy,alphatest_pars_fragment:ry,aomap_fragment:sy,aomap_pars_fragment:ay,batching_pars_vertex:oy,batching_vertex:ly,begin_vertex:cy,beginnormal_vertex:uy,bsdfs:dy,iridescence_fragment:fy,bumpmap_pars_fragment:hy,clipping_planes_fragment:py,clipping_planes_pars_fragment:my,clipping_planes_pars_vertex:xy,clipping_planes_vertex:gy,color_fragment:vy,color_pars_fragment:_y,color_pars_vertex:yy,color_vertex:Sy,common:My,cube_uv_reflection_fragment:by,defaultnormal_vertex:Ey,displacementmap_pars_vertex:wy,displacementmap_vertex:Ty,emissivemap_fragment:Ay,emissivemap_pars_fragment:Cy,colorspace_fragment:Ny,colorspace_pars_fragment:Ry,envmap_fragment:Py,envmap_common_pars_fragment:Dy,envmap_pars_fragment:Ly,envmap_pars_vertex:Iy,envmap_physical_pars_fragment:Wy,envmap_vertex:Fy,fog_vertex:ky,fog_pars_vertex:Uy,fog_fragment:Oy,fog_pars_fragment:By,gradientmap_pars_fragment:zy,lightmap_pars_fragment:Hy,lights_lambert_fragment:Gy,lights_lambert_pars_fragment:Vy,lights_pars_begin:jy,lights_toon_fragment:Xy,lights_toon_pars_fragment:qy,lights_phong_fragment:Yy,lights_phong_pars_fragment:Ky,lights_physical_fragment:$y,lights_physical_pars_fragment:Zy,lights_fragment_begin:Jy,lights_fragment_maps:Qy,lights_fragment_end:eS,lightprobes_pars_fragment:tS,logdepthbuf_fragment:nS,logdepthbuf_pars_fragment:iS,logdepthbuf_pars_vertex:rS,logdepthbuf_vertex:sS,map_fragment:aS,map_pars_fragment:oS,map_particle_fragment:lS,map_particle_pars_fragment:cS,metalnessmap_fragment:uS,metalnessmap_pars_fragment:dS,morphinstance_vertex:fS,morphcolor_vertex:hS,morphnormal_vertex:pS,morphtarget_pars_vertex:mS,morphtarget_vertex:xS,normal_fragment_begin:gS,normal_fragment_maps:vS,normal_pars_fragment:_S,normal_pars_vertex:yS,normal_vertex:SS,normalmap_pars_fragment:MS,clearcoat_normal_fragment_begin:bS,clearcoat_normal_fragment_maps:ES,clearcoat_pars_fragment:wS,iridescence_pars_fragment:TS,opaque_fragment:AS,packing:CS,premultiplied_alpha_fragment:NS,project_vertex:RS,dithering_fragment:PS,dithering_pars_fragment:DS,roughnessmap_fragment:LS,roughnessmap_pars_fragment:IS,shadowmap_pars_fragment:FS,shadowmap_pars_vertex:kS,shadowmap_vertex:US,shadowmask_pars_fragment:OS,skinbase_vertex:BS,skinning_pars_vertex:zS,skinning_vertex:HS,skinnormal_vertex:GS,specularmap_fragment:VS,specularmap_pars_fragment:jS,tonemapping_fragment:WS,tonemapping_pars_fragment:XS,transmission_fragment:qS,transmission_pars_fragment:YS,uv_pars_fragment:KS,uv_pars_vertex:$S,uv_vertex:ZS,worldpos_vertex:JS,background_vert:QS,background_frag:eM,backgroundCube_vert:tM,backgroundCube_frag:nM,cube_vert:iM,cube_frag:rM,depth_vert:sM,depth_frag:aM,distance_vert:oM,distance_frag:lM,equirect_vert:cM,equirect_frag:uM,linedashed_vert:dM,linedashed_frag:fM,meshbasic_vert:hM,meshbasic_frag:pM,meshlambert_vert:mM,meshlambert_frag:xM,meshmatcap_vert:gM,meshmatcap_frag:vM,meshnormal_vert:_M,meshnormal_frag:yM,meshphong_vert:SM,meshphong_frag:MM,meshphysical_vert:bM,meshphysical_frag:EM,meshtoon_vert:wM,meshtoon_frag:TM,points_vert:AM,points_frag:CM,shadow_vert:NM,shadow_frag:RM,sprite_vert:PM,sprite_frag:DM},Fe={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new oe},probesMax:{value:new oe},probesResolution:{value:new oe}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Li={basic:{uniforms:Dn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Dn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new xt(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Dn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Dn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Dn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new xt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Dn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Dn([Fe.points,Fe.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Dn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Dn([Fe.common,Fe.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Dn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Dn([Fe.sprite,Fe.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:Dn([Fe.common,Fe.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:Dn([Fe.lights,Fe.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Li.physical={uniforms:Dn([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Rl={r:0,b:0,g:0},LM=new Kt,Hx=new ut;Hx.set(-1,0,0,0,1,0,0,0,1);function IM(s,e,n,r,o,l){const d=new xt(0);let h=o===!0?0:1,m,p,v=null,S=0,g=null;function b(I){let z=I.isScene===!0?I.background:null;if(z&&z.isTexture){const C=I.backgroundBlurriness>0;z=e.get(z,C)}return z}function T(I){let z=!1;const C=b(I);C===null?y(d,h):C&&C.isColor&&(y(C,1),z=!0);const D=s.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,l):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(s.autoClear||z)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function N(I,z){const C=b(z);C&&(C.isCubeTexture||C.mapping===Xl)?(p===void 0&&(p=new Zn(new eo(1,1,1),new Bi({name:"BackgroundCubeMaterial",uniforms:Ys(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(D,P,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=C,p.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(LM.makeRotationFromEuler(z.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Hx),p.material.toneMapped=St.getTransfer(C.colorSpace)!==kt,(v!==C||S!==C.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,v=C,S=C.version,g=s.toneMapping),p.layers.enableAll(),I.unshift(p,p.geometry,p.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new Zn(new to(2,2),new Bi({name:"BackgroundMaterial",uniforms:Ys(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,m.material.toneMapped=St.getTransfer(C.colorSpace)!==kt,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(v!==C||S!==C.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,v=C,S=C.version,g=s.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null))}function y(I,z){I.getRGB(Rl,Ux(s)),n.buffers.color.setClear(Rl.r,Rl.g,Rl.b,z,l)}function _(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(I,z=1){d.set(I),h=z,y(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(I){h=I,y(d,h)},render:T,addToRenderList:N,dispose:_}}function FM(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,d=!1;function h(H,Z,ie,X,Q){let he=!1;const ee=S(H,X,ie,Z);l!==ee&&(l=ee,p(l.object)),he=b(H,X,ie,Q),he&&T(H,X,ie,Q),Q!==null&&e.update(Q,s.ELEMENT_ARRAY_BUFFER),(he||d)&&(d=!1,C(H,Z,ie,X),Q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function m(){return s.createVertexArray()}function p(H){return s.bindVertexArray(H)}function v(H){return s.deleteVertexArray(H)}function S(H,Z,ie,X){const Q=X.wireframe===!0;let he=r[Z.id];he===void 0&&(he={},r[Z.id]=he);const ee=H.isInstancedMesh===!0?H.id:0;let $=he[ee];$===void 0&&($={},he[ee]=$);let q=$[ie.id];q===void 0&&(q={},$[ie.id]=q);let Y=q[Q];return Y===void 0&&(Y=g(m()),q[Q]=Y),Y}function g(H){const Z=[],ie=[],X=[];for(let Q=0;Q<n;Q++)Z[Q]=0,ie[Q]=0,X[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:ie,attributeDivisors:X,object:H,attributes:{},index:null}}function b(H,Z,ie,X){const Q=l.attributes,he=Z.attributes;let ee=0;const $=ie.getAttributes();for(const q in $)if($[q].location>=0){const R=Q[q];let re=he[q];if(re===void 0&&(q==="instanceMatrix"&&H.instanceMatrix&&(re=H.instanceMatrix),q==="instanceColor"&&H.instanceColor&&(re=H.instanceColor)),R===void 0||R.attribute!==re||re&&R.data!==re.data)return!0;ee++}return l.attributesNum!==ee||l.index!==X}function T(H,Z,ie,X){const Q={},he=Z.attributes;let ee=0;const $=ie.getAttributes();for(const q in $)if($[q].location>=0){let R=he[q];R===void 0&&(q==="instanceMatrix"&&H.instanceMatrix&&(R=H.instanceMatrix),q==="instanceColor"&&H.instanceColor&&(R=H.instanceColor));const re={};re.attribute=R,R&&R.data&&(re.data=R.data),Q[q]=re,ee++}l.attributes=Q,l.attributesNum=ee,l.index=X}function N(){const H=l.newAttributes;for(let Z=0,ie=H.length;Z<ie;Z++)H[Z]=0}function y(H){_(H,0)}function _(H,Z){const ie=l.newAttributes,X=l.enabledAttributes,Q=l.attributeDivisors;ie[H]=1,X[H]===0&&(s.enableVertexAttribArray(H),X[H]=1),Q[H]!==Z&&(s.vertexAttribDivisor(H,Z),Q[H]=Z)}function I(){const H=l.newAttributes,Z=l.enabledAttributes;for(let ie=0,X=Z.length;ie<X;ie++)Z[ie]!==H[ie]&&(s.disableVertexAttribArray(ie),Z[ie]=0)}function z(H,Z,ie,X,Q,he,ee){ee===!0?s.vertexAttribIPointer(H,Z,ie,Q,he):s.vertexAttribPointer(H,Z,ie,X,Q,he)}function C(H,Z,ie,X){N();const Q=X.attributes,he=ie.getAttributes(),ee=Z.defaultAttributeValues;for(const $ in he){const q=he[$];if(q.location>=0){let Y=Q[$];if(Y===void 0&&($==="instanceMatrix"&&H.instanceMatrix&&(Y=H.instanceMatrix),$==="instanceColor"&&H.instanceColor&&(Y=H.instanceColor)),Y!==void 0){const R=Y.normalized,re=Y.itemSize,ye=e.get(Y);if(ye===void 0)continue;const He=ye.buffer,Ue=ye.type,Ge=ye.bytesPerElement,se=Ue===s.INT||Ue===s.UNSIGNED_INT||Y.gpuType===uf;if(Y.isInterleavedBufferAttribute){const de=Y.data,Me=de.stride,Ye=Y.offset;if(de.isInstancedInterleavedBuffer){for(let we=0;we<q.locationSize;we++)_(q.location+we,de.meshPerAttribute);H.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let we=0;we<q.locationSize;we++)y(q.location+we);s.bindBuffer(s.ARRAY_BUFFER,He);for(let we=0;we<q.locationSize;we++)z(q.location+we,re/q.locationSize,Ue,R,Me*Ge,(Ye+re/q.locationSize*we)*Ge,se)}else{if(Y.isInstancedBufferAttribute){for(let de=0;de<q.locationSize;de++)_(q.location+de,Y.meshPerAttribute);H.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let de=0;de<q.locationSize;de++)y(q.location+de);s.bindBuffer(s.ARRAY_BUFFER,He);for(let de=0;de<q.locationSize;de++)z(q.location+de,re/q.locationSize,Ue,R,re*Ge,re/q.locationSize*de*Ge,se)}}else if(ee!==void 0){const R=ee[$];if(R!==void 0)switch(R.length){case 2:s.vertexAttrib2fv(q.location,R);break;case 3:s.vertexAttrib3fv(q.location,R);break;case 4:s.vertexAttrib4fv(q.location,R);break;default:s.vertexAttrib1fv(q.location,R)}}}}I()}function D(){F();for(const H in r){const Z=r[H];for(const ie in Z){const X=Z[ie];for(const Q in X){const he=X[Q];for(const ee in he)v(he[ee].object),delete he[ee];delete X[Q]}}delete r[H]}}function P(H){if(r[H.id]===void 0)return;const Z=r[H.id];for(const ie in Z){const X=Z[ie];for(const Q in X){const he=X[Q];for(const ee in he)v(he[ee].object),delete he[ee];delete X[Q]}}delete r[H.id]}function O(H){for(const Z in r){const ie=r[Z];for(const X in ie){const Q=ie[X];if(Q[H.id]===void 0)continue;const he=Q[H.id];for(const ee in he)v(he[ee].object),delete he[ee];delete Q[H.id]}}}function w(H){for(const Z in r){const ie=r[Z],X=H.isInstancedMesh===!0?H.id:0,Q=ie[X];if(Q!==void 0){for(const he in Q){const ee=Q[he];for(const $ in ee)v(ee[$].object),delete ee[$];delete Q[he]}delete ie[X],Object.keys(ie).length===0&&delete r[Z]}}}function F(){k(),d=!0,l!==o&&(l=o,p(l.object))}function k(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:F,resetDefaultState:k,dispose:D,releaseStatesOfGeometry:P,releaseStatesOfObject:w,releaseStatesOfProgram:O,initAttributes:N,enableAttribute:y,disableUnusedAttributes:I}}function kM(s,e,n){let r;function o(m){r=m}function l(m,p){s.drawArrays(r,m,p),n.update(p,r,1)}function d(m,p,v){v!==0&&(s.drawArraysInstanced(r,m,p,v),n.update(p,r,v))}function h(m,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,p,0,v);let g=0;for(let b=0;b<v;b++)g+=p[b];n.update(g,r,1)}this.setMode=o,this.render=l,this.renderInstances=d,this.renderMultiDraw=h}function UM(s,e,n,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function d(O){return!(O!==Ei&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(O){const w=O===Oi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==$n&&O!==Ii&&!w&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function m(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const v=m(p);v!==p&&(lt("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const S=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&g===!1&&lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const b=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),z=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),D=s.getParameter(s.MAX_SAMPLES),P=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:S,reversedDepthBuffer:g,maxTextures:b,maxVertexTextures:T,maxTextureSize:N,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:I,maxVaryings:z,maxFragmentUniforms:C,maxSamples:D,samples:P}}function OM(s){const e=this;let n=null,r=0,o=!1,l=!1;const d=new Cr,h=new ut,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,g){const b=S.length!==0||g||r!==0||o;return o=g,r=S.length,b},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(S,g){n=v(S,g,0)},this.setState=function(S,g,b){const T=S.clippingPlanes,N=S.clipIntersection,y=S.clipShadows,_=s.get(S);if(!o||T===null||T.length===0||l&&!y)l?v(null):p();else{const I=l?0:r,z=I*4;let C=_.clippingState||null;m.value=C,C=v(T,g,z,b);for(let D=0;D!==z;++D)C[D]=n[D];_.clippingState=C,this.numIntersection=N?this.numPlanes:0,this.numPlanes+=I}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(S,g,b,T){const N=S!==null?S.length:0;let y=null;if(N!==0){if(y=m.value,T!==!0||y===null){const _=b+N*4,I=g.matrixWorldInverse;h.getNormalMatrix(I),(y===null||y.length<_)&&(y=new Float32Array(_));for(let z=0,C=b;z!==N;++z,C+=4)d.copy(S[z]).applyMatrix4(I,h),d.normal.toArray(y,C),y[C+3]=d.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=N,e.numIntersection=0,y}}const Vs=4,BM=6,zM=20,HM=256,za=new Sf,Pm=new xt;let sd=null,ad=0,od=0,ld=!1;const GM=new oe,Jr=new oe;class Dm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,l={}){const{size:d=256,position:h=GM}=l;sd=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),od=this._renderer.getActiveMipmapLevel(),ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,h),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Im(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(sd,ad,od),this._renderer.xr.enabled=ld,e.scissorTest=!1,Hs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ns||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sd=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),od=this._renderer.getActiveMipmapLevel(),ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Oi,format:Ei,colorSpace:zl,depthBuffer:!1},o=Lm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lm(e,n,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=VM(l)),this._blurMaterial=WM(l,e,n),this._ggxMaterial=jM(l,e,n)}return o}_compileMaterial(e){const n=new Zn(new Jn,e);this._renderer.compile(n,za)}_sceneToCubeUV(e,n,r,o,l){const m=new ci(90,1,n,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],S=this._renderer,g=S.autoClear,b=S.toneMapping;S.getClearColor(Pm),S.toneMapping=ki,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(o),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Zn(new eo,new Xa({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));const N=this._backgroundBox,y=N.material;let _=!1;const I=e.background;I?I.isColor&&(y.color.copy(I),e.background=null,_=!0):(y.color.copy(Pm),_=!0);for(let z=0;z<6;z++){const C=z%3;C===0?(m.up.set(0,p[z],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x+v[z],l.y,l.z)):C===1?(m.up.set(0,0,p[z]),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y+v[z],l.z)):(m.up.set(0,p[z],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y,l.z+v[z]));const D=this._cubeSize;Hs(o,C*D,z>2?D:0,D,D),S.setRenderTarget(o),_&&S.render(N,m),S.render(e,m)}S.toneMapping=b,S.autoClear=g,e.background=I}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===ns||e.mapping===qs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Im());const l=o?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=l;const h=l.uniforms;h.envMap.value=e;const m=this._cubeSize;Hs(n,0,0,3*m,2*m),r.setRenderTarget(n),r.render(d,za)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,l=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const m=d.uniforms,p=r/(this._lodMeshes.length-1),v=n/(this._lodMeshes.length-1),S=Math.sqrt(p*p-v*v),g=p*1.25,b=S*g,{_lodMax:T}=this,N=this._sizeLods[r],y=3*N*(r>T-Vs?r-T+Vs:0),_=4*(this._cubeSize-N);m.envMap.value=e.texture,m.roughness.value=b,m.mipInt.value=T-n,Hs(l,y,_,3*N,2*N),o.setRenderTarget(l),o.render(h,za),m.envMap.value=l.texture,m.roughness.value=0,m.mipInt.value=T-r,Hs(e,y,_,3*N,2*N),o.setRenderTarget(e),o.render(h,za)}_blur(e,n,r,o){const l=this._pingPongRenderTarget,d=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(e,l,n,r,d),this._blurPass(l,e,r,r,d)}_blurPass(e,n,r,o,l){const d=this._renderer,h=this._blurMaterial,m=this._lodMeshes[o];m.material=h;const p=h.uniforms;p.envMap.value=e.texture,p.sigma.value=l,p.mipInt.value=this._lodMax-r;const v=this._sizeLods[o],S=3*v*(o>this._lodMax-Vs?o-this._lodMax+Vs:0),g=4*(this._cubeSize-v);Hs(n,S,g,3*v,2*v),d.setRenderTarget(n),d.render(m,za)}}function VM(s){const e=[],n=[];let r=s;const o=s-Vs+1+BM;for(let l=0;l<o;l++){const d=Math.pow(2,r);e.push(d);const h=1/(d-2),m=-h,p=1+h,v=[m,m,p,m,p,p,m,m,p,p,m,p],S=6,g=6,b=3,T=new Float32Array(b*g*S),N=new Float32Array(b*g*S);for(let _=0;_<S;_++){const I=_%3*2/3-1,z=_>2?0:-1,C=[I,z,0,I+2/3,z,0,I+2/3,z+1,0,I,z,0,I+2/3,z+1,0,I,z+1,0];T.set(C,b*g*_);for(let D=0;D<g;D++){const P=v[D*2]*2-1,O=v[D*2+1]*2-1;_===0?Jr.set(1,O,P):_===1?Jr.set(-P,1,-O):_===2?Jr.set(-P,O,1):_===3?Jr.set(-1,O,-P):_===4?Jr.set(-P,-1,O):Jr.set(P,O,-1),Jr.toArray(N,(_*g+D)*b)}}const y=new Jn;y.setAttribute("position",new Ti(T,b)),y.setAttribute("outputDirection",new Ti(N,b)),n.push(new Zn(y,null)),r>Vs&&r--}return{lodMeshes:n,sizeLods:e}}function Lm(s,e,n){const r=new wi(s,e,n);return r.texture.mapping=Xl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Hs(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function jM(s,e,n){return new Bi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:HM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Yl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function WM(s,e,n){return new Bi({name:"SphericalGaussianBlur",defines:{SAMPLES:zM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Yl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function Im(){return new Bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yl(),fragmentShader:`

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
		`,blending:nr,depthTest:!1,depthWrite:!1})}function Fm(){return new Bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function Yl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Gx extends wi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Fx(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new eo(5,5,5),l=new Bi({name:"CubemapFromEquirect",uniforms:Ys(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Vn,blending:nr});l.uniforms.tEquirect.value=n;const d=new Zn(o,l),h=n.minFilter;return n.minFilter===Qr&&(n.minFilter=Cn),new K_(1,10,this).update(e,d),n.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,r,o);e.setRenderTarget(l)}}function XM(s){let e=new WeakMap,n=new WeakMap,r=null;function o(g,b=!1){return g==null?null:b?d(g):l(g)}function l(g){if(g&&g.isTexture){const b=g.mapping;if(b===Du||b===Lu)if(e.has(g)){const T=e.get(g).texture;return h(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const N=new Gx(T.height);return N.fromEquirectangularTexture(s,g),e.set(g,N),g.addEventListener("dispose",p),h(N.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const b=g.mapping,T=b===Du||b===Lu,N=b===ns||b===qs;if(T||N){let y=n.get(g);const _=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==_)return r===null&&(r=new Dm(s)),y=T?r.fromEquirectangular(g,y):r.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,n.set(g,y),y.texture;if(y!==void 0)return y.texture;{const I=g.image;return T&&I&&I.height>0||N&&I&&m(I)?(r===null&&(r=new Dm(s)),y=T?r.fromEquirectangular(g):r.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,n.set(g,y),g.addEventListener("dispose",v),y.texture):null}}}return g}function h(g,b){return b===Du?g.mapping=ns:b===Lu&&(g.mapping=qs),g}function m(g){let b=0;const T=6;for(let N=0;N<T;N++)g[N]!==void 0&&b++;return b===T}function p(g){const b=g.target;b.removeEventListener("dispose",p);const T=e.get(b);T!==void 0&&(e.delete(b),T.dispose())}function v(g){const b=g.target;b.removeEventListener("dispose",v);const T=n.get(b);T!==void 0&&(n.delete(b),T.dispose())}function S(){e=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:S}}function qM(s){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Ws("WebGLRenderer: "+r+" extension not supported."),o}}}function YM(s,e,n,r){const o={},l=new WeakMap;function d(S){const g=S.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",d),delete o[g.id];const b=l.get(g);b&&(e.remove(b),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function h(S,g){return o[g.id]===!0||(g.addEventListener("dispose",d),o[g.id]=!0,n.memory.geometries++),g}function m(S){const g=S.attributes;for(const b in g)e.update(g[b],s.ARRAY_BUFFER)}function p(S){const g=[],b=S.index,T=S.attributes.position;let N=0;if(T===void 0)return;if(b!==null){const I=b.array;N=b.version;for(let z=0,C=I.length;z<C;z+=3){const D=I[z+0],P=I[z+1],O=I[z+2];g.push(D,P,P,O,O,D)}}else{const I=T.array;N=T.version;for(let z=0,C=I.length/3-1;z<C;z+=3){const D=z+0,P=z+1,O=z+2;g.push(D,P,P,O,O,D)}}const y=new(T.count>=65535?Dx:Px)(g,1);y.version=N;const _=l.get(S);_&&e.remove(_),l.set(S,y)}function v(S){const g=l.get(S);if(g){const b=S.index;b!==null&&g.version<b.version&&p(S)}else p(S);return l.get(S)}return{get:h,update:m,getWireframeAttribute:v}}function KM(s,e,n){let r;function o(S){r=S}let l,d;function h(S){l=S.type,d=S.bytesPerElement}function m(S,g){s.drawElements(r,g,l,S*d),n.update(g,r,1)}function p(S,g,b){b!==0&&(s.drawElementsInstanced(r,g,l,S*d,b),n.update(g,r,b))}function v(S,g,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,l,S,0,b);let N=0;for(let y=0;y<b;y++)N+=g[y];n.update(N,r,1)}this.setMode=o,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=v}function $M(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,d,h){switch(n.calls++,d){case s.TRIANGLES:n.triangles+=h*(l/3);break;case s.LINES:n.lines+=h*(l/2);break;case s.LINE_STRIP:n.lines+=h*(l-1);break;case s.LINE_LOOP:n.lines+=h*l;break;case s.POINTS:n.points+=h*l;break;default:Rt("WebGLInfo: Unknown draw mode:",d);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function ZM(s,e,n){const r=new WeakMap,o=new Yt;function l(d,h,m){const p=d.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,S=v!==void 0?v.length:0;let g=r.get(h);if(g===void 0||g.count!==S){let k=function(){w.dispose(),r.delete(h),h.removeEventListener("dispose",k)};var b=k;g!==void 0&&g.texture.dispose();const T=h.morphAttributes.position!==void 0,N=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],z=h.morphAttributes.color||[];let C=0;T===!0&&(C=1),N===!0&&(C=2),y===!0&&(C=3);let D=h.attributes.position.count*C,P=1;D>e.maxTextureSize&&(P=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const O=new Float32Array(D*P*4*S),w=new Cx(O,D,P,S);w.type=Ii,w.needsUpdate=!0;const F=C*4;for(let H=0;H<S;H++){const Z=_[H],ie=I[H],X=z[H],Q=D*P*4*H;for(let he=0;he<Z.count;he++){const ee=he*F;T===!0&&(o.fromBufferAttribute(Z,he),O[Q+ee+0]=o.x,O[Q+ee+1]=o.y,O[Q+ee+2]=o.z,O[Q+ee+3]=0),N===!0&&(o.fromBufferAttribute(ie,he),O[Q+ee+4]=o.x,O[Q+ee+5]=o.y,O[Q+ee+6]=o.z,O[Q+ee+7]=0),y===!0&&(o.fromBufferAttribute(X,he),O[Q+ee+8]=o.x,O[Q+ee+9]=o.y,O[Q+ee+10]=o.z,O[Q+ee+11]=X.itemSize===4?o.w:1)}}g={count:S,texture:w,size:new Et(D,P)},r.set(h,g),h.addEventListener("dispose",k)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",d.morphTexture,n);else{let T=0;for(let y=0;y<p.length;y++)T+=p[y];const N=h.morphTargetsRelative?1:1-T;m.getUniforms().setValue(s,"morphTargetBaseInfluence",N),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",g.texture,n),m.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function JM(s,e,n,r,o){let l=new WeakMap;function d(p){const v=o.render.frame,S=p.geometry,g=e.get(p,S);if(l.get(g)!==v&&(e.update(g),l.set(g,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),l.get(p)!==v&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,v))),p.isSkinnedMesh){const b=p.skeleton;l.get(b)!==v&&(b.update(),l.set(b,v))}return g}function h(){l=new WeakMap}function m(p){const v=p.target;v.removeEventListener("dispose",m),r.releaseStatesOfObject(v),n.remove(v.instanceMatrix),v.instanceColor!==null&&n.remove(v.instanceColor)}return{update:d,dispose:h}}const QM={[fx]:"LINEAR_TONE_MAPPING",[hx]:"REINHARD_TONE_MAPPING",[px]:"CINEON_TONE_MAPPING",[mx]:"ACES_FILMIC_TONE_MAPPING",[gx]:"AGX_TONE_MAPPING",[vx]:"NEUTRAL_TONE_MAPPING",[xx]:"CUSTOM_TONE_MAPPING"};function eb(s,e,n,r,o,l){const d=new wi(e,n,{type:s,depthBuffer:o,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,m=null;const p=new Jn;p.setAttribute("position",new Fn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Fn([0,2,0,0,2,0],2));const v=new H_({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),S=new Zn(p,v),g=new Sf(-1,1,1,-1,0,1);let b=null,T=null,N=!1,y,_=null,I=[],z=!1;this.setSize=function(C,D){d.setSize(C,D),h!==null&&h.setSize(C,D),m!==null&&m.setSize(C,D);for(let P=0;P<I.length;P++){const O=I[P];O.setSize&&O.setSize(C,D)}},this.setEffects=function(C){I=C,z=I.length>0&&I[0].isRenderPass===!0;const D=d.width,P=d.height;I.length>0&&h===null&&(h=new wi(D,P,{type:Oi,depthBuffer:!1,stencilBuffer:!1}),m=new wi(D,P,{type:Oi,depthBuffer:!1,stencilBuffer:!1}));for(let O=0;O<I.length;O++){const w=I[O];w.setSize&&w.setSize(D,P)}},this.begin=function(C,D){if(N||C.toneMapping===ki&&I.length===0)return!1;if(_=D,D!==null){const P=D.width,O=D.height;(d.width!==P||d.height!==O)&&this.setSize(P,O)}return z===!1&&C.setRenderTarget(d),y=C.toneMapping,C.toneMapping=ki,!0},this.hasRenderPass=function(){return z},this.end=function(C,D){C.toneMapping=y,N=!0;let P=d,O=h;for(let w=0;w<I.length;w++){const F=I[w];F.enabled!==!1&&(F.render(C,O,P,D),F.needsSwap!==!1&&(P=O,O=O===h?m:h))}if(b!==C.outputColorSpace||T!==C.toneMapping){b=C.outputColorSpace,T=C.toneMapping,v.defines={},St.getTransfer(b)===kt&&(v.defines.SRGB_TRANSFER="");const w=QM[T];w&&(v.defines[w]=""),v.needsUpdate=!0}v.uniforms.tDiffuse.value=P.texture,C.setRenderTarget(_),C.render(S,g),_=null,N=!1},this.isCompositing=function(){return N},this.dispose=function(){d.dispose(),h!==null&&h.dispose(),m!==null&&m.dispose(),p.dispose(),v.dispose()}}const Vx=new In,ef=new Za(1,1),jx=new Cx,Wx=new g_,Xx=new Fx,km=[],Um=[],Om=new Float32Array(16),Bm=new Float32Array(9),zm=new Float32Array(4);function Zs(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let l=km[o];if(l===void 0&&(l=new Float32Array(o),km[o]=l),e!==0){r.toArray(l,0);for(let d=1,h=0;d!==e;++d)h+=n,s[d].toArray(l,h)}return l}function un(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function dn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Kl(s,e){let n=Um[e];n===void 0&&(n=new Int32Array(e),Um[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function tb(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function nb(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(un(n,e))return;s.uniform2fv(this.addr,e),dn(n,e)}}function ib(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(un(n,e))return;s.uniform3fv(this.addr,e),dn(n,e)}}function rb(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(un(n,e))return;s.uniform4fv(this.addr,e),dn(n,e)}}function sb(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(un(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),dn(n,e)}else{if(un(n,r))return;zm.set(r),s.uniformMatrix2fv(this.addr,!1,zm),dn(n,r)}}function ab(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(un(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),dn(n,e)}else{if(un(n,r))return;Bm.set(r),s.uniformMatrix3fv(this.addr,!1,Bm),dn(n,r)}}function ob(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(un(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),dn(n,e)}else{if(un(n,r))return;Om.set(r),s.uniformMatrix4fv(this.addr,!1,Om),dn(n,r)}}function lb(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function cb(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(un(n,e))return;s.uniform2iv(this.addr,e),dn(n,e)}}function ub(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(un(n,e))return;s.uniform3iv(this.addr,e),dn(n,e)}}function db(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(un(n,e))return;s.uniform4iv(this.addr,e),dn(n,e)}}function fb(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function hb(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(un(n,e))return;s.uniform2uiv(this.addr,e),dn(n,e)}}function pb(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(un(n,e))return;s.uniform3uiv(this.addr,e),dn(n,e)}}function mb(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(un(n,e))return;s.uniform4uiv(this.addr,e),dn(n,e)}}function xb(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(ef.compareFunction=n.isReversedDepthBuffer()?gf:xf,l=ef):l=Vx,n.setTexture2D(e||l,o)}function gb(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||Wx,o)}function vb(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||Xx,o)}function _b(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||jx,o)}function yb(s){switch(s){case 5126:return tb;case 35664:return nb;case 35665:return ib;case 35666:return rb;case 35674:return sb;case 35675:return ab;case 35676:return ob;case 5124:case 35670:return lb;case 35667:case 35671:return cb;case 35668:case 35672:return ub;case 35669:case 35673:return db;case 5125:return fb;case 36294:return hb;case 36295:return pb;case 36296:return mb;case 35678:case 36198:case 36298:case 36306:case 35682:return xb;case 35679:case 36299:case 36307:return gb;case 35680:case 36300:case 36308:case 36293:return vb;case 36289:case 36303:case 36311:case 36292:return _b}}function Sb(s,e){s.uniform1fv(this.addr,e)}function Mb(s,e){const n=Zs(e,this.size,2);s.uniform2fv(this.addr,n)}function bb(s,e){const n=Zs(e,this.size,3);s.uniform3fv(this.addr,n)}function Eb(s,e){const n=Zs(e,this.size,4);s.uniform4fv(this.addr,n)}function wb(s,e){const n=Zs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function Tb(s,e){const n=Zs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function Ab(s,e){const n=Zs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function Cb(s,e){s.uniform1iv(this.addr,e)}function Nb(s,e){s.uniform2iv(this.addr,e)}function Rb(s,e){s.uniform3iv(this.addr,e)}function Pb(s,e){s.uniform4iv(this.addr,e)}function Db(s,e){s.uniform1uiv(this.addr,e)}function Lb(s,e){s.uniform2uiv(this.addr,e)}function Ib(s,e){s.uniform3uiv(this.addr,e)}function Fb(s,e){s.uniform4uiv(this.addr,e)}function kb(s,e,n){const r=this.cache,o=e.length,l=Kl(n,o);un(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));let d;this.type===s.SAMPLER_2D_SHADOW?d=ef:d=Vx;for(let h=0;h!==o;++h)n.setTexture2D(e[h]||d,l[h])}function Ub(s,e,n){const r=this.cache,o=e.length,l=Kl(n,o);un(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));for(let d=0;d!==o;++d)n.setTexture3D(e[d]||Wx,l[d])}function Ob(s,e,n){const r=this.cache,o=e.length,l=Kl(n,o);un(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));for(let d=0;d!==o;++d)n.setTextureCube(e[d]||Xx,l[d])}function Bb(s,e,n){const r=this.cache,o=e.length,l=Kl(n,o);un(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));for(let d=0;d!==o;++d)n.setTexture2DArray(e[d]||jx,l[d])}function zb(s){switch(s){case 5126:return Sb;case 35664:return Mb;case 35665:return bb;case 35666:return Eb;case 35674:return wb;case 35675:return Tb;case 35676:return Ab;case 5124:case 35670:return Cb;case 35667:case 35671:return Nb;case 35668:case 35672:return Rb;case 35669:case 35673:return Pb;case 5125:return Db;case 36294:return Lb;case 36295:return Ib;case 36296:return Fb;case 35678:case 36198:case 36298:case 36306:case 35682:return kb;case 35679:case 36299:case 36307:return Ub;case 35680:case 36300:case 36308:case 36293:return Ob;case 36289:case 36303:case 36311:case 36292:return Bb}}class Hb{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=yb(n.type)}}class Gb{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=zb(n.type)}}class Vb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let l=0,d=o.length;l!==d;++l){const h=o[l];h.setValue(e,n[h.id],r)}}}const cd=/(\w+)(\])?(\[|\.)?/g;function Hm(s,e){s.seq.push(e),s.map[e.id]=e}function jb(s,e,n){const r=s.name,o=r.length;for(cd.lastIndex=0;;){const l=cd.exec(r),d=cd.lastIndex;let h=l[1];const m=l[2]==="]",p=l[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===o){Hm(n,p===void 0?new Hb(h,s,e):new Gb(h,s,e));break}else{let S=n.map[h];S===void 0&&(S=new Vb(h),Hm(n,S)),n=S}}}class Ul{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const h=e.getActiveUniform(n,d),m=e.getUniformLocation(n,h.name);jb(h,m,this)}const o=[],l=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(d):l.push(d);o.length>0&&(this.seq=o.concat(l))}setValue(e,n,r,o){const l=this.map[n];l!==void 0&&l.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let l=0,d=n.length;l!==d;++l){const h=n[l],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,l=e.length;o!==l;++o){const d=e[o];d.id in n&&r.push(d)}return r}}function Gm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const Wb=37297;let Xb=0;function qb(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let d=o;d<l;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${n[d]}`)}return r.join(`
`)}const Vm=new ut;function Yb(s){St._getMatrix(Vm,St.workingColorSpace,s);const e=`mat3( ${Vm.elements.map(n=>n.toFixed(4))} )`;switch(St.getTransfer(s)){case Hl:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function jm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const d=/ERROR: 0:(\d+)/.exec(l);if(d){const h=parseInt(d[1]);return n.toUpperCase()+`

`+l+`

`+qb(s.getShaderSource(e),h)}else return l}function Kb(s,e){const n=Yb(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const $b={[fx]:"Linear",[hx]:"Reinhard",[px]:"Cineon",[mx]:"ACESFilmic",[gx]:"AgX",[vx]:"Neutral",[xx]:"Custom"};function Zb(s,e){const n=$b[e];return n===void 0?(lt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Pl=new oe;function Jb(){St.getLuminanceCoefficients(Pl);const s=Pl.x.toFixed(4),e=Pl.y.toFixed(4),n=Pl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ja).join(`
`)}function e1(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function t1(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),d=l.name;let h=1;l.type===s.FLOAT_MAT2&&(h=2),l.type===s.FLOAT_MAT3&&(h=3),l.type===s.FLOAT_MAT4&&(h=4),n[d]={type:l.type,location:s.getAttribLocation(e,d),locationSize:h}}return n}function ja(s){return s!==""}function Wm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const n1=/^[ \t]*#include +<([\w\d./]+)>/gm;function tf(s){return s.replace(n1,r1)}const i1=new Map;function r1(s,e){let n=pt[e];if(n===void 0){const r=i1.get(e);if(r!==void 0)n=pt[r],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return tf(n)}const s1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qm(s){return s.replace(s1,a1)}function a1(s,e,n,r){let o="";for(let l=parseInt(e);l<parseInt(n);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Ym(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const o1={[Dl]:"SHADOWMAP_TYPE_PCF",[Ga]:"SHADOWMAP_TYPE_VSM"};function l1(s){return o1[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const c1={[ns]:"ENVMAP_TYPE_CUBE",[qs]:"ENVMAP_TYPE_CUBE",[Xl]:"ENVMAP_TYPE_CUBE_UV"};function u1(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":c1[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const d1={[qs]:"ENVMAP_MODE_REFRACTION"};function f1(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":d1[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const h1={[dx]:"ENVMAP_BLENDING_MULTIPLY",[Yv]:"ENVMAP_BLENDING_MIX",[Kv]:"ENVMAP_BLENDING_ADD"};function p1(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":h1[s.combine]||"ENVMAP_BLENDING_NONE"}function m1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function x1(s,e,n,r){const o=s.getContext(),l=n.defines;let d=n.vertexShader,h=n.fragmentShader;const m=l1(n),p=u1(n),v=f1(n),S=p1(n),g=m1(n),b=Qb(n),T=e1(l),N=o.createProgram();let y,_,I=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(ja).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(ja).join(`
`),_.length>0&&(_+=`
`)):(y=[Ym(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ja).join(`
`),_=[Ym(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+v:"",n.envMap?"#define "+S:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ki?"#define TONE_MAPPING":"",n.toneMapping!==ki?pt.tonemapping_pars_fragment:"",n.toneMapping!==ki?Zb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,Kb("linearToOutputTexel",n.outputColorSpace),Jb(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ja).join(`
`)),d=tf(d),d=Wm(d,n),d=Xm(d,n),h=tf(h),h=Wm(h,n),h=Xm(h,n),d=qm(d),h=qm(h),n.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",n.glslVersion===sm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===sm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const z=I+y+d,C=I+_+h,D=Gm(o,o.VERTEX_SHADER,z),P=Gm(o,o.FRAGMENT_SHADER,C);o.attachShader(N,D),o.attachShader(N,P),n.index0AttributeName!==void 0?o.bindAttribLocation(N,0,n.index0AttributeName):n.hasPositionAttribute===!0&&o.bindAttribLocation(N,0,"position"),o.linkProgram(N);function O(H){if(s.debug.checkShaderErrors){const Z=o.getProgramInfoLog(N)||"",ie=o.getShaderInfoLog(D)||"",X=o.getShaderInfoLog(P)||"",Q=Z.trim(),he=ie.trim(),ee=X.trim();let $=!0,q=!0;if(o.getProgramParameter(N,o.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,N,D,P);else{const Y=jm(o,D,"vertex"),R=jm(o,P,"fragment");Rt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(N,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+Q+`
`+Y+`
`+R)}else Q!==""?lt("WebGLProgram: Program Info Log:",Q):(he===""||ee==="")&&(q=!1);q&&(H.diagnostics={runnable:$,programLog:Q,vertexShader:{log:he,prefix:y},fragmentShader:{log:ee,prefix:_}})}o.deleteShader(D),o.deleteShader(P),w=new Ul(o,N),F=t1(o,N)}let w;this.getUniforms=function(){return w===void 0&&O(this),w};let F;this.getAttributes=function(){return F===void 0&&O(this),F};let k=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=o.getProgramParameter(N,Wb)),k},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(N),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Xb++,this.cacheKey=e,this.usedTimes=1,this.program=N,this.vertexShader=D,this.fragmentShader=P,this}let g1=0;class v1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,r){const o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new _1(e),n.set(e,r)),r}}class _1{constructor(e){this.id=g1++,this.code=e,this.usedTimes=0}}function y1(s){return s===is||s===Ol||s===Bl}function S1(s,e,n,r,o,l){const d=new Nx,h=new v1,m=new Set,p=[],v=new Map,S=r.logarithmicDepthBuffer;let g=r.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(w){return m.add(w),w===0?"uv":`uv${w}`}function N(w,F,k,H,Z,ie){const X=H.fog,Q=Z.geometry,he=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?H.environment:null,ee=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,$=e.get(w.envMap||he,ee),q=$&&$.mapping===Xl?$.image.height:null,Y=b[w.type];w.precision!==null&&(g=r.getMaxPrecision(w.precision),g!==w.precision&&lt("WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const R=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,re=R!==void 0?R.length:0;let ye=0;Q.morphAttributes.position!==void 0&&(ye=1),Q.morphAttributes.normal!==void 0&&(ye=2),Q.morphAttributes.color!==void 0&&(ye=3);let He,Ue,Ge,se;if(Y){const At=Li[Y];He=At.vertexShader,Ue=At.fragmentShader}else{He=w.vertexShader,Ue=w.fragmentShader;const At=h.getVertexShaderStage(w),bt=h.getFragmentShaderStage(w);h.update(w,At,bt),Ge=At.id,se=bt.id}const de=s.getRenderTarget(),Me=s.state.buffers.depth.getReversed(),Ye=Z.isInstancedMesh===!0,we=Z.isBatchedMesh===!0,nt=!!w.map,Lt=!!w.matcap,at=!!$,vt=!!w.aoMap,It=!!w.lightMap,ft=!!w.bumpMap&&w.wireframe===!1,Ut=!!w.normalMap,Zt=!!w.displacementMap,nn=!!w.emissiveMap,Dt=!!w.metalnessMap,Gt=!!w.roughnessMap,j=w.anisotropy>0,an=w.clearcoat>0,Tt=w.dispersion>0,L=w.retroreflectivity>0,M=w.iridescence>0,K=w.sheen>0,le=w.transmission>0,fe=j&&!!w.anisotropyMap,be=an&&!!w.clearcoatMap,Ae=an&&!!w.clearcoatNormalMap,pe=an&&!!w.clearcoatRoughnessMap,xe=M&&!!w.iridescenceMap,Re=M&&!!w.iridescenceThicknessMap,Ke=K&&!!w.sheenColorMap,Pe=K&&!!w.sheenRoughnessMap,Te=!!w.specularMap,$e=!!w.specularColorMap,tt=!!w.specularIntensityMap,st=le&&!!w.transmissionMap,G=le&&!!w.thicknessMap,Ce=!!w.gradientMap,me=!!w.alphaMap,Ne=w.alphaTest>0,ke=!!w.alphaHash,ge=!!w.extensions;let Je=ki;w.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Je=s.toneMapping);const Xe={shaderID:Y,shaderType:w.type,shaderName:w.name,vertexShader:He,fragmentShader:Ue,defines:w.defines,customVertexShaderID:Ge,customFragmentShaderID:se,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:we,batchingColor:we&&Z._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&Z.instanceColor!==null,instancingMorph:Ye&&Z.morphTexture!==null,outputColorSpace:de===null?s.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:St.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:nt,matcap:Lt,envMap:at,envMapMode:at&&$.mapping,envMapCubeUVHeight:q,aoMap:vt,lightMap:It,bumpMap:ft,normalMap:Ut,displacementMap:Zt,emissiveMap:nn,normalMapObjectSpace:Ut&&w.normalMapType===Jv,normalMapTangentSpace:Ut&&w.normalMapType===Zd,packedNormalMap:Ut&&w.normalMapType===Zd&&y1(w.normalMap.format),metalnessMap:Dt,roughnessMap:Gt,anisotropy:j,anisotropyMap:fe,clearcoat:an,clearcoatMap:be,clearcoatNormalMap:Ae,clearcoatRoughnessMap:pe,dispersion:Tt,retroreflection:L,iridescence:M,iridescenceMap:xe,iridescenceThicknessMap:Re,sheen:K,sheenColorMap:Ke,sheenRoughnessMap:Pe,specularMap:Te,specularColorMap:$e,specularIntensityMap:tt,transmission:le,transmissionMap:st,thicknessMap:G,gradientMap:Ce,opaque:w.transparent===!1&&w.blending===js&&w.alphaToCoverage===!1,alphaMap:me,alphaTest:Ne,alphaHash:ke,combine:w.combine,mapUv:nt&&T(w.map.channel),aoMapUv:vt&&T(w.aoMap.channel),lightMapUv:It&&T(w.lightMap.channel),bumpMapUv:ft&&T(w.bumpMap.channel),normalMapUv:Ut&&T(w.normalMap.channel),displacementMapUv:Zt&&T(w.displacementMap.channel),emissiveMapUv:nn&&T(w.emissiveMap.channel),metalnessMapUv:Dt&&T(w.metalnessMap.channel),roughnessMapUv:Gt&&T(w.roughnessMap.channel),anisotropyMapUv:fe&&T(w.anisotropyMap.channel),clearcoatMapUv:be&&T(w.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&T(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&T(w.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&T(w.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&T(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&T(w.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&T(w.sheenRoughnessMap.channel),specularMapUv:Te&&T(w.specularMap.channel),specularColorMapUv:$e&&T(w.specularColorMap.channel),specularIntensityMapUv:tt&&T(w.specularIntensityMap.channel),transmissionMapUv:st&&T(w.transmissionMap.channel),thicknessMapUv:G&&T(w.thicknessMap.channel),alphaMapUv:me&&T(w.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Ut||j),vertexNormals:!!Q.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!Q.attributes.uv&&(nt||me),fog:!!X,useFog:w.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||Q.attributes.normal===void 0&&Ut===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Me,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:ye,numSunLights:F.sun.length,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numSunLightShadows:F.sunShadowMap.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numLightProbes:F.numLightProbes,numLightProbeGrids:ie.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:Je,decodeVideoTexture:nt&&w.map.isVideoTexture===!0&&St.getTransfer(w.map.colorSpace)===kt,decodeVideoTextureEmissive:nn&&w.emissiveMap.isVideoTexture===!0&&St.getTransfer(w.emissiveMap.colorSpace)===kt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===er,flipSided:w.side===Vn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ge&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&w.extensions.multiDraw===!0||we)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Xe.vertexUv1s=m.has(1),Xe.vertexUv2s=m.has(2),Xe.vertexUv3s=m.has(3),m.clear(),Xe}function y(w){const F=[];if(w.shaderID?F.push(w.shaderID):(F.push(w.customVertexShaderID),F.push(w.customFragmentShaderID)),w.defines!==void 0)for(const k in w.defines)F.push(k),F.push(w.defines[k]);return w.isRawShaderMaterial===!1&&(_(F,w),I(F,w),F.push(s.outputColorSpace)),F.push(w.customProgramCacheKey),F.join()}function _(w,F){w.push(F.precision),w.push(F.outputColorSpace),w.push(F.envMapMode),w.push(F.envMapCubeUVHeight),w.push(F.mapUv),w.push(F.alphaMapUv),w.push(F.lightMapUv),w.push(F.aoMapUv),w.push(F.bumpMapUv),w.push(F.normalMapUv),w.push(F.displacementMapUv),w.push(F.emissiveMapUv),w.push(F.metalnessMapUv),w.push(F.roughnessMapUv),w.push(F.anisotropyMapUv),w.push(F.clearcoatMapUv),w.push(F.clearcoatNormalMapUv),w.push(F.clearcoatRoughnessMapUv),w.push(F.iridescenceMapUv),w.push(F.iridescenceThicknessMapUv),w.push(F.sheenColorMapUv),w.push(F.sheenRoughnessMapUv),w.push(F.specularMapUv),w.push(F.specularColorMapUv),w.push(F.specularIntensityMapUv),w.push(F.transmissionMapUv),w.push(F.thicknessMapUv),w.push(F.combine),w.push(F.fogExp2),w.push(F.sizeAttenuation),w.push(F.morphTargetsCount),w.push(F.morphAttributeCount),w.push(F.numSunLights),w.push(F.numDirLights),w.push(F.numPointLights),w.push(F.numSpotLights),w.push(F.numSpotLightMaps),w.push(F.numHemiLights),w.push(F.numRectAreaLights),w.push(F.numSunLightShadows),w.push(F.numDirLightShadows),w.push(F.numPointLightShadows),w.push(F.numSpotLightShadows),w.push(F.numSpotLightShadowsWithMaps),w.push(F.numLightProbes),w.push(F.shadowMapType),w.push(F.toneMapping),w.push(F.numClippingPlanes),w.push(F.numClipIntersection),w.push(F.depthPacking)}function I(w,F){d.disableAll(),F.instancing&&d.enable(0),F.instancingColor&&d.enable(1),F.instancingMorph&&d.enable(2),F.matcap&&d.enable(3),F.envMap&&d.enable(4),F.normalMapObjectSpace&&d.enable(5),F.normalMapTangentSpace&&d.enable(6),F.clearcoat&&d.enable(7),F.iridescence&&d.enable(8),F.alphaTest&&d.enable(9),F.vertexColors&&d.enable(10),F.vertexAlphas&&d.enable(11),F.vertexUv1s&&d.enable(12),F.vertexUv2s&&d.enable(13),F.vertexUv3s&&d.enable(14),F.vertexTangents&&d.enable(15),F.anisotropy&&d.enable(16),F.alphaHash&&d.enable(17),F.batching&&d.enable(18),F.dispersion&&d.enable(19),F.retroreflection&&d.enable(24),F.batchingColor&&d.enable(20),F.gradientMap&&d.enable(21),F.packedNormalMap&&d.enable(22),F.vertexNormals&&d.enable(23),w.push(d.mask),d.disableAll(),F.fog&&d.enable(0),F.useFog&&d.enable(1),F.flatShading&&d.enable(2),F.logarithmicDepthBuffer&&d.enable(3),F.reversedDepthBuffer&&d.enable(4),F.skinning&&d.enable(5),F.morphTargets&&d.enable(6),F.morphNormals&&d.enable(7),F.morphColors&&d.enable(8),F.premultipliedAlpha&&d.enable(9),F.shadowMapEnabled&&d.enable(10),F.doubleSided&&d.enable(11),F.flipSided&&d.enable(12),F.useDepthPacking&&d.enable(13),F.dithering&&d.enable(14),F.transmission&&d.enable(15),F.sheen&&d.enable(16),F.opaque&&d.enable(17),F.pointsUvs&&d.enable(18),F.decodeVideoTexture&&d.enable(19),F.decodeVideoTextureEmissive&&d.enable(20),F.alphaToCoverage&&d.enable(21),F.numLightProbeGrids>0&&d.enable(22),F.hasPositionAttribute&&d.enable(23),w.push(d.mask)}function z(w){const F=b[w.type];let k;if(F){const H=Li[F];k=O_.clone(H.uniforms)}else k=w.uniforms;return k}function C(w,F){let k=v.get(F);return k!==void 0?++k.usedTimes:(k=new x1(s,F,w,o),p.push(k),v.set(F,k)),k}function D(w){if(--w.usedTimes===0){const F=p.indexOf(w);p[F]=p[p.length-1],p.pop(),v.delete(w.cacheKey),w.destroy()}}function P(w){h.remove(w)}function O(){h.dispose()}return{getParameters:N,getProgramCacheKey:y,getUniforms:z,acquireProgram:C,releaseProgram:D,releaseShaderCache:P,programs:p,dispose:O}}function M1(){let s=new WeakMap;function e(d){return s.has(d)}function n(d){let h=s.get(d);return h===void 0&&(h={},s.set(d,h)),h}function r(d){s.delete(d)}function o(d,h,m){s.get(d)[h]=m}function l(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:l}}function b1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Km(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function $m(){const s=[];let e=0;const n=[],r=[],o=[];function l(){e=0,n.length=0,r.length=0,o.length=0}function d(g){let b=0;return g.isInstancedMesh&&(b+=2),g.isSkinnedMesh&&(b+=1),b}function h(g,b,T,N,y,_){let I=s[e];return I===void 0?(I={id:g.id,object:g,geometry:b,material:T,materialVariant:d(g),groupOrder:N,renderOrder:g.renderOrder,z:y,group:_},s[e]=I):(I.id=g.id,I.object=g,I.geometry=b,I.material=T,I.materialVariant=d(g),I.groupOrder=N,I.renderOrder=g.renderOrder,I.z=y,I.group=_),e++,I}function m(g,b,T,N,y,_,I){I.reversedDepth===!0&&(y=-y);const z=h(g,b,T,N,y,_);T.transmission>0?r.push(z):T.transparent===!0?o.push(z):n.push(z)}function p(g,b,T,N,y,_){const I=h(g,b,T,N,y,_);T.transmission>0?r.unshift(I):T.transparent===!0?o.unshift(I):n.unshift(I)}function v(g,b){n.length>1&&n.sort(g||b1),r.length>1&&r.sort(b||Km),o.length>1&&o.sort(b||Km)}function S(){for(let g=e,b=s.length;g<b;g++){const T=s[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:n,transmissive:r,transparent:o,init:l,push:m,unshift:p,finish:S,sort:v}}function E1(){let s=new WeakMap;function e(r,o){const l=s.get(r);let d;return l===void 0?(d=new $m,s.set(r,[d])):o>=l.length?(d=new $m,l.push(d)):d=l[o],d}function n(){s=new WeakMap}return{get:e,dispose:n}}function w1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new oe,color:new xt};break;case"SpotLight":n={position:new oe,direction:new oe,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new oe,color:new xt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new oe,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":n={color:new xt,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return s[e.id]=n,n}}}function T1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let A1=0;function C1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function N1(s){const e=new w1,n=T1(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new oe);const o=new oe,l=new Kt,d=new Kt;function h(p){let v=0,S=0,g=0;for(let Z=0;Z<9;Z++)r.probe[Z].set(0,0,0);let b=0,T=0,N=0,y=0,_=0,I=0,z=0,C=0,D=0,P=0,O=0,w=0,F=0,k=0;p.sort(C1);for(let Z=0,ie=p.length;Z<ie;Z++){const X=p[Z],Q=X.color,he=X.intensity,ee=X.distance;let $=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===is?$=X.shadow.map.texture:$=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)v+=Q.r*he,S+=Q.g*he,g+=Q.b*he;else if(X.isLightProbe){for(let q=0;q<9;q++)r.probe[q].addScaledVector(X.sh.coefficients[q],he);k++}else if(X.isSunLight){const q=e.get(X);if(q.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const Y=X.shadow,R=n.get(X);R.shadowIntensity=Y.intensity,R.shadowBias=Y.bias,R.shadowNormalBias=Y.normalBias,R.shadowRadius=Y.radius,R.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),r.sunShadow[T]=R,r.sunShadowMap[T]=$;const re=Y.getViewportCount();for(let ye=0;ye<re;ye++)r.sunShadowMatrix[N+ye]=Y.getMatrix(ye),r.sunShadowCascade[N+ye]=Y._cascadeData[ye];N+=re,T++}r.sun[b]=q,b++}else if(X.isDirectionalLight){const q=e.get(X);if(q.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const Y=X.shadow,R=n.get(X);R.shadowIntensity=Y.intensity,R.shadowBias=Y.bias,R.shadowNormalBias=Y.normalBias,R.shadowRadius=Y.radius,R.shadowMapSize=Y.mapSize,r.directionalShadow[y]=R,r.directionalShadowMap[y]=$,r.directionalShadowMatrix[y]=X.shadow.matrix,D++}r.directional[y]=q,y++}else if(X.isSpotLight){const q=e.get(X);q.position.setFromMatrixPosition(X.matrixWorld),q.color.copy(Q).multiplyScalar(he),q.distance=ee,q.coneCos=Math.cos(X.angle),q.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),q.decay=X.decay,r.spot[I]=q;const Y=X.shadow;if(X.map&&(r.spotLightMap[w]=X.map,w++,Y.updateMatrices(X),X.castShadow&&F++),r.spotLightMatrix[I]=Y.matrix,X.castShadow){const R=n.get(X);R.shadowIntensity=Y.intensity,R.shadowBias=Y.bias,R.shadowNormalBias=Y.normalBias,R.shadowRadius=Y.radius,R.shadowMapSize=Y.mapSize,r.spotShadow[I]=R,r.spotShadowMap[I]=$,O++}I++}else if(X.isRectAreaLight){const q=e.get(X);q.color.copy(Q).multiplyScalar(he),q.halfWidth.set(X.width*.5,0,0),q.halfHeight.set(0,X.height*.5,0),r.rectArea[z]=q,z++}else if(X.isPointLight){const q=e.get(X);if(q.color.copy(X.color).multiplyScalar(X.intensity),q.distance=X.distance,q.decay=X.decay,X.castShadow){const Y=X.shadow,R=n.get(X);R.shadowIntensity=Y.intensity,R.shadowBias=Y.bias,R.shadowNormalBias=Y.normalBias,R.shadowRadius=Y.radius,R.shadowMapSize=Y.mapSize,R.shadowCameraNear=Y.camera.near,R.shadowCameraFar=Y.camera.far,r.pointShadow[_]=R,r.pointShadowMap[_]=$,r.pointShadowMatrix[_]=X.shadow.matrix,P++}r.point[_]=q,_++}else if(X.isHemisphereLight){const q=e.get(X);q.skyColor.copy(X.color).multiplyScalar(he),q.groundColor.copy(X.groundColor).multiplyScalar(he),r.hemi[C]=q,C++}}z>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Fe.LTC_FLOAT_1,r.rectAreaLTC2=Fe.LTC_FLOAT_2):(r.rectAreaLTC1=Fe.LTC_HALF_1,r.rectAreaLTC2=Fe.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=S,r.ambient[2]=g;const H=r.hash;(H.sunLength!==b||H.directionalLength!==y||H.pointLength!==_||H.spotLength!==I||H.rectAreaLength!==z||H.hemiLength!==C||H.numSunShadows!==T||H.numDirectionalShadows!==D||H.numPointShadows!==P||H.numSpotShadows!==O||H.numSpotMaps!==w||H.numLightProbes!==k)&&(r.sun.length=b,r.directional.length=y,r.spot.length=I,r.rectArea.length=z,r.point.length=_,r.hemi.length=C,r.sunShadow.length=T,r.sunShadowMap.length=T,r.sunShadowMatrix.length=N,r.sunShadowCascade.length=N,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.directionalShadowMatrix.length=D,r.pointShadow.length=P,r.pointShadowMap.length=P,r.pointShadowMatrix.length=P,r.spotShadow.length=O,r.spotShadowMap.length=O,r.spotLightMatrix.length=O+w-F,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=k,H.sunLength=b,H.directionalLength=y,H.pointLength=_,H.spotLength=I,H.rectAreaLength=z,H.hemiLength=C,H.numSunShadows=T,H.numDirectionalShadows=D,H.numPointShadows=P,H.numSpotShadows=O,H.numSpotMaps=w,H.numLightProbes=k,r.version=A1++)}function m(p,v){let S=0,g=0,b=0,T=0,N=0,y=0;const _=v.matrixWorldInverse;for(let I=0,z=p.length;I<z;I++){const C=p[I];if(C.isSunLight){const D=r.sun[S];D.direction.setFromMatrixPosition(C.matrixWorld),D.direction.transformDirection(_),S++}else if(C.isDirectionalLight){const D=r.directional[g];D.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(_),g++}else if(C.isSpotLight){const D=r.spot[T];D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(_),D.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(_),T++}else if(C.isRectAreaLight){const D=r.rectArea[N];D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(_),d.identity(),l.copy(C.matrixWorld),l.premultiply(_),d.extractRotation(l),D.halfWidth.set(C.width*.5,0,0),D.halfHeight.set(0,C.height*.5,0),D.halfWidth.applyMatrix4(d),D.halfHeight.applyMatrix4(d),N++}else if(C.isPointLight){const D=r.point[b];D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(_),b++}else if(C.isHemisphereLight){const D=r.hemi[y];D.direction.setFromMatrixPosition(C.matrixWorld),D.direction.transformDirection(_),y++}}}return{setup:h,setupView:m,state:r}}function Zm(s){const e=new N1(s),n=[],r=[],o=[];function l(g){S.camera=g,n.length=0,r.length=0,o.length=0}function d(g){n.push(g)}function h(g){r.push(g)}function m(g){o.push(g)}function p(){e.setup(n)}function v(g){e.setupView(n,g)}const S={lightsArray:n,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:S,setupLights:p,setupLightsView:v,pushLight:d,pushShadow:h,pushLightProbeGrid:m}}function R1(s){let e=new WeakMap;function n(o,l=0){const d=e.get(o);let h;return d===void 0?(h=new Zm(s),e.set(o,[h])):l>=d.length?(h=new Zm(s),d.push(h)):h=d[l],h}function r(){e=new WeakMap}return{get:n,dispose:r}}const P1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,L1=[new oe(1,0,0),new oe(-1,0,0),new oe(0,1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1)],I1=[new oe(0,-1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1),new oe(0,-1,0),new oe(0,-1,0)],Jm=new Kt,Ha=new oe,ud=new oe;function F1(s,e,n){let r=new _f;const o=new Et,l=new Et,d=new Yt,h=new V_,m=new j_,p={},v=n.maxTextureSize,S={[ts]:Vn,[Vn]:ts,[er]:er},g=new Bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:P1,fragmentShader:D1}),b=g.clone();b.defines.HORIZONTAL_PASS=1;const T=new Jn;T.setAttribute("position",new Ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const N=new Zn(T,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dl;let _=this.type;this.render=function(P,O,w){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;this.type===Nv&&(lt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Dl);const F=s.getRenderTarget(),k=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),Z=s.state;Z.setBlending(nr),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const ie=_!==this.type;ie&&O.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(Q=>Q.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,Q=P.length;X<Q;X++){const he=P[X],ee=he.shadow;if(ee===void 0){lt("WebGLShadowMap:",he,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;o.copy(ee.mapSize);const $=ee.getFrameExtents();o.multiply($),l.copy(ee.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/$.x),o.x=l.x*$.x,ee.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/$.y),o.y=l.y*$.y,ee.mapSize.y=l.y));const q=s.state.buffers.depth.getReversed();if(ee.camera._reversedDepth=q,ee.map===null||ie===!0){if(ee.map!==null&&(ee.map.depthTexture!==null&&(ee.map.depthTexture.dispose(),ee.map.depthTexture=null),ee.map.dispose()),this.type===Ga){if(he.isPointLight){lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ee.map=new wi(o.x,o.y,{format:is,type:Oi,minFilter:Cn,magFilter:Cn,generateMipmaps:!1}),ee.map.texture.name=he.name+".shadowMap",ee.map.depthTexture=new Za(o.x,o.y,Ii),ee.map.depthTexture.name=he.name+".shadowMapDepth",ee.map.depthTexture.format=rr,ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=_n,ee.map.depthTexture.magFilter=_n}else he.isPointLight?(ee.map=new Gx(o.x),ee.map.depthTexture=new k_(o.x,Ui)):(ee.map=new wi(o.x,o.y),ee.map.depthTexture=new Za(o.x,o.y,Ui)),ee.map.depthTexture.name=he.name+".shadowMap",ee.map.depthTexture.format=rr,this.type===Dl?(ee.map.depthTexture.compareFunction=q?gf:xf,ee.map.depthTexture.minFilter=Cn,ee.map.depthTexture.magFilter=Cn):(ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=_n,ee.map.depthTexture.magFilter=_n);ee.camera.updateProjectionMatrix()}ee.map.isWebGLCubeRenderTarget!==!0&&(ee.map.width!==o.x||ee.map.height!==o.y)&&ee.map.setSize(o.x,o.y);const Y=ee.map.isWebGLCubeRenderTarget?6:ee.getViewportCount();he.isPointLight!==!0&&ee.updateMatrices(he,w);for(let R=0;R<Y;R++){const re=ee.getCamera(R);if(he.isPointLight){const ye=ee.camera,He=ee.matrix,Ue=he.distance||ye.far;Ue!==ye.far&&(ye.far=Ue,ye.updateProjectionMatrix()),Ha.setFromMatrixPosition(he.matrixWorld),ye.position.copy(Ha),ud.copy(ye.position),ud.add(L1[R]),ye.up.copy(I1[R]),ye.lookAt(ud),ye.updateMatrixWorld(),He.makeTranslation(-Ha.x,-Ha.y,-Ha.z),Jm.multiplyMatrices(ye.projectionMatrix,ye.matrixWorldInverse),ee._frustum.setFromProjectionMatrix(Jm,ye.coordinateSystem,ye.reversedDepth)}if(ee.map.isWebGLCubeRenderTarget)s.setRenderTarget(ee.map,R),s.clear();else{R===0&&(s.setRenderTarget(ee.map),s.clear());const ye=ee.getViewport(R);d.set(l.x*ye.x,l.y*ye.y,l.x*ye.z,l.y*ye.w),Z.viewport(d)}r=ee.getFrustum(R),C(O,w,re,he,this.type)}ee.isPointLightShadow!==!0&&this.type===Ga&&I(ee,w),ee.needsUpdate=!1}_=this.type,y.needsUpdate=!1,s.setRenderTarget(F,k,H)};function I(P,O){const w=e.update(N);g.defines.VSM_SAMPLES!==P.blurSamples&&(g.defines.VSM_SAMPLES=P.blurSamples,b.defines.VSM_SAMPLES=P.blurSamples,g.needsUpdate=!0,b.needsUpdate=!0),P.mapPass===null?P.mapPass=new wi(o.x,o.y,{format:is,type:Oi}):(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)&&P.mapPass.setSize(P.map.width,P.map.height),g.uniforms.shadow_pass.value=P.map.depthTexture,g.uniforms.resolution.value.set(P.map.width,P.map.height),g.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(O,null,w,g,N,null),b.uniforms.shadow_pass.value=P.mapPass.texture,b.uniforms.resolution.value.set(P.map.width,P.map.height),b.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(O,null,w,b,N,null)}function z(P,O,w,F){let k=null;const H=w.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(H!==void 0)k=H;else if(k=w.isPointLight===!0?m:h,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const Z=k.uuid,ie=O.uuid;let X=p[Z];X===void 0&&(X={},p[Z]=X);let Q=X[ie];Q===void 0&&(Q=k.clone(),X[ie]=Q,O.addEventListener("dispose",D)),k=Q}if(k.visible=O.visible,k.wireframe=O.wireframe,F===Ga?k.side=O.shadowSide!==null?O.shadowSide:O.side:k.side=O.shadowSide!==null?O.shadowSide:S[O.side],k.alphaMap=O.alphaMap,k.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,k.map=O.map,k.clipShadows=O.clipShadows,k.clippingPlanes=O.clippingPlanes,k.clipIntersection=O.clipIntersection,k.displacementMap=O.displacementMap,k.displacementScale=O.displacementScale,k.displacementBias=O.displacementBias,k.wireframeLinewidth=O.wireframeLinewidth,k.linewidth=O.linewidth,w.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const Z=s.properties.get(k);Z.light=w}return k}function C(P,O,w,F,k){if(P.visible===!1)return;if(P.layers.test(O.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&k===Ga)&&(!P.frustumCulled||P.intersectsFrustum(r))){P.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,P.matrixWorld);const ie=e.update(P),X=P.material;if(Array.isArray(X)){const Q=ie.groups;for(let he=0,ee=Q.length;he<ee;he++){const $=Q[he],q=X[$.materialIndex];if(q&&q.visible){const Y=z(P,q,F,k);P.onBeforeShadow(s,P,O,w,ie,Y,$),s.renderBufferDirect(w,null,ie,Y,P,$),P.onAfterShadow(s,P,O,w,ie,Y,$)}}}else if(X.visible){const Q=z(P,X,F,k);P.onBeforeShadow(s,P,O,w,ie,Q,null),s.renderBufferDirect(w,null,ie,Q,P,null),P.onAfterShadow(s,P,O,w,ie,Q,null)}}const Z=P.children;for(let ie=0,X=Z.length;ie<X;ie++)C(Z[ie],O,w,F,k)}function D(P){P.target.removeEventListener("dispose",D);for(const w in p){const F=p[w],k=P.target.uuid;k in F&&(F[k].dispose(),delete F[k])}}}function k1(s,e){function n(){let G=!1;const Ce=new Yt;let me=null;const Ne=new Yt(0,0,0,0);return{setMask:function(ke){me!==ke&&!G&&(s.colorMask(ke,ke,ke,ke),me=ke)},setLocked:function(ke){G=ke},setClear:function(ke,ge,Je,Xe,At){At===!0&&(ke*=Xe,ge*=Xe,Je*=Xe),Ce.set(ke,ge,Je,Xe),Ne.equals(Ce)===!1&&(s.clearColor(ke,ge,Je,Xe),Ne.copy(Ce))},reset:function(){G=!1,me=null,Ne.set(-1,0,0,0)}}}function r(){let G=!1,Ce=!1,me=null,Ne=null,ke=null;return{setReversed:function(ge){if(Ce!==ge){const Je=e.get("EXT_clip_control");ge?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),Ce=ge;const Xe=ke;ke=null,this.setClear(Xe)}},getReversed:function(){return Ce},setTest:function(ge){ge?de(s.DEPTH_TEST):Me(s.DEPTH_TEST)},setMask:function(ge){me!==ge&&!G&&(s.depthMask(ge),me=ge)},setFunc:function(ge){if(Ce&&(ge=u_[ge]),Ne!==ge){switch(ge){case fd:s.depthFunc(s.NEVER);break;case hd:s.depthFunc(s.ALWAYS);break;case pd:s.depthFunc(s.LESS);break;case qa:s.depthFunc(s.LEQUAL);break;case md:s.depthFunc(s.EQUAL);break;case xd:s.depthFunc(s.GEQUAL);break;case gd:s.depthFunc(s.GREATER);break;case vd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ne=ge}},setLocked:function(ge){G=ge},setClear:function(ge){ke!==ge&&(ke=ge,Ce&&(ge=1-ge),s.clearDepth(ge))},reset:function(){G=!1,me=null,Ne=null,ke=null,Ce=!1}}}function o(){let G=!1,Ce=null,me=null,Ne=null,ke=null,ge=null,Je=null,Xe=null,At=null;return{setTest:function(bt){G||(bt?de(s.STENCIL_TEST):Me(s.STENCIL_TEST))},setMask:function(bt){Ce!==bt&&!G&&(s.stencilMask(bt),Ce=bt)},setFunc:function(bt,xn,Qn){(me!==bt||Ne!==xn||ke!==Qn)&&(s.stencilFunc(bt,xn,Qn),me=bt,Ne=xn,ke=Qn)},setOp:function(bt,xn,Qn){(ge!==bt||Je!==xn||Xe!==Qn)&&(s.stencilOp(bt,xn,Qn),ge=bt,Je=xn,Xe=Qn)},setLocked:function(bt){G=bt},setClear:function(bt){At!==bt&&(s.clearStencil(bt),At=bt)},reset:function(){G=!1,Ce=null,me=null,Ne=null,ke=null,ge=null,Je=null,Xe=null,At=null}}}const l=new n,d=new r,h=new o,m=new WeakMap,p=new WeakMap;let v={},S={},g={},b=new WeakMap,T=[],N=null,y=!1,_=null,I=null,z=null,C=null,D=null,P=null,O=null,w=new xt(0,0,0),F=0,k=!1,H=null,Z=null,ie=null,X=null,Q=null;const he=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,$=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(q)[1]),ee=$>=1):q.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),ee=$>=2);let Y=null,R={};const re=s.getParameter(s.SCISSOR_BOX),ye=s.getParameter(s.VIEWPORT),He=new Yt().fromArray(re),Ue=new Yt().fromArray(ye);function Ge(G,Ce,me,Ne){const ke=new Uint8Array(4),ge=s.createTexture();s.bindTexture(G,ge),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Je=0;Je<me;Je++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(Ce,0,s.RGBA,1,1,Ne,0,s.RGBA,s.UNSIGNED_BYTE,ke):s.texImage2D(Ce+Je,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ke);return ge}const se={};se[s.TEXTURE_2D]=Ge(s.TEXTURE_2D,s.TEXTURE_2D,1),se[s.TEXTURE_CUBE_MAP]=Ge(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[s.TEXTURE_2D_ARRAY]=Ge(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),se[s.TEXTURE_3D]=Ge(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),d.setClear(1),h.setClear(0),de(s.DEPTH_TEST),d.setFunc(qa),ft(!1),Ut(tm),de(s.CULL_FACE),vt(nr);function de(G){v[G]!==!0&&(s.enable(G),v[G]=!0)}function Me(G){v[G]!==!1&&(s.disable(G),v[G]=!1)}function Ye(G,Ce){return g[G]!==Ce?(s.bindFramebuffer(G,Ce),g[G]=Ce,G===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ce),G===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ce),!0):!1}function we(G,Ce){let me=T,Ne=!1;if(G){me=b.get(Ce),me===void 0&&(me=[],b.set(Ce,me));const ke=G.textures;if(me.length!==ke.length||me[0]!==s.COLOR_ATTACHMENT0){for(let ge=0,Je=ke.length;ge<Je;ge++)me[ge]=s.COLOR_ATTACHMENT0+ge;me.length=ke.length,Ne=!0}}else me[0]!==s.BACK&&(me[0]=s.BACK,Ne=!0);Ne&&s.drawBuffers(me)}function nt(G){return N!==G?(s.useProgram(G),N=G,!0):!1}const Lt={[Gs]:s.FUNC_ADD,[Pv]:s.FUNC_SUBTRACT,[Dv]:s.FUNC_REVERSE_SUBTRACT};Lt[Lv]=s.MIN,Lt[Iv]=s.MAX;const at={[Fv]:s.ZERO,[kv]:s.ONE,[Uv]:s.SRC_COLOR,[cx]:s.SRC_ALPHA,[Vv]:s.SRC_ALPHA_SATURATE,[Hv]:s.DST_COLOR,[Bv]:s.DST_ALPHA,[Ov]:s.ONE_MINUS_SRC_COLOR,[ux]:s.ONE_MINUS_SRC_ALPHA,[Gv]:s.ONE_MINUS_DST_COLOR,[zv]:s.ONE_MINUS_DST_ALPHA,[jv]:s.CONSTANT_COLOR,[Wv]:s.ONE_MINUS_CONSTANT_COLOR,[Xv]:s.CONSTANT_ALPHA,[qv]:s.ONE_MINUS_CONSTANT_ALPHA};function vt(G,Ce,me,Ne,ke,ge,Je,Xe,At,bt){if(G===nr){y===!0&&(Me(s.BLEND),y=!1);return}if(y===!1&&(de(s.BLEND),y=!0),G!==Rv){if(G!==_||bt!==k){if((I!==Gs||D!==Gs)&&(s.blendEquation(s.FUNC_ADD),I=Gs,D=Gs),bt)switch(G){case js:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case nm:s.blendFunc(s.ONE,s.ONE);break;case im:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case rm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Rt("WebGLState: Invalid blending: ",G);break}else switch(G){case js:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case nm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case im:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rm:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",G);break}z=null,C=null,P=null,O=null,w.set(0,0,0),F=0,_=G,k=bt}return}ke=ke||Ce,ge=ge||me,Je=Je||Ne,(Ce!==I||ke!==D)&&(s.blendEquationSeparate(Lt[Ce],Lt[ke]),I=Ce,D=ke),(me!==z||Ne!==C||ge!==P||Je!==O)&&(s.blendFuncSeparate(at[me],at[Ne],at[ge],at[Je]),z=me,C=Ne,P=ge,O=Je),(Xe.equals(w)===!1||At!==F)&&(s.blendColor(Xe.r,Xe.g,Xe.b,At),w.copy(Xe),F=At),_=G,k=!1}function It(G,Ce){G.side===er?Me(s.CULL_FACE):de(s.CULL_FACE);let me=G.side===Vn;Ce&&(me=!me),ft(me),G.blending===js&&G.transparent===!1?vt(nr):vt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),d.setFunc(G.depthFunc),d.setTest(G.depthTest),d.setMask(G.depthWrite),l.setMask(G.colorWrite);const Ne=G.stencilWrite;h.setTest(Ne),Ne&&(h.setMask(G.stencilWriteMask),h.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),h.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),nn(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?de(s.SAMPLE_ALPHA_TO_COVERAGE):Me(s.SAMPLE_ALPHA_TO_COVERAGE)}function ft(G){H!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),H=G)}function Ut(G){G!==Av?(de(s.CULL_FACE),G!==Z&&(G===tm?s.cullFace(s.BACK):G===Cv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Me(s.CULL_FACE),Z=G}function Zt(G){G!==ie&&(ee&&s.lineWidth(G),ie=G)}function nn(G,Ce,me){G?(de(s.POLYGON_OFFSET_FILL),(X!==Ce||Q!==me)&&(X=Ce,Q=me,d.getReversed()&&(Ce=-Ce),s.polygonOffset(Ce,me))):Me(s.POLYGON_OFFSET_FILL)}function Dt(G){G?de(s.SCISSOR_TEST):Me(s.SCISSOR_TEST)}function Gt(G){G===void 0&&(G=s.TEXTURE0+he-1),Y!==G&&(s.activeTexture(G),Y=G)}function j(G,Ce,me){me===void 0&&(Y===null?me=s.TEXTURE0+he-1:me=Y);let Ne=R[me];Ne===void 0&&(Ne={type:void 0,texture:void 0},R[me]=Ne),(Ne.type!==G||Ne.texture!==Ce)&&(Y!==me&&(s.activeTexture(me),Y=me),s.bindTexture(G,Ce||se[G]),Ne.type=G,Ne.texture=Ce)}function an(){const G=R[Y];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Tt(){try{s.compressedTexImage2D(...arguments)}catch(G){Rt("WebGLState:",G)}}function L(){try{s.compressedTexImage3D(...arguments)}catch(G){Rt("WebGLState:",G)}}function M(){try{s.texSubImage2D(...arguments)}catch(G){Rt("WebGLState:",G)}}function K(){try{s.texSubImage3D(...arguments)}catch(G){Rt("WebGLState:",G)}}function le(){try{s.compressedTexSubImage2D(...arguments)}catch(G){Rt("WebGLState:",G)}}function fe(){try{s.compressedTexSubImage3D(...arguments)}catch(G){Rt("WebGLState:",G)}}function be(){try{s.texStorage2D(...arguments)}catch(G){Rt("WebGLState:",G)}}function Ae(){try{s.texStorage3D(...arguments)}catch(G){Rt("WebGLState:",G)}}function pe(){try{s.texImage2D(...arguments)}catch(G){Rt("WebGLState:",G)}}function xe(){try{s.texImage3D(...arguments)}catch(G){Rt("WebGLState:",G)}}function Re(G){return S[G]!==void 0?S[G]:s.getParameter(G)}function Ke(G,Ce){S[G]!==Ce&&(s.pixelStorei(G,Ce),S[G]=Ce)}function Pe(G){He.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),He.copy(G))}function Te(G){Ue.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),Ue.copy(G))}function $e(G,Ce){let me=p.get(Ce);me===void 0&&(me=new WeakMap,p.set(Ce,me));let Ne=me.get(G);Ne===void 0&&(Ne=s.getUniformBlockIndex(Ce,G.name),me.set(G,Ne))}function tt(G,Ce){const Ne=p.get(Ce).get(G);m.get(Ce)!==Ne&&(s.uniformBlockBinding(Ce,Ne,G.__bindingPointIndex),m.set(Ce,Ne))}function st(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),v={},S={},Y=null,R={},g={},b=new WeakMap,T=[],N=null,y=!1,_=null,I=null,z=null,C=null,D=null,P=null,O=null,w=new xt(0,0,0),F=0,k=!1,H=null,Z=null,ie=null,X=null,Q=null,He.set(0,0,s.canvas.width,s.canvas.height),Ue.set(0,0,s.canvas.width,s.canvas.height),l.reset(),d.reset(),h.reset()}return{buffers:{color:l,depth:d,stencil:h},enable:de,disable:Me,bindFramebuffer:Ye,drawBuffers:we,useProgram:nt,setBlending:vt,setMaterial:It,setFlipSided:ft,setCullFace:Ut,setLineWidth:Zt,setPolygonOffset:nn,setScissorTest:Dt,activeTexture:Gt,bindTexture:j,unbindTexture:an,compressedTexImage2D:Tt,compressedTexImage3D:L,texImage2D:pe,texImage3D:xe,pixelStorei:Ke,getParameter:Re,updateUBOMapping:$e,uniformBlockBinding:tt,texStorage2D:be,texStorage3D:Ae,texSubImage2D:M,texSubImage3D:K,compressedTexSubImage2D:le,compressedTexSubImage3D:fe,scissor:Pe,viewport:Te,reset:st}}function U1(s,e,n,r,o,l,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Et,v=new WeakMap,S=new Set;let g;const b=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function N(L,M){return T?new OffscreenCanvas(L,M):Gl("canvas")}function y(L,M,K){let le=1;const fe=Tt(L);if((fe.width>K||fe.height>K)&&(le=K/Math.max(fe.width,fe.height)),le<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const be=Math.floor(le*fe.width),Ae=Math.floor(le*fe.height);g===void 0&&(g=N(be,Ae));const pe=M?N(be,Ae):g;return pe.width=be,pe.height=Ae,pe.getContext("2d").drawImage(L,0,0,be,Ae),lt("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+be+"x"+Ae+")."),pe}else return"data"in L&&lt("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),L;return L}function _(L){return L.generateMipmaps}function I(L){s.generateMipmap(L)}function z(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function C(L,M,K,le,fe,be=!1){if(L!==null){if(s[L]!==void 0)return s[L];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Ae;le&&(Ae=e.get("EXT_texture_norm16"),Ae||lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=M;if(M===s.RED&&(K===s.FLOAT&&(pe=s.R32F),K===s.HALF_FLOAT&&(pe=s.R16F),K===s.UNSIGNED_BYTE&&(pe=s.R8),K===s.UNSIGNED_SHORT&&Ae&&(pe=Ae.R16_EXT),K===s.SHORT&&Ae&&(pe=Ae.R16_SNORM_EXT)),M===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(pe=s.R8UI),K===s.UNSIGNED_SHORT&&(pe=s.R16UI),K===s.UNSIGNED_INT&&(pe=s.R32UI),K===s.BYTE&&(pe=s.R8I),K===s.SHORT&&(pe=s.R16I),K===s.INT&&(pe=s.R32I)),M===s.RG&&(K===s.FLOAT&&(pe=s.RG32F),K===s.HALF_FLOAT&&(pe=s.RG16F),K===s.UNSIGNED_BYTE&&(pe=s.RG8),K===s.UNSIGNED_SHORT&&Ae&&(pe=Ae.RG16_EXT),K===s.SHORT&&Ae&&(pe=Ae.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(pe=s.RG8UI),K===s.UNSIGNED_SHORT&&(pe=s.RG16UI),K===s.UNSIGNED_INT&&(pe=s.RG32UI),K===s.BYTE&&(pe=s.RG8I),K===s.SHORT&&(pe=s.RG16I),K===s.INT&&(pe=s.RG32I)),M===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(pe=s.RGB8UI),K===s.UNSIGNED_SHORT&&(pe=s.RGB16UI),K===s.UNSIGNED_INT&&(pe=s.RGB32UI),K===s.BYTE&&(pe=s.RGB8I),K===s.SHORT&&(pe=s.RGB16I),K===s.INT&&(pe=s.RGB32I)),M===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(pe=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(pe=s.RGBA16UI),K===s.UNSIGNED_INT&&(pe=s.RGBA32UI),K===s.BYTE&&(pe=s.RGBA8I),K===s.SHORT&&(pe=s.RGBA16I),K===s.INT&&(pe=s.RGBA32I)),M===s.RGB&&(K===s.UNSIGNED_SHORT&&Ae&&(pe=Ae.RGB16_EXT),K===s.SHORT&&Ae&&(pe=Ae.RGB16_SNORM_EXT),K===s.UNSIGNED_INT_5_9_9_9_REV&&(pe=s.RGB9_E5),K===s.UNSIGNED_INT_10F_11F_11F_REV&&(pe=s.R11F_G11F_B10F)),M===s.RGBA){const xe=be?Hl:St.getTransfer(fe);K===s.FLOAT&&(pe=s.RGBA32F),K===s.HALF_FLOAT&&(pe=s.RGBA16F),K===s.UNSIGNED_BYTE&&(pe=xe===kt?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT&&Ae&&(pe=Ae.RGBA16_EXT),K===s.SHORT&&Ae&&(pe=Ae.RGBA16_SNORM_EXT),K===s.UNSIGNED_SHORT_4_4_4_4&&(pe=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(pe=s.RGB5_A1)}return(pe===s.R16F||pe===s.R32F||pe===s.RG16F||pe===s.RG32F||pe===s.RGBA16F||pe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function D(L,M){let K;return L?M===null||M===Ui||M===Ka?K=s.DEPTH24_STENCIL8:M===Ii?K=s.DEPTH32F_STENCIL8:M===Ya&&(K=s.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ui||M===Ka?K=s.DEPTH_COMPONENT24:M===Ii?K=s.DEPTH_COMPONENT32F:M===Ya&&(K=s.DEPTH_COMPONENT16),K}function P(L,M){return _(L)===!0||L.isFramebufferTexture&&L.minFilter!==_n&&L.minFilter!==Cn?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function O(L){const M=L.target;M.removeEventListener("dispose",O),F(M),M.isVideoTexture&&v.delete(M),M.isHTMLTexture&&S.delete(M)}function w(L){const M=L.target;M.removeEventListener("dispose",w),H(M)}function F(L){const M=r.get(L);if(M.__webglInit===void 0)return;const K=L.source,le=b.get(K);if(le){const fe=le[M.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&k(L),Object.keys(le).length===0&&b.delete(K)}r.remove(L)}function k(L){const M=r.get(L);s.deleteTexture(M.__webglTexture);const K=L.source,le=b.get(K);delete le[M.__cacheKey],d.memory.textures--}function H(L){const M=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(M.__webglFramebuffer[le]))for(let fe=0;fe<M.__webglFramebuffer[le].length;fe++)s.deleteFramebuffer(M.__webglFramebuffer[le][fe]);else s.deleteFramebuffer(M.__webglFramebuffer[le]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[le])}else{if(Array.isArray(M.__webglFramebuffer))for(let le=0;le<M.__webglFramebuffer.length;le++)s.deleteFramebuffer(M.__webglFramebuffer[le]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let le=0;le<M.__webglColorRenderbuffer.length;le++)M.__webglColorRenderbuffer[le]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[le]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const K=L.textures;for(let le=0,fe=K.length;le<fe;le++){const be=r.get(K[le]);be.__webglTexture&&(s.deleteTexture(be.__webglTexture),d.memory.textures--),r.remove(K[le])}r.remove(L)}let Z=0;function ie(){Z=0}function X(){return Z}function Q(L){Z=L}function he(){const L=Z;return L>=o.maxTextures&&lt("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+o.maxTextures),Z+=1,L}function ee(L){const M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.wrapR||0),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.colorSpace),M.join()}function $(L,M){const K=r.get(L);if(L.isVideoTexture&&j(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&K.__version!==L.version){const le=L.image;if(le===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(K,L,M);return}}else L.isExternalTexture&&(K.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+M)}function q(L,M){const K=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){Me(K,L,M);return}else L.isExternalTexture&&(K.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+M)}function Y(L,M){const K=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){Me(K,L,M);return}n.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+M)}function R(L,M){const K=r.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&K.__version!==L.version){Ye(K,L,M);return}n.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+M)}const re={[_d]:s.REPEAT,[tr]:s.CLAMP_TO_EDGE,[yd]:s.MIRRORED_REPEAT},ye={[_n]:s.NEAREST,[$v]:s.NEAREST_MIPMAP_NEAREST,[ll]:s.NEAREST_MIPMAP_LINEAR,[Cn]:s.LINEAR,[Iu]:s.LINEAR_MIPMAP_NEAREST,[Qr]:s.LINEAR_MIPMAP_LINEAR},He={[e_]:s.NEVER,[s_]:s.ALWAYS,[t_]:s.LESS,[xf]:s.LEQUAL,[n_]:s.EQUAL,[gf]:s.GEQUAL,[i_]:s.GREATER,[r_]:s.NOTEQUAL};function Ue(L,M){if(M.type===Ii&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Cn||M.magFilter===Iu||M.magFilter===ll||M.magFilter===Qr||M.minFilter===Cn||M.minFilter===Iu||M.minFilter===ll||M.minFilter===Qr)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,re[M.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,re[M.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,re[M.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,ye[M.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,ye[M.minFilter]),M.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,He[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===_n||M.minFilter!==ll&&M.minFilter!==Qr||M.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,o.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function Ge(L,M){let K=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",O));const le=M.source;let fe=b.get(le);fe===void 0&&(fe={},b.set(le,fe));const be=ee(M);if(be!==L.__cacheKey){fe[be]===void 0&&(fe[be]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,K=!0),fe[be].usedTimes++;const Ae=fe[L.__cacheKey];Ae!==void 0&&(fe[L.__cacheKey].usedTimes--,Ae.usedTimes===0&&k(M)),L.__cacheKey=be,L.__webglTexture=fe[be].texture}return K}function se(L,M,K){return Math.floor(Math.floor(L/K)/M)}function de(L,M,K,le){const be=L.updateRanges;if(be.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,K,le,M.data);else{be.sort((Ke,Pe)=>Ke.start-Pe.start);let Ae=0;for(let Ke=1;Ke<be.length;Ke++){const Pe=be[Ae],Te=be[Ke],$e=Pe.start+Pe.count,tt=se(Te.start,M.width,4),st=se(Pe.start,M.width,4);Te.start<=$e+1&&tt===st&&se(Te.start+Te.count-1,M.width,4)===tt?Pe.count=Math.max(Pe.count,Te.start+Te.count-Pe.start):(++Ae,be[Ae]=Te)}be.length=Ae+1;const pe=n.getParameter(s.UNPACK_ROW_LENGTH),xe=n.getParameter(s.UNPACK_SKIP_PIXELS),Re=n.getParameter(s.UNPACK_SKIP_ROWS);n.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let Ke=0,Pe=be.length;Ke<Pe;Ke++){const Te=be[Ke],$e=Math.floor(Te.start/4),tt=Math.ceil(Te.count/4),st=$e%M.width,G=Math.floor($e/M.width),Ce=tt,me=1;n.pixelStorei(s.UNPACK_SKIP_PIXELS,st),n.pixelStorei(s.UNPACK_SKIP_ROWS,G),n.texSubImage2D(s.TEXTURE_2D,0,st,G,Ce,me,K,le,M.data)}L.clearUpdateRanges(),n.pixelStorei(s.UNPACK_ROW_LENGTH,pe),n.pixelStorei(s.UNPACK_SKIP_PIXELS,xe),n.pixelStorei(s.UNPACK_SKIP_ROWS,Re)}}function Me(L,M,K){let le=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(le=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(le=s.TEXTURE_3D);const fe=Ge(L,M),be=M.source;n.bindTexture(le,L.__webglTexture,s.TEXTURE0+K);const Ae=r.get(be);if(be.version!==Ae.__version||fe===!0){if(n.activeTexture(s.TEXTURE0+K),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const me=St.getPrimaries(St.workingColorSpace),Ne=M.colorSpace===Nr?null:St.getPrimaries(M.colorSpace),ke=M.colorSpace===Nr||me===Ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke)}n.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let xe=y(M.image,!1,o.maxTextureSize);xe=an(M,xe);const Re=l.convert(M.format,M.colorSpace),Ke=l.convert(M.type);let Pe=C(M.internalFormat,Re,Ke,M.normalized,M.colorSpace,M.isVideoTexture);Ue(le,M);let Te;const $e=M.mipmaps,tt=M.isVideoTexture!==!0,st=Ae.__version===void 0||fe===!0,G=be.dataReady,Ce=P(M,xe);if(M.isDepthTexture)Pe=D(M.format===es,M.type),st&&(tt?n.texStorage2D(s.TEXTURE_2D,1,Pe,xe.width,xe.height):n.texImage2D(s.TEXTURE_2D,0,Pe,xe.width,xe.height,0,Re,Ke,null));else if(M.isDataTexture)if($e.length>0){tt&&st&&n.texStorage2D(s.TEXTURE_2D,Ce,Pe,$e[0].width,$e[0].height);for(let me=0,Ne=$e.length;me<Ne;me++)Te=$e[me],tt?G&&n.texSubImage2D(s.TEXTURE_2D,me,0,0,Te.width,Te.height,Re,Ke,Te.data):n.texImage2D(s.TEXTURE_2D,me,Pe,Te.width,Te.height,0,Re,Ke,Te.data);M.generateMipmaps=!1}else tt?(st&&n.texStorage2D(s.TEXTURE_2D,Ce,Pe,xe.width,xe.height),G&&de(M,xe,Re,Ke)):n.texImage2D(s.TEXTURE_2D,0,Pe,xe.width,xe.height,0,Re,Ke,xe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){tt&&st&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Pe,$e[0].width,$e[0].height,xe.depth);for(let me=0,Ne=$e.length;me<Ne;me++)if(Te=$e[me],M.format!==Ei)if(Re!==null)if(tt){if(G)if(M.layerUpdates.size>0){const ke=Rm(Te.width,Te.height,M.format,M.type);for(const ge of M.layerUpdates){const Je=Te.data.subarray(ge*ke/Te.data.BYTES_PER_ELEMENT,(ge+1)*ke/Te.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,ge,Te.width,Te.height,1,Re,Je)}}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,Te.width,Te.height,xe.depth,Re,Te.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,me,Pe,Te.width,Te.height,xe.depth,0,Te.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?G&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,Te.width,Te.height,xe.depth,Re,Ke,Te.data):n.texImage3D(s.TEXTURE_2D_ARRAY,me,Pe,Te.width,Te.height,xe.depth,0,Re,Ke,Te.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{tt&&st&&n.texStorage2D(s.TEXTURE_2D,Ce,Pe,$e[0].width,$e[0].height);for(let me=0,Ne=$e.length;me<Ne;me++)Te=$e[me],M.format!==Ei?Re!==null?tt?G&&n.compressedTexSubImage2D(s.TEXTURE_2D,me,0,0,Te.width,Te.height,Re,Te.data):n.compressedTexImage2D(s.TEXTURE_2D,me,Pe,Te.width,Te.height,0,Te.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?G&&n.texSubImage2D(s.TEXTURE_2D,me,0,0,Te.width,Te.height,Re,Ke,Te.data):n.texImage2D(s.TEXTURE_2D,me,Pe,Te.width,Te.height,0,Re,Ke,Te.data)}else if(M.isDataArrayTexture)if(tt){if(st&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Pe,xe.width,xe.height,xe.depth),G)if(M.layerUpdates.size>0){const me=Rm(xe.width,xe.height,M.format,M.type);for(const Ne of M.layerUpdates){const ke=xe.data.subarray(Ne*me/xe.data.BYTES_PER_ELEMENT,(Ne+1)*me/xe.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ne,xe.width,xe.height,1,Re,Ke,ke)}M.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Re,Ke,xe.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Pe,xe.width,xe.height,xe.depth,0,Re,Ke,xe.data);else if(M.isData3DTexture)tt?(st&&n.texStorage3D(s.TEXTURE_3D,Ce,Pe,xe.width,xe.height,xe.depth),G&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Re,Ke,xe.data)):n.texImage3D(s.TEXTURE_3D,0,Pe,xe.width,xe.height,xe.depth,0,Re,Ke,xe.data);else if(M.isFramebufferTexture){if(st)if(tt)n.texStorage2D(s.TEXTURE_2D,Ce,Pe,xe.width,xe.height);else{let me=xe.width,Ne=xe.height;for(let ke=0;ke<Ce;ke++)n.texImage2D(s.TEXTURE_2D,ke,Pe,me,Ne,0,Re,Ke,null),me>>=1,Ne>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){const me=s.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),xe.parentNode!==me){me.appendChild(xe),S.add(M),me.onpaint=Ne=>{const ke=Ne.changedElements;for(const ge of S)ke.includes(ge.image)&&(ge.needsUpdate=!0)},me.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,xe);else{const ke=s.RGBA,ge=s.RGBA,Je=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,ke,ge,Je,xe)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if($e.length>0){if(tt&&st){const me=Tt($e[0]);n.texStorage2D(s.TEXTURE_2D,Ce,Pe,me.width,me.height)}for(let me=0,Ne=$e.length;me<Ne;me++)Te=$e[me],tt?G&&n.texSubImage2D(s.TEXTURE_2D,me,0,0,Re,Ke,Te):n.texImage2D(s.TEXTURE_2D,me,Pe,Re,Ke,Te);M.generateMipmaps=!1}else if(tt){if(st){const me=Tt(xe);n.texStorage2D(s.TEXTURE_2D,Ce,Pe,me.width,me.height)}G&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Re,Ke,xe)}else n.texImage2D(s.TEXTURE_2D,0,Pe,Re,Ke,xe);_(M)&&I(le),Ae.__version=be.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function Ye(L,M,K){if(M.image.length!==6)return;const le=Ge(L,M),fe=M.source;n.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+K);const be=r.get(fe);if(fe.version!==be.__version||le===!0){n.activeTexture(s.TEXTURE0+K);const Ae=St.getPrimaries(St.workingColorSpace),pe=M.colorSpace===Nr?null:St.getPrimaries(M.colorSpace),xe=M.colorSpace===Nr||Ae===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Re=M.isCompressedTexture||M.image[0].isCompressedTexture,Ke=M.image[0]&&M.image[0].isDataTexture,Pe=[];for(let ge=0;ge<6;ge++)!Re&&!Ke?Pe[ge]=y(M.image[ge],!0,o.maxCubemapSize):Pe[ge]=Ke?M.image[ge].image:M.image[ge],Pe[ge]=an(M,Pe[ge]);const Te=Pe[0],$e=l.convert(M.format,M.colorSpace),tt=l.convert(M.type),st=C(M.internalFormat,$e,tt,M.normalized,M.colorSpace),G=M.isVideoTexture!==!0,Ce=be.__version===void 0||le===!0,me=fe.dataReady;let Ne=P(M,Te);Ue(s.TEXTURE_CUBE_MAP,M);let ke;if(Re){G&&Ce&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,st,Te.width,Te.height);for(let ge=0;ge<6;ge++){ke=Pe[ge].mipmaps;for(let Je=0;Je<ke.length;Je++){const Xe=ke[Je];M.format!==Ei?$e!==null?G?me&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Je,0,0,Xe.width,Xe.height,$e,Xe.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Je,st,Xe.width,Xe.height,0,Xe.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Je,0,0,Xe.width,Xe.height,$e,tt,Xe.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Je,st,Xe.width,Xe.height,0,$e,tt,Xe.data)}}}else{if(ke=M.mipmaps,G&&Ce){ke.length>0&&Ne++;const ge=Tt(Pe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,st,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Ke){G?me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Pe[ge].width,Pe[ge].height,$e,tt,Pe[ge].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,st,Pe[ge].width,Pe[ge].height,0,$e,tt,Pe[ge].data);for(let Je=0;Je<ke.length;Je++){const At=ke[Je].image[ge].image;G?me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Je+1,0,0,At.width,At.height,$e,tt,At.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Je+1,st,At.width,At.height,0,$e,tt,At.data)}}else{G?me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,$e,tt,Pe[ge]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,st,$e,tt,Pe[ge]);for(let Je=0;Je<ke.length;Je++){const Xe=ke[Je];G?me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Je+1,0,0,$e,tt,Xe.image[ge]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Je+1,st,$e,tt,Xe.image[ge])}}}_(M)&&I(s.TEXTURE_CUBE_MAP),be.__version=fe.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function we(L,M,K,le,fe,be){const Ae=l.convert(K.format,K.colorSpace),pe=l.convert(K.type),xe=C(K.internalFormat,Ae,pe,K.normalized,K.colorSpace),Re=r.get(M),Ke=r.get(K);if(Ke.__renderTarget=M,!Re.__hasExternalTextures){const Pe=Math.max(1,M.width>>be),Te=Math.max(1,M.height>>be);fe===s.TEXTURE_3D||fe===s.TEXTURE_2D_ARRAY?n.texImage3D(fe,be,xe,Pe,Te,M.depth,0,Ae,pe,null):n.texImage2D(fe,be,xe,Pe,Te,0,Ae,pe,null)}n.bindFramebuffer(s.FRAMEBUFFER,L),Gt(M)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,le,fe,Ke.__webglTexture,0,Dt(M)):(fe===s.TEXTURE_2D||fe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,le,fe,Ke.__webglTexture,be),n.bindFramebuffer(s.FRAMEBUFFER,null)}function nt(L,M,K){if(s.bindRenderbuffer(s.RENDERBUFFER,L),M.depthBuffer){const le=M.depthTexture,fe=le&&le.isDepthTexture?le.type:null,be=D(M.stencilBuffer,fe),Ae=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Gt(M)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Dt(M),be,M.width,M.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt(M),be,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,be,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ae,s.RENDERBUFFER,L)}else{const le=M.textures;for(let fe=0;fe<le.length;fe++){const be=le[fe],Ae=l.convert(be.format,be.colorSpace),pe=l.convert(be.type),xe=C(be.internalFormat,Ae,pe,be.normalized,be.colorSpace);Gt(M)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Dt(M),xe,M.width,M.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt(M),xe,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,xe,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Lt(L,M,K){const le=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(s.FRAMEBUFFER,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const fe=r.get(M.depthTexture);if(fe.__renderTarget=M,(!fe.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),le){if(fe.__webglInit===void 0&&(fe.__webglInit=!0,M.depthTexture.addEventListener("dispose",O)),fe.__webglTexture===void 0){fe.__webglTexture=s.createTexture(),n.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),Ue(s.TEXTURE_CUBE_MAP,M.depthTexture);const Re=l.convert(M.depthTexture.format),Ke=l.convert(M.depthTexture.type);let Pe;M.depthTexture.format===rr?Pe=s.DEPTH_COMPONENT24:M.depthTexture.format===es&&(Pe=s.DEPTH24_STENCIL8);for(let Te=0;Te<6;Te++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Pe,M.width,M.height,0,Re,Ke,null)}}else $(M.depthTexture,0);const be=fe.__webglTexture,Ae=Dt(M),pe=le?s.TEXTURE_CUBE_MAP_POSITIVE_X+K:s.TEXTURE_2D,xe=M.depthTexture.format===es?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===rr)Gt(M)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xe,pe,be,0,Ae):s.framebufferTexture2D(s.FRAMEBUFFER,xe,pe,be,0);else if(M.depthTexture.format===es)Gt(M)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xe,pe,be,0,Ae):s.framebufferTexture2D(s.FRAMEBUFFER,xe,pe,be,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function at(L){const M=r.get(L),K=L.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==L.depthTexture){const le=L.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),le){const fe=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,le.removeEventListener("dispose",fe)};le.addEventListener("dispose",fe),M.__depthDisposeCallback=fe}M.__boundDepthTexture=le}if(L.depthTexture&&!M.__autoAllocateDepthBuffer)if(K)for(let le=0;le<6;le++)Lt(M.__webglFramebuffer[le],L,le);else{const le=L.texture.mipmaps;le&&le.length>0?Lt(M.__webglFramebuffer[0],L,0):Lt(M.__webglFramebuffer,L,0)}else if(K){M.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[le]),M.__webglDepthbuffer[le]===void 0)M.__webglDepthbuffer[le]=s.createRenderbuffer(),nt(M.__webglDepthbuffer[le],L,!1);else{const fe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=M.__webglDepthbuffer[le];s.bindRenderbuffer(s.RENDERBUFFER,be),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,be)}}else{const le=L.texture.mipmaps;if(le&&le.length>0?n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),nt(M.__webglDepthbuffer,L,!1);else{const fe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,be),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,be)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function vt(L,M,K){const le=r.get(L);M!==void 0&&we(le.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&at(L)}function It(L){const M=L.texture,K=r.get(L),le=r.get(M);L.addEventListener("dispose",w);const fe=L.textures,be=L.isWebGLCubeRenderTarget===!0,Ae=fe.length>1;if(Ae||(le.__webglTexture===void 0&&(le.__webglTexture=s.createTexture()),le.__version=M.version,d.memory.textures++),be){K.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer[pe]=[];for(let xe=0;xe<M.mipmaps.length;xe++)K.__webglFramebuffer[pe][xe]=s.createFramebuffer()}else K.__webglFramebuffer[pe]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer=[];for(let pe=0;pe<M.mipmaps.length;pe++)K.__webglFramebuffer[pe]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(Ae)for(let pe=0,xe=fe.length;pe<xe;pe++){const Re=r.get(fe[pe]);Re.__webglTexture===void 0&&(Re.__webglTexture=s.createTexture(),d.memory.textures++)}if(L.samples>0&&Gt(L)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let pe=0;pe<fe.length;pe++){const xe=fe[pe];K.__webglColorRenderbuffer[pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[pe]);const Re=l.convert(xe.format,xe.colorSpace),Ke=l.convert(xe.type),Pe=C(xe.internalFormat,Re,Ke,xe.normalized,xe.colorSpace,L.isXRRenderTarget===!0),Te=Dt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,Pe,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,K.__webglColorRenderbuffer[pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),nt(K.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(be){n.bindTexture(s.TEXTURE_CUBE_MAP,le.__webglTexture),Ue(s.TEXTURE_CUBE_MAP,M);for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)we(K.__webglFramebuffer[pe][xe],L,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,xe);else we(K.__webglFramebuffer[pe],L,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);_(M)&&I(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ae){for(let pe=0,xe=fe.length;pe<xe;pe++){const Re=fe[pe],Ke=r.get(Re);let Pe=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Pe=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Pe,Ke.__webglTexture),Ue(Pe,Re),we(K.__webglFramebuffer,L,Re,s.COLOR_ATTACHMENT0+pe,Pe,0),_(Re)&&I(Pe)}n.unbindTexture()}else{let pe=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(pe=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(pe,le.__webglTexture),Ue(pe,M),M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)we(K.__webglFramebuffer[xe],L,M,s.COLOR_ATTACHMENT0,pe,xe);else we(K.__webglFramebuffer,L,M,s.COLOR_ATTACHMENT0,pe,0);_(M)&&I(pe),n.unbindTexture()}L.depthBuffer&&at(L)}function ft(L){const M=L.textures;for(let K=0,le=M.length;K<le;K++){const fe=M[K];if(_(fe)){const be=z(L),Ae=r.get(fe).__webglTexture;n.bindTexture(be,Ae),I(be),n.unbindTexture()}}}const Ut=[],Zt=[];function nn(L){if(L.samples>0){if(Gt(L)===!1){const M=L.textures,K=L.width,le=L.height;let fe=s.COLOR_BUFFER_BIT;const be=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=r.get(L),pe=M.length>1;if(pe)for(let Re=0;Re<M.length;Re++)n.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);const xe=L.texture.mipmaps;xe&&xe.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Re=0;Re<M.length;Re++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(fe|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(fe|=s.STENCIL_BUFFER_BIT)),pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[Re]);const Ke=r.get(M[Re]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ke,0)}s.blitFramebuffer(0,0,K,le,0,0,K,le,fe,s.NEAREST),m===!0&&(Ut.length=0,Zt.length=0,Ut.push(s.COLOR_ATTACHMENT0+Re),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(Ut.push(be),Zt.push(be),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Zt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ut))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pe)for(let Re=0;Re<M.length;Re++){n.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[Re]);const Ke=r.get(M[Re]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,Ke,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&m){const M=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function Dt(L){return Math.min(o.maxSamples,L.samples)}function Gt(L){const M=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function j(L){const M=d.render.frame;v.get(L)!==M&&(v.set(L,M),L.update())}function an(L,M){const K=L.colorSpace,le=L.format,fe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||K!==zl&&K!==Nr&&(St.getTransfer(K)===kt?(le!==Ei||fe!==$n)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",K)),M}function Tt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=he,this.resetTextureUnits=ie,this.getTextureUnits=X,this.setTextureUnits=Q,this.setTexture2D=$,this.setTexture2DArray=q,this.setTexture3D=Y,this.setTextureCube=R,this.rebindTextures=vt,this.setupRenderTarget=It,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Gt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function O1(s,e){function n(r,o=Nr){let l;const d=St.getTransfer(o);if(r===$n)return s.UNSIGNED_BYTE;if(r===df)return s.UNSIGNED_SHORT_4_4_4_4;if(r===ff)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Mx)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===bx)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===yx)return s.BYTE;if(r===Sx)return s.SHORT;if(r===Ya)return s.UNSIGNED_SHORT;if(r===uf)return s.INT;if(r===Ui)return s.UNSIGNED_INT;if(r===Ii)return s.FLOAT;if(r===Oi)return s.HALF_FLOAT;if(r===Ex)return s.ALPHA;if(r===wx)return s.RGB;if(r===Ei)return s.RGBA;if(r===rr)return s.DEPTH_COMPONENT;if(r===es)return s.DEPTH_STENCIL;if(r===Tx)return s.RED;if(r===hf)return s.RED_INTEGER;if(r===is)return s.RG;if(r===pf)return s.RG_INTEGER;if(r===mf)return s.RGBA_INTEGER;if(r===Ll||r===Il||r===Fl||r===kl)if(d===kt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Ll)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Il)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Ll)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Il)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===kl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Sd||r===Md||r===bd||r===Ed)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Sd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Md)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===bd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ed)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===wd||r===Td||r===Ad||r===Cd||r===Nd||r===Ol||r===Rd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===wd||r===Td)return d===kt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Ad)return d===kt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Cd)return l.COMPRESSED_R11_EAC;if(r===Nd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Ol)return l.COMPRESSED_RG11_EAC;if(r===Rd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Pd||r===Dd||r===Ld||r===Id||r===Fd||r===kd||r===Ud||r===Od||r===Bd||r===zd||r===Hd||r===Gd||r===Vd||r===jd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Pd)return d===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Dd)return d===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ld)return d===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Id)return d===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Fd)return d===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===kd)return d===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ud)return d===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Od)return d===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Bd)return d===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===zd)return d===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Hd)return d===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Gd)return d===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Vd)return d===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===jd)return d===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Wd||r===Xd||r===qd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Wd)return d===kt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Xd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===qd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Yd||r===Kd||r===Bl||r===$d)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Yd)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Kd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Bl)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===$d)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ka?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const B1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class H1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new kx(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Bi({vertexShader:B1,fragmentShader:z1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Zn(new to(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class G1 extends rs{constructor(e,n){super();const r=this;let o=null,l=1,d=null,h="local-floor",m=1,p=null,v=null,S=null,g=null,b=null,T=null;const N=typeof XRWebGLBinding<"u",y=new H1,_={},I=n.getContextAttributes();let z=null,C=null;const D=[],P=[],O=new Et;let w=null,F=null;const k=new ci;k.viewport=new Yt;const H=new ci;H.viewport=new Yt;const Z=[k,H],ie=new $_;let X=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let de=D[se];return de===void 0&&(de=new Vu,D[se]=de),de.getTargetRaySpace()},this.getControllerGrip=function(se){let de=D[se];return de===void 0&&(de=new Vu,D[se]=de),de.getGripSpace()},this.getHand=function(se){let de=D[se];return de===void 0&&(de=new Vu,D[se]=de),de.getHandSpace()};function he(se){const de=P.indexOf(se.inputSource);if(de===-1)return;const Me=D[de];Me!==void 0&&(Me.update(se.inputSource,se.frame,p||d),Me.dispatchEvent({type:se.type,data:se.inputSource}))}function ee(){o.removeEventListener("select",he),o.removeEventListener("selectstart",he),o.removeEventListener("selectend",he),o.removeEventListener("squeeze",he),o.removeEventListener("squeezestart",he),o.removeEventListener("squeezeend",he),o.removeEventListener("end",ee),o.removeEventListener("inputsourceschange",$);for(let se=0;se<D.length;se++){const de=P[se];de!==null&&(P[se]=null,D[se].disconnect(de))}X=null,Q=null,y.reset();for(const se in _)delete _[se];if(e.setRenderTarget(z),b=null,g=null,S=null,o=null,C=null,Ge.stop(),r.isPresenting=!1,e.setPixelRatio(w),e.setSize(O.width,O.height,!1),F!==null){const se=F.camera;se.fov=F.fov,se.zoom=F.zoom,se.updateProjectionMatrix(),F=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){l=se,r.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){h=se,r.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(se){p=se},this.getBaseLayer=function(){return g!==null?g:b},this.getBinding=function(){return S===null&&N&&(S=new XRWebGLBinding(o,n)),S},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(se){if(o=se,o!==null){if(z=e.getRenderTarget(),o.addEventListener("select",he),o.addEventListener("selectstart",he),o.addEventListener("selectend",he),o.addEventListener("squeeze",he),o.addEventListener("squeezestart",he),o.addEventListener("squeezeend",he),o.addEventListener("end",ee),o.addEventListener("inputsourceschange",$),I.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(O),N&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Ye=null,we=null;I.depth&&(we=I.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Me=I.stencil?es:rr,Ye=I.stencil?Ka:Ui);const nt={colorFormat:n.RGBA8,depthFormat:we,scaleFactor:l};S=this.getBinding(),g=S.createProjectionLayer(nt),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),C=new wi(g.textureWidth,g.textureHeight,{format:Ei,type:$n,depthTexture:new Za(g.textureWidth,g.textureHeight,Ye,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const Me={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:l};b=new XRWebGLLayer(o,n,Me),o.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),C=new wi(b.framebufferWidth,b.framebufferHeight,{format:Ei,type:$n,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1,storeMultisampledDepthBuffer:b.ignoreDepthValues===!1,storeMultisampledStencilBuffer:b.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await o.requestReferenceSpace(h),Ge.setContext(o),Ge.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function $(se){for(let de=0;de<se.removed.length;de++){const Me=se.removed[de],Ye=P.indexOf(Me);Ye>=0&&(P[Ye]=null,D[Ye].disconnect(Me))}for(let de=0;de<se.added.length;de++){const Me=se.added[de];let Ye=P.indexOf(Me);if(Ye===-1){for(let nt=0;nt<D.length;nt++)if(nt>=P.length){P.push(Me),Ye=nt;break}else if(P[nt]===null){P[nt]=Me,Ye=nt;break}if(Ye===-1)break}const we=D[Ye];we&&we.connect(Me)}}const q=new oe,Y=new oe;function R(se,de,Me){q.setFromMatrixPosition(de.matrixWorld),Y.setFromMatrixPosition(Me.matrixWorld);const Ye=q.distanceTo(Y),we=de.projectionMatrix.elements,nt=Me.projectionMatrix.elements,Lt=we[14]/(we[10]-1),at=we[14]/(we[10]+1),vt=(we[9]+1)/we[5],It=(we[9]-1)/we[5],ft=(we[8]-1)/we[0],Ut=(nt[8]+1)/nt[0],Zt=Lt*ft,nn=Lt*Ut,Dt=Ye/(-ft+Ut),Gt=Dt*-ft;if(de.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Gt),se.translateZ(Dt),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),we[10]===-1)se.projectionMatrix.copy(de.projectionMatrix),se.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const j=Lt+Dt,an=at+Dt,Tt=Zt-Gt,L=nn+(Ye-Gt),M=vt*at/an*j,K=It*at/an*j;se.projectionMatrix.makePerspective(Tt,L,M,K,j,an),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function re(se,de){de===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(de.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(o===null)return;let de=se.near,Me=se.far;y.texture!==null&&(y.depthNear>0&&(de=y.depthNear),y.depthFar>0&&(Me=y.depthFar)),ie.near=H.near=k.near=de,ie.far=H.far=k.far=Me,(X!==ie.near||Q!==ie.far)&&(o.updateRenderState({depthNear:ie.near,depthFar:ie.far}),X=ie.near,Q=ie.far),ie.layers.mask=se.layers.mask|6,k.layers.mask=ie.layers.mask&-5,H.layers.mask=ie.layers.mask&-3;const Ye=se.parent,we=ie.cameras;re(ie,Ye);for(let nt=0;nt<we.length;nt++)re(we[nt],Ye);we.length===2?R(ie,k,H):ie.projectionMatrix.copy(k.projectionMatrix),F===null&&se.isPerspectiveCamera&&(F={camera:se,fov:se.fov,zoom:se.zoom}),ye(se,ie,Ye)};function ye(se,de,Me){Me===null?se.matrix.copy(de.matrixWorld):(se.matrix.copy(Me.matrixWorld),se.matrix.invert(),se.matrix.multiply(de.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(de.projectionMatrix),se.projectionMatrixInverse.copy(de.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Jd*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return ie},this.getFoveation=function(){if(!(g===null&&b===null))return m},this.setFoveation=function(se){m=se,g!==null&&(g.fixedFoveation=se),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=se)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(ie)},this.getCameraTexture=function(se){return _[se]};let He=null;function Ue(se,de){if(v=de.getViewerPose(p||d),T=de,v!==null){const Me=v.views;b!==null&&(e.setRenderTargetFramebuffer(C,b.framebuffer),e.setRenderTarget(C));let Ye=!1;Me.length!==ie.cameras.length&&(ie.cameras.length=0,Ye=!0);for(let at=0;at<Me.length;at++){const vt=Me[at];let It=null;if(b!==null)It=b.getViewport(vt);else{const Ut=S.getViewSubImage(g,vt);It=Ut.viewport,at===0&&(e.setRenderTargetTextures(C,Ut.colorTexture,Ut.depthStencilTexture),e.setRenderTarget(C))}let ft=Z[at];ft===void 0&&(ft=new ci,ft.layers.enable(at),ft.viewport=new Yt,Z[at]=ft),ft.matrix.fromArray(vt.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(vt.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(It.x,It.y,It.width,It.height),at===0&&(ie.matrix.copy(ft.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale)),Ye===!0&&ie.cameras.push(ft)}const we=o.enabledFeatures;if(we&&we.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&N){S=r.getBinding();const at=S.getDepthInformation(Me[0]);at&&at.isValid&&at.texture&&y.init(at,o.renderState)}if(we&&we.includes("camera-access")&&N){e.state.unbindTexture(),S=r.getBinding();for(let at=0;at<Me.length;at++){const vt=Me[at].camera;if(vt){let It=_[vt];It||(It=new kx,_[vt]=It);const ft=S.getCameraImage(vt);It.sourceTexture=ft}}}}for(let Me=0;Me<D.length;Me++){const Ye=P[Me],we=D[Me];Ye!==null&&we!==void 0&&we.update(Ye,de,p||d)}He&&He(se,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),T=null}const Ge=new zx;Ge.setAnimationLoop(Ue),this.setAnimationLoop=function(se){He=se},this.dispose=function(){}}}const V1=new Kt,qx=new ut;qx.set(-1,0,0,0,1,0,0,0,1);function j1(s,e){function n(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,Ux(s)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function o(y,_,I,z,C){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?l(y,_):_.isMeshLambertMaterial?(l(y,_),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(l(y,_),S(y,_)):_.isMeshPhongMaterial?(l(y,_),v(y,_),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(l(y,_),g(y,_),_.isMeshPhysicalMaterial&&b(y,_,C)):_.isMeshMatcapMaterial?(l(y,_),T(y,_)):_.isMeshDepthMaterial?l(y,_):_.isMeshDistanceMaterial?(l(y,_),N(y,_)):_.isMeshNormalMaterial?l(y,_):_.isLineBasicMaterial?(d(y,_),_.isLineDashedMaterial&&h(y,_)):_.isPointsMaterial?m(y,_,I,z):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,n(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,n(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,n(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Vn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,n(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Vn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,n(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,n(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const I=e.get(_),z=I.envMap,C=I.envMapRotation;z&&(y.envMap.value=z,y.envMapRotation.value.setFromMatrix4(V1.makeRotationFromEuler(C)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(qx),y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,y.aoMapTransform))}function d(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,n(_.map,y.mapTransform))}function h(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,I,z){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*I,y.scale.value=z*.5,_.map&&(y.map.value=_.map,n(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,n(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,n(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,n(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function v(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function S(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function g(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function b(y,_,I){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Vn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.retroreflectivity>0&&(y.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,_){_.matcap&&(y.matcap.value=_.matcap)}function N(y,_){const I=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function W1(s,e,n,r){let o={},l={},d=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,D){const P=D.program;r.uniformBlockBinding(C,P)}function p(C,D){let P=o[C.id];P===void 0&&(y(C),P=v(C),o[C.id]=P,C.addEventListener("dispose",I));const O=D.program;r.updateUBOMapping(C,O);const w=e.render.frame;l[C.id]!==w&&(g(C),l[C.id]=w)}function v(C){const D=S();C.__bindingPointIndex=D;const P=s.createBuffer(),O=C.__size,w=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,O,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,P),P}function S(){for(let C=0;C<h;C++)if(d.indexOf(C)===-1)return d.push(C),C;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const D=o[C.id],P=C.uniforms,O=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let w=0,F=P.length;w<F;w++){const k=P[w];if(Array.isArray(k))for(let H=0,Z=k.length;H<Z;H++)b(k[H],w,H,O);else b(k,w,0,O)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function b(C,D,P,O){if(N(C,D,P,O)===!0){const w=C.__offset,F=C.value;if(Array.isArray(F)){let k=0;for(let H=0;H<F.length;H++){const Z=F[H],ie=_(Z);T(Z,C.__data,k),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(k+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(F,C.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,w,C.__data)}}function T(C,D,P){typeof C=="number"||typeof C=="boolean"?D[0]=C:C.isMatrix3?(D[0]=C.elements[0],D[1]=C.elements[1],D[2]=C.elements[2],D[3]=0,D[4]=C.elements[3],D[5]=C.elements[4],D[6]=C.elements[5],D[7]=0,D[8]=C.elements[6],D[9]=C.elements[7],D[10]=C.elements[8],D[11]=0):ArrayBuffer.isView(C)?D.set(new C.constructor(C.buffer,C.byteOffset,D.length)):C.toArray(D,P)}function N(C,D,P,O){const w=C.value,F=D+"_"+P;if(O[F]===void 0)return typeof w=="number"||typeof w=="boolean"?O[F]=w:ArrayBuffer.isView(w)?O[F]=w.slice():O[F]=w.clone(),!0;{const k=O[F];if(typeof w=="number"||typeof w=="boolean"){if(k!==w)return O[F]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(k.equals(w)===!1)return k.copy(w),!0}}return!1}function y(C){const D=C.uniforms;let P=0;const O=16;for(let F=0,k=D.length;F<k;F++){const H=Array.isArray(D[F])?D[F]:[D[F]];for(let Z=0,ie=H.length;Z<ie;Z++){const X=H[Z],Q=Array.isArray(X.value)?X.value:[X.value];for(let he=0,ee=Q.length;he<ee;he++){const $=Q[he],q=_($),Y=P%O,R=Y%q.boundary,re=Y+R;P+=R,re!==0&&O-re<q.storage&&(P+=O-re),X.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=P,P+=q.storage}}}const w=P%O;return w>0&&(P+=O-w),C.__size=P,C.__cache={},this}function _(C){const D={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(D.boundary=4,D.storage=4):C.isVector2?(D.boundary=8,D.storage=8):C.isVector3||C.isColor?(D.boundary=16,D.storage=12):C.isVector4?(D.boundary=16,D.storage=16):C.isMatrix3?(D.boundary=48,D.storage=48):C.isMatrix4?(D.boundary=64,D.storage=64):C.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(D.boundary=16,D.storage=C.byteLength):lt("WebGLRenderer: Unsupported uniform value type.",C),D}function I(C){const D=C.target;D.removeEventListener("dispose",I);const P=d.indexOf(D.__bindingPointIndex);d.splice(P,1),s.deleteBuffer(o[D.id]),delete o[D.id],delete l[D.id]}function z(){for(const C in o)s.deleteBuffer(o[C]);d=[],o={},l={}}return{bind:m,update:p,dispose:z}}const X1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Di=null;function q1(){return Di===null&&(Di=new L_(X1,16,16,is,Oi),Di.name="DFG_LUT",Di.minFilter=Cn,Di.magFilter=Cn,Di.wrapS=tr,Di.wrapT=tr,Di.generateMipmaps=!1,Di.needsUpdate=!0),Di}class Y1{constructor(e={}){const{canvas:n=l_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:g=!1,outputBufferType:b=$n}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=d;const N=b,y=new Set([mf,pf,hf]),_=new Set([$n,Ui,Ya,Ka,df,ff]),I=new Uint32Array(4),z=new Int32Array(4),C=new oe;let D=null,P=null;const O=[],w=[];let F=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let H=!1,Z=null,ie=null,X=null,Q=null;this._outputColorSpace=li;let he=0,ee=0,$=null,q=-1,Y=null;const R=new Yt,re=new Yt;let ye=null;const He=new xt(0);let Ue=0,Ge=n.width,se=n.height,de=1,Me=null,Ye=null;const we=new Yt(0,0,Ge,se),nt=new Yt(0,0,Ge,se);let Lt=!1;const at=new _f;let vt=!1,It=!1;const ft=new Kt,Ut=new oe,Zt=new Yt,nn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Dt=!1;function Gt(){return $===null?de:1}let j=r;function an(A,V){return n.getContext(A,V)}let Tt,L,M,K,le,fe,be,Ae,pe,xe,Re,Ke,Pe,Te,$e,tt,st,G,Ce,me,Ne,ke,ge;try{const A={alpha:!0,depth:o,stencil:l,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:S};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${cf}`),n.addEventListener("webglcontextlost",At,!1),n.addEventListener("webglcontextrestored",bt,!1),n.addEventListener("webglcontextcreationerror",xn,!1),j===null){const V="webgl2";if(j=an(V,A),j===null)throw an(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Je()}catch(A){throw n.removeEventListener("webglcontextlost",At,!1),n.removeEventListener("webglcontextrestored",bt,!1),n.removeEventListener("webglcontextcreationerror",xn,!1),Rt("WebGLRenderer: "+A.message),A}function Je(){Tt=new qM(j),Tt.init(),Ne=new O1(j,Tt),L=new UM(j,Tt,e,Ne),M=new k1(j,Tt),L.reversedDepthBuffer&&g&&M.buffers.depth.setReversed(!0),ie=j.createFramebuffer(),X=j.createFramebuffer(),Q=j.createFramebuffer(),K=new $M(j),le=new M1,fe=new U1(j,Tt,M,le,L,Ne,K),be=new XM(k),Ae=new J_(j),ke=new FM(j,Ae),pe=new YM(j,Ae,K,ke),xe=new JM(j,pe,Ae,ke,K),G=new ZM(j,L,fe),$e=new OM(le),Re=new S1(k,be,Tt,L,ke,$e),Ke=new j1(k,le),Pe=new E1,Te=new R1(Tt),st=new IM(k,be,M,xe,T,m),tt=new F1(k,xe,L),ge=new W1(j,K,L,M),Ce=new kM(j,Tt,K),me=new KM(j,Tt,K),K.programs=Re.programs,k.capabilities=L,k.extensions=Tt,k.properties=le,k.renderLists=Pe,k.shadowMap=tt,k.state=M,k.info=K}N!==$n&&(F=new eb(N,n.width,n.height,h,o,l));const Xe=new G1(k,j);this.xr=Xe,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const A=Tt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Tt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(A){A!==void 0&&(de=A,this.setSize(Ge,se,!1))},this.getSize=function(A){return A.set(Ge,se)},this.setSize=function(A,V,ce=!0){if(Xe.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ge=A,se=V,n.width=Math.floor(A*de),n.height=Math.floor(V*de),ce===!0&&(n.style.width=A+"px",n.style.height=V+"px"),F!==null&&F.setSize(n.width,n.height),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(Ge*de,se*de).floor()},this.setDrawingBufferSize=function(A,V,ce){Ge=A,se=V,de=ce,n.width=Math.floor(A*ce),n.height=Math.floor(V*ce),this.setViewport(0,0,A,V)},this.setEffects=function(A){if(N===$n){Rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let V=0;V<A.length;V++)if(A[V].isOutputPass===!0){lt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(we)},this.setViewport=function(A,V,ce,te){A.isVector4?we.set(A.x,A.y,A.z,A.w):we.set(A,V,ce,te),M.viewport(R.copy(we).multiplyScalar(de).round())},this.getScissor=function(A){return A.copy(nt)},this.setScissor=function(A,V,ce,te){A.isVector4?nt.set(A.x,A.y,A.z,A.w):nt.set(A,V,ce,te),M.scissor(re.copy(nt).multiplyScalar(de).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(A){M.setScissorTest(Lt=A)},this.setOpaqueSort=function(A){Me=A},this.setTransparentSort=function(A){Ye=A},this.getClearColor=function(A){return A.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor(...arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha(...arguments)},this.clear=function(A=!0,V=!0,ce=!0){let te=0;if(A){let J=!1;if($!==null){const Ie=$.texture.format;J=y.has(Ie)}if(J){const Ie=$.texture.type,De=_.has(Ie),Le=st.getClearColor(),je=st.getClearAlpha(),Ze=Le.r,ct=Le.g,dt=Le.b;De?(I[0]=Ze,I[1]=ct,I[2]=dt,I[3]=je,j.clearBufferuiv(j.COLOR,0,I)):(z[0]=Ze,z[1]=ct,z[2]=dt,z[3]=je,j.clearBufferiv(j.COLOR,0,z))}else te|=j.COLOR_BUFFER_BIT}V&&(te|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(te|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&j.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Z=A},this.dispose=function(){n.removeEventListener("webglcontextlost",At,!1),n.removeEventListener("webglcontextrestored",bt,!1),n.removeEventListener("webglcontextcreationerror",xn,!1),st.dispose(),Pe.dispose(),Te.dispose(),le.dispose(),be.dispose(),xe.dispose(),ke.dispose(),ge.dispose(),Re.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",no),Xe.removeEventListener("sessionend",io),Nn.stop()};function At(A){A.preventDefault(),om("WebGLRenderer: Context Lost."),H=!0}function bt(){om("WebGLRenderer: Context Restored."),H=!1;const A=K.autoReset,V=tt.enabled,ce=tt.autoUpdate,te=tt.needsUpdate,J=tt.type;Je(),K.autoReset=A,tt.enabled=V,tt.autoUpdate=ce,tt.needsUpdate=te,tt.type=J}function xn(A){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Qn(A){const V=A.target;V.removeEventListener("dispose",Qn),Pr(V)}function Pr(A){ss(A),le.remove(A)}function ss(A){const V=le.get(A).programs;V!==void 0&&(V.forEach(function(ce){Re.releaseProgram(ce)}),A.isShaderMaterial&&Re.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,ce,te,J,Ie){V===null&&(V=nn);const De=J.isMesh&&J.matrixWorld.determinantAffine()<0,Le=Wt(A,V,ce,te,J);M.setMaterial(te,De);let je=ce.index,Ze=1;if(te.wireframe===!0){if(je=pe.getWireframeAttribute(ce),je===void 0)return;Ze=2}const ct=ce.drawRange,dt=ce.attributes.position;let ze=ct.start*Ze,_t=(ct.start+ct.count)*Ze;Ie!==null&&(ze=Math.max(ze,Ie.start*Ze),_t=Math.min(_t,(Ie.start+Ie.count)*Ze)),je!==null?(ze=Math.max(ze,0),_t=Math.min(_t,je.count)):dt!=null&&(ze=Math.max(ze,0),_t=Math.min(_t,dt.count));const Jt=_t-ze;if(Jt<0||Jt===1/0)return;ke.setup(J,te,Le,ce,je);let Ot,Pt=Ce;if(je!==null&&(Ot=Ae.get(je),Pt=me,Pt.setIndex(Ot)),J.isMesh)te.wireframe===!0?(M.setLineWidth(te.wireframeLinewidth*Gt()),Pt.setMode(j.LINES)):Pt.setMode(j.TRIANGLES);else if(J.isLine){let on=te.linewidth;on===void 0&&(on=1),M.setLineWidth(on*Gt()),J.isLineSegments?Pt.setMode(j.LINES):J.isLineLoop?Pt.setMode(j.LINE_LOOP):Pt.setMode(j.LINE_STRIP)}else J.isPoints?Pt.setMode(j.POINTS):J.isSprite&&Pt.setMode(j.TRIANGLES);if(J.isBatchedMesh)if(Tt.get("WEBGL_multi_draw"))Pt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const on=J._multiDrawStarts,Oe=J._multiDrawCounts,en=J._multiDrawCount,yt=je?Ae.get(je).bytesPerElement:1,Sn=le.get(te).currentProgram.getUniforms();for(let ht=0;ht<en;ht++)Sn.setValue(j,"_gl_DrawID",ht),Pt.render(on[ht]/yt,Oe[ht])}else if(J.isInstancedMesh)Pt.renderInstances(ze,Jt,J.count);else if(ce.isInstancedBufferGeometry){const on=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Oe=Math.min(ce.instanceCount,on);Pt.renderInstances(ze,Jt,Oe)}else Pt.render(ze,Jt)};function Dr(A,V,ce,te){Z!==null&&A.isNodeMaterial&&Z.setObject(te,A),vt===!0&&$e.setState(A,ce,!1),A.transparent===!0&&A.side===er&&A.forceSinglePass===!1?(A.side=Vn,A.needsUpdate=!0,Fr(A,V,te),A.side=ts,A.needsUpdate=!0,Fr(A,V,te),A.side=er):Fr(A,V,te)}this.compile=function(A,V,ce=null){ce===null&&(ce=A),Z!==null&&Z.renderStart(A,V,ce),P=Te.get(ce),P.init(V),w.push(P),ce.traverseVisible(function(J){J.isLight&&J.layers.test(V.layers)&&(P.pushLight(J),J.castShadow&&P.pushShadow(J))}),A!==ce&&A.traverseVisible(function(J){J.isLight&&J.layers.test(V.layers)&&(P.pushLight(J),J.castShadow&&P.pushShadow(J))}),P.setupLights(),Z!==null&&Z.updateLights(P.state.lightsArray),It=this.localClippingEnabled,vt=$e.init(this.clippingPlanes,It),vt===!0&&$e.setGlobalState(this.clippingPlanes,V),Z!==null&&tt.render(P.state.shadowsArray,ce,V);const te=new Set;return A.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Ie=J.material;if(Ie)if(Array.isArray(Ie))for(let De=0;De<Ie.length;De++){const Le=Ie[De];Dr(Le,ce,V,J),te.add(Le)}else Dr(Ie,ce,V,J),te.add(Ie)}),P=w.pop(),Z!==null&&Z.renderEnd(),te},this.compileAsync=function(A,V,ce=null){const te=this.compile(A,V,ce);return new Promise(J=>{function Ie(){if(te.forEach(function(De){const je=le.get(De).currentProgram;(je===void 0||je.isReady())&&te.delete(De)}),te.size===0){J(A);return}setTimeout(Ie,10)}Tt.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let Lr=null;function $l(A){Lr&&Lr(A)}function no(){Nn.stop()}function io(){Nn.start()}const Nn=new zx;Nn.setAnimationLoop($l),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(A){Lr=A,Xe.setAnimationLoop(A),A===null?Nn.stop():Nn.start()},Xe.addEventListener("sessionstart",no),Xe.addEventListener("sessionend",io),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;Z!==null&&Z.renderStart(A,V);const ce=Xe.enabled===!0&&Xe.isPresenting===!0,te=F!==null&&($===null||ce)&&F.begin(k,$);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(V),V=Xe.getCamera()),A.isScene===!0&&A.onBeforeRender(k,A,V,$),P=Te.get(A,w.length),P.init(V),P.state.textureUnits=fe.getTextureUnits(),w.push(P),ft.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),at.setFromProjectionMatrix(ft,Fi,V.reversedDepth),It=this.localClippingEnabled,vt=$e.init(this.clippingPlanes,It),D=Pe.get(A,O.length),D.init(),O.push(D),Xe.enabled===!0&&Xe.isPresenting===!0){const De=k.xr.getDepthSensingMesh();De!==null&&as(De,V,-1/0,k.sortObjects)}as(A,V,0,k.sortObjects),D.finish(),Z!==null&&Z.updateLights(P.state.lightsArray),k.sortObjects===!0&&D.sort(Me,Ye),Dt=Xe.enabled===!1||Xe.isPresenting===!1||Xe.hasDepthSensing()===!1,Dt&&st.addToRenderList(D,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),vt===!0&&$e.beginShadows();const J=P.state.shadowsArray;if(tt.render(J,A,V),vt===!0&&$e.endShadows(),(te&&F.hasRenderPass())===!1){const De=D.opaque,Le=D.transmissive;if(P.setupLights(),V.isArrayCamera){const je=V.cameras;if(Le.length>0)for(let Ze=0,ct=je.length;Ze<ct;Ze++){const dt=je[Ze];ro(De,Le,A,dt)}Dt&&st.render(A);for(let Ze=0,ct=je.length;Ze<ct;Ze++){const dt=je[Ze];Js(D,A,dt,dt.viewport)}}else Le.length>0&&ro(De,Le,A,V),Dt&&st.render(A),Js(D,A,V)}$!==null&&ee===0&&(fe.updateMultisampleRenderTarget($),fe.updateRenderTargetMipmap($)),te&&F.end(k),A.isScene===!0&&A.onAfterRender(k,A,V),ke.resetDefaultState(),q=-1,Y=null,w.pop(),w.length>0?(P=w[w.length-1],fe.setTextureUnits(P.state.textureUnits),vt===!0&&$e.setGlobalState(k.clippingPlanes,P.state.camera)):P=null,O.pop(),O.length>0?D=O[O.length-1]:D=null,Z!==null&&Z.renderEnd()};function as(A,V,ce,te){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)ce=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLightProbeGrid)P.pushLightProbeGrid(A);else if(A.isLight)P.pushLight(A),A.castShadow&&P.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(at)){te&&Zt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ft);const De=xe.update(A),Le=A.material;Le.visible&&D.push(A,De,Le,ce,Zt.z,null,V)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(at))){const De=xe.update(A),Le=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Zt.copy(A.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Zt.copy(De.boundingSphere.center)),Zt.applyMatrix4(A.matrixWorld).applyMatrix4(ft)),Array.isArray(Le)){const je=De.groups;for(let Ze=0,ct=je.length;Ze<ct;Ze++){const dt=je[Ze],ze=Le[dt.materialIndex];ze&&ze.visible&&D.push(A,De,ze,ce,Zt.z,dt,V)}}else Le.visible&&D.push(A,De,Le,ce,Zt.z,null,V)}}const Ie=A.children;for(let De=0,Le=Ie.length;De<Le;De++)as(Ie[De],V,ce,te)}function Js(A,V,ce,te){const{opaque:J,transmissive:Ie,transparent:De}=A;P.setupLightsView(ce),vt===!0&&$e.setGlobalState(k.clippingPlanes,ce),te&&M.viewport(R.copy(te)),J.length>0&&Ir(J,V,ce),Ie.length>0&&Ir(Ie,V,ce),De.length>0&&Ir(De,V,ce),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function ro(A,V,ce,te){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[te.id]===void 0){const ze=Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[te.id]=new wi(1,1,{generateMipmaps:!0,type:ze?Oi:$n,minFilter:Qr,samples:Math.max(4,L.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:St.workingColorSpace})}const Ie=P.state.transmissionRenderTarget[te.id],De=te.viewport||R;Ie.setSize(De.z*k.transmissionResolutionScale,De.w*k.transmissionResolutionScale);const Le=k.getRenderTarget(),je=k.getActiveCubeFace(),Ze=k.getActiveMipmapLevel();k.setRenderTarget(Ie),k.getClearColor(He),Ue=k.getClearAlpha(),Ue<1&&k.setClearColor(16777215,.5),k.clear(),Dt&&st.render(ce);const ct=k.toneMapping;k.toneMapping=ki;const dt=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),P.setupLightsView(te),vt===!0&&$e.setGlobalState(k.clippingPlanes,te),Ir(A,ce,te),fe.updateMultisampleRenderTarget(Ie),fe.updateRenderTargetMipmap(Ie),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let _t=0,Jt=V.length;_t<Jt;_t++){const Ot=V[_t],{object:Pt,geometry:on,material:Oe,group:en}=Ot;if(Oe.side===er&&Pt.layers.test(te.layers)){const yt=Oe.side;Oe.side=Vn,Oe.needsUpdate=!0,Qs(Pt,ce,te,on,Oe,en),Oe.side=yt,Oe.needsUpdate=!0,ze=!0}}ze===!0&&(fe.updateMultisampleRenderTarget(Ie),fe.updateRenderTargetMipmap(Ie))}k.setRenderTarget(Le,je,Ze),k.setClearColor(He,Ue),dt!==void 0&&(te.viewport=dt),k.toneMapping=ct}function Ir(A,V,ce){const te=V.isScene===!0?V.overrideMaterial:null;for(let J=0,Ie=A.length;J<Ie;J++){const De=A[J],{object:Le,geometry:je,group:Ze}=De;let ct=De.material;ct.allowOverride===!0&&te!==null&&(ct=te),Le.layers.test(ce.layers)&&Qs(Le,V,ce,je,ct,Ze)}}function Qs(A,V,ce,te,J,Ie){Z!==null&&J.isNodeMaterial&&Z.setObject(A,J),A.onBeforeRender(k,V,ce,te,J,Ie),A.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),J.onBeforeRender(k,V,ce,te,A,Ie),J.transparent===!0&&J.side===er&&J.forceSinglePass===!1?(J.side=Vn,J.needsUpdate=!0,k.renderBufferDirect(ce,V,te,J,A,Ie),J.side=ts,J.needsUpdate=!0,k.renderBufferDirect(ce,V,te,J,A,Ie),J.side=er):k.renderBufferDirect(ce,V,te,J,A,Ie),A.onAfterRender(k,V,ce,te,J,Ie)}function Fr(A,V,ce){V.isScene!==!0&&(V=nn);const te=le.get(A),J=P.state.lights,Ie=P.state.shadowsArray,De=J.state.version,Le=Re.getParameters(A,J.state,Ie,V,ce,P.state.lightProbeGridArray),je=Re.getProgramCacheKey(Le);let Ze=te.programs;te.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?V.environment:null,te.fog=V.fog;const ct=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;te.envMap=be.get(A.envMap||te.environment,ct),te.envMapRotation=te.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,Ze===void 0&&(A.addEventListener("dispose",Qn),Ze=new Map,te.programs=Ze);let dt=Ze.get(je);if(dt!==void 0){if(te.currentProgram===dt&&te.lightsStateVersion===De)return so(A,Le),dt}else Le.uniforms=Re.getUniforms(A),Z!==null&&A.isNodeMaterial&&Z.build(A,ce,Le),A.onBeforeCompile(Le,k),dt=Re.acquireProgram(Le,je),Ze.set(je,dt),te.uniforms=Le.uniforms;const ze=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ze.clippingPlanes=$e.uniform),so(A,Le),te.needsLights=ta(A),te.lightsStateVersion=De,te.needsLights&&(ze.ambientLightColor.value=J.state.ambient,ze.lightProbe.value=J.state.probe,ze.sunLights.value=J.state.sun,ze.sunLightShadows.value=J.state.sunShadow,ze.directionalLights.value=J.state.directional,ze.directionalLightShadows.value=J.state.directionalShadow,ze.spotLights.value=J.state.spot,ze.spotLightShadows.value=J.state.spotShadow,ze.rectAreaLights.value=J.state.rectArea,ze.ltc_1.value=J.state.rectAreaLTC1,ze.ltc_2.value=J.state.rectAreaLTC2,ze.pointLights.value=J.state.point,ze.pointLightShadows.value=J.state.pointShadow,ze.hemisphereLights.value=J.state.hemi,ze.sunShadowMatrix.value=J.state.sunShadowMatrix,ze.sunShadowCascade.value=J.state.sunShadowCascade,ze.directionalShadowMatrix.value=J.state.directionalShadowMatrix,ze.spotLightMatrix.value=J.state.spotLightMatrix,ze.spotLightMap.value=J.state.spotLightMap,ze.pointShadowMatrix.value=J.state.pointShadowMatrix),te.lightProbeGrid=P.state.lightProbeGridArray.length>0,te.currentProgram=dt,te.uniformsList=null,dt}function ea(A){if(A.uniformsList===null){const V=A.currentProgram.getUniforms();A.uniformsList=Ul.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function so(A,V){const ce=le.get(A);ce.outputColorSpace=V.outputColorSpace,ce.batching=V.batching,ce.batchingColor=V.batchingColor,ce.instancing=V.instancing,ce.instancingColor=V.instancingColor,ce.instancingMorph=V.instancingMorph,ce.skinning=V.skinning,ce.morphTargets=V.morphTargets,ce.morphNormals=V.morphNormals,ce.morphColors=V.morphColors,ce.morphTargetsCount=V.morphTargetsCount,ce.numClippingPlanes=V.numClippingPlanes,ce.numIntersection=V.numClipIntersection,ce.vertexAlphas=V.vertexAlphas,ce.vertexTangents=V.vertexTangents,ce.toneMapping=V.toneMapping}function Zl(A,V){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;C.setFromMatrixPosition(V.matrixWorld);for(let ce=0,te=A.length;ce<te;ce++){const J=A[ce];if(J.texture!==null&&J.boundingBox.containsPoint(C))return J}return null}function Wt(A,V,ce,te,J){V.isScene!==!0&&(V=nn),fe.resetTextureUnits();const Ie=V.fog,De=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?V.environment:null,Le=$===null?k.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:St.workingColorSpace,je=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,Ze=be.get(te.envMap||De,je),ct=te.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,dt=!!ce.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),ze=!!ce.morphAttributes.position,_t=!!ce.morphAttributes.normal,Jt=!!ce.morphAttributes.color;let Ot=ki;te.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ot=k.toneMapping);const Pt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,on=Pt!==void 0?Pt.length:0,Oe=le.get(te),en=P.state.lights;if(vt===!0&&(It===!0||A!==Y)){const Ft=A===Y&&te.id===q;$e.setState(te,A,Ft)}let yt=!1;te.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==en.state.version||Oe.outputColorSpace!==Le||J.isBatchedMesh&&Oe.batching===!1||!J.isBatchedMesh&&Oe.batching===!0||J.isBatchedMesh&&Oe.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&Oe.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&Oe.instancing===!1||!J.isInstancedMesh&&Oe.instancing===!0||J.isSkinnedMesh&&Oe.skinning===!1||!J.isSkinnedMesh&&Oe.skinning===!0||J.isInstancedMesh&&Oe.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Oe.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Oe.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Oe.instancingMorph===!1&&J.morphTexture!==null||Oe.envMap!==Ze||te.fog===!0&&Oe.fog!==Ie||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==$e.numPlanes||Oe.numIntersection!==$e.numIntersection)||Oe.vertexAlphas!==ct||Oe.vertexTangents!==dt||Oe.morphTargets!==ze||Oe.morphNormals!==_t||Oe.morphColors!==Jt||Oe.toneMapping!==Ot||Oe.morphTargetsCount!==on||!!Oe.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(yt=!0):(yt=!0,Oe.__version=te.version);let Sn=Oe.currentProgram;yt===!0&&(Sn=Fr(te,V,J),Z&&te.isNodeMaterial&&Z.onUpdateProgram(te,Sn,Oe));let ht=!1,ui=!1,zi=!1;const Ct=Sn.getUniforms(),Vt=Oe.uniforms;if(M.useProgram(Sn.program)&&(ht=!0,ui=!0,zi=!0),te.id!==q&&(q=te.id,ui=!0),Oe.needsLights){const Ft=Zl(P.state.lightProbeGridArray,J);Oe.lightProbeGrid!==Ft&&(Oe.lightProbeGrid=Ft,ui=!0)}if(ht||Y!==A){M.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ct.setValue(j,"projectionMatrix",A.projectionMatrix),Ct.setValue(j,"viewMatrix",A.matrixWorldInverse);const ei=Ct.map.cameraPosition;ei!==void 0&&ei.setValue(j,Ut.setFromMatrixPosition(A.matrixWorld)),L.logarithmicDepthBuffer&&Ct.setValue(j,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Ct.setValue(j,"isOrthographic",A.isOrthographicCamera===!0),Y!==A&&(Y=A,ui=!0,zi=!0)}if(Oe.needsLights&&(en.state.sunShadowMap.length>0&&Ct.setValue(j,"sunShadowMap",en.state.sunShadowMap,fe),en.state.directionalShadowMap.length>0&&Ct.setValue(j,"directionalShadowMap",en.state.directionalShadowMap,fe),en.state.spotShadowMap.length>0&&Ct.setValue(j,"spotShadowMap",en.state.spotShadowMap,fe),en.state.pointShadowMap.length>0&&Ct.setValue(j,"pointShadowMap",en.state.pointShadowMap,fe)),J.isSkinnedMesh){Ct.setOptional(j,J,"bindMatrix"),Ct.setOptional(j,J,"bindMatrixInverse");const Ft=J.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),Ct.setValue(j,"boneTexture",Ft.boneTexture,fe))}J.isBatchedMesh&&(Ct.setOptional(j,J,"batchingTexture"),Ct.setValue(j,"batchingTexture",J._matricesTexture,fe),Ct.setOptional(j,J,"batchingIdTexture"),Ct.setValue(j,"batchingIdTexture",J._indirectTexture,fe),Ct.setOptional(j,J,"batchingColorTexture"),J._colorsTexture!==null&&Ct.setValue(j,"batchingColorTexture",J._colorsTexture,fe));const di=ce.morphAttributes;if((di.position!==void 0||di.normal!==void 0||di.color!==void 0)&&G.update(J,ce,Sn),(ui||Oe.receiveShadow!==J.receiveShadow)&&(Oe.receiveShadow=J.receiveShadow,Ct.setValue(j,"receiveShadow",J.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&V.environment!==null&&(Vt.envMapIntensity.value=V.environmentIntensity),Vt.dfgLUT!==void 0&&(Vt.dfgLUT.value=q1()),ui){if(Ct.setValue(j,"toneMappingExposure",k.toneMappingExposure),Oe.needsLights&&Jl(Vt,zi),Ie&&te.fog===!0&&Ke.refreshFogUniforms(Vt,Ie),Ke.refreshMaterialUniforms(Vt,te,de,se,P.state.transmissionRenderTarget[A.id]),Oe.needsLights&&Oe.lightProbeGrid){const Ft=Oe.lightProbeGrid;Vt.probesSH.value=Ft.texture,Vt.probesMin.value.copy(Ft.boundingBox.min),Vt.probesMax.value.copy(Ft.boundingBox.max),Vt.probesResolution.value.copy(Ft.resolution)}Ul.upload(j,ea(Oe),Vt,fe)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Ul.upload(j,ea(Oe),Vt,fe),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Ct.setValue(j,"center",J.center),Ct.setValue(j,"modelViewMatrix",J.modelViewMatrix),Ct.setValue(j,"normalMatrix",J.normalMatrix),Ct.setValue(j,"modelMatrix",J.matrixWorld),te.uniformsGroups!==void 0){const Ft=te.uniformsGroups;for(let ei=0,fi=Ft.length;ei<fi;ei++){const hi=Ft[ei];ge.update(hi,Sn),ge.bind(hi,Sn)}}return Sn}function Jl(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.sunLights.needsUpdate=V,A.sunLightShadows.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function ta(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return he},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(A,V,ce){const te=le.get(A);te.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),le.get(A.texture).__webglTexture=V,le.get(A.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:ce,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,V){const ce=le.get(A);ce.__webglFramebuffer=V,ce.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,ce=0){$=A,he=V,ee=ce;let te=null,J=!1,Ie=!1;if(A){const Le=le.get(A);if(Le.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(j.FRAMEBUFFER,Le.__webglFramebuffer),R.copy(A.viewport),re.copy(A.scissor),ye=A.scissorTest,M.viewport(R),M.scissor(re),M.setScissorTest(ye),q=-1;return}else if(Le.__webglFramebuffer===void 0)fe.setupRenderTarget(A);else if(Le.__hasExternalTextures)fe.rebindTextures(A,le.get(A.texture).__webglTexture,le.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ct=A.depthTexture;if(Le.__boundDepthTexture!==ct){if(ct!==null&&le.has(ct)&&(A.width!==ct.image.width||A.height!==ct.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(A)}}const je=A.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ie=!0);const Ze=le.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ze[V])?te=Ze[V][ce]:te=Ze[V],J=!0):A.samples>0&&fe.useMultisampledRTT(A)===!1?te=le.get(A).__webglMultisampledFramebuffer:Array.isArray(Ze)?te=Ze[ce]:te=Ze,R.copy(A.viewport),re.copy(A.scissor),ye=A.scissorTest}else R.copy(we).multiplyScalar(de).floor(),re.copy(nt).multiplyScalar(de).floor(),ye=Lt;if(ce!==0&&(te=ie),M.bindFramebuffer(j.FRAMEBUFFER,te)&&M.drawBuffers(A,te),M.viewport(R),M.scissor(re),M.setScissorTest(ye),J){const Le=le.get(A.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+V,Le.__webglTexture,ce)}else if(Ie){const Le=V;for(let je=0;je<A.textures.length;je++){const Ze=le.get(A.textures[je]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+je,Ze.__webglTexture,ce,Le)}}else if(A!==null&&ce!==0){const Le=le.get(A.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Le.__webglTexture,ce)}q=-1};function na(A){const V=le.get(A);return(V.__readFormat!==A.format||V.__readType!==A.type)&&(V.__readFormat=A.format,V.__readType=A.type,V.__formatReadable=L.textureFormatReadable(A.format),V.__typeReadable=L.textureTypeReadable(A.type)),V}this.readRenderTargetPixels=function(A,V,ce,te,J,Ie,De,Le=0){if(!(A&&A.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=le.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(je=je[De]),je){M.bindFramebuffer(j.FRAMEBUFFER,je);try{const Ze=A.textures[Le],ct=Ze.format,dt=Ze.type;A.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Le);const ze=na(Ze);if(ze.__formatReadable===!1){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ze.__typeReadable===!1){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-te&&ce>=0&&ce<=A.height-J&&j.readPixels(V,ce,te,J,Ne.convert(ct),Ne.convert(dt),Ie)}finally{const Ze=$!==null?le.get($).__webglFramebuffer:null;M.bindFramebuffer(j.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(A,V,ce,te,J,Ie,De,Le=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=le.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(je=je[De]),je)if(V>=0&&V<=A.width-te&&ce>=0&&ce<=A.height-J){M.bindFramebuffer(j.FRAMEBUFFER,je);const Ze=A.textures[Le],ct=Ze.format,dt=Ze.type;A.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Le);const ze=na(Ze);if(ze.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ze.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const _t=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,_t),j.bufferData(j.PIXEL_PACK_BUFFER,Ie.byteLength,j.STREAM_READ),j.readPixels(V,ce,te,J,Ne.convert(ct),Ne.convert(dt),0),j.bindBuffer(j.PIXEL_PACK_BUFFER,null);const Jt=$!==null?le.get($).__webglFramebuffer:null;M.bindFramebuffer(j.FRAMEBUFFER,Jt);const Ot=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await c_(j,Ot,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,_t),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Ie),j.bindBuffer(j.PIXEL_PACK_BUFFER,null),j.deleteBuffer(_t),j.deleteSync(Ot),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,V=null,ce=0){const te=Math.pow(2,-ce),J=Math.floor(A.image.width*te),Ie=Math.floor(A.image.height*te),De=V!==null?V.x:0,Le=V!==null?V.y:0;fe.setTexture2D(A,0),j.copyTexSubImage2D(j.TEXTURE_2D,ce,0,0,De,Le,J,Ie),M.unbindTexture()},this.copyTextureToTexture=function(A,V,ce=null,te=null,J=0,Ie=0){let De,Le,je,Ze,ct,dt,ze,_t,Jt;const Ot=A.isCompressedTexture?A.mipmaps[Ie]:A.image;if(ce!==null)De=ce.max.x-ce.min.x,Le=ce.max.y-ce.min.y,je=ce.isBox3?ce.max.z-ce.min.z:1,Ze=ce.min.x,ct=ce.min.y,dt=ce.isBox3?ce.min.z:0;else{const Vt=Math.pow(2,-J);De=Math.floor(Ot.width*Vt),Le=Math.floor(Ot.height*Vt),A.isDataArrayTexture?je=Ot.depth:A.isData3DTexture?je=Math.floor(Ot.depth*Vt):je=1,Ze=0,ct=0,dt=0}te!==null?(ze=te.x,_t=te.y,Jt=te.z):(ze=0,_t=0,Jt=0);const Pt=Ne.convert(V.format),on=Ne.convert(V.type);let Oe;V.isData3DTexture?(fe.setTexture3D(V,0),Oe=j.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(fe.setTexture2DArray(V,0),Oe=j.TEXTURE_2D_ARRAY):(fe.setTexture2D(V,0),Oe=j.TEXTURE_2D),M.activeTexture(j.TEXTURE0),M.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,V.flipY),M.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),M.pixelStorei(j.UNPACK_ALIGNMENT,V.unpackAlignment);const en=M.getParameter(j.UNPACK_ROW_LENGTH),yt=M.getParameter(j.UNPACK_IMAGE_HEIGHT),Sn=M.getParameter(j.UNPACK_SKIP_PIXELS),ht=M.getParameter(j.UNPACK_SKIP_ROWS),ui=M.getParameter(j.UNPACK_SKIP_IMAGES);M.pixelStorei(j.UNPACK_ROW_LENGTH,Ot.width),M.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Ot.height),M.pixelStorei(j.UNPACK_SKIP_PIXELS,Ze),M.pixelStorei(j.UNPACK_SKIP_ROWS,ct),M.pixelStorei(j.UNPACK_SKIP_IMAGES,dt);const zi=A.isDataArrayTexture||A.isData3DTexture,Ct=V.isDataArrayTexture||V.isData3DTexture;if(A.isDepthTexture){const Vt=le.get(A),di=le.get(V),Ft=le.get(Vt.__renderTarget),ei=le.get(di.__renderTarget);M.bindFramebuffer(j.READ_FRAMEBUFFER,Ft.__webglFramebuffer),M.bindFramebuffer(j.DRAW_FRAMEBUFFER,ei.__webglFramebuffer);for(let fi=0;fi<je;fi++)zi&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,le.get(A).__webglTexture,J,dt+fi),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,le.get(V).__webglTexture,Ie,Jt+fi)),j.blitFramebuffer(Ze,ct,De,Le,ze,_t,De,Le,j.DEPTH_BUFFER_BIT,j.NEAREST);M.bindFramebuffer(j.READ_FRAMEBUFFER,null),M.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(J!==0||A.isRenderTargetTexture||le.has(A)){const Vt=le.get(A),di=le.get(V);M.bindFramebuffer(j.READ_FRAMEBUFFER,X),M.bindFramebuffer(j.DRAW_FRAMEBUFFER,Q);for(let Ft=0;Ft<je;Ft++)zi?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Vt.__webglTexture,J,dt+Ft):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Vt.__webglTexture,J),Ct?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,di.__webglTexture,Ie,Jt+Ft):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,di.__webglTexture,Ie),J!==0?j.blitFramebuffer(Ze,ct,De,Le,ze,_t,De,Le,j.COLOR_BUFFER_BIT,j.NEAREST):Ct?j.copyTexSubImage3D(Oe,Ie,ze,_t,Jt+Ft,Ze,ct,De,Le):j.copyTexSubImage2D(Oe,Ie,ze,_t,Ze,ct,De,Le);M.bindFramebuffer(j.READ_FRAMEBUFFER,null),M.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Ct?A.isDataTexture||A.isData3DTexture?j.texSubImage3D(Oe,Ie,ze,_t,Jt,De,Le,je,Pt,on,Ot.data):V.isCompressedArrayTexture?j.compressedTexSubImage3D(Oe,Ie,ze,_t,Jt,De,Le,je,Pt,Ot.data):j.texSubImage3D(Oe,Ie,ze,_t,Jt,De,Le,je,Pt,on,Ot):A.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Ie,ze,_t,De,Le,Pt,on,Ot.data):A.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Ie,ze,_t,Ot.width,Ot.height,Pt,Ot.data):j.texSubImage2D(j.TEXTURE_2D,Ie,ze,_t,De,Le,Pt,on,Ot);M.pixelStorei(j.UNPACK_ROW_LENGTH,en),M.pixelStorei(j.UNPACK_IMAGE_HEIGHT,yt),M.pixelStorei(j.UNPACK_SKIP_PIXELS,Sn),M.pixelStorei(j.UNPACK_SKIP_ROWS,ht),M.pixelStorei(j.UNPACK_SKIP_IMAGES,ui),Ie===0&&V.generateMipmaps&&j.generateMipmap(Oe),M.unbindTexture()},this.initRenderTarget=function(A){le.get(A).__webglFramebuffer===void 0&&fe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?fe.setTextureCube(A,0):A.isData3DTexture?fe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?fe.setTexture2DArray(A,0):fe.setTexture2D(A,0),M.unbindTexture()},this.resetState=function(){he=0,ee=0,$=null,M.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=St._getDrawingBufferColorSpace(e),n.unpackColorSpace=St._getUnpackColorSpace()}}const K1=({isMotionPaused:s=!1})=>{const e=et.useRef(null);return et.useEffect(()=>{if(!e.current)return;const n=e.current,r=new w_,o=new ci(55,window.innerWidth/window.innerHeight,.1,500);o.position.set(0,0,32);const l=new Y1({alpha:!0,antialias:!1,powerPreference:"high-performance",precision:"mediump"});l.setPixelRatio(1),l.setSize(window.innerWidth,window.innerHeight),n.appendChild(l.domElement);const d=new Y_(16777215,.9);r.add(d);const h=new q_(14876687,1.8);h.position.set(10,15,20),r.add(h);const m=120,p=new Jn,v=new Float32Array(m*3),S=new Float32Array(m*3),g=new xt(14876687),b=new xt(13938487),T=new xt(16777215);for(let we=0;we<m;we++){const nt=we*3;v[nt]=(Math.random()-.5)*60,v[nt+1]=(Math.random()-.5)*50,v[nt+2]=(Math.random()-.5)*35;const Lt=Math.random(),at=Lt>.6?g:Lt>.3?b:T;S[nt]=at.r,S[nt+1]=at.g,S[nt+2]=at.b}p.setAttribute("position",new Ti(v,3)),p.setAttribute("color",new Ti(S,3));const N=new Ix({size:.55,vertexColors:!0,transparent:!0,opacity:.75,blending:js}),y=new F_(p,N);r.add(y);const _=28,I=22,z=new to(80,50,_,I),C=z.attributes.position;for(let we=0;we<C.count;we++){const nt=C.getX(we),Lt=C.getY(we),at=Math.sin(nt*.25)*Math.cos(Lt*.25)*2.2;C.setZ(we,at)}z.computeVertexNormals();const D=new Xa({color:14876687,wireframe:!0,transparent:!0,opacity:.04}),P=new Zn(z,D);P.rotation.x=-Math.PI/2.3,P.position.y=-16,P.position.z=-8,r.add(P);const O=new Va;O.position.set(0,3,-4);const w=new yf(3.2,24,24),F=new G_({color:16777215,roughness:.3,metalness:.5}),k=new Zn(w,F);O.add(k);const H=new Vl(5.2,.05,12,48),Z=new Xa({color:13938487,transparent:!0,opacity:.6}),ie=new Zn(H,Z);O.add(ie);const X=new Vl(6,.04,12,48),Q=new Xa({color:14876687,transparent:!0,opacity:.5}),he=new Zn(X,Q);he.rotation.x=Math.PI/3,O.add(he),r.add(O);let ee=0,$=0,q=0,Y=0,R=0,re=0;const ye=we=>{ee=(we.clientX/window.innerWidth-.5)*1.5,$=-(we.clientY/window.innerHeight-.5)*1.5},He=()=>{R=window.scrollY};let Ue=null;const Ge=()=>{Ue&&clearTimeout(Ue),Ue=setTimeout(()=>{o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight)},100)};window.addEventListener("mousemove",ye,{passive:!0}),window.addEventListener("scroll",He,{passive:!0}),window.addEventListener("resize",Ge,{passive:!0});let se,de=!1;const Me=()=>{de=document.hidden};document.addEventListener("visibilitychange",Me);const Ye=()=>{if(se=requestAnimationFrame(Ye),de||s)return;q+=(ee-q)*.06,Y+=($-Y)*.06,re+=(R-re)*.08;const we=document.documentElement.scrollHeight-window.innerHeight||1,nt=Math.min(1,Math.max(0,re/we));o.position.x=q*2.5,o.position.y=-nt*20+Y*1.5,o.lookAt(0,-nt*18,0),O.rotation.y+=.005,ie.rotation.z+=.01,he.rotation.y+=.008,O.position.y=3-nt*20,P.rotation.z+=8e-4,y.rotation.y+=6e-4,l.render(r,o)};return Ye(),()=>{cancelAnimationFrame(se),window.removeEventListener("mousemove",ye),window.removeEventListener("scroll",He),window.removeEventListener("resize",Ge),document.removeEventListener("visibilitychange",Me),p.dispose(),N.dispose(),z.dispose(),D.dispose(),w.dispose(),F.dispose(),H.dispose(),Z.dispose(),X.dispose(),Q.dispose(),l.dispose(),n.contains(l.domElement)&&n.removeChild(l.domElement)}},[s]),u.jsx("div",{ref:e,"aria-hidden":"true",className:"fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-90 transition-opacity duration-700"})},$1=({lang:s,isMotionPaused:e=!1})=>u.jsxs("section",{id:"overture","aria-label":"Overture",className:"relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#FFFFFF] pt-28 pb-24 px-4 sm:px-6 select-none",children:[u.jsx("div",{"aria-hidden":"true",className:`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[900px] pointer-events-none rounded-full ${e?"":"animate-breathe"}`,style:{background:"radial-gradient(closest-side, rgba(227, 0, 15, 0.16), rgba(255, 255, 255, 0))"}}),u.jsxs("svg",{"aria-hidden":"true",viewBox:"0 0 1000 600",preserveAspectRatio:"xMidYMid slice",className:"absolute inset-0 w-full h-full opacity-40 pointer-events-none",fill:"none",stroke:"#E3000F",strokeWidth:"1.5",children:[u.jsx("rect",{className:e?"":"draw",x:"15",y:"15",width:"970",height:"570",rx:"4"}),u.jsx("line",{className:e?"":"draw",x1:"500",y1:"15",x2:"500",y2:"585",strokeDasharray:"6 4"}),u.jsx("circle",{className:e?"":"draw",cx:"500",cy:"300",r:"42"}),u.jsx("line",{className:e?"":"draw",x1:"250",y1:"15",x2:"250",y2:"585",strokeOpacity:"0.45"}),u.jsx("line",{className:e?"":"draw",x1:"750",y1:"15",x2:"750",y2:"585",strokeOpacity:"0.45"}),u.jsx("path",{className:e?"":"draw",d:"M15 150 A150 150 0 0 1 15 450"}),u.jsx("path",{className:e?"":"draw",d:"M985 450 A150 150 0 0 1 985 150"}),u.jsx("circle",{cx:"500",cy:"300",r:"6",fill:"#E3000F",stroke:"none"})]}),u.jsxs("div",{className:"relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center",children:[u.jsxs("div",{className:"flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#FBF8F7] border border-[#E6DAD8] text-[12px] font-mono tracking-[0.34em] text-[#E3000F] uppercase mb-4 shadow-xs",children:[u.jsx("img",{src:"/ksha-crest.png",alt:"KSHA Official Seal",className:"w-5 h-5 object-contain"}),u.jsx("span",{children:"BENGALURU · FIELD HOCKEY · ESTD. 1937 · MMXXVI"})]}),u.jsxs("h1",{className:"disp tracking-[0.005em] leading-[0.9] text-[120px] sm:text-[200px] md:text-[280px] lg:text-[380px] my-1 drop-shadow-[0_0_55px_rgba(227,0,15,0.22)]",children:[u.jsx("span",{className:"sr-only",children:"Karnataka State Hockey Association"}),u.jsx("span",{className:"goldtxt block","aria-hidden":"true",children:"KSHA"})]}),u.jsx("p",{lang:"kn",className:"font-kannada text-2xl sm:text-3xl lg:text-4xl font-bold text-[#E3000F] tracking-wide mb-4 drop-shadow-xs",children:"ಕರ್ನಾಟಕ ರಾಜ್ಯ ಹಾಕಿ ಸಂಸ್ಥೆ"}),u.jsx("p",{className:"whisper text-2xl sm:text-3xl lg:text-4xl text-[#000000] max-w-3xl leading-snug mb-10",children:s==="kn"?"ಒಂದು ಕಪ್‌ನ ತೊಂಬತ್ತನಾಲ್ಕು ಆವೃತ್ತಿಗಳು. ನಾಲ್ಕು ವಿಭಾಗಗಳು. ಲ್ಯಾಂಗ್‌ಫೋರ್ಡ್ ಟೌನ್‌ನಲ್ಲಿ ಒಂದು ಐತಿಹಾಸಿಕ ಕ್ರೀಡಾಂಗಣ.":"Ninety-four editions of one cup. Four divisions. One stadium in Langford Town."}),u.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4 mb-10",children:[u.jsxs("a",{href:"#colosseum",onClick:()=>gt.playStickStrike(),className:"inline-flex items-center justify-center min-h-[56px] px-8 bg-[#E3000F] hover:bg-[#9E000B] text-white font-mono font-bold text-sm tracking-[0.16em] uppercase transition-all duration-200 shadow-lg shadow-red-600/25 hover:shadow-red-600/40",children:[u.jsx(lf,{className:"w-4 h-4 mr-2.5"}),u.jsx("span",{children:s==="kn"?"ಕ್ರೀಡಾಂಗಣ ಪ್ರವೇಶಿಸಿ":"ENTER THE STADIUM"})]}),u.jsxs("a",{href:"#pavilion",onClick:()=>gt.playGloryChime(),className:"inline-flex items-center justify-center min-h-[56px] px-8 bg-transparent hover:bg-[#E3000F] text-[#E3000F] hover:text-white border-2 border-[#E3000F] font-mono font-bold text-sm tracking-[0.16em] uppercase transition-all duration-200",children:[u.jsx(sx,{className:"w-4 h-4 mr-2.5"}),u.jsx("span",{children:s==="kn"?"ಕ್ಲಬ್‌ಗೆ ಸೇರಿ":"JOIN THE CLUB"})]}),u.jsx("a",{href:"#immortals",onClick:()=>gt.playSplitFlap(),className:"inline-flex items-center justify-center min-h-[56px] px-8 bg-[#FBF8F7] hover:bg-neutral-100 text-[#000000] border border-[#E6DAD8] font-mono font-semibold text-sm tracking-[0.14em] uppercase transition-all duration-200",children:u.jsx("span",{children:s==="kn"?"೧೫ ದಿಗ್ಗಜರು":"THE 15 IMMORTALS"})})]})]}),u.jsxs("div",{"aria-hidden":"true",className:"absolute left-1/2 bottom-5 -translate-x-1/2 text-center text-[10px] font-mono tracking-[0.3em] text-[#5C5350] flex flex-col items-center gap-1.5",children:[u.jsx("span",{children:"SCROLL"}),u.jsx("div",{className:`w-[2px] h-10 bg-[#E3000F] ${e?"":"animate-drip"}`})]})]}),Z1=()=>{const[s,e]=et.useState(!1);return u.jsxs("div",{className:"relative z-20 w-full select-none",children:[u.jsx("div",{className:"bg-[#E3000F] text-white py-3.5 px-4 sm:px-6",children:u.jsxs("div",{className:"max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-sm",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-2 h-2 rounded-full bg-white animate-pulse"}),u.jsx("span",{className:"font-mono font-bold tracking-[0.12em] uppercase text-xs",children:"LATEST CIRCULAR · 1 SEPTEMBER 2026"})]}),u.jsx("div",{className:"flex-1 min-w-[280px] font-sans text-sm sm:text-base font-medium",children:"Membership admission fee rises to ₹5 lakh + GST from 1 January 2027."}),u.jsxs("a",{href:"#vault",onClick:()=>gt.playSplitFlap(),className:"inline-flex items-center gap-1.5 font-mono text-xs font-bold tracking-[0.1em] uppercase hover:underline",children:[u.jsx("span",{children:"Read the circular"}),u.jsx(Wa,{className:"w-3.5 h-3.5"})]})]})}),u.jsx("div",{className:"bg-[#FFFFFF] border-b border-[#E6DAD8] overflow-hidden py-4 sm:py-6",onMouseEnter:()=>e(!0),onMouseLeave:()=>e(!1),children:u.jsx("div",{className:`flex items-center whitespace-nowrap ${s?"":"animate-marquee"}`,style:{width:"max-content"},children:[0,1].map(n=>u.jsxs("div",{className:"disp flex items-center gap-12 pr-12 text-3xl sm:text-5xl lg:text-7xl font-normal",children:[u.jsx("span",{className:"outline",children:"Shlok Hockey Club"}),u.jsx("span",{className:"text-[#E3000F]",children:"◆"}),u.jsx("span",{className:"outline",children:"Zoza Sports Academy"}),u.jsx("span",{className:"text-[#E3000F]",children:"◆"}),u.jsx("span",{className:"outline",children:"Coorg Direwolves"}),u.jsx("span",{className:"text-[#E3000F]",children:"◆"}),u.jsx("span",{className:"outline",children:"Garuda Hockey Club"}),u.jsx("span",{className:"text-[#E3000F]",children:"◆"}),u.jsx("span",{className:"outline",children:"Rail Wheel Factory"}),u.jsx("span",{className:"text-[#E3000F]",children:"◆"}),u.jsx("span",{className:"outline",children:"Canara Bank SC"}),u.jsx("span",{className:"text-[#E3000F]",children:"◆"}),u.jsx("span",{className:"outline",children:"Army Service Corps"}),u.jsx("span",{className:"text-[#E3000F]",children:"◆"})]},n))})})]})},dd=[{value:89,label:"YEARS OF ROYALTY",sub:"ESTD 1937 · MYSORE STATE",kannadaLabel:"೮೯ ವರ್ಷಗಳ ಇತಿಹಾಸ"},{value:15,label:"OLYMPIC IMMORTALS",sub:"MUNICH 1972 TO RIO 2016",kannadaLabel:"೧೫ ಒಲಿಂಪಿಯನ್ನರು"},{value:11,label:"ARJUNA AWARDEES",sub:"PRESIDENTIAL CITATIONS",kannadaLabel:"೧೧ ಅರ್ಜುನ ಪುರಸ್ಕೃತರು"},{value:61,label:"AFFILIATED CLUBS",sub:"INSTITUTIONS & SERVICES",kannadaLabel:"೬೧ ಸಂಯೋಜಿತ ಕ್ಲಬ್‌ಗಳು"}],J1=({lang:s})=>{const[e,n]=et.useState([0,0,0,0]);return et.useEffect(()=>{let d=0;const h=setInterval(()=>{d++;const m=d/40,p=1-Math.pow(1-m,3);n(dd.map(v=>Math.round(v.value*p))),d>=40&&(clearInterval(h),n(dd.map(v=>v.value)))},45);return()=>clearInterval(h)},[]),u.jsx("section",{className:"relative z-20 py-12 px-4 border-y border-neutral-200 bg-[#F8FAFC]",children:u.jsx("div",{className:"max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8",children:dd.map((r,o)=>u.jsxs("div",{onMouseEnter:()=>gt.playSplitFlap(),className:"relative flex flex-col items-center text-center p-6 bg-white rounded-xl border border-neutral-200 hover:border-ksha-red/60 transition-all duration-300 group shadow-md",children:[u.jsxs("div",{className:"relative mb-3 flex items-center justify-center",children:[u.jsx("div",{className:"px-5 py-2.5 bg-neutral-50 rounded border border-neutral-300 shadow-inner group-hover:border-ksha-red/70 transition-colors",children:u.jsx("span",{className:"font-cinzel text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-950 group-hover:text-ksha-red transition-colors",children:e[o]<10?`0${e[o]}`:e[o]})}),u.jsx("div",{className:"absolute left-0 right-0 top-1/2 h-[1.5px] bg-neutral-300 pointer-events-none"})]}),u.jsx("div",{className:"font-cinzel font-bold text-xs sm:text-sm tracking-[0.14em] text-neutral-900 group-hover:text-black",children:s==="kn"?r.kannadaLabel:r.label}),u.jsx("div",{className:"text-[10px] font-mono tracking-wider text-neutral-600 mt-1 uppercase font-medium",children:r.sub}),u.jsx("div",{className:"absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-ksha-red opacity-0 group-hover:opacity-100 group-hover:w-3/4 transition-all duration-500"})]},o))})})},Ln=({children:s,className:e="",maxTilt:n=7,scale:r=1.015,staggerIndex:o=0,onClick:l})=>{const d=et.useRef(null),[h,m]=et.useState(!1);et.useEffect(()=>{const g=d.current;if(!g)return;const b=new IntersectionObserver(([T])=>{T.isIntersecting&&(m(!0),b.unobserve(g))},{threshold:.05,rootMargin:"40px 0px"});return b.observe(g),()=>b.disconnect()},[]);const p=g=>{const b=d.current;if(!b)return;const T=b.getBoundingClientRect(),N=g.clientX-T.left,y=g.clientY-T.top,_=T.width/2,I=T.height/2,z=-((y-I)/I)*n,C=(N-_)/_*n;b.style.transform=`perspective(800px) rotateX(${z.toFixed(2)}deg) rotateY(${C.toFixed(2)}deg) scale3d(${r}, ${r}, 1)`},v=()=>{const g=d.current;g&&(g.style.transform="perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)")},S=Math.min(o*40,180);return u.jsx("div",{ref:d,onClick:l,onMouseMove:p,onMouseLeave:v,className:`relative transform-gpu ${e}`,style:{transformOrigin:"top center",transform:h?"perspective(800px) rotateX(0deg) translateY(0px) scale(1)":"perspective(900px) rotateX(-12deg) translateY(24px) scale(0.97)",opacity:h?1:0,transition:`opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${S}ms, transform 0.45s cubic-bezier(0.16, 1, 0.3, 1) ${S}ms`},children:s})},Q1=({lang:s})=>u.jsxs("section",{id:"cup",className:"relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF] border-b border-[#E6DAD8] overflow-hidden",children:[u.jsx("div",{"aria-hidden":"true",className:"absolute -right-72 top-1/4 w-[900px] h-[900px] rounded-full pointer-events-none animate-breathe",style:{background:"radial-gradient(closest-side, rgba(227, 0, 15, 0.12), rgba(255, 255, 255, 0))"}}),u.jsx("div",{className:"max-w-7xl mx-auto relative z-10",children:u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center",children:[u.jsx("div",{className:"lg:col-span-6 flex flex-col items-center lg:items-start justify-center",children:u.jsx(Ln,{staggerIndex:0,children:u.jsxs("div",{className:"relative p-6 rounded-3xl bg-white/40 backdrop-blur-xs border border-[#E6DAD8]/50",children:[u.jsx("span",{"aria-hidden":"true",className:"disp goldtxt block select-none text-[180px] sm:text-[280px] md:text-[380px] lg:text-[420px] leading-[0.78] drop-shadow-[0_0_70px_rgba(227,0,15,0.22)]",children:"94"}),u.jsx("div",{className:"absolute -bottom-4 left-6 px-3.5 py-1 rounded bg-[#FBF8F7] border border-[#E6DAD8] text-[11px] font-mono tracking-widest text-[#E3000F] uppercase font-bold shadow-xs",children:"1928 – 2026 CONTINUOUS EDITIONS"})]})})}),u.jsxs("div",{className:"lg:col-span-6 space-y-6",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FBF8F7] border border-[#E6DAD8] text-[11px] font-mono tracking-[0.3em] text-[#E3000F] uppercase font-bold",children:[u.jsx(lf,{className:"w-3.5 h-3.5 text-[#E3000F]"}),"CHAPTER I · THE TRAVANCORE CUP"]}),u.jsx("h2",{className:"disp text-5xl sm:text-7xl lg:text-8xl text-black leading-none",children:s==="kn"?"ಟ್ರಾವಂಕೋರ್ ಕಪ್":"The Travancore Cup"}),u.jsx("p",{className:"whisper text-2xl sm:text-3xl lg:text-4xl text-black font-normal leading-snug",children:"“Some trophies are older than the stadiums they are lifted in.”"}),u.jsx("p",{className:"font-sans text-base sm:text-lg text-[#3B3330] leading-relaxed",children:"Donated to the Mysore State Hockey Association (now KSHA) by the Maharaja of Travancore in 1928, this revered silverware represents one of the oldest and most fiercely contested state-level hockey championships in the subcontinent."}),u.jsx(Ln,{staggerIndex:1,children:u.jsxs("div",{className:"p-6 rounded-2xl bg-[#FBF8F7] border border-[#E6DAD8] space-y-4 shadow-xs",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-[#E6DAD8] pb-3",children:[u.jsx("span",{className:"font-mono text-xs uppercase tracking-wider text-[#5C5350]",children:"94th Edition Summary"}),u.jsx("span",{className:"px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[11px] font-mono font-bold",children:"Defending Champions"})]}),u.jsxs("div",{className:"grid grid-cols-3 gap-4 text-center",children:[u.jsxs("div",{children:[u.jsx("div",{className:"disp text-3xl sm:text-4xl text-black",children:"13"}),u.jsx("div",{className:"text-[11px] font-mono text-[#5C5350] uppercase mt-0.5",children:"Premier Teams"})]}),u.jsxs("div",{children:[u.jsx("div",{className:"disp text-3xl sm:text-4xl text-black",children:"21"}),u.jsx("div",{className:"text-[11px] font-mono text-[#5C5350] uppercase mt-0.5",children:"Knockout Matches"})]}),u.jsxs("div",{children:[u.jsx("div",{className:"disp text-2xl sm:text-3xl text-[#E3000F]",children:"RWFSA"}),u.jsx("div",{className:"text-[11px] font-mono text-[#5C5350] uppercase mt-0.5",children:"Gold Crown"})]})]})]})}),u.jsxs("div",{className:"pt-2 flex flex-wrap gap-4",children:[u.jsx("a",{href:"#battlegrounds",onClick:()=>gt.playStickStrike(),className:"inline-flex items-center justify-center min-h-[50px] px-6 bg-transparent hover:bg-[#E3000F] text-[#E3000F] hover:text-white border-2 border-[#E3000F] font-mono font-bold text-xs tracking-[0.14em] uppercase transition-all",children:"Explore League Cups"}),u.jsx("a",{href:"#charters",onClick:()=>gt.playSplitFlap(),className:"inline-flex items-center justify-center min-h-[50px] px-6 bg-[#FBF8F7] hover:bg-neutral-100 text-black border border-[#E6DAD8] font-mono font-medium text-xs tracking-[0.14em] uppercase transition-all",children:"1937 Genesis Charters"})]})]})]})})]}),nf=[{id:"mp-ganesh",name:"Dr. M. P. Ganesh",kannadaName:"ಪದ್ಮಶ್ರೀ ಡಾ. ಎಂ. ಪಿ. ಗಣೇಶ್",years:"1972",games:"1972 Munich Olympics",medal:"Bronze",position:"Right Wing / Captain",designation:"Olympian & Arjuna Awardee",designation_kn:"ಒಲಿಂಪಿಯನ್ ಮತ್ತು ಅರ್ಜುನ ಪ್ರಶಸ್ತಿ ಪುರಸ್ಕೃತರು",myth:"The General of the Wings. Captain of India, 1973 World Cup Silver. A whirlwind down the right touchline that no defense could tether.",record:"1972 Munich Olympics (Bronze) • 1971 World Cup (Bronze) • 1973 World Cup (Silver, Captain) • Arjuna Award 1973 • Padma Shri 2020",awards:["Padma Shri","Arjuna Award (1973)","Olympic Bronze 1972"],district:"Kodagu (Coorg)",image:"/assets/olympians/mp-ganesh.jpg"},{id:"bp-govinda",name:"B. P. Govinda",kannadaName:"ಬಿ. ಪಿ. ಗೋವಿಂದ",years:"1972, 1976",games:"1972 Munich & 1976 Montreal",medal:"Bronze",position:"Forward / Left In",designation:"Dual Olympian & Arjuna Awardee",designation_kn:"ಎರಡು ಬಾರಿ ಒಲಿಂಪಿಯನ್ ಮತ್ತು ಅರ್ಜುನ ಪ್ರಶಸ್ತಿ ಪುರಸ್ಕೃತರು",myth:"The 1975 World Champion. A smile that disarmed kingdoms, and a reverse-stick strike that left goalkeepers frozen.",record:"1972 Munich (Bronze) • 1976 Montreal • 1975 World Cup Gold (Kuala Lumpur) • Arjuna Award 1975",awards:["World Cup Gold 1975","Arjuna Award (1975)","Olympic Bronze 1972"],district:"Somwarpet (Kodagu)"},{id:"joaquim-carvalho",name:"Joaquim Carvalho",kannadaName:"ಜೋಕಿಂ ಕಾರ್ವಾಲೋ",years:"1984",games:"1984 Los Angeles Olympics",medal:"Olympian",position:"Center Half",designation:"Olympian & Arjuna Awardee",designation_kn:"ಒಲಿಂಪಿಯನ್ ಮತ್ತು ಅರ್ಜುನ ಪ್ರಶಸ್ತಿ ಪುರಸ್ಕೃತರು",myth:"The Midfield Metronome. Anchored India’s engine room with ruthless tactical poise and visionary distribution.",record:"1984 Los Angeles Olympics • 1982 World Cup (Mumbai) • 1982 Asian Games (Silver) • Arjuna Award 1986",awards:["Arjuna Award (1986)","Asian Games Silver (1982)"],district:"Bengaluru"},{id:"bk-subramani",name:"B. K. Subramani",kannadaName:"ಬಿ. ಕೆ. ಸುಬ್ರಮಣಿ",years:"1988",games:"1988 Seoul Olympics",medal:"Olympian",position:"Inside Right",designation:"Olympian",designation_kn:"ಒಲಿಂಪಿಯನ್",myth:"Tenacity forged in Coorg. Relentless work rate across Asia and Europe that wore down the world’s elite half-backs.",record:"1988 Seoul Olympics • 1986 Asian Games (Bronze) • Multiple Indira Gandhi Gold Cups",awards:["Asian Games Bronze (1986)","Seoul 1988 Olympian"],district:"Kodagu"},{id:"jude-felix",name:"Jude Felix",kannadaName:"ಜ್ಯೂಡ್ ಫೆಲಿಕ್ಸ್",years:"1988, 1992",games:"1988 Seoul & 1992 Barcelona",medal:"Olympian",position:"Center Half / Captain",designation:"Dual Olympian & Arjuna Awardee",designation_kn:"ಎರಡು ಬಾರಿ ಒಲಿಂಪಿಯನ್ ಮತ್ತು ಅರ್ಜುನ ಪ್ರಶಸ್ತಿ ಪುರಸ್ಕೃತರು",myth:"The Grand Architect. Captained India with unmatched elegance; founded the Jude Felix Hockey Academy to nurture underprivileged youth.",record:"1988 Seoul & 1992 Barcelona (Captain) • 250+ International Caps • Arjuna Award 1994 • Dronacharya Award 2020",awards:["Arjuna Award (1994)","Dronacharya Award (2020)","Seoul 1988 & Barcelona 1992 Captain"],district:"Bengaluru",image:"/assets/olympians/jude-felix.jpg"},{id:"ashish-ballal",name:"Ashish Ballal",kannadaName:"ಆಶಿಶ್ ಬಲ್ಲಾಳ್",years:"1992",games:"1992 Barcelona Olympics",medal:"Olympian",position:"Goalkeeper",designation:"Olympian & Arjuna Awardee",designation_kn:"ಒಲಿಂಪಿಯನ್ ಮತ್ತು ಅರ್ಜುನ ಪ್ರಶಸ್ತಿ ಪುರಸ್ಕೃತರು",myth:"Bangkok, 1998. Sudden-death tiebreaker against South Korea. Two penalty saves that buried a 32-year Asian Games curse.",record:"1992 Barcelona Olympics • 1998 Asian Games Gold (Hero of Final) • Arjuna Award 1996 • 275+ Caps",awards:["Asian Games Gold 1998","Arjuna Award (1996)","1992 Olympian"],district:"Bengaluru",image:"/assets/olympians/ashish-ballal.jpg"},{id:"cs-poonacha",name:"C. S. Poonacha",kannadaName:"ಸಿ. ಎಸ್. ಪೂಣಚ್ಚ",years:"1992",games:"1992 Barcelona Olympics",medal:"Olympian",position:"Full Back",myth:"Uncompromising discipline. The backbone of India’s penalty corner defense and defensive lockdown.",record:"1992 Barcelona Olympics • 1990 Asian Games (Silver) • Renowned National Coach",awards:["Asian Games Silver (1990)","1992 Olympian"],district:"Kodagu"},{id:"anil-aldrin",name:"Anil Aldrin",kannadaName:"ಅನಿಲ್ ಆಲ್ಡ್ರಿನ್",years:"1996",games:"1996 Atlanta Olympics",medal:"Olympian",position:"Full Back / Captain",myth:"The Fortress. Commanded the deep defense with surgical authority, immaculate tackling and calm distribution.",record:"1996 Atlanta Olympics • 1998 Asian Games Gold • Captain of India 1999",awards:["Asian Games Gold 1998","1996 Olympian"],district:"Bengaluru"},{id:"sabu-varkey",name:"Sabu Varkey",kannadaName:"ಸಾಬು ವಾರ್ಕಿ",years:"1996",games:"1996 Atlanta Olympics",medal:"Olympian",position:"Midfielder / Playmaker",myth:"Electric acceleration. Turned defense into counter-attack in three strides with deceptive stick fakes.",record:"1996 Atlanta Olympics • 1998 Asian Games Gold • 1995 SAF Games Gold",awards:["Asian Games Gold 1998","1996 Olympian"],district:"Bengaluru"},{id:"arjun-halappa",name:"Arjun Halappa",kannadaName:"ಅರ್ಜುನ್ ಹಾಲಪ್ಪ",years:"2004",games:"2004 Athens Olympics",medal:"Olympian",position:"Forward / Midfield / Captain",designation:"Olympian & Captain",designation_kn:"ಒಲಿಂಪಿಯನ್ ಮತ್ತು ನಾಯಕ",myth:"The Magician of Somwarpet. Hands that made the ball stick to wood like mercury in the circle.",record:"2004 Athens Olympics • 2010 Commonwealth Games Silver • 2010 Asian Games Bronze • Arjuna Award 2010",awards:["Arjuna Award (2010)","CWG Silver 2010","2004 Olympian"],district:"Somwarpet (Kodagu)",image:"/assets/olympians/arjun-halappa.jpg"},{id:"bharath-chetri",name:"Bharath Chetri, MLA",kannadaName:"ಭರತ್ ಛೇತ್ರಿ, ಶಾಸಕರು",years:"2012",games:"2012 London Olympics (Captain)",medal:"Olympian",position:"Goalkeeper / Captain",designation:"Olympian & Captain",designation_kn:"ಒಲಿಂಪಿಯನ್ ಮತ್ತು ನಾಯಕ",myth:"The Guardian of the Goal. Led India back to the Olympic stage under the London skies after an 8-year hiatus.",record:"2012 London Olympics (Captain) • 2010 Asian Games Bronze • 2010 CWG Silver • Life Member KSHA",awards:["Olympic Captain 2012","CWG Silver 2010","Life Member KSHA"],district:"Bengaluru"},{id:"sk-uthappa",name:"S. K. Uthappa",kannadaName:"ಎಸ್. ಕೆ. ಉತ್ತಪ್ಪ",years:"2012, 2016",games:"2012 London & 2016 Rio",medal:"Olympian",position:"Midfield Engine",designation:"Dual Olympian",designation_kn:"ಎರಡು ಬಾರಿ ಒಲಿಂಪಿಯನ್",myth:"Two Olympic campaigns. The relentless midfield engine that never ran out of breath in high-press battles.",record:"2012 & 2016 Olympics • 2014 Asian Games Gold (Incheon) • 2014 Champions Trophy Silver • 120+ Caps",awards:["Asian Games Gold 2014","Dual Olympian 2012, 2016"],district:"Kodagu"},{id:"vr-raghunath",name:"V. R. Raghunath",kannadaName:"ವಿ. ಆರ್. ರಘುನಾಥ್",years:"2012, 2016",games:"2012 London & 2016 Rio",medal:"Olympian",position:"Full Back / Dragflicker",designation:"Dual Olympian & Arjuna Awardee",designation_kn:"ಎರಡು ಬಾರಿ ಒಲಿಂಪಿಯನ್ ಮತ್ತು ಅರ್ಜುನ ಪ್ರಶಸ್ತಿ ಪುರಸ್ಕೃತರು",myth:"120 km/h from the top of the D. When he took dragflick guard, the world’s defenses held their breath.",record:"2012 & 2016 Olympics • 2014 Asian Games Gold • 2014 CWG Silver • Arjuna Award 2016 • 132 International Goals",awards:["Arjuna Award (2016)","Asian Games Gold 2014","Dual Olympian"],district:"Kodagu",image:"/assets/olympians/vr-raghunath.jpg"},{id:"sv-sunil",name:"S. V. Sunil",kannadaName:"ಎಸ್. ವಿ. ಸುನಿಲ್",years:"2012, 2016",games:"2012 London & 2016 Rio",medal:"Olympian",position:"Right Wing / Lightning Striker",designation:"Dual Olympian & Arjuna Awardee",designation_kn:"ಎರಡು ಬಾರಿ ಒಲಿಂಪಿಯನ್ ಮತ್ತು ಅರ್ಜುನ ಪ್ರಶಸ್ತಿ ಪುರಸ್ಕೃತರು",myth:"The Jet of Coorg. The fastest winger in world hockey. A blur along the baseline that decimated defenses.",record:"2012 & 2016 Olympics • 2014 Asian Games Gold • 2016 Champions Trophy Silver • Arjuna Award 2017 • FIH Player of the Year nominee",awards:["Arjuna Award (2017)","Asian Games Gold 2014","Dual Olympian"],district:"Somwarpet (Kodagu)",image:"/assets/olympians/sv-sunil.jpg"},{id:"nikkin-thimmaiah",name:"Nikkin Thimmaiah",kannadaName:"ನಿಕ್ಕಿನ್ ತಿಮ್ಮಯ್ಯ",years:"2016",games:"2016 Rio de Janeiro Olympics",medal:"Olympian",position:"Striker / Poacher",myth:"The Opportunist. Deflections and predatory finishes scored when milliseconds decided historical glory.",record:"2016 Rio Olympics • 2014 Asian Games Gold (Incheon) • 2016 Asian Champions Trophy Gold",awards:["Asian Games Gold 2014","2016 Rio Olympian"],district:"Kodagu"}],rf=[{id:1,name:"Coorg Hockey Association (Madikeri)",kannadaName:"ಕೊಡಗು ಹಾಕಿ ಸಂಸ್ಥೆ (ಮಡಿಕೇರಿ)",zone:"Western Ghats / Coorg",established:"1948",headquarters:"Madikeri",keyTalent:"Birthplace of 10+ Olympians"},{id:2,name:"Belgaum District Hockey Association",kannadaName:"ಬೆಳಗಾವಿ ಜಿಲ್ಲಾ ಹಾಕಿ ಸಂಸ್ಥೆ",zone:"Northern Deccan",established:"1962",headquarters:"Belagavi",keyTalent:"Maratha LI Nursery"},{id:3,name:"Bangalore Urban & Cantonment Units",kannadaName:"ಬೆಂಗಳೂರು ನಗರ ಮತ್ತು ಕಂಟೋನ್ಮೆಂಟ್ ಘಟಕ",zone:"Southern Maidan",established:"1937",headquarters:"Langford Town",keyTalent:"MEG & ASC Powerhouse"},{id:4,name:"Bellary District Hockey Association",kannadaName:"ಬಳ್ಳಾರಿ ಜಿಲ್ಲಾ ಹಾಕಿ ಸಂಸ್ಥೆ",zone:"Central & Hyderabad-K",established:"1971",headquarters:"Ballari",keyTalent:"Deccan speed & stamina"},{id:5,name:"Bijapur District Hockey Association",kannadaName:"ವಿಜಯಪುರ ಜಿಲ್ಲಾ ಹಾಕಿ ಸಂಸ್ಥೆ",zone:"Northern Deccan",established:"1974",headquarters:"Vijayapura",keyTalent:"North Karnataka juniors"},{id:6,name:"Bagalkot City Sports Club Unit",kannadaName:"ಬಾಗಲಕೋಟೆ ಸ್ಪೋರ್ಟ್ಸ್ ಕ್ಲಬ್",zone:"Northern Deccan",established:"1982",headquarters:"Bagalkot",keyTalent:"Ghataprabha grassroots"},{id:7,name:"Chitradurga District Hockey Association",kannadaName:"ಚಿತ್ರದುರ್ಗ ಜಿಲ್ಲಾ ಹಾಕಿ ಸಂಸ್ಥೆ",zone:"Southern Maidan",established:"1979",headquarters:"Chitradurga",keyTalent:"Fortress defensive grit"},{id:8,name:"Dhyanchand Hockey Club, Tumkur",kannadaName:"ಧ್ಯಾನ್‌ಚಂದ್ ಹಾಕಿ ಕ್ಲಬ್, ತುಮಕೂರು",zone:"Southern Maidan",established:"1976",headquarters:"Tumakuru",keyTalent:"Midfield tacticians"},{id:9,name:"Friends Hockey Club, Kalaburgi",kannadaName:"ಫ್ರೆಂಡ್ಸ್ ಹಾಕಿ ಕ್ಲಬ್, ಕಲಬುರ್ಗಿ",zone:"Central & Hyderabad-K",established:"1985",headquarters:"Kalaburagi",keyTalent:"Kalyana Karnataka stars"},{id:10,name:"Gulbarga District Hockey Association",kannadaName:"ಗುಲ್ಬರ್ಗಾ ಜಿಲ್ಲಾ ಹಾಕಿ ಸಂಸ್ಥೆ",zone:"Central & Hyderabad-K",established:"1968",headquarters:"Gulbarga",keyTalent:"Regional tournament hub"},{id:11,name:"Hassan District Hockey Association",kannadaName:"ಹಾಸನ ಜಿಲ್ಲಾ ಹಾಕಿ ಸಂಸ್ಥೆ",zone:"Western Ghats / Coorg",established:"1975",headquarters:"Hassan",keyTalent:"Malnad feeder pipeline"},{id:12,name:"Haveri District Hockey Association",kannadaName:"ಹಾವೇರಿ ಜಿಲ್ಲಾ ಹಾಕಿ ಸಂಸ್ಥೆ",zone:"Northern Deccan",established:"1988",headquarters:"Haveri",keyTalent:"Cardamom city dragflickers"},{id:13,name:"Kolar District Hockey Association",kannadaName:"ಕೋಲಾರ ಜಿಲ್ಲಾ ಹಾಕಿ ಸಂಸ್ಥೆ",zone:"Southern Maidan",established:"1965",headquarters:"KGF / Kolar",keyTalent:"Gold Fields cantonment teams"},{id:14,name:"Major Dhyanchand H.C., Dharwad",kannadaName:"ಮೇಜರ್ ಧ್ಯಾನ್‌ಚಂದ್ ಕ್ಲಬ್, ಧಾರವಾಡ",zone:"Northern Deccan",established:"1970",headquarters:"Dharwad",keyTalent:"University champions"},{id:15,name:"Om Sai Hockey Club, Dharwad",kannadaName:"ಓಂ ಸಾಯಿ ಹಾಕಿ ಕ್ಲಬ್, ಧಾರವಾಡ",zone:"Northern Deccan",established:"1992",headquarters:"Hubballi-Dharwad",keyTalent:"Cadet Academy training"},{id:16,name:"Sahyadri Hockey Club, Shimoga",kannadaName:"ಸಹ್ಯಾದ್ರಿ ಹಾಕಿ ಕ್ಲಬ್, ಶಿವಮೊಗ್ಗ",zone:"Western Ghats / Coorg",established:"1980",headquarters:"Shivamogga",keyTalent:"Tunga river wingers"},{id:17,name:"Hanuman Blessing Sports Club",kannadaName:"ಹನುಮಾನ್ ಬ್ಲೆಸ್ಸಿಂಗ್ ಸ್ಪೋರ್ಟ್ಸ್ ಕ್ಲಬ್",zone:"Southern Maidan",established:"1984",headquarters:"Mandya / Mysore",keyTalent:"Forward line finishers"},{id:18,name:"Raichur District Hockey Association",kannadaName:"ರಾಯಚೂರು ಜಿಲ್ಲಾ ಹಾಕಿ ಸಂಸ್ಥೆ",zone:"Central & Hyderabad-K",established:"1986",headquarters:"Raichur",keyTalent:"Doab endurance specialists"}],Yx=[{id:"billiards-snooker",title:"8 Championship Billiards & Snooker Tables",kannadaTitle:"೮ ಚಾಂಪಿಯನ್‌ಶಿಪ್ ಬಿಲಿಯರ್ಡ್ಸ್ & ಸ್ನೂಕರ್ ಟೇಬಲ್‌ಗಳು",highlight:"Classic English slate tables draped in Strachan 6811 tournament cloth",description:"The storied Billiards Room has witnessed legendary battles since 1937. With vintage teak scoreboard markers and tournament-calibrated lighting, it serves as the evening gathering hall for Olympian veterans and club patrons.",specs:["8 Full-size 12ft Tables","Riley & Wiraka slate beds","Strachan 6811 Gold cloth","Private Cue Locker Vaults"],category:"Club Wing"},{id:"badminton-courts",title:"3 Indoor Wooden Badminton Courts",kannadaTitle:"೩ ಒಳಾಂಗಣ ಮರದ ಬ್ಯಾಡ್ಮಿಂಟನ್ ಕೋರ್ಟ್‌ಗಳು",highlight:"Shock-absorbent Canadian Maple hardwood flooring with anti-glare illumination",description:"Championship-standard wooden courts dedicated to member fitness, inter-club tournaments, and morning high-intensity drills with professional coaching academies.",specs:["3 BWF-Compliant Courts","Cushioned Timber Subfloor","LED Shadow-free Fixtures","Spectator Balcony Seating"],category:"Sports Arena"},{id:"olympic-recovery-pool",title:"Olympic Swimming Pool & Hydrotherapy Sanctuary",kannadaTitle:"ಈಜುಕೊಳ ಮತ್ತು ಹೈಡ್ರೋಥೆರಪಿ ಸೆಂಟರ್",highlight:"Semi-Olympic temperature-stabilized lap pool with hydrotherapy massage jets",description:"Engineered specifically for athlete muscular recovery after 60-minute turf warfare, paired with dedicated leisure lanes for club members and children’s training academies.",specs:["25m Lap Pool (6 Lanes)","Sub-surface Hydro Jets","Automated UV Filtration","Sun Lounger Deck"],category:"Wellness & Recovery"},{id:"rehab-steam-sauna",title:"Sports Injury & Physiotherapy Clinic with Steam/Sauna",kannadaTitle:"ಸ್ಪೋರ್ಟ್ಸ್ ಇಂಜುರಿ & ಫಿಸಿಯೋಥೆರಪಿ ಕ್ಲಿನಿಕ್",highlight:"Cryotherapy chambers, deep-tissue sports massage, and Finnish pine sauna suites",description:"Staffed by resident sports medicine physiotherapists who attend to both national team squad members and private club patrons seeking rehabilitation and vitality.",specs:["Cryotherapy Ice Plunges","Nordic Pine Dry Sauna","Eucalyptus Steam Vault","Electro-therapy Units"],category:"Wellness & Recovery"},{id:"gentlemens-dining",title:"The 1937 Pavilion Dining & Olympian Lounge",kannadaTitle:"೧೯೩೭ ಪೆವಿಲಿಯನ್ ಡೈನಿಂಗ್ ಮತ್ತು ಲೌಂಜ್",highlight:"Heritage colonial bar counter, vintage teak paneling, and field-view terrace",description:"Overlooking the floodlit blue turf, the Member Pavilion offers signature Anglo-Indian and Karavali cuisines, rare single malts, and an intimate museum gallery honoring state captains.",specs:["Field-View Verandah","Private Boardroom for 20","Centenary Archives Display","Member-Only Access"],category:"Club Wing"}],eE=[{name:"Bowring Institute",city:"Bengaluru",state:"Karnataka",founded:"1868",privileges:"Full dining, tennis, and heritage lounge privileges"},{name:"Century Club",city:"Bengaluru",state:"Karnataka",founded:"1917",privileges:"Sir M. Visvesvaraya founded estate access"},{name:"Madras Cricket Club (MCC)",city:"Chennai",state:"Tamil Nadu",founded:"1846",privileges:"Chepauk precinct access, squash, billiards & dining"},{name:"Secunderabad Club",city:"Hyderabad",state:"Telangana",founded:"1878",privileges:"Sailing annex, residential chambers, colonial lawns"},{name:"Calcutta Cricket & Football Club (CC&FC)",city:"Kolkata",state:"West Bengal",founded:"1792",privileges:"World’s second oldest cricket club sporting access"},{name:"Delhi Gymkhana Club",city:"New Delhi",state:"Delhi NCR",founded:"1913",privileges:"Safdarjung dining, grass tennis courts, guest rooms"}],tE=[{pos:1,club:"ASC Centre & College",played:10,won:8,drawn:2,lost:0,gf:34,ga:11,gd:"+23",pts:26,form:["W","W","W","D","W"]},{pos:2,club:"Rail Wheel Factory (RWFSA)",played:10,won:7,drawn:2,lost:1,gf:29,ga:14,gd:"+15",pts:23,form:["W","W","D","W","W"]},{pos:3,club:"MEG & Centre (Sappers)",played:10,won:6,drawn:3,lost:1,gf:25,ga:13,gd:"+12",pts:21,form:["D","W","W","W","D"]},{pos:4,club:"Canara Bank Hockey Team",played:10,won:5,drawn:2,lost:3,gf:22,ga:17,gd:"+5",pts:17,form:["L","W","D","W","W"]},{pos:5,club:"Fortis Hockey Club",played:10,won:4,drawn:2,lost:4,gf:18,ga:19,gd:"-1",pts:14,form:["W","L","L","W","D"]},{pos:6,club:"Maratha Light Infantry RC",played:10,won:3,drawn:3,lost:4,gf:16,ga:20,gd:"-4",pts:12,form:["D","D","L","W","L"]}],nE=[{designation:"Patron",name:"Sri N. A. Haris",meta:"Hon’ble Member of Legislative Assembly, Karnataka"},{designation:"President",name:"Sri Sushil Kumar Gupta",meta:"Eminent Sports Administrator & Industrialist"},{designation:"Hon. Secretary",name:"Sri K. Krishnamurthy",meta:"Veteran State Hockey Administrator"},{designation:"Hon. Treasurer",name:"Sri G. Suresh",meta:"Chartered Accounting & Financial Governance"},{designation:"Senior Vice President",name:"Sri P. N. Divakar",meta:"State Championship Director"},{designation:"Senior Vice President",name:"Smt. M. K. Devarajamma",meta:"Women’s Hockey Development Committee"}],iE=[{sNo:1,name:"Padmashri Dr. M. P. Ganesh",name_kn:"ಪದ್ಮಶ್ರೀ ಡಾ. ಎಂ. ಪಿ. ಗಣೇಶ್",year:1973,event:"Hockey",category:"Hockey"},{sNo:2,name:"B. P. Govinda",name_kn:"ಬಿ. ಪಿ. ಗೋವಿಂದ",year:1975,event:"Hockey",category:"Hockey"},{sNo:3,name:"Joaquim Carvalho",name_kn:"ಜೋಕಿಂ ಕಾರ್ವಾಲೋ",year:1986,event:"Hockey",category:"Hockey"},{sNo:4,name:"Jude Felix",name_kn:"ಜ್ಯೂಡ್ ಫೆಲಿಕ್ಸ್",year:1994,event:"Hockey",category:"Hockey"},{sNo:5,name:"Ashish Ballal",name_kn:"ಆಶಿಶ್ ಬಲ್ಲಾಳ್",year:1996,event:"Hockey",category:"Hockey"},{sNo:6,name:"V. R. Raghunath",name_kn:"ವಿ. ಆರ್. ರಘುನಾಥ್",year:2016,event:"Hockey",category:"Hockey"},{sNo:7,name:"S. V. Sunil",name_kn:"ಎಸ್. ವಿ. ಸುನಿಲ್",year:2017,event:"Hockey",category:"Hockey"},{sNo:8,name:"Honappa Gowda C.",name_kn:"ಹೊನ್ನಪ್ಪ ಗೌಡ ಸಿ.",year:2e3,event:"Kabaddi",category:"Kabaddi"},{sNo:9,name:"Ramesh B.C.",name_kn:"ರಮೇಶ್ ಬಿ.ಸಿ.",year:2011,event:"Kabaddi",category:"Kabaddi"},{sNo:10,name:"Mahadeva M.",name_kn:"ಮಹದೇವ ಎಂ.",year:1992,event:"Para Olympics",category:"Para Olympics"},{sNo:11,name:"Padmashri Girisha H.N.",name_kn:"ಪದ್ಮಶ್ರೀ ಗಿರೀಶ ಹೆಚ್.ಎನ್.",year:2014,event:"Para Olympics",category:"Para Olympics"}],rE=[{sNo:1,name:"Kannan Krishnamurthy",name_kn:"ಕಣ್ಣನ್ ಕೃಷ್ಣಮೂರ್ತಿ",cadre:"International Hockey Umpire",cadre_kn:"ಅಂತಾರಾಷ್ಟ್ರೀಯ ಹಾಕಿ ಅಂಪೈರ್"},{sNo:2,name:"A. E. Venu Uthappa",name_kn:"ಎ. ಇ. ವೇಣು ಉತ್ತಪ್ಪ",cadre:"International Hockey Umpire",cadre_kn:"ಅಂತಾರಾಷ್ಟ್ರೀಯ ಹಾಕಿ ಅಂಪೈರ್"},{sNo:3,name:"A. B. Palangappa",name_kn:"ಎ. ಬಿ. ಪಾಲಂಗಪ್ಪ",cadre:"International Hockey Umpire",cadre_kn:"ಅಂತಾರಾಷ್ಟ್ರೀಯ ಹಾಕಿ ಅಂಪೈರ್"},{sNo:4,name:"R. V. Raghu Prasad",name_kn:"ಆರ್. ವಿ. ರಘು ಪ್ರಸಾದ್",cadre:"FIH World Panel Umpire (200+ Caps, 3 Olympics)",cadre_kn:"ಎಫ್.ಐ.ಎಚ್ ವಿಶ್ವ ಪ್ಯಾನೆಲ್ ಅಂಪೈರ್"}],sE={super:{title:"Super Division",info:"12 teams · 28 matches",names:["Shlok Hockey Club","Railway Wheel Factory Sports Association (RWFSA)","Hindustan Friends Club","V. Raja Hockey Club"]},a:{title:"A Division",info:"14 teams · 35 matches",names:["Zoza Sports Academy","Sandeep Hockey Club","Bengaluru Blues Hockey Club","Wild Boar Hockey Club"]},b:{title:"B Division",info:"20 teams · 36 matches",names:["Coorg Direwolves","Blue Star Hockey Club “A”","Bombers Hockey Club","Adhiyaman College of Engineering"]},c:{title:"C Division",info:"25 teams · 45 matches",names:["Garuda Hockey Club","Bangalore Friends Hockey Club","Southern Alpha Sports Academy","Besant Hockey Club"]}},aE=[["Super Division","super"],["A Division","a"],["B Division","b"],["C Division","c"]],oE=["Winner","Runner-up","Third place","Fourth place"],lE=({lang:s})=>{const[e,n]=et.useState("super"),[r,o]=et.useState(!1),l=sE[e];return u.jsx("section",{id:"battlegrounds",className:"relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FBF8F7] border-b border-[#E6DAD8]",children:u.jsxs("div",{className:"max-w-7xl mx-auto",children:[u.jsxs("div",{className:"mb-12",children:[u.jsx("p",{className:"chap mb-3",children:"Chapter II"}),u.jsx("h2",{className:"disp text-5xl sm:text-7xl lg:text-9xl text-black mb-4",children:s==="kn"?"ಲೀಗ್ ಚಾಂಪಿಯನ್‌ಶಿಪ್":"The League"}),u.jsx("p",{className:"whisper text-2xl sm:text-3xl lg:text-4xl text-black max-w-3xl mb-3",children:"Four divisions. More than a hundred matches in four months. Choose one, and see who stood on top."}),u.jsx("p",{className:"text-xs font-mono tracking-widest uppercase text-[#5C5350]",children:"Latest recorded season · KSHA State Hockey League Championship"})]}),u.jsx("div",{role:"group","aria-label":"Choose a division",className:"flex flex-wrap gap-3 mb-10",children:aE.map(([d,h])=>u.jsx("button",{type:"button",onClick:()=>{gt.playSplitFlap(),n(h)},className:`min-h-[52px] px-7 font-mono font-bold text-xs sm:text-sm tracking-[0.14em] uppercase transition-all border-2 ${e===h?"bg-[#E3000F] border-[#E3000F] text-white shadow-md":"bg-transparent border-[#C9B8B5] text-black hover:border-[#E3000F]"}`,children:d},h))}),u.jsx(Ln,{staggerIndex:0,className:"mb-12",children:u.jsxs("div",{className:"bg-white rounded-2xl border border-[#E6DAD8] p-6 sm:p-10 shadow-sm",children:[u.jsxs("div",{className:"flex flex-wrap items-baseline gap-4 sm:gap-8 pb-6 border-b border-[#E6DAD8] mb-4",children:[u.jsx("h3",{className:"disp goldtxt text-4xl sm:text-6xl lg:text-7xl",children:l.title}),u.jsx("span",{className:"font-mono text-sm sm:text-lg text-[#3B3330]",children:l.info})]}),u.jsx("div",{className:"divide-y divide-[#E6DAD8]",children:l.names.map((d,h)=>u.jsxs("div",{className:"flex items-baseline gap-6 sm:gap-12 py-5 sm:py-8 group",children:[u.jsx("span",{className:"whisper text-3xl sm:text-5xl lg:text-6xl text-[#E3000F] min-w-[2.2em]",children:"0"+(h+1)}),u.jsxs("div",{className:"flex-1",children:[u.jsx("div",{className:"font-mono text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#5C5350] mb-1",children:oE[h]}),u.jsx("div",{className:`disp text-2xl sm:text-5xl lg:text-7xl group-hover:text-[#E3000F] transition-colors ${h===0?"goldtxt":"text-black"}`,children:d})]})]},h))})]})}),u.jsx(Ln,{staggerIndex:1,children:u.jsxs("div",{id:"fixture",className:"rounded-2xl bg-white border border-[#E6DAD8] p-8 sm:p-12 text-center shadow-sm",children:[u.jsx("p",{className:"chap mb-3",children:"Chapter VII · Match Centre"}),u.jsx("h3",{className:"disp text-4xl sm:text-6xl lg:text-8xl text-black mb-4",children:"The Next Whistle"}),u.jsx("p",{className:"font-mono text-xs tracking-widest text-[#E3000F] uppercase font-bold mb-4",children:"KSHA SUPER DIVISION PREMIER MATCH"}),u.jsxs("div",{className:"disp text-3xl sm:text-5xl lg:text-7xl text-black leading-tight mb-4",children:["Rail Wheel Factory SC",u.jsx("br",{}),u.jsx("span",{className:"goldtxt",children:"versus"}),u.jsx("br",{}),"Canara Bank Sports Club"]}),u.jsx("p",{className:"font-mono text-sm sm:text-base text-[#3B3330] mb-8",children:"Saturday · 16:30 IST · KSHA Hockey Stadium, Langford Town Pitch"}),u.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4",children:[u.jsx("button",{onClick:()=>{gt.playStickStrike(),alert("Match calendar reminder (.ics) scheduled for KSHA Super Division Clash!")},className:"inline-flex items-center justify-center min-h-[52px] px-8 bg-[#E3000F] hover:bg-[#9E000B] text-white font-mono font-bold text-xs tracking-[0.14em] uppercase transition-all shadow-md",children:"Add to calendar"}),u.jsx("button",{onClick:()=>{gt.playSplitFlap(),o(!r)},className:"inline-flex items-center justify-center min-h-[52px] px-8 bg-transparent hover:bg-[#E3000F] text-[#E3000F] hover:text-white border-2 border-[#E3000F] font-mono font-bold text-xs tracking-[0.14em] uppercase transition-all",children:r?"Hide Table":"Full Standings Table"})]}),r&&u.jsx("div",{className:"mt-8 pt-8 border-t border-[#E6DAD8] overflow-x-auto text-left",children:u.jsxs("table",{className:"w-full text-left font-mono text-xs",children:[u.jsx("thead",{children:u.jsxs("tr",{className:"border-b border-[#E6DAD8] text-[#5C5350] uppercase tracking-wider",children:[u.jsx("th",{className:"py-3 px-4",children:"Pos"}),u.jsx("th",{className:"py-3 px-4",children:"Club"}),u.jsx("th",{className:"py-3 px-4 text-center",children:"P"}),u.jsx("th",{className:"py-3 px-4 text-center",children:"W"}),u.jsx("th",{className:"py-3 px-4 text-center",children:"D"}),u.jsx("th",{className:"py-3 px-4 text-center",children:"L"}),u.jsx("th",{className:"py-3 px-4 text-center",children:"GD"}),u.jsx("th",{className:"py-3 px-4 text-right",children:"Pts"})]})}),u.jsx("tbody",{className:"divide-y divide-[#E6DAD8]",children:tE.map(d=>u.jsxs("tr",{className:"hover:bg-neutral-50 transition-colors",children:[u.jsx("td",{className:"py-3.5 px-4 font-bold",children:d.pos}),u.jsx("td",{className:"py-3.5 px-4 font-semibold text-black",children:d.club}),u.jsx("td",{className:"py-3.5 px-4 text-center",children:d.played}),u.jsx("td",{className:"py-3.5 px-4 text-center",children:d.won}),u.jsx("td",{className:"py-3.5 px-4 text-center",children:d.drawn}),u.jsx("td",{className:"py-3.5 px-4 text-center",children:d.lost}),u.jsx("td",{className:"py-3.5 px-4 text-center text-emerald-700 font-bold",children:d.gd}),u.jsx("td",{className:"py-3.5 px-4 text-right font-black text-black",children:d.pts})]},d.pos))})]})})]})})]})})},cE=({lang:s})=>{const[e,n]=et.useState("all"),[r,o]=et.useState(rf[0]),l=rf.filter(d=>e==="all"?!0:d.zone===e);return u.jsx("section",{id:"cradles",className:"relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E6DAD8]",children:u.jsxs("div",{className:"max-w-7xl mx-auto",children:[u.jsxs("div",{className:"mb-14",children:[u.jsx("p",{className:"chap mb-3",children:"Chapter III"}),u.jsx("h2",{className:"disp text-5xl sm:text-7xl lg:text-9xl text-black mb-4",children:s==="kn"?"ಮುಂದಿನ ಪೀಳಿಗೆ":"The Heirs"}),u.jsx("p",{className:"whisper text-2xl sm:text-3xl lg:text-4xl text-black max-w-3xl mb-8 leading-snug",children:"“Every Saturday and Sunday, the next generation arrives with a stick that is slightly too big.”"}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-[#C9B8B5]",children:[u.jsx(Ln,{staggerIndex:0,children:u.jsxs("div",{className:"border-t-2 border-[#C9B8B5] pt-4 p-4 rounded-xl bg-white/70 backdrop-blur-xs border border-[#E6DAD8]/60 shadow-xs h-full",children:[u.jsx("div",{className:"disp goldtxt text-7xl sm:text-8xl lg:text-9xl",children:"70"}),u.jsx("h3",{className:"disp text-2xl text-black mt-1",children:"Players in the academy"}),u.jsx("p",{className:"text-sm text-[#3B3330] mt-2 max-w-xs font-sans",children:"School-going boys and girls train at weekends, then play for clubs across the four league tiers."})]})}),u.jsx(Ln,{staggerIndex:1,children:u.jsxs("div",{className:"border-t-2 border-[#C9B8B5] pt-4 p-4 rounded-xl bg-white/70 backdrop-blur-xs border border-[#E6DAD8]/60 shadow-xs h-full",children:[u.jsx("div",{className:"disp goldtxt text-7xl sm:text-8xl lg:text-9xl",children:"2"}),u.jsx("h3",{className:"disp text-2xl text-black mt-1",children:"Decades and counting"}),u.jsx("p",{className:"text-sm text-[#3B3330] mt-2 max-w-xs font-sans",children:"The KSHA Hockey Academy has been nurturing grassroots talent in Langford Town for two decades."})]})}),u.jsx(Ln,{staggerIndex:2,children:u.jsxs("div",{className:"border-t-2 border-[#C9B8B5] pt-4 p-4 rounded-xl bg-white/70 backdrop-blur-xs border border-[#E6DAD8]/60 shadow-xs h-full",children:[u.jsx("div",{className:"disp goldtxt text-7xl sm:text-8xl lg:text-9xl",children:"40"}),u.jsx("h3",{className:"disp text-2xl text-black mt-1",children:"Summer camp trainees"}),u.jsx("p",{className:"text-sm text-[#3B3330] mt-2 max-w-xs font-sans",children:"Around forty high-potential junior players attended the April–May 2025 intensive residential camp."})]})})]}),u.jsxs("div",{className:"mt-8 pt-4 border-t border-[#E6DAD8] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#5C5350]",children:[u.jsx("p",{className:"max-w-3xl",children:"Coached by A.E. Brient (late), T.C. Vinoba, N. Mahalingam, Md. Naseeruddin, A.N. Somaiah, Joseph Vijay and Ravindran Dsa, under chairman A.B. Palangappa."}),u.jsx("span",{className:"px-3 py-1 rounded bg-[#FBF8F7] border border-[#E6DAD8] text-[#E3000F] font-bold uppercase tracking-wider",children:"18 Affiliated District Units"})]})]}),u.jsxs("div",{className:"mt-16",children:[u.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-8",children:[u.jsx("h3",{className:"disp text-3xl sm:text-4xl text-black",children:"18 District Cradles of Karnataka"}),u.jsx("div",{className:"flex flex-wrap gap-2",children:[{id:"all",label:"All 18 Districts"},{id:"Western Ghats / Coorg",label:"Kodagu (Coorg)"},{id:"Northern Deccan",label:"Northern Deccan & Belagavi"},{id:"Central & Hyderabad-K",label:"Kalyana Karnataka"},{id:"Southern Maidan",label:"Bengaluru & Mysuru"}].map(d=>u.jsx("button",{onClick:()=>{gt.playSplitFlap(),n(d.id)},className:`px-3.5 py-1.5 rounded font-mono text-xs uppercase tracking-wider border transition-all ${e===d.id?"bg-[#E3000F] text-white border-[#E3000F] font-bold shadow-xs":"bg-white text-black border-[#C9B8B5] hover:border-black"}`,children:d.label},d.id))})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:l.map((d,h)=>u.jsx(Ln,{staggerIndex:h%6,className:"h-full",children:u.jsxs("div",{onClick:()=>{gt.playStickStrike(),o(d)},className:`p-5 rounded-xl border transition-all cursor-pointer h-full ${r.id===d.id?"bg-[#FBF8F7] border-[#E3000F] shadow-sm":"bg-white border-[#E6DAD8] hover:border-[#8F8482]"}`,children:[u.jsxs("div",{className:"flex items-center justify-between mb-2",children:[u.jsx("span",{className:"disp text-xl sm:text-2xl text-black",children:d.name}),u.jsxs("span",{className:"text-[10px] font-mono text-[#E3000F] uppercase font-bold px-2 py-0.5 rounded bg-red-50 border border-red-100",children:["ESTD. ",d.established]})]}),u.jsxs("div",{className:"text-xs font-mono text-[#5C5350] mb-2",children:["HQ: ",d.headquarters," · ",d.zone]}),u.jsxs("p",{className:"text-xs text-[#3B3330] leading-relaxed",children:["Key Talent: ",d.keyTalent]})]})},d.id))})]})]})})},uE=({athletes:s,onSelectAthlete:e,lang:n})=>{const r=et.useRef(null),[o,l]=et.useState(0),d=s.filter(m=>m.image).concat(s.filter(m=>!m.image)).slice(0,6),h=m=>{const p=Math.max(0,Math.min(d.length-1,m));l(p),gt.playSplitFlap(),r.current&&r.current.scrollTo({left:p*360,behavior:"smooth"})};return u.jsxs("div",{className:"mb-16",children:[u.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#E6DAD8]",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#E3000F] font-bold",children:[u.jsx(rx,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:n==="kn"?"ಪ್ರಮುಖ ದಿಗ್ಗಜರು":"FEATURED LEGENDS"})]}),u.jsx("h3",{className:"disp text-3xl sm:text-5xl text-black mt-1",children:n==="kn"?"ಖ್ಯಾತ ಕ್ರೀಡಾಪಟುಗಳ ಪಟ್ಟಿ":"HALL OF FAME SPOTLIGHT"})]}),u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsxs("span",{className:"font-mono text-xs font-bold text-neutral-500 tracking-wider",children:[String(o+1).padStart(2,"0")," / ",String(d.length).padStart(2,"0")]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("button",{onClick:()=>h(o-1),disabled:o===0,"aria-label":"Previous legend",className:"w-9 h-9 rounded-full border border-neutral-300 hover:border-black disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-colors bg-white shadow-sm",children:u.jsx(j0,{className:"w-4 h-4 text-black"})}),u.jsx("button",{onClick:()=>h(o+1),disabled:o===d.length-1,"aria-label":"Next legend",className:"w-9 h-9 rounded-full border border-neutral-300 hover:border-black disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-colors bg-white shadow-sm",children:u.jsx(Wa,{className:"w-4 h-4 text-black"})})]})]})]}),u.jsx("div",{ref:r,className:"flex gap-6 overflow-x-auto pt-6 pb-4 scroll-smooth snap-x snap-mandatory scrollbar-none",style:{scrollbarWidth:"none",msOverflowStyle:"none"},children:d.map((m,p)=>u.jsx(Ln,{staggerIndex:p,className:"flex-shrink-0 w-[300px] sm:w-[350px] snap-start",children:u.jsxs("article",{role:"button",tabIndex:0,className:"w-full h-full rounded-2xl bg-white border border-[#E6DAD8] hover:border-black shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#E3000F]",onClick:()=>e(m),onKeyDown:v=>{(v.key==="Enter"||v.key===" ")&&(v.preventDefault(),e(m))},children:[u.jsxs("div",{className:"relative h-64 bg-neutral-900 overflow-hidden",children:[m.image?u.jsx("img",{src:m.image,alt:m.name,className:"w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"}):u.jsx("div",{className:"w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-950",children:u.jsx("span",{className:"font-cinzel text-5xl font-black text-amber-400/40",children:m.name.charAt(0)})}),u.jsxs("div",{className:"absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-between p-4",children:[u.jsxs("div",{className:"flex justify-between items-start",children:[u.jsx("span",{className:"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-amber-300 border border-amber-400/40",children:m.games}),u.jsx("span",{className:"w-7 h-7 rounded-full bg-[#E3000F] text-white text-[11px] font-mono font-bold flex items-center justify-center shadow-md",children:p+1})]}),u.jsxs("div",{children:[u.jsx("span",{className:"text-[10px] font-mono text-[#E3000F] uppercase font-bold tracking-wider block",children:m.position}),u.jsx("h4",{className:"disp text-2xl text-white mt-0.5 drop-shadow-sm",children:m.name}),u.jsx("p",{className:"font-kannada text-xs font-bold text-neutral-300",children:m.kannadaName})]})]})]}),u.jsxs("div",{className:"p-5 flex-1 flex flex-col justify-between space-y-4 bg-white",children:[u.jsxs("p",{className:"whisper text-base text-[#3B3330] line-clamp-3 leading-snug",children:["“",m.myth,"”"]}),u.jsxs("div",{className:"pt-3 border-t border-[#E6DAD8] flex items-center justify-between text-xs font-mono",children:[u.jsx("span",{className:"text-neutral-500",children:m.district}),u.jsxs("span",{className:"text-[#E3000F] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform",children:[u.jsx("span",{children:"View Dossier"}),u.jsx(ax,{className:"w-3.5 h-3.5"})]})]})]})]})},m.id))})]})},dE=({athlete:s,onClose:e,lang:n})=>{const[r,o]=et.useState(!1),l=et.useRef(null);if(et.useEffect(()=>{const h=m=>{m.key==="Escape"&&e()};return s&&(window.addEventListener("keydown",h),document.body.style.overflow="hidden"),()=>{window.removeEventListener("keydown",h),document.body.style.overflow=""}},[s,e]),et.useEffect(()=>{o(!1)},[s]),!s)return null;const d=()=>{const h=`${s.name} (${s.kannadaName}) · ${s.games} · ${s.position}. "${s.myth}" — Official KSHA Roll of Honour.`;navigator.clipboard.writeText(h),o(!0),setTimeout(()=>o(!1),2500)};return u.jsx("div",{className:"fixed inset-0 z-[100000] flex justify-end bg-black/60 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn",onClick:e,role:"dialog","aria-modal":"true","aria-labelledby":"drawer-athlete-title",children:u.jsxs("div",{ref:l,onClick:h=>h.stopPropagation(),className:"relative w-full max-w-lg h-full bg-white shadow-2xl flex flex-col overflow-y-auto border-l border-neutral-200 transform transition-transform duration-300 ease-out animate-slideInRight",children:[u.jsxs("div",{className:"bg-[#0A0A0A] text-white p-6 sm:p-7 relative border-b border-neutral-800",children:[u.jsx("button",{onClick:e,"aria-label":"Close dossier",className:"absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors",children:u.jsx(Wl,{className:"w-5 h-5"})}),u.jsxs("div",{className:"flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-[#E3000F] font-bold mb-3",children:[u.jsx(rx,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"KSHA ROLL OF HONOUR · ANNEXURE 1"})]}),u.jsxs("div",{className:"flex items-start gap-4",children:[u.jsx("div",{className:"w-20 h-20 rounded-full overflow-hidden border-2 border-[#E3000F] shadow-lg bg-neutral-900 flex-shrink-0 flex items-center justify-center",children:s.image?u.jsx("img",{src:s.image,alt:s.name,className:"w-full h-full object-cover object-top",onError:h=>{h.currentTarget.style.display="none"}}):u.jsx("span",{className:"font-cinzel text-xl font-bold text-amber-400",children:s.name.charAt(0)})}),u.jsxs("div",{className:"flex-1 pr-6",children:[u.jsx("h2",{id:"drawer-athlete-title",className:"disp text-3xl sm:text-4xl text-white leading-tight",children:s.name}),u.jsx("p",{className:"font-kannada text-sm font-bold text-neutral-400 mt-0.5",children:s.kannadaName}),u.jsx("div",{className:"inline-block mt-2 px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-[#E3000F]/20 text-[#FF4D4D] border border-[#E3000F]/40",children:s.designation||"Olympic Legend"})]})]})]}),u.jsxs("div",{className:"p-6 space-y-6 flex-1",children:[s.image&&u.jsxs("div",{className:"relative rounded-2xl overflow-hidden h-64 border border-neutral-200 shadow-md bg-neutral-950 group",children:[u.jsx("img",{src:s.image,alt:`${s.name} in action`,className:"w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end p-4",children:u.jsxs("div",{className:"text-white text-xs font-mono",children:[u.jsx("span",{className:"text-amber-400 font-bold block",children:s.games}),u.jsxs("span",{className:"text-neutral-300",children:[s.position," · ",s.district]})]})})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-3 text-xs font-mono",children:[u.jsxs("div",{className:"p-3.5 rounded-xl bg-[#FBF8F7] border border-[#E6DAD8]",children:[u.jsx("span",{className:"text-neutral-500 uppercase block text-[10px]",children:"Position"}),u.jsx("span",{className:"font-bold text-black text-sm mt-0.5 block",children:s.position})]}),u.jsxs("div",{className:"p-3.5 rounded-xl bg-[#FBF8F7] border border-[#E6DAD8]",children:[u.jsx("span",{className:"text-neutral-500 uppercase block text-[10px]",children:"District Cradle"}),u.jsxs("span",{className:"font-bold text-black text-sm mt-0.5 flex items-center gap-1",children:[u.jsx(af,{className:"w-3 h-3 text-[#E3000F]"}),s.district]})]})]}),u.jsxs("div",{className:"p-5 rounded-2xl bg-[#FBF8F7] border border-[#E6DAD8] space-y-2",children:[u.jsx("span",{className:"text-[11px] font-mono text-[#E3000F] uppercase tracking-wider font-bold block",children:"Official Citation & Lore"}),u.jsxs("p",{className:"whisper text-xl text-neutral-900 leading-relaxed",children:["“",s.myth,"”"]})]}),u.jsxs("div",{className:"space-y-3",children:[u.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-neutral-500 font-bold block",children:"Career Honors & Milestones"}),u.jsx("div",{className:"p-4 rounded-xl bg-white border border-neutral-200 text-xs text-neutral-800 leading-relaxed font-sans shadow-sm",children:s.record}),u.jsx("div",{className:"flex flex-wrap gap-2 pt-1",children:s.awards.map((h,m)=>u.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-mono font-semibold",children:[u.jsx(lf,{className:"w-3 h-3 text-amber-600"}),h]},m))})]})]}),u.jsxs("div",{className:"p-4 sm:p-5 border-t border-neutral-200 bg-white flex items-center gap-3",children:[u.jsx("button",{onClick:d,className:"flex-1 py-2.5 px-4 rounded-xl bg-black text-white text-xs font-mono uppercase tracking-wider font-bold flex items-center justify-center gap-2 hover:bg-neutral-800 transition-colors shadow-md",children:r?u.jsxs(u.Fragment,{children:[u.jsx($0,{className:"w-4 h-4 text-emerald-400"}),u.jsx("span",{children:"CITATION COPIED!"})]}):u.jsxs(u.Fragment,{children:[u.jsx(rv,{className:"w-4 h-4"}),u.jsx("span",{children:"COPY CITATION"})]})}),u.jsx("button",{onClick:e,className:"py-2.5 px-5 rounded-xl border border-neutral-300 hover:border-black text-xs font-mono uppercase tracking-wider font-bold text-neutral-700 transition-colors",children:"CLOSE"})]})]})})},fE=[{name:"Asish Kumar Ballal",badge:"Olympian & Arjuna Awardee",meta:"Karnataka Rajyotsava Award (1 November 2025). Hero of the 1998 Asian Games Gold medal final penalty shootout."},{name:"Md. Raheel Mouseen",badge:"Senior India International",meta:"Dynamic attacking midfielder in the national squad; recipient of the prestigious Karnataka State Ekalavya Award."},{name:"H.S. Mohit & C.B. Poovanna",badge:"National Team Rising Stars",meta:"Karnataka’s new faces representing the senior Indian squad at the Sultan Azlan Shah Cup 2025."},{name:"C.B. Janardhan",badge:"KSHA Life Member & Coach",meta:"Assistant Coach of the Indian Junior Men’s Team at the FIH Men’s Junior World Cup."}],hE=({lang:s})=>{const[e,n]=et.useState(null),[r,o]=et.useState("all"),[l,d]=et.useState("olympians"),h=nf.filter(p=>r==="all"?!0:r==="medalist"?p.medal!=="Olympian":r==="coorg"?p.district.toLowerCase().includes("kodagu")||p.district.toLowerCase().includes("coorg"):r==="captain"?p.position.toLowerCase().includes("captain"):!0),m=p=>{gt.playStickStrike(),gt.playGloryChime(),n(p)};return u.jsxs("section",{id:"immortals",className:"relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FBF8F7] border-b border-[#E6DAD8]",children:[u.jsx("div",{className:"max-w-7xl mx-auto",children:u.jsxs("div",{className:"mb-14",children:[u.jsx("p",{className:"chap mb-3",children:"Chapter IV"}),u.jsx("h2",{className:"disp text-5xl sm:text-7xl lg:text-9xl text-black mb-4",children:s==="kn"?"ದಿಗ್ಗಜರ ಸಾಲು":"The Legends"}),u.jsx("p",{className:"whisper text-2xl sm:text-3xl lg:text-4xl text-black max-w-3xl mb-8 leading-snug",children:"“Karnataka does not need to be loud. The whistle was heard in two hundred international matches.”"}),u.jsx(uE,{athletes:nf,onSelectAthlete:m,lang:s}),u.jsxs("div",{className:"bg-white rounded-2xl border border-[#E6DAD8] p-8 sm:p-12 mb-12 shadow-sm",children:[u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",children:[u.jsxs("div",{className:"lg:col-span-8 space-y-4",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#E3000F] font-mono text-xs font-bold uppercase tracking-wider border border-red-200",children:[u.jsx(lx,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"FIH WORLD UMPIRE OF THE YEAR 2025"})]}),u.jsx("h3",{className:"disp goldtxt text-5xl sm:text-7xl lg:text-8xl leading-none",children:"R.V. Raghu Prasad"}),u.jsx("p",{className:"whisper text-xl sm:text-2xl text-[#3B3330]",children:"The sovereign titan of international officiating, born and groomed in Bengaluru."})]}),u.jsx("div",{className:"lg:col-span-4 flex justify-center",children:u.jsx("div",{className:"w-36 h-36 sm:w-44 sm:h-44 rounded-full border-4 border-[#E3000F] p-2 flex items-center justify-center bg-red-50/50",children:u.jsx("img",{src:"/ksha-crest.png",alt:"KSHA Official Seal",className:"w-full h-full object-contain"})})})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 mt-8 border-t border-[#E6DAD8]",children:[u.jsxs("div",{children:[u.jsx("div",{className:"disp text-5xl sm:text-6xl text-black",children:"200"}),u.jsx("p",{className:"text-xs font-mono text-[#5C5350] mt-1 uppercase tracking-wider",children:"International Matches Officiated"}),u.jsx("p",{className:"text-xs text-[#3B3330] mt-1 font-sans",children:"The first umpire from India and Asia to reach the historic 200 Golden Whistle landmark."})]}),u.jsxs("div",{children:[u.jsx("div",{className:"disp text-5xl sm:text-6xl text-black",children:"3"}),u.jsx("p",{className:"text-xs font-mono text-[#5C5350] mt-1 uppercase tracking-wider",children:"Olympic Games Officiated"}),u.jsx("p",{className:"text-xs text-[#3B3330] mt-1 font-sans",children:"London 2012, Rio 2016, and Tokyo 2020. Plus 4 Senior World Cups and 4 Asian Games."})]}),u.jsxs("div",{children:[u.jsx("div",{className:"disp text-5xl sm:text-6xl text-black",children:"KSHA"}),u.jsx("p",{className:"text-xs font-mono text-[#5C5350] mt-1 uppercase tracking-wider",children:"Life Member & Academy Mentor"}),u.jsx("p",{className:"text-xs text-[#3B3330] mt-1 font-sans",children:"Continues to mentor state umpires on Langford Town turf and sits on the FIH World Panel."})]})]})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16",children:fE.map((p,v)=>u.jsxs("div",{className:"p-5 rounded-xl bg-white border border-[#E6DAD8] space-y-2 hover:border-black transition-colors",children:[u.jsx("span",{className:"text-[10px] font-mono text-[#E3000F] font-bold uppercase tracking-wider",children:p.badge}),u.jsx("h4",{className:"disp text-2xl text-black",children:p.name}),u.jsx("p",{className:"text-xs text-[#3B3330] leading-relaxed font-sans",children:p.meta})]},v))}),u.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("button",{onClick:()=>d("olympians"),className:`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-colors ${l==="olympians"?"bg-black text-white":"bg-white text-neutral-600 hover:text-black border border-neutral-300"}`,children:"15 Olympic Immortals"}),u.jsx("button",{onClick:()=>d("arjuna"),className:`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-colors ${l==="arjuna"?"bg-black text-white":"bg-white text-neutral-600 hover:text-black border border-neutral-300"}`,children:"11 Arjuna Awardees"}),u.jsx("button",{onClick:()=>d("umpires"),className:`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-colors ${l==="umpires"?"bg-black text-white":"bg-white text-neutral-600 hover:text-black border border-neutral-300"}`,children:"International Umpires"})]}),l==="olympians"&&u.jsx("div",{className:"flex flex-wrap gap-2 font-mono text-xs",children:[{id:"all",label:"All 15"},{id:"medalist",label:"Medalists"},{id:"captain",label:"Captains of India"},{id:"coorg",label:"Kodagu Cradle"}].map(p=>u.jsx("button",{onClick:()=>{gt.playSplitFlap(),o(p.id)},className:`px-3 py-1.5 rounded-full border transition-all ${r===p.id?"bg-[#E3000F] text-white border-[#E3000F] font-bold shadow-xs":"bg-white text-black border-[#C9B8B5] hover:border-black"}`,children:p.label},p.id))})]}),l==="olympians"&&u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:h.map(p=>u.jsxs("div",{role:"button",tabIndex:0,onClick:()=>m(p),onKeyDown:v=>{(v.key==="Enter"||v.key===" ")&&(v.preventDefault(),m(p))},className:"group relative p-6 rounded-2xl bg-white border border-[#E6DAD8] hover:border-[#E3000F] transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-xs hover:shadow-md focus:outline-hidden focus:ring-2 focus:ring-[#E3000F]",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between gap-2 mb-3",children:[u.jsx("span",{className:"text-[11px] font-mono tracking-widest text-[#E3000F] uppercase font-bold",children:p.games}),u.jsx("span",{className:"px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-amber-50 text-amber-900 border border-amber-200",children:p.medal})]}),u.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[p.image&&u.jsx("div",{className:"w-10 h-10 rounded-full overflow-hidden border border-amber-400 flex-shrink-0",children:u.jsx("img",{src:p.image,alt:p.name,className:"w-full h-full object-cover"})}),u.jsxs("div",{children:[u.jsx("h4",{className:"disp text-3xl text-black group-hover:text-[#E3000F] transition-colors leading-none",children:p.name}),u.jsx("div",{className:"text-[11px] font-kannada font-bold text-[#5C5350] mt-0.5",children:p.kannadaName})]})]}),u.jsx("div",{className:"text-xs font-mono text-[#E3000F] font-bold uppercase tracking-wider mb-3",children:p.position}),u.jsxs("p",{className:"whisper text-lg text-[#3B3330] leading-snug line-clamp-3",children:["“",p.myth,"”"]})]}),u.jsxs("div",{className:"mt-6 pt-4 border-t border-[#E6DAD8] flex items-center justify-between text-xs font-mono text-[#5C5350]",children:[u.jsx("span",{children:p.district}),u.jsxs("span",{className:"text-[#E3000F] font-bold group-hover:underline flex items-center gap-1",children:[u.jsx("span",{children:"Inspect Record"}),u.jsx(ax,{className:"w-3.5 h-3.5"})]})]})]},p.id))}),l==="arjuna"&&u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:iE.map(p=>u.jsxs("div",{className:"p-5 rounded-2xl bg-white border border-[#E6DAD8] hover:border-black transition-colors space-y-2 shadow-xs",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("span",{className:"px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-amber-50 text-amber-900 border border-amber-200",children:[p.category," · ",p.year]}),u.jsxs("span",{className:"text-xs font-mono font-bold text-neutral-400",children:["#",p.sNo]})]}),u.jsx("h4",{className:"disp text-2xl text-black",children:p.name}),u.jsx("p",{className:"font-kannada text-xs font-bold text-neutral-500",children:p.name_kn}),u.jsxs("div",{className:"text-xs font-mono text-neutral-600 pt-2 border-t border-neutral-100 flex items-center justify-between",children:[u.jsxs("span",{children:["Sport: ",p.event]}),u.jsx("span",{className:"text-emerald-700 font-bold",children:"KSHA Life Member"})]})]},p.sNo))}),l==="umpires"&&u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:rE.map(p=>u.jsxs("div",{className:"p-6 rounded-2xl bg-white border border-[#E6DAD8] hover:border-[#E3000F] transition-colors space-y-3 shadow-xs",children:[u.jsxs("span",{className:"text-[10px] font-mono uppercase tracking-wider text-[#E3000F] font-bold block",children:["OFFICIAL UMPIRE #",p.sNo]}),u.jsx("h4",{className:"disp text-2xl text-black",children:p.name}),u.jsx("p",{className:"font-kannada text-xs font-bold text-neutral-500",children:p.name_kn}),u.jsx("p",{className:"text-xs text-[#3B3330] leading-relaxed pt-2 border-t border-neutral-100",children:p.cadre})]},p.sNo))})]})}),u.jsx(dE,{athlete:e,onClose:()=>n(null),lang:s})]})},Qm=[{nodeId:"node44",en:"Hockey Stadium",kn:"ಹಾಕಿ ಕ್ರೀಡಾಂಗಣ",category:"Main Arena"},{nodeId:"node41",en:"Bird's Eye View",kn:"ಪಕ್ಷಿನೋಟ",category:"Aerial"},{nodeId:"node11",en:"Entrance",kn:"ಪ್ರವೇಶ ದ್ವಾರ",category:"Grounds"},{nodeId:"node10",en:"Reception",kn:"ಸ್ವಾಗತ ಕೊಠಡಿ",category:"Clubhouse"},{nodeId:"node16",en:"Banquet & Party Halls",kn:"ಔತಣ ಕೂಟದ ಸಭಾಂಗಣಗಳು",category:"Events"},{nodeId:"node24",en:"Accommodation / Rooms",kn:"ಅತಿಥಿ ಕೊಠಡಿಗಳು",category:"Stay"},{nodeId:"node4",en:"Restaurants & Dining",kn:"ಊಟದ ಕೊಠಡಿಗಳು",category:"Dining"},{nodeId:"node34",en:"Sports Rehab Center",kn:"ಕ್ರೀಡಾ ಪುನರ್ವಸತಿ ಕೇಂದ್ರ",category:"Sports"},{nodeId:"node1",en:"Gymnasium",kn:"ಜಿಮ್",category:"Fitness"},{nodeId:"node28",en:"Indoor Games & Billiards",kn:"ಒಳಾಂಗಣ ಕ್ರೀಡೆಗಳು",category:"Recreation"}],pE=({lang:s})=>{const[e,n]=et.useState(Qm[0]),r=et.useRef(null),o=()=>{!document.fullscreenElement&&r.current?r.current.requestFullscreen().catch(()=>{}):document.exitFullscreen&&document.exitFullscreen().catch(()=>{})};return u.jsx("section",{id:"colosseum",className:"relative py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E6DAD8] overflow-hidden",children:u.jsxs("div",{className:"max-w-7xl mx-auto relative z-10",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-10",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FBF8F7] border border-[#E6DAD8] text-[11px] font-mono tracking-[0.25em] text-[#E3000F] uppercase mb-4 font-bold shadow-xs",children:[u.jsx(nv,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"CHAPTER V · 360° IMMERSIVE PANORAMA"})]}),u.jsx("h2",{className:"disp text-4xl sm:text-6xl text-black tracking-tight mb-2",children:s==="kn"?"೩೬೦° ವರ್ಚುವಲ್ ಪ್ರವಾಸ":"STADIUM & CLUBHOUSE 360° TOUR"}),u.jsx("p",{lang:"kn",className:"font-kannada text-lg sm:text-xl font-bold text-[#E3000F] tracking-wide mb-3",children:s==="kn"?"ಕೆ.ಎಸ್.ಎಚ್.ಎ ಕ್ರೀಡಾಂಗಣ ಮತ್ತು ಕ್ಲಬ್ ಹೌಸ್ ನೈಜ ವೀಕ್ಷಣೆ":"ಕರ್ನಾಟಕ ರಾಜ್ಯ ಹಾಕಿ ಸಂಸ್ಥೆ · ಲ್ಯಾಂಗ್‌ಫೋರ್ಡ್ ಟೌನ್"}),u.jsx("p",{className:"whisper text-xl sm:text-2xl text-[#3B3330] leading-snug",children:s==="kn"?"ಲ್ಯಾಂಗ್‌ಫೋರ್ಡ್ ಟೌನ್‌ನಲ್ಲಿರುವ ಕೆ.ಎಸ್.ಎಚ್.ಎ ಹಾಕಿ ಕ್ರೀಡಾಂಗಣ ಮತ್ತು ಕ್ಲಬ್ ಹೌಸ್‌ನ ನೈಜ ೩೬೦° ಛಾಯಾಚಿತ್ರಿತ ಪ್ರವಾಸ. ಯಾವುದೇ ಪ್ರದೇಶವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ ನೇರವಾಗಿ ಅನ್ವೇಷಿಸಿ.":"A real, photographed 360° interactive walkthrough of the KSHA Hockey Stadium and Clubhouse at Langford Town. Select an area below to jump directly, or navigate hotspots inside the viewer."})]}),u.jsxs("div",{className:"mb-6",children:[u.jsxs("div",{className:"flex items-center justify-between gap-4 mb-3",children:[u.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono font-bold text-neutral-800 uppercase tracking-wider",children:[u.jsx(av,{className:"w-4 h-4 text-[#E3000F]"}),u.jsx("span",{children:s==="kn"?"ಪ್ರದೇಶವನ್ನು ಆಯ್ಕೆಮಾಡಿ (೧೦ ವಲಯಗಳು)":"Select Facility Zone (10 Areas)"})]}),u.jsxs("div",{className:"text-[11px] font-mono text-neutral-500 hidden sm:block",children:[s==="kn"?"ವೀಕ್ಷಿಸುತ್ತಿರುವುದು: ":"Now Viewing: ",u.jsx("strong",{className:"text-black font-semibold",children:s==="kn"?e.kn:e.en})]})]}),u.jsx("div",{className:"flex flex-wrap gap-2",children:Qm.map(l=>{const d=e.nodeId===l.nodeId;return u.jsxs("button",{onClick:()=>n(l),className:`px-3.5 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 border ${d?"bg-[#E3000F] text-white border-[#E3000F] font-bold shadow-sm":"bg-[#FBF8F7] text-neutral-800 border-[#E6DAD8] hover:border-black hover:text-black font-medium"}`,"aria-pressed":d,children:[u.jsx(af,{className:`w-3 h-3 ${d?"text-white":"text-[#E3000F]"}`}),u.jsx("span",{children:s==="kn"?l.kn:l.en})]},l.nodeId)})})]}),u.jsxs("div",{ref:r,className:"relative rounded-2xl overflow-hidden bg-black border border-[#E6DAD8] shadow-2xl",children:[u.jsxs("div",{className:"bg-neutral-900 text-white px-4 sm:px-6 py-3 flex items-center justify-between border-b border-neutral-800",children:[u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"}),u.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono",children:[u.jsx("span",{className:"text-neutral-400 uppercase",children:s==="kn"?"ಸಕ್ರಿಯ ವೀಕ್ಷಣೆ:":"ACTIVE SCENE:"}),u.jsx("span",{className:"font-bold text-white tracking-wide",children:s==="kn"?e.kn:e.en}),u.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 uppercase hidden sm:inline-block",children:e.category})]})]}),u.jsx("div",{className:"flex items-center gap-2",children:u.jsxs("button",{type:"button",onClick:o,className:"px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white text-xs font-mono flex items-center gap-1.5 transition-colors border border-white/20",title:"Toggle Fullscreen",children:[u.jsx(dv,{className:"w-3.5 h-3.5"}),u.jsx("span",{className:"hidden sm:inline",children:s==="kn"?"ಪೂರ್ಣ ಪರದೆ":"Fullscreen"})]})})]}),u.jsx("div",{className:"relative w-full h-[520px] sm:h-[620px] lg:h-[700px] bg-black",children:u.jsx("iframe",{title:`KSHA 360 Tour - ${e.en}`,src:`/virtual-tour/index.html#${e.nodeId}`,className:"w-full h-full border-0 block",allow:"fullscreen; accelerometer; gyroscope; xr-spatial-tracking",allowFullScreen:!0,loading:"lazy"},e.nodeId)}),u.jsxs("div",{className:"bg-[#FBF8F7] px-4 sm:px-6 py-3 border-t border-[#E6DAD8] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#5C5350]",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#E3000F]"}),u.jsx("span",{children:s==="kn"?"ವೀಕ್ಷಣೆಯನ್ನು ತಿರುಗಿಸಲು ಮೌಸ್ ಅಥವಾ ಬೆರಳಿನಿಂದ ಎಳೆಯಿರಿ. ಮುಂದಿನ ಸ್ಥಳಗಳಿಗೆ ಹೋಗಲು ಹಾಟ್‌ಸ್ಪಾಟ್‌ಗಳನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ.":"Click & drag inside the viewer to look around 360°. Click on screen hotspots to move between rooms."})]}),u.jsx("div",{className:"text-[11px] text-neutral-500",children:"Pano2VR 360° Engine · KSHA Langford Town"})]})]})]})})},mE=({lang:s})=>{const[e,n]=et.useState(Yx[0]),[r,o]=et.useState(!1),[l,d]=et.useState(!1),[h,m]=et.useState(""),[p,v]=et.useState(""),[S,g]=et.useState("Life Member"),b=T=>{T.preventDefault(),gt.playStickStrike(),gt.playGloryChime(),d(!0)};return u.jsxs("section",{id:"club",className:"relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E6DAD8]",children:[u.jsxs("div",{className:"max-w-7xl mx-auto",children:[u.jsxs("div",{className:"mb-14",children:[u.jsx("p",{className:"chap mb-3",children:"Chapter V"}),u.jsx("h2",{className:"disp text-5xl sm:text-7xl lg:text-9xl text-black mb-4",children:s==="kn"?"ಪ್ರೈವೇಟ್ ಕ್ಲಬ್":"The Club"}),u.jsx("p",{className:"whisper text-2xl sm:text-3xl lg:text-4xl text-black max-w-3xl mb-4 leading-snug",children:"“After the final whistle, the evening begins.”"}),u.jsx("p",{className:"text-base sm:text-lg text-[#3B3330] max-w-3xl font-sans mb-12",children:"The Mini Sports Complex opened on 1 February 2026, welcoming members, their dependents and visiting non-members into an aristocratic sporting sanctuary in the heart of Bengaluru."}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-6 border-t border-[#C9B8B5]",children:[u.jsx(Ln,{staggerIndex:0,children:u.jsxs("div",{className:"border-t-2 border-[#C9B8B5] pt-4 p-4 rounded-xl bg-white/70 backdrop-blur-xs border border-[#E6DAD8]/60 shadow-xs h-full",children:[u.jsx("div",{className:"disp goldtxt text-6xl sm:text-7xl lg:text-8xl",children:"3"}),u.jsx("h3",{className:"disp text-2xl text-black mt-1",children:"Badminton courts"}),u.jsx("p",{className:"text-xs text-[#3B3330] mt-2 font-sans",children:"Canadian maple hardwood shuttle courts, run by certified national badminton professionals."})]})}),u.jsx(Ln,{staggerIndex:1,children:u.jsxs("div",{className:"border-t-2 border-[#C9B8B5] pt-4 p-4 rounded-xl bg-white/70 backdrop-blur-xs border border-[#E6DAD8]/60 shadow-xs h-full",children:[u.jsx("div",{className:"disp goldtxt text-6xl sm:text-7xl lg:text-8xl",children:"8"}),u.jsx("h3",{className:"disp text-2xl text-black mt-1",children:"Billiards & snooker tables"}),u.jsx("p",{className:"text-xs text-[#3B3330] mt-2 font-sans",children:"Championship English slate draped in Strachan 6811 Gold cloth, with master coaching."})]})}),u.jsx(Ln,{staggerIndex:2,children:u.jsxs("div",{className:"border-t-2 border-[#C9B8B5] pt-4 p-4 rounded-xl bg-white/70 backdrop-blur-xs border border-[#E6DAD8]/60 shadow-xs h-full",children:[u.jsx("div",{className:"disp goldtxt text-6xl sm:text-7xl lg:text-8xl",children:"250"}),u.jsx("h3",{className:"disp text-2xl text-black mt-1",children:"Guests on the terrace"}),u.jsx("p",{className:"text-xs text-[#3B3330] mt-2 font-sans",children:"The panoramic third-floor function hall seats up to 250 with open floodlit pitch vistas."})]})}),u.jsx(Ln,{staggerIndex:3,children:u.jsxs("div",{className:"border-t-2 border-[#C9B8B5] pt-4 p-4 rounded-xl bg-white/70 backdrop-blur-xs border border-[#E6DAD8]/60 shadow-xs h-full",children:[u.jsx("div",{className:"disp goldtxt text-6xl sm:text-7xl lg:text-8xl",children:"12"}),u.jsx("h3",{className:"disp text-2xl text-black mt-1",children:"Renovated guest rooms"}),u.jsx("p",{className:"text-xs text-[#3B3330] mt-2 font-sans",children:"Boutique air-conditioned guest suites including an executive Presidential VIP suite."})]})})]})]}),u.jsx("div",{className:"my-14 p-8 sm:p-12 rounded-2xl bg-[#FBF8F7] border border-[#E6DAD8]",children:u.jsxs("div",{className:"flex flex-col lg:flex-row items-center justify-between gap-8",children:[u.jsxs("div",{className:"space-y-3 max-w-2xl",children:[u.jsx("span",{className:"px-3 py-1 rounded bg-[#FFF1CC] text-[#6B4600] border border-[#D9B04A] font-mono text-xs font-bold uppercase",children:"ADMISSION NOTICE · 1 JANUARY 2027 REVISION"}),u.jsx("h3",{className:"disp text-3xl sm:text-4xl text-black",children:"Request Private Club Membership Dossier"}),u.jsx("p",{className:"text-sm text-[#3B3330] font-sans",children:"Affiliation with 168 reciprocal elite clubs nationwide (including Bowring Institute, Bangalore Club, Century Club, Madras Cricket Club, Calcutta CC&FC). Membership admission fee rises to ₹5,00,000 + GST from 1 January 2027."})]}),u.jsx("button",{onClick:()=>{gt.playGloryChime(),o(!0)},className:"inline-flex items-center justify-center min-h-[56px] px-8 bg-[#E3000F] hover:bg-[#9E000B] text-white font-mono font-bold text-xs tracking-[0.14em] uppercase transition-all shadow-md shrink-0",children:"Request Membership Dossier"})]})}),u.jsxs("div",{className:"mt-16",children:[u.jsxs("div",{className:"flex items-baseline justify-between mb-8 pb-4 border-b border-[#E6DAD8]",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"disp text-3xl sm:text-4xl text-black",children:"168 Reciprocal Elite Clubs"}),u.jsx("p",{className:"text-xs font-mono text-[#5C5350] uppercase tracking-wider mt-1",children:"Pan-Indian Historic Gentlemen’s Club Affiliations"})]}),u.jsx("span",{className:"text-xs font-mono text-[#E3000F] font-bold",children:"ESTD. 1868 – 1946"})]}),u.jsxs("div",{className:"mt-16 pt-10 border-t border-[#E6DAD8]",children:[u.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-xs font-mono text-[#E3000F] uppercase tracking-wider font-bold",children:"OFFICIAL RESOLUTION · EFFECTIVE 1 FEB 2026"}),u.jsx("h3",{className:"disp text-3xl sm:text-4xl text-black mt-1",children:"Party Halls & Event Spaces"})]}),u.jsx("span",{className:"text-xs font-mono text-[#5C5350]",children:"Contact: Sri R. Viswanath Singh (99809 05385)"})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:[u.jsxs("div",{className:"p-5 rounded-2xl bg-white border border-[#E6DAD8] hover:border-black transition-colors space-y-2",children:[u.jsx("span",{className:"text-[10px] font-mono text-[#E3000F] font-bold uppercase",children:"20 – 40 PAX"}),u.jsx("h4",{className:"disp text-xl text-black",children:"Green Party Hall 1 & 2"}),u.jsx("p",{className:"text-xs text-[#3B3330]",children:"₹2,360 (single hall) or ₹3,570 (combined halls) incl. GST. Ideal for small family gatherings and meetings."})]}),u.jsxs("div",{className:"p-5 rounded-2xl bg-white border border-[#E6DAD8] hover:border-black transition-colors space-y-2",children:[u.jsx("span",{className:"text-[10px] font-mono text-[#E3000F] font-bold uppercase",children:"50 PAX · ALL DAYS"}),u.jsx("h4",{className:"disp text-xl text-black",children:"Ground Floor A/C Hall"}),u.jsx("p",{className:"text-xs text-[#3B3330]",children:"₹4,720 incl. 18% GST. Fully air-conditioned hall for corporate reviews, briefings and team dinners."})]}),u.jsxs("div",{className:"p-5 rounded-2xl bg-white border border-[#E6DAD8] hover:border-black transition-colors space-y-2",children:[u.jsx("span",{className:"text-[10px] font-mono text-[#E3000F] font-bold uppercase",children:"60 – 70 PAX · AIR CONDITIONED"}),u.jsx("h4",{className:"disp text-xl text-black",children:"2nd Floor A/C Party Hall"}),u.jsx("p",{className:"text-xs text-[#3B3330]",children:"₹8,760 for get-togethers · ₹12,300 for birthdays (incl. GST & cleaning). Panoramic turf vantage."})]}),u.jsxs("div",{className:"p-5 rounded-2xl bg-white border border-[#E6DAD8] hover:border-black transition-colors space-y-2",children:[u.jsx("span",{className:"text-[10px] font-mono text-[#E3000F] font-bold uppercase",children:"100 – 250+ PAX"}),u.jsx("h4",{className:"disp text-xl text-black",children:"Roof Terrace Party Hall"}),u.jsx("p",{className:"text-xs text-[#3B3330]",children:"₹9,940 to ₹12,300 for socials · ₹30,000 for grand marriages/receptions under open night floodlights."})]})]})]}),u.jsxs("div",{className:"mt-12 p-6 sm:p-8 rounded-2xl bg-[#FBF8F7] border border-[#E6DAD8]",children:[u.jsx("h4",{className:"disp text-2xl text-black mb-4",children:"Official Club House Protocols & Timings"}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-mono",children:[u.jsxs("div",{className:"space-y-1",children:[u.jsx("span",{className:"text-neutral-500 uppercase block font-bold text-[10px]",children:"Forenoon Session"}),u.jsx("p",{className:"text-sm font-bold text-black",children:"11:30 AM – 3:30 PM"}),u.jsx("p",{className:"text-[11px] text-[#5C5350]",children:"Last order: 2:45 PM · Premises close: 4:00 PM"})]}),u.jsxs("div",{className:"space-y-1",children:[u.jsx("span",{className:"text-neutral-500 uppercase block font-bold text-[10px]",children:"Evening Session"}),u.jsx("p",{className:"text-sm font-bold text-black",children:"6:30 PM – 11:00 PM"}),u.jsx("p",{className:"text-[11px] text-[#5C5350]",children:"Last order: 10:30 PM · Premises close: 11:15 PM"})]}),u.jsxs("div",{className:"space-y-1",children:[u.jsx("span",{className:"text-neutral-500 uppercase block font-bold text-[10px]",children:"Annual Subscription"}),u.jsx("p",{className:"text-sm font-bold text-black",children:"₹4,248 / Year"}),u.jsx("p",{className:"text-[11px] text-[#5C5350]",children:"₹3,000 fee + ₹600 Sports Fund + 18% GST (Due 30 June)"})]})]})]}),u.jsxs("div",{className:"mt-16",children:[u.jsxs("div",{className:"flex items-baseline justify-between mb-8 pb-4 border-b border-[#E6DAD8]",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"disp text-3xl sm:text-4xl text-black",children:"168 Reciprocal Elite Clubs"}),u.jsx("p",{className:"text-xs font-mono text-[#5C5350] uppercase tracking-wider mt-1",children:"Pan-Indian Historic Gentlemen’s Club Affiliations"})]}),u.jsx("span",{className:"text-xs font-mono text-[#E3000F] font-bold",children:"ESTD. 1868 – 1946"})]}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:eE.map((T,N)=>u.jsxs("div",{className:"p-5 rounded-xl bg-white border border-[#E6DAD8] space-y-2 hover:border-black transition-colors",children:[u.jsxs("span",{className:"text-[10px] font-mono text-[#5C5350] uppercase",children:["ESTD. ",T.founded," · ",T.city]}),u.jsx("h4",{className:"disp text-xl text-black",children:T.name}),u.jsx("p",{className:"text-xs text-[#3B3330] leading-relaxed",children:T.privileges})]},N))})]})]})]}),r&&u.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn",children:u.jsxs("div",{className:"relative w-full max-w-lg bg-white rounded-2xl border border-[#E6DAD8] shadow-2xl overflow-hidden p-6 sm:p-8",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-[#E6DAD8] pb-4 mb-6",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-[10px] font-mono text-[#E3000F] uppercase tracking-widest font-bold",children:"ESTD. 1937 · PRIVATE CLUB WING"}),u.jsx("h3",{className:"disp text-3xl text-black",children:"Club Membership Dossier"})]}),u.jsx("button",{onClick:()=>o(!1),className:"p-1 rounded bg-neutral-100 hover:bg-neutral-200 text-black",children:u.jsx(Wl,{className:"w-5 h-5"})})]}),l?u.jsxs("div",{className:"text-center py-8 space-y-4",children:[u.jsx("div",{className:"w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto",children:u.jsx(ox,{className:"w-8 h-8"})}),u.jsx("h4",{className:"disp text-2xl text-black",children:"Dossier Request Recorded"}),u.jsxs("p",{className:"text-xs text-[#3B3330] max-w-sm mx-auto font-sans",children:["The Honorary Secretary’s Secretariat has queued your prospectus. An imperial dossier and application token will be dispatched to ",p||h,"."]}),u.jsx("button",{onClick:()=>{o(!1),d(!1)},className:"px-6 py-2.5 rounded bg-black text-white font-mono text-xs uppercase tracking-wider",children:"Done"})]}):u.jsxs("form",{onSubmit:b,className:"space-y-4 font-mono text-xs",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-[#5C5350] uppercase mb-1",children:"Applicant Full Name"}),u.jsx("input",{type:"text",required:!0,value:h,onChange:T=>m(T.target.value),placeholder:"Enter full legal name...",className:"w-full p-2.5 rounded-lg border border-[#C9B8B5] text-black focus:outline-none focus:border-[#E3000F]"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-[#5C5350] uppercase mb-1",children:"Mobile / WhatsApp Number"}),u.jsx("input",{type:"tel",required:!0,value:p,onChange:T=>v(T.target.value),placeholder:"+91 98450 00000",className:"w-full p-2.5 rounded-lg border border-[#C9B8B5] text-black focus:outline-none focus:border-[#E3000F]"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-[#5C5350] uppercase mb-1",children:"Category of Membership"}),u.jsxs("select",{value:S,onChange:T=>g(T.target.value),className:"w-full p-2.5 rounded-lg border border-[#C9B8B5] text-black bg-white focus:outline-none focus:border-[#E3000F]",children:[u.jsx("option",{children:"Life Member (₹5,00,000 + GST)"}),u.jsx("option",{children:"Life Associate (Sports Fraternity)"}),u.jsx("option",{children:"Corporate Institutional Patron"}),u.jsx("option",{children:"Permanent Olympian / International Honoris Causa"})]})]}),u.jsx("div",{className:"p-3 rounded-lg bg-[#FBF8F7] border border-[#E6DAD8] text-[11px] text-[#5C5350] font-sans",children:"By submitting, you acknowledge that KSHA is an independent registered society under Mysore Societies Act 1937 with statutory committee balloting."}),u.jsx("button",{type:"submit",className:"w-full py-3 bg-[#E3000F] hover:bg-[#9E000B] text-white font-mono font-bold text-xs uppercase tracking-[0.14em] transition-all rounded shadow-md",children:"Submit Membership Request"})]})]})})]})},ex=[{id:"green-halls",name:"Green Party Halls",name_kn:"ಹಸಿರು ಪಾರ್ಟಿ ಹಾಲ್ (೧ ಮತ್ತು ೨)",floor:"Ground Level / Lawn",capacity:"20 – 40 Guests",purpose:"Intimate family celebrations, committee meetings, and team luncheons opening directly into the verdant club lawns.",startingPrice:2360,tiers:[{label:"Single Hall (Hall 1 or Hall 2)",capacity:"20 Pax",base:2e3,gst:360,cleaning:0,total:2360,note:"Ideal for small private dinners & family gatherings"},{label:"Combined Halls (Hall 1 & 2 Joint)",capacity:"40 Pax",base:3e3,gst:570,cleaning:0,total:3570,note:"Double hall setup with expansive lawn access"}]},{id:"ground-floor-ac",name:"Ground Floor A/C Party Hall",name_kn:"ನೆಲ ಮಹಡಿ ಹವಾನಿಯಂತ್ರಿತ ಸಭಾಂಗಣ",floor:"Ground Floor",capacity:"50 Guests",purpose:"Fully climate-controlled banqueting hall adjacent to the main dining wing, suited for receptions and corporate gatherings.",startingPrice:4720,tiers:[{label:"Standard Booking",capacity:"50 Pax",base:4e3,gst:720,cleaning:0,total:4720,note:"Air-conditioned comfort with dedicated service corridor"}]},{id:"ground-floor-chat",name:"Ground Floor Hall (Snack Wing)",name_kn:"ಚಾಟ್ ವಿಭಾಗದ ಪಕ್ಕದ ಸಭಾಂಗಣ",floor:"Ground Floor",capacity:"35 Guests",purpose:"Casual social get-togethers and birthday teas positioned adjacent to the popular club snack bar and chat section.",startingPrice:3540,tiers:[{label:"Standard Booking",capacity:"35 Pax",base:3e3,gst:540,cleaning:0,total:3540,note:"Direct connectivity to club fast-food counters"}]},{id:"skywalk-hall",name:"Sky Walk Party Hall",name_kn:"ಸ್ಕೈ ವಾಕ್ ಪಾರ್ಟಿ ಹಾಲ್",floor:"Mezzanine Level",capacity:"45 Guests",purpose:"Elevated social venue with open-air architectural breeze and panoramic perspective overlooking the stadium walkway.",startingPrice:3540,tiers:[{label:"Standard Booking",capacity:"45 Pax",base:3e3,gst:540,cleaning:0,total:3540,note:"Pleasant evening breeze with spectator promenade vista"}]},{id:"second-floor-ac",name:"2nd Floor A/C Banquet Hall",name_kn:"೨ನೇ ಮಹಡಿ ಎಸಿ ಸಭಾಂಗಣ",floor:"Second Floor",capacity:"60 – 70 Guests",purpose:"Executive multi-purpose conference and banquet hall fitted with high-efficiency HVAC, stage area, and audio-visual capability.",startingPrice:8760,tiers:[{label:"Normal Get-Together",capacity:"60 – 70 Pax",base:7e3,gst:1260,cleaning:500,total:8760,note:"Corporate meets, seminars & celebratory family lunches"},{label:"Birthday & Festive Parties",capacity:"60 – 70 Pax",base:1e4,gst:1800,cleaning:500,total:12300,note:"Includes buffet staging space and intensive cleanup surcharge"}]},{id:"roof-terrace",name:"Roof Terrace Open-Air Pavilion",name_kn:"ರೂಫ್ ಟೆರೇಸ್ ಮುಕ್ತ ಸಭಾಂಗಣ",floor:"Roof Level",capacity:"Up to 250 Guests",purpose:"The crown jewel of the clubhouse. Starlit rooftop venue for grand wedding ceremonies, sangeets, cocktail receptions, and corporate galas.",startingPrice:9900,tiers:[{label:"Intimate Gathering (< 100 Pax)",capacity:"< 100 Pax",base:8e3,gst:1440,cleaning:500,total:9900,note:"Rooftop breeze setting with evening decorative illumination"},{label:"Grand Gala (> 100 Pax)",capacity:"100 – 150 Pax",base:1e4,gst:1800,cleaning:500,total:12200,note:"Expansive terrace arrangement with buffet perimeter"},{label:"Theme Night & Birthday Bash",capacity:"Up to 150 Pax",base:15e3,gst:2700,cleaning:500,total:18200,note:"Customized ambient lighting with high-load power setup"},{label:"Weddings & Engagements",capacity:"150 – 250 Pax",base:25e3,gst:4500,cleaning:500,total:3e4,note:"Grand stage facility. Bookings > 4 hrs subject to ₹10K surcharge"}]},{id:"lawn-garden",name:"Open Lawn Party Area",name_kn:"ತೆರೆದ ಲಾನ್ ಪಾರ್ಟಿ ಜಾಗ",floor:"Ground Garden",capacity:"50 Guests",purpose:"Lush natural manicured turf setting under Bengaluru skies, suited for evening cocktail hours and relaxed sports gatherings.",startingPrice:2360,tiers:[{label:"Weekday Sessions (Mon – Thu)",capacity:"50 Pax",base:2e3,gst:360,cleaning:0,total:2360,note:"Quiet weekday privilege rate"},{label:"Weekend & Holiday Sessions (Fri – Sun)",capacity:"50 Pax",base:2500,gst:450,cleaning:0,total:2950,note:"Prime weekend reservation under natural canopy"}]}],tx=[{id:"room-small",name:"Small Guest Room",name_kn:"ಕಿರು ಅತಿಥಿ ಕೊಠಡಿ",type:"Single / Compact Double",baseRent:1100,cgst:66,sgst:66,total:1232,features:["Attached En-Suite Bath","Work Table & Chair","Clubhouse Dining Access","Direct Courtyard View"]},{id:"room-standard",name:"Standard Guest Room (Room 202)",name_kn:"ಪ್ರಮಾಣಿತ ಅತಿಥಿ ಕೊಠಡಿ",type:"Executive Twin / Double",baseRent:1500,cgst:90,sgst:90,total:1680,features:["Split Air Conditioning","Smart Flat Screen TV","High-Speed Broadband","Renovated Modern Linens","Stadium View Window"]},{id:"room-suite-201",name:"Superior Heritage Suite (Room 201)",name_kn:"ಸುಪೀರಿಯರ್ ಹೆರಿಟೇಜ್ ಸೂಟ್",type:"Premium Executive Suite",baseRent:1800,cgst:108,sgst:108,total:2016,features:["Separate Living Room Lounge","King Sized Bed","Private Viewing Balcony","Modernized Granite Bath","Complimentary WiFi"]}],xE=({lang:s="en"})=>{const[e,n]=et.useState("halls"),[r,o]=et.useState(null),[l,d]=et.useState(0),[h,m]=et.useState(null),[p,v]=et.useState(!1),[S,g]=et.useState(""),[b,T]=et.useState("evening"),[N,y]=et.useState(""),[_,I]=et.useState(""),[z,C]=et.useState(""),[D,P]=et.useState(!1),O=(k,H=0)=>{o(k),d(H),m(null),v(!0),P(!1)},w=k=>{m(k),o(null),v(!0),P(!1)},F=k=>{k.preventDefault(),P(!0)};return u.jsxs("section",{id:"booking-facilities",className:"py-24 px-4 sm:px-6 lg:px-8 bg-[#FCFAF9] border-t border-[#E6DAD8]",children:[u.jsxs("div",{className:"max-w-7xl mx-auto",children:[u.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#E6DAD8]",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[#E3000F] font-semibold mb-3",children:[u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#E3000F]"}),u.jsx("span",{children:"ESTD. 1937 · CLUBHOUSE VENUES & LODGING"})]}),u.jsx("h2",{className:"disp text-4xl sm:text-6xl text-black tracking-tight leading-none",children:s==="kn"?"ಪಾರ್ಟಿ ಹಾಲ್‌ಗಳು & ಕೊಠಡಿಗಳು":"PARTY HALLS & GUEST ROOMS"}),u.jsx("p",{className:"font-kannada text-sm font-bold text-neutral-500 mt-2",children:s==="kn"?"ಅಧಿಕೃತ ಕಾರ್ಯಕಾರಿ ಸಮಿತಿ ಅನುಮೋದಿತ ಶುಲ್ಕಗಳು":"ಕರ್ನಾಟಕ ರಾಜ್ಯ ಹಾಕಿ ಸಂಸ್ಥೆ · ಲ್ಯಾಂಗ್‌ಫೋರ್ಡ್ ಟೌನ್"})]}),u.jsx("p",{className:"whisper text-lg sm:text-xl text-[#5C5350] max-w-md leading-relaxed md:text-right",children:s==="kn"?"ಲ್ಯಾಂಗ್‌ಫೋರ್ಡ್ ಟೌನ್‌ನ ಕ್ರೀಡಾ ಸಂಕೀರ್ಣದಲ್ಲಿರುವ ೭ ಖಾಸಗಿ ಸಭಾಂಗಣಗಳು ಮತ್ತು ಸದಸ್ಯರ ವಿಶ್ರಾಂತಿ ಕೊಠಡಿಗಳು.":"Seven private gathering spaces and residential guest suites nestled within Langford Town. Official Executive Committee authorized tariffs."})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E6DAD8] border-b border-[#E6DAD8] py-4 text-xs font-mono text-[#5C5350]",children:[u.jsxs("div",{className:"py-2 md:py-0 md:pr-6 flex items-center justify-between",children:[u.jsx("span",{className:"text-neutral-400 uppercase tracking-wider text-[10px]",children:"Session Hours"}),u.jsx("span",{className:"text-black font-semibold",children:"Lunch 11:30–15:30 · Dinner 18:30–23:00"})]}),u.jsxs("div",{className:"py-2 md:py-0 md:px-6 flex items-center justify-between",children:[u.jsx("span",{className:"text-neutral-400 uppercase tracking-wider text-[10px]",children:"Halls & Accounts"}),u.jsxs("div",{className:"text-right",children:[u.jsx("span",{className:"text-black font-semibold",children:"Sri R. Viswanath Singh"}),u.jsx("a",{href:"tel:9980905385",className:"block text-[#E3000F] hover:underline font-bold mt-0.5",children:"99809 05385"})]})]}),u.jsxs("div",{className:"py-2 md:py-0 md:pl-6 flex items-center justify-between",children:[u.jsx("span",{className:"text-neutral-400 uppercase tracking-wider text-[10px]",children:"Guest Rooms Desk"}),u.jsxs("div",{className:"text-right",children:[u.jsx("span",{className:"text-black font-semibold",children:"Sri A. Francis"}),u.jsx("a",{href:"tel:9886516936",className:"block text-[#E3000F] hover:underline font-bold mt-0.5",children:"98865 16936"})]})]})]}),u.jsxs("div",{className:"flex items-center gap-8 border-b border-[#E6DAD8] mt-8 mb-10 overflow-x-auto text-xs font-mono tracking-wider uppercase",children:[u.jsxs("button",{onClick:()=>n("halls"),className:`pb-3 font-semibold transition-all relative whitespace-nowrap ${e==="halls"?"text-black font-bold":"text-neutral-400 hover:text-black"}`,children:[u.jsx("span",{children:s==="kn"?"ಪಾರ್ಟಿ ಹಾಲ್‌ಗಳು (೭)":"Party Halls (7 Venues)"}),e==="halls"&&u.jsx("span",{className:"absolute bottom-0 left-0 right-0 h-0.5 bg-[#E3000F]"})]}),u.jsxs("button",{onClick:()=>n("rooms"),className:`pb-3 font-semibold transition-all relative whitespace-nowrap ${e==="rooms"?"text-black font-bold":"text-neutral-400 hover:text-black"}`,children:[u.jsx("span",{children:s==="kn"?"ಅತಿಥಿ ಕೊಠಡಿಗಳು (೩)":"Guest Suites (3 Tiers)"}),e==="rooms"&&u.jsx("span",{className:"absolute bottom-0 left-0 right-0 h-0.5 bg-[#E3000F]"})]}),u.jsxs("button",{onClick:()=>n("table"),className:`pb-3 font-semibold transition-all relative whitespace-nowrap ${e==="table"?"text-black font-bold":"text-neutral-400 hover:text-black"}`,children:[u.jsx("span",{children:s==="kn"?"ಶುಲ್ಕ ಕೋಷ್ಟಕ":"Tariff Comparison"}),e==="table"&&u.jsx("span",{className:"absolute bottom-0 left-0 right-0 h-0.5 bg-[#E3000F]"})]}),u.jsxs("button",{onClick:()=>n("guidelines"),className:`pb-3 font-semibold transition-all relative whitespace-nowrap ${e==="guidelines"?"text-black font-bold":"text-neutral-400 hover:text-black"}`,children:[u.jsx("span",{children:s==="kn"?"ನಿಯಮಗಳು & ವೋಟಿಂಗ್":"Rules & Guidelines"}),e==="guidelines"&&u.jsx("span",{className:"absolute bottom-0 left-0 right-0 h-0.5 bg-[#E3000F]"})]})]}),e==="halls"&&u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:ex.map((k,H)=>{k.tiers[0];const Z=k.tiers.length>1;return u.jsx(Ln,{staggerIndex:H%6,className:"h-full",children:u.jsxs("article",{className:"bg-white rounded-xl border border-[#E6DAD8] hover:border-black transition-all duration-300 flex flex-col justify-between p-6 shadow-xs hover:shadow-md group h-full",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between text-[11px] font-mono text-neutral-500 mb-3 pb-2 border-b border-neutral-100",children:[u.jsx("span",{className:"uppercase tracking-wider font-semibold text-neutral-700",children:k.floor}),u.jsxs("span",{className:"flex items-center gap-1 text-[#E3000F] font-bold",children:[u.jsx(Mv,{className:"w-3 h-3"}),k.capacity]})]}),u.jsx("h3",{className:"disp text-2xl text-black group-hover:text-[#E3000F] transition-colors leading-tight",children:k.name}),u.jsx("p",{className:"font-kannada text-xs text-neutral-400 font-medium mt-1 mb-3",children:k.name_kn}),u.jsx("p",{className:"text-xs text-[#5C5350] leading-relaxed mb-6 font-sans",children:k.purpose}),u.jsxs("div",{className:"py-3 px-3.5 rounded-lg bg-[#FAF7F6] border border-[#EFE8E6] mb-5",children:[u.jsxs("div",{className:"flex items-baseline justify-between",children:[u.jsx("span",{className:"text-[10px] font-mono uppercase tracking-wider text-neutral-500",children:Z?"Starting from":"Total Payable"}),u.jsxs("div",{className:"text-right",children:[u.jsxs("span",{className:"font-mono text-lg font-bold text-black",children:["₹",k.startingPrice.toLocaleString("en-IN"),"/-"]}),u.jsx("span",{className:"text-[10px] font-mono text-neutral-400 block -mt-0.5",children:"incl. 18% GST"})]})]}),Z&&u.jsxs("p",{className:"text-[10px] font-mono text-neutral-500 mt-2 pt-2 border-t border-[#E8DFDD]",children:[k.tiers.length," event packages (₹",k.tiers[0].total.toLocaleString("en-IN")," – ₹",k.tiers[k.tiers.length-1].total.toLocaleString("en-IN"),")"]})]})]}),u.jsxs("button",{onClick:()=>O(k,0),className:"w-full py-2.5 px-4 rounded-lg bg-black text-white hover:bg-[#E3000F] font-mono text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-1.5",children:[u.jsx("span",{children:"Reserve / Inquire"}),u.jsx(em,{className:"w-3.5 h-3.5"})]})]})},k.id)})}),e==="rooms"&&u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:tx.map((k,H)=>u.jsx(Ln,{staggerIndex:H,className:"h-full",children:u.jsxs("article",{className:"bg-white rounded-xl border border-[#E6DAD8] hover:border-black transition-all duration-300 flex flex-col justify-between p-6 shadow-xs hover:shadow-md group h-full",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between text-[11px] font-mono text-neutral-500 mb-3 pb-2 border-b border-neutral-100",children:[u.jsx("span",{className:"uppercase tracking-wider font-semibold text-neutral-700",children:"EC Authorized Lodging"}),u.jsx("span",{className:"text-emerald-700 font-bold",children:k.type})]}),u.jsx("h3",{className:"disp text-2xl text-black group-hover:text-[#E3000F] transition-colors leading-tight",children:k.name}),u.jsx("p",{className:"font-kannada text-xs text-neutral-400 font-medium mt-1 mb-4",children:k.name_kn}),u.jsx("ul",{className:"space-y-2 mb-6 font-mono text-xs text-[#5C5350]",children:k.features.map((Z,ie)=>u.jsxs("li",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-1 h-1 rounded-full bg-[#E3000F]"}),u.jsx("span",{children:Z})]},ie))}),u.jsxs("div",{className:"py-3 px-3.5 rounded-lg bg-[#FAF7F6] border border-[#EFE8E6] mb-5 flex items-baseline justify-between",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-[10px] font-mono uppercase tracking-wider text-neutral-500 block",children:"Per Night Tariff"}),u.jsxs("span",{className:"text-[10px] font-mono text-neutral-400",children:["Base ₹",k.baseRent," + 12% GST"]})]}),u.jsxs("div",{className:"text-right",children:[u.jsxs("span",{className:"font-mono text-xl font-bold text-black",children:["₹",k.total.toLocaleString("en-IN"),"/-"]}),u.jsx("span",{className:"text-[10px] font-mono text-neutral-500 block",children:"net per night"})]})]})]}),u.jsxs("button",{onClick:()=>w(k),className:"w-full py-2.5 px-4 rounded-lg bg-black text-white hover:bg-[#E3000F] font-mono text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-1.5",children:[u.jsx("span",{children:"Book Guest Room"}),u.jsx(em,{className:"w-3.5 h-3.5"})]})]})},k.id))}),e==="table"&&u.jsx("div",{className:"bg-white rounded-xl border border-[#E6DAD8] overflow-hidden shadow-xs",children:u.jsx("div",{className:"overflow-x-auto",children:u.jsxs("table",{className:"w-full text-left font-mono text-xs",children:[u.jsx("thead",{children:u.jsxs("tr",{className:"bg-[#FAF7F6] border-b border-[#E6DAD8] text-neutral-600 uppercase text-[11px] tracking-wider",children:[u.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Venue / Space"}),u.jsx("th",{className:"py-3.5 px-3 font-bold",children:"Capacity"}),u.jsx("th",{className:"py-3.5 px-3 font-bold",children:"Level / Floor"}),u.jsx("th",{className:"py-3.5 px-3 font-bold text-right",children:"Base Rent"}),u.jsx("th",{className:"py-3.5 px-3 font-bold text-right",children:"GST"}),u.jsx("th",{className:"py-3.5 px-3 font-bold text-right",children:"Cleaning"}),u.jsx("th",{className:"py-3.5 px-4 font-bold text-right text-black",children:"Total Payable"}),u.jsx("th",{className:"py-3.5 px-4 font-bold text-center",children:"Action"})]})}),u.jsxs("tbody",{className:"divide-y divide-[#F0EBE9]",children:[ex.flatMap(k=>k.tiers.map((H,Z)=>u.jsxs("tr",{className:"hover:bg-neutral-50 transition-colors",children:[u.jsx("td",{className:"py-3 px-4 font-medium text-black",children:u.jsxs("div",{children:[u.jsx("span",{className:"font-semibold block",children:k.name}),u.jsx("span",{className:"text-[11px] text-neutral-400 font-sans",children:H.label})]})}),u.jsx("td",{className:"py-3 px-3 text-neutral-600",children:H.capacity}),u.jsx("td",{className:"py-3 px-3 text-neutral-600",children:k.floor}),u.jsxs("td",{className:"py-3 px-3 text-right text-neutral-600",children:["₹",H.base.toLocaleString("en-IN")]}),u.jsxs("td",{className:"py-3 px-3 text-right text-neutral-500",children:["₹",H.gst.toLocaleString("en-IN")]}),u.jsx("td",{className:"py-3 px-3 text-right text-neutral-500",children:H.cleaning>0?`₹${H.cleaning}`:"—"}),u.jsxs("td",{className:"py-3 px-4 text-right font-bold text-black",children:["₹",H.total.toLocaleString("en-IN"),"/-"]}),u.jsx("td",{className:"py-3 px-4 text-center",children:u.jsx("button",{onClick:()=>O(k,Z),className:"px-2.5 py-1 rounded border border-neutral-300 hover:border-black hover:bg-black hover:text-white transition-colors text-[10px] uppercase font-bold",children:"Inquire"})})]},`${k.id}-${Z}`))),u.jsx("tr",{className:"bg-[#FAF7F6] border-t-2 border-b border-[#E6DAD8]",children:u.jsx("td",{colSpan:8,className:"py-2.5 px-4 font-bold text-neutral-900 uppercase text-[10px] tracking-wider",children:"Executive Guest Rooms & Suites (Per Night Tariffs)"})}),tx.map(k=>u.jsxs("tr",{className:"hover:bg-neutral-50 transition-colors",children:[u.jsx("td",{className:"py-3 px-4 font-medium text-black",children:u.jsxs("div",{children:[u.jsx("span",{className:"font-semibold block",children:k.name}),u.jsx("span",{className:"text-[11px] text-neutral-400 font-sans",children:k.type})]})}),u.jsx("td",{className:"py-3 px-3 text-neutral-600",children:"2 Guests"}),u.jsx("td",{className:"py-3 px-3 text-neutral-600",children:"Clubhouse 2nd Flr"}),u.jsxs("td",{className:"py-3 px-3 text-right text-neutral-600",children:["₹",k.baseRent.toLocaleString("en-IN")]}),u.jsxs("td",{className:"py-3 px-3 text-right text-neutral-500",children:["₹",(k.cgst+k.sgst).toLocaleString("en-IN")]}),u.jsx("td",{className:"py-3 px-3 text-right text-neutral-500",children:"—"}),u.jsxs("td",{className:"py-3 px-4 text-right font-bold text-black",children:["₹",k.total.toLocaleString("en-IN"),"/-"]}),u.jsx("td",{className:"py-3 px-4 text-center",children:u.jsx("button",{onClick:()=>w(k),className:"px-2.5 py-1 rounded border border-neutral-300 hover:border-black hover:bg-black hover:text-white transition-colors text-[10px] uppercase font-bold",children:"Inquire"})})]},k.id))]})]})})}),e==="guidelines"&&u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[u.jsxs("div",{className:"bg-white p-6 rounded-xl border border-[#E6DAD8] space-y-4",children:[u.jsxs("div",{className:"flex items-center gap-2 text-black font-mono font-bold text-sm uppercase tracking-wider pb-3 border-b border-neutral-100",children:[u.jsx(ev,{className:"w-4 h-4 text-[#E3000F]"}),u.jsx("span",{children:"Operational Session Timings"})]}),u.jsxs("div",{className:"space-y-3 font-mono text-xs",children:[u.jsxs("div",{className:"p-3 rounded-lg bg-[#FAF7F6] border border-[#EFE8E6]",children:[u.jsx("span",{className:"font-bold text-black block mb-0.5",children:"FORENOON / LUNCH SESSION"}),u.jsx("p",{className:"text-neutral-700",children:"11:30 AM to 3:30 PM"}),u.jsx("p",{className:"text-[11px] text-neutral-400 mt-1",children:"Last F&B order: 2:45 PM • Hall vacated by 4:00 PM"})]}),u.jsxs("div",{className:"p-3 rounded-lg bg-[#FAF7F6] border border-[#EFE8E6]",children:[u.jsx("span",{className:"font-bold text-black block mb-0.5",children:"EVENING / DINNER SESSION"}),u.jsx("p",{className:"text-neutral-700",children:"6:30 PM to 11:00 PM"}),u.jsx("p",{className:"text-[11px] text-neutral-400 mt-1",children:"Last F&B order: 10:30 PM • Hall vacated by 11:15 PM"})]})]})]}),u.jsxs("div",{className:"bg-white p-6 rounded-xl border border-[#E6DAD8] space-y-4",children:[u.jsxs("div",{className:"flex items-center gap-2 text-black font-mono font-bold text-sm uppercase tracking-wider pb-3 border-b border-neutral-100",children:[u.jsx(lx,{className:"w-4 h-4 text-[#E3000F]"}),u.jsx("span",{children:"Statutory Club Regulations"})]}),u.jsxs("ul",{className:"space-y-3 font-sans text-xs text-[#5C5350] leading-relaxed",children:[u.jsxs("li",{className:"flex items-start gap-2.5",children:[u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#E3000F] shrink-0 mt-1.5"}),u.jsxs("span",{children:[u.jsx("strong",{children:"Roof Terrace Duration:"})," For bookings exceeding 4 hours or day-long celebrations, a statutory surcharge of ₹10,000/- is levied as per EC resolution."]})]}),u.jsxs("li",{className:"flex items-start gap-2.5",children:[u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#E3000F] shrink-0 mt-1.5"}),u.jsxs("span",{children:[u.jsx("strong",{children:"Clean-up Charges:"})," A standard sanitization fee of ₹500/- is applicable on 2nd Floor and Roof Terrace gatherings."]})]}),u.jsxs("li",{className:"flex items-start gap-2.5",children:[u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#E3000F] shrink-0 mt-1.5"}),u.jsxs("span",{children:[u.jsx("strong",{children:"Vehicle Entry:"})," Entry inside KSHA premises requires an official vehicle pass issued upon submitting RC copy at the clubhouse office."]})]})]})]})]})]}),p&&u.jsx("div",{className:"fixed inset-0 z-[100000] flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn",children:u.jsxs("div",{className:"bg-white rounded-xl border border-neutral-300 w-full max-w-md p-6 shadow-2xl relative",children:[u.jsx("button",{onClick:()=>v(!1),className:"absolute top-4 right-4 text-neutral-400 hover:text-black transition-colors",children:u.jsx(Wl,{className:"w-5 h-5"})}),D?u.jsxs("div",{className:"py-6 text-center space-y-4 font-mono",children:[u.jsx("div",{className:"w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center",children:u.jsx(ox,{className:"w-5 h-5"})}),u.jsx("h4",{className:"disp text-xl text-black",children:"Inquiry Registered"}),u.jsxs("p",{className:"text-xs text-neutral-600 font-sans max-w-xs mx-auto",children:["Thank you, ",u.jsx("strong",{children:N}),". Your inquiry for"," ",u.jsx("strong",{children:r?r.name:h==null?void 0:h.name})," has been logged."]}),u.jsxs("div",{className:"p-3 rounded bg-[#FAF7F6] border border-[#E6DAD8] text-left text-xs space-y-1",children:[u.jsx("p",{className:"text-neutral-500 text-[10px]",children:"Contact Desk:"}),u.jsx("p",{className:"font-bold text-black",children:"Sri R. Viswanath Singh (Halls) · 99809 05385"}),u.jsx("p",{className:"font-bold text-black",children:"Sri A. Francis (Rooms) · 98865 16936"})]}),u.jsx("button",{onClick:()=>v(!1),className:"py-2 px-6 rounded bg-black text-white text-xs uppercase font-bold",children:"Close"})]}):u.jsxs("form",{onSubmit:F,className:"space-y-4 font-mono",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-[10px] text-[#E3000F] uppercase tracking-wider font-bold block",children:"KSHA Clubhouse Reservation Desk"}),u.jsx("h3",{className:"disp text-2xl text-black mt-0.5",children:r?r.name:h==null?void 0:h.name}),r&&u.jsx("div",{className:"mt-1",children:u.jsx("select",{value:l,onChange:k=>d(Number(k.target.value)),className:"w-full text-xs font-mono p-1.5 bg-[#FAF7F6] border border-[#E6DAD8] rounded focus:outline-hidden",children:r.tiers.map((k,H)=>u.jsxs("option",{value:H,children:[k.label," — ₹",k.total.toLocaleString("en-IN"),"/-"]},H))})}),h&&u.jsxs("p",{className:"text-xs text-neutral-500 mt-1",children:["Tariff: ₹",h.total.toLocaleString("en-IN"),"/- per night"]})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-3 pt-2",children:[u.jsxs("div",{children:[u.jsx("label",{className:"text-[10px] uppercase text-neutral-500 block mb-1",children:"Date of Event"}),u.jsx("input",{type:"date",required:!0,value:S,onChange:k=>g(k.target.value),className:"w-full px-2.5 py-1.5 rounded border border-neutral-300 text-xs focus:outline-hidden focus:border-black"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"text-[10px] uppercase text-neutral-500 block mb-1",children:"Session"}),u.jsxs("select",{value:b,onChange:k=>T(k.target.value),className:"w-full px-2.5 py-1.5 rounded border border-neutral-300 text-xs bg-white focus:outline-hidden focus:border-black",children:[u.jsx("option",{value:"lunch",children:"Lunch (11:30–15:30)"}),u.jsx("option",{value:"dinner",children:"Dinner (18:30–23:00)"}),u.jsx("option",{value:"fullday",children:"Full Day (4+ hrs)"})]})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"text-[10px] uppercase text-neutral-500 block mb-1",children:"Full Name (Member / Guest)"}),u.jsx("input",{type:"text",required:!0,placeholder:"Sri / Smt.",value:N,onChange:k=>y(k.target.value),className:"w-full px-2.5 py-1.5 rounded border border-neutral-300 text-xs focus:outline-hidden focus:border-black"})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[u.jsxs("div",{children:[u.jsx("label",{className:"text-[10px] uppercase text-neutral-500 block mb-1",children:"Phone Number"}),u.jsx("input",{type:"tel",required:!0,placeholder:"98XXXXXXXX",value:_,onChange:k=>I(k.target.value),className:"w-full px-2.5 py-1.5 rounded border border-neutral-300 text-xs focus:outline-hidden focus:border-black"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"text-[10px] uppercase text-neutral-500 block mb-1",children:"KSHA Member No."}),u.jsx("input",{type:"text",placeholder:"LM/LA No. (if member)",value:z,onChange:k=>C(k.target.value),className:"w-full px-2.5 py-1.5 rounded border border-neutral-300 text-xs focus:outline-hidden focus:border-black"})]})]}),u.jsxs("div",{className:"pt-2 flex gap-2",children:[u.jsxs("button",{type:"submit",className:"flex-1 py-2.5 px-4 rounded bg-[#E3000F] hover:bg-[#9E000B] text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5",children:[u.jsx(vv,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Submit Inquiry"})]}),u.jsx("button",{type:"button",onClick:()=>v(!1),className:"py-2.5 px-4 rounded border border-neutral-300 text-neutral-700 text-xs uppercase font-semibold hover:border-black",children:"Cancel"})]})]})]})})]})},gE=["Army Service Corps (ASC Centre & College)","Madras Engineering Group & Centre (MEG Sappers)","Rail Wheel Factory Sports Association (RWFSA)","Canara Bank Sports Club","Fortis Hockey Club Bengaluru","Maratha Light Infantry Regimental Centre (Belagavi)","Karnataka State Police (KSP) Sports Section","Post & Telegraph Sports Control Board","Hindustan Aeronautics Limited (HAL SC)","Bharat Earth Movers Limited (BEML SC)","State Bank of India Hockey Wing","Bangalore Blue Star Hockey Club","Coorg Veterans Hockey Club (Madikeri)","Belgaum Cantonment Sports Club","Youngsters Hockey Club Shanti Nagar","Langford Rangers Hockey Club"],vE=({lang:s})=>{const[e,n]=et.useState(""),[r,o]=et.useState("council"),l=gE.filter(d=>d.toLowerCase().includes(e.toLowerCase()));return u.jsx("section",{id:"vault",className:"relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FBF8F7] border-b border-[#E6DAD8]",children:u.jsxs("div",{className:"max-w-7xl mx-auto",children:[u.jsxs("div",{className:"mb-14",children:[u.jsx("p",{className:"chap mb-3",children:"Chapter VI"}),u.jsx("h2",{className:"disp text-5xl sm:text-7xl lg:text-9xl text-black mb-4",children:s==="kn"?"ಸಂಸ್ಥೆಯ ಗಣತಿ ಮತ್ತು ಆಡಳಿತ":"The Roll Call"}),u.jsx("p",{className:"whisper text-2xl sm:text-3xl lg:text-4xl text-black max-w-3xl mb-4 leading-snug",children:"“A state’s hockey, counted. As on 31 March 2025.”"}),u.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 pt-6 border-t border-[#C9B8B5]",children:[u.jsxs("div",{className:"border-t-2 border-[#C9B8B5] pt-3",children:[u.jsx("div",{className:"disp goldtxt text-5xl sm:text-6xl",children:"79"}),u.jsx("h3",{className:"disp text-base sm:text-lg text-black mt-1",children:"Member clubs"})]}),u.jsxs("div",{className:"border-t-2 border-[#C9B8B5] pt-3",children:[u.jsx("div",{className:"disp goldtxt text-5xl sm:text-6xl",children:"1,088"}),u.jsx("h3",{className:"disp text-base sm:text-lg text-black mt-1",children:"Life Members"})]}),u.jsxs("div",{className:"border-t-2 border-[#C9B8B5] pt-3",children:[u.jsx("div",{className:"disp goldtxt text-5xl sm:text-6xl",children:"1,994"}),u.jsx("h3",{className:"disp text-base sm:text-lg text-black mt-1",children:"Life Associates"})]}),u.jsxs("div",{className:"border-t-2 border-[#C9B8B5] pt-3",children:[u.jsx("div",{className:"disp goldtxt text-5xl sm:text-6xl",children:"168"}),u.jsx("h3",{className:"disp text-base sm:text-lg text-black mt-1",children:"Reciprocal clubs"})]}),u.jsxs("div",{className:"border-t-2 border-[#C9B8B5] pt-3",children:[u.jsx("div",{className:"disp goldtxt text-5xl sm:text-6xl",children:"100+"}),u.jsx("h3",{className:"disp text-base sm:text-lg text-black mt-1",children:"League matches"})]}),u.jsxs("div",{className:"border-t-2 border-[#C9B8B5] pt-3",children:[u.jsx("div",{className:"disp goldtxt text-5xl sm:text-6xl",children:"4"}),u.jsx("h3",{className:"disp text-base sm:text-lg text-black mt-1",children:"Divisions"})]})]})]}),u.jsx("div",{className:"flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10",children:[{id:"council",label:"Executive Council (ಆಡಳಿತ ಮಂಡಳಿ)"},{id:"clubs",label:"61 Affiliated Clubs Directory"},{id:"agm",label:"56th AGM Audited Accounts"},{id:"rti",label:"RTI Sec 4(1)(b) Disclosures"}].map(d=>u.jsx("button",{onClick:()=>{gt.playSplitFlap(),o(d.id)},className:`px-4 sm:px-6 py-2.5 rounded font-mono font-bold text-xs tracking-wider uppercase border transition-all ${r===d.id?"bg-[#E3000F] text-white border-[#E3000F] shadow-sm":"bg-white text-black border-[#C9B8B5] hover:border-black"}`,children:d.label},d.id))}),r==="council"&&u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:nE.map((d,h)=>u.jsxs("div",{onMouseEnter:()=>gt.playSplitFlap(),className:"p-6 rounded-2xl bg-white border border-[#E6DAD8] shadow-xs hover:border-[#E3000F] transition-all flex flex-col justify-between group",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-[10px] font-mono tracking-widest text-[#E3000F] uppercase font-bold block mb-1.5",children:d.designation}),u.jsx("h3",{className:"disp text-2xl text-black group-hover:text-[#E3000F] transition-colors mb-2",children:d.name}),u.jsx("p",{className:"font-sans text-xs text-[#3B3330] leading-relaxed",children:d.meta})]}),u.jsxs("div",{className:"mt-6 pt-3 border-t border-[#E6DAD8] text-[10px] font-mono text-[#5C5350] uppercase flex items-center justify-between",children:[u.jsx("span",{children:"Tenure: 2024–2028"}),u.jsx("span",{className:"text-emerald-700 font-bold",children:"Gazetted"})]})]},h))}),r==="clubs"&&u.jsxs("div",{className:"p-8 rounded-2xl bg-white border border-[#E6DAD8] shadow-sm",children:[u.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4 mb-6",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"disp text-3xl text-black",children:"61 Institutional & State Affiliated Clubs"}),u.jsx("div",{className:"text-xs font-mono text-[#5C5350]",children:"Official Registry of Affiliated Voting Member Units"})]}),u.jsxs("div",{className:"relative w-full sm:w-72",children:[u.jsx(of,{className:"w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"}),u.jsx("input",{type:"text",placeholder:"Search 61 clubs...",value:e,onChange:d=>n(d.target.value),className:"w-full pl-9 pr-3 py-2 rounded-lg bg-[#FBF8F7] border border-[#C9B8B5] text-xs font-mono text-black focus:outline-none focus:border-[#E3000F]"})]})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 max-h-96 overflow-y-auto pr-2",children:l.map((d,h)=>u.jsxs("div",{className:"p-3.5 rounded-lg bg-[#FBF8F7] border border-[#E6DAD8] flex items-center justify-between text-xs font-mono",children:[u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsx("span",{className:"w-2 h-2 rounded-full bg-[#E3000F]"}),u.jsx("span",{className:"text-black font-medium",children:d})]}),u.jsx("span",{className:"text-[10px] text-emerald-700 font-bold uppercase",children:"Active Voting"})]},h))})]}),r==="agm"&&u.jsxs("div",{className:"p-8 rounded-2xl bg-white border border-[#E6DAD8] shadow-sm space-y-6",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-[#E6DAD8] pb-4",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"disp text-3xl text-black",children:"56th Annual General Meeting Audited Accounts"}),u.jsx("div",{className:"text-xs font-mono text-[#5C5350]",children:"Certified Balance Sheet & Schedules (FY 2024–25)"})]}),u.jsx("span",{className:"px-3 py-1 rounded bg-emerald-50 text-emerald-800 text-xs font-mono border border-emerald-200 font-bold",children:"Unanimously Adopted"})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[u.jsxs("div",{className:"p-5 rounded-xl bg-[#FBF8F7] border border-[#E6DAD8]",children:[u.jsx("div",{className:"text-[10px] font-mono text-[#5C5350] uppercase font-bold",children:"TURF REPLACEMENT CORPUS"}),u.jsx("div",{className:"disp text-3xl sm:text-4xl text-black mt-1",children:"₹ 2,45,00,000"}),u.jsx("div",{className:"text-xs font-mono text-[#5C5350] mt-2",children:"Ring-fenced for synthetic polygras renewal"})]}),u.jsxs("div",{className:"p-5 rounded-xl bg-[#FBF8F7] border border-[#E6DAD8]",children:[u.jsx("div",{className:"text-[10px] font-mono text-[#5C5350] uppercase font-bold",children:"GRASSROOTS SUBSIDY FUND"}),u.jsx("div",{className:"disp text-3xl sm:text-4xl text-black mt-1",children:"₹ 1,18,50,000"}),u.jsx("div",{className:"text-xs font-mono text-[#5C5350] mt-2",children:"Disbursed to 18 affiliated district units"})]}),u.jsxs("div",{className:"p-5 rounded-xl bg-[#FBF8F7] border border-[#E6DAD8]",children:[u.jsx("div",{className:"text-[10px] font-mono text-[#5C5350] uppercase font-bold",children:"STATUTORY AUDITOR"}),u.jsx("div",{className:"disp text-2xl text-black mt-1",children:"M/s. Rao & Sundaram"}),u.jsx("div",{className:"text-xs font-mono text-[#5C5350] mt-2",children:"Chartered Accountants · Bengaluru"})]})]})]}),r==="rti"&&u.jsxs("div",{className:"p-8 rounded-2xl bg-white border border-[#E6DAD8] shadow-sm space-y-6",children:[u.jsxs("div",{className:"border-b border-[#E6DAD8] pb-4",children:[u.jsx("h3",{className:"disp text-3xl text-black",children:"Right to Information (RTI) Act 2005 · Section 4(1)(b)"}),u.jsx("div",{className:"text-xs font-mono text-[#5C5350]",children:"Proactive Public Disclosures, Public Information Officer & Appellate Authorities"})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[u.jsxs("div",{className:"p-5 rounded-xl bg-[#FBF8F7] border border-[#E6DAD8]",children:[u.jsx("div",{className:"text-[10px] font-mono text-[#E3000F] font-bold uppercase mb-1",children:"PUBLIC INFORMATION OFFICER (PIO)"}),u.jsx("div",{className:"disp text-2xl text-black",children:"Honorary Assistant Secretary"}),u.jsx("div",{className:"text-xs font-mono text-[#3B3330] mt-1",children:"KSHA Stadium, Rhenius Street, Langford Town, Bengaluru – 560025"}),u.jsx("div",{className:"text-xs font-mono text-[#5C5350] mt-2",children:"Email: karnatakastatehockey@gmail.com | Tel: +91 80 2222 5555"})]}),u.jsxs("div",{className:"p-5 rounded-xl bg-[#FBF8F7] border border-[#E6DAD8]",children:[u.jsx("div",{className:"text-[10px] font-mono text-[#E3000F] font-bold uppercase mb-1",children:"FIRST APPELLATE AUTHORITY (FAA)"}),u.jsx("div",{className:"disp text-2xl text-black",children:"Honorary Secretary, KSHA"}),u.jsx("div",{className:"text-xs font-mono text-[#3B3330] mt-1",children:"Executive Secretariat, Karnataka State Hockey Association"}),u.jsx("div",{className:"text-xs font-mono text-[#5C5350] mt-2",children:"Statutory Appeal Disposal Window: 30 Working Days"})]})]})]})]})})},_E=({lang:s})=>u.jsx("section",{id:"join",className:"relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-b border-[#E6DAD8] overflow-hidden text-center",style:{background:"radial-gradient(closest-side at 50% 50%, rgba(227, 0, 15, 0.14), rgba(255, 255, 255, 1))"},children:u.jsxs("div",{className:"max-w-5xl mx-auto relative z-10",children:[u.jsx("p",{className:"chap mb-3",children:"Finale"}),u.jsxs("h2",{className:"disp goldtxt text-6xl sm:text-8xl md:text-[140px] lg:text-[200px] leading-[0.88] my-6 drop-shadow-[0_0_60px_rgba(227,0,15,0.22)]",children:["The pitch",u.jsx("br",{}),"is open."]}),u.jsx("p",{className:"whisper text-2xl sm:text-3xl lg:text-4xl text-black max-w-2xl mx-auto mb-10 leading-snug",children:s==="kn"?"ಇಡೀ ರಾಜ್ಯಕ್ಕೆ ಒಂದೇ ಪ್ರತಿಷ್ಠಿತ ಕ್ಲಬ್. ಆಡಲು ಬನ್ನಿ, ತರಬೇತಿ ನೀಡಿ, ಅಥವಾ ಸಂಸ್ಥೆಯ ಭಾಗವಾಗಿ.":"One club for a whole state. Come and play, coach, umpire, or simply belong."}),u.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4",children:[u.jsx("a",{href:"#pavilion",onClick:()=>gt.playGloryChime(),className:"inline-flex items-center justify-center min-h-[56px] px-8 bg-[#E3000F] hover:bg-[#9E000B] text-white font-mono font-bold text-xs tracking-[0.14em] uppercase transition-all shadow-lg shadow-red-600/25",children:"Become a member"}),u.jsx("a",{href:"#cradles",onClick:()=>gt.playStickStrike(),className:"inline-flex items-center justify-center min-h-[56px] px-8 bg-transparent hover:bg-[#E3000F] text-[#E3000F] hover:text-white border-2 border-[#E3000F] font-mono font-bold text-xs tracking-[0.14em] uppercase transition-all",children:"Join the academy"}),u.jsx("a",{href:"#immortals",onClick:()=>gt.playSplitFlap(),className:"inline-flex items-center justify-center min-h-[56px] px-8 bg-[#FBF8F7] hover:bg-neutral-100 text-black border border-[#E6DAD8] font-mono font-medium text-xs tracking-[0.14em] uppercase transition-all",children:"Become an umpire"})]})]})}),yE=({lang:s})=>u.jsx("footer",{id:"contact",className:"bg-[#FFFFFF] border-t border-[#E6DAD8] font-sans",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12",children:[u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#E6DAD8]",children:[u.jsxs("div",{className:"lg:col-span-4 space-y-4",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("img",{src:"/ksha-crest.png",alt:"KSHA Official Seal",className:"w-12 h-12 object-contain"}),u.jsx("div",{children:u.jsxs("p",{className:"disp text-3xl text-[#E3000F] leading-tight",children:["Karnataka State",u.jsx("br",{}),"Hockey Association"]})})]}),u.jsxs("p",{className:"text-sm text-[#3B3330] leading-relaxed",children:["KSHA Hockey Stadium, Rhenius Street,",u.jsx("br",{}),"Langford Town, Bengaluru – 560 025"]}),u.jsxs("div",{className:"text-xs text-[#3B3330] space-y-1 font-mono",children:[u.jsx("div",{children:u.jsx("a",{href:"mailto:karnatakastatehockey@gmail.com",className:"hover:text-[#E3000F] transition-colors",children:"karnatakastatehockey@gmail.com"})}),u.jsx("div",{children:"Office / WhatsApp: +91 78992 36355"}),u.jsx("div",{children:"Hon. Secretary: +91 98452 78847"})]})]}),u.jsxs("div",{className:"lg:col-span-3 space-y-3 font-mono text-xs",children:[u.jsx("h3",{className:"chap mb-2 text-[#E3000F]",children:"Explore"}),u.jsxs("ul",{className:"space-y-2 text-[#3B3330]",children:[u.jsx("li",{children:u.jsx("a",{href:"#cup",onClick:()=>gt.playSplitFlap(),className:"hover:text-[#E3000F] transition-colors",children:"The Travancore Cup"})}),u.jsx("li",{children:u.jsx("a",{href:"#battlegrounds",onClick:()=>gt.playSplitFlap(),className:"hover:text-[#E3000F] transition-colors",children:"The Four League Divisions"})}),u.jsx("li",{children:u.jsx("a",{href:"#cradles",onClick:()=>gt.playSplitFlap(),className:"hover:text-[#E3000F] transition-colors",children:"The Grassroots Academy"})}),u.jsx("li",{children:u.jsx("a",{href:"#immortals",onClick:()=>gt.playSplitFlap(),className:"hover:text-[#E3000F] transition-colors",children:"The 15 Olympians & Legends"})}),u.jsx("li",{children:u.jsx("a",{href:"#colosseum",className:"hover:text-[#E3000F] transition-colors",children:"Langford Town Hockey Stadium (360° Tour)"})}),u.jsx("li",{children:u.jsx("a",{href:"#pavilion",onClick:()=>gt.playGloryChime(),className:"hover:text-[#E3000F] transition-colors",children:"Private Clubhouse & Billiards"})})]})]}),u.jsxs("div",{className:"lg:col-span-2 space-y-3 font-mono text-xs",children:[u.jsx("h3",{className:"chap mb-2 text-[#E3000F]",children:"Site & Gazette"}),u.jsxs("ul",{className:"space-y-2 text-[#3B3330]",children:[u.jsx("li",{children:u.jsx("a",{href:"#vault",onClick:()=>gt.playSplitFlap(),className:"hover:text-[#E3000F] transition-colors",children:"61 Member Clubs"})}),u.jsx("li",{children:u.jsx("a",{href:"#vault",onClick:()=>gt.playSplitFlap(),className:"hover:text-[#E3000F] transition-colors",children:"Audited Balance Sheets"})}),u.jsx("li",{children:u.jsx("a",{href:"#vault",onClick:()=>gt.playSplitFlap(),className:"hover:text-[#E3000F] transition-colors",children:"RTI Act Disclosures"})}),u.jsx("li",{children:u.jsx("a",{href:"#booking-facilities",onClick:()=>gt.playStickStrike(),className:"hover:text-[#E3000F] transition-colors font-bold text-[#E3000F]",children:"Party Halls & Guest Rooms Booking"})}),u.jsx("li",{children:u.jsx("span",{className:"text-[#5C5350]",children:"GIGW 3.0 Accessible"})})]})]}),u.jsxs("div",{className:"lg:col-span-3 space-y-3 font-mono text-xs",children:[u.jsx("h3",{className:"chap mb-2 text-[#E3000F]",children:"Club Hours"}),u.jsxs("div",{className:"p-4 rounded-xl bg-[#FBF8F7] border border-[#E6DAD8] space-y-2",children:[u.jsx("div",{className:"font-semibold text-black",children:"Member & Dining Enclave"}),u.jsxs("p",{className:"text-[#3B3330] leading-relaxed",children:["11:30 AM – 3:30 PM (Lunch)",u.jsx("br",{}),"6:30 PM – 11:00 PM (Dinner & Terrace)"]}),u.jsx("div",{className:"font-semibold text-black pt-2 border-t border-[#E6DAD8]",children:"Sports Facilities"}),u.jsx("p",{className:"text-[#3B3330]",children:"06:00 AM – 10:00 PM Daily"})]})]})]}),u.jsxs("div",{className:"pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#5C5350]",children:[u.jsx("div",{children:"© 1937–2026 Karnataka State Hockey Association (Regd.). A private society; not a government body."}),u.jsxs("div",{className:"flex items-center gap-4",children:[u.jsx("span",{children:"Regd. No. 129/1937-38"}),u.jsx("span",{children:"·"}),u.jsx("span",{children:"Mysore Societies Act"}),u.jsx("span",{children:"·"}),u.jsx("span",{children:"All Rights Reserved"})]})]})]})}),SE=({isOpen:s,onClose:e})=>{const[n,r]=et.useState("");if(et.useEffect(()=>{const p=v=>{(v.metaKey||v.ctrlKey)&&v.key==="k"&&(v.preventDefault(),gt.playSplitFlap(),s&&e()),v.key==="Escape"&&s&&e()};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[s,e]),!s)return null;const o=n.toLowerCase(),l=nf.filter(p=>p.name.toLowerCase().includes(o)||p.games.toLowerCase().includes(o)||p.district.toLowerCase().includes(o)||p.position.toLowerCase().includes(o)),d=rf.filter(p=>p.name.toLowerCase().includes(o)||p.headquarters.toLowerCase().includes(o)||p.zone.toLowerCase().includes(o)),h=Yx.filter(p=>p.title.toLowerCase().includes(o)||p.highlight.toLowerCase().includes(o)||p.category.toLowerCase().includes(o)),m=p=>{gt.playStickStrike(),e();const v=document.getElementById(p);v&&v.scrollIntoView({behavior:"smooth"})};return u.jsx("div",{className:"fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-md animate-fadeIn",children:u.jsxs("div",{className:"relative w-full max-w-2xl bg-white rounded-2xl border border-neutral-200 shadow-2xl overflow-hidden flex flex-col max-h-[80vh]",children:[u.jsxs("div",{className:"flex items-center px-5 py-4 border-b border-neutral-200 bg-neutral-50/80",children:[u.jsx(of,{className:"w-5 h-5 text-ksha-red mr-3 shrink-0"}),u.jsx("input",{autoFocus:!0,type:"text",value:n,onChange:p=>r(p.target.value),placeholder:"Search Olympians, 1937 Club House, 18 Districts, Super Division...",className:"w-full bg-transparent text-neutral-900 font-mono text-sm placeholder-neutral-400 focus:outline-none"}),u.jsx("button",{onClick:e,className:"p-1 rounded bg-neutral-200 text-neutral-600 hover:text-neutral-950 transition-colors",children:u.jsx(Wl,{className:"w-4 h-4"})})]}),u.jsxs("div",{className:"p-4 overflow-y-auto space-y-6",children:[l.length>0&&u.jsxs("div",{children:[u.jsxs("div",{className:"text-[10px] font-mono tracking-widest uppercase text-neutral-500 mb-2 px-2 flex items-center gap-1.5 font-bold",children:[u.jsx(hv,{className:"w-3.5 h-3.5 text-ksha-red"}),u.jsxs("span",{children:["Olympians (",l.length,")"]})]}),u.jsx("div",{className:"space-y-1",children:l.slice(0,5).map(p=>u.jsxs("div",{onClick:()=>m("immortals"),className:"p-2.5 rounded-lg hover:bg-neutral-100 cursor-pointer flex items-center justify-between group transition-colors",children:[u.jsxs("div",{children:[u.jsx("div",{className:"font-cinzel font-bold text-sm text-neutral-900 group-hover:text-ksha-red transition-colors",children:p.name}),u.jsxs("div",{className:"text-xs font-mono text-neutral-500",children:[p.games," · ",p.position]})]}),u.jsx(Wa,{className:"w-4 h-4 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-1 transition-all"})]},p.id))})]}),h.length>0&&u.jsxs("div",{children:[u.jsxs("div",{className:"text-[10px] font-mono tracking-widest uppercase text-neutral-500 mb-2 px-2 flex items-center gap-1.5 font-bold",children:[u.jsx(sx,{className:"w-3.5 h-3.5 text-amber-600"}),u.jsx("span",{children:"Private Club Wing & Amenities"})]}),u.jsx("div",{className:"space-y-1",children:h.map(p=>u.jsxs("div",{onClick:()=>m("pavilion"),className:"p-2.5 rounded-lg hover:bg-neutral-100 cursor-pointer flex items-center justify-between group transition-colors",children:[u.jsxs("div",{children:[u.jsx("div",{className:"font-cinzel font-bold text-sm text-neutral-900 group-hover:text-amber-600 transition-colors",children:p.title}),u.jsx("div",{className:"text-xs font-mono text-neutral-500",children:p.highlight})]}),u.jsx(Wa,{className:"w-4 h-4 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-1 transition-all"})]},p.id))})]}),d.length>0&&u.jsxs("div",{children:[u.jsxs("div",{className:"text-[10px] font-mono tracking-widest uppercase text-neutral-500 mb-2 px-2 flex items-center gap-1.5 font-bold",children:[u.jsx(af,{className:"w-3.5 h-3.5 text-turf-green"}),u.jsxs("span",{children:["District Units (",d.length,")"]})]}),u.jsx("div",{className:"space-y-1",children:d.slice(0,4).map(p=>u.jsxs("div",{onClick:()=>m("cradles"),className:"p-2.5 rounded-lg hover:bg-neutral-100 cursor-pointer flex items-center justify-between group transition-colors",children:[u.jsxs("div",{children:[u.jsx("div",{className:"font-cinzel font-bold text-sm text-neutral-900 group-hover:text-turf-green transition-colors",children:p.name}),u.jsxs("div",{className:"text-xs font-mono text-neutral-500",children:["HQ: ",p.headquarters," · ",p.zone]})]}),u.jsx(Wa,{className:"w-4 h-4 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-1 transition-all"})]},p.id))})]}),l.length===0&&h.length===0&&d.length===0&&u.jsxs("div",{className:"text-center py-10 font-mono text-xs text-neutral-500",children:["No matching records found in the Grand Directory for “",n,"”"]})]}),u.jsxs("div",{className:"px-5 py-3 border-t border-neutral-200 bg-neutral-50 flex items-center justify-between text-[11px] font-mono text-neutral-500",children:[u.jsx("span",{children:"Use ESC to close"}),u.jsx("span",{children:"Karnataka State Hockey Association 1937 Registry"})]})]})})};function ME(){const[s,e]=et.useState("en"),[n,r]=et.useState(!1),[o,l]=et.useState(!1),[d,h]=et.useState("md"),m=d==="sm"?"text-[14px]":d==="lg"?"text-[18px]":"text-[16px]";return u.jsxs("div",{className:`min-h-screen bg-[#FFFFFF] text-[#0A0A0A] font-sans selection:bg-[#E3000F] selection:text-white ${m} ${o?"motion-reduce":""}`,children:[u.jsx(K1,{isMotionPaused:o}),u.jsx(Ev,{onOpenCommandPalette:()=>r(!0),lang:s,setLang:e,isMotionPaused:o,setIsMotionPaused:l,textSize:d,setTextSize:h}),u.jsx(Tv,{lang:s}),u.jsxs("main",{id:"top",children:[u.jsx($1,{lang:s,isMotionPaused:o}),u.jsx(Z1,{}),u.jsx(J1,{lang:s}),u.jsx(Q1,{lang:s}),u.jsx(lE,{lang:s}),u.jsx(cE,{lang:s}),u.jsx(hE,{lang:s}),u.jsx(pE,{lang:s}),u.jsx(mE,{lang:s}),u.jsx(xE,{lang:s}),u.jsx(vE,{lang:s}),u.jsx(_E,{lang:s})]}),u.jsx(yE,{lang:s}),u.jsx(SE,{isOpen:n,onClose:()=>r(!1)})]})}B0.createRoot(document.getElementById("root")).render(u.jsx(D0.StrictMode,{children:u.jsx(ME,{})}));
