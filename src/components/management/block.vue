<template>
    <div class="block" @click="router.push(path)">
        <span class="title">{{ title }}</span>
    </div>
</template>

<script lang="ts" setup>

import {RouteLocationRaw} from "vue-router";
import router from "@/router";

const props = defineProps<{
    path: RouteLocationRaw;
    title: string;
}>()
</script>

<style lang="scss" scoped>
.block {
  background: linear-gradient(90deg, rgba(42, 177, 254, 0.1) 0%, rgba(5, 108, 236, 0.1) 39.75%, rgba(11, 55, 222, 0.1) 97.91%);
  backdrop-filter: blur(6.5px);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  height: 160px;
  width: 320px;
  text-align: center;
  padding: 10px 50px;
  word-wrap: break-word;

  .title {
    font-family: 'Golos UI VF';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
    opacity: 0.8;
    text-shadow: 0px 0px 4px rgba(42, 246, 255, 0.25);
    flex: none;
    order: 0;
    flex-grow: 0;
    width: 100%;
  }
}

</style>