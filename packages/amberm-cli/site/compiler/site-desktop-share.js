/* eslint-disable import/extensions */
import { readFileSync, readdirSync, existsSync } from 'fs'
import { join, parse } from 'path'

import glob from 'fast-glob'

// import { join, parse } from 'path'

import { AMBER_DESKTOP_FILE, getAmbermConfig, SRC_DIR, DOCS_DIR } from '../common/utils/constant.js'
import { normalizePath } from '../common/utils/index.js'

function formatName(component, lang) {
  const ambermConfig = getAmbermConfig()
  const { defaultLang } = ambermConfig.site
  // const components = pascalize(component)  首字母大写

  if (lang !== defaultLang) {
    return `${component}_${lang.replace('-', '_')}`
  }

  return component
}

function resolveDocuments(components) {
  const ambermConfig = getAmbermConfig()
  const { locales, defaultLang } = ambermConfig.site

  const docs = []
  if (locales) {
    const langs = Object.keys(locales)
    langs.forEach((lang) => {
      const fileName = lang === defaultLang ? '' : `-${lang}`
      components.forEach((component) => {
        docs.push({
          name: component,
          path: join(SRC_DIR, component, `${component}${fileName}.md`)
        })
      })
    })
  } else {
    components.forEach((component) => {
      docs.push({
        name: component,
        path: join(SRC_DIR, component, `${component}.md`)
      })
    })
  }

  const staticDocs = glob.sync(normalizePath(join(DOCS_DIR, '**/*.md'))).map((path) => {
    const pairs = parse(path).name.split('.')
    return {
      name: formatName(pairs[0], pairs[1] || defaultLang),
      path
    }
  })

  return [
    ...staticDocs,
    ...docs.filter((item) => {
      return existsSync(item.path)
    })
  ]
}

export function isDev() {
  return process.env.NODE_ENV === 'development'
}
function genImportDocuments(items) {
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

function genExportDocuments(items) {
  return `export const documents = {
  ${items.map((item) => item.name).join(',\n  ')}
};`
}

const getConfigContent = () => {
  const content = readFileSync(AMBER_DESKTOP_FILE, 'utf-8')
  return content.replace('export default', 'const config =')
}

const letExportConfig = () => {
  return 'export { config };'
}

export const getSiteDesktopShared = () => {
  const dirs = readdirSync(SRC_DIR)
  // console.log(dirs)
  dirs.filter((item) => {
    return item !== 'index.ts'
  })

  const documents = resolveDocuments(dirs)
  // console.log(documents, 0)
  const code = `${genImportDocuments(documents)}
  ${getConfigContent()}
    ${letExportConfig()}
    ${genExportDocuments(documents)}
    `
  return code
}
