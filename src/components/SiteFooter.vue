<!--
 * @Description: 網站頁尾
 * @Version: 1.0
 * @Autor: GiottoLLL7
 * @Date: 2026-10-29 17:35:00
 * @LastEditors: GiottoLLL7
 * @LastEditTime: 2026-10-29 17:35:00
-->
<script setup lang="ts">
import { ADDRESS, EMAIL, MAIL_LINK, PHONE_DISPLAY, TEL_LINK, WHATSAPP_LINK } from '@/config/contact'
import { getImageUrl } from '@/utils/image'

/** 服務項目 */
const services = [
  { label: '寫字樓清潔', path: '/business' },
  { label: '餐廳廚房清潔', path: '/restaurant' },
  { label: '地板打蠟', path: '/floorWaxing' },
  { label: '除甲醛服務', path: '/detail' },
  { label: '關於我們', path: '/aboutus' }
]
</script>

<template>
  <footer class="border-t border-line bg-surface pb-[var(--mobile-cta-height)] sm:pb-0">
    <div class="mx-auto max-w-container px-4 py-10">
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div class="flex items-center gap-2">
            <img
              alt="尚潔清潔服務有限公司標誌"
              class="h-9 w-9 object-contain"
              height="36"
              :src="getImageUrl('logo2.png')"
              width="36"
            />
            <span class="text-sm font-bold text-ink-900">尚潔清潔服務有限公司</span>
          </div>
          <p class="mt-3 text-sm leading-relaxed text-ink-500">
            「清潔專家」尚潔服務有限公司<br />
            專業、細緻、徹底。
          </p>
        </div>

        <div>
          <h2 class="text-sm font-bold text-ink-900">服務範圍</h2>
          <ul class="mt-3 space-y-2">
            <li v-for="item in services" :key="item.path">
              <RouterLink
                :to="item.path"
                class="text-sm text-ink-500 transition-colors hover:text-brand-600"
              >
                {{ item.label }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="text-sm font-bold text-ink-900">聯絡我們</h2>
          <ul class="mt-3 space-y-2 text-sm text-ink-500">
            <li>
              <a :href="TEL_LINK" class="transition-colors hover:text-brand-600">
                電話：{{ PHONE_DISPLAY }}
              </a>
            </li>
            <li>
              <a
                :href="WHATSAPP_LINK"
                target="_blank"
                rel="noopener"
                class="transition-colors hover:text-brand-600"
              >
                WhatsApp 諮詢
              </a>
            </li>
            <li>
              <a :href="MAIL_LINK" class="transition-colors hover:text-brand-600">
                {{ EMAIL }}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="text-sm font-bold text-ink-900">公司地址</h2>
          <address class="mt-3 text-sm not-italic leading-relaxed text-ink-500">
            {{ ADDRESS }}
          </address>
        </div>
      </div>

      <div
        class="mt-8 flex flex-col gap-2 border-t border-line pt-5 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between"
      >
        <p>Copyright © {{ new Date().getFullYear() }} 尚潔清潔服務有限公司 版權所有</p>
        <p>網站由 Vue 3 + Vite 建置</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: 'SiteFooter'
}
</script>
