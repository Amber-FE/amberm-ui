<template>
  <div class="container">
    <ul class="container-content">
      <li class="container-content-item" v-for="(iconName, index) in iconList" :key="index">
        <amber-icon :size="size" :name="iconName"></amber-icon>
        <span class="name">{{ iconName }}</span>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const data = {
      size: 28,
      iconList: [
        'loading',
        'shezhi',
        'error',
        'yonghu',
        'zhankai',
        'shouqi',
        'xiaoxi',
        'qingchu',
        'shangchuan',
        'down',
        'up',
        'left',
        'right',
        'dingwei',
        'gouwuche',
        'shijian',
        'rili',
        'chakan',
        'yincang',
        'gouxuan',
        'sousuo'
      ]
    }

    const state = reactive(data)

    return {
      ...state
    }
  }
})
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  &-content {
    list-style: none;
    overflow: hidden;
    &-item {
      width: 33.33%;
      float: left;
      text-align: center;
      margin-bottom: 20px;
      .name {
        display: block;
      }
    }
  }
}
</style>
