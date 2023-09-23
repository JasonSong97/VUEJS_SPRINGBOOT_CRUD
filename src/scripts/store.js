// vuex 구현
import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
     account: {
          id: 0
     }
    }
  },
  mutations: {
     setAccount(state, payload){
          // payload에 id가 오면 state.account.id에 setting 한다는 것
          state.account.id = payload;
     }
  }
})

export default store;