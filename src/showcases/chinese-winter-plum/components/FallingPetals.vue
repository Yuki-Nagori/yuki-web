<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

interface Petal {
  id: number
  x: number
  y: number
  drift: number
  turn: number
  duration: number
  size: number
}

const petals = ref<Petal[]>([])
const timers = new Map<number, ReturnType<typeof setTimeout>>()
let nextId = 0
let lastTime = -Infinity
let lastPoint: { x: number; y: number } | undefined
let motionPreference: MediaQueryList | undefined

function removePetal(id: number) {
  clearTimeout(timers.get(id))
  timers.delete(id)
  petals.value = petals.value.filter((petal) => petal.id !== id)
}

function clearPetals() {
  timers.forEach(clearTimeout)
  timers.clear()
  petals.value = []
  lastPoint = undefined
}

function scatter(event: PointerEvent) {
  if (event.pointerType !== 'mouse' || motionPreference?.matches || petals.value.length >= 16)
    return
  if ((event.target as Element).closest('dialog')) return
  if (event.timeStamp - lastTime < 140) return
  if (lastPoint && Math.hypot(event.clientX - lastPoint.x, event.clientY - lastPoint.y) < 12) return

  const bounds = (event.currentTarget as HTMLElement).getBoundingClientRect()
  const petal: Petal = {
    id: nextId++,
    x: event.clientX - bounds.left,
    y: event.clientY - bounds.top,
    drift: 25 + Math.random() * 65,
    turn: 60 + Math.random() * 120,
    duration: 3 + Math.random(),
    size: 6 + Math.random() * 4,
  }
  petals.value.push(petal)
  lastTime = event.timeStamp
  lastPoint = { x: event.clientX, y: event.clientY }
  timers.set(
    petal.id,
    setTimeout(() => removePetal(petal.id), petal.duration * 1000 + 100)
  )
}

onMounted(() => {
  motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
  motionPreference.addEventListener('change', clearPetals)
})

onBeforeUnmount(() => {
  clearPetals()
  motionPreference?.removeEventListener('change', clearPetals)
})

defineExpose({ scatter })
</script>

<template>
  <div class="winter-falling-petals" aria-hidden="true">
    <span
      v-for="petal in petals"
      :key="petal.id"
      :style="{
        left: `${petal.x}px`,
        top: `${petal.y}px`,
        '--drift': `${petal.drift}px`,
        '--turn': `${petal.turn}deg`,
        '--duration': `${petal.duration}s`,
        '--petal-size': `${petal.size}px`,
      }"
      @animationend="removePetal(petal.id)"
    ></span>
  </div>
</template>

<style scoped>
.winter-falling-petals {
  position: absolute;
  inset: 0;
  z-index: 2;
  overflow: hidden;
  pointer-events: none;
}
.winter-falling-petals span {
  position: absolute;
  width: var(--petal-size);
  height: calc(var(--petal-size) * 1.35);
  border-radius: 65% 40% 60% 35%;
  background: var(--wp-snow);
  animation: winter-petal-fall var(--duration) ease-out both;
}
@keyframes winter-petal-fall {
  0% {
    opacity: 0;
    transform: translate3d(0, 0, 0) rotate(-20deg);
  }
  12% {
    opacity: 0.28;
  }
  65% {
    opacity: 0.16;
  }
  100% {
    opacity: 0;
    transform: translate3d(var(--drift), 170px, 0) rotate(var(--turn));
  }
}
@media (prefers-reduced-motion: reduce) {
  .winter-falling-petals {
    display: none;
  }
}
</style>
