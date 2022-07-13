<template>
  <div class="Mobile">
    <iframe scrolling="auto" :src="url" />
  </div>
</template>
<script setup>
  import { ref, watch } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useRoute } from 'vue-router'

  const { locale } = useI18n()

  const { location } = window

  const route = useRoute()

  const path = location.pathname.split('/')[2]

  const url = ref(`${location.origin}/mobile.html?lang=${locale.value}&path=/${path ?? ''}`)

  watch(
    () => locale.value,
    () => {
      url.value = `${location.origin}/mobile.html?lang=${locale.value}&path=/${path ?? ''}`
    }
  )
  watch(
    () => route.path,
    () => {
      url.value = `${location.origin}/mobile.html?lang=${locale.value}&path=/${
        route.path.split('/')[2] ?? ''
      }`
    }
  )
</script>
<style lang="scss" scoped>
  .Mobile {
    display: flex;
    position: relative;
    justify-content: center;
    width: 18%;
    height: 100%;
    background-color: white;
    border-right: 2px solid #eeeeee;

    iframe {
      width: 350px;
      height: 750px;
      -webkit-box-shadow: #ebedf0 0 4px 12px;
      box-shadow: #ebedf0 0 4px 12px;
      border-radius: 12px;
      overflow: hidden;
      border: none !important;
    }
  }
</style>
