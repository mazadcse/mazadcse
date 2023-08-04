import{_ as m,o as t,c as u,w as _,d as o,f as r,b as g,a as l,v as p,t as a,F as f,r as b,g as h,m as x,h as y}from"./entry.b24dde71.js";const k={key:0,class:"card-style w-0 lg:w-1/3 hidden lg:inline-block flex-shrink-0 min-h-full overflow-hidden mr-1 rounded-lg"},v={class:"font-bold mb-2"},w={class:"mb-4"},j={__name:"AppProjectCard",props:{projectTitle:{type:String,default:""},projectDescription:{type:String,default:""},projectUrl:{type:String,default:"#"},imgUrl:{type:String,default:"https://fakeimg.pl/500x300"},hideImage:{type:Boolean,default:!1},tags:{type:Array,default:()=>[]}},setup(e){return(I,C)=>{const n=h,s=x,c=y;return t(),u(c,{to:e.projectUrl,target:"_blank",class:"card-style focused-link w-full min-h-[7rem] md:min-h-[8rem] h-auto p-0 overflow-hidden flex justify-between border-none mb-5 [&_img]:hover:scale-105"},{default:_(()=>[e.hideImage?g("",!0):(t(),o("div",k,[r(n,{format:"webp",loading:"lazy",src:e.imgUrl,alt:"Cover Image",class:"h-full object-cover bg-cover origin-center"},null,8,["src"])])),l("div",{class:p(["card-style relative flex flex-col justify-evenly py-2 pb-3 px-4 flex-shrink-0 w-full overflow-hidden",{"lg:w-full":e.hideImage,"lg:w-[calc(66%-.25rem)]":!e.hideImage}])},[l("h3",v,a(e.projectTitle),1),l("p",w,a(e.projectDescription),1),l("div",null,[(t(!0),o(f,null,b(e.tags,(d,i)=>(t(),o("span",{class:"px-3 py-[.1rem] inline-block rounded-full font-semibold font-mono text-xs mr-1 border border-slate-300 dark:border-slate-500 bg-slate-100 dark:bg-slate-600 text-slate-700 dark:text-slate-100",key:i},a(d),1))),128))]),r(s,{name:"heroicons:arrow-up-right-20-solid",size:"1.25rem",class:"ml-auto absolute right-0 top-0 text-green-500 bg-slate-100 dark:bg-slate-600 border-l border-b border-slate-300 dark:border-slate-700 rounded-bl-lg p-1 w-7 h-7"})],2)]),_:1},8,["to"])}}},S=m(j,[["__scopeId","data-v-4a4e8d94"]]);export{S as _};
