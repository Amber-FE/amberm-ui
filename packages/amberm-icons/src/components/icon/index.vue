<template>
  <template v-if="!isImageIcon">
    <svg-icon :name="name" :size="size" :color="color"></svg-icon>
  </template>
  <template v-if="isImageIcon">
      <img :style={width:size,height:size} :src="name"  />
  </template>
</template>
<script lang="ts">
import { computed, CSSProperties, defineComponent } from 'vue'
import SvgIcon from './svg/index.vue'
const isImage = (name?: string) =>name?.includes('/');

export default defineComponent({
  name: 'am-icon',
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
    },
    backgroundColor: {
      type:String,
      default:'#fff'
    }
  },
  setup(props) {
    const iconSize = `${props.size.replace('px', '')}px`
    const isImageIcon = isImage(props.name)
    console.log(isImageIcon);

    const iconStyle = computed(() => {
      const style: CSSProperties = {}
      style.color = props.color
      style.fontSize = iconSize
      return style
    })

    return {
      iconStyle,
      isImageIcon
    }
  }
})
</script>
