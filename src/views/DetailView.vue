<!--
 * @Description: 除甲醛服務詳情頁
 * @Version: 1.0
 * @Autor: GiottoLLL7
 * @Date: 2024-05-30 20:25:21
 * @LastEditors: GiottoLLL7
 * @LastEditTime: 2026-10-29 17:35:00
-->
<script setup lang="ts">
import PageHero from '@/components/PageHero.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import CTASection from '@/components/CTASection.vue'
import PreviewImage from '@/components/PreviewImage.vue'
import { getCh2oImageUrl } from '@/utils/image'

/** 甲醛危害數據 */
const facts = [
  { value: '3–15 年', label: '建材甲醛揮發期', desc: '油漆、膠合板、牆紙、地板等持續釋放' },
  { value: '37%', label: '致癌率增幅', desc: '美國國家癌症研究所公布數據' },
  { value: '0.08 ppm', label: '世界衛生組織建議值', desc: '超過即屬不適合長期居住' },
  { value: '99%+', label: '除甲醛效率', desc: '經多項測試驗證的去除率' }
]

/** 甲醛來源 */
const sources = [
  '木板與膠合板',
  '汽車與車內飾件',
  '牆紙與壁布',
  '地毯與地墊',
  '窗簾與布藝',
  '皮革與皮具',
  '各類木製家具',
  '油漆與黏合劑'
]

/** 甲醛濃度對照 */
const levels = [
  { range: '0.03–0.05 ppm', effect: '沒有臭味或感覺' },
  { range: '0.08 ppm', effect: '世界衛生組織建議值' },
  { range: '0.3–0.5 ppm', effect: '眼睛感到刺激' },
  { range: '0.5–0.8 ppm', effect: '有刺激氣味、呼吸困難、氣喘' },
  { range: '5.0 ppm', effect: '開始頭暈、喉嚨不舒服' },
  { range: '15.0 ppm', effect: '開始咳嗽、流眼淚' },
  { range: '20.0 ppm', effect: '刺激呼吸器官系統、心跳加速' },
  { range: '50.0 ppm 以上', effect: '造成肺水腫、致癌、引致死亡' }
]

/** 工具介紹 */
const tools = [
  {
    title: '專用高壓霧化噴槍',
    purpose:
      '使藥水平均分佈在室內傢俬、儲物櫃連抽屜內及各裝飾每一吋地方。',
    usage:
      '將藥水倒於專用高壓噴槍之藥水瓶內，透過高壓噴塗法，將藥水平均分佈於室內傢俬、儲物櫃等每一吋地方，能夠在短時間內減低 VOC 濃度。',
    image: getCh2oImageUrl('img7.png'),
    alt: '除甲醛專用高壓霧化噴槍'
  },
  {
    title: '甲醛／TVOC 測量儀',
    purpose: '檢測甲醛與 TVOC 濃度是否超出標準。',
    usage:
      '專業技術人員會關上單位的門窗，再用專業 TVOC 儀器，量度室內的總 VOC 濃度。',
    image: getCh2oImageUrl('img9.png'),
    alt: '甲醛與 TVOC 濃度測量儀'
  },
  {
    title: 'CARTEL 光等淨化機',
    purpose: '分裂空氣中的有機污染物，摧毀不健康氣體。',
    usage:
      '利用光等離子光管釋放出光等離子、深頻紫外線、負離子及活性氧，有效消除空氣中的臭味、細菌、病毒、霉菌、煙汽及其它飄浮雜質。',
    image: getCh2oImageUrl('img10.png'),
    alt: 'CARTEL 光等離子淨化機'
  }
]

/** 工具圖片清單，供燈箱預覽切換使用 */
const toolImages = tools.map((tool) => ({ src: tool.image, alt: tool.alt }))
</script>

