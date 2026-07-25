# CLAUDE.md

本文件为 Claude Code（claude.ai/code）提供本仓库的协作指南。

## 项目概述

本项目是 **Yuki 个人网站**（`https://www.nagoriyuki.cn`），基于 **VitePress +
TypeScript + Tailwind CSS** 构建的多语言文档站点。

支持语言：简体中文（默认）、English、日本語、Français、Русский。

## 常用命令

请使用 `yarn`（而非 `npm`）。项目要求 Node.js 18+。

```bash
# 安装依赖
yarn install

# 开发服务器
yarn docs:dev

# 开发服务器（全量检查）
yarn docs:dev:full

# 生产构建
yarn docs:build

# 预览构建产物
yarn docs:preview

# ESLint
yarn lint
yarn lint:fix

# Prettier
yarn format
yarn format:check

# TypeScript 类型检查
yarn type-check

# 测试
yarn test
```

### 命令绑定说明

- **`yarn docs:dev`**：直接启动 `vitepress dev docs`（lint/format 由 pre-commit
  hook + 编辑器 format-on-save 保证）
- **`yarn docs:dev:full`**：`lint:fix` → `format` →
  `vitepress dev docs`（全量检查后启动）
- **`yarn docs:build`**：`type-check` → `test` →
  `vitepress build docs`（类型检查 + 测试 + 构建）

## 架构

### VitePress 站点结构

```
docs/
├── .vitepress/
│   ├── config.mts          # 站点配置（多语言、导航、侧边栏）
│   ├── theme/              # 自定义主题
│   └── cache/              # 开发缓存（已 gitignore）
├── index.md                # 根入口（浏览器语言检测重定向）
├── zh/                     # 简体中文
│   ├── index.md
│   └── tailwind.md
├── en/                     # English
│   └── index.md
├── ja/                     # 日本語
│   └── index.md
├── fr/                     # Français
│   └── index.md
└── ru/                     # Русский
    └── index.md
```

- 根 `index.md` 通过浏览器语言检测自动重定向到对应语言首页。
- 每个语言目录下的 markdown 文件即对应路由。
- 构建产物输出到 `docs/dist/`。

### Tailwind CSS

通过 `@tailwindcss/vite` 插件在 VitePress 中集成 Tailwind CSS v4，配置位于
`docs/.vitepress/config.mts` 的 `vite.plugins` 中。

**样式策略：Tailwind-first**

- 内容样式、页面布局、组件 → 直接在 Markdown / Vue 组件中使用 Tailwind utility
  class
- VitePress 主题级定制（导航栏、品牌色等）→ VitePress CSS 变量（`--vp-c-*`）
- `style.css` → 仅放 Tailwind 无法表达的必要自定义，保持精简
- 禁止在 `.vue` 或 `.md` 中添加 `<style>` 块（除非确无 Tailwind 等价方案）

## 文件组织约定

- **多语言内容**：放在对应语言目录 `docs/<locale>/` 下，文件名作为路由路径。
- **主题和配置**：放在 `docs/.vitepress/` 下。
- 文件名使用小写字母，连字符分隔（如 `my-notes.md`）。
- 新内容添加到对应语言的目录下即可；在 `config.mts` 的
  `locales.<locale>.themeConfig.nav` 和 `sidebar` 中添加导航条目。

## Lint 与格式化配置

- **ESLint**：`eslint.config.js`（flat config），集成
  `@eslint/js`、`typescript-eslint`、`eslint-plugin-vue`（flat/recommended）。
  - 忽略
    `dist/`、`node_modules/`、`.vitepress/cache/`、`.vitepress/dist/`、`*.md`。
  - `vue/multi-word-component-names` 已关闭。
  - `no-console` / `no-debugger` 根据 `NODE_ENV`
    动态切换（生产环境 warn，开发环境 off）。
  - `@typescript-eslint/no-explicit-any` 为 warn。
  - `@typescript-eslint/no-unused-vars` 为 error（`_` 前缀参数忽略）。
- **Prettier**：`prettier.config.js`，配置
  `semi: false`、`singleQuote: true`、`tabWidth: 2`、`trailingComma: 'es5'`、`printWidth: 100`、`endOfLine: 'lf'`、`arrowParens: 'always'`。
  - `.md` 文件覆盖 `proseWrap: 'always'`、`printWidth: 80`。
  - `.yml` 文件覆盖 `singleQuote: false`。
- **TypeScript**：`tsconfig.json`，严格模式，路径别名 `@/*` →
  `./docs/.vitepress/*`，包含 `docs/.vitepress/**/*.{ts,vue,d.ts}`。

## 注释规范

1. **文档注释用 Doxygen 风格**：文件级、函数级说明用 `/** ... */` 或
   `/*! ... */`，配合 `@file`、`@brief`、`@param`、`@return`、`@note`、`@par`
   等标签，便于工具解析。中文撰写。

2. **代码注释精简，避免冗余**：
   - 函数内注释只写「为什么」（Why），不写「做什么」（What）——后者代码本身已表达。
   - 不逐行复述代码。整段显而易见的逻辑不需注释。
   - 一行注释能说清的不拆成多行段落。

3. **版权块保持独立**：`MODULE / DESCRIPTION / COPYRIGHT / LICENSE`
   标准版权块单独成块闭合，Doxygen 设计说明放在它之外（另起一个注释块），不混在一块。

## CI / 部署

CI 使用 GitHub Actions（`.github/workflows/ci.yml`），在 `push` 和
`pull_request` 到 `main` 分支时触发：

1. Checkout 代码
2. 安装 Node.js 22 + yarn 依赖（`--frozen-lockfile`）
3. ESLint 检查
4. Prettier 格式检查
5. `yarn docs:build`（含 type-check + test + build）

## Pre-commit Hooks

使用 `husky` + `lint-staged` 在提交前自动检查：

- `*.{js,ts,vue}` → `eslint --fix` → `prettier --write`
- `*.{md,json,yml}` → `prettier --write`

配置在 `package.json` 的 `lint-staged` 字段中，hook 脚本位于
`.husky/pre-commit`。

## Git 工作流

仓库托管在 GitHub。使用 `gh` CLI 管理 PR。

**禁止直接在 main 上 commit**。所有改动必须先切分支，通过 PR squash
merge 到 main。

### 创建分支

```bash
git checkout -b <branch-name>
```

### 提交并创建 PR

提交前务必通过质量检查（与 CI 一致）：

```bash
yarn lint          # ESLint 检查
yarn format:check  # Prettier 格式检查
yarn type-check    # TypeScript 类型检查
```

全部通过后再提交：

```bash
git add -A
git commit -m "feat: <description>"
git push -u origin <branch-name>
```

通过 **gh** 创建 PR：

```bash
gh pr create \
  --base main \
  --head <branch-name> \
  --title "<简要描述改动>" \
  --body "$(cat <<'EOF'
## 改动概要

简要描述本次改动的目的和范围。

## 详细变更

- 文件1：具体改动1
- 文件2：具体改动2
EOF
)"
```

PR 描述使用中文，包含「改动概要」和「详细变更」两个部分，末尾附上：

```
🤖 Generated with [Claude Code](https://claude.com/claude-code)
```

如果未安装 GitHub CLI，可参照官方文档安装：https://cli.github.com/
