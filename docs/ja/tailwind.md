# Tailwind CSS 使用例

## 基本スタイル

```markdown
<div class="bg-blue-500 text-white p-4 rounded-lg">
  青い背景 + 白い文字 + 角丸
</div>
```

<div class="bg-blue-500 text-white p-4 rounded-lg">
  青い背景 + 白い文字 + 角丸
</div>

## レスポンシブレイアウト

```markdown
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="bg-gray-100 p-4 rounded">カード 1</div>
  <div class="bg-gray-100 p-4 rounded">カード 2</div>
  <div class="bg-gray-100 p-4 rounded">カード 3</div>
</div>
```

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded">カード 1</div>
  <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded">カード 2</div>
  <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded">カード 3</div>
</div>

## ダークモード

`dark:` プレフィックスを使用:

```markdown
<div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 rounded">
  ライト/ダークモードに自動対応
</div>
```

<div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 rounded">
  ライト/ダークモードに自動対応
</div>

## インタラクティブ状態

```markdown
<button class="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
  クリック
</button>
```

<button class="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
  クリック
</button>

## 通知ボックス

```markdown
<div class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 my-4">
  <p class="font-bold text-yellow-800 dark:text-yellow-200">ヒント</p>
  <p class="text-yellow-700 dark:text-yellow-300">これはヒント情報です。</p>
</div>
```

<div class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 my-4">
  <p class="font-bold text-yellow-800 dark:text-yellow-200">ヒント</p>
  <p class="text-yellow-700 dark:text-yellow-300">これはヒント情報です。</p>
</div>

## バッジ

```markdown
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
  New
</span>
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
  Beta
</span>
```

<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
  New
</span>
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
  Beta
</span>

## 複雑なカードレイアウト

### 機能カードグリッド

```markdown
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  <div class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
    <div class="text-3xl mb-2">🚀</div>
    <h3 class="font-bold text-lg">クイックスタート</h3>
    <p class="text-blue-100 text-sm mt-2">ワンクリックデプロイ、瞬時起動</p>
  </div>
  <div class="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
    <div class="text-3xl mb-2">🔒</div>
    <h3 class="font-bold text-lg">安全・信頼性</h3>
    <p class="text-green-100 text-sm mt-2">エンタープライズ級のセキュリティ保護</p>
  </div>
  <div class="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
    <div class="text-3xl mb-2">⚡</div>
    <h3 class="font-bold text-lg">高性能</h3>
    <p class="text-purple-100 text-sm mt-2">究極のパフォーマンス最適化</p>
  </div>
  <div class="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
    <div class="text-3xl mb-2">🛠️</div>
    <h3 class="font-bold text-lg">拡張が容易</h3>
    <p class="text-orange-100 text-sm mt-2">柔軟な拡張メカニズム</p>
  </div>
</div>
```

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  <div class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
    <div class="text-3xl mb-2">🚀</div>
    <h3 class="font-bold text-lg">クイックスタート</h3>
    <p class="text-blue-100 text-sm mt-2">ワンクリックデプロイ、瞬時起動</p>
  </div>
  <div class="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
    <div class="text-3xl mb-2">🔒</div>
    <h3 class="font-bold text-lg">安全・信頼性</h3>
    <p class="text-green-100 text-sm mt-2">エンタープライズ級のセキュリティ保護</p>
  </div>
  <div class="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
    <div class="text-3xl mb-2">⚡</div>
    <h3 class="font-bold text-lg">高性能</h3>
    <p class="text-purple-100 text-sm mt-2">究極のパフォーマンス最適化</p>
  </div>
  <div class="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
    <div class="text-3xl mb-2">🛠️</div>
    <h3 class="font-bold text-lg">拡張が容易</h3>
    <p class="text-orange-100 text-sm mt-2">柔軟な拡張メカニズム</p>
  </div>
</div>

### 画像付きカード

