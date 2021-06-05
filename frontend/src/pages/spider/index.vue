<template>
  <div class="spider body">
    <div class="upload">
      <div class="item">
      <el-input v-model="name" placeholder="请输入内容" size="small"></el-input>
      </div>
      <div class="item">
      <el-select v-model="type" placeholder="请选择" size="small">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      </div>
      <div class="item">
      <el-upload
        ref="spider"
        action="/api/spider/upload"
        :limit="1"
        :file-list="spiderList"
        :auto-upload="false"
        :on-success="success"
        :data="{name, type}">
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
      </el-upload>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'spider',
  data() {
    return{
      type: '',
      name: '',
      options: [
        {lable: '文献', value: 'paper'},
        {lable: '专利', value: 'patent'},
        {lable: '网页', value: 'webpage'},
      ],
      spiderList: []
    }
  },
  methods: {
    submitUpload(){
      this.$refs.spider.submit();
    },
    success(){

    }
  },
  mounted(){
    this.$http
    .get('/api/spider/show')
    .then(res => {
      
    })
    .catch(err => {
    })
  }
}
</script>
<style lang="less" scoped>
.upload{
  display: flex;
  justify-content: space-around;
  width: 60%;
  .item{
    margin-right: 20px;
  }
}
</style>