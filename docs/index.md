---
layout: page
---

<script setup>
if (typeof window !== 'undefined') {
  const lang = navigator.language?.toLowerCase() || ''
  const target = lang.startsWith('zh') ? '/zh/'
    : lang.startsWith('ja') ? '/ja/'
    : lang.startsWith('fr') ? '/fr/'
    : lang.startsWith('ru') ? '/ru/'
    : '/en/'
  window.location.replace(target)
}
</script>

<div style="display:flex;align-items:center;justify-content:center;min-height:60vh">
  <p style="color:var(--vp-c-text-2)">正在跳转… / Redirecting…</p>
</div>
