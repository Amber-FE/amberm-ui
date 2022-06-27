<template>
  <div class="container">
    <h2>基本用法</h2>
    <section class="container-content">
      <amber-cell title="我是标题" desc="描述文字"></amber-cell>
      <amber-cell title="我是标题" sub-title="副标题描述" desc="描述文字"></amber-cell>
      <amber-cell title="点击测试" @click="testClick"></amber-cell>
      <amber-cell title="圆角设置 0" round-radius="0"></amber-cell>
    </section>
    <h2>直接使用插槽(slot)</h2>
    <section class="container-content">
      <amber-cell title="我是标题" desc="描述文字">
        <div>自定义内容</div>
      </amber-cell>
    </section>
    <h2>链接 | 分组用法</h2>
    <section class="container-content">
      <amber-cell-ground>
        <amber-cell title="链接" is-link></amber-cell>
        <amber-cell
          is-link
          title="URL 跳转"
          desc="https://www.google.com.hk/"
          url="https://www.google.com.hk/"
        ></amber-cell>
        <amber-cell is-link title="路由跳转'/'" to="/"></amber-cell>
      </amber-cell-ground>
    </section>
    <h2>自定义左侧Icon区域</h2>
    <section class="container-content">
      <amber-cell title="图片">
        <template v-slot:icon>
          <amber-icon name="yonghu" size="16"></amber-icon>
        </template>
      </amber-cell>
    </section>
    <h2>自定义右侧箭头区域</h2>
    <section class="container-content">
      <amber-cell title="图片">
        <template v-slot:link>
          <amber-icon name="shouqi" size="16"></amber-icon>
        </template>
      </amber-cell>
    </section>
    <h2>只展示desc,可通过desc-text-align调整位置</h2>
    <section class="container-content">
      <amber-cell desc-text-align="left" desc="描述文字"></amber-cell>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const methods = {
      testClick() {
        console.log('click')
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
    .amber-cell {
      margin-bottom: 10px;
    }
    .amber-cell-ground {
      margin-bottom: 10px;
      .amber-cell {
        margin-bottom: 0;
      }
    }
  }
}
</style>
