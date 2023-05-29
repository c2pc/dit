<template>
    <div :style="{zIndex: show ? '10000' : '-10000'}" class="background">
        <video-player v-if="show" :loop="true"
                      src="https://s3.timeweb.com/co97539-43c5a8b5-50e0-4436-87cb-39a28e7cf040/render.mp4"/>
    </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import VideoPlayer from "@/components/video-player.vue";
import router from "@/router";

const show = ref(false)
let timeout = null

const addEventListener = () => {
    document.addEventListener('mousedown', touch);
    document.addEventListener('mousemove', touch);
    document.addEventListener('touchstart', touch);
    document.addEventListener('keydown', touch);
}
const showVideo = (): void => {
    addEventListener()
    show.value = true
}
const hideVideo = (): void => {
    router.push("/")
    show.value = false
}
const touch = (): void => {
    if (show.value) {
        hideVideo()
    }else{
        clearTimeout(timeout)
        timeout = setTimeout(showVideo, 60 * 1000)
    }
}

onMounted(addEventListener)
onMounted(touch)
</script>

<style lang="scss" scoped>
.background {
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 10000;
}

</style>