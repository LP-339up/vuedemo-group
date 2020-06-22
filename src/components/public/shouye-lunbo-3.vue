<template>
    <div>
        <div class="w-990 margin-10-t">
            <div class="ww">
                <div @click="swiperbtn(0)" class="prevbtn swiper-btn   font-20 el-icon-arrow-left"> </div>
                 <div @click="swiperbtn(1)" class="nextbtn swiper-btn  font-20 el-icon-arrow-right"> </div>
                 <div class="swiper-btn-conter"> <!--这里加 overflow:hidden; -->
                    <div ref="lunbowidht" class="swiper-conter">
                        <ul :style="{width:slidewidth, transform:'translate('+translate+'px)'}" class="swiper-slwde">
                            <li v-for="(item, key) in list" :key="key" class="swiper-lisi fl">
                                <div class="font-20 text-black">{{item.title}}</div>
                                <div class="font-12 text-black">{{item.text}}</div>
                                </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="less">
    .ww{
        width: 990px;
        height: 120px;
        position: relative;
        background: olive;
        &:hover .swiper-btn{
         color: #333;
        }
    }
    .swiper-btn{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        color: white;
        text-align: center;
        line-height: 30px;
        position: absolute;
        top: 40%;
         &.prevbtn{
             left: 0;
         }
         &.nextbtn{
             right: 0;
         }
        &:hover.swiper-btn{
            background:#333;
            opacity: 0.3;
            color: yellow;
        }
    }
     .swiper-btn-conter{
        position: absolute;
        left: 30px;
        right: 30px;
        top: 0;
        height: 120px;
        background: red;

         }
        .swiper-conter{
            overflow: hidden;
         .swiper-slwde{
             transition: transform;
             .swiper-lisi{
         width: 303px;
         padding-right:30px;

         }
        }
    }
</style>
<script>
export default {
  // 计算个数
  computed: {
    slideNum () {
      return Math.ceil(this.list.length / 4)
    }
  },
  data () {
    return {
      slidewidth: '100%',
      translate: '0',
      index: '1',
      list: [{
        title: '夏日清凉饮品 ',
        text: '清凉饮品，迫不及待地来上一口，味蕾瞬间被击中，清凉酷爽一扫暑热，还等什么，一起来试试看吧～'
      }, {
        title: '早餐佐粥小菜',
        text: '夏季到来，用当季的新鲜蔬菜来制作一道酸爽甜脆的小菜是一个不错的选择！早中晚饭下饭菜，开胃爽口！'
      }, {
        title: '芒种养生宜清补',
        text: '逢此时节，栀子花开，麦黄梅熟，仲夏开始。专家提示说，芒种后天气日渐炎热，公众要注意防暑降温。'
      }, {
        title: '早餐佐粥小菜',
        text: '夏季到来，用当季的新鲜蔬菜来制作一道酸爽甜脆的小菜是一个不错的选择！早中晚饭下饭菜，开胃爽口！'
      }, {
        title: '夏日清凉饮品 ',
        text: '清凉饮品，迫不及待地来上一口，味蕾瞬间被击中，清凉酷爽一扫暑热，还等什么，一起来试试看吧～'
      }, {
        title: '芒种养生宜清补',
        text: '逢此时节，栀子花开，麦黄梅熟，仲夏开始。专家提示说，芒种后天气日渐炎热，公众要注意防暑降温。'
      }, {
        title: '芒种养生宜清补',
        text: '逢此时节，栀子花开，麦黄梅熟，仲夏开始。专家提示说，芒种后天气日渐炎热，公众要注意防暑降温。'
      }, {
        title: '芒种养生宜清补',
        text: '逢此时节，栀子花开，麦黄梅熟，仲夏开始。专家提示说，芒种后天气日渐炎热，公众要注意防暑降温。'
      }, {
        title: '芒种养生宜清补',
        text: '逢此时节，栀子花开，麦黄梅熟，仲夏开始。专家提示说，芒种后天气日渐炎热，公众要注意防暑降温。'
      }]
    }
  },
  mounted () {
    this.slidewidth = this.list.length * 330 * 30 + 'px'
  },
  methods: {
    swiperbtn (position) {
      if (position === 0) {
        if (this.index >= 1) {
          this.index++
        }
      } else {
        if (this.index < this.slideNum) {
          this.index--
        }
      }
      this.cacultatewidth()
    },
    cacultatewidth () {
      var width = this.$refs.lunbowidht.offsetWidth
      console.log(width)
      this.translate -= width
    }
  }
}
</script>
