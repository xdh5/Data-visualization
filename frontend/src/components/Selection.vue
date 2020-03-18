<template>
  <div class="select-wrapper">
    <div class="clearfix">
      <el-checkbox-group
        v-model="checkList"
        :size="search ? 'medium':'small'"
        fill="rgb(34,164,255)"
      >
        <el-checkbox-button
          v-for="item in checkListOption"
          :label="item.value"
          :key="item.value"
        >{{item.label}}</el-checkbox-button>
      </el-checkbox-group>
    </div>
    <div
      class="block-select"
      v-if="search"
    >
      <el-input
        v-model.trim="keyword"
        placeholder="请输入内容"
        @keyup.enter.native="handleCheckedDataChange"
        @focus="wrong = false"
        size="small"
      >
        <el-button
          :loading="loading"
          slot="append"
          icon="el-icon-search"
          @click="handleCheckedDataChange"
          :disabled="checkList.length === 0"
        ></el-button>
      </el-input>
      <span class="warning" v-if="wrong">请输入内容</span>
    </div>
    <div
      class="inline-select"
      v-else
    >
      <el-button
        size="small"
        @click="handleCheckedDataChange"
        :loading="loading"
        :disabled="checkList.length === 0"
      >查询</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'selection',
  props: {
    search: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    checkListOption: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      wrong: false,
      keyword: '',
      checkList: this.checkListOption.map(value => {
        return value.value
      })
    }
  },
  methods: {
    handleCheckedDataChange(value) {
      if(this.checkList.length === 0){
        return
      }
      if(this.search){
        if(this.keyword){
          this.$emit('change', this.checkList, this.keyword)
        }else{
          this.wrong = true
        }
      } else{
        this.$emit('change', this.checkList)
      }
    }
  }
}
</script>
<style lang="less" scoped>
.clearfix{
  &::after { display: block; clear: both; content: ''; }
}
.select-wrapper {
  margin-bottom: 15px;
}
.el-checkbox-group {
  display: inline-block; vertical-align: top; float: left;
  /deep/ .el-checkbox-button__inner { display: inline-block; }
}
.block-select {
  margin: 15px 0;
  /deep/ .el-input { width: 30%; margin-right: 10px; font-size: 12px; }
  /deep/ .el-button.is-disabled:hover{
    background-color: transparent;
  }
}
.inline-select{
  position: absolute;
  top: 0;
  right: 0;
}
.warning{
  color: red
}
</style>