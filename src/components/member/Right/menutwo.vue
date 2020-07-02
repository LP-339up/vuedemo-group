<template>
  <div>
    <div class="title">
      <a href="" id="my-menu">我的菜单</a>
      <a @click="block = 0"  id="link" :class="{display:block === 0}">创建新的菜单</a>
    </div>
    <div id="thediv" v-show="block === 0" style="display:none">
      <ul>
        <li class="back-menu">
          <a href="" class="el-icon-arrow-left"></a>
          <span>创建新的菜单</span>
        </li>
        <li class="caidan-name">
          <label for="">菜单名称*</label>
          <input type="text" id="menuname">
        </li>
        <li class="menu-info">
         <div>描述</div>
          <textarea name="" id="" cols="100" rows="10"></textarea>
        </li>
        <li class="menu-cover">
          <label for="">封面*</label>
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            <!-- <p>击上传图片，</p>
            <p>最大500*500</p> -->
          </el-upload>
        </li>
        <li class="menu-verify">
          <drag-verify 
                     :width="width" 
                     :height="height" 
                     :text="text" 
                     :success-text="successText" 
                     :background="background" 
                     :progress-bar-bg="progressBarBg" 
                     :completed-bg="completedBg" 
                     :handler-bg="handlerBg" 
                     :handler-icon="handlerIcon" 
                     :text-size="textSize" 
                     :success-icon="successIcon"
                     ref="Verify"
                  >
                  </drag-verify>
        </li>
        <li class="menu-btn">
          <el-row>
            <el-button type="primary" plain >创建菜单</el-button>
          </el-row>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imageUrl: '',
      block: true,
      handlerIcon: "fa fa-angle-double-right",
      successIcon: "fa fa-check",
      background: "#cccccc",
      progressBarBg: "#4b0",
      completedBg: "#66cc66",
      handlerBg: "#fff",
      text: "请将滑块拖动到右侧",
      successText: "验证成功",
      width: 320,
      height: 42,
      textSize: "18px",
      isCircle:'true'
    }
  }
  
}
</script>

<style lang="less" scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#thediv{
  position: absolute;
  top: 40px;
  right: 0;
  width:91%;
  text-align:center;
  background: #ffffff;
}
.title{
  height: 50px;
  border-bottom: 1px solid #e2e2e2;
  margin-left: 20px;
  font-size: 20px;
  line-height: 50px;
  & #my-menu{
    border-bottom: 2px solid #ff6767;
    color: #ff6767;
    display: inline-block;
    text-decoration: none;
}
& #link{
  float:right;
  display: inline-block;
  text-decoration: none;
  color: #ffffff;
  background: #ff6767;
  height: 27px;
  margin-top: 10px;
  border-radius: 5px;
  line-height: 27px;
  padding: 0 7px;
  cursor: pointer;
}
}
li{
  list-style: none;
  text-align: left;
}
.back-menu{
  font-size: 20px;
  color: #333;
  & a{
    text-decoration: none;
    display: inline-block;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 1px solid #333333;
    text-align: center;
    line-height: 25px;
  }
  & span{
    margin-left: 10px;
  }
}
#thediv ul{
  width: 60%;
}
#thediv ul li label{
  font-size: 12px;
  color: #888888;
}
#thediv .caidan-name{
  height: 90px;
  line-height: 30px;
  & input{
    width: 100%;
    padding: 3px 0;
    margin: 5 0;
    height: 32px;
  }
}
//ui
.avatar-uploader .el-upload {
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
    border: 1px solid #e2e2e2;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
.menu-cover p{
  font-size: 12px;
  color: #888888;
  position: relative;
  top: -60px;
}
//ui
.menu-btn{
  width: 140px;
  height: 38px;
  margin-top: 30px;
  cursor: pointer;
}
#thediv .menu-btn button {
  width: 100%;
  height: 100%;
  background: #ff6767;
  color: #ffffff;
  border-radius: 5px;
  border: 0;
  font-size: 16px;
}
 /* 滑动控件容器,灰色背景 */
 
</style>
