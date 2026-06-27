# Tailwind CSS 使用示例

## 基础样式

```markdown
<div class="bg-blue-500 text-white p-4 rounded-lg">
  蓝色背景 + 白色文字 + 圆角
</div>
```

<div class="bg-blue-500 text-white p-4 rounded-lg">
  蓝色背景 + 白色文字 + 圆角
</div>

## 响应式布局

```markdown
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="bg-gray-100 p-4 rounded">卡片 1</div>
  <div class="bg-gray-100 p-4 rounded">卡片 2</div>
  <div class="bg-gray-100 p-4 rounded">卡片 3</div>
</div>
```

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded">卡片 1</div>
  <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded">卡片 2</div>
  <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded">卡片 3</div>
</div>

## 暗黑模式

使用 `dark:` 前缀：

```markdown
<div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 rounded">
  自动适配浅色/深色模式
</div>
```

<div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 rounded">
  自动适配浅色/深色模式
</div>

## 交互状态

```markdown
<button class="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
  点击我
</button>
```

<button class="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
  点击我
</button>

## 提示框

```markdown
<div class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 my-4">
  <p class="font-bold text-yellow-800 dark:text-yellow-200">提示</p>
  <p class="text-yellow-700 dark:text-yellow-300">这是一个提示信息。</p>
</div>
```

<div class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 my-4">
  <p class="font-bold text-yellow-800 dark:text-yellow-200">提示</p>
  <p class="text-yellow-700 dark:text-yellow-300">这是一个提示信息。</p>
</div>

## 徽章

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

## 复杂卡片布局

### 功能卡片网格

```markdown
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  <div class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
    <div class="text-3xl mb-2">🚀</div>
    <h3 class="font-bold text-lg">快速启动</h3>
    <p class="text-blue-100 text-sm mt-2">一键部署，秒级启动</p>
  </div>
  <div class="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
    <div class="text-3xl mb-2">🔒</div>
    <h3 class="font-bold text-lg">安全可靠</h3>
    <p class="text-green-100 text-sm mt-2">企业级安全保障</p>
  </div>
  <div class="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
    <div class="text-3xl mb-2">⚡</div>
    <h3 class="font-bold text-lg">高性能</h3>
    <p class="text-purple-100 text-sm mt-2">极致性能优化</p>
  </div>
  <div class="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
    <div class="text-3xl mb-2">🛠️</div>
    <h3 class="font-bold text-lg">易扩展</h3>
    <p class="text-orange-100 text-sm mt-2">灵活扩展机制</p>
  </div>
</div>
```

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  <div class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
    <div class="text-3xl mb-2">🚀</div>
    <h3 class="font-bold text-lg">快速启动</h3>
    <p class="text-blue-100 text-sm mt-2">一键部署，秒级启动</p>
  </div>
  <div class="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
    <div class="text-3xl mb-2">🔒</div>
    <h3 class="font-bold text-lg">安全可靠</h3>
    <p class="text-green-100 text-sm mt-2">企业级安全保障</p>
  </div>
  <div class="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
    <div class="text-3xl mb-2">⚡</div>
    <h3 class="font-bold text-lg">高性能</h3>
    <p class="text-purple-100 text-sm mt-2">极致性能优化</p>
  </div>
  <div class="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
    <div class="text-3xl mb-2">🛠️</div>
    <h3 class="font-bold text-lg">易扩展</h3>
    <p class="text-orange-100 text-sm mt-2">灵活扩展机制</p>
  </div>
</div>

### 图文卡片

