<template>
  <div class="amber-icon" @click="handleClick">
    <i
      v-if="svgShowType"
      :style="{ color: color, 'font-size': svgSize }"
      class="iconfont"
      :class="name"
    ></i>
    <svg v-else :style="{ fill: color, width: svgSize, height: svgSize }">
      <use :xlink:href="`#icon-${name}`"></use>
    </svg>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'AmberIcon',
  props: {
    color: {
      type: String,
      default: () => {
        return '#314659'
      }
    },
    name: {
      type: String,
      required: true,
      default: () => {
        return ''
      }
    },
    size: {
      type: [Number, String],
      default: () => {
        return '20px'
      }
    }
  },
  emits: ['click'],
  setup(props: any, { emit }) {
    const svgSize = computed(() => {
      if (typeof props.size === 'number') {
        return `${props.size}px`
      }
      return props.size
    })

    const svgShowType = computed(() => {
      if (props.name.indexOf('icon') !== -1) {
        return true
      }
      return false
    })

    const methods = {
      handleClick(e: Event) {
        emit('click', e)
      }
    }

    return {
      svgSize,
      svgShowType,
      ...methods
    }
  }
})
</script>
