# 文档网站开发指南

## 🚀 快速开始

### 安装

```bash
# 使用安装脚本
./bin/setup.sh

# 或手动安装
yarn install
```

## 🛠️ 开发命令

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

## 📋 命令绑定说明

### `yarn docs:dev` 自动执行

1. `yarn lint:fix` - 自动修复 ESLint 问题
2. `yarn format` - 格式化代码
3. `vitepress dev docs` - 启动开发服务器

### `yarn docs:build` 自动执行

1. `yarn lint` - 检查 ESLint 问题（不通过则中断）
2. `yarn format:check` - 检查代码格式（不通过则中断）
3. `yarn type-check` - TypeScript 类型检查（不通过则中断）
4. `vitepress build docs` - 构建生产版本

## 🔧 配置说明

- **TypeScript**: `tsconfig.json` - 严格模式，类型检查
- **ESLint**: `eslint.config.js` - 代码质量检查
- **Prettier**: `prettier.config.js` - 代码格式化

## 💡 开发流程

```bash
# 1. 启动开发（自动修复风格问题）
yarn docs:dev

# 2. 编写代码...

# 3. 构建前检查（会自动执行）
yarn docs:build
```

## ❓ 常见问题

### 构建失败

检查具体错误：

```bash
yarn lint        # ESLint 错误
yarn format:check # 格式问题
yarn type-check  # 类型错误
```

### 自动修复

```bash
yarn lint:fix   # 修复 ESLint
yarn format     # 修复格式
```

---

**开发愉快！** 🎉

> _"代码如歌声，要么动人，要么寂静。没有中间状态。"_
>
> ——月见八千代
