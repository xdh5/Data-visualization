<template>
  <div class="search">
    <div class="body">
      <Selection
        :checkListOption="checkListOption"
        @change="handleCheckChange"
        :loading="loading"
        search
      ></Selection>
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
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card'
import Selection from '@/components/Selection'

export default {
  name: 'search',
  components: {
    Card,
    Selection
  },
  data() {
    return {
      loading: false, // 加载按钮

      checkList: ['paper', 'patent', 'webpage', 'standard'],
      checkListOption: [
        { value: 'paper', label: '文献' },
        { value: 'patent', label: '专利' },
        { value: 'webpage', label: '网页' },
        { value: 'standard', label: '标准' }
      ],
      keyword: '',

      cardData: {
        'total': 0,
        'data': [
        ]
      },

      cardDataPage: 1 // 当前页数
    }
  },
  methods: {
    getData() {
      this.$http
        .get('/api/search/getSearchData', {
          params: {
            key: this.keyword,
            page: this.cardDataPage,
            type: this.checkList,
            name: this.$store.state.user.user
          }
        })
        .then(res => {
          this.cardData = res
          this.loading = false
        })
        .catch(err => {
          this.loading = false
          // some code
        })
    },
    handleCheckChange(checkList, keyword) {
      this.loading = true
      this.cardDataPage = 1
      this.checkList = checkList
      this.keyword = keyword
      this.getData()
    },
    handleSizeChange(val) {
      this.cardDataPage = val
      this.getData()
    },
  },
  mounted(){
    if(this.$route.params.title){
      this.keyword = this.$route.params.title
      this.getData()
    }else if(this.$route.params.type){
      this.checkList = [this.$route.params.type]
      this.getData()
    }
  }
}
</script>
<style lang="less" scoped>
.search {
  &-input {
    width: 30%;
  }
  .title {
    font-size: 16px;
    font-weight: bolder;
    color: var(--topic-color);
    margin: 30px 0 20px 0;
  }
  main {
    display: flex;
  }
  &-image {
    flex: 4;
    .content {
      display: flex;
      flex-wrap: wrap;
      & > div {
        text-align: center;
        margin: 0 1.5vw 20px 0;
        &:nth-child(4n + 4) {
          margin-right: 0;
        }
      }
      .image-item {
        width: 7vw;
        height: 7vw;
      }
      .demonstration {
        line-height: 25px;
        font-size: 12px;
        display: block;
      }
    }
  }
  &-paper {
    flex: 6;
    font-size: 14px;
    padding-right: 50px;
  }
}
.el-pagination {
  margin-top: 10px;
}
</style>