import { defineConfig } from 'vitepress'
import katex from 'markdown-it-katex'
import mermaid from 'markdown-it-mermaid-plugin'

export default defineConfig({
  title: 'Ai4Energy',
  description: 'Ai4Energy 的主页',
  base: '/ai4energy.github.io/',
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
      { text: '课程', link: '/courses/' },
      { text: '路线图', link: '/roadmap/' },
      { text: 'Ai4E 文档', icon: 'book', link: 'https://docs.ai4energy.cn' },
      { text: '组件库', link: '/ai4ecomplib/' },
      { text: '虚拟实验室', link: '/ai4elab/' },
      { text: '碳中和开源汇编', link: '/awesome-carbon-neutrality/' },
      { text: '新闻', link: '/news/' },
      { text: '赞助商专属', link: '/sponsors/' },
      { text: '联系我们', link: '/contactus/' }
    ],

    sidebar: {
      '/docs/': [
        {
          text: 'CS 基础',
          collapsed: false,
          items: [
            { text: '简介', link: '/docs/01CSBase/1-Windows 命令提示符介绍.md' },
            { text: 'Windows 命令提示符介绍', link: '/docs/01CSBase/1-Windows 命令提示符介绍.md' },
            { text: 'PowerShell 和 Windows Terminal', link: '/docs/01CSBase/2-PowerShell 和 WindowsTerminal.md' },
            { text: '环境变量及其设置', link: '/docs/01CSBase/3-环境变量及其设置.md' },
            { text: 'Windows 下安装 gcc 编译器和 CLion', link: '/docs/01CSBase/4-Windows 下安装 gcc 编译器和 CLion.md' },
            { text: 'make 和 Makefile 介绍', link: '/docs/01CSBase/5-make 和 Makefile 介绍.md' },
            { text: '静态链接库和动态链接库', link: '/docs/01CSBase/6-静态链接库和动态链接库.md' },
            { text: '以 SAM 为例整体实操一下', link: '/docs/01CSBase/7-以 SAM 为例整体实操一下.md' },
            { text: '以 CoolProp 为例的实操', link: '/docs/01CSBase/8-以 CoolProp 为例的实操.md' },
            { text: 'dll 生成与调用实操', link: '/docs/01CSBase/9-dll 生成与调用实操.md' }
          ]
        },
        {
          text: 'Julia 入门',
          collapsed: true,
          items: [
            { text: '简介', link: '/docs/02JuliaIntro/0010-julia 的安装.md' },
            { text: 'julia-binary-wrappers', link: '/docs/02JuliaIntro/0120-julia-binary-wrappers.md' }
          ]
        },
        {
          text: '建模工具',
          collapsed: true,
          items: [
            { text: '简介', link: '/docs/04Modeling/MTK_intro.md' },
            { text: 'What MTK do', link: '/docs/04Modeling/WathMTKdo.md' },
            { text: 'MTK 简介', link: '/docs/04Modeling/MTK_intro.md' },
            { text: 'MTK 参数辨识', link: '/docs/04Modeling/MTK_register.md' },
            { text: 'MTK 技巧', link: '/docs/04Modeling/MTK_tips.md' },
            { text: 'benchmark_de_mtk', link: '/docs/04Modeling/benchmark_de_mtk.md' }
          ]
        },
        {
          text: '仿真',
          collapsed: true,
          items: [
            { text: '简介', link: '/docs/05Simulation/MTK_Sundials.md' },
            { text: 'MTK 热传递仿真', link: '/docs/05Simulation/MTK_heattran.md' },
            { text: 'DE 热传递仿真', link: '/docs/05Simulation/DE_heattran.md' },
            { text: '稳态 RC 电路', link: '/docs/05Simulation/steadyRC.md' }
          ]
        },
        {
          text: '优化',
          collapsed: true,
          items: [
            { text: '简介', link: '/docs/06Optimization/1-优化的概念.md' },
            { text: '优化的概念', link: '/docs/06Optimization/1-优化的概念.md' },
            { text: '优化问题的分类', link: '/docs/06Optimization/2-优化问题的分类.md' },
            { text: '能源系统工程中的优化问题', link: '/docs/06Optimization/3-能源系统工程中的优化问题.md' },
            { text: '优化问题的求解过程', link: '/docs/06Optimization/4-优化问题的求解过程.md' },
            { text: '优化问题的建模平台', link: '/docs/06Optimization/5-优化问题的建模平台.md' },
            { text: '传统决定性算法简介', link: '/docs/06Optimization/6-传统决定性算法简介.md' },
            { text: '启发式算法简介', link: '/docs/06Optimization/7-启发式算法简介.md' },
            { text: '黑箱优化问题', link: '/docs/06Optimization/8-黑箱优化问题.md' },
            { text: '优化问题建模之递归建模方法', link: '/docs/06Optimization/9-优化问题建模之递归建模方法.md' },
            { text: '优化应用之参数估计与软测量', link: '/docs/06Optimization/90-优化应用之参数估计与软测量.md' },
            { text: '一些可以看一看的优化相关工具', link: '/docs/06Optimization/92-一些可以看一看的优化相关工具.md' },
            { text: 'JuMP 混合整数线性优化实例', link: '/docs/06Optimization/93-JuMP 混合整数线性优化实例.md' },
            { text: 'JuMP 参数辨识', link: '/docs/06Optimization/94-JuMP 参数辨识.md' },
            { text: '微分方程参数辨识实例', link: '/docs/06Optimization/95-微分方程参数辨识实例.md' },
            { text: 'MTK 非线性参数辨识实例', link: '/docs/06Optimization/96-MTK 非线性参数辨识实例.md' },
            { text: 'MTK 部分参数辨识实例', link: '/docs/06Optimization/98-MTK 部分参数辨识实例.md' },
            { text: 'MTK 符号系统参数辨识实例', link: '/docs/06Optimization/97-MTK 符号系统参数辨识实例.md' },
            { text: 'Optimization.jl', link: '/docs/06Optimization/Optimization.jl.md' },
            { text: 'GenSBO', link: '/docs/06Optimization/GenSBO.md' },
            { text: 'MIDACO', link: '/docs/06Optimization/MIDACO.md' }
          ]
        },
        {
          text: '控制',
          collapsed: true,
          items: [
            { text: '简介', link: '/docs/07Control/1-控制的本质.md' },
            { text: 'Kalman Filtering', link: '/docs/07Control/KalmanFiltering.md' },
            { text: 'Optim Control', link: '/docs/07Control/OptimControl.md' }
          ]
        },
        {
          text: 'AI 和 ML',
          collapsed: true,
          items: [
            { text: '机器学习和人工智能', link: '/docs/08AIandML/1-机器学习和人工智能.md' }
          ]
        },
        {
          text: '工具',
          collapsed: true,
          items: [
            { text: '简介', link: '/docs/91Tools/vscode_git.md' },
            { text: 'VSCode 和 Git', link: '/docs/91Tools/vscode_git.md' },
            { text: 'CoolProp', link: '/docs/91Tools/CoolProp.md' },
            { text: 'CSV_jl_use', link: '/docs/91Tools/CSV_jl_use.md' },
            { text: 'ssh-git 实操', link: '/docs/91Tools/3-ssh-git 实操.md' }
          ]
        },
        {
          text: '工作流',
          collapsed: true,
          items: [
            { text: '简介', link: '/docs/92Workflow/julia 的安装.md' },
            { text: 'julia 的安装', link: '/docs/92Workflow/julia 的安装.md' },
            { text: 'REPL-of-Julia', link: '/docs/92Workflow/REPL-of-Julia.md' },
            { text: 'julia_change_pkgserve', link: '/docs/92Workflow/julia_change_pkgserve.md' },
            { text: 'gitworkflow', link: '/docs/92Workflow/gitworkflow.md' },
            { text: '1-thinkaboutstudy', link: '/docs/92Workflow/1-thinkaboutstudy.md' },
            { text: 'vscodePlugin', link: '/docs/92Workflow/vscodePlugin.md' },
            { text: 'DocStructure', link: '/docs/92Workflow/DocStructure.md' }
          ]
        },
        {
          text: '物联网大数据云计算',
          collapsed: true,
          items: [
            { text: '简介', link: '/docs/11IotBigdataCloud/1-物联网.md' },
            { text: '物联网', link: '/docs/11IotBigdataCloud/1-物联网.md' },
            { text: '消息件', link: '/docs/11IotBigdataCloud/2-消息件.md' },
            { text: '大数据简介', link: '/docs/11IotBigdataCloud/3-大数据简介.md' },
            { text: '从虚拟机到云计算', link: '/docs/11IotBigdataCloud/4-从虚拟机到云计算.md' },
            { text: '容器化和 k8s', link: '/docs/11IotBigdataCloud/5-容器化和 k8s.md' }
          ]
        }
      ],
      '/tutorial/': [
        {
          text: 'Go-zero 教程',
          collapsed: false,
          items: [
            { text: '简介', link: '/tutorial/01-docker-compose 环境准备.md' },
            { text: 'docker-compose 环境准备', link: '/tutorial/01-docker-compose 环境准备.md' },
            { text: 'emqx 消息服务器准备', link: '/tutorial/02-emqx 消息服务器准备.md' },
            { text: 'mysql 数据库准备', link: '/tutorial/03-mysql 数据库准备.md' },
            { text: 'go-zero 环境准备', link: '/tutorial/04-go-zero 环境准备.md' },
            { text: 'gateway 设置', link: '/tutorial/05-gateway 设置.md' },
            { text: 'goctl 生成 api 服务', link: '/tutorial/06-goctl 生成 api 服务.md' },
            { text: 'goctl 处理数据库模型', link: '/tutorial/07-goctl 处理数据库模型.md' }
          ]
        }
      ],
      '/awesome-carbon-neutrality/RenewableEnergy/': [
        {
          text: '可再生能源',
          collapsed: false,
          items: [
            { text: '简介', link: '/awesome-carbon-neutrality/RenewableEnergy/index.md' },
            { text: 'SAM', link: '/awesome-carbon-neutrality/RenewableEnergy/1-SAM.md' },
            { text: 'ReOpt', link: '/awesome-carbon-neutrality/RenewableEnergy/2-ReOpt.md' },
            { text: 'pvlib-python', link: '/awesome-carbon-neutrality/RenewableEnergy/3-pvlib-python.md' },
            { text: 'SolarPILOT', link: '/awesome-carbon-neutrality/RenewableEnergy/4-SolarPILOT.md' },
            { text: 'SolarTherm', link: '/awesome-carbon-neutrality/RenewableEnergy/5-SolarTherm.md' },
            { text: 'SolTrace', link: '/awesome-carbon-neutrality/RenewableEnergy/6-SolTrace.md' },
            { text: 'OpenFAST', link: '/awesome-carbon-neutrality/RenewableEnergy/7-OpenFAST.md' },
            { text: 'OpenLCA', link: '/awesome-carbon-neutrality/RenewableEnergy/8-OpenLCA.md' },
            { text: 'FOQUS', link: '/awesome-carbon-neutrality/RenewableEnergy/9-FOQUS.md' },
            { text: 'PLANHEAT Tool', link: '/awesome-carbon-neutrality/RenewableEnergy/10-PLANHEAT Tool.md' },
            { text: 'Modelica Buildings library', link: '/awesome-carbon-neutrality/RenewableEnergy/11-Modelica Buildings library.md' },
            { text: 'IDEAS', link: '/awesome-carbon-neutrality/RenewableEnergy/12-IDEAS.md' },
            { text: 'OpenMDAO', link: '/awesome-carbon-neutrality/RenewableEnergy/13-OpenMDAO.md' },
            { text: 'coolprop-intro', link: '/awesome-carbon-neutrality/RenewableEnergy/coolprop-intro.md' },
            { text: 'sam-ssc', link: '/awesome-carbon-neutrality/RenewableEnergy/sam-ssc.md' }
          ]
        }
      ],
      '/': [
        {
          text: '关于网站',
          collapsed: false,
          items: [
            { text: '联系我们', link: '/contactus' }
          ]
        }
      ]
    },

    footer: {
      message: '陕 ICP 备 19000424 号 -2 | 陕公网安备 61010302001034 号',
      copyright: 'Copyright © 2024 Ai4Energy'
    },

    editLink: {
      pattern: 'https://github.com/ai4energy/ai4energy.github.io/edit/main/docs-test/:path',
      text: '在 GitHub 上编辑此页'
    },

    lastUpdated: {
      text: '最后更新于'
    },

    returnToTopLabel: '返回顶部',

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航',
      level: 2
    }
  }
})
