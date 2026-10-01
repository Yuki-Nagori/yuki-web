# Vite 准则

- Vue 单文件组件通过 `@vitejs/plugin-vue` 编译。
- 开发、预览和生产构建使用项目脚本，具体命令见
  [开发指南](../project/development.md)。
- 插件和构建选项集中在 `vite.config.ts`，按实际需求添加。
- 路径别名同时维护 Vite 与 TypeScript 配置。
- 需要打包处理的资源通过 import 引入；原样发布的资源放在 `public/`。
- 前端环境变量通过 `import.meta.env` 访问；`VITE_`
  前缀变量会暴露给浏览器，不存放密钥。