```markdown
<div class="max-w-sm bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
  <div class="h-48 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>
  <div class="p-6">
    <div class="flex items-center justify-between mb-4">
      <span class="text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">Feature</span>
      <span class="text-xs text-gray-500 dark:text-gray-400">3 min read</span>
    </div>
    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Tailwind CSS 統合</h3>
    <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
      Tailwind CSS v4 を使用してモダンなインターフェースを構築し、ダークモード、レスポンシブデザイン、豊富なインタラクション効果をサポートします。
    </p>
    <div class="mt-4 flex items-center space-x-2">
      <div class="h-8 w-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
      <span class="text-sm text-gray-700 dark:text-gray-300">著者名</span>
    </div>
  </div>
</div>
```

<div class="max-w-sm bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
  <div class="h-48 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>
  <div class="p-6">
    <div class="flex items-center justify-between mb-4">
      <span class="text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">Feature</span>
      <span class="text-xs text-gray-500 dark:text-gray-400">3 min read</span>
    </div>
    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Tailwind CSS 統合</h3>
    <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
      Tailwind CSS v4 を使用してモダンなインターフェースを構築し、ダークモード、レスポンシブデザイン、豊富なインタラクション効果をサポートします。
    </p>
    <div class="mt-4 flex items-center space-x-2">
      <div class="h-8 w-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
      <span class="text-sm text-gray-700 dark:text-gray-300">著者名</span>
    </div>
  </div>
</div>

## データテーブル

### 複雑なテーブルスタイル

```markdown
<div class="overflow-x-auto rounded-xl shadow-lg">
  <table class="w-full text-sm text-left">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th class="px-6 py-4 font-bold">プロジェクト名</th>
        <th class="px-6 py-4 font-bold">ステータス</th>
        <th class="px-6 py-4 font-bold">進捗</th>
        <th class="px-6 py-4 font-bold">担当者</th>
        <th class="px-6 py-4 font-bold">操作</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
      <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
        <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">フロントエンド再構築</td>
        <td class="px-6 py-4"><span class="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">進行中</span></td>
        <td class="px-6 py-4">
          <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div class="bg-blue-600 h-2.5 rounded-full" style="width: 75%"></div>
          </div>
        </td>
        <td class="px-6 py-4 text-gray-600 dark:text-gray-300">張三</td>
        <td class="px-6 py-4"><button class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">編集</button></td>
      </tr>
      <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
        <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">API 開発</td>
        <td class="px-6 py-4"><span class="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">審査待ち</span></td>
        <td class="px-6 py-4">
          <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div class="bg-yellow-500 h-2.5 rounded-full" style="width: 45%"></div>
          </div>
        </td>
        <td class="px-6 py-4 text-gray-600 dark:text-gray-300">李四</td>
        <td class="px-6 py-4"><button class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">編集</button></td>
      </tr>
    </tbody>
  </table>
</div>
```

<div class="overflow-x-auto rounded-xl shadow-lg">
  <table class="w-full text-sm text-left">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th class="px-6 py-4 font-bold">プロジェクト名</th>
        <th class="px-6 py-4 font-bold">ステータス</th>
        <th class="px-6 py-4 font-bold">進捗</th>
        <th class="px-6 py-4 font-bold">担当者</th>
        <th class="px-6 py-4 font-bold">操作</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
      <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
        <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">フロントエンド再構築</td>
        <td class="px-6 py-4"><span class="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">進行中</span></td>
        <td class="px-6 py-4">
          <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div class="bg-blue-600 h-2.5 rounded-full" style="width: 75%"></div>
          </div>
        </td>
        <td class="px-6 py-4 text-gray-600 dark:text-gray-300">張三</td>
        <td class="px-6 py-4"><button class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">編集</button></td>
      </tr>
      <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
        <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">API 開発</td>
        <td class="px-6 py-4"><span class="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">審査待ち</span></td>
        <td class="px-6 py-4">
          <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div class="bg-yellow-500 h-2.5 rounded-full" style="width: 45%"></div>
          </div>
        </td>
        <td class="px-6 py-4 text-gray-600 dark:text-gray-300">李四</td>
        <td class="px-6 py-4"><button class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">編集</button></td>
      </tr>
    </tbody>
  </table>
