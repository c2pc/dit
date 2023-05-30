<template>
    <div class="content">
                <div class="content-2560">
                    <div class="element">
                        <video-player :on-end="onEnd" :loop="true"
                                      src="https://s3.timeweb.com/co97539-43c5a8b5-50e0-4436-87cb-39a28e7cf040/cd.mp4"/>
                    </div>
                    </div>
                </div>
</template>

<script  lang="ts" setup>
import VideoPlayer from "@/components/video-player.vue";
</script>

<style lang="scss" scoped>
.content{
    height: 100vh;
    background: url("@/assets/images/full/business/bg.png") left center no-repeat;
    background-size: cover;
}
.content-2560 {
    position: relative;
    width: 2560px;
    max-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 0;
    .video-player{
        z-index: 10;
        padding: 80px 150px 0;
        position: relative;
        max-width: 100%;
        height: 970px;
        max-height: 1024px;
    }
}
</style>