import{f as h,B as g,C as d,D as C,u as _,E as w,A as D,G as v,H as x,I as r}from"./entry.b351de89.js";import H from"./ContentRenderer.5702d2ba.js";import S from"./ContentQuery.9d77a1f4.js";import"./ContentRendererMarkdown.a45ad58b.js";import"./index.a6ef77ff.js";import"./preview.dc3a30b6.js";import"./query.d22c7428.js";import"./utils.e77d467f.js";const y=(u,e=d())=>{const f=h(u),p=w();g(()=>h(u),(t=f)=>{if(!e.path||!t)return;const n=Object.assign({},(t==null?void 0:t.head)||{});n.meta=[...n.meta||[]],n.link=[...n.link||[]];const c=n.title||(t==null?void 0:t.title);c&&(n.title=c),p.public.content.host;const s=(n==null?void 0:n.description)||(t==null?void 0:t.description);s&&n.meta.filter(o=>o.name==="description").length===0&&n.meta.push({name:"description",content:s}),n!=null&&n.image||(t==null||t.image),C(()=>_(n))},{immediate:!0})},q=D({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:!0}},render(u){const e=v(),{tag:f,excerpt:p,path:m,query:t,head:n}=u,c={...t||{},path:m||(t==null?void 0:t.path)||x(d().path),find:"one"},s=(o,i)=>r("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:o,data:i},null,2));return r(S,c,{default:e!=null&&e.default?({data:o,refresh:i,isPartial:a})=>{var l;return n&&y(o),(l=e.default)==null?void 0:l.call(e,{doc:o,refresh:i,isPartial:a,excerpt:p,...this.$attrs})}:({data:o})=>(n&&y(o),r(H,{value:o,excerpt:p,tag:f,...this.$attrs},{empty:i=>e!=null&&e.empty?e.empty(i):s("default",o)})),empty:o=>{var i;return((i=e==null?void 0:e.empty)==null?void 0:i.call(e,o))||r("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":o=>{var i;return((i=e==null?void 0:e["not-found"])==null?void 0:i.call(e,o))||r("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),T=q;export{T as default};
