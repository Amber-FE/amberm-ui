import { createI18n } from 'vue-i18n'

import zhCN from './lang/zh_CN'
import enUS from './lang/en'

const i18n = createI18n({
  locale: 'en', // 默认显示语音

  messages: {
    zh: zhCN, // 中文

    en: enUS // 英文——美式
  }
})

export default i18n
