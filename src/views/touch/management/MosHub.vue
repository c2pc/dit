<template>
    <div class="content moshub">
        <iframe
            src="https://hub.mos.ru"
            height="100%"
            width="100%"
            class="iframe"
        ></iframe>
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
        height: 100vh;
        width: 100vw;
    }
}
</style>