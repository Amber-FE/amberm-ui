import { ref } from 'vue'
import type { Ref } from 'vue'

import zhCN from './lang/zh-CN'

export type Pack = {
  confirmButtonText: string
  cancelButtonText: string
  lang?: string
}

const packs: Record<string, Partial<Pack>> = {}

const pack: Ref<Partial<Pack>> = ref({})

const add = (lang: string, locale: Pack) => {
  // eslint-disable-next-line no-param-reassign
  locale.lang = lang
  packs[lang] = locale
}

const use = (lang: string) => {
  if (!packs[lang]) {
    return
  }
  pack.value = packs[lang]
}

const merge = (lang: string, locale: Pack) => {
  if (!packs[lang]) {
    return
  }
  packs[lang] = { ...packs[lang], ...locale }
  use(lang)
}

add('zh-CN', zhCN)
use('zh-CN')

export { pack, packs, add, use, merge }

// export default { pack, packs, add, use, merge }
