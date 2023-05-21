<template>
    <router-view />
</template>

<script setup lang="ts">
import { io } from "socket.io-client";
import { onMounted } from "vue";

const socket = io("http://localhost:8080"); // Замените на адрес вашего сервера

onMounted(() => {
    // При переходе на новую страницу
    const nextPage = "new_page";
    socket.emit("pageTransition", nextPage);
});
</script>

<style scoped lang="scss">

</style>
