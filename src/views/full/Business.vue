<template>
    <div class="content management">
        <div class="highlight"></div>
        <div class="content-2560">
            <Title class="title-button" title="Инвестиционный портал" />
            <div class="elements">
                <div class="element element-1 after"></div>
                <div class="element element-2 after"></div>
                <div class="element element-3 after">
                    <video ref="videoPlayer" class="video-player" autoplay></video>
                </div>
            </div>
        </div>
        <div class="content-1024">
            <div class="elements">
                <qr
                        :qr="BusinessQRIcon"
                        :show-description="true"
                        action="ПЕРЕЙДИТЕ ПО qr-коду, чтобы узнать подробнее"
                        header="О сервисе"
                        text="Инвестиционная карта – один из ключевых сервисов портала. Собранная на карте информация вместе с аналитическими слоями помогают любому пользователю портала осуществить оценку потенциала локации для ведения бизнеса."
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Qr from "@/components/qr.vue";
import Title from "@/components/title.vue";
import BusinessQRIcon from "@/assets/images/qr/business.svg";

import { onMounted, onBeforeUnmount, ref } from "vue";

export default {
    components: {
        Qr,
        Title,
    },
    setup() {
        const videoPlayer = ref(null);

        // Функция для захвата видеопотока с веб-камеры
        const captureVideo = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                videoPlayer.value.srcObject = stream;
            } catch (error) {
                console.error("Ошибка при захвате видео с веб-камеры:", error);
            }
        };

        onMounted(() => {
            captureVideo();
        });

        onBeforeUnmount(() => {
            // Остановка видеопотока при выходе из компонента
            const stream = videoPlayer.value.srcObject;
            if (stream) {
                const tracks = stream.getTracks();
                tracks.forEach((track) => track.stop());
            }
        });

        return {
            videoPlayer,
            BusinessQRIcon,
        };
    },
};
</script>

<style lang="scss" scoped>
.video-player {
    width: 100%;
    height: 100%;
}
.content.management {
    position: relative;
    max-width: 3584px;
    min-width: 100vw;
    max-height: 1024px;
    min-height: 100vh;
    mix-blend-mode: normal;
    display: flex;
    background: url("@/assets/images/full/business/bg.png") no-repeat left center;
    z-index: 0;

    .content-2560 {
        width: 2560px;
        padding: 298px 150px 0 150px;

        .title-button {
            position: absolute;
            z-index: 2;
            left: 150px;
            top: 205px;
        }

        .elements {
            position: relative;
            max-height: 100%;
            max-width: 100%;
            height: 521px;
            display: flex;
            align-items: center;
            justify-content: flex-start;

            .element {
                margin-left: 60px;
                border-radius: 10px;
                position: relative;

                &.after:after {
                    content: "";
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
                min-width: 641.77px;
            }

            .element-2 {
                height: 100%;
                min-width: 631.77px;
            }

            .element-3 {
                height: 100%;
                width: 100%;

                .iframe {
                    height: 100%;
                    width: 100%;
                    border-radius: 10px;
                }
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