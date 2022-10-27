/* eslint-disable import/no-relative-packages */
import { computed, defineComponent } from 'vue'
import type { CSSProperties } from 'vue'

import { useNameSpace } from '../../utils'

import { navbarProps } from './types'

const name = useNameSpace('navbar')
export default defineComponent({
  name,
  props: navbarProps,
  setup(props, { emit, slots }) {
    const onClickLeft = (event: MouseEvent) => emit('click-left', event)
    const onClickRight = (event: MouseEvent) => emit('click-right', event)
    const colorStyle = () => {
      const { color } = props
      const style: CSSProperties = {}
      style.color = color
      style.background = props.backgroundColor
      style.zIndex = props.zIndex
      return style
    }

    const classes = computed(() => ({
      [name]: true,
      [`${name}-fixed`]: props.fixed,
      [`${name}-border`]: props.border
    }))
    const textStyle = () => {
      const { color } = props
      const style: CSSProperties = {}
      style.color = color
      return style
    }
    const renderLeft = () => {
      if (slots.left) {
        return slots.left()
      }

      return [
        props.leftArrow && (
          <span>
            <am-icon color={props.color} name="amberm-zuo" size="12"></am-icon>
          </span>
        ),
        props.leftText && (
          <span style={textStyle()} class="left-text">
            {props.leftText}
          </span>
        )
      ]
    }
    const renderRight = () => {
      if (slots.right) {
        return slots.right()
      }
      return (
        <span style={textStyle()} class="am-navbar-right-text">
          {props.rightText}
        </span>
      )
    }
    const renderTitle = () => {
      if (slots.title) {
        return slots.title
      }
      return <span>{props.title}</span>
    }
    const hasLeft = props.leftArrow || props.leftText || slots.left
    const hasRight = props.rightText || slots.right
    return () => {
      return (
        <div style={colorStyle()} class={classes.value}>
          {hasLeft && (
            <div class="am-navbar-left" onClick={onClickLeft}>
              {renderLeft()}
            </div>
          )}
          <div class="">{renderTitle()}</div>
          {hasRight && (
            <div onClick={onClickRight} class="am-navbar-right">
              {renderRight()}
            </div>
          )}
        </div>
      )
    }
  }
})
