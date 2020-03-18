<template>
  <div class="home">
    <h1>没有名字</h1>
    <el-carousel trigger="click">
      <el-carousel-item
        v-for="item in carouselImages"
        :key="item"
      >
        <el-image
          :src="item"
          fit="cover"
        ></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data() {
    return {
      carouselImages: []
    }
  },
  methods: {
    getCarousel() {
      this.$http
        .get('/api/home/getCarousel')
        .then(res => {
          this.carouselImages = res
        })
        .catch(err => {
          // some code
        })
    }
  },
  mounted() {
    this.getCarousel()
  }
}
</script>
<style lang="less" scoped>
.home {
  display: flex; flex-direction: column; justify-content: center; align-items: center;
  h1 { font-size: 24px; line-height: 50px; color: rgb(2, 145, 213); font-weight: bold; }
}
.el-carousel { width: 100vh; height: 60vh; }
.el-carousel__item {
  width: 100vh; height: 60vh;
  .el-image { width: 100vh; height: 60vh; }
}
.el-carousel__item h3 { color: #475669; font-size: 14px; opacity: 0.75; line-height: 150px; margin: 0; }
.el-carousel__item:nth-child(2n) { background-color: #99a9bf; }
.el-carousel__item:nth-child(2n + 1) { background-color: #d3dce6; }
</style>