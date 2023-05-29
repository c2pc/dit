<template>
    <div class="content">
        <div class="content-2560">
            <video ref="videoPlayer" class="video-player" autoplay width="100%" height="100%"></video>
        </div>
        <div class="content-1024">
            <div class="elements">
                <qr
                        :qr="ExploreMoscowQRIcon"
                        :show-description="true"
                        action="ПЕРЕЙДИТЕ ПО qr-коду, чтобы узнать подробнее"
                        header="О сервисе"
                        text="Виртуальное путешествие по самым интересным местам Москвы, которое по вашему желанию легко становится реальным."
                />
            </div>
        </div>
    </div>
</template>

<script>
import Qr from "@/components/qr.vue";
import ExploreMoscowQRIcon from "@/assets/images/qr/exploreMoscow.svg";

export default {
    components: {
        Qr,
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
                const camera10 = devices.find(
                        (device, index) => device.kind === "videoinput" && index === 4
                );

                if (camera10) {
                    const stream = await navigator.mediaDevices.getUserMedia({
                        video: { deviceId: camera10.deviceId },
                    });
                    this.$refs.videoPlayer.srcObject = stream;
                } else {
                    console.error("Камера №10 не найдена.");
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
    data() {
        return {
            ExploreMoscowQRIcon: ExploreMoscowQRIcon,
        };
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
  background: url("@/assets/images/full/resident/bgs/exploreMoscow.png") no-repeat left center;
  display: flex;

  .content-2560 {
    width: 2560px;

    .iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
  }

  .content-1024 {
    width: 1024px;
    display: flex;
    align-items: center;
    justify-content: center;

    .qr {
      width: 704px;
    }
  }
}
</style>