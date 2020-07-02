<template>
    <div class="collect" v-cloak>
            <ul class="tab-title">
                <li @click="activeIndex=0" :class="{active:activeIndex === 0}">我的收藏菜谱</li>
                <!-- <li @click="activeIndex=1" :class="{active:activeIndex === 1}">收货地址</li> -->
                <li @click="activeIndex=1" :class="{active:activeIndex === 1}">话题</li>
            </ul>
        <ul class="collect-cont">
            <li v-show="activeIndex===0">
                <div class="my-collect">   
                    <div class="my-collect-left">
                        <div class="user-name">头像</div>
                        <img src="../../../assets/img/user-img.jpg" alt="">
                    </div>
                    <div class="my-collect-right">
                        <div class="miaoshu">
                            <p class="p1">
                                <a href="">蒜蓉粉丝蒸对虾</a>
                            </p>
                            <p class="p2">
                                <a href="">老方小雨</a>
                            </p>
                            <p class="p3">原料：对虾、粉丝、菜籽油、香葱、蒜头、食盐、料酒、蒸蒸鱼豉油。</p>
                            <el-popover
                                placement="top-start"
                                width="200"
                                trigger="hover"
                                content="11次收藏，1051次阅读">
                            </el-popover>
                        </div>
                        <div class="delete"><a  href="">移除</a></div>
                    </div>
                </div>
            </li>
            <li v-show="activeIndex===1">话题</li>
        </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: 0,
      visible: false
    }
  }
}
</script>

<style lang="less" scoped>
[v-cloak]{
    display: none;
}
li{
    list-style: none;
}
.collect{
    width: 100%;
    height: 100%;
    padding: 20px 0; 
}
.tab-title{
    display: flex;
    border-bottom: 1px solid #e2e2e2;
    margin-left: 20px;
    padding: 0;
}
.tab-title li{
    margin-right: 50px;
    text-align: center;
    cursor: pointer;
    line-height: 30px;
    font-size: 20px;
    color: #333;
}
.tab-title li.active{
    color: #ff6767;
    border-bottom: 2px solid #ff6767;
}
.collect-cont {
    margin-left:20px;
}
.my-collect{
    display: flex;
}
.my-collect-left{
    max-width: 180px;
    max-height: 180px;
    overflow: hidden;
    text-align: center;
    & img{
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        max-width: 180px;
        max-height: 180px;
        cursor: pointer;
        transition: all 0.6s;
        -moz-transition: all 0.6s; /* 0.6s完成过渡效果 */
        -webkit-transition: all 0.6s;
        &:hover{
        transform: scale(1.2); /* 放大1.2倍 */
    }
    }
}
.my-collect-left .user-name{
    text-align: left;
}
.my-collect-right{
    margin-left: 10px;
    & .miaoshu .p1 a{
        color: #333;
        font-size: 20px;
        text-decoration: none;
        &:hover{
            color: #ff6767;
            text-decoration: underline;
        }
    }
    & .miaoshu .p2 a{
        color: #888;
        font-size: 14px;
        text-decoration: none;
    }
    & .miaoshu .p3{
        color: #333;
        font-size: 14px;
    }
    & .miaoshu .p4{
        color: #888;
        font-size: 12px;
        display: none;
    }
}
.delete{
    width: 92px;
    height: 32px;
    border: 1px solid #e2e2e2;
    border-radius: 5px;
    float: right;
    text-align: center;
    line-height: 32px;
    margin-right: -280px;
    & a{
    color: #888;
    text-decoration: none;
    display: inline-block;
    width: 100%;
    height: 100%;
    &:hover{
        background: #ff6767;
        color: #fff;
        border-radius: 5px;
    }
    }
}
</style>
