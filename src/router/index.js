import Vue from 'vue'
import Vuerouter from 'vue-router'
import index from '@/components/index.vue'
import Login from '@/components/Login/login'
import zhuce from '@/components/Login/zhuce.vue'
import xingyemc from '@/components/content/jiankang/xingyemc.vue'
import xingytsun from '@/components/content/jiankang/xingytsun.vue'
import xingytou from '@/components/content/jiankang/xingytou.vue'
import xingtsunto from '@/components/content/jiankang/xingtsunto.vue'
import gchang from '@/components/content/shequ/gchang.vue'
import huodong from '@/components/content/shequ/huodong.vue'
import mianfeichoujiang from '@/components/content/shequ/mianfeichoujiang.vue'
import rizhi from '@/components/content/shequ/rizhi.vue'
import xianshanghuodong from '@/components/content/shequ/xianshanghuodong.vue'
import xingytxqym from '@/components/content/jiankang/xingytxqym.vue'
import Menber from '@/components/member/Index/index.vue'
import MenberIndex from '@/components/member/Right/menberc.vue'
import Menu from '@/components/member/Right/menutwo.vue'
import Accoun from '@/components/member/Right/accountsetting.vue'
import Collect from '@/components/member/Right/collect.vue'
import Menuone from '@/components/member/Right/menuone.vue'
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
    path: '/zhuce',
    component: zhuce
  }, {
    path: '/xingyemc',
    component: xingyemc
  }, {
    path: '/xingytsun',
    component: xingytsun
  }, {
    path: '/xingytou',
    component: xingytou
  }, {
    path: '/xingtsunto',
    component: xingtsunto
  }, {
    path: '/gchang',
    component: gchang
  }, {
    path: '/huodong',
    component: huodong
  }, {
    path: '/mianfeichoujiang',
    component: mianfeichoujiang
  }, {
    path: '/rizhi',
    component: rizhi
  }, {
    path: '/xianshanghuodong',
    component: xianshanghuodong
  }, {
    path: '/xingytxqym',
    component: xingytxqym
  }, {
    path: '/menber',
    component: Menber, 
    children: [{
      path: '',
      component: MenberIndex
    }, {
      path: '/menutwo',
      component: Menu
    }, {
      path: '/accountsetting',
      component: Accoun
    }, {
      path: '/collect',
      component: Collect
    }, {
      path: 'menuone',
      component: Menuone
    }]
  }]
})
