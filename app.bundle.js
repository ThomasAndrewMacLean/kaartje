!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){(async()=>{const e=await fetch("https://europe-west1-wie-is-het-264722.cloudfunctions.net/getWensen"),n=await e.json();let r=t(1),o={wensen:n.wensen};document.querySelector(".wensen").innerHTML=r(o)})()},function(e,n,t){var r=t(2);e.exports=function(e){var n,t="",o=e||{};return function(e){t+="<ul>",function(){var o=e;if("number"==typeof o.length)for(var i=0,a=o.length;i<a;i++){var u=o[i];t=t+"<li>"+r.escape(null==(n=u.Naam)?"":n)+"</li>"}else{a=0;for(var i in o){a++;u=o[i];t=t+"<li>"+r.escape(null==(n=u.Naam)?"":n)+"</li>"}}}.call(this),t+="</ul>"}.call(this,"wensen"in o?o.wensen:"undefined"!=typeof wensen?wensen:void 0),t}},function(e,n,t){"use strict";var r=Object.prototype.hasOwnProperty;function o(e,n){return Array.isArray(e)?function(e,n){for(var t,r="",i="",a=Array.isArray(n),u=0;u<e.length;u++)(t=o(e[u]))&&(a&&n[u]&&(t=f(t)),r=r+i+t,i=" ");return r}(e,n):e&&"object"==typeof e?function(e){var n="",t="";for(var o in e)o&&e[o]&&r.call(e,o)&&(n=n+t+o,t=" ");return n}(e):e||""}function i(e){if(!e)return"";if("object"==typeof e){var n="";for(var t in e)r.call(e,t)&&(n=n+t+":"+e[t]+";");return n}return e+""}function a(e,n,t,r){if(!1===n||null==n||!n&&("class"===e||"style"===e))return"";if(!0===n)return" "+(r?e:e+'="'+e+'"');var o=typeof n;return"object"!==o&&"function"!==o||"function"!=typeof n.toJSON||(n=n.toJSON()),"string"==typeof n||(n=JSON.stringify(n),t||-1===n.indexOf('"'))?(t&&(n=f(n))," "+e+'="'+n+'"'):" "+e+"='"+n.replace(/'/g,"&#39;")+"'"}n.merge=function e(n,t){if(1===arguments.length){for(var r=n[0],o=1;o<n.length;o++)r=e(r,n[o]);return r}for(var a in t)if("class"===a){var u=n[a]||[];n[a]=(Array.isArray(u)?u:[u]).concat(t[a]||[])}else if("style"===a){u=(u=i(n[a]))&&";"!==u[u.length-1]?u+";":u;var f=i(t[a]);f=f&&";"!==f[f.length-1]?f+";":f,n[a]=u+f}else n[a]=t[a];return n},n.classes=o,n.style=i,n.attr=a,n.attrs=function(e,n){var t="";for(var u in e)if(r.call(e,u)){var f=e[u];if("class"===u){f=o(f),t=a(u,f,!1,n)+t;continue}"style"===u&&(f=i(f)),t+=a(u,f,!1,n)}return t};var u=/["&<>]/;function f(e){var n=""+e,t=u.exec(n);if(!t)return e;var r,o,i,a="";for(r=t.index,o=0;r<n.length;r++){switch(n.charCodeAt(r)){case 34:i="&quot;";break;case 38:i="&amp;";break;case 60:i="&lt;";break;case 62:i="&gt;";break;default:continue}o!==r&&(a+=n.substring(o,r)),o=r+1,a+=i}return o!==r?a+n.substring(o,r):a}n.escape=f,n.rethrow=function e(n,r,o,i){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&r||i))throw n.message+=" on line "+o,n;try{i=i||t(3).readFileSync(r,"utf8")}catch(t){e(n,null,o)}var a=3,u=i.split("\n"),f=Math.max(o-a,0),c=Math.min(u.length,o+a);a=u.slice(f,c).map((function(e,n){var t=n+f+1;return(t==o?"  > ":"    ")+t+"| "+e})).join("\n");throw n.path=r,n.message=(r||"Pug")+":"+o+"\n"+a+"\n\n"+n.message,n}},function(e,n){}]);