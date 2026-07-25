/**
 * @file Vitest 测试框架配置
 * @brief 配置测试环境、路径别名、测试文件匹配规则
 */

import { defineConfig } from 'vitest/config'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'docs/.vitepress'),
    },
  },
  test: {
    environment: 'node',
    include: ['tests/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'lcov'],
      include: ['docs/.vitepress/**/*.ts'],
      exclude: ['docs/.vitepress/env.d.ts'],
    },
  },
})
