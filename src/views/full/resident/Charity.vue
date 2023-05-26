<template>
    <div class="content">
        <div class="highlight"></div>
        <div class="content-2560">
            <Title class="title-button" title="благотворительный сервис"/>
            <div class="elements">
                <div class="element element-1 after"></div>
                <div class="element element-2">
                    <div class="title">Поддержите благотворительные программы категории «Наука и образование»</div>
                    <div class="description">Вместе поможем детям-сиротам получить среднее образование, ребятам с
                        трудностями поведения овладеть социальными навыками, а молодым ученым реализовать перспективные
                        разработки.
                    </div>
                </div>
                <div class="element element-3">
                    <qr
                            :qr="CharityQRIcon"
                            :show-description="false"
                            action="ПЕРЕЙДИТЕ ПО qr-коду, чтобы сделать добро"
                    />

                </div>
            </div>
        </div>
        <div class="content-1024">
            <div class="element">
                <div class="group">
                    <div class="title">С нами</div>
                    <div class="description">77 проверенных фондов</div>
                </div>
                <div class="group">
                    <div class="title">Сделали пожертвование</div>
                    <div class="description">>55 тыс. человек</div>
                </div>
                <div class="group">
                    <div class="title">На сумму</div>
                    <div class="description">>65 млн рублей</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Qr from "@/components/qr.vue";
import Title from "@/components/title.vue";
import CharityQRIcon from "@/assets/images/qr/charity.svg";
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
  background: url("@/assets/images/full/resident/bgs/charity.png") no-repeat left center;
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
        min-width: 1193px;
      }

      .element-2 {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .title {
          font-family: 'Golos UI VF';
          font-style: normal;
          font-weight: 400;
          font-size: 44px;
          line-height: 53px;
          text-transform: uppercase;
          color: #FFFFFF;
          margin-bottom: 40px;
        }

        .description {
          font-family: 'Golos UI VF';
          font-style: normal;
          font-weight: 400;
          font-size: 32px;
          line-height: 38px;
          color: #FFFFFF;
        }
      }

      .element-3 {
        min-width: 406px;
        display: flex;
        align-items: center;
      }
    }
  }

  .content-1024 {
    width: 1024px;
    display: flex;
    align-items: center;
    justify-content: center;

    .element {
      width: 731px;
      height: 600px;

      border: 1px solid rgba(255, 255, 255, 0.6);
      filter: drop-shadow(0px 0px 10px #0084FF);
      border-radius: 10px;
      padding: 69px 53px;

      .group {
        margin-bottom: 60px;

        &:last-child {
          margin-bottom: 0px;
        }

        .title {
          font-family: 'Golos UI VF';
          font-style: normal;
          font-weight: 400;
          font-size: 36px;
          line-height: 43px;
          color: #FFFFFF;
          margin-bottom: 24px;
        }

        .description {
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
}
</style>