</div>

## 統計パネル

### データダッシュボード

```markdown
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
    <div class="flex items-center justify-between">
      <div>
        <p class="text-sm text-gray-500 dark:text-gray-400">総ユーザー数</p>
        <p class="text-3xl font-bold text-gray-900 dark:text-white mt-1">12,345</p>
        <p class="text-sm text-green-500 mt-2 flex items-center">
          <span>↑ 12%</span>
          <span class="text-gray-400 ml-1">前月比</span>
        </p>
      </div>
      <div class="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
        <span class="text-2xl">👥</span>
      </div>
    </div>
  </div>
  <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-green-500">
    <div class="flex items-center justify-between">
      <div>
        <p class="text-sm text-gray-500 dark:text-gray-400">収入</p>
        <p class="text-3xl font-bold text-gray-900 dark:text-white mt-1">¥89,420</p>
        <p class="text-sm text-green-500 mt-2 flex items-center">
          <span>↑ 8%</span>
          <span class="text-gray-400 ml-1">前月比</span>
        </p>
      </div>
      <div class="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
        <span class="text-2xl">💰</span>
      </div>
    </div>
  </div>
  <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
    <div class="flex items-center justify-between">
      <div>
        <p class="text-sm text-gray-500 dark:text-gray-400">注文数</p>
        <p class="text-3xl font-bold text-gray-900 dark:text-white mt-1">2,847</p>
        <p class="text-sm text-red-500 mt-2 flex items-center">
          <span>↓ 3%</span>
          <span class="text-gray-400 ml-1">前月比</span>
        </p>
      </div>
      <div class="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
        <span class="text-2xl">📦</span>
      </div>
    </div>
  </div>
</div>
```

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
    <div class="flex items-center justify-between">
      <div>
        <p class="text-sm text-gray-500 dark:text-gray-400">総ユーザー数</p>
        <p class="text-3xl font-bold text-gray-900 dark:text-white mt-1">12,345</p>
        <p class="text-sm text-green-500 mt-2 flex items-center">
          <span>↑ 12%</span>
          <span class="text-gray-400 ml-1">前月比</span>
        </p>
      </div>
      <div class="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
        <span class="text-2xl">👥</span>
      </div>
    </div>
  </div>
  <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-green-500">
    <div class="flex items-center justify-between">
      <div>
        <p class="text-sm text-gray-500 dark:text-gray-400">収入</p>
        <p class="text-3xl font-bold text-gray-900 dark:text-white mt-1">¥89,420</p>
        <p class="text-sm text-green-500 mt-2 flex items-center">
          <span>↑ 8%</span>
          <span class="text-gray-400 ml-1">前月比</span>
        </p>
      </div>
      <div class="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
        <span class="text-2xl">💰</span>
      </div>
    </div>
  </div>
  <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
    <div class="flex items-center justify-between">
      <div>
        <p class="text-sm text-gray-500 dark:text-gray-400">注文数</p>
        <p class="text-3xl font-bold text-gray-900 dark:text-white mt-1">2,847</p>
        <p class="text-sm text-red-500 mt-2 flex items-center">
          <span>↓ 3%</span>
          <span class="text-gray-400 ml-1">前月比</span>
        </p>
      </div>
      <div class="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
        <span class="text-2xl">📦</span>
      </div>
    </div>
  </div>
</div>

## タイムライン

### 垂直タイムライン

