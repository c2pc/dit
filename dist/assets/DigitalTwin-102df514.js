import{V as c}from"./video-player-c89e1e21.js";import{_ as i,o as r,c as d,a}from"./index-b50b2089.js";const n={components:{VideoPlayer:c},mounted(){this.captureVideo()},beforeUnmount(){this.stopVideoCapture()},methods:{async captureVideo(){try{const t=(await navigator.mediaDevices.enumerateDevices()).find((o,s)=>o.kind==="videoinput"&&s===2);if(t){const o=await navigator.mediaDevices.getUserMedia({video:{deviceId:t.deviceId}});this.$refs.videoPlayer.srcObject=o}else console.error("Камера №2 не найдена.")}catch(e){console.error("Ошибка при захвате видео с веб-камеры:",e)}},stopVideoCapture(){const e=this.$refs.videoPlayer.srcObject;e&&e.getTracks().forEach(o=>o.stop())}}},_={class:"content moscow-in-numbers"},l={class:"camera"},p={id:"videoPlayer",ref:"videoPlayer",class:"video-player",autoplay:""};function v(e,t,o,s,m,u){return r(),d("div",_,[a("div",l,[a("video",p,null,512)])])}const y=i(n,[["render",v],["__scopeId","data-v-ad314b7d"]]);export{y as default};