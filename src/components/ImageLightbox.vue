<!--
 * @Description: 圖片燈箱預覽
 * @Version: 1.0
 * @Autor: GiottoLLL7
 * @Date: 2026-10-30 10:15:00
 * @LastEditors: GiottoLLL7
 * @LastEditTime: 2026-10-30 10:15:00
-->
<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useLightbox } from '@/composables/useLightbox'

const { state, current, total, close, next, prev, goTo } = useLightbox()

/** 載入中的圖片索引集合，避免切換時殘留上一張 */
const loaded = ref<Set<number>>(new Set())

/** 觸控滑動起點 */
let touchStartX = 0
let touchStartY = 0
/** 是否為水平滑動（避免與垂直捲動衝突） */
let isHorizontalSwipe = false

/** 是否可切換上一張／下一張 */
const canNavigate = computed(() => total.value > 1)

/** 關閉並重設狀態 */
const handleClose = (): void => {
  close()
}

/** 點擊遮罩空白處關閉，點擊圖片本身不關閉 */
const handleBackdrop = (event: MouseEvent): void => {
  if (event.target === event.currentTarget) {
    handleClose()
  }
}

/** 鍵盤操作 */
const handleKeydown = (event: KeyboardEvent): void => {
  if (!state.open) {
    return
  }
  switch (event.key) {
    case 'Escape':
      handleClose()
      break
    case 'ArrowRight':
      next()
      break
    case 'ArrowLeft':
      prev()
      break
    default:
      break
  }
}

/** 觸控起點 */
const handleTouchStart = (event: TouchEvent): void => {
  touchStartX = event.changedTouches[0].clientX
  touchStartY = event.changedTouches[0].clientY
  isHorizontalSwipe = true
}

/** 觸控結束：判斷是否為水平滑動切換 */
const handleTouchEnd = (event: TouchEvent): void => {
  if (!isHorizontalSwipe) {
    return
  }
  isHorizontalSwipe = false

  const deltaX = event.changedTouches[0].clientX - touchStartX
  const deltaY = event.changedTouches[0].clientY - touchStartY

  // 水平位移需大於垂直位移，且超過 50px 才視為切換意圖
  if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
    if (deltaX < 0) {
      next()
    } else {
      prev()
    }
  }
}

/** 鎖定頁面捲動，避免背景跟著滾動 */
watch(
  () => state.open,
  (isOpen) => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    if (!isOpen) {
      loaded.value = new Set()
    }
  }
)

/** 圖片載入完成 */
const markLoaded = (index: number): void => {
  loaded.value = new Set([...loaded.value, index])
}

/** 判斷某張圖片是否已載入 */
const isLoaded = (index: number): boolean => loaded.value.has(index)

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      leave-active-class="transition-opacity duration-150"
      leave-to-class="opacity-0"
    >
      <div
        v-if="state.open"
        class="fixed inset-0 z-[100] flex flex-col bg-ink-900/95 backdrop-blur-sm"
        role="dialog"
        aria-modal="true"
        aria-label="圖片預覽"
        @click="handleBackdrop"
      >
        <!-- 頂部列 -->
        <div
          class="flex shrink-0 items-center justify-between px-4 py-3 text-white sm:px-6"
        >
          <p class="text-sm font-medium tabular-nums">
            {{ state.index + 1 }} / {{ total }}
          </p>
          <button
            class="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            type="button"
            aria-label="關閉預覽"
            @click="handleClose"
          >
            <font-awesome-icon class="text-base" :icon="['fas', 'xmark']" />
          </button>
        </div>

        <!-- 主圖區 -->
        <div
          class="relative flex min-h-0 flex-1 flex-col items-center justify-center px-2 pb-2 sm:px-14"
          @touchstart.passive="handleTouchStart"
          @touchend.passive="handleTouchEnd"
        >
          <button
            v-if="canNavigate"
            class="absolute left-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/30 sm:left-4"
            type="button"
            aria-label="上一張"
            @click.stop="prev"
          >
            <font-awesome-icon class="text-sm" :icon="['fas', 'chevron-left']" />
          </button>

          <figure class="flex min-h-0 w-full flex-1 items-center justify-center">
            <img
              v-if="current"
              :alt="current.alt"
              :class="isLoaded(state.index) ? 'opacity-100' : 'opacity-0'"
              class="max-h-full max-w-full rounded-lg object-contain shadow-lift transition-opacity duration-200"
              :src="current.src"
              @load="markLoaded(state.index)"
            />
          </figure>

          <p
            v-if="current"
            class="mt-3 w-full shrink-0 px-2 text-center text-xs leading-relaxed text-white/80 sm:text-sm"
          >
            {{ current.alt }}
          </p>

          <button
            v-if="canNavigate"
            class="absolute right-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/30 sm:right-4"
            type="button"
            aria-label="下一張"
            @click.stop="next"
          >
            <font-awesome-icon class="text-sm" :icon="['fas', 'chevron-right']" />
          </button>
        </div>

        <!-- 縮略圖條 -->
        <div
          v-if="total > 1"
          class="shrink-0 overflow-x-auto px-4 pb-4 pt-2 sm:px-6"
        >
          <div class="mx-auto flex max-w-4xl gap-2">
            <button
              v-for="(image, index) in state.images"
              :key="image.src"
              :class="index === state.index ? 'ring-2 ring-white' : 'opacity-50 hover:opacity-90'"
              class="h-14 w-20 shrink-0 overflow-hidden rounded transition-all sm:h-16 sm:w-24"
              type="button"
              :aria-label="`查看第 ${index + 1} 張`"
              @click.stop="goTo(index)"
            >
              <img :alt="image.alt" class="h-full w-full object-cover" :src="image.src" />
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts">
export default {
  name: 'ImageLightbox'
}
</script>
