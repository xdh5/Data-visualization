<template>
  <div class="clustering">
    <Loading v-if="loading"></Loading>
    <div
      id="network"
      class="network body"
      v-else
    >
      <el-image
        :src="network"
        :preview-src-list="new Array(network)"></el-image>
      <div class="
        legend"
      >
        <el-table
          :data="legendData"
          size="mini"
          :header-cell-style="{'color': 'white','background': 'rgb(51,51,51)','border-bottom':'1px rgb(51,51,51) solid'}"
          :row-style="{'background': 'rgb(238, 238, 238)', 'color':'rgb(51,51,51)'}"
        >
          <el-table-column
            v-for="(prop, key) in tableProps"
            v-bind="prop"
            :key="key"
            width="55"
          >
          </el-table-column>
        </el-table>
    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Loading from '@/components/Loading'
export default {
  name: 'clustering',
  components: {
    Loading
  },
  data() {
    return {
      network: null, // 关系网实例
      loading: false,
      // 中文文献 图片 网页 科技报告 英文文献 专利 会议
      tableProps: [
        { label: '名称', prop: 'name' },
        { label: '中文文献', prop: 'paper' },
        { label: '图片', prop: 'images' },
        { label: '网页', prop: 'webs' },
        { label: '科技报告', prop: 'report' },
        { label: '英文文献', prop: 'english' },
        { label: '专利', prop: 'patent' },
        { label: '会议', prop: 'meeting' }
      ],
      legendData: [
        {
          name: '暂无数据',
          paper: 0,
          images: 0,
          webs: 0,
          report: 0,
          english: 0,
          patent: 0,
          meeting: 0
        }
      ]
    }
  },
  methods: {
    getdata() {
      this.loading = true
      this.$http
        .get('/api/clustering/getNetwork')
        .then(res => {
          this.loading = false
          this.network = res.image
          this.legendData = res.legend
        })
        .catch(err => {
          this.loading = false
         // some code
        })
    }
  },
  mounted() {
    this.getdata()
  }
}
</script>
<style lang="less" scoped>
.clustering {
  .network {
    /deep/ .el-image {
      margin-right: 5vw;
      width: 70vh;
      height: 70vh;
    }
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.el-table {
  font-size: 10px;
  border: 1px black solid;
  border-radius: 4px;
  /deep/ .cell {
    padding: 0px;
    text-align: center;
    line-height: 10px;
  }
}
.loading {
  height: 50vh;
}
</style>
