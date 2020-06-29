<template>
<div id="app">
  <Top></Top>
    <div class="fudongjvz">
        <div class="neirzt990 fudongfkai">
        <Hhealthytobtouto></Hhealthytobtouto>
        </div>
    </div>
    <div class="fudongjvz">
    <Healhjggsunto></Healhjggsunto>
    </div>
    <div class="fudongjvz">
    <div class="neirzt990 fudongfkai">
   <Healhyjtnrsunto></Healhyjtnrsunto>
    </div>
    </div>
    <div class="hedes"></div>
    <Healhybodd></Healhybodd>
</div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<script>
import Hhealthytobtouto from './healthytobtouto'
import Healhybodd from './healhybodd'
import Healhjggsunto from './healhjggsunto'
import Healhyjtnrsunto from './healhyjtnrsunto'
import Top from '../../public/top'
  export default {
    components: {
      Hhealthytobtouto,
       Healhjggsunto,
       Healhyjtnrsunto,
      Healhybodd,
      Top
    },
           created () {
    this.$store.commit('changeisLohin', 0)
  },
  };
</script>
<style>
@import url("//unpkg.com/element-ui@2.13.2/lib/theme-chalk/index.css");
@import '~@/assets/css/Public-head.css';
@import '~@/assets/css/jiankangs.css';
@import '~@/assets/css/healthytuo.css';
</style>
<style lang="stylus" scoped>
  .top-nav{
  display:none;
}
</style>
