# Yuki Web

Yuki 的个人网站，基于 **VitePress + TypeScript + Tailwind CSS** 构建的多语言文档站点。

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
- Yarn

### 安装

```bash
# 使用安装脚本
./bin/setup.sh

# 或手动安装
yarn install
```

## 开发命令

### 核心命令

```bash
yarn docs:dev       # 启动开发服务器（自动修复代码风格）
yarn docs:build     # 构建生产版本（检查代码质量）
yarn docs:preview   # 预览构建结果
```

### 代码质量命令

```bash
yarn lint           # 检查 ESLint 问题
yarn lint:fix       # 自动修复 ESLint 问题
yarn format         # 格式化代码
yarn format:check   # 检查代码格式
yarn type-check     # TypeScript 类型检查
```

### 命令绑定说明

`yarn docs:dev` 自动执行：
1. `yarn lint:fix` — 自动修复 ESLint 问题
2. `yarn format` — 格式化代码
3. `vitepress dev docs` — 启动开发服务器

`yarn docs:build` 自动执行：
1. `yarn lint` — 检查 ESLint 问题（不通过则中断）
2. `yarn format:check` — 检查代码格式（不通过则中断）
3. `yarn type-check` — TypeScript 类型检查（不通过则中断）
4. `vitepress build docs` — 构建生产版本

## 项目结构

```
yuki-web/
├── docs/
│   ├── .vitepress/
│   │   ├── config.mts          # 站点配置（多语言、导航、侧边栏）
│   │   └── theme/              # 自定义主题
│   ├── index.md                # 根入口（浏览器语言检测重定向）
│   ├── zh/                     # 简体中文
│   ├── en/                     # English
│   ├── ja/                     # 日本語
│   ├── fr/                     # Français
│   └── ru/                     # Русский
├── .github/workflows/ci.yml    # CI/CD 配置
├── bin/setup.sh                # 安装脚本
├── eslint.config.js            # ESLint 配置
├── prettier.config.js          # Prettier 配置
├── tsconfig.json               # TypeScript 配置
└── package.json                # 项目依赖与脚本
```

## 配置说明

- **TypeScript**: `tsconfig.json` — 严格模式，路径别名 `@/*` → `docs/.vitepress/*`
- **ESLint**: `eslint.config.js` — flat config，集成 Vue + TypeScript
- **Prettier**: `prettier.config.js` — 无分号、单引号、2 空格缩进
- **VitePress**: `docs/.vitepress/config.mts` — 多语言配置、导航、侧边栏
- **Tailwind CSS**: 通过 `@tailwindcss/vite` 插件集成

## 常见问题

### 构建失败

分别检查各项：

```bash
yarn lint          # ESLint 错误
yarn format:check  # 格式问题
yarn type-check    # 类型错误
```

### 自动修复

```bash
yarn lint:fix   # 修复 ESLint
yarn format     # 修复格式
```

## License

[Apache-2.0](LICENSE)
