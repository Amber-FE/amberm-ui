<template>
  <svg-icon :name="name" :size="size" :color="color"></svg-icon>
</template>
<script lang="ts">
import { computed, CSSProperties, defineComponent } from 'vue'
import SvgIcon from './svg/index.vue'

export default defineComponent({
  name: 'Icon',
  components: { SvgIcon },
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: '16px'
    },
    color: {
      type: String,
      default: '#000000'
    }
  },
  setup(props) {
    const iconSize = `${props.size.replace('px', '')}px`

    const iconStyle = computed(() => {
      const style: CSSProperties = {}
      style.color = props.color
      style.fontSize = iconSize
      return style
    })

    return {
      iconStyle
    }
  }
})
</script>
