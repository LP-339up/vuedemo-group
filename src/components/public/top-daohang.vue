<template>
    <div >
            <div  class="w-990">
                <div class="top-nav">
                    <div class="padding-t-50">
                        <div class="top-nav-logo fl"><img src="@/assets/img/logo.png" ></div>
                        <div class="top-nav-text fl">
                            <span class="red">首页</span>
                            <router-link to='gchang'><span class="top-nav-text-s">社区</span></router-link>
                            <router-link to='xingyemc'><span class="top-nav-text-s">健康</span></router-link>
                            <router-link to='xingytou'><span class="top-nav-text-s">社区</span></router-link>
                            <router-link to='xingytsun'><span class="top-nav-text-s">健康</span></router-link>
                            <router-link to='huodong'><span class="top-nav-text-s">活动</span></router-link>
                        </div>
                        <div class="top-nav-input fr">
                            <input type="text">
                            <span>搜索</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<style >
@import '~@/assets/css/top.css';
</style>
