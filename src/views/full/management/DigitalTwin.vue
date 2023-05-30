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

<script>
import VideoPlayer from "@/components/video-player.vue";

export default {
    components: {
        VideoPlayer,
    },
    mounted() {
        this.captureVideo();
    },
    beforeUnmount() {
        this.stopVideoCapture();
    },
    methods: {
        async captureVideo() {
            try {
                const devices = await navigator.mediaDevices.enumerateDevices();
                const camera2 = devices.find(
                        (device, index) => device.kind === "videoinput" && index === 2
                );

                if (camera2) {
                    const stream = await navigator.mediaDevices.getUserMedia({
                        video: { deviceId: camera2.deviceId },
                    });
                    this.$refs.videoPlayer.srcObject = stream;
                } else {
                    console.error("Камера №2 не найдена.");
                }
            } catch (error) {
                console.error("Ошибка при захвате видео с веб-камеры:", error);
            }
        },
        stopVideoCapture() {
            const stream = this.$refs.videoPlayer.srcObject;
            if (stream) {
                const tracks = stream.getTracks();
                tracks.forEach((track) => track.stop());
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.content{
    height: 100vh;
    background: url("@/assets/images/full/business/bg.png") left center no-repeat;
    background-size: cover;
}
.content-2560 {
    width: 2560px;
    max-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .video-player{
        padding: 80px 150px 0;
        position: relative;
        max-width: 100%;
        height: 970px;
        max-height: 1024px;
    }
}
</style>