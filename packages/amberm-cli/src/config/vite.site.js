/* eslint-disable import/extensions */
/* eslint-disable consistent-return */
import { resolve } from 'path'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { slugify } from 'transliteration'
import hljs from 'highlight.js'
import markdownItAnchor from 'markdown-it-anchor'
import markdownItEmoji from 'markdown-it-emoji'
import markdownItInline from 'markdown-it-for-inline'
import mdLoader from 'vite-plugin-vue-markdown'
import container from 'markdown-it-container'

import { getSiteDesktopShared } from '../../site/compiler/site-desktop-share.js'
import { getSiteMobileShared } from '../../site/compiler/site-mobile-share.js'

import { DEV_SERVER, SITE_SRC_DIR, SITE_OUTPUT_DIR } from './amberm.config.js'

function markdownHighlight(str, lang) {
  if (lang && hljs.getLanguage(lang)) {
    // https://github.com/highlightjs/highlight.js/issues/2277
    return hljs.highlight(str, { language: lang, ignoreIllegals: true }).value
  }
}
//
function vitePluginGenAMbermBaseCode() {
  const virtualMobileModuleId = 'site-mobile-shared'
  const virtualDesktopModuleId = 'site-desktop-shared'
  const resolvedDesktopVirtualModuleId = `amberm-cli:${virtualDesktopModuleId}`
  const resolvedMobileVirtualModuleId = `amberm-cli:${virtualMobileModuleId}`

  return {
    name: 'vite-plugin(amberm-cli):gen-site-base-code',
    resolveId(id) {
      if (id === virtualDesktopModuleId) {
        return resolvedDesktopVirtualModuleId
      }
      if (id === virtualMobileModuleId) {
        return resolvedMobileVirtualModuleId
      }
    },
    load(id) {
      switch (id) {
        case resolvedDesktopVirtualModuleId:
          return getSiteDesktopShared()
        case resolvedMobileVirtualModuleId:
          return getSiteMobileShared()
        default:
          break
      }
    }
  }
}

// 获取 <h3>
function markdownCardWrapper(htmlCode) {
  const group = htmlCode.replace(/<h3/g, ':::<h3').replace(/<h2/g, ':::<h2').trim().split(':::')
  const templateDoc = group
    .map((fragment) => {
      if (fragment.indexOf('<h3') !== -1) {
        const template1 = `<div class="amberm-doc-content">${fragment}</div>`
        return template1
      }
      return fragment
    })
    .join('')
  return templateDoc
}
// ::: 块作用域
function createContainer(klass, defaultTitle) {
  if (klass === 'demo') {
    return [
      container,
      klass,
      {
        render(tokens, idx) {
          let textHtml
          const token = tokens[idx]
          const tokenText = tokens.filter((item) => {
            return item.info.trim() === 'vue' && item.content.trim()
          })
          if (tokenText.length > 0 && tokenText[0].content) {
            textHtml = tokenText[0].content
          }
          if (token.nesting === 1) {
            return `<demo-block ><div class="vue-text-demo">${textHtml}</div> \n`
          }
          return `</demo-block>`
        }
      }
    ]
  }
  if (klass === 'tip') {
    return [
      container,
      klass,
      {
        render(tokens, idx) {
          const token = tokens[idx]
          const info = token.info.trim().slice(klass.length).trim()
          if (token.nesting === 1) {
            return `<div class="${klass} custom-block"><p class="custom-block-title">${
              info || defaultTitle
            }</p>\n`
          }
          return `</div>\n`
        }
      }
    ]
  }
}
function markdownBlock(md) {
  md.use(...createContainer('tip', 'TIP'))
  md.use(...createContainer('demo', 'DEMO'))
}
// add target="_blank" to all links
function markdownLinkOpen(md) {
  md.use(markdownItInline, 'url_new_win', 'link_open', function (tokens, idx) {
    const aIndex = tokens[idx].attrIndex('target')
    if (aIndex < 0) {
      tokens[idx].attrPush(['target', '_blank'])
    } else {
      // eslint-disable-next-line no-param-reassign
      tokens[idx].attrs[aIndex][1] = '_blank'
    }
  })
  md.use(markdownItEmoji)

  md.use(markdownItAnchor, {
    slugify,
    level: 2
  })
}

export function getViteConfigDev() {
  return {
    root: SITE_SRC_DIR,
    server: DEV_SERVER,
    plugins: [
      vitePluginGenAMbermBaseCode(),
      vue({
        include: [/\.vue$/, /\.md$/]
      }),
      mdLoader({
        transforms: {
          after: markdownCardWrapper
        },
        markdownItOptions: {
          typographer: false, // https://markdown-it.github.io/markdown-it/#MarkdownIt
          highlight: markdownHighlight
        },
        markdownItSetup(md) {
          markdownBlock(md)
          markdownLinkOpen(md)
        }
      }),
      vueJsx()
    ],
    build: {
      rollupOptions: {
        input: {
          index: resolve(SITE_SRC_DIR, 'index.html'),
          mobile: resolve(SITE_SRC_DIR, 'mobile.html')
        }
      }
    }
  }
}

export function getViteConfigBuild() {
  return {
    base: './',
    root: SITE_SRC_DIR,
    plugins: [
      vitePluginGenAMbermBaseCode(),
      vue({
        include: [/\.vue$/, /\.md$/]
      }),
      mdLoader({
        transforms: {
          after: markdownCardWrapper
        },
        markdownItOptions: {
          typographer: false, // https://markdown-it.github.io/markdown-it/#MarkdownIt
          highlight: markdownHighlight
        },
        markdownItSetup(md) {
          markdownBlock(md)
          markdownLinkOpen(md)
        }
      }),
      vueJsx()
    ],
    build: {
      outDir: SITE_OUTPUT_DIR,
      emptyOutDir: true,
      rollupOptions: {
        input: {
          index: resolve(SITE_SRC_DIR, 'index.html'),
          mobile: resolve(SITE_SRC_DIR, 'mobile.html')
        }
      },
      output: {
        manualChunks: {
          'vue-libs': ['vue', 'vue-router'],
        },
      },
    }
  }
}
