<template>
    <div class="content">
        <div class="highlight"></div>
        <div class="content-2560">
            <Title class="title-button" title='Сервис "Библиотеки Москвы"'/>
            <div class="elements">
                <div class="element element-1 after">

                </div>
                <div class="element element-2 after">
                    <video-player
                        :loop="true"
                        src="https://s3.timeweb.com/co97539-43c5a8b5-50e0-4436-87cb-39a28e7cf040/biblioteka.mp4"
                    />
                </div>
            </div>
        </div>
        <div class="content-1024">
            <div class="elements">
                <qr
                    :qr="MoscowLibrariesQRIcon"
                    :show-description="true"
                    action="ПЕРЕЙДИТЕ ПО qr-коду, чтобы узнать подробнее"
                    header="О сервисе"
                    text="Сервис, который делает библиотеки ближе к московским читателям. Мы собрали информацию обо всех бумажных книгах в одном месте."/>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Qr from "@/components/qr.vue";
import Title from "@/components/title.vue";
import MoscowLibrariesQRIcon from "@/assets/images/qr/moscowLibraries.svg";
import VideoPlayer from "@/components/video-player.vue";
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
    background: url("@/assets/images/full/resident/bgs/moscowLibraries.png") no-repeat left center;
    z-index: 0;

    .content-2560 {
        width: 2560px;
        padding: 281px 100px 0 100px;

        .title-button {
            position: absolute;
            z-index: 2;
            left: 100px;
            top: 177px;
        }

        .elements {
            position: relative;
            max-height: 100%;
            max-width: 100%;
            height: 525.68px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            //margin: 0 -30px;

            .element {
                margin-left: 60px;
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
                min-width: 1295.61px;
            }

            .element-2 {
                height: 100%;
                min-width: 934.54px;
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