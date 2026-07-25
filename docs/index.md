---
layout: page
---

<script setup>
import { getLangPath } from './.vitepress/utils/lang'

if (typeof window !== 'undefined') {
  const lang = navigator.language || ''
  window.location.replace(getLangPath(lang))
}
</script>

<div style="display:flex;align-items:center;justify-content:center;min-height:60vh">
  <p style="color:var(--vp-c-text-2)">正在跳转… / Redirecting…</p>
</div>
