/**
 * @file 浏览器语言重定向单元测试
 * @brief 覆盖 redirectToLang 的根路径判断、语言映射、回退逻辑
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'

/**
 * 设置 jsdom 的 window.location.pathname
 * @note 使用当前 URL 的 origin 避免 SecurityError
 */
function setPathname(pathname: string): void {
  const url = new URL(window.location.href)
  url.pathname = pathname
  window.history.replaceState({}, '', url.href)
}

/**
 * 设置 navigator.language
 * @note jsdom 默认为 'en'，需要通过 defineProperty 覆盖
 */
function setLanguage(lang: string): void {
  Object.defineProperty(navigator, 'language', {
    value: lang,
    configurable: true,
    writable: true,
  })
}

import { redirectToLang } from '../docs/.vitepress/utils/redirect'

describe('redirectToLang()', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
    setLanguage('en')
  })

  describe('非根路径不触发重定向', () => {
    it('/en/ 路径（已进入英文站）', () => {
      setPathname('/en/')
      const router = { go: vi.fn() }
      redirectToLang(router, '/')
      expect(router.go).not.toHaveBeenCalled()
    })

    it('/zh/tailwind 页面路径', () => {
      setPathname('/zh/tailwind')
      const router = { go: vi.fn() }
      redirectToLang(router, '/')
      expect(router.go).not.toHaveBeenCalled()
    })
  })

  describe('根路径重定向', () => {
    it('/ + en 浏览器 → 重定向到 /en/', () => {
      setPathname('/')
      setLanguage('en')
      const router = { go: vi.fn() }
      redirectToLang(router, '/')
      expect(router.go).toHaveBeenCalledWith('/en/')
    })

    it('/ + zh 浏览器 → 重定向到 /zh/', () => {
      setPathname('/')
      setLanguage('zh')
      const router = { go: vi.fn() }
      redirectToLang(router, '/')
      expect(router.go).toHaveBeenCalledWith('/zh/')
    })

    it('/ + ja 浏览器 → 重定向到 /ja/', () => {
      setPathname('/')
      setLanguage('ja')
      const router = { go: vi.fn() }
      redirectToLang(router, '/')
      expect(router.go).toHaveBeenCalledWith('/ja/')
    })

    it('/ + fr 浏览器 → 重定向到 /fr/', () => {
      setPathname('/')
      setLanguage('fr')
      const router = { go: vi.fn() }
      redirectToLang(router, '/')
      expect(router.go).toHaveBeenCalledWith('/fr/')
    })

    it('/ + ru 浏览器 → 重定向到 /ru/', () => {
      setPathname('/')
      setLanguage('ru')
      const router = { go: vi.fn() }
      redirectToLang(router, '/')
      expect(router.go).toHaveBeenCalledWith('/ru/')
    })

    it('/ + de（未知语言）→ 回退到 /zh/', () => {
      setPathname('/')
      setLanguage('de')
      const router = { go: vi.fn() }
      redirectToLang(router, '/')
      expect(router.go).toHaveBeenCalledWith('/zh/')
    })

    it('/ + zh-CN 变体 → 重定向到 /zh/', () => {
      setPathname('/')
      setLanguage('zh-CN')
      const router = { go: vi.fn() }
      redirectToLang(router, '/')
      expect(router.go).toHaveBeenCalledWith('/zh/')
    })

    it('/ + en-US 变体 → 重定向到 /en/', () => {
      setPathname('/')
      setLanguage('en-US')
      const router = { go: vi.fn() }
      redirectToLang(router, '/')
      expect(router.go).toHaveBeenCalledWith('/en/')
    })
  })

  describe('自定义 base 路径', () => {
    it('base /my-site/ + /my-site/ 根路径 → 重定向到 /my-site/en/', () => {
      setPathname('/my-site/')
      setLanguage('en')
      const router = { go: vi.fn() }
      redirectToLang(router, '/my-site/')
      expect(router.go).toHaveBeenCalledWith('/en/')
    })

    it('base /my-site/ + /my-site/index.html → 重定向', () => {
      setPathname('/my-site/index.html')
      setLanguage('ja')
      const router = { go: vi.fn() }
      redirectToLang(router, '/my-site/')
      expect(router.go).toHaveBeenCalledWith('/ja/')
    })
  })

  describe('SSR 守卫', () => {
    it('window 存在时函数可正常执行（不抛异常）', () => {
      setPathname('/')
      setLanguage('en')
      const router = { go: vi.fn() }
      expect(() => redirectToLang(router, '/')).not.toThrow()
    })
  })
})
