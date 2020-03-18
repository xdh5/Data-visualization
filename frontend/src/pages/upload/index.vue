<template>
  <div class="upload body">
    <el-steps
      :active="active"
      finish-status="success"
    >
      <el-step
        v-for="title in stepsTitle"
        :title="title"
        :key="title"
      ></el-step>
    </el-steps>

    <div class="step-components">
      <Introduction v-show="active === 0"></Introduction>
    </div>

    <div class="step-components">
      <Upload
        v-show="active === 1"
        v-for="prop in uploadProps"
        v-bind="prop"
        @change="changeUploadData"
        :key="prop.type"
      ></Upload>
    </div>

    <div class="step-components">
      <Confirm
        v-show="active === 2"
        :allData="transform(allData)"
      ></Confirm>
    </div>

    <el-button
      @click="subStep"
      v-if="active > 0 && active <= stepsTitle.length - 1"
    >上一步</el-button>
    <el-button
      @click="addStep"
      v-if="active >= 0 && active < stepsTitle.length - 1"
    >下一步</el-button>
    <el-button
      @click="addStep();uploadData ()"
      v-if="active === stepsTitle.length - 1"
    >完成</el-button>
  </div>
</template>
<script>
import Upload from './upload'
import Introduction from './introduction'
import Confirm from './confirm'

export default {
  name: 'upload',
  components: {
    Upload,
    Introduction,
    Confirm
  },
  data() {
    return {
      active: 0, // 步骤条进度
      stepsTitle: ['阅读操作说明', '上传数据', '确认数据'], // 步骤条标题

      allData: {}, // 待上传数据 {'triple', file , '图片'}

      uploadProps: [
        {
          type: 'images',
          label: '图片',
          tip:
            '仅支持jpg格式，上传的图片的命名格式为：Type+Name.jpg，如：侦察机B200T.jpg',
          accept: '.jpg'
        },
        {
          type: 'paper',
          label: '中文文献',
          tip:
            '上传的文献pdf命名格式为：Title.pdf，如：浅谈隐身武装直升机的现状和技术发展.pdf',
          accept: '.pdf'
        },
        {
          type: 'webs',
          label: '网页',
          tip:
            '上传的文献pdf命名格式为：Title.pdf，如：浅谈隐身武装直升机的现状和技术发展.pdf',
          accept: '.pdf'
        },
        {
          type: 'report',
          label: '科技报告',
          tip:
            '上传的文献pdf命名格式为：Title.pdf，如：浅谈隐身武装直升机的现状和技术发展.pdf',
          accept: '.pdf'
        },
        {
          type: 'english',
          label: '英文文献',
          tip:
            '上传的文献pdf命名格式为：Title.pdf，如：浅谈隐身武装直升机的现状和技术发展.pdf',
          accept: '.pdf'
        },
        {
          type: 'patent',
          label: '专利',
          tip:
            '上传的文献pdf命名格式为：Title.pdf，如：浅谈隐身武装直升机的现状和技术发展.pdf',
          accept: '.pdf'
        },
        {
          type: 'meeting',
          label: '会议',
          tip:
            '上传的文献pdf命名格式为：Title.pdf，如：浅谈隐身武装直升机的现状和技术发展.pdf',
          accept: '.pdf'
        }
      ]
    }
  },
  methods: {
    // upload 子组件上传数据
    changeUploadData(data, type, label) {
      this.allData[type] = data
    },
    // comfirm 子组件类型转换
    transform (obj) {
      let list = []
      for (let key in obj) {
        list.push(obj[key])
      }
      return list
    },
    // 检查每类数据两种格式是否同时上传，检查每类数据是否为空
    checkData() {
      let total = 0
      for (let value in this.allData) {
        let csvLength = this.allData[value].csv ? this.allData[value].csv.length : 0
        let filesLength = this.allData[value].files ? this.allData[value].files.length : 0
        if (
          (csvLength === 0 && filesLength !== 0) ||
          (filesLength === 0 && csvLength !== 0)
        ) {
          if (value !== 'webs') {
            this.$message.error(this.allData[value].label + '数据必须同时上传！')
            return
          }
        }
        total += csvLength
        total += filesLength
      }
      if (total === 0) {
        this.$message.error('数据不能全部为空！')
        return
      }
      this.active++
    },

    // 上传数据
    uploadData() {
      const files = new FormData()
      for (let i in this.allData) {
        const csv = this.allData[i].csv
        const filesList = this.allData[i].files
        if (csv || filesList.length > 0) {
          files.append(i + 'Csv', csv, csv.name)
          for (let file of filesList) {
            files.append(i + 'Files', file, file.name)
          }
        }
      }
      this.$http
        .post('/api/Upload/checkFile', files, {
          headers: {
            'Content-Type': 'multipart/form-data;charse=UTF-8'
          }
        })
        .then(res => {
          this.$message({
            message: '上传成功，请等待计算结果',
            type: 'success'
          })
          this.$router.push({ name: 'waiting' })
        })
        .catch(err => {
          this.active = 0
        })
    },

    addStep() {
      if (this.active === 1){
        this.checkData()
      } else {
        this.active++
      }
    },
    subStep() {
      this.active--
    }
  }
}
</script>
<style lang="less" scoped>
.step-components {
  margin: 30px 0;
}
.upload{
  margin-bottom: 20px
}
</style>