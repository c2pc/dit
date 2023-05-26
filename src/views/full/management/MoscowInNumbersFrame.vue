<template>
    <div class="content">
        <iframe :src="'https://sc.bi.mos.ru/cipr/#/'+path" width="100%" height="100%" class="iframe"/>
    </div>
</template>

<script lang="ts" setup>
import {onBeforeMount, ref} from "vue";
import {useRoute} from "vue-router"

const path = ref('')
const route = useRoute()

onBeforeMount(()=>{
    if(route.params.path){
        path.value = route.params.path.replaceAll("-", "/")
    }
})
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