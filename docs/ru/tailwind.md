# Примеры использования Tailwind CSS

## Базовые стили

```markdown
<div class="bg-blue-500 text-white p-4 rounded-lg">
  Синий фон + белый текст + скруглённые углы
</div>
```

<div class="bg-blue-500 text-white p-4 rounded-lg">
  Синий фон + белый текст + скруглённые углы
</div>

## Адаптивная вёрстка

```markdown
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="bg-gray-100 p-4 rounded">Карточка 1</div>
  <div class="bg-gray-100 p-4 rounded">Карточка 2</div>
  <div class="bg-gray-100 p-4 rounded">Карточка 3</div>
</div>
```

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded">Карточка 1</div>
  <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded">Карточка 2</div>
  <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded">Карточка 3</div>
</div>

## Тёмная тема

Используйте префикс `dark:`:

```markdown
<div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 rounded">
  Автоматическая адаптация к светлой/тёмной теме
</div>
```

<div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 rounded">
  Автоматическая адаптация к светлой/тёмной теме
</div>

## Интерактивные состояния

```markdown
<button class="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
  Нажми меня
</button>
```

<button class="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
  Нажми меня
</button>

## Подсказки

```markdown
<div class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 my-4">
  <p class="font-bold text-yellow-800 dark:text-yellow-200">Подсказка</p>
  <p class="text-yellow-700 dark:text-yellow-300">Это информационное сообщение.</p>
</div>
```

<div class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 my-4">
  <p class="font-bold text-yellow-800 dark:text-yellow-200">Подсказка</p>
  <p class="text-yellow-700 dark:text-yellow-300">Это информационное сообщение.</p>
</div>

## Бейджи

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

## Сложные макеты карточек

### Сетка функциональных карточек

```markdown
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  <div class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
    <div class="text-3xl mb-2">🚀</div>
    <h3 class="font-bold text-lg">Быстрый запуск</h3>
    <p class="text-blue-100 text-sm mt-2">Развёртывание в один клик, запуск за секунды</p>
  </div>
  <div class="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
    <div class="text-3xl mb-2">🔒</div>
    <h3 class="font-bold text-lg">Безопасность и надёжность</h3>
    <p class="text-green-100 text-sm mt-2">Безопасность корпоративного уровня</p>
  </div>
  <div class="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
    <div class="text-3xl mb-2">⚡</div>
    <h3 class="font-bold text-lg">Высокая производительность</h3>
    <p class="text-purple-100 text-sm mt-2">Предельная оптимизация производительности</p>
  </div>
  <div class="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
    <div class="text-3xl mb-2">🛠️</div>
    <h3 class="font-bold text-lg">Лёгкая расширяемость</h3>
    <p class="text-orange-100 text-sm mt-2">Гибкий механизм расширения</p>
  </div>
</div>
```

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  <div class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
    <div class="text-3xl mb-2">🚀</div>
    <h3 class="font-bold text-lg">Быстрый запуск</h3>
    <p class="text-blue-100 text-sm mt-2">Развёртывание в один клик, запуск за секунды</p>
  </div>
  <div class="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
    <div class="text-3xl mb-2">🔒</div>
    <h3 class="font-bold text-lg">Безопасность и надёжность</h3>
    <p class="text-green-100 text-sm mt-2">Безопасность корпоративного уровня</p>
  </div>
  <div class="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
    <div class="text-3xl mb-2">⚡</div>
    <h3 class="font-bold text-lg">Высокая производительность</h3>
    <p class="text-purple-100 text-sm mt-2">Предельная оптимизация производительности</p>
  </div>
  <div class="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
    <div class="text-3xl mb-2">🛠️</div>
    <h3 class="font-bold text-lg">Лёгкая расширяемость</h3>
    <p class="text-orange-100 text-sm mt-2">Гибкий механизм расширения</p>
  </div>
</div>

### Карточка с изображением и текстом

