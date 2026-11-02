<!--
 * @Description: 尚潔首頁內容
 * @Version: 1.0
 * @Autor: GiottoLLL7
 * @Date: 2024-05-25 14:10:41
 * @LastEditors: GiottoLLL7
 * @LastEditTime: 2026-10-29 17:35:00
-->
<script setup lang="ts">
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

import TrustBar from '@/components/TrustBar.vue'
import ServiceCard from '@/components/ServiceCard.vue'
import FeatureGrid from '@/components/FeatureGrid.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import CTASection from '@/components/CTASection.vue'
import PreviewImage from '@/components/PreviewImage.vue'
import { PHONE_DISPLAY, TEL_LINK, WHATSAPP_LINK } from '@/config/contact'
import { getImageUrl } from '@/utils/image'

const modules = [Navigation, Pagination, A11y, Autoplay]

/** 首頁輪播圖 */
const carouselImages = [
  { file: 'img_swiper_1.jpeg', alt: '尚潔專業清潔團隊在現代寫字樓進行日常保潔' },
  { file: 'img_swiper_2.jpeg', alt: '尚潔清潔團隊使用專業設備進行深度清潔' },
  { file: 'img_swiper_3.jpeg', alt: '餐廳廚房由尚潔團隊進行徹底清潔' },
  { file: 'img_swiper_4.jpeg', alt: '住宅除甲醛服務，由尚潔團隊施工' }
].map((item) => ({ ...item, src: getImageUrl(item.file) }))

/** 服務卡片 */
const services = [
  {
    title: '寫字樓商業清潔',
    description: '日常清潔、深度清潔、地毯清洗、玻璃與洗手間消毒，辦公環境煥然一新。',
    image: getImageUrl('img11.jpg'),
    imageAlt: '清潔後亮麗的寫字樓大堂入口',
    to: '/business',
    icon: 'briefcase',
    tag: '熱門'
  },
  {
    title: '餐廳廚房清潔',
    description: '針對廚房油污、抽油煙機與爐具的深度清潔，讓後場符合衛生標準。',
    image: getImageUrl('img7.jpg'),
    imageAlt: '深度清潔後的商用廚房不鏽鋼爐檯',
    to: '/restaurant',
    icon: 'check-circle'
  },
  {
    title: '除甲醛深度清潔',
    description: '採用日本專利無光觸媒技術（JP-ECO），有效降解甲醛、細菌與異味。',
    image: getImageUrl('img9.jpg'),
    imageAlt: '除甲醛清潔後的住宅儲物櫃',
    to: '/detail',
    icon: 'users'
  },
  {
    title: '地板打蠟保養',
    description: '清除頑固污漬並打蠟保護，延長地板使用壽命，回復光潔如新。',
    image: getImageUrl('img16.jpg'),
    imageAlt: '打蠟保養後光可鑑人的辦公室地板',
    to: '/floorWaxing',
    icon: 'clock'
  }
]

/** 場景展示圖集 */
const sceneImages = [
  { file: 'img23.jpg', alt: '清潔團隊使用高壓清洗機清洗玻璃窗戶' },
  { file: 'img16.jpg', alt: '清潔後光潔明亮的辦公室地面' },
  { file: 'img4.jpg', alt: '清潔團隊細心抹拭餐廳燈具' },
  { file: 'img11.jpg', alt: '深度清潔後的寫字樓大堂' }
].map((item) => ({ ...item, src: getImageUrl(item.file) }))

/** 技術亮點 */
const highlights = [
  {
    icon: 'check-circle',
    title: '日本專利無光觸媒技術',
    description: 'JP-ECO 光觸媒技術能有效降解空氣及物體中的甲醛、細菌與異味，是目前最先進的空氣淨化技術之一。'
  },
  {
    icon: 'users',
    title: '高壓水流清洗機',
    description: '透過動力裝置產生高壓水流沖洗物體表面，能將污垢完全剝離，回復原有光潔。'
  },
  {
    icon: 'briefcase',
    title: '全場景服務經驗',
    description: '不論是住宅、寫字樓、餐廳廚房還是公共設施，都是我們的拿手領域。'
  },
  {
    icon: 'clock',
    title: '環保高效清潔劑',
    description: '使用高效清潔設備與環保清潔劑，在提供高效清潔的同時，對環境不造成任何負擔。'
  }
]
</script>

