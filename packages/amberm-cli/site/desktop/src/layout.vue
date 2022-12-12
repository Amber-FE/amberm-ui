<script setup>
  import DocHeader from './components/DocHeader.vue'
  import DocAside from './components/DocAside.vue'
  import DocMain from './components/DocMain.vue'
  import DocMobile from './components/DocMobile.vue'
</script>
<template>
  <doc-header />
  <div class="container">
    <doc-aside />
    <doc-main />
    <doc-mobile />
  </div>
</template>
<style lang="scss" scoped>
  .container {
    // display: flex;
    width: 100%;
    height: 100%;
  }
  ::-webkit-scrollbar{
    width: 8px;
    height: 10px;
    border-radius: 8px;
  }
  ::-webkit-scrollbar-thumb{
    border-radius: 8px;
  }
  ::-webkit-scrollbar-track{
    border-radius: 8px;
  }
</style>
