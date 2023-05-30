<template>
    <div class="content">
        <div class="highlight"></div>
        <div class="content-2560">
            <Title class="title-button" title="Mos.hub" />
            <div class="elements">
                <div class="element element-1 after">
                    <video ref="videoPlayer" class="video-player" autoplay></video>
                </div>
            </div>
        </div>
        <div class="content-1024">
            <div class="elements">
                <qr
                    :qr="MoshubQRIcon"
                    :show-description="true"
                    action="ПЕРЕЙДИТЕ ПО qr-коду, чтобы узнать подробнее"
                    header="О сервисе"
                    text="Цели проекта — возможность предоставления российским разработчикам открытой площадки для создания новых полезных продуктов, сохранение конкурентоспособности российских решений, помощь программистам в обретении независимости от аналогичных иностранных платформ."
                />
            </div>
        </div>
    </div>
</template>

<script>
import Qr from "@/components/qr.vue";
import Title from "@/components/title.vue";
import VideoPlayer from "@/components/video-player.vue";
import MoshubQRIcon from "@/assets/images/qr/moshub.svg"

export default {
    components: {
        VideoPlayer,
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
                    (device, index) => device.kind === "videoinput" && index === 5
                );

                if (camera1) {
                    const stream = await navigator.mediaDevices.getUserMedia({
                        video: { deviceId: camera1.deviceId },
                    });
                    this.$refs.videoPlayer.srcObject = stream;
                } else {
                    console.error("Камера №9 не найдена.");
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
            MoshubQRIcon: MoshubQRIcon,
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
    background: url("@/assets/images/full/management/moshub_bg.png") no-repeat left center;
    z-index: 0;
    .content-2560 {
        width: 2560px;
        padding: 76px 124px 0 100px;

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
            height: 850px;
            display: flex;
            align-items: center;
            justify-content: flex-end;

            .element {
                margin-left: 278px;
                border-radius: 10px;
                position: relative;

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
                min-width: 1510px;
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
</style>