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
  // base: '/vuepress-starter/', // 基路径
  base: '/', // 基路径
  dest: '.vuepress/dist', // 输出目录
  host: '0.0.0.0',
  port: '9000',
  head: [['link', { rel: 'icon', href: '/images/hero.png' }]], // head标签里的logo
  themeConfig: {
    // 大标题logo
    logo: '/images/hero.png',
    sidebar: 'auto',
    // 最新更新时间
    lastUpdated: 'Last Updated',
    // smoothScroll: true,

    // 假定 GitHub。也可以是一个完整的 GitLab 网址
    repo: 'zff-programmer/vuepress-starter',
    // 如果你的文档不在仓库的根部
    docsDir: 'docs',
    // 可选，默认为 master
    docsBranch: 'main',
    // 默认为 true，设置为 false 来禁用
    editLinks: true,

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
        nav: require('./config/en/navbar'),
        sidebar: require('./config/en/sidebar'),
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
        nav: require('./config/zh/navbar'),
        sidebar: require('./config/zh/sidebar'),
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
  markdown: {
    lineNumbers: true,
    // pageSuffix: '.js', // 无效
    externalLinks: { target: '_blank', rel: 'noopener noreferrer' },
    toc: { includeLevel: [2, 3] },
  },
}
