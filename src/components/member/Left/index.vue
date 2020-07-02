<template>
    <div class="content_left">
        <ul>
            <li><router-link to="/menber"><span class="mebmber-nav-span active">会员中心</span></router-link></li>
            <li><router-link to="/menuone">菜谱</router-link></li>
            <li><router-link class="" to="/menutwo">菜单</router-link></li>
            <li><router-link to="/collect">收藏</router-link></li>
            <li><router-link to="/accountsetting">账户设置</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>
<style lang="less" scoped >
.mebmber-nav-span {
    display: inline-block;
    width: 30px;

}
.content_left{
    float: left;
}
.router-link-exact-active {
    color: green;
}
li{
    height: 58px;
    width: 110px;
    border: 1px solid red;
    text-align: center;
    line-height: 58px;
    
}
li a{
    text-decoration: none;
    color: black;
    font-size: 15px;
}
.active{
    color: #ff6767;
}
.content_left ul li:nth-child(1){
    line-height: 1;
    padding: 10px 0 10px 0;
}
</style>
