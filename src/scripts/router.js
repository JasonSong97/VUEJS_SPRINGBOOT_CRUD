import {createRouter, createWebHistory} from 'vue-router/dist/vue-router';
import Home from "@/pages/Home";
import Login from "@/pages/Login";

const routes = [
     // / 경로로 오면 Home으로 보냄
     {path:'/', component: Home},
     // /login 경로로 오면 Login으로 보냄
     {path:'/login', component: Login}
]

// 라우터 생성
const router = createRouter({
     // 브라우저의 기록을 사용하여 라우팅을 관리
     history: createWebHistory(), 
     // 위의 경로들
     routes
})

export default router;