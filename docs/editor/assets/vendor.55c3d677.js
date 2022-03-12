var Cc=Object.defineProperty,Ec=Object.defineProperties;var xc=Object.getOwnPropertyDescriptors;var Dl=Object.getOwnPropertySymbols;var zc=Object.prototype.hasOwnProperty,Wc=Object.prototype.propertyIsEnumerable;var ql=(e,n,t)=>n in e?Cc(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,ut=(e,n)=>{for(var t in n||(n={}))zc.call(n,t)&&ql(e,t,n[t]);if(Dl)for(var t of Dl(n))Wc.call(n,t)&&ql(e,t,n[t]);return e},jl=(e,n)=>Ec(e,xc(n));var A={exports:{}},P={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Ul=Object.getOwnPropertySymbols,Rc=Object.prototype.hasOwnProperty,Bc=Object.prototype.propertyIsEnumerable;function Ic(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function Pc(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;var r=Object.getOwnPropertyNames(n).map(function(i){return n[i]});if(r.join("")!=="0123456789")return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(i){o[i]=i}),Object.keys(Object.assign({},o)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var va=Pc()?Object.assign:function(e,n){for(var t,r=Ic(e),o,i=1;i<arguments.length;i++){t=Object(arguments[i]);for(var l in t)Rc.call(t,l)&&(r[l]=t[l]);if(Ul){o=Ul(t);for(var u=0;u<o.length;u++)Bc.call(t,o[u])&&(r[o[u]]=t[o[u]])}}return r};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ni=va,Jn=60103,ka=60106;P.Fragment=60107;P.StrictMode=60108;P.Profiler=60114;var Ma=60109,ba=60110,wa=60112;P.Suspense=60113;var Oa=60115,Ta=60116;if(typeof Symbol=="function"&&Symbol.for){var Oe=Symbol.for;Jn=Oe("react.element"),ka=Oe("react.portal"),P.Fragment=Oe("react.fragment"),P.StrictMode=Oe("react.strict_mode"),P.Profiler=Oe("react.profiler"),Ma=Oe("react.provider"),ba=Oe("react.context"),wa=Oe("react.forward_ref"),P.Suspense=Oe("react.suspense"),Oa=Oe("react.memo"),Ta=Oe("react.lazy")}var Vl=typeof Symbol=="function"&&Symbol.iterator;function Nc(e){return e===null||typeof e!="object"?null:(e=Vl&&e[Vl]||e["@@iterator"],typeof e=="function"?e:null)}function Jt(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ca={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ea={};function et(e,n,t){this.props=e,this.context=n,this.refs=Ea,this.updater=t||Ca}et.prototype.isReactComponent={};et.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(Jt(85));this.updater.enqueueSetState(this,e,n,"setState")};et.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function xa(){}xa.prototype=et.prototype;function Li(e,n,t){this.props=e,this.context=n,this.refs=Ea,this.updater=t||Ca}var Fi=Li.prototype=new xa;Fi.constructor=Li;Ni(Fi,et.prototype);Fi.isPureReactComponent=!0;var Ai={current:null},za=Object.prototype.hasOwnProperty,Wa={key:!0,ref:!0,__self:!0,__source:!0};function Ra(e,n,t){var r,o={},i=null,l=null;if(n!=null)for(r in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(i=""+n.key),n)za.call(n,r)&&!Wa.hasOwnProperty(r)&&(o[r]=n[r]);var u=arguments.length-2;if(u===1)o.children=t;else if(1<u){for(var a=Array(u),d=0;d<u;d++)a[d]=arguments[d+2];o.children=a}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)o[r]===void 0&&(o[r]=u[r]);return{$$typeof:Jn,type:e,key:i,ref:l,props:o,_owner:Ai.current}}function Lc(e,n){return{$$typeof:Jn,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function _i(e){return typeof e=="object"&&e!==null&&e.$$typeof===Jn}function Fc(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Gl=/\/+/g;function ko(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Fc(""+e.key):n.toString(36)}function Mr(e,n,t,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Jn:case ka:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+ko(l,0):r,Array.isArray(o)?(t="",e!=null&&(t=e.replace(Gl,"$&/")+"/"),Mr(o,n,t,"",function(d){return d})):o!=null&&(_i(o)&&(o=Lc(o,t+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Gl,"$&/")+"/")+e)),n.push(o)),1;if(l=0,r=r===""?".":r+":",Array.isArray(e))for(var u=0;u<e.length;u++){i=e[u];var a=r+ko(i,u);l+=Mr(i,n,t,a,o)}else if(a=Nc(e),typeof a=="function")for(e=a.call(e),u=0;!(i=e.next()).done;)i=i.value,a=r+ko(i,u++),l+=Mr(i,n,t,a,o);else if(i==="object")throw n=""+e,Error(Jt(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n));return l}function ur(e,n,t){if(e==null)return e;var r=[],o=0;return Mr(e,r,"","",function(i){return n.call(t,i,o++)}),r}function Ac(e){if(e._status===-1){var n=e._result;n=n(),e._status=0,e._result=n,n.then(function(t){e._status===0&&(t=t.default,e._status=1,e._result=t)},function(t){e._status===0&&(e._status=2,e._result=t)})}if(e._status===1)return e._result;throw e._result}var Ba={current:null};function qe(){var e=Ba.current;if(e===null)throw Error(Jt(321));return e}var _c={ReactCurrentDispatcher:Ba,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:Ai,IsSomeRendererActing:{current:!1},assign:Ni};P.Children={map:ur,forEach:function(e,n,t){ur(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return ur(e,function(){n++}),n},toArray:function(e){return ur(e,function(n){return n})||[]},only:function(e){if(!_i(e))throw Error(Jt(143));return e}};P.Component=et;P.PureComponent=Li;P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_c;P.cloneElement=function(e,n,t){if(e==null)throw Error(Jt(267,e));var r=Ni({},e.props),o=e.key,i=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,l=Ai.current),n.key!==void 0&&(o=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in n)za.call(n,a)&&!Wa.hasOwnProperty(a)&&(r[a]=n[a]===void 0&&u!==void 0?u[a]:n[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){u=Array(a);for(var d=0;d<a;d++)u[d]=arguments[d+2];r.children=u}return{$$typeof:Jn,type:e.type,key:o,ref:i,props:r,_owner:l}};P.createContext=function(e,n){return n===void 0&&(n=null),e={$$typeof:ba,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:Ma,_context:e},e.Consumer=e};P.createElement=Ra;P.createFactory=function(e){var n=Ra.bind(null,e);return n.type=e,n};P.createRef=function(){return{current:null}};P.forwardRef=function(e){return{$$typeof:wa,render:e}};P.isValidElement=_i;P.lazy=function(e){return{$$typeof:Ta,_payload:{_status:-1,_result:e},_init:Ac}};P.memo=function(e,n){return{$$typeof:Oa,type:e,compare:n===void 0?null:n}};P.useCallback=function(e,n){return qe().useCallback(e,n)};P.useContext=function(e,n){return qe().useContext(e,n)};P.useDebugValue=function(){};P.useEffect=function(e,n){return qe().useEffect(e,n)};P.useImperativeHandle=function(e,n,t){return qe().useImperativeHandle(e,n,t)};P.useLayoutEffect=function(e,n){return qe().useLayoutEffect(e,n)};P.useMemo=function(e,n){return qe().useMemo(e,n)};P.useReducer=function(e,n,t){return qe().useReducer(e,n,t)};P.useRef=function(e){return qe().useRef(e)};P.useState=function(e){return qe().useState(e)};P.version="17.0.2";A.exports=P;var de=A.exports,Ia={exports:{}},be={},Pa={exports:{}},Na={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){var n,t,r,o;if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,u=l.now();e.unstable_now=function(){return l.now()-u}}if(typeof window=="undefined"||typeof MessageChannel!="function"){var a=null,d=null,g=function(){if(a!==null)try{var k=e.unstable_now();a(!0,k),a=null}catch(W){throw setTimeout(g,0),W}};n=function(k){a!==null?setTimeout(n,0,k):(a=k,setTimeout(g,0))},t=function(k,W){d=setTimeout(k,W)},r=function(){clearTimeout(d)},e.unstable_shouldYield=function(){return!1},o=e.unstable_forceFrameRate=function(){}}else{var T=window.setTimeout,m=window.clearTimeout;if(typeof console!="undefined"){var b=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof b!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var E=!1,O=null,c=-1,s=5,f=0;e.unstable_shouldYield=function(){return e.unstable_now()>=f},o=function(){},e.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):s=0<k?Math.floor(1e3/k):5};var p=new MessageChannel,y=p.port2;p.port1.onmessage=function(){if(O!==null){var k=e.unstable_now();f=k+s;try{O(!0,k)?y.postMessage(null):(E=!1,O=null)}catch(W){throw y.postMessage(null),W}}else E=!1},n=function(k){O=k,E||(E=!0,y.postMessage(null))},t=function(k,W){c=T(function(){k(e.unstable_now())},W)},r=function(){m(c),c=-1}}function w(k,W){var I=k.length;k.push(W);e:for(;;){var L=I-1>>>1,Z=k[L];if(Z!==void 0&&0<z(Z,W))k[L]=W,k[I]=Z,I=L;else break e}}function v(k){return k=k[0],k===void 0?null:k}function x(k){var W=k[0];if(W!==void 0){var I=k.pop();if(I!==W){k[0]=I;e:for(var L=0,Z=k.length;L<Z;){var cn=2*(L+1)-1,dn=k[cn],lt=cn+1,En=k[lt];if(dn!==void 0&&0>z(dn,I))En!==void 0&&0>z(En,dn)?(k[L]=En,k[lt]=I,L=lt):(k[L]=dn,k[cn]=I,L=cn);else if(En!==void 0&&0>z(En,I))k[L]=En,k[lt]=I,L=lt;else break e}}return W}return null}function z(k,W){var I=k.sortIndex-W.sortIndex;return I!==0?I:k.id-W.id}var M=[],R=[],he=1,G=null,j=3,Y=!1,ae=!1,Ie=!1;function Pe(k){for(var W=v(R);W!==null;){if(W.callback===null)x(R);else if(W.startTime<=k)x(R),W.sortIndex=W.expirationTime,w(M,W);else break;W=v(R)}}function we(k){if(Ie=!1,Pe(k),!ae)if(v(M)!==null)ae=!0,n(D);else{var W=v(R);W!==null&&t(we,W.startTime-k)}}function D(k,W){ae=!1,Ie&&(Ie=!1,r()),Y=!0;var I=j;try{for(Pe(W),G=v(M);G!==null&&(!(G.expirationTime>W)||k&&!e.unstable_shouldYield());){var L=G.callback;if(typeof L=="function"){G.callback=null,j=G.priorityLevel;var Z=L(G.expirationTime<=W);W=e.unstable_now(),typeof Z=="function"?G.callback=Z:G===v(M)&&x(M),Pe(W)}else x(M);G=v(M)}if(G!==null)var cn=!0;else{var dn=v(R);dn!==null&&t(we,dn.startTime-W),cn=!1}return cn}finally{G=null,j=I,Y=!1}}var $=o;e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(k){k.callback=null},e.unstable_continueExecution=function(){ae||Y||(ae=!0,n(D))},e.unstable_getCurrentPriorityLevel=function(){return j},e.unstable_getFirstCallbackNode=function(){return v(M)},e.unstable_next=function(k){switch(j){case 1:case 2:case 3:var W=3;break;default:W=j}var I=j;j=W;try{return k()}finally{j=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=$,e.unstable_runWithPriority=function(k,W){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var I=j;j=k;try{return W()}finally{j=I}},e.unstable_scheduleCallback=function(k,W,I){var L=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?L+I:L):I=L,k){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=I+Z,k={id:he++,callback:W,priorityLevel:k,startTime:I,expirationTime:Z,sortIndex:-1},I>L?(k.sortIndex=I,w(R,k),v(M)===null&&k===v(R)&&(Ie?r():Ie=!0,t(we,I-L))):(k.sortIndex=Z,w(M,k),ae||Y||(ae=!0,n(D))),k},e.unstable_wrapCallback=function(k){var W=j;return function(){var I=j;j=W;try{return k.apply(this,arguments)}finally{j=I}}}})(Na);Pa.exports=Na;/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oo=A.exports,q=va,X=Pa.exports;function S(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!oo)throw Error(S(227));var La=new Set,At={};function wn(e,n){Yn(e,n),Yn(e+"Capture",n)}function Yn(e,n){for(At[e]=n,e=0;e<n.length;e++)La.add(n[e])}var De=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),Dc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hl=Object.prototype.hasOwnProperty,$l={},Kl={};function qc(e){return Hl.call(Kl,e)?!0:Hl.call($l,e)?!1:Dc.test(e)?Kl[e]=!0:($l[e]=!0,!1)}function jc(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Uc(e,n,t,r){if(n===null||typeof n=="undefined"||jc(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ue(e,n,t,r,o,i,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=l}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ne[n]=new ue(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var Di=/[\-:]([a-z])/g;function qi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Di,qi);ne[n]=new ue(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Di,qi);ne[n]=new ue(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Di,qi);ne[n]=new ue(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new ue(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function ji(e,n,t,r){var o=ne.hasOwnProperty(n)?ne[n]:null,i=o!==null?o.type===0:r?!1:!(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N");i||(Uc(n,t,o,r)&&(t=null),r||o===null?qc(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var On=oo.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,kt=60103,mn=60106,Ue=60107,Ui=60108,Ct=60114,Vi=60109,Gi=60110,io=60112,Et=60113,Br=60120,lo=60115,Hi=60116,$i=60121,Ki=60128,Fa=60129,Yi=60130,$o=60131;if(typeof Symbol=="function"&&Symbol.for){var Q=Symbol.for;kt=Q("react.element"),mn=Q("react.portal"),Ue=Q("react.fragment"),Ui=Q("react.strict_mode"),Ct=Q("react.profiler"),Vi=Q("react.provider"),Gi=Q("react.context"),io=Q("react.forward_ref"),Et=Q("react.suspense"),Br=Q("react.suspense_list"),lo=Q("react.memo"),Hi=Q("react.lazy"),$i=Q("react.block"),Q("react.scope"),Ki=Q("react.opaque.id"),Fa=Q("react.debug_trace_mode"),Yi=Q("react.offscreen"),$o=Q("react.legacy_hidden")}var Yl=typeof Symbol=="function"&&Symbol.iterator;function at(e){return e===null||typeof e!="object"?null:(e=Yl&&e[Yl]||e["@@iterator"],typeof e=="function"?e:null)}var Mo;function Mt(e){if(Mo===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Mo=n&&n[1]||""}return`
`+Mo+e}var bo=!1;function ar(e,n){if(!e||bo)return"";bo=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(a){var r=a}Reflect.construct(e,[],n)}else{try{n.call()}catch(a){r=a}e.call(n.prototype)}else{try{throw Error()}catch(a){r=a}e()}}catch(a){if(a&&r&&typeof a.stack=="string"){for(var o=a.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,u=i.length-1;1<=l&&0<=u&&o[l]!==i[u];)u--;for(;1<=l&&0<=u;l--,u--)if(o[l]!==i[u]){if(l!==1||u!==1)do if(l--,u--,0>u||o[l]!==i[u])return`
`+o[l].replace(" at new "," at ");while(1<=l&&0<=u);break}}}finally{bo=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Mt(e):""}function Vc(e){switch(e.tag){case 5:return Mt(e.type);case 16:return Mt("Lazy");case 13:return Mt("Suspense");case 19:return Mt("SuspenseList");case 0:case 2:case 15:return e=ar(e.type,!1),e;case 11:return e=ar(e.type.render,!1),e;case 22:return e=ar(e.type._render,!1),e;case 1:return e=ar(e.type,!0),e;default:return""}}function _n(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ue:return"Fragment";case mn:return"Portal";case Ct:return"Profiler";case Ui:return"StrictMode";case Et:return"Suspense";case Br:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Gi:return(e.displayName||"Context")+".Consumer";case Vi:return(e._context.displayName||"Context")+".Provider";case io:var n=e.render;return n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case lo:return _n(e.type);case $i:return _n(e._render);case Hi:n=e._payload,e=e._init;try{return _n(e(n))}catch{}}return null}function tn(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function Aa(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Gc(e){var n=Aa(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t!="undefined"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function sr(e){e._valueTracker||(e._valueTracker=Gc(e))}function _a(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Aa(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Ir(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ko(e,n){var t=n.checked;return q({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:e._wrapperState.initialChecked})}function Ql(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=tn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Da(e,n){n=n.checked,n!=null&&ji(e,"checked",n,!1)}function Yo(e,n){Da(e,n);var t=tn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Qo(e,n.type,t):n.hasOwnProperty("defaultValue")&&Qo(e,n.type,tn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Xl(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Qo(e,n,t){(n!=="number"||Ir(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}function Hc(e){var n="";return oo.Children.forEach(e,function(t){t!=null&&(n+=t)}),n}function Xo(e,n){return e=q({children:void 0},n),(n=Hc(n.children))&&(e.children=n),e}function Dn(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+tn(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function Zo(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(S(91));return q({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Zl(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(S(92));if(Array.isArray(t)){if(!(1>=t.length))throw Error(S(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:tn(t)}}function qa(e,n){var t=tn(n.value),r=tn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Jl(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}var Jo={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function ja(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ei(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?ja(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var cr,Ua=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e}(function(e,n){if(e.namespaceURI!==Jo.svg||"innerHTML"in e)e.innerHTML=n;else{for(cr=cr||document.createElement("div"),cr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=cr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function _t(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var xt={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$c=["Webkit","ms","Moz","O"];Object.keys(xt).forEach(function(e){$c.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),xt[n]=xt[e]})});function Va(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||xt.hasOwnProperty(e)&&xt[e]?(""+n).trim():n+"px"}function Ga(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=Va(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var Kc=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ni(e,n){if(n){if(Kc[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(S(60));if(!(typeof n.dangerouslySetInnerHTML=="object"&&"__html"in n.dangerouslySetInnerHTML))throw Error(S(61))}if(n.style!=null&&typeof n.style!="object")throw Error(S(62))}}function ti(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function Qi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ri=null,qn=null,jn=null;function eu(e){if(e=nr(e)){if(typeof ri!="function")throw Error(S(280));var n=e.stateNode;n&&(n=po(n),ri(e.stateNode,e.type,n))}}function Ha(e){qn?jn?jn.push(e):jn=[e]:qn=e}function $a(){if(qn){var e=qn,n=jn;if(jn=qn=null,eu(e),n)for(e=0;e<n.length;e++)eu(n[e])}}function Xi(e,n){return e(n)}function Ka(e,n,t,r,o){return e(n,t,r,o)}function Zi(){}var Ya=Xi,yn=!1,wo=!1;function Ji(){(qn!==null||jn!==null)&&(Zi(),$a())}function Yc(e,n,t){if(wo)return e(n,t);wo=!0;try{return Ya(e,n,t)}finally{wo=!1,Ji()}}function Dt(e,n){var t=e.stateNode;if(t===null)return null;var r=po(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(S(231,n,typeof t));return t}var oi=!1;if(De)try{var st={};Object.defineProperty(st,"passive",{get:function(){oi=!0}}),window.addEventListener("test",st,st),window.removeEventListener("test",st,st)}catch{oi=!1}function Qc(e,n,t,r,o,i,l,u,a){var d=Array.prototype.slice.call(arguments,3);try{n.apply(t,d)}catch(g){this.onError(g)}}var zt=!1,Pr=null,Nr=!1,ii=null,Xc={onError:function(e){zt=!0,Pr=e}};function Zc(e,n,t,r,o,i,l,u,a){zt=!1,Pr=null,Qc.apply(Xc,arguments)}function Jc(e,n,t,r,o,i,l,u,a){if(Zc.apply(this,arguments),zt){if(zt){var d=Pr;zt=!1,Pr=null}else throw Error(S(198));Nr||(Nr=!0,ii=d)}}function Tn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&1026)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Qa(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function nu(e){if(Tn(e)!==e)throw Error(S(188))}function ed(e){var n=e.alternate;if(!n){if(n=Tn(e),n===null)throw Error(S(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===t)return nu(o),e;if(i===r)return nu(o),n;i=i.sibling}throw Error(S(188))}if(t.return!==r.return)t=o,r=i;else{for(var l=!1,u=o.child;u;){if(u===t){l=!0,t=o,r=i;break}if(u===r){l=!0,r=o,t=i;break}u=u.sibling}if(!l){for(u=i.child;u;){if(u===t){l=!0,t=i,r=o;break}if(u===r){l=!0,r=i,t=o;break}u=u.sibling}if(!l)throw Error(S(189))}}if(t.alternate!==r)throw Error(S(190))}if(t.tag!==3)throw Error(S(188));return t.stateNode.current===t?e:n}function Xa(e){if(e=ed(e),!e)return null;for(var n=e;;){if(n.tag===5||n.tag===6)return n;if(n.child)n.child.return=n,n=n.child;else{if(n===e)break;for(;!n.sibling;){if(!n.return||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}}return null}function tu(e,n){for(var t=e.alternate;n!==null;){if(n===e||n===t)return!0;n=n.return}return!1}var Za,el,Ja,es,li=!1,Ee=[],$e=null,Ke=null,Ye=null,qt=new Map,jt=new Map,ct=[],ru="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ui(e,n,t,r,o){return{blockedOn:e,domEventName:n,eventSystemFlags:t|16,nativeEvent:o,targetContainers:[r]}}function ou(e,n){switch(e){case"focusin":case"focusout":$e=null;break;case"dragenter":case"dragleave":Ke=null;break;case"mouseover":case"mouseout":Ye=null;break;case"pointerover":case"pointerout":qt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":jt.delete(n.pointerId)}}function dt(e,n,t,r,o,i){return e===null||e.nativeEvent!==i?(e=ui(n,t,r,o,i),n!==null&&(n=nr(n),n!==null&&el(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function nd(e,n,t,r,o){switch(n){case"focusin":return $e=dt($e,e,n,t,r,o),!0;case"dragenter":return Ke=dt(Ke,e,n,t,r,o),!0;case"mouseover":return Ye=dt(Ye,e,n,t,r,o),!0;case"pointerover":var i=o.pointerId;return qt.set(i,dt(qt.get(i)||null,e,n,t,r,o)),!0;case"gotpointercapture":return i=o.pointerId,jt.set(i,dt(jt.get(i)||null,e,n,t,r,o)),!0}return!1}function td(e){var n=hn(e.target);if(n!==null){var t=Tn(n);if(t!==null){if(n=t.tag,n===13){if(n=Qa(t),n!==null){e.blockedOn=n,es(e.lanePriority,function(){X.unstable_runWithPriority(e.priority,function(){Ja(t)})});return}}else if(n===3&&t.stateNode.hydrate){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function br(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=ol(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t!==null)return n=nr(t),n!==null&&el(n),e.blockedOn=t,!1;n.shift()}return!0}function iu(e,n,t){br(e)&&t.delete(n)}function rd(){for(li=!1;0<Ee.length;){var e=Ee[0];if(e.blockedOn!==null){e=nr(e.blockedOn),e!==null&&Za(e);break}for(var n=e.targetContainers;0<n.length;){var t=ol(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t!==null){e.blockedOn=t;break}n.shift()}e.blockedOn===null&&Ee.shift()}$e!==null&&br($e)&&($e=null),Ke!==null&&br(Ke)&&(Ke=null),Ye!==null&&br(Ye)&&(Ye=null),qt.forEach(iu),jt.forEach(iu)}function ft(e,n){e.blockedOn===n&&(e.blockedOn=null,li||(li=!0,X.unstable_scheduleCallback(X.unstable_NormalPriority,rd)))}function ns(e){function n(o){return ft(o,e)}if(0<Ee.length){ft(Ee[0],e);for(var t=1;t<Ee.length;t++){var r=Ee[t];r.blockedOn===e&&(r.blockedOn=null)}}for($e!==null&&ft($e,e),Ke!==null&&ft(Ke,e),Ye!==null&&ft(Ye,e),qt.forEach(n),jt.forEach(n),t=0;t<ct.length;t++)r=ct[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<ct.length&&(t=ct[0],t.blockedOn===null);)td(t),t.blockedOn===null&&ct.shift()}function dr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var In={animationend:dr("Animation","AnimationEnd"),animationiteration:dr("Animation","AnimationIteration"),animationstart:dr("Animation","AnimationStart"),transitionend:dr("Transition","TransitionEnd")},Oo={},ts={};De&&(ts=document.createElement("div").style,"AnimationEvent"in window||(delete In.animationend.animation,delete In.animationiteration.animation,delete In.animationstart.animation),"TransitionEvent"in window||delete In.transitionend.transition);function uo(e){if(Oo[e])return Oo[e];if(!In[e])return e;var n=In[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in ts)return Oo[e]=n[t];return e}var rs=uo("animationend"),os=uo("animationiteration"),is=uo("animationstart"),ls=uo("transitionend"),us=new Map,nl=new Map,od=["abort","abort",rs,"animationEnd",os,"animationIteration",is,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",ls,"transitionEnd","waiting","waiting"];function tl(e,n){for(var t=0;t<e.length;t+=2){var r=e[t],o=e[t+1];o="on"+(o[0].toUpperCase()+o.slice(1)),nl.set(r,n),us.set(r,o),wn(o,[r])}}var id=X.unstable_now;id();var N=8;function Wn(e){if((1&e)!==0)return N=15,1;if((2&e)!==0)return N=14,2;if((4&e)!==0)return N=13,4;var n=24&e;return n!==0?(N=12,n):(e&32)!==0?(N=11,32):(n=192&e,n!==0?(N=10,n):(e&256)!==0?(N=9,256):(n=3584&e,n!==0?(N=8,n):(e&4096)!==0?(N=7,4096):(n=4186112&e,n!==0?(N=6,n):(n=62914560&e,n!==0?(N=5,n):e&67108864?(N=4,67108864):(e&134217728)!==0?(N=3,134217728):(n=805306368&e,n!==0?(N=2,n):(1073741824&e)!==0?(N=1,1073741824):(N=8,e))))))}function ld(e){switch(e){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function ud(e){switch(e){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(S(358,e))}}function Ut(e,n){var t=e.pendingLanes;if(t===0)return N=0;var r=0,o=0,i=e.expiredLanes,l=e.suspendedLanes,u=e.pingedLanes;if(i!==0)r=i,o=N=15;else if(i=t&134217727,i!==0){var a=i&~l;a!==0?(r=Wn(a),o=N):(u&=i,u!==0&&(r=Wn(u),o=N))}else i=t&~l,i!==0?(r=Wn(i),o=N):u!==0&&(r=Wn(u),o=N);if(r===0)return 0;if(r=31-rn(r),r=t&((0>r?0:1<<r)<<1)-1,n!==0&&n!==r&&(n&l)===0){if(Wn(n),o<=N)return n;N=o}if(n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-rn(n),o=1<<t,r|=e[t],n&=~o;return r}function as(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Lr(e,n){switch(e){case 15:return 1;case 14:return 2;case 12:return e=Rn(24&~n),e===0?Lr(10,n):e;case 10:return e=Rn(192&~n),e===0?Lr(8,n):e;case 8:return e=Rn(3584&~n),e===0&&(e=Rn(4186112&~n),e===0&&(e=512)),e;case 2:return n=Rn(805306368&~n),n===0&&(n=268435456),n}throw Error(S(358,e))}function Rn(e){return e&-e}function To(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function ao(e,n,t){e.pendingLanes|=n;var r=n-1;e.suspendedLanes&=r,e.pingedLanes&=r,e=e.eventTimes,n=31-rn(n),e[n]=t}var rn=Math.clz32?Math.clz32:cd,ad=Math.log,sd=Math.LN2;function cd(e){return e===0?32:31-(ad(e)/sd|0)|0}var dd=X.unstable_UserBlockingPriority,fd=X.unstable_runWithPriority,wr=!0;function pd(e,n,t,r){yn||Zi();var o=rl,i=yn;yn=!0;try{Ka(o,e,n,t,r)}finally{(yn=i)||Ji()}}function md(e,n,t,r){fd(dd,rl.bind(null,e,n,t,r))}function rl(e,n,t,r){if(wr){var o;if((o=(n&4)===0)&&0<Ee.length&&-1<ru.indexOf(e))e=ui(null,e,n,t,r),Ee.push(e);else{var i=ol(e,n,t,r);if(i===null)o&&ou(e,r);else{if(o){if(-1<ru.indexOf(e)){e=ui(i,e,n,t,r),Ee.push(e);return}if(nd(i,e,n,t,r))return;ou(e,r)}Ms(e,n,r,null,t)}}}}function ol(e,n,t,r){var o=Qi(r);if(o=hn(o),o!==null){var i=Tn(o);if(i===null)o=null;else{var l=i.tag;if(l===13){if(o=Qa(i),o!==null)return o;o=null}else if(l===3){if(i.stateNode.hydrate)return i.tag===3?i.stateNode.containerInfo:null;o=null}else i!==o&&(o=null)}}return Ms(e,n,r,o,t),null}var Ve=null,il=null,Or=null;function ss(){if(Or)return Or;var e,n=il,t=n.length,r,o="value"in Ve?Ve.value:Ve.textContent,i=o.length;for(e=0;e<t&&n[e]===o[e];e++);var l=t-e;for(r=1;r<=l&&n[t-r]===o[i-r];r++);return Or=o.slice(e,1<r?1-r:void 0)}function Tr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function fr(){return!0}function lu(){return!1}function ye(e){function n(t,r,o,i,l){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?fr:lu,this.isPropagationStopped=lu,this}return q(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=fr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=fr)},persist:function(){},isPersistent:fr}),n}var nt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ll=ye(nt),er=q({},nt,{view:0,detail:0}),yd=ye(er),Co,Eo,pt,so=q({},er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ul,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pt&&(pt&&e.type==="mousemove"?(Co=e.screenX-pt.screenX,Eo=e.screenY-pt.screenY):Eo=Co=0,pt=e),Co)},movementY:function(e){return"movementY"in e?e.movementY:Eo}}),uu=ye(so),hd=q({},so,{dataTransfer:0}),gd=ye(hd),Sd=q({},er,{relatedTarget:0}),xo=ye(Sd),vd=q({},nt,{animationName:0,elapsedTime:0,pseudoElement:0}),kd=ye(vd),Md=q({},nt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bd=ye(Md),wd=q({},nt,{data:0}),au=ye(wd),Od={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Td={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ed(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Cd[e])?!!n[e]:!1}function ul(){return Ed}var xd=q({},er,{key:function(e){if(e.key){var n=Od[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Tr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Td[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ul,charCode:function(e){return e.type==="keypress"?Tr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Tr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zd=ye(xd),Wd=q({},so,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),su=ye(Wd),Rd=q({},er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ul}),Bd=ye(Rd),Id=q({},nt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pd=ye(Id),Nd=q({},so,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ld=ye(Nd),Fd=[9,13,27,32],al=De&&"CompositionEvent"in window,Wt=null;De&&"documentMode"in document&&(Wt=document.documentMode);var Ad=De&&"TextEvent"in window&&!Wt,cs=De&&(!al||Wt&&8<Wt&&11>=Wt),cu=String.fromCharCode(32),du=!1;function ds(e,n){switch(e){case"keyup":return Fd.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pn=!1;function _d(e,n){switch(e){case"compositionend":return fs(n);case"keypress":return n.which!==32?null:(du=!0,cu);case"textInput":return e=n.data,e===cu&&du?null:e;default:return null}}function Dd(e,n){if(Pn)return e==="compositionend"||!al&&ds(e,n)?(e=ss(),Or=il=Ve=null,Pn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return cs&&n.locale!=="ko"?null:n.data;default:return null}}var qd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!qd[e.type]:n==="textarea"}function ps(e,n,t,r){Ha(r),n=Fr(n,"onChange"),0<n.length&&(t=new ll("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Rt=null,Vt=null;function jd(e){Ss(e,0)}function co(e){var n=Ln(e);if(_a(n))return e}function Ud(e,n){if(e==="change")return n}var ms=!1;if(De){var zo;if(De){var Wo="oninput"in document;if(!Wo){var pu=document.createElement("div");pu.setAttribute("oninput","return;"),Wo=typeof pu.oninput=="function"}zo=Wo}else zo=!1;ms=zo&&(!document.documentMode||9<document.documentMode)}function mu(){Rt&&(Rt.detachEvent("onpropertychange",ys),Vt=Rt=null)}function ys(e){if(e.propertyName==="value"&&co(Vt)){var n=[];if(ps(n,Vt,e,Qi(e)),e=jd,yn)e(n);else{yn=!0;try{Xi(e,n)}finally{yn=!1,Ji()}}}}function Vd(e,n,t){e==="focusin"?(mu(),Rt=n,Vt=t,Rt.attachEvent("onpropertychange",ys)):e==="focusout"&&mu()}function Gd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return co(Vt)}function Hd(e,n){if(e==="click")return co(n)}function $d(e,n){if(e==="input"||e==="change")return co(n)}function Kd(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ge=typeof Object.is=="function"?Object.is:Kd,Yd=Object.prototype.hasOwnProperty;function Gt(e,n){if(ge(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++)if(!Yd.call(n,t[r])||!ge(e[t[r]],n[t[r]]))return!1;return!0}function yu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hu(e,n){var t=yu(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=yu(t)}}function hs(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?hs(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function gu(){for(var e=window,n=Ir();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Ir(e.document)}return n}function ai(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Qd=De&&"documentMode"in document&&11>=document.documentMode,Nn=null,si=null,Bt=null,ci=!1;function Su(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ci||Nn==null||Nn!==Ir(r)||(r=Nn,"selectionStart"in r&&ai(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bt&&Gt(Bt,r)||(Bt=r,r=Fr(si,"onSelect"),0<r.length&&(n=new ll("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Nn)))}tl("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);tl("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);tl(od,2);for(var vu="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Ro=0;Ro<vu.length;Ro++)nl.set(vu[Ro],0);Yn("onMouseEnter",["mouseout","mouseover"]);Yn("onMouseLeave",["mouseout","mouseover"]);Yn("onPointerEnter",["pointerout","pointerover"]);Yn("onPointerLeave",["pointerout","pointerover"]);wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wn("onBeforeInput",["compositionend","keypress","textInput","paste"]);wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gs=new Set("cancel close invalid load scroll toggle".split(" ").concat(bt));function ku(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Jc(r,n,void 0,e),e.currentTarget=null}function Ss(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var l=r.length-1;0<=l;l--){var u=r[l],a=u.instance,d=u.currentTarget;if(u=u.listener,a!==i&&o.isPropagationStopped())break e;ku(o,u,d),i=a}else for(l=0;l<r.length;l++){if(u=r[l],a=u.instance,d=u.currentTarget,u=u.listener,a!==i&&o.isPropagationStopped())break e;ku(o,u,d),i=a}}}if(Nr)throw e=ii,Nr=!1,ii=null,e}function F(e,n){var t=ws(n),r=e+"__bubble";t.has(r)||(ks(n,e,2,!1),t.add(r))}var Mu="_reactListening"+Math.random().toString(36).slice(2);function vs(e){e[Mu]||(e[Mu]=!0,La.forEach(function(n){gs.has(n)||bu(n,!1,e,null),bu(n,!0,e,null)}))}function bu(e,n,t,r){var o=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,i=t;if(e==="selectionchange"&&t.nodeType!==9&&(i=t.ownerDocument),r!==null&&!n&&gs.has(e)){if(e!=="scroll")return;o|=2,i=r}var l=ws(i),u=e+"__"+(n?"capture":"bubble");l.has(u)||(n&&(o|=4),ks(i,e,o,n),l.add(u))}function ks(e,n,t,r){var o=nl.get(n);switch(o===void 0?2:o){case 0:o=pd;break;case 1:o=md;break;default:o=rl}t=o.bind(null,n,t,e),o=void 0,!oi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function Ms(e,n,t,r,o){var i=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var u=r.stateNode.containerInfo;if(u===o||u.nodeType===8&&u.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;u!==null;){if(l=hn(u),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}u=u.parentNode}}r=r.return}Yc(function(){var d=i,g=Qi(t),T=[];e:{var m=us.get(e);if(m!==void 0){var b=ll,E=e;switch(e){case"keypress":if(Tr(t)===0)break e;case"keydown":case"keyup":b=zd;break;case"focusin":E="focus",b=xo;break;case"focusout":E="blur",b=xo;break;case"beforeblur":case"afterblur":b=xo;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=uu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=gd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Bd;break;case rs:case os:case is:b=kd;break;case ls:b=Pd;break;case"scroll":b=yd;break;case"wheel":b=Ld;break;case"copy":case"cut":case"paste":b=bd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=su}var O=(n&4)!==0,c=!O&&e==="scroll",s=O?m!==null?m+"Capture":null:m;O=[];for(var f=d,p;f!==null;){p=f;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,s!==null&&(y=Dt(f,s),y!=null&&O.push(Ht(f,y,p)))),c)break;f=f.return}0<O.length&&(m=new b(m,E,null,t,g),T.push({event:m,listeners:O}))}}if((n&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",m&&(n&16)===0&&(E=t.relatedTarget||t.fromElement)&&(hn(E)||E[tt]))break e;if((b||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,b?(E=t.relatedTarget||t.toElement,b=d,E=E?hn(E):null,E!==null&&(c=Tn(E),E!==c||E.tag!==5&&E.tag!==6)&&(E=null)):(b=null,E=d),b!==E)){if(O=uu,y="onMouseLeave",s="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(O=su,y="onPointerLeave",s="onPointerEnter",f="pointer"),c=b==null?m:Ln(b),p=E==null?m:Ln(E),m=new O(y,f+"leave",b,t,g),m.target=c,m.relatedTarget=p,y=null,hn(g)===d&&(O=new O(s,f+"enter",E,t,g),O.target=p,O.relatedTarget=c,y=O),c=y,b&&E)n:{for(O=b,s=E,f=0,p=O;p;p=xn(p))f++;for(p=0,y=s;y;y=xn(y))p++;for(;0<f-p;)O=xn(O),f--;for(;0<p-f;)s=xn(s),p--;for(;f--;){if(O===s||s!==null&&O===s.alternate)break n;O=xn(O),s=xn(s)}O=null}else O=null;b!==null&&wu(T,m,b,O,!1),E!==null&&c!==null&&wu(T,c,E,O,!0)}}e:{if(m=d?Ln(d):window,b=m.nodeName&&m.nodeName.toLowerCase(),b==="select"||b==="input"&&m.type==="file")var w=Ud;else if(fu(m))if(ms)w=$d;else{w=Gd;var v=Vd}else(b=m.nodeName)&&b.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(w=Hd);if(w&&(w=w(e,d))){ps(T,w,t,g);break e}v&&v(e,m,d),e==="focusout"&&(v=m._wrapperState)&&v.controlled&&m.type==="number"&&Qo(m,"number",m.value)}switch(v=d?Ln(d):window,e){case"focusin":(fu(v)||v.contentEditable==="true")&&(Nn=v,si=d,Bt=null);break;case"focusout":Bt=si=Nn=null;break;case"mousedown":ci=!0;break;case"contextmenu":case"mouseup":case"dragend":ci=!1,Su(T,t,g);break;case"selectionchange":if(Qd)break;case"keydown":case"keyup":Su(T,t,g)}var x;if(al)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Pn?ds(e,t)&&(z="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(z="onCompositionStart");z&&(cs&&t.locale!=="ko"&&(Pn||z!=="onCompositionStart"?z==="onCompositionEnd"&&Pn&&(x=ss()):(Ve=g,il="value"in Ve?Ve.value:Ve.textContent,Pn=!0)),v=Fr(d,z),0<v.length&&(z=new au(z,e,null,t,g),T.push({event:z,listeners:v}),x?z.data=x:(x=fs(t),x!==null&&(z.data=x)))),(x=Ad?_d(e,t):Dd(e,t))&&(d=Fr(d,"onBeforeInput"),0<d.length&&(g=new au("onBeforeInput","beforeinput",null,t,g),T.push({event:g,listeners:d}),g.data=x))}Ss(T,n)})}function Ht(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Fr(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Dt(e,t),i!=null&&r.unshift(Ht(e,i,o)),i=Dt(e,n),i!=null&&r.push(Ht(e,i,o))),e=e.return}return r}function xn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function wu(e,n,t,r,o){for(var i=n._reactName,l=[];t!==null&&t!==r;){var u=t,a=u.alternate,d=u.stateNode;if(a!==null&&a===r)break;u.tag===5&&d!==null&&(u=d,o?(a=Dt(t,i),a!=null&&l.unshift(Ht(t,a,u))):o||(a=Dt(t,i),a!=null&&l.push(Ht(t,a,u)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}function Ar(){}var Bo=null,Io=null;function bs(e,n){switch(e){case"button":case"input":case"select":case"textarea":return!!n.autoFocus}return!1}function di(e,n){return e==="textarea"||e==="option"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ou=typeof setTimeout=="function"?setTimeout:void 0,Xd=typeof clearTimeout=="function"?clearTimeout:void 0;function sl(e){e.nodeType===1?e.textContent="":e.nodeType===9&&(e=e.body,e!=null&&(e.textContent=""))}function Un(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break}return e}function Tu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Po=0;function Zd(e){return{$$typeof:Ki,toString:e,valueOf:e}}var fo=Math.random().toString(36).slice(2),Ge="__reactFiber$"+fo,_r="__reactProps$"+fo,tt="__reactContainer$"+fo,Cu="__reactEvents$"+fo;function hn(e){var n=e[Ge];if(n)return n;for(var t=e.parentNode;t;){if(n=t[tt]||t[Ge]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Tu(e);e!==null;){if(t=e[Ge])return t;e=Tu(e)}return n}e=t,t=e.parentNode}return null}function nr(e){return e=e[Ge]||e[tt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ln(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function po(e){return e[_r]||null}function ws(e){var n=e[Cu];return n===void 0&&(n=e[Cu]=new Set),n}var fi=[],Fn=-1;function an(e){return{current:e}}function _(e){0>Fn||(e.current=fi[Fn],fi[Fn]=null,Fn--)}function V(e,n){Fn++,fi[Fn]=e.current,e.current=n}var on={},ie=an(on),fe=an(!1),kn=on;function Qn(e,n){var t=e.type.contextTypes;if(!t)return on;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in t)o[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function pe(e){return e=e.childContextTypes,e!=null}function Dr(){_(fe),_(ie)}function Eu(e,n,t){if(ie.current!==on)throw Error(S(168));V(ie,n),V(fe,t)}function Os(e,n,t){var r=e.stateNode;if(e=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in e))throw Error(S(108,_n(n)||"Unknown",o));return q({},t,r)}function Cr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||on,kn=ie.current,V(ie,e),V(fe,fe.current),!0}function xu(e,n,t){var r=e.stateNode;if(!r)throw Error(S(169));t?(e=Os(e,n,kn),r.__reactInternalMemoizedMergedChildContext=e,_(fe),_(ie),V(ie,e)):_(fe),V(fe,t)}var cl=null,vn=null,Jd=X.unstable_runWithPriority,dl=X.unstable_scheduleCallback,pi=X.unstable_cancelCallback,ef=X.unstable_shouldYield,zu=X.unstable_requestPaint,mi=X.unstable_now,nf=X.unstable_getCurrentPriorityLevel,mo=X.unstable_ImmediatePriority,Ts=X.unstable_UserBlockingPriority,Cs=X.unstable_NormalPriority,Es=X.unstable_LowPriority,xs=X.unstable_IdlePriority,No={},tf=zu!==void 0?zu:function(){},Ne=null,Er=null,Lo=!1,Wu=mi(),re=1e4>Wu?mi:function(){return mi()-Wu};function Xn(){switch(nf()){case mo:return 99;case Ts:return 98;case Cs:return 97;case Es:return 96;case xs:return 95;default:throw Error(S(332))}}function zs(e){switch(e){case 99:return mo;case 98:return Ts;case 97:return Cs;case 96:return Es;case 95:return xs;default:throw Error(S(332))}}function Mn(e,n){return e=zs(e),Jd(e,n)}function $t(e,n,t){return e=zs(e),dl(e,n,t)}function Be(){if(Er!==null){var e=Er;Er=null,pi(e)}Ws()}function Ws(){if(!Lo&&Ne!==null){Lo=!0;var e=0;try{var n=Ne;Mn(99,function(){for(;e<n.length;e++){var t=n[e];do t=t(!0);while(t!==null)}}),Ne=null}catch(t){throw Ne!==null&&(Ne=Ne.slice(e+1)),dl(mo,Be),t}finally{Lo=!1}}}var rf=On.ReactCurrentBatchConfig;function Te(e,n){if(e&&e.defaultProps){n=q({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var qr=an(null),jr=null,An=null,Ur=null;function fl(){Ur=An=jr=null}function pl(e){var n=qr.current;_(qr),e.type._context._currentValue=n}function Rs(e,n){for(;e!==null;){var t=e.alternate;if((e.childLanes&n)===n){if(t===null||(t.childLanes&n)===n)break;t.childLanes|=n}else e.childLanes|=n,t!==null&&(t.childLanes|=n);e=e.return}}function Vn(e,n){jr=e,Ur=An=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(Ce=!0),e.firstContext=null)}function ke(e,n){if(Ur!==e&&n!==!1&&n!==0)if((typeof n!="number"||n===1073741823)&&(Ur=e,n=1073741823),n={context:e,observedBits:n,next:null},An===null){if(jr===null)throw Error(S(308));An=n,jr.dependencies={lanes:0,firstContext:n,responders:null}}else An=An.next=n;return e._currentValue}var je=!1;function ml(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function Bs(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Xe(e,n){if(e=e.updateQueue,e!==null){e=e.shared;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}}function Ru(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?o=i=l:i=i.next=l,t=t.next}while(t!==null);i===null?o=i=n:i=i.next=n}else o=i=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Kt(e,n,t,r){var o=e.updateQueue;je=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,u=o.shared.pending;if(u!==null){o.shared.pending=null;var a=u,d=a.next;a.next=null,l===null?i=d:l.next=d,l=a;var g=e.alternate;if(g!==null){g=g.updateQueue;var T=g.lastBaseUpdate;T!==l&&(T===null?g.firstBaseUpdate=d:T.next=d,g.lastBaseUpdate=a)}}if(i!==null){T=o.baseState,l=0,g=d=a=null;do{u=i.lane;var m=i.eventTime;if((r&u)===u){g!==null&&(g=g.next={eventTime:m,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var b=e,E=i;switch(u=n,m=t,E.tag){case 1:if(b=E.payload,typeof b=="function"){T=b.call(m,T,u);break e}T=b;break e;case 3:b.flags=b.flags&-4097|64;case 0:if(b=E.payload,u=typeof b=="function"?b.call(m,T,u):b,u==null)break e;T=q({},T,u);break e;case 2:je=!0}}i.callback!==null&&(e.flags|=32,u=o.effects,u===null?o.effects=[i]:u.push(i))}else m={eventTime:m,lane:u,tag:i.tag,payload:i.payload,callback:i.callback,next:null},g===null?(d=g=m,a=T):g=g.next=m,l|=u;if(i=i.next,i===null){if(u=o.shared.pending,u===null)break;i=u.next,u.next=null,o.lastBaseUpdate=u,o.shared.pending=null}}while(1);g===null&&(a=T),o.baseState=a,o.firstBaseUpdate=d,o.lastBaseUpdate=g,rr|=l,e.lanes=l,e.memoizedState=T}}function Bu(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(S(191,o));o.call(r)}}}var Is=new oo.Component().refs;function Vr(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:q({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var yo={isMounted:function(e){return(e=e._reactInternals)?Tn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=me(),o=Ze(e),i=Qe(r,o);i.payload=n,t!=null&&(i.callback=t),Xe(e,i),Je(e,o,r)},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=me(),o=Ze(e),i=Qe(r,o);i.tag=1,i.payload=n,t!=null&&(i.callback=t),Xe(e,i),Je(e,o,r)},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=me(),r=Ze(e),o=Qe(t,r);o.tag=2,n!=null&&(o.callback=n),Xe(e,o),Je(e,r,t)}};function Iu(e,n,t,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):n.prototype&&n.prototype.isPureReactComponent?!Gt(t,r)||!Gt(o,i):!0}function Ps(e,n,t){var r=!1,o=on,i=n.contextType;return typeof i=="object"&&i!==null?i=ke(i):(o=pe(n)?kn:ie.current,r=n.contextTypes,i=(r=r!=null)?Qn(e,o):on),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=yo,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),n}function Pu(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&yo.enqueueReplaceState(n,n.state,null)}function yi(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs=Is,ml(e);var i=n.contextType;typeof i=="object"&&i!==null?o.context=ke(i):(i=pe(n)?kn:ie.current,o.context=Qn(e,i)),Kt(e,t,o,r),o.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Vr(e,n,i,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&yo.enqueueReplaceState(o,o.state,null),Kt(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4)}var pr=Array.isArray;function mt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(S(309));var r=t.stateNode}if(!r)throw Error(S(147,e));var o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(i){var l=r.refs;l===Is&&(l=r.refs={}),i===null?delete l[o]:l[o]=i},n._stringRef=o,n)}if(typeof e!="string")throw Error(S(284));if(!t._owner)throw Error(S(290,e))}return e}function mr(e,n){if(e.type!=="textarea")throw Error(S(31,Object.prototype.toString.call(n)==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":n))}function Ns(e){function n(c,s){if(e){var f=c.lastEffect;f!==null?(f.nextEffect=s,c.lastEffect=s):c.firstEffect=c.lastEffect=s,s.nextEffect=null,s.flags=8}}function t(c,s){if(!e)return null;for(;s!==null;)n(c,s),s=s.sibling;return null}function r(c,s){for(c=new Map;s!==null;)s.key!==null?c.set(s.key,s):c.set(s.index,s),s=s.sibling;return c}function o(c,s){return c=un(c,s),c.index=0,c.sibling=null,c}function i(c,s,f){return c.index=f,e?(f=c.alternate,f!==null?(f=f.index,f<s?(c.flags=2,s):f):(c.flags=2,s)):s}function l(c){return e&&c.alternate===null&&(c.flags=2),c}function u(c,s,f,p){return s===null||s.tag!==6?(s=qo(f,c.mode,p),s.return=c,s):(s=o(s,f),s.return=c,s)}function a(c,s,f,p){return s!==null&&s.elementType===f.type?(p=o(s,f.props),p.ref=mt(c,s,f),p.return=c,p):(p=Rr(f.type,f.key,f.props,null,c.mode,p),p.ref=mt(c,s,f),p.return=c,p)}function d(c,s,f,p){return s===null||s.tag!==4||s.stateNode.containerInfo!==f.containerInfo||s.stateNode.implementation!==f.implementation?(s=jo(f,c.mode,p),s.return=c,s):(s=o(s,f.children||[]),s.return=c,s)}function g(c,s,f,p,y){return s===null||s.tag!==7?(s=Kn(f,c.mode,p,y),s.return=c,s):(s=o(s,f),s.return=c,s)}function T(c,s,f){if(typeof s=="string"||typeof s=="number")return s=qo(""+s,c.mode,f),s.return=c,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case kt:return f=Rr(s.type,s.key,s.props,null,c.mode,f),f.ref=mt(c,null,s),f.return=c,f;case mn:return s=jo(s,c.mode,f),s.return=c,s}if(pr(s)||at(s))return s=Kn(s,c.mode,f,null),s.return=c,s;mr(c,s)}return null}function m(c,s,f,p){var y=s!==null?s.key:null;if(typeof f=="string"||typeof f=="number")return y!==null?null:u(c,s,""+f,p);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case kt:return f.key===y?f.type===Ue?g(c,s,f.props.children,p,y):a(c,s,f,p):null;case mn:return f.key===y?d(c,s,f,p):null}if(pr(f)||at(f))return y!==null?null:g(c,s,f,p,null);mr(c,f)}return null}function b(c,s,f,p,y){if(typeof p=="string"||typeof p=="number")return c=c.get(f)||null,u(s,c,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case kt:return c=c.get(p.key===null?f:p.key)||null,p.type===Ue?g(s,c,p.props.children,y,p.key):a(s,c,p,y);case mn:return c=c.get(p.key===null?f:p.key)||null,d(s,c,p,y)}if(pr(p)||at(p))return c=c.get(f)||null,g(s,c,p,y,null);mr(s,p)}return null}function E(c,s,f,p){for(var y=null,w=null,v=s,x=s=0,z=null;v!==null&&x<f.length;x++){v.index>x?(z=v,v=null):z=v.sibling;var M=m(c,v,f[x],p);if(M===null){v===null&&(v=z);break}e&&v&&M.alternate===null&&n(c,v),s=i(M,s,x),w===null?y=M:w.sibling=M,w=M,v=z}if(x===f.length)return t(c,v),y;if(v===null){for(;x<f.length;x++)v=T(c,f[x],p),v!==null&&(s=i(v,s,x),w===null?y=v:w.sibling=v,w=v);return y}for(v=r(c,v);x<f.length;x++)z=b(v,c,x,f[x],p),z!==null&&(e&&z.alternate!==null&&v.delete(z.key===null?x:z.key),s=i(z,s,x),w===null?y=z:w.sibling=z,w=z);return e&&v.forEach(function(R){return n(c,R)}),y}function O(c,s,f,p){var y=at(f);if(typeof y!="function")throw Error(S(150));if(f=y.call(f),f==null)throw Error(S(151));for(var w=y=null,v=s,x=s=0,z=null,M=f.next();v!==null&&!M.done;x++,M=f.next()){v.index>x?(z=v,v=null):z=v.sibling;var R=m(c,v,M.value,p);if(R===null){v===null&&(v=z);break}e&&v&&R.alternate===null&&n(c,v),s=i(R,s,x),w===null?y=R:w.sibling=R,w=R,v=z}if(M.done)return t(c,v),y;if(v===null){for(;!M.done;x++,M=f.next())M=T(c,M.value,p),M!==null&&(s=i(M,s,x),w===null?y=M:w.sibling=M,w=M);return y}for(v=r(c,v);!M.done;x++,M=f.next())M=b(v,c,x,M.value,p),M!==null&&(e&&M.alternate!==null&&v.delete(M.key===null?x:M.key),s=i(M,s,x),w===null?y=M:w.sibling=M,w=M);return e&&v.forEach(function(he){return n(c,he)}),y}return function(c,s,f,p){var y=typeof f=="object"&&f!==null&&f.type===Ue&&f.key===null;y&&(f=f.props.children);var w=typeof f=="object"&&f!==null;if(w)switch(f.$$typeof){case kt:e:{for(w=f.key,y=s;y!==null;){if(y.key===w){switch(y.tag){case 7:if(f.type===Ue){t(c,y.sibling),s=o(y,f.props.children),s.return=c,c=s;break e}break;default:if(y.elementType===f.type){t(c,y.sibling),s=o(y,f.props),s.ref=mt(c,y,f),s.return=c,c=s;break e}}t(c,y);break}else n(c,y);y=y.sibling}f.type===Ue?(s=Kn(f.props.children,c.mode,p,f.key),s.return=c,c=s):(p=Rr(f.type,f.key,f.props,null,c.mode,p),p.ref=mt(c,s,f),p.return=c,c=p)}return l(c);case mn:e:{for(y=f.key;s!==null;){if(s.key===y)if(s.tag===4&&s.stateNode.containerInfo===f.containerInfo&&s.stateNode.implementation===f.implementation){t(c,s.sibling),s=o(s,f.children||[]),s.return=c,c=s;break e}else{t(c,s);break}else n(c,s);s=s.sibling}s=jo(f,c.mode,p),s.return=c,c=s}return l(c)}if(typeof f=="string"||typeof f=="number")return f=""+f,s!==null&&s.tag===6?(t(c,s.sibling),s=o(s,f),s.return=c,c=s):(t(c,s),s=qo(f,c.mode,p),s.return=c,c=s),l(c);if(pr(f))return E(c,s,f,p);if(at(f))return O(c,s,f,p);if(w&&mr(c,f),typeof f=="undefined"&&!y)switch(c.tag){case 1:case 22:case 0:case 11:case 15:throw Error(S(152,_n(c.type)||"Component"))}return t(c,s)}}var Gr=Ns(!0),Ls=Ns(!1),tr={},We=an(tr),Yt=an(tr),Qt=an(tr);function gn(e){if(e===tr)throw Error(S(174));return e}function hi(e,n){switch(V(Qt,n),V(Yt,e),V(We,tr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ei(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ei(n,e)}_(We),V(We,n)}function Zn(){_(We),_(Yt),_(Qt)}function Nu(e){gn(Qt.current);var n=gn(We.current),t=ei(n,e.type);n!==t&&(V(Yt,e),V(We,t))}function yl(e){Yt.current===e&&(_(We),_(Yt))}var U=an(0);function Hr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&64)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Fe=null,He=null,Re=!1;function Fs(e,n){var t=Se(5,null,null,0);t.elementType="DELETED",t.type="DELETED",t.stateNode=n,t.return=e,t.flags=8,e.lastEffect!==null?(e.lastEffect.nextEffect=t,e.lastEffect=t):e.firstEffect=e.lastEffect=t}function Lu(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,!0):!1;case 13:return!1;default:return!1}}function gi(e){if(Re){var n=He;if(n){var t=n;if(!Lu(e,n)){if(n=Un(t.nextSibling),!n||!Lu(e,n)){e.flags=e.flags&-1025|2,Re=!1,Fe=e;return}Fs(Fe,t)}Fe=e,He=Un(n.firstChild)}else e.flags=e.flags&-1025|2,Re=!1,Fe=e}}function Fu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Fe=e}function yr(e){if(e!==Fe)return!1;if(!Re)return Fu(e),Re=!0,!1;var n=e.type;if(e.tag!==5||n!=="head"&&n!=="body"&&!di(n,e.memoizedProps))for(n=He;n;)Fs(e,n),n=Un(n.nextSibling);if(Fu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){He=Un(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}He=null}}else He=Fe?Un(e.stateNode.nextSibling):null;return!0}function Fo(){He=Fe=null,Re=!1}var Gn=[];function hl(){for(var e=0;e<Gn.length;e++)Gn[e]._workInProgressVersionPrimary=null;Gn.length=0}var It=On.ReactCurrentDispatcher,ve=On.ReactCurrentBatchConfig,Xt=0,H=null,te=null,J=null,$r=!1,Pt=!1;function se(){throw Error(S(321))}function gl(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!ge(e[t],n[t]))return!1;return!0}function Sl(e,n,t,r,o,i){if(Xt=i,H=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,It.current=e===null||e.memoizedState===null?lf:uf,e=t(r,o),Pt){i=0;do{if(Pt=!1,!(25>i))throw Error(S(301));i+=1,J=te=null,n.updateQueue=null,It.current=af,e=t(r,o)}while(Pt)}if(It.current=Xr,n=te!==null&&te.next!==null,Xt=0,J=te=H=null,$r=!1,n)throw Error(S(300));return e}function Sn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?H.memoizedState=J=e:J=J.next=e,J}function Cn(){if(te===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var n=J===null?H.memoizedState:J.next;if(n!==null)J=n,te=e;else{if(e===null)throw Error(S(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},J===null?H.memoizedState=J=e:J=J.next=e}return J}function xe(e,n){return typeof n=="function"?n(e):n}function yt(e){var n=Cn(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var r=te,o=r.baseQueue,i=t.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,t.pending=null}if(o!==null){o=o.next,r=r.baseState;var u=l=i=null,a=o;do{var d=a.lane;if((Xt&d)===d)u!==null&&(u=u.next={lane:0,action:a.action,eagerReducer:a.eagerReducer,eagerState:a.eagerState,next:null}),r=a.eagerReducer===e?a.eagerState:e(r,a.action);else{var g={lane:d,action:a.action,eagerReducer:a.eagerReducer,eagerState:a.eagerState,next:null};u===null?(l=u=g,i=r):u=u.next=g,H.lanes|=d,rr|=d}a=a.next}while(a!==null&&a!==o);u===null?i=r:u.next=l,ge(r,n.memoizedState)||(Ce=!0),n.memoizedState=r,n.baseState=i,n.baseQueue=u,t.lastRenderedState=r}return[n.memoizedState,t.dispatch]}function ht(e){var n=Cn(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,i=n.memoizedState;if(o!==null){t.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);ge(i,n.memoizedState)||(Ce=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function Au(e,n,t){var r=n._getVersion;r=r(n._source);var o=n._workInProgressVersionPrimary;if(o!==null?e=o===r:(e=e.mutableReadLanes,(e=(Xt&e)===e)&&(n._workInProgressVersionPrimary=r,Gn.push(n))),e)return t(n._source);throw Gn.push(n),Error(S(350))}function As(e,n,t,r){var o=le;if(o===null)throw Error(S(349));var i=n._getVersion,l=i(n._source),u=It.current,a=u.useState(function(){return Au(o,n,t)}),d=a[1],g=a[0];a=J;var T=e.memoizedState,m=T.refs,b=m.getSnapshot,E=T.source;T=T.subscribe;var O=H;return e.memoizedState={refs:m,source:n,subscribe:r},u.useEffect(function(){m.getSnapshot=t,m.setSnapshot=d;var c=i(n._source);if(!ge(l,c)){c=t(n._source),ge(g,c)||(d(c),c=Ze(O),o.mutableReadLanes|=c&o.pendingLanes),c=o.mutableReadLanes,o.entangledLanes|=c;for(var s=o.entanglements,f=c;0<f;){var p=31-rn(f),y=1<<p;s[p]|=c,f&=~y}}},[t,n,r]),u.useEffect(function(){return r(n._source,function(){var c=m.getSnapshot,s=m.setSnapshot;try{s(c(n._source));var f=Ze(O);o.mutableReadLanes|=f&o.pendingLanes}catch(p){s(function(){throw p})}})},[n,r]),ge(b,t)&&ge(E,n)&&ge(T,r)||(e={pending:null,dispatch:null,lastRenderedReducer:xe,lastRenderedState:g},e.dispatch=d=Ml.bind(null,H,e),a.queue=e,a.baseQueue=null,g=Au(o,n,t),a.memoizedState=a.baseState=g),g}function _s(e,n,t){var r=Cn();return As(r,e,n,t)}function gt(e){var n=Sn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e=n.queue={pending:null,dispatch:null,lastRenderedReducer:xe,lastRenderedState:e},e=e.dispatch=Ml.bind(null,H,e),[n.memoizedState,e]}function Kr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=H.updateQueue,n===null?(n={lastEffect:null},H.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function _u(e){var n=Sn();return e={current:e},n.memoizedState=e}function Yr(){return Cn().memoizedState}function Si(e,n,t,r){var o=Sn();H.flags|=e,o.memoizedState=Kr(1|n,t,void 0,r===void 0?null:r)}function vl(e,n,t,r){var o=Cn();r=r===void 0?null:r;var i=void 0;if(te!==null){var l=te.memoizedState;if(i=l.destroy,r!==null&&gl(r,l.deps)){Kr(n,t,i,r);return}}H.flags|=e,o.memoizedState=Kr(1|n,t,i,r)}function Du(e,n){return Si(516,4,e,n)}function Qr(e,n){return vl(516,4,e,n)}function Ds(e,n){return vl(4,2,e,n)}function qs(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function js(e,n,t){return t=t!=null?t.concat([e]):null,vl(4,2,qs.bind(null,n,e),t)}function kl(){}function Us(e,n){var t=Cn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&gl(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Vs(e,n){var t=Cn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&gl(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function of(e,n){var t=Xn();Mn(98>t?98:t,function(){e(!0)}),Mn(97<t?97:t,function(){var r=ve.transition;ve.transition=1;try{e(!1),n()}finally{ve.transition=r}})}function Ml(e,n,t){var r=me(),o=Ze(e),i={lane:o,action:t,eagerReducer:null,eagerState:null,next:null},l=n.pending;if(l===null?i.next=i:(i.next=l.next,l.next=i),n.pending=i,l=e.alternate,e===H||l!==null&&l===H)Pt=$r=!0;else{if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var u=n.lastRenderedState,a=l(u,t);if(i.eagerReducer=l,i.eagerState=a,ge(a,u))return}catch{}finally{}Je(e,o,r)}}var Xr={readContext:ke,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useOpaqueIdentifier:se,unstable_isNewReconciler:!1},lf={readContext:ke,useCallback:function(e,n){return Sn().memoizedState=[e,n===void 0?null:n],e},useContext:ke,useEffect:Du,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Si(4,2,qs.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Si(4,2,e,n)},useMemo:function(e,n){var t=Sn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Sn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},e=e.dispatch=Ml.bind(null,H,e),[r.memoizedState,e]},useRef:_u,useState:gt,useDebugValue:kl,useDeferredValue:function(e){var n=gt(e),t=n[0],r=n[1];return Du(function(){var o=ve.transition;ve.transition=1;try{r(e)}finally{ve.transition=o}},[e]),t},useTransition:function(){var e=gt(!1),n=e[0];return e=of.bind(null,e[1]),_u(e),[e,n]},useMutableSource:function(e,n,t){var r=Sn();return r.memoizedState={refs:{getSnapshot:n,setSnapshot:null},source:e,subscribe:t},As(r,e,n,t)},useOpaqueIdentifier:function(){if(Re){var e=!1,n=Zd(function(){throw e||(e=!0,t("r:"+(Po++).toString(36))),Error(S(355))}),t=gt(n)[1];return(H.mode&2)===0&&(H.flags|=516,Kr(5,function(){t("r:"+(Po++).toString(36))},void 0,null)),n}return n="r:"+(Po++).toString(36),gt(n),n},unstable_isNewReconciler:!1},uf={readContext:ke,useCallback:Us,useContext:ke,useEffect:Qr,useImperativeHandle:js,useLayoutEffect:Ds,useMemo:Vs,useReducer:yt,useRef:Yr,useState:function(){return yt(xe)},useDebugValue:kl,useDeferredValue:function(e){var n=yt(xe),t=n[0],r=n[1];return Qr(function(){var o=ve.transition;ve.transition=1;try{r(e)}finally{ve.transition=o}},[e]),t},useTransition:function(){var e=yt(xe)[0];return[Yr().current,e]},useMutableSource:_s,useOpaqueIdentifier:function(){return yt(xe)[0]},unstable_isNewReconciler:!1},af={readContext:ke,useCallback:Us,useContext:ke,useEffect:Qr,useImperativeHandle:js,useLayoutEffect:Ds,useMemo:Vs,useReducer:ht,useRef:Yr,useState:function(){return ht(xe)},useDebugValue:kl,useDeferredValue:function(e){var n=ht(xe),t=n[0],r=n[1];return Qr(function(){var o=ve.transition;ve.transition=1;try{r(e)}finally{ve.transition=o}},[e]),t},useTransition:function(){var e=ht(xe)[0];return[Yr().current,e]},useMutableSource:_s,useOpaqueIdentifier:function(){return ht(xe)[0]},unstable_isNewReconciler:!1},sf=On.ReactCurrentOwner,Ce=!1;function ce(e,n,t,r){n.child=e===null?Ls(n,null,t,r):Gr(n,e.child,t,r)}function qu(e,n,t,r,o){t=t.render;var i=n.ref;return Vn(n,o),r=Sl(e,n,t,r,i,o),e!==null&&!Ce?(n.updateQueue=e.updateQueue,n.flags&=-517,e.lanes&=~o,Ae(e,n,o)):(n.flags|=1,ce(e,n,r,o),n.child)}function ju(e,n,t,r,o,i){if(e===null){var l=t.type;return typeof l=="function"&&!El(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,Gs(e,n,l,r,o,i)):(e=Rr(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}return l=e.child,(o&i)===0&&(o=l.memoizedProps,t=t.compare,t=t!==null?t:Gt,t(o,r)&&e.ref===n.ref)?Ae(e,n,i):(n.flags|=1,e=un(l,r),e.ref=n.ref,e.return=n,n.child=e)}function Gs(e,n,t,r,o,i){if(e!==null&&Gt(e.memoizedProps,r)&&e.ref===n.ref)if(Ce=!1,(i&o)!==0)(e.flags&16384)!==0&&(Ce=!0);else return n.lanes=e.lanes,Ae(e,n,i);return vi(e,n,t,r,i)}function Ao(e,n,t){var r=n.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden"||r.mode==="unstable-defer-without-hiding")if((n.mode&4)===0)n.memoizedState={baseLanes:0},gr(n,t);else if((t&1073741824)!==0)n.memoizedState={baseLanes:0},gr(n,i!==null?i.baseLanes:t);else return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e},gr(n,e),null;else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,gr(n,r);return ce(e,n,o,t),n.child}function Hs(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=128)}function vi(e,n,t,r,o){var i=pe(t)?kn:ie.current;return i=Qn(n,i),Vn(n,o),t=Sl(e,n,t,r,i,o),e!==null&&!Ce?(n.updateQueue=e.updateQueue,n.flags&=-517,e.lanes&=~o,Ae(e,n,o)):(n.flags|=1,ce(e,n,t,o),n.child)}function Uu(e,n,t,r,o){if(pe(t)){var i=!0;Cr(n)}else i=!1;if(Vn(n,o),n.stateNode===null)e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2),Ps(n,t,r),yi(n,t,r,o),r=!0;else if(e===null){var l=n.stateNode,u=n.memoizedProps;l.props=u;var a=l.context,d=t.contextType;typeof d=="object"&&d!==null?d=ke(d):(d=pe(t)?kn:ie.current,d=Qn(n,d));var g=t.getDerivedStateFromProps,T=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function";T||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==r||a!==d)&&Pu(n,l,r,d),je=!1;var m=n.memoizedState;l.state=m,Kt(n,r,l,o),a=n.memoizedState,u!==r||m!==a||fe.current||je?(typeof g=="function"&&(Vr(n,t,g,r),a=n.memoizedState),(u=je||Iu(n,t,u,r,m,a,d))?(T||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4)):(typeof l.componentDidMount=="function"&&(n.flags|=4),n.memoizedProps=r,n.memoizedState=a),l.props=r,l.state=a,l.context=d,r=u):(typeof l.componentDidMount=="function"&&(n.flags|=4),r=!1)}else{l=n.stateNode,Bs(e,n),u=n.memoizedProps,d=n.type===n.elementType?u:Te(n.type,u),l.props=d,T=n.pendingProps,m=l.context,a=t.contextType,typeof a=="object"&&a!==null?a=ke(a):(a=pe(t)?kn:ie.current,a=Qn(n,a));var b=t.getDerivedStateFromProps;(g=typeof b=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==T||m!==a)&&Pu(n,l,r,a),je=!1,m=n.memoizedState,l.state=m,Kt(n,r,l,o);var E=n.memoizedState;u!==T||m!==E||fe.current||je?(typeof b=="function"&&(Vr(n,t,b,r),E=n.memoizedState),(d=je||Iu(n,t,d,r,m,E,a))?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,E,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,E,a)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=256)):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(n.flags|=256),n.memoizedProps=r,n.memoizedState=E),l.props=r,l.state=E,l.context=a,r=d):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(n.flags|=256),r=!1)}return ki(e,n,t,r,i,o)}function ki(e,n,t,r,o,i){Hs(e,n);var l=(n.flags&64)!==0;if(!r&&!l)return o&&xu(n,t,!1),Ae(e,n,i);r=n.stateNode,sf.current=n;var u=l&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&l?(n.child=Gr(n,e.child,null,i),n.child=Gr(n,null,u,i)):ce(e,n,u,i),n.memoizedState=r.state,o&&xu(n,t,!0),n.child}function Vu(e){var n=e.stateNode;n.pendingContext?Eu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Eu(e,n.context,!1),hi(e,n.containerInfo)}var hr={dehydrated:null,retryLane:0};function Gu(e,n,t){var r=n.pendingProps,o=U.current,i=!1,l;return(l=(n.flags&64)!==0)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,n.flags&=-65):e!==null&&e.memoizedState===null||r.fallback===void 0||r.unstable_avoidThisFallback===!0||(o|=1),V(U,o&1),e===null?(r.fallback!==void 0&&gi(n),e=r.children,o=r.fallback,i?(e=Hu(n,e,o,t),n.child.memoizedState={baseLanes:t},n.memoizedState=hr,e):typeof r.unstable_expectedLoadTime=="number"?(e=Hu(n,e,o,t),n.child.memoizedState={baseLanes:t},n.memoizedState=hr,n.lanes=33554432,e):(t=xl({mode:"visible",children:e},n.mode,t,null),t.return=n,n.child=t)):e.memoizedState!==null?i?(r=Ku(e,n,r.children,r.fallback,t),i=n.child,o=e.child.memoizedState,i.memoizedState=o===null?{baseLanes:t}:{baseLanes:o.baseLanes|t},i.childLanes=e.childLanes&~t,n.memoizedState=hr,r):(t=$u(e,n,r.children,t),n.memoizedState=null,t):i?(r=Ku(e,n,r.children,r.fallback,t),i=n.child,o=e.child.memoizedState,i.memoizedState=o===null?{baseLanes:t}:{baseLanes:o.baseLanes|t},i.childLanes=e.childLanes&~t,n.memoizedState=hr,r):(t=$u(e,n,r.children,t),n.memoizedState=null,t)}function Hu(e,n,t,r){var o=e.mode,i=e.child;return n={mode:"hidden",children:n},(o&2)===0&&i!==null?(i.childLanes=0,i.pendingProps=n):i=xl(n,o,0,null),t=Kn(t,o,r,null),i.return=e,t.return=e,i.sibling=t,e.child=i,t}function $u(e,n,t,r){var o=e.child;return e=o.sibling,t=un(o,{mode:"visible",children:t}),(n.mode&2)===0&&(t.lanes=r),t.return=n,t.sibling=null,e!==null&&(e.nextEffect=null,e.flags=8,n.firstEffect=n.lastEffect=e),n.child=t}function Ku(e,n,t,r,o){var i=n.mode,l=e.child;e=l.sibling;var u={mode:"hidden",children:t};return(i&2)===0&&n.child!==l?(t=n.child,t.childLanes=0,t.pendingProps=u,l=t.lastEffect,l!==null?(n.firstEffect=t.firstEffect,n.lastEffect=l,l.nextEffect=null):n.firstEffect=n.lastEffect=null):t=un(l,u),e!==null?r=un(e,r):(r=Kn(r,i,o,null),r.flags|=2),r.return=n,t.return=n,t.sibling=r,n.child=t,r}function Yu(e,n){e.lanes|=n;var t=e.alternate;t!==null&&(t.lanes|=n),Rs(e.return,n)}function _o(e,n,t,r,o,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o,lastEffect:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=o,l.lastEffect=i)}function Qu(e,n,t){var r=n.pendingProps,o=r.revealOrder,i=r.tail;if(ce(e,n,r.children,t),r=U.current,(r&2)!==0)r=r&1|2,n.flags|=64;else{if(e!==null&&(e.flags&64)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yu(e,t);else if(e.tag===19)Yu(e,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(U,r),(n.mode&2)===0)n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&Hr(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),_o(n,!1,o,t,i,n.lastEffect);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&Hr(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}_o(n,!0,t,null,i,n.lastEffect);break;case"together":_o(n,!1,null,null,void 0,n.lastEffect);break;default:n.memoizedState=null}return n.child}function Ae(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),rr|=n.lanes,(t&n.childLanes)!==0){if(e!==null&&n.child!==e.child)throw Error(S(153));if(n.child!==null){for(e=n.child,t=un(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=un(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}return null}var $s,Mi,Ks,Ys;$s=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Mi=function(){};Ks=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,gn(We.current);var i=null;switch(t){case"input":o=Ko(e,o),r=Ko(e,r),i=[];break;case"option":o=Xo(e,o),r=Xo(e,r),i=[];break;case"select":o=q({},o,{value:void 0}),r=q({},r,{value:void 0}),i=[];break;case"textarea":o=Zo(e,o),r=Zo(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ar)}ni(t,r);var l;t=null;for(d in o)if(!r.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var u=o[d];for(l in u)u.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(At.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var a=r[d];if(u=o!=null?o[d]:void 0,r.hasOwnProperty(d)&&a!==u&&(a!=null||u!=null))if(d==="style")if(u){for(l in u)!u.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in a)a.hasOwnProperty(l)&&u[l]!==a[l]&&(t||(t={}),t[l]=a[l])}else t||(i||(i=[]),i.push(d,t)),t=a;else d==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,u=u?u.__html:void 0,a!=null&&u!==a&&(i=i||[]).push(d,a)):d==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(d,""+a):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(At.hasOwnProperty(d)?(a!=null&&d==="onScroll"&&F("scroll",e),i||u===a||(i=[])):typeof a=="object"&&a!==null&&a.$$typeof===Ki?a.toString():(i=i||[]).push(d,a))}t&&(i=i||[]).push("style",t);var d=i;(n.updateQueue=d)&&(n.flags|=4)}};Ys=function(e,n,t,r){t!==r&&(n.flags|=4)};function St(e,n){if(!Re)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function cf(e,n,t){var r=n.pendingProps;switch(n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return pe(n.type)&&Dr(),null;case 3:return Zn(),_(fe),_(ie),hl(),r=n.stateNode,r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(yr(n)?n.flags|=4:r.hydrate||(n.flags|=256)),Mi(n),null;case 5:yl(n);var o=gn(Qt.current);if(t=n.type,e!==null&&n.stateNode!=null)Ks(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=128);else{if(!r){if(n.stateNode===null)throw Error(S(166));return null}if(e=gn(We.current),yr(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[Ge]=n,r[_r]=i,t){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(e=0;e<bt.length;e++)F(bt[e],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":Ql(r,i),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},F("invalid",r);break;case"textarea":Zl(r,i),F("invalid",r)}ni(t,i),e=null;for(var l in i)i.hasOwnProperty(l)&&(o=i[l],l==="children"?typeof o=="string"?r.textContent!==o&&(e=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(e=["children",""+o]):At.hasOwnProperty(l)&&o!=null&&l==="onScroll"&&F("scroll",r));switch(t){case"input":sr(r),Xl(r,i,!0);break;case"textarea":sr(r),Jl(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ar)}r=e,n.updateQueue=r,r!==null&&(n.flags|=4)}else{switch(l=o.nodeType===9?o:o.ownerDocument,e===Jo.html&&(e=ja(t)),e===Jo.html?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(t,{is:r.is}):(e=l.createElement(t),t==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,t),e[Ge]=n,e[_r]=r,$s(e,n,!1,!1),n.stateNode=e,l=ti(t,r),t){case"dialog":F("cancel",e),F("close",e),o=r;break;case"iframe":case"object":case"embed":F("load",e),o=r;break;case"video":case"audio":for(o=0;o<bt.length;o++)F(bt[o],e);o=r;break;case"source":F("error",e),o=r;break;case"img":case"image":case"link":F("error",e),F("load",e),o=r;break;case"details":F("toggle",e),o=r;break;case"input":Ql(e,r),o=Ko(e,r),F("invalid",e);break;case"option":o=Xo(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=q({},r,{value:void 0}),F("invalid",e);break;case"textarea":Zl(e,r),o=Zo(e,r),F("invalid",e);break;default:o=r}ni(t,o);var u=o;for(i in u)if(u.hasOwnProperty(i)){var a=u[i];i==="style"?Ga(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Ua(e,a)):i==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&_t(e,a):typeof a=="number"&&_t(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(At.hasOwnProperty(i)?a!=null&&i==="onScroll"&&F("scroll",e):a!=null&&ji(e,i,a,l))}switch(t){case"input":sr(e),Xl(e,r,!1);break;case"textarea":sr(e),Jl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+tn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Dn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Dn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ar)}bs(t,r)&&(n.flags|=4)}n.ref!==null&&(n.flags|=128)}return null;case 6:if(e&&n.stateNode!=null)Ys(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(S(166));t=gn(Qt.current),gn(We.current),yr(n)?(r=n.stateNode,t=n.memoizedProps,r[Ge]=n,r.nodeValue!==t&&(n.flags|=4)):(r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Ge]=n,n.stateNode=r)}return null;case 13:return _(U),r=n.memoizedState,(n.flags&64)!==0?(n.lanes=t,n):(r=r!==null,t=!1,e===null?n.memoizedProps.fallback!==void 0&&yr(n):t=e.memoizedState!==null,r&&!t&&(n.mode&2)!==0&&(e===null&&n.memoizedProps.unstable_avoidThisFallback!==!0||(U.current&1)!==0?ee===0&&(ee=3):((ee===0||ee===3)&&(ee=4),le===null||(rr&134217727)===0&&(ot&134217727)===0||Hn(le,oe))),(r||t)&&(n.flags|=4),null);case 4:return Zn(),Mi(n),e===null&&vs(n.stateNode.containerInfo),null;case 10:return pl(n),null;case 17:return pe(n.type)&&Dr(),null;case 19:if(_(U),r=n.memoizedState,r===null)return null;if(i=(n.flags&64)!==0,l=r.rendering,l===null)if(i)St(r,!1);else{if(ee!==0||e!==null&&(e.flags&64)!==0)for(e=n.child;e!==null;){if(l=Hr(e),l!==null){for(n.flags|=64,St(r,!1),i=l.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),r.lastEffect===null&&(n.firstEffect=null),n.lastEffect=r.lastEffect,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=2,i.nextEffect=null,i.firstEffect=null,i.lastEffect=null,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return V(U,U.current&1|2),n.child}e=e.sibling}r.tail!==null&&re()>Ei&&(n.flags|=64,i=!0,St(r,!1),n.lanes=33554432)}else{if(!i)if(e=Hr(l),e!==null){if(n.flags|=64,i=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),St(r,!0),r.tail===null&&r.tailMode==="hidden"&&!l.alternate&&!Re)return n=n.lastEffect=r.lastEffect,n!==null&&(n.nextEffect=null),null}else 2*re()-r.renderingStartTime>Ei&&t!==1073741824&&(n.flags|=64,i=!0,St(r,!1),n.lanes=33554432);r.isBackwards?(l.sibling=n.child,n.child=l):(t=r.last,t!==null?t.sibling=l:n.child=l,r.last=l)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.lastEffect=n.lastEffect,r.renderingStartTime=re(),t.sibling=null,n=U.current,V(U,i?n&1|2:n&1),t):null;case 23:case 24:return Cl(),e!==null&&e.memoizedState!==null!=(n.memoizedState!==null)&&r.mode!=="unstable-defer-without-hiding"&&(n.flags|=4),null}throw Error(S(156,n.tag))}function df(e){switch(e.tag){case 1:pe(e.type)&&Dr();var n=e.flags;return n&4096?(e.flags=n&-4097|64,e):null;case 3:if(Zn(),_(fe),_(ie),hl(),n=e.flags,(n&64)!==0)throw Error(S(285));return e.flags=n&-4097|64,e;case 5:return yl(e),null;case 13:return _(U),n=e.flags,n&4096?(e.flags=n&-4097|64,e):null;case 19:return _(U),null;case 4:return Zn(),null;case 10:return pl(e),null;case 23:case 24:return Cl(),null;default:return null}}function bl(e,n){try{var t="",r=n;do t+=Vc(r),r=r.return;while(r);var o=t}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:o}}function bi(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var ff=typeof WeakMap=="function"?WeakMap:Map;function Qs(e,n,t){t=Qe(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Jr||(Jr=!0,xi=r),bi(e,n)},t}function Xs(e,n,t){t=Qe(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return bi(e,n),r(o)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){typeof r!="function"&&(ze===null?ze=new Set([this]):ze.add(this),bi(e,n));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}var pf=typeof WeakSet=="function"?WeakSet:Set;function Xu(e){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(t){en(e,t)}else n.current=null}function mf(e,n){switch(n.tag){case 0:case 11:case 15:case 22:return;case 1:if(n.flags&256&&e!==null){var t=e.memoizedProps,r=e.memoizedState;e=n.stateNode,n=e.getSnapshotBeforeUpdate(n.elementType===n.type?t:Te(n.type,t),r),e.__reactInternalSnapshotBeforeUpdate=n}return;case 3:n.flags&256&&sl(n.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(S(163))}function yf(e,n,t){switch(t.tag){case 0:case 11:case 15:case 22:if(n=t.updateQueue,n=n!==null?n.lastEffect:null,n!==null){e=n=n.next;do{if((e.tag&3)===3){var r=e.create;e.destroy=r()}e=e.next}while(e!==n)}if(n=t.updateQueue,n=n!==null?n.lastEffect:null,n!==null){e=n=n.next;do{var o=e;r=o.next,o=o.tag,(o&4)!==0&&(o&1)!==0&&(lc(t,e),wf(t,e)),e=r}while(e!==n)}return;case 1:e=t.stateNode,t.flags&4&&(n===null?e.componentDidMount():(r=t.elementType===t.type?n.memoizedProps:Te(t.type,n.memoizedProps),e.componentDidUpdate(r,n.memoizedState,e.__reactInternalSnapshotBeforeUpdate))),n=t.updateQueue,n!==null&&Bu(t,n,e);return;case 3:if(n=t.updateQueue,n!==null){if(e=null,t.child!==null)switch(t.child.tag){case 5:e=t.child.stateNode;break;case 1:e=t.child.stateNode}Bu(t,n,e)}return;case 5:e=t.stateNode,n===null&&t.flags&4&&bs(t.type,t.memoizedProps)&&e.focus();return;case 6:return;case 4:return;case 12:return;case 13:t.memoizedState===null&&(t=t.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&ns(t))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(S(163))}function Zu(e,n){for(var t=e;;){if(t.tag===5){var r=t.stateNode;if(n)r=r.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{r=t.stateNode;var o=t.memoizedProps.style;o=o!=null&&o.hasOwnProperty("display")?o.display:null,r.style.display=Va("display",o)}}else if(t.tag===6)t.stateNode.nodeValue=n?"":t.memoizedProps;else if((t.tag!==23&&t.tag!==24||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}}function Ju(e,n){if(vn&&typeof vn.onCommitFiberUnmount=="function")try{vn.onCommitFiberUnmount(cl,n)}catch{}switch(n.tag){case 0:case 11:case 14:case 15:case 22:if(e=n.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var t=e=e.next;do{var r=t,o=r.destroy;if(r=r.tag,o!==void 0)if((r&4)!==0)lc(n,t);else{r=n;try{o()}catch(i){en(r,i)}}t=t.next}while(t!==e)}break;case 1:if(Xu(n),e=n.stateNode,typeof e.componentWillUnmount=="function")try{e.props=n.memoizedProps,e.state=n.memoizedState,e.componentWillUnmount()}catch(i){en(n,i)}break;case 5:Xu(n);break;case 4:Zs(e,n)}}function ea(e){e.alternate=null,e.child=null,e.dependencies=null,e.firstEffect=null,e.lastEffect=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.return=null,e.updateQueue=null}function na(e){return e.tag===5||e.tag===3||e.tag===4}function ta(e){e:{for(var n=e.return;n!==null;){if(na(n))break e;n=n.return}throw Error(S(160))}var t=n;switch(n=t.stateNode,t.tag){case 5:var r=!1;break;case 3:n=n.containerInfo,r=!0;break;case 4:n=n.containerInfo,r=!0;break;default:throw Error(S(161))}t.flags&16&&(_t(n,""),t.flags&=-17);e:n:for(t=e;;){for(;t.sibling===null;){if(t.return===null||na(t.return)){t=null;break e}t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue n;t.child.return=t,t=t.child}if(!(t.flags&2)){t=t.stateNode;break e}}r?wi(e,t,n):Oi(e,t,n)}function wi(e,n,t){var r=e.tag,o=r===5||r===6;if(o)e=o?e.stateNode:e.stateNode.instance,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Ar));else if(r!==4&&(e=e.child,e!==null))for(wi(e,n,t),e=e.sibling;e!==null;)wi(e,n,t),e=e.sibling}function Oi(e,n,t){var r=e.tag,o=r===5||r===6;if(o)e=o?e.stateNode:e.stateNode.instance,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Oi(e,n,t),e=e.sibling;e!==null;)Oi(e,n,t),e=e.sibling}function Zs(e,n){for(var t=n,r=!1,o,i;;){if(!r){r=t.return;e:for(;;){if(r===null)throw Error(S(160));switch(o=r.stateNode,r.tag){case 5:i=!1;break e;case 3:o=o.containerInfo,i=!0;break e;case 4:o=o.containerInfo,i=!0;break e}r=r.return}r=!0}if(t.tag===5||t.tag===6){e:for(var l=e,u=t,a=u;;)if(Ju(l,a),a.child!==null&&a.tag!==4)a.child.return=a,a=a.child;else{if(a===u)break e;for(;a.sibling===null;){if(a.return===null||a.return===u)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}i?(l=o,u=t.stateNode,l.nodeType===8?l.parentNode.removeChild(u):l.removeChild(u)):o.removeChild(t.stateNode)}else if(t.tag===4){if(t.child!==null){o=t.stateNode.containerInfo,i=!0,t.child.return=t,t=t.child;continue}}else if(Ju(e,t),t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return,t.tag===4&&(r=!1)}t.sibling.return=t.return,t=t.sibling}}function Do(e,n){switch(n.tag){case 0:case 11:case 14:case 15:case 22:var t=n.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do(r.tag&3)===3&&(e=r.destroy,r.destroy=void 0,e!==void 0&&e()),r=r.next;while(r!==t)}return;case 1:return;case 5:if(t=n.stateNode,t!=null){r=n.memoizedProps;var o=e!==null?e.memoizedProps:r;e=n.type;var i=n.updateQueue;if(n.updateQueue=null,i!==null){for(t[_r]=r,e==="input"&&r.type==="radio"&&r.name!=null&&Da(t,r),ti(e,o),n=ti(e,r),o=0;o<i.length;o+=2){var l=i[o],u=i[o+1];l==="style"?Ga(t,u):l==="dangerouslySetInnerHTML"?Ua(t,u):l==="children"?_t(t,u):ji(t,l,u,n)}switch(e){case"input":Yo(t,r);break;case"textarea":qa(t,r);break;case"select":e=t._wrapperState.wasMultiple,t._wrapperState.wasMultiple=!!r.multiple,i=r.value,i!=null?Dn(t,!!r.multiple,i,!1):e!==!!r.multiple&&(r.defaultValue!=null?Dn(t,!!r.multiple,r.defaultValue,!0):Dn(t,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(n.stateNode===null)throw Error(S(162));n.stateNode.nodeValue=n.memoizedProps;return;case 3:t=n.stateNode,t.hydrate&&(t.hydrate=!1,ns(t.containerInfo));return;case 12:return;case 13:n.memoizedState!==null&&(Tl=re(),Zu(n.child,!0)),ra(n);return;case 19:ra(n);return;case 17:return;case 23:case 24:Zu(n,n.memoizedState!==null);return}throw Error(S(163))}function ra(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new pf),n.forEach(function(r){var o=Cf.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function hf(e,n){return e!==null&&(e=e.memoizedState,e===null||e.dehydrated!==null)?(n=n.memoizedState,n!==null&&n.dehydrated===null):!1}var gf=Math.ceil,Zr=On.ReactCurrentDispatcher,wl=On.ReactCurrentOwner,B=0,le=null,K=null,oe=0,bn=0,Ti=an(0),ee=0,ho=null,rt=0,rr=0,ot=0,Ol=0,Ci=null,Tl=0,Ei=1/0;function it(){Ei=re()+500}var C=null,Jr=!1,xi=null,ze=null,ln=!1,Nt=null,wt=90,zi=[],Wi=[],_e=null,Lt=0,Ri=null,xr=-1,Le=0,zr=0,Ft=null,Wr=!1;function me(){return(B&48)!==0?re():xr!==-1?xr:xr=re()}function Ze(e){if(e=e.mode,(e&2)===0)return 1;if((e&4)===0)return Xn()===99?1:2;if(Le===0&&(Le=rt),rf.transition!==0){zr!==0&&(zr=Ci!==null?Ci.pendingLanes:0),e=Le;var n=4186112&~zr;return n&=-n,n===0&&(e=4186112&~e,n=e&-e,n===0&&(n=8192)),n}return e=Xn(),(B&4)!==0&&e===98?e=Lr(12,Le):(e=ld(e),e=Lr(e,Le)),e}function Je(e,n,t){if(50<Lt)throw Lt=0,Ri=null,Error(S(185));if(e=go(e,n),e===null)return null;ao(e,n,t),e===le&&(ot|=n,ee===4&&Hn(e,oe));var r=Xn();n===1?(B&8)!==0&&(B&48)===0?Bi(e):(Me(e,t),B===0&&(it(),Be())):((B&4)===0||r!==98&&r!==99||(_e===null?_e=new Set([e]):_e.add(e)),Me(e,t)),Ci=e}function go(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}function Me(e,n){for(var t=e.callbackNode,r=e.suspendedLanes,o=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var u=31-rn(l),a=1<<u,d=i[u];if(d===-1){if((a&r)===0||(a&o)!==0){d=n,Wn(a);var g=N;i[u]=10<=g?d+250:6<=g?d+5e3:-1}}else d<=n&&(e.expiredLanes|=a);l&=~a}if(r=Ut(e,e===le?oe:0),n=N,r===0)t!==null&&(t!==No&&pi(t),e.callbackNode=null,e.callbackPriority=0);else{if(t!==null){if(e.callbackPriority===n)return;t!==No&&pi(t)}n===15?(t=Bi.bind(null,e),Ne===null?(Ne=[t],Er=dl(mo,Ws)):Ne.push(t),t=No):n===14?t=$t(99,Bi.bind(null,e)):(t=ud(n),t=$t(t,Js.bind(null,e))),e.callbackPriority=n,e.callbackNode=t}}function Js(e){if(xr=-1,zr=Le=0,(B&48)!==0)throw Error(S(327));var n=e.callbackNode;if(sn()&&e.callbackNode!==n)return null;var t=Ut(e,e===le?oe:0);if(t===0)return null;var r=t,o=B;B|=16;var i=rc();(le!==e||oe!==r)&&(it(),$n(e,r));do try{kf();break}catch(u){tc(e,u)}while(1);if(fl(),Zr.current=i,B=o,K!==null?r=0:(le=null,oe=0,r=ee),(rt&ot)!==0)$n(e,0);else if(r!==0){if(r===2&&(B|=64,e.hydrate&&(e.hydrate=!1,sl(e.containerInfo)),t=as(e),t!==0&&(r=Ot(e,t))),r===1)throw n=ho,$n(e,0),Hn(e,t),Me(e,re()),n;switch(e.finishedWork=e.current.alternate,e.finishedLanes=t,r){case 0:case 1:throw Error(S(345));case 2:fn(e);break;case 3:if(Hn(e,t),(t&62914560)===t&&(r=Tl+500-re(),10<r)){if(Ut(e,0)!==0)break;if(o=e.suspendedLanes,(o&t)!==t){me(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ou(fn.bind(null,e),r);break}fn(e);break;case 4:if(Hn(e,t),(t&4186112)===t)break;for(r=e.eventTimes,o=-1;0<t;){var l=31-rn(t);i=1<<l,l=r[l],l>o&&(o=l),t&=~i}if(t=o,t=re()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*gf(t/1960))-t,10<t){e.timeoutHandle=Ou(fn.bind(null,e),t);break}fn(e);break;case 5:fn(e);break;default:throw Error(S(329))}}return Me(e,re()),e.callbackNode===n?Js.bind(null,e):null}function Hn(e,n){for(n&=~Ol,n&=~ot,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-rn(n),r=1<<t;e[t]=-1,n&=~r}}function Bi(e){if((B&48)!==0)throw Error(S(327));if(sn(),e===le&&(e.expiredLanes&oe)!==0){var n=oe,t=Ot(e,n);(rt&ot)!==0&&(n=Ut(e,n),t=Ot(e,n))}else n=Ut(e,0),t=Ot(e,n);if(e.tag!==0&&t===2&&(B|=64,e.hydrate&&(e.hydrate=!1,sl(e.containerInfo)),n=as(e),n!==0&&(t=Ot(e,n))),t===1)throw t=ho,$n(e,0),Hn(e,n),Me(e,re()),t;return e.finishedWork=e.current.alternate,e.finishedLanes=n,fn(e),Me(e,re()),null}function Sf(){if(_e!==null){var e=_e;_e=null,e.forEach(function(n){n.expiredLanes|=24&n.pendingLanes,Me(n,re())})}Be()}function ec(e,n){var t=B;B|=1;try{return e(n)}finally{B=t,B===0&&(it(),Be())}}function nc(e,n){var t=B;B&=-2,B|=8;try{return e(n)}finally{B=t,B===0&&(it(),Be())}}function gr(e,n){V(Ti,bn),bn|=n,rt|=n}function Cl(){bn=Ti.current,_(Ti)}function $n(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Xd(t)),K!==null)for(t=K.return;t!==null;){var r=t;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&Dr();break;case 3:Zn(),_(fe),_(ie),hl();break;case 5:yl(r);break;case 4:Zn();break;case 13:_(U);break;case 19:_(U);break;case 10:pl(r);break;case 23:case 24:Cl()}t=t.return}le=e,K=un(e.current,null),oe=bn=rt=n,ee=0,ho=null,Ol=ot=rr=0}function tc(e,n){do{var t=K;try{if(fl(),It.current=Xr,$r){for(var r=H.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}$r=!1}if(Xt=0,J=te=H=null,Pt=!1,wl.current=null,t===null||t.return===null){ee=1,ho=n,K=null;break}e:{var i=e,l=t.return,u=t,a=n;if(n=oe,u.flags|=2048,u.firstEffect=u.lastEffect=null,a!==null&&typeof a=="object"&&typeof a.then=="function"){var d=a;if((u.mode&2)===0){var g=u.alternate;g?(u.updateQueue=g.updateQueue,u.memoizedState=g.memoizedState,u.lanes=g.lanes):(u.updateQueue=null,u.memoizedState=null)}var T=(U.current&1)!==0,m=l;do{var b;if(b=m.tag===13){var E=m.memoizedState;if(E!==null)b=E.dehydrated!==null;else{var O=m.memoizedProps;b=O.fallback===void 0?!1:O.unstable_avoidThisFallback!==!0?!0:!T}}if(b){var c=m.updateQueue;if(c===null){var s=new Set;s.add(d),m.updateQueue=s}else c.add(d);if((m.mode&2)===0){if(m.flags|=64,u.flags|=16384,u.flags&=-2981,u.tag===1)if(u.alternate===null)u.tag=17;else{var f=Qe(-1,1);f.tag=2,Xe(u,f)}u.lanes|=1;break e}a=void 0,u=n;var p=i.pingCache;if(p===null?(p=i.pingCache=new ff,a=new Set,p.set(d,a)):(a=p.get(d),a===void 0&&(a=new Set,p.set(d,a))),!a.has(u)){a.add(u);var y=Tf.bind(null,i,d,u);d.then(y,y)}m.flags|=4096,m.lanes=n;break e}m=m.return}while(m!==null);a=Error((_n(u.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}ee!==5&&(ee=2),a=bl(a,u),m=l;do{switch(m.tag){case 3:i=a,m.flags|=4096,n&=-n,m.lanes|=n;var w=Qs(m,i,n);Ru(m,w);break e;case 1:i=a;var v=m.type,x=m.stateNode;if((m.flags&64)===0&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(ze===null||!ze.has(x)))){m.flags|=4096,n&=-n,m.lanes|=n;var z=Xs(m,i,n);Ru(m,z);break e}}m=m.return}while(m!==null)}ic(t)}catch(M){n=M,K===t&&t!==null&&(K=t=t.return);continue}break}while(1)}function rc(){var e=Zr.current;return Zr.current=Xr,e===null?Xr:e}function Ot(e,n){var t=B;B|=16;var r=rc();le===e&&oe===n||$n(e,n);do try{vf();break}catch(o){tc(e,o)}while(1);if(fl(),B=t,Zr.current=r,K!==null)throw Error(S(261));return le=null,oe=0,ee}function vf(){for(;K!==null;)oc(K)}function kf(){for(;K!==null&&!ef();)oc(K)}function oc(e){var n=uc(e.alternate,e,bn);e.memoizedProps=e.pendingProps,n===null?ic(e):K=n,wl.current=null}function ic(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&2048)===0){if(t=cf(t,n,bn),t!==null){K=t;return}if(t=n,t.tag!==24&&t.tag!==23||t.memoizedState===null||(bn&1073741824)!==0||(t.mode&4)===0){for(var r=0,o=t.child;o!==null;)r|=o.lanes|o.childLanes,o=o.sibling;t.childLanes=r}e!==null&&(e.flags&2048)===0&&(e.firstEffect===null&&(e.firstEffect=n.firstEffect),n.lastEffect!==null&&(e.lastEffect!==null&&(e.lastEffect.nextEffect=n.firstEffect),e.lastEffect=n.lastEffect),1<n.flags&&(e.lastEffect!==null?e.lastEffect.nextEffect=n:e.firstEffect=n,e.lastEffect=n))}else{if(t=df(n),t!==null){t.flags&=2047,K=t;return}e!==null&&(e.firstEffect=e.lastEffect=null,e.flags|=2048)}if(n=n.sibling,n!==null){K=n;return}K=n=e}while(n!==null);ee===0&&(ee=5)}function fn(e){var n=Xn();return Mn(99,Mf.bind(null,e,n)),null}function Mf(e,n){do sn();while(Nt!==null);if((B&48)!==0)throw Error(S(327));var t=e.finishedWork;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(S(177));e.callbackNode=null;var r=t.lanes|t.childLanes,o=r,i=e.pendingLanes&~o;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=o,e.mutableReadLanes&=o,e.entangledLanes&=o,o=e.entanglements;for(var l=e.eventTimes,u=e.expirationTimes;0<i;){var a=31-rn(i),d=1<<a;o[a]=0,l[a]=-1,u[a]=-1,i&=~d}if(_e!==null&&(r&24)===0&&_e.has(e)&&_e.delete(e),e===le&&(K=le=null,oe=0),1<t.flags?t.lastEffect!==null?(t.lastEffect.nextEffect=t,r=t.firstEffect):r=t:r=t.firstEffect,r!==null){if(o=B,B|=32,wl.current=null,Bo=wr,l=gu(),ai(l)){if("selectionStart"in l)u={start:l.selectionStart,end:l.selectionEnd};else e:if(u=(u=l.ownerDocument)&&u.defaultView||window,(d=u.getSelection&&u.getSelection())&&d.rangeCount!==0){u=d.anchorNode,i=d.anchorOffset,a=d.focusNode,d=d.focusOffset;try{u.nodeType,a.nodeType}catch{u=null;break e}var g=0,T=-1,m=-1,b=0,E=0,O=l,c=null;n:for(;;){for(var s;O!==u||i!==0&&O.nodeType!==3||(T=g+i),O!==a||d!==0&&O.nodeType!==3||(m=g+d),O.nodeType===3&&(g+=O.nodeValue.length),(s=O.firstChild)!==null;)c=O,O=s;for(;;){if(O===l)break n;if(c===u&&++b===i&&(T=g),c===a&&++E===d&&(m=g),(s=O.nextSibling)!==null)break;O=c,c=O.parentNode}O=s}u=T===-1||m===-1?null:{start:T,end:m}}else u=null;u=u||{start:0,end:0}}else u=null;Io={focusedElem:l,selectionRange:u},wr=!1,Ft=null,Wr=!1,C=r;do try{bf()}catch(M){if(C===null)throw Error(S(330));en(C,M),C=C.nextEffect}while(C!==null);Ft=null,C=r;do try{for(l=e;C!==null;){var f=C.flags;if(f&16&&_t(C.stateNode,""),f&128){var p=C.alternate;if(p!==null){var y=p.ref;y!==null&&(typeof y=="function"?y(null):y.current=null)}}switch(f&1038){case 2:ta(C),C.flags&=-3;break;case 6:ta(C),C.flags&=-3,Do(C.alternate,C);break;case 1024:C.flags&=-1025;break;case 1028:C.flags&=-1025,Do(C.alternate,C);break;case 4:Do(C.alternate,C);break;case 8:u=C,Zs(l,u);var w=u.alternate;ea(u),w!==null&&ea(w)}C=C.nextEffect}}catch(M){if(C===null)throw Error(S(330));en(C,M),C=C.nextEffect}while(C!==null);if(y=Io,p=gu(),f=y.focusedElem,l=y.selectionRange,p!==f&&f&&f.ownerDocument&&hs(f.ownerDocument.documentElement,f)){for(l!==null&&ai(f)&&(p=l.start,y=l.end,y===void 0&&(y=p),"selectionStart"in f?(f.selectionStart=p,f.selectionEnd=Math.min(y,f.value.length)):(y=(p=f.ownerDocument||document)&&p.defaultView||window,y.getSelection&&(y=y.getSelection(),u=f.textContent.length,w=Math.min(l.start,u),l=l.end===void 0?w:Math.min(l.end,u),!y.extend&&w>l&&(u=l,l=w,w=u),u=hu(f,w),i=hu(f,l),u&&i&&(y.rangeCount!==1||y.anchorNode!==u.node||y.anchorOffset!==u.offset||y.focusNode!==i.node||y.focusOffset!==i.offset)&&(p=p.createRange(),p.setStart(u.node,u.offset),y.removeAllRanges(),w>l?(y.addRange(p),y.extend(i.node,i.offset)):(p.setEnd(i.node,i.offset),y.addRange(p)))))),p=[],y=f;y=y.parentNode;)y.nodeType===1&&p.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<p.length;f++)y=p[f],y.element.scrollLeft=y.left,y.element.scrollTop=y.top}wr=!!Bo,Io=Bo=null,e.current=t,C=r;do try{for(f=e;C!==null;){var v=C.flags;if(v&36&&yf(f,C.alternate,C),v&128){p=void 0;var x=C.ref;if(x!==null){var z=C.stateNode;switch(C.tag){case 5:p=z;break;default:p=z}typeof x=="function"?x(p):x.current=p}}C=C.nextEffect}}catch(M){if(C===null)throw Error(S(330));en(C,M),C=C.nextEffect}while(C!==null);C=null,tf(),B=o}else e.current=t;if(ln)ln=!1,Nt=e,wt=n;else for(C=r;C!==null;)n=C.nextEffect,C.nextEffect=null,C.flags&8&&(v=C,v.sibling=null,v.stateNode=null),C=n;if(r=e.pendingLanes,r===0&&(ze=null),r===1?e===Ri?Lt++:(Lt=0,Ri=e):Lt=0,t=t.stateNode,vn&&typeof vn.onCommitFiberRoot=="function")try{vn.onCommitFiberRoot(cl,t,void 0,(t.current.flags&64)===64)}catch{}if(Me(e,re()),Jr)throw Jr=!1,e=xi,xi=null,e;return(B&8)!==0||Be(),null}function bf(){for(;C!==null;){var e=C.alternate;Wr||Ft===null||((C.flags&8)!==0?tu(C,Ft)&&(Wr=!0):C.tag===13&&hf(e,C)&&tu(C,Ft)&&(Wr=!0));var n=C.flags;(n&256)!==0&&mf(e,C),(n&512)===0||ln||(ln=!0,$t(97,function(){return sn(),null})),C=C.nextEffect}}function sn(){if(wt!==90){var e=97<wt?97:wt;return wt=90,Mn(e,Of)}return!1}function wf(e,n){zi.push(n,e),ln||(ln=!0,$t(97,function(){return sn(),null}))}function lc(e,n){Wi.push(n,e),ln||(ln=!0,$t(97,function(){return sn(),null}))}function Of(){if(Nt===null)return!1;var e=Nt;if(Nt=null,(B&48)!==0)throw Error(S(331));var n=B;B|=32;var t=Wi;Wi=[];for(var r=0;r<t.length;r+=2){var o=t[r],i=t[r+1],l=o.destroy;if(o.destroy=void 0,typeof l=="function")try{l()}catch(a){if(i===null)throw Error(S(330));en(i,a)}}for(t=zi,zi=[],r=0;r<t.length;r+=2){o=t[r],i=t[r+1];try{var u=o.create;o.destroy=u()}catch(a){if(i===null)throw Error(S(330));en(i,a)}}for(u=e.current.firstEffect;u!==null;)e=u.nextEffect,u.nextEffect=null,u.flags&8&&(u.sibling=null,u.stateNode=null),u=e;return B=n,Be(),!0}function oa(e,n,t){n=bl(t,n),n=Qs(e,n,1),Xe(e,n),n=me(),e=go(e,1),e!==null&&(ao(e,1,n),Me(e,n))}function en(e,n){if(e.tag===3)oa(e,e,n);else for(var t=e.return;t!==null;){if(t.tag===3){oa(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ze===null||!ze.has(r))){e=bl(n,e);var o=Xs(t,e,1);if(Xe(t,o),o=me(),t=go(t,1),t!==null)ao(t,1,o),Me(t,o);else if(typeof r.componentDidCatch=="function"&&(ze===null||!ze.has(r)))try{r.componentDidCatch(n,e)}catch{}break}}t=t.return}}function Tf(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=me(),e.pingedLanes|=e.suspendedLanes&t,le===e&&(oe&t)===t&&(ee===4||ee===3&&(oe&62914560)===oe&&500>re()-Tl?$n(e,0):Ol|=t),Me(e,n)}function Cf(e,n){var t=e.stateNode;t!==null&&t.delete(n),n=0,n===0&&(n=e.mode,(n&2)===0?n=1:(n&4)===0?n=Xn()===99?1:2:(Le===0&&(Le=rt),n=Rn(62914560&~Le),n===0&&(n=4194304))),t=me(),e=go(e,n),e!==null&&(ao(e,n,t),Me(e,t))}var uc;uc=function(e,n,t){var r=n.lanes;if(e!==null)if(e.memoizedProps!==n.pendingProps||fe.current)Ce=!0;else if((t&r)!==0)Ce=(e.flags&16384)!==0;else{switch(Ce=!1,n.tag){case 3:Vu(n),Fo();break;case 5:Nu(n);break;case 1:pe(n.type)&&Cr(n);break;case 4:hi(n,n.stateNode.containerInfo);break;case 10:r=n.memoizedProps.value;var o=n.type._context;V(qr,o._currentValue),o._currentValue=r;break;case 13:if(n.memoizedState!==null)return(t&n.child.childLanes)!==0?Gu(e,n,t):(V(U,U.current&1),n=Ae(e,n,t),n!==null?n.sibling:null);V(U,U.current&1);break;case 19:if(r=(t&n.childLanes)!==0,(e.flags&64)!==0){if(r)return Qu(e,n,t);n.flags|=64}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),V(U,U.current),r)break;return null;case 23:case 24:return n.lanes=0,Ao(e,n,t)}return Ae(e,n,t)}else Ce=!1;switch(n.lanes=0,n.tag){case 2:if(r=n.type,e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2),e=n.pendingProps,o=Qn(n,ie.current),Vn(n,t),o=Sl(null,n,r,e,o,t),n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0){if(n.tag=1,n.memoizedState=null,n.updateQueue=null,pe(r)){var i=!0;Cr(n)}else i=!1;n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ml(n);var l=r.getDerivedStateFromProps;typeof l=="function"&&Vr(n,r,l,e),o.updater=yo,n.stateNode=o,o._reactInternals=n,yi(n,r,e,t),n=ki(null,n,r,!0,i,t)}else n.tag=0,ce(null,n,o,t),n=n.child;return n;case 16:o=n.elementType;e:{switch(e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2),e=n.pendingProps,i=o._init,o=i(o._payload),n.type=o,i=n.tag=xf(o),e=Te(o,e),i){case 0:n=vi(null,n,o,e,t);break e;case 1:n=Uu(null,n,o,e,t);break e;case 11:n=qu(null,n,o,e,t);break e;case 14:n=ju(null,n,o,Te(o.type,e),r,t);break e}throw Error(S(306,o,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Te(r,o),vi(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Te(r,o),Uu(e,n,r,o,t);case 3:if(Vu(n),r=n.updateQueue,e===null||r===null)throw Error(S(282));if(r=n.pendingProps,o=n.memoizedState,o=o!==null?o.element:null,Bs(e,n),Kt(n,r,null,t),r=n.memoizedState.element,r===o)Fo(),n=Ae(e,n,t);else{if(o=n.stateNode,(i=o.hydrate)&&(He=Un(n.stateNode.containerInfo.firstChild),Fe=n,i=Re=!0),i){if(e=o.mutableSourceEagerHydrationData,e!=null)for(o=0;o<e.length;o+=2)i=e[o],i._workInProgressVersionPrimary=e[o+1],Gn.push(i);for(t=Ls(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|1024,t=t.sibling}else ce(e,n,r,t),Fo();n=n.child}return n;case 5:return Nu(n),e===null&&gi(n),r=n.type,o=n.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,di(r,o)?l=null:i!==null&&di(r,i)&&(n.flags|=16),Hs(e,n),ce(e,n,l,t),n.child;case 6:return e===null&&gi(n),null;case 13:return Gu(e,n,t);case 4:return hi(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Gr(n,null,r,t):ce(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Te(r,o),qu(e,n,r,o,t);case 7:return ce(e,n,n.pendingProps,t),n.child;case 8:return ce(e,n,n.pendingProps.children,t),n.child;case 12:return ce(e,n,n.pendingProps.children,t),n.child;case 10:e:{r=n.type._context,o=n.pendingProps,l=n.memoizedProps,i=o.value;var u=n.type._context;if(V(qr,u._currentValue),u._currentValue=i,l!==null)if(u=l.value,i=ge(u,i)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(u,i):1073741823)|0,i===0){if(l.children===o.children&&!fe.current){n=Ae(e,n,t);break e}}else for(u=n.child,u!==null&&(u.return=n);u!==null;){var a=u.dependencies;if(a!==null){l=u.child;for(var d=a.firstContext;d!==null;){if(d.context===r&&(d.observedBits&i)!==0){u.tag===1&&(d=Qe(-1,t&-t),d.tag=2,Xe(u,d)),u.lanes|=t,d=u.alternate,d!==null&&(d.lanes|=t),Rs(u.return,t),a.lanes|=t;break}d=d.next}}else l=u.tag===10&&u.type===n.type?null:u.child;if(l!==null)l.return=u;else for(l=u;l!==null;){if(l===n){l=null;break}if(u=l.sibling,u!==null){u.return=l.return,l=u;break}l=l.return}u=l}ce(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,i=n.pendingProps,r=i.children,Vn(n,t),o=ke(o,i.unstable_observedBits),r=r(o),n.flags|=1,ce(e,n,r,t),n.child;case 14:return o=n.type,i=Te(o,n.pendingProps),i=Te(o.type,i),ju(e,n,o,i,r,t);case 15:return Gs(e,n,n.type,n.pendingProps,r,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Te(r,o),e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2),n.tag=1,pe(r)?(e=!0,Cr(n)):e=!1,Vn(n,t),Ps(n,r,o),yi(n,r,o,t),ki(null,n,r,!0,e,t);case 19:return Qu(e,n,t);case 23:return Ao(e,n,t);case 24:return Ao(e,n,t)}throw Error(S(156,n.tag))};function Ef(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function Se(e,n,t,r){return new Ef(e,n,t,r)}function El(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xf(e){if(typeof e=="function")return El(e)?1:0;if(e!=null){if(e=e.$$typeof,e===io)return 11;if(e===lo)return 14}return 2}function un(e,n){var t=e.alternate;return t===null?(t=Se(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.nextEffect=null,t.firstEffect=null,t.lastEffect=null),t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Rr(e,n,t,r,o,i){var l=2;if(r=e,typeof e=="function")El(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Ue:return Kn(t.children,o,i,n);case Fa:l=8,o|=16;break;case Ui:l=8,o|=1;break;case Ct:return e=Se(12,t,n,o|8),e.elementType=Ct,e.type=Ct,e.lanes=i,e;case Et:return e=Se(13,t,n,o),e.type=Et,e.elementType=Et,e.lanes=i,e;case Br:return e=Se(19,t,n,o),e.elementType=Br,e.lanes=i,e;case Yi:return xl(t,o,i,n);case $o:return e=Se(24,t,n,o),e.elementType=$o,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Vi:l=10;break e;case Gi:l=9;break e;case io:l=11;break e;case lo:l=14;break e;case Hi:l=16,r=null;break e;case $i:l=22;break e}throw Error(S(130,e==null?e:typeof e,""))}return n=Se(l,t,n,o),n.elementType=e,n.type=r,n.lanes=i,n}function Kn(e,n,t,r){return e=Se(7,e,r,n),e.lanes=t,e}function xl(e,n,t,r){return e=Se(23,e,r,n),e.elementType=Yi,e.lanes=t,e}function qo(e,n,t){return e=Se(6,e,null,n),e.lanes=t,e}function jo(e,n,t){return n=Se(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function zf(e,n,t){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=t,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=To(0),this.expirationTimes=To(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=To(0),this.mutableSourceEagerHydrationData=null}function Wf(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function eo(e,n,t,r){var o=n.current,i=me(),l=Ze(o);e:if(t){t=t._reactInternals;n:{if(Tn(t)!==t||t.tag!==1)throw Error(S(170));var u=t;do{switch(u.tag){case 3:u=u.stateNode.context;break n;case 1:if(pe(u.type)){u=u.stateNode.__reactInternalMemoizedMergedChildContext;break n}}u=u.return}while(u!==null);throw Error(S(171))}if(t.tag===1){var a=t.type;if(pe(a)){t=Os(t,a,u);break e}}t=u}else t=on;return n.context===null?n.context=t:n.pendingContext=t,n=Qe(i,l),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),Xe(o,n),Je(o,l,i),l}function Uo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ia(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function zl(e,n){ia(e,n),(e=e.alternate)&&ia(e,n)}function Rf(){return null}function Wl(e,n,t){var r=t!=null&&t.hydrationOptions!=null&&t.hydrationOptions.mutableSources||null;if(t=new zf(e,n,t!=null&&t.hydrate===!0),n=Se(3,null,null,n===2?7:n===1?3:0),t.current=n,n.stateNode=t,ml(n),e[tt]=t.current,vs(e.nodeType===8?e.parentNode:e),r)for(e=0;e<r.length;e++){n=r[e];var o=n._getVersion;o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o)}this._internalRoot=t}Wl.prototype.render=function(e){eo(e,this._internalRoot,null,null)};Wl.prototype.unmount=function(){var e=this._internalRoot,n=e.containerInfo;eo(null,e,null,function(){n[tt]=null})};function or(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Bf(e,n){if(n||(n=e?e.nodeType===9?e.documentElement:e.firstChild:null,n=!(!n||n.nodeType!==1||!n.hasAttribute("data-reactroot"))),!n)for(var t;t=e.lastChild;)e.removeChild(t);return new Wl(e,0,n?{hydrate:!0}:void 0)}function So(e,n,t,r,o){var i=t._reactRootContainer;if(i){var l=i._internalRoot;if(typeof o=="function"){var u=o;o=function(){var d=Uo(l);u.call(d)}}eo(n,l,e,o)}else{if(i=t._reactRootContainer=Bf(t,r),l=i._internalRoot,typeof o=="function"){var a=o;o=function(){var d=Uo(l);a.call(d)}}nc(function(){eo(n,l,e,o)})}return Uo(l)}Za=function(e){if(e.tag===13){var n=me();Je(e,4,n),zl(e,4)}};el=function(e){if(e.tag===13){var n=me();Je(e,67108864,n),zl(e,67108864)}};Ja=function(e){if(e.tag===13){var n=me(),t=Ze(e);Je(e,t,n),zl(e,t)}};es=function(e,n){return n()};ri=function(e,n,t){switch(n){case"input":if(Yo(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=po(r);if(!o)throw Error(S(90));_a(r),Yo(r,o)}}}break;case"textarea":qa(e,t);break;case"select":n=t.value,n!=null&&Dn(e,!!t.multiple,n,!1)}};Xi=ec;Ka=function(e,n,t,r,o){var i=B;B|=4;try{return Mn(98,e.bind(null,n,t,r,o))}finally{B=i,B===0&&(it(),Be())}};Zi=function(){(B&49)===0&&(Sf(),sn())};Ya=function(e,n){var t=B;B|=2;try{return e(n)}finally{B=t,B===0&&(it(),Be())}};function ac(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!or(n))throw Error(S(200));return Wf(e,n,null,t)}var If={Events:[nr,Ln,po,Ha,$a,sn,{current:!1}]},vt={findFiberByHostInstance:hn,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},Pf={bundleType:vt.bundleType,version:vt.version,rendererPackageName:vt.rendererPackageName,rendererConfig:vt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:On.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Xa(e),e===null?null:e.stateNode},findFiberByHostInstance:vt.findFiberByHostInstance||Rf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Sr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sr.isDisabled&&Sr.supportsFiber)try{cl=Sr.inject(Pf),vn=Sr}catch{}}be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=If;be.createPortal=ac;be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(S(188)):Error(S(268,Object.keys(e)));return e=Xa(n),e=e===null?null:e.stateNode,e};be.flushSync=function(e,n){var t=B;if((t&48)!==0)return e(n);B|=1;try{if(e)return Mn(99,e.bind(null,n))}finally{B=t,Be()}};be.hydrate=function(e,n,t){if(!or(n))throw Error(S(200));return So(null,e,n,!0,t)};be.render=function(e,n,t){if(!or(n))throw Error(S(200));return So(null,e,n,!1,t)};be.unmountComponentAtNode=function(e){if(!or(e))throw Error(S(40));return e._reactRootContainer?(nc(function(){So(null,null,e,!1,function(){e._reactRootContainer=null,e[tt]=null})}),!0):!1};be.unstable_batchedUpdates=ec;be.unstable_createPortal=function(e,n){return ac(e,n,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};be.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!or(t))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return So(e,n,t,!1,r)};be.version="17.0.2";function sc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sc)}catch(e){console.error(e)}}sc(),Ia.exports=be;var Vp=Ia.exports;function Nf(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function la(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function ua(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?la(Object(t),!0).forEach(function(r){Nf(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):la(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Lf(e,n){return Ff(e)||Af(e,n)||_f(e,n)||Df()}function Ff(e){if(Array.isArray(e))return e}function Af(e,n){if(!(typeof Symbol=="undefined"||!(Symbol.iterator in Object(e)))){var t=[],r=!0,o=!1,i=void 0;try{for(var l=e[Symbol.iterator](),u;!(r=(u=l.next()).done)&&(t.push(u.value),!(n&&t.length===n));r=!0);}catch(a){o=!0,i=a}finally{try{!r&&l.return!=null&&l.return()}finally{if(o)throw i}}return t}}function _f(e,n){if(!!e){if(typeof e=="string")return aa(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return aa(e,n)}}function aa(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Df(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qf(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function sa(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function ca(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?sa(Object(t),!0).forEach(function(r){qf(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):sa(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function jf(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(r){return n.reduceRight(function(o,i){return i(o)},r)}}function Tt(e){return function n(){for(var t=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var l=arguments.length,u=new Array(l),a=0;a<l;a++)u[a]=arguments[a];return n.apply(t,[].concat(o,u))}}}function no(e){return{}.toString.call(e).includes("Object")}function Uf(e){return!Object.keys(e).length}function Zt(e){return typeof e=="function"}function Vf(e,n){return Object.prototype.hasOwnProperty.call(e,n)}function Gf(e,n){return no(n)||nn("changeType"),Object.keys(n).some(function(t){return!Vf(e,t)})&&nn("changeField"),n}function Hf(e){Zt(e)||nn("selectorType")}function $f(e){Zt(e)||no(e)||nn("handlerType"),no(e)&&Object.values(e).some(function(n){return!Zt(n)})&&nn("handlersType")}function Kf(e){e||nn("initialIsRequired"),no(e)||nn("initialType"),Uf(e)&&nn("initialContent")}function Yf(e,n){throw new Error(e[n]||e.default)}var Qf={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},nn=Tt(Yf)(Qf),vr={changes:Gf,selector:Hf,handler:$f,initial:Kf};function Xf(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};vr.initial(e),vr.handler(n);var t={current:e},r=Tt(ep)(t,n),o=Tt(Jf)(t),i=Tt(vr.changes)(e),l=Tt(Zf)(t);function u(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(g){return g};return vr.selector(d),d(t.current)}function a(d){jf(r,o,i,l)(d)}return[u,a]}function Zf(e,n){return Zt(n)?n(e.current):n}function Jf(e,n){return e.current=ca(ca({},e.current),n),n}function ep(e,n,t){return Zt(n)?n(e.current):Object.keys(t).forEach(function(r){var o;return(o=n[r])===null||o===void 0?void 0:o.call(n,e.current[r])}),t}var np={create:Xf},tp={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.28.1/min/vs"}};function rp(e){return function n(){for(var t=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var l=arguments.length,u=new Array(l),a=0;a<l;a++)u[a]=arguments[a];return n.apply(t,[].concat(o,u))}}}function op(e){return{}.toString.call(e).includes("Object")}function ip(e){return e||da("configIsRequired"),op(e)||da("configType"),e.urls?(lp(),{paths:{vs:e.urls.monacoBase}}):e}function lp(){console.warn(cc.deprecation)}function up(e,n){throw new Error(e[n]||e.default)}var cc={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},da=rp(up)(cc),ap={config:ip},sp=function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return function(o){return t.reduceRight(function(i,l){return l(i)},o)}};function dc(e,n){return Object.keys(n).forEach(function(t){n[t]instanceof Object&&e[t]&&Object.assign(n[t],dc(e[t],n[t]))}),ua(ua({},e),n)}var cp={type:"cancelation",msg:"operation is manually canceled"};function fa(e){var n=!1,t=new Promise(function(r,o){e.then(function(i){return n?o(cp):r(i)}),e.catch(o)});return t.cancel=function(){return n=!0},t}var dp=np.create({config:tp,isInitialized:!1,resolve:null,reject:null,monaco:null}),fc=Lf(dp,2),ir=fc[0],vo=fc[1];function fp(e){vo(function(n){return{config:dc(n.config,ap.config(e))}})}function pp(){var e=ir(function(n){var t=n.isInitialized;return{isInitialized:t}});if(!e.isInitialized){if(window.monaco&&window.monaco.editor)return pc(window.monaco),fa(Promise.resolve(window.monaco));sp(mp,hp)(gp),vo({isInitialized:!0})}return fa(vp)}function mp(e){return document.body.appendChild(e)}function yp(e){var n=document.createElement("script");return e&&(n.src=e),n}function hp(e){var n=ir(function(r){var o=r.config,i=r.reject;return{config:o,reject:i}}),t=yp("".concat(n.config.paths.vs,"/loader.js"));return t.onload=function(){return e()},t.onerror=n.reject,t}function gp(){var e=ir(function(t){var r=t.config,o=t.resolve,i=t.reject;return{config:r,resolve:o,reject:i}}),n=window.require;n.config(e.config),n(["vs/editor/editor.main"],function(t){pc(t),e.resolve(t)},function(t){e.reject(t)})}function pc(e){ir().monaco||vo({monaco:e})}function Sp(){return ir(function(e){var n=e.monaco;return n})}var vp=new Promise(function(e,n){return vo({resolve:e,reject:n})}),kp={config:fp,init:pp,__getMonacoInstance:Sp},Rl={exports:{}},Mp="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",bp=Mp,wp=bp;function mc(){}function yc(){}yc.resetWarningCache=mc;var Op=function(){function e(r,o,i,l,u,a){if(a!==wp){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}e.isRequired=e;function n(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:yc,resetWarningCache:mc};return t.PropTypes=t,t};Rl.exports=Op();var h=Rl.exports;function Ii(){return Ii=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ii.apply(this,arguments)}const Tp={display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"};function Cp({content:e}){return de.createElement("div",{style:Tp},e)}const Vo={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}};function hc({width:e,height:n,isEditorReady:t,loading:r,_ref:o,className:i,wrapperProps:l}){return de.createElement("section",Ii({style:jl(ut({},Vo.wrapper),{width:e,height:n})},l),!t&&de.createElement(Cp,{content:r}),de.createElement("div",{ref:o,style:ut(ut({},Vo.fullWidth),!t&&Vo.hide),className:i}))}hc.propTypes={width:h.oneOfType([h.number,h.string]).isRequired,height:h.oneOfType([h.number,h.string]).isRequired,loading:h.oneOfType([h.element,h.string]).isRequired,isEditorReady:h.bool.isRequired,className:h.string,wrapperProps:h.object};var Ep=A.exports.memo(hc);function xp(e){A.exports.useEffect(e,[])}function zn(e,n,t=!0){const r=A.exports.useRef(!0);A.exports.useEffect(r.current||!t?()=>{r.current=!1}:e,n)}function Go(){}function pa(e,n,t,r){return zp(e,r)||Wp(e,n,t,r)}function zp(e,n){return e.editor.getModel(gc(e,n))}function Wp(e,n,t,r){return e.editor.createModel(n,t,r&&gc(e,r))}function gc(e,n){return e.Uri.parse(n)}function Rp(e){return e===void 0}var Bl={exports:{}},lr={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp=A.exports,Sc=60103;lr.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var ma=Symbol.for;Sc=ma("react.element"),lr.Fragment=ma("react.fragment")}var Ip=Bp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pp=Object.prototype.hasOwnProperty,Np={key:!0,ref:!0,__self:!0,__source:!0};function vc(e,n,t){var r,o={},i=null,l=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(l=n.ref);for(r in n)Pp.call(n,r)&&!Np.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)o[r]===void 0&&(o[r]=n[r]);return{$$typeof:Sc,type:e,key:i,ref:l,props:o,_owner:Ip.current}}lr.jsx=vc;lr.jsxs=vc;Bl.exports=lr;const Lp=Bl.exports.jsx,Gp=Bl.exports.jsxs;h.string,h.string,h.string,h.string,h.string,h.string,h.string,h.bool,h.bool,h.string,h.oneOfType([h.element,h.string]),h.object,h.oneOfType([h.number,h.string]),h.oneOfType([h.number,h.string]),h.string,h.object,h.func,h.func;function Fp(e){const n=A.exports.useRef();return A.exports.useEffect(()=>{n.current=e},[e]),n.current}const kr=new Map;function Il({defaultValue:e,defaultLanguage:n,defaultPath:t,value:r,language:o,path:i,theme:l,line:u,loading:a,options:d,overrideServices:g,saveViewState:T,keepCurrentModel:m,width:b,height:E,className:O,wrapperProps:c,beforeMount:s,onMount:f,onChange:p,onValidate:y}){const[w,v]=A.exports.useState(!1),[x,z]=A.exports.useState(!0),M=A.exports.useRef(null),R=A.exports.useRef(null),he=A.exports.useRef(null),G=A.exports.useRef(f),j=A.exports.useRef(s),Y=A.exports.useRef(null),ae=A.exports.useRef(r),Ie=Fp(i);xp(()=>{const D=kp.init();return D.then($=>(M.current=$)&&z(!1)).catch($=>($==null?void 0:$.type)!=="cancelation"&&console.error("Monaco initialization: error:",$)),()=>R.current?we():D.cancel()}),zn(()=>{const D=pa(M.current,e||r,n||o,i);D!==R.current.getModel()&&(T&&kr.set(Ie,R.current.saveViewState()),R.current.setModel(D),T&&R.current.restoreViewState(kr.get(i)))},[i],w),zn(()=>{R.current.updateOptions(d)},[d],w),zn(()=>{R.current.getOption(M.current.editor.EditorOption.readOnly)?R.current.setValue(r):r!==R.current.getValue()&&(R.current.executeEdits("",[{range:R.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),R.current.pushUndoStop())},[r],w),zn(()=>{M.current.editor.setModelLanguage(R.current.getModel(),o)},[o],w),zn(()=>{Rp(u)||R.current.revealLine(u)},[u],w),zn(()=>{M.current.editor.setTheme(l)},[l],w);const Pe=A.exports.useCallback(()=>{j.current(M.current);const D=i||t,$=pa(M.current,r||e,n||o,D);R.current=M.current.editor.create(he.current,ut({model:$,automaticLayout:!0},d),g),T&&R.current.restoreViewState(kr.get(D)),M.current.editor.setTheme(l),v(!0)},[e,n,t,r,o,i,d,g,T,l]);A.exports.useEffect(()=>{w&&G.current(R.current,M.current)},[w]),A.exports.useEffect(()=>{!x&&!w&&Pe()},[x,w,Pe]),ae.current=r,A.exports.useEffect(()=>{if(w&&p){var D,$;(D=Y.current)===null||D===void 0||D.dispose(),Y.current=($=R.current)===null||$===void 0?void 0:$.onDidChangeModelContent(k=>{const W=R.current.getValue();ae.current!==W&&p(W,k)})}},[w,p]),A.exports.useEffect(()=>{if(w){const D=M.current.editor.onDidChangeMarkers($=>{var k;const W=(k=R.current.getModel())===null||k===void 0?void 0:k.uri;if(W&&$.find(L=>L.path===W.path)){const L=M.current.editor.getModelMarkers({resource:W});y==null||y(L)}});return()=>{D==null||D.dispose()}}},[w,y]);function we(){var D;if((D=Y.current)===null||D===void 0||D.dispose(),m)T&&kr.set(i,R.current.saveViewState());else{var $;($=R.current.getModel())===null||$===void 0||$.dispose()}R.current.dispose()}return Lp(Ep,{width:b,height:E,isEditorReady:w,loading:a,_ref:he,className:O,wrapperProps:c})}Il.propTypes={defaultValue:h.string,defaultPath:h.string,defaultLanguage:h.string,value:h.string,language:h.string,path:h.string,theme:h.string,line:h.number,loading:h.oneOfType([h.element,h.string]),options:h.object,overrideServices:h.object,saveViewState:h.bool,keepCurrentModel:h.bool,width:h.oneOfType([h.number,h.string]),height:h.oneOfType([h.number,h.string]),className:h.string,wrapperProps:h.object,beforeMount:h.func,onMount:h.func,onChange:h.func,onValidate:h.func};Il.defaultProps={theme:"light",loading:"Loading...",options:{},overrideServices:{},saveViewState:!0,keepCurrentModel:!1,width:"100%",height:"100%",wrapperProps:{},beforeMount:Go,onMount:Go,onValidate:Go};var Hp=A.exports.memo(Il),kc={exports:{}},Ap=["alignContent","MozAlignContent","WebkitAlignContent","MSAlignContent","OAlignContent","alignItems","MozAlignItems","WebkitAlignItems","MSAlignItems","OAlignItems","alignSelf","MozAlignSelf","WebkitAlignSelf","MSAlignSelf","OAlignSelf","all","MozAll","WebkitAll","MSAll","OAll","animation","MozAnimation","WebkitAnimation","MSAnimation","OAnimation","animationDelay","MozAnimationDelay","WebkitAnimationDelay","MSAnimationDelay","OAnimationDelay","animationDirection","MozAnimationDirection","WebkitAnimationDirection","MSAnimationDirection","OAnimationDirection","animationDuration","MozAnimationDuration","WebkitAnimationDuration","MSAnimationDuration","OAnimationDuration","animationFillMode","MozAnimationFillMode","WebkitAnimationFillMode","MSAnimationFillMode","OAnimationFillMode","animationIterationCount","MozAnimationIterationCount","WebkitAnimationIterationCount","MSAnimationIterationCount","OAnimationIterationCount","animationName","MozAnimationName","WebkitAnimationName","MSAnimationName","OAnimationName","animationPlayState","MozAnimationPlayState","WebkitAnimationPlayState","MSAnimationPlayState","OAnimationPlayState","animationTimingFunction","MozAnimationTimingFunction","WebkitAnimationTimingFunction","MSAnimationTimingFunction","OAnimationTimingFunction","backfaceVisibility","MozBackfaceVisibility","WebkitBackfaceVisibility","MSBackfaceVisibility","OBackfaceVisibility","background","MozBackground","WebkitBackground","MSBackground","OBackground","backgroundAttachment","MozBackgroundAttachment","WebkitBackgroundAttachment","MSBackgroundAttachment","OBackgroundAttachment","backgroundBlendMode","MozBackgroundBlendMode","WebkitBackgroundBlendMode","MSBackgroundBlendMode","OBackgroundBlendMode","backgroundClip","MozBackgroundClip","WebkitBackgroundClip","MSBackgroundClip","OBackgroundClip","backgroundColor","MozBackgroundColor","WebkitBackgroundColor","MSBackgroundColor","OBackgroundColor","backgroundImage","MozBackgroundImage","WebkitBackgroundImage","MSBackgroundImage","OBackgroundImage","backgroundOrigin","MozBackgroundOrigin","WebkitBackgroundOrigin","MSBackgroundOrigin","OBackgroundOrigin","backgroundPosition","MozBackgroundPosition","WebkitBackgroundPosition","MSBackgroundPosition","OBackgroundPosition","backgroundRepeat","MozBackgroundRepeat","WebkitBackgroundRepeat","MSBackgroundRepeat","OBackgroundRepeat","backgroundSize","MozBackgroundSize","WebkitBackgroundSize","MSBackgroundSize","OBackgroundSize","blockSize","MozBlockSize","WebkitBlockSize","MSBlockSize","OBlockSize","border","MozBorder","WebkitBorder","MSBorder","OBorder","borderBlockEnd","MozBorderBlockEnd","WebkitBorderBlockEnd","MSBorderBlockEnd","OBorderBlockEnd","borderBlockEndColor","MozBorderBlockEndColor","WebkitBorderBlockEndColor","MSBorderBlockEndColor","OBorderBlockEndColor","borderBlockEndStyle","MozBorderBlockEndStyle","WebkitBorderBlockEndStyle","MSBorderBlockEndStyle","OBorderBlockEndStyle","borderBlockEndWidth","MozBorderBlockEndWidth","WebkitBorderBlockEndWidth","MSBorderBlockEndWidth","OBorderBlockEndWidth","borderBlockStart","MozBorderBlockStart","WebkitBorderBlockStart","MSBorderBlockStart","OBorderBlockStart","borderBlockStartColor","MozBorderBlockStartColor","WebkitBorderBlockStartColor","MSBorderBlockStartColor","OBorderBlockStartColor","borderBlockStartStyle","MozBorderBlockStartStyle","WebkitBorderBlockStartStyle","MSBorderBlockStartStyle","OBorderBlockStartStyle","borderBlockStartWidth","MozBorderBlockStartWidth","WebkitBorderBlockStartWidth","MSBorderBlockStartWidth","OBorderBlockStartWidth","borderBottom","MozBorderBottom","WebkitBorderBottom","MSBorderBottom","OBorderBottom","borderBottomColor","MozBorderBottomColor","WebkitBorderBottomColor","MSBorderBottomColor","OBorderBottomColor","borderBottomLeftRadius","MozBorderBottomLeftRadius","WebkitBorderBottomLeftRadius","MSBorderBottomLeftRadius","OBorderBottomLeftRadius","borderBottomRightRadius","MozBorderBottomRightRadius","WebkitBorderBottomRightRadius","MSBorderBottomRightRadius","OBorderBottomRightRadius","borderBottomStyle","MozBorderBottomStyle","WebkitBorderBottomStyle","MSBorderBottomStyle","OBorderBottomStyle","borderBottomWidth","MozBorderBottomWidth","WebkitBorderBottomWidth","MSBorderBottomWidth","OBorderBottomWidth","borderCollapse","MozBorderCollapse","WebkitBorderCollapse","MSBorderCollapse","OBorderCollapse","borderColor","MozBorderColor","WebkitBorderColor","MSBorderColor","OBorderColor","borderImage","MozBorderImage","WebkitBorderImage","MSBorderImage","OBorderImage","borderImageOutset","MozBorderImageOutset","WebkitBorderImageOutset","MSBorderImageOutset","OBorderImageOutset","borderImageRepeat","MozBorderImageRepeat","WebkitBorderImageRepeat","MSBorderImageRepeat","OBorderImageRepeat","borderImageSlice","MozBorderImageSlice","WebkitBorderImageSlice","MSBorderImageSlice","OBorderImageSlice","borderImageSource","MozBorderImageSource","WebkitBorderImageSource","MSBorderImageSource","OBorderImageSource","borderImageWidth","MozBorderImageWidth","WebkitBorderImageWidth","MSBorderImageWidth","OBorderImageWidth","borderInlineEnd","MozBorderInlineEnd","WebkitBorderInlineEnd","MSBorderInlineEnd","OBorderInlineEnd","borderInlineEndColor","MozBorderInlineEndColor","WebkitBorderInlineEndColor","MSBorderInlineEndColor","OBorderInlineEndColor","borderInlineEndStyle","MozBorderInlineEndStyle","WebkitBorderInlineEndStyle","MSBorderInlineEndStyle","OBorderInlineEndStyle","borderInlineEndWidth","MozBorderInlineEndWidth","WebkitBorderInlineEndWidth","MSBorderInlineEndWidth","OBorderInlineEndWidth","borderInlineStart","MozBorderInlineStart","WebkitBorderInlineStart","MSBorderInlineStart","OBorderInlineStart","borderInlineStartColor","MozBorderInlineStartColor","WebkitBorderInlineStartColor","MSBorderInlineStartColor","OBorderInlineStartColor","borderInlineStartStyle","MozBorderInlineStartStyle","WebkitBorderInlineStartStyle","MSBorderInlineStartStyle","OBorderInlineStartStyle","borderInlineStartWidth","MozBorderInlineStartWidth","WebkitBorderInlineStartWidth","MSBorderInlineStartWidth","OBorderInlineStartWidth","borderLeft","MozBorderLeft","WebkitBorderLeft","MSBorderLeft","OBorderLeft","borderLeftColor","MozBorderLeftColor","WebkitBorderLeftColor","MSBorderLeftColor","OBorderLeftColor","borderLeftStyle","MozBorderLeftStyle","WebkitBorderLeftStyle","MSBorderLeftStyle","OBorderLeftStyle","borderLeftWidth","MozBorderLeftWidth","WebkitBorderLeftWidth","MSBorderLeftWidth","OBorderLeftWidth","borderRadius","MozBorderRadius","WebkitBorderRadius","MSBorderRadius","OBorderRadius","borderRight","MozBorderRight","WebkitBorderRight","MSBorderRight","OBorderRight","borderRightColor","MozBorderRightColor","WebkitBorderRightColor","MSBorderRightColor","OBorderRightColor","borderRightStyle","MozBorderRightStyle","WebkitBorderRightStyle","MSBorderRightStyle","OBorderRightStyle","borderRightWidth","MozBorderRightWidth","WebkitBorderRightWidth","MSBorderRightWidth","OBorderRightWidth","borderSpacing","MozBorderSpacing","WebkitBorderSpacing","MSBorderSpacing","OBorderSpacing","borderStyle","MozBorderStyle","WebkitBorderStyle","MSBorderStyle","OBorderStyle","borderTop","MozBorderTop","WebkitBorderTop","MSBorderTop","OBorderTop","borderTopColor","MozBorderTopColor","WebkitBorderTopColor","MSBorderTopColor","OBorderTopColor","borderTopLeftRadius","MozBorderTopLeftRadius","WebkitBorderTopLeftRadius","MSBorderTopLeftRadius","OBorderTopLeftRadius","borderTopRightRadius","MozBorderTopRightRadius","WebkitBorderTopRightRadius","MSBorderTopRightRadius","OBorderTopRightRadius","borderTopStyle","MozBorderTopStyle","WebkitBorderTopStyle","MSBorderTopStyle","OBorderTopStyle","borderTopWidth","MozBorderTopWidth","WebkitBorderTopWidth","MSBorderTopWidth","OBorderTopWidth","borderWidth","MozBorderWidth","WebkitBorderWidth","MSBorderWidth","OBorderWidth","bottom","MozBottom","WebkitBottom","MSBottom","OBottom","boxDecorationBreak","MozBoxDecorationBreak","WebkitBoxDecorationBreak","MSBoxDecorationBreak","OBoxDecorationBreak","boxShadow","MozBoxShadow","WebkitBoxShadow","MSBoxShadow","OBoxShadow","boxSizing","MozBoxSizing","WebkitBoxSizing","MSBoxSizing","OBoxSizing","breakAfter","MozBreakAfter","WebkitBreakAfter","MSBreakAfter","OBreakAfter","breakBefore","MozBreakBefore","WebkitBreakBefore","MSBreakBefore","OBreakBefore","breakInside","MozBreakInside","WebkitBreakInside","MSBreakInside","OBreakInside","captionSide","MozCaptionSide","WebkitCaptionSide","MSCaptionSide","OCaptionSide","caretColor","MozCaretColor","WebkitCaretColor","MSCaretColor","OCaretColor","ch","MozCh","WebkitCh","MSCh","OCh","clear","MozClear","WebkitClear","MSClear","OClear","clip","MozClip","WebkitClip","MSClip","OClip","clipPath","MozClipPath","WebkitClipPath","MSClipPath","OClipPath","cm","MozCm","WebkitCm","MSCm","OCm","color","MozColor","WebkitColor","MSColor","OColor","columnCount","MozColumnCount","WebkitColumnCount","MSColumnCount","OColumnCount","columnFill","MozColumnFill","WebkitColumnFill","MSColumnFill","OColumnFill","columnGap","MozColumnGap","WebkitColumnGap","MSColumnGap","OColumnGap","columnRule","MozColumnRule","WebkitColumnRule","MSColumnRule","OColumnRule","columnRuleColor","MozColumnRuleColor","WebkitColumnRuleColor","MSColumnRuleColor","OColumnRuleColor","columnRuleStyle","MozColumnRuleStyle","WebkitColumnRuleStyle","MSColumnRuleStyle","OColumnRuleStyle","columnRuleWidth","MozColumnRuleWidth","WebkitColumnRuleWidth","MSColumnRuleWidth","OColumnRuleWidth","columnSpan","MozColumnSpan","WebkitColumnSpan","MSColumnSpan","OColumnSpan","columnWidth","MozColumnWidth","WebkitColumnWidth","MSColumnWidth","OColumnWidth","columns","MozColumns","WebkitColumns","MSColumns","OColumns","content","MozContent","WebkitContent","MSContent","OContent","counterIncrement","MozCounterIncrement","WebkitCounterIncrement","MSCounterIncrement","OCounterIncrement","counterReset","MozCounterReset","WebkitCounterReset","MSCounterReset","OCounterReset","cursor","MozCursor","WebkitCursor","MSCursor","OCursor","deg","MozDeg","WebkitDeg","MSDeg","ODeg","direction","MozDirection","WebkitDirection","MSDirection","ODirection","display","MozDisplay","WebkitDisplay","MSDisplay","ODisplay","dpcm","MozDpcm","WebkitDpcm","MSDpcm","ODpcm","dpi","MozDpi","WebkitDpi","MSDpi","ODpi","dppx","MozDppx","WebkitDppx","MSDppx","ODppx","em","MozEm","WebkitEm","MSEm","OEm","emptyCells","MozEmptyCells","WebkitEmptyCells","MSEmptyCells","OEmptyCells","ex","MozEx","WebkitEx","MSEx","OEx","filter","MozFilter","WebkitFilter","MSFilter","OFilter","flexBasis","MozFlexBasis","WebkitFlexBasis","MSFlexBasis","OFlexBasis","flexDirection","MozFlexDirection","WebkitFlexDirection","MSFlexDirection","OFlexDirection","flexFlow","MozFlexFlow","WebkitFlexFlow","MSFlexFlow","OFlexFlow","flexGrow","MozFlexGrow","WebkitFlexGrow","MSFlexGrow","OFlexGrow","flexShrink","MozFlexShrink","WebkitFlexShrink","MSFlexShrink","OFlexShrink","flexWrap","MozFlexWrap","WebkitFlexWrap","MSFlexWrap","OFlexWrap","float","MozFloat","WebkitFloat","MSFloat","OFloat","font","MozFont","WebkitFont","MSFont","OFont","fontFamily","MozFontFamily","WebkitFontFamily","MSFontFamily","OFontFamily","fontFeatureSettings","MozFontFeatureSettings","WebkitFontFeatureSettings","MSFontFeatureSettings","OFontFeatureSettings","fontKerning","MozFontKerning","WebkitFontKerning","MSFontKerning","OFontKerning","fontLanguageOverride","MozFontLanguageOverride","WebkitFontLanguageOverride","MSFontLanguageOverride","OFontLanguageOverride","fontSize","MozFontSize","WebkitFontSize","MSFontSize","OFontSize","fontSizeAdjust","MozFontSizeAdjust","WebkitFontSizeAdjust","MSFontSizeAdjust","OFontSizeAdjust","fontStretch","MozFontStretch","WebkitFontStretch","MSFontStretch","OFontStretch","fontStyle","MozFontStyle","WebkitFontStyle","MSFontStyle","OFontStyle","fontSynthesis","MozFontSynthesis","WebkitFontSynthesis","MSFontSynthesis","OFontSynthesis","fontVariant","MozFontVariant","WebkitFontVariant","MSFontVariant","OFontVariant","fontVariantAlternates","MozFontVariantAlternates","WebkitFontVariantAlternates","MSFontVariantAlternates","OFontVariantAlternates","fontVariantCaps","MozFontVariantCaps","WebkitFontVariantCaps","MSFontVariantCaps","OFontVariantCaps","fontVariantEastAsian","MozFontVariantEastAsian","WebkitFontVariantEastAsian","MSFontVariantEastAsian","OFontVariantEastAsian","fontVariantLigatures","MozFontVariantLigatures","WebkitFontVariantLigatures","MSFontVariantLigatures","OFontVariantLigatures","fontVariantNumeric","MozFontVariantNumeric","WebkitFontVariantNumeric","MSFontVariantNumeric","OFontVariantNumeric","fontVariantPosition","MozFontVariantPosition","WebkitFontVariantPosition","MSFontVariantPosition","OFontVariantPosition","fontWeight","MozFontWeight","WebkitFontWeight","MSFontWeight","OFontWeight","fr","MozFr","WebkitFr","MSFr","OFr","grad","MozGrad","WebkitGrad","MSGrad","OGrad","grid","MozGrid","WebkitGrid","MSGrid","OGrid","gridArea","MozGridArea","WebkitGridArea","MSGridArea","OGridArea","gridAutoColumns","MozGridAutoColumns","WebkitGridAutoColumns","MSGridAutoColumns","OGridAutoColumns","gridAutoFlow","MozGridAutoFlow","WebkitGridAutoFlow","MSGridAutoFlow","OGridAutoFlow","gridAutoRows","MozGridAutoRows","WebkitGridAutoRows","MSGridAutoRows","OGridAutoRows","gridColumn","MozGridColumn","WebkitGridColumn","MSGridColumn","OGridColumn","gridColumnEnd","MozGridColumnEnd","WebkitGridColumnEnd","MSGridColumnEnd","OGridColumnEnd","gridColumnGap","MozGridColumnGap","WebkitGridColumnGap","MSGridColumnGap","OGridColumnGap","gridColumnStart","MozGridColumnStart","WebkitGridColumnStart","MSGridColumnStart","OGridColumnStart","gridGap","MozGridGap","WebkitGridGap","MSGridGap","OGridGap","gridRow","MozGridRow","WebkitGridRow","MSGridRow","OGridRow","gridRowEnd","MozGridRowEnd","WebkitGridRowEnd","MSGridRowEnd","OGridRowEnd","gridRowGap","MozGridRowGap","WebkitGridRowGap","MSGridRowGap","OGridRowGap","gridRowStart","MozGridRowStart","WebkitGridRowStart","MSGridRowStart","OGridRowStart","gridTemplate","MozGridTemplate","WebkitGridTemplate","MSGridTemplate","OGridTemplate","gridTemplateAreas","MozGridTemplateAreas","WebkitGridTemplateAreas","MSGridTemplateAreas","OGridTemplateAreas","gridTemplateColumns","MozGridTemplateColumns","WebkitGridTemplateColumns","MSGridTemplateColumns","OGridTemplateColumns","gridTemplateRows","MozGridTemplateRows","WebkitGridTemplateRows","MSGridTemplateRows","OGridTemplateRows","height","MozHeight","WebkitHeight","MSHeight","OHeight","hyphens","MozHyphens","WebkitHyphens","MSHyphens","OHyphens","hz","MozHz","WebkitHz","MSHz","OHz","imageOrientation","MozImageOrientation","WebkitImageOrientation","MSImageOrientation","OImageOrientation","imageRendering","MozImageRendering","WebkitImageRendering","MSImageRendering","OImageRendering","imageResolution","MozImageResolution","WebkitImageResolution","MSImageResolution","OImageResolution","imeMode","MozImeMode","WebkitImeMode","MSImeMode","OImeMode","in","MozIn","WebkitIn","MSIn","OIn","inherit","MozInherit","WebkitInherit","MSInherit","OInherit","initial","MozInitial","WebkitInitial","MSInitial","OInitial","inlineSize","MozInlineSize","WebkitInlineSize","MSInlineSize","OInlineSize","isolation","MozIsolation","WebkitIsolation","MSIsolation","OIsolation","justifyContent","MozJustifyContent","WebkitJustifyContent","MSJustifyContent","OJustifyContent","khz","MozKhz","WebkitKhz","MSKhz","OKhz","left","MozLeft","WebkitLeft","MSLeft","OLeft","letterSpacing","MozLetterSpacing","WebkitLetterSpacing","MSLetterSpacing","OLetterSpacing","lineBreak","MozLineBreak","WebkitLineBreak","MSLineBreak","OLineBreak","lineHeight","MozLineHeight","WebkitLineHeight","MSLineHeight","OLineHeight","listStyle","MozListStyle","WebkitListStyle","MSListStyle","OListStyle","listStyleImage","MozListStyleImage","WebkitListStyleImage","MSListStyleImage","OListStyleImage","listStylePosition","MozListStylePosition","WebkitListStylePosition","MSListStylePosition","OListStylePosition","listStyleType","MozListStyleType","WebkitListStyleType","MSListStyleType","OListStyleType","margin","MozMargin","WebkitMargin","MSMargin","OMargin","marginBlockEnd","MozMarginBlockEnd","WebkitMarginBlockEnd","MSMarginBlockEnd","OMarginBlockEnd","marginBlockStart","MozMarginBlockStart","WebkitMarginBlockStart","MSMarginBlockStart","OMarginBlockStart","marginBottom","MozMarginBottom","WebkitMarginBottom","MSMarginBottom","OMarginBottom","marginInlineEnd","MozMarginInlineEnd","WebkitMarginInlineEnd","MSMarginInlineEnd","OMarginInlineEnd","marginInlineStart","MozMarginInlineStart","WebkitMarginInlineStart","MSMarginInlineStart","OMarginInlineStart","marginLeft","MozMarginLeft","WebkitMarginLeft","MSMarginLeft","OMarginLeft","marginRight","MozMarginRight","WebkitMarginRight","MSMarginRight","OMarginRight","marginTop","MozMarginTop","WebkitMarginTop","MSMarginTop","OMarginTop","mask","MozMask","WebkitMask","MSMask","OMask","maskClip","MozMaskClip","WebkitMaskClip","MSMaskClip","OMaskClip","maskComposite","MozMaskComposite","WebkitMaskComposite","MSMaskComposite","OMaskComposite","maskImage","MozMaskImage","WebkitMaskImage","MSMaskImage","OMaskImage","maskMode","MozMaskMode","WebkitMaskMode","MSMaskMode","OMaskMode","maskOrigin","MozMaskOrigin","WebkitMaskOrigin","MSMaskOrigin","OMaskOrigin","maskPosition","MozMaskPosition","WebkitMaskPosition","MSMaskPosition","OMaskPosition","maskRepeat","MozMaskRepeat","WebkitMaskRepeat","MSMaskRepeat","OMaskRepeat","maskSize","MozMaskSize","WebkitMaskSize","MSMaskSize","OMaskSize","maskType","MozMaskType","WebkitMaskType","MSMaskType","OMaskType","maxHeight","MozMaxHeight","WebkitMaxHeight","MSMaxHeight","OMaxHeight","maxWidth","MozMaxWidth","WebkitMaxWidth","MSMaxWidth","OMaxWidth","minBlockSize","MozMinBlockSize","WebkitMinBlockSize","MSMinBlockSize","OMinBlockSize","minHeight","MozMinHeight","WebkitMinHeight","MSMinHeight","OMinHeight","minInlineSize","MozMinInlineSize","WebkitMinInlineSize","MSMinInlineSize","OMinInlineSize","minWidth","MozMinWidth","WebkitMinWidth","MSMinWidth","OMinWidth","mixBlendMode","MozMixBlendMode","WebkitMixBlendMode","MSMixBlendMode","OMixBlendMode","mm","MozMm","WebkitMm","MSMm","OMm","ms","MozMs","WebkitMs","MSMs","OMs","objectFit","MozObjectFit","WebkitObjectFit","MSObjectFit","OObjectFit","objectPosition","MozObjectPosition","WebkitObjectPosition","MSObjectPosition","OObjectPosition","offsetBlockEnd","MozOffsetBlockEnd","WebkitOffsetBlockEnd","MSOffsetBlockEnd","OOffsetBlockEnd","offsetBlockStart","MozOffsetBlockStart","WebkitOffsetBlockStart","MSOffsetBlockStart","OOffsetBlockStart","offsetInlineEnd","MozOffsetInlineEnd","WebkitOffsetInlineEnd","MSOffsetInlineEnd","OOffsetInlineEnd","offsetInlineStart","MozOffsetInlineStart","WebkitOffsetInlineStart","MSOffsetInlineStart","OOffsetInlineStart","opacity","MozOpacity","WebkitOpacity","MSOpacity","OOpacity","order","MozOrder","WebkitOrder","MSOrder","OOrder","orphans","MozOrphans","WebkitOrphans","MSOrphans","OOrphans","outline","MozOutline","WebkitOutline","MSOutline","OOutline","outlineColor","MozOutlineColor","WebkitOutlineColor","MSOutlineColor","OOutlineColor","outlineOffset","MozOutlineOffset","WebkitOutlineOffset","MSOutlineOffset","OOutlineOffset","outlineStyle","MozOutlineStyle","WebkitOutlineStyle","MSOutlineStyle","OOutlineStyle","outlineWidth","MozOutlineWidth","WebkitOutlineWidth","MSOutlineWidth","OOutlineWidth","overflow","MozOverflow","WebkitOverflow","MSOverflow","OOverflow","overflowWrap","MozOverflowWrap","WebkitOverflowWrap","MSOverflowWrap","OOverflowWrap","overflowX","MozOverflowX","WebkitOverflowX","MSOverflowX","OOverflowX","overflowY","MozOverflowY","WebkitOverflowY","MSOverflowY","OOverflowY","padding","MozPadding","WebkitPadding","MSPadding","OPadding","paddingBlockEnd","MozPaddingBlockEnd","WebkitPaddingBlockEnd","MSPaddingBlockEnd","OPaddingBlockEnd","paddingBlockStart","MozPaddingBlockStart","WebkitPaddingBlockStart","MSPaddingBlockStart","OPaddingBlockStart","paddingBottom","MozPaddingBottom","WebkitPaddingBottom","MSPaddingBottom","OPaddingBottom","paddingInlineEnd","MozPaddingInlineEnd","WebkitPaddingInlineEnd","MSPaddingInlineEnd","OPaddingInlineEnd","paddingInlineStart","MozPaddingInlineStart","WebkitPaddingInlineStart","MSPaddingInlineStart","OPaddingInlineStart","paddingLeft","MozPaddingLeft","WebkitPaddingLeft","MSPaddingLeft","OPaddingLeft","paddingRight","MozPaddingRight","WebkitPaddingRight","MSPaddingRight","OPaddingRight","paddingTop","MozPaddingTop","WebkitPaddingTop","MSPaddingTop","OPaddingTop","pageBreakAfter","MozPageBreakAfter","WebkitPageBreakAfter","MSPageBreakAfter","OPageBreakAfter","pageBreakBefore","MozPageBreakBefore","WebkitPageBreakBefore","MSPageBreakBefore","OPageBreakBefore","pageBreakInside","MozPageBreakInside","WebkitPageBreakInside","MSPageBreakInside","OPageBreakInside","pc","MozPc","WebkitPc","MSPc","OPc","perspective","MozPerspective","WebkitPerspective","MSPerspective","OPerspective","perspectiveOrigin","MozPerspectiveOrigin","WebkitPerspectiveOrigin","MSPerspectiveOrigin","OPerspectiveOrigin","pointerEvents","MozPointerEvents","WebkitPointerEvents","MSPointerEvents","OPointerEvents","position","MozPosition","WebkitPosition","MSPosition","OPosition","pt","MozPt","WebkitPt","MSPt","OPt","px","MozPx","WebkitPx","MSPx","OPx","q","MozQ","WebkitQ","MSQ","OQ","quotes","MozQuotes","WebkitQuotes","MSQuotes","OQuotes","rad","MozRad","WebkitRad","MSRad","ORad","rem","MozRem","WebkitRem","MSRem","ORem","resize","MozResize","WebkitResize","MSResize","OResize","revert","MozRevert","WebkitRevert","MSRevert","ORevert","right","MozRight","WebkitRight","MSRight","ORight","rubyAlign","MozRubyAlign","WebkitRubyAlign","MSRubyAlign","ORubyAlign","rubyMerge","MozRubyMerge","WebkitRubyMerge","MSRubyMerge","ORubyMerge","rubyPosition","MozRubyPosition","WebkitRubyPosition","MSRubyPosition","ORubyPosition","s","MozS","WebkitS","MSS","OS","scrollBehavior","MozScrollBehavior","WebkitScrollBehavior","MSScrollBehavior","OScrollBehavior","scrollSnapCoordinate","MozScrollSnapCoordinate","WebkitScrollSnapCoordinate","MSScrollSnapCoordinate","OScrollSnapCoordinate","scrollSnapDestination","MozScrollSnapDestination","WebkitScrollSnapDestination","MSScrollSnapDestination","OScrollSnapDestination","scrollSnapType","MozScrollSnapType","WebkitScrollSnapType","MSScrollSnapType","OScrollSnapType","shapeImageThreshold","MozShapeImageThreshold","WebkitShapeImageThreshold","MSShapeImageThreshold","OShapeImageThreshold","shapeMargin","MozShapeMargin","WebkitShapeMargin","MSShapeMargin","OShapeMargin","shapeOutside","MozShapeOutside","WebkitShapeOutside","MSShapeOutside","OShapeOutside","tabSize","MozTabSize","WebkitTabSize","MSTabSize","OTabSize","tableLayout","MozTableLayout","WebkitTableLayout","MSTableLayout","OTableLayout","textAlign","MozTextAlign","WebkitTextAlign","MSTextAlign","OTextAlign","textAlignLast","MozTextAlignLast","WebkitTextAlignLast","MSTextAlignLast","OTextAlignLast","textCombineUpright","MozTextCombineUpright","WebkitTextCombineUpright","MSTextCombineUpright","OTextCombineUpright","textDecoration","MozTextDecoration","WebkitTextDecoration","MSTextDecoration","OTextDecoration","textDecorationColor","MozTextDecorationColor","WebkitTextDecorationColor","MSTextDecorationColor","OTextDecorationColor","textDecorationLine","MozTextDecorationLine","WebkitTextDecorationLine","MSTextDecorationLine","OTextDecorationLine","textDecorationStyle","MozTextDecorationStyle","WebkitTextDecorationStyle","MSTextDecorationStyle","OTextDecorationStyle","textEmphasis","MozTextEmphasis","WebkitTextEmphasis","MSTextEmphasis","OTextEmphasis","textEmphasisColor","MozTextEmphasisColor","WebkitTextEmphasisColor","MSTextEmphasisColor","OTextEmphasisColor","textEmphasisPosition","MozTextEmphasisPosition","WebkitTextEmphasisPosition","MSTextEmphasisPosition","OTextEmphasisPosition","textEmphasisStyle","MozTextEmphasisStyle","WebkitTextEmphasisStyle","MSTextEmphasisStyle","OTextEmphasisStyle","textIndent","MozTextIndent","WebkitTextIndent","MSTextIndent","OTextIndent","textOrientation","MozTextOrientation","WebkitTextOrientation","MSTextOrientation","OTextOrientation","textOverflow","MozTextOverflow","WebkitTextOverflow","MSTextOverflow","OTextOverflow","textRendering","MozTextRendering","WebkitTextRendering","MSTextRendering","OTextRendering","textShadow","MozTextShadow","WebkitTextShadow","MSTextShadow","OTextShadow","textTransform","MozTextTransform","WebkitTextTransform","MSTextTransform","OTextTransform","textUnderlinePosition","MozTextUnderlinePosition","WebkitTextUnderlinePosition","MSTextUnderlinePosition","OTextUnderlinePosition","top","MozTop","WebkitTop","MSTop","OTop","touchAction","MozTouchAction","WebkitTouchAction","MSTouchAction","OTouchAction","transform","MozTransform","WebkitTransform","msTransform","OTransform","transformBox","MozTransformBox","WebkitTransformBox","MSTransformBox","OTransformBox","transformOrigin","MozTransformOrigin","WebkitTransformOrigin","MSTransformOrigin","OTransformOrigin","transformStyle","MozTransformStyle","WebkitTransformStyle","MSTransformStyle","OTransformStyle","transition","MozTransition","WebkitTransition","MSTransition","OTransition","transitionDelay","MozTransitionDelay","WebkitTransitionDelay","MSTransitionDelay","OTransitionDelay","transitionDuration","MozTransitionDuration","WebkitTransitionDuration","MSTransitionDuration","OTransitionDuration","transitionProperty","MozTransitionProperty","WebkitTransitionProperty","MSTransitionProperty","OTransitionProperty","transitionTimingFunction","MozTransitionTimingFunction","WebkitTransitionTimingFunction","MSTransitionTimingFunction","OTransitionTimingFunction","turn","MozTurn","WebkitTurn","MSTurn","OTurn","unicodeBidi","MozUnicodeBidi","WebkitUnicodeBidi","MSUnicodeBidi","OUnicodeBidi","unset","MozUnset","WebkitUnset","MSUnset","OUnset","verticalAlign","MozVerticalAlign","WebkitVerticalAlign","MSVerticalAlign","OVerticalAlign","vh","MozVh","WebkitVh","MSVh","OVh","visibility","MozVisibility","WebkitVisibility","MSVisibility","OVisibility","vmax","MozVmax","WebkitVmax","MSVmax","OVmax","vmin","MozVmin","WebkitVmin","MSVmin","OVmin","vw","MozVw","WebkitVw","MSVw","OVw","whiteSpace","MozWhiteSpace","WebkitWhiteSpace","MSWhiteSpace","OWhiteSpace","widows","MozWidows","WebkitWidows","MSWidows","OWidows","width","MozWidth","WebkitWidth","MSWidth","OWidth","willChange","MozWillChange","WebkitWillChange","MSWillChange","OWillChange","wordBreak","MozWordBreak","WebkitWordBreak","MSWordBreak","OWordBreak","wordSpacing","MozWordSpacing","WebkitWordSpacing","MSWordSpacing","OWordSpacing","wordWrap","MozWordWrap","WebkitWordWrap","MSWordWrap","OWordWrap","writingMode","MozWritingMode","WebkitWritingMode","MSWritingMode","OWritingMode","zIndex","MozZIndex","WebkitZIndex","MSZIndex","OZIndex","fontSize","MozFontSize","WebkitFontSize","MSFontSize","OFontSize","flex","MozFlex","WebkitFlex","MSFlex","OFlex","fr","MozFr","WebkitFr","MSFr","OFr","overflowScrolling","MozOverflowScrolling","WebkitOverflowScrolling","MSOverflowScrolling","OOverflowScrolling","userSelect","MozUserSelect","WebkitUserSelect","MSUserSelect","OUserSelect"];(function(e){var n=Ap,t=Rl.exports;e.exports=function(r,o,i){var l=r[o];if(!!l){var u=[];if(Object.keys(l).forEach(function(a){n.indexOf(a)===-1&&u.push(a)}),u.length)throw new Error("Prop "+o+" passed to "+i+". Has invalid keys "+u.join(", "))}},e.exports.isRequired=function(r,o,i){if(!r[o])throw new Error("Prop "+o+" passed to "+i+" is required");return e.exports(r,o,i)},e.exports.supportingArrays=t.oneOfType([t.arrayOf(e.exports),e.exports])})(kc);var pn=kc.exports;function Mc(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function bc(e){function n(t){var r=this.constructor.getDerivedStateFromProps(e,t);return r!=null?r:null}this.setState(n.bind(this))}function wc(e,n){try{var t=this.props,r=this.state;this.props=e,this.state=n,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(t,r)}finally{this.props=t,this.state=r}}Mc.__suppressDeprecationWarning=!0;bc.__suppressDeprecationWarning=!0;wc.__suppressDeprecationWarning=!0;function _p(e){var n=e.prototype;if(!n||!n.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof n.getSnapshotBeforeUpdate!="function")return e;var t=null,r=null,o=null;if(typeof n.componentWillMount=="function"?t="componentWillMount":typeof n.UNSAFE_componentWillMount=="function"&&(t="UNSAFE_componentWillMount"),typeof n.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof n.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof n.componentWillUpdate=="function"?o="componentWillUpdate":typeof n.UNSAFE_componentWillUpdate=="function"&&(o="UNSAFE_componentWillUpdate"),t!==null||r!==null||o!==null){var i=e.displayName||e.name,l=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+i+" uses "+l+" but also contains the following legacy lifecycles:"+(t!==null?`
  `+t:"")+(r!==null?`
  `+r:"")+(o!==null?`
  `+o:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(n.componentWillMount=Mc,n.componentWillReceiveProps=bc),typeof n.getSnapshotBeforeUpdate=="function"){if(typeof n.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");n.componentWillUpdate=wc;var u=n.componentDidUpdate;n.componentDidUpdate=function(d,g,T){var m=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:T;u.call(this,d,g,m)}}return e}function Pl(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function ya(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Nl(e,n,t){return n&&ya(e.prototype,n),t&&ya(e,t),e}function Oc(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ha(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function Ho(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ha(Object(t),!0).forEach(function(r){Oc(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ha(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Ll(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&Pi(e,n)}function to(e){return to=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},to(e)}function Pi(e,n){return Pi=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},Pi(e,n)}function Dp(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function Bn(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function qp(e,n){return n&&(typeof n=="object"||typeof n=="function")?n:Bn(e)}function Fl(e){return function(){var n=to(e),t;if(Dp()){var r=to(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return qp(this,t)}}var ro=function(e){Ll(t,e);var n=Fl(t);function t(){return Pl(this,t),n.apply(this,arguments)}return Nl(t,[{key:"render",value:function(){var o=this.props,i=o.children,l=o.className,u=o.split,a=o.style,d=o.size,g=o.eleRef,T=["Pane",u,l],m={flex:1,position:"relative",outline:"none"};return d!==void 0&&(u==="vertical"?m.width=d:(m.height=d,m.display="flex"),m.flex="none"),m=Object.assign({},m,a||{}),de.createElement("div",{ref:g,className:T.join(" "),style:m},i)}}]),t}(de.PureComponent);ro.propTypes={className:h.string.isRequired,children:h.node.isRequired,size:h.oneOfType([h.string,h.number]),split:h.oneOf(["vertical","horizontal"]),style:pn,eleRef:h.func};ro.defaultProps={};var Tc="Resizer",Al=function(e){Ll(t,e);var n=Fl(t);function t(){return Pl(this,t),n.apply(this,arguments)}return Nl(t,[{key:"render",value:function(){var o=this.props,i=o.className,l=o.onClick,u=o.onDoubleClick,a=o.onMouseDown,d=o.onTouchEnd,g=o.onTouchStart,T=o.resizerClassName,m=o.split,b=o.style,E=[T,m,i];return de.createElement("span",{role:"presentation",className:E.join(" "),style:b,onMouseDown:function(c){return a(c)},onTouchStart:function(c){c.preventDefault(),g(c)},onTouchEnd:function(c){c.preventDefault(),d(c)},onClick:function(c){l&&(c.preventDefault(),l(c))},onDoubleClick:function(c){u&&(c.preventDefault(),u(c))}})}}]),t}(de.Component);Al.propTypes={className:h.string.isRequired,onClick:h.func,onDoubleClick:h.func,onMouseDown:h.func.isRequired,onTouchStart:h.func.isRequired,onTouchEnd:h.func.isRequired,split:h.oneOf(["vertical","horizontal"]),style:pn,resizerClassName:h.string.isRequired};Al.defaultProps={resizerClassName:Tc};function ga(e,n){if(e.selection)e.selection.empty();else try{n.getSelection().removeAllRanges()}catch{}}function Sa(e,n,t,r){if(typeof r=="number"){var o=typeof n=="number"?n:0,i=typeof t=="number"&&t>=0?t:1/0;return Math.max(o,Math.min(i,r))}return e!==void 0?e:n}function jp(e){return de.Children.toArray(e).filter(function(n){return n})}var _l=function(e){Ll(t,e);var n=Fl(t);function t(r){var o;Pl(this,t),o=n.call(this,r),o.onMouseDown=o.onMouseDown.bind(Bn(o)),o.onTouchStart=o.onTouchStart.bind(Bn(o)),o.onMouseMove=o.onMouseMove.bind(Bn(o)),o.onTouchMove=o.onTouchMove.bind(Bn(o)),o.onMouseUp=o.onMouseUp.bind(Bn(o));var i=r.size,l=r.defaultSize,u=r.minSize,a=r.maxSize,d=r.primary,g=i!==void 0?i:Sa(l,u,a,null);return o.state={active:!1,resized:!1,pane1Size:d==="first"?g:void 0,pane2Size:d==="second"?g:void 0,instanceProps:{size:i}},o}return Nl(t,[{key:"componentDidMount",value:function(){document.addEventListener("mouseup",this.onMouseUp),document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("touchmove",this.onTouchMove),this.setState(t.getSizeUpdate(this.props,this.state))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mouseup",this.onMouseUp),document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("touchmove",this.onTouchMove)}},{key:"onMouseDown",value:function(o){var i=Object.assign({},o,{touches:[{clientX:o.clientX,clientY:o.clientY}]});this.onTouchStart(i)}},{key:"onTouchStart",value:function(o){var i=this.props,l=i.allowResize,u=i.onDragStarted,a=i.split;if(l){ga(document,window);var d=a==="vertical"?o.touches[0].clientX:o.touches[0].clientY;typeof u=="function"&&u(),this.setState({active:!0,position:d})}}},{key:"onMouseMove",value:function(o){var i=Object.assign({},o,{touches:[{clientX:o.clientX,clientY:o.clientY}]});this.onTouchMove(i)}},{key:"onTouchMove",value:function(o){var i=this.props,l=i.allowResize,u=i.maxSize,a=i.minSize,d=i.onChange,g=i.split,T=i.step,m=this.state,b=m.active,E=m.position;if(l&&b){ga(document,window);var O=this.props.primary==="first",c=O?this.pane1:this.pane2,s=O?this.pane2:this.pane1;if(c){var f=c,p=s;if(f.getBoundingClientRect){var y=f.getBoundingClientRect().width,w=f.getBoundingClientRect().height,v=g==="vertical"?o.touches[0].clientX:o.touches[0].clientY,x=g==="vertical"?y:w,z=E-v;if(T){if(Math.abs(z)<T)return;z=~~(z/T)*T}var M=O?z:-z,R=parseInt(window.getComputedStyle(f).order),he=parseInt(window.getComputedStyle(p).order);R>he&&(M=-M);var G=u;if(u!==void 0&&u<=0){var j=this.splitPane;g==="vertical"?G=j.getBoundingClientRect().width+u:G=j.getBoundingClientRect().height+u}var Y=x-M,ae=E-z;Y<a?Y=a:u!==void 0&&Y>G?Y=G:this.setState({position:ae,resized:!0}),d&&d(Y),this.setState(Oc({draggedSize:Y},O?"pane1Size":"pane2Size",Y))}}}}},{key:"onMouseUp",value:function(){var o=this.props,i=o.allowResize,l=o.onDragFinished,u=this.state,a=u.active,d=u.draggedSize;i&&a&&(typeof l=="function"&&l(d),this.setState({active:!1}))}},{key:"render",value:function(){var o=this,i=this.props,l=i.allowResize,u=i.children,a=i.className,d=i.onResizerClick,g=i.onResizerDoubleClick,T=i.paneClassName,m=i.pane1ClassName,b=i.pane2ClassName,E=i.paneStyle,O=i.pane1Style,c=i.pane2Style,s=i.resizerClassName,f=i.resizerStyle,p=i.split,y=i.style,w=this.state,v=w.pane1Size,x=w.pane2Size,z=l?"":"disabled",M=s&&"".concat(s," ").concat(Tc),R=jp(u),he=Ho({display:"flex",flex:1,height:"100%",position:"absolute",outline:"none",overflow:"hidden",MozUserSelect:"text",WebkitUserSelect:"text",msUserSelect:"text",userSelect:"text"},y);p==="vertical"?Object.assign(he,{flexDirection:"row",left:0,right:0}):Object.assign(he,{bottom:0,flexDirection:"column",minHeight:"100%",top:0,width:"100%"});var G=["SplitPane",a,p,z],j=Ho({},E,{},O),Y=Ho({},E,{},c),ae=["Pane1",T,m].join(" "),Ie=["Pane2",T,b].join(" ");return de.createElement("div",{className:G.join(" "),ref:function(we){o.splitPane=we},style:he},de.createElement(ro,{className:ae,key:"pane1",eleRef:function(we){o.pane1=we},size:v,split:p,style:j},R[0]),de.createElement(Al,{className:z,onClick:d,onDoubleClick:g,onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart,onTouchEnd:this.onMouseUp,key:"resizer",resizerClassName:M,split:p,style:f||{}}),de.createElement(ro,{className:Ie,key:"pane2",eleRef:function(we){o.pane2=we},size:x,split:p,style:Y},R[1]))}}],[{key:"getDerivedStateFromProps",value:function(o,i){return t.getSizeUpdate(o,i)}},{key:"getSizeUpdate",value:function(o,i){var l={},u=i.instanceProps;if(u.size===o.size&&o.size!==void 0)return{};var a=o.size!==void 0?o.size:Sa(o.defaultSize,o.minSize,o.maxSize,i.draggedSize);o.size!==void 0&&(l.draggedSize=a);var d=o.primary==="first";return l[d?"pane1Size":"pane2Size"]=a,l[d?"pane2Size":"pane1Size"]=void 0,l.instanceProps={size:o.size},l}}]),t}(de.Component);_l.propTypes={allowResize:h.bool,children:h.arrayOf(h.node).isRequired,className:h.string,primary:h.oneOf(["first","second"]),minSize:h.oneOfType([h.string,h.number]),maxSize:h.oneOfType([h.string,h.number]),defaultSize:h.oneOfType([h.string,h.number]),size:h.oneOfType([h.string,h.number]),split:h.oneOf(["vertical","horizontal"]),onDragStarted:h.func,onDragFinished:h.func,onChange:h.func,onResizerClick:h.func,onResizerDoubleClick:h.func,style:pn,resizerStyle:pn,paneClassName:h.string,pane1ClassName:h.string,pane2ClassName:h.string,paneStyle:pn,pane1Style:pn,pane2Style:pn,resizerClassName:h.string,step:h.number};_l.defaultProps={allowResize:!0,minSize:50,primary:"first",split:"vertical",paneClassName:"",pane1ClassName:"",pane2ClassName:""};_p(_l);var $p=[["commands.d.ts",`import "./kind";
import { TRadarFilter, TRadarSort, TUnitLocateBuildingGroup } from "./util";
declare global {
  /**
   * Appends the items to the print buffer, calling this function
   * on its own will not print any contents to a message block.
   *
   * To print the contents of the print buffer and empty it call \`printFlush\`.
   *
   * @param items The items to be added to the print buffer.
   */
  function print(...items: unknown[]): void;

  /**
   * Appends draw contents to the draw buffer.
   *
   * Warning: these methods only append data to the draw buffer,
   * which is used by \`drawFlush\` to actually draw content on a display.
   */
  function draw(mode: "clear", r: number, g: number, b: number): void;

  /**
   * Appends draw contents to the draw buffer.
   *
   * Warning: these methods only append data to the draw buffer,
   * which is used by \`drawFlush\` to actually draw content on a display.
   */
  function draw(
    mode: "color",
    r: number,
    g: number,
    b: number,
    a: number
  ): void;

  /**
   * Appends draw contents to the draw buffer.
   *
   * Warning: these methods only append data to the draw buffer,
   * which is used by \`drawFlush\` to actually draw content on a display.
   */
  function draw(mode: "stroke", width: number): void;

  /**
   * Appends draw contents to the draw buffer.
   *
   * Warning: these methods only append data to the draw buffer,
   * which is used by \`drawFlush\` to actually draw content on a display.
   */
  function draw(
    mode: "line",
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ): void;

  /**
   * Appends draw contents to the draw buffer.
   *
   * Warning: these methods only append data to the draw buffer,
   * which is used by \`drawFlush\` to actually draw content on a display.
   */
  function draw(
    mode: "rect",
    x: number,
    y: number,
    width: number,
    height: number
  ): void;

  /**
   * Appends draw contents to the draw buffer.
   *
   * Warning: these methods only append data to the draw buffer,
   * which is used by \`drawFlush\` to actually draw content on a display.
   */
  function draw(
    mode: "lineRect",
    x: number,
    y: number,
    width: number,
    height: number
  ): void;

  /**
   * Appends draw contents to the draw buffer.
   *
   * Warning: these methods only append data to the draw buffer,
   * which is used by \`drawFlush\` to actually draw content on a display.
   */
  function draw(
    mode: "poly",
    x: number,
    y: number,
    sides: number,
    radius: number,
    rotation: number
  ): void;

  /**
   * Appends draw contents to the draw buffer.
   *
   * Warning: these methods only append data to the draw buffer,
   * which is used by \`drawFlush\` to actually draw content on a display.
   */
  function draw(
    mode: "linePoly",
    x: number,
    y: number,
    sides: number,
    radius: number,
    rotation: number
  ): void;

  /**
   * Appends draw contents to the draw buffer.
   *
   * Warning: these methods only append data to the draw buffer,
   * which is used by \`drawFlush\` to actually draw content on a display.
   */
  function draw(
    mode: "triangle",
    x: number,
    y: number,
    x2: number,
    y2: number,
    x3: number,
    y3: number
  ): void;

  /**
   * Appends draw contents to the draw buffer.
   *
   * Warning: these methods only append data to the draw buffer,
   * which is used by \`drawFlush\` to actually draw content on a display.
   */
  function draw(
    mode: "image",
    x: number,
    y: number,
    image: symbol,
    size: number,
    rotation: number
  ): void;

  /**
   * Writes the contents of the print buffer into the target message
   * and clears the buffer afterwards.
   * @param target
   */
  function printFlush(target: BasicBuilding): void;

  /**
   * Writes the contents of the draw buffer into the target display
   * and clears the buffer afterwards.
   * @param target
   */
  function drawFlush(target: BasicBuilding): void;

  /**
   * Gets a block link by its index.
   * @param index
   */
  function getLink<T extends BasicBuilding = AnyBuilding>(index: number): T;

  function control(
    kind: "enabled",
    building: BasicBuilding,
    value: boolean
  ): void;

  function control(
    kind: "shoot",
    building: BasicBuilding & Shooting,
    x: number,
    y: number,
    shoot: boolean
  ): void;

  function control(
    kind: "shootp",
    building: BasicBuilding & Shooting,
    unit: BasicUnit,
    shoot: boolean
  ): void;

  function control(
    kind: "config",
    building: BasicBuilding,
    value: symbol
  ): void;

  function control(
    kind: "color",
    building: BasicBuilding,
    r: number,
    g: number,
    b: number
  ): void;

  /**
   * Detects an unit nearby this \`building\`.
   * @param building The building used to detect potential targets
   * @param filter1 First filter for selecting a target. Setting it to "any" ignores it
   * @param filter2 Second filter for selecting a target. Setting it to "any" ignores it
   * @param filter3 Third filter for selecting a target. Setting it to "any" ignores it
   * @param order The n th unit that fits these requirements based on the sorting method
   *  (1 => first unit, 2 => second unit and so on)
   * @param sort The method on which the results should be sorted
   *
   * @example
   *  const turret = getBuilding("cyclone1")
   *  // returns the second nearest enemy unit
   *  const result = radar(turret, "enemy", "any", "any", 2, "distance")
   */
  function radar<T extends BasicUnit = AnyUnit>(
    building: BasicBuilding,
    filter1: TRadarFilter,
    filter2: TRadarFilter,
    filter3: TRadarFilter,
    order: number,
    sort: TRadarSort
  ): T;

  /**
   * Alternate way to access special properties on objects.
   *
   * This method allows you to use customly created symbols
   * and sensor them on buildings.
   * @param property The property to be sensed on the building
   * @param target
   *
   * @example
   *  let myBuilding = getBuilding("container1")
   *  // jsdoc doesn't allow me to type this
   * // variable, but you should type it as a symbol in this case
   *  let myCustomSymbol = getVar("@custom-symbol") // problably defined by a mod
   *  let result = sensor(myCustomSymbol, myBuilding)
   */
  function sensor<T>(property: symbol, target: BasicBuilding | BasicUnit): T;

  function wait(seconds: number): void;

  function lookup(kind: "block", index: number): BlockSymbol | null;
  function lookup(kind: "unit", index: number): UnitSymbol | null;
  function lookup(kind: "item", index: number): ItemSymbol | null;
  function lookup(kind: "liquid", index: number): LiquidSymbol | null;

  function unitBind(type: UnitSymbol): void;

  function unitControl(mode: "idle"): void;
  function unitControl(mode: "stop"): void;
  function unitControl(mode: "move", x: number, y: number): void;
  function unitControl(
    mode: "approach",
    x: number,
    y: number,
    radius: number
  ): void;
  function unitControl(mode: "boost", enable: boolean): void;
  function unitControl(mode: "pathfind"): void;
  function unitControl(
    mode: "target",
    x: number,
    y: number,
    shoot: boolean
  ): void;
  function unitControl(mode: "targetp", unit: BasicUnit, shoot: boolean): void;
  function unitControl(
    mode: "itemDrop",
    target: BasicBuilding | typeof Blocks.air,
    amount: number
  ): void;
  function unitControl(
    mode: "itemTake",
    target: BasicBuilding,
    item: ItemSymbol,
    amount: number
  ): void;
  function unitControl(mode: "payDrop"): void;
  function unitControl(mode: "payTake", takeUnits: boolean): void;
  function unitControl(mode: "payEnter"): void;
  function unitControl(mode: "mine", x: number, y: number): void;
  function unitControl(mode: "flag", value: number): void;
  function unitControl(
    mode: "build",
    x: number,
    y: number,
    block: BlockSymbol,
    rotation: number,
    config: unknown
  ): void;
  function unitControl<T extends BasicBuilding = AnyBuilding>(
    mode: "getBlock",
    x: number,
    y: number
  ): [type: BlockSymbol | null, building: T | null];
  function unitControl(
    mode: "within",
    x: number,
    y: number,
    radius: number
  ): boolean;

  function unitRadar<T extends BasicUnit>(
    filter1: TRadarFilter,
    filter2: TRadarFilter,
    filter3: TRadarFilter,
    order: number,
    sort: TRadarSort
  ): T;

  function unitLocate(
    find: "ore",
    ore: ItemSymbol
  ): [found: false] | [found: true, x: number, y: number];
  function unitLocate<T extends BasicBuilding = AnyBuilding>(
    find: "building",
    group: TUnitLocateBuildingGroup,
    enemy: boolean
  ): [found: false] | [found: true, x: number, y: number, building: T];
  function unitLocate<T extends BasicBuilding = AnyBuilding>(
    find: "spawn" | "damaged"
  ): [found: false] | [found: true, x: number, y: number, building: T];
}
`],["eslib/index.d.ts",`/// <reference no-default-lib="true"/>

/// <reference lib="es2015" />
`],["eslib/lib.d.ts",`/*! *****************************************************************************
All files in this folder are dryed up versions of the original ones.

This makes updates more manageable.
***************************************************************************** */

/// <reference no-default-lib="true"/>

/// <reference lib="es5" />
`],["eslib/lib.es2015.collection.d.ts",`/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */



/// <reference no-default-lib="true"/>


interface Map<K, V> {
    clear(): void;
    delete(key: K): boolean;
    forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
    get(key: K): V | undefined;
    has(key: K): boolean;
    set(key: K, value: V): this;
    readonly size: number;
}

interface MapConstructor {
    new(): Map<any, any>;
    new<K, V>(entries?: readonly (readonly [K, V])[] | null): Map<K, V>;
    readonly prototype: Map<any, any>;
}
declare var Map: MapConstructor;

interface ReadonlyMap<K, V> {
    forEach(callbackfn: (value: V, key: K, map: ReadonlyMap<K, V>) => void, thisArg?: any): void;
    get(key: K): V | undefined;
    has(key: K): boolean;
    readonly size: number;
}

interface WeakMap<K extends object, V> {
    delete(key: K): boolean;
    get(key: K): V | undefined;
    has(key: K): boolean;
    set(key: K, value: V): this;
}

interface WeakMapConstructor {
    new <K extends object = object, V = any>(entries?: readonly [K, V][] | null): WeakMap<K, V>;
    readonly prototype: WeakMap<object, any>;
}
declare var WeakMap: WeakMapConstructor;

interface Set<T> {
    add(value: T): this;
    clear(): void;
    delete(value: T): boolean;
    forEach(callbackfn: (value: T, value2: T, set: Set<T>) => void, thisArg?: any): void;
    has(value: T): boolean;
    readonly size: number;
}

interface SetConstructor {
    new <T = any>(values?: readonly T[] | null): Set<T>;
    readonly prototype: Set<any>;
}
declare var Set: SetConstructor;

interface ReadonlySet<T> {
    forEach(callbackfn: (value: T, value2: T, set: ReadonlySet<T>) => void, thisArg?: any): void;
    has(value: T): boolean;
    readonly size: number;
}

interface WeakSet<T extends object> {
    add(value: T): this;
    delete(value: T): boolean;
    has(value: T): boolean;
}

interface WeakSetConstructor {
    new <T extends object = object>(values?: readonly T[] | null): WeakSet<T>;
    readonly prototype: WeakSet<object>;
}
declare var WeakSet: WeakSetConstructor;
`],["eslib/lib.es2015.core.d.ts",`/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/// <reference no-default-lib="true"/>
`],["eslib/lib.es2015.d.ts",`/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */



/// <reference no-default-lib="true"/>


/// <reference lib="es5" />
/// <reference lib="es2015.core" />
/// <reference lib="es2015.collection" />
/// <reference lib="es2015.iterable" />
/// <reference lib="es2015.generator" />
/// <reference lib="es2015.promise" />
/// <reference lib="es2015.proxy" />
/// <reference lib="es2015.reflect" />
/// <reference lib="es2015.symbol" />
/// <reference lib="es2015.symbol.wellknown" />
`],["eslib/lib.es2015.generator.d.ts",`/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */



/// <reference no-default-lib="true"/>


/// <reference lib="es2015.iterable" />

interface Generator<T = unknown, TReturn = any, TNext = unknown> extends Iterator<T, TReturn, TNext> {
    // NOTE: 'next' is defined using a tuple to ensure we report the correct assignability errors in all places.
    next(...args: [] | [TNext]): IteratorResult<T, TReturn>;
    return(value: TReturn): IteratorResult<T, TReturn>;
    throw(e: any): IteratorResult<T, TReturn>;
    [Symbol.iterator](): Generator<T, TReturn, TNext>;
}

interface GeneratorFunction {
    /**
     * Creates a new Generator object.
     * @param args A list of arguments the function accepts.
     */
    new (...args: any[]): Generator;
    /**
     * Creates a new Generator object.
     * @param args A list of arguments the function accepts.
     */
    (...args: any[]): Generator;
    /**
     * The length of the arguments.
     */
    readonly length: number;
    /**
     * Returns the name of the function.
     */
    readonly name: string;
    /**
     * A reference to the prototype.
     */
    readonly prototype: Generator;
}

interface GeneratorFunctionConstructor {
    /**
     * Creates a new Generator function.
     * @param args A list of arguments the function accepts.
     */
    new (...args: string[]): GeneratorFunction;
    /**
     * Creates a new Generator function.
     * @param args A list of arguments the function accepts.
     */
    (...args: string[]): GeneratorFunction;
    /**
     * The length of the arguments.
     */
    readonly length: number;
    /**
     * Returns the name of the function.
     */
    readonly name: string;
    /**
     * A reference to the prototype.
     */
    readonly prototype: GeneratorFunction;
}
`],["eslib/lib.es2015.iterable.d.ts",`/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/// <reference no-default-lib="true"/>

/// <reference lib="es2015.symbol" />

interface SymbolConstructor {
  /**
   * A method that returns the default iterator for an object. Called by the semantics of the
   * for-of statement.
   */
  readonly iterator: symbol;
}

interface IteratorYieldResult<TYield> {
  done?: false;
  value: TYield;
}

interface IteratorReturnResult<TReturn> {
  done: true;
  value: TReturn;
}

type IteratorResult<T, TReturn = any> =
  | IteratorYieldResult<T>
  | IteratorReturnResult<TReturn>;

interface Iterator<T, TReturn = any, TNext = undefined> {
  // NOTE: 'next' is defined using a tuple to ensure we report the correct assignability errors in all places.
  next(...args: [] | [TNext]): IteratorResult<T, TReturn>;
  return?(value?: TReturn): IteratorResult<T, TReturn>;
  throw?(e?: any): IteratorResult<T, TReturn>;
}

interface Iterable<T> {
  [Symbol.iterator](): Iterator<T>;
}

interface IterableIterator<T> extends Iterator<T> {
  [Symbol.iterator](): IterableIterator<T>;
}

interface Array<T> {
  /** Iterator */
  [Symbol.iterator](): IterableIterator<T>;
}

interface ReadonlyArray<T> {
  /** Iterator of values in the array. */
  [Symbol.iterator](): IterableIterator<T>;
}

interface IArguments {
  /** Iterator */
  [Symbol.iterator](): IterableIterator<any>;
}
`],["eslib/lib.es5.d.ts",`/// <reference no-default-lib="true"/>

interface Symbol {}

interface SymbolConstructor {}

declare var Symbol: SymbolConstructor;
interface Object {}

/**
 * Creates a new function.
 */
interface Function {}

/**
 * Extracts the type of the 'this' parameter of a function type, or 'unknown' if the function type has no 'this' parameter.
 */
type ThisParameterType<T> = T extends (this: infer U, ...args: any[]) => any
  ? U
  : unknown;

/**
 * Removes the 'this' parameter from a function type.
 */
type OmitThisParameter<T> = unknown extends ThisParameterType<T>
  ? T
  : T extends (...args: infer A) => infer R
  ? (...args: A) => R
  : T;

interface CallableFunction extends Function {}

interface NewableFunction extends Function {}

interface IArguments {}

interface String {
  /** Returns the length of a String object. */
  readonly length: number;
}

interface Boolean {}

interface Number {}

interface TemplateStringsArray extends ReadonlyArray<string> {
  readonly raw: readonly string[];
}

/**
 * The type of \`import.meta\`.
 *
 * If you need to declare that a given property exists on \`import.meta\`,
 * this type may be augmented via interface merging.
 */
interface ImportMeta {}

interface Math {
  /**
   * Returns the larger of two of supplied numeric expressions.
   * @param a
   * @param b
   */
  max(a: number, b: number): number;

  /**
   * Returns the smaller of two of supplied numeric expressions.
   * @param a
   * @param b
   */
  min(a: number, b: number): number;

  /**
   * Returns the angle of a vector in degrees
   * @param a
   * @param b
   */
  angle(a: number, b: number): number;

  /**
   * Returns the length of a vector
   * @param a
   * @param b
   */
  len(a: number, b: number): number;

  /**
   * Returns 2D simplex noise
   * @param x
   * @param y
   */
  noise(x: number, y: number): number;

  /**
   * Returns the absolute value of a number.
   * @example
   *    Math.abs(-5) // 5
   *    Math.abs(5) // 5
   * @param x
   */
  abs(x: number): number;

  /**
   * Returns the natural logarithm (base e) of a number
   * @param x
   */
  log(x: number): number;

  /**
   * Returns the logarithm (base 10) of a number
   * @param x
   */
  log10(x: number): number;

  sin(x: number): number;
  cos(x: number): number;
  tan(x: number): number;
  floor(x: number): number;
  ceil(x: number): number;
  sqrt(x: number): number;

  /**
   * Returns a random floating point number from 0 to \`range\` (excluding \`range\` itself)
   * @param range
   */
  rand(range: number): number;
}
declare const Math: Math;

interface Error {}

interface EvalError extends Error {}

interface RangeError extends Error {}

interface ReferenceError extends Error {}

interface SyntaxError extends Error {}

interface TypeError extends Error {}

interface URIError extends Error {}

/////////////////////////////
/// ECMAScript Array API (specially handled by compiler)
/////////////////////////////

interface ReadonlyArray<T> {
  /**
   * Gets the length of the array. This is a number one higher than the highest element defined in an array.
   */
  readonly length: number;

  readonly [n: number]: T;
}

interface ConcatArray<T> {
  readonly length: number;
  readonly [n: number]: T;
}

interface Array<T> {
  /**
   * Gets or sets the length of the array. This is a number one higher than the highest index in the array.
   */
  length: number;

  [n: number]: T;
}

interface ArrayLike<T> {
  readonly length: number;
  readonly [n: number]: T;
}

/**
 * Make all properties in T optional
 */
type Partial<T> = {
  [P in keyof T]?: T[P];
};

/**
 * Make all properties in T required
 */
type Required<T> = {
  [P in keyof T]-?: T[P];
};

/**
 * Make all properties in T readonly
 */
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

/**
 * Construct a type with a set of properties K of type T
 */
type Record<K extends keyof any, T> = {
  [P in K]: T;
};

/**
 * Exclude from T those types that are assignable to U
 */
type Exclude<T, U> = T extends U ? never : T;

/**
 * Extract from T those types that are assignable to U
 */
type Extract<T, U> = T extends U ? T : never;

/**
 * Construct a type with the properties of T except for those in type K.
 */
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

/**
 * Exclude null and undefined from T
 */
type NonNullable<T> = T extends null | undefined ? never : T;

/**
 * Obtain the parameters of a function type in a tuple
 */
type Parameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;

/**
 * Obtain the parameters of a constructor function type in a tuple
 */
type ConstructorParameters<T extends new (...args: any) => any> =
  T extends new (...args: infer P) => any ? P : never;

/**
 * Obtain the return type of a function type
 */
type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;

/**
 * Obtain the return type of a constructor function type
 */
type InstanceType<T extends new (...args: any) => any> = T extends new (
  ...args: any
) => infer R
  ? R
  : any;

/**
 * Convert string literal type to uppercase
 */
type Uppercase<S extends string> = intrinsic;

/**
 * Convert string literal type to lowercase
 */
type Lowercase<S extends string> = intrinsic;

/**
 * Convert first character of string literal type to uppercase
 */
type Capitalize<S extends string> = intrinsic;

/**
 * Convert first character of string literal type to lowercase
 */
type Uncapitalize<S extends string> = intrinsic;

/**
 * Marker for contextual 'this' type
 */
interface ThisType<T> {}

/////////////////////////////
/// ECMAScript Internationalization API
/////////////////////////////

interface String {}

interface Number {}
`],["eslib/lib.es6.d.ts",`/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/// <reference no-default-lib="true"/>

/// <reference lib="es2015" />
`],["globals.d.ts",`/// <reference path="./kinds.d.ts" />

declare enum ControlKind {
  ctrlPlayer,
  ctrlProcessor,
  ctrlFormation,
}

interface Vars {
  /** The processor currently executing this code */
  readonly this: BasicBuilding &
    Typed<
      | typeof Blocks.microProcessor
      | typeof Blocks.logicProcessor
      | typeof Blocks.hyperProcessor
    >;
  /** The position on the x axis of this processor */
  readonly thisx: number;
  /** The position on the y axis of this processor */
  readonly thisy: number;
  /** The width of the map */
  readonly mapw: number;
  /** The height of the map */
  readonly maph: number;
  /** The number of blocks linked to this processor */
  readonly links: number;
  /** The amount of instructions run per second */
  readonly ipt: number;
  /** The unit bound to this processor */
  readonly unit: AnyUnit;
}

declare const Vars: Vars;

declare namespace Items {
  const copper: unique symbol;
  const lead: unique symbol;
  const metaglass: unique symbol;
  const graphite: unique symbol;
  const sand: unique symbol;
  const coal: unique symbol;
  const titanium: unique symbol;
  const thorium: unique symbol;
  const scrap: unique symbol;
  const silicon: unique symbol;
  const plastanium: unique symbol;
  const phaseFabric: unique symbol;
  const surgeAlloy: unique symbol;
  const sporePod: unique symbol;
  const blastCompound: unique symbol;
  const pyratite: unique symbol;
}

type ItemSymbol = typeof Items[keyof typeof Items];

declare namespace Liquids {
  const water: unique symbol;
  const slag: unique symbol;
  const oil: unique symbol;
  const cryofluid: unique symbol;
}

type LiquidSymbol = typeof Liquids[keyof typeof Liquids];

declare namespace Units {
  const dagger: unique symbol;
  const mace: unique symbol;
  const fortress: unique symbol;
  const scepter: unique symbol;
  const reign: unique symbol;
  const nova: unique symbol;
  const pulsar: unique symbol;
  const quasar: unique symbol;
  const vela: unique symbol;
  const corvus: unique symbol;
  const crawler: unique symbol;
  const atrax: unique symbol;
  const spiroct: unique symbol;
  const arkyid: unique symbol;
  const toxopid: unique symbol;
  const flare: unique symbol;
  const horizon: unique symbol;
  const zenith: unique symbol;
  const antumbra: unique symbol;
  const eclipse: unique symbol;
  const mono: unique symbol;
  const poly: unique symbol;
  const mega: unique symbol;
  const quad: unique symbol;
  const oct: unique symbol;
  const risso: unique symbol;
  const minke: unique symbol;
  const bryde: unique symbol;
  const sei: unique symbol;
  const omura: unique symbol;
  const retusa: unique symbol;
  const oxynoe: unique symbol;
  const cyerce: unique symbol;
  const aegires: unique symbol;
  const navanax: unique symbol;
  const alpha: unique symbol;
  const beta: unique symbol;
  const gamma: unique symbol;
}

type UnitSymbol = typeof Units[keyof typeof Units];

declare namespace LAccess {
  const totalItems: unique symbol;
  const firstItem: unique symbol;
  const totalLiquids: unique symbol;
  const totalPower: unique symbol;
  const itemCapacity: unique symbol;
  const liquidCapacity: unique symbol;
  const powerCapacity: unique symbol;
  const powerNetStored: unique symbol;
  const powerNetCapacity: unique symbol;
  const powerNetIn: unique symbol;
  const powerNetOut: unique symbol;
  const ammo: unique symbol;
  const ammoCapacity: unique symbol;
  const health: unique symbol;
  const maxHealth: unique symbol;
  const heat: unique symbol;
  const efficiency: unique symbol;
  const progress: unique symbol;
  const timescale: unique symbol;
  const rotation: unique symbol;
  const x: unique symbol;
  const y: unique symbol;
  const shootX: unique symbol;
  const shootY: unique symbol;
  const size: unique symbol;
  const dead: unique symbol;
  const range: unique symbol;
  const shooting: unique symbol;
  const boosting: unique symbol;
  const mineX: unique symbol;
  const mineY: unique symbol;
  const mining: unique symbol;
  const team: unique symbol;
  const type: unique symbol;
  const flag: unique symbol;
  const controlled: unique symbol;
  const controller: unique symbol;
  const commanded: unique symbol;
  const name: unique symbol;
  const payloadCount: unique symbol;
  const payloadType: unique symbol;
  const enabled: unique symbol;
  const shoot: unique symbol;
  const shootp: unique symbol;
  const config: unique symbol;
  const color: unique symbol;
}

declare namespace UnitCommands {
  const attack: unique symbol;
  const rally: unique symbol;
  const idle: unique symbol;
}

type UnitCommandSymbol = typeof UnitCommands[keyof typeof UnitCommands];

declare namespace Blocks {
  // special "blocks" to reference stuff from the environment
  const air: unique symbol;
  const solid: unique symbol;

  const siliconSmelter: unique symbol;
  const siliconCrucible: unique symbol;
  const kiln: unique symbol;
  const graphitePress: unique symbol;
  const plastaniumCompressor: unique symbol;
  const multiPress: unique symbol;
  const phaseWeaver: unique symbol;
  const surgeSmelter: unique symbol;
  const pyratiteMixer: unique symbol;
  const blastMixer: unique symbol;
  const cryofluidMixer: unique symbol;
  const melter: unique symbol;
  const separator: unique symbol;
  const disassembler: unique symbol;
  const sporePress: unique symbol;
  const pulverizer: unique symbol;
  const incinerator: unique symbol;
  const coalCentrifuge: unique symbol;
  const powerSource: unique symbol;
  const powerVoid: unique symbol;
  const itemSource: unique symbol;
  const itemVoid: unique symbol;
  const liquidSource: unique symbol;
  const liquidVoid: unique symbol;
  const payloadSource: unique symbol;
  const payloadVoid: unique symbol;
  const illuminator: unique symbol;
  const copperWall: unique symbol;
  const copperWallLarge: unique symbol;
  const titaniumWall: unique symbol;
  const titaniumWallLarge: unique symbol;
  const plastaniumWall: unique symbol;
  const plastaniumWallLarge: unique symbol;
  const thoriumWall: unique symbol;
  const thoriumWallLarge: unique symbol;
  const door: unique symbol;
  const doorLarge: unique symbol;
  const phaseWall: unique symbol;
  const phaseWallLarge: unique symbol;
  const surgeWall: unique symbol;
  const surgeWallLarge: unique symbol;
  const mender: unique symbol;
  const mendProjector: unique symbol;
  const overdriveProjector: unique symbol;
  const overdriveDome: unique symbol;
  const forceProjector: unique symbol;
  const shockMine: unique symbol;
  const scrapWall: unique symbol;
  const scrapWallLarge: unique symbol;
  const scrapWallHuge: unique symbol;
  const scrapWallGigantic: unique symbol;
  const thruster: unique symbol;
  const conveyor: unique symbol;
  const titaniumConveyor: unique symbol;
  const plastaniumConveyor: unique symbol;
  const armoredConveyor: unique symbol;
  const distributor: unique symbol;
  const junction: unique symbol;
  const itemBridge: unique symbol;
  const phaseConveyor: unique symbol;
  const sorter: unique symbol;
  const invertedSorter: unique symbol;
  const router: unique symbol;
  const overflowGate: unique symbol;
  const underflowGate: unique symbol;
  const massDriver: unique symbol;
  const duct: unique symbol;
  const ductRouter: unique symbol;
  const ductBridge: unique symbol;
  const mechanicalPump: unique symbol;
  const rotaryPump: unique symbol;
  const thermalPump: unique symbol;
  const conduit: unique symbol;
  const pulseConduit: unique symbol;
  const platedConduit: unique symbol;
  const liquidRouter: unique symbol;
  const liquidContainer: unique symbol;
  const liquidTank: unique symbol;
  const liquidJunction: unique symbol;
  const bridgeConduit: unique symbol;
  const phaseConduit: unique symbol;
  const combustionGenerator: unique symbol;
  const thermalGenerator: unique symbol;
  const steamGenerator: unique symbol;
  const differentialGenerator: unique symbol;
  const rtgGenerator: unique symbol;
  const solarPanel: unique symbol;
  const largeSolarPanel: unique symbol;
  const thoriumReactor: unique symbol;
  const impactReactor: unique symbol;
  const battery: unique symbol;
  const batteryLarge: unique symbol;
  const powerNode: unique symbol;
  const powerNodeLarge: unique symbol;
  const surgeTower: unique symbol;
  const diode: unique symbol;
  const mechanicalDrill: unique symbol;
  const pneumaticDrill: unique symbol;
  const laserDrill: unique symbol;
  const blastDrill: unique symbol;
  const waterExtractor: unique symbol;
  const oilExtractor: unique symbol;
  const cultivator: unique symbol;
  const coreShard: unique symbol;
  const coreFoundation: unique symbol;
  const coreNucleus: unique symbol;
  const vault: unique symbol;
  const container: unique symbol;
  const unloader: unique symbol;
  const duo: unique symbol;
  const scatter: unique symbol;
  const scorch: unique symbol;
  const hail: unique symbol;
  const arc: unique symbol;
  const wave: unique symbol;
  const lancer: unique symbol;
  const swarmer: unique symbol;
  const salvo: unique symbol;
  const fuse: unique symbol;
  const ripple: unique symbol;
  const cyclone: unique symbol;
  const foreshadow: unique symbol;
  const spectre: unique symbol;
  const meltdown: unique symbol;
  const segment: unique symbol;
  const parallax: unique symbol;
  const tsunami: unique symbol;
  const commandCenter: unique symbol;
  const groundFactory: unique symbol;
  const airFactory: unique symbol;
  const navalFactory: unique symbol;
  const additiveReconstructor: unique symbol;
  const multiplicativeReconstructor: unique symbol;
  const exponentialReconstructor: unique symbol;
  const tetrativeReconstructor: unique symbol;
  const repairPoint: unique symbol;
  const repairTurret: unique symbol;
  const payloadConveyor: unique symbol;
  const payloadRouter: unique symbol;
  const payloadPropulsionTower: unique symbol;
  const deconstructor: unique symbol;
  const constructor: unique symbol;
  const largeConstructor: unique symbol;
  const payloadLoader: unique symbol;
  const payloadUnloader: unique symbol;
  const message: unique symbol;
  const switchBlock: unique symbol;
  const microProcessor: unique symbol;
  const logicProcessor: unique symbol;
  const hyperProcessor: unique symbol;
  const largeLogicDisplay: unique symbol;
  const logicDisplay: unique symbol;
  const memoryCell: unique symbol;
  const memoryBank: unique symbol;
  const launchPad: unique symbol;
  const interplanetaryAccelerator: unique symbol;
}

type BlockSymbol = typeof Blocks[keyof typeof Blocks];
`],["helpers.d.ts",`/// <reference path="./kinds.d.ts" />

/**
 * Allows getting unlisted processor variables or symbols.
 *
 * Using this method is discouraged because most values are
 * already accessible under the namespaces \`Units\`, \`Blocks\`,
 * \`Items\`, \`Liquids\`, \`ControlKind\`, \`Vars\` and \`UnitCommands\`.
 *
 * @param key The identifier of the value
 */
declare function getVar<T>(key: string): T;

/**
 * Gets a building linked to the processor by its name.
 *
 * @param name
 */
declare function getBuilding<T extends BasicBuilding = AnyBuilding>(
  name: string
): T;

declare function concat(...strings: string[]): string;
`],["index.d.ts",`/// <reference path="./eslib/index.d.ts" />
/// <reference path="./commands.d.ts" />
/// <reference path="./globals.d.ts" />
/// <reference path="./helpers.d.ts" />
/// <reference path="./kinds.d.ts" />
/// <reference path="./memory.d.ts" />
/// <reference path="./traits.d.ts" />
`],["kinds.d.ts",`/// <reference path="./traits.d.ts" />

interface BasicUnit
  extends ItemHolder,
    Shooting,
    WithHealth,
    Rotatable,
    Spaced,
    Ranged,
    Typed<UnitSymbol>,
    Flagged,
    Controllable,
    Nameable {}

interface AnyUnit extends BasicUnit, Boosted {}

interface BasicBuilding
  extends LiquidHolder,
    ItemHolder,
    PowerHolder,
    WithHealth,
    WithEffiency,
    WithTimescale,
    Rotatable,
    Spaced,
    Ranged,
    Typed<BlockSymbol>,
    WithEnable,
    WithConfig {}

interface BasicTurret extends BasicBuilding, Shooting, WithProgress {}

// just to make this future proof
interface AnyTurret extends BasicTurret {}

interface AnyBuilding extends AnyTurret, Heatable {}
`],["memory.d.ts",`/// <reference path="./kinds.d.ts" />

type MemoryCapacity = 64 | 512;
/**
 * A wrapper around memory cells/banks that is compatible with custom types.
 */
declare class Memory<S extends MemoryCapacity = 64> {
  constructor(cell: BasicBuilding, size?: S);

  [Symbol.iterator](): IterableIterator<number>;
  [index: number]: number;

  /**
   * The practical length of the memory view.
   */
  readonly length: S;
}
`],["traits.d.ts",`import "./globals";

type LogicSymbols = typeof Items & typeof Liquids & typeof LAccess;

type WithSymbols<T extends Record<string, unknown>> = T & {
  readonly [K in keyof (LogicSymbols | T) as LogicSymbols[K]]: T[K];
};

declare global {
  type LiquidHolder = WithSymbols<
    {
      readonly [L in keyof typeof Liquids]: number;
    } & {
      readonly totalLiquids: number;
      readonly liquidCapacity: number;
    }
  >;

  type ItemHolder = WithSymbols<
    {
      readonly [I in keyof typeof Items]: number;
    } & {
      readonly totalItems: number;
      readonly firstItem: ItemSymbol | null;
      readonly itemCapacity: number;
    }
  >;

  type PowerHolder = WithSymbols<{
    readonly totalPower: number;
    readonly powerCapacity: number;
    readonly powerNetStored: number;
    readonly powerNetCapacity: number;
    readonly powerNetIn: number;
    readonly powerNetOut: number;
  }>;

  type Shooting = WithSymbols<{
    readonly shootX: number;
    readonly shootY: number;
    readonly ammo: number;
    readonly ammoCapacity: number;
  }>;

  type WithHealth = WithSymbols<{
    readonly health: number;
    readonly maxHealth: number;
    readonly dead: boolean;
  }>;

  type Heatable = WithSymbols<{
    readonly heat: number;
  }>;

  type WithEffiency = WithSymbols<{
    readonly efficiency: number;
  }>;

  type WithProgress = WithSymbols<{
    readonly progress: number;
  }>;

  type WithTimescale = WithSymbols<{
    readonly timescale: number;
  }>;

  type Rotatable = WithSymbols<{
    readonly rotation: number;
  }>;

  type Spaced = WithSymbols<{
    readonly x: number;
    readonly y: number;
    readonly size: number;
  }>;

  type Ranged = WithSymbols<{
    readonly range: number;
  }>;

  type Boosted = WithSymbols<{
    readonly boosting: number;
  }>;

  type Mining = WithSymbols<{
    readonly mineX: number;
    readonly mineY: number;
    readonly mining: number;
  }>;

  type Typed<T extends symbol = symbol> = WithSymbols<{
    readonly type: T;
  }>;
  type Flagged = WithSymbols<{
    readonly flag: number;
  }>;

  type Controllable = WithSymbols<{
    readonly controlled: 0 | ControlKind;
    readonly controller: AnyUnit | BasicBuilding;
  }>;

  type Nameable = WithSymbols<{
    readonly name: string | null;
  }>;

  type PayloadHolder = WithSymbols<{
    readonly payloadCount: number;
    readonly payloadType: symbol | null;
  }>;

  type WithEnable = WithSymbols<{
    enabled: boolean;
  }>;

  type WithConfig<T extends symbol | number | null = symbol | null> =
    WithSymbols<{
      readonly config: T;
    }>;
}
`],["util.d.ts",`export type TRadarFilter =
  | "any"
  | "enemy"
  | "ally"
  | "player"
  | "attacker"
  | "flying"
  | "boss"
  | "ground";

export type TRadarFilterArray =
  | [TRadarFilter]
  | [TRadarFilter, TRadarFilter]
  | [TRadarFilter, TRadarFilter, TRadarFilter];

export type TRadarSort =
  | "distance"
  | "health"
  | "shield"
  | "armor"
  | "maxHealth";

export type TUnitLocateBuildingGroup =
  | "core"
  | "storage"
  | "generator"
  | "turret"
  | "factory"
  | "repair"
  | "rally"
  | "battery"
  | "reactor";
`]];export{Vp as R,_l as S,Gp as a,de as b,Hp as i,Lp as j,$p as l,A as r};
