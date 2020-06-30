<template>
  <div id="app" class="dahezi fudongjvz">
    <div class="neirzt990 fudongfkai dierceng">
      <div class="nrkdn mar-t-40">
        <!-- 头部 -->
        <Hedar></Hedar>
        <!-- 导航 -->
        <div class="subpage fudongfkai">
    <div class="subpage-right fudongfkai">
      <router-link to='rizhi'><div class="subpage-right-zi oranges">精华日志</div></router-link>
      <router-link to='rizhi'><div class="subpage-right-zi">最新日志</div></router-link>
    </div>
  </div>
        <!-- 内容 -->
        <div class="journal-a">
          <div class="journal-left">
            <ul>
              <li v-for="(item, p) in list" :key="p">
                <div class="img">
                  <a href>
                    <img src="~img/zhou.jpg" alt />
                  </a>
                </div>
                <div class="wenzi-right">
                  <a href>
                    <h2>{{item.banner_title}}</h2>
                  </a>
                  <p class="rizhi-time">{{item.createTime}}</p>
                  <p
                    class="jieshao"
                  >{{item.banner_explain}}</p>
                </div>
              </li>
              <!-- 实验组 -->
              <!-- 实验组完 -->
            </ul>
          </div>
          <div class="journal-right"></div>
        </div>
        <!-- 底部 -->
        <!-- <Bottom></Bottom> -->
        <!-- 底部完 -->
      </div>
    </div>
  </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<script>
import Nav from "public/nav-sq";
import Hedar from "public/top-sq";
import axios from 'axios';
// import Bottom from "public/sq-bottom";
export default {
 data() {
      shoplist: 'cartjson';
      return {
        activeName: 'second',
        index:'1',
        list:[{
          os:'',
          shikjnair:'',
        }]
        // list:[{
        //   stefs: '五谷磨房重磅推出吃个彩虹水果麦片，丁香医生推荐、迪丽热巴代言',
        //   shikjnair:'五谷磨房作为天然营养健康食品公司，在“谷物食品”中一直担当着开创者和行业领导者的角色，202五谷磨房作为天然营养健康食品公司，在“谷物食品”中一直担当着开创者和行业领导者的角色，202',
        // },{
        //   stefs: '五谷磨房重磅推出吃个彩虹水果麦片，丁香医生推荐、迪丽热巴代言',
        //   shikjnair:'五谷磨房作为天然营养健康食品公司，在“谷物食品”中一直担当着开创者和行业领导者的角色，202五谷磨房作为天然营养健康食品公司，在“谷物食品”中一直担当着开创者和行业领导者的角色，202',
        // },{
        //   stefs: '五谷磨房重磅推出吃个彩虹水果麦片，丁香医生推荐、迪丽热巴代言',
        //   shikjnair:'五谷磨房作为天然营养健康食品公司，在“谷物食品”中一直担当着开创者和行业领导者的角色，202五谷磨房作为天然营养健康食品公司，在“谷物食品”中一直担当着开创者和行业领导者的角色，202',
        // },{
        //   stefs: '五谷磨房重磅推出吃个彩虹水果麦片，丁香医生推荐、迪丽热巴代言',
        //   shikjnair:'五谷磨房作为天然营养健康食品公司，在“谷物食品”中一直担当着开创者和行业领导者的角色，202五谷磨房作为天然营养健康食品公司，在“谷物食品”中一直担当着开创者和行业领导者的角色，202',
        // }]
      };
    },

  components: {
    Hedar
    // Nav
    // Bottom
  },
     created () {
axios({
                    methods: 'get',
                    url: '/api/getBanner' // 接口名可以改
                }).then((res) => {
                     // 成功的回调函数 （既可以带数据去，也可以带数据回来，带去的数据是前台的，带回的数据是请求
                     // 成功后，后台给的）
                    console.log(res)
                      this.list = res.data.data.list
                                    }).catch( (err) => {
                   // 请求失败的回调
                  // 打印错误
                  console.error(err)
                })
    }
};
</script>
<style lang="stylus">
@import url('//unpkg.com/element-ui@2.13.2/lib/theme-chalk/index.css');
@import '~@/assets/css/Public-head.css';
@import '~@/assets/css/jiankangs.css';
@import '~@/assets/css/Community_square.css';
@import '~@/assets/css/rizhi.css';
@import '~@/assets/css/xianshanghuodong.css';
@import '~@/assets/css/dibu-sq.css';
@import '~@/assets/css/sq-public.css';
@import "~@/assets/css/dibu-sq.css";
</style>
