<template>
  <div v-if="isShow" id="nav">
    <!-- <div class="back" @click="goBack">返回</div> -->
    <am-icon name="left" class="back" @click="goBack" />
    {{ title }}
  </div>
  <div v-if="isShow" class="nav-black" />
  <div class="mobile-content">
    <router-view />
  </div>
</template>
<script>
  import { defineComponent, ref, watch, computed, onMounted, getCurrentInstance } from 'vue'
  import { useRoute, useRouter } from 'vue-router'

  import { useCurrentTheme } from '../common/utils/iframe-router'
  import { modeMap, modeMapArr } from '../common/utils/modeMap'

  export default defineComponent({
    name: 'App',
    setup() {
      const { ctx } = getCurrentInstance()
      const title = ref('AmberMobile')
      // 获取当前路由
      const route = useRoute()
      const router = useRouter()
      // 返回demo页
      const goBack = () => {
        router.back()
      }
      const bodyStyle = window.document.getElementsByTagName('body')[0].style

      const activeIndex = ref(+localStorage.getItem('themeIndex'))
      onMounted(() => {
        // eslint-disable-next-line no-restricted-syntax
        for (const type of modeMapArr) {
          bodyStyle.setProperty(type, modeMap[type][activeIndex.value])
        }
      })

      const methods = {
        sendToParent() {
          window.parent.postMessage(
            {
              msg: 'AmberMobile',
              key: 'AmberMobile'
            },
            '*'
          )
        }
      }

      onMounted(() => {
        // const { origin, hash, pathname } = window.top.location
        // console.log(window, '00s00s', route)
        window.addEventListener(
          'message',
          (event) => {
            if (event.data?.type === 'updateTheme') {
              const newTheme = event.data?.value || '0'
              activeIndex.value = newTheme
            }
          },
          // alert("iframe页面token失效了");
          false
        )
        methods.sendToParent()
      })

      // 是否显示 title
      const isShow = computed(() => {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        title.value = route?.meta?.ComponentName || route.name
        return title.value && title.value !== '/'
      })
      watch(
        () => route,
        () => {
          // const { hash } = window.top.location
          console.log(route)
        }
      )
      watch(
        activeIndex,
        (newVal) => {
          // eslint-disable-next-line no-restricted-syntax
          for (const type of modeMapArr) {
            bodyStyle.setProperty(type, modeMap[type][activeIndex.value])
          }
        },
        { immediate: true }
      )
      return { goBack, title, isShow, ...methods, activeIndex }
    }
  })
</script>
<style lang="scss">
  @import '../common/style/common.scss';
  * {
    padding: 0;
    margin: 0;
  }
  * ::-webkit-scrollbar {
    display: none;
  }
  html,
  body {
    height: 100%;
    width: 100%;
    background: #fff;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
  }

  #app {
    background: $themeColor1;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    #nav {
      position: fixed;
      z-index: 10;
      left: 0;
      right: 0;
      height: 57px;
      line-height: 57px;
      text-align: center;
      background: $themeColor1;
      font-weight: bold;
      font-size: 20px;
      color: $textColor;
      box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.07);
      .back {
        position: absolute;
        left: 0;
        height: 100%;
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
      .translate {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
    }
    .mobile-content {
      // height: 100%;
      margin-top: 20px;
      background: $themeColor1;
    }
    .nav-black {
      width: 100%;
      height: 57px;
    }

    .demo {
      height: 100%;
      background: $themeColor1;
      overflow-x: hidden;
      overflow-y: auto;
      padding: 57px 17px 46px 17px;
      &.full {
        padding: 57px 0 46px 0;
        h2 {
          padding-left: 27px;
        }
      }

      &.bg-w {
        background: #fff;
      }

      &::-webkit-scrollbar {
        width: 0;
        background: transparent;
      }
      > h2 {
        margin-top: 30px;
        margin-bottom: 10px;
        font-size: 14px;
        color: rgba(144, 156, 164, 1);
        padding: 0 10px;
        font-weight: normal;
      }
      > p {
        font-size: 12px;
      }

      .card {
        padding: 25px 18px;
        background: rgba(255, 255, 255, 1);
      }
    }
  }
</style>
