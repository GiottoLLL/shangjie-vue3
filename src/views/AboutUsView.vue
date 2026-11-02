<!--
 * @Description: 關於我們
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
import { getImageUrl } from '@/utils/image'

/** 公司優勢 */
const strengths = [
  {
    icon: 'users',
    title: '自設專業團隊',
    description: '團隊全職受訓、服務經驗豐富，不外判轉手，品質一致可控。'
  },
  {
    icon: 'check-circle',
    title: '專業技術大師',
    description: '領域深耕多年，親自解決各類清潔問題，處理難以清除的污漬。'
  },
  {
    icon: 'briefcase',
    title: '全場景服務能力',
    description: '住宅、寫字樓、餐廳廚房與公共設施，全部都在我們的拿手領域。'
  },
  {
    icon: 'clock',
    title: '高效清潔設備',
    description: '使用先進設備與環保清潔劑，在高效清潔的同時不對環境造成負擔。'
  }
]

/** 服務承諾 */
const commitments = [
  '提供最合適的清潔方案，針對不同環境客製化配置',
  '注重細節，確保每一個角落都能徹底清潔',
  '不論是何種程度的污漬，清潔後都能回復光潔如新',
  '使用高效設備與環保清潔劑，不對環境造成任何負擔'
]
</script>

<template>
  <div>
    <PageHero
      title="關於尚潔"
      subtitle="「清潔專家」尚潔服務有限公司 — 全香港最頂尖的清潔團隊，領域深耕多年的專業技術大師，親自解決各類清潔問題。"
      parent-label="返回首頁"
      parent-path="/"
      :image="getImageUrl('img11.jpg')"
      image-alt="清潔後亮麗的寫字樓大堂入口"
    />

    <!-- 公司簡介 -->
    <section class="mx-auto max-w-container px-4 py-12 sm:py-14">
      <div class="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            title="我們的定位"
            description="尚潔服務有限公司是一家專注於外判清潔服務的公司，為客戶提供專業、可靠、徹底的清潔解決方案。"
          />
          <p class="text-[15px] leading-relaxed text-ink-600">
            作為一間專業的清潔公司，我們的團隊具備豐富經驗，能夠針對不同的環境提供最合適的清潔方案。我們專注於細節，確保每一個角落都能徹底清潔，不論是何種程度的污漬，在我們清潔過後都能回到光潔如新的狀態。
          </p>
          <p class="mt-3 text-[15px] leading-relaxed text-ink-600">
            我們使用高效的清潔設備和環保的清潔劑，確保在提供高效清潔的同時，對環境不造成任何負擔。
          </p>
        </div>

        <img
          alt="尚潔清潔服務團隊進駐現場作業"
          class="aspect-[4/3] w-full rounded-lg object-cover shadow-soft"
          :src="getImageUrl('img2.jpg')"
        />
      </div>
    </section>

    <!-- 公司優勢 -->
    <section class="border-y border-line bg-surface-soft">
      <div class="mx-auto max-w-container px-4 py-12 sm:py-14">
        <SectionHeading
          title="為什麼值得信賴"
          description="我們的優勢不只是價格，更是每一個細節都能放心交付。"
        />

        <FeatureGrid :columns="4" :items="strengths" />
      </div>
    </section>

    <!-- 服務承諾 -->
    <section class="mx-auto max-w-container px-4 py-12 sm:py-14">
      <div class="grid gap-8 lg:grid-cols-2 lg:items-start">
        <div>
          <SectionHeading title="我們的服務承諾" description="每一項承諾，都是我們對客戶的責任。" />

          <ul class="space-y-3">
            <li
              v-for="item in commitments"
              :key="item"
              class="flex items-start gap-3 rounded-lg border border-line bg-surface p-4 shadow-soft"
            >
              <font-awesome-icon
                class="mt-0.5 shrink-0 text-sm text-brand-600"
                :icon="['fas', 'check-circle']"
              />
              <span class="text-sm leading-relaxed text-ink-600">{{ item }}</span>
            </li>
          </ul>
        </div>

        <div>
          <SectionHeading title="我們的服務場景" description="不論哪種場景，都是我們的拿手領域。" />

          <div class="grid grid-cols-2 gap-3">
            <RouterLink
              to="/business"
              class="group relative overflow-hidden rounded-lg shadow-soft"
            >
              <img
                alt="寫字樓商業清潔服務"
                class="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                :src="getImageUrl('img11.jpg')"
              />
              <span
                class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-700/90 to-transparent px-3 py-2 text-sm font-bold text-white"
              >
                寫字樓清潔
              </span>
            </RouterLink>

            <RouterLink to="/restaurant" class="group relative overflow-hidden rounded-lg shadow-soft">
              <img
                alt="餐廳廚房清潔服務"
                class="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                :src="getImageUrl('img7.jpg')"
              />
              <span
                class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-700/90 to-transparent px-3 py-2 text-sm font-bold text-white"
              >
                餐廳廚房
              </span>
            </RouterLink>

            <RouterLink to="/detail" class="group relative overflow-hidden rounded-lg shadow-soft">
              <img
                alt="除甲醛深度清潔服務"
                class="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                :src="getImageUrl('img9.jpg')"
              />
              <span
                class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-700/90 to-transparent px-3 py-2 text-sm font-bold text-white"
              >
                除甲醛
              </span>
            </RouterLink>

            <RouterLink to="/floorWaxing" class="group relative overflow-hidden rounded-lg shadow-soft">
              <img
                alt="地板打蠟保養服務"
                class="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                :src="getImageUrl('img16.jpg')"
              />
              <span
                class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-700/90 to-transparent px-3 py-2 text-sm font-bold text-white"
              >
                地板打蠟
              </span>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <CTASection />
  </div>
</template>

<script lang="ts">
export default {
  name: 'AboutUsView'
}
</script>
