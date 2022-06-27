<template>
  <div class="container">
    <h2>基本用法</h2>
    <section class="container-content">
      <amber-button @click="showBasic = true">展示弹出层</amber-button>
    </section>
    <amber-popup v-model:visiable="showBasic">展示弹出层</amber-popup>
    <h2>弹出位置</h2>
    <section class="container-content">
      <amber-button @click="showLeft = true">左侧弹出</amber-button>
      <amber-button @click="showRight = true">右侧弹出</amber-button>
      <amber-button @click="showTop = true">顶部弹出</amber-button>
      <amber-button @click="showBottom = true">底部弹出</amber-button>
    </section>
    <amber-popup position="left" v-model:visiable="showLeft">左侧弹出</amber-popup>
    <amber-popup position="right" v-model:visiable="showRight">右侧弹出</amber-popup>
    <amber-popup position="top" v-model:visiable="showTop">顶部弹出</amber-popup>
    <amber-popup position="bottom" v-model:visiable="showBottom">底部弹出</amber-popup>
    <h2>关闭图标</h2>
    <section class="container-content">
      <amber-button @click="showIcon = true">关闭图标</amber-button>
      <amber-button @click="customIcon = true">自定义图标</amber-button>
    </section>
    <amber-popup closeable position="bottom" v-model:visiable="showIcon"></amber-popup>
    <amber-popup
      close-icon="error"
      closeable
      position="bottom"
      v-model:visiable="customIcon"
    ></amber-popup>
    <h2>圆角弹窗</h2>
    <section class="container-content">
      <amber-button @click="showRound = true">圆角弹窗</amber-button>
    </section>
    <amber-popup round position="bottom" v-model:visiable="showRound"></amber-popup>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const data = {
      showBasic: false,
      showLeft: false,
      showRight: false,
      showTop: false,
      showBottom: false,
      showIcon: false,
      customIcon: false,
      showRound: false
    }

    const state = reactive(data)

    return {
      ...toRefs(state)
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
    .amber-button {
      margin-bottom: 10px;
    }
  }
}
</style>
