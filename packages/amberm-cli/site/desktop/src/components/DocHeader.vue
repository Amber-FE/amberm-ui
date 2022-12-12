<!-- eslint-disable no-restricted-syntax -->
<template>
  <div class="header">
    <div class="header-logo">
      <img src="../assets/img/logo.png ">
    </div>
    <div class="header-right">
      <div class="header-right-nav">
        <span @click="changeTheme">{{ $t('header_nav.themes') }}</span>
        <span> {{ $t('header_nav.design') }}</span>
        <span> {{ $t('header_nav.components') }}</span>
      </div>
      <div class="header-right-i18" @click="setLang(zhCN)">
        {{ $t('header.language') }}
      </div>
    </div>
  </div>
</template>
<script setup>
  import { watch, ref, getCurrentInstance, onMounted } from 'vue'

  import { syncThemeToChild } from '../../../common/utils/iframe-router'
  import { modeMap, modeMapArr } from '../../../common/utils/modeMap'

  const bodyStyle = window.document.getElementsByTagName('body')[0].style
  const index = +localStorage.getItem('themeIndex')
  const activeIndex = ref(index)
  const changeTheme = () => {
    if (activeIndex.value < modeMap['--am-themeColor'].length - 1) {
      activeIndex.value += 1
    } else {
      activeIndex.value = 0
    }
  }
  onMounted(() => {
    // eslint-disable-next-line no-restricted-syntax
    for (const type of modeMapArr) {
      bodyStyle.setProperty(type, modeMap[type][activeIndex.value])
      console.log(type, modeMap[type][activeIndex.value])
    }
  })
  watch(
    activeIndex,
    (newVal) => {
      localStorage.setItem('themeIndex', activeIndex.value)
      // eslint-disable-next-line no-restricted-syntax
      for (const type of modeMapArr) {
        bodyStyle.setProperty(type, modeMap[type][activeIndex.value])
      }
      syncThemeToChild(activeIndex.value)
    },
    { immediate: true }
  )
  const { ctx } = getCurrentInstance()

  const zhCN = ref(false)

  const setLang = (flag) => {
    if (flag) {
      ctx.$i18n.locale = 'en_US'
    } else {
      ctx.$i18n.locale = 'zh_CN'
    }
    zhCN.value = !flag
  }
</script>
<style lang="scss" scoped>
  @import '../../../common/style/common.scss';
  .header {
    position: relative;
    display: flex;
    width: 100%;
    height: 86px;
    background-color: $themeColor;
    border-bottom: 2px solid #eeeeee;
    z-index: 100;
    user-select: none;
    &-logo {
      width: 150px;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        cursor: pointer;
      }
    }

    &-right {
      position: absolute;
      right: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;

      &-nav {
        span {
          color: $textColor;
          margin: 10px;
          cursor: pointer;
        }
      }

      &-i18 {
        margin: 0px 25px;
        color: $textColor;
        cursor: pointer;
      }
    }
  }
</style>
