# Phase 4: 仓库拆分实施计划

**制定日期**: 2026-03-24
**状态**: 待执行
**前置条件**: Phase 3 已完成（拆分方案已确认）

---

## 📋 目标

将当前 `docs-test/` 中的文档拆分到 2 个独立仓库：

| 仓库 | GitHub 地址 | 文件数 |
|------|-------------|--------|
| `ai4edocs-intro` | github.com/ai4energy/ai4edocs-intro | 46 |
| `ai4edocs-energy` | github.com/ai4energy/ai4edocs-energy | 54 |

---

## 📁 文件分配清单

### ai4edocs-intro (46 个文件)

```
docs/
├── 01CSBase/              (10 个文件)
├── 02JuliaIntro/          (16 个文件)
├── 03CSAdv/               (11 个文件)
├── 12GolangIntro/         (2 个文件)
├── 91Tools/               (5 个文件)
├── 92Workflow/            (7 个文件)
└── tutorial/              (7 个文件)
```

### ai4edocs-energy (54 个文件)

```
docs/
├── 04Modeling/            (7 个文件)
├── 05Simulation/          (7 个文件)
├── 06Optimization/        (22 个文件)
├── 07Control/             (5 个文件)
├── 08AIandML/             (1 个文件)
├── 09EMS/                 (1 个文件)
├── 11IotBigdataCloud/     (5 个文件)
└── awesome-carbon-neutrality/  (16 个文件)
```

---

## ⏳ 实施步骤

### 步骤 1: 创建新仓库（GitHub 上）

**操作**:
1. 访问 github.com/ai4energy/
2. 创建新仓库 `ai4edocs-intro`
3. 创建新仓库 `ai4edocs-energy`

**注意**:
- 设为公开仓库 (Public)
- 先不添加 README/.gitignore（保持空仓库）
- 记录仓库 URL 备用

---

### 步骤 2: 准备本地环境

```bash
# 进入项目目录
cd /home/huhu/ai4energy.github.io

# 创建临时工作目录
mkdir -p /tmp/ai4edocs-split
cd /tmp/ai4edocs-split

# 克隆新仓库（空仓库，先初始化）
git init ai4edocs-intro
git init ai4edocs-energy
```

---

### 步骤 3: 拆分文件 - ai4edocs-intro

```bash
# 进入 intro 仓库
cd /tmp/ai4edocs-split/ai4edocs-intro

# 从原仓库复制文件
cp -r /home/huhu/ai4energy.github.io/docs-test/docs/01CSBase ./docs/
cp -r /home/huhu/ai4energy.github.io/docs-test/docs/02JuliaIntro ./docs/
cp -r /home/huhu/ai4energy.github.io/docs-test/docs/03CSAdv ./docs/
cp -r /home/huhu/ai4energy.github.io/docs-test/docs/12GolangIntro ./docs/
cp -r /home/huhu/ai4energy.github.io/docs-test/docs/91Tools ./docs/
cp -r /home/huhu/ai4energy.github.io/docs-test/docs/92Workflow ./docs/
cp -r /home/huhu/ai4energy.github.io/docs-test/tutorial ./docs/

# 复制图片资源
mkdir -p ./docs/.vitepress/public/assets
cp -r /home/huhu/ai4energy.github.io/docs-test/docs/.vitepress/public/assets/image ./docs/.vitepress/public/assets/
```

---

### 步骤 4: 拆分文件 - ai4edocs-energy

```bash
# 进入 energy 仓库
cd /tmp/ai4edocs-split/ai4edocs-energy

# 从原仓库复制文件
cp -r /home/huhu/ai4energy.github.io/docs-test/docs/04Modeling ./docs/
cp -r /home/huhu/ai4energy.github.io/docs-test/docs/05Simulation ./docs/
cp -r /home/huhu/ai4energy.github.io/docs-test/docs/06Optimization ./docs/
cp -r /home/huhu/ai4energy.github.io/docs-test/docs/07Control ./docs/
cp -r /home/huhu/ai4energy.github.io/docs-test/docs/08AIandML ./docs/
cp -r /home/huhu/ai4energy.github.io/docs-test/docs/09EMS ./docs/
cp -r /home/huhu/ai4energy.github.io/docs-test/docs/11IotBigdataCloud ./docs/
cp -r /home/huhu/ai4energy.github.io/docs-test/awesome-carbon-neutrality ./docs/

# 复制图片资源
mkdir -p ./docs/.vitepress/public/assets
cp -r /home/huhu/ai4energy.github.io/docs-test/docs/.vitepress/public/assets/image ./docs/.vitepress/public/assets/
```

