<template>
  <div class="wrapper">
    <div class="warn">
      请确认数据是否正确，如不正确，请返回上一步修改；如正确，请点击完成，点击完成后需要5分钟左右处理数据。
    </div>
    <div class="show-document">
      <div class="document" v-for="data in allData" v-bind="data" :key="data.type">
        <h1>{{data.label}}</h1>
        <div class="document-content">
         <h2>csv:</h2>
         <p>{{data.csv ? data.csv.name: ''}}</p>
        </div>
        <div class="document-content">
          <h2>files:</h2>
          <ul>
            <li v-for="file in data.files" :key="file.name">{{file.name}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'confirm',
  props: {
    allData: {
      type: Array,
      required: true
    }
  }
}
</script>
<style lang="less" scoped>
.warn{
  color: red
}
.document{
  margin: 20px 0;
  h1{ font-size: 16px; font-weight: bold; line-height: 30px; font-family: 'SimHei'; color: #409eef; border-bottom: 1px solid #DCDFE6; }
  h2{ font-size: 14px;color:black; line-height: 30px;}
  p,li{
    color: #606266; font-size: 12px
  }
}
</style>