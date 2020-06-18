<template>
  <div>
      <div class="login-height m-40-t">
      <el-carousel indicator-position="none" arrow="never">
      <el-carousel-item v-for="(item,index) in lists" :key="index">
      <img class="login-img" :src="item.img" >
      </el-carousel-item>
      </el-carousel>
     </div>
     <div class="login-login">
       这里是登录框
     </div>
  </div>
</template>

<style >
.m-40-t{
  margin-top: 40px;
}
.login-img{
  width:100%;
  height: 100%;
  /* object-fit:cover; */
}
.login-height{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
.login-height div{
  width: 100%;
  height: 100%;
}
.login-login{
  position: absolute;
  left: 0;
  top: 40px;
  width: 530px;
  height: 300px;
  background: red;
  z-index: 2;
  color: #fff;
  margin: 10% 30%;
}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

</style>

<script>
export default {
  data () {
    return {
      lists: [{
        img: 'https://i3.meishichina.com/attachment/magic/2016/07/20/20160720146900157818213.jpg'
      }]
    }
  },
  created () {
    this.$store.commit('changeisLohin', 0)
  }
}
</script>