---

### 步骤 5: 配置 config.ts

**为每个仓库创建独立的配置文件**

需要修改的内容：
1. `base` 路径（改为对应仓库名）
2. `sidebar` 配置（只保留本仓库的目录）
3. `nav` 导航（添加跨仓库链接）
4. `editLink` 编辑链接（改为新仓库地址）

---

### 步骤 6: 配置 package.json

每个仓库需要独立的 `package.json`：

```json
{
  "name": "ai4edocs-{intro|energy}",
  "version": "1.0.0",
  "scripts": {
    "dev": "vitepress dev docs",
    "build": "vitepress build docs",
    "preview": "vitepress preview docs"
  },
  "devDependencies": {
    "vitepress": "^1.6.4",
    "vue": "^3.5.29"
  },
  "dependencies": {
    "markdown-it-katex": "^2.0.3",
    "markdown-it-mermaid-plugin": "^0.1.0"
  }
}
```

---

### 步骤 7: 配置 GitHub Actions

创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy VitePress site to Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Install dependencies
        run: npm ci

      - name: Build with VitePress
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

### 步骤 8: 提交并推送

```bash
# intro 仓库
cd /tmp/ai4edocs-split/ai4edocs-intro
git add .
git commit -m "Initial commit: Ai4E Docs - Introduction

- CS 基础、Julia 入门、CS 进阶
- 开发工具、工作流
- go-zero 教程

这是 Ai4Energy 文档的入门部分，面向初学者和新手。"
git remote add origin git@github.com:ai4energy/ai4edocs-intro.git
git branch -M main
git push -u origin main

# energy 仓库
cd /tmp/ai4edocs-split/ai4edocs-energy
git add .
git commit -m "Initial commit: Ai4E Docs - Energy Systems

- 建模、仿真、优化、控制
- AI/ML、能源管理系统、IoT/大数据
- 碳中和工具汇编

这是 Ai4Energy 文档的专业部分，面向专业用户和研究者。"
git remote add origin git@github.com:ai4energy/ai4edocs-energy.git
git branch -M main
git push -u origin main
```

---

### 步骤 9: 配置 GitHub Pages

1. 访问每个仓库的 Settings → Pages
2. 确认部署源是 GitHub Actions
3. 记录部署后的 URL

---

### 步骤 10: 主站改造（可选）

如果保留主站 `ai4energy.github.io` 作为门户：

1. 修改首页为导航页
2. 添加跳转到两个子站的链接
3. 保持统一视觉风格

---

## ⚠️ 注意事项

### 跨仓库链接处理

**问题**: 拆分后，跨仓库的链接会失效

**解决方案**: 使用绝对链接

```markdown
<!-- 拆分前 -->
[Julia 安装](/docs/02JuliaIntro/0010-julia的安装.md)

<!-- 拆分后（如果需要跨仓库引用） -->
[Julia 安装](https://ai4energy.github.io/ai4edocs-intro/docs/02JuliaIntro/0010-julia的安装.html)
```

### 图片路径

确保图片路径使用正确的相对路径：

```markdown
<!-- 正确 -->
![示意图](/assets/image/04Modeling/xxx.png)

<!-- 或 -->
![示意图](../assets/image/04Modeling/xxx.png)
```

### 样式统一

两个仓库应该保持统一的：
- 网站标题格式 (`Ai4Energy - {副标题}`)
- Logo
- 主题色
- 页脚信息

---

## ✅ 验收标准

| 检查项 | intro | energy |
|--------|-------|--------|
| GitHub 仓库创建 | ☐ | ☐ |
| 文件完整复制 | ☐ | ☐ |
| config.ts 配置正确 | ☐ | ☐ |
| GitHub Actions 配置 | ☐ | ☐ |
| 本地构建成功 | ☐ | ☐ |
| 部署成功 | ☐ | ☐ |
| 链接验证通过 | ☐ | ☐ |

---

## 📝 回滚计划

如果拆分过程中遇到问题：

1. **暂停拆分** - 保持原仓库不变
2. **删除新仓库** - 在 GitHub 上删除 `ai4edocs-intro` 和 `ai4edocs-energy`
3. **清理本地** - 删除 `/tmp/ai4edocs-split/` 目录
4. **重新评估** - 分析问题后重新规划

---

## 🔗 相关文档

- [Phase 3 规划方案](./phase3-repo-split-plan.md)
- [VitePress 官方文档](https://vitepress.dev/)
- [GitHub Pages 部署指南](https://pages.github.com/)

---

**下一步**: 确认后开始执行 Phase 4
