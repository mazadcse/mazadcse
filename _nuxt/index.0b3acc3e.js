import{T as C,M as I}from"./components.53492cae.js";import{m as x,o as n,d as s,a as t,e as o,t as m,f as e,u as b,n as u,_ as P,w as d,h as k,F as h,r as f}from"./entry.c2c07021.js";import{_ as A}from"./AppProjectCard.1395385f.js";const T={class:"card-style flex flex-col py-4 px-6 items-start w-full min-h-[6rem] relative mb-4"},M={class:"font-bold text-lg mb-2"},N={class:"font-normal flex items-center"},J={__name:"AppStatusCard",props:{statusType:String,statusContent:String},setup(a){const r=x({reading:"book-open-page-variant",playing:"gamepad-variant",listening:"microphone",learning:"brain"});return(i,c)=>{const p=u;return n(),s("section",T,[t("h3",M,[o(m(a.statusType)+" ",1),e(p,{name:`mdi:${b(r)[a.statusType.toLowerCase()]}`},null,8,["name"])]),t("p",N,[e(p,{name:"heroicons:arrow-right-solid",class:"mr-1 text-green-400"}),o(" "+m(a.statusContent),1)])])}}},B=J;const V={},$={class:"flex items-center justify-center w-72 h-8 rounded-full mx-auto border border-slate-200 bg-slate-100 dark:border-slate-600 dark:bg-slate-700"},F={class:"flex items-center text-sm font-medium text-slate-600 dark:text-slate-300"};function R(a,r){const i=u,c=k;return n(),s("footer",$,[t("p",F,[o(" Joyfully Built with "),e(c,{class:"icon-link focused-link",to:"https://nuxt.com/","aria-label":"NuxtJS Icon",target:"_blank",title:"NuxtJS"},{default:d(()=>[e(i,{name:"logos:nuxt-icon",size:"1.25rem"})]),_:1}),o(" + "),e(c,{class:"icon-link focused-link mr-0",to:"https://tailwindcss.com/","aria-label":"Tailwind CSS Icon",target:"_blank",title:"Tailwind CSS"},{default:d(()=>[e(i,{name:"logos:tailwindcss-icon"})]),_:1})])])}const z=P(V,[["render",R],["__scopeId","data-v-95922b35"]]),Q={id:"home",class:"[&>*]:mb-6 last:[&>*]:mb-0"},q=t("section",null,[t("h1",{class:"font-semibold text-2xl mb-6"},"Hi, my name is Mahedi Azad."),t("p",null," I am a results-oriented developer over 10 years experienced in software development through professional job, freelance work, internships, and open-source contributions. I possess broad technical knowledge of software engineering, a quick learning ability, and creative programming skills. Furthermore, I'm fluent in several languages and frameworks including PHP, SQL, JavaScript, Laravel, Vue.js, Angular and, Node.js, MySql, MongoDB. I'm currently focused on expanding my experience using React.js and Python. ")],-1),D={class:"font-semibold text-xl mb-2"},E={class:"columns-1 lg:columns-2 gap-6"},H=t("h2",{class:"font-semibold text-xl mb-2 py-2"},"Skills",-1),O=t("h2",{class:"font-semibold text-xl mb-2 py-2"},"Currently",-1),W={class:"columns-1 lg:columns-2 gap-6"},Y={__name:"index",setup(a){const r={title:"Mahedi Azad - Laravel Developer",description:"I'm a software engineer who's passionate about the open web (Laravel, JavaScript, Vue.js, Angular)",image:"/og-image.png"},i=x(["PHP","JavaScript","SQL/PLSQL","Laravel","Cakephp","Codeigniter","Vue.js","Angular","Alpine JS","Svelte","Node.js","Express.js","MySql","PostgreSQL","Oracle","MongoDB","Git","SVN","AWS (EC2)"]),c={Learning:"React.js",Reading:"Pragmatic Thinking",Listening:"The Witch Trials of J.K. Rowling",Playing:"Little Nightmares II"};return(p,G)=>{const y=C,S=I,w=u,v=k,_=A,j=B,L=z;return n(),s("main",Q,[e(y,null,{default:d(()=>[o(m(r.title),1)]),_:1}),e(S,{name:"description",content:r.description},null,8,["content"]),q,t("h2",D,[e(v,{to:"/projects",class:"focused-link flex items-center py-2"},{default:d(()=>[o(" Projects "),e(w,{name:"heroicons:chevron-right-solid",class:"ml-2 text-green-500"})]),_:1})]),t("section",E,[e(_,{hideImage:!0,"project-title":"Foordo.xyz","project-url":"https://foordo.mahediazad.com/","project-description":"A SaaS model based simple shop management system with POS. Paper less supply to sales chain management include HR, accounts, inventory and stock and courier. Real time notification, customer support and payment gateway integrated.",tags:["Laravel","Vue.js","localForage","MySql"]},null,8,["tags"]),e(_,{hideImage:!0,"project-title":"Event Bookings Management","project-url":"https://www.eventbookings.com/","project-description":"The hassle-free solution for selling tickets online. Streamline check-ins with mobile ticket scanning. Capture essential information with smart forms and Simple email marketing. Used in business, sports, charity, academic, cultural and much more programs.",tags:["Cakephp","Bootstrap","Javascript","PostgreSQL"]})]),H,t("section",null,[(n(!0),s(h,null,f(b(i),l=>(n(),s("span",{key:l,class:"px-3 py-1 inline-block dark:border dark:border-green-500 bg-green-300 dark:bg-transparent text-slate-800 dark:text-green-500 font-medium rounded-full text-sm mr-1 mb-1"},m(l),1))),128))]),O,t("section",W,[(n(),s(h,null,f(c,(l,g)=>e(j,{key:g,"status-type":g,"status-content":l},null,8,["status-type","status-content"])),64))]),e(L)])}}};export{Y as default};
