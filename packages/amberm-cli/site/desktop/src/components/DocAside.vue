<template>
  <div class="Aside" :style="style">
    <ul v-for="(items, index) in site.locales['zh-CN'].nav" :key="index" class="aside-items">
      <li class="items-header">
        {{ items.title }}
      </li>

      <li v-for="item in items.items" :key="item" class="items" @click="$router.push(item.path)">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>
<script setup>
  import { computed, ref } from 'vue'
  import { config } from 'site-desktop-shared'

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
  const site = computed(() => {
    return config.site
  })
</script>
<style lang="scss" scoped>
  .Aside {
    position: fixed;
    left: 0;
    z-index: 1;
    min-width: 220px;
    max-width: 220px;
    padding: 24px 0;
    overflow-y: scroll;
    background-color: #fff;
    box-shadow: 0 8px 12px #ebedf0;
    top: 88px;
    bottom: 0px;
    &::-webkit-scrollbar {
      width: 6px;
      height: 6px;
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background-color: transparent;
      border-radius: 6px;
    }
    &:hover::-webkit-scrollbar-thumb {
      background-color: rgba(69, 90, 100, 0.2);
    }
    @media (max-width: 1300px) {
      .items {
        a {
          font-size: 13px;
        }

        &:active {
          font-size: 14px;
        }
      }
    }
    .aside-items {
      list-style: none;
      margin-top: 8px;
      .items-header {
        font-size: 0.9em;
        font-weight: bold;
        color: #b1b1b1;
        padding-left: 0.8em;
      }
      .items {
        font-size: 0.95em;
        padding: 0.35rem 0rem 0.35rem 1.25rem;
        cursor: pointer;
        color: #555;
        text-align: left;
      }
      .items:hover {
        color: #1a9dff;
      }
      .active {
        background: #e3f1ff;
        border-left: 4px solid #1a9dff;
        box-sizing: border-box;
        color: #1a9dff;
      }
    }
  }
</style>