```markdown
<div class="max-w-sm bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
  <div class="h-48 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>
  <div class="p-6">
    <div class="flex items-center justify-between mb-4">
      <span class="text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">Feature</span>
      <span class="text-xs text-gray-500 dark:text-gray-400">3 min read</span>
    </div>
    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Tailwind CSS 集成</h3>
    <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
      使用 Tailwind CSS v4 构建现代化界面，支持暗黑模式、响应式设计和丰富的交互效果。
    </p>
    <div class="mt-4 flex items-center space-x-2">
      <div class="h-8 w-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
      <span class="text-sm text-gray-700 dark:text-gray-300">作者名称</span>
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
    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Tailwind CSS 集成</h3>
    <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
      使用 Tailwind CSS v4 构建现代化界面，支持暗黑模式、响应式设计和丰富的交互效果。
    </p>
    <div class="mt-4 flex items-center space-x-2">
      <div class="h-8 w-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
      <span class="text-sm text-gray-700 dark:text-gray-300">作者名称</span>
    </div>
  </div>
</div>

## 数据表格

### 复杂表格样式

```markdown
<div class="overflow-x-auto rounded-xl shadow-lg">
  <table class="w-full text-sm text-left">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th class="px-6 py-4 font-bold">项目名称</th>
        <th class="px-6 py-4 font-bold">状态</th>
        <th class="px-6 py-4 font-bold">进度</th>
        <th class="px-6 py-4 font-bold">负责人</th>
        <th class="px-6 py-4 font-bold">操作</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
      <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
        <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">前端重构</td>
        <td class="px-6 py-4"><span class="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">进行中</span></td>
        <td class="px-6 py-4">
          <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div class="bg-blue-600 h-2.5 rounded-full" style="width: 75%"></div>
          </div>
        </td>
        <td class="px-6 py-4 text-gray-600 dark:text-gray-300">张三</td>
        <td class="px-6 py-4"><button class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">编辑</button></td>
      </tr>
      <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
        <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">API 开发</td>
        <td class="px-6 py-4"><span class="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">待审核</span></td>
        <td class="px-6 py-4">
          <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div class="bg-yellow-500 h-2.5 rounded-full" style="width: 45%"></div>
          </div>
        </td>
        <td class="px-6 py-4 text-gray-600 dark:text-gray-300">李四</td>
        <td class="px-6 py-4"><button class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">编辑</button></td>
      </tr>
    </tbody>
  </table>
</div>
```

<div class="overflow-x-auto rounded-xl shadow-lg">
  <table class="w-full text-sm text-left">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th class="px-6 py-4 font-bold">项目名称</th>
        <th class="px-6 py-4 font-bold">状态</th>
        <th class="px-6 py-4 font-bold">进度</th>
        <th class="px-6 py-4 font-bold">负责人</th>
        <th class="px-6 py-4 font-bold">操作</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
      <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
        <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">前端重构</td>
        <td class="px-6 py-4"><span class="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">进行中</span></td>
        <td class="px-6 py-4">
          <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div class="bg-blue-600 h-2.5 rounded-full" style="width: 75%"></div>
          </div>
        </td>
        <td class="px-6 py-4 text-gray-600 dark:text-gray-300">张三</td>
        <td class="px-6 py-4"><button class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">编辑</button></td>
      </tr>
      <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
        <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">API 开发</td>
        <td class="px-6 py-4"><span class="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">待审核</span></td>
        <td class="px-6 py-4">
          <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div class="bg-yellow-500 h-2.5 rounded-full" style="width: 45%"></div>
          </div>
        </td>
        <td class="px-6 py-4 text-gray-600 dark:text-gray-300">李四</td>
        <td class="px-6 py-4"><button class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">编辑</button></td>
      </tr>
    </tbody>
  </table>
</div>

## 统计面板

### 数据仪表板

```markdown
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
    <div class="flex items-center justify-between">
      <div>
        <p class="text-sm text-gray-500 dark:text-gray-400">总用户数</p>
        <p class="text-3xl font-bold text-gray-900 dark:text-white mt-1">12,345</p>
        <p class="text-sm text-green-500 mt-2 flex items-center">
          <span>↑ 12%</span>
          <span class="text-gray-400 ml-1">较上月</span>
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
        <p class="text-sm text-gray-500 dark:text-gray-400">收入</p>
        <p class="text-3xl font-bold text-gray-900 dark:text-white mt-1">¥89,420</p>
        <p class="text-sm text-green-500 mt-2 flex items-center">
          <span>↑ 8%</span>
          <span class="text-gray-400 ml-1">较上月</span>
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
        <p class="text-sm text-gray-500 dark:text-gray-400">订单量</p>
        <p class="text-3xl font-bold text-gray-900 dark:text-white mt-1">2,847</p>
        <p class="text-sm text-red-500 mt-2 flex items-center">
          <span>↓ 3%</span>
          <span class="text-gray-400 ml-1">较上月</span>
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
        <p class="text-sm text-gray-500 dark:text-gray-400">总用户数</p>
        <p class="text-3xl font-bold text-gray-900 dark:text-white mt-1">12,345</p>
        <p class="text-sm text-green-500 mt-2 flex items-center">
          <span>↑ 12%</span>
          <span class="text-gray-400 ml-1">较上月</span>
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
        <p class="text-sm text-gray-500 dark:text-gray-400">收入</p>
        <p class="text-3xl font-bold text-gray-900 dark:text-white mt-1">¥89,420</p>
        <p class="text-sm text-green-500 mt-2 flex items-center">
          <span>↑ 8%</span>
          <span class="text-gray-400 ml-1">较上月</span>
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
        <p class="text-sm text-gray-500 dark:text-gray-400">订单量</p>
        <p class="text-3xl font-bold text-gray-900 dark:text-white mt-1">2,847</p>
        <p class="text-sm text-red-500 mt-2 flex items-center">
          <span>↓ 3%</span>
          <span class="text-gray-400 ml-1">较上月</span>
        </p>
      </div>
      <div class="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
        <span class="text-2xl">📦</span>
      </div>
    </div>
  </div>
