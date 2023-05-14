<template>
    <div class="back">
        <span v-if="showDescription" :style="{...margin}"
              class="description">Чтобы завершить просмотр, нажмите “Назад”</span>
        <div :class="type" :style="{...margin}" class="content" @click="click">
            <svg fill="none" height="27" viewBox="0 0 31 27" width="31" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.598 26.1285H21.5981C24.0091 26.1258 26.3205 25.1668 28.0253 23.462C29.7302 21.7572 30.6891 19.4458 30.6918 17.0348V17.0346C30.6891 14.6236 29.7302 12.3122 28.0253 10.6073C26.3205 8.90254 24.0091 7.94358 21.5981 7.94086H21.598H4.21292L9.51835 2.63403L9.51839 2.63408L9.52079 2.6315C9.6922 2.44755 9.78551 2.20425 9.78108 1.95286C9.77664 1.70147 9.6748 1.46161 9.49701 1.28382C9.31922 1.10604 9.07937 1.0042 8.82797 0.999761C8.57658 0.995325 8.33328 1.08864 8.14933 1.26005L8.14929 1.26L8.1468 1.2625L1.18383 8.22546L1.18379 8.2255C1.00207 8.40745 0.9 8.65408 0.9 8.91123C0.9 9.16838 1.00207 9.41502 1.18379 9.59696L1.18383 9.597L8.14558 16.5588C8.23418 16.6535 8.34086 16.7295 8.45934 16.7823C8.57837 16.8353 8.70687 16.8638 8.83716 16.8661C8.96745 16.8684 9.09687 16.8445 9.2177 16.7957C9.33853 16.7468 9.44829 16.6742 9.54043 16.5821C9.63258 16.4899 9.70522 16.3802 9.75402 16.2593C9.80283 16.1385 9.8268 16.0091 9.8245 15.8788C9.8222 15.7485 9.79368 15.62 9.74064 15.501C9.68785 15.3825 9.61185 15.2758 9.51713 15.1872L4.21293 9.8816H21.598C23.4951 9.8816 25.3145 10.6352 26.656 11.9767C27.9975 13.3182 28.7511 15.1376 28.7511 17.0347C28.7511 18.9318 27.9975 20.7512 26.656 22.0927C25.3145 23.4341 23.4951 24.1878 21.598 24.1878H8.83257C8.57521 24.1878 8.32839 24.29 8.14641 24.472C7.96443 24.654 7.8622 24.9008 7.8622 25.1581C7.8622 25.4155 7.96443 25.6623 8.14641 25.8443C8.32839 26.0263 8.57521 26.1285 8.83257 26.1285H21.598Z"
                      fill="white" stroke="#0084FF" stroke-width="0.2"/>
            </svg>
            <span class="title">Назад</span>
        </div>
    </div>
</template>

<script lang="ts" setup>

import router from "@/router";
import {computed} from "vue";

const props = defineProps<{
    type: string;
    onClick?: () => any;
    position?: string;
    showDescription?: boolean;
}>()

const margin = computed(() => {
    switch (props.position) {
        case "left":
            return {'margin-left': "-29px"}
        case "right":
            return {'margin-right': "-29px"}
        case "center":
            return {}
    }
})

const click = () => {
    if (props.onClick != undefined) {
        props.onClick()
    } else {
        router.back()
    }
}
</script>

<style lang="scss" scoped>
.back {
  flex-direction: column;
  position: relative;
    white-space: nowrap;

  .description {
    font-family: 'Golos UI VF';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;
    text-shadow: 0px 0px 10px rgba(42, 246, 255, 0.3);
    position: absolute;
    width: 100%;
    height: 24px;
    left: 0;
    bottom: calc(100% + 20px);
  }

  .content {
    display: flex;
    align-content: center;
    align-items: center;
    width: 188px;
    border-radius: 10px;
    height: 72px;
    border: 0.2px solid transparent;
    cursor: pointer;
    transition: .5s;
    justify-content: center;

    .title {
      font-family: 'Golos UI VF';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      text-align: center;
      text-transform: uppercase;
      margin-left: 20px;
    }


    &.white {
      svg path {
        fill: #FFFFFF;
      }

      .title {
        color: #FFFFFF;
      }

      &:hover {
        border: 0.2px solid #FFFFFF;
        transition: .5s;
      }
    }

    &.blue {
      svg path {
        fill: #10069F;
      }

      .title {
        color: #10069F;
      }

      &:hover {
        border: 0.2px solid #10069F;
        transition: .5s;
      }

    }

    &.blue-filled {
      transition: .5s;
      background: linear-gradient(90deg, rgba(42, 177, 254, 0.5) 0%, rgba(5, 108, 236, 0.5) 39.75%, rgba(11, 55, 222, 0.5) 97.91%);
      backdrop-filter: blur(6.5px);

      svg path {
        fill: #FFFFFF;
      }

      .title {
        color: #FFFFFF;
      }

      &:hover {
        background: linear-gradient(90deg, rgba(42, 177, 254, 0.85) 0%, rgba(5, 108, 236, 0.85) 39.75%, rgba(11, 55, 222, 0.85) 97.91%);
        transition: .5s;
      }
    }
  }


}

</style>