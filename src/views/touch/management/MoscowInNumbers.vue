<template>
    <div class="content moscow-in-numbers">
        <back :on-click="()=>router.push('/management')" :show-description="false" class="back-button" type="white"/>
        <Title class="title-button" title="Технологии для управления"/>
        <div class="elements">
            <block v-for="block in blocks" :disabled="true" :style="{width: `calc(100%/${block.width} - 14px)`}"
                   class="element">
                <div class="block-image" @click="block.onClick">
                    <div>
                        <img :src="block.defaultIcon" alt="" class="icon">
                    </div>
                    <span class="header">{{ block.title }}</span>
                </div>
            </block>
        </div>
    </div>
</template>

<script lang="ts" setup>

import Back from "@/components/back.vue";
import Block from "@/components/block.vue";
import BusinessIcon from "@/assets/images/touch/management/moscow_in_numbers/business.svg";
import CultureIcon from "@/assets/images/touch/management/moscow_in_numbers/culture.svg";
import DynamicIcon from "@/assets/images/touch/management/moscow_in_numbers/dinamic.svg";
import ExportIcon from "@/assets/images/touch/management/moscow_in_numbers/export.svg";
import IndustryIcon from "@/assets/images/touch/management/moscow_in_numbers/industry.svg";
import InnovationIcon from "@/assets/images/touch/management/moscow_in_numbers/innovation.svg";
import IntelligenceIcon from "@/assets/images/touch/management/moscow_in_numbers/intelligence.svg";
import InvestorsIcon from "@/assets/images/touch/management/moscow_in_numbers/investors.svg";
import RatingIcon from "@/assets/images/touch/management/moscow_in_numbers/rating.svg";
import RealStateIcon from "@/assets/images/touch/management/moscow_in_numbers/real_state.svg";
import RenovationIcon from "@/assets/images/touch/management/moscow_in_numbers/renovation.svg";
import StaffIcon from "@/assets/images/touch/management/moscow_in_numbers/staff.svg";
import TechnoParkIcon from "@/assets/images/touch/management/moscow_in_numbers/technopark.svg";
import VolunteersIcon from "@/assets/images/touch/management/moscow_in_numbers/volunteers.svg";
import YoungPeopleIcon from "@/assets/images/touch/management/moscow_in_numbers/young_people.svg";
import TouristIcon from "@/assets/images/touch/management/moscow_in_numbers/tourist.svg";
import router from "@/router";
import Title from "@/components/title.vue";
import {socket} from "@/main";

type Block = {
    width: number;
    defaultIcon: string;
    title: string;
    onClick: () => any,
}

const blocks: Block[] = [
    {
        title: "Цифровые сервисы для инвесторов",
        width: 5,
        defaultIcon: InvestorsIcon,
        onClick: () => socket.emit("pageTransition", "/management/moscow_in_numbers/dipp-cservices"),
    },
    {
        title: "Инвестиционная политика и помощь бизнесу",
        width: 5,
        defaultIcon: BusinessIcon,
        onClick: () => socket.emit("pageTransition", "/management/moscow_in_numbers/dipp-investpolicy"),
    },
    {
        title: "Динамика развития культурного досуга в городе Москве",
        width: 5,
        defaultIcon: CultureIcon,
        onClick: () => socket.emit("pageTransition", "/management/moscow_in_numbers/kultura-dosug"),
    },
    {
        title: "Анализ динамики креативных индустрий",
        width: 5,
        defaultIcon: DynamicIcon,
        onClick: () => socket.emit("pageTransition", "/management/moscow_in_numbers/dpir-create"),
    },
    {
        title: "Кадровый потенциал промышленности",
        width: 5,
        defaultIcon: StaffIcon,
        onClick: () => socket.emit("pageTransition", "/management/moscow_in_numbers/dipp-kpp/"),
    },
    {
        title: "Объекты нежилой недвижимости города Москвы",
        width: 10 / 3,
        defaultIcon: RealStateIcon,
        onClick: () => socket.emit("pageTransition", "/management/moscow_in_numbers/ggi"),
    },
    {
        title: "Общие сведения о социально ориентированных некоммерческих организациях Москвы",
        width: 10 / 3,
        defaultIcon: IntelligenceIcon,
        onClick: () => socket.emit("pageTransition", "/management/moscow_in_numbers/kos-nko"),
    },
    {
        title: "Москва в международных и национальных рейтингах",
        width: 5,
        defaultIcon: RatingIcon,
        onClick: () => socket.emit("pageTransition", "/management/moscow_in_numbers/dipp-moscow/"),
    },
    {
        title: "Открытая промышленность",
        width: 5,
        defaultIcon: IndustryIcon,
        onClick: () => socket.emit("pageTransition", "/management/moscow_in_numbers/dipp-industry"),
    },
    {
        title: "Молодежь Москвы",
        width: 7,
        defaultIcon: YoungPeopleIcon,
        onClick: () => socket.emit("pageTransition", "/management/moscow_in_numbers/kos-molodezhmsk"),
    },
    {
        title: "Развитие технопарков",
        width: 7,
        defaultIcon: TechnoParkIcon,
        onClick: () => socket.emit("pageTransition", "/management/moscow_in_numbers/dpir-technoparks"),
    },
    {
        title: "Общие сведения об экспорте",
        width: 7,
        defaultIcon: ExportIcon,
        onClick: () => socket.emit("pageTransition", "/management/moscow_in_numbers/dpir-export/"),
    },
    {
        title: "Программа реновации Москвы",
        width: 7,
        defaultIcon: RenovationIcon,
        onClick: () => socket.emit("pageTransition", "/management/moscow_in_numbers/dgp-renovation/"),
    },
    {
        title: "Волонтерская деятельность в Москве",
        width: 7,
        defaultIcon: VolunteersIcon,
        onClick: () => socket.emit("pageTransition", "/management/moscow_in_numbers/kos-volunteer"),
    },
    {
        title: "Инновационное развитие",
        width: 7,
        defaultIcon: InnovationIcon,
        onClick: () => socket.emit("pageTransition", "/management/moscow_in_numbers/dpir-innoagency"),
    },
    {
        title: "Туристический поток",
        width: 7,
        defaultIcon: TouristIcon,
        onClick: () => socket.emit("pageTransition", "/management/moscow_in_numbers/tourism-turpotok"),
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

  background: url("@/assets/images/touch/management/moscow_in_numbers/bg.png") no-repeat center center;
  mix-blend-mode: normal;
  padding: 243px 201px 20px 201px;

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
    margin: 0 -7px 0 -7px;

    .element {
      height: 230px;
      margin: 7px;
      width: calc(100% / 4 - 14px);


      .block-image {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 30px;

        .header {
          font-family: 'Golos UI VF';
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 24px;
          text-transform: uppercase;
          color: #FFFFFF;
          opacity: 0.8;
          text-shadow: 0px 0px 4px rgba(42, 246, 255, 0.25);
          margin-top: 16px;
        }
      }
    }
  }
}
</style>