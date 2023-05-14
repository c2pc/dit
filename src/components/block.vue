<template>
    <div ref="hoverElement" class="block" @click="touch.onClick">
        <TransitionGroup name="hoverElement">
            <div v-if="!touch.isTouch.value" class="default">
                <slot name="default"></slot>
            </div>
            <div v-if="touch.isTouch.value" class="touched">
                <slot name="touched"></slot>
            </div>
        </TransitionGroup>
    </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {useTouch} from "@/helpers/touch";

const props = defineProps<{
    disabled?: boolean;
}>()
const hoverElement = ref(null)
const touch = useTouch(hoverElement, props.disabled)
</script>

<style lang="scss" scoped>
.block {
  background: linear-gradient(90deg, rgba(42, 177, 254, 0.1) 0%, rgba(5, 108, 236, 0.1) 39.75%, rgba(11, 55, 222, 0.1) 97.91%);
  backdrop-filter: blur(6.5px);
  border-radius: 10px;
  height: 250px;
  width: 100%;
  cursor: pointer;
  position: relative;

  .default, .touched {
    position: absolute;
    width: 100%;
    height: 100%;
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