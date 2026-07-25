# 仓库优化计划

## 背景

对 yuki-web 仓库进行全面 review 后，识别出以下可优化项。目标是为后续扩展打好底子，提升开发体验、内容质量、SEO 和可维护性。

## 当前状态

- **技术栈**: VitePress + TypeScript + Tailwind CSS v4
- **多语言**: zh / en / ja / fr / ru（5 种语言）
- **内容**: 仅 zh 有实质内容（tailwind.md），其余语言首页 link 均指向
  `/zh/tailwind`
- **主题**: 扩展默认主题，`index.ts` 含语言重定向逻辑
- **CI**: GitHub Actions（lint + format:check + type-check + build）
- **测试**: 无
- **部署**: 自有服务器手动部署

## 设计原则

### CSS 策略：Tailwind-first

本项目以 Tailwind CSS 为首选样式方案：

- **内容样式、页面布局、组件** → Tailwind utility class，直接在 Markdown /
  Vue 组件中使用
- **VitePress 主题级定制**（导航栏、侧边栏、品牌色等）→ VitePress
  CSS 变量（`--vp-c-*`）
- **`style.css`**
  → 仅放 Tailwind 无法表达的必要自定义（复杂 keyframe 动画、伪元素等），保持精简

禁止在 `.vue` 或 `.md` 中添加 `<style>` / `<style scoped>`
块（除非是 VitePress 特定 CSS 变量覆盖且确无 Tailwind 等价方案）。

---

## Phase 1：工程基础（立即执行）

### 1.1 TypeScript 配置补全

- [x] 启用 `forceConsistentCasingInFileNames: true`（跨 OS 兼容）
- [x] 添加 `tsconfig.node.json` 分离 Node 工具链配置（vitest.config.ts、tests/）
- [x] 确认 `include` 覆盖所有 `.ts`/`.vue` 文件

### 1.2 package.json 增强

- [x] 添加 `engines` 字段（node >= 18，yarn >= 1.22）
- [x] 添加 `"type": "module"`（已有）
- [x] `browserslist`：VitePress 通过 Vite 处理兼容性，无需额外配置

### 1.3 编辑器与协作配置

- [x] 添加 `.editorconfig`（统一缩进、换行符、字符集）
- [x] 添加 `.vscode/settings.json`（format on save、默认 formatter 等）
- [x] 添加 `.vscode/extensions.json`（推荐 Volar、ESLint、Prettier、Tailwind CSS
      IntelliSense）
- [x] 调整 `.gitignore`：仅忽略 `.vscode` 个人配置，保留协作配置可提交

### 1.4 Pre-commit Hooks

- [x] 安装 `husky` + `lint-staged`
- [x] 配置 pre-commit：自动运行 `eslint --fix` + `prettier --write` 于暂存文件
- [x] 在 CLAUDE.md 补充说明

---

## Phase 2：站点基础设施

### 2.1 public 静态资源

- [x] 创建 `docs/public/` 目录
- [x] 使用 PNG 作为 favicon（`link rel="icon"`，现代浏览器均支持）
- [x] 添加 `robots.txt`
- [x] 添加 `sitemap.xml`（通过 `sitemap` 包 + buildEnd hook 自动生成）
- [x] 添加 Open Graph 社交分享图 `og-image.png`

### 2.2 SEO & Meta 配置

- [x] 在 `config.mts` 各 locale 中添加 `head` 配置：
  - `meta.description`、`meta.keywords`
  - Open Graph (`og:title`, `og:description`, `og:image`)
  - Twitter Card
- [x] 全局 head：favicon、og:type、twitter:card 等共享标签

### 2.3 Sitemap 生成

- [x] 安装 `sitemap` 包
- [x] 在 `config.mts` 中配置 buildEnd hook 生成 sitemap

### 2.4 部署方式

- 当前部署方式：本地/CI 构建后手动部署到自有服务器
- 无需 GitHub Actions deploy 流水线
- 后续可考虑添加 `bin/deploy.sh` 部署脚本（build + rsync 到服务器）

---

## Phase 3：代码架构优化

### 3.1 消除重复样式

- [x] 将各语言首页重复的 `<style>` 块提取到 `docs/.vitepress/theme/style.css`
- [x] 从 5 个 locale 首页中移除 `<style>` 块

### 3.2 语言重定向逻辑整理

- [x] `theme/index.ts` 已在 Phase 1 提取到 `utils/lang.ts`，无需进一步处理
- [x] `docs/index.md` 保留简洁的客户端重定向（作为无 JS 回退）

