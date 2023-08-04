import{m,S as y,P as g,B as h,z as S,T as x,A as d}from"./entry.d29c3343.js";import{i as T}from"./index.cd32510b.js";const f=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function k(e,o){if(typeof e!="string")throw new TypeError("argument str must be a string");const i={},a=(o||{}).decode||E;let s=0;for(;s<e.length;){const r=e.indexOf("=",s);if(r===-1)break;let n=e.indexOf(";",s);if(n===-1)n=e.length;else if(n<r){s=e.lastIndexOf(";",r-1)+1;continue}const u=e.slice(s,r).trim();if(i[u]===void 0){let c=e.slice(r+1,n).trim();c.codePointAt(0)===34&&(c=c.slice(1,-1)),i[u]=v(c,a)}s=n+1}return i}function l(e,o,i){const t=i||{},a=t.encode||I;if(typeof a!="function")throw new TypeError("option encode is invalid");if(!f.test(e))throw new TypeError("argument name is invalid");const s=a(o);if(s&&!f.test(s))throw new TypeError("argument val is invalid");let r=e+"="+s;if(t.maxAge!==void 0&&t.maxAge!==null){const n=t.maxAge-0;if(Number.isNaN(n)||!Number.isFinite(n))throw new TypeError("option maxAge is invalid");r+="; Max-Age="+Math.floor(n)}if(t.domain){if(!f.test(t.domain))throw new TypeError("option domain is invalid");r+="; Domain="+t.domain}if(t.path){if(!f.test(t.path))throw new TypeError("option path is invalid");r+="; Path="+t.path}if(t.expires){if(!b(t.expires)||Number.isNaN(t.expires.valueOf()))throw new TypeError("option expires is invalid");r+="; Expires="+t.expires.toUTCString()}if(t.httpOnly&&(r+="; HttpOnly"),t.secure&&(r+="; Secure"),t.priority)switch(typeof t.priority=="string"?t.priority.toLowerCase():t.priority){case"low":r+="; Priority=Low";break;case"medium":r+="; Priority=Medium";break;case"high":r+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}if(t.sameSite)switch(typeof t.sameSite=="string"?t.sameSite.toLowerCase():t.sameSite){case!0:r+="; SameSite=Strict";break;case"lax":r+="; SameSite=Lax";break;case"strict":r+="; SameSite=Strict";break;case"none":r+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return r}function b(e){return Object.prototype.toString.call(e)==="[object Date]"||e instanceof Date}function v(e,o){try{return o(e)}catch{return e}}function E(e){return e.includes("%")?decodeURIComponent(e):e}function I(e){return encodeURIComponent(e)}const N=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,C=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,P=/^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;function O(e,o){if(e==="__proto__"||e==="constructor"&&o&&typeof o=="object"&&"prototype"in o){F(e);return}return o}function F(e){console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)}function R(e,o={}){if(typeof e!="string")return e;const i=e.trim();if(e[0]==='"'&&e[e.length-1]==='"')return i.slice(1,-1);const t=i.toLowerCase();if(t==="true")return!0;if(t==="false")return!1;if(t!=="undefined"){if(t==="null")return null;if(t==="nan")return Number.NaN;if(t==="infinity")return Number.POSITIVE_INFINITY;if(t==="-infinity")return Number.NEGATIVE_INFINITY;if(!P.test(e)){if(o.strict)throw new SyntaxError("[destr] Invalid JSON");return e}try{if(N.test(e)||C.test(e)){if(o.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(e,O)}return JSON.parse(e)}catch(a){if(o.strict)throw a;return e}}}const A={path:"/",watch:!0,decode:e=>R(decodeURIComponent(e)),encode:e=>encodeURIComponent(typeof e=="string"?e:JSON.stringify(e))};function p(e,o){var s;const i={...A,...o},t=_(i)||{},a=m(t[e]??((s=i.default)==null?void 0:s.call(i)));{const r=typeof BroadcastChannel>"u"?null:new BroadcastChannel(`nuxt:cookies:${e}`);y()&&g(()=>{r==null||r.close()});const n=()=>{j(e,a.value,i),r==null||r.postMessage(x(a.value))};let u=!1;r&&(r.onmessage=c=>{u=!0,a.value=c.data,h(()=>{u=!1})}),i.watch?S(a,(c,w)=>{u||T(c,w)||n()},{deep:i.watch!=="shallow"}):n()}return a}function _(e={}){return k(document.cookie,e)}function D(e,o,i={}){return o==null?l(e,o,{...i,maxAge:-1}):l(e,o,i)}function j(e,o,i={}){document.cookie=D(e,o,i)}const J=()=>({isEnabled:()=>{const t=d().query;return Object.prototype.hasOwnProperty.call(t,"preview")&&!t.preview?!1:!!(t.preview||p("previewToken").value||sessionStorage.getItem("previewToken"))},getPreviewToken:()=>p("previewToken").value||sessionStorage.getItem("previewToken")||void 0,setPreviewToken:t=>{p("previewToken").value=t,d().query.preview=t||"",t?sessionStorage.setItem("previewToken",t):sessionStorage.removeItem("previewToken"),window.location.reload()}});export{J as u};
