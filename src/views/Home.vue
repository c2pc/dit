<template>
    <div class="content home">
        <div class="highlight"></div>
        <div class="elements">
            <div v-for="el in elements" :style="{...el.position}" class="element">
                <Component :is="el.component" :key="el.name"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type {Component} from "vue";
import video from '../components/home/video.vue'
import residents from '../components/home/residents.vue'
import management from '../components/home/management.vue'
import business from '../components/home/business.vue'

type Element = {
    name: string;
    component: Component;
    position: Position;
}

const elements: Element[] = [
    {name: "management", component: management, position: {top: "543px", left: "660px"}},
    {name: "business", component: business, position: {top: "0px", left: "0px"}},
    {name: "video", component: video, position: {top: "4px", left: "819px"}},
    {name: "residents", component: residents, position: {top: "82px", left: "1158px"}},
]

</script>

<style lang="scss" scoped>
.content {
  position: relative;
  max-width: 1920px;
  min-width: 100vw;
  max-height: 1080px;
  min-height: 100vh;

  background: url("../assets/images/home/shadow.svg") no-repeat right bottom, url("../assets/images/home/road.svg") no-repeat center center, #010010;
  mix-blend-mode: normal;

  .highlight {
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(146.36deg, #00B3FF 9.3%, #0A1ED7 96.42%);
    opacity: 0.35;
    box-shadow: inset 14px 24px 40px rgba(78, 184, 255, 0.59);
    filter: blur(400px);
  }

  .elements {
    position: relative;
    max-height: 100%;
    max-width: 100%;

    .element {
      position: absolute;
      max-width: max-content;
    }
  }
}
</style>