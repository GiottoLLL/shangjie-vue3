# 視覺改版方案（前端設計優化）

> 狀態：待評審
> 對應需求：客戶反饋「整體樣式有點醜」，需重新設計符合清潔公司業務風格的新前端，以移動端為主，簡單適配 PC 端。

---

## 1. 現狀基線（實測採集，非推測）

以下結論全部來自實際啟動 `pnpm dev` 後的瀏覽器截圖與 DOM 查詢。

### 1.1 移動端實測（390 × 844）

| 問題 | 實測表現 | 嚴重度 |
|---|---|---|
| Logo 尺寸失控 | `GHeader.vue:69` 移動端使用 `h-48 w-48`（192px），佔據首屏約 22% 高度 | 高 |
| 正文被遮擋 | 懸浮按鈕（電話／郵件／WhatsApp）橫排於底部，**壓住正文文字**，移動端尤甚 | 高 |
| 缺少導航入口 | 移動端僅靠右上角漢堡選單，首頁無底部導航，服務頁面無返回路徑 | 中 |
| 頭部留白過大 | `App.vue:33` 移動端使用 `pt-52`（208px），為 192px logo 讓位 | 中 |
| 首屏無價值主張 | 進入首頁先看到巨大 Logo 與輪播，無一句說明「我們提供什麼服務」 | 中 |

### 1.2 PC 端實測（1280 × 720）

| 問題 | 實測表現 | 嚴重度 |
|---|---|---|
| 視覺層級扁平 | 段落以「標題 + 大段文字」堆疊，`AboutUsView.vue` 與首頁文案大量重複 | 高 |
| 配色廉價 | 主色藍 `#3b82f6` 直接用於關鍵詞高亮，與 Logo 藍重複，缺少行業色彩系統 | 中 |
| 卡片陳舊 | `bg-gray-100` + `shadow-lg` + `rounded-lg` 的 Bootstrap 風格組合 | 中 |
| 圖片堆砌 | 連續 3 張全寬大圖（`img33` / `img23` / `img2`）無任何文字或結構承載 | 中 |
| 頁面過長 | 首頁正文字數過多，`text-justify` 對中文排版不友好 | 中 |

### 1.3 技術層面

- 打包體積：`index.js` **1,603.98 kB**（gzip 446.54 kB），其中 naive-ui 未使用卻整包引入，移除後可降至 **303.57 kB**（-81%）
- 圖片總量：39 張，平均 180–500 kB，最大 `img1-DYzQcWxR.png` 523 kB
- 構建告警：Vite 提示 chunk 超過 500 kB 門檻

---

## 2. 設計定位

### 2.1 業務調性提煉

清潔服務公司的核心資產是「**信任**」與「**專業**」，而非「炫技」。目標客群是香港的寫字樓物管、餐廳業主與家庭，用戶多在**手機上快速找服務、看價格範圍、立即致電**。

因此設計必須傳達：**乾淨、專業、可信、即日回應**。

### 2.2 設計原則

| 原則 | 落地方式 |
|---|---|
| 移動端優先 | 單欄流式佈局，360px 起無橫向滾動；PC 端以 `max-w-5xl` 居中，不做複雜多欄 |
| 轉化優先 | 電話號碼、WhatsApp 固定可達；首屏即可見「立即致電」 |
| 克制 | 單一主色，避免多色並置；移除 `animate-pulse` 等廉價動效 |
| 以圖像傳達 | 清潔前後對比、工種場景大圖承載資訊，而非長段文字 |
| 中后排版 | 遵循 CJK 密度基準：正文 14–15px / 行高 1.6 / 區段間距 40–56px |

### 2.3 色彩系統

> ✅ **客戶已確認：主色方向採「青綠 + 潔淨白藍」。** 以下為已實作的最終 token（見 `src/styles/tokens.css`）。

主色沿用 Logo 水滴藍的「清淨」意象，但改以**青綠**為主調、**潔淨白藍**為輔調，建立完整色階：

