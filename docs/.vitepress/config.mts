/**
 * @file VitePress 站点配置
 * @brief 多语言、导航、侧边栏、Tailwind CSS 集成
 * @see https://vitepress.dev/reference/site-config
 */

import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'
import { SitemapStream } from 'sitemap'
import { writeFileSync } from 'fs'
import { resolve } from 'path'
import { Readable } from 'stream'
import { t } from './i18n'

/**
 * 根据语言代码生成 locale 配置
 * @param lang - 语言代码
 * @param link - 路径前缀
 */
function locale(lang: string, link: string) {
  const $ = t(lang)

  return {
    label: {
      'zh-CN': '简体中文',
      'en-US': 'English',
      'ja-JP': '日本語',
      'fr-FR': 'Français',
      'ru-RU': 'Русский',
    }[lang],
    lang,
    link,
    head: [
      ['meta', { name: 'description', content: $.seo.description }],
      ['meta', { name: 'keywords', content: $.seo.keywords }],
      ['meta', { property: 'og:title', content: $.seo.ogTitle }],
      ['meta', { property: 'og:description', content: $.seo.ogDescription }],
      ['meta', { property: 'og:url', content: `https://www.nagoriyuki.cn${link}` }],
      ['meta', { name: 'twitter:title', content: $.seo.ogTitle }],
      ['meta', { name: 'twitter:description', content: $.seo.ogDescription }],
    ],
    themeConfig: {
      nav: [
        { text: $.nav.home, link },
        { text: $.nav.tailwind, link: `${link}tailwind` },
      ],
      sidebar: {
        [link]: [
          {
            text: $.sidebar.notes,
            items: [{ text: $.sidebar.tailwind, link: `${link}tailwind` }],
          },
        ],
      },
      docFooter: { prev: $.docFooter.prev, next: $.docFooter.next },
      outline: { label: $.outline },
      lastUpdatedText: $.lastUpdated,
      footer: {
        message: `© ${new Date().getFullYear()} ${$.footer.message}`,
        copyright:
          '<a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">浙ICP备2026034080号-1</a>',
      },
    },
  }
}

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  outDir: './dist',
  base: '/',
  cleanUrls: true,
  lastUpdated: true,

  // 全局 head（所有语言共享）
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/og-image.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: 'https://www.nagoriyuki.cn/og-image.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: 'https://www.nagoriyuki.cn/og-image.png' }],
  ],

  // 主题配置（共享部分）
  themeConfig: {
    siteTitle: 'Yuki',
    search: {
      provider: 'local',
    },
  },

  // 构建完成后生成 sitemap.xml
  async buildEnd(siteConfig) {
    const baseUrl = 'https://www.nagoriyuki.cn'
    const pages = siteConfig.pages.map((p) => ({
      url: p.replace(/\.md$/, '').replace(/index$/, ''),
      changefreq: 'weekly' as const,
      priority: p === 'index.md' ? 1.0 : 0.8,
    }))

    const stream = new SitemapStream({ hostname: baseUrl })
    const pipeline = Readable.from(pages).pipe(stream)
    const data = await new Promise<string>((res, rej) => {
      let buf = ''
      stream.on('data', (chunk: Buffer) => (buf += chunk.toString()))
      stream.on('end', () => res(buf))
      stream.on('error', rej)
      pipeline.on('error', rej)
    })
    writeFileSync(resolve(siteConfig.outDir, 'sitemap.xml'), data)
  },

  // 多语言配置
  locales: {
    root: locale('zh-CN', '/zh/'),
    en: locale('en-US', '/en/'),
    ja: locale('ja-JP', '/ja/'),
    fr: locale('fr-FR', '/fr/'),
    ru: locale('ru-RU', '/ru/'),
  },
})
