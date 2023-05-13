<template>
    <div ref="hoverElement" class="hoverElement" @click="touch.onClick">
        <TransitionGroup name="hoverElement">
            <img v-if="touch.isTouch.value" :src="hoverIcon"
                 :style="hoverIconStyle" alt="business" class="element">
            <img v-if="!touch.isTouch.value" :src="defaultIcon"
                 :style="defaultIconStyle" alt="business" class="element default">
            <Tooltip v-if="touch.isTouch.value" :description="description" :header="header"
                     :icon="tooltipIcon"
                     :onClick="onClick"
                     :style="tooltipPosition"
                     class="tooltip"/>
        </TransitionGroup>
    </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import Tooltip from "@/components/tooltip.vue";
import {useTouch} from "@/helpers/touch";

const props = defineProps<{
    disabled?: boolean;
    defaultIcon: string;
    hoverIcon: string;
    description: string;
    header: string;
    onClick: () => any;
    tooltipPosition: Position;
    tooltipIcon: string;
    defaultIconStyle?: any;
    hoverIconStyle?: any;
}>()

const hoverElement = ref(null)
const touch = useTouch(hoverElement, props.disabled)
</script>

<style lang="scss" scoped>
.hoverElement {
  cursor: pointer;
  position: relative;

  .element {
    &.default {
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .tooltip {
    position: absolute;
    z-index: 100;
  }

}

.hoverElement-enter-active,
.hoverElement-leave-active {
  transition: all .5s ease;
}

.hoverElement-enter-from,
.hoverElement-leave-to {
  opacity: 0;
}

</style>