```css
:root {
  /* 主色：青綠 —— 潔淨、專業 */
  --brand-700: #0b6b63;
  --brand-600: #0d8078;
  --brand-500: #12968c;
  --brand-400: #34ada3;
  --brand-200: #a8dad4;
  --brand-100: #d3ecea;
  --brand-50:  #eef8f7;

  /* 輔色：潔淨白藍 —— 可信、可靠 */
  --sky-700: #1c5f92;
  --sky-600: #2477b5;
  --sky-500: #3391cf;
  --sky-200: #b3d7f0;
  --sky-100: #d9ebf8;
  --sky-50:  #f0f7fc;

  /* 強調色：暖橙 —— 用於電話等主要行動呼籲 */
  --accent-600: #c97b08;
  --accent-500: #f0a500;
  --accent-100: #fdeecd;
  --accent-50:  #fef8ec;

  /* 中性色 */
  --ink-900: #0f1b2a;   /* 主標題 */
  --ink-600: #46586b;   /* 正文 */
  --ink-400: #8595a6;   /* 輔助文字 */
  --line:     #e3e9ef;
  --surface:  #ffffff;
  --canvas:   #f2f7fa;
}
```

**禁用**：純黑 `#000`、紫藍漸層、霓虹光效、高飽和綠（`from-green-500 to-green-300` 類漸層球 —— 此為改版前「廉價感」的主要來源，已全面移除）。

**深色模式**：所有 token 在 `@media (prefers-color-scheme: dark)` 區塊內有對應的深色值，深色模式已由 CSS 統一處理（修正了改版前 `App.vue` 媒體查詢語法錯誤導致深色模式失效的問題）。

### 2.4 字體

```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700;900&display=swap" rel="stylesheet">
```

- 繁體中文使用 **Noto Sans TC**（現有程式碼 `ShangJieIndex.vue:281` 已在 scoped style 引用，但 `index.html` 未引入字體檔，實際未生效）
- 禁用 `Inter` / `Roboto` / `Arial` 等不含中文字形的西文字體作為主字體
- 標題字重 700–900，正文 400，輔助說明 500

---

## 3. 改版設計稿規格

### 3.1 全域佈局

```
┌─────────────────────────────┐
│  頂部細條（電話 / 地址）      │  ← 新增：桌面顯示，手機隱藏
├─────────────────────────────┤
│  Header（Logo 40px + 導航）   │  ← 固定，移動端 logo 由 192px 降至 40px
├─────────────────────────────┤
│                             │
│  頁面內容（單欄）             │  ← 移動端最大寬度 100%，PC 端 max-w-5xl 居中
│                             │
├─────────────────────────────┤
│  底部 CTA 條（深藍底）        │  ← 新增：立即致電 + WhatsApp
├─────────────────────────────┤
│  Footer（地址/電話/版權）     │
└─────────────────────────────┘
     ＋ 懸浮 WhatsApp 圓形按鈕（單一，非三顆疊排）
```

### 3.2 首頁（`ShangJieIndex.vue`）新結構

1. **Hero 區**
   - 背景：輪播圖改為**左文右圖**的漸層遮罩佈局，文字疊加於圖上
   - 主標題：`專業清潔服務`（32–40px，字重 900）
   - 副標：`外判保潔 · 除甲醛 · 地板打蠟`
   - 雙 CTA：`立即致電`（主色實心）+ `WhatsApp 諮詢`（描邊）
   - 輪播：改用 `cover` 裁切、比例 4:3（移動）／16:9（PC），避免不同尺寸圖片拉伸變形

2. **信任條**（新增）
   - 4 個小卡片：服務年資、專業團隊、服務場景、即日回應
   - 圖示使用 FontAwesome `solid` 樣式（`fas`），每個 24px，`currentColor`

3. **服務範圍**（由大段文字改為卡片網格）
   - 3 個服務卡片，各含真實場景圖 + 服務名 + 一句話描述 + 連結
   - 卡片：`rounded-2xl` + `border border-line` + `shadow-[0_2px_8px_rgba(0,0,0,0.04)]`

