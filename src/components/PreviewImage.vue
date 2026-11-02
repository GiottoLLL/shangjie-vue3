<!--
 * @Description: 可點擊預覽的圖片
 * @Version: 1.0
 * @Autor: GiottoLLL7
 * @Date: 2026-10-30 10:15:00
 * @LastEditors: GiottoLLL7
 * @LastEditTime: 2026-10-30 10:15:00
-->
<script setup lang="ts">
import { useLightbox, type LightboxImage } from '@/composables/useLightbox'

const props = withDefaults(
  defineProps<{
    /** 圖片網址 */
    src: string
    /** 圖片替代文字 */
    alt: string
    /** 同一組圖片，點擊後可左右切換 */
    images?: LightboxImage[]
    /** 當前圖片在 images 中的索引 */
    index?: number
    /** 圖片容器額外樣式 */
    wrapperClass?: string
    /** 圖片額外樣式 */
    imgClass?: string
  }>(),
  {
    images: undefined,
    index: 0,
    wrapperClass: '',
    imgClass: ''
  }
)

const { open } = useLightbox()

/** 開啟燈箱預覽 */
const handlePreview = (): void => {
  const list: LightboxImage[] = props.images?.length
    ? props.images
    : [{ src: props.src, alt: props.alt }]
  const targetIndex = props.images?.length ? props.index : 0
  open(list, targetIndex)
}
</script>

<template>
  <button
    type="button"
    class="group relative block w-full cursor-zoom-in overflow-hidden"
    :class="wrapperClass"
    :aria-label="`放大查看：${alt}`"
    @click.stop="handlePreview"
  >
    <img
      :alt="alt"
      class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      :class="imgClass"
      :src="src"
    />
    <span
      class="pointer-events-none absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-ink-900/60 text-white opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100"
    >
      <font-awesome-icon class="text-xs" :icon="['fas', 'magnifying-glass-plus']" />
    </span>
  </button>
</template>

<script lang="ts">
export default {
  name: 'PreviewImage'
}
</script>
