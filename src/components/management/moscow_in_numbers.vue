<template>
    <div ref="touchElement" @click="touch.onClick" class="hoverElement">
        <img :class="touch.isTouch.value ? 'hover' : 'hidden'" alt=""
             class="element" src="@/assets/images/management/moscow_in_numbers-hover.png" style="margin-left: 4px;">
        <img :class="touch.isTouch.value ? 'hidden' : 'hover'" alt=""
             class="element default" src="@/assets/images/management/moscow_in_numbers-default.png">
        <Tooltip v-if="touch.isTouch.value" :onClick="onClick" class="tooltip"
                 :icon="VideoIcon"
                 description="Задача организации, в особенности же курс на социально-ориентированный национальный проект не оставляет шанса для направлений прогрессивного развития."
                 header="Москва в цифрах"/>
    </div>
</template>

<script lang="ts" setup>
import {Ref, ref} from "vue";
import {useElementHover} from "@vueuse/core";
import Tooltip from "@/components/tooltip.vue";
import VideoIcon from "@/assets/images/home/video.svg";
import {useTouch} from "@/helpers/touch";

const touchElement = ref(null)
const touch = useTouch(touchElement)

const onClick = () => {
}
</script>

<style lang="scss" scoped>
.hoverElement {
  .element {
    &.default {
      width: 782px;
      height: 815px;
    }
  }

  .tooltip {
      top: -115px;
      left: 62px;
  }

}

</style>