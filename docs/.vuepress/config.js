module.exports = {
  theme: '',
  title: 'VuePress + Element',
  description: 'VuePress搭建Element的组件库文档教程示例代码',
  base: '/',
  port: '8080',
  head: [
    ['link', { rel: 'icon', href: '/images/hero.png' }]
  ],
  themeConfig: { // 新增代码
    logo:'/images/hero.png',
    sidebar: 'auto',
    nav: [ // 配置顶部导航栏
      {
        text: '首页',
        link: '/'
      },
      {
        text: '组件',
        link: '/comps/'
      },
      {
        text:'指南',
        link:'/guide/'
      }
    ],
    sidebar: { // 配置侧边栏部分
      '/comps/': ['/comps/', '/comps/select.md'],
      '/guide/': ['/guide/', '/guide/design.md'],
    }
  },
  plugins: ['demo-container'], // 配置插件
  markdown: { }

}