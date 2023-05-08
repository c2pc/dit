<template>
    <div ref="hoverElement" class="hoverElement">
        <img :class="isHovered ? 'hover' : 'hidden'" alt=""
             class="element" src="@/assets/images/home/residents-hover.png">
        <img :class="isHovered ? 'hidden' : 'hover'" alt=""
             class="element default" src="@/assets/images/home/residents-default.png" style="margin-top: 114px;">
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
        &.default{
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