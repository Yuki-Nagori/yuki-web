/**
 * @file Head 标签生成模块单元测试
 * @brief 覆盖 globalHead 结构、localeHead 多语言 SEO 标签生成
 */

import { describe, it, expect } from 'vitest'
import { globalHead, localeHead } from '../docs/.vitepress/config/head'

const BASE_URL = 'https://www.nagoriyuki.cn'

describe('globalHead', () => {
  it('应为非空数组', () => {
    expect(globalHead).toBeInstanceOf(Array)
    expect(globalHead.length).toBeGreaterThan(0)
  })

  it('应包含 favicon 链接', () => {
    const favicon = globalHead.find((h) => h[0] === 'link' && h[1]?.rel === 'icon')
    expect(favicon).toBeDefined()
    expect(favicon![1]?.type).toBe('image/png')
    expect(favicon![1]?.href).toBe('/og-image.png')
  })

  it('应包含 og:type meta 标签', () => {
    const ogType = globalHead.find((h) => h[0] === 'meta' && h[1]?.property === 'og:type')
    expect(ogType).toBeDefined()
    expect(ogType![1]?.content).toBe('website')
  })

  it('应包含 og:image meta 标签（使用 BASE_URL）', () => {
    const ogImage = globalHead.find((h) => h[0] === 'meta' && h[1]?.property === 'og:image')
    expect(ogImage).toBeDefined()
    expect(ogImage![1]?.content).toBe(`${BASE_URL}/og-image.png`)
  })

  it('应包含 twitter:card meta 标签', () => {
    const twitterCard = globalHead.find((h) => h[0] === 'meta' && h[1]?.name === 'twitter:card')
    expect(twitterCard).toBeDefined()
    expect(twitterCard![1]?.content).toBe('summary_large_image')
  })

  it('应包含 twitter:image meta 标签（使用 BASE_URL）', () => {
    const twitterImage = globalHead.find((h) => h[0] === 'meta' && h[1]?.name === 'twitter:image')
    expect(twitterImage).toBeDefined()
    expect(twitterImage![1]?.content).toBe(`${BASE_URL}/og-image.png`)
  })

  it('所有 head 条目格式应为 [string, object]', () => {
    globalHead.forEach((entry) => {
      expect(entry).toHaveLength(2)
      expect(typeof entry[0]).toBe('string')
      expect(typeof entry[1]).toBe('object')
    })
  })
})

describe('localeHead()', () => {
  const locales = [
    { lang: 'zh-CN', link: '/zh/' },
    { lang: 'en-US', link: '/en/' },
    { lang: 'ja-JP', link: '/ja/' },
    { lang: 'fr-FR', link: '/fr/' },
    { lang: 'ru-RU', link: '/ru/' },
  ]

  locales.forEach(({ lang, link }) => {
    it(`${lang}: 应返回非空数组`, () => {
      const head = localeHead(lang, link)
      expect(head).toBeInstanceOf(Array)
      expect(head.length).toBeGreaterThan(0)
    })

    it(`${lang}: 应包含 description meta 标签`, () => {
      const head = localeHead(lang, link)
      const desc = head.find((h) => h[0] === 'meta' && h[1]?.name === 'description')
      expect(desc).toBeDefined()
      expect(desc![1]?.content).toBeTruthy()
    })

    it(`${lang}: 应包含 keywords meta 标签`, () => {
      const head = localeHead(lang, link)
      const keywords = head.find((h) => h[0] === 'meta' && h[1]?.name === 'keywords')
      expect(keywords).toBeDefined()
      expect(keywords![1]?.content).toBeTruthy()
    })

    it(`${lang}: 应包含 og:title meta 标签`, () => {
      const head = localeHead(lang, link)
      const ogTitle = head.find((h) => h[0] === 'meta' && h[1]?.property === 'og:title')
      expect(ogTitle).toBeDefined()
      expect(ogTitle![1]?.content).toBeTruthy()
    })

    it(`${lang}: 应包含 og:description meta 标签`, () => {
      const head = localeHead(lang, link)
      const ogDesc = head.find((h) => h[0] === 'meta' && h[1]?.property === 'og:description')
      expect(ogDesc).toBeDefined()
      expect(ogDesc![1]?.content).toBeTruthy()
    })

    it(`${lang}: 应包含 og:url meta 标签（使用正确的 link）`, () => {
      const head = localeHead(lang, link)
      const ogUrl = head.find((h) => h[0] === 'meta' && h[1]?.property === 'og:url')
      expect(ogUrl).toBeDefined()
      expect(ogUrl![1]?.content).toBe(`${BASE_URL}${link}`)
    })

    it(`${lang}: 应包含 twitter:title meta 标签`, () => {
      const head = localeHead(lang, link)
      const twTitle = head.find((h) => h[0] === 'meta' && h[1]?.name === 'twitter:title')
      expect(twTitle).toBeDefined()
      expect(twTitle![1]?.content).toBeTruthy()
    })

    it(`${lang}: 应包含 twitter:description meta 标签`, () => {
      const head = localeHead(lang, link)
      const twDesc = head.find((h) => h[0] === 'meta' && h[1]?.name === 'twitter:description')
      expect(twDesc).toBeDefined()
      expect(twDesc![1]?.content).toBeTruthy()
    })
  })

  it('未知语言应回退到 zh-CN', () => {
    const head = localeHead('de-DE', '/de/')
    const desc = head.find((h) => h[0] === 'meta' && h[1]?.name === 'description')
    // 回退到 zh-CN 的 SEO 字段
    expect(desc![1]?.content).toBeTruthy()
  })

  it('所有 locale head 条目格式应为 [string, object]', () => {
    const head = localeHead('zh-CN', '/zh/')
    head.forEach((entry) => {
      expect(entry).toHaveLength(2)
      expect(typeof entry[0]).toBe('string')
      expect(typeof entry[1]).toBe('object')
    })
  })
})
