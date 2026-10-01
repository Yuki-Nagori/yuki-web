# Yuki Web

Yuki 的个人网站，使用 Vue 3 + Vite 7 + TypeScript 5 + Tailwind CSS
4。保留原网站 footer：动态年份、Yuki 版权所有、浙ICP备2026034080号-1。

## 开发

安装 Bun >= 1.4.0 和 Node.js >=
22.12.0。Bun 负责依赖管理和脚本执行；Vite 提供 Vue 编译、热更新和生产构建。Vite、Vitest 和 V8 覆盖率工具使用 Node.js 运行。

```bash
bun install --frozen-lockfile
bun run dev
```

## 命令

| 命令                                      | 用途                                    |
| ----------------------------------------- | --------------------------------------- |
| `bun run dev`                             | 启动开发服务器                          |
| `bun run build`                           | 类型检查并构建到 `dist/`                |
| `bun run preview`                         | 预览生产构建                            |
| `bun run type-check`                      | 使用 vue-tsc 检查 Vue 和 TypeScript     |
| `bun run test`                            | 使用 Vitest 运行组件测试                |
| `bun run test:watch`                      | 测试监视模式                            |
| `bun run test:coverage`                   | V8 覆盖率                               |
| `bun run lint` / `bun run lint:fix`       | ESLint 检查和修复                       |
| `bun run format` / `bun run format:check` | Prettier 格式化和检查                   |
| `bun run knip`                            | 检查未使用文件、导出和依赖              |
| `bun run analyze`                         | 构建并输出 `dist/stats.html` 包体积报告 |
| `bun run check`                           | lint、格式、类型、测试、Knip 检查       |

请使用 `bun run test`；`bun test`
是 Bun 自带的测试器，不使用本项目的 Vitest 配置。

## 结构

```text
src/
  main.ts
  App.vue
  components/SiteFooter.vue
  style.css
tests/
index.html
vite.config.ts
vitest.config.ts
```

`@/` 指向 `src/`。CI 和 Husky 均使用 Bun 命令。

## 依赖选择

当前保留 Vue、Tailwind、Vue/TypeScript 检查、Vitest + Happy DOM、ESLint +
Prettier、Husky、Knip 和构建体积分析。Vitest 与 coverage-v8 固定为同一版本，避免 peer
dependency 不匹配。

VueUse、Pinia、KaTeX、uPlot 和 tinybench 在实际需要时再安装。Pinia
4 需要同时安装 `@vue/devtools-api`；KaTeX 在 TypeScript 中使用时可补
`@types/katex`，并引入 KaTeX 样式。

## License

[Apache-2.0](LICENSE)
