<template>
    <div class="content management">
        <back type="white"/>
        <div class="elements">
            <div v-for="el in elements" class="element">
                <block :path="el.path" :title="el.title"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {RouteLocationRaw} from "vue-router";
import Block from "@/components/management/block.vue";
import Back from "@/components/back.vue";

type Element = {
    path: RouteLocationRaw;
    title: string;
}

const elements: Element[] = [
    {path: "/mos", title: "Москва в \nцифрах"},
    {path: "/mos", title: "Цифровой \nдвойник"},
    {path: "/mos", title: "Цифровой \nдвойник (мета)"},
    {path: "/mos", title: "МОS.HUB"},
]

</script>

<style lang="scss" scoped>
.content {
  position: relative;
  max-width: 1920px;
  min-width: 100vw;
  max-height: 1080px;
  min-height: 100vh;
  background: url("@/assets/images/management/background.png") no-repeat center center, #000B33;
  background-size: cover;
  padding: 135px 120px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  .elements {
    display: flex;
    align-items: center;
    margin: 0 auto;
    flex: 1;

    .element {
      margin: 20px;

      &:nth-child(4n+1) {
        margin-left: 0;
      }

      &:nth-child(4n) {
        margin-right: 0;
      }
    }
  }
}
</style>