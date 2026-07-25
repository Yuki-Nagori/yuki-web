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

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  // 构建输出目录 (docs/dist/)
  outDir: './dist',

  // 基础路径
  base: '/',

  // 清理 URL
  cleanUrls: true,

  // 最后更新时间
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
    // 站点标题
    siteTitle: 'Yuki',

    // 搜索配置
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
    // 简体中文（默认）
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      head: [
        ['meta', { name: 'description', content: 'Yuki 个人学习站——记录学习与创作的小角落' }],
        ['meta', { name: 'keywords', content: 'Yuki, 学习, Tailwind CSS, 前端' }],
        ['meta', { property: 'og:title', content: 'Yuki — 个人学习' }],
        ['meta', { property: 'og:description', content: '记录学习与创作的小角落' }],
        ['meta', { property: 'og:url', content: 'https://www.nagoriyuki.cn/zh/' }],
        ['meta', { name: 'twitter:title', content: 'Yuki — 个人学习' }],
        ['meta', { name: 'twitter:description', content: '记录学习与创作的小角落' }],
      ],
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: 'Tailwind 用法', link: '/zh/tailwind' },
        ],
        sidebar: {
          '/zh/': [
            {
              text: '学习笔记',
              items: [{ text: 'Tailwind CSS 用法', link: '/zh/tailwind' }],
            },
          ],
        },
        docFooter: { prev: '上一页', next: '下一页' },
        outline: { label: '页面导航' },
        lastUpdatedText: '最后更新',
        footer: {
          message: `© ${new Date().getFullYear()} Yuki 版权所有`,
          copyright: '<a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">浙ICP备2026034080号-1</a>'
        },
      },
    },
    // English
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      head: [
        ['meta', { name: 'description', content: "Yuki's personal learning site — a little corner for recording learning and creation" }],
        ['meta', { name: 'keywords', content: 'Yuki, learning, Tailwind CSS, frontend' }],
        ['meta', { property: 'og:title', content: 'Yuki — Personal Learning' }],
        ['meta', { property: 'og:description', content: 'A little corner for recording learning and creation' }],
        ['meta', { property: 'og:url', content: 'https://www.nagoriyuki.cn/en/' }],
        ['meta', { name: 'twitter:title', content: 'Yuki — Personal Learning' }],
        ['meta', { name: 'twitter:description', content: 'A little corner for recording learning and creation' }],
      ],
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Tailwind Usage', link: '/zh/tailwind' },
        ],
        sidebar: {
          '/en/': [
            {
              text: 'Notes',
              items: [{ text: 'Tailwind CSS Usage', link: '/zh/tailwind' }],
            },
          ],
        },
        docFooter: { prev: 'Previous', next: 'Next' },
        outline: { label: 'On this page' },
        lastUpdatedText: 'Last updated',
        footer: {
          message: `© ${new Date().getFullYear()} Yuki. All rights reserved.`,
          copyright: '<a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">浙ICP备2026034080号-1</a>'
        },
      },
    },
    // 日本語
    ja: {
      label: '日本語',
      lang: 'ja-JP',
      link: '/ja/',
      head: [
        ['meta', { name: 'description', content: 'Yuki 個人学習サイト — 学びと創作を記録する小さな場所' }],
        ['meta', { name: 'keywords', content: 'Yuki, 学習, Tailwind CSS, フロントエンド' }],
        ['meta', { property: 'og:title', content: 'Yuki — 個人学習' }],
        ['meta', { property: 'og:description', content: '学習と創作を記録する小さな場所' }],
        ['meta', { property: 'og:url', content: 'https://www.nagoriyuki.cn/ja/' }],
        ['meta', { name: 'twitter:title', content: 'Yuki — 個人学習' }],
        ['meta', { name: 'twitter:description', content: '学習と創作を記録する小さな場所' }],
      ],
      themeConfig: {
        nav: [
          { text: 'ホーム', link: '/ja/' },
          { text: 'Tailwind の使い方', link: '/zh/tailwind' },
        ],
        sidebar: {
          '/ja/': [
            {
              text: 'ノート',
              items: [{ text: 'Tailwind CSS の使い方', link: '/zh/tailwind' }],
            },
          ],
        },
        docFooter: { prev: '前へ', next: '次へ' },
        outline: { label: 'このページの内容' },
        lastUpdatedText: '最終更新',
        footer: {
          message: `© ${new Date().getFullYear()} Yuki. 著作権所有。`,
          copyright: '<a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">浙ICP备2026034080号-1</a>'
        },
      },
    },
    // Français
    fr: {
      label: 'Français',
      lang: 'fr-FR',
      link: '/fr/',
      head: [
        ['meta', { name: 'description', content: 'Site personnel de Yuki — un coin pour enregistrer apprentissage et créations' }],
        ['meta', { name: 'keywords', content: 'Yuki, apprentissage, Tailwind CSS, frontend' }],
        ['meta', { property: 'og:title', content: 'Yuki — Apprentissage personnel' }],
        ['meta', { property: 'og:description', content: 'Un petit coin pour enregistrer apprentissage et créations' }],
        ['meta', { property: 'og:url', content: 'https://www.nagoriyuki.cn/fr/' }],
        ['meta', { name: 'twitter:title', content: 'Yuki — Apprentissage personnel' }],
        ['meta', { name: 'twitter:description', content: 'Un petit coin pour enregistrer apprentissage et créations' }],
      ],
      themeConfig: {
        nav: [
          { text: 'Accueil', link: '/fr/' },
          { text: 'Utilisation Tailwind', link: '/zh/tailwind' },
        ],
        sidebar: {
          '/fr/': [
            {
              text: 'Notes',
              items: [{ text: 'Utilisation de Tailwind CSS', link: '/zh/tailwind' }],
            },
          ],
        },
        docFooter: { prev: 'Précédent', next: 'Suivant' },
        outline: { label: 'Sur cette page' },
        lastUpdatedText: 'Dernière mise à jour',
        footer: {
          message: `© ${new Date().getFullYear()} Yuki. Tous droits réservés.`,
          copyright: '<a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">浙ICP备2026034080号-1</a>'
        },
      },
    },
    // Русский
    ru: {
      label: 'Русский',
      lang: 'ru-RU',
      link: '/ru/',
      head: [
        ['meta', { name: 'description', content: 'Персональный сайт Yuki — уголок для записи учёбы и творчества' }],
        ['meta', { name: 'keywords', content: 'Yuki, обучение, Tailwind CSS, фронтенд' }],
        ['meta', { property: 'og:title', content: 'Yuki — Личное обучение' }],
        ['meta', { property: 'og:description', content: 'Маленький уголок для записи учёбы и творчества' }],
        ['meta', { property: 'og:url', content: 'https://www.nagoriyuki.cn/ru/' }],
        ['meta', { name: 'twitter:title', content: 'Yuki — Личное обучение' }],
        ['meta', { name: 'twitter:description', content: 'Маленький уголок для записи учёбы и творчества' }],
      ],
      themeConfig: {
        nav: [
          { text: 'Главная', link: '/ru/' },
          { text: 'Использование Tailwind', link: '/zh/tailwind' },
        ],
        sidebar: {
          '/ru/': [
            {
              text: 'Заметки',
              items: [{ text: 'Использование Tailwind CSS', link: '/zh/tailwind' }],
            },
          ],
        },
        docFooter: { prev: 'Назад', next: 'Далее' },
        outline: { label: 'Содержание' },
        lastUpdatedText: 'Последнее обновление',
        footer: {
          message: `© ${new Date().getFullYear()} Yuki. Все права защищены.`,
          copyright: '<a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">浙ICP备2026034080号-1</a>'
        },
      },
    },
  },
})
