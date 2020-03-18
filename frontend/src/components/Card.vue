<template>
<div class="card">      
  <div class="card-title">
    <a :href="data.url" target="_blank">
      <span v-if="data.title">{{data.title}}</span>
      -
      <span v-if="data.author">{{data.author}}</span>
      <span v-if="data.type">[{{data.type}}]</span>
    </a>
  </div>
  <div class="card-content">
  <el-tooltip effect="dark" :content="data.abstract" placement="top-start">
    <span v-if="data.abstract">{{data.abstract | ellipsis}}</span>
  </el-tooltip>
  </div>
  <div class="card-source">
    <span v-if="data.source">{{data.source}}</span>
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
  }
}
</script>
<style lang="less" scoped>
.card{
  position: relative; font-family: 'SimSun';
  &-title{
    a{ color:rgb(51,133,255); }
    text-decoration:underline; margin-bottom:10px;
  }
  &-content{ line-height: 20px; width: 95%; overflow: hidden; }
  &-ellipsis{ position: absolute; right:8px; bottom: 45px; }
  &-source{ font-size:12px; color:green; padding:10px 0 20px 0; }
  &:last-child{
    .card-source{ padding-bottom:0px; }
  }
}
</style>