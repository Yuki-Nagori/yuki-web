/**
 * @file Sitemap 模块单元测试
 * @brief 覆盖 transformPages 纯函数、buildSitemap 端到端流程
 */

import { describe, it, expect, vi } from 'vitest'

// ———— mock 放在 import 之前（vitest 会 hoist）————

vi.mock('sitemap', () => ({
  SitemapStream: vi.fn(function (this: Record<string, unknown>) {
    const events: Record<string, Array<(...args: unknown[]) => void>> = {}
    // 异步触发 data + end 事件，使 Promise 得以 resolve
    setTimeout(() => {
      events.data?.forEach((cb) => cb(Buffer.from('<urlset></urlset>')))
      events.end?.forEach((cb) => cb())
    }, 0)
    this.on = vi.fn((e: string, cb: (...args: unknown[]) => void) => {
      ;(events[e] ??= []).push(cb)
      return this
    })
  }),
}))

vi.mock('fs', () => ({
  writeFileSync: vi.fn(),
}))

vi.mock('stream', () => ({
  Readable: {
    from: vi.fn(() => ({
      pipe: vi.fn().mockReturnValue({ on: vi.fn() }),
    })),
  },
}))

import { transformPages, buildSitemap, SitemapEntry } from '../docs/.vitepress/config/sitemap'

describe('transformPages()', () => {
  describe('priority 逻辑', () => {
    it('根 index.md 优先级为 1.0', () => {
      const result = transformPages(['index.md'])
      expect(result).toHaveLength(1)
      expect(result[0].priority).toBe(1.0)
      expect(result[0].url).toBe('')
    })

    it('zh/index.md 优先级为 1.0（中文首页）', () => {
      const result = transformPages(['zh/index.md'])
      expect(result).toHaveLength(1)
      expect(result[0].priority).toBe(1.0)
      expect(result[0].url).toBe('zh/')
    })

    it('en/index.md 优先级为 1.0（英文首页）', () => {
      const result = transformPages(['en/index.md'])
      expect(result[0].priority).toBe(1.0)
      expect(result[0].url).toBe('en/')
    })

    it('所有语言首页优先级均为 1.0', () => {
      const pages = ['zh/index.md', 'en/index.md', 'ja/index.md', 'fr/index.md', 'ru/index.md']
      const result = transformPages(pages)
      result.forEach((entry) => {
        expect(entry.priority).toBe(1.0)
      })
    })

    it('非首页页面优先级为 0.8', () => {
      const result = transformPages(['zh/tailwind.md'])
      expect(result[0].priority).toBe(0.8)
    })

    it('深层页面优先级为 0.8', () => {
      const result = transformPages(['zh/deep/nested/page.md'])
      expect(result[0].priority).toBe(0.8)
    })
  })

  describe('URL 转换', () => {
    it('去除 .md 后缀', () => {
      const result = transformPages(['zh/tailwind.md'])
      expect(result[0].url).toBe('zh/tailwind')
    })

    it('去除末尾 index', () => {
      const result = transformPages(['zh/tailwind/index.md'])
      expect(result[0].url).toBe('zh/tailwind/')
    })

    it('根 index.md 转为空字符串', () => {
      const result = transformPages(['index.md'])
      expect(result[0].url).toBe('')
    })

    it('同时去除 .md 和 index（zh/index.md）', () => {
      const result = transformPages(['zh/index.md'])
      expect(result[0].url).toBe('zh/')
    })
  })

  describe('changefreq', () => {
    it('所有条目 changefreq 为 weekly', () => {
      const result = transformPages(['index.md', 'zh/tailwind.md', 'en/about/index.md'])
      result.forEach((entry) => {
        expect(entry.changefreq).toBe('weekly')
      })
    })
  })

  describe('边界情况', () => {
    it('空数组返回空数组', () => {
      const result = transformPages([])
      expect(result).toEqual([])
    })

    it('返回类型确认', () => {
      const result = transformPages(['index.md'])
      const entry: SitemapEntry = result[0]
      expect(typeof entry.url).toBe('string')
      expect(entry.changefreq).toBe('weekly')
      expect(typeof entry.priority).toBe('number')
    })
  })
})

describe('buildSitemap()', () => {
  it('应正常完成而不抛异常', async () => {
    const mockSiteConfig = {
      pages: ['index.md', 'zh/tailwind.md'],
      outDir: '/fake/dist',
    }

    await expect(
      buildSitemap(mockSiteConfig as Parameters<typeof buildSitemap>[0])
    ).resolves.toBeUndefined()
  })

  it('空页面列表也应正常完成', async () => {
    const mockSiteConfig = {
      pages: [] as string[],
      outDir: '/fake/dist',
    }

    await expect(
      buildSitemap(mockSiteConfig as Parameters<typeof buildSitemap>[0])
    ).resolves.toBeUndefined()
  })

  it('应调用 SitemapStream 使用正确的 hostname', async () => {
    const { SitemapStream } = await import('sitemap')
    const mockSiteConfig = {
      pages: ['index.md'],
      outDir: '/fake/dist',
    }

    await buildSitemap(mockSiteConfig as Parameters<typeof buildSitemap>[0])

    expect(SitemapStream).toHaveBeenCalledWith({
      hostname: 'https://www.nagoriyuki.cn',
    })
  })

  it('应将 sitemap 写入 sitemap.xml', async () => {
    const { writeFileSync } = await import('fs')
    const mockSiteConfig = {
      pages: ['index.md'],
      outDir: '/fake/dist',
    }

    await buildSitemap(mockSiteConfig as Parameters<typeof buildSitemap>[0])

    expect(writeFileSync).toHaveBeenCalled()
    const callArgs = (writeFileSync as ReturnType<typeof vi.fn>).mock.calls[0]
    expect(callArgs[0]).toMatch(/sitemap\.xml$/)
    expect(typeof callArgs[1]).toBe('string')
  })
})
