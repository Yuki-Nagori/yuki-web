// 扩展 VitePress 默认主题
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

// 语言映射配置
const langMap: Record<string, string> = {
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

// 获取语言路径
function getLangPath(): string {
  const lang =
    navigator.language || (navigator as Navigator & { userLanguage?: string }).userLanguage || 'zh'

  // 直接匹配
  if (langMap[lang]) {
    return langMap[lang]
  }

  // 匹配语言前缀
  const langPrefix = lang.split('-')[0]
  if (langMap[langPrefix]) {
    return langMap[langPrefix]
  }

  // 默认中文
  return '/zh/'
}

// 执行语言重定向
function redirectToLang(router: { go: (path: string) => void }, base: string) {
  // 只在客户端执行
  if (typeof window === 'undefined') return

  const path = window.location.pathname
  const normalizedBase = base.endsWith('/') ? base : `${base}/`
  const rootPath = normalizedBase
  const rootIndexPath = `${normalizedBase}index.html`

  // 检查当前路径是否是根路径或只有 base
  if (path === '/' || path === rootPath || path === rootIndexPath) {
    const langPath = getLangPath()

    // langPath 已经是绝对路径（如 /zh/），避免与 base 再拼接导致 //zh/
    if (path !== langPath) {
      router.go(langPath)
    }
  }
}

export default {
  extends: DefaultTheme,
  enhanceApp({ app: _app, router, siteData }) {
    // 在路由就绪后进行语言重定向
    if (typeof window !== 'undefined') {
      const base = siteData.value.base || '/'

      // 初始加载时检查
      redirectToLang(router, base)

      // 监听路由变化
      router.onAfterRouteChange = (to: string) => {
        if (to === '/' || to === '/index.html') {
          redirectToLang(router, base)
        }
      }
    }
  },
} satisfies Theme
