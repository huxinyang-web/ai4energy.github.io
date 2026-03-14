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
    logo: '/assets/icon/chrome-512.png',

    nav: [
      { text: '首页', link: '/' },
      { text: 'Ai4E 文档', icon: 'book', link: '/docs/01CSBase/1-Windows 命令提示符介绍' },
      { text: '联系我们', icon: 'envelope', link: '/contactus' }
    ],

    sidebar: {
      '/docs/': [
        {
          text: 'CS 基础',
          collapsed: false,
          items: [
            { text: '简介', link: '/docs/01CSBase/1-Windows 命令提示符介绍' },
            { text: 'Windows 命令提示符介绍', link: '/docs/01CSBase/1-Windows 命令提示符介绍' },
            { text: 'PowerShell 和 Windows Terminal', link: '/docs/01CSBase/2-PowerShell 和 WindowsTerminal' },
            { text: '环境变量及其设置', link: '/docs/01CSBase/3-环境变量及其设置' },
            { text: 'Windows 下安装 gcc 编译器和 CLion', link: '/docs/01CSBase/4-Windows 下安装 gcc 编译器和 CLion' },
            { text: 'make 和 Makefile 介绍', link: '/docs/01CSBase/5-make 和 Makefile 介绍' },
            { text: '静态链接库和动态链接库', link: '/docs/01CSBase/6-静态链接库和动态链接库' },
            { text: '以 SAM 为例整体实操一下', link: '/docs/01CSBase/7-以 SAM 为例整体实操一下' },
            { text: '以 CoolProp 为例的实操', link: '/docs/01CSBase/8-以 CoolProp 为例的实操' },
            { text: 'dll 生成与调用实操', link: '/docs/01CSBase/9-dll 生成与调用实操' }
          ]
        },
        {
          text: 'Julia 入门',
          collapsed: true,
          items: [
            { text: '简介', link: '/docs/02JuliaIntro/0010-julia 的安装' },
            { text: 'julia-binary-wrappers', link: '/docs/02JuliaIntro/0120-julia-binary-wrappers' }
          ]
        },
        {
          text: '建模工具',
          collapsed: true,
          items: [
            { text: '简介', link: '/docs/04Modeling/MTK_intro' },
            { text: 'What MTK do', link: '/docs/04Modeling/WathMTKdo' },
            { text: 'MTK 简介', link: '/docs/04Modeling/MTK_intro' },
            { text: 'MTK 参数辨识', link: '/docs/04Modeling/MTK_register' },
            { text: 'MTK 技巧', link: '/docs/04Modeling/MTK_tips' },
            { text: 'benchmark_de_mtk', link: '/docs/04Modeling/benchmark_de_mtk' }
          ]
        },
        {
          text: '仿真',
          collapsed: true,
          items: [
            { text: '简介', link: '/docs/05Simulation/MTK_Sundials' },
            { text: 'MTK 热传递仿真', link: '/docs/05Simulation/MTK_heattran' },
            { text: 'DE 热传递仿真', link: '/docs/05Simulation/DE_heattran' },
            { text: '稳态 RC 电路', link: '/docs/05Simulation/steadyRC' }
          ]
        },
        {
          text: '优化',
          collapsed: true,
          items: [
            { text: '简介', link: '/docs/06Optimization/1-优化的概念' },
            { text: '优化的概念', link: '/docs/06Optimization/1-优化的概念' },
            { text: '优化问题的分类', link: '/docs/06Optimization/2-优化问题的分类' },
            { text: '能源系统工程中的优化问题', link: '/docs/06Optimization/3-能源系统工程中的优化问题' },
            { text: '优化问题的求解过程', link: '/docs/06Optimization/4-优化问题的求解过程' },
            { text: '优化问题的建模平台', link: '/docs/06Optimization/5-优化问题的建模平台' },
            { text: '传统决定性算法简介', link: '/docs/06Optimization/6-传统决定性算法简介' },
            { text: '启发式算法简介', link: '/docs/06Optimization/7-启发式算法简介' },
            { text: '黑箱优化问题', link: '/docs/06Optimization/8-黑箱优化问题' },
            { text: '优化问题建模之递归建模方法', link: '/docs/06Optimization/9-优化问题建模之递归建模方法' },
            { text: '优化应用之参数估计与软测量', link: '/docs/06Optimization/90-优化应用之参数估计与软测量' },
            { text: '一些可以看一看的优化相关工具', link: '/docs/06Optimization/92-一些可以看一看的优化相关工具' },
            { text: 'JuMP 混合整数线性优化实例', link: '/docs/06Optimization/93-JuMP 混合整数线性优化实例' },
            { text: 'JuMP 参数辨识', link: '/docs/06Optimization/94-JuMP 参数辨识' },
            { text: '微分方程参数辨识实例', link: '/docs/06Optimization/95-微分方程参数辨识实例' },
            { text: 'MTK 非线性参数辨识实例', link: '/docs/06Optimization/96-MTK 非线性参数辨识实例' },
            { text: 'MTK 部分参数辨识实例', link: '/docs/06Optimization/98-MTK 部分参数辨识实例' },
            { text: 'MTK 符号系统参数辨识实例', link: '/docs/06Optimization/97-MTK 符号系统参数辨识实例' },
            { text: 'Optimization.jl', link: '/docs/06Optimization/Optimization.jl' },
            { text: 'GenSBO', link: '/docs/06Optimization/GenSBO' },
            { text: 'MIDACO', link: '/docs/06Optimization/MIDACO' }
          ]
        },
        {
          text: '控制',
          collapsed: true,
          items: [
            { text: '简介', link: '/docs/07Control/1-控制的本质' },
            { text: 'Kalman Filtering', link: '/docs/07Control/KalmanFiltering' },
            { text: 'Optim Control', link: '/docs/07Control/OptimControl' }
          ]
        },
        {
          text: 'AI 和 ML',
          collapsed: true,
          items: [
            { text: '机器学习和人工智能', link: '/docs/08AIandML/1-机器学习和人工智能' }
          ]
        },
        {
          text: '工具',
          collapsed: true,
          items: [
            { text: '简介', link: '/docs/91Tools/vscode_git' },
            { text: 'VSCode 和 Git', link: '/docs/91Tools/vscode_git' },
            { text: 'CoolProp', link: '/docs/91Tools/CoolProp' },
            { text: 'CSV_jl_use', link: '/docs/91Tools/CSV_jl_use' },
            { text: 'ssh-git 实操', link: '/docs/91Tools/3-ssh-git 实操' }
          ]
        },
        {
          text: '工作流',
          collapsed: true,
          items: [
            { text: '简介', link: '/docs/92Workflow/julia 的安装' },
            { text: 'julia 的安装', link: '/docs/92Workflow/julia 的安装' },
            { text: 'REPL-of-Julia', link: '/docs/92Workflow/REPL-of-Julia' },
            { text: 'julia_change_pkgserve', link: '/docs/92Workflow/julia_change_pkgserve' },
            { text: 'gitworkflow', link: '/docs/92Workflow/gitworkflow' },
            { text: '1-thinkaboutstudy', link: '/docs/92Workflow/1-thinkaboutstudy' },
            { text: 'vscodePlugin', link: '/docs/92Workflow/vscodePlugin' },
            { text: 'DocStructure', link: '/docs/92Workflow/DocStructure' }
          ]
        },
        {
          text: '物联网大数据云计算',
          collapsed: true,
          items: [
            { text: '简介', link: '/docs/11IotBigdataCloud/1-物联网' },
            { text: '物联网', link: '/docs/11IotBigdataCloud/1-物联网' },
            { text: '消息件', link: '/docs/11IotBigdataCloud/2-消息件' },
            { text: '大数据简介', link: '/docs/11IotBigdataCloud/3-大数据简介' },
            { text: '从虚拟机到云计算', link: '/docs/11IotBigdataCloud/4-从虚拟机到云计算' },
            { text: '容器化和 k8s', link: '/docs/11IotBigdataCloud/5-容器化和 k8s' }
          ]
        }
      ],
      '/tutorial/': [
        {
          text: 'Go-zero 教程',
          collapsed: false,
          items: [
            { text: '简介', link: '/tutorial/01-docker-compose 环境准备' },
            { text: 'docker-compose 环境准备', link: '/tutorial/01-docker-compose 环境准备' },
            { text: 'emqx 消息服务器准备', link: '/tutorial/02-emqx 消息服务器准备' },
            { text: 'mysql 数据库准备', link: '/tutorial/03-mysql 数据库准备' },
            { text: 'go-zero 环境准备', link: '/tutorial/04-go-zero 环境准备' },
            { text: 'gateway 设置', link: '/tutorial/05-gateway 设置' },
            { text: 'goctl 生成 api 服务', link: '/tutorial/06-goctl 生成 api 服务' },
            { text: 'goctl 处理数据库模型', link: '/tutorial/07-goctl 处理数据库模型' }
          ]
        }
      ],
      '/awesome-carbon-neutrality/RenewableEnergy/': [
        {
          text: '可再生能源',
          collapsed: false,
          items: [
            { text: '简介', link: '/awesome-carbon-neutrality/RenewableEnergy/' },
            { text: 'SAM', link: '/awesome-carbon-neutrality/RenewableEnergy/1-SAM' },
            { text: 'ReOpt', link: '/awesome-carbon-neutrality/RenewableEnergy/2-ReOpt' },
            { text: 'pvlib-python', link: '/awesome-carbon-neutrality/RenewableEnergy/3-pvlib-python' },
            { text: 'SolarPILOT', link: '/awesome-carbon-neutrality/RenewableEnergy/4-SolarPILOT' },
            { text: 'SolarTherm', link: '/awesome-carbon-neutrality/RenewableEnergy/5-SolarTherm' },
            { text: 'SolTrace', link: '/awesome-carbon-neutrality/RenewableEnergy/6-SolTrace' },
            { text: 'OpenFAST', link: '/awesome-carbon-neutrality/RenewableEnergy/7-OpenFAST' },
            { text: 'OpenLCA', link: '/awesome-carbon-neutrality/RenewableEnergy/8-OpenLCA' },
            { text: 'FOQUS', link: '/awesome-carbon-neutrality/RenewableEnergy/9-FOQUS' },
            { text: 'PLANHEAT Tool', link: '/awesome-carbon-neutrality/RenewableEnergy/10-PLANHEAT Tool' },
            { text: 'Modelica Buildings library', link: '/awesome-carbon-neutrality/RenewableEnergy/11-Modelica Buildings library' },
            { text: 'IDEAS', link: '/awesome-carbon-neutrality/RenewableEnergy/12-IDEAS' },
            { text: 'OpenMDAO', link: '/awesome-carbon-neutrality/RenewableEnergy/13-OpenMDAO' },
            { text: 'coolprop-intro', link: '/awesome-carbon-neutrality/RenewableEnergy/coolprop-intro' },
            { text: 'sam-ssc', link: '/awesome-carbon-neutrality/RenewableEnergy/sam-ssc' }
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
