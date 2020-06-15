import Vue from 'vue'
import vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/public.css'
import '@/assets/css/reset.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(vuex)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
