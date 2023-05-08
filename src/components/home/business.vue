<template>
    <div ref="hoverElement" class="hoverElement">
        <img :class="isHovered ? 'hover' : 'hidden'" alt="business"
             class="element" src="@/assets/images/home/business-hover.png">
        <img :class="isHovered ? 'hidden' : 'hover'" alt="business"
             class="element default" src="@/assets/images/home/business-default.png">
        <Tooltip v-if="isHovered" :onClick="onClick" class="tooltip"
                 description="Задача организации, в особенности же курс на социально-ориентированный национальный проект не оставляет шанса для направлений прогрессивного развития."
                 header="Технологии для бизнеса"/>
    </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {useElementHover} from "@vueuse/core";
import Tooltip from "@/components/home/tooltip.vue";

const hoverElement = ref()
const isHovered = useElementHover(hoverElement)
const onClick = () => {
}
</script>

<style lang="scss" scoped>
.hoverElement {
  .element {
    &.default {
      width: 775px;
      height: 815px;
    }
  }

  .tooltip {
    top: 55px;
    left: 25px;
  }

}

</style>