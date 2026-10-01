<script setup lang="ts">
import { ref } from 'vue'
import SealButton from '../ui/SealButton.vue'
import PaperCard from '../ui/PaperCard.vue'
import FineDivider from '../ui/FineDivider.vue'

const dialog = ref<HTMLDialogElement>()
const saved = ref(false)
const colors = [
  { name: '朱红', value: '#A6322D' },
  { name: '雪白', value: '#F4F0E8' },
]

defineExpose({ open: () => dialog.value?.showModal() })
</script>

<template>
  <dialog ref="dialog" class="winter-gallery" aria-labelledby="winter-gallery-title">
    <div class="winter-gallery__header">
      <div>
        <p class="winter-eyebrow">DESIGN COLLECTION · 001</p>
        <h2 id="winter-gallery-title">朱墙冬梅 · 风格小集</h2>
      </div>
      <SealButton variant="outline" aria-label="关闭风格小集" @click="dialog?.close()"
        >关闭 ×</SealButton
      >
    </div>
    <p class="winter-gallery__intro">一墙朱红，一枝春信。把冬日的颜色与笔意，收进日常的界面。</p>
    <FineDivider />
    <div class="winter-gallery__grid">
      <PaperCard title="朱砂落印" eyebrow="01 / BUTTON">
        <p class="mb-5">方寸之间，留下一枚小小的记号。</p>
        <SealButton :aria-pressed="saved" @click="saved = !saved">
          {{ saved ? '已收进小集 ✓' : '收藏这一枝' }}
        </SealButton>
      </PaperCard>
      <PaperCard title="纸上春信" eyebrow="02 / CARD & TYPE">
        <p>雪压枝头，花开未迟。<br />冬色未尽，已有春信。</p>
        <FineDivider class="my-5" />
        <p class="text-xs">朱墙 · 冬梅 · 北海</p>
      </PaperCard>
      <PaperCard title="朱红与雪白" eyebrow="03 / PALETTE">
        <ul class="winter-palette">
          <li v-for="color in colors" :key="color.value">
            <span :style="{ background: color.value }" class="winter-palette__swatch"></span>
            <span
              >{{ color.name }}<small>{{ color.value }}</small></span
            >
          </li>
        </ul>
      </PaperCard>
    </div>
    <p class="winter-gallery__note">朱墙的温度，冰雪的留白，梅花的生命力。</p>
  </dialog>
</template>

<style scoped>
.winter-gallery {
  width: min(1080px, calc(100% - 3rem));
  max-height: calc(100dvh - 3rem);
  margin: auto;
  padding: clamp(1.25rem, 4vw, 3rem);
  border: 1px solid rgb(99 37 35 / 20%);
  background: var(--wp-snow);
  color: var(--wp-red);
  overflow-y: auto;
}
.winter-gallery::backdrop {
  background: rgb(37 18 17 / 65%);
  backdrop-filter: blur(6px);
}
.winter-gallery__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
.winter-gallery h2 {
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  margin-top: 0.75rem;
}
.winter-gallery__intro {
  margin: 1.5rem 0;
  font-size: 0.9rem;
  line-height: 2;
}
.winter-gallery__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}
.winter-gallery__note {
  margin-top: 2rem;
  font-size: 0.8rem;
  text-align: center;
}
.winter-palette {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.winter-palette li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
}
.winter-palette__swatch {
  width: 1.5rem;
  height: 2.5rem;
  border: 1px solid rgb(52 43 41 / 12%);
}
.winter-palette small {
  display: block;
  font-size: 0.6rem;
  font-family: sans-serif;
}
@media (max-width: 800px) {
  .winter-gallery__grid {
    grid-template-columns: 1fr;
  }
  .winter-gallery__header {
    align-items: flex-start;
  }
  .winter-gallery__header :deep(button) {
    padding: 0.5rem;
    white-space: nowrap;
  }
}
</style>
