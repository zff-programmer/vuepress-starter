module.exports = {
  theme: '',
  locales: {
    '/en/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'VuePress + Element',
      description: 'Vue-powered Static Site Generator',
    },
    '/': {
      lang: 'zh-CN',
      title: 'VuePress',
      description: 'VuePress搭建Element的组件库文档教程示例代码',
    },
  },
  base: '/vuepress-starter/', // 基路径
  // base: '/', // 基路径
  dest: '.vuepress/dist', // 输出目录
  host: '0.0.0.0',
  port: '9000',
  head: [['link', { rel: 'icon', href: '/images/hero.png' }]],
  themeConfig: {
    logo: '/images/hero.png', // 大标题logo
    sidebar: 'auto',
    lastUpdated: 'Last Updated',
    smoothScroll: true,

    locales: {
      '/en/': {
        lang: 'en-US',
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh',
          },
        },
        algolia: {},
        nav: [{ text: 'Nested', link: '/en/nested/', ariaLabel: 'Nested' }],
        sidebar: {
          '/en/nested/': ['/en/nested/'],
        },
      },
      '/': {
        lang: 'zh-CN',
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        // 编辑链接文字
        editLinkText: '在 GitHub 上编辑此页',
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: '发现新内容可用.',
            buttonText: '刷新',
          },
        },
        // 当前 locale 的 algolia docsearch 选项
        algolia: {},
        nav: [
          // 配置顶部导航栏
          {
            text: '首页',
            link: '/',
          },
          {
            text: '组件',
            link: '/comps/',
          },
          {
            text: '指南',
            link: '/guide/',
          },
          {
            text: '了解更多',
            items: [
              {
                text: '中文',
                items: [
                  { text: 'element', link: 'https://element.eleme.cn/', target: '_blank', rel: '' },
                  { text: 'vue', link: 'https://cn.vuejs.org/', target: '_blank', rel: '' },
                ],
              },
              {
                text: '其它',
                items: [
                  { text: '指南', link: '/guide/' },
                  { text: '首页', link: '/' },
                ],
              },
            ],
          },
        ],
        sidebar: {
          // 配置侧边栏部分
          '/comps/': ['/comps/', '/comps/select.md'],
          '/guide/': ['/guide/', '/guide/design.md'],
        },
      },
    },
  },
  plugins: [
    'demo-container', // 允许引入demo插件
    ['@vuepress/back-to-top', true], // 要用babel风格方式引入才生效
    '@vuepress/nprogress', // 引入全局进度条
    '@vuepress/search', // 引入全局搜索
    {
      search: true,
      searchMaxSuggestions: 10,
    },
    '@vuepress/active-header-links', // 滚动时自动激活锚点定位
    {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor',
    },
  ], // 配置插件
  markdown: {},
}