4. **服務亮點**（新增）
   - 除甲醛技術（JP-ECO）、高壓水流清洗機
   - 採用左右交錯的「圖文區塊」，非並排三卡

5. **案例 / 場景展示**（取代現有連續堆砌的全寬大圖）
   - 改為 2 列瀑布式網格 + 圖片圓角化

6. **Footer**
   - 現有電話 `5399 8757` 與 `callPhone` 中的 `tel:54901420` **不一致**，需統一批正（見 `docs/03-bug-fixes.md`）

### 3.3 詳情頁（`businessView` / `RestaurantView` / `DetailView` / `FloorWaxingView`）

現狀問題：四個頁面大量複製「首圖 → 文字區 → 圖片網格 → 文字區 → CTA」的樣板，且 `AboutUsView.vue` 與首頁正文幾乎完全重複。

改版後統一為：

```
PageHero（麵包屑 + 標題 + 一句話價值主張 + CTA）
   ↓
FeatureGrid（3–4 個要點卡片，取代長段落）
   ↓
Gallery（2 列圖片網格）
   ↓
Process（有序號的步驟時間線，取代 <br/> 堆疊的段落）
   ↓
CTASection（統一深藍色卡片）
```

**`DetailView.vue`（除甲醛）重點**：目前是 159 行的長文資訊頁，含大量 `<br />` 與 `<ul>` 混排。改為「甲醛危害數據卡（0.08ppm / 3–15年 / 37% 致癌率）+ 濃度對照表 + 工具介紹」的結構化呈現。

### 3.4 元件化建議

| 新元件 | 職責 |
|---|---|
| `components/PageHero.vue` | 詳情頁統一頭圖與標題 |
| `components/ServiceCard.vue` | 服務卡片（圖 + 標題 + 描述 + 連結） |
| `components/FeatureGrid.vue` | 要點卡片網格 |
| `components/CTASection.vue` | 統一轉化區 |
| `components/TrustBar.vue` | 信任條 |
| `components/SiteFooter.vue` | 頁腳（目前僅存在於首頁，其餘 5 頁均缺失） |

> 目前 `footer` 只寫在 `ShangJieIndex.vue` 內，其他 5 個視圖**完全沒有頁腳**，屬結構性缺陷。

### 3.5 圖片處理

- 現有 39 張圖片平均 180–500 kB，總計約 13 MB，**全部未壓縮**
- 改版時需：統一裁切比例（`aspect-ratio` + `object-cover`）、轉 WebP 或 AVIF
- 首屏 Hero 圖建議 ≤ 200 kB，詳情頁圖 ≤ 120 kB
- 需引入 `sharp` 於建置階段做轉檔，或改用 Vite 插件

---

## 4. 實作階段劃分

| 階段 | 內容 | 產出 | 可獨立驗收 |
|---|---|---|---|
| **P0** | 建立設計 token（`src/styles/tokens.css`）、字體引入、Header 改造（logo 縮至 40px、修正懸浮按鈕遮擋）、全域間距與配色 | 可用的視覺基礎 | 是 |
| **P1** | 首頁重構（Hero、信任條、服務卡片、CTA 條）、Footer 抽為元件並套用至全部頁面 | 首頁全新樣貌 | 是 |
| **P2** | 詳情頁模板化（4 個業務頁 + 關於我們頁去重） | 全站一致 | 是 |
| **P3** | 圖片壓縮與響應式 srcset、swiper 比例修正 | 效能 | 是 |

每階段結束後**必須**執行以下驗證：

```bash
pnpm run type-check   # 必須 exit 0
pnpm run build        # 必須 exit 0
```

並以瀏覽器工具截圖（390×844 與 1280×720）逐頁比對，確認：

- 360px 寬度下無橫向滾動
- 懸浮按鈕不遮擋任何正文
- 中文無錯別字、無簡體字
- 所有圖片載入成功（無 404）

---

