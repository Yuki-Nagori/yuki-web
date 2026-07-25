// 扩展 VitePress 默认主题
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { getLangPath, isRootPath } from '../utils/lang'
import './style.css'

// 执行语言重定向
function redirectToLang(router: { go: (path: string) => void }, base: string) {
  // 只在客户端执行
  if (typeof window === 'undefined') return

  const path = window.location.pathname

  // 检查当前路径是否是根路径
  if (isRootPath(path, base)) {
    const lang =
      navigator.language || (navigator as Navigator & { userLanguage?: string }).userLanguage
    const langPath = getLangPath(lang)

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
