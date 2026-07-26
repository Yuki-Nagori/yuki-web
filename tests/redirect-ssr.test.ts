/**
 * @file 浏览器语言重定向 — SSR 守卫测试
 * @brief Node 环境下 typeof window === 'undefined'，验证函数安全返回
 */

import { describe, it, expect, vi } from 'vitest'
import { redirectToLang } from '../docs/.vitepress/utils/redirect'

describe('redirectToLang() SSR 守卫', () => {
  it('window 不存在时安全返回（Node/SSR 环境）', () => {
    const router = { go: vi.fn() }
    // Node 环境下 typeof window === 'undefined'，函数直接 return
    redirectToLang(router, '/')
    expect(router.go).not.toHaveBeenCalled()
  })
})