### 3.3 目录结构规范化

```
docs/
├── .vitepress/
│   ├── config.mts
│   ├── i18n.ts                  # NEW: 多语言翻译表
│   ├── theme/
│   │   ├── index.ts
│   │   ├── style.css
│   │   └── components/          # 自定义 Vue 组件（未来扩展）
│   └── utils/                   # 工具函数（语言检测等）
├── public/                      # 静态资源
├── index.md
├── zh/、en/、ja/、fr/、ru/     # 各语言内容
```

### 3.4 翻译表

- [x] 创建 `docs/.vitepress/i18n.ts`，集中管理所有 UI 文案
- [x] 添加 `t(lang)` 函数，config.mts 通过翻译表获取字符串
- [x] config.mts 从 171 行精简至 ~120 行

### 3.5 共享组件抽取

- [ ] 创建可复用的 `FeatureCard` 组件（未来扩展时再做）

---

## Phase 4：功能依赖补充

### 4.1 推荐依赖

| 依赖                       | 用途                                                                | 优先级 |
| -------------------------- | ------------------------------------------------------------------- | ------ |
| `vue`                      | 已有                                                                | ✅     |
| `@vueuse/core`             | Vue 组合式工具库（useFetch、useStorage、useDark、useMediaQuery 等） | ✅     |
| `zod`                      | API 返回值运行时校验（TypeScript 类型编译后不保运行时安全）         | ✅     |
| `pinia`                    | 跨组件状态管理（用户状态、后端数据缓存等）                          | 暂缓   |
| `@vueuse/head`             | VitePress 原生支持 head，不需要                                     | 不需要 |
| `unplugin-vue-components`  | 自动导入组件（暂无 Vue 组件，有组件后再装）                         | 暂缓   |
| `unplugin-icons`           | Iconify 图标组件化（需要图标集时再装）                              | 暂缓   |
| `vitepress-plugin-mermaid` | Mermaid 图表支持（需要画图时再装）                                  | 暂缓   |
| `markdown-it-container`    | VitePress 内建 ::: tip/warning 已够用                               | 不需要 |

> **关于 HTTP 请求**：不需要 `axios`。VueUse 的 `useFetch` + 浏览器原生 `fetch`
> 已覆盖所有场景。后端建议使用 NestJS 或直接 Fastify/Express +
> TypeScript，前后端共享 `zod` schema 可做端到端类型安全。

### 4.2 开发依赖补充

| 依赖               | 用途                  | 优先级 |
| ------------------ | --------------------- | ------ |
| `husky`            | Git hooks 管理        | ✅     |
| `lint-staged`      | 只对暂存文件运行 lint | ✅     |
| `vitest`           | 单元测试框架          | ✅     |
| `@playwright/test` | E2E 测试              | 低     |

---

## Phase 5：内容结构优化

### 5.1 各语言内容独立

- [ ] 将 `zh/tailwind.md` 翻译为 en、ja、fr、ru 版本（或至少创建占位页面）
- [ ] 各语言首页的 action link 和 feature link 指向自身语言路径

### 5.2 内容规划

- [ ] `zh/` → 中文主力内容区
- [ ] `en/` → 英文内容
- [ ] 考虑添加 blog 功能（VitePress 内建 blog 主题支持）

### 5.3 导航一致性

- [ ] 各语言 nav/sidebar 中的 Tailwind link 目前都指向
      `/zh/tailwind`，改为各自语言路径

---

## Phase 6：测试与质量保障

### 6.1 基础测试

- [x] 安装 `vitest`
- [x] 为工具函数（语言检测 `getLangPath` 等）编写 24 个单元测试
- [x] 配置 CI 中的 test + coverage 步骤
- [x] 安装 `@vitest/coverage-v8`，集成 Codecov

### 6.2 构建验证

- [x] CI 通过 `yarn docs:build`（type-check + test + build）保证质量
- [ ] Dead link check — 后续需要时添加

---

## 优先级总结

| 优先级 | Phase   | 关键收益                   |
| ------ | ------- | -------------------------- |
| 🔴 高  | Phase 1 | 工程基础，立即提升 DX      |
| 🔴 高  | Phase 2 | 站点基础设施，SEO/发布必备 |
| 🟡 中  | Phase 3 | 消除技术债，便于扩展       |
| 🟡 中  | Phase 4 | 功能依赖，支撑后续特性     |
| 🟢 低  | Phase 5 | 内容完善，可逐步推进       |
| 🟢 低  | Phase 6 | 测试覆盖，长期质量保障     |
