<template>
  <div class="w-990 margin-20-t">
    <div class="clearfix">
      <div class="aa fl">
        <el-tabs  v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="健康" name="second">
            <span class="bb"><img src="https://i3.meishichina.com/attachment/magic/2020/02/03/2020020315806992112558197577.jpg"></span>
            <ul>
                <li :key="index" v-for="(item, index) in list" class="cc"> <span class="dd"></span>{{item.text}}</li>
            </ul>
        </el-tab-pane>
        <el-tab-pane  label="食疗" name="third">
            <div >
                <div :key="keys" v-for="(item, keys) in lists" class="ee fl">{{item.texts}}</div>
            </div>
        </el-tab-pane>
  </el-tabs>
      </div>

      <div class="aa margin-10-l fl">
           <el-tabs  v-model="aa" @tab-click="handleClick">
        <el-tab-pane label="健康" name="second">
            <span class="bb"><img src="https://i3.meishichina.com/attachment/magic/2020/02/03/2020020315806992112558197577.jpg"></span>
            <ul>
                <li :key="index" v-for="(item, index) in list" class="cc"> <span class="dd"></span>{{item.text}}</li>
            </ul>
        </el-tab-pane>
        <el-tab-pane  label="食疗" name="third">
            <div >
                <div :key=" keys" v-for="(item, keys) in lists" class="ee fl">{{item.texts}}</div>
            </div>
        </el-tab-pane>
  </el-tabs>
      </div>

      <div class="aa margin-10-l fl">
          <el-tabs  v-model="bb" @tab-click="handleClick">
        <el-tab-pane label="健康" name="second">
            <span class="bb"><img src="https://i3.meishichina.com/attachment/magic/2020/02/03/2020020315806992112558197577.jpg"></span>
            <ul>
                <li :key="indexs" v-for="(item,indexs) in lists" class="cc"> <span class="dd"></span>{{item.texts}}</li>
            </ul>
        </el-tab-pane>
       </el-tabs>
      </div>
    </div>
      <div class="margin-20-t">
        <div>
          <el-tabs v-model="cc" @tab-click="handleClick">
          <el-tab-pane label="新秀菜谱" name="second">
            <div class="ff">
              <ul class="gg">
                <li :key="i" v-for="(item, i) in contentimg" class="hh margin-20-r fl">
                  <div class="ii"><img :src="'http://192.168.85.207:3000/'+item.img_url"></div>
                  <div class="ii-aa">{{item.banner_title}}</div>
                  <div class="ii-bb">一掉去了啦</div>
                </li>
              </ul>
            </div>
          </el-tab-pane>
          <el-tab-pane label="一周热门" name="first">菜谱首页</el-tab-pane>
          <el-tab-pane label="最受欢迎的家常菜" name="third">最受欢迎的家常菜</el-tab-pane>
         </el-tabs>
        </div>
      </div>
     <!-- 时令食材 -->
      <div class="margin-10-t">
        <div>
          <el-tabs v-model="gg" @tab-click="handleClick">
          <el-tab-pane label="时令食材" name="first">
            <div class="gg clearfix">
              <div :key="ll" v-for="(item, ll) in llgg" class="ll fl">
                <div class="pp"> <img :src="item.ggimg" ></div>
                <a class="pp-text">{{item.ggtext}}</a>
                <a class="pp-text-2">{{item.ggtext2}}</a>
              </div>
            </div>
          </el-tab-pane>
          </el-tabs>
        </div>
      </div>

        <!--评论  -->
        <div class="margin-10-t">
        <div class="clearfix">
          <el-tabs v-model="pp" @tab-click="handleClick">
          <el-tab-pane label="热门话题" name="first">
            <div :key="pl" v-for="(item,pl) in pl" class="remeng fl">
               <div class="clearfix">
                   <div class="demo-type fl">
                    <el-avatar :size="40">
                    <img :src=item.touxian>
                    </el-avatar>
                    </div>
                    <div class="margin-10-l fl font-14 text-black">{{item.nicheng}}
                    <div class="font-12 text-gray2">{{item.sj}}</div>
                    </div>
              </div>
              <div class="remeng-pinlun">
                <div class="font-14 text-gray666">{{item.pinlun1}}</div>
                <div class="font-14 text-gray666">{{item.pinlun2}}</div>
              </div>
              <div class="remeng-pinlun-img">
                <div class="remeng-img fl margin-15-r"><img :src=item.img ></div>
                <div class="remeng-img fl margin-15-r"><img :src=item.img ></div>
                <div class="remeng-img fl margin-15-r"><img :src=item.img ></div>
                <div class="remeng-img fl margin-15-r"><img :src=item.img ></div>
              </div>
              <div>
                <span>{{item.xihuang}}</span> ,
                <span>{{item.pinlun3}}</span>
              </div>
            </div>
          </el-tab-pane>
           <el-tab-pane label="精华日志" name="second">配置管理</el-tab-pane>
          </el-tabs>
        </div>
      </div>

    </div>

