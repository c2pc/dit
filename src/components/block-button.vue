<template>
    <div class="block-button">
        <span class="header">{{ title }}</span>
        <span class="description">{{ description }}</span>
        <btn :on-click="onClick" type="white" class="btn">ПЕРЕЙТИ</btn>
    </div>
</template>

<script lang="ts" setup>
import Btn from "@/components/btn.vue";


const props = defineProps<{
    title: string;
    description: string;
    onClick: () => any,
}>()
</script>

<style lang="scss" scoped>
.block-button {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px;

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
  }

  .description {
    font-family: 'Golos UI VF';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    opacity: 0.8;
    text-shadow: 0px 0px 4px rgba(42, 246, 255, 0.25);
    margin-top: 16px;
  }
    .btn{
        margin-top: 24px;
    }
}

</style>