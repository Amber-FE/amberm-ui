<template>
  <div class="container">
    <section class="container-content">
      <h2>基本用法</h2>
      <amber-divider></amber-divider>
      <h2>展示文本</h2>
      <amber-divider>文本</amber-divider>
      <h2>内容位置</h2>
      <amber-divider content-position="left">文本</amber-divider>
      <amber-divider content-position="right">文本</amber-divider>
      <h2>虚线</h2>
      <amber-divider dashed>文本</amber-divider>
    </section>
    <h2>垂直分割线</h2>
    <section class="container-content vertical">
      文本
      <amber-divider direction="vertical"></amber-divider>
      文本
      <amber-divider direction="vertical"></amber-divider>
      文本
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {}
})
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  h2 {
    padding: 10px 0;
    font-weight: 400;
    font-size: 14px;
    color: #5e6d82;
  }
  &-content {
    overflow: hidden;
    &.vertical {
      color: #606266;
      font-size: 14px;
      display: flex;
      align-items: center;
    }
  }
}
</style>
