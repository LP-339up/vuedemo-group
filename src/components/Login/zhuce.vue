<template>
<div id="app">
  <Top></Top>
   <Zhucebeij></Zhucebeij>
   <Zhuceneir></Zhuceneir>
</div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<script>
import Top from '../public/top.vue'
import Zhucebeij from './zhucebeij.vue'
import Zhuceneir from './zhuceneir.vue'
  export default {
    components: {
    Top,
    Zhucebeij,
    Zhuceneir

    },
  };
</script>
<style lang="stylus">
@import url("//unpkg.com/element-ui@2.13.2/lib/theme-chalk/index.css");
@import '~@/assets/css/zhuce.css';
@import '~@/assets/css/Public-head.css';
</style>
