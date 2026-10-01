# 朱墙冬梅 · 网站 Logo

状态：已生成并接入网站。

## 设计

朱红印章式底形呼应宫墙，雪白梅枝与盛放的梅花表现冬日生命力。图形不包含文字；页面中以文字
`Yuki` 搭配显示，便于缩小和复用。

使用内置 imagegen 生成透明背景 PNG，保留生成原图，缩放生成网站使用版本。

## 文件与配置

- `public/brand/logo-source.png`：生成原图。
- `public/brand/logo.png`：256 像素 Logo，页面显示尺寸为 48 像素。
- `public/brand/favicon-32.png`、`public/brand/favicon-192.png`：浏览器图标。
- `public/brand/apple-touch-icon.png`：180 像素 Apple 主屏幕图标。
- `src/components/BrandLogo.vue`：Logo 与网站名称的复用组件。
- `src/App.vue`：首页页头接入 Logo。
- `index.html`：图标链接与朱红色浏览器主题色。

## 生成提示词

```text
Use case: logo-brand
Asset type: production website logo symbol, square, also usable as favicon.
Primary request: Design an original refined Chinese classical logo for Yuki personal website, inspired by vermilion Forbidden City palace walls in winter and flowering plum: "在坚冰还盖着北海的时候，我看到了怒放的梅花。"
Subject: a compact vermilion red seal-like rounded square containing an elegant ivory-white plum branch sweeping diagonally upward, one dominant five-petal plum blossom and a small bud, with a restrained touch of snow on the branch.
Style/medium: crisp flat vector-like emblem, minimal graphic silhouette with subtle organic asymmetry, sophisticated contemporary Chinese aesthetic.
Composition/framing: single centered emblem filling 88% of a square canvas, balanced negative space within seal, broad enough branch and simple petals to remain recognizable at 32px; no multiple logo options, no presentation board.
Color palette: vermilion #A6322D and warm snow ivory #F4F0E8, only these two colors.
Scene/backdrop: genuinely transparent background outside the red emblem, keep actual alpha transparency.
Text: no text, no letters, no Chinese characters.
Constraints: no photograph, no mockup, no gradients, no shadow, no 3D, no thin ornamental borders, no watermark, no decorative objects outside logo. Polished standalone brand icon ready for website integration.
```