```markdown
<div class="relative border-l-2 border-gray-200 dark:border-gray-700 ml-4 space-y-8">
  <div class="relative pl-8">
    <div class="absolute -left-2.5 top-1 w-5 h-5 rounded-full bg-blue-500 border-4 border-white dark:border-gray-800"></div>
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <h4 class="text-lg font-semibold text-gray-900 dark:text-white">プロジェクト開始</h4>
      <span class="text-sm text-gray-500 dark:text-gray-400">2024年1月</span>
    </div>
    <p class="text-gray-600 dark:text-gray-300 mt-2">プロジェクトの目標と範囲を確定し、コアチームを編成。</p>
  </div>
  <div class="relative pl-8">
    <div class="absolute -left-2.5 top-1 w-5 h-5 rounded-full bg-green-500 border-4 border-white dark:border-gray-800"></div>
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <h4 class="text-lg font-semibold text-gray-900 dark:text-white">プロトタイプ設計</h4>
      <span class="text-sm text-gray-500 dark:text-gray-400">2024年2月</span>
    </div>
    <p class="text-gray-600 dark:text-gray-300 mt-2">製品プロトタイプの設計とユーザーリサーチを完了。</p>
  </div>
  <div class="relative pl-8">
    <div class="absolute -left-2.5 top-1 w-5 h-5 rounded-full bg-purple-500 border-4 border-white dark:border-gray-800"></div>
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <h4 class="text-lg font-semibold text-gray-900 dark:text-white">開発段階</h4>
      <span class="text-sm text-gray-500 dark:text-gray-400">2024年3月〜5月</span>
    </div>
    <p class="text-gray-600 dark:text-gray-300 mt-2">フロントエンドとバックエンドを並行開発し、コア機能を完了。</p>
  </div>
</div>
```

<div class="relative border-l-2 border-gray-200 dark:border-gray-700 ml-4 space-y-8">
  <div class="relative pl-8">
    <div class="absolute -left-2.5 top-1 w-5 h-5 rounded-full bg-blue-500 border-4 border-white dark:border-gray-800"></div>
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <h4 class="text-lg font-semibold text-gray-900 dark:text-white">プロジェクト開始</h4>
      <span class="text-sm text-gray-500 dark:text-gray-400">2024年1月</span>
    </div>
    <p class="text-gray-600 dark:text-gray-300 mt-2">プロジェクトの目標と範囲を確定し、コアチームを編成。</p>
  </div>
  <div class="relative pl-8">
    <div class="absolute -left-2.5 top-1 w-5 h-5 rounded-full bg-green-500 border-4 border-white dark:border-gray-800"></div>
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <h4 class="text-lg font-semibold text-gray-900 dark:text-white">プロトタイプ設計</h4>
      <span class="text-sm text-gray-500 dark:text-gray-400">2024年2月</span>
    </div>
    <p class="text-gray-600 dark:text-gray-300 mt-2">製品プロトタイプの設計とユーザーリサーチを完了。</p>
  </div>
  <div class="relative pl-8">
    <div class="absolute -left-2.5 top-1 w-5 h-5 rounded-full bg-purple-500 border-4 border-white dark:border-gray-800"></div>
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <h4 class="text-lg font-semibold text-gray-900 dark:text-white">開発段階</h4>
      <span class="text-sm text-gray-500 dark:text-gray-400">2024年3月〜5月</span>
    </div>
    <p class="text-gray-600 dark:text-gray-300 mt-2">フロントエンドとバックエンドを並行開発し、コア機能を完了。</p>
  </div>
</div>

## コードブロックスタイル

### 1. macOS スタイルウィンドウ

```markdown
<div class="rounded-xl overflow-hidden bg-gray-900 text-gray-100">
  <div class="flex items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
    <div class="flex space-x-2">
      <div class="w-3 h-3 rounded-full bg-red-500"></div>
      <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div class="w-3 h-3 rounded-full bg-green-500"></div>
    </div>
    <span class="ml-4 text-sm text-gray-400">src/components/Button.tsx</span>
  </div>
  <div class="p-4 font-mono text-sm">
    <pre><code>export function Button({ children, onClick }) {
  return (
    &lt;button 
      className="px-4 py-2 bg-blue-500 text-white rounded"
      onClick={onClick}
    &gt;
      {children}
    &lt;/button&gt;
  );
}</code></pre>
  </div>
</div>
```

