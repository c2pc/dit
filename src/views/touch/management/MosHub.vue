<template>
    <div class="content">
        <back :show-description="false" class="back-button" type="blue-filled" :on-click="()=>router.push('/management')"/>
        <div @mousedown="onClick" v-if="show === true" class="background"></div>
        <iframe
            src="https://hub.mos.ru/dashboard/"
            height="100%"
            width="100%"
            class="iframe"
        ></iframe>
    </div>
</template>

<script lang="ts" setup>

import router from "@/router";
import Back from "@/components/back.vue";
import {ref} from "vue";
import {socket} from "@/main";

const show = ref(true)
const onClick = () =>{
    show.value = false
    socket.emit('pageTransition', "/management/moshub2");
}

</script>

<style lang="scss" scoped>
.content {
    position: relative;
    max-width: 1920px;
    min-width: 100vw;
    max-height: 1080px;
    min-height: 100vh;

    .background{
        position: fixed;
        height: 100vh;
        width: 100vw;
        z-index: 99;
    }

    .back-button {
        position: absolute;
        z-index: 100;
        left: 1612px;
        top: 135px;
    }

    .iframe{
        height: 100vh;
        width: 100vw;
    }
}
</style>