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
    <ul class="spider-list">
      <h3>爬虫列表</h3>
      <li v-for="spider in spiderRun" :key="spider.name">
        <span>{{spider.name}}</span>
        <el-button size="small" @click="run(spider._id)" :disabled="running">运行</el-button>
        <span>{{running === spider.name? '运行中':'未运行'}}</span>
      </li>
    </ul>
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
      spiderList: [],
      spiderRun: [
      ],
      running: ''
    }
  },
  methods: {
    submitUpload(){
      this.$refs.spider.submit();
    },
    success(){
      this.$message({
        message: '上传成功',
        type: 'success'
      })
    },
    run(id){
      this.$http
      .get('/api/spider/run', {params: {
        id: id.$oid
      }}, {timeout: 0})
      .then(res => {
        this.show()
      })
      .catch(err => {
        console.log(err)
      })
    },
    show(){
      this.$http
      .get('/api/spider/show')
      .then(res => {
        this.spiderRun = res.data
        this.running = res.running
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  mounted(){
    this.show()
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
.spider-list{
  margin-top:20px;
  margin-left: 20px;
  h3{
    font-weight: bolder;
    color: rgb(2,145,212)
  }
  li{
    padding: 10px 0;
  }

}
</style>