<template>
    <div class="content">
        <div class="highlight"></div>
        <div class="content-2560">
            <Title class="title-button" title="СЕРВИС «ВЫВОЗ НЕНУЖНЫХ ВЕЩЕЙ»" />
            <div class="elements">
                <div class="element element-1"></div>
                <div class="element element-2">
                    <video ref="videoPlayer" class="video-player" autoplay></video>
                </div>
            </div>
        </div>
        <div class="content-1024">
            <div class="elements">
                <qr
                        :qr="UnnecessaryThingsQRIcon"
                        :show-description="true"
                        action="ПЕРЕЙДИТЕ ПО qr-коду, чтобы узнать подробнее"
                        header="О сервисе"
                        text="Сервис позволяет вывезти из дома и утилизировать технику и электронику, мебель, ванны и другие крупногабаритные предметы. Освободите пространство от ненужных вещей экологично."
                />
            </div>
        </div>
    </div>
</template>

<script>
import Qr from "@/components/qr.vue";
import Title from "@/components/title.vue";
import UnnecessaryThingsQRIcon from "@/assets/images/qr/unnecessaryThings.svg";

export default {
    components: {
        Qr,
        Title,
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
                const camera1 = devices.find(
                        (device, index) => device.kind === "videoinput" && index === 9
                );

                if (camera1) {
                    const stream = await navigator.mediaDevices.getUserMedia({
                        video: { deviceId: camera1.deviceId },
                    });
                    this.$refs.videoPlayer.srcObject = stream;
                } else {
                    console.error("Камера №1 не найдена.");
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
            UnnecessaryThingsQRIcon: UnnecessaryThingsQRIcon,
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
    mix-blend-mode: normal;
    display: flex;
    background: url("@/assets/images/full/resident/bgs/unnecessaryThings.png") no-repeat left center;
    z-index: 0;
    .content-2560 {
        width: 2560px;
        padding: 218px 100px 0 100px;

        .title-button {
            position: absolute;
            z-index: 2;
            left: 100px;
            top: 125px;
        }

        .elements {
            position: relative;
            max-height: 100%;
            max-width: 100%;
            height: 664px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            //margin: 0 -30px;

            .element {
                margin-left: 278px;
                border-radius: 10px;
                position: relative;
                background: #000929;

                &.after:after {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    left: 13px;
                    top: 17px;
                    background: #000929;
                    filter: blur(5px);
                    border-radius: 10px;
                    z-index: -1;
                }
            }

            .element:first-child {
                margin-left: 0;
            }

            .element-1 {
                height: 100%;
                min-width: 1180.44px;
            }

            .element-2 {
                min-width: 479px;
                height: 853px;
            }
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
.video-container {
    position: relative;
    width: 100%;
    padding-bottom: calc(853 / 479 * 100%); /* 853:479 aspect ratio */
}

.video-player {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>