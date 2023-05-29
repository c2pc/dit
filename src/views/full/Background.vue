<template>
    <div class="content">
        <video-player :loop="true"
                      src="https://s3.timeweb.com/co97539-43c5a8b5-50e0-4436-87cb-39a28e7cf040/render.mp4"/>
    </div>
</template>

<script lang="ts" setup>
import VideoPlayer from "@/components/video-player.vue";
</script>

<style lang="scss" scoped>
.content {
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 10000;
}

</style>