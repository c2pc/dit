<template>
    <div class="video-player">
        <video id="videoPlayer" ref="video" :autoplay="true" :controls="false" :loop="loop" :muted="!withSound"
               @ended="onEnd">
            <source :src="src">
        </video>
    </div>
</template>

<script lang="ts" setup>

const props = defineProps<{
    src: string;
    onEnd?: () => any;
    loop?: boolean,
    withSound?: boolean
}>()

</script>

<style lang="scss" scoped>
.video-player {
  height: 100%;
  width: 100%;


  video {
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: 10001;
  }
}

</style>