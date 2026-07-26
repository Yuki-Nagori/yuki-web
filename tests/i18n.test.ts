/**
 * @file i18n 翻译模块单元测试
 * @brief 覆盖 t() 函数、各语言翻译完整性、未知语言回退
 */

import { describe, it, expect } from 'vitest'
import { t, LocaleStrings } from '../docs/.vitepress/i18n/index'

describe('t() 函数', () => {
  it('应返回简体中文翻译', () => {
    const $ = t('zh-CN')
    expect($.docFooter.prev).toBe('上一页')
    expect($.docFooter.next).toBe('下一页')
    expect($.outline).toBe('页面导航')
    expect($.lastUpdated).toBe('最后更新')
    expect($.footer.message).toBe('Yuki 版权所有')
  })

  it('应返回英文翻译', () => {
    const $ = t('en-US')
    expect($.docFooter.prev).toBe('Previous')
    expect($.docFooter.next).toBe('Next')
    expect($.outline).toBe('On this page')
    expect($.lastUpdated).toBe('Last updated')
  })

  it('应返回日文翻译', () => {
    const $ = t('ja-JP')
    expect($.docFooter.prev).toBe('前へ')
    expect($.docFooter.next).toBe('次へ')
    expect($.outline).toBe('このページの内容')
    expect($.lastUpdated).toBe('最終更新')
  })

  it('应返回法文翻译', () => {
    const $ = t('fr-FR')
    expect($.docFooter.prev).toBe('Précédent')
    expect($.docFooter.next).toBe('Suivant')
    expect($.outline).toBe('Sur cette page')
    expect($.lastUpdated).toBe('Dernière mise à jour')
  })

  it('应返回俄文翻译', () => {
    const $ = t('ru-RU')
    expect($.docFooter.prev).toBe('Назад')
    expect($.docFooter.next).toBe('Далее')
    expect($.outline).toBe('Содержание')
    expect($.lastUpdated).toBe('Последнее обновление')
  })

  it('未知语言应回退到 zh-CN', () => {
    const $ = t('de-DE')
    expect($.docFooter.prev).toBe('上一页')
    expect($.docFooter.next).toBe('下一页')
    expect($.outline).toBe('页面导航')
  })

  it('空字符串应回退到 zh-CN', () => {
    const $ = t('')
    expect($.docFooter.prev).toBe('上一页')
  })
})

/**
 * @brief 验证所有语言的翻译结构完整性
 * @note 确保每个语言都实现了 LocaleStrings 的所有字段
 */
describe('翻译结构完整性', () => {
  const requiredFields: (keyof LocaleStrings)[] = [
    'docFooter',
    'outline',
    'lastUpdated',
    'footer',
    'seo',
  ]

  const docFooterFields: (keyof LocaleStrings['docFooter'])[] = ['prev', 'next']

  const seoFields: (keyof LocaleStrings['seo'])[] = [
    'description',
    'keywords',
    'ogTitle',
    'ogDescription',
  ]

  const allLocales = ['zh-CN', 'en-US', 'ja-JP', 'fr-FR', 'ru-RU']

  allLocales.forEach((locale) => {
    it(`${locale}: 应包含所有顶层字段`, () => {
      const $ = t(locale)
      requiredFields.forEach((field) => {
        expect($[field], `${locale} 缺少字段: ${field}`).toBeDefined()
      })
    })

    it(`${locale}: docFooter 应包含 prev 和 next`, () => {
      const $ = t(locale)
      docFooterFields.forEach((field) => {
        expect($.docFooter[field], `${locale} docFooter 缺少字段: ${field}`).toBeTruthy()
      })
    })

    it(`${locale}: seo 应包含所有 SEO 字段`, () => {
      const $ = t(locale)
      seoFields.forEach((field) => {
        expect($.seo[field], `${locale} seo 缺少字段: ${field}`).toBeTruthy()
      })
    })
  })
})
