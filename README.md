# Yuki Web

Yuki 的个人网站，基于 **VitePress + TypeScript + Tailwind CSS**
构建的多语言文档站点。

🌐 在线访问：[nagoriyuki.cn](https://www.nagoriyuki.cn)

## 支持语言

- 简体中文（默认）
- English
- 日本語
- Français
- Русский

## 快速开始

### 环境要求

- Node.js >= 18
- Yarn >= 1.22

### 安装

```bash
# 使用安装脚本
./bin/setup.sh

# 或手动安装
yarn install
```

## 开发命令

```bash
yarn docs:dev       # 启动开发服务器（快速启动）
yarn docs:dev:full  # 启动开发服务器（全量检查后启动）
yarn docs:build     # 生产构建（type-check + test + build）
yarn docs:preview   # 预览构建结果
yarn test           # 运行测试
yarn test:watch     # 测试监视模式
yarn lint           # ESLint 检查
yarn lint:fix       # ESLint 自动修复
yarn format         # Prettier 格式化
yarn format:check   # Prettier 格式检查
yarn type-check     # TypeScript 类型检查
```

## 项目结构

```
yuki-web/
├── docs/
│   ├── .vitepress/
│   │   ├── config.mts          # 站点配置（thin layer，组装入口）
│   │   ├── nav.ts              # 导航/侧边栏数据
│   │   ├── config/             # 站点功能模块
│   │   │   ├── head.ts         # head 标签生成
│   │   │   └── sitemap.ts      # sitemap.xml 生成
│   │   ├── i18n/               # 固定 UI 翻译
│   │   ├── theme/              # 自定义主题
│   │   └── utils/              # 工具函数
│   ├── public/                 # 静态资源
│   ├── index.md                # 根入口（语言重定向）
│   ├── zh/、en/、ja/、fr/、ru/ # 各语言内容
├── tests/                      # 单元测试
├── .github/workflows/ci.yml    # CI 配置
├── .husky/pre-commit           # pre-commit hook
└── bin/setup.sh                # 安装脚本
```

## 依赖说明

### 核心

| 依赖                                | 用途                                |
| ----------------------------------- | ----------------------------------- |
| `vitepress`                         | 静态站点生成器，Vite + Vue 3 驱动   |
| `vue`                               | UI 框架                             |
| `tailwindcss` + `@tailwindcss/vite` | 原子化 CSS 框架，通过 Vite 插件集成 |

### 工具库

| 依赖           | 用途                                                 |
| -------------- | ---------------------------------------------------- |
| `@vueuse/core` | Vue 组合式工具库（useFetch、useStorage、useDark 等） |
| `zod`          | 运行时数据校验，API 返回值类型安全保障               |
| `sitemap`      | 构建时自动生成 sitemap.xml                           |

### 开发工具

| 依赖                                                 | 用途                                      |
| ---------------------------------------------------- | ----------------------------------------- |
| `typescript`                                         | 类型检查                                  |
| `eslint` + `eslint-plugin-vue` + `typescript-eslint` | 代码质量检查                              |
| `prettier`                                           | 代码格式化                                |
| `vitest`                                             | 单元测试框架                              |
| `husky` + `lint-staged`                              | pre-commit hook，提交前自动 lint + format |

## 配置说明

- **TypeScript**: `tsconfig.json` — 严格模式，`forceConsistentCasingInFileNames`
- **ESLint**: `eslint.config.js` — flat config，集成 Vue + TypeScript
- **Prettier**: `prettier.config.js` — 无分号、单引号、2 空格缩进
- **VitePress**: `docs/.vitepress/config.mts` — 多语言、导航、侧边栏
- **Tailwind CSS**: 通过 `@tailwindcss/vite` 插件集成

## 常见问题

### 构建失败

分别检查各项：

```bash
yarn type-check    # 类型错误
yarn test          # 测试失败
yarn lint          # ESLint 错误
yarn format:check  # 格式问题
```

### 自动修复

```bash
yarn lint:fix   # 修复 ESLint
yarn format     # 修复格式
```

## License

[Apache-2.0](LICENSE)
