/**
 * @file 站点导航与侧边栏
 * @brief 集中管理所有语言的 nav/sidebar 数据，加页面只改此文件
 */

export interface NavItem {
  text: string
  link: string
}

export interface SidebarGroup {
  text: string
  items: { text: string; link: string }[]
}

export interface NavContent {
  nav: NavItem[]
  sidebar: Record<string, SidebarGroup[]>
}

type LocaleNavMap = Record<string, (link: string) => NavContent>

/**
 * 各语言的 nav/sidebar 内容
 * @param link - locale 路径前缀，如 '/zh/'、'/en/'
 * @note 加新页面：在此文件对应语言下添加 nav/sidebar 条目
 * @note 加新语言：在此文件新增一个函数
 */
export function getNav(lang: string, link: string): NavContent {
  const navs: LocaleNavMap = {
    'zh-CN': (l) => ({
      nav: [
        { text: '首页', link: l },
        { text: 'Tailwind 用法', link: `${l}tailwind` },
      ],
      sidebar: {
        [l]: [{ text: '学习笔记', items: [{ text: 'Tailwind CSS 用法', link: `${l}tailwind` }] }],
      },
    }),
    'en-US': (l) => ({
      nav: [
        { text: 'Home', link: l },
        { text: 'Tailwind Usage', link: `${l}tailwind` },
      ],
      sidebar: {
        [l]: [{ text: 'Notes', items: [{ text: 'Tailwind CSS Usage', link: `${l}tailwind` }] }],
      },
    }),
    'ja-JP': (l) => ({
      nav: [
        { text: 'ホーム', link: l },
        { text: 'Tailwind の使い方', link: `${l}tailwind` },
      ],
      sidebar: {
        [l]: [{ text: 'ノート', items: [{ text: 'Tailwind CSS の使い方', link: `${l}tailwind` }] }],
      },
    }),
    'fr-FR': (l) => ({
      nav: [
        { text: 'Accueil', link: l },
        { text: 'Utilisation Tailwind', link: `${l}tailwind` },
      ],
      sidebar: {
        [l]: [
          {
            text: 'Notes',
            items: [{ text: 'Utilisation de Tailwind CSS', link: `${l}tailwind` }],
          },
        ],
      },
    }),
    'ru-RU': (l) => ({
      nav: [
        { text: 'Главная', link: l },
        { text: 'Использование Tailwind', link: `${l}tailwind` },
      ],
      sidebar: {
        [l]: [
          {
            text: 'Заметки',
            items: [{ text: 'Использование Tailwind CSS', link: `${l}tailwind` }],
          },
        ],
      },
    }),
  }

  return (navs[lang] || navs['zh-CN'])(link)
}