<div class="rounded-xl overflow-hidden bg-gray-900 text-gray-100">
  <div class="flex items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
    <div class="flex space-x-2">
      <div class="w-3 h-3 rounded-full bg-red-500"></div>
      <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div class="w-3 h-3 rounded-full bg-green-500"></div>
    </div>
    <span class="ml-4 text-sm text-gray-400">src/components/Button.tsx</span>
  </div>
  <div class="p-4 font-mono text-sm">
    <pre><code>export function Button({ children, onClick }) {
  return (
    &lt;button 
      className="px-4 py-2 bg-blue-500 text-white rounded"
      onClick={onClick}
    &gt;
      {children}
    &lt;/button&gt;
  );
}</code></pre>
  </div>
</div>

### 2. 言語ラベル付きコードブロック

```markdown
<div class="rounded-lg overflow-hidden bg-slate-900">
  <div class="flex items-center justify-between px-4 py-2 bg-slate-800">
    <span class="text-xs font-semibold text-blue-400 uppercase">JavaScript</span>
    <button class="text-xs text-slate-400 hover:text-white transition-colors">コピー</button>
  </div>
  <div class="p-4 overflow-x-auto">
    <pre class="text-sm text-slate-300 font-mono"><code>const fibonacci = (n) =&gt; {
  if (n &lt;= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};
console.log(fibonacci(10)); // 55</code></pre>
  </div>
</div>
```

