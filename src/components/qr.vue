<template>
    <div class="qr">
        <div v-if="props.showDescription" class="description">
            <div class="header">{{ props.header }}</div>
            <div class="text">{{ props.text }}</div>
        </div>
        <div :class="showDescription ? '' : 'column'" class="block">
            <div class="img"><img :src="qr" alt="" class="qr"></div>
            <div class="action">{{ props.action }}</div>
        </div>
    </div>
</template>

<script lang="ts" setup>

const props = defineProps<{
    qr: string;
    showDescription?: boolean
    header?: string
    text?: string
    action: string
}>()
</script>

<style lang="scss" scoped>
.qr {
  width: 100%;
  height: 100%;

  .description {
    margin-bottom: 30px;

    .header {
      font-family: 'Golos UI VF';
      font-style: normal;
      font-weight: 400;
      font-size: 44px;
      line-height: 53px;
      text-transform: uppercase;
      color: #FFFFFF;
      margin-bottom: 30px;
    }

    .text {
      font-family: 'Golos UI VF';
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      line-height: 38px;
      color: #FFFFFF;
    }
  }

  .block {
    background: linear-gradient(90deg, rgba(42, 177, 254, 0.1) 0%, rgba(5, 108, 236, 0.1) 39.75%, rgba(11, 55, 222, 0.1) 97.91%);
    backdrop-filter: blur(6.5px);
    border-radius: 10px;
    padding: 40px 56.5px;
    display: flex;
    align-items: center;
    min-height: 420px;
    height: 100%;

    &.column {
      flex-direction: column-reverse;
      justify-content: center;
      padding: 41px 33px;

      .action {
        margin-left: 0;
        margin-bottom: 30px;
        text-align: center;
        padding: 0 14px;
        flex: none;
        order: 0;
        flex-grow: 0;
      }
    }

    .img {
      border-radius: 10px;
      background: #000B33;

      img {
        width: 340px;
        height: 340px;
      }
    }

    .action {
      font-family: 'Golos UI VF';
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      line-height: 36px;
      text-transform: uppercase;
      color: #FFFFFF;
      text-shadow: 0px 0px 4px rgba(42, 246, 255, 0.25);
      margin-left: 42px;
    }
  }
}

</style>