import {createRouter, createWebHistory} from 'vue-router'
import HomeTouch from '@/views/touch/Home.vue'
import HomeFull from '@/views/full/Home.vue'
import ManagementTouch from '@/views/touch/Management.vue'
import ManagementFull from '@/views/full/Management.vue'
import Video from "@/views/touch/Video.vue";
import Business from "@/views/touch/Business.vue";
import Resident from "@/views/touch/Resident.vue";
import MoscowInNumbers from "@/views/touch/management/MoscowInNumbers.vue";
import responsiveRoute from "@/helpers/responsiveRoute";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: responsiveRoute({
                lg: () => HomeTouch,
                xl: () => HomeFull
            })
        },
        {
            path: '/management',
            name: 'management',
            component: responsiveRoute({
                lg: () => ManagementTouch,
                xl: () => ManagementFull
            })
        },
        {
            path: '/management/moscow_in_numbers',
            name: 'moscow_in_numbers',
            component: MoscowInNumbers
        },
        {
            path: '/video',
            name: 'video',
            component: Video
        },
        {
            path: '/business',
            name: 'business',
            component: Business
        },
        {
            path: '/residents',
            name: 'residents',
            component: Resident
        },
    ]
})

export default router
