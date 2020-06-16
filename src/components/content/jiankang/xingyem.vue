<template>

<div id="app" class="fudongjvz">
    <div class="neirzt990">

        <Healthytob></Healthytob>
        <Healtlo></Healtlo>
        <Healttab></Healttab>
        <Healhybodd></Healhybodd>
    </div>
</div>

</template>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<script>
import Healthytob from './healthytob'
import Healtlo from './healtlo'
import Healttab from './healttab'
import Healhybodd from './healhybodd'
  export default {
    el:'#app',
    components: {
      Healthytob,
      Healtlo,
      Healttab,
      Healhybodd
    },
    data() {
      shoplist: 'cartjson';
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
// new Swiper('.swiper-container', {
//       slidesPerView: 3,
//       spaceBetween: 30,
//       slidesPerGroup: 3,
//       loop: true,
//       loopFillGroupWithBlank: true,
//       pagination: {
//         // el: '.swiper-pagination',
//         clickable: true,
//       },
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//     });
</script>
<style lang="stylus">
@import url("//unpkg.com/element-ui@2.13.2/lib/theme-chalk/index.css");
@import '~@/assets/css/Public-head.css';
@import '~@/assets/css/jiankangs.css';
@import '~@/assets/css/lunbziji.css';
@import '~@/assets/css/healthytuo.css';
</style>
