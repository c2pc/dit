<template>
    <div class="content">
        <div class="highlight"></div>
        <div class="content-2560">
            <Title class="title-button" title="Переезд в Москве"/>
            <div class="elements">
                <div class="element element-1">
                    <div class="block">
                        <div class="header">
                            <div class="title">Тематик</div>
                            <div class="number">6</div>
                        </div>
                        <div class="img"><img :src="PersonMovingInMoscowIcon" alt=""></div>
                    </div>
                    <div class="block">
                        <div class="header">
                            <div class="title">Сценариев для переезда</div>
                            <div class="number">170</div>
                        </div>
                        <div class="img"><img :src="DeliveryMovingInMoscowIcon" alt=""></div>
                    </div>
                    <div class="block">
                        <div class="header">
                            <div class="title">Инструкций и услуг</div>
                            <div class="number">80</div>
                        </div>
                        <div class="img"><img :src="CarMovingInMoscowIcon" alt=""></div>
                    </div>
                </div>
                <div class="element element-2 after">
                </div>
            </div>
        </div>
        <div class="content-1024">
            <div class="elements">
                <qr
                        :qr="MovingInMoscowQRIcon"
                        :show-description="true"
                        action="ПЕРЕЙДИТЕ ПО qr-коду, чтобы узнать подробнее"
                        header="О сервисе"
                        text="Сервис предназначен для москвичей, переезжающих из одного района города в другой, а также для тех, кто переезжает в Москву из Московской области или из других регионов России."/>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Qr from "@/components/qr.vue";
import Title from "@/components/title.vue";
import MovingInMoscowQRIcon from "@/assets/images/qr/movingInMoscow.svg";
import PersonMovingInMoscowIcon from "@/assets/images/full/resident/person-movingInMoscow.svg";
import DeliveryMovingInMoscowIcon from "@/assets/images/full/resident/delivery-movingInMoscow.svg";
import CarMovingInMoscowIcon from "@/assets/images/full/resident/car-movingInMoscow.svg";
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
      height: 681px;
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
        min-width: 622px;
        background: rgba(0, 9, 41, 0.6);
        backdrop-filter: blur(5px);
        padding: 33px;

        .block {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: linear-gradient(90deg, rgba(42, 177, 254, 0.1) 0%, rgba(5, 108, 236, 0.1) 39.75%, rgba(11, 55, 222, 0.1) 97.91%);
          backdrop-filter: blur(6.5px);
          border-radius: 10px;
          padding: 33px;
          margin-bottom: 22px;
          height: 189px;

          &:last-child {
            margin-bottom: 0;
          }

          .header {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
              height: 100%;
            .title {
              font-family: 'Golos UI VF';
              font-style: normal;
              font-weight: 400;
              font-size: 22px;
              line-height: 26px;
              color: #FFFFFF;
              width: 161px;
            }

            .number {
              font-family: 'Golos UI VF';
              font-style: normal;
              font-weight: 400;
              font-size: 44px;
              line-height: 53px;
              text-transform: uppercase;

              color: #FFFFFF;
            }
          }
        }
      }

      .element-2 {
        height: 100%;
        min-width: 1180px;
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