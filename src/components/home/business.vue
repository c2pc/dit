<template>
    <div ref="touchElement" class="hoverElement" @click="touch.onClick">
        <img :class="touch.isTouch.value ? 'hover' : 'hidden'" alt="business"
             class="element" src="@/assets/images/home/business-hover.png">
        <img :class="touch.isTouch.value ? 'hidden' : 'hover'" alt="business"
             class="element default" src="@/assets/images/home/business-default.png">
        <Tooltip v-if="touch.isTouch.value" :icon="BuildingIcon" :onClick="onClick"
                 class="tooltip"
                 description="Задача организации, в особенности же курс на социально-ориентированный национальный проект не оставляет шанса для направлений прогрессивного развития."
                 header="Технологии для бизнеса"/>
    </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import Tooltip from "@/components/tooltip.vue";
import BuildingIcon from "@/assets/images/home/building.svg";
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