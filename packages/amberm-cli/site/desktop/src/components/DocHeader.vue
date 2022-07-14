<template>
  <div class="header">
    <div class="header-logo">
      <img src="../assets/img/logo.png" />
    </div>
    <div class="header-right">
      <div class="header-right-nav">
        <span> {{ $t('header_nav.design') }}</span>
        <span> {{ $t('header_nav.components') }}</span>
      </div>
      <div class="header-right-i18" @click="setLang(zhCN)">{{ $t('header.language') }}</div>
    </div>
  </div>
</template>
<script setup>
  import { ref, getCurrentInstance } from 'vue'

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
  .header {
    display: flex;
    position: fixed;
    width: 100%;
    height: 86px;
    background-color: white;
    border-bottom: 2px solid #eeeeee;
    z-index: 100;
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
          color: #0ebbff;
          margin: 10px;
          cursor: pointer;
        }
      }

      &-i18 {
        margin: 0px 25px;
        cursor: pointer;
      }
    }
  }
</style>
