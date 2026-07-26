/**
 * @file Vitest 测试框架配置
 * @brief 配置测试环境、路径别名、测试文件匹配规则
 */

import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'node',
    css: false,
    include: ['tests/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'lcov'],
      include: ['docs/.vitepress/**/*.ts'],
      exclude: ['docs/.vitepress/env.d.ts', 'docs/.vitepress/theme/index.ts'],
    },
  },
})
