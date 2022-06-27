<template>
  <div class="container">
    <h2>基础用法</h2>
    <amber-sticky :top="57">
      <amber-button type="primary">吸顶按钮</amber-button>
    </amber-sticky>
    <div class="block"></div>
    <h2>吸顶距离</h2>
    <amber-sticky :top="120">
      <amber-button type="danger">吸顶距离120px</amber-button>
    </amber-sticky>
    <h2>指定容器</h2>
    <div class="sticky-container" ref="container">
      <amber-sticky :top="100" :container="container">
        <amber-button type="success">指定容器</amber-button>
      </amber-sticky>
    </div>
    <h2>吸底距离</h2>
    <amber-sticky :bottom="150" position="bottom">
      <amber-button type="warning">吸底距离</amber-button>
    </amber-sticky>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const container = ref(null)

    return {
      container
    }
  }
})
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  height: 200vh;
  h2 {
    padding: 10px 0;
    font-weight: 400;
    font-size: 14px;
    color: #5e6d82;
  }
  .block {
    height: 20px;
  }
  .sticky-container {
    height: 300px;
    border: 1px solid #ddd;
  }
  .amber-button {
    margin-bottom: 10px;
  }
}
</style>
