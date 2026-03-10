# 🗓️ VitePress迁移 - 第二周详细计划（Week 2：主站点迁移测试）

## 📍 当前进度确认
✅ **已完成**：
- [x] 备份VuePress配置文件（migration-notes/目录）
- [x] 分析文档结构（96个Markdown文件，15个目录）
- [x] 分析插件配置（vuepress-theme-hope主题，丰富的mdEnhance功能）
- [x] 创建迁移计划文档

## 📅 每日任务分解

### **Day 1（周一）：VitePress环境搭建与基础测试**

**目标**：建立VitePress测试环境，验证基础迁移可行性

**具体任务**：
1. **创建独立的测试分支**
   ```bash
   git checkout -b vitepress-migration-test
   ```

2. **初始化VitePress环境**
   ```bash
   # 在项目根目录初始化（与现有VuePress共存）
   npm install -D vitepress vue
   ```

3. **创建最小化测试配置**
   ```bash
   # 创建测试目录结构
   mkdir -p docs-test/.vitepress
   mkdir -p docs-test/01CSBase
   ```

4. **复制1-2个简单的Markdown文件测试**
   ```bash
   cp src/docs/01CSBase/1-Windows命令提示符介绍.md docs-test/01CSBase/
   cp src/docs/01CSBase/2-PowerShell和WindowsTerminal.md docs-test/01CSBase/
   ```

5. **创建基础配置** `docs-test/.vitepress/config.ts`
   - 转换基础设置（title, description, base）
   - 设置简单的导航栏
   - 配置基础主题色

6. **运行测试**：`npx vitepress dev docs-test`
   - 验证页面能正常访问
   - 检查基础样式

**交付物**：
- [ ] VitePress测试环境搭建完成
- [ ] 至少2个Markdown文件成功渲染
- [ ] 基础导航功能正常

---

### **Day 2（周二）：配置系统迁移**

**目标**：迁移核心配置，重点解决多语言支持

**具体任务**：
1. **转换基础配置**
   - 从 `src/.vuepress/config.ts` 提取：
     - base路径配置
     - locales多语言设置
     - 作者信息

2. **处理多语言配置难点**
   - 研究VitePress的i18n实现方式
   - 创建中英文目录结构：`docs-test/zh/` 和 `docs-test/en/`
   - 配置locale-specific配置

3. **迁移导航栏配置**
   - 从 `src/.vuepress/navbar/index.js` 提取导航项
   - 转换为VitePress格式
   - 测试中英文切换

4. **迁移侧边栏配置**
   - 从 `src/.vuepress/sidebar/index.js` 提取
   - 注意：VitePress侧边栏配置格式不同
   - 为测试目录创建简单侧边栏

**技术难点**：
- VitePress的i18n需要目录分离结构
- 侧边栏配置可能需要重构

**交付物**：
- [ ] 基础配置成功迁移
- [ ] 多语言结构搭建
- [ ] 导航栏和侧边栏基础功能

---

### **Day 3（周三）：内容迁移验证与语法兼容性**

**目标**：测试Markdown语法兼容性，识别需要调整的内容

**具体任务**：
1. **创建内容迁移测试集**
   ```bash
   # 选择有代表性的文件测试不同功能
   cp src/docs/04Modeling/MTK_intro.md docs-test/zh/04Modeling/
   cp src/docs/06Optimization/1-优化的概念.md docs-test/zh/06Optimization/
   cp src/docs/91Tools/vscode_git.md docs-test/zh/91Tools/
   ```

2. **测试关键语法兼容性**
   - 数学公式（KaTeX）：检查 `$...$` 和 `$$...$$` 语法
   - 代码块：验证语言标识符高亮
   - 自定义容器：`::: tip`、`::: warning`等
   - 表格：检查复杂表格渲染

3. **识别不兼容语法**
   - 记录所有需要手动调整的Markdown语法
   - 创建"迁移问题清单"

4. **测试图片引用**
   - 复制相关图片到 `docs-test/public/`
   - 测试图片路径是否正确解析
   - 验证图片懒加载功能

**交付物**：
- [ ] 5-8个代表性文件迁移测试完成
- [ ] Markdown语法兼容性报告
- [ ] 图片资源引用验证

---

### **Day 4（周四）：插件功能替代方案测试**

**目标**：测试vuepress-theme-hope功能的VitePress替代方案

**具体任务**：
1. **数学公式支持测试**
   ```bash
   npm install -D markdown-it-katex
   ```
   - 配置VitePress使用markdown-it-katex
   - 测试复杂公式渲染

2. **图表功能评估**
   - **Mermaid图表**：`npm install -D @vuepress/plugin-mermaid`
   - **ECharts图表**：评估是否继续使用或替换
   - 测试现有文档中的图表

3. **代码演示功能**
   - 研究VitePress的代码演示支持
   - 测试 `::: demo` 语法的替代方案
   - 考虑使用CodeSandbox或StackBlitz嵌入

