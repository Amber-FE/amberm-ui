<template>
  <div class="amber-divider" :class="getClasses">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'AmberDivider',
  props: {
    contentPosition: {
      type: String,
      default: () => {
        return 'center'
      }
    },
    dashed: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    direction: {
      type: String,
      default: () => {
        return 'horizontal'
      }
    }
  },
  setup(props) {
    const getClasses = computed(() => {
      return {
        [`amber-divider-${props.contentPosition}`]: props.direction === 'horizontal',
        [`amber-divider-${props.direction}`]: props.direction === 'vertical',
        'amber-divider-dashed': props.dashed
      }
    })

    return {
      getClasses
    }
  }
})
</script>
<style lang="scss" scoped>
@import '../../styles/variables.scss';
@import './index.scss';
</style>