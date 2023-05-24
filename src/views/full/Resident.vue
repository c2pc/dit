<template>
    <div class="content resident">
        <div class="highlight"></div>
        <div class="content-2560">
            <Title class="title-button" title="Технологии для жителей"/>
            <div class="elements">
                <block v-for="block in blocks" :class="block.class" :disabled="true" class="element">
                    <template #default>
                        <BlockImage :icon="block.defaultIcon" :title="block.title"/>
                    </template>
                </block>
            </div>
        </div>
        <div class="content-1024">

        </div>
    </div>
</template>

<script lang="ts" setup>


import Block from "@/components/block.vue";
import BlockImage from "@/components/block-image.vue";
import BlockButton from "@/components/block-button.vue";
import BooksIcon from "@/assets/images/touch/resident/books.svg";
import BuildingIcon from "@/assets/images/touch/resident/building.svg";
import FridgeIcon from "@/assets/images/touch/resident/fridge.svg";
import HandIcon from "@/assets/images/touch/resident/hand.svg";
import MoscowIcon from "@/assets/images/touch/resident/moscow.svg";
import PlaneIcon from "@/assets/images/touch/resident/plane.svg";
import RelocationIcon from "@/assets/images/touch/resident/relocation.svg";
import router from "@/router";
import Title from "@/components/title.vue";

type Block = {
    class?: string;
    defaultIcon: string;
    title: string;
    description: string;
    onClick: () => any,
}

const blocks: Block[] = [
    {
        title: "RUSSPASS",
        class: "short",
        defaultIcon: PlaneIcon,
        description: "",
        onClick: () => {},
    },
    {
        title: "Благотворительный сервис",
        class: "short",
        defaultIcon: HandIcon,
        description: "",
        onClick: () => {},
    },
    {
        title: "СЕРВИС ВЫВОЗ НЕНУЖНЫХ ВЕЩЕЙ",
        class: "short",
        defaultIcon: FridgeIcon,
        description: "",
        onClick: () => {},
    },
    {
        title: "Переезд в Москве",
        class: "short",
        defaultIcon: RelocationIcon,
        description: "",
        onClick: () => {},
    },
    {
        title: "Севрис \"Вместе с культурой\"",
        class: "long",
        defaultIcon: BuildingIcon,
        description: "",
        onClick: () => {},
    },
    {
        title: "Узнай Москву",
        class: "long",
        defaultIcon: MoscowIcon,
        description: "",
        onClick: () => {},
    },
    {
        title: "Сервис \"Библиотеки Москвы\"",
        class: "long",
        defaultIcon: BooksIcon,
        description: "",
        onClick: () => {},
    },
]
</script>

<style lang="scss" scoped>
.content {
  position: relative;
  max-width: 3584px;
  min-width: 100vw;
  max-height: 1024px;
  min-height: 100vh;
  mix-blend-mode: normal;
  display: flex;
  background: url("@/assets/images/full/resident/bg.png") no-repeat bottom right;

  .content-2560 {
    width: 2560px;
    padding: 300px 461px;

    .title-button {
      position: absolute;
      z-index: 2;
      left: 461px;
      top: 207px;
    }
  }

  .content-1024 {
    width: 1024px;
  }

  .elements {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -9px 0 -9px;

    .element {
      height: 250px;
      margin: 9px;
      width: calc(100% / 4 - 18px);

      &.long {
        width: calc(100% / 3 - 18px);
      }
    }
  }
}
</style>