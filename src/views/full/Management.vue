<template>
    <div class="content">
        <div class="highlight"></div>
        <div class="content-2560">
            <Title class="title-button" title="Технологии для управления"/>
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
                            :disabled="true"
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
    </div>
</template>

<script lang="ts" setup>
import {Element} from "@/types/element";
import router from "@/router";
import Touch from "@/components/touch.vue";
import DigitalTwinDefault from "@/assets/images/full/management/digital_twin-default.png";
import DigitalTwinHover from "@/assets/images/full/management/digital_twin-hover.png";
import MapTrifold from "@/assets/images/full/management/maptrifold.svg";
import DigitalTwinMetaDefault from "@/assets/images/full/management/digital_twin_meta-default.png";
import DigitalTwinMetaHover from "@/assets/images/full/management/digital_twin_meta-hover.png";
import GlobeHemisphereWestIcon from "@/assets/images/full/management/globeHemisphereWest.svg";
import MoscowInNumbersDefault from "@/assets/images/full/management/moscow_in_numbers-default.png";
import MoscowInNumbersHover from "@/assets/images/full/management/moscow_in_numbers-hover.png";
import ListNumbersIcon from "@/assets/images/full/management/listNumbers.svg";
import MoshubDefault from "@/assets/images/full/management/moshub-default.png";
import MoshubHover from "@/assets/images/full/management/moshub-hover.png";
import CodeIcon from "@/assets/images/full/management/code.svg";
import CubeDefault from "@/assets/images/full/management/cube-default.svg";
import DiagramDefault from "@/assets/images/full/management/diagram-default.svg";
import Title from "@/components/title.vue";

const elements: Element[] = [
    {
        name: "digital_twin",
        position: {top: "-106px", left: "1200px"},
        defaultIcon: DigitalTwinDefault,
        hoverIcon: DigitalTwinHover,
        description: "",
        header: "Цифровой двойник",
        onClick: () => router.push("/digital_twin"),
        tooltipPosition: {top: "150px", left: "-283px"},
        tooltipIcon: MapTrifold,
        defaultIconStyle: {width: "1031px", height: "629px"},
        hoverIconStyle: {marginTop: "-174px", marginLeft: "-70px"},
    },
    {
        name: "digital_twin_meta",
        position: {top: "348px", left: "504px"},
        defaultIcon: DigitalTwinMetaDefault,
        hoverIcon: DigitalTwinMetaHover,
        description: "",
        header: "Цифровой двойник (Мета-версия)",
        onClick: () => router.push("/digital_twin_meta"),
        tooltipPosition: {top: "-205px", left: "370px"},
        tooltipIcon: GlobeHemisphereWestIcon,
        defaultIconStyle: {width: "762px", height: "589px"},
        hoverIconStyle: {marginTop: " -14px", marginLeft: "68px"},
    },
    {
        name: "moscow_in_numbers",
        position: {top: "195px", left: "1676px"},
        defaultIcon: MoscowInNumbersDefault,
        hoverIcon: MoscowInNumbersHover,
        description: "",
        header: "Москва в цифрах",
        onClick: () => router.push("/management/moscow_in_numbers"),
        tooltipPosition: {top: "-115px", left: "62px"},
        tooltipIcon: ListNumbersIcon,
        defaultIconStyle: {width: "782px", height: "815px"},
        hoverIconStyle: {marginLeft: "4px"},
    },
    {
        name: "moshub",
        position: {top: "625px", left: "1060px"},
        defaultIcon: MoshubDefault,
        hoverIcon: MoshubHover,
        description: "",
        header: "mos.hub",
        onClick: () => router.push("/moshub"),
        tooltipPosition: {top: "-125px", left: "460px"},
        tooltipIcon: CodeIcon,
        defaultIconStyle: {width: "825px", height: "569px"},
        hoverIconStyle: {marginLeft: "165px"},
    },
]
const elements2: Element[] = [
    {
        name: "cube",
        position: {top: "620px", left: "-170px"},
        defaultIcon: CubeDefault,
        hoverIcon: CubeDefault,
        description: "",
        header: "",
        onClick: () => router.push("/"),
        tooltipPosition: {top: "0", left: "0"},
        tooltipIcon: MapTrifold,
        defaultIconStyle: {width: "549px", height: "458px"},
        hoverIconStyle: {marginTop: "0", marginLeft: "0"},
        disabled: true
    },
    {
        name: "diagram",
        position: {top: "0px", left: "360px"},
        defaultIcon: DiagramDefault,
        hoverIcon: DiagramDefault,
        description: "",
        header: "",
        onClick: () => router.push("/"),
        tooltipPosition: {top: "0", left: "0"},
        tooltipIcon: MapTrifold,
        defaultIconStyle: {width: "615px", height: "727px"},
        hoverIconStyle: {marginTop: "0", marginLeft: "0"},
        disabled: true
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
  background: url("@/assets/images/full/management/cloud.svg") no-repeat left top, #010010;

  .content-2560 {
    width: 2560px;
    background: url("@/assets/images/full/management/road-2560.svg") no-repeat right bottom;

      .title-button {
          position: absolute;
          z-index: 2;
          left: 522px;
          top: 103px;
      }
  }

  .content-1024 {
    width: 1024px;
    background: url("@/assets/images/full/management/net.svg") no-repeat right top, url("@/assets/images/full/management/road-1024.svg") no-repeat right bottom;

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