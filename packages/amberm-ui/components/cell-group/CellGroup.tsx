/* eslint-disable import/no-relative-packages */
import type { CSSProperties } from 'vue'
import { computed, defineComponent } from 'vue'

import { useNameSpace } from '../../utils'

import { cellGroupProps } from './types'

const name = useNameSpace('cell-group')

export default defineComponent({
  name,
  props: cellGroupProps,
  setup(props, { slots }) {
    const titleClass = computed(() => ({
      [`${name}-title`]: props.title,
      [`${name}-title-insert`]: props.insert
    }))
    const classes = computed(() => ({
      [`${name}`]: true,
      [`${name}-insert`]: props.insert,
      [`${name}-border`]: props.border
    }))
    const titleRender = () => {
      if (slots.title) {
        return slots.title()
      }
      if (props.title) {
        return <div class={titleClass.value}>{props.title}</div>
      }
      return ''
    }
    const groupRender = () => {
      return <div class={classes.value}>{slots.default?.()}</div>
    }
    return () => {
      return (
        <>
          {titleRender()}
          {groupRender()}
        </>
      )
    }
  }
})
