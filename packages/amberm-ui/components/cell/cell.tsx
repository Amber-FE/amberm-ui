/* eslint-disable import/no-relative-packages */
import type { CSSProperties } from 'vue'
import { computed, defineComponent } from 'vue'

import { useNameSpace } from '../../utils'
import { useRoute } from '../../utils/useRouter'

import { cellProps } from './types'

const name = useNameSpace('cell')

export default defineComponent({
  name,
  props: cellProps,
  setup(props, { slots }) {
    const route = useRoute()
    const leftIcon = () => {
      if (slots.icon) {
        return slots.icon()
      }
      if (props.icon) {
        return <am-icon class={`${name}-icon`} name={props.icon}></am-icon>
      }
      return ''
    }
    const leftLabel = () => {
      if (slots.label) {
        return slots.label()
      }
      if (props.label) {
        return <div class={[`${name}-label`, props.labelClass]}>{props.label}</div>
      }
      return ''
    }
    const titleRender = () => {
      if (slots.title) {
        return slots.title()
      }
      if (props.title) {
        return (
          <div class={props.titleClass} style={props.titleStyle}>
            {props.title}
          </div>
        )
      }
      return ''
    }
    const leftRender = () => {
      return (
        <div class={[`${name}-left`]}>
          {titleRender()}
          {leftLabel()}
        </div>
      )
    }
    const rightRender = () => {
      if (slots.value) {
        return slots.value()
      }
      if (props.value) {
        return <div class={`${name}-right`}>{props.value}</div>
      }
      return ''
    }
    const rightIcon = () => {
      if (slots.rightIcon) {
        return slots.rightIcon()
      }
      if (props.isLink) {
        return <am-icon color="#999" name={`amberm-${props.arrowDirection}`}></am-icon>
      }
      return ''
    }
    const clickable = props.isLink || props.clickable
    const classes = computed(() => ({
      [name]: true,
      [`${name}-clickable`]: clickable,
      [`${name}-required`]: props.required
    }))
    return () => {
      return (
        <div class={classes.value} onClick={route}>
          {leftIcon()}
          {leftRender()}
          {rightRender()}
          {rightIcon()}
        </div>
      )
    }
  }
})
