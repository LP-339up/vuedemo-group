<template>
<div id="app">
  <Top></Top>
    <div class="fudongjvz">
        <div class="neirzt990 fudongfkai">
        <Healthytobtou></Healthytobtou>
        </div>
    </div>
    <div class="fudongjvz">
    <Healthytggtuo></Healthytggtuo>
    </div>
    <div class="fudongjvz">
    <div class="neirzt990 fudongfkai">
   <Healhyjtnrtuo></Healhyjtnrtuo>
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
import Healthytobtou from './healthytobtou'
import Healhybodd from './healhybodd'
import Healthytggtuo from './healthytggtuo'
import Healhyjtnrtuo from './healhyjtnrtuo'
  export default {
    components: {
      Healthytobtou,
       Healthytggtuo,
       Healhyjtnrtuo,
      Healhybodd,
      Top
    },
  };
</script>
<style lang="stylus">
@import url("//unpkg.com/element-ui@2.13.2/lib/theme-chalk/index.css");
@import '~@/assets/css/Public-head.css';
@import '~@/assets/css/jiankangs.css';
@import '~@/assets/css/healthytuo.css';
</style>
