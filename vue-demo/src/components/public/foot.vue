<template>
    <div>
        <div class="foot">
            <div class="fl">
            <span class="foot-text">美食天下 - 让吃更美好！</span>
            <span class="foot-text-1">菜谱 · 食材 · 魔方 · 关于我们 · 联系我们 · 加入我们 · 服务声明 · 友情链接 · 网站地图 · 移动应用</span>
            <span class="foot-text-1">© 2004-2020 美食天下 保留所有权利 - 京ICP证090244号</span>
            </div>
            <div class="fr">
                <span class="foot-text-img"><img src="@/assets/img/msc_app.png"></span>
                <span class="foot-text-img"><img src="@/assets/img/weixin.png"></span>
            </div>
        </div>
    </div>
</template>
<style scoped>
.foot{
    width: 990px;
    height: 130px;
    margin: 0 auto;
    padding-top: 10px;
    border-top: 1px solid #e8e8e8;
}
.foot-text{
    font-size: 14px;
    color: #f50;
    font-weight: 700;
}

.foot-text-1{
    display: block;
    color: #aaa;
    font-size: 12px;
    /* margin-bottom: 6px; */
    margin-top: 10px;
}
.foot-text-img{
    width: 82px;
    height: 82px;
    display: inline-block;
    padding-left:10px ;
}
.foot-text-img img {
    width: 100%;
    height: 100%;
}
</style>
