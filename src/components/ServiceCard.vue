<!--
 * @Description: 服務卡片
 * @Version: 1.0
 * @Autor: GiottoLLL7
 * @Date: 2026-10-29 17:35:00
 * @LastEditors: GiottoLLL7
 * @LastEditTime: 2026-10-29 17:35:00
-->
<script setup lang="ts">
defineProps<{
  /** 服務名稱 */
  title: string
  /** 一句話描述 */
  description: string
  /** 圖片網址 */
  image: string
  /** 圖片替代文字 */
  imageAlt: string
  /** 連結路徑 */
  to: string
  /** 圖示名稱 */
  icon?: string
  /** 標籤文字 */
  tag?: string
}>()
</script>

<template>
  <RouterLink
    :to="to"
    class="group flex flex-col overflow-hidden rounded-lg border border-line bg-surface shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card"
  >
    <div class="relative aspect-[4/3] overflow-hidden bg-brand-50">
      <img
        :alt="imageAlt"
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        :src="image"
      />
      <span
        v-if="tag"
        class="absolute left-3 top-3 rounded-full bg-brand-600/90 px-2.5 py-1 text-xs font-bold text-white backdrop-blur-sm"
      >
        {{ tag }}
      </span>
    </div>

    <div class="flex flex-1 flex-col p-5">
      <div class="flex items-center gap-2">
        <font-awesome-icon
          v-if="icon"
          class="text-sm text-brand-600"
          :icon="['fas', icon]"
        />
        <h3 class="text-lg font-bold text-ink-900">{{ title }}</h3>
      </div>
      <p class="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{{ description }}</p>
      <span
        class="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-600 transition-colors group-hover:text-brand-700"
      >
        了解更多
        <font-awesome-icon class="text-xs" :icon="['fas', 'phone']" />
      </span>
    </div>
  </RouterLink>
</template>

<script lang="ts">
export default {
  name: 'ServiceCard'
}
</script>
