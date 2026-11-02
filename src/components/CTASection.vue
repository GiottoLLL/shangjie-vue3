<!--
 * @Description: 行動呼籲區塊
 * @Version: 1.0
 * @Autor: GiottoLLL7
 * @Date: 2026-10-29 17:35:00
 * @LastEditors: GiottoLLL7
 * @LastEditTime: 2026-10-29 17:35:00
-->
<script setup lang="ts">
import { PHONE_DISPLAY, TEL_LINK, WHATSAPP_LINK } from '@/config/contact'

withDefaults(
  defineProps<{
    /** 區塊標題 */
    title?: string
    /** 說明文字 */
    description?: string
  }>(),
  {
    title: '免費報價，專業施工',
    description: '留下聯絡方式或直接致電，我們會盡快為你安排專業清潔團隊上門評估。'
  }
)
</script>

<template>
  <section id="contact" class="mx-auto max-w-container px-4 py-12 sm:py-14">
    <div
      class="overflow-hidden rounded-xl bg-brand-700 px-6 py-9 shadow-card sm:px-10 sm:py-11"
    >
      <div class="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div class="max-w-xl">
          <h2 class="text-xl font-black text-white sm:text-2xl">{{ title }}</h2>
          <p class="mt-2 text-sm leading-relaxed text-brand-50 sm:text-[15px]">
            {{ description }}
          </p>
        </div>

        <div class="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
          <a
            :href="TEL_LINK"
            class="inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-bold text-white shadow-soft transition-colors hover:bg-accent-600"
          >
            <font-awesome-icon class="text-xs" :icon="['fas', 'phone']" />
            {{ PHONE_DISPLAY }}
          </a>
          <a
            :href="WHATSAPP_LINK"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            <font-awesome-icon class="text-sm" :icon="['fab', 'whatsapp']" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'CTASection'
}
</script>
