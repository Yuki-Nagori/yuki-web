# 仓库协作指南

本项目为 Yuki 个人网站，使用 Vue 3 + Vite 7 + TypeScript 5 + Tailwind CSS
4。使用 Bun 安装依赖和执行脚本，锁文件为
`bun.lock`。不要使用 npm 或 Yarn。Node.js >=
22.12 用于运行 Vite、Vitest 及 V8 覆盖率工具。

## 常用命令

- `bun install --frozen-lockfile`：按锁文件安装依赖。
- `bun run dev`：启动开发服务器。
- `bun run check`：检查 lint、格式、类型、测试和未使用依赖。
- `bun run build`：类型检查和生产构建，产物在 `dist/`。
- `bun run test:coverage`：运行 Vitest 和 V8 覆盖率。
- `bun run analyze`：构建并输出 `dist/stats.html`。

## 约定

- 应用代码放在 `src/`，组件在 `src/components/`，测试在 `tests/`。
- Vue 使用 `<script setup lang="ts">`，样式优先使用 Tailwind utilities。
- `@/` 指向 `src/`，由 Vite 和 TypeScript 同时配置。
- 保留 footer 的动态年份、版权文字和 ICP 备案链接。
- 功能库按需添加，不预装没有实际用途的依赖。
- 禁止直接在 main 上提交；使用 `yuki/` 前缀分支，通过 PR 合并。
- 提交前运行 `bun run check` 和 `bun run build`。PR 由用户手动合并。
