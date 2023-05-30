<template>
    <div class="content">
        <back :show-description="false" class="back-button" type="blue-filled" :on-click="()=>router.push('/management')"/>
<!--        <div @mousedown="onClick" v-if="show === true" class="background"></div>-->
        <div class="btn-center">
            <button class="skip" @click="onClick">Пропустить видео</button>
        </div>

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
    .btn-center{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background: url(@/assets/images/touch/home/bg.png)  no-repeat center center;
    }
    .skip{
        padding: 10px;
        width: 258px;
        height: 60px;
        filter: drop-shadow(0px 0px 4px rgba(0, 132, 255, 0.5));
        background: none;
        color: #fff;
        border-radius: 10px;
        outline: none;
        border: 1px solid #ffffff;
        font-size: 20px;

    }
    .skip:focus{
        background: linear-gradient(2deg, rgba(3, 163, 255, 0.5) 0%,
                rgba(38, 138, 255, 0.5) 25%, rgba(75, 117, 255, 0.43) 50%,
                rgba(67, 148, 242, 0.5) 75%, rgba(11, 62, 255, 0.5) 100%);
        border: none;
    }
}
</style>