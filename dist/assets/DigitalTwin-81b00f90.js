import{V as c}from"./video-player-33dbc5a7.js";import{_ as i,o as r,c as n,a}from"./index-32686832.js";const d={components:{VideoPlayer:c},mounted(){this.captureVideo()},beforeUnmount(){this.stopVideoCapture()},methods:{async captureVideo(){try{const t=(await navigator.mediaDevices.enumerateDevices()).find((o,s)=>o.kind==="videoinput"&&s===2);if(t){const o=await navigator.mediaDevices.getUserMedia({video:{deviceId:t.deviceId}});this.$refs.videoPlayer.srcObject=o}else console.error("Камера №2 не найдена.")}catch(e){console.error("Ошибка при захвате видео с веб-камеры:",e)}},stopVideoCapture(){const e=this.$refs.videoPlayer.srcObject;e&&e.getTracks().forEach(o=>o.stop())}}},_={class:"content moscow-in-numbers"},l={class:"camera"},p={id:"videoPlayer",ref:"videoPlayer",class:"video-player",autoplay:""};function v(e,t,o,s,m,u){return r(),n("div",_,[a("div",l,[a("video",p,null,512)])])}const y=i(d,[["render",v],["__scopeId","data-v-29c2e22e"]]);export{y as default};