```markdown
<div class="max-w-sm bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
  <div class="h-48 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>
  <div class="p-6">
    <div class="flex items-center justify-between mb-4">
      <span class="text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">Feature</span>
      <span class="text-xs text-gray-500 dark:text-gray-400">3 min read</span>
    </div>
    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Интеграция Tailwind CSS</h3>
    <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
      Создание современных интерфейсов с помощью Tailwind CSS v4, с поддержкой тёмной темы, адаптивного дизайна и богатых интерактивных эффектов.
    </p>
    <div class="mt-4 flex items-center space-x-2">
      <div class="h-8 w-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
      <span class="text-sm text-gray-700 dark:text-gray-300">Имя автора</span>
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
    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Интеграция Tailwind CSS</h3>
    <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
      Создание современных интерфейсов с помощью Tailwind CSS v4, с поддержкой тёмной темы, адаптивного дизайна и богатых интерактивных эффектов.
    </p>
    <div class="mt-4 flex items-center space-x-2">
      <div class="h-8 w-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
      <span class="text-sm text-gray-700 dark:text-gray-300">Имя автора</span>
    </div>
  </div>
</div>

## Таблицы данных

### Сложные стили таблиц

```markdown
<div class="overflow-x-auto rounded-xl shadow-lg">
  <table class="w-full text-sm text-left">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th class="px-6 py-4 font-bold">Название проекта</th>
        <th class="px-6 py-4 font-bold">Статус</th>
        <th class="px-6 py-4 font-bold">Прогресс</th>
        <th class="px-6 py-4 font-bold">Ответственный</th>
        <th class="px-6 py-4 font-bold">Действия</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
      <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
        <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">Рефакторинг фронтенда</td>
        <td class="px-6 py-4"><span class="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">В процессе</span></td>
        <td class="px-6 py-4">
          <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div class="bg-blue-600 h-2.5 rounded-full" style="width: 75%"></div>
          </div>
        </td>
        <td class="px-6 py-4 text-gray-600 dark:text-gray-300">John</td>
        <td class="px-6 py-4"><button class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Редактировать</button></td>
      </tr>
      <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
        <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">Разработка API</td>
        <td class="px-6 py-4"><span class="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">На проверке</span></td>
        <td class="px-6 py-4">
          <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div class="bg-yellow-500 h-2.5 rounded-full" style="width: 45%"></div>
          </div>
        </td>
        <td class="px-6 py-4 text-gray-600 dark:text-gray-300">Jane</td>
        <td class="px-6 py-4"><button class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Редактировать</button></td>
      </tr>
    </tbody>
  </table>
</div>
```

<div class="overflow-x-auto rounded-xl shadow-lg">
  <table class="w-full text-sm text-left">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th class="px-6 py-4 font-bold">Название проекта</th>
        <th class="px-6 py-4 font-bold">Статус</th>
        <th class="px-6 py-4 font-bold">Прогресс</th>
        <th class="px-6 py-4 font-bold">Ответственный</th>
        <th class="px-6 py-4 font-bold">Действия</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
      <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
        <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">Рефакторинг фронтенда</td>
        <td class="px-6 py-4"><span class="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">В процессе</span></td>
        <td class="px-6 py-4">
          <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div class="bg-blue-600 h-2.5 rounded-full" style="width: 75%"></div>
          </div>
        </td>
        <td class="px-6 py-4 text-gray-600 dark:text-gray-300">John</td>
        <td class="px-6 py-4"><button class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Редактировать</button></td>
      </tr>
      <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
        <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">Разработка API</td>
        <td class="px-6 py-4"><span class="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">На проверке</span></td>
        <td class="px-6 py-4">
          <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div class="bg-yellow-500 h-2.5 rounded-full" style="width: 45%"></div>
          </div>
        </td>
        <td class="px-6 py-4 text-gray-600 dark:text-gray-300">Jane</td>
        <td class="px-6 py-4"><button class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Редактировать</button></td>
      </tr>
    </tbody>
  </table>
</div>

## Панель статистики

### Панель показателей

```markdown
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
    <div class="flex items-center justify-between">
      <div>
        <p class="text-sm text-gray-500 dark:text-gray-400">Всего пользователей</p>
        <p class="text-3xl font-bold text-gray-900 dark:text-white mt-1">12,345</p>
        <p class="text-sm text-green-500 mt-2 flex items-center">
          <span>↑ 12%</span>
          <span class="text-gray-400 ml-1">по сравнению с прошлым месяцем</span>
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
        <p class="text-sm text-gray-500 dark:text-gray-400">Доход</p>
        <p class="text-3xl font-bold text-gray-900 dark:text-white mt-1">¥89,420</p>
        <p class="text-sm text-green-500 mt-2 flex items-center">
          <span>↑ 8%</span>
          <span class="text-gray-400 ml-1">по сравнению с прошлым месяцем</span>
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
        <p class="text-sm text-gray-500 dark:text-gray-400">Количество заказов</p>
        <p class="text-3xl font-bold text-gray-900 dark:text-white mt-1">2,847</p>
        <p class="text-sm text-red-500 mt-2 flex items-center">
          <span>↓ 3%</span>
          <span class="text-gray-400 ml-1">по сравнению с прошлым месяцем</span>
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
        <p class="text-sm text-gray-500 dark:text-gray-400">Всего пользователей</p>
        <p class="text-3xl font-bold text-gray-900 dark:text-white mt-1">12,345</p>
        <p class="text-sm text-green-500 mt-2 flex items-center">
          <span>↑ 12%</span>
          <span class="text-gray-400 ml-1">по сравнению с прошлым месяцем</span>
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
        <p class="text-sm text-gray-500 dark:text-gray-400">Доход</p>
        <p class="text-3xl font-bold text-gray-900 dark:text-white mt-1">¥89,420</p>
        <p class="text-sm text-green-500 mt-2 flex items-center">
          <span>↑ 8%</span>
          <span class="text-gray-400 ml-1">по сравнению с прошлым месяцем</span>
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
        <p class="text-sm text-gray-500 dark:text-gray-400">Количество заказов</p>
        <p class="text-3xl font-bold text-gray-900 dark:text-white mt-1">2,847</p>
        <p class="text-sm text-red-500 mt-2 flex items-center">
          <span>↓ 3%</span>
          <span class="text-gray-400 ml-1">по сравнению с прошлым месяцем</span>
        </p>
      </div>
      <div class="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
        <span class="text-2xl">📦</span>
      </div>
    </div>
  </div>
