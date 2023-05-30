<template>
    <div class="content moscow-in-numbers">
        <div class="camera">
            <video id="videoPlayer" ref="videoPlayer" class="video-player" autoplay></video>
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
.content {
    position: relative;
    max-width: 3584px;
    min-width: 100vw;
    max-height: 1024px;
    min-height: 100vh;

    .camera{
        width: 3584px;
        height: 100%;
        border: none;
        .video-player{
            width: 100%;
            height: 100%;
        }
    }
}
</style>