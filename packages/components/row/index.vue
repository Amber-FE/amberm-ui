<template>
  <div class="amber-row" :class="getClass">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'AmberRow',
  props: {
    align: {
      type: String,
      default: () => {
        return 'top'
      }
    },
    gutter: {
      type: Number,
      default: () => {
        return 0
      }
    },
    justify: {
      type: String,
      default: () => {
        return 'start'
      }
    }
  },
  setup(props) {
    const getClass = computed(() => {
      return [`amber-row-${props.align}`, `amber-row-${props.justify}`]
    })

    return {
      getClass
    }
  }
})
</script>
<style lang="scss" scoped>
@import '../../styles/variables.scss';
@import './index.scss';
</style>