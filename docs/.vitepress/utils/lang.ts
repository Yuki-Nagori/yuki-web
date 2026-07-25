/**
 * 语言检测工具函数
 * 纯函数，无浏览器 API 依赖，方便单元测试
 */

/** 语言到路径的映射 */
export const langMap: Record<string, string> = {
  // 中文
  zh: '/zh/',
  'zh-CN': '/zh/',
  'zh-TW': '/zh/',
  'zh-HK': '/zh/',
  'zh-SG': '/zh/',
  // 英文
  en: '/en/',
  'en-US': '/en/',
  'en-GB': '/en/',
  'en-AU': '/en/',
  'en-CA': '/en/',
  // 日语
  ja: '/ja/',
  'ja-JP': '/ja/',
  // 法语
  fr: '/fr/',
  'fr-FR': '/fr/',
  'fr-CA': '/fr/',
  'fr-BE': '/fr/',
  // 俄语
  ru: '/ru/',
  'ru-RU': '/ru/',
}

/**
 * 根据浏览器 language 字符串获取对应的站点路径
 * @param language - navigator.language 的值
 * @returns 语言路径，如 '/zh/'、'/en/' 等，默认返回 '/zh/'
 */
export function getLangPath(language?: string): string {
  const lang = language || 'zh'

  // 直接匹配
  if (langMap[lang]) {
    return langMap[lang]
  }

  // 匹配语言前缀（如 'zh-CN' → 'zh'）
  const langPrefix = lang.split('-')[0]
  if (langMap[langPrefix]) {
    return langMap[langPrefix]
  }

  // 默认中文
  return '/zh/'
}

/**
 * 判断给定路径是否是根路径（需要重定向）
 */
export function isRootPath(path: string, base: string): boolean {
  const normalizedBase = base.endsWith('/') ? base : `${base}/`
  const rootPath = normalizedBase
  const rootIndexPath = `${normalizedBase}index.html`
  return path === '/' || path === rootPath || path === rootIndexPath
}
