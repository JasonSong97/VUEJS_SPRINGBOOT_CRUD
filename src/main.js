import { createApp } from 'vue'
import store from "@/scripts/store"
import router from "@/scripts/router";
import App from './App.vue'

// store(vuex)사용한다는 것
createApp(App).use(store).use(router).mount('#app') // 라우터를 사용함
 