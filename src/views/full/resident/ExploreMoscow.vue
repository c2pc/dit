<template>
    <div class="content">
        <div class="highlight"></div>
        <div class="content-2560">
            <Title class="title-button" title='Узнай Москву'/>
            <div class="elements">
                <div class="element element-1 after">
                    <video-player
                            src="https://s3.timeweb.com/co97539-43c5a8b5-50e0-4436-87cb-39a28e7cf040/uznay.mp4"
                    />
                </div>
                <div class="element element-2">
                    <qr
                            :qr="ExploreMoscowQRIcon"
                            :show-description="true"
                            action="ПЕРЕЙДИТЕ ПО qr-коду, чтобы узнать подробнее"
                            header="О сервисе"
                            text="Виртуальное путешествие по самым интересным местам Москвы, которое по вашему желанию легко становится реальным."/>
                </div>
            </div>
        </div>
        <div class="content-1024">
            <Title class="title-button" title='Точки притяжения'/>
            <div class="elements">
                <div class="element"><img :src="ExploreMoscow1" alt=""></div>
                <div class="element"><img :src="ExploreMoscow2" alt=""></div>
                <div class="element"><img :src="ExploreMoscow3" alt=""></div>
                <div class="element"><img :src="ExploreMoscow4" alt=""></div>
                <div class="element"><img :src="ExploreMoscow5" alt=""></div>
                <div class="element"><img :src="ExploreMoscow6" alt=""></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Qr from "@/components/qr.vue";
import Title from "@/components/title.vue";
import ExploreMoscowQRIcon from "@/assets/images/qr/exploreMoscow.svg";
import ExploreMoscow1 from "@/assets/images/full/resident/1-exploreMoscow.png";
import ExploreMoscow2 from "@/assets/images/full/resident/2-exploreMoscow.png";
import ExploreMoscow3 from "@/assets/images/full/resident/3-exploreMoscow.png";
import ExploreMoscow4 from "@/assets/images/full/resident/4-exploreMoscow.png";
import ExploreMoscow5 from "@/assets/images/full/resident/5-exploreMoscow.png";
import ExploreMoscow6 from "@/assets/images/full/resident/6-exploreMoscow.png";
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
  background: url("@/assets/images/full/resident/bgs/movingInMoscow.png") no-repeat left center;
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
      max-height: 664px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      //margin: 0 -30px;

      .element {
        margin-left: 100px;
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
        min-width: 1180px;
      }

      .element-2 {
        width: 704px;
      }
    }
  }

  .content-1024 {
    width: 1024px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .title-button {
      text-align: left;
      width: 781.2px;
      margin-bottom: 40px;
    }

    .elements {
      background: rgba(0, 9, 41, 0.8);
      backdrop-filter: blur(5px);
      width: 781.2px;
      display: flex;
      flex-wrap: wrap;
      padding: 46px;


      .element {
        border-radius: 10px;
        width: calc(100% / 2 - 17.71px / 2);
        height: 184.23px;
        margin-right: 17.71px;
        margin-top: 17.71px;

        &:nth-child(2n) {
          margin-right: 0;
        }

        &:nth-child(1), &:nth-child(2) {
          margin-top: 0;
        }

        img {
          width: 100%;
        }
      }
    }
  }
}
</style>