<template>
  <div class="amber-cell-ground">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AmberCellGround',
  setup() {
    return {}
  }
})
</script>
<style lang="scss" scoped>
@import '../../styles/variables.scss';
@import './index.scss';
</style>