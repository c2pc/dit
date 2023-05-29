<template>
    <div class="content">
        <back :on-click="()=>router.push('/')" :show-description="false" class="back-button" type="white"/>
        <Title class="title-button" title="Технологии для управления"/>
        <div class="highlight"></div>
        <div class="elements">
            <div v-for="el in elements" :style="{...el.position}" class="element">
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
</template>

<script lang="ts" setup>
import Back from "@/components/back.vue";
import Touch from "@/components/touch.vue";
import {Element} from "@/types/element";
import router from "@/router";
import DigitalTwinDefault from "@/assets/images/touch/management/digital_twin-default.png";
import DigitalTwinHover from "@/assets/images/touch/management/digital_twin-hover.png";
import MapTrifold from "@/assets/images/touch/management/maptrifold.svg";
import DigitalTwinMetaDefault from "@/assets/images/touch/management/digital_twin_meta-default.png";
import DigitalTwinMetaHover from "@/assets/images/touch/management/digital_twin_meta-hover.png";
import GlobeHemisphereWestIcon from "@/assets/images/touch/management/globeHemisphereWest.svg";
import MoscowInNumbersDefault from "@/assets/images/touch/management/moscow_in_numbers-default.png";
import MoscowInNumbersHover from "@/assets/images/touch/management/moscow_in_numbers-hover.png";
import ListNumbersIcon from "@/assets/images/touch/management/listNumbers.svg";
import MoshubDefault from "@/assets/images/touch/management/moshub-default.png";
import MoshubHover from "@/assets/images/touch/management/moshub-hover.png";
import CodeIcon from "@/assets/images/touch/management/code.svg";
import Title from "@/components/title.vue";
import {socket} from "@/main";

const elements: Element[] = [
    {
        name: "digital_twin",
        position: {top: "-106px", left: "662px"},
        defaultIcon: DigitalTwinDefault,
        hoverIcon: DigitalTwinHover,
        description: "Уникальная платформа, которая помогает руководству столицы принимать управленческие решения и контролировать ход реализации значимых городских проектов. В основе Цифрового двойника города – фотограмметрическая модель (точная 3D-копия в виртуальной реальности) Москвы, на которую нанесены все сети инженерных и транспортных коммуникаций.",
        header: "Цифровой двойник",
        onClick: () => socket.emit("pageTransition", "/management/digital_twin"),
        tooltipPosition: {top: "150px", left: "-283px"},
        tooltipIcon: MapTrifold,
        defaultIconStyle: {width: "1031px", height: "629px"},
        hoverIconStyle: {marginTop: "-174px", marginLeft: "-70px"},
        disabled: false,
    },
    {
        name: "digital_twin_meta",
        position: {top: "348px", left: "-37px"},
        defaultIcon: DigitalTwinMetaDefault,
        hoverIcon: DigitalTwinMetaHover,
        description: "В рамках развития Цифрового двойника города была создана высококачественная многофункциональная цифровая 3D-модель Москвы на базе современного игрового движка. Благодаря этому удалось получить принципиально новое качество изображения зданий и городских объектов, а также ускорить все технические процессы (загрузка, просмотр объектов, операции с пространственными данными) в два раза. В перспективе именно эта версия Цифрового двойника будет использоваться при принятии управленческих решений.",
        header: "ЦИФРОВОЙ ДВОЙНИК 3.0",
        onClick: () => socket.emit("pageTransition", "/management/digital_twin_meta"),
        tooltipPosition: {top: "-205px", left: "370px"},
        tooltipIcon: GlobeHemisphereWestIcon,
        defaultIconStyle: {width: "762px", height: "589px"},
        hoverIconStyle: {marginTop: " -14px", marginLeft: "68px"},
        disabled: true,
    },
    {
        name: "moscow_in_numbers",
        position: {top: "195px", left: "1138px"},
        defaultIcon: MoscowInNumbersDefault,
        hoverIcon: MoscowInNumbersHover,
        description: "Ключевые показатели отраслевого развития Москвы.",
        header: "Москва в цифрах",
        onClick: () => router.push("/management/moscow_in_numbers"),
        tooltipPosition: {top: "-115px", left: "62px"},
        tooltipIcon: ListNumbersIcon,
        defaultIconStyle: {width: "782px", height: "815px"},
        hoverIconStyle: {marginLeft: "4px"},
        disabled: false,
    },
    {
        name: "moshub",
        position: {top: "625px", left: "523px"},
        defaultIcon: MoshubDefault,
        hoverIcon: MoshubHover,
        description: "Модернизированный городской репозиторий программного обеспечения, в котором хранится исходный код городских сервисов, информационных систем и отраслевых платформ. Mos.Hub будет открыт для всего российского отраслевого сообщества. Разработчики смогут хранить в нем свой код, переиспользовать отдельные элементы городских ИТ-проектов для создания собственных решений и пользоваться дополнительными полезными функциями.",
        header: "mos.hub",
        onClick: () => router.push("/management/moshub"),
        tooltipPosition: {top: "-125px", left: "460px"},
        tooltipIcon: CodeIcon,
        defaultIconStyle: {width: "825px", height: "569px"},
        hoverIconStyle: {marginLeft: "165px"},
        disabled: false,
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

  background: url("@/assets/images/touch/management/shadow.svg") no-repeat left bottom, url("@/assets/images/touch/management/road.svg") no-repeat center center, #010010;
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