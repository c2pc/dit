<template>
    <div class="content home">
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
import {socket} from "@/main";
import {onBeforeUnmount, onMounted, ref} from "vue";
import {useRoute} from "vue-router";

const elements: Element[] = [
    {
        name: "management",
        position: {top: "543px", left: "660px"},
        defaultIcon: ManagementDefault,
        hoverIcon: ManagementHover,
        description: "Москва применяет технологии во всех отраслях городского управления. Благодаря цифровым проектам быстрее обрабатываются и анализируются данные, из множества решений выбираются самые взвешенные, взаимодействие становится простым, прозрачным и эффективным.",
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
        description: "Столичные цифровые сервисы помогают предпринимателям решать задачи и реализовывать инвестиционные проекты, упрощают взаимодействие с ведомствами, позволяют участвовать в госзакупках и создавать инновационные продукты.",
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
        description: "Ежегодно Москва реализует более 300 IT-проектов, являясь одним из мировых технологических лидеров. Цифровые решения помогают управлять мегаполисом, делать эффективнее работу городских ведомств, а также предоставлять жителям и бизнесу сотни онлайн-услуг и сервисов.",
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
        description: "Город подстраивается под каждого жителя. Москва предлагает горожанину персональные сервисы и информацию в режиме 24/7/365 исходя именно из его интересов и жизненной ситуации. Благодаря этому горожане все чаще предпочитают решать повседневные задачи именно онлайн.",
        header: "Технологии для жителей",
        onClick: () => router.push("/residents"),
        tooltipPosition: {top: "-38px", left: "-56px"},
        tooltipIcon: PersonIcon,
        defaultIconStyle: {width: "760px", height: "732px", marginTop: "114px"},
        hoverIconStyle: {},
    },
]

let timeout1 = null
const show1 = ref(false)

const addEventListener1 = () => {
    window.addEventListener('mousedown', touch1);
    window.addEventListener('mousemove', touch1);
    window.addEventListener('touchstart', touch1);
    window.addEventListener('keydown', touch1);
}

const removeEventListener1 = () => {
    window.removeEventListener('mousedown', touch1);
    window.removeEventListener('mousemove', touch1);
    window.removeEventListener('touchstart', touch1);
    window.removeEventListener('keydown', touch1);
    clearTimeout(timeout1)
    show1.value = false
}

const showVideo = (): void => {
    socket.emit("pageTransition", "/background")
    show1.value = true
}

const hideVideo1 = (): void => {
    socket.emit("pageTransition", "/")
    show1.value = false
}

const touch1 = (): void => {
    if (show1.value) {
        hideVideo1()
    } else {
        clearTimeout(timeout1)
        timeout1 = setTimeout(showVideo, 5000)
    }
}

onMounted(addEventListener1)
onMounted(touch1)
onBeforeUnmount(removeEventListener1)
</script>

<style lang="scss" scoped>
.content {
  position: relative;
  max-width: 1920px;
  min-width: 100vw;
  max-height: 1080px;
  min-height: 100vh;

  background: url("@/assets/images/touch/home/shadow.svg") no-repeat right bottom, url("@/assets/images/touch/home/road.svg") no-repeat center center, #010010;
  mix-blend-mode: normal;

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