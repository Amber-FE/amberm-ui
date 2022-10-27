<template>
  <div>
    <div class="am-icon-text"> 基础图标 </div>
    <div class="am-icon-box">
      <div v-for="(item, index) in iconList" :key="index" class="am-icon-box-small">
        <am-icon :name="'amberm-' + item" :size="size" />
        <div>{{ item }}</div>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    name: 'IconDemo',
    setup() {
      const size = ref('32')
      const iconList = ['zuo', 'you', 'desktop', 'sousuo', 'package', 'platform']
      return { size, iconList }
    }
  })
</script>
<style lang="scss" scoped>
  .am-icon-box {
    display: flex;
    flex-wrap: wrap;
    margin: 15px;
    &-small {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      width: 80px;
      height: 100px;
    }
  }
  .am-icon-text {
    margin: 20px;
  }
</style>
