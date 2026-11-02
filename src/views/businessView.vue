<!--
 * @Description: 寫字樓商業清潔服務詳情頁
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

/** 服務要點 */
const features = [
  {
    icon: 'check-circle',
    title: '日常清潔維護',
    description:
      '按貴公司日程安排每週一次或多次上門保養，確保辦公室保持整潔靚麗。'
  },
  {
    icon: 'users',
    title: '地板清潔與保養',
    description:
      '按地板材質選用不同清潔方法：木質地板打蠟拋光防腐，瓷磚徹底除塵，地毯深度清洗。'
  },
  {
    icon: 'briefcase',
    title: '辦公桌椅與儲物櫃',
    description: '徹底擦拭辦公用具與儲物櫃，在不破壞重要材料的前提下清潔每一處死角。'
  },
  {
    icon: 'clock',
    title: '玻璃清潔',
    description: '使用高效無污染的清潔工具與清潔劑，徹底擦亮貴公司的玻璃幕牆與窗戶。'
  },
  {
    icon: 'check-circle',
    title: '電子器材清潔維護',
    description:
      '清除打印機、電腦、鍵盤等電子器材的積塵與污漬，不影響設備正常使用。'
  },
  {
    icon: 'users',
    title: '洗手間清潔消毒',
    description: '深度清洗與消毒，並提供除臭劑與積水處理，確保洗手間乾淨衛生。'
  }
]

/** 服務圖集 */
const gallery = [
  { file: 'img17.jpg', alt: '寫字樓清潔後的辦公桌與儲物櫃' },
  { file: 'img18.jpg', alt: '寫字樓清潔服務的公共走廊' },
  { file: 'img19.jpg', alt: '寫字樓清潔後的會議室' },
  { file: 'img21.jpg', alt: '寫字樓清潔後的辦公室地面' },
  { file: 'img20.jpg', alt: '寫字樓清潔服務的洗手間' },
  { file: 'img22.jpg', alt: '寫字樓清潔後的接待區' },
  { file: 'img23.jpg', alt: '清潔團隊使用高壓清洗機清洗窗戶' },
  { file: 'img25.jpg', alt: '寫字樓清潔服務的休息區' }
].map((item) => ({ ...item, src: getImageUrl(item.file) }))
</script>

<template>
  <div>
    <PageHero
      title="寫字樓｜商業清潔服務"
      subtitle="專業外判保潔為寫字樓提供日常清潔、深度清潔、地毯清洗、玻璃清潔及洗手間消毒等全面服務，營造健康、舒適的辦公環境。"
      parent-label="返回首頁"
      parent-path="/"
      :image="getImageUrl('img11.jpg')"
      image-alt="清潔後亮麗的寫字樓大堂入口"
    />

    <!-- 服務簡介 -->
    <section class="mx-auto max-w-container px-4 py-12 sm:py-14">
      <SectionHeading
        title="寫字樓環境清潔的重要性"
        description="良好的辦公室環境清潔不僅能提升員工工作效率，更能營造健康、舒適的工作環境。"
      />

      <div class="grid gap-6 lg:grid-cols-3">
        <div class="lg:col-span-2">
          <p class="text-[15px] leading-relaxed text-ink-600">
            尚潔清潔團隊將為您提供合理、專業化的清潔服務，消除寫字樓環境內的污漬、病毒與過敏源，讓員工保持健康並提高效率。我們的專業團隊使用先進的清潔設備和環保清潔劑，確保每一個角落都能得到徹底清潔。
          </p>
          <p class="mt-3 text-[15px] leading-relaxed text-ink-600">
            無論是小型辦公室還是大型企業，我們都能根據客戶需求提供不同週期且定制化的清潔方案，歡迎咨詢我們。
          </p>
        </div>

        <div class="rounded-lg border border-brand-200 bg-brand-50 p-5">
          <h3 class="text-base font-bold text-ink-900">我們的清潔服務包括</h3>
          <ul class="mt-3 space-y-2 text-sm text-ink-600">
            <li class="flex items-start gap-2">
              <font-awesome-icon class="mt-1 text-xs text-brand-600" :icon="['fas', 'check-circle']" />
              日常清潔與深度清潔
            </li>
            <li class="flex items-start gap-2">
              <font-awesome-icon class="mt-1 text-xs text-brand-600" :icon="['fas', 'check-circle']" />
              地毯清洗與地板保養
            </li>
            <li class="flex items-start gap-2">
              <font-awesome-icon class="mt-1 text-xs text-brand-600" :icon="['fas', 'check-circle']" />
              玻璃幕牆與窗戶清潔
            </li>
            <li class="flex items-start gap-2">
              <font-awesome-icon class="mt-1 text-xs text-brand-600" :icon="['fas', 'check-circle']" />
              洗手間清潔與消毒
            </li>
            <li class="flex items-start gap-2">
              <font-awesome-icon class="mt-1 text-xs text-brand-600" :icon="['fas', 'check-circle']" />
              電子設備除塵維護
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 清潔內容 -->
    <section class="border-y border-line bg-surface-soft">
      <div class="mx-auto max-w-container px-4 py-12 sm:py-14">
        <SectionHeading
          title="寫字樓清潔的具體內容"
          description="我們將根據您的時間安排調整清潔計劃，不會影響您的日常工作安排。"
        />

        <FeatureGrid :columns="3" :items="features" />
      </div>
    </section>

    <!-- 服務圖集 -->
    <section class="mx-auto max-w-container px-4 py-12 sm:py-14">
      <SectionHeading title="寫字樓清潔實績" description="我們的清潔團隊進駐各類寫字樓，提供細緻到位的專業服務。" />

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

    <CTASection />
  </div>
</template>

<script lang="ts">
export default {
  name: 'BusinessView'
}
</script>
