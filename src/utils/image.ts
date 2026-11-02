/**
 * @Description: 圖片資源取得工具
 * @Version: 1.0
 * @Autor: GiottoLLL7
 * @Date: 2026-10-29 17:35:00
 * @LastEditors: GiottoLLL7
 * @LastEditTime: 2026-10-29 17:35:00
 *
 * 沿用 Vite 靜態資源處理機制，將圖片打包為帶雜湊的檔名並輸出正確路徑。
 * 注意：不可改為字串拼接或 template literal 以外的形式，否則建置時會失效。
 */

/** 取得 src/assets/img 下的圖片網址 */
export const getImageUrl = (name: string): string => {
  return new URL(`../assets/img/${name}`, import.meta.url).href
}

/** 取得 src/assets/img/CH2O 下的圖片網址 */
export const getCh2oImageUrl = (name: string): string => {
  return new URL(`../assets/img/CH2O/${name}`, import.meta.url).href
}

/** 取得 src/assets/img/floor-waxing 下的圖片網址 */
export const getFloorWaxingImageUrl = (name: string): string => {
  return new URL(`../assets/img/floor-waxing/${name}`, import.meta.url).href
}
