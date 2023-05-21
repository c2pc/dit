import './assets/styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { io } from 'socket.io-client'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const socket = io('http://localhost:8080') // Замените URL на ваш серверный адрес

socket.on('pageTransition', (nextPage) => {
    router.push(nextPage)
})

app.config.globalProperties.$socket = socket

app.mount('#app')