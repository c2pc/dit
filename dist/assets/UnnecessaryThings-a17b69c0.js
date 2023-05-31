import{Q as _}from"./qr-a7e93371.js";import{T as p}from"./title-722668a6.js";import{V as m}from"./video-player-4aa63043.js";import{_ as v,m as c,b as h,c as u,e as s,j as n,p as f,h as y}from"./index-7ea89988.js";const g="/assets/unnecessaryThings-37e85754.svg";const b={components:{VideoPlayer:m,Qr:_,Title:p},mounted(){this.captureVideo()},beforeUnmount(){this.stopVideoCapture()},methods:{async captureVideo(){try{const o=(await navigator.mediaDevices.enumerateDevices()).find((t,a)=>t.kind==="videoinput"&&a===10);if(o){const t=await navigator.mediaDevices.getUserMedia({video:{deviceId:o.deviceId}});this.$refs.videoPlayer.srcObject=t}else console.error("Камера №9 не найдена.")}catch(e){console.error("Ошибка при захвате видео с веб-камеры:",e)}},stopVideoCapture(){const e=this.$refs.videoPlayer.srcObject;e&&e.getTracks().forEach(t=>t.stop())}},data(){return{UnnecessaryThingsQRIcon:g}}},T=e=>(f("data-v-d64cb2e7"),e=e(),y(),e),I={class:"content"},V=T(()=>s("div",{class:"highlight"},null,-1)),U={class:"content-2560"},k={class:"elements"},q={class:"element element-1 after"},w={class:"element element-2"},x={ref:"videoPlayer",class:"video-player",autoplay:""},Q={class:"content-1024"},$={class:"elements"};function P(e,o,t,a,i,j){const r=c("Title"),d=c("video-player"),l=c("qr");return h(),u("div",I,[V,s("div",U,[n(r,{class:"title-button",title:"СЕРВИС «ВЫВОЗ НЕНУЖНЫХ ВЕЩЕЙ»"}),s("div",k,[s("div",q,[n(d,{loop:!0,src:"https://s3.timeweb.com/co97539-43c5a8b5-50e0-4436-87cb-39a28e7cf040/vyvoz.mp4"})]),s("div",w,[s("video",x,null,512)])])]),s("div",Q,[s("div",$,[n(l,{qr:i.UnnecessaryThingsQRIcon,"show-description":!0,action:"ПЕРЕЙДИТЕ ПО qr-коду, чтобы узнать подробнее",header:"О сервисе",text:"Сервис позволяет вывезти из дома и утилизировать технику и электронику, мебель, ванны и другие крупногабаритные предметы. Освободите пространство от ненужных вещей экологично."},null,8,["qr"])])])])}const S=v(b,[["render",P],["__scopeId","data-v-d64cb2e7"]]);export{S as default};