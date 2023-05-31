<template>
    <div v-if="width < 2000 && show === true" class="background"></div>
    <router-view :key="route.fullPath"/>
</template>

<script lang="ts" setup>
import {onBeforeUnmount, onMounted, ref, watchEffect} from "vue";
import {useRoute, useRouter} from "vue-router";
import {socket} from "@/main";

const route = useRoute();
const router = useRouter();
const width = window.innerWidth
const show = ref(false)
const watch = ref(false)

window.onresize = function () {
    location.reload();
}

if (width >= 2000) {
    socket.on('pageTransition', (nextPage) => {
        console.log('Получено изменение маршрута:', nextPage);
        if (router.currentRoute.value.fullPath !== nextPage) {
            router.push(nextPage);
        }
    });
    socket.on('showVideoInFull', (nextPage) => {
        const video = document.querySelector("#videoPlayer")
        const iframe = document.querySelector("iframe")
        if (!video && !iframe) {
            router.push(nextPage)
            socket.emit("showVideoInTouch");
        }
    });
} else {
    onMounted(() => {
        console.log('Клиент подключился');
        socket.emit("pageTransition", route.fullPath);
    });
    watchEffect(() => {
        console.log('Изменение маршрута:', route.fullPath);
        socket.emit("pageTransition", route.fullPath);
    });
    socket.on('showVideoInTouch', () => {
        console.log('showVideoInTouch')
        show.value = true
    });
    socket.on('pageTransition', (nextPage) => {
        console.log('Получено изменение маршрута:', nextPage);
        if (router.currentRoute.value.fullPath !== nextPage) {
            router.push(nextPage);
        }
    });


    let timeout = null

    const addEventListener = () => {
        window.addEventListener('mousedown', touch);
        window.addEventListener('mousemove', touch);
        window.addEventListener('touchstart', touch);
        window.addEventListener('keydown', touch);
    }
    const removeEventListener = () => {
        window.removeEventListener('mousedown', touch);
        window.removeEventListener('mousemove', touch);
        window.removeEventListener('touchstart', touch);
        window.removeEventListener('keydown', touch);
        clearTimeout(timeout)
        show.value = false
    }
    const showVideo = (): void => {
        if (route.fullPath !== '/') {
            const video = document.querySelector("#videoPlayer")
            const iframe = document.querySelector("iframe")
            if (!video && !iframe) {
                socket.emit("showVideoInFull")
            }
        }
    }
    const hideVideo = (): void => {
        //Удалить, если возникнут проблемы с переходом на главный экран
        ////
        router.push("/")
        socket.emit("pageTransition", "/")
        ////
        //socket.emit("pageTransition", route.fullPath)
        show.value = false
    }
    const touch = (): void => {
        if (show.value) {
            hideVideo()
        } else {
            clearTimeout(timeout)
            timeout = setTimeout(showVideo, 45000)
        }
    }

    onMounted(addEventListener)
    onMounted(touch)
    onBeforeUnmount(removeEventListener)
}
</script>

<style lang="scss" scoped>
.background{
    position: fixed;
    height: 100vh;
    width: 100vw;
    z-index: 100000;
}

</style>