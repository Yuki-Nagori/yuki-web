#!/bin/bash

# Yuki 个人网站安装脚本
# 作者: Yuki

set -e

echo "🎵 欢迎使用 Yuki 个人网站安装脚本"
echo "🌙 八千代大人正在为你配置项目..."

# 检查 Node.js 版本
echo "🔍 检查 Node.js 版本..."
if ! command -v node &> /dev/null; then
    echo "❌ 未找到 Node.js，请先安装 Node.js (>= 18)"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js 版本过低，需要 >= 18，当前版本: $(node -v)"
    exit 1
fi
echo "✅ Node.js 版本: $(node -v)"

# 检查 yarn
echo "🔍 检查 yarn..."
if ! command -v yarn &> /dev/null; then
    echo "📦 安装 yarn..."
    npm install -g yarn
fi
echo "✅ yarn 版本: $(yarn --version)"

# 安装依赖
echo "📦 安装项目依赖..."
yarn install

echo ""
echo "🎉 安装完成！"
echo ""
echo "🚀 可用命令："
echo "  yarn docs:dev     - 启动开发服务器（自动修复代码风格）"
echo "  yarn docs:build   - 构建生产版本（检查代码质量）"
echo "  yarn docs:preview - 预览构建结果"
echo "  yarn lint         - 检查 ESLint 问题"
echo "  yarn lint:fix     - 自动修复 ESLint 问题"
echo "  yarn format       - 格式化代码"
echo "  yarn type-check   - TypeScript 类型检查"
echo ""
echo "📚 更多信息请查看："
echo "   - README_DEV.md (开发指南)"
echo "   - PROJECT_PLAN_YARN.md (项目计划)"
echo ""
echo "🌙 八千代大人祝您开发愉快~"
echo "   '搞砸了的话…我就不理你了哦。'"
