<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-zinc-200 px-6 py-8 text-center text-sm leading-7 text-zinc-500">
    <p>© {{ year }} Yuki 版权所有</p>
    <a
      href="https://beian.miit.gov.cn"
      target="_blank"
      rel="noopener noreferrer"
      class="rounded-sm hover:text-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-4"
    >
      浙ICP备2026034080号-1
    </a>
  </footer>
</template>
