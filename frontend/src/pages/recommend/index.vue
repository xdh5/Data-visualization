<template>
  <div class="recommend">
    <div
      v-for="(data,key) in cardData.data"
      :key="key"
      v-loading = "loading"
    >
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
</template>

<script>
import Card from '@/components/Card'
export default {
  name: 'recommend',
  components: {
    Card,
  },
  data() {
    return {
      loading: false,
      cardDataPage: 1,
      cardData: {
        'total': 0,
        'data': []
      }
    }
  },
  methods: {
    getData() {
      this.$http
        .get('/api/recommend/getRecommend', {
          params: {
            page: this.cardDataPage,
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
    handleSizeChange(val) {
      this.cardDataPage = val
      this.getData()
    }
  },
  mounted(){
    this.getData()
  }
}
</script>
<style lang="less" scoped>
.recommend {
  margin: 0 10%;
}
.el-pagination {
  margin-top: 10px;
}
</style>