/**
 * @file VitePress 自定义主题入口
 * @brief 扩展默认主题，注入浏览器语言自动重定向逻辑
 */

import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { redirectToLang } from '../utils/redirect'
import './style.css'

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
