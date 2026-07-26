/**
 * @file 浏览器语言重定向
 * @brief 在根路径根据浏览器语言跳转到对应语言首页
 */

import { getLangPath, isRootPath } from './lang'

/**
 * 在根路径时根据浏览器语言重定向到对应的语言首页
 * @param router - VitePress 路由实例（{ go }）
 * @param base - VitePress base 配置
 */
export function redirectToLang(router: { go: (path: string) => void }, base: string): void {
  if (typeof window === 'undefined') return

  const path = window.location.pathname
  if (!isRootPath(path, base)) return

  const langPath = getLangPath(navigator.language)
  router.go(langPath)
}
