# Phase 3: 仓库拆分规划方案（最终版）

**制定日期**: 2026-03-24
**状态**: 已确认 - 2 仓库方案

---

## 📊 当前文档资产清单

### 文档统计

| 模块 | 文件数 | 说明 |
|------|--------|------|
| `docs/` | 97 个 | 核心文档 (13 个目录) |
| `tutorial/` | 7 个 | go-zero 教程 |
| `awesome-carbon-neutrality/` | 16 个 | 可再生能源工具汇编 |
| **总计** | **120 个** | Markdown 文件 |

---

## 📋 最终方案：2 个仓库

### 仓库划分

| 仓库 | 内容 | 文件数 | 目标用户 |
|------|------|--------|----------|
| **仓库 A** | CSBase, JuliaIntro, CSAdv, GolangIntro, Tools, Workflow, **tutorial** | 46 | 初学者/新手 |
| **仓库 B** | Modeling, Simulation, Optimization, Control, AI, EMS, IoT, **awesome-carbon** | 54 | 专业用户 |

### 目录归属详情

| 仓库 A (入门基础) | 仓库 B (专业领域) |
|------------------|------------------|
| 01CSBase (10 文件) | 04Modeling (7 文件) |
| 02JuliaIntro (16 文件) | 05Simulation (7 文件) |
| 03CSAdv (11 文件) | 06Optimization (22 文件) |
| 12GolangIntro (2 文件) | 07Control (5 文件) |
| 91Tools (5 文件) | 08AIandML (1 文件) |
| 92Workflow (7 文件) | 09EMS (1 文件) |
| tutorial (7 文件) | 11IotBigdataCloud (5 文件) |
| | awesome-carbon (16 文件) |

---

## 🏷️ 仓库命名方案

### ✅ 已确认：方案 1

| 仓库 | 命名 | 含义 | 优点 |
|------|------|------|------|
| A | `ai4edocs-intro` | Introduction（入门） | 简短，一看就懂 |
| B | `ai4edocs-energy` | Energy（能源） | 点明专业领域 |

**整体感觉**：入门 → 专业，学习路径清晰

---

## 📁 仓库结构预览

### 仓库 A（入门基础）

```
ai4edocs-{name-a}/
├── docs/
│   ├── 01CSBase/              # Windows, gcc, Makefile
│   ├── 02JuliaIntro/          # Julia 入门
│   ├── 03CSAdv/               # CS 进阶 (抽象、DSL)
│   ├── 12GolangIntro/         # Go 语言
│   ├── 91Tools/               # Git, VSCode, CoolProp
│   ├── 92Workflow/            # Julia 环境、Git 工作流
│   └── tutorial/              # go-zero 教程
├── .vitepress/
│   └── config.ts
├── .github/workflows/
│   └── deploy.yml
└── package.json
```

### 仓库 B（专业领域）

```
ai4edocs-{name-b}/
├── docs/
│   ├── 04Modeling/            # MTK 建模
│   ├── 05Simulation/          # 微分方程、仿真
│   ├── 06Optimization/        # 优化理论、算法
│   ├── 07Control/             # 控制理论、MPC
│   ├── 08AIandML/             # 机器学习
│   ├── 09EMS/                 # 能源管理系统
│   ├── 11IotBigdataCloud/     # IoT、大数据、云
│   └── awesome-carbon-neutrality/  # 可再生能源工具
├── .vitepress/
│   └── config.ts
├── .github/workflows/
│   └── deploy.yml
└── package.json
```

---

## 🔗 仓库关系

```
用户访问流程：

ai4energy.github.io (门户主站)
        │
        ├──→ ai4edocs-{name-a}.github.io  (入门基础)
        │       └─ 适合：初学者、新手
        │
        └──→ ai4edocs-{name-b}.github.io  (专业领域)
                └─ 适合：专业用户、研究者
```

---

## ⏳ 实施顺序

1. **创建仓库 A** - 入门基础（内容清晰，风险低）
2. **创建仓库 B** - 专业领域（核心内容，需验证）
3. **配置部署** - 每个仓库独立配置 GitHub Actions
4. **主站改造** - 添加导航到两个子站

---

## 📝 缺失文档的归类原则

| 缺失文件 | 内容 | 归类 | 理由 |
|----------|------|------|------|
| `neural_network.md` | 神经网络 | 仓库 B | AI/ML 领域，专业内容 |
| `OptControl.md` | 优化控制 | 仓库 B | 控制领域，专业内容 |
| `Ai4EComponentLib.md` | 组件库 | 仓库 B 或独立 | 框架相关，或独立组件库 |
| `Frameworks/` | 框架相关 | 仓库 B | 专业框架内容 |

**归类原则**：
- **基础/工具/教程** → 仓库 A
- **专业领域/能源相关** → 仓库 B

---

## 📋 Phase 3 待完成任务

- [x] 确认拆分方案 - **2 仓库方案**
- [x] 确认仓库命名 - **ai4edocs-intro + ai4edocs-energy**
- [x] 确认各仓库内容边界
- [ ] 制定统一视觉规范
- [ ] 规划跨仓库链接策略
- [ ] 创建 Phase 4 详细实施计划

---

## ✅ Phase 3 完成总结

### 最终方案

| 项目 | 详情 |
|------|------|
| **仓库数量** | 2 个 |
| **仓库 A** | `ai4edocs-intro` (46 文件) - 入门基础 |
| **仓库 B** | `ai4edocs-energy` (54 文件) - 专业领域 |
| **目标用户** | 初学者/新手 → 专业用户 |

### 仓库内容

**ai4edocs-intro**:
- 01CSBase, 02JuliaIntro, 03CSAdv, 12GolangIntro
- 91Tools, 92Workflow, tutorial

**ai4edocs-energy**:
- 04Modeling, 05Simulation, 06Optimization, 07Control
- 08AIandML, 09EMS, 11IotBigdataCloud
- awesome-carbon-neutrality

---

**Phase 3 完成时间**: 2026-03-24
**下一步**: 创建 Phase 4 实施计划
