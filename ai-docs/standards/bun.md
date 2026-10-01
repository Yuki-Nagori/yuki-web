# Bun 准则

- 使用 Bun 安装依赖和执行项目脚本，不使用 npm 或 Yarn。
- 提交 `bun.lock`，CI 使用 `bun install --frozen-lockfile`。
- 使用 `bun add` 或 `bun remove` 修改依赖，同步更新清单和锁文件。
- 使用 `bun run <script>` 执行 `package.json` 中的脚本。
- `bun build` 是 Bun 的打包器，不等同于项目的 Vite 构建脚本。
- `bun test` 是 Bun 的测试器，不等同于项目的 Vitest 测试脚本。
- Bun 作为包管理器和脚本入口不意味着所有工具都由 Bun
  runtime 运行；本项目保留 Node.js 工具运行环境。
