import Vue from 'vue'
import Vuerouter from 'vue-router'
import index from '@/components/index.vue'
import Login from '@/components/Login/login'
import zhuce from '@/components/Login/zhuce.vue'
Vue.use(Vuerouter)

// 编写路由参数
export default new Vuerouter({
  routes: [{
    path: '/',
    component: index
  }, {
    path: '/login',
    component: Login
  }, {
    path: '/chuce',
    component: zhuce
  }]
})
