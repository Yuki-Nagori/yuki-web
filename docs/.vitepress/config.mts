/**
 * @file VitePress 站点配置
 * @brief 组装入口——thin layer，具体逻辑在 config/、i18n/、nav.ts 中
 */

import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'
import { globalHead, localeHead } from './config/head'
import { buildSitemap } from './config/sitemap'
import { getNav } from './nav'
import { t } from './i18n/index'

export default defineConfig({
  vite: { plugins: [tailwindcss()] },
  outDir: './dist',
  base: '/',
  cleanUrls: true,
  lastUpdated: true,

  head: globalHead,

  themeConfig: {
    siteTitle: 'Yuki',
    search: { provider: 'local' },
  },

  buildEnd: buildSitemap,

  locales: {
    root: makeLocale('zh-CN', '/zh/', '简体中文'),
    en: makeLocale('en-US', '/en/', 'English'),
    ja: makeLocale('ja-JP', '/ja/', '日本語'),
    fr: makeLocale('fr-FR', '/fr/', 'Français'),
    ru: makeLocale('ru-RU', '/ru/', 'Русский'),
  },
})

function makeLocale(lang: string, link: string, label: string) {
  const $ = t(lang)
  const { nav, sidebar } = getNav(lang, link)

  return {
    label,
    lang,
    link,
    head: localeHead(lang, link),
    themeConfig: {
      nav,
      sidebar,
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
