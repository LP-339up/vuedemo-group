<template>
    <div v-cloak>
        <div class="account-cont">
            <ul class="tab-title">
                <li @click="activeIndex=0" :class="{active:activeIndex === 0}">个人资料</li>
                <!-- <li @click="activeIndex=1" :class="{active:activeIndex === 1}">收货地址</li> -->
                <li @click="activeIndex=1" :class="{active:activeIndex === 1}">修改密码</li>
            </ul>
            <ul class="tab-cont">
                <li v-show="activeIndex===0">
                    <div class="user-img">
                        <div class="img">
                            <span>头像</span>
                            <img src="../../../assets/img/user-img.jpg" alt="">
                            <input type="file" name="file">
                        </div>
                        <div class="user-sex">
                            <label>性别</label>
                            <br/>
                            <span @click="sex=0" :class="{on:sex===0}">男</span>
                            <span @click="sex=1" :class="{on:sex===1}">女</span>
                            <span @click="sex=2" :class="{on:sex===2}">保密</span>
                        </div>
                        <div class="hometown">
                            <label>家乡</label>
                            <br/>
                                <div class="block">
                                <el-cascader
                                    v-model="value"
                                    :options="options"
                                    @change="handleChange"></el-cascader>
                                </div>
                            </div>
                            <div class="input-email">
                                <label for="">电子邮箱</label>
                                <div></div>
                                <input type="email">
                            </div>
                            <div class="input-text">
                                <label for="">个人签名</label>
                                <div></div>
                                <input type="text">
                            </div>
                        </div>
                       <button type="button">保存修改</button>
                </li>
                <!-- <li v-show="activeIndex===1"></li> -->
                <li v-show="activeIndex===1" class="user-password">
                  <div>
                    <label>当前密码</label>
                    <br>
                    <input type="password" id="password" name="password">
                  </div>
                  <div>
                    <label>新密码</label>
                    <br>
                    <input type="password" id="new-password" name="password">
                    <span>密码为7~14个字符</span>
                  </div>
                  <div>
                    <label>确认密码</label>
                    <br>
                    <input type="password" id="new-repassword" name="password">
                  </div>
                  <button type="button">保存修改</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: 0,
      sex: 0,
      value: [],
      options: [{
        value: 'beijingshi',
        label: '北京市',
        children: [{
          value: 'beijingshi',
          label: '北京市',
          children: [{
            value: 'dongchengqu',
            label: '东城区'
          }, {
            value: 'xichengqu',
            label: '西城区'
          }]
        }]
      }, {
        value: 'tianjingshi',
        label: '天津市',
        children: [{
          value: 'tianjingshi',
          label: '天津市',
          children: []
        }]
      },
      {
        value: 'hebeisheng',
        label: '河北省',
        children: [{
          value: 'shijiazhuang',
          label: '石家庄'
          // children: [{
          //   value: 'handanshi',
          //   label: '邯郸市'
          // }]
        }, {
          value: 'handanshi',
          label: '邯郸市'
        }, {
          value: 'xingtaishi',
          label: '邢台市'
        }, {
          value: 'tangshanshi',
          label: '唐山市'
        }, {
          value: 'baodingshi',
          label: '保定市'
        }, {
          value: 'zhangjiakou',
          label: '张家口'
        }, {
          value: 'cangzhoushi',
          label: '沧州市'
        }]
      }, {
        value: 'guizhousheng',
        label: '贵州省',
        children: [{
          value: 'bijieshi',
          label: '毕节市',
          children: [{
            value: 'nayongxian',
            label: '纳雍县'
          }, {
            value: 'dafangxian',
            label: '大方县'
          }, {
            value: 'hezhangxian',
            label: '赫章县'
          }, {
            value: 'qixingguanqu',
            label: '七星关区'
          }]
        }, {
          value: 'guiyangshi',
          label: '贵阳市',
          children: [{
            value: 'qingzhenxian',
            label: '清镇县'
          }]
        }]
      }, {
        value: 'chongqingshi',
        label: '重庆市',
        children: [{
          value: 'yuzhongqu',
          label: '渝中区'
        }]
      }]
    }
  },
  methods: {
    handleChange (value) {
      console.log(value)
    }
  }
}

</script>

<style lang="less" scoped>
[v-clock]{
    display: none;
}
li{
    list-style: none;
}
.account-cont{
    width: 100%;
    height: 100%;
}
.tab-title{
    display: flex;
    border-bottom: 1px solid #e2e2e2;
    margin-left: 120px;
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
.tab-cont li{
  margin-left: 80px;
}
.user-img{
    width: 120px;
    & img{
        width: 120px;
        height: 120px;
    }
}
.user-img .img{
    height: 170px;
    padding-bottom: 15px;
    & input{
        margin-top: 10px;
    }
    & span{
        color: #888;
        font-size: 12px;
    }
}
.user-sex {
    height: 65px;
    width: 100%;
    padding: 0 0 15px 0;
}
.user-sex  span{
        display: inline-block;
        text-align: center;
        padding: 3px;
        margin: 5px 8px 2px 0;
        color: #e2e2e2;
        width: 24px;
        border: 1px solid #e2e2e2;
        font-size: 12px;
        border-radius: 3px;
        &.on{
            border:1px solid #ff8d8d;
            background: #ff8d8d;
            color: #fff;
        }
    }
.user-sex label{
    font-size: 12px;
    color: #888;
    padding-top: 15px;
}
.block .el-cascader{
    width: 500px !important;
}
.hometown label{
    font-size: 12px;
    color: #888;
}
button{
    margin-top: 10px;
    width: 140px;
    height: 38px;
    background: #ff6767;
    text-align: center;
    line-height: 38px;
    border: 0;
    color: #fff;
    border-radius: 3px;
}
.input-email{
    width: 369px;
    height: 76px;
    padding: 3px;
    & input{
        width: 100%;
        height: 32px;
        border: 1px solid #e2e2e2;
    }
    & label{
        color: #888;
        font-size: 12px;
    }
}
.input-text{
    width: 788px;
    height: 76px;
    padding: 3px;
    & input{
        width: 100%;
        height: 32px;
        border: 1px solid #e2e2e2;
    }
    & label{
        color: #888;
        font-size: 12px;
    }
}
.user-password div{
  padding-bottom: 15px;
}
.user-password div label{
  color: #888;
  font-size: 12px;
}
.user-password div input{
    width: 199px;
    height: 22px;
    padding: 3px;
    margin: 5px 0;
  }
  .user-password div span{
    color: #999;
    font-size: 12px;
    margin-left: 5px;
  }
</style>
