<template>
  <div class="amber-cell" :class="baseClass" :style="baseStyle" @click="handleClick">
    <div class="amber-cell-container" :style="descOnlyStyle">
      <template v-if="slots.default">
        <slot></slot>
      </template>
      <template v-else>
        <div class="amber-cell-container--title" v-if="title || subTitle">
          <div class="title">
            <slot name="icon"></slot>
            {{ title }}
          </div>
          <div class="sub-title">{{ subTitle }}</div>
        </div>
        <div class="amber-cell-container--desc">
          {{ desc }}
        </div>
        <template v-if="slots.link">
          <slot name="link"></slot>
        </template>
        <template v-else>
          <amber-icon v-if="isLink" name="right"></amber-icon>
        </template>
      </template>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'AmberCell',
  props: {
    desc: {
      type: String,
      default: () => {
        return ''
      }
    },
    descTextAlign: {
      type: String,
      default: () => {
        return 'right'
      }
    },
    isLink: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    roundRadius: {
      type: [String, Number],
      default: () => {
        return ''
      }
    },
    subTitle: {
      type: String,
      default: () => {
        return ''
      }
    },
    title: {
      type: String,
      default: () => {
        return ''
      }
    },
    to: {
      type: String,
      default: () => {
        return ''
      }
    },
    url: {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  emits: ['click'],
  setup(props, { emit, slots }) {
    const router = useRouter()

    const baseClass = computed(() => {
      return {
        [`amber-cell--clickable`]: props.isLink
      }
    })

    const baseStyle = computed(() => ({
      borderRadius:
        typeof props.roundRadius === 'number' ? props.roundRadius : `${props.roundRadius}px`
    }))

    const descOnlyStyle = computed(() => {
      if (!props.title && !props.subTitle && props.desc) {
        return {
          'justify-content': props.descTextAlign
        }
      }
      return ''
    })

    const methods = {
      handleClick(e: Event) {
        emit('click', e)
        if (props.to) {
          router.push(props.to)
        } else if (props.url) {
          window.location.href = props.url
        }
      }
    }

    return {
      slots,
      baseClass,
      baseStyle,
      descOnlyStyle,
      ...methods
    }
  }
})
</script>
