import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Ai4Energy Docs',
  description: 'AI4Energy 文档导航门户',
  base: '/ai4energy.github.io/',
  themeConfig: {
    logo: '',
    nav: [
      { text: '首页', link: '/' },
    ],
    sidebar: [
      {
        text: '课程文档',
        items: [
          { text: 'CS 基础', link: '/courses/cs-basics' },
          { text: '开发工具', link: '/courses/dev-tools' },
          { text: '建模方法', link: '/courses/modeling' },
          { text: '优化理论', link: '/courses/optimization' },
          { text: 'AI 能源应用', link: '/courses/ai-energy' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/huxinyang-web' }
    ]
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ]
})
