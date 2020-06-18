<template>
<div class="w-990 ">
    <el-carousel :interval="5000" arrow="always" class="p">
      <div class="q">
        <div class="q-txt">菜谱大全 <span class="el-icon-arrow-right q-span"></span>
        <div class="q-txt-q clearfix">
         <ul >
           <li class="q-txt-q-list fl text-black">
             <div class="q-txt-q-lists"><span class="font-16">一周热门</span></div>
             <div class="q-txt-q-lists">早餐</div>
             <div class="q-txt-q-lists">热菜</div>
             <div class="q-txt-q-lists">酱泡腌菜</div>
           </li>
           <li class="q-txt-q-list fl text-black">
             <div class="q-txt-q-lists"><span class="font-16">一周热门</span></div>
             <div class="q-txt-q-lists">早餐</div>
             <div class="q-txt-q-lists">热菜</div>
             <div class="q-txt-q-lists">酱泡腌菜</div>
           </li>
           <li class="q-txt-q-list fl text-black">
             <div class="q-txt-q-lists"><span class="font-16">人气菜肴</span></div>
             <div class="q-txt-q-lists">高颜值</div>
             <div class="q-txt-q-lists">主食</div>
             <div class="q-txt-q-lists">新宿菜谱</div>
           </li>
         </ul>
        </div>
        </div>
        <div class="q-txt">食材大全 <span class="el-icon-arrow-right q-span"></span></div>
        <div class="q-txt">饮食健康<span class="el-icon-arrow-right q-span"></span></div>
        <div class="q-txt"> 专题专区<span class="el-icon-arrow-right q-span"></span></div>
        <div class="q-txt">一起红 <span class="el-icon-arrow-right q-span"></span></div>
      </div>
        <el-carousel-item v-for="(item, index) in list" :key="index">
         <h3><img :src="item.img" ></h3>
        </el-carousel-item>
    </el-carousel>
</div>
</template>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
.p{
  position: relative;
}
.el-carousel__container .el-carousel__arrow--left{
  left: 236px;
}
.q{
  position: absolute;
  width: 220px;
  height: 100%;
  background: rgba(68,68,68,.4);
  z-index: 999;
}
.q-txt{
  position: relative;
  width: 100%;
  height:60px;
  padding-left: 20px;
  line-height: 60px;
  font-size: 18px;
  color: #fff;
}
.q-txt:hover{
  background: #ff6767;
}
.q-txt:hover .q-txt-q{
  display: block;
}
.q-span{
  padding-left: 95px;
  font-size: 12px;
}
.q-txt-q{
  position: absolute;
  top: 0;
  left: 220px;
  width: 390px;
  height: 300px;
  background: #fff;
  display: none;
}
.q-txt-q-list{
    height: 300px;
    width: 130px;
    text-align: center;
}
.q-txt-q-lists{
  width: 100%;
  height: 25%;
}
.display-bl{
  display: block;
}
.q-txt-q-lists:hover{
color: #ff6767;
}
</style>
<script>
export default {
  data () {
    return {
      list: [{
        img: 'https://i3.meishichina.com/attachment/magic/2019/05/15/2019051515578883227398197577.jpg'
      }, {
        img: 'https://i3.meishichina.com/attachment/magic/2020/05/15/2020051515895360932208197577.jpg'
      }, {
        img: 'https://i3.meishichina.com/attachment/magic/2020/04/07/2020040715862270271858197577.jpg'
      }, {
        img: 'https://i3.meishichina.com/attachment/magic/2020/04/13/2020041315867448189338197577.jpg'
      }, {
        img: 'https://i3.meishichina.com/attachment/magic/2018/05/07/2018050715256619061988197577.jpg'
      }, {
        img: 'https://i3.meishichina.com/attachment/magic/2020/06/08/2020060815915867641688197577.jpg'
      }]
    }
  }
}
</script>
