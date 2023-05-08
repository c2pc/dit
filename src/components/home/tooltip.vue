<template>
    <div class="tooltip">
        <div class="header-container">
            <img alt="" class="icon" src="../../assets/images/home/building.svg">
            <span class="header">{{ header }}</span>
            <span class="description">{{ description }}</span>
        </div>
        <button class="btn" @click="onClick">Продолжить</button>
    </div>
</template>

<script lang="ts" setup>

const props = defineProps<{
    header: string;
    description: string;
    onClick?: () => any;
}>()
</script>

<style lang="scss" scoped>
.tooltip {
  width: 653px;
  min-height: 300px;
  background: linear-gradient(90deg, rgba(42, 177, 254, 0.3) 0%, rgba(5, 108, 236, 0.3) 39.75%, rgba(11, 55, 222, 0.3) 97.91%);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 30px 60px;
  gap: 20px;
  cursor: pointer;

  .header-container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    height: 100%;

    .icon {
      height: 32px;
      width: 32px;
    }

    .header {
      margin-top: 20px;
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
      margin-top: 20px;
      font-family: 'Golos UI VF';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      color: #FFFFFF;
      opacity: 0.8;
      text-shadow: 0px 0px 4px rgba(42, 246, 255, 0.25);
    }
  }

  .btn {
    background: transparent;
    border: 0.2px solid #FFFFFF;
    border-radius: 10px;
    filter: drop-shadow(0px 0px 4px rgba(0, 132, 255, 0.5));
    font-family: 'Golos UI VF';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
    min-width: 200px;
    height: 60px;
    cursor: pointer;

    &:hover {
      background: linear-gradient(90deg, rgba(42, 177, 254, 0.85) 0%, rgba(5, 108, 236, 0.85) 39.75%, rgba(11, 55, 222, 0.85) 97.91%);
      backdrop-filter: blur(6.5px);
      border: none;
    }
  }
}

</style>