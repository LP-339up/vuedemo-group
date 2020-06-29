<template>
<div class="nrkdu">
    <el-tabs v-model="activeName" @tab-click="handleClick">
     <el-tab-pane label="最新推荐" name="second">
        <div class="ggysnr" v-for="(item, p) in list" :key="p">
          <!-- 渲染 -->
            <div class="caihpp">{{item.banner_title}}</div>
            <div class="sjnrhat">{{item.createTime}}</div>
            <!-- 渲染2 -->
            <div class="jvtinrcs">{{item.banner_explain}}</div>
        </div>
     </el-tab-pane>
        <el-tab-pane label="最新发布" name="first">
            <div class="ggysnr">
                <div class="caihpp">谷磨房作为天然营养健康食品公司，在“谷物食品”中一直担当着开创者和行业领导者的角色，202五</div>
                <div class="sjnrhat">时间</div>
                <div class="jvtinrcs">五谷磨房作为天然营养健康食品公司，在“谷物食品”中一直担当着开创者和行业领导者的角色，202五谷磨房作为天然营养健康食品公司，在“谷物食品”中一直担当着开创者和行业领导者的角色，202</div>
            </div>
        </el-tab-pane>
        <el-tab-pane label="饮食常识" name="thirdh">
           <div class="ggysnr" v-for="(item, p) in list" :key="p">
          <!-- 渲染 -->
            <div class="caihpp">{{item.banner_title}}</div>
            <div class="sjnrhat">{{item.createTime}}</div>
            <!-- 渲染2 -->
            <div class="jvtinrcs">{{item.banner_explain}}</div>
        </div>
        </el-tab-pane>
        <el-tab-pane label="瘦身美容" name="fourtd">
           <div class="ggysnr" v-for="(item, p) in list" :key="p">
          <!-- 渲染 -->
            <div class="caihpp">{{item.banner_title}}</div>
            <div class="sjnrhat">{{item.createTime}}</div>
            <!-- 渲染2 -->
            <div class="jvtinrcs">{{item.banner_explain}}</div>
        </div>
        </el-tab-pane>
        <el-tab-pane label="母婴饮食" name="thirq"> <div class="ggysnr" v-for="(item, p) in list" :key="p">
          <!-- 渲染 -->
            <div class="caihpp">{{item.banner_title}}</div>
            <div class="sjnrhat">{{item.createTime}}</div>
            <!-- 渲染2 -->
            <div class="jvtinrcs">{{item.banner_explain}}</div>
        </div></el-tab-pane>
        <el-tab-pane label="食疗饮补" name="fourta"> <div class="ggysnr" v-for="(item, p) in list" :key="p">
          <!-- 渲染 -->
            <div class="caihpp">{{item.banner_title}}</div>
            <div class="sjnrhat">{{item.createTime}}</div>
            <!-- 渲染2 -->
            <div class="jvtinrcs">{{item.banner_explain}}</div>
        </div></el-tab-pane>
    </el-tabs>
</div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<script>
import axios from 'axios'
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
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
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
                      this.list = res.data.data.list
                                    }).catch( (err) => {
                   // 请求失败的回调
                  // 打印错误
                  console.error(err)
                })
    }
 };
</script>
