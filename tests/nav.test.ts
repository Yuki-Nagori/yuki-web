/**
 * @file 导航/侧边栏模块单元测试
 * @brief 覆盖 getNav() 函数、各语言 nav/sidebar 结构、未知语言回退
 */

import { describe, it, expect } from 'vitest'
import { getNav, NavContent } from '../docs/.vitepress/nav'

function expectValidNavContent(content: NavContent): void {
  expect(content.nav).toBeInstanceOf(Array)
  expect(content.nav.length).toBeGreaterThan(0)

  // 每个 nav 项应有 text 和 link
  content.nav.forEach((item) => {
    expect(item.text).toBeTruthy()
    expect(item.link).toBeTruthy()
  })

  // sidebar 应为 Record<string, SidebarGroup[]>
  expect(content.sidebar).toBeDefined()
  const sidebarKeys = Object.keys(content.sidebar)
  expect(sidebarKeys.length).toBeGreaterThan(0)

  sidebarKeys.forEach((key) => {
    const groups = content.sidebar[key]
    expect(groups).toBeInstanceOf(Array)
    groups.forEach((group) => {
      expect(group.text).toBeTruthy()
      expect(group.items).toBeInstanceOf(Array)
      group.items.forEach((item) => {
        expect(item.text).toBeTruthy()
        expect(item.link).toBeTruthy()
      })
    })
  })
}

describe('getNav() 各语言', () => {
  it('zh-CN: 应返回包含首页和 Tailwind 用法 的导航', () => {
    const { nav, sidebar } = getNav('zh-CN', '/zh/')
    expectValidNavContent({ nav, sidebar })
    expect(nav.some((n) => n.text === '首页')).toBe(true)
    expect(sidebar['/zh/']).toBeDefined()
  })

  it('en-US: 应返回包含 Home 和 Tailwind Usage 的导航', () => {
    const { nav, sidebar } = getNav('en-US', '/en/')
    expectValidNavContent({ nav, sidebar })
    expect(nav.some((n) => n.text === 'Home')).toBe(true)
    expect(sidebar['/en/']).toBeDefined()
  })

  it('ja-JP: 应返回包含 ホーム 和 Tailwind の使い方 的导航', () => {
    const { nav, sidebar } = getNav('ja-JP', '/ja/')
    expectValidNavContent({ nav, sidebar })
    expect(nav.some((n) => n.text === 'ホーム')).toBe(true)
    expect(sidebar['/ja/']).toBeDefined()
  })

  it('fr-FR: 应返回包含 Accueil 和 Utilisation Tailwind 的导航', () => {
    const { nav, sidebar } = getNav('fr-FR', '/fr/')
    expectValidNavContent({ nav, sidebar })
    expect(nav.some((n) => n.text === 'Accueil')).toBe(true)
    expect(sidebar['/fr/']).toBeDefined()
  })

  it('ru-RU: 应返回包含 Главная 和 Использование Tailwind 的导航', () => {
    const { nav, sidebar } = getNav('ru-RU', '/ru/')
    expectValidNavContent({ nav, sidebar })
    expect(nav.some((n) => n.text === 'Главная')).toBe(true)
    expect(sidebar['/ru/']).toBeDefined()
  })
})

describe('getNav() link 路径', () => {
  const testCases = [
    { lang: 'zh-CN', link: '/zh/', expectedLink: '/zh/' },
    { lang: 'en-US', link: '/en/', expectedLink: '/en/' },
    { lang: 'ja-JP', link: '/ja/', expectedLink: '/ja/' },
    { lang: 'fr-FR', link: '/fr/', expectedLink: '/fr/' },
    { lang: 'ru-RU', link: '/ru/', expectedLink: '/ru/' },
  ]

  testCases.forEach(({ lang, link, expectedLink }) => {
    it(`${lang}: nav 首页链接应为 ${expectedLink}`, () => {
      const { nav } = getNav(lang, link)
      expect(nav[0].link).toBe(expectedLink)
    })

    it(`${lang}: sidebar key 应匹配 link`, () => {
      const { sidebar } = getNav(lang, link)
      expect(sidebar[link]).toBeDefined()
    })

    it(`${lang}: Tailwind 链接应以 ${link} 开头`, () => {
      const { nav } = getNav(lang, link)
      const tailwindItem = nav.find((n) => n.link.includes('tailwind'))
      expect(tailwindItem).toBeDefined()
      expect(tailwindItem!.link.startsWith(link)).toBe(true)
    })
  })
})

describe('getNav() 未知语言回退', () => {
  it('未知语言应回退到 zh-CN', () => {
    const unknown = getNav('de-DE', '/de/')
    const zh = getNav('zh-CN', '/zh/')

    // 回退后应与 zh-CN 使用相同的 link 前缀逻辑（传入的 link 不同，所以文本相同但 link 不同）
    expect(unknown.nav[0].text).toBe(zh.nav[0].text)
  })

  it('空字符串应回退到 zh-CN', () => {
    const empty = getNav('', '/')
    const zh = getNav('zh-CN', '/zh/')
    expect(empty.nav[0].text).toBe(zh.nav[0].text)
  })
})
