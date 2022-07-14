<script setup>
import DocHeader from './components/DocHeader.vue'
import DocAside from './components/DocAside.vue'
import DocMain from './components/DocMain.vue'
import DocMobile from './components/DocMobile.vue'
</script>
<template>
  <router-link to="/start">开始</router-link>
</template>
<style lang="scss" scoped>
.container {
  display: flex;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 90px;
}
</style>
