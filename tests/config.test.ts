/**
 * @file VitePress 站点配置单元测试
 * @brief 覆盖 makeLocale 函数的多语言 locale 生成、footer 格式、回退逻辑
 */

import { describe, it, expect } from 'vitest'
import { makeLocale } from '../docs/.vitepress/config.mts'

describe('makeLocale()', () => {
  describe('结构完整性（所有语言）', () => {
    const locales = [
      { lang: 'zh-CN', link: '/zh/', label: '简体中文' },
      { lang: 'en-US', link: '/en/', label: 'English' },
      { lang: 'ja-JP', link: '/ja/', label: '日本語' },
      { lang: 'fr-FR', link: '/fr/', label: 'Français' },
      { lang: 'ru-RU', link: '/ru/', label: 'Русский' },
    ]

    locales.forEach(({ lang, link, label }) => {
      it(`${lang}: 应包含正确的 label、lang、link`, () => {
        const locale = makeLocale(lang, link, label)
        expect(locale.label).toBe(label)
        expect(locale.lang).toBe(lang)
        expect(locale.link).toBe(link)
      })

      it(`${lang}: 应包含 head 数组`, () => {
        const locale = makeLocale(lang, link, label)
        expect(locale.head).toBeInstanceOf(Array)
        expect(locale.head.length).toBeGreaterThan(0)
      })

      it(`${lang}: themeConfig 应包含 nav 和 sidebar`, () => {
        const locale = makeLocale(lang, link, label)
        expect(locale.themeConfig.nav).toBeInstanceOf(Array)
        expect(locale.themeConfig.nav.length).toBeGreaterThan(0)
        expect(locale.themeConfig.sidebar).toBeDefined()
      })

      it(`${lang}: themeConfig 应包含 docFooter`, () => {
        const locale = makeLocale(lang, link, label)
        expect(locale.themeConfig.docFooter.prev).toBeTruthy()
        expect(locale.themeConfig.docFooter.next).toBeTruthy()
      })

      it(`${lang}: themeConfig 应包含 outline label`, () => {
        const locale = makeLocale(lang, link, label)
        expect(locale.themeConfig.outline.label).toBeTruthy()
      })

      it(`${lang}: themeConfig 应包含 lastUpdatedText`, () => {
        const locale = makeLocale(lang, link, label)
        expect(locale.themeConfig.lastUpdatedText).toBeTruthy()
      })
    })
  })

  describe('footer 格式', () => {
    it('copyright 应包含 ICP 备案链接', () => {
      const locale = makeLocale('zh-CN', '/zh/', '简体中文')
      expect(locale.themeConfig.footer.copyright).toContain('beian.miit.gov.cn')
      expect(locale.themeConfig.footer.copyright).toContain('浙ICP备2026034080号-1')
    })

    it('message 应包含当前年份', () => {
      const locale = makeLocale('zh-CN', '/zh/', '简体中文')
      const currentYear = new Date().getFullYear().toString()
      expect(locale.themeConfig.footer.message).toContain(currentYear)
    })

    it('message 格式为 © <年份> <版权文字>', () => {
      const locale = makeLocale('zh-CN', '/zh/', '简体中文')
      expect(locale.themeConfig.footer.message).toMatch(/^© \d{4} .+$/)
    })
  })

  describe('未知语言回退', () => {
    it('未知语言应使用 zh-CN 的翻译文本', () => {
      const locale = makeLocale('de-DE', '/de/', 'Deutsch')
      // 回退到 zh-CN 的文案
      expect(locale.themeConfig.docFooter.prev).toBe('上一页')
      expect(locale.themeConfig.docFooter.next).toBe('下一页')
    })

    it('未知语言仍保留传入的 label 和 link', () => {
      const locale = makeLocale('de-DE', '/de/', 'Deutsch')
      expect(locale.label).toBe('Deutsch')
      expect(locale.link).toBe('/de/')
    })
  })
})
