<template>
  <div class="amber-navbar">
    <div class="amber-navbar-left" @click="hangleClickLeft">
      <template v-if="slots.leftIcon">
        <slot name="leftIcon"></slot>
      </template>
      <template v-else>
        <amber-icon v-if="leftArrow" name="left" size="16"></amber-icon>
      </template>
      <span :class="{ 'left-text': leftArrow || slots.leftIcon }">{{ leftText }}</span>
    </div>
    <div class="amber-navbar-title" @click="handleClickTitle">
      {{ title }}
    </div>
    <div class="amber-navbar-right" @click="handleClickRight">
      <template v-if="slots.rightIcon">
        <slot name="rightIcon"></slot>
      </template>
      <template v-else>
        <span>{{ rightText }}</span>
      </template>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AmberNavbar',
  props: {
    leftText: {
      type: String,
      default: () => {
        return ''
      }
    },
    leftArrow: {
      type: Boolean,
      defalut: () => {
        return false
      }
    },
    rightText: {
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
    }
  },
  emits: ['click-left', 'click-title', 'click-right'],
  setup(props, { emit, slots }) {
    const methods = {
      hangleClickLeft(e: Event) {
        emit('click-left', e)
      },
      handleClickTitle(e: Event) {
        emit('click-title', e)
      },
      handleClickRight(e: Event) {
        emit('click-right', e)
      }
    }

    return {
      slots,
      ...methods
    }
  }
})
</script>
