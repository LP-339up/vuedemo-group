<template>
    <div>
        <ul>
            <li @click="activeIndex = 0" :class="{active:activeIndex===0}">我的菜谱</li>
            <li @click="activeIndex = 1" :class="{active:activeIndex===1}">待审核</li>
            <li @click="activeIndex = 2" :class="{active:activeIndex===2}">退稿箱</li>
            <li @click="activeIndex = 3" :class="{active:activeIndex===3}">草稿箱</li>
            <li @click="activeIndex = 4" :class="{active:activeIndex===4}">发布新菜谱</li>
        </ul>
        <ul>
            <li v-show="active===0">1</li>
            <li v-show="active===1">2</li>
            <li v-show="active===2">3</li>
            <li v-show="active===3">4</li>
            <li v-show="active===4">5</li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            activeIndex: 0
        }
    }
}
</script>

<style lang="less" scoped>

</style>