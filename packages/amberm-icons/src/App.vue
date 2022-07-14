<template>
  <Icon name="amberm-flow-packet-copy" :size="size"></Icon>
  <Icon name="amberm-platform" :size="size"></Icon>
  <Icon name="amberm-desktop" :size="size"></Icon>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Icon from './components/icon/index.vue'

export default defineComponent({
  name: 'App',
  components: {
    Icon
  },
  setup() {
    const size = ref('32px')

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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
