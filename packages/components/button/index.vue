<template>
  <button :class="classes" @click="handleClick" :disabled="disabled" :loading="loading">
    <template v-if="loading">
      <div class="amber-button-loading">
        <i class="amber-button-loading--spinner">
          <amber-icon name="loading" :color="loadingColor"></amber-icon>
        </i>
        <span v-if="loadingText" class="amber-button-loading--text">{{ loadingText }}</span>
      </div>
    </template>
    <slot v-else></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

const prefixCls = 'amber-button'

export default defineComponent({
  name: 'AmberButton',
  props: {
    disabled: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    loading: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    loadingText: {
      type: String,
      default: () => {
        return ''
      }
    },
    round: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    size: {
      // normal large small mini
      type: String,
      default: () => {
        return 'normal'
      }
    },
    type: {
      // default primary success info warning danger
      type: String,
      default: () => {
        return 'default'
      }
    }
  },
  emits: ['click'],
  setup(props, { emit }) {
    const loadingColor = computed(() => {
      if (props.loading && props.type === 'default') {
        return ''
      }
      return '#fff'
    })

    const classes = computed(() => {
      return {
        [prefixCls]: true,
        [`${prefixCls}-${props.type}`]: true,
        [`${prefixCls}-round`]: props.round,
        [`${prefixCls}-disabled`]: props.disabled,
        [`${prefixCls}-${props.size}`]: props.size
      }
    })

    const methods = {
      handleClick(event: Event) {
        emit('click', event)
      }
    }

    return {
      loadingColor,
      classes,
      ...methods
    }
  }
})
</script>