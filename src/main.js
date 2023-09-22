import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import Home from "@/pages/Home";

const routes = [
     // / 경로로 오면 Home으로 보냄
     {path:'/', component: Home}
]

const router = createRouter({
     history: createWebHistory(), 
     routes
})

createApp(App).use(router).mount('#app') // 라우터를 사용함
 