/**
 * @file Head 标签生成
 * @brief 全局 head 和各 locale SEO head 配置
 */

import type { HeadConfig } from 'vitepress'
import { t } from '../i18n/index'

const BASE_URL = 'https://www.nagoriyuki.cn'

/** 全局 head（所有语言共享） */
export const globalHead: HeadConfig[] = [
  ['link', { rel: 'icon', type: 'image/png', href: '/og-image.png' }],
  ['meta', { property: 'og:type', content: 'website' }],
  ['meta', { property: 'og:image', content: `${BASE_URL}/og-image.png` }],
  ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ['meta', { name: 'twitter:image', content: `${BASE_URL}/og-image.png` }],
]

/** 按语言生成 locale head */
export function localeHead(lang: string, link: string): HeadConfig[] {
  const $ = t(lang)
  return [
    ['meta', { name: 'description', content: $.seo.description }],
    ['meta', { name: 'keywords', content: $.seo.keywords }],
    ['meta', { property: 'og:title', content: $.seo.ogTitle }],
    ['meta', { property: 'og:description', content: $.seo.ogDescription }],
    ['meta', { property: 'og:url', content: `${BASE_URL}${link}` }],
    ['meta', { name: 'twitter:title', content: $.seo.ogTitle }],
    ['meta', { name: 'twitter:description', content: $.seo.ogDescription }],
  ]
}
