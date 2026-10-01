export default {
  // 基础配置
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  trailingComma: 'es5',
  printWidth: 100,
  endOfLine: 'lf',

  // 引号偏好
  quoteProps: 'as-needed',
  jsxSingleQuote: true,

  // 括号
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',

  // 空格
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'css',
  vueIndentScriptAndStyle: false,

  // 嵌入代码
  embeddedLanguageFormatting: 'auto',

  // 文件类型覆盖
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 80,
      },
    },
    {
      files: '*.md',
      options: {
        proseWrap: 'always',
        printWidth: 80,
      },
    },
    {
      files: '*.yml',
      options: {
        singleQuote: false,
      },
    },
  ],
}
