import type { CSSProperties } from 'vue'
import { computed, defineComponent } from 'vue'
import { useNameSpace } from '../../utils'
import { buttonProps } from './types'

const name = useNameSpace('button')

export default defineComponent({
  name,
  props: buttonProps,
  setup(props, { slots }) {
    const classes = computed(() => ({
      [name]: true,
      [`${name}-${props.type}`]: true,
      [`${name}-round`]: props.round,
      [`${name}-disabled`]: props.disabled,
      [`${name}-${props.size}`]: props.size
    }))

    const renderText = () => {
      if (props.loadingText) {
        return <span>{props.loadingText}</span>
      } else {
        return <span>{slots.default ? slots.default() : ''}</span>
      }
    }

    const getStyle = () => {
      const { color, plain } = props
      const style: CSSProperties = {}
      if (color && plain) {
        style.color = color
        style.background = '#fff'
        style.borderColor = color
      }
      return style
    }

    const getAttrs = () => {
      const { disabled, loading } = props
      return {
        attrs: {
          disabled: disabled || loading
        }
      }
    }

    return () => {
      const { loading } = props
      return (
        <button class={classes.value} {...getAttrs()} style={getStyle()}>
          {loading && <amber-icon name="loading" />}
          {renderText()}
        </button>
      )
    }
  }
})