</div>

## Хронология

### Вертикальная хронология

```markdown
<div class="relative border-l-2 border-gray-200 dark:border-gray-700 ml-4 space-y-8">
  <div class="relative pl-8">
    <div class="absolute -left-2.5 top-1 w-5 h-5 rounded-full bg-blue-500 border-4 border-white dark:border-gray-800"></div>
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <h4 class="text-lg font-semibold text-gray-900 dark:text-white">Запуск проекта</h4>
      <span class="text-sm text-gray-500 dark:text-gray-400">Январь 2024</span>
    </div>
    <p class="text-gray-600 dark:text-gray-300 mt-2">Определение целей и объёма проекта, формирование основной команды.</p>
  </div>
  <div class="relative pl-8">
    <div class="absolute -left-2.5 top-1 w-5 h-5 rounded-full bg-green-500 border-4 border-white dark:border-gray-800"></div>
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <h4 class="text-lg font-semibold text-gray-900 dark:text-white">Прототипирование</h4>
      <span class="text-sm text-gray-500 dark:text-gray-400">Февраль 2024</span>
    </div>
    <p class="text-gray-600 dark:text-gray-300 mt-2">Завершение прототипирования продукта и пользовательских исследований.</p>
  </div>
  <div class="relative pl-8">
    <div class="absolute -left-2.5 top-1 w-5 h-5 rounded-full bg-purple-500 border-4 border-white dark:border-gray-800"></div>
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <h4 class="text-lg font-semibold text-gray-900 dark:text-white">Этап разработки</h4>
      <span class="text-sm text-gray-500 dark:text-gray-400">Март-Май 2024</span>
    </div>
    <p class="text-gray-600 dark:text-gray-300 mt-2">Параллельная разработка фронтенда и бэкенда, завершение основных функций.</p>
  </div>
</div>
```

