!function(e){var r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)n.d(t,o,function(r){return e[r]}.bind(null,o));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=4)}([function(e,r,n){var t=n(1),o=n(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};t(o,a);e.exports=o.locals||{}},function(e,r,n){"use strict";var t,o=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},a=function(){var e={};return function(r){if(void 0===e[r]){var n=document.querySelector(r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[r]=n}return e[r]}}(),i=[];function c(e){for(var r=-1,n=0;n<i.length;n++)if(i[n].identifier===e){r=n;break}return r}function u(e,r){for(var n={},t=[],o=0;o<e.length;o++){var a=e[o],u=r.base?a[0]+r.base:a[0],l=n[u]||0,s="".concat(u," ").concat(l);n[u]=l+1;var f=c(s),d={css:a[1],media:a[2],sourceMap:a[3]};-1!==f?(i[f].references++,i[f].updater(d)):i.push({identifier:s,updater:h(d,r),references:1}),t.push(s)}return t}function l(e){var r=document.createElement("style"),t=e.attributes||{};if(void 0===t.nonce){var o=n.nc;o&&(t.nonce=o)}if(Object.keys(t).forEach((function(e){r.setAttribute(e,t[e])})),"function"==typeof e.insert)e.insert(r);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(r)}return r}var s,f=(s=[],function(e,r){return s[e]=r,s.filter(Boolean).join("\n")});function d(e,r,n,t){var o=n?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(e.styleSheet)e.styleSheet.cssText=f(r,o);else{var a=document.createTextNode(o),i=e.childNodes;i[r]&&e.removeChild(i[r]),i.length?e.insertBefore(a,i[r]):e.appendChild(a)}}function p(e,r,n){var t=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var v=null,m=0;function h(e,r){var n,t,o;if(r.singleton){var a=m++;n=v||(v=l(r)),t=d.bind(null,n,a,!1),o=d.bind(null,n,a,!0)}else n=l(r),t=p.bind(null,n,r),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else o()}}e.exports=function(e,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=o());var n=u(e=e||[],r);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var t=0;t<n.length;t++){var o=c(n[t]);i[o].references--}for(var a=u(e,r),l=0;l<n.length;l++){var s=c(n[l]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}n=a}}}},function(e,r,n){(r=n(3)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap);"]),r.push([e.i,":root {\r\n  --primary-color: rgb(17, 86, 102);\r\n  --primary-color-darker: rgb(9, 48, 56);\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  outline: 0;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  background: var(--primary-color);\r\n  font-family: 'Open sans', sans-serif;\r\n  font-size: 1.3em;\r\n  line-height: 1.5em;\r\n}\r\n\r\n.container {\r\n  max-width: 640px;\r\n  margin: 50px auto;\r\n  background: #fff;\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n}\r\n\r\nform input, form label, form button {\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n}\r\n\r\nform input {\r\n  font-size: 24px;\r\n  height: 50px;\r\n  padding: 0 20px;\r\n}\r\n\r\nform input:focus {\r\n  outline: 1px solid var(--primary-color);\r\n}\r\n\r\nform button {\r\n  border: none;\r\n  background: var(--primary-color);\r\n  color: #fff;\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n  height: 50px;\r\n  cursor: pointer;\r\n  margin-top: 30px;\r\n}\r\n\r\nform button:hover {\r\n  background: var(--primary-color-darker);\r\n}\r\n\r\n.senha-gerada {\r\n  font-size: 2em;\r\n  color: var(--primary-color);\r\n  margin: 40px 0;\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n  width: 25px;\r\n  height: 25px;\r\n}\r\n\r\nbutton {\r\n  display: block;\r\n  margin: 15px 0;\r\n  font-size: 1em;\r\n}\r\n\r\n.senha-tela {\r\n  text-align: center;\r\n  font-size: 1em;\r\n  color: rgb(17, 86, 102);\r\n  padding: 15px 120px;\r\n  margin: 15px 0px 0px;\r\n}\r\n",""]),e.exports=r},function(e,r,n){"use strict";e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var n=function(e,r){var n=e[1]||"",t=e[3];if(!t)return n;if(r&&"function"==typeof btoa){var o=(i=t,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),a=t.sources.map((function(e){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([o]).join("\n")}var i,c,u;return[n].join("\n")}(r,e);return r[2]?"@media ".concat(r[2]," {").concat(n,"}"):n})).join("")},r.i=function(e,n,t){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(t)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);t&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),r.push(u))}},r}},function(e,r,n){"use strict";function t(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}n.r(r);var o=document.querySelector(".qtd-caracteres"),a=document.querySelector(".gerar-senha"),i=document.querySelector(".chk-minusculas"),c=document.querySelector(".chk-maiusculas"),u=document.querySelector(".chk-numeros"),l=document.querySelector(".chk-simbolos"),s=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],f=["!","@","#","$","%","¨","&","*"],d=function(){function e(){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e)}var r,n,d;return r=e,(n=[{key:"start",get:function(){var e=this;a.addEventListener("click",(function(){var r=[];if(i.checked||c.checked){var n=e.receiveStringMin();r.push(n)}if(u.checked){var t=e.receiveNum();r.push(t)}if(l.checked){var o=e.geneSymbols();r.push(o)}e.randVetors(r)}))}},{key:"randVetors",value:function(e){for(var r="",n=0;n<o.value;n++)r+=e[Math.floor(Math.random()*e.length)][Math.floor(Math.random()*o.value)];this.resultTela(r)}},{key:"geneSymbols",value:function(){if(l.checked){o.value;for(var e="",r=0;r<o.value;r++)e+=f[Math.floor(Math.random()*o.value)]}return console.log(e),e}},{key:"receiveNum",value:function(){var e="9".repeat(o.value);return String(Math.floor(Math.random()*Number(e)))}},{key:"receiveStringMax",value:function(e){var r="";for(var n in e)r+=n%2==0?e[n].toUpperCase():e[n];return r}},{key:"receiveStringAllMax",value:function(e){return e.toUpperCase()}},{key:"receiveStringMin",value:function(){for(var e="",r=0;r<o.value;r++)e+=s[Math.floor(Math.random()*o.value)];return c.checked&&i.checked?this.receiveStringMax(e):c.checked?this.receiveStringAllMax(e):e}},{key:"resultTela",value:function(e){var r=e;document.querySelector(".senha-tela").innerHTML=r}}])&&t(r.prototype,n),d&&t(r,d),Object.defineProperty(r,"prototype",{writable:!1}),e}();n(0);(new d).start}]);
//# sourceMappingURL=bundle.js.map