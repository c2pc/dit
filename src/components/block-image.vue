<template>
    <div class="block-image">
        <div>
            <img :src="icon" alt="" class="icon">
        </div>
        <span class="header">{{ title }}</span>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    icon: string;
    title: string;
}>()
</script>

<style lang="scss" scoped>
.block-image {
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
    margin-top: 30px;
  }
}

</style>