<template>
  <div>
    <!-- 首頁主視覺 -->
    <section class="relative min-h-[440px] overflow-hidden bg-brand-700 sm:min-h-[520px]">
      <swiper
        :slides-per-view="1"
        :space-between="0"
        :modules="modules"
        :pagination="{ clickable: true }"
        :autoplay="{ delay: 4000, disableOnInteraction: false }"
        :navigation="{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next'
        }"
        :loop="true"
        class="swiper-hero"
      >
        <swiper-slide v-for="image in carouselImages" :key="image.src">
          <img
            :alt="image.alt"
            class="h-full w-full object-cover opacity-90"
            :src="image.src"
          />
        </swiper-slide>
      </swiper>

      <div
        class="absolute inset-0 z-[1] bg-gradient-to-r from-brand-700/92 via-brand-700/75 to-brand-700/40 sm:from-brand-700/90 sm:via-brand-700/70 sm:to-brand-700/30"
      />

      <div class="relative z-10 mx-auto max-w-container px-4 pb-12 pt-16 sm:pb-16 sm:pt-24">
        <div class="max-w-2xl">
          <span
            class="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm"
          >
            <font-awesome-icon class="text-[10px]" :icon="['fas', 'check-circle']" />
            專業外判清潔服務
          </span>

          <h1 class="mt-4 text-[28px] font-black leading-[1.25] text-white sm:text-[40px]">
            專業清潔服務<br class="sm:hidden" />
            讓每個角落煥然一新
          </h1>

          <p class="mt-4 max-w-xl text-[15px] leading-relaxed text-brand-50 sm:text-base">
            外判保潔 · 除甲醛 · 地板打蠟 ——
            尚潔服務有限公司以專業團隊與環保技術，為寫字樓、餐廳及住宅提供最合適的清潔方案。
          </p>

          <div class="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              :href="TEL_LINK"
              class="inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-bold text-white shadow-soft transition-colors hover:bg-accent-600"
            >
              <font-awesome-icon class="text-xs" :icon="['fas', 'phone']" />
              立即致電 {{ PHONE_DISPLAY }}
            </a>
            <a
              :href="WHATSAPP_LINK"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              <font-awesome-icon class="text-sm" :icon="['fab', 'whatsapp']" />
              WhatsApp 諮詢
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 信任要點 -->
    <TrustBar />

    <!-- 為什麼選擇我們 -->
    <section class="mx-auto max-w-container px-4 py-12 sm:py-14">
      <SectionHeading
        title="為什麼選擇尚潔"
        description="全香港最頂尖的清潔團隊，領域深耕多年的專業技術，親自解決各類清潔問題。"
        centered
      />

      <FeatureGrid :columns="3" :items="highlights" />
    </section>

    <!-- 清潔服務範圍 -->
    <section class="border-y border-line bg-surface-soft">
      <div class="mx-auto max-w-container px-4 py-12 sm:py-14">
        <SectionHeading
          title="清潔服務範圍"
          description="廣泛而全面的外判清潔服務，為客人提供包括但不限於以下服務。"
          centered
        />

        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ServiceCard
            v-for="service in services"
            :key="service.to"
            v-bind="service"
          />
        </div>
      </div>
    </section>

    <!-- 場景展示 -->
    <section class="mx-auto max-w-container px-4 py-12 sm:py-14">
      <SectionHeading
        title="無微不至的服務"
        description="無論多麼髒亂的場景，在我們的清潔過後都會呈現嶄新的面貌。"
        centered
      />

      <div class="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <PreviewImage
          v-for="(item, index) in sceneImages"
          :key="item.src"
          :alt="item.alt"
          :images="sceneImages"
          :index="index"
          :src="item.src"
          wrapper-class="aspect-[3/4] rounded-lg shadow-soft"
        />
      </div>
    </section>

    <!-- 行動呼籲 -->
    <CTASection />
  </div>
</template>

<style scoped>
.swiper-hero {
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
}

.swiper-hero :deep(.swiper-wrapper) {
  height: 100%;
}

.swiper-hero :deep(.swiper-slide) {
  height: 100%;
}

.swiper-hero :deep(.swiper-slide img) {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 輪播指示點與箭頭需浮於遮罩之上，確保可見可點 */
.swiper-hero :deep(.swiper-pagination) {
  z-index: 2;
  bottom: 8px;
}

.swiper-hero :deep(.swiper-pagination-bullet) {
  background: #fff;
  opacity: 0.5;
}

.swiper-hero :deep(.swiper-pagination-bullet-active) {
  opacity: 1;
}

.swiper-hero :deep(.swiper-button-prev),
.swiper-hero :deep(.swiper-button-next) {
  z-index: 2;
  color: #fff;
}

/* 行動版隱藏左右箭頭，避免遮擋文字；改以指示點操作 */
@media (max-width: 767px) {
  .swiper-hero :deep(.swiper-button-prev),
  .swiper-hero :deep(.swiper-button-next) {
    display: none;
  }
}
</style>

<script lang="ts">
export default {
  name: 'ShangJieIndex'
}
</script>
