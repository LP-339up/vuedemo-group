<template>
  <div>
      <div class="login-height">
       <div class="login-bg">
        <Zhucebeij></Zhucebeij>
       </div>
     </div>
     <div class="login-login ">
       <div class="clearfix">
         <router-link to='zhuce'><div class="login-zhu fl">注册</div></router-link>
       <div class="login-deng fr">登录</div>
       </div>
        <div class="clearfix">
       <div class="margin-20-t fl">
         <div class="login-deng-ipt">
           <div>
            <el-input class="border" placeholder="手机号/昵称" v-model="ruleForm.name"></el-input>
        <el-input class="border-l" placeholder="请输入密码"  v-model="mima" show-password></el-input>
           </div>
           <div class="margin-10-t aa">
             <el-checkbox v-model="checked">下次自动登录</el-checkbox>
           </div>
           <div class="margin-20-t"><el-button class="login-btn" type="danger">登录</el-button></div>
         </div>
       </div>
       <div class="login-erweima fr margin-20-t margin-10-r">
         <div class="wid110 ">
           <img  src="//static.meishichina.com/v6/img/model/msc_app.png" >
         </div>
         <span class="padding-20-l ">扫描二维码下载客户端</span>
       </div>
     </div>
     </div>
  </div>
</template>

<style >
.login-btn{
width: 300px;
height: 40px;
}
.login-zhu{
color: #ffffff;
}
.login-zhu:hover{
  color:#ff2d52;
text-decoration:underline;
}
/* 下次登录 */
.aa .el-checkbox{
  color: #333;
}

.login-deng-ipt .border{
  border-radius: 6px 6px 0 0 ;
  border: 1px solid #ccc;
  outline:none;
}
.login-deng-ipt .border-l{
  border-radius: 0 0 5px 5px;
  border: 1px solid #ccc;

}
.m-40-t{
  margin-top: 40px;
}
.login-img{
  width:100%;
  height: 100%;
  /* object-fit:cover; */
}
.login-bg{
  width: 100%;
  height: 100%;
  background: greenyellow;
  position: relative;
  left: 0;
  top: 0;
  right:0 ;
  bottom: 0;
}
.login-bg-img{
  background: url(https://i3.meishichina.com/attachment/magic/2017/04/11/20170411149189588154913.jpg)no-repeat center;
  background-size: 100%;
}
.login-height{
  position: fixed;
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
  background:rgba(255,255,255,.8);
  z-index: 2;
  color: #fff;
  margin: 10% 30%;
  border-radius: 5px;
}

  /* 注册 */
.login-zhu{
  width:265px ;
  height: 50px;
  border-radius: 5px 0 0 0;
  background: rgba(0,0,0,.6);
  font-size: 20px;
  text-align: center;
  line-height: 50px;
}
/* 登录 */
.login-deng{
width: 265px;
height: 50px;
border-radius: 0 5px 0 0;
background: rgba(255,255,255,.8);
 font-size: 20px;
  text-align: center;
  line-height: 50px;
  color: #333;
}
.login-deng-ipt{
  width: 340px;
  height: 194px;
  /* background: #475669; */
  padding: 20px;
  border-right: 1px solid #999;
}
.login-input{
  width: 298px;
  height: 33px;
  border-radius:  5px 5px 0 0;
  border: 1px solid #ccc;
}
.login-input-l{
  width: 298px;
  height: 33px;
  border-radius: 0 0 5px 5px ;
  border: 1px solid #ccc;
}
/* 二维码 */
.login-erweima{
  width: 165px;
  height: 191px;
  color: black;
}
.wid110{
  width:110px ;
  height: 110px;
  margin: 10px auto;
}
.wid110 img{
  width: 100%;
  height: 100%;
}
</style>

<script>
import Zhucebeij from './zhucebeij.vue'
export default {
  components: {
    Zhucebeij
  },
  data () {
    return {
      input: '',
      mima: '',
      checked: false,
      ruleForm: {
        name: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 7, max: 14, message: '长度在 7 到 14 个字符', trigger: 'blur' }
        ]
      }
    }
  }
}
</script>
