<template>
    <div class="menberc">
        <div class="menber-content">
            <div class="user-info">
                <div class="user-pic clear">
                    <a href="">
                        <img src="../../../assets/img/user-img.jpg" />
                    </a>
                </div>
                <div class="user-cont">
                    <h1>梦里樱花舞倾城88fs8</h1>
                    <div class="user-info1-msg">
                        <ul>
                        <li>
                            <p>4</p>
                            <p>热力值</p>
                        </li>
                        <li>
                            <p>4</p>
                            <p>热力值</p>
                        </li>
                        <li>
                            <p>4</p>
                            <p>热力值</p>
                        </li>
                        <li>
                            <p>4</p>
                            <p>热力值</p>
                        </li>
                        <li>
                            <p>4</p>
                            <p>热力值</p>
                        </li>
                        <li>
                            <p>4</p>
                            <p>热力值</p>
                        </li>
                    </ul>
                    </div>
                    
                </div>
                <div class="user-info-btn clear">
                        <a href="">通知</a>
                        <a href="">私信</a>
                        <a href="" class="active">福利活动</a>
                    </div>
                <div class="serch"></div>
            </div>
            <div class="collect" v-cloak>
                <ul class="tab-title">
                    <li @click="activeIndex=0" :class="{active:activeIndex === 0}">我关注的动态</li>
                    <li @click="activeIndex=1" :class="{active:activeIndex === 1}">所有动态</li>
                    <li @click="activeIndex=2" :class="{active:activeIndex === 2}">我的动态</li>
                </ul>
                <ul class="collect-cont">
                   <li v-show="activeIndex===0">
                        <ul>
                            <li class="list">
                                <div class="dynamic-subtiem">
                                    <div class="subtiem">12分钟前</div>
                                    <div class="subtitle">
                                        <a>梦里樱花</a>&nbsp;收藏了
                                        <a>舞倾城</a>的菜谱
                                    </div>
                                </div>
                                <div class="dynamic-content">
                                    <div class="pic">
                                        <a href="">
                                            <img src="../../../assets/img/user-img.jpg" alt="犬夜叉">
                                        </a>
                                    </div>
                                    <div class="dynamic-info">
                                        <h4><a href="">犬夜叉</a></h4>
                                        <p>原料：粉条、青椒、包菜、胡萝卜、葱、油、盐、五香粉、老抽、酱油。</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li v-show="activeIndex===1">
                        <ul>
                            <li class="list">
                                <div class="dynamic-subtiem">
                                    <div class="subtiem">12分钟前</div>
                                    <div class="subtitle">
                                        <a>梦里樱花</a>&nbsp;收藏了
                                        <a>舞倾城</a>的菜谱
                                    </div>
                                </div>
                                <div class="dynamic-content">
                                    <div class="pic">
                                        <a href="">
                                            <img src="../../../assets/img/user-img.jpg" alt="犬夜叉">
                                        </a>
                                    </div>
                                    <div class="dynamic-info">
                                        <h4><a href="">杀生丸桔梗</a></h4>
                                        <p>原料：粉条、青椒、包菜、胡萝卜、葱、油、盐、五香粉、老抽、酱油。</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li v-show="activeIndex===2">
                        <ul>
                            <li class="list">
                                <div class="dynamic-subtiem">
                                    <div class="subtiem">12分钟前</div>
                                    <div class="subtitle">
                                        <a>梦里樱花</a>&nbsp;收藏了
                                        <a>舞倾城</a>的菜谱
                                    </div>
                                </div>
                                <div class="dynamic-content">
                                    <div class="pic">
                                        <a href="">
                                            <img src="../../../assets/img/user-img.jpg" alt="犬夜叉">
                                        </a>
                                    </div>
                                    <div class="dynamic-info">
                                        <h4><a href="">犬夜叉</a></h4>
                                        <p>原料：粉条、青椒、包菜、胡萝卜、葱、油、盐、五香粉、老抽、酱油。</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: 0,
      activeName: 'first',
      list: [{
        img: '../../../assets/img/user-img.jpg'
      }]
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }

}
</script>

<style  lang="less" scoped>
[v-cloak]{
    display: none;
}
li{
    list-style: none;
}

h1{
    color: #ff6767;
    font-size: 30px;
    font-style: normal;
    font-weight: 0;
}
h4{
    font-size: 18px;

}
.menber-content{
    height: 100%;
    text-align: left;
}
// 顶部开始
.user-info{
    width: 100%;
    padding: 20px 0;
}

.user-cont{
    padding: 5px 15px 75px 170px;
}
.user-info-btn{
     padding: -1px 15px 120px 170px;
}
.user-info .user-pic{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
}
.user-pic.clear{
    padding: 0;
}
.user-info .serch{
    width: 310px;
    float: right;
}
.user-cont .user-info1-msg ul li{
    float: left;
    width: 36px;
    height: 40px;
    text-align: center;
    margin: 10px 25px 0 0;
}
.user-info-btn.clear{
    height: 93px;
    margin: -35px 20px;
}
.user-info-btn a{
    border: 1px solid #ff6767;
    border-radius: 5px;
    color: #ff6767;
    display: inline-block;
    font-size: 14px;
    height: 24px;
    line-height: 24px;
    margin: 15px 10px 0 0;
    text-decoration: none;
    padding: 0 20px;
}
.user-info-btn a.active{
    border: 1px solid #ff6767;
    border-radius: 5px;
    color: #FFF;
    display: inline-block;
    font-size: 14px;
    height: 24px;
    line-height: 24px;
    margin: 15px 10px 0 0;
    text-decoration: none;
    padding: 0 20px;
    background: #ff6767;
}

// 底部开始
.btn-info{
    padding: 0 20px;
    font-size: 14px;
    color: #ff6767;
    line-height: 24px;
    background: #ffffff;
    border: 1px solid #ff6767;
    &:hover{
        background: #ff6767;
        color: #ffff;
    }
}
.btn-info1{
    background: #ff6767;
    color:#ffff;
}
.tabs{
    margin-top: 70px;
}
.subtiem{
    color: #999;
    width: 120px;
    float: right;
    text-align: right;
}
.list{
    border-bottom: 1px dotted #d4d4d4;
    zoom: 1;
    overflow: hidden;
    padding: 10px;
    padding-left: 0;
}
.subtitle{
    padding-right: 120px;
    font-size: 16px;
}
.dynamic-content{
    padding-top: 5px;
    overflow: hidden;
    zoom: 1;
        & h4{
            line-height: 20px;
            & a {color: #333;text-decoration: none;}
        }
        & p {
            line-height: 30px;
            color: #999;
    }
}
.pic{
    height: 120px;
    margin: 0 20px 0 0;
    float: left;
        & img{
            width: 120px;
    }

}
.my-dynamic{
    color: #999;
    font-size: 20px;
}
.my-second{
    width: 120px;
    height: 120px;
    border: 1px solid red;
    & .my-collect-left img{
        width: 120px;
        height: 120px;
    }
}
.collect{
    margin-top: 80px;
}
.tab-title{
    display: flex;
    border-bottom: 1px solid #e2e2e2;
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

</style>
