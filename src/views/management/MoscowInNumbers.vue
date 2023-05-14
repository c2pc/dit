<template>
    <div class="content moscow-in-numbers">
        <div class="back-button">
            <back position="left" type="white"/>
        </div>
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
import BusinessIcon from "@/assets/images/management/moscow_in_numbers/business.svg";
import CultureIcon from "@/assets/images/management/moscow_in_numbers/culture.svg";
import DynamicIcon from "@/assets/images/management/moscow_in_numbers/dinamic.svg";
import ExportIcon from "@/assets/images/management/moscow_in_numbers/export.svg";
import IndustryIcon from "@/assets/images/management/moscow_in_numbers/industry.svg";
import InnovationIcon from "@/assets/images/management/moscow_in_numbers/innovation.svg";
import IntelligenceIcon from "@/assets/images/management/moscow_in_numbers/intelligence.svg";
import InvestorsIcon from "@/assets/images/management/moscow_in_numbers/investors.svg";
import RatingIcon from "@/assets/images/management/moscow_in_numbers/rating.svg";
import RealStateIcon from "@/assets/images/management/moscow_in_numbers/real_state.svg";
import RenovationIcon from "@/assets/images/management/moscow_in_numbers/renovation.svg";
import StaffIcon from "@/assets/images/management/moscow_in_numbers/staff.svg";
import TechnoParkIcon from "@/assets/images/management/moscow_in_numbers/technopark.svg";
import VolunteersIcon from "@/assets/images/management/moscow_in_numbers/volunteers.svg";
import YoungPeopleIcon from "@/assets/images/management/moscow_in_numbers/young_people.svg";
import router from "@/router";

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
        onClick: () => router.push("/management/moscow_in_numbers/business"),
    },
    {
        title: "Инвестиционная политика и помощь бизнесу",
        width: 5,
        defaultIcon: BusinessIcon,
        onClick: () => router.push("/management/moscow_in_numbers/business"),
    },
    {
        title: "Динамика развития культурного досуга в городе Москве",
        width: 5,
        defaultIcon: CultureIcon,
        onClick: () => router.push("/management/moscow_in_numbers/business"),
    },
    {
        title: "Анализ динамики креативных индустрий",
        width: 5,
        defaultIcon: DynamicIcon,
        onClick: () => router.push("/management/moscow_in_numbers/business"),
    },
    {
        title: "Кадровый потенциал промышленности",
        width: 5,
        defaultIcon: StaffIcon,
        onClick: () => router.push("/management/moscow_in_numbers/business"),
    },
    {
        title: "Объекты нежилой недвижимости города Москвы",
        width: 10 / 3,
        defaultIcon: RealStateIcon,
        onClick: () => router.push("/management/moscow_in_numbers/business"),
    },
    {
        title: "Общие сведения о социально ориентированных некоммерческих организациях Москвы",
        width: 10 / 3,
        defaultIcon: IntelligenceIcon,
        onClick: () => router.push("/management/moscow_in_numbers/business"),
    },
    {
        title: "Москва в международных и национальных рейтингах",
        width: 5,
        defaultIcon: RatingIcon,
        onClick: () => router.push("/management/moscow_in_numbers/business"),
    },
    {
        title: "Открытая промышленность",
        width: 5,
        defaultIcon: IndustryIcon,
        onClick: () => router.push("/management/moscow_in_numbers/business"),
    },
    {
        title: "Молодежь Москвы",
        width: 6,
        defaultIcon: YoungPeopleIcon,
        onClick: () => router.push("/management/moscow_in_numbers/business"),
    },
    {
        title: "Развитие технопарков",
        width: 6,
        defaultIcon: TechnoParkIcon,
        onClick: () => router.push("/management/moscow_in_numbers/business"),
    },
    {
        title: "Общие сведения об экспорте",
        width: 6,
        defaultIcon: ExportIcon,
        onClick: () => router.push("/management/moscow_in_numbers/business"),
    },
    {
        title: "Программа реновации Москвы",
        width: 6,
        defaultIcon: RenovationIcon,
        onClick: () => router.push("/management/moscow_in_numbers/business"),
    },
    {
        title: "Волонтерская деятельность в Москве",
        width: 6,
        defaultIcon: VolunteersIcon,
        onClick: () => router.push("/management/moscow_in_numbers/business"),
    },
    {
        title: "Инновационное развитие",
        width: 6,
        defaultIcon: InnovationIcon,
        onClick: () => router.push("/management/moscow_in_numbers/business"),
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

  background: url("@/assets/images/management/moscow_in_numbers/bg.png") no-repeat center center;
  mix-blend-mode: normal;
  padding: 156px 140px;


  .elements {
    display: flex;
    flex-wrap: wrap;
    margin: 57px -7px 0 -7px;

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