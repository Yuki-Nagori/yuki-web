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
import { t } from './i18n/index'

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

  themeConfig: {
    siteTitle: 'Yuki',
    search: { provider: 'local' },
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

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      head: headMeta('zh-CN', '/zh/'),
      themeConfig: themeLocale('zh-CN', '/zh/', {
        nav: { home: '首页', tailwind: 'Tailwind 用法' },
        sidebar: { notes: '学习笔记', tailwind: 'Tailwind CSS 用法' },
      }),
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      head: headMeta('en-US', '/en/'),
      themeConfig: themeLocale('en-US', '/en/', {
        nav: { home: 'Home', tailwind: 'Tailwind Usage' },
        sidebar: { notes: 'Notes', tailwind: 'Tailwind CSS Usage' },
      }),
    },
    ja: {
      label: '日本語',
      lang: 'ja-JP',
      link: '/ja/',
      head: headMeta('ja-JP', '/ja/'),
      themeConfig: themeLocale('ja-JP', '/ja/', {
        nav: { home: 'ホーム', tailwind: 'Tailwind の使い方' },
        sidebar: { notes: 'ノート', tailwind: 'Tailwind CSS の使い方' },
      }),
    },
    fr: {
      label: 'Français',
      lang: 'fr-FR',
      link: '/fr/',
      head: headMeta('fr-FR', '/fr/'),
      themeConfig: themeLocale('fr-FR', '/fr/', {
        nav: { home: 'Accueil', tailwind: 'Utilisation Tailwind' },
        sidebar: { notes: 'Notes', tailwind: 'Utilisation de Tailwind CSS' },
      }),
    },
    ru: {
      label: 'Русский',
      lang: 'ru-RU',
      link: '/ru/',
      head: headMeta('ru-RU', '/ru/'),
      themeConfig: themeLocale('ru-RU', '/ru/', {
        nav: { home: 'Главная', tailwind: 'Использование Tailwind' },
        sidebar: { notes: 'Заметки', tailwind: 'Использование Tailwind CSS' },
      }),
    },
  },
})

/** 生成 locale 的 SEO head 标签 */
function headMeta(lang: string, link: string) {
  const $ = t(lang)
  return [
    ['meta', { name: 'description', content: $.seo.description }],
    ['meta', { name: 'keywords', content: $.seo.keywords }],
    ['meta', { property: 'og:title', content: $.seo.ogTitle }],
    ['meta', { property: 'og:description', content: $.seo.ogDescription }],
    ['meta', { property: 'og:url', content: `https://www.nagoriyuki.cn${link}` }],
    ['meta', { name: 'twitter:title', content: $.seo.ogTitle }],
    ['meta', { name: 'twitter:description', content: $.seo.ogDescription }],
  ]
}

/** 生成 locale 的 themeConfig */
function themeLocale(
  lang: string,
  link: string,
  content: {
    nav: { home: string; tailwind: string }
    sidebar: { notes: string; tailwind: string }
  }
) {
  const $ = t(lang)
  return {
    nav: [
      { text: content.nav.home, link },
      { text: content.nav.tailwind, link: `${link}tailwind` },
    ],
    sidebar: {
      [link]: [
        {
          text: content.sidebar.notes,
          items: [{ text: content.sidebar.tailwind, link: `${link}tailwind` }],
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
  }
}
