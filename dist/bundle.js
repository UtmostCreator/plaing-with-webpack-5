(()=>{"use strict";var e={285:(e,t)=>{var o=function(){function e(){this.bar="hi"}return e.show=function(){console.log("Foo::show()")},e}();t.ZP=o}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var c=t[n]={exports:{}};return e[n](c,c.exports,o),c.exports}o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{const e=e=>`color: ${e}`,t=document.createElement("div");t.innerHTML="Top footer",t.style="color: red";const n=document.createElement("div");n.innerHTML="Bottom footer",n.style="color: blue";const r=document.createElement("footer");r.appendChild(t),r.appendChild(n);const c=e=>{const t=`Button ${e}`;let o=document.createElement("button");return o.innerHTML=t,o},i=o.p+"24b8a339f9240029b1b89b02fde9a643.jpg";o(285).ZP.show(),console.log("nav",r,c("BTN one")),console.log("nav",r,e("cyan"));const l=((e,t=10)=>{let o=document.createElement("img");return o.src=e,o.style=`max-height: ${t}rem;`,o})(i);console.log(l);const s=c("BTN one");s.style=e("cyan"),document.body.appendChild(s),document.body.appendChild(l),document.body.appendChild(r)})()})();