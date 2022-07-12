<template>
  <div class="Mobile">
    <iframe scrolling="auto" :src="url" />
  </div>
</template>
<script setup>
  import { ref } from 'vue'

  const url = ref('http://127.0.0.1:9909/mobile.html')
  const baseURL = ref('http://127.0.0.1:9909/mobile.html')
  console.log(baseURL)
</script>
<style lang="scss" scoped>
  .Mobile {
    display: flex;
    position: relative;
    justify-content: center;
    width: 18%;
    height: 100%;
    background-color: white;
    border-right: 2px solid #eeeeee;

    iframe {
      width: 350px;
      height: 750px;
      -webkit-box-shadow: #ebedf0 0 4px 12px;
      box-shadow: #ebedf0 0 4px 12px;
      border-radius: 12px;
      overflow: hidden;
      border: none !important;
    }
  }
</style>
