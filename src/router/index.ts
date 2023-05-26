import {createRouter, createWebHistory} from 'vue-router';
import {io} from 'socket.io-client';
import responsiveRoute from "@/helpers/responsiveRoute";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: '/',
            component: responsiveRoute({
                lg: () => import('@/views/touch/Home.vue'),
                xl: () => import('@/views/full/Home.vue')
            })
        },
        {
            path: '/management',
            name: '/management',
            component: responsiveRoute({
                lg: () => import('@/views/touch/Management.vue'),
                xl: () => import('@/views/full/Management.vue')
            })
        },
        {
            path: '/management/moscow_in_numbers',
            name: '/management/moscow_in_numbers',
            component: responsiveRoute({
                lg: () => import('@/views/touch/management/MoscowInNumbers.vue'),
                xl: () => import('@/views/full/management/MoscowInNumbers.vue')
            })
        },
        {
            path: '/management/moscow_in_numbers/:path',
            name: '/management/moscow_in_numbers/frame',
            component: responsiveRoute({
                xl: () => import('@/views/full/management/MoscowInNumbersFrame.vue')
            })
        },
        {
            path: '/management/digital_twin',
            name: '/management/digital_twin',
            component: responsiveRoute({
                xl: () => import('@/views/full/management/DigitalTwin.vue')
            })
        },
        {
            path: '/management/moshub',
            name: '/management/moshub',
            component: responsiveRoute({
                lg: () => import('@/views/touch/management/MosHub.vue'),
                xl: () => import('@/views/full/management/MosHub.vue')
            })
        },
        {
            path: '/video',
            name: '/video',
            component: responsiveRoute({
                lg: () => import('@/views/touch/Video.vue'),
                xl: () => import('@/views/full/Video.vue')
            })
        },
        {
            path: '/business',
            name: '/business',
            component: responsiveRoute({
                lg: () => import('@/views/touch/Business.vue'),
                xl: () => import('@/views/full/Business.vue')
            }),
        },
        {
            path: '/residents',
            name: '/residents',
            component: responsiveRoute({
                lg: () => import('@/views/touch/Resident.vue'),
                xl: () => import('@/views/full/Resident.vue')
            })
        },
        {
            path: '/residents/charity',
            name: '/residents/charity',
            component: responsiveRoute({
                xl: () => import('@/views/full/resident/Charity.vue')
            }),
        },
        {
            path: '/residents/exploreMoscow',
            name: '/residents/exploreMoscow',
            component: responsiveRoute({
                xl: () => import('@/views/full/resident/ExploreMoscow.vue'),
                lg: () => import('@/views/touch/resident/ExploreMoscow.vue')
            }),
        },
        {
            path: '/residents/moscowLibraries',
            name: '/residents/moscowLibraries',
            component: responsiveRoute({
                xl: () => import('@/views/full/resident/MoscowLibraries.vue')
            }),
        },
        {
            path: '/residents/movingInMoscow',
            name: '/residents/movingInMoscow',
            component: responsiveRoute({
                xl: () => import('@/views/full/resident/MovingInMoscow.vue')
            }),
        },
        {
            path: '/residents/russPass',
            name: '/residents/russPass',
            component: responsiveRoute({
                xl: () => import('@/views/full/resident/RussPass.vue')
            }),
        },
        {
            path: '/residents/togetherWithCulture',
            name: '/residents/togetherWithCulture',
            component: responsiveRoute({
                xl: () => import('@/views/full/resident/TogetherWithCulture.vue')
            }),
        },
        {
            path: '/residents/unnecessaryThings',
            name: '/residents/unnecessaryThings',
            component: responsiveRoute({
                xl: () => import('@/views/full/resident/UnnecessaryThings.vue')
            }),
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