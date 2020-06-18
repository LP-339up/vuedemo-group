<template>
<div id="app">
   <Top></Top>
    <div class="fudongjvz">
      <div class="neirzt990">
          <Healthytob></Healthytob>
          <Healtlo></Healtlo>
          <Healttab></Healttab>
          <div class="hedes"></div>
          <Healhybodd></Healhybodd>
      </div>
  </div>
</div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<script>
import Top from '../../public/top.vue'
import Healthytob from './healthytob'
import Healtlo from './healtlo'
import Healttab from './healttab'
import Healhybodd from './healhybodd'
  export default {
    components: {
      Healthytob,
      Healtlo,
      Healttab,
      Healhybodd,
      Top,
    },
  };
</script>
<style lang="stylus">
@import url("//unpkg.com/element-ui@2.13.2/lib/theme-chalk/index.css");
@import '~@/assets/css/Public-head.css';
@import '~@/assets/css/jiankangs.css';
@import '~@/assets/css/lunbziji.css';
@import '~@/assets/css/healthytuo.css';
@import '~@/assets/css/top.css';
.el-carousel__container .el-carousel__arrow--left {
    left: 16px;
}
</style>
