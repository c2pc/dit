<template>
    <div class="content moscow-in-numbers">
        <iframe
                width="100%" height="100%" class="iframe"
                src="https://smart.mos.ru/map3d/#/map3d#coords2884768.301660128,2216813.924792929,5307406.795790154,359.9999999999996,-89.99990394382456,71084.4230560841"
        >
                </iframe>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.content {
    position: relative;
    max-width: 3584px;
    min-width: 100vw;
    max-height: 1024px;
    min-height: 100vh;

    .iframe{
        width: 100vw;
        height: 100vh;
        border: none;
    }
}
</style>