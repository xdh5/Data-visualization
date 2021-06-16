<template>
  <div class="home" v-loading="loading">
    <div class="item">
      <h2>航空器科学动态</h2>
      <ul>
        <li v-for="(value,key) in cardData.paper" @click="go(value.title, 'title')" :key="key">{{value.title|ellipsis}}<span> new!</span></li>
        <li @click="go('paper', 'type')">&lt;更多内容&gt;</li>
      </ul>
    </div>
    <div class="item">
      <h2>航空器专利进展</h2>
      <ul>
        <li
          v-for="(value,key) in cardData.patent"
          :key="key"
          @click="go(value.title, 'title')"
        >
          {{value.title|ellipsis}}
          <span> new!</span>
        </li>
        <li @click="go('patent', 'type')">&lt;更多内容&gt;</li>
      </ul>
    </div>
    <div class="item">
      <h2>装备科技动态</h2>
      <ul>
        <li v-for="(value,key) in cardData.webpage" @click="go(value.title, 'title')" :key="key">{{value.title|ellipsis}}<span> new!</span></li>
        <li @click="go('webpage', 'type')">&lt;更多内容&gt;</li>
      </ul>
    </div>
    <div class="item">
      <h2>航空器标准查询</h2>
      <ul>
        <li v-for="(value,key) in cardData.standard" @click="go(value.title, 'title')" :key="key">{{value.title|ellipsis}}<span> new!</span></li>
        <li @click="go('standard', 'type')">&lt;更多内容&gt;</li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data() {
    return {
      cardData: {},
      loading: false
    }
  },
  filters: {
    // 超过160字省略号
    ellipsis: function(value){
        if(value.length >= 50){
            return value.slice(0, 50)+'...'
        }else{
            return value
        }
    }
  },
  methods: {
    getData() {
      this.loading = true
      this.$http
        .get('/api/home/getHomeData')
        .then(res => {
          this.cardData = res.data
          this.loading = false
        })
        .catch(err => {
          this.loading = false
          // some code
        })
    },
    go(value, type){
      if(type === 'title'){
        this.$router.push({name:'search',params: {title: value}})
      }else{
        this.$router.push({name:'search',params: {type: value}})
      }
      
    }
  },
  mounted() {
    this.getData()
  }
}
</script>
<style lang="less" scoped>
.home {
  margin: 0 10%;
  display: grid;
  grid-template-areas: 'a a'
                       'b b';
  .item{
    margin: 20px 0;
    h2{
      font-size: 16px;
      color: rgb(1,146,213);
      font-weight: bold;
      line-height: 30px;
    }
    li{
      line-height: 20px;
    }
    li:last-child{
      color: rgb(1,146,213);
      cursor: pointer;
    }
    span{
      color: rgb(1,146,213);
      font-weight: bold;
    }
  }
}
</style>