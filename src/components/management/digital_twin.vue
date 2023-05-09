<template>
    <div ref="touchElement" class="hoverElement" @click="touch.onClick">
        <img :class="touch.isTouch.value ? 'hover' : 'hidden'" alt=""
             class="element" src="@/assets/images/management/digital_twin-hover.png"
             style="margin-left: -70px;margin-top: -174px;">
        <img :class="touch.isTouch.value ? 'hidden' : 'hover'" alt=""
             class="element default" src="@/assets/images/management/digital_twin-default.png">
        <Tooltip v-if="touch.isTouch.value" :icon="MapTrifold" :onClick="onClick"
                 class="tooltip"
                 description="Задача организации, в особенности же курс на социально-ориентированный национальный проект не оставляет шанса для направлений прогрессивного развития."
                 header="Цифровой двойник"/>
    </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import Tooltip from "@/components/tooltip.vue";
import MapTrifold from "@/assets/images/management/maptrifold.svg";
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
      width: 1031px;
      height: 629px;
    }
  }

  .tooltip {
    top: 150px;
    left: -283px;
  }

}

</style>