<template>
  <div class="tip-dialog">
    <div class="select-wrapper">
      <Selection
        :checkListOption="checkListOption"
        @change="handleCheckChange"
        :loading="loading"
      ></Selection>
    </div>
    <el-scrollbar>
      <div v-if="cardData.total === 0">暂无数据</div>
      <div
        class="card-wrapper"
        v-else
      >
        <Loading v-show="loading"></Loading>
        <Card
          v-for="(data,key) in cardData.data"
          :data="data"
          :key="key"
          v-show="!loading"
        >
        </Card>
      </div>
    </el-scrollbar>
    <el-pagination
      background
      @current-change="handleSizeChange"
      layout="prev, pager, next"
      :current-page="currentPage"
      :total="cardData.total"
      :page-size="5"
    >
    </el-pagination>
  </div>
</template>

<script>
import Loading from '@/components/Loading'
import Card from '@/components/Card'
import Selection from '@/components/Selection'

export default {
  name: 'card',
  components: {
    Loading,
    Card,
    Selection
  },
  props: ['flyId'],
  data() {
    return {
      loading: true,

      checkList: ['paper', 'webs', 'report', 'english', 'patent', 'meeting'],
      checkListOption: [
        { value: 'paper', label: '中文文献' },
        { value: 'webs', label: '网页' },
        { value: 'report', label: '科技报告' },
        { value: 'english', label: '英文文献' },
        { value: 'patent', label: '专利' },
        { value: 'meeting', label: '会议' }
      ],

      currentPage: 1, // 当前页数
      cardData: {
        total: 0,
        data: []
      }
    }
  },

  methods: {
    handleCheckChange(checkList) {
      this.checkList = checkList
      this.getCard()
    },
    getCard() {
      this.loading = true
      this.$http
        .get('/api/classify/getCard', {
          params: {
            id: this.flyId,
            page: this.currentPage,
            type: this.checkList
          }
        })
        .then(res => {
          this.loading = false
          this.cardData = res
        })
        .catch(err => {
          this.loading = false
          // some code
        })
    },

    // 翻页
    handleSizeChange(val) {
      this.currentPage = val
      this.getCard()
    }
  },
  mounted() {
    this.currentPage = 1
    this.getCard()
  }
}
</script>
<style lang="less" scoped>
.tip-dialog {
  position: relative;
}
/deep/ .el-pagination {
  position: absolute;
  bottom: -40px;
  right: 0;
}
.card-wrapper,
.loading {
  height: calc(50vh - 30px);
}
</style>