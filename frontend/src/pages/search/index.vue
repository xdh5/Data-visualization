<template>
  <div class="search">
    <div class="body">
      <Selection
        :checkListOption="checkListOption"
        @change="handleCheckChange"
        :loading="loading"
        search
      ></Selection>
      <main>
        <div class="search-paper">
          <Card
            :data="data"
            v-for="(data,key) in cardData.data"
            :key="key"
          >
          </Card>
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
        <aside class="search-image">
          <div
            class="content"
            v-if="showAside"
          >
            <div
              v-for="(imgUrl, key) in imagesData"
              :key="key"
            >
              <el-image
                class="image-item"
                :src="imgUrl.url"
                fit="cover"
                :preview-src-list="new Array(imgUrl.url)"
              ></el-image>
              <span class="demonstration">{{imgUrl.title}}</span>
            </div>
          </div>
        </aside>
      </main>
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

      checkList: ['paper', 'webs', 'report', 'english', 'patent', 'meeting'],
      checkListOption: [
        { value: 'paper', label: '中文文献' },
        { value: 'webs', label: '网页' },
        { value: 'report', label: '科技报告' },
        { value: 'english', label: '英文文献' },
        { value: 'patent', label: '专利' },
        { value: 'meeting', label: '会议' }
      ],
      keyword: '',

      showAside: false, // 是否显示侧边栏
      imagesData: [{ title: '暂无数据', url: 'null' }],

      cardData: {
        'total': 2,
        'data': [
          {'title': '视距内空战训练的新手段：美使用增强现实技术生成歼20战斗机', 'author': '何晓骁', 'abstract': '11月16日，美国《驱动》网站发文披露，两家美国公司在此前完成了一次具有相当创新性的空战模拟测试，首次让飞行员驾驶实装和虚拟的人工智能（AI）目标进行了“狗斗”。测试在驾驶舱中引入增强现实（AR）技术，将虚拟目标显示在飞行员眼前，而这次的虚拟目标是以歼20战斗机为?', 'source': '来源', 'url': '/api/files/test.pdf', 'type':'文献'},
          {'title': '视距内空战训练的新手段：美使用增强现实技术生成歼20战斗机', 'author': '何晓骁', 'abstract': '11月16日，美国《驱动》网站发文披露，两家美国公司在此前完成了一次具有相当创新性的空战模拟测试，首次让飞行员驾驶实装和虚拟的人工智能（AI）目标进行了“狗斗”。测试在驾驶舱中引入增强现实（AR）技术，将虚拟目标显示在飞行员眼前，而这次的虚拟目标是以歼20战斗机为?', 'source': '来源', 'url': 'https://www.baidu.com', 'type':'网页'}
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
            type: this.checkList
          }
        })
        .then(res => {
          this.imagesData = res.images
          this.cardData = res.cardData
          this.showAside = true
          this.loading = false
        })
        .catch(err => {
          this.loading = false
          this.showAside = true
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