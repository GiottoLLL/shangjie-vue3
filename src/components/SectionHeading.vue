<!--
 * @Description: 區段標題
 * @Version: 1.0
 * @Autor: GiottoLLL7
 * @Date: 2026-10-29 17:35:00
 * @LastEditors: GiottoLLL7
 * @LastEditTime: 2026-10-29 17:35:00
-->
<script setup lang="ts">
defineProps<{
  /** 區段標題 */
  title: string
  /** 區段說明 */
  description?: string
  /** 置中對齊 */
  centered?: boolean
}>()
</script>

<template>
  <div :class="centered ? 'text-center' : ''" class="mb-6 sm:mb-8">
    <h2 class="text-xl font-black text-ink-900 sm:text-2xl">{{ title }}</h2>
    <p
      v-if="description"
      :class="centered ? 'mx-auto max-w-2xl' : 'max-w-2xl'"
      class="mt-2 text-sm leading-relaxed text-ink-500 sm:text-[15px]"
    >
      {{ description }}
    </p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SectionHeading'
}
</script>
