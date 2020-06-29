<template>
    <div>
        <div class="top clearfix">
           <router-link to="/" class="home-page fl">
               <div class=" clearfix">
                <div class="home-page-y fl"></div>
               <div class="home-page-x cft fl">首页</div>
               </div>
           </router-link >
           <div class="top-menu cft  fl">菜谱</div>
            <router-link to='gchang'><div class="top-menu cft  fl">社区</div></router-link>
           <router-link to='xingyemc'><div class="top-menu cft  fl">健康</div></router-link>
           <div class="top-menu-red  fr">客户端 <div class="erweima"><img src="@/assets/img/msc_app.png"></div></div>
           <div class="top-menu-yellow  fr">发布 <div class="top-menu-yellow-no">发菜单</div></div>
           <router-link to="/login" class="top-menu cft  fr">登录</router-link>
           <router-link to="/zhuce" class="top-menu cft  fr">注册</router-link>
        </div>
    </div>
</template>

<style scoped>
@import '~@/assets/css/top.css';
.top{
    z-index:99999 ;
}
</style>
<script>
</script>
