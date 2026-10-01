<script setup lang="ts">
withDefaults(defineProps<{ variant?: 'ink' | 'snow' | 'outline' }>(), { variant: 'ink' })
</script>

<template>
  <button type="button" class="winter-button" :class="`winter-button--${variant}`">
    <slot />
  </button>
</template>

<style scoped>
.winter-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  min-height: 48px;
  padding: 0.8rem 1.5rem;
  border: 1px solid transparent;
  font: inherit;
  font-size: 0.9rem;
  letter-spacing: 0.15em;
  cursor: pointer;
  transition:
    background 180ms,
    transform 180ms;
}
.winter-button--ink {
  background: var(--wp-red);
  color: var(--wp-snow);
}
.winter-button--snow {
  background: var(--wp-snow);
  color: var(--wp-wine);
}
.winter-button--outline {
  border-color: currentColor;
  background: transparent;
  color: inherit;
}
.winter-button:hover {
  transform: translateY(-2px);
}
.winter-button:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 5px;
}
.winter-button:disabled {
  opacity: 0.45;
  cursor: not-allowed;
  transform: none;
}
@media (prefers-reduced-motion: reduce) {
  .winter-button {
    transition: none;
  }
  .winter-button:hover {
    transform: none;
  }
}
</style>
