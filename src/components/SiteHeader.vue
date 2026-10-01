<script setup lang="ts">
import BrandLogo from './BrandLogo.vue'
</script>

<template>
  <header
    class="flex h-20 items-center justify-between gap-6 border-b border-zinc-200 bg-white px-6 font-sans sm:px-12"
  >
    <BrandLogo />
    <nav aria-label="网站导航" class="flex items-center gap-6 text-sm text-zinc-600">
      <a
        href="#chinese-winter-plum"
        class="py-3 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-4"
        >收藏小集</a
      >
    </nav>
  </header>
</template>
