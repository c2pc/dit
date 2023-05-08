<template>
    <div ref="hoverElement" class="hoverElement">
        <img :class="isHovered ? 'hover' : 'hidden'" alt=""
             class="element" src="@/assets/images/home/management-hover.png"
             style="margin-top: -262px; margin-left: -32px;">
        <img :class="isHovered ? 'hidden' : 'hover'" alt=""
             class="element default" src="@/assets/images/home/management-default.png">
        <Tooltip v-if="isHovered" :onClick="onClick" class="tooltip"
                 description="Задача организации, в особенности же курс на социально-ориентированный национальный проект не оставляет шанса для направлений прогрессивного развития."
                 header="Технологии для бизнеса"/>
    </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {useElementHover} from "@vueuse/core";
import Tooltip from "./tooltip.vue"

const hoverElement = ref()
const isHovered = useElementHover(hoverElement)
const onClick = () => {
}
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