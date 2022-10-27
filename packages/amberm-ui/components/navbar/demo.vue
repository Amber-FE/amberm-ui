<template>
  <div class="am-button-demo" @click="handleClick">
    <div class="am-button-demo-box">
      <div class="text"> 基础用法 </div>
      <am-navbar title="标题" :border="true" />
    </div>
    <div class="am-button-demo-box">
      <div class="text"> 返回上级 </div>
      <am-navbar
        on-click-left="handleClick"
        title="标题"
        left-text="返回"
        right-text="确定"
        :border="true"
        left-arrow
      />
    </div>
    <div class="am-button-demo-box">
      <div class="text"> 颜色 </div>
      <am-navbar
        on-click-left="handleClick"
        background-color="#1a9dff"
        left-arrow
        color="#fff"
        title="标题"
        left-text="返回"
        right-text="确定"
        :border="true"
      />
    </div>
    <div class="am-button-demo-box">
      <div class="text"> 插槽 </div>
      <am-navbar
        on-click-left="handleClick"
        background-color="#1a9dff"
        left-arrow
        color="#fff"
        title="标题"
        left-text="返回"
        :border="true"
      >
        <template #right>
          <am-icon name="amberm-sousuo" color="#fff" />
        </template>
      </am-navbar>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'ButtonDemo',
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
  .am-button-demo {
    // background-color: #ddd;
    width: 100%;
    height: 100%;

    &-box {
      margin: 10px 0;
      .text {
        padding: 10px;
      }
    }
  }
</style>
