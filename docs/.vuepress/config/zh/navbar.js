module.exports = [
  // 配置顶部导航栏
  {
    text: '首页',
    link: '/',
  },
  {
    text: '组件',
    link: '/zh/comps/',
  },
  {
    text: '指南',
    link: '/zh/guide/',
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
          { text: '指南', link: '/zh/guide/' },
          { text: '首页', link: '/' },
        ],
      },
    ],
  },
]
