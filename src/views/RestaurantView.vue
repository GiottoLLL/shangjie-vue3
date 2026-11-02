<!--
 * @Description: 餐廳廚房清潔服務詳情頁
 * @Version: 1.0
 * @Autor: GiottoLLL7
 * @Date: 2024-05-30 20:25:21
 * @LastEditors: GiottoLLL7
 * @LastEditTime: 2026-10-29 17:35:00
-->
<script setup lang="ts">
import PageHero from '@/components/PageHero.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import FeatureGrid from '@/components/FeatureGrid.vue'
import CTASection from '@/components/CTASection.vue'
import PreviewImage from '@/components/PreviewImage.vue'
import { getImageUrl } from '@/utils/image'

/** 清潔內容 */
const features = [
  {
    icon: 'check-circle',
    title: '日常店鋪清潔',
    description:
      '按餐廳營業時間製訂清潔計劃，提供多次上門保養，確保客戶消費環境與工作環境徹底清潔。'
  },
  {
    icon: 'users',
    title: '定期深層清潔去油污',
    description: '使用市面最先進的儀器與清潔劑強效去除頑固油污，還您整潔如初的餐廳環境。'
  },
  {
    icon: 'briefcase',
    title: '定期清理所有工具',
    description: '團隊經過專業培訓，在保證工具完好無損的前提下進行全面的工具清潔。'
  },
  {
    icon: 'clock',
    title: '定期清理所有設施',
    description: '團隊擁有全面的設施拆卸知識，能快速高效地拆裝設施，進行深度清潔。'
  },
  {
    icon: 'check-circle',
    title: '水槽等細菌居地清理',
    description:
      '水管深處、水槽死角是細菌滋生與惡臭源頭，以專門工具從根源徹底解決問題。'
  }
]

/** 服務圖集 */
const gallery = [
  { file: 'img6.jpg', alt: '深度清潔後的餐廳用餐區' },
  { file: 'img31.jpg', alt: '清潔後的餐廳通道與地面' },
  { file: 'img29.jpg', alt: '餐廳清潔服務的工作區域' },
  { file: 'img24.jpg', alt: '清潔後的餐廳用餐區' },
  { file: 'img15.jpg', alt: '深度清潔後的廚房不鏽鋼工作檯' },
  { file: 'img36.jpg', alt: '清潔後的餐廳地板' },
  { file: 'img37.jpg', alt: '清潔服務後的餐廳空間' },
  { file: 'img38.jpg', alt: '廚房深層清潔成果' }
].map((item) => ({ ...item, src: getImageUrl(item.file) }))
</script>

<template>
  <div>
    <PageHero
      title="餐廳｜廚房清潔服務"
      subtitle="餐廳的清潔是提高品牌聲望、吸引顧客光顧的重要保障之一。尚潔提供全香港最專業的餐廳與廚房清潔方案，讓您的品牌在餐飲業競爭中立於不敗之地。"
      parent-label="返回首頁"
      parent-path="/"
      :image="getImageUrl('img7.jpg')"
      image-alt="深度清潔後的商用廚房不鏽鋼爐檯"
    />

    <!-- 服務簡介 -->
    <section class="mx-auto max-w-container px-4 py-12 sm:py-14">
      <SectionHeading
        title="全方位清潔方案"
        description="我們為您的餐廳提供的清潔方案涵蓋日常店鋪清潔、定期深層清潔去油污、工具與設施清理，以及水槽等易滋生細菌位置的定期處理。"
      />

      <div class="grid gap-6 lg:grid-cols-3">
        <div class="lg:col-span-2">
          <p class="text-[15px] leading-relaxed text-ink-600">
            我們使用先進的科技儀器與環保無害的清潔劑，確保您的餐廳與廚房不留污漬、不積油污。我們使用的工具將徹底處理您平時無法去除的頑固污漬，以及無法觸及的衛生死角。
          </p>
          <p class="mt-3 text-[15px] leading-relaxed text-ink-600">
            我們的專業團隊將根據您的需求，為您提供專業的清潔服務，確保您的工作環境始終保持清潔和衛生。
          </p>
        </div>

        <div class="rounded-lg border border-brand-200 bg-brand-50 p-5">
          <h3 class="text-base font-bold text-ink-900">清潔範圍</h3>
          <ul class="mt-3 space-y-2 text-sm text-ink-600">
            <li class="flex items-start gap-2">
              <font-awesome-icon class="mt-1 text-xs text-brand-600" :icon="['fas', 'check-circle']" />
              日常店鋪清潔
            </li>
            <li class="flex items-start gap-2">
              <font-awesome-icon class="mt-1 text-xs text-brand-600" :icon="['fas', 'check-circle']" />
              定期深層清潔去油污
            </li>
            <li class="flex items-start gap-2">
              <font-awesome-icon class="mt-1 text-xs text-brand-600" :icon="['fas', 'check-circle']" />
              定期清理所有工具
            </li>
            <li class="flex items-start gap-2">
              <font-awesome-icon class="mt-1 text-xs text-brand-600" :icon="['fas', 'check-circle']" />
              定期清理所有設施
            </li>
            <li class="flex items-start gap-2">
              <font-awesome-icon class="mt-1 text-xs text-brand-600" :icon="['fas', 'check-circle']" />
              定期清理水槽等細菌居地
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 清潔內容 -->
    <section class="border-y border-line bg-surface-soft">
      <div class="mx-auto max-w-container px-4 py-12 sm:py-14">
        <SectionHeading
          title="餐廳、廚房清潔的具體內容"
          description="根據您的需求，我們將提供全方位無死角的清潔服務。"
        />

        <FeatureGrid :columns="3" :items="features" />
      </div>
    </section>

    <!-- 服務圖集 -->
    <section class="mx-auto max-w-container px-4 py-12 sm:py-14">
      <SectionHeading title="餐廳清潔實績" description="從前場到後場，每個角落都徹底清潔。" />

      <div class="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <PreviewImage
          v-for="(item, index) in gallery"
          :key="item.src"
          :alt="item.alt"
          :images="gallery"
          :index="index"
          :src="item.src"
          wrapper-class="aspect-[4/3] rounded-lg shadow-soft"
        />
      </div>
    </section>

    <CTASection
      title="客製餐廳衛生解決方案"
      description="我們的專業團隊將根據您的需求提供專業清潔服務，確保您的工作環境始終保持清潔和衛生。"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: 'RestaurantView'
}
</script>
