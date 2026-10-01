<template>
  <div class="winter-divider" aria-hidden="true"><span>❀</span></div>
</template>

<style scoped>
.winter-divider {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--wp-red);
}
.winter-divider::before,
.winter-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: currentColor;
  opacity: 0.25;
}
</style>
