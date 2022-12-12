<template>
  <div class="Mobile" :style="style">
    <iframe scrolling="auto" :src="url" />
  </div>
</template>
<script setup>
  import { ref, watch, computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useRoute } from 'vue-router'

  const { locale } = useI18n()

  const { location } = window

  const route = useRoute()

  const top = ref(88)
  const bottom = ref(0)
  function onScroll() {
    const { pageYOffset: offset } = window
    top.value = Math.max(0, 88 - offset)
  }
  const style = computed(() => ({
    top: `${top.value}px`,
    bottom: `${bottom.value}px`
  }))
  window.addEventListener('scroll', onScroll)
  onScroll()

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
  @import '../../../common/style/var.scss';
  @import '../../../common/style/common.scss';

  .Mobile {
    display: flex;
    position: fixed;
    top: 24px;
    justify-content: center;
    width: 18%;
    height: 100%;
    background-color: white;
    border-right: 2px solid #eeeeee;
    top: 88px;
    right: 24px;
    z-index: 1;
    box-sizing: border-box;
    width: 360px;
    min-width: 360px;
    overflow: hidden;
    background: $themeColor1;
    border-radius: 20px;
    box-shadow: 0 8px 12px #ebedf0;
    @media (max-width: 1100px) {
      right: auto;
      left: 750px;
    }

    @media (min-width: var(amberm-doc-row-max-width)) {
      right: 50%;
      margin-right: (var(amberm-doc-row-max-width) / 2) + 24px;
    }
    iframe {
      width: 350px;
      height: 900px;
      -webkit-box-shadow: #ebedf0 0 4px 12px;
      box-shadow: #ebedf0 0 4px 12px;
      border-radius: 12px;
      overflow: hidden;
      border: none !important;
    }
  }
</style>
