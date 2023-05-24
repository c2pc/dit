import {createRouter, createWebHistory} from 'vue-router';
import {io} from 'socket.io-client';
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
            path: '/management/moscow_in_numbers',
            name: 'moscow_in_numbers',
            component: responsiveRoute({
                lg: () => import('@/views/touch/management/MoscowInNumbers.vue'),
                xl: () => import('@/views/full/management/MoscowInNumbers.vue')
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
            path: '/video',
            name: 'video',
            component: responsiveRoute({
                lg: () => import('@/views/touch/Video.vue'),
                xl: () => import('@/views/full/Video.vue')
            })
        },
        {
            path: '/business',
            name: 'business',
            component: Business
        },
        {
            path: '/residents',
            name: 'residents',
            component: responsiveRoute({
                lg: () => import('@/views/touch/Resident.vue'),
                xl: () => import('@/views/full/Resident.vue')
            })
        },
    ]
});

const socket = io('/socket.io');

// Обработчик события изменения маршрута на сервере
socket.on('pageTransition', (nextPage) => {
    router.push(nextPage);
});

// Обработчик события изменения маршрута на клиенте
router.afterEach((to) => {
    socket.emit('pageTransition', to.fullPath);
});

export default router;