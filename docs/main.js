!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){var r=n(1);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(3)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(2)(!1)).push([e.i,'@font-face {\n  font-family: \'Karmatic Arcade\';\n  src: url("/KarmaticArcade.woff2") format("woff2"), url("/KarmaticArcade.woff") format("woff"), url("/KarmaticArcade.ttf") format("truetype"), url("/KarmaticArcade.svg#KarmaticArcade") format("svg");\n  font-weight: normal;\n  font-style: normal; }\n\nbody {\n  background: #eee;\n  font-family: \'Karmatic Arcade\'; }\n  body.debug * {\n    outline: 1px solid red; }\n\nh2 {\n  margin-top: 0;\n  margin-bottom: 10px;\n  color: #95a5a6;\n  font-size: 2.2em; }\n  h2 .punkte {\n    color: #34495e; }\n\n#seite {\n  width: 90%;\n  margin: 60px auto; }\n\n#tetris {\n  background: #34495e;\n  border: 10px solid #95a5a6;\n  width: auto;\n  display: inline-block;\n  position: relative; }\n  #tetris .modal {\n    color: #ecf0f1;\n    position: absolute;\n    padding: 30px 60px;\n    background: #34495e;\n    width: 200px;\n    text-align: center;\n    top: 80px;\n    margin-left: 50%;\n    transform: translateX(-50%);\n    box-shadow: 1px 1px 2px 3px #7f8c8d; }\n    #tetris .modal h3 {\n      margin-top: 0; }\n    #tetris .modal button {\n      outline: 0;\n      border: 0;\n      color: #2c3e50;\n      background-color: #ecf0f1;\n      padding: 8px 16px;\n      font-size: 1.3em; }\n\n#menu {\n  display: inline-block;\n  vertical-align: top;\n  width: 400px;\n  margin-left: 30px; }\n\n#vorschau, #gest {\n  background: #34495e;\n  border: 10px solid #95a5a6;\n  display: inline-block;\n  position: relative;\n  margin: auto;\n  width: auto;\n  margin-top: 16px; }\n\n#gest {\n  width: 480px;\n  height: 320px; }\n\n/****************************************************************/\n/**    TETROMINOS                                              **/\n/****************************************************************/\n.tetro {\n  display: inline-grid;\n  outline-offset: inherit;\n  border-width: 10px;\n  border-style: inset;\n  border-color: #34495E;\n  width: 20px;\n  height: 20px;\n  margin: 0;\n  opacity: 0.3; }\n  .tetro.filled {\n    border-style: ridge;\n    opacity: 1; }\n  .tetro.J {\n    background-color: #f3a683;\n    border-color: #f19066; }\n  .tetro.I {\n    background-color: #feca57;\n    border-color: #feca57; }\n  .tetro.L {\n    background-color: #c8d6e5;\n    border-color: #c8d6e5; }\n  .tetro.O {\n    background-color: #ff9ff3;\n    border-color: #ff9ff3; }\n  .tetro.S {\n    background-color: #1dd1a1;\n    border-color: #1dd1a1; }\n  .tetro.T {\n    background-color: #ff6b6b;\n    border-color: #ff6b6b; }\n  .tetro.Z {\n    background-color: #48dbfb;\n    border-color: #48dbfb; }\n  .tetro.complete {\n    background-color: #fff;\n    border-color: #bbb; }\n',""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r),o=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(o).concat([i]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){var r={},i=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),o=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),s=null,a=0,l=[],c=n(4);function h(e,t){for(var n=0;n<e.length;n++){var i=e[n],o=r[i.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](i.parts[s]);for(;s<i.parts.length;s++)o.parts.push(m(i.parts[s],t))}else{var a=[];for(s=0;s<i.parts.length;s++)a.push(m(i.parts[s],t));r[i.id]={id:i.id,refs:1,parts:a}}}}function u(e,t){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],s=t.base?o[0]+t.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function f(e,t){var n=o(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),l.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=o(e.insertAt.before,n);n.insertBefore(t,i)}}function d(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=l.indexOf(e);t>=0&&l.splice(t,1)}function p(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return b(t,e.attrs),f(e,t),t}function b(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function m(e,t){var n,r,i,o;if(t.transform&&e.css){if(!(o="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=o}if(t.singleton){var l=a++;n=s||(s=p(t)),r=v.bind(null,n,l,!1),i=v.bind(null,n,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",b(t,e.attrs),f(e,t),t}(t),r=function(e,t,n){var r=n.css,i=n.sourceMap,o=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||o)&&(r=c(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,t),i=function(){d(n),n.href&&URL.revokeObjectURL(n.href)}):(n=p(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){d(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=u(e,t);return h(n,t),function(e){for(var i=[],o=0;o<n.length;o++){var s=n[o];(a=r[s.id]).refs--,i.push(a)}e&&h(u(e,t),t);for(o=0;o<i.length;o++){var a;if(0===(a=i[o]).refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete r[a.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function v(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var i,o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(e,t,n){"use strict";n.r(t);n(0);var r={O:{value:1,muster:[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]]},I:{value:2,muster:[[0,2,0,0],[0,2,0,0],[0,2,0,0],[0,2,0,0]]},L:{value:3,muster:[[0,3,0],[0,3,0],[0,3,3]]},J:{value:4,muster:[[0,4,0],[0,4,0],[4,4,0]]},S:{value:5,muster:[[0,0,0],[0,5,5],[5,5,0]]},Z:{value:6,muster:[[0,0,0],[6,6,0],[0,6,6]]},T:{value:7,muster:[[0,0,0],[7,7,7],[0,7,0]]}};var i=class{constructor(e,t,n){this.zeile=e,this.spalte=t,this.muster=n}linksDrehen(){const e=this.muster.length,t=[];for(let n=0;n<e;n++){const r=[];for(let t=0;t<e;t++){const e=this.muster[t][n];r.push(e)}t.push(r)}this.muster=t.reverse()}rechtsDrehen(){const e=this.muster.length;let t=[];for(let n=0;n<e;n++){const r=[];for(let t=0;t<e;t++){const e=this.muster[t][n];r.push(e)}t.push(r.reverse())}this.muster=t}kannNachUnten(e){const t=this;return this.muster.reduce((n,r,i)=>{const o=t.zeile+i+1,s=r.every(e=>0===e);return!(o>=e.length&&!s)&&(o<0||s?n:r.reduce((n,r,i)=>{const s=t.spalte+i;if(s<0||s>=e[0].length)return n;const a=e[o][s];return n&&r*a==0},n))},!0)}kannNachRechts(e){const t=this;return this.muster.reduce((n,r,i)=>r.reduce((n,r,o)=>{if(0===r||t.zeile+i<=0)return n;if(t.spalte+o>=e[0].length-1)return!1;const s=e[t.zeile+i][t.spalte+o+1];return n&&0===s},n),!0)}kannNachLinks(e){const t=this;return this.muster.reduce((n,r,i)=>r.reduce((n,r,o)=>{if(0===r||t.zeile+i<=0)return n;if(t.spalte+o<=0)return!1;const s=e[t.zeile+i][t.spalte+o-1];return n&&0===s},n),!0)}istAuf(e,t){return!this.istNichtAuf(e,t)}istNichtAuf(e,t){const n=e-this.zeile,r=t-this.spalte;return n<0||e>=this.zeile+this.muster.length||r<0||t>=this.spalte+this.muster.length}findeZelle(e,t){return this.istNichtAuf(e,t)?null:this.muster[e-this.zeile][t-this.spalte]}};const o=(e,t,n="welt_")=>{const r=document.getElementById(e);return r.innerHTML=t.map((e,t)=>e.reduce((e,r,i)=>e+'<div id="'+n+t+"_"+i+'" data-tetro="'+r+'" class="tetro"></div>',"")).join("<br>"),r},s=(e,t)=>{const n=[];for(let r=0;r<e;r++){const e=[];for(let n=0;n<t;n++)e.push(0);n.push(e)}return n},a=()=>{const e=Object.keys(r),t=e[Math.floor(Math.random()*e.length)],n=-1*r[t].muster.length;return new i(n,3,r[t].muster)},l=({muster:e,zeile:t,spalte:n},r)=>r.map((r,i)=>{const o=i-t;return[...r].map((t,r)=>{const i=r-n;if(o<0||o>=e.length||i<0||i>=e.length)return t;const s=e[o][i];return 0!==s?s:t})}),c=e=>e.reduce((e,t,n)=>t.some(e=>0===e)?e:[...e,n],[]),h=(e,t)=>{const n=e[0].length,r=[...e],i=new Array(n).fill(0);return r.splice(t,1),[i,...r]};var u=class{static findeBlockKlasse(e){let t="tetro";switch(e){case r.I.value:t+=" filled I";break;case r.J.value:t+=" filled J";break;case r.L.value:t+=" filled L";break;case r.O.value:t+=" filled O";break;case r.S.value:t+=" filled S";break;case r.Z.value:t+=" filled Z";break;case r.T.value:t+=" filled T";break;case 10:t+=" filled complete"}return t}static kannBlockRunterRuecken(e){let t=!0;for(let n=e.length-1;n>=0;n--)for(let r=0;r<e[0].length;r++)n>0&&e[n-1][r]<10||(t=!1);return t}static naechstesTetromino(){const e=Object.keys(r),t=e[Math.floor(Math.random()*e.length)],n={x:3,y:-1*r[t].matrix.length};return new i(n,r[t].matrix)}};const f=new class{constructor(e={}){Object.assign(this,{hoehe:16,breite:10,welt:null,tetro:null,naechstesTetro:null,containerId:"tetris",naechsteTetroId:"vorschau",punkteId:"punkte",zeilenTotalId:"zeilen-total"},e),this.welt=s(this.hoehe,this.breite),this.container=o(this.containerId,this.welt),this.showDialog("Willkommen",'<button onclick="spiel.starten()">spielen!</button>')}starten(){this.started=!0,this.score=0,this.zeilenTotal=0,this.welt=s(this.hoehe,this.breite),this.container=o(this.containerId,this.welt),this.tetro=a(),this.naechstesTetro=a(),this.aktualisieren(),this.naechstesTetroAnzeigen(),this.zeitSchleife=setTimeout(this.spielZeitSchleife.bind(this),this.levelGeschwindigkeit()),this.keyLauscher=this.keyEventsBehandeln.bind(this),document.addEventListener("keyup",this.keyLauscher)}aktualisieren(){this.tetro.muster;for(let e=0;e<this.hoehe;e++)for(let t=0;t<this.breite;t++){const n=this.tetro.findeZelle(e,t);document.getElementById("welt_"+e+"_"+t).className=u.findeBlockKlasse(n&&0!==n?n:this.welt[e][t])}}spielZeitSchleife(){this.started&&(this.tetroNachUntenBewegen(),this.aktualisieren(),this.stopZeitSchleife(),this.zeitSchleife=setTimeout(this.spielZeitSchleife.bind(this),spiel.levelGeschwindigkeit()))}stopZeitSchleife(){this.zeitSchleife&&(this.zeitSchleife=clearTimeout(this.zeitSchleife))}tetroNachUntenBewegen(){this.tetro.kannNachUnten(this.welt)?this.tetro.zeile++:this.tetroAblegen()}tetroNachLinksBewegen(){this.tetro.kannNachLinks(this.welt)&&this.tetro.spalte--}tetroNachRechtsBewegen(){this.tetro.kannNachRechts(this.welt)&&this.tetro.spalte++}tetroNachUntenSchieben(){this.stopZeitSchleife(),this.tetro.kannNachUnten(this.welt)?(this.tetro.zeile++,setTimeout(this.tetroNachUntenSchieben.bind(this),20),this.aktualisieren()):(this.tetroAblegen(),this.spielZeitSchleife())}tetroAblegen(){this.tetro.zeile<=0?this.gameOver():(this.welt=l(this.tetro,[...this.welt]),this.volleZeilenLoeschen(),this.aktualisieren(),this.tetro=this.naechstesTetro,this.naechstesTetro=a(),this.naechstesTetroAnzeigen())}naechstesTetroAnzeigen(){this.naechsteTetroContainer=o(this.naechsteTetroId,s(4,4),"vorschau_"),this.naechstesTetro.muster.forEach((e,t)=>{e.forEach((e,n)=>{document.getElementById("vorschau_"+t+"_"+n).className=u.findeBlockKlasse(e)})})}levelGeschwindigkeit(){return 500}keyEventsBehandeln(e){switch(e.keyCode){case 32:case 38:this.tetro.rechtsDrehen(),this.aktualisieren();break;case 37:this.tetroNachLinksBewegen(),this.aktualisieren();break;case 39:this.tetroNachRechtsBewegen(),this.aktualisieren();break;case 40:this.tetroNachUntenSchieben();break;case 27:this.gameOver();break;default:console.log(e.keyCode)}}gestenLauscher(e){switch(e.direction){case"Long up":case"Up":this.tetro.rechtsDrehen(),this.aktualisieren();break;case"Long left":case"Left":this.tetroNachLinksBewegen(),this.aktualisieren();break;case"Long right":case"Right":this.tetroNachRechtsBewegen(),this.aktualisieren();break;case"Long down":case"Down":this.tetroNachUntenSchieben();break;case 27:this.gameOver();break;default:console.log(e.direction)}}volleZeilenLoeschen(){const e=this,t=c(this.welt);this.scoreErhoehen(t.length),t.length<1||t.forEach(t=>{e.welt.splice(t,1,new Array(e.breite).fill(10)),e.aktualisieren(),setTimeout(()=>{e.welt=h([...e.welt],t),e.aktualisieren()},50)})}scoreErhoehen(e){const t=e>0?100*e:10;this.score+=Math.abs(t),this.zeilenTotal+=Math.abs(e),document.getElementById(this.punkteId).innerText=`00000000${this.score}`.substr(-7),document.getElementById(this.zeilenTotalId).innerText=`00000000${this.zeilenTotal}`.substr(-7)}showDialog(e,t){this.container.innerHTML+=`\n            <div class="modal">\n                <h3>${e}</h3>\n                ${t||""}\n            </div>`}gameOver(){this.started?(this.started=!1,this.showDialog("Game Over",'<button onclick="spiel.starten()">Noch mal spielen!</button>'),this.stopZeitSchleife(),document.removeEventListener("keyup",this.keyLauscher)):console.warn("Spiel kann nicht beendet werden bevor es gestartet wurde.")}};window.spiel=f}]);
//# sourceMappingURL=main.js.map