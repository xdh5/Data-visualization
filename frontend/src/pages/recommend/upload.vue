<template>
  <div class="step">
    <div class="step-title"> {{label}}</div>
    <div class="step-content-wrapper">
      <div class="step-content" v-if="type !== 'webs'">
        <span class="upload-tip">下载模板文件：</span>
        <el-button
          class="download"
          size="mini"
          type="primary"
          :loading="downloadLoading"
          @click="handleDownload"
        >点击下载</el-button>
      </div>
      <div class="step-content">
        <el-upload
          class="upload-demo"
          action="/api/Upload/postData"
          :on-change="(file, fileList)=>{changeData(file, fileList, 'csv')}"
          :on-remove="(file, fileList)=>{changeData(file, fileList, 'csv')}"
          :limit="1"
          :on-exceed="checkNumber"
          :auto-upload="false"
          accept=".csv"
        >
          <span class="upload-tip">上传csv数据：</span>
          <el-button
            size="mini"
            type="primary"
          >点击上传</el-button>
        </el-upload>
      </div>
      <div class="step-content" v-if="type !== 'webs'">
        <el-upload
          class="upload-demo"
          action="/api/Upload/postData"
          :on-change="(file, fileList)=>{changeData(file, fileList, 'files')}"
          :on-remove="(file, fileList)=>{changeData(file, fileList, 'files')}"
          :auto-upload="false"
          multiple
          :accept="accept"
        >
          <span class="upload-tip">上传{{label}}数据：</span>
          <el-button
            size="mini"
            type="primary"
          >点击上传</el-button>
          <div
            slot="tip"
            class="el-upload__tip"
          >{{tip}}</div>
        </el-upload>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'upload-component',
  data () {
    return {
      downloadLoading: false,
      uploadData: {
        label: '',
        csv: null,
        files: []
      }
    }
  },
  props: {
    // 数据种类
    type: {
      type: String,
      required: true
    },
    // 数据中文标签
    label: {
      type: String,
      required: true
    },
    // 注意事项
    tip: {
      type: String
    },
    // 接受的数据格式
    accept: {
      type: String,
      required: true
    }
  },
  methods: {
    // 上传多个文件时报错
    checkNumber () {
      this.$message.error('仅允许上传一个文件')
    },
    // 下载模板
    handleDownload () {
      this.downloadLoading = true
      this.$http
      .get('/api/upload/download', {
        params: {
          type: this.type
        }
      })
      .then(res => {
        this.downloadLoading = false
      })
      .catch(err => {
        // some code
      })
    },
    // 获取添加和移除的数据
    changeData (file, fileList, type) {
      if (type === 'csv') {
        this.uploadData[type] = fileList.length > 0 ? fileList[0].raw : null
      } else if (type === 'files') {
        this.uploadData[type] = fileList.map((file) => file.raw)
      }
      this.uploadData['label'] = this.label
      this.$emit('change', this.uploadData, this.type, this.label)
    }
  }
}
</script>
<style lang="less" scoped>
/deep/ .el-upload__tip { margin-top: 30px; }
.step-title{ font-size: 18px; font-weight: bold; line-height: 40px; font-family: 'SimHei'; color: #409eef; border-bottom: 1px solid #DCDFE6; }
.step-content-wrapper{
  margin: 20px 0;
  .step-content{ margin: 10px 0; }
  .upload-tip { display: inline-block; font-size: 14px; width: 150px; text-align: left; }
  .el-upload__tip{display:inline; color:red; margin-left: 20px}
  /deep/ .el-upload-list__item-name{ font-size:12px !important}
}
</style>