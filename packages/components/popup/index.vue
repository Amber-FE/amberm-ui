<template>
  <transition name="fade" v-on:after-leave="closed">
    <div
      class="amber-overlay"
      v-if="newValue"
      :style="popupIndex"
      @click="handleClosePopup(2)"
    ></div>
  </transition>
  <transition :name="popupAnimateName">
    <div class="amber-popup" v-if="newValue" :style="popupIndex" :class="popupClass">
      <amber-icon
        @click="handleClosePopup(1)"
        class="close-btn"
        :name="closeIcon"
        color="#969799"
        v-if="closeable"
      ></amber-icon>
      <slot></slot>
    </div>
  </transition>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'AmberPopup',
  props: {
    closeable: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    closeIcon: {
      type: String,
      default: () => {
        return 'close'
      }
    },
    position: {
      type: String,
      default: () => {
        return 'center'
      }
    },
    round: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    visiable: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    zIndex: {
      type: Number,
      default: () => {
        return 1000
      }
    }
  },
  emits: ['update:visiable', 'close', 'click-overlay', 'closed'],
  setup(props: any, { emit }) {
    const newValue = computed({
      get: () => props.visiable,
      set: (nv) => {
        emit('update:visiable', nv)
      }
    })

    const popupAnimateName = computed(() => {
      if (props.position === 'center') {
        return 'fade'
      }
      return `slide-${props.position}`
    })

    const popupIndex = computed(() => {
      return {
        'z-index': props.zIndex
      }
    })

    const popupClass = computed(() => {
      return {
        [`amber-popup-${props.position}`]: true,
        [`amber-popup-${props.position}-round`]: props.round
      }
    })

    const methods = {
      handleClosePopup(type: Number, e: Event) {
        emit('update:visiable', false)
        if (type === 1) {
          emit('close', e)
        } else {
          emit('click-overlay', e)
        }
      },
      closed(e: Event) {
        emit('closed', e)
      }
    }

    return {
      newValue,
      popupIndex,
      popupClass,
      popupAnimateName,
      ...methods
    }
  }
})
</script>
<style lang="scss" scoped>
@import '../../styles/variables.scss';
@import './index.scss';
</style>