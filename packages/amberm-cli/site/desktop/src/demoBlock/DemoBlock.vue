<template>
  <div class="block-container">
    <!-- <router-view /> -->

    <slot />
  </div>
</template>
<script setup>
  import { onMounted, useSlots } from 'vue'

  // dom.value = renderer()
  onMounted(() => {
    const slots = useSlots()
    console.dir(slots.default)
  })
</script>
<style lang="scss">
  .block-container {
    border: 1px solid #ebeefb;
    padding: 5px;
    .language-html {
      color: red;
    }
  }
</style>
