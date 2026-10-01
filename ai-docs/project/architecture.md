# Vue 项目目录架构

采用常见的 Vue + Vite +
TypeScript 目录组织方式。以下为项目扩展时的参考结构；目录按实际功能创建，无需预先建立空目录或安装路由、状态管理依赖。

## 参考结构

```text
yuki-web/
├── ai-docs/                  # 项目文档与技术栈准则
│   ├── project/              # 开发指南、目录架构、编码约定
│   └── standards/            # 按技术栈拆分的准则
├── public/                   # 原样复制到构建产物的静态资源
├── src/
│   ├── assets/               # 通过 import 引入、由 Vite 处理的图片和字体等
│   ├── components/           # 跨页面复用的 Vue 组件
│   ├── composables/          # 组合式函数，如 useTheme.ts
│   ├── layouts/              # 页面共享布局
│   ├── views/                # 页面组件；页面专用组件可放在页面子目录
│   ├── router/               # Vue Router 路由配置，按需引入
│   ├── stores/               # Pinia 共享状态，按需引入
│   ├── services/             # 请求封装与业务接口访问
│   ├── types/                # 跨模块共享的 TypeScript 类型
│   ├── utils/                # 不依赖 Vue 的通用工具函数
│   ├── App.vue               # 根组件，组装页面或路由出口
│   ├── main.ts               # 创建应用、注册插件、挂载根组件
│   └── style.css             # Tailwind 入口和必要的全局样式
├── tests/                    # 单元测试与组件测试
├── .github/workflows/        # CI 工作流
├── .husky/                   # Git hooks
├── .deploy/                  # 本地部署脚本，已被 Git 忽略
├── AGENTS.md                 # 开发文档索引
├── index.html               # Vite HTML 入口
├── package.json             # 依赖和脚本
├── bun.lock                 # Bun 依赖锁文件
├── vite.config.ts           # Vue、Tailwind 插件和路径别名
├── vitest.config.ts         # 测试环境与覆盖率配置
├── tsconfig.json            # TypeScript 项目引用入口
├── tsconfig.app.json        # 应用类型检查配置
├── tsconfig.node.json       # 工具配置与测试类型检查配置
├── eslint.config.js         # ESLint 配置
└── prettier.config.js       # 格式化配置
```

## 当前结构

当前应用仅包含 `src/main.ts`、`src/App.vue`、`src/style.css` 和
`src/components/SiteFooter.vue`；footer 测试位于
`tests/footer.test.ts`。上面的其他业务目录在需要时添加。

## 放置与依赖原则

- 页面内容放在 `views/`，页面专用组件靠近对应页面；跨页面复用后再提取到
  `components/`。
- 可复用的 Vue 响应式逻辑放在 `composables/`；纯函数放在 `utils/`。
- 接口访问集中在 `services/`，组件负责展示和交互。
- 局部状态优先留在组件中；确有跨组件共享需求时再使用 `stores/`。
- 类型优先靠近使用它的模块；跨模块共享的类型再放入 `types/`。
- `public/` 中的资源用根路径引用，`src/assets/` 中的资源通过 import 引入。
- `dist/` 和 `coverage/` 是生成产物，不放应用源码。
