import { computed, defineComponent, ref, getCurrentInstance, inject,watch } from 'vue'
import type { CSSProperties } from 'vue'

import { useNameSpace } from '../../utils'
import { useRoute } from '../../utils/useRouter'

import { tabbarItemProps } from './types'

const name = useNameSpace('tabbar-item')
export default defineComponent({
  name,
  props: tabbarItemProps,
  setup(props, { slots, emit }) {
    const { activeValue, updateChild, activeColor, inActiveColor } = inject<any>('tabbar')
    const route = useRoute()
    const vm = getCurrentInstance()!.proxy!
    const textRender = () => {
      if (props.title) {
        return <div>{props.title}</div>
      }
      return ''
    }
    const onClick = (event: MouseEvent) => {
      emit('click', props.name)
      updateChild(props.name)
      route()
    }
    const color = computed(() => {
      return activeValue.value === props.name ? activeColor : inActiveColor
    })

    const getClass = computed(() => {
      return {
        'am-tabbar-item': true,
        'am-tabbar-item--active': activeValue.value === props.name
      }
    })
    const iconRender = () => {
      if (props.icon) {
        return (
          <div  class="am-tabbar-item__icon">
            <am-icon size="26" name={props.icon}></am-icon>
          </div>
        )
      }
      if (slots.icon) {

        return  <div  class="am-tabbar-item__icon">
       {slots.icon({isActive:activeValue.value === props.name})}
      </div>
      }
      return ''
    }
    return () => {
      return (
        <div style={{ color:color.value }} class={getClass.value} onClick={onClick}>
          {iconRender()}
          {textRender()}
        </div>
      )
    }
  }
})
