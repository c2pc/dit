<template>
    <div class="content">
        <video-player :loop="true"
                      src="https://s3.timeweb.com/co97539-43c5a8b5-50e0-4436-87cb-39a28e7cf040/CiprPreview.mp4"/>
    </div>
</template>

<script lang="ts" setup>

import VideoPlayer from "@/components/video-player.vue";
</script>

<style lang="scss" scoped>
.content {
  position: relative;
  max-width: 1920px;
  min-width: 100vw;
  max-height: 1080px;
  min-height: 100vh;

  background: #010010;
  mix-blend-mode: normal;
}
</style>