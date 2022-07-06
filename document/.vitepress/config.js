export default {
  title: 'AmberMobile',
  description: 'AmberMobile is a mobile application for managing and tracking your tasks.',
  lang: 'zh-CN',
  base: '/amberm-ui/',
  themeConfig: {
    // 展示搜索框
    algolia: {
      apiKey: 'ee2c67c4f389aa402d77b715f08e611c',
      appId: '4WC64EI5X0',
      indexName: 'amberMobile'
    },
    logoName: 'Amber',
    logo: '/img/logo.png',
    nav: [
      // 配置顶部导航栏
      {
        text: '设计',
        link: '/guide/intro'
      },
      {
        text: '文档',
        link: '/guide/start'
      },
      {
        text: '组件',
        link: '/guide/button'
      },
      {
        text: '资源',
        link: '/guide/intro'
      }
    ],
    sidebar: [
      // 配置侧边栏
      {
        text: '开发指南',
        children: [
          {
            text: '介绍',
            link: '/guide/intro'
          },
          {
            text: '快速上手',
            link: '/guide/start'
          }
        ]
      },
      {
        text: '基础组件',
        children: [
          {
            text: 'Button 按钮',
            link: '/basic/button'
          },
        ]
      }
    ]
  },
  markdown: {
    config: (md) => {
      // 这里可以使用 markdown-it 插件，vitepress-theme-demoblock就是基于此开发的
      const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin)
    }
  }
}
