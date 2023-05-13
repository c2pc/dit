<template>
    <div class="content video">
        <div class="highlight"></div>
        <div class="elements">
            <div v-for="el in elements" :style="{...el.position}" class="element">
                <touch
                        :key="el.name"
                        :defaultIcon="el.defaultIcon"
                        :defaultIconStyle="el.defaultIconStyle"
                        :description="el.description"
                        :header="el.header"
                        :hoverIcon="el.hoverIcon"
                        :hoverIconStyle="el.hoverIconStyle"
                        :disabled="true"
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
import {Element} from "@/types/element";
import router from "@/router";
import ManagementDefault from "@/assets/images/home/management-default.png";
import ManagementHover from "@/assets/images/home/management-hover.png";
import HandTapIcon from "@/assets/images/home/handtap.svg";
import BusinessDefault from "@/assets/images/home/business-default.png";
import BusinessHover from "@/assets/images/home/business-hover.png";
import BuildingIcon from "@/assets/images/home/building.svg";
import ResidentsDefault from "@/assets/images/home/residents-default.png";
import ResidentsHover from "@/assets/images/home/residents-hover.png";
import PersonIcon from "@/assets/images/home/person.svg";
import VideoDefault from "@/assets/images/home/video-default.png";
import VideoHover from "@/assets/images/home/video-hover.png";
import VideoIcon from "@/assets/images/home/video.svg";

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

  background: url("@/assets/images/home/shadow.svg") no-repeat right bottom, url("@/assets/images/home/road.svg") no-repeat center center, #010010;
  mix-blend-mode: normal;

  .highlight {
    position: absolute;
    height: 100%;
    width: 100%;
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