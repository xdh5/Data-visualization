<template>
<div class="card">      
  <div class="card-title">
    <span v-if="data.title">{{data.title}}</span>
    -
    <span v-if="data.author">{{data.author}}</span>
    <span v-if="data.type">[{{data.type}}]</span>
  </div>
  <div class="card-content">
    <el-popover
      placement="top-start"
      width="500"
      trigger="click"
      @show="handleShow(data)"
      :content="data.content">
      <span slot="reference" v-if="data.content">{{data.content | ellipsis}}</span>
    </el-popover>
  </div>
</div>
</template>
<script>
export default {
  name: 'Card',
  props: ['data'],
  filters: {
    // 超过160字省略号
    ellipsis: function(value){
        if(value.length >= 180){
            return value.slice(0, 160)+'...'
        }else{
            return value
        }
    }
  },
  methods: {
    handleShow(data){
      data._id = data._id.$oid
      this.$http
      .post('/api/user/handleShow', 
        {
          data: data,
          name: this.$store.state.user.user
        }
      )
      .then(res => {
      })
      .catch(err => {
      })
    }
  }
}
</script>
<style lang="less" scoped>
.card{
  position: relative; font-family: 'SimSun';
  margin-bottom: 30px;
  &-title{
    span{ color:rgb(51,133,255); }
    margin-bottom:10px;
  }
  &-content{ line-height: 20px; width: 95%; overflow: hidden; }
  &-ellipsis{ position: absolute; right:8px; bottom: 45px; }
  &-source{ font-size:12px; color:green; padding:10px 0 20px 0; }
  &:last-child{
    .card-source{ padding-bottom:0px; }
  }
}
</style>