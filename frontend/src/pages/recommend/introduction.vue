<template>
  <div
    class="introduction"
  >
    <h1>用户操作手册</h1>
    <ul>
      <li>1. 上传前需下载上传模板文件，并根据模板标题填写数据</li>
      <li>2. csv 和 图片/pdf必须同时上传</li>
      <li>3. 上传的图片的命名格式为：Type+Name.jpg，如：侦察机B200T.jpg</li>
      <li>4. 上传的文献pdf命名格式为：Title.pdf，如：浅谈隐身武装直升机的现状和技术发展.pdf</li>
      <li>5. 上传后须等待数据处理，期间不能进行任何操作，时间约5分钟</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'introduction'
}
</script>
<style lang="less" scoped>
.introduction {
  width: 60%; margin: 0 auto;
  h1 { font-size: 18px; margin: 20px 0; text-align: center; }
  li { font-size: 14px; line-height: 25px; }
}
</style>