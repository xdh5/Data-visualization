<template>
  <div class="home">
    <div class="form-wrapper">
    <div class="title">注册</div>
   <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="top" label-width="80px" size="small" class="form">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" show-password></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="password2">
        <el-input v-model="ruleForm.password2" show-password></el-input>
      </el-form-item>
      <el-form-item label="兴趣爱好" prop="habit">
        <el-checkbox-group v-model="ruleForm.habit">
          <el-checkbox label="a" name="a"></el-checkbox>
          <el-checkbox label="b" name="b"></el-checkbox>
          <el-checkbox label="c" name="c"></el-checkbox>
          <el-checkbox label="d" name="d"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <div class="other">
          <span>其他</span>
          <el-input v-model="ruleForm.other" size="mini" placeholder="多项时请用英文逗号隔开"></el-input>
      </div>
      <el-form-item label="关注的文献类型" prop="interesting">
        <el-checkbox-group v-model="ruleForm.interesting">
          <el-checkbox label="a" name="a"></el-checkbox>
          <el-checkbox label="b" name="b"></el-checkbox>
          <el-checkbox label="c" name="c"></el-checkbox>
          <el-checkbox label="d" name="d"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
      </el-form-item>
    </el-form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'register',
  data() {
    return {
      ruleForm: {
        name: '',
        password: '',
        password2: '',
        habit: [],
        interesting: [],
        other: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{3,8}$/, message: '用户名为 3 到 8 个字母或数字', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{7,}$/, message: '密码为 7 个以上的字母或数字', trigger: 'blur' }
        ],
        password2: [
          { required: true, message: '请确认密码', trigger: 'blur' },
          { pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{7,}$/, message: '密码为 7 个以上的字母或数字', trigger: 'blur' }
        ],
        habit: [
          { required: true, message: '请选择兴趣爱好', trigger: 'blur' },
        ],
        interesting: [
          { required: true, message: '请选择关注的文献类型', trigger: 'blur' },
        ]
      }
    };
  },
  methods: {
    register(){
        this.$http
        .post('/api/user/register', {
            name: this.ruleForm.name,
            password: this.ruleForm.password,
            habit: [...this.ruleForm.habit, ...this.ruleForm.other && this.ruleForm.other.split(',')],
            interesting: this.ruleForm.interesting
          }
        )
        .then(res => {
          this.$message({
            message: '注册成功',
            type: 'success'
          })
          this.$router.push({name: 'login'})
        })
        .catch(err => {
          console.log(err)
        })
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if(this.ruleForm.password !== this.ruleForm.password2){
            this.$message.error('两次密码不一致，请重新确认')
            return
          }
          this.register()
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
.other{
  display: flex;
  align-items: center;
  position: relative;
  top: -20px;
  span{
    color: #606266;
    font-weight: bold;
    width: 50px;
  }
}
/deep/ .el-form-item__label{
  font-weight: bolder;
  padding: 0;
}
</style>