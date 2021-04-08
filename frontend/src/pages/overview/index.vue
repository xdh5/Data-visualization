<template>
  <div class="upload body">
    <div class="left">
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
    <div class="right">
      <h2>智能综述</h2>
      <div>
        11月16日，美国《驱动》网站发文披露，两家美国公司在此前完成了一次具有相当创新性的空战模拟测试，首次让飞行员驾驶实装和虚拟的人工智能（AI）目标进行了“狗斗”。测试在驾驶舱中引入增强现实（AR）技术，将虚拟目标显示在飞行员眼前，而这次的虚拟目标是以歼20战斗机为?
      </div>
    </div>
  </div>
</template>
<script>
import Card from '@/components/Card'

export default {
  name: 'upload',
  components: {
    Card,
  },
  data() {
    return {
      cardData: {
        'total': 2,
        'data': [
          {'title': '视距内空战训练的新手段：美使用增强现实技术生成歼20战斗机', 'author': '何晓骁', 'abstract': '11月16日，美国《驱动》网站发文披露，两家美国公司在此前完成了一次具有相当创新性的空战模拟测试，首次让飞行员驾驶实装和虚拟的人工智能（AI）目标进行了“狗斗”。测试在驾驶舱中引入增强现实（AR）技术，将虚拟目标显示在飞行员眼前，而这次的虚拟目标是以歼20战斗机为?', 'source': '来源', 'url': '/api/files/test.pdf', 'type':'文献'},
          {'title': '视距内空战训练的新手段：美使用增强现实技术生成歼20战斗机', 'author': '何晓骁', 'abstract': '11月16日，美国《驱动》网站发文披露，两家美国公司在此前完成了一次具有相当创新性的空战模拟测试，首次让飞行员驾驶实装和虚拟的人工智能（AI）目标进行了“狗斗”。测试在驾驶舱中引入增强现实（AR）技术，将虚拟目标显示在飞行员眼前，而这次的虚拟目标是以歼20战斗机为?', 'source': '来源', 'url': 'https://www.baidu.com', 'type':'网页'}
        ]
      }
    }
  }
}
</script>
<style lang="less" scoped>
.step-components {
  margin: 30px 0;
}
.upload{
  width: 80%;
  margin: auto;
}
.body{
  display: flex;
  h2{
    font-size: 20px;
    line-height: 50px;
  }
  .left{
    flex:3
  }
  .right{
    flex:2
  }
}
</style>