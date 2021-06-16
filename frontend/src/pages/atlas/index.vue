<template>
  <div class="atlas">
    <el-select v-model="value" placeholder="请选择" @change="handleChange" size="mini">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <div id="tree" class="tree item" v-loading="loading" v-show="value === 'paper'|| value === 'patent'"></div>
    <div id="svg" class="svg item" v-loading="loading" v-show="value === 'webpage'">
      <img src="/api/images/webpage">
    </div>
    <div id="svg" class="svg item" v-loading="loading" v-show="value === 'all'">
      <img src="/api/images/all">
    </div>
  </div>
</template>

<script>
export default {
  name: 'atlas',
  data() {
    return {
      loading: false,
      data: {},
      tree: null,
      svg: '',
      options: [{
          value: 'paper',
          label: '知识体系'
        }, {
          value: 'patent',
          label: '技术体系'
        }, {
          value: 'webpage',
          label: 'web信息图谱'
        }, {
          value: 'all',
          label: '融合图谱'
      }],
      value: ''
    }
  },
  methods: {
    getData(){
      if(this.value && (this.value === 'paper' || this.value === 'patent')){
        this.loading = true
        this.$http
        .get('/api/atlas/getAtlas',{
          params: {
            type: this.value,
          }
        })
        .then(res => {
          this.data = res.data
          this.loading = false
          this.paintTree()
        })
        .catch(err => {
          this.loading = false
        })
      }
    },
    handleChange(){
      this.getData()
    },
    paintTree () {
      this.tree = this.$echarts.init(document.getElementById('tree'))
      this.$echarts.util.each(this.data.children, function (datum) {
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
  mounted(){
    this.getData()
    let that = this
    window.onresize = function () {
      that.tree.resize()
    }
  }
}
</script>

<style lang="less" scoped>
.item{
  height: 70vh;
  img{
    margin-top: 20px;
    display: block;
    width: 100%;
  }
}
</style>