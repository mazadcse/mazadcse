import{x as o,y as g}from"./entry.b24dde71.js";const s=e=>Object.fromEntries(Object.entries(e).filter(([,t])=>t!==void 0)),l=(e,t)=>(r,n)=>(g(()=>e({...s(r),...n.attrs},n)),()=>{var i,a;return t?(a=(i=n.slots).default)==null?void 0:a.call(i):null}),d={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:[String,Object,Array],contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},S=o({name:"Title",inheritAttrs:!1,setup:l((e,{slots:t})=>{var r,n,i;return{title:((i=(n=(r=t.default)==null?void 0:r.call(t))==null?void 0:n[0])==null?void 0:i.children)||null}})}),u=o({name:"Meta",inheritAttrs:!1,props:{...d,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:l(e=>{const t={...e};return t.httpEquiv&&(t["http-equiv"]=t.httpEquiv,delete t.httpEquiv),{meta:[t]}})});export{u as M,S as T};
