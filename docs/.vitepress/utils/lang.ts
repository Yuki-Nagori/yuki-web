/**
 * @file 语言检测与路径映射工具
 * @brief 提供浏览器语言到站点路径的映射，以及根路径判断
 */

/**
 * 语言到站点路径的映射表
 * @note 每个语言包含基础码和常用变体，未匹配的变体回退到前缀匹配
 */
export const langMap: Record<string, string> = {
  zh: '/zh/',
  'zh-CN': '/zh/',
  'zh-TW': '/zh/',
  'zh-HK': '/zh/',
  'zh-SG': '/zh/',
  en: '/en/',
  'en-US': '/en/',
  'en-GB': '/en/',
  'en-AU': '/en/',
  'en-CA': '/en/',
  ja: '/ja/',
  'ja-JP': '/ja/',
  fr: '/fr/',
  'fr-FR': '/fr/',
  'fr-CA': '/fr/',
  'fr-BE': '/fr/',
  ru: '/ru/',
  'ru-RU': '/ru/',
}

/**
 * 根据浏览器 language 字符串获取对应的站点路径
 * @param language - navigator.language 的值，未传时默认 zh
 * @returns 语言路径，如 `/zh/`、`/en/`，未知语言默认返回 `/zh/`
 */
export function getLangPath(language?: string): string {
  const lang = language || 'zh'

  if (langMap[lang]) {
    return langMap[lang]
  }

  // 前缀回退，如 'zh-XX' → 'zh'
  const langPrefix = lang.split('-')[0]
  if (langMap[langPrefix]) {
    return langMap[langPrefix]
  }

  return '/zh/'
}

/**
 * 判断给定路径是否是根路径（需要语言重定向）
 * @param path - 当前路径，如 `/`、`/en/`
 * @param base - VitePress base，如 `/`
 * @returns true 表示需要重定向
 */
export function isRootPath(path: string, base: string): boolean {
  const normalizedBase = base.endsWith('/') ? base : `${base}/`
  const rootPath = normalizedBase
  const rootIndexPath = `${normalizedBase}index.html`
  return path === '/' || path === rootPath || path === rootIndexPath
}
