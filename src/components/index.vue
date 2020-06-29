<template>
<div>
<daohang></daohang>
<lunbo></lunbo>
<tab></tab>
<backtop></backtop>
</div>

</template>

<script>
import lunbo from '@/components/public/lunbo.vue'
import tab from '@/components/public/shouye/tab.vue'
import backtop from '@/components/public/shouye/backtop.vue'
import daohang from '@/components/public/top-daohang'
export default {
  components: {
    lunbo,
    tab,
    daohang,
    backtop
  }
}
</script>
