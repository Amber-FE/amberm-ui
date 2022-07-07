
export default {
  title: 'AmberMobile',
  description: 'AmberMobile is a mobile application for managing and tracking your tasks.',
  base: '/amberm-ui/',
  dest: '../../docs/',
  locales: {
    '/': {
      lang: 'en-US',
      label: 'English',
      selectText: 'Language',
      ariaLabel: 'Select language'
    },
    '/zh/': {
      lang: 'zh-CN',
      label: '简体中文',
      selectText: '选择语言',
      ariaLabel: '选择语言',
    }
  },
  themeConfig: {
    algolia: {
      apiKey: 'ee2c67c4f389aa402d77b715f08e611c',
      appId: '4WC64EI5X0',
      indexName: 'amberMobile'
    },
    logoName: 'Amber',
    logo: '/img/logo.png',
    locales: {
      '/': {
        nav: [
          // 配置顶部导航栏
          {
            text: 'Design',
            link: '/guide/intro'
          },
          {
            text: 'Documents',
            link: '/guide/start'
          },
          {
            text: 'Components',
            link: '/guide/button'
          },
        ],
        sidebar: [
          // 配置侧边栏
          {
            text: 'Guide',
            children: [
              {
                text: 'Introduction',
                link: '/guide/intro'
              },
              {
                text: 'Quickstart',
                link: '/guide/start'
              }
            ]
          },
          {
            text: 'Basic Components',
            children: [
              {
                text: 'Button',
                link: '/basic/button'
              },
            ]
          }
        ]
      },
      '/zh/': {
        lang: 'zh-CN',
        label: '简体中文',
        selectText: '选择语言',
        ariaLabel: '选择语言',
        nav: [
          // 配置顶部导航栏
          {
            text: '设计',
            link: '/zh/guide/intro'
          },
          {
            text: '文档',
            link: '/zh/guide/start'
          },
          {
            text: '组件',
            link: '/zh/guide/button'
          },
        ],
        sidebar: [
          // 配置侧边栏
          {
            text: '指南',
            children: [
              {
                text: '介绍',
                link: '/zh/guide/intro'
              },
              {
                text: '快速开始',
                link: '/zh/guide/start'
              }
            ]
          },
          {
            text: '基础组件',
            children: [
              {
                text: 'Button 按钮',
                link: '/zh/basic/button'
              },
            ]
          }
        ]
      }
    },
  },
  markdown: {
    config: (md) => {
      // 这里可以使用 markdown-it 插件，vitepress-theme-demoblock就是基于此开发的
      const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin)
    }
  }
}
