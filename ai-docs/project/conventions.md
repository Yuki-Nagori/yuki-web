# 编码约定

## 代码组织

- 应用代码放在 `src/`，复用组件放在 `src/components/`，测试放在 `tests/`。
- 新增模块的位置参考 [目录架构](architecture.md)。
- 风格专属组件库留在各自的 `src/showcases/<风格名>/ui/`，展示模块的组织见
  [首页与风格展示](homepage.md)。

## 路径与依赖

- `@/` 指向 `src/`，由 Vite 和 TypeScript 同时配置。
- 功能库按需添加，不预装没有实际用途的依赖。
- 本地部署脚本放在 `.deploy/`，该目录被 Git 忽略。

## 技术栈准则

- [Vue](../standards/vue.md)：组件与响应式逻辑。
- [Vite](../standards/vite.md)：插件、资源和构建配置。
- [TypeScript](../standards/typescript.md)：类型声明与检查。
- [Tailwind CSS](../standards/tailwind.md)：样式与交互状态。
- [Bun](../standards/bun.md)：依赖管理与脚本执行。
