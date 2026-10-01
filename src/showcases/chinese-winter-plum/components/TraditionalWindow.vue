<script setup lang="ts">
import WinterLake from './WinterLake.vue'
</script>

<template>
  <div class="winter-window">
    <div class="winter-window__opening">
      <WinterLake />
      <div class="winter-window__lattice">
        <span v-for="corner in 4" :key="corner" class="winter-window__key"></span>
      </div>
    </div>
    <div class="winter-window__snow"></div>
  </div>
</template>

<style scoped>
.winter-window {
  position: absolute;
  top: 31%;
  right: 4%;
  width: clamp(245px, 26vw, 390px);
  aspect-ratio: 1;
  --window-cut: 48px;
  --window-mask:
    radial-gradient(
        circle at top left,
        transparent var(--window-cut),
        #000 calc(var(--window-cut) + 1px)
      )
      top left / 51% 51% no-repeat,
    radial-gradient(
        circle at top right,
        transparent var(--window-cut),
        #000 calc(var(--window-cut) + 1px)
      )
      top right / 51% 51% no-repeat,
    radial-gradient(
        circle at bottom left,
        transparent var(--window-cut),
        #000 calc(var(--window-cut) + 1px)
      )
      bottom left / 51% 51% no-repeat,
    radial-gradient(
        circle at bottom right,
        transparent var(--window-cut),
        #000 calc(var(--window-cut) + 1px)
      )
      bottom right / 51% 51% no-repeat;
  mask: var(--window-mask);
  background: var(--wp-snow);
  padding: 7px;
}
.winter-window__opening {
  position: relative;
  height: 100%;
  --window-cut: 42px;
  mask: var(--window-mask);
  overflow: hidden;
  background: var(--wp-red);
}
.winter-window__lattice {
  position: absolute;
  inset: 12%;
  border: 2px solid var(--wp-snow);
}
.winter-window__key {
  position: absolute;
  width: 33%;
  height: 33%;
  border: 2px solid var(--wp-snow);
}
.winter-window__key::before,
.winter-window__key::after {
  content: '';
  position: absolute;
  width: 78%;
  height: 78%;
  border: 2px solid var(--wp-snow);
}
.winter-window__key::before {
  top: 25%;
  left: 25%;
}
.winter-window__key::after {
  top: -25%;
  left: -25%;
}
.winter-window__key:nth-child(1) {
  top: -13%;
  left: -13%;
}
.winter-window__key:nth-child(2) {
  top: -13%;
  right: -13%;
  transform: rotate(90deg);
}
.winter-window__key:nth-child(3) {
  bottom: -13%;
  right: -13%;
  transform: rotate(180deg);
}
.winter-window__key:nth-child(4) {
  bottom: -13%;
  left: -13%;
  transform: rotate(270deg);
}
.winter-window__snow {
  position: absolute;
  top: 0;
  left: 19%;
  width: 62%;
  height: 9px;
  border-radius: 45% 35% 40% 25%;
  background: var(--wp-snow);
}
@media (max-width: 640px) {
  .winter-window {
    top: 18%;
    right: 18px;
    width: 165px;
    padding: 5px;
    --window-cut: 24px;
  }
  .winter-window__opening {
    --window-cut: 20px;
  }
}
</style>
