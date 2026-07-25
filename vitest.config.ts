import { defineConfig } from 'vitest/config'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'docs/.vitepress'),
    },
  },
  test: {
    // 测试环境：jsdom 支持浏览器 API mock（navigator、window 等）
    environment: 'node',
    // 测试文件目录
    include: ['tests/**/*.test.ts'],
  },
})
