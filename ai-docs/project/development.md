# 开发指南

Yuki 个人网站，使用 Vue 3 + Vite 7 + TypeScript 5 + Tailwind CSS 4。

## 环境与依赖

- Bun >= 1.4.0：安装依赖和执行脚本，锁文件为 `bun.lock`。
- Node.js >= 22.12.0：运行 Vite、Vitest 和 V8 覆盖率工具。

## 常用命令

在仓库根目录执行：

| 命令                                      | 用途                                        |
| ----------------------------------------- | ------------------------------------------- |
| `bun install --frozen-lockfile`           | 按锁文件安装依赖                            |
| `bun run dev`                             | 启动开发服务器                              |
| `bun run build`                           | 类型检查并构建到 `dist/`                    |
| `bun run preview`                         | 预览生产构建                                |
| `bun run type-check`                      | 使用 vue-tsc 检查 Vue 和 TypeScript         |
| `bun run test`                            | 运行 Vitest 测试                            |
| `bun run test:watch`                      | 测试监视模式                                |
| `bun run test:coverage`                   | 运行测试并生成 V8 覆盖率报告                |
| `bun run lint` / `bun run lint:fix`       | ESLint 检查和修复                           |
| `bun run format` / `bun run format:check` | Prettier 格式化和检查                       |
| `bun run knip`                            | 检查未使用文件、导出和依赖                  |
| `bun run analyze`                         | 构建并生成 `dist/stats.html` 包体积报告     |
| `bun run check`                           | 依次检查 lint、格式、类型、测试和未使用依赖 |

使用 `bun run build` 执行项目构建脚本；`bun build` 是 Bun 自带的打包命令。使用
`bun run test` 执行 Vitest；`bun test` 是 Bun 自带的测试器。

命令定义以根目录 `package.json` 为准；修改脚本时同步更新本文档。
