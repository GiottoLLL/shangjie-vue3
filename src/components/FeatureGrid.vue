<!--
 * @Description: 要點卡片網格
 * @Version: 1.0
 * @Autor: GiottoLLL7
 * @Date: 2026-10-29 17:35:00
 * @LastEditors: GiottoLLL7
 * @LastEditTime: 2026-10-29 17:35:00
-->
<script setup lang="ts">
defineProps<{
  /** 要點清單 */
  items: Array<{
    icon?: string
    title: string
    description: string
  }>
  /** 欄位數（響應式自動降為單欄） */
  columns?: 2 | 3 | 4
}>()
</script>

<template>
  <div
    :class="{
      'sm:grid-cols-2': columns === 2,
      'sm:grid-cols-2 lg:grid-cols-3': columns === 3,
      'sm:grid-cols-2 lg:grid-cols-4': columns === 4
    }"
    class="grid gap-4"
  >
    <div
      v-for="item in items"
      :key="item.title"
      class="rounded-lg border border-line bg-surface p-5 shadow-soft"
    >
      <div v-if="item.icon" class="flex items-center gap-2.5">
        <span
          class="flex h-8 w-8 items-center justify-center rounded-md bg-brand-50 text-brand-600"
        >
          <font-awesome-icon class="text-sm" :icon="['fas', item.icon]" />
        </span>
        <h3 class="text-base font-bold text-ink-900">{{ item.title }}</h3>
      </div>
      <h3 v-else class="text-base font-bold text-ink-900">{{ item.title }}</h3>
      <p class="mt-2 text-sm leading-relaxed text-ink-500">{{ item.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'FeatureGrid'
}
</script>
