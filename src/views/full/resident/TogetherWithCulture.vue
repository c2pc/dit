<template>
    <div class="content">
        <div class="highlight"></div>
        <div class="content-2560">
            <Title class="title-button" title='Сервис краткосрочной аренды "Вместе с культурой"'/>
            <div class="elements">
                <div class="element element-1 after">
                    <video-player
                        :loop="true"
                        src="https://s3.timeweb.com/co97539-43c5a8b5-50e0-4436-87cb-39a28e7cf040/arenda.mp4"
                    />
                </div>
                <div class="element element-2 after">
                    <img :src="Arenda1" alt="">
                </div>
            </div>
        </div>
        <div class="content-1024">
            <div class="elements">
                <qr
                        :qr="TogetherWithCultureQRIcon"
                        :show-description="true"
                        action="ПЕРЕЙДИТЕ ПО qr-коду, чтобы узнать подробнее"
                        header="О сервисе"
                        text="Онлайн-подача заявки на краткосрочную аренду пространства в учреждениях культуры города Москвы для проведения мероприятий."/>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Qr from "@/components/qr.vue";
import Title from "@/components/title.vue";
import TogetherWithCultureQRIcon from "@/assets/images/qr/togetherWithCulture.svg";
import VideoPlayer from "@/components/video-player.vue";
import Arenda1 from "@/assets/images/full/resident/arenda_1.png";
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
    padding: 275px 100px 0 100px;

    .title-button {
      position: absolute;
      z-index: 2;
      left: 100px;
      top: 183px;
    }

    .elements {
      position: relative;
      max-height: 100%;
      max-width: 100%;
      height: 507px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      //margin: 0 -30px;

      .element {
        margin-left: 60px;
        border-radius: 10px;
        position: relative;

          img{
              width: 100%;
              height: 100%;
          }

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
        min-width: 900px;
      }

      .element-2 {
        height: 100%;
        min-width: 903px;
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