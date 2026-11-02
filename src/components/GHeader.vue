<!--
 * @Description: 網站頁首導航列
 * @Version: 1.0
 * @Autor: GiottoLLL7
 * @Date: 2024-06-01 14:06:09
 * @LastEditors: GiottoLLL7
 * @LastEditTime: 2026-10-29 17:35:00
-->
<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { PHONE_DISPLAY, TEL_LINK } from '@/config/contact'

const menuOpen = ref(false)
const isMobile = ref(false)
const headerVisible = ref(true)
const lastScrollTop = ref(0)

const router = useRouter()
const route = useRoute()

/** 取得圖片資源網址（Vite 靜態資源處理機制） */
const getImageUrl = (name: string): string => {
  return new URL(`../assets/img/${name}`, import.meta.url).href
}

/** 目前所在路由，用於導覽高亮 */
const activePath = computed(() => route.path)

/** 導覽項目 */
const navItems = [
  { label: '首頁', path: '/' },
  { label: '寫字樓清潔', path: '/business' },
  { label: '餐廳廚房', path: '/restaurant' },
  { label: '地板打蠟', path: '/floorWaxing' },
  { label: '除甲醛', path: '/detail' },
  { label: '關於我們', path: '/aboutus' }
]

/** 捲動時隱藏頁首，向上捲動時顯示 */
const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  if (scrollTop > lastScrollTop.value && scrollTop > 120) {
    headerVisible.value = false
  } else {
    headerVisible.value = true
  }
  lastScrollTop.value = scrollTop <= 0 ? 0 : scrollTop
}

/** 依視窗寬度切換行動版選單 */
const handleResize = () => {
  isMobile.value = window.innerWidth < 768
  if (!isMobile.value) {
    menuOpen.value = false
  }
}

/** 關閉行動版選單 */
const closeMenu = () => {
  menuOpen.value = false
}

/** 前往指定頁面 */
const goTo = (path: string) => {
  router.push(path)
  closeMenu()
}

onMounted(() => {
  isMobile.value = window.innerWidth < 768
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <header
    :class="headerVisible ? 'translate-y-0' : '-translate-y-full'"
    class="fixed inset-x-0 top-0 z-30 border-b border-line bg-surface shadow-soft transition-transform duration-300"
  >
    <div class="mx-auto flex h-16 max-w-container items-center justify-between px-4">
      <button
        class="flex shrink-0 items-center gap-2"
        type="button"
        aria-label="返回首頁"
        @click="goTo('/')"
      >
        <img
          alt="尚潔清潔服務有限公司標誌"
          class="h-10 w-10 object-contain"
          height="40"
          :src="getImageUrl('logo2.png')"
          width="40"
        />
        <span class="hidden text-sm font-bold tracking-tight text-ink-900 sm:block">
          尚潔清潔服務
        </span>
      </button>

      <nav class="hidden items-center gap-1 lg:flex" aria-label="主導覽">
        <button
          v-for="item in navItems"
          :key="item.path"
          :class="activePath === item.path ? 'bg-brand-50 text-brand-700' : 'text-ink-700 hover:bg-brand-50 hover:text-brand-600'"
          class="rounded-md px-3 py-2 text-sm font-medium transition-colors"
          type="button"
          @click="goTo(item.path)"
        >
          {{ item.label }}
        </button>
      </nav>

      <div class="flex items-center gap-2">
        <a
          :href="TEL_LINK"
          class="hidden items-center gap-2 rounded-full bg-accent-500 px-4 py-2 text-sm font-bold text-white shadow-soft transition-colors hover:bg-accent-600 sm:inline-flex"
        >
          <font-awesome-icon class="text-xs" :icon="['fas', 'phone']" />
          {{ PHONE_DISPLAY }}
        </a>

        <button
          v-if="isMobile"
          class="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink-700 transition-colors hover:bg-brand-50"
          type="button"
          :aria-expanded="menuOpen"
          aria-controls="mobile-menu"
          aria-label="開啟選單"
          @click="menuOpen = !menuOpen"
        >
          <font-awesome-icon class="text-lg" :icon="['fas', 'square-poll-horizontal']" />
        </button>
      </div>
    </div>

    <div
      v-if="isMobile && menuOpen"
      id="mobile-menu"
      class="border-t border-line bg-surface px-4 pb-5 pt-3 shadow-card"
    >
      <nav class="flex flex-col gap-1" aria-label="行動版導覽">
        <button
          v-for="item in navItems"
          :key="item.path"
          :class="activePath === item.path ? 'bg-brand-50 text-brand-700' : 'text-ink-700'"
          class="rounded-md px-3 py-2.5 text-left text-sm font-medium transition-colors"
          type="button"
          @click="goTo(item.path)"
        >
          {{ item.label }}
        </button>
      </nav>
      <a
        :href="TEL_LINK"
        class="mt-3 flex items-center justify-center gap-2 rounded-full bg-accent-500 px-4 py-3 text-sm font-bold text-white"
      >
        <font-awesome-icon class="text-xs" :icon="['fas', 'phone']" />
        立即致電 {{ PHONE_DISPLAY }}
      </a>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  name: 'GHeader'
}
</script>
