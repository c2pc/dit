<template>
    <div class="content moscow-in-numbers">
        <div class="camera">
            <div class="content">
                <div class="content-2560">
                    <div class="element">
                        <video id="videoPlayer" ref="videoPlayer" class="video-player" autoplay></video>
                    </div>
                </div>
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
.content {
    position: relative;
    max-width: 3584px;
    min-width: 100vw;
    max-height: 1024px;
    min-height: 100vh;

    .camera{
        max-width: 3584px;
        max-height: 1024px;
        height: 100%;
        border: none;
        display: flex;
        z-index: 0;
        .content-2560 {
            width: 2560px;
            max-height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            .video-player{
                width: 100%;
                position: relative;
                max-width: 100%;
                height: 1000px;
                width: 1920px;
                max-height: 1024px;
            }
        }
    }}
</style>