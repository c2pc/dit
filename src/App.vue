<template>
    <router-view/>
</template>

<script lang="ts" setup>
import {onMounted, watchEffect} from "vue";
import {useRoute, useRouter} from "vue-router";

// Импортируйте socket из модуля main.ts
import {socket} from "@/main";

const route = useRoute();
const router = useRouter();
const width = window.innerWidth


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
}
</script>

<style lang="scss" scoped>

</style>