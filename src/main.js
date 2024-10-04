import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import router from '@/router/routeur.js'

const vueApp = createApp(App)

const pinia = createPinia()

vueApp.use(pinia)
vueApp.use(router)

vueApp.mount('#app')