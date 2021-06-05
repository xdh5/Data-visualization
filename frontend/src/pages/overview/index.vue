<template>
  <div class="upload body" v-loading.fullscreen.lock="loading">
    <div class="left">
    <div class="tag-wrapper">
    <el-tag 
      :effect="tag.id == selected ? 'dark' : 'plain'"
      v-for="tag in tags"
      :key="tag.id"
      class="tag"
      @click="handleSelect(tag.id)"
    >
      {{tag.name}}
    </el-tag>
    </div>

    <div
      v-for="(data,key) in cardData.data"
      :key="key"
      style="display: flex"
    >
      <el-checkbox
        :value="checkList.indexOf(data.content) !== -1"
        @change	="handleChenck(data.content)"
        style="float:left; margin-right: 10px"
      >
      </el-checkbox>
      <Card
        :data="data"
      >
      </Card>
    </div>

    <el-pagination
      v-if="cardData.total>10"
      background
      layout="prev, pager, next"
      @current-change="handleSizeChange"
      :current-page="cardDataPage"
      :total="cardData.total"
    >
    </el-pagination>
    </div>
    <div class="right">
      <div class="title">
        <span>智能综述</span>
        <el-button
          size="small"
          @click="start"
          :disabled="checkList.length === 0"
        >
        开始综述
        </el-button>
      </div>
      <el-input
        type="textarea"
        v-model="abstract"
        :disabled="!abstract"
        :rows="15">
      </el-input>
    </div>
  </div>
</template>
<script>
import Card from '@/components/Card'

export default {
  name: 'upload',
  components: {
    Card,
  },
  data() {
    return {
      loading: false,
      selected: '',
      checkList: [],
      tags: [{id: 'paper', name: '文献'}, {id: 'patent',name: '专利'}, {id: 'webpage', name: '网页'}],
      abstract: '',
      cardDataPage: 1,
      cardData: {
        'total': 0,
        'data': []
      }
    }
  },
  methods:{
    handleChenck(content){
      const number = this.checkList.indexOf(content)
      if(number !== -1){
        this.checkList.splice(number,1)
      }else{
        this.checkList.push(content)
      }
    },
    start(){
      this.loading = true
      this.$http
        .post('/api/overview/start', {
          content: String(this.checkList)
        }, {timeout: 0})
        .then(res => {
          this.abstract = res.abstract
          this.loading = false
        })
        .catch(err => {
        })
    },
    handleSizeChange(val) {
      this.cardDataPage = val
      this.getData(this.selected, val)
    },
    handleSelect(id){
      this.checkList = []
      this.selected = id
      this.cardDataPage = 1
      this.getData(id, 1)
    },
    getData(type, page){
      this.$http
        .get('/api/overview/getSelectData', {
          params: {
            type,
            page
          }
        })
        .then(res => {
          this.cardData.total = res.total
          this.cardData.data = res.data
        })
        .catch(err => {
        })
    }
  }
}
</script>
<style lang="less" scoped>
.tag-wrapper{
  margin-bottom: 20px;
  .tag{
    margin-right: 10px;
    cursor: pointer;
  }
}
.step-components {
  margin: 30px 0;
}
.upload{
  width: 80%;
  margin: auto;
}
.body{
  display: flex;
  h2{
    font-size: 20px;
    line-height: 50px;
  }
  .left{
    flex:3;
    padding-right: 20px;
    padding-bottom: 20px
  }
  .right{
    flex:2;
    .title{
      span{
        font-size: 16px;
        font-weight: bold;
      }
      margin-bottom: 10px;
    }
  }
}
</style>