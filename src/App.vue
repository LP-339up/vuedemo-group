<template>
  <div id="app">
    <!-- 头部和导航栏 -->
  <Top></Top>

     <!-- 头部和导航栏结束 -->

  <router-view></router-view>

  <Foot v-if="staus == 1"></Foot>
  </div>
</template>

<script>
import Top from '@/components/public/top.vue'
// import daohang from '@/components/public/top-daohang'
import Foot from '@/components/public/foot.vue'
export default {
  components: {
    Top,
    // daohang,
    Foot
  },
  data () {
    return {}
  },
  computed: {
    staus () {
      return this.$store.state.isLogin
    }
  }
}
</script>
