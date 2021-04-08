<template>
  <div class="home">
    <div class="form-wrapper">
    <div class="title">登录</div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="top" label-width="80px" size="small" class="form">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        <el-popover
          placement="bottom"
          trigger="click"
          content="请联系管理员。">
          <el-button slot="reference">忘记密码</el-button>
        </el-popover>
      </el-form-item>
    </el-form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'login',
  data() {
    return {
      ruleForm: {
        name: '',
        password: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
      }
    };
  },
  methods: {
    login(){
        this.$http
        .post('/api/user/login', {
            name: this.ruleForm.name,
            password: this.ruleForm.password,
          }
        )
        .then(res => {
          this.$message({
            message: '登录成功',
            type: 'success'
          })
          this.$store.commit('SET_USER', res)
          localStorage.setItem('user', JSON.stringify(res))
          this.$router.push({name: 'home'})
        })
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.login()
        } else {
          return false
        }
      })
    },
  }
}
</script>
<style lang="less" scoped>
.home {
  display: flex; flex-direction: column; justify-content: center; align-items: center;
  h1 { font-size: 24px; line-height: 50px; color: rgb(2, 145, 213); font-weight: bold; }
}
.title{
  background: #f5f5f5;
  padding: 10px;
}
.form-wrapper{
  border:1px solid #ddd;
  border-radius: 5px;
  width: 30%;
  .form{
    padding: 10px;
  }
}
/deep/ .el-form-item__label{
  font-weight: bolder;
  padding: 0;
}
</style>