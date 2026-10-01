<template>
  <div class="winter-snow" aria-hidden="true">
    <span
      v-for="flake in 18"
      :key="flake"
      :style="{
        left: `${(flake * 37) % 100}%`,
        '--delay': `${-flake * 1.7}s`,
        '--duration': `${12 + (flake % 6) * 3}s`,
        '--size': `${2 + (flake % 3)}px`,
      }"
    ></span>
  </div>
</template>

<style scoped>
.winter-snow {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: -1;
}
.winter-snow span {
  position: absolute;
  top: -12px;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background: #fff8ed;
  opacity: 0.5;
  animation: snow-drift var(--duration) var(--delay) linear infinite;
}
@keyframes snow-drift {
  to {
    transform: translate(45px, 110dvh);
    opacity: 0;
  }
}
@media (prefers-reduced-motion: reduce) {
  .winter-snow {
    display: none;
  }
}
</style>
