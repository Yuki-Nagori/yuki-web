<script setup lang="ts">
import TraditionalWindow from './TraditionalWindow.vue'
import PlumBranch from './PlumBranch.vue'
</script>

<template>
  <div class="winter-scene" aria-hidden="true">
    <div class="winter-wall"></div>
    <div class="winter-eaves">
      <div class="winter-eaves__tiles"><span v-for="tile in 32" :key="tile"></span></div>
      <div class="winter-eaves__beam"></div>
    </div>
    <TraditionalWindow />
    <PlumBranch />
    <div class="winter-near-blossoms">
      <div
        v-for="flower in 3"
        :key="flower"
        class="winter-near-blossoms__flower"
        :style="{ left: `${flower * 60}px`, top: `${flower % 2 === 0 ? 65 : 0}px` }"
      >
        <span
          v-for="petal in 5"
          :key="petal"
          :style="{ transform: `rotate(${petal * 72}deg)` }"
        ></span>
        <i></i>
      </div>
    </div>
  </div>
</template>

<style scoped>
.winter-scene {
  position: absolute;
  inset: 0;
  z-index: -2;
  overflow: hidden;
  pointer-events: none;
}
.winter-wall {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 65% 40%, #ae3932, var(--wp-red) 72%);
}
.winter-eaves {
  position: absolute;
  top: 0;
  left: -20px;
  right: -20px;
  opacity: 0.65;
}
.winter-eaves__tiles {
  display: flex;
  height: 43px;
  overflow: hidden;
  border-top: 5px solid var(--wp-snow);
}
.winter-eaves__tiles span {
  position: relative;
  flex: 1 0 55px;
  height: 33px;
  border-left: 2px solid var(--wp-snow);
  border-right: 2px solid var(--wp-snow);
  border-bottom: 2px solid var(--wp-snow);
  border-radius: 0 0 48% 48%;
}
.winter-eaves__tiles span::before {
  content: '';
  position: absolute;
  bottom: 3px;
  left: 6px;
  right: 6px;
  height: 9px;
  border-radius: 50%;
  border: 1px solid var(--wp-snow);
}
.winter-eaves__beam {
  height: 8px;
  border-top: 1px solid var(--wp-snow);
  border-bottom: 1px solid var(--wp-snow);
}
.winter-near-blossoms {
  position: absolute;
  right: -25px;
  bottom: -20px;
  width: 230px;
  height: 170px;
  opacity: 0.14;
  transform: rotate(-22deg);
}
.winter-near-blossoms__flower {
  position: absolute;
  width: 100px;
  height: 100px;
}
.winter-near-blossoms__flower span {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 48%;
  height: 58%;
  transform-origin: 0 0;
}
.winter-near-blossoms__flower span::before {
  content: '';
  position: absolute;
  inset: 0;
  transform: translate(-50%, -90%);
  border-radius: 58% 48% 42% 44%;
  background: var(--wp-snow);
}
.winter-near-blossoms__flower i {
  position: absolute;
  left: 46%;
  top: 46%;
  width: 8%;
  height: 8%;
  border-radius: 50%;
  background: var(--wp-red);
}
@media (max-width: 640px) {
  .winter-eaves__tiles {
    height: 32px;
  }
  .winter-eaves__tiles span {
    height: 26px;
    flex-basis: 40px;
  }
  .winter-near-blossoms {
    right: -80px;
    opacity: 0.1;
  }
}
</style>