4. **其他功能测试**
   - 幻灯片演示：评估是否必要，寻找替代方案
   - 文件包含功能：研究VitePress的include支持
   - 流程图：检查Mermaid是否满足需求

**技术决策点**：
- 确定哪些功能必须保留
- 确定哪些功能可以简化或移除

**交付物**：
- [ ] 核心插件功能测试完成
- [ ] 插件替代方案决策
- [ ] 技术实现方案文档

---

### **Day 5（周五）：构建与部署流程测试**

**目标**：测试完整的构建和部署流程

**具体任务**：
1. **更新构建脚本**
   - 修改 `package.json` scripts：
   ```json
   {
     "scripts": {
       "dev:test": "vitepress dev docs-test",
       "build:test": "vitepress build docs-test",
       "preview:test": "vitepress preview docs-test"
     }
   }
   ```

2. **本地构建测试**
   ```bash
   npm run build:test
   npm run preview:test
   ```
   - 验证构建输出是否正确
   - 检查构建性能（与VuePress对比）

3. **GitHub Actions工作流测试**
   - 创建测试工作流 `.github/workflows/deploy-test.yml`
   - 基于现有 `deploy-docs.yml` 修改：
     - 更改构建命令
     - 更新输出目录为 `docs-test/.vitepress/dist`
   - 推送到测试分支验证

4. **性能对比测试**
   - 记录VitePress构建时间
   - 与VuePress构建时间对比
   - 检查输出文件大小

**交付物**：
- [ ] 完整构建流程测试通过
- [ ] GitHub Actions工作流验证
- [ ] 性能对比数据

---

### **Day 6-7（周末）：整合测试与风险评估**

**目标**：全面测试迁移方案，评估风险，制定下一步计划

**具体任务**：
1. **端到端功能测试**
   - 测试所有已迁移页面的功能
   - 验证内部链接
   - 测试搜索功能（VitePress内置搜索）

2. **创建迁移问题清单**
   - 整理本周发现的所有问题
   - 按优先级分类：必须解决、最好有、可忽略
   - 估算每个问题的解决时间

3. **制定完整迁移方案**
   - 基于测试结果，确定最终技术栈
   - 制定详细的迁移步骤
   - 估算完整迁移所需时间

4. **创建回滚计划**
   - 确保任何时候可以回退到VuePress版本
   - 文档当前状态的备份验证

**交付物**：
- [ ] 完整的功能测试报告
- [ ] 迁移问题清单与解决方案
- [ ] 详细的Phase 2执行计划
- [ ] 风险评估与回滚计划

---

## 🎯 本周关键成功标准

### 技术标准
1. ✅ VitePress测试环境正常运行
2. ✅ 至少10个代表性Markdown文件成功迁移
3. ✅ 核心功能（导航、侧边栏、搜索）正常工作
4. ✅ 数学公式和代码高亮功能正常
5. ✅ 构建和部署流程验证通过

### 决策产出
1. **插件功能决策**：确定每个vuepress-theme-hope功能的替代方案
2. **配置结构决策**：确定最终的目录结构和配置方式
3. **迁移策略决策**：确定是一次性迁移还是分阶段迁移

### 风险管理
1. **识别高风险点**：多语言支持、复杂图表功能
2. **制定应对方案**：技术替代方案或功能简化
3. **确保回滚能力**：完整备份和快速恢复方案

---

## 🔧 每日检查清单模板

```markdown
# 迁移测试日报 - [日期]

## 今日完成
- [ ] 任务1
- [ ] 任务2

## 遇到的问题
1. 问题描述：
   解决方案：

## 技术决策
- 决策项：
   理由：

## 明日计划
1. 计划1
2. 计划2
```

---

## 📝 立即开始的第一步

如果你现在就想开始，执行以下命令：

```bash
# 1. 创建测试分支
git checkout -b vitepress-migration-test

# 2. 安装VitePress
npm install -D vitepress vue

# 3. 创建测试目录结构
mkdir -p docs-test/.vitepress
mkdir -p docs-test/01CSBase

# 4. 复制测试文件
cp src/docs/01CSBase/1-Windows命令提示符介绍.md docs-test/01CSBase/

# 5. 创建最小配置
cat > docs-test/.vitepress/config.ts << 'EOF'
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Ai4Energy测试',
  description: 'VitePress迁移测试',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'CS基础', link: '/01CSBase/1-Windows命令提示符介绍' }
    ]
  }
})
EOF

# 6. 创建首页
echo '# Ai4Energy迁移测试' > docs-test/index.md

# 7. 启动测试服务器
npx vitepress dev docs-test
```

访问 http://localhost:5173 查看初步效果。

---

**生成时间**: 2026-03-02
**基于分析**:
- `文档迁移计划.md`
- `migration-notes/plugins-analysis.md`
- `migration-notes/docs-structure.txt`

**下一步建议**: 从Day 1任务开始执行，每天结束时更新进度。