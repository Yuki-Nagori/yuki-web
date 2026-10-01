<script setup lang="ts">
import SiteHeader from '../../components/SiteHeader.vue'
import SiteFooter from '../../components/SiteFooter.vue'
import { showcases } from '../../showcases/registry'
</script>

<template>
  <SiteHeader />
  <main>
    <component :is="showcase.component" v-for="showcase in showcases" :key="showcase.id" />
  </main>
  <SiteFooter id="site-footer" />
</template>
