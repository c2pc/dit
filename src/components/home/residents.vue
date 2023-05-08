<template>
    <div ref="touchElement" @click="touch.onClick" class="hoverElement">
        <img :class="touch.isTouch.value ? 'hover' : 'hidden'" alt=""
             class="element" src="@/assets/images/home/residents-hover.png">
        <img :class="touch.isTouch.value ? 'hidden' : 'hover'" alt=""
             class="element default" src="@/assets/images/home/residents-default.png" style="margin-top: 114px;">
        <Tooltip v-if="touch.isTouch.value" :icon="PersonIcon" :onClick="onClick"
                 class="tooltip"
                 description="Задача организации, в особенности же курс на социально-ориентированный национальный проект не оставляет шанса для направлений прогрессивного развития."
                 header="Технологии для жителей"/>
    </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import Tooltip from "@/components/home/tooltip.vue";
import PersonIcon from "@/assets/images/home/person.svg";
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
      width: 760px;
      height: 732px;
    }
  }

  .tooltip {
    top: -38px;
    left: -56px;
  }

}

</style>