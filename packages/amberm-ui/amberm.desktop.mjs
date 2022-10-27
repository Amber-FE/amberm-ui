export default {
  name: 'amberm-ui',
  site: {
    defaultLang: 'zh-CN',
    version: [
      {
        label: 'v1',
        link: '/amberm/v1/'
      }
    ],
    htmlMeta: {
      'docsearch:version': 'v1'
    },
    locales: {
      'zh-CN': {
        title: 'amberm-ui',
        subtitle: '适用于 Vue 3',
        description: '移动端组件库',
        logo: '',
        langLabel: '中',
        links: [
          {
            logo: '',
            url: ''
          },
          {
            logo: '',
            url: ''
          }
        ],
        nav: [
          {
            title: '开发指南',
            items: [
              {
                path: 'introduce',
                title: '介绍'
              }
            ]
          },
          {
            title: '基础组件',
            items: [
              {
                path: 'button',
                title: 'button 按钮'
              },
              {
                path: 'icon',
                title: 'icon 图标'
              },
              {
                path: 'cell',
                title: 'cell 单元格'
              }
            ]
          },
          {
            title: '导航组件',
            items: [
              {
                path: 'navbar',
                title: 'navbar 导航栏 '
              },
              {
                path: 'tab',
                title: 'tab 标签页'
              }
            ]
          }
        ]
      }
    }
  }
}
