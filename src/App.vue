<script setup lang="ts">
import BrandLogo from './components/BrandLogo.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <div class="flex min-h-dvh flex-col bg-white text-zinc-900">
    <header class="mx-auto w-full max-w-5xl px-6 py-6">
      <BrandLogo />
    </header>
    <main class="mx-auto flex w-full max-w-5xl flex-1 items-center px-6 py-24">
      <div>
        <h1 class="text-5xl font-semibold tracking-tight">Yuki</h1>
        <p class="mt-4 text-base text-zinc-500">记录学习与创作的小角落。</p>
      </div>
    </main>
    <SiteFooter />
  </div>
</template>
