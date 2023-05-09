<template>
    <div ref="touchElement" @click="touch.onClick" class="hoverElement">
        <img :class="touch.isTouch.value ? 'hover' : 'hidden'" alt=""
             class="element" src="@/assets/images/home/management-hover.png"
             style="margin-top: -262px; margin-left: -32px;">
        <img :class="touch.isTouch.value ? 'hidden' : 'hover'" alt=""
             class="element default" src="@/assets/images/home/management-default.png">
        <Tooltip v-if="touch.isTouch.value" :icon="HandTapIcon" :onClick="onClick"
                 class="tooltip"
                 description="Задача организации, в особенности же курс на социально-ориентированный национальный проект не оставляет шанса для направлений прогрессивного развития."
                 header="Технологии для управления"/>
    </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import Tooltip from "../tooltip.vue"
import HandTapIcon from "@/assets/images/home/handtap.svg";
import {useTouch} from "@/helpers/touch";
import {useRouter} from "vue-router";

const touchElement = ref(null)
const touch = useTouch(touchElement)

const router = useRouter()
const onClick = () => router.push("/management")
</script>

<style lang="scss" scoped>
.hoverElement {
  .element {
    &.default {
      width: 833px;
      height: 538px;
    }
  }

  .tooltip {
    top: -150px;
    left: -150px;
  }

}

</style>