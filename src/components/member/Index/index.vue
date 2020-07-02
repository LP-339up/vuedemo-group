<template>
    <div class="content">
      <Left></Left>
      <Right></Right>
    </div>
</template>

<script>
// 导出vue实例所需要的对象
import Left from '../Left'
import Right from '../Right'
export default {
  components: {
    Left,
    Right
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
.content{
  padding:  40px 0 0 0 ;
}

</style>
