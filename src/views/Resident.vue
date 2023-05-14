<template>
    <div class="content resident">
        <div class="back-button">
            <back position="left" type="white"/>
        </div>
        <div class="elements">
            <block v-for="block in blocks" :class="block.class" class="element">
                <template #default>
                    <BlockImage :icon="block.defaultIcon" :title="block.title"/>
                </template>
                <template #touched>
                    <BlockButton :description="block.description" :on-click="block.onClick" :title="block.title"/>
                </template>
            </block>
        </div>
    </div>
</template>

<script lang="ts" setup>


import Back from "@/components/back.vue";
import Block from "@/components/block.vue";
import BlockImage from "@/components/block-image.vue";
import BlockButton from "@/components/block-button.vue";
import BooksIcon from "@/assets/images/resident/books.png";
import BuildingIcon from "@/assets/images/resident/building.png";
import FridgeIcon from "@/assets/images/resident/fridge.png";
import HandIcon from "@/assets/images/resident/hand.png";
import MoscowIcon from "@/assets/images/resident/moscow.png";
import PlaneIcon from "@/assets/images/resident/plane.png";
import RelocationIcon from "@/assets/images/resident/relocation.png";
import router from "@/router";

type Block = {
    class?: string;
    defaultIcon: string;
    title: string;
    description: string;
    onClick: () => any,
}

const blocks: Block[] = [
    {
        title: "RUSSPASSASS",
        class: "short",
        defaultIcon: PlaneIcon,
        description: "Цифровой туристический сервис помогает сделать путешествия по России удобнее и интереснее, а процесс их организации – проще.",
        onClick: () => router.push("/resident/russpass"),
    },
    {
        title: "Благотворительный сервис",
        class: "short",
        defaultIcon: HandIcon,
        description: "Помогать легко с благотворительным сервисом mos.ru. Проверенные фонды, честные цели и регулярные отчеты.",
        onClick: () => router.push("/resident/russpass"),
    },
    {
        title: "Вывоз ненужных вещей",
        class: "short",
        defaultIcon: FridgeIcon,
        description: "Сервис позволяет избавиться от ненужной крупногабаритной техники и металлических предметов.",
        onClick: () => router.push("/resident/russpass"),
    },
    {
        title: "Переезд в Москве",
        class: "short",
        defaultIcon: RelocationIcon,
        description: "Cервис помогает организовать жизнь в Москве после переезда и получить всю информацию, которая потребуется на новом месте жительства.",
        onClick: () => router.push("/resident/russpass"),
    },
    {
        title: "Аренда городских пространств",
        class: "long",
        defaultIcon: BuildingIcon,
        description: "Первый в России сервис по аренде помещений для проведения частных мероприятий в культурных учреждениях Москвы.",
        onClick: () => router.push("/resident/russpass"),
    },
    {
        title: "Узнай Москву",
        class: "long",
        defaultIcon: MoscowIcon,
        description: "Интерактивный онлайн-гид по Москве помогает изучать историю и архитектуру столицы, находить прогулочные маршруты по городу и проходить онлайн-квизы.",
        onClick: () => router.push("/resident/russpass"),
    },
    {
        title: "Библиотечный сервис",
        class: "long",
        defaultIcon: BooksIcon,
        description: "Сервис позволяет оформить единый читательский билет и получить книгу в ближайшей библиотеке.",
        onClick: () => router.push("/resident/russpass"),
    },
]
</script>

<style lang="scss" scoped>
.content {
  position: relative;
  max-width: 1920px;
  min-width: 100vw;
  max-height: 1080px;
  min-height: 100vh;

  background: url("@/assets/images/resident/bg.png") no-repeat center center;
  mix-blend-mode: normal;
  padding: 156px 140px;


  .elements {
    display: flex;
    flex-wrap: wrap;
    margin: 136px -9px 0 -9px;

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