## 5. 設計參考技能

| 技能 | 用途 |
|---|---|
| `visual-page` | 設計哲學、CJK 排版密度基準、配色與字體規範、Anti-Slop 清單 |
| `browser-use:control-in-app-browser` | 改版過程中的逐頁截圖與 DOM 實測驗證 |

> 說明：本環境**沒有**獨立的「前端設計審美」技能套件，最接近的是 `visual-page` 的設計哲學章節；已按其規範（頁面模式選擇、單一主色、CJK 密度、禁用廉價動效、圖示使用 inline SVG 或字體圖示）執行。

---

## 6. 實施結果（已於本次改版完成）

### 6.1 實際新增元件

| 元件 | 職責 |
|---|---|
| `src/components/SiteFooter.vue` | 全站頁腳（四欄：品牌／服務範圍／聯絡／地址） |
| `src/components/PageHero.vue` | 詳情頁統一頁首橫幅（背景圖 + 漸層遮罩 + 雙 CTA + 麵包屑） |
| `src/components/ServiceCard.vue` | 服務卡片（圖 + 標籤 + 標題 + 描述 + 連結） |
| `src/components/FeatureGrid.vue` | 要點卡片網格（2/3/4 欄可選） |
| `src/components/TrustBar.vue` | 信任要點條（4 項） |
| `src/components/CTASection.vue` | 統一行動呼籲區塊 |
| `src/components/SectionHeading.vue` | 區段標題 |
| `src/config/contact.ts` | 聯絡資訊單一配置來源 |
| `src/styles/tokens.css` | 設計 token（含深色模式） |
| `src/utils/image.ts` | 圖片資源取得工具 |

### 6.1.1 圖片燈箱預覽（2026-10-30 追加）

圖集類圖片原先僅可靜態瀏覽，使用者無法看清清潔細節。本次新增全螢幕預覽功能，採**手寫實作**（未引入第三方燈箱套件，遵循「最小必要依賴」原則）。

| 檔案 | 職責 |
|---|---|
| `src/composables/useLightbox.ts` | 模組層級 `reactive` 狀態，提供 `open` / `close` / `next` / `prev` / `goTo` / `current` / `total` |
| `src/components/ImageLightbox.vue` | 燈箱 UI（`Teleport to="body"`、`z-[100]`、body 滾動鎖定） |
| `src/components/PreviewImage.vue` | 可點擊圖片包裝器（`cursor-zoom-in` + hover 放大鏡圖示） |

已接入頁面：

| 頁面 | 圖集 |
|---|---|
| `businessView.vue` | 寫字樓清潔圖集 |
| `RestaurantView.vue` | 餐廳廚房清潔圖集 |
| `FloorWaxingView.vue` | 地板打蠟圖集 |
| `ShangJieIndex.vue` | 首頁場景圖（`sceneImages`） |
| `DetailView.vue` | 除甲醛工具圖（`toolImages`） |

支援互動：`Esc` 關閉、`←` / `→` 切換、觸控左右滑動（位移 > 50px 且水平位移大於垂直）、底部縮略圖條跳轉、頁碼計數（如 1/8）。

> 元件原名 `Lightbox.vue`，因 ESLint `vue/multi-word-component-names` 規則改為 `ImageLightbox.vue`（`App.vue` 中 import 別名仍為 `Lightbox`）。

### 6.2 實際修正的視覺問題

