<template>
  <am-icon name="amberm-flow-packet-copy" color="red" :size="size"></am-icon>
  <am-icon name="amberm-platform" color="red" :size="size"></am-icon>
  <am-icon name="amberm-desktop" color="red"  :size="size"></am-icon>
  <am-icon name="amberm-zuo" color="red" :size="size"></am-icon>
  <am-icon name="amberm-you" color="red" :size="size"></am-icon>
  <am-icon name="amberm-sousuo" color="red"  :size="size"></am-icon>
  <am-icon name="https://fastly.jsdelivr.net/npm/@vant/assets/icon-demo.png"   :size="size"></am-icon>




</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import AmIcon from './components/icon/index.vue'

export default defineComponent({
  name: 'App',
  components: {
    AmIcon
  },
  setup() {
    const size = ref('32px')
    const iconList =['amberm-flow-packet-copy','amberm-platform','amberm-desktop','']
    return {
      size
    }
  }
})
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  justify-content: center;
  /* color: #2c3e50; */
  margin-top: 60px;
}
</style>
