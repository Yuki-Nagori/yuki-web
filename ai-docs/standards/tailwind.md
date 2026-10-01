# Tailwind CSS 准则

- 优先使用 utility classes 表达布局、间距、颜色和响应式样式。
- Tailwind 4 通过 `@tailwindcss/vite` 集成，CSS 入口使用
  `@import 'tailwindcss'`。
- 自定义 CSS 用于必要的全局规则或 utilities 难以表达的样式。
- 类名保持完整、静态可识别；条件样式用完整类名映射，避免动态拼接片段。
- 重复且有明确职责的界面提取为 Vue 组件。
- 交互元素兼顾键盘焦点、对比度和不同屏幕宽度。
