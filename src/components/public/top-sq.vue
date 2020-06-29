<template>
  <div class="fudongfkai top-kuaid">
    <div class="logofu fudongjvz">
      <img :src="logo" />
      <div class="yisjkguod">社区</div>
    </div>
    <div class="fudongjvz">
       <router-link to='gchang'><div class="yisjkguod-zi">社区广场</div></router-link>
       <router-link to='rizhi'><div class="yisjkguod-zi">日志</div></router-link>
       <router-link to='huodong'><div class="yisjkguod-zi">活动</div></router-link>
    </div>
    <div class="fudongjvz shouskuainr">
      <input type="text" style="hight:28px;" />
      <div class="shouskuainr-bh fudongjvz">
        <i class="el-icon-search"></i>搜索
      </div>
    </div>
  </div>
</template>
<script>
import logo from 'img/logo.jpg'
export default {
  data () {
    return {
      logo
    }
  }
}
</script>
