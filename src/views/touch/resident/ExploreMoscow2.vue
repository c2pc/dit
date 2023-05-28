<template>
    <div class="content">
        <back :on-click="()=>router.push('/residents/exploreMoscow')" :show-description="false" class="back-button"
              type="blue-filled"/>
        <div class="block">
            <iframe :src="'http://192.168.1.109:8090/'+path+'.html'" class="iframe" height="100%" width="100%"/>
            <div class="elements">
                <div v-for="el in elements" class="element" @click="el.onClick">
                    <div class="img">
                        <img :src="el.src" alt="">
                    </div>
                    <div class="title">{{ el.title }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Back from "@/components/back.vue";
import {onBeforeMount, ref} from "vue";
import {useRoute} from "vue-router";
import ExploreMoscow1 from "@/assets/images/touch/resident/1-exploreMoscow.png";
import router from "@/router";
import ExploreMoscow2 from "@/assets/images/touch/resident/2-exploreMoscow.png";
import ExploreMoscow3 from "@/assets/images/touch/resident/3-exploreMoscow.png";
import ExploreMoscow4 from "@/assets/images/touch/resident/4-exploreMoscow.png";
import ExploreMoscow5 from "@/assets/images/touch/resident/5-exploreMoscow.png";

const path = ref('')
const route = useRoute()

onBeforeMount(() => {
    if (route.params.path) {
        path.value = route.params.path.replaceAll("-", "/")
    }
})


type Element = {
    src: string;
    title: string;
    onClick: () => any;
}

const elements: Element[] = [
    {
        src: ExploreMoscow1,
        title: "Крыши москвы",
        onClick: () => router.push({path: "/residents/exploreMoscow2/VR-07_vr_roof-roof", force: true})
    },
    {
        src: ExploreMoscow2,
        title: "Гостиница «Ленинградская»",
        onClick: () => router.push("/residents/exploreMoscow2/VR-02_national-national")
    },
    {
        src: ExploreMoscow3, title: "Дом Пашкова",
        onClick: () => router.push("/residents/exploreMoscow2/VR-07_vr_roof-roof")
    },
    {
        src: ExploreMoscow4,
        title: "Петровский Путевой дворец",
        onClick: () => router.push("/residents/exploreMoscow2/VR-02_national-national")
    },
    {
        src: ExploreMoscow5,
        title: "Здание гостиницы «Националь»",
        onClick: () => router.push("/residents/exploreMoscow2/VR-02_national-national")
    },
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
  padding: 31px;
  z-index: 2;

  .back-button {
    position: absolute;
    z-index: 2;
    left: 61px;
    top: 56px;
  }

  .block {
    width: 100%;
    height: 874px;
    position: relative;

    &:after {
      content: "";
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

    .iframe {
      width: 100%;
      height: 100%;
      border: none;
    }

    .elements {
      position: absolute;
      width: 100%;
      height: 209px;
      left: 0;
      bottom: -120px;
      display: flex;
      justify-content: center;

      .element {
        margin: 0 10px;
        height: 100%;
        width: 320px;
        background: linear-gradient(90deg, rgba(42, 177, 254, 0.1) 0%, rgba(5, 108, 236, 0.1) 39.75%, rgba(11, 55, 222, 0.1) 97.91%);
        backdrop-filter: blur(6.5px);
        border-radius: 10px;
        padding: 21px 0;

        .img {
          border-radius: 10px;
          height: 128px;
          padding: 0 21px;

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
          text-align: center;
          text-transform: uppercase;
          color: #FFFFFF;
          width: 100%;
          text-align: center;
          margin-top: 15px;
          padding: 0 18px;
        }
      }

    }
  }
}
</style>