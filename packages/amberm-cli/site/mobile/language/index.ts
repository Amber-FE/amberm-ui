import { createI18n } from 'vue-i18n'

import zhCN from './lang/zh_CN'
import enUS from './lang/en'

const i18n = createI18n({
  locale: 'en_US', // 默认显示语音

  messages: {
    zh_CN: zhCN, // 中文

    en_US: enUS // 英文——美式
  }
})

export default i18n
