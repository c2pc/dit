import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import Management from '@/views/Management.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/management',
            name: 'management',
            component: Management
        }
    ]
})

export default router
