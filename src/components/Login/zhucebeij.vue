<template>
    <div id="d1"></div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<script>
var curIndex = 0;
var timeInterval = 4000;
var arr = new Array();
arr[0] = "https://i3.meishichina.com/attachment/magic/2015/11/24/201511241448337585505.jpg";
arr[1] = "https://i3.meishichina.com/attachment/magic/2015/10/13/20151013111553208843446.jpg";
arr[2] = "https://i3.meishichina.com/attachment/magic/2016/07/20/20160720146900157818213.jpg";
arr[3] = "https://i3.meishichina.com/attachment/magic/2017/04/11/20170411149189588154913.jpg";
setInterval(changeImg, timeInterval);
function changeImg() {
var obj = document.getElementById("d1");
if (curIndex == arr.length - 1) {
curIndex = 0;
} else {
curIndex += 1;
}
obj.style.backgroundImage= "URL("+arr[curIndex]+")";
}
</script>
<style>
    #d1{
        height: 100%;
        width: 100%;
         background: url(https://i3.meishichina.com/attachment/magic/2015/11/24/201511241448337585505.jpg);
        background-size: cover;
        position: absolute;
        overflow: hidden;
            }
</style>
