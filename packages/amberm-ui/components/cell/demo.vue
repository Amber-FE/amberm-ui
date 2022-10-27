<template>
  <div>
    <div class="amberm-demo-text"> 基础用法 </div>
    <am-cell title="标题" label="元素" value="内容" />
    <am-cell required title="标题" />
  </div>
  <div>
    <div class="amberm-demo-text"> 导航 </div>

    <am-cell title="路由跳转" to="/" is-link value="内容" />
    <am-cell title="url跳转" url="https://github.com/Amber-FE/amber-ui" is-link value="内容" />
  </div>
  <div>
    <div class="amberm-demo-text"> 插槽 </div>
    <am-cell is-link value="内容">
      <template #title>
        <span>标题</span>
        <am-button size="mini"> 666 </am-button>
      </template>
    </am-cell>
  </div>
  <div class="amberm-demo-text"> 分组标题 </div>
  <am-cell-group title="分组1">
    <am-cell title="标题" label="元素" value="内容" />
    <am-cell required title="标题" />
  </am-cell-group>

  <div class="amberm-demo-text"> 卡片风格 </div>
  <am-cell-group insert title="分组1">
    <am-cell title="标题" label="元素" value="内容" />
    <am-cell required title="标题" />
  </am-cell-group>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'CellDemo',
    setup() {
      return {}
    }
  })
</script>

<style scoped lang="scss">
  .amberm-demo-text {
    margin: 10px;
  }
</style>
