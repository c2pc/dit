<template>
    <router-view />
</template>

<script setup lang="ts">
import { onMounted, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";

// Импортируйте socket из модуля main.ts
import { socket } from "@/main";

const route = useRoute();
const router = useRouter();

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
</script>

<style scoped lang="scss">

</style>