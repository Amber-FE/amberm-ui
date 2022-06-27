<template>
  <div class="container">
    <h2>基础用法</h2>
    <section class="container-content">
      <amber-navbar
        left-arrow
        title="标题"
        left-text="返回"
        right-text="按钮"
        @click-left="onClickLeft"
        @click-right="onClickRight"
        @click-title="onClickTitle"
      ></amber-navbar>
    </section>
    <h2>高级用法</h2>
    <section class="container-content">
      <amber-navbar left-arrow title="标题" left-text="返回">
        <template v-slot:rightIcon>
          <amber-icon size="16" name="icon-xiaoxi"></amber-icon>
        </template>
      </amber-navbar>
      <amber-navbar title="标题" left-text="返回" right-text="按钮">
        <template v-slot:leftIcon>
          <amber-icon size="16" name="icon-xiaoxi"></amber-icon>
        </template>
      </amber-navbar>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const methods = {
      onClickLeft() {
        console.log('click-left')
      },
      onClickTitle() {
        console.log('click-title')
      },
      onClickRight() {
        console.log('click-right')
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
    .amber-navbar {
      margin-bottom: 10px;
    }
  }
}
</style>
