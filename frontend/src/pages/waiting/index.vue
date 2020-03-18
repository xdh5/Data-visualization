<template>
  <div class="waiting">
    <p>数据处理中，请耐心等待</p>
    <Loading></Loading>
  </div>
</template>
<script>
// @ is an alias to /src
import Loading from '@/components/Loading'

export default {
  name: 'waiting',
  components: {
    Loading
  },
  data() {
    return {
      interval: null
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.$http
        .get('/api/waiting/handle')
        .then(res => {
          if (this.$store.state.mode === 'normal') {
            clearInterval(this.interval)
            this.$message({
              message: '数据处理已全部完成',
              type: 'success'
            })
            this.$router.push({ name: 'home' })
          }
        })
        .catch(err => {
          this.$router.push({ name: 'home' })
        })
    }, 5000)
  },
  destroyed() {
    clearInterval(this.interval)
  }
}
</script>
<style lang="less" scoped>
.waiting{
  height: 50vh;
  p{text-align: center}
}
</style>