</div>

## 时间线

### 垂直时间线

```markdown
<div class="relative border-l-2 border-gray-200 dark:border-gray-700 ml-4 space-y-8">
  <div class="relative pl-8">
    <div class="absolute -left-2.5 top-1 w-5 h-5 rounded-full bg-blue-500 border-4 border-white dark:border-gray-800"></div>
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <h4 class="text-lg font-semibold text-gray-900 dark:text-white">项目启动</h4>
      <span class="text-sm text-gray-500 dark:text-gray-400">2024年1月</span>
    </div>
    <p class="text-gray-600 dark:text-gray-300 mt-2">确定项目目标和范围，组建核心团队。</p>
  </div>
  <div class="relative pl-8">
    <div class="absolute -left-2.5 top-1 w-5 h-5 rounded-full bg-green-500 border-4 border-white dark:border-gray-800"></div>
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <h4 class="text-lg font-semibold text-gray-900 dark:text-white">原型设计</h4>
      <span class="text-sm text-gray-500 dark:text-gray-400">2024年2月</span>
    </div>
    <p class="text-gray-600 dark:text-gray-300 mt-2">完成产品原型设计和用户调研。</p>
  </div>
  <div class="relative pl-8">
    <div class="absolute -left-2.5 top-1 w-5 h-5 rounded-full bg-purple-500 border-4 border-white dark:border-gray-800"></div>
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <h4 class="text-lg font-semibold text-gray-900 dark:text-white">开发阶段</h4>
      <span class="text-sm text-gray-500 dark:text-gray-400">2024年3-5月</span>
    </div>
    <p class="text-gray-600 dark:text-gray-300 mt-2">前端和后端并行开发，完成核心功能。</p>
  </div>
</div>
```

