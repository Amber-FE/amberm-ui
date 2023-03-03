import { computed, defineComponent, provide, ref, watch } from 'vue'
import type { Ref } from 'vue'

import { useNameSpace } from '../../utils'

import { tabbarProps } from './types'

const name = useNameSpace('tabbar')
export default defineComponent({
  name,
  props: tabbarProps,
  emits: ['change', 'update:modelValue', 'update:value'],
  setup(props, { slots, emit }) {
    const activeValue = ref(props.modelValue)
    watch(
      () => props.modelValue,
      (active) => {
        activeValue.value = props.modelValue
        emit('update:modelValue', active)
        emit('change', active)
      }
    )
    const defaultIndex: Ref<number> = ref(-1)
    const updateChild = (currentValue: number | string) => {
      activeValue.value = currentValue
      emit('update:modelValue', activeValue.value)
      emit('change', activeValue.value)
    }
    const tabbarRender = () => {
      return <>{slots.default?.()}</>
    }
    const getClass = computed(() => {
      return {
        'am-tabbar': true,
        'am-tabbar--fixed': props.fixed
      }
    })
    provide('tabbar', {
      defaultIndex,
      updateChild,
      activeValue,
      activeColor: props.activeColor,
      inActiveColor: props.inActiveColor
    })
    return () => {
      return (
        <div style={{ zIndex: props.ZIndex }} class={getClass.value}>
          {tabbarRender()}
        </div>
      )
    }
  }
})
