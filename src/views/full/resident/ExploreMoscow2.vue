<template>
    <div class="content">
        <div class="content-2560">
            <iframe :src="'http://192.168.1.109:8090/'+path+'.html'" class="iframe" height="100%" width="100%"/>
        </div>
        <div class="content-1024">
            <div class="elements">
                <qr
                        :qr="ExploreMoscowQRIcon"
                        :show-description="true"
                        action="ПЕРЕЙДИТЕ ПО qr-коду, чтобы узнать подробнее"
                        header="О сервисе"
                        text="Виртуальное путешествие по самым интересным местам Москвы, которое по вашему желанию легко становится реальным."
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Qr from "@/components/qr.vue";
import ExploreMoscowQRIcon from "@/assets/images/qr/exploreMoscow.svg";
import {onBeforeMount, ref} from "vue";
import {useRoute} from "vue-router";

const path = ref('')
const route = useRoute()

onBeforeMount(() => {
    if (route.params.path) {
        path.value = route.params.path.replaceAll("-", "/")
    }
})
</script>

<style lang="scss" scoped>
.content {
  position: relative;
  max-width: 3584px;
  min-width: 100vw;
  max-height: 1024px;
  min-height: 100vh;
  background: url("@/assets/images/full/resident/bgs/exploreMoscow.png") no-repeat left center;
  display: flex;

  .content-2560 {
    width: 2560px;

    .iframe {
      width: 100%;
      height: 100%;
      border: none;
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