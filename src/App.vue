<!--
 * @Description: 
 * @Version: 0.1
 * @Autor: GiottoLLL7
 * @Date: 2024-05-25 12:38:23
 * @LastEditors: GiottoLLL7
 * @LastEditTime: 2025-02-19 23:12:42
-->
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import GHeader from './components/GHeader.vue'
import ContactBtns from './components/ContactBtns.vue'
import { ref, onMounted } from 'vue'
const isMobile = ref(window.innerWidth < 800)
const isDarkMode = ref(false);
const handleResize = () => {
  isMobile.value = window.innerWidth < 800
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  const mediaQuery = window.matchMedia('(prefers - color - scheme: dark)')
  isDarkMode.value = mediaQuery.matches
  mediaQuery.addEventListener('change', (e) => {
    isDarkMode.value = e.matches;
  })
  console.log(mediaQuery.matches)
})
</script>

<template>
  <GHeader />
  <RouterView :class="isMobile ? 'pt-52': 'pt-20'" :style="`${isDarkMode ? 'color: rgb(255 190 84) !important' : ''}`" />
  <ContactBtns />
</template>

<style scoped>
</style>
