import{T as i,M as m}from"./components.079bfc55.js";import{d as c,f as o,w as l,a as e,e as t,o as r,t as d}from"./entry.8d03943d.js";const p={id:"contact"},_=e("h1",null,"Send me a message.",-1),u=e("form",{action:"/api/contact",method:"post"},[e("label",{for:"name"},[t(" Name: "),e("input",{type:"text",name:"name",id:"name"})]),e("label",{for:"email"},[t(" Email: "),e("input",{type:"email",name:"email",id:"email"})]),e("label",{for:"message"},[t(" Message: "),e("textarea",{name:"message",id:"message",placeholder:"Enter message...",required:""})]),t(" === Captcha Validation === "),e("button",{type:"submit","aria-label":"Submit Form",title:"Submit Form"},"Send")],-1),M={__name:"contact",setup(g){const a={title:"Contact Me",description:"Send me a message.",image:"/og-image.png"};return(f,h)=>{const n=i,s=m;return r(),c("main",p,[o(n,null,{default:l(()=>[t(d(a.title),1)]),_:1}),o(s,{name:"description",content:a.description},null,8,["content"]),_,u])}}};export{M as default};
