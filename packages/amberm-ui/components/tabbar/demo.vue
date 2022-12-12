<template>
  <div class="amberm-demo-relative">
    <div class="amberm-demo-text"> 基础用法 </div>
    <am-tabbar v-model="activeName" @change="change">
      <am-tabbar-item icon="amberm-desktop" title="首页" name="首页" />
      <am-tabbar-item icon="amberm-desktop" title="我的" name="我的" />
      <am-tabbar-item icon="amberm-desktop" title="商城" name="商城" />
      <am-tabbar-item icon="amberm-desktop" title="分类" name="分类" />
      <am-tabbar-item icon="amberm-desktop" title="购物车" name="购物车" />
    </am-tabbar>
  </div>
  <div class="amberm-demo-relative">
    <div class="amberm-demo-text"> 自定义图标 </div>
  <am-tabbar v-model="activeName"  @change="change">
    <am-tabbar-item name="首页">
      <template #icon="props">
        <am-icon size="26" :name="props.isActive?'amberm-package':'amberm-desktop'" />
      </template>
    </am-tabbar-item>
    <am-tabbar-item icon="amberm-desktop" name="我的" />
    <am-tabbar-item icon="amberm-desktop" name="商城" />
    <am-tabbar-item icon="amberm-desktop" name="分类" />
    <am-tabbar-item icon="amberm-desktop" name="购物车" />
  </am-tabbar>
  </div>
<div class="amberm-demo-relative">
  <div class="amberm-demo-text"> 自定义颜色 </div>
  <am-tabbar v-model="activeName" in-active-color="green" active-color="red" @change="change">
    <am-tabbar-item name="首页">
      <template #icon="props">
        <am-icon size="26" :name="props.isActive?'amberm-package':'amberm-desktop'" />
      </template>
    </am-tabbar-item>
    <am-tabbar-item icon="amberm-desktop"  name="我的" />
    <am-tabbar-item icon="amberm-desktop" name="商城" />
    <am-tabbar-item icon="amberm-desktop" name="分类" />
    <am-tabbar-item icon="amberm-desktop" name="购物车" />
  </am-tabbar>
</div>
  
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    name: 'TabbarDemo',
    setup() {
      const activeName = ref('首页')
      const change = (val) => {
        console.log(val)
      }
      const changes = ()=> {
        activeName.value="购物车"
      }
      return { activeName, change ,changes }
    }
  })
</script>

<style>
  .amberm-demo-text {
    margin: 10px;
  }
  .amberm-demo-relative .am-tabbar{
    position: relative;;
  }
</style>
