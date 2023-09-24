// vuex 구현
import { createStore } from 'vuex'

const store = createStore({
   // vuex 생성 -> Vuex 스토어: 애플리케이션 전역 상태관리
  state () {
    return {
     account: {
          id: 0 // 초기화
     }
    }
  },

  // state(상태) 변경 메소드
  mutations: {
     setAccount(state, payload){
          // payload에 id가 오면 state.account.id에 setting 한다는 것
          state.account.id = payload;
     }
  }
})

export default store;