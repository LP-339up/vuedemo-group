<template>
<div>
<lunbo></lunbo>
<lunbotext></lunbotext>
<tab></tab>
<backtop></backtop>
</div>

</template>

<script>
import lunbo from '@/components/public/lunbo.vue'
import lunbotext from '@/components/public/shouye-lunbo-3'
import tab from '@/components/public/shouye/tab.vue'
import backtop from '@/components/public/shouye/backtop.vue'
export default {
  components: {
    lunbo,
    lunbotext,
    tab,
    backtop
  }
}
</script>
