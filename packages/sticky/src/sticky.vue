<template>
  <div class="amber-sticky" :style="getStyle">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'AmberSticky',
  props: {
    bottom: {
      type: Number,
      default: () => {
        return 0
      }
    },
    container: {
      type: Element,
      default: () => {
        return null
      }
    },
    position: {
      type: String,
      default: () => {
        return 'top'
      }
    },
    top: {
      type: Number,
      default: () => {
        return 0
      }
    },
    zIndex: {
      type: Number,
      default: () => {
        return 2000
      }
    }
  },
  setup(props) {
    const getStyle = computed(() => {
      if (props.position === 'top') {
        return {
          top: `${props.top}px`,
          'z-index': props.zIndex
        }
      }
      return {
        bottom: `${props.bottom}px`,
        'z-index': props.zIndex
      }
    })

    return {
      getStyle
    }
  }
})
</script>
