<template>
    <div :class="type" class="btn" @click="onClick">
        <div class="content">
            <span class="title">Продолжить</span>
        </div>
    </div>
</template>

<script lang="ts" setup>

const props = defineProps<{
    type: string;
    onClick: () => any;
}>()
</script>

<style lang="scss" scoped>
.btn {
  width: 100%;
  border-radius: 10px;
  min-height: 49px;
  border: 0.2px solid transparent;
  display: flex;
  align-content: center;
  align-items: center;
  cursor: pointer;
  transition: .5s;
  justify-content: center;
    padding: 18px;

  .title {
    font-family: 'Golos UI VF';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
  }


  &.white {
    border: 0.2px solid #FFFFFF;
    transition: .5s;

    .title {
      color: #FFFFFF;
    }

    &:hover {
      background: linear-gradient(90deg, rgba(42, 177, 254, 0.85) 0%, rgba(5, 108, 236, 0.85) 39.75%, rgba(11, 55, 222, 0.85) 97.91%);
      backdrop-filter: blur(6.5px);
      border: 0.2px solid transparent;
      transition: .5s;
    }
  }
}

</style>