<template>
<div class="wrapper">
  <div class="nav">
    <div class="logo">
      <img src="~@/assets/logo.png" alt=""> 
    </div>
    <el-tabs :value="$store.state.navIndex" @tab-click="handleClick">
      <el-tab-pane label="首页" name="home"></el-tab-pane>
      <el-tab-pane label="知识图谱" name="atlas"></el-tab-pane>
      <el-tab-pane label="检索" name="search"></el-tab-pane>
      <el-tab-pane label="智能综述" name="overview"></el-tab-pane>
      <el-tab-pane label="智能推荐" name="recommend"></el-tab-pane>
      <el-tab-pane label="上传数据" name="upload"></el-tab-pane>
      <el-tab-pane label="采集数据" name="spider"></el-tab-pane>
    </el-tabs>
    <div class="login">
      <el-button
        size="small"
        type="primary"
        @click="register"
        plain>
        {{($store.state.user && $store.state.user.user) || '注册'}}
      </el-button>
      <el-popconfirm
        v-if="$store.state.user"
        title="确定退出登陆吗？"
        @confirm="logout"
      >
        <el-button
          size="small"
          type="primary"
          slot="reference"
          plain>
          注销
        </el-button>
      </el-popconfirm>
      <el-button
        size="small"
        type="primary"
        @click="login"
        v-else
        plain>
        登录
      </el-button>
    </div>
  </div>
  <slot></slot>
</div>
</template>
<script>
export default {
  name: 'navMenu',
  data () {
    return {

    }
  },
  methods: {
    handleClick(tab, event) {
      this.$store.commit('SET_INDEX', tab.name)
      this.$router.push({name: tab.name})
    },
    register(){
      if(!this.$store.state.user){
        this.$router.push({name: 'register'})
      }
    },
    login(){
      this.$router.push({name: 'login'})
    },
    logout(){
      this.$store.commit('SET_USER', null)
      localStorage.removeItem('user')
      this.$router.push({name: 'login'})
    },
    upload(){
      this.$router.push({name: 'upload'})
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
    .nav{
      position: relative;
    }
    .login{
      position: absolute;
      right: 30px;
      top: 20px;
    }
</style>