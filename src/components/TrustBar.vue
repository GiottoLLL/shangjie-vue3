<!--
 * @Description: 信任條
 * @Version: 1.0
 * @Autor: GiottoLLL7
 * @Date: 2026-10-29 17:35:00
 * @LastEditors: GiottoLLL7
 * @LastEditTime: 2026-10-29 17:35:00
-->
<script setup lang="ts">
/** 信任要點 */
const items = [
  { icon: 'check-circle', title: '專業資深', desc: '團隊經驗豐富，工序嚴謹' },
  { icon: 'users', title: '自設團隊', desc: '全職受訓，不外判轉手' },
  { icon: 'briefcase', title: '多元場景', desc: '寫字樓、餐廳、住宅全覆蓋' },
  { icon: 'clock', title: '即日回應', desc: '最快即日安排上門評估' }
]
</script>

<template>
  <section class="border-b border-line bg-surface">
    <div class="mx-auto max-w-container px-4 py-8">
      <ul class="grid grid-cols-2 gap-x-4 gap-y-6 lg:grid-cols-4">
        <li v-for="item in items" :key="item.title" class="flex items-start gap-3">
          <span
            class="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand-600"
          >
            <font-awesome-icon class="text-sm" :icon="['fas', item.icon]" />
          </span>
          <div class="min-w-0">
            <h3 class="text-sm font-bold text-ink-900">{{ item.title }}</h3>
            <p class="mt-0.5 text-xs leading-relaxed text-ink-500">{{ item.desc }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'TrustBar'
}
</script>
