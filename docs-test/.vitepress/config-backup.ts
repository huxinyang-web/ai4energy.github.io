import { defineConfig } from 'vitepress'
import katex from 'markdown-it-katex'
import mermaid from 'markdown-it-mermaid-plugin'

export default defineConfig({
  title: 'Ai4Energy',
  description: 'Ai4Energy 的主页',
  ignoreDeadLinks: true,

  markdown: {
    config: (md) => {
      md.use(katex)
      md.use(mermaid)
    }
  },

  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css' }]
  ],

  themeConfig: {
    siteTitle: 'Ai4Energy',
    logo: '/logo.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: 'Ai4E 文档', icon: 'book', link: 'https://docs.ai4energy.cn' },
      { text: '联系我们', icon: 'envelope', link: '/contactus/' }
    ],

    sidebar: [
      {
        text: '测试页面',
        items: [
          { text: '插件功能测试', link: '/test-plugins' }
        ]
      },
      {
        text: 'CS 基础',
        items: [
          { text: 'Windows 命令提示符介绍', link: '/docs/01CSBase/1-Windows 命令提示符介绍' }
        ]
      },
      {
        text: '建模工具',
        items: [
          { text: 'ModelingToolkit 介绍', link: '/docs/04Modeling/MTK_intro' }
        ]
      },
      {
        text: '优化',
        items: [
          { text: '优化的概念', link: '/docs/06Optimization/1-优化的概念' }
        ]
      },
      {
        text: '工具',
        items: [
          { text: 'VSCode 和 Git', link: '/docs/91Tools/vscode_git' }
        ]
      }
    ],

    footer: {
      message: '陕 ICP 备 19000424 号 -2 | 陕公网安备 61010302001034 号',
      copyright: 'Copyright © 2024 Ai4Energy'
    },

    editLink: {
      pattern: 'https://github.com/ai4energy/ai4energy.github.io/edit/main/src/:path',
      text: '在 GitHub 上编辑此页'
    },

    lastUpdated: {
      text: '最后更新于'
    },

    returnToTopLabel: '返回顶部'
  }
})
