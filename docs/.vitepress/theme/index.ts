/**
 * @file VitePress 自定义主题入口
 * @brief 扩展默认主题，注入浏览器语言自动重定向逻辑
 */

import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { getLangPath, isRootPath } from '../utils/lang'
import './style.css'

/**
 * 在根路径时根据浏览器语言重定向到对应的语言首页
 * @param router - VitePress 路由实例
 * @param base - VitePress base 配置
 */
function redirectToLang(router: { go: (path: string) => void }, base: string): void {
  if (typeof window === 'undefined') return

  const path = window.location.pathname
  if (!isRootPath(path, base)) return

  const lang =
    navigator.language || (navigator as Navigator & { userLanguage?: string }).userLanguage
  const langPath = getLangPath(lang)

  if (path !== langPath) {
    router.go(langPath)
  }
}

export default {
  extends: DefaultTheme,

  enhanceApp({ app: _app, router, siteData }) {
    if (typeof window === 'undefined') return

    const base = siteData.value.base || '/'
    redirectToLang(router, base)

    router.onAfterRouteChange = (to: string) => {
      if (to === '/' || to === '/index.html') {
        redirectToLang(router, base)
      }
    }
  },
} satisfies Theme
