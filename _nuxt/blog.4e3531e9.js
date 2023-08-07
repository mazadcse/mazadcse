import{T,M as B}from"./components.f2957512.js";import{_ as h,o as a,i as s,g as n,s as S,c as b,d as x,k as c,h as $,t as l,f as u,F as _,j as p,l as A,m as C,v as D,e as j}from"./entry.b351de89.js";import{u as I,q as N}from"./query.d22c7428.js";import"./preview.dc3a30b6.js";import"./utils.e77d467f.js";const M={},L={class:"w-full h-24 p-0 overflow-hidden flex justify-start mb-5"},V=n("div",{class:"w-0 md:w-1/3 h-full rounded-lg animate-pulse hidden md:inline-block flex-shrink-0 min-h-full mr-2 bg-slate-300 dark:bg-slate-700"},null,-1),z=n("div",{class:"px-6 w-full md:w-2/3 min-h-full"},[n("div",{class:"h-4 w-11/12 mb-4 rounded-full animate-pulse bg-slate-300 dark:bg-slate-700"}),n("div",{class:"h-4 w-2/3 mb-4 rounded-full animate-pulse bg-slate-300 dark:bg-slate-700"})],-1),U=[V,z];function q(e,o){return a(),s("div",L,U)}const F=h(M,[["render",q]]);const O={key:0,class:"card-style w-0 md:w-1/3 hidden md:inline-block flex-shrink-0 min-h-full overflow-hidden mr-1 rounded-lg"},E={class:"card-style flex flex-col justify-between py-2 px-4 flex-shrink-0 w-full md:w-[calc(66%-.25rem)] min-h-full"},G={class:"font-bold"},H={class:"text-xs text-slate-400 mt-[2px]"},J={class:"my-1 mt-auto"},K={__name:"AppBlogCard",props:{description:String,blogTitle:String,url:String,title:String,tags:Array,readTime:String,pubDate:Number,coverImage:String},setup(e){const o=e,r=S(()=>new Date(o.pubDate).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}));return(i,g)=>{const d=A,f=C;return a(),b(f,{class:"card-style focus:ring-0 focus:outline-none w-full min-h-[7rem] md:min-h-[8rem] h-auto p-0 overflow-hidden flex justify-between border-none bg-none bg-transparent dark:bg-transparent mb-5 [&_img]:hover:scale-105",to:e.url},{default:x(()=>[e.coverImage?(a(),s("div",O,[c(d,{format:"webp",loading:"lazy",src:e.coverImage,alt:"Cover Image",class:"h-full object-cover bg-cover origin-center"},null,8,["src"])])):$("",!0),n("div",E,[n("h3",G,l(e.blogTitle),1),n("p",H," Updated "+l(u(r))+" "+l(e.readTime?`• ${e.readTime}`:""),1),n("div",J,[(a(!0),s(_,null,p(e.tags,m=>(a(),s("span",{class:"px-2 py-[.1rem] inline-block rounded-full font-medium font-mono text-xs mr-1 border border-slate-300 dark:border-slate-500 bg-slate-100 dark:bg-slate-600 text-slate-700 dark:text-slate-100",key:m},l(m),1))),128))])])]),_:1},8,["to"])}}},Q=h(K,[["__scopeId","data-v-33eb5276"]]),R={id:"blog"},W=n("h1",{class:"text-3xl text-left font-bold mb-6"},"Blog",-1),te={__name:"blog",async setup(e){let o,r;const i={title:"Mahedi Azad's Blog",description:"This page contains my articles on various software and web development topics.",image:"/og-image.png"},{pending:g,data:d}=([o,r]=D(()=>I("blog",()=>N("/blog").find())),o=await o,r(),o);return(f,m)=>{const y=T,v=B,k=F,w=Q;return a(),s("main",R,[c(y,null,{default:x(()=>[j(l(i.title),1)]),_:1}),c(v,{name:"description",content:i.description},null,8,["content"]),W,n("section",null,[u(g)?(a(),s(_,{key:0},p(5,t=>c(k,{key:t})),64)):(a(!0),s(_,{key:1},p(u(d),t=>(a(),b(w,{key:t._id,tags:t.tags,blogTitle:t.longTitle||t.title,title:t.title,url:t._path,pubDate:t.updated,coverImage:t.image},null,8,["tags","blogTitle","title","url","pubDate","coverImage"]))),128))])])}}};export{te as default};