</template>
<style scoped lang="less">
.aa{
    width: 310px;
    height: 390px;
    // background: tomato;
}
.bb{
    width: 100%;
    height: 124px;
    img {width: 100%;height: 100%;}
}
.cc{
    font-size: 16px;
    padding: 10px 0 0;
    line-height: 26px;
    &:hover{
      color: red;
    }
    .dd{
    border: 4px solid #ccc;
    border-radius: 50%;
    display: inline-block;
    height: 5px;
    margin: -3px 8px 0 2px;
    vertical-align: middle;
    width: 5px;
    }
}
.ee{
    width: 90px;
    height: 40px;
    font-size: 18px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border: 1px solid #ccc;
    margin: 15px 10px 0px 0;
}
.ff{
  width: 100%;
  // height: 1525px;
  .hh{
    width: 227px;
    height: 305px;
    .ii{
      width: 230px;
      height: 230px;
      overflow: hidden;
      text-align: center;
      img{
       max-width: 230px;
       max-height: 230px;
      cursor: pointer;
       transition: all 0.6s;
      -moz-transition: all 0.6s; /* 0.6s完成过渡效果 */
      -webkit-transition: all 0.6s;
      &:hover{
       transform: scale(1.2); /* 放大1.2倍 */
       }
      }
    }
    .ii-aa{
        font-size: 18px;
        line-height: 120%;
        padding: 8px 0 2px;
        text-align: center;
        &:hover{
          color: red;
        }
      }
    .ii-bb{
      text-align: center;
      color: #9999;
      }
  }
}
.gg{
  width:100%;
  // height: 370px;
  // background: chartreuse;
  .ll{
    width: 126px;
    height: 175px;
    margin-left: 14px;
    // background: lightskyblue;
    &:hover .pp-text{
      color: #ff6767;
    }
    .pp{
      width: 126px;
      height: 126px;
    img{
    width: 100%;
    height: 100%;

    }
    }
    .pp-text{
      font-size: 16px;
      color: #3333;
      display:block;
      text-align: center;
    }
    .pp-text-2{
      display:block;
      text-align: center;
    }
  }
}
// 评论
.remeng{
  width: 460px;
  height: 245px;
  // background: red;
}
.remeng-pinlun{
  width:100% ;
  height: 40px;
  overflow: hidden;
}
.remeng-pinlun-img{
  margin-top:20px;
  width: 100%;
  height: 110px;
  overflow: hidden;
  // background: yellow;
  .remeng-img{
    width: 100px;
    height: 100%;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      activeName: 'second',
      aa: 'second',
      bb: 'second',
      cc: 'second',
      gg: 'first',
      pp: 'first',
      list: [{
        text: '降血压食物推荐，从日常开始改善！'
      }, {
        text: '降血压食物推荐，从日常开始改善！'
      }, {
        text: '降血压食物推荐，从日常开始改善！'
      }, {
        text: '降血压食物推荐，从日常开始改善！'
      }, {
        text: '降血压食物推荐，从日常开始改善！'
      }, {
        text: '降血压食物推荐，从日常开始改善！'
      }],
      lists: [{
        texts: '瘦身'
      }, {
        texts: '瘦身'
      }, {
        texts: '瘦身'
      }, {
        texts: '瘦身'
      }, {
        texts: '瘦身'
      }, {
        texts: '瘦身'
      }],
      // 新秀菜谱图片列表
      contentimg: [{
        contentimg: '',
        contenttext: '',
        contentzusi: '小强'
      }],
      // 时令食材
      llgg: [{
        ggimg: 'https://static.meishichina.com/img/shicai/xigua.jpg',
        ggtext: '西瓜',
        ggtext2: '吃瓜群众的最爱'
      }, {
        ggimg: 'https://static.meishichina.com/img/shicai/xigua.jpg',
        ggtext: '西瓜',
        ggtext2: '吃瓜群众的最爱'
      }, {
        ggimg: 'https://static.meishichina.com/img/shicai/xigua.jpg',
        ggtext: '西瓜',
        ggtext2: '吃瓜群众的最爱'
      }, {
        ggimg: 'https://static.meishichina.com/img/shicai/xigua.jpg',
        ggtext: '西瓜',
        ggtext2: '吃瓜群众的最爱'
      }, {
        ggimg: 'https://static.meishichina.com/img/shicai/xigua.jpg',
        ggtext: '西瓜',
        ggtext2: '吃瓜群众的最爱'
      }, {
        ggimg: 'https://static.meishichina.com/img/shicai/xigua.jpg',
        ggtext: '西瓜',
        ggtext2: '吃瓜群众的最爱'
      }, {
        ggimg: 'https://static.meishichina.com/img/shicai/xigua.jpg',
        ggtext: '西瓜',
        ggtext2: '吃瓜群众的最爱'
      }],
      // 评论
      pl: [{
        touxian: 'https://i5.meishichina.com/data/avatar/007/65/90/37_avatar_big.jpg?x-oss-process=style/c180&v=20200619',
        nicheng: '琴韵优雅',
        sj: '2小时前',
        pinlun1: '吃货的天堂',
        pinlun2: '#地摊美食#塔湾国际兴顺夜市，这里好吃的太多了，烤肉串烤面......',
        img: 'https://i3.meishichina.com/attachment/pai/2020/06/19/2020061915925178757978777659037.jpg?x-oss-process=style/c180',
        xihuang: '',
        pinlun3: ''
      }, {
        touxian: 'https://i5.meishichina.com/data/avatar/007/65/90/37_avatar_big.jpg?x-oss-process=style/c180&v=20200619',
        nicheng: '琴韵优雅',
        sj: '2小时前',
        pinlun1: '吃货的天堂',
        pinlun2: '#地摊美食#塔湾国际兴顺夜市，这里好吃的太多了，烤肉串烤面......',
        img: 'https://i3.meishichina.com/attachment/pai/2020/06/19/2020061915925178757978777659037.jpg?x-oss-process=style/c180',
        xihuang: '',
        pinlun3: ''
      }, {
        touxian: 'https://i5.meishichina.com/data/avatar/007/65/90/37_avatar_big.jpg?x-oss-process=style/c180&v=20200619',
        nicheng: '琴韵优雅',
        sj: '2小时前',
        pinlun1: '吃货的天堂',
        pinlun2: '#地摊美食#塔湾国际兴顺夜市，这里好吃的太多了，烤肉串烤面......',
        img: 'https://i3.meishichina.com/attachment/pai/2020/06/19/2020061915925178757978777659037.jpg?x-oss-process=style/c180',
        xihuang: '',
        pinlun3: ''
      }, {
        touxian: 'https://i5.meishichina.com/data/avatar/007/65/90/37_avatar_big.jpg?x-oss-process=style/c180&v=20200619',
        nicheng: '琴韵优雅',
        sj: '2小时前',
        pinlun1: '吃货的天堂',
        pinlun2: '#地摊美食#塔湾国际兴顺夜市，这里好吃的太多了，烤肉串烤面......',
        img: 'https://i3.meishichina.com/attachment/pai/2020/06/19/2020061915925178757978777659037.jpg?x-oss-process=style/c180',
        xihuang: '',
        pinlun3: ''
      }]
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  },
  created () {
    axios({
      methods: 'get',
      url: '/api/getBanner' // 接口名可以改
    }).then((res) => {
      // 成功的回调函数 （既可以带数据去，也可以带数据回来，带去的数据是前台的，带回的数据是请求
      // 成功后，后台给的）
      console.log(res)
      this.contentimg = res.data.data.list
      console.log(this.contentimg)
    }).catch((err) => {
    // 请求失败的回调
    // 打印错误
      console.error(err)
    })
  }
}
</script>
