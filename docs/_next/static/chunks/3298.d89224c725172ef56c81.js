(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3298],{93298:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(71823),o=r(27590),s=r(28716),i=r(76358),a=r(48764).Buffer;const u=e=>e.replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");function c(e,t,r,o){const i=function(e,t){const r=a.alloc(e.length);for(let n=0;n<e.length;n++)r[n]=e[n]^t[n%t.length];return r}(e,r),c=a.from("0000000000000000000000000000000000000000000000000000000000000000","hex"),p={version:"U2F_V2",keyHandle:u(i.toString("base64")),challenge:u(c.toString("base64")),appId:location.origin};return(0,s.c)("apdu","=> "+e.toString("hex")),(0,n.sign)(p,t/1e3).then((e=>{const{signatureData:t}=e;if("string"===typeof t){const e=a.from((r=t).replace(/-/g,"+").replace(/_/g,"/")+"==".substring(0,3*r.length%4),"base64");let n;return n=o?e.slice(5):e,(0,s.c)("apdu","<= "+n.toString("hex")),n}throw e;var r}))}let p=[];class f extends o.ZP{static async open(e,t=5e3){return new f}constructor(){super(),this.scrambleKey=void 0,this.unwrap=!0,p.push(this)}async exchange(e){try{return await c(e,this.exchangeTimeout,this.scrambleKey,this.unwrap)}catch(t){throw"object"===typeof t.metaData?(5===t.metaData.code&&(p.forEach((e=>e.emit("disconnect"))),p=[]),function(e,t,r){const n=new i.TransportError(t,r);return n.originalError=e,n}(t,"Failed to sign with Ledger device: U2F "+t.metaData.type,"U2F_"+t.metaData.code)):t}}setScrambleKey(e){this.scrambleKey=a.from(e,"ascii")}setUnwrap(e){this.unwrap=e}close(){return Promise.resolve()}}f.isSupported=n.isSupported,f.list=()=>(0,n.isSupported)().then((e=>e?[null]:[])),f.listen=e=>{let t=!1;return(0,n.isSupported)().then((r=>{t||(r?(e.next({type:"add",descriptor:null}),e.complete()):e.error(new i.TransportError("U2F browser support is needed for Ledger. Please use Chrome, Opera or Firefox with a U2F extension. Also make sure you're on an HTTPS connection","U2FNotSupported")))})),{unsubscribe:()=>{t=!0}}}},71823:function(e,t,r){"use strict";e.exports=r(49145)},63845:function(e){"use strict";var t=t||{};e.exports=t,t.EXTENSION_ID="kmendfapggjehodndflmmgagdbamhnfd",t.MessageTypes={U2F_REGISTER_REQUEST:"u2f_register_request",U2F_SIGN_REQUEST:"u2f_sign_request",U2F_REGISTER_RESPONSE:"u2f_register_response",U2F_SIGN_RESPONSE:"u2f_sign_response"},t.ErrorCodes={OK:0,OTHER_ERROR:1,BAD_REQUEST:2,CONFIGURATION_UNSUPPORTED:3,DEVICE_INELIGIBLE:4,TIMEOUT:5},t.Request,t.Response,t.Error,t.SignRequest,t.SignResponse,t.RegisterRequest,t.RegisterResponse,t.disconnect=function(){t.port_&&t.port_.port_&&(t.port_.port_.disconnect(),t.port_=null)},t.getMessagePort=function(e){if("undefined"!=typeof chrome&&chrome.runtime){var r={type:t.MessageTypes.U2F_SIGN_REQUEST,signRequests:[]};chrome.runtime.sendMessage(t.EXTENSION_ID,r,(function(){chrome.runtime.lastError?t.getIframePort_(e):t.getChromeRuntimePort_(e)}))}else t.getIframePort_(e)},t.getChromeRuntimePort_=function(e){var r=chrome.runtime.connect(t.EXTENSION_ID,{includeTlsChannelId:!0});setTimeout((function(){e(null,new t.WrappedChromeRuntimePort_(r))}),0)},t.WrappedChromeRuntimePort_=function(e){this.port_=e},t.WrappedChromeRuntimePort_.prototype.postMessage=function(e){this.port_.postMessage(e)},t.WrappedChromeRuntimePort_.prototype.addEventListener=function(e,t){var r=e.toLowerCase();"message"==r||"onmessage"==r?this.port_.onMessage.addListener((function(e){t({data:e})})):console.error("WrappedChromeRuntimePort only supports onMessage")},t.getIframePort_=function(e){var r="chrome-extension://"+t.EXTENSION_ID,n=document.createElement("iframe");n.src=r+"/u2f-comms.html",n.setAttribute("style","display:none"),document.body.appendChild(n);var o=!1,s=new MessageChannel,i=function(t){"ready"==t.data?(s.port1.removeEventListener("message",i),o||(o=!0,e(null,s.port1))):console.error('First event on iframe port was not "ready"')};s.port1.addEventListener("message",i),s.port1.start(),n.addEventListener("load",(function(){n.contentWindow.postMessage("init",r,[s.port2])})),setTimeout((function(){o||(o=!0,e(new Error("IFrame extension not supported")))}),200)},t.EXTENSION_TIMEOUT_SEC=30,t.port_=null,t.waitingForPort_=[],t.reqCounter_=0,t.callbackMap_={},t.getPortSingleton_=function(e){t.port_?e(null,t.port_):(0==t.waitingForPort_.length&&t.getMessagePort((function(e,r){for(e||(t.port_=r,t.port_.addEventListener("message",t.responseHandler_));t.waitingForPort_.length;)t.waitingForPort_.shift()(e,r)})),t.waitingForPort_.push(e))},t.responseHandler_=function(e){var r=e.data,n=r.requestId;if(n&&t.callbackMap_[n]){var o=t.callbackMap_[n];delete t.callbackMap_[n],o(null,r.responseData)}else console.error("Unknown or missing requestId in response.")},t.isSupported=function(e){t.getPortSingleton_((function(t,r){e(!t)}))},t.sign=function(e,r,n){t.getPortSingleton_((function(o,s){if(o)return r(o);var i=++t.reqCounter_;t.callbackMap_[i]=r;var a={type:t.MessageTypes.U2F_SIGN_REQUEST,signRequests:e,timeoutSeconds:"undefined"!==typeof n?n:t.EXTENSION_TIMEOUT_SEC,requestId:i};s.postMessage(a)}))},t.register=function(e,r,n,o){t.getPortSingleton_((function(s,i){if(s)return n(s);var a=++t.reqCounter_;t.callbackMap_[a]=n;var u={type:t.MessageTypes.U2F_REGISTER_REQUEST,signRequests:r,registerRequests:e,timeoutSeconds:"undefined"!==typeof o?o:t.EXTENSION_TIMEOUT_SEC,requestId:a};i.postMessage(u)}))}},49145:function(e,t,r){"use strict";e.exports=c;var n=r(63845),o="undefined"!==typeof navigator&&!!navigator.userAgent,s=o&&navigator.userAgent.match(/Safari\//)&&!navigator.userAgent.match(/Chrome\//),i=o&&navigator.userAgent.match(/Edge\/1[2345]/),a=null;function u(e){return a||(a=new e((function(e,t){function r(){e({u2f:null,native:!0})}return o?s?r():("undefined"!==typeof window.u2f&&"function"===typeof window.u2f.sign&&e({u2f:window.u2f,native:!0}),i||"http:"===location.protocol||"undefined"===typeof MessageChannel?r():void n.isSupported((function(t){t?e({u2f:n,native:!1}):r()}))):r()}))),a}function c(e){return{isSupported:l.bind(e),ensureSupport:g.bind(e),register:E.bind(e),sign:_.bind(e),ErrorCodes:c.ErrorCodes,ErrorNames:c.ErrorNames}}function p(e,t){var r=null!=t?t.errorCode:1,n=c.ErrorNames[""+r],o=new Error(e);return o.metaData={type:n,code:r},o}function f(e,t){var r={};return r.promise=new e((function(e,n){r.resolve=e,r.reject=n,t.then(e,n)})),r.promise.cancel=function(t,n){u(e).then((function(e){n&&!e.native&&e.u2f.disconnect(),r.reject(p(t,{errorCode:-1}))}))},r}function l(){return u(this).then((function(e){return!!e.u2f}))}function d(e){if(!e.u2f){if("http:"===location.protocol)throw new Error("U2F isn't supported over http, only https");throw new Error("U2F not supported")}}function g(){return u(this).then(d)}function E(e,t,r){var n=this;return Array.isArray(e)||(e=[e]),"number"===typeof t&&"undefined"===typeof r&&(r=t,t=null),t||(t=[]),f(n,u(n).then((function(o){d(o);var s=o.native,i=o.u2f;return new n((function(n,o){if(s){var a=e[0].appId;i.register(a,e,t,(function(e){e.errorCode?o(p("Registration failed",e)):(delete e.errorCode,n(e))}),r)}else i.register(e,t,(function(e,t){e?o(e):t.errorCode?o(p("Registration failed",t)):n(t)}),r)}))}))).promise}function _(e,t){var r=this;return Array.isArray(e)||(e=[e]),f(r,u(r).then((function(n){d(n);var o=n.native,s=n.u2f;return new r((function(r,n){if(o){var i=e[0].appId,a=e[0].challenge;s.sign(i,a,e,(function(e){e.errorCode?n(p("Sign failed",e)):(delete e.errorCode,r(e))}),t)}else s.sign(e,(function(e,t){e?n(e):t.errorCode?n(p("Sign failed",t)):r(t)}),t)}))}))).promise}function m(e){c[e]=function(){if(!r.g.Promise)throw new Error("The platform doesn't natively support promises");var t=[].slice.call(arguments);return c(r.g.Promise)[e].apply(null,t)}}c.ErrorCodes={CANCELLED:-1,OK:0,OTHER_ERROR:1,BAD_REQUEST:2,CONFIGURATION_UNSUPPORTED:3,DEVICE_INELIGIBLE:4,TIMEOUT:5},c.ErrorNames={"-1":"CANCELLED",0:"OK",1:"OTHER_ERROR",2:"BAD_REQUEST",3:"CONFIGURATION_UNSUPPORTED",4:"DEVICE_INELIGIBLE",5:"TIMEOUT"},m("isSupported"),m("ensureSupport"),m("register"),m("sign")}}]);