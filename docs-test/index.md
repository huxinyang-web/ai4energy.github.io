---
layout: home
hero:
  name: Ai4Energy
  text: 奔向智慧能源新时代
  tagline: Heading Towards a New Era of Smart Energy
  image:
    src: /assets/icon/chrome-512.png
  actions:
    - theme: brand
      text: 开始浏览
      link: /docs/01CSBase/1-Windows 命令提示符介绍
    - theme: alt
      text: English Docs
      link: /en/
    - theme: alt
      text: 在 GitHub 上查看
      link: https://github.com/ai4energy/ai4energy.github.io
features:
  - title: CS 基础
    details: Windows 命令提示符、PowerShell、环境变量等基础知识
    link: /docs/01CSBase/1-Windows 命令提示符介绍
  - title: 建模工具
    details: ModelingToolkit 建模方法
    link: /docs/04Modeling/MTK_intro
  - title: 优化
    details: 优化理论与方法
    link: /docs/06Optimization/1-优化的概念
  - title: 工具
    details: VSCode 和 Git 使用指南
    link: /docs/91Tools/vscode_git
---

# Ai4Energy: 致力于发展人工智能在能源领域的应用

我们致力于发展人工智能在能源领域的应用，包括从微分代数方程（DAEs）到运筹学（OR），以及机器学习（深度学习、强化学习）等。

我们项目实践方面目前主要是能源系统的建模、仿真、优化与控制（DAEs 和 OR），以期为能源系统优化设计、优化运行提供基础的软件支撑方案。在机器学习方面则开展新方法的应用。项目基于强大的 [Julia](https://julialang.org/) 生态构建。针对优化设计问题，主要发展综合能源系统优化问题的建模与求解。针对优化运行问题，则开展仿真引擎、参数辨识、模型预测控制方面的开发工作。

我们也开设了相关研究生课程，请访问 [智慧能源：从概念到实践](https://enpocourses.github.io/enpo811203/) 获取更多相关信息。

## 核心能力

- **能源系统仿真引擎**。[元流程仿真引擎 Ai4EMetaPSE](https://github.com/ai4energy/Ai4EMetaPSE.jl)，采用基于方程的面向对象建模，基于微分代数方程（DAE），对能源系统组件进行建模，用以对能源系统进行稳态、动态仿真。能够处理连续时间及离散事件问题。

- **能源系统优化引擎**。基于分等级组件化建模方法，使用 [JuMP.jl](https://github.com/jump-dev/JuMP.jl) 等优化包处理能源系统优化设计问题。

- **能源系统模型预测控制**。基于仿真引擎，利用优化引擎进行参数辨识（模型校准），开发能源系统模型预测控制软件。我们已经写了一个最优控制包 [OptControl](https://github.com/ai4energy/OptControl.jl)。

- **可再生能源组件库**。适用于综合能源系统仿真的 [可再生能源组件库（renewable energy library）](https://github.com/ai4energy/Ai4EComponentLib.jl)，持续更新中。

- **综合能源系统虚拟仿真实验室**。适用于综合能源系统仿真的 [综合能源系统虚拟仿真实验室](https://github.com/ai4energy/Ai4ELab)，持续更新中。

- **机器学习方法的应用**。

- **智慧能源管理信息系统**。
