<template>
  <svg class="icon svg-icon" :style="svgStyle" aria-hidden="true">
    <use :xlink:href="svgName"></use>
  </svg>
</template>
<script lang="ts">
import { computed, CSSProperties, defineComponent } from 'vue'
import { svgProps } from './types'

export default defineComponent({
  name: 'SvgIcon',
  props: svgProps,
  setup(props) {
    const svgSize = `${props.size.replace('px', '')}px`

    const svgName = computed(() => `#${props.name}`)

    const svgStyle = computed(() => {
      const style: CSSProperties = {}
      style.color = props.color
      style.fontSize = svgSize
      return style
    })

    return {
      svgStyle,
      svgName
    }
  }
})
</script>
<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  overflow: hidden;
  margin-right: 5px;
}
</style>
