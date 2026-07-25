/**
 * @file TypeScript 环境声明
 * @brief 提供 Vite、VitePress 客户端类型引用及 .vue/.md 模块声明
 */

/// <reference types="vite/client" />
/// <reference types="vitepress/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.md' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
