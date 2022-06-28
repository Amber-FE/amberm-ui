<template>
  <div class="container">
    <h2>按钮类型</h2>
    <section class="container-content">
      <am-button type="default">默认按钮</am-button>
      <ab-button type="primary">主要按钮</ab-button>
      <ab-button type="success">成功按钮</ab-button>
      <ab-button type="info">信息按钮</ab-button>
      <ab-button type="warning">警告按钮</ab-button>
      <ab-button type="danger">危险按钮</ab-button>
    </section>
    <h2>禁用状态</h2>
    <section class="container-content">
      <ab-button type="default" disabled>默认按钮</ab-button>
      <ab-button type="primary" disabled>主要按钮</ab-button>
      <ab-button type="success" disabled>成功按钮</ab-button>
      <ab-button type="info" disabled>信息按钮</ab-button>
      <ab-button type="warning" disabled>警告按钮</ab-button>
      <ab-button type="danger" disabled>危险按钮</ab-button>
    </section>
    <h2>按钮形状</h2>
    <section class="container-content">
      <ab-button type="primary">主要按钮</ab-button>
      <ab-button round type="success">成功按钮</ab-button>
    </section>
    <h2>加载状态</h2>
    <section class="container-content">
      <ab-button loading type="primary"></ab-button>
      <ab-button loading type="success" loading-text="加载中..."></ab-button>
    </section>
    <h2>按钮尺寸</h2>
    <section class="container-content">
      <ab-button size="large">大号按钮</ab-button>
      <ab-button size="normal">普通按钮</ab-button>
      <ab-button size="small">小型按钮</ab-button>
      <ab-button size="mimi">迷你按钮</ab-button>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const methods = {
      handleClick(e: Event) {
        console.log('点击了按钮', e)
      }
    }

    return {
      ...methods
    }
  }
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
    .ab-button {
      margin-bottom: 10px;
    }
  }
}
</style>
