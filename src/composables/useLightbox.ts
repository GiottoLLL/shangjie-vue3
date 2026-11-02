/**
 * @Description: 圖片燈箱預覽 composable
 * @Version: 1.0
 * @Autor: GiottoLLL7
 * @Date: 2026-10-30 10:15:00
 * @LastEditors: GiottoLLL7
 * @LastEditTime: 2026-10-30 10:15:00
 *
 * 模組層級的共用狀態，讓任何元件都能開啟同一個燈箱，
 * 不需逐層傳遞 props。配合 `Lightbox.vue` 使用。
 */
import { computed, reactive } from 'vue'

/** 燈箱中的一張圖片 */
export interface LightboxImage {
  /** 圖片網址 */
  src: string
  /** 圖片替代文字 */
  alt: string
}

interface LightboxState {
  /** 是否開啟 */
  open: boolean
  /** 圖片清單 */
  images: LightboxImage[]
  /** 目前索引 */
  index: number
}

const state = reactive<LightboxState>({
  open: false,
  images: [],
  index: 0
})

/**
 * 使用燈箱功能。
 * @returns 燈箱狀態與操作方法
 */
export const useLightbox = () => {
  /** 目前顯示的圖片 */
  const current = computed<LightboxImage | null>(() => state.images[state.index] ?? null)

  /** 圖片總數 */
  const total = computed(() => state.images.length)

  /**
   * 開啟燈箱。
   * @param images 圖片清單
   * @param index 起始索引
   */
  const open = (images: LightboxImage[], index = 0): void => {
    if (!images.length) {
      return
    }
    state.images = images
    state.index = Math.min(Math.max(index, 0), images.length - 1)
    state.open = true
  }

  /** 關閉燈箱 */
  const close = (): void => {
    state.open = false
  }

  /** 下一張（循環） */
  const next = (): void => {
    if (state.images.length < 2) {
      return
    }
    state.index = (state.index + 1) % state.images.length
  }

  /** 上一張（循環） */
  const prev = (): void => {
    if (state.images.length < 2) {
      return
    }
    state.index = (state.index - 1 + state.images.length) % state.images.length
  }

  /**
   * 跳至指定索引。
   * @param index 目標索引
   */
  const goTo = (index: number): void => {
    if (index < 0 || index >= state.images.length) {
      return
    }
    state.index = index
  }

  return { state, current, total, open, close, next, prev, goTo }
}
