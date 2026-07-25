/**
 * @file 多语言翻译表入口
 * @brief 提供 t() 函数获取各语言固定 UI 文案
 * @note nav/sidebar 中与内容相关的文案留在 config.mts，不在此处管理
 */

export interface LocaleStrings {
  docFooter: {
    prev: string
    next: string
  }
  outline: string
  lastUpdated: string
  footer: {
    message: string
  }
  seo: {
    description: string
    keywords: string
    ogTitle: string
    ogDescription: string
  }
}

import { zhCN } from './zh-CN'
import { enUS } from './en-US'
import { jaJP } from './ja-JP'
import { frFR } from './fr-FR'
import { ruRU } from './ru-RU'

const translations: Record<string, LocaleStrings> = {
  'zh-CN': zhCN,
  'en-US': enUS,
  'ja-JP': jaJP,
  'fr-FR': frFR,
  'ru-RU': ruRU,
}

/**
 * 获取指定语言的翻译字符串
 * @param lang - 语言代码，找不到时回退到 zh-CN
 */
export function t(lang: string): LocaleStrings {
  return translations[lang] || translations['zh-CN']
}
