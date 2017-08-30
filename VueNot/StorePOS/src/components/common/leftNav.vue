<template>
  <div class="left-nav">
        <ul>
          <li>
              <i class="iconfont icon-goumai"></i>
              <span>收银</span>
          </li>
          <li>
              <i class="iconfont icon-dianpu"></i>
              <span>店铺</span>
          </li>
          <li>
              <i class="iconfont icon-zuanshi"></i>
              <span>商品</span>
          </li>
          <li>
              <i class="iconfont icon-zuanshi"></i>
              <span>会员</span>
          </li>
          <li>
              <i class="iconfont icon-zuanshi"></i>
              <span>设置</span>
          </li>
        </ul>   
  </div>
</template>
<script>
export default {
    name:'leftNav'
}
</script>
<style scoped>

    .left-nav{
        color: #fff;
        font-size: 10px;
        height: 100%;
        background-color: #1d8CE0;
        float: left;
        width: 5%;
    }
    .iconfont{
        font-size: 24px;
    }
    .left-nav li{
        text-align: center;
        font-size: 16px;
        border-bottom:  1px solid #20a0ff;
        padding: 10px;
    }
    .left-nav span{
        display: block;
        margin-top: 5px;
    }
</style>


