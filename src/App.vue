<template>
    <router-view :key="route.fullPath"/>
</template>

<script lang="ts" setup>
import {onMounted, ref, watchEffect} from "vue";
import {useRoute, useRouter} from "vue-router";

// Импортируйте socket из модуля main.ts
import {socket} from "@/main";

const route = useRoute();
const router = useRouter();
const width = window.innerWidth

window.onresize = function () {
    location.reload();
}

if (width >= 2000) {
    socket.on('pageTransition', (nextPage) => {
        console.log('Получено изменение маршрута:', nextPage);
        // Обновляем маршрут только если он отличается от текущего
        if (router.currentRoute.value.fullPath !== nextPage) {
            router.push(nextPage);
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
    socket.on('pageTransition', (nextPage) => {
        console.log('Получено изменение маршрута:', nextPage);
        // Обновляем маршрут только если он отличается от текущего
        if (router.currentRoute.value.fullPath !== nextPage) {
            router.push(nextPage);
        }
    });


    const show = ref(false)
    let timeout = null

    const addEventListener = () => {
        document.addEventListener('mousedown', touch);
        document.addEventListener('mousemove', touch);
        document.addEventListener('touchstart', touch);
        document.addEventListener('keydown', touch);
    }
    const showVideo = (): void => {
        console.log("showVideo")
        socket.emit("pageTransition", "/background")
        show.value = true
    }
    const hideVideo = (): void => {
        console.log("hideVideo")
        router.push("/")
        socket.emit("pageTransition", "/")
        show.value = false
    }
    const touch = (): void => {
        console.log("touch")
        if (show.value) {
            hideVideo()
        }else{
            clearTimeout(timeout)
            timeout = setTimeout(showVideo, 45 * 1000)
        }
    }

    if (width < 2000){
        onMounted(addEventListener)
        onMounted(touch)
    }
}
</script>

<style lang="scss" scoped>

</style>