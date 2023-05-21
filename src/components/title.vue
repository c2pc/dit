<template>
    <div class="title">{{ title }}</div>
</template>

<script lang="ts" setup>

const props = defineProps<{
    title: string;
}>()
</script>

<style lang="scss" scoped>

.title {
  font-family: 'Golos UI VF';
  font-style: normal;
  font-weight: 400;
  font-size: 44px;
  line-height: 53px;
  text-transform: uppercase;
  color: #FFFFFF;
  text-shadow: 0px 0px 10px rgba(42, 246, 255, 0.3);
}

</style>