| 原問題 | 修正方式 | 驗證 |
|---|---|---|
| 移動端 Logo 192px | 改為 40px，標題文字改為 `sm:` 以上顯示 | 截圖確認 |
| `pt-52` 過大留白 | Header 固定高度 64px，內容區自然流動 | 截圖確認 |
| 懸浮按鈕遮擋正文 | 桌面版向下捲動時自動收起；行動版改為底部固定報價條，並以 `--mobile-cta-height` 預留頁面底部空間 | 截圖確認 |
| 輪播遮罩未生效、文字被壓住 | Swiper 自帶 `z-index: 1`，改為內容層 `z-10`、遮罩層 `z-[1]`、輪播層 `z-0` | 截圖確認 |
| 輪播箭頭壓住文字 | 行動版隱藏箭頭（`max-width: 767px`），改以指示點操作 | 截圖確認 |
| 服務卡片圖文不符 | 逐張核實圖片內容後重新映射（見下表） | 逐張讀圖確認 |
| `text-justify` 中文排版 | 全站移除，改為 `leading-relaxed` | 截圖確認 |
| `animate-pulse` / `animate-bounce` | 全站移除 | 程式碼檢查 |
| 頁面缺少頁腳 | `SiteFooter.vue` 置於 `App.vue`，全站 6 頁生效 | 截圖確認 |
| **Header 半透明導覽文字看不清** | 初期 `bg-surface/85` 無模糊，青綠 Hero 透上來使 `text-ink-600` 灰字對比不足 → 先改為實底 `bg-surface` + `shadow-soft`，導覽色改 `text-ink-700` | 截圖確認 |
| **Header 實底背景缺乏玻璃質感**（2026-11-02 客戶回饋） | 改為磨砂玻璃：`bg-surface/80` + `backdrop-blur-md`（12px 模糊），保留 `shadow-soft` 與 `border-line`；導覽色維持 `text-ink-700`，深色文字在淡青半透明底上仍具高對比 | 747px 與 1280px 截圖確認 |
| **首頁 Hero 漸層遮罩於行動版完全失效**（2026-11-02 客戶回饋） | `from-brand-700/92` 不在 Tailwind 透明度刻度內 → 類別被靜默丟棄，連鎖使整條漸層不渲染。已於 `tailwind.config.js` 展開 `theme.extend.opacity` 為 0–100 整數步進，並將遮罩改為行動版垂直漸層、桌機版水平漸層 | 591px 與 1280px 截圖確認 + 建置產物 CSS 驗證 |
| **首頁 Hero 白色文字在亮圖上不可讀**（2026-11-02 客戶回饋） | 根因為上方漸層遮罩失效；遮罩修復後改回**純白字**（`text-white`），不需描邊。另依客戶要求刪除「專業外判清潔服務」徽章 | 591px、747px 與 1920px 截圖確認 |
| **Tailwind 透明度修飾符失效** | 詳見下方「重要陷阱」 | 建置產物 CSS 驗證 |
| **輪播圖片完全不顯示** | Swiper 需明確高度才能計算 slide 高度 → 補 `min-h-[440px]` 於 section 與 wrapper／slide 高度約束 | 截圖確認 |

### 6.2.1 ⚠️ 重要陷阱：Tailwind 透明度修飾符與 CSS 變數

改版過程中踩到一個**不會報錯、只會靜默失效**的坑，特此記錄：

**現象：** `from-brand-700/95` 這類帶透明度的漸層工具類，Tailwind **完全沒有生成**對應的 CSS（建置產物中查無 `.from-brand-700\/95`），導致 Hero 的青綠遮罩層形同虛設，畫面偏亮且文字對比不足。

**根因：** 當 Tailwind 色彩值定義為 `var(--brand-700)`（hex 形式）時，Tailwind 無法對其執行透明度運算，會**靜默丟棄**整組帶 `/opacity` 修飾符的工具類。

**修復：** 改用三通道格式：

```css
/* tokens.css —— 改為「R G B」而非 hex */
--brand-700: 11 107 99;
```

```js
// tailwind.config.js —— 使用 <alpha-value> 佔位
brand: {
  700: 'rgb(var(--brand-700) / <alpha-value>)'
}
```

**修復後建置產物驗證：**

```css
.from-brand-700\/95{--tw-gradient-from: rgb(var(--brand-700) / .95) ...}
.bg-brand-700{--tw-bg-opacity: 1;background-color:rgb(var(--brand-700) / var(--tw-bg-opacity))}
```

