<script setup>
import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'
import { onMounted, watch, ref } from 'vue'
const { Layout } = DefaultTheme
const route = useRoute()
const noFramePath = ['start', 'intro']
const isFrameShow = ref(false)
const data = ref()
const baseUrl = ref('http://127.0.0.1:9909')
const url = ref('http://127.0.0.1:9909')
watch(
  () => route.path,
  (newPath) => {
    let path = newPath.split('/')[newPath.split('/').length - 1].split('.')[0]

    if (noFramePath.includes(path)) {
      isFrameShow.value = false
    } else {
      isFrameShow.value = true
    }
    url.value = baseUrl.value + '/#/' + path
  },
  { immediate: true, deep: true }
)
</script>

<template>
  <div class="c">
    <Layout style="text-align: center">
      <template #page-top
        ><div class="docs-demo-preview" v-if="isFrameShow">
          <iframe id="amberMobile" scrolling="auto" :src="url" /></div
      ></template>
    </Layout>
  </div>
</template>
