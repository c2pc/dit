<template>
    <div class="content">
        <video-player :loop="true" :with-sound="true"
                      :src="CiprVideo"/>
    </div>
</template>

<script lang="ts" setup>

import VideoPlayer from "@/components/video-player.vue";
import CiprVideo from "@/assets/video/CiprPreview.mp4"
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