> **維護提醒：** `src/styles/tokens.css` 中所有顏色變數**必須**維持「R G B」三通道格式。若改回 hex，帶透明度的工具類會再次靜默失效。`src/assets/base.css` 中直接引用變數處也需一併使用 `rgb(var(--x))` 包裹。

### 6.3 圖片內容核實與重新映射

改版前服務卡片沿用了原程式碼的圖片引用，但實際內容與文案不符。經逐張讀圖核實後重新映射：

| 服務 | 改版前 | 改版後 | 圖片實際內容 |
|---|---|---|---|
| 寫字樓商業清潔 | `img4.jpg`（餐廳吊燈清潔） | `img11.jpg` | 清潔後的寫字樓大堂入口 |
| 餐廳廚房清潔 | `img7.jpg` | `img7.jpg` ✅ | 深度清潔後的商用廚房不鏽鋼爐檯 |
| 除甲醛深度清潔 | `img9.jpg` | `img9.jpg` ✅ | 除甲醛清潔後的住宅儲物櫃 |
| 地板打蠟保養 | `img16.jpg` | `img16.jpg` ✅ | 打蠟後光可鑑人的辦公室地板 |

### 6.4 各頁面最終結構

```
首頁（/）
  Hero（輪播 + 漸層遮罩 + 價值主張 + 雙 CTA）
  → TrustBar（信任要點）
  → 為什麼選擇尚潔（FeatureGrid × 3）
  → 清潔服務範圍（ServiceCard × 4）
  → 無微不至的服務（場景圖 × 4）
  → CTASection
  → SiteFooter

詳情頁（/business /restaurant /floorWaxing /detail /aboutus）
  PageHero（背景圖 + 麵包屑 + 價值主張 + 雙 CTA）
  → 簡介（兩欄：文案 + 清單卡）
  → 核心內容（FeatureGrid / 時間線 / 數據卡 / 對照表）
  → 服務圖集
  → CTASection
  → SiteFooter
```

### 6.5 實測驗證結果

| 檢查項 | 結果 |
|---|---|
| `pnpm run type-check` | ✅ exit 0 |
| `pnpm run lint` | ✅ exit 0（0 error / 0 warning） |
| `pnpm run build` | ✅ exit 0（4.84 秒） |
| 首屏 JS | ✅ 294.42 kB（gzip 95.96 kB），較改版前 -81.6% |
| 控制台錯誤 | ✅ 0 error / 0 warning |
| 390 × 844 移動端 | ✅ 無橫向滾動、懸浮元素不遮正文 |
| 1280 × 720 PC | ✅ 留白與版面平衡正常 |
| 圖片載入 | ✅ 62 張全部正常，無 404 |

---

## 7. 風險與取捨

| 風險 | 影響 | 緩解 |
|---|---|---|
| 客戶對「改頭換面」的接受度未知 | 可能反覆 | 已按客戶指定方向（青綠 + 潔淨白藍）實作，可依反饋微調 |
| 現有圖片解析度與構圖不適合新佈局 | 視覺不統一 | 圖片壓縮列為 P3；必要時補拍 |
| 改版期間線上服務中斷 | 影響業務 | 改版已一次完成並通過全部檢查，可隨時部署 |
| 圖片未壓縮（12.6 MB） | 首屏偏慢 | 列為 P3 待處理，見 `docs/03-bug-fixes.md` C-1 |

---

## 8. 待客戶確認事項

1. ~~電話號碼~~ → ✅ 已確認為 `54901420`
2. ~~主色方向~~ → ✅ 已確認採「青綠 + 潔淨白藍」
3. **地址**是否仍為「新蒲崗景福街114號捷景工業大廈14字樓B室1428」？
4. **Email** `libolang0813@gmail.com` 是否為對外正式信箱？
5. 是否保留現有 Logo 樣式（水滴藍），或可重新設計品牌標誌？
6. 圖片素材是否有更高解析度原圖可用（用於 P3 壓縮與裁切）？
7. 目標受眾是否包含 B2B 大客戶（需增加案例／合作品牌展示區）？
