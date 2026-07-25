/**
 * @file 多语言翻译表
 * @brief 集中管理站点所有 UI 文案，config.mts 通过此表获取各语言字符串
 */

export interface LocaleStrings {
  /** 导航 */
  nav: {
    home: string
    tailwind: string
  }
  /** 侧边栏 */
  sidebar: {
    notes: string
    tailwind: string
  }
  /** 文档页脚导航 */
  docFooter: {
    prev: string
    next: string
  }
  /** 大纲标题 */
  outline: string
  /** 最后更新时间 */
  lastUpdated: string
  /** 页脚 */
  footer: {
    message: string
  }
  /** SEO */
  seo: {
    description: string
    keywords: string
    ogTitle: string
    ogDescription: string
  }
}

const translations: Record<string, LocaleStrings> = {
  'zh-CN': {
    nav: { home: '首页', tailwind: 'Tailwind 用法' },
    sidebar: { notes: '学习笔记', tailwind: 'Tailwind CSS 用法' },
    docFooter: { prev: '上一页', next: '下一页' },
    outline: '页面导航',
    lastUpdated: '最后更新',
    footer: { message: 'Yuki 版权所有' },
    seo: {
      description: 'Yuki 个人学习站——记录学习与创作的小角落',
      keywords: 'Yuki, 学习, Tailwind CSS, 前端',
      ogTitle: 'Yuki — 个人学习',
      ogDescription: '记录学习与创作的小角落',
    },
  },
  'en-US': {
    nav: { home: 'Home', tailwind: 'Tailwind Usage' },
    sidebar: { notes: 'Notes', tailwind: 'Tailwind CSS Usage' },
    docFooter: { prev: 'Previous', next: 'Next' },
    outline: 'On this page',
    lastUpdated: 'Last updated',
    footer: { message: 'Yuki. All rights reserved.' },
    seo: {
      description:
        "Yuki's personal learning site — a little corner for recording learning and creation",
      keywords: 'Yuki, learning, Tailwind CSS, frontend',
      ogTitle: 'Yuki — Personal Learning',
      ogDescription: 'A little corner for recording learning and creation',
    },
  },
  'ja-JP': {
    nav: { home: 'ホーム', tailwind: 'Tailwind の使い方' },
    sidebar: { notes: 'ノート', tailwind: 'Tailwind CSS の使い方' },
    docFooter: { prev: '前へ', next: '次へ' },
    outline: 'このページの内容',
    lastUpdated: '最終更新',
    footer: { message: 'Yuki. 著作権所有。' },
    seo: {
      description: 'Yuki 個人学習サイト — 学びと創作を記録する小さな場所',
      keywords: 'Yuki, 学習, Tailwind CSS, フロントエンド',
      ogTitle: 'Yuki — 個人学習',
      ogDescription: '学習と創作を記録する小さな場所',
    },
  },
  'fr-FR': {
    nav: { home: 'Accueil', tailwind: 'Utilisation Tailwind' },
    sidebar: { notes: 'Notes', tailwind: 'Utilisation de Tailwind CSS' },
    docFooter: { prev: 'Précédent', next: 'Suivant' },
    outline: 'Sur cette page',
    lastUpdated: 'Dernière mise à jour',
    footer: { message: 'Yuki. Tous droits réservés.' },
    seo: {
      description: 'Site personnel de Yuki — un coin pour enregistrer apprentissage et créations',
      keywords: 'Yuki, apprentissage, Tailwind CSS, frontend',
      ogTitle: 'Yuki — Apprentissage personnel',
      ogDescription: 'Un petit coin pour enregistrer apprentissage et créations',
    },
  },
  'ru-RU': {
    nav: { home: 'Главная', tailwind: 'Использование Tailwind' },
    sidebar: { notes: 'Заметки', tailwind: 'Использование Tailwind CSS' },
    docFooter: { prev: 'Назад', next: 'Далее' },
    outline: 'Содержание',
    lastUpdated: 'Последнее обновление',
    footer: { message: 'Yuki. Все права защищены.' },
    seo: {
      description: 'Персональный сайт Yuki — уголок для записи учёбы и творчества',
      keywords: 'Yuki, обучение, Tailwind CSS, фронтенд',
      ogTitle: 'Yuki — Личное обучение',
      ogDescription: 'Маленький уголок для записи учёбы и творчества',
    },
  },
}

/**
 * 获取指定语言的翻译字符串
 * @param lang - 语言代码，如 'zh-CN'，找不到时回退到 zh-CN
 */
export function t(lang: string): LocaleStrings {
  return translations[lang] || translations['zh-CN']
}
