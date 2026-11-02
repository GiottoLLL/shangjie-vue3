<!--
 * @Description: 地板打蠟服務詳情頁
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
import { getFloorWaxingImageUrl } from '@/utils/image'

/** 打蠟好處 */
const benefits = [
  {
    icon: 'check-circle',
    title: '保護地板',
    description: '打蠟能在地板表面形成一層保護膜，防止磨損、劃痕和水漬滲透，延長使用壽命。'
  },
  {
    icon: 'users',
    title: '提升光澤',
    description: '經過打蠟的地板會顯得更加光亮，提升室內的美觀度和高級感。'
  },
  {
    icon: 'briefcase',
    title: '易於清潔',
    description: '打蠟後地板表面更加光滑，灰塵和污垢不易附著，日常清潔變得更加簡單高效。'
  },
  {
    icon: 'clock',
    title: '防滑效果',
    description: '一些特殊的蠟產品具有防滑功能，能有效減少滑倒的風險，增加環境的安全性。'
  }
]

/** 打蠟流程 */
const steps = [
  {
    title: '地板清潔',
    items: [
      '吸塵和掃地：首先徹底清掃地板，去除灰塵和垃圾。',
      '清洗地板：使用中性清潔劑和溼布擦拭地板表面，確保沒有殘留的污漬和油脂。',
      '乾燥地板：清洗完畢後確保地板完全乾燥，以免蠟層不均勻。'
    ]
  },
  {
    title: '打蠟準備',
    items: [
      '選擇蠟品：根據地板材質選擇合適的地板蠟（如實木、複合、瓷磚等）。',
      '調製蠟液：按照蠟品說明書的比例調製蠟液，確保均勻混合。'
    ]
  },
  {
    title: '打蠟操作',
    items: [
      '塗蠟：使用專業打蠟工具均勻塗抹蠟液，避免蠟液堆積。',
      '晾乾：待蠟層乾燥，通常需要 30 分鐘至 1 小時，具體時間視蠟品而定。',
      '打磨：根據需求，乾燥後使用打磨機輕輕打磨蠟層，使其更加光滑。',
      '多次塗蠟：塗兩到三層蠟，每層蠟都需完全乾燥後再塗下一層，以確保最佳效果。'
    ]
  },
  {
    title: '最終清潔和維護',
    items: [
      '擦拭和檢查：打蠟完成後輕輕擦拭表面並檢查有無漏塗或氣泡。',
      '定期維護：打蠟後的地板應避免使用過於硬質的清潔工具，以免破壞蠟層。'
    ]
  }
]

/** 服務圖集 */
const gallery = [
  { file: 'img3.jpg', alt: '打蠟施工前的地板清潔' },
  { file: 'img4.jpg', alt: '地板打蠟施工過程' },
  { file: 'img5.jpg', alt: '打蠟工具與蠟品準備' },
  { file: 'img8.jpg', alt: '打蠟完成後的光亮地板' },
  { file: 'img9.jpg', alt: '地板打蠟後的整體效果' }
].map((item) => ({ ...item, src: getFloorWaxingImageUrl(item.file) }))
</script>

<template>
  <div>
    <PageHero
      title="地板打蠟｜精心保養"
      subtitle="清除地板頑固污漬，通過打蠟使材料本身與空氣隔絕，達到延長材料使用壽命和美觀光潔的目的。"
      parent-label="返回首頁"
      parent-path="/"
      :image="getFloorWaxingImageUrl('img1.jpg')"
      image-alt="地板打蠟保養服務"
    />

    <!-- 打蠟好處 -->
    <section class="mx-auto max-w-container px-4 py-12 sm:py-14">
      <SectionHeading
        title="地板打蠟的四大好處"
        description="專業的打蠟保養不止是美觀，更能實質延長地板使用壽命。"
      />

      <FeatureGrid :columns="4" :items="benefits" />
    </section>

    <!-- 服務圖集 -->
    <section class="border-y border-line bg-surface-soft">
      <div class="mx-auto max-w-container px-4 py-12 sm:py-14">
        <SectionHeading title="地板打蠟實績" description="每一步都按標準流程執行，確保蠟層均勻持久。" />

        <div class="grid grid-cols-2 gap-3 lg:grid-cols-5">
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
      </div>
    </section>

    <!-- 打蠟流程 -->
    <section class="mx-auto max-w-container px-4 py-12 sm:py-14">
      <SectionHeading
        title="地板打蠟的流程"
        description="我們將為你定期打蠟保養，延長地板的長期使用。"
      />

      <ol class="relative space-y-8 border-l-2 border-brand-200 pl-6 sm:pl-8">
        <li v-for="(step, index) in steps" :key="step.title" class="relative">
          <span
            class="absolute -left-[31px] flex h-7 w-7 items-center justify-center rounded-full border-2 border-brand-600 bg-surface text-xs font-bold text-brand-700 sm:-left-[39px]"
          >
            {{ index + 1 }}
          </span>
          <h3 class="text-base font-bold text-ink-900 sm:text-lg">{{ step.title }}</h3>
          <ul class="mt-2 space-y-1.5">
            <li
              v-for="item in step.items"
              :key="item"
              class="flex items-start gap-2 text-sm leading-relaxed text-ink-600"
            >
              <font-awesome-icon
                class="mt-1 shrink-0 text-[10px] text-brand-500"
                :icon="['fas', 'check-circle']"
              />
              {{ item }}
            </li>
          </ul>
        </li>
      </ol>
    </section>

    <CTASection
      title="最專業的地板打蠟方案"
      description="我們的專業團隊將會根據您的地板具體情況來為您提供最合適的服務，保證更加長期的使用和整潔。"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: 'FloorWaxingView'
}
</script>
