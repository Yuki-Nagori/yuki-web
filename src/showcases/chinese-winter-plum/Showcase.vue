<script setup lang="ts">
import { ref } from 'vue'
import WinterScene from './components/WinterScene.vue'
import Snowfall from './components/Snowfall.vue'
import FallingPetals from './components/FallingPetals.vue'
import VerseInscription from './components/VerseInscription.vue'
import ComponentGallery from './components/ComponentGallery.vue'
import SealButton from './ui/SealButton.vue'
import './styles/theme.css'

const gallery = ref<InstanceType<typeof ComponentGallery>>()
const fallingPetals = ref<InstanceType<typeof FallingPetals>>()
</script>

<template>
  <section
    id="chinese-winter-plum"
    class="winter-plum"
    aria-labelledby="winter-plum-title"
    @pointermove="fallingPetals?.scatter($event)"
  >
    <WinterScene />
    <Snowfall />
    <FallingPetals ref="fallingPetals" />
    <div class="winter-content">
      <p class="winter-eyebrow winter-intro">CHINESE AESTHETICS · WINTER PLUM</p>
      <div class="winter-title-row">
        <h1 id="winter-plum-title">朱墙<span>冬梅</span></h1>
        <span class="winter-seal" aria-hidden="true">春信</span>
      </div>
      <VerseInscription />
      <div class="winter-actions">
        <SealButton variant="snow" @click="gallery?.open()">
          入境赏梅 <span aria-hidden="true">↗</span>
        </SealButton>
        <span class="winter-caption">寒意未尽，花已先开。</span>
      </div>
    </div>
    <div class="winter-bottom">
      <span class="winter-bottom__index">01 <span>/ 中国古风</span></span>
      <span class="winter-bottom__season">冬藏 · 春信</span>
    </div>
    <ComponentGallery ref="gallery" />
  </section>
</template>
