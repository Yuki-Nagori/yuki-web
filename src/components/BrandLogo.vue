<script setup lang="ts">
withDefaults(defineProps<{ tone?: 'dark' | 'light' }>(), { tone: 'dark' })
</script>

<template>
  <a
    href="/"
    aria-label="Yuki 首页"
    class="inline-flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4"
    :class="tone === 'light' ? 'text-[#f4f0e8]' : 'text-[#632523]'"
  >
    <img src="/brand/logo.png" alt="" width="48" height="48" class="size-12" />
    <span class="font-serif text-2xl font-semibold tracking-wide">Yuki</span>
  </a>
</template>
