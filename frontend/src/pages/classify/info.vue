<template>
  <div class="wrapper">
    <div class="title">名称</div>
      <p>{{infoData.name}}</p>
    <div class="title">图片</div>
    <el-scrollbar>
      <div class="tip-dialog">
        <Loading v-show="loading"></Loading>
        <div class="images" v-show="!loading">
          <div
            class="image"
            v-for="(imgUrl, key) in infoData.images"
            :key="key"
          >
            <el-image
              class="image-item"
              :src="imgUrl.url"
              fit="cover"
              :preview-src-list="new Array(imgUrl.url)"
            >
            </el-image>
            <span class="demonstration">{{imgUrl.title}}</span>
          </div>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
import Loading from '@/components/Loading'
export default {
  name: 'info',
  components: {
    Loading
  },
  props: ['flyId'],
  data() {
    return {
      loading: false,

      infoData: {
        type: '',
        name: '暂无数据',
        images: [{ title: '暂无数据', url: 'null' }]
      }
    }
  },

  methods: {
    // 获取飞机资料
    getInfo() {
      this.loading = true
      this.$http
        .get('/api/classify/getInfo', {
          params: {
            id: this.flyId
          }
        })
        .then(res => {
          this.loading = false
          this.infoData = res
        })
        .catch(err => {
          this.loading = false
          // some code
        })
    }
  },
  mounted() {
    this.currentPage = 1
    this.getInfo()
  }
}
</script>

<style lang="less" scoped>
.title {
  font-size: 14px;
  font-weight: bold;
  margin: 0 0 10px 0;
  color: #409eef;
  font-family: 'SimHei'
}
p {
  margin-bottom: 20px;
}
.tip-dialog {
  .images, .loading{
    height: 45vh;
  }
  .images {
    display: flex;
    flex-wrap: wrap;
    .image {
      text-align: center;
    }
    .image-item {
      width: 20vw;
      height: 12vw;
      margin-right: 10px;
      display: block;
      &:nth-child(3n + 3) {
        margin-right: 0;
      }
    }
    .demonstration {
      line-height: 25px;
      font-size: 12px;
    }
  }
}
</style>