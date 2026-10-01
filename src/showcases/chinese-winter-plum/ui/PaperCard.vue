<script setup lang="ts">
defineProps<{ title: string; eyebrow?: string }>()
</script>

<template>
  <section class="winter-paper">
    <p v-if="eyebrow" class="winter-paper__eyebrow">{{ eyebrow }}</p>
    <h3>{{ title }}</h3>
    <div class="winter-paper__content"><slot /></div>
  </section>
</template>

<style scoped>
.winter-paper {
  padding: 1.75rem;
  border: 1px solid rgb(99 37 35 / 16%);
  background: var(--wp-snow);
  color: var(--wp-red);
}
.winter-paper__eyebrow {
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  color: var(--wp-red);
  margin-bottom: 1.25rem;
}
.winter-paper h3 {
  font-size: 1.4rem;
  margin-bottom: 1.25rem;
}
.winter-paper__content {
  font-size: 0.9rem;
  line-height: 2;
}
</style>
