/**
 * @file 语言检测工具单元测试
 * @brief 覆盖 langMap 映射表、getLangPath 匹配逻辑、isRootPath 根路径判断
 */

import { describe, it, expect } from 'vitest'
import { getLangPath, isRootPath, langMap } from '../docs/.vitepress/utils/lang'

describe('langMap', () => {
  it('应包含所有 5 种语言的基础映射', () => {
    expect(langMap['zh']).toBe('/zh/')
    expect(langMap['en']).toBe('/en/')
    expect(langMap['ja']).toBe('/ja/')
    expect(langMap['fr']).toBe('/fr/')
    expect(langMap['ru']).toBe('/ru/')
  })

  it('应包含各语言的变体', () => {
    expect(langMap['zh-CN']).toBe('/zh/')
    expect(langMap['zh-TW']).toBe('/zh/')
    expect(langMap['en-US']).toBe('/en/')
    expect(langMap['en-GB']).toBe('/en/')
    expect(langMap['ja-JP']).toBe('/ja/')
    expect(langMap['fr-FR']).toBe('/fr/')
    expect(langMap['ru-RU']).toBe('/ru/')
  })
})

describe('getLangPath', () => {
  it('精确匹配: zh → /zh/', () => {
    expect(getLangPath('zh')).toBe('/zh/')
  })

  it('精确匹配: en → /en/', () => {
    expect(getLangPath('en')).toBe('/en/')
  })

  it('精确匹配: ja → /ja/', () => {
    expect(getLangPath('ja')).toBe('/ja/')
  })

  it('精确匹配: fr → /fr/', () => {
    expect(getLangPath('fr')).toBe('/fr/')
  })

  it('精确匹配: ru → /ru/', () => {
    expect(getLangPath('ru')).toBe('/ru/')
  })

  it('变体匹配: zh-CN → /zh/', () => {
    expect(getLangPath('zh-CN')).toBe('/zh/')
  })

  it('变体匹配: zh-TW → /zh/', () => {
    expect(getLangPath('zh-TW')).toBe('/zh/')
  })

  it('变体匹配: en-US → /en/', () => {
    expect(getLangPath('en-US')).toBe('/en/')
  })

  it('变体匹配: en-GB → /en/', () => {
    expect(getLangPath('en-GB')).toBe('/en/')
  })

  it('变体匹配: fr-CA → /fr/', () => {
    expect(getLangPath('fr-CA')).toBe('/fr/')
  })

  it('未知语言前缀匹配: de → 默认 /zh/', () => {
    expect(getLangPath('de')).toBe('/zh/')
  })

  it('未知语言变体匹配: de-DE → 默认 /zh/', () => {
    expect(getLangPath('de-DE')).toBe('/zh/')
  })

  it('空字符串 → 默认 /zh/', () => {
    expect(getLangPath('')).toBe('/zh/')
  })

  it('无参数 → 默认 /zh/', () => {
    expect(getLangPath()).toBe('/zh/')
  })

  it('只有前缀匹配时回退: zh-XX → /zh/', () => {
    expect(getLangPath('zh-XX')).toBe('/zh/')
  })
})

describe('isRootPath', () => {
  it('"/" 是根路径 (base /)', () => {
    expect(isRootPath('/', '/')).toBe(true)
  })

  it('"/en/" 不是根路径 (base /)', () => {
    expect(isRootPath('/en/', '/')).toBe(false)
  })

  it('"/zh/tailwind" 不是根路径 (base /)', () => {
    expect(isRootPath('/zh/tailwind', '/')).toBe(false)
  })

  it('"/my-site/" 是根路径 (base /my-site/)', () => {
    expect(isRootPath('/my-site/', '/my-site/')).toBe(true)
  })

  it('"/my-site/index.html" 是根路径 (base /my-site/)', () => {
    expect(isRootPath('/my-site/index.html', '/my-site/')).toBe(true)
  })

  it('"/my-site/en/" 不是根路径 (base /my-site/)', () => {
    expect(isRootPath('/my-site/en/', '/my-site/')).toBe(false)
  })

  it('base 不以 / 结尾时自动补全', () => {
    expect(isRootPath('/my-site/', '/my-site')).toBe(true)
  })
})
