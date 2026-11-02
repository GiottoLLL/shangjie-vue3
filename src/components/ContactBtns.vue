<!--
 * @Description: 懸浮聯絡按鈕
 * @Version: 1.0
 * @Autor: GiottoLLL7
 * @Date: 2024-06-01 14:29:29
 * @LastEditors: GiottoLLL7
 * @LastEditTime: 2026-10-29 17:35:00
-->
<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { PHONE_DISPLAY, TEL_LINK, WHATSAPP_LINK } from '@/config/contact'

/** 頁面捲動超過此距離後收起懸浮按鈕，避免遮擋正文 */
const SCROLL_THRESHOLD = 200
const visible = ref(true)
const lastScrollTop = ref(0)

const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  if (scrollTop > lastScrollTop.value && scrollTop > SCROLL_THRESHOLD) {
    visible.value = false
  } else {
    visible.value = true
  }
  lastScrollTop.value = scrollTop <= 0 ? 0 : scrollTop
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <!--
    桌面版：右下角圓形按鈕，向下捲動時自動收起，向上捲動時恢復，
    確保任何時候都不會長期遮擋正文內容。
  -->
  <div
    :class="visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'"
    class="fixed bottom-6 right-6 z-40 hidden flex-col items-end gap-3 transition-all duration-300 sm:flex"
  >
    <a
      :href="TEL_LINK"
      class="flex h-12 w-12 items-center justify-center rounded-full bg-accent-500 text-white shadow-lift transition-transform hover:scale-105"
      aria-label="立即致電"
      title="立即致電"
    >
      <font-awesome-icon class="text-base" :icon="['fas', 'phone']" />
    </a>

    <a
      :href="WHATSAPP_LINK"
      target="_blank"
      rel="noopener"
      class="flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white shadow-lift transition-transform hover:scale-105"
      aria-label="WhatsApp 諮詢"
      title="WhatsApp 諮詢"
    >
      <font-awesome-icon class="text-xl" :icon="['fab', 'whatsapp']" />
    </a>
  </div>

  <!-- 行動版底部固定行動呼籲列 -->
  <div
    class="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-surface/95 px-4 py-2.5 backdrop-blur-md sm:hidden"
  >
    <div class="flex items-center gap-3">
      <span class="shrink-0 text-xs font-medium leading-tight text-ink-500">
        立即致電<br />
        <strong class="text-sm text-ink-900">{{ PHONE_DISPLAY }}</strong>
      </span>
      <a
        :href="TEL_LINK"
        class="flex-1 rounded-full bg-accent-500 py-2.5 text-center text-sm font-bold text-white"
      >
        免費報價
      </a>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ContactBtns'
}
</script>