<div class="relative border-l-2 border-gray-200 dark:border-gray-700 ml-4 space-y-8">
  <div class="relative pl-8">
    <div class="absolute -left-2.5 top-1 w-5 h-5 rounded-full bg-blue-500 border-4 border-white dark:border-gray-800"></div>
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <h4 class="text-lg font-semibold text-gray-900 dark:text-white">Запуск проекта</h4>
      <span class="text-sm text-gray-500 dark:text-gray-400">Январь 2024</span>
    </div>
    <p class="text-gray-600 dark:text-gray-300 mt-2">Определение целей и объёма проекта, формирование основной команды.</p>
  </div>
  <div class="relative pl-8">
    <div class="absolute -left-2.5 top-1 w-5 h-5 rounded-full bg-green-500 border-4 border-white dark:border-gray-800"></div>
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <h4 class="text-lg font-semibold text-gray-900 dark:text-white">Прототипирование</h4>
      <span class="text-sm text-gray-500 dark:text-gray-400">Февраль 2024</span>
    </div>
    <p class="text-gray-600 dark:text-gray-300 mt-2">Завершение прототипирования продукта и пользовательских исследований.</p>
  </div>
  <div class="relative pl-8">
    <div class="absolute -left-2.5 top-1 w-5 h-5 rounded-full bg-purple-500 border-4 border-white dark:border-gray-800"></div>
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <h4 class="text-lg font-semibold text-gray-900 dark:text-white">Этап разработки</h4>
      <span class="text-sm text-gray-500 dark:text-gray-400">Март-Май 2024</span>
    </div>
    <p class="text-gray-600 dark:text-gray-300 mt-2">Параллельная разработка фронтенда и бэкенда, завершение основных функций.</p>
  </div>
</div>

## Стили блоков кода

### 1. Окно в стиле macOS

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

### 2. Блок кода с меткой языка

```markdown
<div class="rounded-lg overflow-hidden bg-slate-900">
  <div class="flex items-center justify-between px-4 py-2 bg-slate-800">
    <span class="text-xs font-semibold text-blue-400 uppercase">JavaScript</span>
    <button class="text-xs text-slate-400 hover:text-white transition-colors">Копировать</button>
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
    <button class="text-xs text-slate-400 hover:text-white transition-colors">Копировать</button>
  </div>
  <div class="p-4 overflow-x-auto">
    <pre class="text-sm text-slate-300 font-mono"><code>const fibonacci = (n) =&gt; {
  if (n &lt;= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};
console.log(fibonacci(10)); // 55</code></pre>
  </div>
</div>

### 3. Блок кода с номерами строк

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

### 4. Вкладки для нескольких файлов

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

### 5. Сравнение различий кода

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

### 6. Блок кода с градиентной рамкой

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

### 7. Минималистичный встроенный код

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

## Компонент вкладок

### Стили вкладок

```markdown
<div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
  <div class="flex space-x-1 border-b border-gray-200 dark:border-gray-700 mb-4">
    <button class="px-4 py-2 text-sm font-medium text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400">
      Обзор
    </button>
    <button class="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
      Настройки
    </button>
    <button class="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
      Участники
    </button>
  </div>
  <div class="space-y-4">
    <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
      <span class="text-gray-700 dark:text-gray-300">Название проекта</span>
      <span class="font-medium text-gray-900 dark:text-white">Yuki</span>
    </div>
    <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
      <span class="text-gray-700 dark:text-gray-300">Дата создания</span>
      <span class="font-medium text-gray-900 dark:text-white">15 января 2024</span>
    </div>
  </div>
</div>
```

<div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
  <div class="flex space-x-1 border-b border-gray-200 dark:border-gray-700 mb-4">
    <button class="px-4 py-2 text-sm font-medium text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400">
      Обзор
    </button>
    <button class="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
      Настройки
    </button>
    <button class="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
      Участники
    </button>
  </div>
  <div class="space-y-4">
    <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
      <span class="text-gray-700 dark:text-gray-300">Название проекта</span>
      <span class="font-medium text-gray-900 dark:text-white">Yuki</span>
    </div>
    <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
      <span class="text-gray-700 dark:text-gray-300">Дата создания</span>
      <span class="font-medium text-gray-900 dark:text-white">15 января 2024</span>
    </div>
  </div>
</div>

## Быстрый справочник

| Эффект                 | Классы                                                                                                         |
| ---------------------- | -------------------------------------------------------------------------------------------------------------- |
| Центрирующий контейнер | `max-w-4xl mx-auto px-4`                                                                                       |
| Flex центрирование     | `flex items-center justify-center`                                                                             |
| Стиль карточки         | `bg-white shadow rounded-lg p-6`                                                                               |
| Градиент текста        | `bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500`                                   |
| Эффект при наведении   | `hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`                                   |
| Отключённое состояние  | `opacity-50 cursor-not-allowed`                                                                                |
| Круглый аватар         | `w-10 h-10 rounded-full object-cover`                                                                          |
| Стиль поля ввода       | `w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent` |
