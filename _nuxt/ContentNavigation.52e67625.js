import{q as f,e as v,j as g,a as d}from"./query.dfc04881.js";import{E as l,J as h,A as _,K as y,s as w,L as C,G as P,I as r,m as $}from"./entry.324fc8a4.js";import{h as p,u as N}from"./preview.c9f8df7d.js";import{w as m,s as j,u as E}from"./utils.8ab6c893.js";const T=async e=>{const{content:t}=l().public;typeof(e==null?void 0:e.params)!="function"&&(e=f(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${p(a)}.${t.integrity}`}/${v(a)}.json`):m(`/navigation/${p(a)}.${t.integrity}.json`);if(j())return(await h(()=>import("./client-db.6bf0ea05.js"),["./client-db.6bf0ea05.js","./entry.324fc8a4.js","./entry.3b32bb5d.css","./query.dfc04881.js","./preview.c9f8df7d.js","./utils.8ab6c893.js","./index.a6ef77ff.js"],import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:g(a),previewToken:N().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},A=_({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=y(e),a=w(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&C("dd-navigation").value){const{navigation:n}=E();return{navigation:n}}const{data:s}=await d(`content-navigation-${p(a.value)}`,()=>T(a.value));return{navigation:s}},render(e){const t=P(),{navigation:a}=e,s=o=>r($,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),c=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):c(a)}});export{A as default};