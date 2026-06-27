import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'

// https://vitepress.dev/reference/site-config
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

  // 主题配置（共享部分）
  themeConfig: {
    // 站点标题
    siteTitle: 'Yuki',

    // 搜索配置
    search: {
      provider: 'local',
    },
  },

  // 多语言配置
  locales: {
    // 简体中文（默认）
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
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
