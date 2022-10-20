/* eslint-disable import/extensions */
import { join } from 'path'
import { readdirSync, existsSync } from 'fs'

import { getAmbermConfig, SRC_DIR } from '../common/utils/constant.js'
import { normalizePath } from '../common/utils/index.js'

export function isDev() {
  return process.env.NODE_ENV === 'development'
}
function resolveDemos(components) {
  const ambermConfig = getAmbermConfig()
  const { locales, defaultLang } = ambermConfig.site

  const demos = []
  if (locales) {
    const langs = Object.keys(locales)
    langs.forEach((lang) => {
      const fileName = lang === defaultLang ? '' : `-${lang}`
      console.log(fileName)
      components.forEach((component) => {
        demos.push({
          name: component,
          path: join(SRC_DIR, component, `demo.vue`)
        })
      })
    })
  } else {
    components.forEach((component) => {
      demos.push({
        name: component,
        path: join(SRC_DIR, component, `demo.vue`)
      })
    })
  }

  return [
    ...demos.filter((item) => {
      return existsSync(item.path)
    })
  ]
}
function genImportDemo(items) {
  return items
    .map((item) => {
      const path = normalizePath(item.path)
      if (isDev()) {
        return `const ${item.name} = () => import('${path}');`
      }
      return `import ${item.name} from '${path}';`
    })
    .join('\n')
}
function genExportDemos(items) {
  return `export const demos = {
    ${items.map((item) => item.name).join(',\n  ')}
  };`
}

export const getSiteMobileShared = () => {
  const dirs = readdirSync(SRC_DIR)
  dirs.pop()
  const documents = resolveDemos(dirs)
  const code = `${genImportDemo(documents)}
      ${genExportDemos(documents)}
      `
  return code
}
