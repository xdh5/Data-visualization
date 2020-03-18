<template>
<div class="wrapper">
  <div class="nav">
    <div class="logo">
      <img src="~@/assets/logo.png" alt=""> 
    </div>
    <el-tabs v-model="navIndex" @tab-click="handleClick">
      <el-tab-pane label="首页" name="home"></el-tab-pane>
      <el-tab-pane label="分类" name="classify"></el-tab-pane>
      <el-tab-pane label="聚类" name="clustering"></el-tab-pane>
      <el-tab-pane label="检索" name="search"></el-tab-pane>
      <el-tab-pane label="上传数据" name="upload"></el-tab-pane>
    </el-tabs>
  </div>
  <slot></slot>
</div>
</template>
<script>
export default {
  name: 'navMenu',
  data () {
    return {
      navIndex: 'home'
    }
  },
  methods: {
    handleClick(tab, event) {
      this.$router.push({name: this.navIndex})
    }
  },
  mounted () {
    let that = this
    let pathname = window.location.pathname.slice(1)
    window.onhashchange = function(){
      if (pathname)
        that.navIndex = pathname
    }
    window.onload=function(){
      if (pathname)
        that.navIndex = pathname
    }
  },
  watch:{
    $route(to,from){
      if (to.name !== 'waiting')
        this.navIndex = to.name
    }
  }
};
</script>
<style lang="less" scoped>
    .nav{
        padding: 10px 30px;
    }
    .logo>img{
        width: 15vh;
        height: 15vh;
        float: left;
        margin-right: 20px;
    }
    .el-tabs{
        padding-top: 7vh
    }
</style>