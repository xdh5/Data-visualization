<template>
  <div class="classify">
    <div class="body">
      <Tree @openDialog="openDialog"></Tree>
      <el-dialog
        title="详情"
        :visible.sync="dialogVisible"
        width="70%"
        top="10vh"
        @close=closeDialog
      >
        <div
          slot="title"
          class="header-title"
        >
          <el-tabs
            v-model="activeName"
            type="card"
            @tab-click="handleClick"
          >
            <el-tab-pane
              label="资料"
              name="info"
            ></el-tab-pane>
            <el-tab-pane
              label="数据"
              name="card"
            ></el-tab-pane>
          </el-tabs>
        </div>
        <div class="content-wrapper">
          <FlyInfo
            v-if="activeName ==='info'"
            :flyId="flyId"
          ></FlyInfo>
          <FlyCard
            v-else-if="activeName ==='card'"
            :flyId="flyId"
          ></FlyCard>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Tree from './tree'
import FlyInfo from './info'
import FlyCard from './card'
export default {
  name: 'classify',
  components: {
    Tree,
    FlyInfo,
    FlyCard
  },
  data() {
    return {
      dialogVisible: false, // 开启弹窗
      activeName: '', // 弹窗选择栏资料或卡片

      flyId: '' // 点开了某个飞机
    }
  },
  methods: {
    openDialog(id) {
      this.activeName = 'info'
      this.flyId = id
      this.dialogVisible = true
    },
    closeDialog() {
      this.activeName = ''
    },
    // dialog切换资料 or 文献
    handleClick(tab, event) {
      this.activeName = tab.name
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .el-dialog__body {
  padding-top: 5px !important;
}
.content-wrapper{
  height: 60vh;
}
</style>