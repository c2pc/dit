<template>
    <div class="content business">
        <back :on-click="()=>router.push('/')" :show-description="false" class="back-button"
              type="blue-filled"/>
        <iframe
                class="iframe"
                height="100%"
                src="https://investmoscow.ru/about-moscow/investment-map-v2?mainType=1"
                width="100%"
        ></iframe>
    </div>
</template>

<script lang="ts" setup>

import Back from "@/components/back.vue";
import router from "@/router";
</script>

<style lang="scss" scoped>
.content {
  position: relative;
  max-width: 1920px;
  min-width: 100vw;
  max-height: 1080px;
  min-height: 100vh;

  .iframe {
    height: 100vh;
    width: 100vw;
  }


  .back-button {
    position: absolute;
    z-index: 100;
    left: 1660px;
    top: 21px;
  }
}
</style>