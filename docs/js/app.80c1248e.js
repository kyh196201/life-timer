(function(e){function t(t){for(var r,a,c=t[0],i=t[1],s=t[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-05285d3a":"dcfd79b5","chunk-3e7ff4a3":"5c9353a9","chunk-5ac1ad57":"caa00072","chunk-f395f0fc":"210ed183"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-05285d3a":1,"chunk-3e7ff4a3":1,"chunk-5ac1ad57":1,"chunk-f395f0fc":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-05285d3a":"190e47e2","chunk-3e7ff4a3":"c9d8b722","chunk-5ac1ad57":"e01fb049","chunk-f395f0fc":"537fd8bf"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],d.parentNode.removeChild(d),n(u)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/life-timer/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},5265:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("ac1f"),n("5319");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header",{directives:[{name:"show",rawName:"v-show",value:e.showHeader,expression:"showHeader"}]}),n("div",{staticClass:"container"},[n("router-view")],1)],1)},o=[],u=(n("caad"),n("b0c0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[n("nav",{staticClass:"header__nav"},[n("router-link",{staticClass:"link",attrs:{to:"/"}},[e._v("홈")])],1)])}),c=[],i={},s=i,l=(n("da10"),n("2877")),f=Object(l["a"])(s,u,c,!1,null,null,null),d=f.exports,p={name:"app",components:{Header:d},computed:{showHeader:function(){var e=["Timer","Alarm"];return!e.includes(this.$route.name)}}},h=p,m=Object(l["a"])(h,a,o,!1,null,null,null),v=m.exports,b=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));r["a"].use(b["a"]);var g=[{path:"/",name:"Home",component:function(){return n.e("chunk-05285d3a").then(n.bind(null,"bb51"))}},{path:"/options",name:"Options",component:function(){return n.e("chunk-f395f0fc").then(n.bind(null,"89f5"))}},{path:"/timer",name:"Timer",component:function(){return n.e("chunk-3e7ff4a3").then(n.bind(null,"4b58"))}},{path:"/alarm",name:"Alarm",component:function(){return n.e("chunk-5ac1ad57").then(n.bind(null,"e7d1"))}}],y=new b["a"]({mode:"history",base:"/life-timer/",routes:g}),k=y,w=n("2f62"),O={endTime:"",endMinutes:""},_={setEndMinutes:function(e,t){e.endMinutes=t},setEndTime:function(e,t){e.endTime=t}},E={clearOptions:function(e){var t=e.commit;t("setEndMinutes",""),t("setEndTime","")}};r["a"].use(w["a"]);var T=new w["a"].Store({state:O,mutations:_,actions:E,modules:{}});n("5265");r["a"].config.productionTip=!1,new r["a"]({router:k,store:T,render:function(e){return e(v)}}).$mount("#app");var j=localStorage.getItem("path");j&&(localStorage.removeItem("path"),k.push({path:j.replace("life-timer/","")}))},da10:function(e,t,n){"use strict";n("dd5a")},dd5a:function(e,t,n){}});
//# sourceMappingURL=app.80c1248e.js.map