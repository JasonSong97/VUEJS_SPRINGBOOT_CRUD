import {createRouter, createWebHistory} from 'vue-router/dist/vue-router';
import Home from "@/pages/Home";
import Login from "@/pages/Login";

const routes = [
     // / 경로로 오면 Home으로 보냄
     {path:'/', component: Home},
     // /login 경로로 오면 Login으로 보냄
     {path:'/login', component: Login}
]

const router = createRouter({
     history: createWebHistory(), 
     routes
})

export default router;