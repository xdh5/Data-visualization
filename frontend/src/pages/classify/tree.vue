<template>
  <div id="tree" class="tree"></div>
</template>
<script>
export default {
  name: 'tree',
  data () {
    return {
      tree: null, // 树形图实例
      data: require('@/assets/tree.json'), // 飞机数据
    }
  },
  methods: {
    // 绘制飞机树
    paintTree () {
      let that = this
      this.tree = this.$echarts.init(document.getElementById('tree'))
      this.$echarts.util.each(this.data.children, function (datum, index) {
        datum.collapsed = true
      })
      this.tree.on('click', function (param) {
        if (param.data.value) {
          that.dialogVisible = true
          that.$emit('openDialog', param.data.value)
        }
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
      this.tree.setOption(option)
    }
  },
  mounted () {
    this.paintTree()
    let that = this
    window.onresize = function () {
      that.tree.resize()
    }
  },
  beforeDestroy () {
    window.onresize = null
    this.tree.dispose()
  }
}
</script>
<style lang="less" scoped>
.tree { width: 100%; height: 70vh; }
</style>