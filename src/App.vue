<!--
 * @Description: 應用全域佈局
 * @Version: 1.0
 * @Autor: GiottoLLL7
 * @Date: 2024-05-25 12:38:23
 * @LastEditors: GiottoLLL7
 * @LastEditTime: 2026-10-30 10:15:00
-->
<script setup lang="ts">
import { RouterView } from 'vue-router'
import GHeader from './components/GHeader.vue'
import ContactBtns from './components/ContactBtns.vue'
import SiteFooter from './components/SiteFooter.vue'
import Lightbox from './components/ImageLightbox.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col bg-canvas">
    <GHeader />
    <main class="flex-1 pb-[var(--mobile-cta-height)] sm:pb-0">
      <RouterView />
    </main>
    <SiteFooter />
    <ContactBtns />
    <Lightbox />
  </div>
</template>
