<template>
    <div class="content video">
        <back :show-description="true" class="back-button" type="white"/>
        <Title class="title-button" title="Видео"/>
        <div class="highlight"></div>
        <div class="elements">
            <div v-for="el in elements" :style="{...el.position}" class="element">
                <touch
                        :key="el.name"
                        :defaultIcon="el.defaultIcon"
                        :defaultIconStyle="el.defaultIconStyle"
                        :description="el.description"
                        :disabled="true"
                        :header="el.header"
                        :hoverIcon="el.hoverIcon"
                        :hoverIconStyle="el.hoverIconStyle"
                        :onClick="el.onClick"
                        :tooltipIcon="el.tooltipIcon"
                        :tooltipPosition="el.tooltipPosition"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Touch from "@/components/touch.vue";
import Title from "@/components/title.vue";
import {Element} from "@/types/element";
import router from "@/router";
import ManagementDefault from "@/assets/images/touch/home/management-default.png";
import ManagementHover from "@/assets/images/touch/home/management-hover.png";
import HandTapIcon from "@/assets/images/touch/home/handtap.svg";
import BusinessDefault from "@/assets/images/touch/home/business-default.png";
import BusinessHover from "@/assets/images/touch/home/business-hover.png";
import BuildingIcon from "@/assets/images/touch/home/building.svg";
import ResidentsDefault from "@/assets/images/touch/home/residents-default.png";
import ResidentsHover from "@/assets/images/touch/home/residents-hover.png";
import PersonIcon from "@/assets/images/touch/home/person.svg";
import VideoDefault from "@/assets/images/touch/home/video-default.png";
import VideoHover from "@/assets/images/touch/home/video-hover.png";
import VideoIcon from "@/assets/images/touch/home/video.svg";
import Back from "@/components/back.vue";

const elements: Element[] = [
    {
        name: "management",
        position: {top: "543px", left: "660px"},
        defaultIcon: ManagementDefault,
        hoverIcon: ManagementHover,
        description: "Задача организации, в особенности же курс на социально-ориентированный национальный проект не оставляет шанса для направлений прогрессивного развития.",
        header: "Технологии для управления",
        onClick: () => router.push("/management"),
        tooltipPosition: {top: "-150px", left: "-150px"},
        tooltipIcon: HandTapIcon,
        defaultIconStyle: {width: "833px", height: "538px"},
        hoverIconStyle: {marginTop: "-262px", marginLeft: "-32px"},
    },
    {
        name: "business",
        position: {top: "0px", left: "0px"},
        defaultIcon: BusinessDefault,
        hoverIcon: BusinessHover,
        description: "Задача организации, в особенности же курс на социально-ориентированный национальный проект не оставляет шанса для направлений прогрессивного развития.",
        header: "Технологии для бизнеса",
        onClick: () => router.push("/business"),
        tooltipPosition: {top: "55px", left: "25px"},
        tooltipIcon: BuildingIcon,
        defaultIconStyle: {width: "775px", height: "815px"},
        hoverIconStyle: {},
    },
    {
        name: "video",
        position: {top: "4px", left: "819px"},
        defaultIcon: VideoDefault,
        hoverIcon: VideoHover,
        description: "Задача организации, в особенности же курс на социально-ориентированный национальный проект не оставляет шанса для направлений прогрессивного развития.",
        header: "Цифровая Москва",
        onClick: () => router.push("/video"),
        tooltipPosition: {top: "12px", left: "-345px"},
        tooltipIcon: VideoIcon,
        defaultIconStyle: {width: "1026px", height: "449px"},
        hoverIconStyle: {marginLeft: "-10px"},
    },
    {
        name: "residents",
        position: {top: "82px", left: "1158px"},
        defaultIcon: ResidentsDefault,
        hoverIcon: ResidentsHover,
        description: "Задача организации, в особенности же курс на социально-ориентированный национальный проект не оставляет шанса для направлений прогрессивного развития.",
        header: "Технологии для жителей",
        onClick: () => router.push("/residents"),
        tooltipPosition: {top: "-38px", left: "-56px"},
        tooltipIcon: PersonIcon,
        defaultIconStyle: {width: "760px", height: "732px", marginTop: "114px"},
        hoverIconStyle: {},
    },
]
</script>

<style lang="scss" scoped>
.content.video {
  position: relative;
  max-width: 1920px;
  min-width: 100vw;
  max-height: 1080px;
  min-height: 100vh;

  background: url("@/assets/images/touch/home/shadow.svg") no-repeat right bottom, url("@/assets/images/touch/home/road.svg") no-repeat center center, #010010;
  mix-blend-mode: normal;

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

  .highlight {
    position: absolute;
    width: 1232px;
    height: 1232px;
    left: calc(100vw / 2 - 616px);
    background: linear-gradient(146.36deg, #00B3FF 9.3%, #0A1ED7 96.42%);
    opacity: 0.35;
    box-shadow: inset 14px 24px 40px rgba(78, 184, 255, 0.59);
    filter: blur(400px);
  }

  .elements {
    position: relative;
    max-height: 100%;
    max-width: 100%;

    .element {
      position: absolute;
      max-width: max-content;
    }
  }
}
</style>