<div class="relative border-l-2 border-gray-200 dark:border-gray-700 ml-4 space-y-8">
  <div class="relative pl-8">
    <div class="absolute -left-2.5 top-1 w-5 h-5 rounded-full bg-blue-500 border-4 border-white dark:border-gray-800"></div>
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <h4 class="text-lg font-semibold text-gray-900 dark:text-white">项目启动</h4>
      <span class="text-sm text-gray-500 dark:text-gray-400">2024年1月</span>
    </div>
    <p class="text-gray-600 dark:text-gray-300 mt-2">确定项目目标和范围，组建核心团队。</p>
  </div>
  <div class="relative pl-8">
    <div class="absolute -left-2.5 top-1 w-5 h-5 rounded-full bg-green-500 border-4 border-white dark:border-gray-800"></div>
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <h4 class="text-lg font-semibold text-gray-900 dark:text-white">原型设计</h4>
      <span class="text-sm text-gray-500 dark:text-gray-400">2024年2月</span>
    </div>
    <p class="text-gray-600 dark:text-gray-300 mt-2">完成产品原型设计和用户调研。</p>
  </div>
  <div class="relative pl-8">
    <div class="absolute -left-2.5 top-1 w-5 h-5 rounded-full bg-purple-500 border-4 border-white dark:border-gray-800"></div>
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <h4 class="text-lg font-semibold text-gray-900 dark:text-white">开发阶段</h4>
      <span class="text-sm text-gray-500 dark:text-gray-400">2024年3-5月</span>
    </div>
    <p class="text-gray-600 dark:text-gray-300 mt-2">前端和后端并行开发，完成核心功能。</p>
  </div>
</div>

## 代码块样式

### 1. macOS 风格窗口

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

### 2. 带语言标签的代码块

```markdown
<div class="rounded-lg overflow-hidden bg-slate-900">
  <div class="flex items-center justify-between px-4 py-2 bg-slate-800">
    <span class="text-xs font-semibold text-blue-400 uppercase">JavaScript</span>
    <button class="text-xs text-slate-400 hover:text-white transition-colors">复制</button>
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
    <button class="text-xs text-slate-400 hover:text-white transition-colors">复制</button>
  </div>
  <div class="p-4 overflow-x-auto">
    <pre class="text-sm text-slate-300 font-mono"><code>const fibonacci = (n) =&gt; {
  if (n &lt;= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};
console.log(fibonacci(10)); // 55</code></pre>
  </div>
</div>

### 3. 带行号的代码块

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

### 4. 多文件标签页

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

### 5. 代码差异对比

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

### 6. 渐变色边框代码块

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

### 7. 极简内联代码

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

## 标签页组件

### 选项卡样式

```markdown
<div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
  <div class="flex space-x-1 border-b border-gray-200 dark:border-gray-700 mb-4">
    <button class="px-4 py-2 text-sm font-medium text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400">
      概览
    </button>
    <button class="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
      设置
    </button>
    <button class="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
      成员
    </button>
  </div>
  <div class="space-y-4">
    <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
      <span class="text-gray-700 dark:text-gray-300">项目名称</span>
      <span class="font-medium text-gray-900 dark:text-white">Yuki</span>
    </div>
    <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
      <span class="text-gray-700 dark:text-gray-300">创建时间</span>
      <span class="font-medium text-gray-900 dark:text-white">2024年1月15日</span>
    </div>
  </div>
</div>
```

<div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
  <div class="flex space-x-1 border-b border-gray-200 dark:border-gray-700 mb-4">
    <button class="px-4 py-2 text-sm font-medium text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400">
      概览
    </button>
    <button class="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
      设置
    </button>
    <button class="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
      成员
    </button>
  </div>
  <div class="space-y-4">
    <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
      <span class="text-gray-700 dark:text-gray-300">项目名称</span>
      <span class="font-medium text-gray-900 dark:text-white">Yuki</span>
    </div>
    <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
      <span class="text-gray-700 dark:text-gray-300">创建时间</span>
      <span class="font-medium text-gray-900 dark:text-white">2024年1月15日</span>
    </div>
  </div>
</div>

## 常用组合速查

| 效果       | 类名                                                                                                           |
| ---------- | -------------------------------------------------------------------------------------------------------------- |
| 居中容器   | `max-w-4xl mx-auto px-4`                                                                                       |
| Flex 居中  | `flex items-center justify-center`                                                                             |
| 卡片样式   | `bg-white shadow rounded-lg p-6`                                                                               |
| 文字渐变   | `bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500`                                   |
| 悬浮效果   | `hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`                                   |
| 禁用状态   | `opacity-50 cursor-not-allowed`                                                                                |
| 圆形头像   | `w-10 h-10 rounded-full object-cover`                                                                          |
| 输入框样式 | `w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent` |
