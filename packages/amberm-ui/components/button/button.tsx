/* eslint-disable import/no-relative-packages */
import type { CSSProperties } from 'vue'
import { computed, defineComponent } from 'vue'

import { useNameSpace } from '../../utils'

import { buttonProps } from './types'
import '../../../amberm-icons/dist/style.css'

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
        return <span class="am-button-loading-text">{props.loadingText}</span>
      }
      return <span>{slots.default ? slots.default() : ''}</span>
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
          {loading && (
            <span class="am-button-loading">
              <span class="loading-spinner"></span>
            </span>
          )}
          {renderText()}
        </button>
      )
    }
  }
})
