<template>
    <div class="content">
        <video-player :on-end="onEnd" :loop="false"
                      src="https://s3.timeweb.com/co97539-43c5a8b5-50e0-4436-87cb-39a28e7cf040/render.mp4"/>
    </div>
</template>

<script lang="ts" setup>
import VideoPlayer from "@/components/video-player.vue";
import router from "@/router";

const onEnd = () => {
    router.push("/management/moshub2")
}
</script>

<style lang="scss" scoped>
.content {
    position: relative;
    max-width: 3584px;
    min-width: 100vw;
    max-height: 1024px;
    min-height: 100vh;
}
</style>