<div class="rounded-lg overflow-hidden bg-slate-900">
  <div class="flex items-center justify-between px-4 py-2 bg-slate-800">
    <span class="text-xs font-semibold text-blue-400 uppercase">JavaScript</span>
    <button class="text-xs text-slate-400 hover:text-white transition-colors">コピー</button>
  </div>
  <div class="p-4 overflow-x-auto">
    <pre class="text-sm text-slate-300 font-mono"><code>const fibonacci = (n) =&gt; {
  if (n &lt;= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};
console.log(fibonacci(10)); // 55</code></pre>
  </div>
</div>

### 3. 行番号付きコードブロック

```markdown
<div class="rounded-lg overflow-hidden bg-zinc-900">
  <div class="flex">
    <div class="py-4 px-3 bg-zinc-800 text-zinc-500 text-right font-mono text-sm select-none">
      1<br>2<br>3<br>4<br>5
    </div>
    <div class="py-4 px-4 overflow-x-auto flex-1">
      <pre class="text-sm text-zinc-300 font-mono"><code>function greet(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
  return message;
}</code></pre>
    </div>
  </div>
</div>
```

<div class="rounded-lg overflow-hidden bg-zinc-900">
  <div class="flex">
    <div class="py-4 px-3 bg-zinc-800 text-zinc-500 text-right font-mono text-sm select-none">
      1<br>2<br>3<br>4<br>5
    </div>
    <div class="py-4 px-4 overflow-x-auto flex-1">
      <pre class="text-sm text-zinc-300 font-mono"><code>function greet(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
  return message;
}</code></pre>
    </div>
  </div>
</div>

### 4. マルチファイルタブ

```markdown
<div class="rounded-xl overflow-hidden bg-neutral-900 border border-neutral-700">
  <div class="flex bg-neutral-800">
    <button class="px-4 py-2 text-sm text-neutral-300 bg-neutral-900 border-t-2 border-blue-500">
      App.jsx
    </button>
    <button class="px-4 py-2 text-sm text-neutral-400 hover:text-neutral-200 hover:bg-neutral-700 transition-colors">
      styles.css
    </button>
    <button class="px-4 py-2 text-sm text-neutral-400 hover:text-neutral-200 hover:bg-neutral-700 transition-colors">
      package.json
    </button>
  </div>
  <div class="p-4">
    <pre class="text-sm text-neutral-300 font-mono overflow-x-auto"><code>import { useState } from 'react';
    export default function App() { const [count, setCount] = useState(0);
    return ( &lt;button onClick={() =&gt; setCount(c =&gt; c + 1)}&gt; Count: {count} &lt;/button&gt;
    ); }</code></pre>
  </div>
</div>
```

<div class="rounded-xl overflow-hidden bg-neutral-900 border border-neutral-700">
  <div class="flex bg-neutral-800">
    <button class="px-4 py-2 text-sm text-neutral-300 bg-neutral-900 border-t-2 border-blue-500">
      App.jsx
    </button>
    <button class="px-4 py-2 text-sm text-neutral-400 hover:text-neutral-200 hover:bg-neutral-700 transition-colors">
      styles.css
    </button>
    <button class="px-4 py-2 text-sm text-neutral-400 hover:text-neutral-200 hover:bg-neutral-700 transition-colors">
      package.json
    </button>
  </div>
  <div class="p-4">
    <pre class="text-sm text-neutral-300 font-mono overflow-x-auto"><code>import { useState } from 'react';
    export default function App() { const [count, setCount] = useState(0);
    return ( &lt;button onClick={() =&gt; setCount(c =&gt; c + 1)}&gt; Count: {count} &lt;/button&gt;
    ); }</code></pre>
  </div>
</div>

### 5. コード差分比較

```markdown
<div class="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
  <div class="flex items-center px-4 py-2 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
    <span class="text-sm font-medium text-gray-700 dark:text-gray-300">src/utils.js</span>
  </div>
  <div class="divide-y divide-gray-100 dark:divide-gray-800">
    <div class="flex">
      <div class="w-12 py-2 px-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm text-right">-</div>
      <div class="flex-1 py-2 px-4 bg-red-50/50 dark:bg-red-900/10 font-mono text-sm text-gray-700 dark:text-gray-300 line-through">
        function oldFunction(x) {
      </div>
    </div>
    <div class="flex">
      <div class="w-12 py-2 px-3 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-sm text-right">+</div>
      <div class="flex-1 py-2 px-4 bg-green-50/50 dark:bg-green-900/10 font-mono text-sm text-gray-700 dark:text-gray-300">
        function newFunction(x, y = 0) {
      </div>
    </div>
    <div class="flex">
      <div class="w-12 py-2 px-3 text-gray-400 text-sm text-right"> </div>
      <div class="flex-1 py-2 px-4 font-mono text-sm text-gray-700 dark:text-gray-300">
        &nbsp;&nbsp;return x * 2;
      </div>
    </div>
    <div class="flex">
      <div class="w-12 py-2 px-3 text-gray-400 text-sm text-right"> </div>
      <div class="flex-1 py-2 px-4 font-mono text-sm text-gray-700 dark:text-gray-300">
        }
      </div>
    </div>
  </div>
</div>
```

<div class="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
  <div class="flex items-center px-4 py-2 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
    <span class="text-sm font-medium text-gray-700 dark:text-gray-300">src/utils.js</span>
  </div>
  <div class="divide-y divide-gray-100 dark:divide-gray-800">
    <div class="flex">
      <div class="w-12 py-2 px-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm text-right">-</div>
      <div class="flex-1 py-2 px-4 bg-red-50/50 dark:bg-red-900/10 font-mono text-sm text-gray-700 dark:text-gray-300 line-through">
        function oldFunction(x) {
      </div>
    </div>
    <div class="flex">
      <div class="w-12 py-2 px-3 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-sm text-right">+</div>
      <div class="flex-1 py-2 px-4 bg-green-50/50 dark:bg-green-900/10 font-mono text-sm text-gray-700 dark:text-gray-300">
        function newFunction(x, y = 0) {
      </div>
    </div>
    <div class="flex">
      <div class="w-12 py-2 px-3 text-gray-400 text-sm text-right"> </div>
      <div class="flex-1 py-2 px-4 font-mono text-sm text-gray-700 dark:text-gray-300">
        &nbsp;&nbsp;return x * 2;
      </div>
    </div>
    <div class="flex">
      <div class="w-12 py-2 px-3 text-gray-400 text-sm text-right"> </div>
      <div class="flex-1 py-2 px-4 font-mono text-sm text-gray-700 dark:text-gray-300">
        }
      </div>
    </div>
  </div>
</div>

### 6. グラデーション枠線コードブロック

```markdown
<div class="p-[2px] rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
  <div class="rounded-xl bg-gray-900 overflow-hidden">
    <div class="flex items-center justify-between px-4 py-2 bg-gray-800/50">
      <span class="text-xs text-gray-400">Python</span>
      <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
    </div>
    <div class="p-4">
      <pre class="text-sm text-gray-300 font-mono"><code>def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)</code></pre>
    </div>
  </div>
</div>
```

<div class="p-[2px] rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
  <div class="rounded-xl bg-gray-900 overflow-hidden">
    <div class="flex items-center justify-between px-4 py-2 bg-gray-800/50">
      <span class="text-xs text-gray-400">Python</span>
      <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
    </div>
    <div class="p-4">
      <pre class="text-sm text-gray-300 font-mono"><code>def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)</code></pre>
    </div>
  </div>
</div>

### 7. ミニマルなインラインコード

```markdown
<div class="bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-2 inline-flex items-center space-x-2">
  <span class="text-purple-600 dark:text-purple-400 font-mono text-sm">npm install</span>
  <span class="text-gray-700 dark:text-gray-300 font-mono text-sm">tailwindcss</span>
  <button class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
  </button>
</div>
```

<div class="bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-2 inline-flex items-center space-x-2">
  <span class="text-purple-600 dark:text-purple-400 font-mono text-sm">npm install</span>
  <span class="text-gray-700 dark:text-gray-300 font-mono text-sm">tailwindcss</span>
  <button class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
  </button>
</div>

## タブコンポーネント

### タブスタイル

```markdown
<div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
  <div class="flex space-x-1 border-b border-gray-200 dark:border-gray-700 mb-4">
    <button class="px-4 py-2 text-sm font-medium text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400">
      概要
    </button>
    <button class="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
      設定
    </button>
    <button class="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
      メンバー
    </button>
  </div>
  <div class="space-y-4">
    <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
      <span class="text-gray-700 dark:text-gray-300">プロジェクト名</span>
      <span class="font-medium text-gray-900 dark:text-white">Yuki</span>
    </div>
    <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
      <span class="text-gray-700 dark:text-gray-300">作成日時</span>
      <span class="font-medium text-gray-900 dark:text-white">2024年1月15日</span>
    </div>
  </div>
</div>
```

<div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
  <div class="flex space-x-1 border-b border-gray-200 dark:border-gray-700 mb-4">
    <button class="px-4 py-2 text-sm font-medium text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400">
      概要
    </button>
    <button class="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
      設定
    </button>
    <button class="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
      メンバー
    </button>
  </div>
  <div class="space-y-4">
    <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
      <span class="text-gray-700 dark:text-gray-300">プロジェクト名</span>
      <span class="font-medium text-gray-900 dark:text-white">Yuki</span>
    </div>
    <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
      <span class="text-gray-700 dark:text-gray-300">作成日時</span>
      <span class="font-medium text-gray-900 dark:text-white">2024年1月15日</span>
    </div>
  </div>
</div>

## よく使う組み合わせ早見表

| 効果             | クラス名                                                                                                       |
| ---------------- | -------------------------------------------------------------------------------------------------------------- |
| 中央配置コンテナ | `max-w-4xl mx-auto px-4`                                                                                       |
| Flex 中央配置    | `flex items-center justify-center`                                                                             |
| カードスタイル   | `bg-white shadow rounded-lg p-6`                                                                               |
| テキストグラデ   | `bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500`                                   |
| ホバー効果       | `hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`                                   |
| 無効状態         | `opacity-50 cursor-not-allowed`                                                                                |
| 丸アバター       | `w-10 h-10 rounded-full object-cover`                                                                          |
| 入力欄           | `w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent` |
