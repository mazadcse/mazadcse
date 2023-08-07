import{T as _,M as k}from"./components.f2957512.js";import{o as r,c as g,d,k as t,g as o,t as u,l as x,x as b,m as h,i as p,F as f,j as w,e as v}from"./entry.b351de89.js";const y={__name:"AppPickCard",props:{pick:{type:Object,default(e){return{}}}},setup(e){return(n,c)=>{const a=x,l=b,s=h;return r(),g(s,{class:"focused-link card-style w-full flex justify-start items-center px-2 py-2 mb-4 relative",target:"_blank",to:e.pick.url},{default:d(()=>[t(a,{format:"webp",loading:"lazy",src:e.pick.cover,class:"w-8 h-8 md:w-12 md:10 flex-shrink-0 text-xs object-cover rounded-[0.275rem] mr-3 overflow-hidden text-center bg-slate-200 dark:bg-slate-500 border-[.03rem] dark:border-none border-slate-300",alt:"Cover Image"},null,8,["src"]),o("span",null,u(e.pick.title),1),t(l,{name:"heroicons:arrow-up-right-20-solid",size:"1.25rem",class:"ml-auto flex-shrink-0 text-green-500 bg-slate-100 dark:bg-slate-600 border border-slate-300 dark:border-slate-700 rounded-full p-1 w-7 h-7"})]),_:1},8,["to"])}}},N=y,T={class:"picks"},j=o("h1",{class:"font-bold text-2xl mb-6"},"Picks",-1),B=o("blockquote",null,"Content from across the web I found interesting.",-1),C=o("br",null,null,-1),z={__name:"picks",setup(e){const n={title:"Mahedi Azad's Picks",description:"This page contains content from across the web that I found interesting.",image:"/og-image.png"},c=[{cover:"https://i.ytimg.com/vi/17zBODTpuoo/maxresdefault.jpg",title:"A First Look at Nuxt SERVER COMPONENTS",url:"https://www.youtube.com/watch?v=17zBODTpuoo"},{cover:"https://roe.dev/og/nuxt-server-components.jpg",title:"A guide to Nuxt server components",url:"https://roe.dev/blog/nuxt-server-components?ck_subscriber_id=2260814617"}];return(a,l)=>{const s=_,m=k;return r(),p("main",T,[t(s,null,{default:d(()=>[v(u(n.title),1)]),_:1}),t(m,{name:"description",content:n.description},null,8,["content"]),j,B,C,(r(),p(f,{key:1},w(c,i=>t(N,{key:i.link,pick:i},null,8,["pick"])),64))])}}};export{z as default};
