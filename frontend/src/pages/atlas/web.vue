<template>
  <div id="web" class="web"></div>
</template>
<script>
export default {
  name: 'web',
  data () {
    return {
      web: null, // 树形图实例
      data: require('@/assets/tree.json'), // 飞机数据
    }
  },
  methods: {
    // 绘制飞机树
    paintWeb () {
      let that = this
      this.web = this.$echarts.init(document.getElementById('web'))
      this.$echarts.util.each(this.data.children, function (datum, index) {
        datum.collapsed = true
      })
      let option = {
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove'
        },
        series: [
          {
            type: 'tree',
            data: [this.data],
            top: '1%',
            left: '7%',
            bottom: '1%',
            right: '20%',
            symbolSize: 7,
            itemStyle: {
              normal: {
                borderColor: '#409EFF',
                color: 'white'
                // lineStyle: {
                //     color: "#409EFF"
                // }
              }
            },
            label: {
              normal: {
                position: 'left',
                verticalAlign: 'middle',
                align: 'right',
                fontSize: 14,
                color: '#409EFF'
              }
            },
            leaves: {
              label: {
                normal: {
                  position: 'right',
                  verticalAlign: 'middle',
                  align: 'left'
                }
              }
            },
            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750
          }
        ]
      }
      this.web.setOption(option)
    }
  },
  mounted () {
    this.paintWeb()
    let that = this
    window.onresize = function () {
      that.web.resize()
    }
  },
  beforeDestroy () {
    window.onresize = null
    this.web.dispose()
  }
}
</script>
<style lang="less" scoped>
.web { width: 100%; height: 70vh; }
</style>