<template>
  <div class="amber-col" :class="classes" :style="[flexStyle, gutter]">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, getCurrentInstance } from 'vue'

export default defineComponent({
  name: 'AmberCol',
  props: {
    flex: {
      type: [Number, String],
      default: () => {
        return ''
      }
    },
    offset: {
      type: Number,
      default: () => {
        return 0
      }
    },
    span: {
      type: Number,
      default: () => {
        return 0
      }
    },
    xs: {
      type: Number,
      default: () => {
        return 0
      }
    },
    sm: {
      type: Number,
      default: () => {
        return 0
      }
    },
    md: {
      type: Number,
      default: () => {
        return 0
      }
    },
    lg: {
      type: Number,
      default: () => {
        return 0
      }
    },
    xl: {
      type: Number,
      default: () => {
        return 0
      }
    }
  },
  setup(props) {
    const classes = computed(() => {
      return {
        [`amber-col-${props.span}`]: props.span !== 0,
        [`amber-col-offset-${props.offset}`]: props.offset !== 0,
        [`amber-col-xs-${props.xs}`]: props.xs !== 0,
        [`amber-col-sm-${props.sm}`]: props.sm !== 0,
        [`amber-col-md-${props.md}`]: props.md !== 0,
        [`amber-col-lg-${props.lg}`]: props.lg !== 0,
        [`amber-col-xl-${props.xl}`]: props.xl !== 0
      }
    })

    const el: any = getCurrentInstance()

    const gutter = computed(() => {
      if (el && el.parent?.type.name === 'AmberRow' && el.parent.props.gutter !== 0) {
        return {
          'padding-left': `${el.parent.props.gutter / 2}px`,
          'padding-right': `${el.parent.props.gutter / 2}px`
        }
      }
      return ''
    })

    const methods = {
      parseFlex(flex: any) {
        if (typeof flex === 'number') {
          return `${flex} ${flex} auto`
        }

        if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
          // 匹配类似100px格式数值
          return `0 0 ${flex}`
        }

        return flex
      }
    }

    const flexStyle = computed(() => {
      if (props.flex) {
        return {
          flex: methods.parseFlex(props.flex)
        }
      }
      return {}
    })

    return {
      classes,
      flexStyle,
      gutter,
      ...methods
    }
  }
})
</script>
<style lang="scss" scoped>
@import '../../styles/variables.scss';
@import './index.scss';
</style>