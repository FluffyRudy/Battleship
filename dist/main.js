(()=>{"use strict";var t={180:(t,e,n)=>{n.d(e,{A:()=>s});var r=n(601),o=n.n(r),a=n(314),i=n.n(a)()(o());i.push([t.id,"body {\n    background-color: rgba(0, 0, 0, 0.4);\n    margin: 0;\n    padding: 0;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.board {\n    margin: 0;\n    padding: 0;\n    width: 45%;\n    height: 45%;\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: repeat(10, 1fr);\n}\n\n.ship-cell {\n    background-color: #000;\n    width: 100%;\n    height: 100%;\n    border: 1px solid rgb(137, 197, 137);\n}\n\n@media (max-width: 800px) {\n    body {\n        flex-direction: column;\n    }\n\n    .board {\n        width: 90%;\n    }\n}",""]);const s=i},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],s=0;s<t.length;s++){var c=t[s],l=r.base?c[0]+r.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=n(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(t,e){var n=e.domAPI(e);n.update(t);return function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var s=n(a[i]);e[s].references--}for(var c=r(t,o),l=0;l<a.length;l++){var d=n(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},659:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return t[r](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{const t={NROWS:10,NCOLS:10,totalShip:5,shipLengths:[5,4,3,3,2],aiShipColor:"#000",humanShipColor:"#fff"};var e=n(72),r=n.n(e),o=n(825),a=n.n(o),i=n(659),s=n.n(i),c=n(56),l=n.n(c),d=n(540),u=n.n(d),p=n(113),f=n.n(p),h=n(180),v={};v.styleTagTransform=f(),v.setAttributes=l(),v.insert=s().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=u();r()(h.A,v);h.A&&h.A.locals&&h.A.locals;function m(){const e=document.createElement("div");e.classList.add("board");for(let r=0;r<t.NROWS;r++)(n=t.NCOLS,new Array(n).fill(null).map(((t,e)=>{const n=document.createElement("div");return n.classList.add("ship-cell"),n.dataset.isvisited="0",n.dataset.col=e,n}))).forEach((t=>{t.dataset.row=r,e.appendChild(t)}));var n;return e}function g(t,e){return n=Math.random()*(e-t),Math.floor(n);var n}function y(t,e,n,r,o){for(let a=t;a<t+e;a++)if(n.dataset.isship="1",n.dataset.index=r,n.style.backgroundColor=o,null===(n=n.nextElementSibling))return}function b(t,e){let n=e,r=0;for(;r<t;){if("1"===n.dataset.isship)return!0;if(n=n.nextElementSibling,!n||!n.dataset.col)break;r++}return!1}function S(t,e,n){const r=t.children;for(let t=0;t<r.length;t++){const o=parseInt(r[t].dataset.row),a=parseInt(r[t].dataset.col);if(o===e&&a===n)return r[t]}return null}function C(t,e){const n=t.dataset.index;if(!n)return!1;return[...e.querySelectorAll(`[data-index="${n}"]`)].every((t=>"1"===t.dataset.isvisited))}function x(t,e){const n=e.prevAttackCell;if(n&&n.dataset.isship){const r=function(t,e){const n=parseInt(e.dataset.row),r=parseInt(e.dataset.col),o=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]],a=[];for(let e of o){const o=n+e[0],i=r+e[1];if(!L(o,i))continue;const s=t.querySelector(`[data-row="${o}"][data-col="${i}"]`);"0"===s.dataset.isvisited&&s.dataset.isship&&a.push(s)}return a}(t,n);if(r.length>0){const t=r[g(0,r.length)];return e.prevAttackCell=t,[w(t),t]}}const r=[...t.children].filter((t=>"0"===t.dataset.isvisited)),o=r[g(0,r.length)];return e.prevAttackCell=o,[w(o),o]}function w(t){const e=t.dataset.isvisited;return t.dataset.isship&&"0"===e?(t.style.backgroundColor="red",t.dataset.isvisited="1",!0):"0"===e&&(t.style.backgroundColor="lime",t.dataset.isvisited="1",!0)}function L(e,n){return e>=0&&n<t.NROWS&&n>=0&&n<t.NCOLS}const A=m(),N=m();let O=0,k=!1;const E={score:0},I={prevAttackCell:null,score:0};document.body.appendChild(A),document.body.appendChild(N),A.addEventListener("click",(e=>{O<t.totalShip&&function(e,n){let r=e.target;if(!r.classList.contains("ship-cell"))return!1;const o=parseInt(r.dataset.col),a=t.shipLengths[n];return!(a+o>t.NCOLS||b(a,r))&&(y(o,a,r,n,t.humanShipColor),!0)}(e,O)&&O++})),N.addEventListener("click",(e=>{if(O<t.totalShip)alert("Place ships");else if(!k){if(function(t){let e=t.target;return!!e.classList.contains("ship-cell")&&w(e)}(e)){C(e.target,N)&&E.score++;C(x(A,I)[1],A)&&I.score++}E.score===t.totalShip&&setTimeout((()=>{alert("Human won"),k=!0,location.reload()}),1300),I.score===t.totalShip&&setTimeout((()=>{alert("Computer won"),k=!0,location.reload()}),1300)}})),window.onload=()=>{!function(e){let n=0;for(;n<t.totalShip;){let r=g(0,t.NROWS),o=g(0,t.NCOLS);const a=t.shipLengths[n];o+a>=t.NCOLS&&(o=Math.abs(a-o));const i=S(e,r,o);b(a,i)||(y(o,a,i,n,t.aiShipColor),n++)}}(N)}})()})();