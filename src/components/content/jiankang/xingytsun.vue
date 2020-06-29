<template>
<div id="app">
  <Top></Top>
    <div class="fudongjvz">
        <div class="neirzt990 fudongfkai">
        <Healhjsun></Healhjsun>
        </div>
    </div>
    <div class="fudongjvz">
    <Healhjggsun></Healhjggsun>
    </div>
    <div class="fudongjvz">
    <div class="neirzt990 fudongfkai">
   <Healhyjtnrsun></Healhyjtnrsun>
    </div>
    </div>
    <div class="hedes"></div>
    <Healhybodd></Healhybodd>
</div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<script>
import Top from '../../public/top.vue'
import Healhjsun from './healhjsun'
import Healhybodd from './healhybodd'
import Healhjggsun from './healhjggsun'
import Healhyjtnrsun from './healhyjtnrsun'
  export default {
    components: {
      Healhjsun,
       Healhjggsun,
       Healhyjtnrsun,
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
