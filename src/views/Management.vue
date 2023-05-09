<template>
    <div class="content management">
        <div class="back-button">
            <back type="white"/>
        </div>
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
import digital_twin from '@/components/management/digital_twin.vue'
import digital_twin_meta from '@/components/management/digital_twin_meta.vue'
import moscow_in_numbers from '@/components/management/moscow_in_numbers.vue'
import moshub from '@/components/management/moshub.vue'
import Back from "@/components/back.vue";

type Element = {
    name: string;
    component: Component;
    position: Position;
}

const elements: Element[] = [
    {name: "digital_twin", component: digital_twin, position: {top: "-106px", left: "662px"}},
    {name: "digital_twin_meta", component: digital_twin_meta, position: {top: "348px", left: "-37px"}},
    {name: "moscow_in_numbers", component: moscow_in_numbers, position: {top: "195px", left: "1138px"}},
    {name: "moshub", component: moshub, position: {top: "625px", left: "523px"}},
]

</script>

<style lang="scss" scoped>
.content {
  position: relative;
  max-width: 1920px;
  min-width: 100vw;
  max-height: 1080px;
  min-height: 100vh;

  background: url("@/assets/images/management/shadow.svg") no-repeat left bottom, url("@/assets/images/management/road.svg") no-repeat center center, #010010;
  mix-blend-mode: normal;

  .back-button {
    position: absolute;
    z-index: 2;
    left: 120px;
    top: 135px;
  }

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