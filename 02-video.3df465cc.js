!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},r={},o=e.parcelRequire4c75;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequire4c75=o),o.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}}));var i=o("l5bVx");(function(){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=void 0!==e&&"[object global]"==={}.toString.call(e);function o(e,t){return 0===e.indexOf(t.toLowerCase())?e:"".concat(t.toLowerCase()).concat(e.substr(0,1).toUpperCase()).concat(e.substr(1))}function a(e){return/^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)}function u(e){return/^https:\/\/player\.vimeo\.com\/video\/\d+/.test(e)}function c(e){var t,n=0<arguments.length&&void 0!==e?e:{},r=n.id,o=n.url,i=r||o;if(!i)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(t=i,!isNaN(parseFloat(t))&&isFinite(t)&&Math.floor(t)==t)return"https://vimeo.com/".concat(i);if(a(i))return i.replace("http:","https:");if(r)throw new TypeError("“".concat(r,"” is not a valid video id."));throw new TypeError("“".concat(i,"” is not a vimeo.com url."))}var l=void 0!==Array.prototype.indexOf,s="undefined"!=typeof window&&void 0!==window.postMessage;if(!(r||l&&s))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var f,d,h,v,m="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};function p(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'");if(v(this,"_id","_WeakMap_"+y()+"."+y()),0<arguments.length)throw new TypeError("WeakMap iterable is not supported")}function g(e,n){if(!w(e)||!d.call(e,"_id"))throw new TypeError(n+" method called on incompatible receiver "+(void 0===e?"undefined":t(i)(e)))}function y(){return Math.random().toString().substring(2)}function w(e){return Object(e)===e}(f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:m).WeakMap||(d=Object.prototype.hasOwnProperty,h=Object.defineProperty&&function(){try{return 1===Object.defineProperty({},"x",{value:1}).x}catch(e){}}(),v=function(e,t,n){h?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:n}):e[t]=n},f.WeakMap=(v(p.prototype,"delete",(function(e){if(g(this,"delete"),!w(e))return!1;var t=e[this._id];return!(!t||t[0]!==e||(delete e[this._id],0))})),v(p.prototype,"get",(function(e){if(g(this,"get"),w(e)){var t=e[this._id];return t&&t[0]===e?t[1]:void 0}})),v(p.prototype,"has",(function(e){if(g(this,"has"),!w(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)})),v(p.prototype,"set",(function(e,t){if(g(this,"set"),!w(e))throw new TypeError("Invalid value used as weak map key");var n=e[this._id];return n&&n[0]===e?n[1]=t:v(e,this._id,[e,t]),this})),v(p,"_polyfill",!0),p));var b,k,E,T,_,P=(k=b={exports:{}},_=function(){var e,n,r,o,a,u,c=Object.prototype.toString,l="undefined"!=typeof setImmediate?function(e){return setImmediate(e)}:setTimeout;try{Object.defineProperty({},"x",{}),e=function(e,t,n,r){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:!1!==r})}}catch(t){e=function(e,t,n){return e[t]=n,e}}function s(e,t){this.fn=e,this.self=t,this.next=void 0}function f(e,t){r.add(e,t),n=n||l(r.drain)}function d(e){var n,r=void 0===e?"undefined":t(i)(e);return null==e||"object"!=r&&"function"!=r||(n=e.then),"function"==typeof n&&n}function h(){for(var e=0;e<this.chain.length;e++)!function(e,t,n){var r,o;try{!1===t?n.reject(e.msg):(r=!0===t?e.msg:t.call(void 0,e.msg))===n.promise?n.reject(TypeError("Promise-chain cycle")):(o=d(r))?o.call(r,n.resolve,n.reject):n.resolve(r)}catch(e){n.reject(e)}}(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function v(e){var t,n=this;if(!n.triggered){n.triggered=!0,n.def&&(n=n.def);try{(t=d(e))?f((function(){var r=new g(n);try{t.call(e,(function(){v.apply(r,arguments)}),(function(){m.apply(r,arguments)}))}catch(e){m.call(r,e)}})):(n.msg=e,n.state=1,0<n.chain.length&&f(h,n))}catch(e){m.call(new g(n),e)}}}function m(e){var t=this;t.triggered||(t.triggered=!0,t.def&&(t=t.def),t.msg=e,t.state=2,0<t.chain.length&&f(h,t))}function p(e,t,n,r){for(var o=0;o<t.length;o++)!function(o){e.resolve(t[o]).then((function(e){n(o,e)}),r)}(o)}function g(e){this.def=e,this.triggered=!1}function y(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function w(e){if("function"!=typeof e)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var t=new y(this);this.then=function(e,n){var r={success:"function"!=typeof e||e,failure:"function"==typeof n&&n};return r.promise=new this.constructor((function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");r.resolve=e,r.reject=t})),t.chain.push(r),0!==t.state&&f(h,t),r.promise},this.catch=function(e){return this.then(void 0,e)};try{e.call(void 0,(function(e){v.call(t,e)}),(function(e){m.call(t,e)}))}catch(e){m.call(t,e)}}var b=e({},"constructor",w,(r={add:function(e,t){u=new s(e,t),a?a.next=u:o=u,a=u,u=void 0},drain:function(){var e=o;for(o=a=n=void 0;e;)e.fn.call(e.self),e=e.next}},!1));return e(w.prototype=b,"__NPO__",0,!1),e(w,"resolve",(function(e){return e&&"object"==typeof e&&1===e.__NPO__?e:new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");t(e)}))})),e(w,"reject",(function(e){return new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");n(e)}))})),e(w,"all",(function(e){var t=this;return"[object Array]"!=c.call(e)?t.reject(TypeError("Not an array")):0===e.length?t.resolve([]):new t((function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");var o=e.length,i=Array(o),a=0;p(t,e,(function(e,t){i[e]=t,++a===o&&n(i)}),r)}))})),e(w,"race",(function(e){var t=this;return"[object Array]"!=c.call(e)?t.reject(TypeError("Not an array")):new t((function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");p(t,e,(function(e,t){n(t)}),r)}))})),w},(T=m)[E="Promise"]=T[E]||_(),k.exports&&(k.exports=T[E]),b.exports),M=new WeakMap;function x(e,t,n){var r=M.get(e.element)||{};t in r||(r[t]=[]),r[t].push(n),M.set(e.element,r)}function N(e,t){return(M.get(e.element)||{})[t]||[]}function F(e,t,n){var r=M.get(e.element)||{};if(!r[t])return!0;if(!n)return r[t]=[],M.set(e.element,r),!0;var o=r[t].indexOf(n);return-1!==o&&r[t].splice(o,1),M.set(e.element,r),r[t]&&0===r[t].length}function C(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){return console.warn(e),{}}return e}function j(e,t,n){var r,o;e.element.contentWindow&&e.element.contentWindow.postMessage&&(r={method:t},void 0!==n&&(r.value=n),8<=(o=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1")))&&o<10&&(r=JSON.stringify(r)),e.element.contentWindow.postMessage(r,e.origin))}function A(e,t){var n,r,o=[];(t=C(t)).event?("error"===t.event&&N(e,t.data.method).forEach((function(n){var r=new Error(t.data.message);r.name=t.data.name,n.reject(r),F(e,t.data.method,n)})),o=N(e,"event:".concat(t.event)),n=t.data):!t.method||(r=function(e,t){var n=N(e,t);if(n.length<1)return!1;var r=n.shift();return F(e,t,r),r}(e,t.method))&&(o.push(r),n=t.value),o.forEach((function(t){try{if("function"==typeof t)return void t.call(e,n);t.resolve(n)}catch(e){}}))}var S=["autopause","autoplay","background","byline","color","controls","dnt","height","id","interactive_params","keyboard","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","texttrack","title","transparent","url","width"];function q(e,t){var n=1<arguments.length&&void 0!==t?t:{};return S.reduce((function(t,n){var r=e.getAttribute("data-vimeo-".concat(n));return!r&&""!==r||(t[n]=""===r?1:r),t}),n)}function O(e,t){var n=e.html;if(!t)throw new TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var r=document.createElement("div");return r.innerHTML=n,t.appendChild(r.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}function V(e,t,n){var r=1<arguments.length&&void 0!==t?t:{},o=2<arguments.length?n:void 0;return new Promise((function(t,n){if(!a(e))throw new TypeError("“".concat(e,"” is not a vimeo.com url."));var i="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e));for(var u in r)r.hasOwnProperty(u)&&(i+="&".concat(u,"=").concat(encodeURIComponent(r[u])));var c=new("XDomainRequest"in window?XDomainRequest:XMLHttpRequest);c.open("GET",i,!0),c.onload=function(){if(404!==c.status)if(403!==c.status)try{var r=JSON.parse(c.responseText);if(403===r.domain_status_code)return O(r,o),void n(new Error("“".concat(e,"” is not embeddable.")));t(r)}catch(e){n(e)}else n(new Error("“".concat(e,"” is not embeddable.")));else n(new Error("“".concat(e,"” was not found.")))},c.onerror=function(){var e=c.status?" (".concat(c.status,")"):"";n(new Error("There was an error fetching the embed code from Vimeo".concat(e,".")))},c.send()}))}var I,R,L,W=new WeakMap,z=new WeakMap,U={},D=function(){function e(t){var n,r,o=this,i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),window.jQuery&&t instanceof jQuery&&(1<t.length&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),t=t[0]),"undefined"!=typeof document&&"string"==typeof t&&(t=document.getElementById(t)),n=t,!Boolean(n&&1===n.nodeType&&"nodeName"in n&&n.ownerDocument&&n.ownerDocument.defaultView))throw new TypeError("You must pass either a valid element or a valid id.");if("IFRAME"===t.nodeName||(r=t.querySelector("iframe"))&&(t=r),"IFRAME"===t.nodeName&&!a(t.getAttribute("src")||""))throw new Error("The player element passed isn’t a Vimeo embed.");if(W.has(t))return W.get(t);this._window=t.ownerDocument.defaultView,this.element=t,this.origin="*";var u,l=new P((function(e,n){var r;o._onMessage=function(t){if(a(t.origin)&&o.element.contentWindow===t.source){"*"===o.origin&&(o.origin=t.origin);var r=C(t.data);if(r&&"error"===r.event&&r.data&&"ready"===r.data.method){var i=new Error(r.data.message);return i.name=r.data.name,void n(i)}var u=r&&"ready"===r.event,c=r&&"ping"===r.method;if(u||c)return o.element.setAttribute("data-ready","true"),void e();A(o,r)}},o._window.addEventListener("message",o._onMessage),"IFRAME"!==o.element.nodeName&&V(c(r=q(t,i)),r,t).then((function(e){var n,r,i,a=O(e,t);return o.element=a,o._originalElement=t,n=t,r=a,i=M.get(n),M.set(r,i),M.delete(n),W.set(o.element,o),e})).catch(n)}));return z.set(this,l),W.set(this.element,this),"IFRAME"===this.element.nodeName&&j(this,"ping"),U.isEnabled&&(u=function(){return U.exit()},this.fullscreenchangeHandler=function(){(U.isFullscreen?x:F)(o,"event:exitFullscreen",u),o.ready().then((function(){j(o,"fullscreenchange",U.isFullscreen)}))},U.on("fullscreenchange",this.fullscreenchangeHandler)),this}var t,r,i;return r=[{key:"callMethod",value:function(e,t){var n=this,r=1<arguments.length&&void 0!==t?t:{};return new P((function(t,o){return n.ready().then((function(){x(n,e,{resolve:t,reject:o}),j(n,e,r)})).catch(o)}))}},{key:"get",value:function(e){var t=this;return new P((function(n,r){return e=o(e,"get"),t.ready().then((function(){x(t,e,{resolve:n,reject:r}),j(t,e)})).catch(r)}))}},{key:"set",value:function(e,t){var n=this;return new P((function(r,i){if(e=o(e,"set"),null==t)throw new TypeError("There must be a value to set.");return n.ready().then((function(){x(n,e,{resolve:r,reject:i}),j(n,e,t)})).catch(i)}))}},{key:"on",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(!t)throw new TypeError("You must pass a callback function.");if("function"!=typeof t)throw new TypeError("The callback must be a function.");0===N(this,"event:".concat(e)).length&&this.callMethod("addEventListener",e).catch((function(){})),x(this,"event:".concat(e),t)}},{key:"off",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(t&&"function"!=typeof t)throw new TypeError("The callback must be a function.");F(this,"event:".concat(e),t)&&this.callMethod("removeEventListener",e).catch((function(e){}))}},{key:"loadVideo",value:function(e){return this.callMethod("loadVideo",e)}},{key:"ready",value:function(){var e=z.get(this)||new P((function(e,t){t(new Error("Unknown player. Probably unloaded."))}));return P.resolve(e)}},{key:"addCuePoint",value:function(e,t){var n=1<arguments.length&&void 0!==t?t:{};return this.callMethod("addCuePoint",{time:e,data:n})}},{key:"removeCuePoint",value:function(e){return this.callMethod("removeCuePoint",e)}},{key:"enableTextTrack",value:function(e,t){if(!e)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"requestFullscreen",value:function(){return U.isEnabled?U.request(this.element):this.callMethod("requestFullscreen")}},{key:"exitFullscreen",value:function(){return U.isEnabled?U.exit():this.callMethod("exitFullscreen")}},{key:"getFullscreen",value:function(){return U.isEnabled?P.resolve(U.isFullscreen):this.get("fullscreen")}},{key:"requestPictureInPicture",value:function(){return this.callMethod("requestPictureInPicture")}},{key:"exitPictureInPicture",value:function(){return this.callMethod("exitPictureInPicture")}},{key:"getPictureInPicture",value:function(){return this.get("pictureInPicture")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var e=this;return new P((function(t){var n;z.delete(e),W.delete(e.element),e._originalElement&&(W.delete(e._originalElement),e._originalElement.removeAttribute("data-vimeo-initialized")),e.element&&"IFRAME"===e.element.nodeName&&e.element.parentNode&&(e.element.parentNode.parentNode&&e._originalElement&&e._originalElement!==e.element.parentNode?e.element.parentNode.parentNode.removeChild(e.element.parentNode):e.element.parentNode.removeChild(e.element)),e.element&&"DIV"===e.element.nodeName&&e.element.parentNode&&(e.element.removeAttribute("data-vimeo-initialized"),(n=e.element.querySelector("iframe"))&&n.parentNode&&(n.parentNode.parentNode&&e._originalElement&&e._originalElement!==n.parentNode?n.parentNode.parentNode.removeChild(n.parentNode):n.parentNode.removeChild(n))),e._window.removeEventListener("message",e._onMessage),U.isEnabled&&U.off("fullscreenchange",e.fullscreenchangeHandler),t()}))}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(e){return this.set("autopause",e)}},{key:"getBuffered",value:function(){return this.get("buffered")}},{key:"getCameraProps",value:function(){return this.get("cameraProps")}},{key:"setCameraProps",value:function(e){return this.set("cameraProps",e)}},{key:"getChapters",value:function(){return this.get("chapters")}},{key:"getCurrentChapter",value:function(){return this.get("currentChapter")}},{key:"getColor",value:function(){return this.get("color")}},{key:"setColor",value:function(e){return this.set("color",e)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(e){return this.set("currentTime",e)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(e){return this.set("loop",e)}},{key:"setMuted",value:function(e){return this.set("muted",e)}},{key:"getMuted",value:function(){return this.get("muted")}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(e){return this.set("playbackRate",e)}},{key:"getPlayed",value:function(){return this.get("played")}},{key:"getQualities",value:function(){return this.get("qualities")}},{key:"getQuality",value:function(){return this.get("quality")}},{key:"setQuality",value:function(e){return this.set("quality",e)}},{key:"getSeekable",value:function(){return this.get("seekable")}},{key:"getSeeking",value:function(){return this.get("seeking")}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(e){return this.set("volume",e)}}],n((t=e).prototype,r),i&&n(t,i),e}();r||(I=function(){for(var e,t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n=0,r=t.length,o={};n<r;n++)if((e=t[n])&&e[1]in document){for(n=0;n<e.length;n++)o[t[0][n]]=e[n];return o}return!1}(),R={fullscreenchange:I.fullscreenchange,fullscreenerror:I.fullscreenerror},L={request:function(e){return new Promise((function(t,n){function r(){L.off("fullscreenchange",r),t()}L.on("fullscreenchange",r);var o=(e=e||document.documentElement)[I.requestFullscreen]();o instanceof Promise&&o.then(r).catch(n)}))},exit:function(){return new Promise((function(e,t){var n,r;L.isFullscreen?(n=function t(){L.off("fullscreenchange",t),e()},L.on("fullscreenchange",n),(r=document[I.exitFullscreen]())instanceof Promise&&r.then(n).catch(t)):e()}))},on:function(e,t){var n=R[e];n&&document.addEventListener(n,t)},off:function(e,t){var n=R[e];n&&document.removeEventListener(n,t)}},Object.defineProperties(L,{isFullscreen:{get:function(){return Boolean(document[I.fullscreenElement])}},element:{enumerable:!0,get:function(){return document[I.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(document[I.fullscreenEnabled])}}}),U=L,function(e){function t(e){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(e))}var n=0<arguments.length&&void 0!==e?e:document;[].slice.call(n.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")).forEach((function(e){try{if(null!==e.getAttribute("data-vimeo-defer"))return;var n=q(e);V(c(n),n,e).then((function(t){return O(t,e)})).catch(t)}catch(e){t(e)}}))}(),function(e){var t=0<arguments.length&&void 0!==e?e:document;window.VimeoPlayerResizeEmbeds_||(window.VimeoPlayerResizeEmbeds_=!0,window.addEventListener("message",(function(e){if(a(e.origin)&&e.data&&"spacechange"===e.data.event)for(var n=t.querySelectorAll("iframe"),r=0;r<n.length;r++)if(n[r].contentWindow===e.source){n[r].parentElement.style.paddingBottom="".concat(e.data.data[0].bottom,"px");break}})))}(),function(e){var t=0<arguments.length&&void 0!==e?e:document;window.VimeoSeoMetadataAppended||(window.VimeoSeoMetadataAppended=!0,window.addEventListener("message",(function(e){if(a(e.origin)){var n=C(e.data);if(n&&"ready"===n.event)for(var r=t.querySelectorAll("iframe"),o=0;o<r.length;o++){var i=r[o],c=i.contentWindow===e.source;u(i.src)&&c&&new D(i).callMethod("appendVideoMetadata",window.location.href)}}})))}(),function(e){var t,n=0<arguments.length&&void 0!==e?e:document;window.VimeoCheckedUrlTimeParam||(window.VimeoCheckedUrlTimeParam=!0,t=function(e){"console"in window&&console.error&&console.error("There was an error getting video Id: ".concat(e))},window.addEventListener("message",(function(e){if(a(e.origin)){var r=function(n,r){var o,i=n[r],a=i.contentWindow===e.source;u(i.src)&&a&&(o=new D(i)).getVideoId().then((function(e){var t,n=new RegExp("[?&]vimeo_t_".concat(e,"=([^&#]*)")).exec(window.location.href);n&&n[1]&&(t=decodeURI(n[1]),o.setCurrentTime(t))})).catch(t)},o=C(e.data);if(o&&"ready"===o.event)for(var i=n.querySelectorAll("iframe"),c=0;c<i.length;c++)r(i,c)}})))}())})()}();
//# sourceMappingURL=02-video.3df465cc.js.map