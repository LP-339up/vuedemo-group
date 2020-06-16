import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 登录界面没有底部和搜索栏 0表示没有 1表示有
    isLogin: 1
  },
  mutations: {
    changeisLohin (state, c) {
      state.isLogin = c
    }
  }
})
