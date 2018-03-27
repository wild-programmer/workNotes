<template>
  <div id="app">
     <div class="header">
          <a href="javascript:;" class="iconfont menu icon-menu"></a>
          <h2>至善基金</h2>
          <a href="javascript:;" class="search icon-search"></a>
    </div>
    <div class="body">
        <!-- <el-row class="tac">
          <el-col :span="8">
            <h5>带 icon</h5>
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
              <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>导航一</template>
                <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
              <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
            </el-menu>
          </el-col>
        </el-row> -->
        <div class="content_box">
          <router-view></router-view>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style scoped>
  .header {
    width: 100%;
    height: 2.75rem;
    max-width: 640px;
    border-bottom: 0.125rem solid #05ab94;
    background-color: #21bba6;
    color: #FFF;
    position: fixed;
    top: 0;
    z-index: 9;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    transition: all 0.5s 0.1s;
  }
  .header h2 {
    text-align: center;
    font-size: 1.125rem;
    line-height: 1;
  }
  .header a {
    position: absolute;
    font-size: 1.125rem;
    color: #FFF;
  }
  .header .menu {
    left: 0.75rem;
    margin-top: 10px;
  }
  .header .search {
    top: 0.8125rem;
    right: 0.75rem;
  }
</style>

