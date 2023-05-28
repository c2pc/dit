<template>
    <div class="content management">
        <back :show-description="false" class="back-button" type="white"/>
        <Title class="title-button" title="Узнай москву"/>
        <div class="highlight"></div>
        <div class="elements">
            <div v-for="el in elements" class="element">
                <div class="img">
                    <img :src="el.src" alt="">
                </div>
                <div class="title">{{ el.title }}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Back from "@/components/back.vue";
import Title from "@/components/title.vue";
import ExploreMoscow1 from "@/assets/images/touch/resident/1-exploreMoscow.png";
import ExploreMoscow2 from "@/assets/images/touch/resident/2-exploreMoscow.png";
import ExploreMoscow3 from "@/assets/images/touch/resident/3-exploreMoscow.png";
import ExploreMoscow4 from "@/assets/images/touch/resident/4-exploreMoscow.png";
import ExploreMoscow5 from "@/assets/images/touch/resident/5-exploreMoscow.png";

type Element = {
    src: string;
    title: string;
}

const elements: Element[] = [
    {src: ExploreMoscow1, title: "Крыши москвы"},
    {src: ExploreMoscow2, title: "Гостиница «Ленинградская»"},
    {src: ExploreMoscow3, title: "Дом Пашкова"},
    {src: ExploreMoscow4, title: "Петровский Путевой дворец"},
    {src: ExploreMoscow5, title: "Здание гостиницы «Националь»"},
]
</script>

<style lang="scss" scoped>
.content {
  position: relative;
  max-width: 1920px;
  min-width: 100vw;
  max-height: 1080px;
  min-height: 100vh;

  background: url("@/assets/images/touch/resident/bgs/exploreMoscow.png") no-repeat center center;
  mix-blend-mode: normal;

  display: flex;
  justify-content: center;
  padding-top: 301px;

  .back-button {
    position: absolute;
    z-index: 2;
    left: 120px;
    top: 135px;
  }

  .title-button {
    position: absolute;
    z-index: 2;
    right: 120px;
    top: 156px;

    font-size: 24px;
    line-height: 29px;
    text-shadow: none;
  }

  .elements {
    position: relative;
    height: 602px;
    width: 1274px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: -10px 0;

    .element {
      background: linear-gradient(90deg, rgba(42, 177, 254, 0.1) 0%, rgba(5, 108, 236, 0.1) 39.75%, rgba(11, 55, 222, 0.1) 97.91%);
      backdrop-filter: blur(6.5px);
      border-radius: 10px;
      height: 291px;
      width: calc((100% - 20px * 2) / 3);
      padding: 30px;
      margin: 10px;

      &:first-child {
        margin-left: 0;
      }

      &:nth-child(3n) {
        margin-right: 0;
      }

      &:nth-child(4n) {
        margin-left: 0;
      }


      .img {
        border-radius: 10px;
        height: 178px;

        img {
          height: 100%;
          width: 100%;
        }
      }

      .title {
        font-family: 'Golos UI VF';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        text-transform: uppercase;
        color: #FFFFFF;
        margin-top: 20px;
        width: 100%;
        text-align: center;
      }
    }
  }
}
</style>