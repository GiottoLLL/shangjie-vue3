<!--
 * @Description: 詳情頁頁首橫幅
 * @Version: 1.0
 * @Autor: GiottoLLL7
 * @Date: 2026-10-29 17:35:00
 * @LastEditors: GiottoLLL7
 * @LastEditTime: 2026-10-29 17:35:00
-->
<script setup lang="ts">
import { PHONE_DISPLAY, TEL_LINK } from '@/config/contact'

defineProps<{
  /** 頁面標題 */
  title: string
  /** 副標題／價值主張 */
  subtitle?: string
  /** 麵包屑父層名稱 */
  parentLabel?: string
  /** 麵包屑父層路徑 */
  parentPath?: string
  /** 背景圖片網址 */
  image?: string
  /** 背景圖替代文字 */
  imageAlt?: string
}>()
</script>

<template>
  <section class="relative overflow-hidden bg-brand-700">
    <img
      v-if="image"
      :alt="imageAlt ?? title"
      class="absolute inset-0 h-full w-full object-cover opacity-25"
      :src="image"
    />
    <div
      class="absolute inset-0 bg-gradient-to-b from-brand-700/85 via-brand-700/75 to-brand-700/90"
    />

    <div class="relative mx-auto max-w-container px-4 pb-10 pt-20 sm:pb-14 sm:pt-24">
      <nav v-if="parentLabel && parentPath" aria-label="麵包屑" class="mb-3">
        <RouterLink
          :to="parentPath"
          class="inline-flex items-center gap-1.5 text-sm text-brand-100 transition-colors hover:text-white"
        >
          <font-awesome-icon class="text-xs" :icon="['fas', 'square-poll-horizontal']" />
          {{ parentLabel }}
        </RouterLink>
      </nav>

      <h1 class="text-2xl font-black leading-tight text-white sm:text-[34px]">
        {{ title }}
      </h1>

      <p v-if="subtitle" class="mt-3 max-w-2xl text-[15px] leading-relaxed text-brand-50">
        {{ subtitle }}
      </p>

      <div class="mt-6 flex flex-wrap gap-3">
        <a
          :href="TEL_LINK"
          class="inline-flex items-center gap-2 rounded-full bg-accent-500 px-5 py-2.5 text-sm font-bold text-white shadow-soft transition-colors hover:bg-accent-600"
        >
          <font-awesome-icon class="text-xs" :icon="['fas', 'phone']" />
          立即致電 {{ PHONE_DISPLAY }}
        </a>
        <a
          href="#contact"
          class="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
        >
          了解更多
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'PageHero'
}
</script>
