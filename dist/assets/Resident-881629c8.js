import{B as h}from"./back-988a5fef.js";import{B as f}from"./block-895590fb.js";import{P as k,H as I,F as g,R as C,B as v,M as y,a as B,b}from"./relocation-4e413e30.js";import{d,o as a,c as l,m,p as w,e as T,a as i,t as u,g as n,w as r,q as S,F as x,r as F,s as o,f as R}from"./index-3692cffa.js";import{T as $}from"./title-c66c13a9.js";import{_ as p}from"./_plugin-vue_export-helper-c27b6911.js";import"./touch-85649a76.js";const M=s=>(w("data-v-14536abc"),s=s(),T(),s),P=M(()=>i("div",{class:"content"},[i("span",{class:"title"},"Продолжить")],-1)),N=[P],V=d({__name:"btn",props:{type:{},onClick:{type:Function}},setup(s){return(t,c)=>(a(),l("div",{class:m([t.type,"btn"]),onClick:c[0]||(c[0]=(..._)=>t.onClick&&t.onClick(..._))},N,2))}});const E=p(V,[["__scopeId","data-v-14536abc"]]),H={class:"block-button"},L={class:"header"},q={class:"description"},z=d({__name:"block-button",props:{title:{},description:{},onClick:{type:Function}},setup(s){return(t,c)=>(a(),l("div",H,[i("span",L,u(t.title),1),i("span",q,u(t.description),1),n(E,{"on-click":t.onClick,type:"white",class:"btn"},{default:r(()=>[S("ПЕРЕЙТИ")]),_:1},8,["on-click"])]))}});const A=p(z,[["__scopeId","data-v-5cadd3f4"]]),D={class:"content resident"},U={class:"elements"},W=d({__name:"Resident",setup(s){const t=[{title:"RUSSPASS",class:"short",defaultIcon:k,description:"Цифровой туристический сервис помогает сделать путешествия по России удобнее и интереснее, а процесс их организации – проще.",onClick:()=>o.emit("pageTransition","/residents/russPass")},{title:"Благотворительный сервис",class:"short",defaultIcon:I,description:"Помогать легко с благотворительным сервисом на mos.ru. Проверенные фонды, честные цели и регулярные отчеты.",onClick:()=>o.emit("pageTransition","/residents/charity")},{title:"СЕРВИС «ВЫВОЗ НЕНУЖНЫХ ВЕЩЕЙ»",class:"short",defaultIcon:g,description:"Сервис позволяет экологично избавиться от ненужной бытовой техники, мебели и других крупногабаритных предметов.",onClick:()=>{o.emit("pageTransition","/residents/unnecessaryThings"),shell.openExternal("path/to/your/windows/application.exe")}},{title:"Переезд в Москве",class:"short",defaultIcon:C,description:"Помогает организовать жизнь в Москве после переезда и получить всю информацию, которая потребуется на новом месте жительства.",onClick:()=>o.emit("pageTransition","/residents/movingInMoscow")},{title:'Сервис краткосрочной аренды "Вместе с культурой"',class:"long",defaultIcon:v,description:"Первый в России сервис, который позволяет горожанам арендовать помещения для проведения частных мероприятий в культурных учреждениях Москвы.",onClick:()=>o.emit("pageTransition","/residents/togetherWithCulture")},{title:"Узнай Москву",class:"long",defaultIcon:y,description:"Интерактивный онлайн-гид по Москве помогает изучать историю и архитектуру столицы, находить прогулочные маршруты по городу и проходить онлайн-квизы.",onClick:()=>R.push("/residents/exploreMoscow")},{title:'Сервис "Библиотеки Москвы"',class:"long",defaultIcon:B,description:"Позволяет забронировать книгу, чтобы потом получить ее в одной из 440 библиотек города, продлить срок хранения книги и просмотреть тематические подборки изданий.",onClick:()=>o.emit("pageTransition","/residents/moscowLibraries")}];return(c,_)=>(a(),l("div",D,[n(h,{"show-description":!1,class:"back-button",type:"white"}),n($,{class:"title-button",title:"Технологии для жителей"}),i("div",U,[(a(),l(x,null,F(t,e=>n(f,{class:m([e.class,"element"])},{default:r(()=>[n(b,{icon:e.defaultIcon,title:e.title},null,8,["icon","title"])]),touched:r(()=>[n(A,{description:e.description,"on-click":e.onClick,title:e.title},null,8,["description","on-click","title"])]),_:2},1032,["class"])),64))])]))}});const Y=p(W,[["__scopeId","data-v-70728323"]]);export{Y as default};