<template>
  <div>
    <PageHero
      title="根除甲醛｜深度清潔"
      subtitle="採用日本專利無光觸媒技術（JP-ECO），有效降解和治理空氣及物體中所含甲醛、細菌、異味等污染。"
      parent-label="返回首頁"
      parent-path="/"
      :image="getCh2oImageUrl('img1.png')"
      image-alt="除甲醛深度清潔服務"
    />

    <!-- 甲醛是什麼 -->
    <section class="mx-auto max-w-container px-4 py-12 sm:py-14">
      <SectionHeading
        title="甲醛是什麼？"
        description="甲醛是天然存在的有機化合物，也是有特殊刺激氣味的無色氣體，被世界衛生組織公認為致癌物之一。"
      />

      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="fact in facts"
          :key="fact.label"
          class="rounded-lg border border-line bg-surface p-5 shadow-soft"
        >
          <p class="text-2xl font-black text-brand-600">{{ fact.value }}</p>
          <h3 class="mt-1.5 text-sm font-bold text-ink-900">{{ fact.label }}</h3>
          <p class="mt-1 text-xs leading-relaxed text-ink-500">{{ fact.desc }}</p>
        </div>
      </div>

      <div class="mt-6 rounded-lg border border-brand-200 bg-brand-50 p-5">
        <p class="text-sm leading-relaxed text-ink-600">
          數以千計的產品會使用含有甲醛的黏合劑或溶液作生產用途，適用於各種建築材料，包括油漆、膠合板、牆紙、隔熱材料、木製產品、地板、裝修和裝飾材料。所有含有甲醛成份的產品均會不斷在空間中散發有毒甲醛，揮發時間長達 3 至 15 年。長期吸入高濃度甲醛，會對健康造成永久性損害。
        </p>
      </div>
    </section>

    <!-- 甲醛來源 -->
    <section class="border-y border-line bg-surface-soft">
      <div class="mx-auto max-w-container px-4 py-12 sm:py-14">
        <SectionHeading
          title="甲醛的來源"
          description="最常見的甲醛來源，一般為日常生活中每天都能接觸到的物件。"
        />

        <div class="flex flex-wrap gap-2">
          <span
            v-for="source in sources"
            :key="source"
            class="rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm text-ink-600"
          >
            {{ source }}
          </span>
        </div>
      </div>
    </section>

    <!-- 甲醛對健康的危害 -->
    <section class="mx-auto max-w-container px-4 py-12 sm:py-14">
      <SectionHeading title="甲醛對健康的危害" description="長期暴露於高濃度甲醛環境中，會引發以下健康問題。" />

      <div class="grid gap-4 sm:grid-cols-2">
        <div class="rounded-lg border border-line bg-surface p-5 shadow-soft">
          <h3 class="flex items-center gap-2 text-base font-bold text-ink-900">
            <font-awesome-icon class="text-sm text-accent-600" :icon="['fas', 'users']" />
            刺激作用
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-ink-600">
            甲醛會對皮膚黏膜有刺激作用。甲醛在室內達到一定濃度時，人就有不適感，大於 0.15mg/立方米的甲醛濃度可引起眼紅、眼癢、咽喉不適或疼痛、聲音嘶啞、噴嚏、胸悶、氣喘、皮炎等情況。
          </p>
        </div>

        <div class="rounded-lg border border-line bg-surface p-5 shadow-soft">
          <h3 class="flex items-center gap-2 text-base font-bold text-ink-900">
            <font-awesome-icon class="text-sm text-accent-600" :icon="['fas', 'check-circle']" />
            致癌風險
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-ink-600">
            美國國家癌症研究所公布，頻繁接觸甲醛的工人患有血癌、淋巴癌、鼻咽癌、結腸癌、腦瘤、細胞核基因突變等的發生機率及死亡率比一般人高達 37%。
          </p>
        </div>

        <div class="rounded-lg border border-line bg-surface p-5 shadow-soft">
          <h3 class="flex items-center gap-2 text-base font-bold text-ink-900">
            <font-awesome-icon class="text-sm text-accent-600" :icon="['fas', 'clock']" />
            急性中毒反應
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-ink-600">
            甲醛濃度過高會引起急性中毒，可能出現咽喉燒灼痛、呼吸困難、肺水腫、過敏性皮炎、黃疸等情況。
          </p>
        </div>

        <div class="rounded-lg border border-line bg-surface p-5 shadow-soft">
          <h3 class="flex items-center gap-2 text-base font-bold text-ink-900">
            <font-awesome-icon class="text-sm text-accent-600" :icon="['fas', 'briefcase']" />
            導致基因突變
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-ink-600">
            甲醛能引起細胞核的基因突變、染色體損傷與 DNA 斷裂，對生殖系統與胚胎發育造成不可逆影響。
          </p>
        </div>
      </div>
    </section>

    <!-- 濃度對照表 -->
    <section class="border-y border-line bg-surface-soft">
      <div class="mx-auto max-w-container px-4 py-12 sm:py-14">
        <SectionHeading title="甲醛濃度一覽" description="參考下列濃度數值，評估居住空間的空氣質素。" />

        <div class="overflow-hidden rounded-lg border border-line bg-surface">
          <table class="w-full text-left text-sm">
            <thead class="bg-brand-50 text-ink-900">
              <tr>
                <th class="px-4 py-3 font-bold">甲醛濃度</th>
                <th class="px-4 py-3 font-bold">對人體的影響</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-line">
              <tr v-for="level in levels" :key="level.range">
                <td class="px-4 py-3 font-medium text-ink-900">{{ level.range }}</td>
                <td class="px-4 py-3 text-ink-600">{{ level.effect }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="mt-5 grid gap-3 sm:grid-cols-3">
          <div class="rounded-lg border border-line bg-surface p-4">
            <p class="text-xs font-medium text-ink-500">香港環境保護署 IAQ Center</p>
            <p class="mt-1 text-sm font-bold text-ink-900">0.081 ppm（良好級）</p>
            <p class="text-xs text-ink-400">0.024 ppm（卓越級）</p>
          </div>
          <div class="rounded-lg border border-line bg-surface p-4">
            <p class="text-xs font-medium text-ink-500">世界衛生組織</p>
            <p class="mt-1 text-sm font-bold text-ink-900">0.08 ppm</p>
          </div>
          <div class="rounded-lg border border-line bg-surface p-4">
            <p class="text-xs font-medium text-ink-500">歐盟環境標準</p>
            <p class="mt-1 text-sm font-bold text-ink-900">0.1 ppm</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 除甲醛方法比較 -->
    <section class="mx-auto max-w-container px-4 py-12 sm:py-14">
      <SectionHeading
        title="除甲醛方法比較"
        description="家居新裝修以及新家具甲醛釋出含量一般都會超標，建議使用較專業及安全的除甲醛產品。"
      />

      <img
        alt="常見除甲醛方法有效性比較圖表"
        class="w-full rounded-lg shadow-soft"
        :src="getCh2oImageUrl('img4.png')"
      />

      <div class="mt-6 rounded-lg border border-brand-200 bg-brand-50 p-5">
        <h3 class="text-base font-bold text-ink-900">純植物除臭抑菌劑（除甲醛配方）</h3>
        <p class="mt-2 text-sm leading-relaxed text-ink-600">
          通過日本泓前大學、香港 STC 等多項測試結果證明有效去除 99% 以上甲醛、能殺滅多種細菌及有害物質。包括 H1N1、金黃色葡萄球菌、大腸桿菌、沙門氏菌、塵蟎等。產品 100% 純天然、不損害皮膚、入口無毒性，既綠色環保且安全。
        </p>
      </div>
    </section>

    <!-- 常用工具 -->
    <section class="border-t border-line bg-surface-soft">
      <div class="mx-auto max-w-container px-4 py-12 sm:py-14">
        <SectionHeading title="常用工具" description="專業設備配合環保藥水，確保每個角落都徹底處理。" />

        <div class="space-y-4">
          <div
            v-for="(tool, index) in tools"
            :key="tool.title"
            class="grid gap-4 rounded-lg border border-line bg-surface p-4 sm:grid-cols-[1fr_180px] sm:items-center"
          >
            <div>
              <h3 class="text-base font-bold text-ink-900">{{ tool.title }}</h3>
              <p class="mt-2 text-sm leading-relaxed text-ink-600">
                <span class="font-medium text-brand-600">用途：</span>{{ tool.purpose }}
              </p>
              <p class="mt-1.5 text-sm leading-relaxed text-ink-600">
                <span class="font-medium text-brand-600">使用方法：</span>{{ tool.usage }}
              </p>
            </div>
            <PreviewImage
              :alt="tool.alt"
              :images="toolImages"
              :index="index"
              :src="tool.image"
              wrapper-class="h-36 rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>

    <CTASection
      title="專業除甲醛服務"
      description="請立即聯繫我們，獲得優質的清潔與除甲醛服務體驗。我們會為您安排專業團隊上門檢測與施工。"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: 'DetailView'
}
</script>
