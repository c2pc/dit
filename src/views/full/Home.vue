<template>
    <div class="content home">
        <div class="highlight"></div>
        <div class="content-2560">
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
                            :onClick="el.onClick"
                            :tooltipIcon="el.tooltipIcon"
                            :tooltipPosition="el.tooltipPosition"
                    />
                </div>
            </div>
        </div>
        <div class="content-1024">
            <div class="elements">
                <div v-for="el in elements2" :style="{...el.position}" class="element">
                    <touch
                            :key="el.name"
                            :defaultIcon="el.defaultIcon"
                            :defaultIconStyle="el.defaultIconStyle"
                            :description="el.description"
                            :disabled="el.disabled"
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
    </div>
</template>

<script lang="ts" setup>
import {Element} from "@/types/element";
import router from "@/router";
import ManagementDefault from "@/assets/images/full/home/management-default.png";
import ManagementHover from "@/assets/images/full/home/management-hover.png";
import HandTapIcon from "@/assets/images/full/home/handtap.svg";
import BusinessDefault from "@/assets/images/full/home/business-default.png";
import BusinessHover from "@/assets/images/full/home/business-hover.png";
import BuildingIcon from "@/assets/images/full/home/building.svg";
import ResidentsDefault from "@/assets/images/full/home/residents-default.png";
import ResidentsHover from "@/assets/images/full/home/residents-hover.png";
import PersonIcon from "@/assets/images/full/home/person.svg";
import VideoDefault from "@/assets/images/full/home/video-default.png";
import VideoHover from "@/assets/images/full/home/video-hover.png";
import VideoIcon from "@/assets/images/full/home/video.svg";
import MoscowDefault from "@/assets/images/full/home/moscow-city-default.svg";
import ShipmentDefault from "@/assets/images/full/home/shipment-default.svg";
import Touch from "@/components/touch.vue";

const elements: Element[] = [
    {
        name: "management",
        position: {top: "520px", left: "948px"},
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
        position: {top: "-12px", left: "235px"},
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
        position: {top: "4px", left: "1135px"},
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
        position: {top: "95px", left: "1535px"},
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
const elements2: Element[] = [
    {
        name: "shipment",
        position: {top: "-17px", left: "-132px"},
        defaultIcon: ShipmentDefault,
        hoverIcon: ShipmentDefault,
        description: "",
        header: "",
        onClick: () => router.push("/"),
        tooltipPosition: {top: "0", left: "0"},
        tooltipIcon: HandTapIcon,
        defaultIconStyle: {width: "623px", height: "456px"},
        hoverIconStyle: {marginTop: "0", marginLeft: "0"},
        disabled: true,
    },
    {
        name: "moscow",
        position: {top: "230px", left: "110px"},
        defaultIcon: MoscowDefault,
        hoverIcon: MoscowDefault,
        description: "",
        header: "",
        onClick: () => router.push("/"),
        tooltipPosition: {top: "0", left: "0"},
        tooltipIcon: HandTapIcon,
        defaultIconStyle: {width: "700px", height: "793px"},
        hoverIconStyle: {marginTop: "0", marginLeft: "0"},
        disabled: true,
    },
]
</script>

<style lang="scss" scoped>
.content.home {
  position: relative;
  max-width: 3584px;
  min-width: 100vw;
  max-height: 1024px;
  min-height: 100vh;
  mix-blend-mode: normal;
  display: flex;
  background: #010010;

  .content-2560 {
    width: 2560px;
    background: url("@/assets/images/full/home/shadow-2560.svg") no-repeat 379px bottom, url("@/assets/images/full/home/road-2560.svg") no-repeat right bottom;
  }

  .content-1024 {
    width: 1024px;
    background: url("@/assets/images/full/home/road-1024.svg") no-repeat right bottom, url("@/assets/images/full/home/back-lines-1024.svg") no-repeat right top;
    mix-blend-mode: normal;
  }

  .highlight {
    position: absolute;
    width: 2696px;
    height: 1312px;
    left: calc(50vw - 2696px / 2 - 320px);
    top: calc(50vh - 1312px / 2);
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