<script setup lang="ts">
const flowers = [
  [50, 82],
  [100, 182],
  [178, 326],
  [279, 498],
  [245, 286],
  [65, 192],
  [88, 408],
  [198, 480],
  [293, 322],
  [39, 61],
  [114, 110],
]
</script>

<template>
  <div class="winter-plum-branch">
    <div class="winter-plum-branch__wood"></div>
    <div
      v-for="(flower, index) in flowers"
      :key="`flower-${index}`"
      class="winter-plum-branch__flower"
      :class="{ 'winter-plum-branch__flower--bud': index % 6 === 1 }"
      :style="{
        left: `${(flower[0]! / 420) * 100}%`,
        top: `${(flower[1]! / 620) * 100}%`,
        '--flower-size': `${52 + (index % 4) * 8}px`,
        transform: `rotate(${index * 37}deg) scaleY(${index % 3 === 0 ? 0.75 : 1})`,
      }"
    >
      <span
        v-for="petal in 5"
        :key="`petal-${petal}`"
        class="winter-plum-branch__petal"
        :style="{ transform: `rotate(${petal * 72 + (index % 3) * 4}deg)` }"
      ></span>
      <span
        v-for="stamen in 11"
        :key="`stamen-${stamen}`"
        class="winter-plum-branch__stamen"
        :style="{
          transform: `rotate(${stamen * 29 + 16}deg)`,
          height: `${23 + (stamen % 4) * 4}%`,
        }"
      ></span>
      <i class="winter-plum-branch__heart"></i>
    </div>
  </div>
</template>

<style scoped>
.winter-plum-branch {
  position: absolute;
  top: -520px;
  right: -65px;
  width: 420px;
  height: 620px;
  transform-origin: bottom right;
  transform: rotate(-48deg);
}
.winter-plum-branch__wood {
  position: absolute;
  inset: 0;
  clip-path: path(
    'M 350 620 C 310 557 267 489 236 437 C 197 375 158 300 132 239 C 105 176 89 113 48 75 L 53 72 C 97 106 114 175 143 233 C 174 296 208 367 249 429 C 290 487 330 548 371 620 Z M 244 446 C 203 413 203 349 232 291 C 241 273 248 262 253 254 L 256 255 C 243 285 230 315 225 346 C 220 386 231 415 251 441 Z M 180 337 C 140 310 112 283 92 251 C 81 234 70 213 63 189 L 67 191 C 81 220 98 244 117 265 C 142 293 165 308 188 326 Z M 287 512 C 226 498 179 485 134 465 C 111 453 95 433 85 405 L 89 406 C 105 433 125 448 153 458 C 191 471 238 486 293 504 Z M 230 405 C 257 373 275 351 294 319 L 297 320 C 283 356 259 384 238 411 Z M 91 160 C 105 141 110 124 113 107 L 115 107 C 116 128 108 151 96 173 Z M 55 94 C 44 83 39 71 37 59 L 40 59 C 45 72 52 80 63 84 Z'
  );
  background: var(--wp-snow);
}
.winter-plum-branch__flower {
  position: absolute;
  width: var(--flower-size);
  height: var(--flower-size);
  margin: calc(var(--flower-size) * -0.5);
}
.winter-plum-branch__petal {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 48%;
  height: 58%;
  transform-origin: 0 0;
}
.winter-plum-branch__petal::before {
  content: '';
  position: absolute;
  inset: 0;
  transform: translate(-50%, -90%);
  border-radius: 58% 48% 42% 44%;
  background: var(--wp-snow);
}
.winter-plum-branch__stamen {
  position: absolute;
  bottom: 48%;
  left: 50%;
  width: 1.5px;
  transform-origin: bottom center;
  background: var(--wp-red);
}
.winter-plum-branch__stamen::after {
  content: '';
  position: absolute;
  left: -1.5px;
  top: -2px;
  width: 4.5px;
  height: 4.5px;
  border-radius: 45%;
  background: var(--wp-red);
}
.winter-plum-branch__heart {
  position: absolute;
  top: 44%;
  left: 45%;
  width: 12%;
  height: 12%;
  border-radius: 50%;
  background: var(--wp-red);
}
.winter-plum-branch__flower--bud :is(.winter-plum-branch__petal, .winter-plum-branch__stamen) {
  display: none;
}
.winter-plum-branch__flower--bud .winter-plum-branch__heart {
  width: 26%;
  height: 42%;
  border-radius: 55% 45% 50% 35%;
  background: var(--wp-snow);
}
@media (max-width: 640px) {
  .winter-plum-branch {
    top: -460px;
    right: -65px;
    transform: rotate(-48deg) scale(0.65);
  }
}
</style>
