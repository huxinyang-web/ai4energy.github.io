# Markdown语法兼容性问题清单

## 发现日期
2026-03-04

## 测试文件
1. `MTK_intro.md` - ModelingToolkit建模方法文档
2. `1-优化的概念.md` - 优化概念文档
3. `vscode_git.md` - VSCode和Git工具文档

## 已识别的问题

### 1. 自定义容器语法

**问题描述**：
VuePress主题`vuepress-theme-hope`使用`!!!`语法创建自定义容器：
- `!!! tip`
- `!!! note`
- `!!! warning`
- `!!! danger`
- `!!! info`

**示例**：
```markdown
!!! tip
    Contents：建模、MTK
    Contributor: YJY
```

**VitePress支持情况**：
VitePress原生不支持`!!!`语法。VitePress使用`:::tip`语法。

**解决方案**：
需要全局替换所有`!!! type`为`::: type`（注意语法差异）。

### 2. 数学公式支持

**问题描述**：
VuePress主题支持以下数学公式语法：
1. 行内公式：`$...$`
2. 块级公式：`$$...$$`
3. 数学代码块：````math`语法

**示例**：
```markdown
$$(x+y)z = xy + yz$$

````math
\frac{dx}{dt} = \sigma(y-x)
````
```

**VitePress支持情况**：
VitePress默认不包含数学公式支持。需要安装和配置数学公式插件。

**解决方案**：
1. 安装`markdown-it-katex`或`markdown-it-mathjax`插件
2. 配置VitePress使用这些插件
3. 测试公式渲染

### 3. 特殊代码块语法

**问题描述**：
VuePress主题支持`@example`代码块用于代码演示：

**示例**：
````markdown
```@example lorenz
using ModelingToolkit
using DifferentialEquations
```
````

**VitePress支持情况**：
VitePress将`@example`视为未知语言标记，回退到普通文本。

**解决方案**：
1. 寻找VitePress的代码演示插件
2. 或转换为标准的代码块并添加说明
3. 或使用CodeSandbox/StackBlitz嵌入

### 4. 图表功能

**问题描述**：
VuePress主题支持多种图表：
- Mermaid图表
- ECharts图表
- Chart.js图表

**VitePress支持情况**：
VitePress原生支持Mermaid，但需要配置。ECharts和Chart.js需要额外插件。

**解决方案**：
1. 配置VitePress的Mermaid支持
2. 评估ECharts和Chart.js的必要性
3. 寻找或创建相应插件

### 5. 幻灯片演示

**问题描述**：
VuePress主题支持`presentation`语法创建幻灯片。

**VitePress支持情况**：
VitePress不支持内置的幻灯片演示。

**解决方案**：
1. 使用独立的幻灯片工具（如Reveal.js）
2. 或转换为普通Markdown页面
3. 或寻找第三方VitePress插件

### 6. 文件包含功能

**问题描述**：
VuePress主题支持`@include`语法包含其他文件。

**VitePress支持情况**：
VitePress不支持文件包含语法。

**解决方案**：
1. 使用VitePress的Vue组件功能
2. 或手动合并内容
3. 或寻找/创建插件

### 7. 代码标签页

**问题描述**：
VuePress主题支持`codetabs`语法创建代码标签页。

**VitePress支持情况**：
VitePress不支持代码标签页。

**解决方案**：
1. 使用自定义Vue组件
2. 或转换为独立的代码块

## 优先级分类

### 必须解决（高优先级）
1. 自定义容器语法（`!!!` → `:::`）
2. 数学公式支持
3. 基本代码高亮（修复`math`语言识别）

### 最好有（中优先级）
1. Mermaid图表支持
2. 代码演示功能
3. 文件包含功能

### 可忽略/简化（低优先级）
1. ECharts/Chart.js图表
2. 幻灯片演示
3. 代码标签页

## 测试方法

### 已执行的测试
1. 基础Markdown渲染 ✓
2. 图片引用 ✓
3. 链接导航 ✓
4. 代码块基础高亮 ✓（但`math`和`@example`有问题）

### 待测试的功能
1. 表格渲染
2. 任务列表
3. 脚注
4. 定义列表
5. 表情符号

## 建议的解决方案

### 短期方案（测试阶段）
1. 配置`ignoreDeadLinks: true`避免死链接错误 ✓
2. 添加`markdown-it-katex`插件支持数学公式
3. 全局替换`!!!`为`:::`

### 中期方案（功能迁移）
1. 配置Mermaid支持
2. 创建/寻找代码演示组件
3. 处理文件包含需求

### 长期方案（完整迁移）
1. 评估并实现图表功能
2. 处理幻灯片演示需求
3. 优化性能配置

## 后续步骤

1. **立即执行**：全局替换`!!!`语法
2. **本周内完成**：配置数学公式支持
3. **下周计划**：测试图表和代码演示功能

---
**生成时间**：2026-03-04
**测试环境**：VitePress 1.6.4
**测试分支**：`vitepress-migration-test`