<template>
    <div class="content resident">
        <back :show-description="false" class="back-button" type="white"/>
        <Title class="title-button" title="Технологии для жителей"/>
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
import BooksIcon from "@/assets/images/touch/resident/books.svg";
import BuildingIcon from "@/assets/images/touch/resident/building.svg";
import FridgeIcon from "@/assets/images/touch/resident/fridge.svg";
import HandIcon from "@/assets/images/touch/resident/hand.svg";
import MoscowIcon from "@/assets/images/touch/resident/moscow.svg";
import PlaneIcon from "@/assets/images/touch/resident/plane.svg";
import RelocationIcon from "@/assets/images/touch/resident/relocation.svg";
import router from "@/router";
import Title from "@/components/title.vue";
import BlockButton from "@/components/block-button.vue";

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
        description: "Цифровой туристический сервис помогает сделать путешествия по России удобнее и интереснее, а процесс их организации – проще.",
        onClick: () => router.push("/resident/russpass"),
    },
    {
        title: "Благотворительный сервис",
        class: "short",
        defaultIcon: HandIcon,
        description: "Помогать легко с благотворительным сервисом на mos.ru. Проверенные фонды, честные цели и регулярные отчеты.",
        onClick: () => router.push("/resident/russpass"),
    },
    {
        title: "СЕРВИС ВЫВОЗ НЕНУЖНЫХ ВЕЩЕЙ»",
        class: "short",
        defaultIcon: FridgeIcon,
        description: "Сервис позволяет экологично избавиться от ненужной бытовой техники, мебели и других крупногабаритных предметов.",
        onClick: () => router.push("/resident/russpass"),
    },
    {
        title: "Переезд в Москве",
        class: "short",
        defaultIcon: RelocationIcon,
        description: "Помогает организовать жизнь в Москве после переезда и получить всю информацию, которая потребуется на новом месте жительства.",
        onClick: () => router.push("/resident/russpass"),
    },
    {
        title: "Севрис \"Вместе с культурой\"",
        class: "long",
        defaultIcon: BuildingIcon,
        description: "Первый в России сервис, который позволяет горожанам арендовать помещения для проведения частных мероприятий в культурных учреждениях Москвы.",
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
        title: "Сервис \"Библиотеки Москвы\"",
        class: "long",
        defaultIcon: BooksIcon,
        description: "Позволяет забронировать книгу, чтобы потом получить ее в одной из 440 библиотек города, продлить срок хранения книги и просмотреть тематические подборки изданий.",
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

  background: url("@/assets/images/touch/resident/bg.png") no-repeat center center;
  mix-blend-mode: normal;
  padding: 322px 142px 20px 142px;

  .back-button {
    position: absolute;
    z-index: 2;
    left: 120px;
    top: 135px;
  }

  .title-button {
    position: absolute;
    z-index: 2;
    right: 120px;
    top: 156px;

    font-size: 24px;
    line-height: 29px;
    text-shadow: none;
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