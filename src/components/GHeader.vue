<!--
 * @Description: 
 * @Version: 0.1
 * @Autor: GiottoLLL7
 * @Date: 2024-06-01 14:06:09
 * @LastEditors: GiottoLLL7
 * @LastEditTime: 2025-02-19 21:04:45
-->
<script setup lang="ts">
import { defineComponent, onMounted, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const isMobile = ref(window.innerWidth < 800)
const headerVisible = ref(true)

const headerClass = computed(() => {
  return headerVisible.value ? 'header-visible' : 'header-hidden'
})

const router = useRouter()
const goHome = () => {
  router.push("/")
  toggleMenu()
}
const goAbout = () => {
  router.push("/aboutus")
  toggleMenu()
}
const lastScrollTop = ref(0)
const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  if (scrollTop > lastScrollTop.value) {
    headerVisible.value = false
  } else {
    headerVisible.value = true
  }
  lastScrollTop.value = scrollTop <= 0 ? 0 : scrollTop
}

const handleResize = () => {
  isMobile.value = window.innerWidth < 800
}

const getImageUrl = (name:string) => {
  return new URL(`../assets/img/${name}`, import.meta.url).href
}

const callPhone = () => {
  const phone = 'tel:53007098'
  window.location.href = phone
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)
})

</script>

<template>
  <header :class="headerClass" class="bg-white bg-opacity-30 backdrop-blur-md pt-4 fixed w-full z-10">
    <div class="container mx-auto flex justify-between items-center px-4">
    <img v-if="!isMobile" alt="Company Logo" class="h-16 w-16" height="100" :src="getImageUrl('logo.png')" width="100"/>
    <img v-else alt="Company Logo" class="h-48 w-48" height="100" :src="getImageUrl('logo.png')" width="100" style="margin: auto;">
    <nav v-if="!isMobile" class="hidden md:flex space-x-4">
    <a class="text-yellow-600" href="#" @click="goHome">
      首頁
    </a>
    <!-- <a class="text-gray-600" href="#">
      關於我們
    </a>
    <a class="text-gray-600" href="#">
      我們的服務
    </a>
    <a class="text-gray-600" href="#">
      服務方案
    </a> -->
    <a class="text-gray-600" href="#" @click="callPhone">
      聯絡我們
    </a>
    </nav>
    <button v-if="isMobile" class="md:hidden text-gray-600 h-12 w-12 absolute right-2 top-2" @click="toggleMenu">
      <font-awesome-icon class="text-4xl" :icon="['fast', 'square-poll-horizontal']" />
    </button>
  </div>
  <div v-if="menuOpen && isMobile" class="md:hidden bg-white bg-opacity-90 backdrop-blur-md absolute top-16 left-0 w-full shadow-lg">
    <nav class="flex flex-col space-y-4 p-4">
    <a class="text-blue-400" href="#" @click="goHome">
      首頁
    </a>
    <a class="text-gray-600" href="#" @click="goAbout">
      關於我們
    </a>
    <!-- <a class="text-gray-600" href="#">
      我們的服務
    </a> -->
    <!-- <a class="text-gray-600" href="#">
      服務方案
    </a> -->
    <a class="text-gray-600" href="#" @click="callPhone">
      聯絡我們
    </a>
    </nav>
  </div>
  </header>
</template>

<style scoped>
.header-hidden {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}
.header-visible {
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
}
</style>

<script lang="ts">
export default {
  name: 'GHeader'
}
</script>
