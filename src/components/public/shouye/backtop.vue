<template>
    <div>
        <a href="javascript:;" id="return_top" title="回到顶部"></a>
    </div>
</template>

<script>
export default {
  data () {
    window.onload = function () {
      var obtn = document.getElementById('return_top')
      var clientHeight = document.documentElement.clientHeight
      var timer = null
      var isTop = true
      window.onscroll = function () {
        var osTop = document.documentElement.scrollTop || document.body.scrollTop
        if (osTop >= clientHeight) {
          obtn.style.display = 'block'
        } else {
          obtn.style.display = 'none'
        }
        if (!isTop) {
          clearInterval(timer)
        }
        isTop = false
      }

      obtn.onclick = function () {
        timer = setInterval(function () {
          var osTop = document.documentElement.scrollTop || document.body.scrollTop
          var speed = Math.floor(-osTop / 6)
          document.documentElement.scrollTop = document.body.scrollTop = osTop + speed
          isTop = true
          if (osTop === 0) {
            clearInterval(timer)
          }
        }, 30)
      }
    }
    return {}
  }
}

</script>

<style lang="less" scoped>
#return_top{
    width:60px;
    height:60px;
    border-radius:50% ;
    position:fixed;
    right:50px;
    bottom:50px;
    display:none;
    background-color: #FFFFFF;
    background:url(~@/assets/img/gotop.png) no-repeat center;
    background-size: 60px 60px;
}
</style>
