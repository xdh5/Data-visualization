<template>
<div class="body upload">
  <div class="item">
  <h2 class="title">上传文献数据</h2>
  <el-upload
    ref="paper"
    action="/api/upload/paper"
    :limit="1"
    :file-list="paperList"
    :auto-upload="false"
    :on-success="success">
    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload('paper')">上传到服务器</el-button>
    <el-button size="small"><a href="/api/upload/download?type=paper">下载模板</a></el-button>
    <div slot="tip" class="el-upload__tip">只能上传csv文件</div>
  </el-upload>
  </div>
  <div class="item">
  <h2 class="title">上传专利数据</h2>
  <el-upload
    ref="patent"
    action="/api/upload/patent"
    :limit="1"
    :file-list="patentList"
    :auto-upload="false"
    :on-success="success">
    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload('patent')">上传到服务器</el-button>
    <el-button size="small"><a href="/api/upload/download?type=patent">下载模板</a></el-button>
    <div slot="tip" class="el-upload__tip">只能上传csv文件</div>
  </el-upload>
  </div>
  <div class="item">
  <h2 class="title">上传网页数据</h2>
  <el-upload
    ref="webpage"
    action="/api/upload/webpage"
    :limit="1"
    :file-list="webpageList"
    :auto-upload="false"
    :on-success="success">
    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload('webpage')">上传到服务器</el-button>
    <el-button size="small"><a href="/api/upload/download?type=webpage">下载模板</a></el-button>
    <div slot="tip" class="el-upload__tip">只能上传csv文件</div>
  </el-upload>
  </div>
  <div class="item">
  <h2 class="title">上传标准数据</h2>
  <el-upload
    ref="standard"
    action="/api/upload/standard"
    :limit="1"
    :file-list="standardList"
    :auto-upload="false"
    :on-success="success">
    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload('standard')">上传到服务器</el-button>
    <el-button size="small"><a href="/api/upload/download?type=standard">下载模板</a></el-button>
    <div slot="tip" class="el-upload__tip">只能上传csv文件</div>
  </el-upload>
  </div>
</div>
</template>
<script>
export default {
  name: 'upload',
  data() {
    return {
      paperList: [],
      patentList: [],
      webpageList: [],
      standardList: [],
    };
  },
  methods: {
    success(){
      this.$message({
        message: '上传成功',
        type: 'success'
      })
    },
    submitUpload(type) {
      this.$refs[type].submit();
    },
    handleDownload (type) {
      this.$http
      .get('/api/upload/download', {
        params: {
          type
        }
      })
      .then(res => {
      })
      .catch(err => {
      })
    },
  }
}
</script>
<style lang="less" scoped>
.item{
  margin-bottom: 20px;
}
.title{
  font-size: 16px;
  padding: 15px 0;
}
.upload{
  padding: 0 10%;
  a{
    text-decoration: none;
  }
}
</style>