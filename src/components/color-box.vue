<template>
<div>
  <el-popover v-if="popup" ref="popover" placement="top" trigger="hover" popper-class="color-popper"><slot></slot></el-popover>
    <div v-if="popup" v-popover:popover id="box" :style="colorStyle"></div>
    <div v-else id="box" :style="colorStyle"></div>
</div>
</template>

<script>
export default {
  name: "color-box",
  props: {
    popup: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      required: true,
      validator: function(value) {
        return value.length === 4 || value.length === 7;
      }
    }
  },
  computed: {
    colorStyle() {
      return {
        backgroundColor: this.color
      };
    }
  }
};
</script>

<style>
#box {
  height: 20px;
  width: 20px;
  border-radius: 4px;
  border: 2px solid #e6e6e6;
}

.color-popper {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
</style>
