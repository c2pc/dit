import {createRouter, createWebHistory} from 'vue-router'
import Video from "@/views/touch/Video.vue";
import Business from "@/views/touch/Business.vue";
import Resident from "@/views/touch/Resident.vue";
import responsiveRoute from "@/helpers/responsiveRoute";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: responsiveRoute({
                lg: () => import('@/views/touch/Home.vue'),
                xl: () => import('@/views/full/Home.vue')
            })
        },
        {
            path: '/management',
            name: 'management',
            component: responsiveRoute({
                lg: () => import('@/views/touch/Management.vue'),
                xl: () => import('@/views/full/Management.vue')
            })
        },
        {
            path: '/management/moscow_in_numbers',
            name: 'moscow_in_numbers',
            component: responsiveRoute({
                lg: () => import('@/views/touch/management/MoscowInNumbers.vue'),
                xl: () => import('@/views/full/management/MoscowInNumbers.vue')
            })
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
