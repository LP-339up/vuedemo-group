<template>
<div class="kens">
     <el-carousel :interval="4000" type="card"  height="225px" arrow="never" indicator-position="none">
    <el-carousel-item >
     <img src="../../../assets/img/zhong-1.jpg" alt="">
    </el-carousel-item>
     <el-carousel-item>
     <img src="../../../assets/img/zhong-2.jpg" alt="">
    </el-carousel-item>
     <el-carousel-item>
     <img src="../../../assets/img/zhong-3.jpg" alt="">
    </el-carousel-item>
    <el-carousel-item>
     <img src="../../../assets/img/zhong-7.jpg" alt="">
    </el-carousel-item>
    <el-carousel-item>
     <img src="../../../assets/img/zhong-8.jpg" alt="">
    </el-carousel-item>
    <el-carousel-item>
     <img src="../../../assets/img/zhong-9.jpg" alt="">
    </el-carousel-item>
  </el-carousel>
</div>
</template>
<style>
  .el-carousel--horizontal {
    overflow-x: hidden;
    height: 225px;
}
.el-carousel__item:nth-child(2n+1) {
display: flex;
    justify-content: center;
    align-items: center;
    height: 225px;
}
  .el-carousel__item:nth-child(2n) {
display: flex;
    justify-content: center;
    align-items: center;
    height: 225px;
}
.el-carousel__item{
 display: flex;
    justify-content: center;
    align-items: center;
}
.el-carousel__item img{
width: 300px;
}
.kens{
  margin: 10px 0;
}
.el-carousel__container .el-carousel__arrow--left {
    left: 16px;
}
</style>
