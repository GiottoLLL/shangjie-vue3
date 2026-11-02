# 專案規範

> 狀態：待評審
> 對應需求：新增 `docs/` 存放約束與文檔；專案文字必須全部使用繁體中文。

---

## 1. 語言規範：繁體中文

### 1.1 強制要求

**本專案所有面向人類的語言，一律使用繁體中文（正體中文 / Traditional Chinese）。**

適用範圍：

| 類別 | 說明 | 現況 |
|---|---|---|
| 網站可見文案 | 頁面標題、段落、按鈕、導航、頁腳、alt 文字 | ✅ 已為繁體 |
| HTML `lang` 屬性 | `index.html` 的 `<html lang="...">` | ✅ 已改為 `zh-Hant` |
| 程式碼註解 | `.vue` / `.ts` 檔頭的 `@Description` 等 | ✅ 已全面轉為繁體 |
| 註解內文 | 行內註解 | ✅ 已全面轉為繁體 |
| Git 提交訊息 | commit message | 約定使用繁體中文 |
| 文件 | `docs/` 內全部文檔 | ✅ 已遵循 |
| `AGENTS.md` | 專案約束說明 | ✅ 已遵循 |

### 1.2 現存簡體字盤點（實測，已於改版階段全數處理）

```
src/main.ts:18           // 引入font anwesome图标
src/main.ts:25           // 引入Tailwind.css
src/router/index.ts:2    * @Description: 路由首页
src/components/ContactBtns.vue:2   * @Description: 悬浮按钮
src/views/AboutUsView.vue:2       * @Description: 详情页-办公楼
src/views/businessView.vue:2      * @Description: 详情页-办公楼
src/views/DetailView.vue:2        * @Description: 详情页-甲醛
src/views/HomeView.vue:2          * @Description: 首页
src/views/FloorWaxingView.vue:2   * @Description: 详情页-办公楼
src/views/RestaurantView.vue:2    * @Description: 详情页-餐廳
```

> 以上 10 處簡體註解已於視覺改版階段一併修正為繁體。註：註解中的 `font anwesome` 為原意譯「FontAwesome」，除字面拼寫外亦已正名為 `FontAwesome`。

### 1.3 轉換對照原則

轉換為繁體時，須注意**語境正確性**，而非逐字替換：

| 簡體 | 繁體 | 說明 |
|---|---|---|
| 首页 | 首頁 | |
| 详情页 | 詳情頁 | |
| 悬浮按钮 | 懸浮按鈕 | |
| 路由 | 路由 | 不變 |
| 图标 | 圖示 | 台港慣用「圖示」；FA 官方中文亦作「圖示」 |
| 引入 | 引入 | 不變 |
| 办公楼 | 寫字樓 | **語境轉換**，非字形轉換；本專案文案已用「寫字樓」 |
| 甲醛 | 甲醛 | 不變 |
| 餐厅 | 餐廳 | |
| 干净 | 乾淨 | 台港慣用「乾淨」（非「乾淨」的異體） |

> **務必注意：** 轉換應以「繁體中文（香港）」為目標，而非機械式簡繁對應。例如「視頻」→「影片」、「信息」→「資訊」、「軟件」→「軟體」。本專案現有文案已符合此慣例，僅註解層需要處理。

### 1.4 執行方式

```bash
# 逐檔案檢視需轉換處（Windows PowerShell）
Get-ChildItem src -Recurse -Include *.vue,*.ts |
  Select-String -Pattern "首页|详情页|悬浮按钮|图标|楼层|默认|数据|服务|设备"
```

建議於改版階段（P1）一併完成註解轉換，避免重複改動檔案。

---

## 2. 專案文件體系

### 2.1 `docs/` 目錄結構

```
docs/
├── README.md                    # 本文件（文檔索引與使用說明）
├── 01-visual-redesign.md        # 視覺改版方案
├── 02-vercel-migration.md       # Vercel 遷移準備方案
├── 03-bug-fixes.md              # 缺陷修復清單
└── 04-standards.md              # 本文件：專案規範
```

### 2.2 文件撰寫約定

- 使用**繁體中文**
- 結論須有**實測依據**，區分「已驗證事實」與「待確認事項」
- 涉及業務內容（電話、地址、價格）時，標註為**需客戶確認**
- 優先級統一使用 **P0 / P1 / P2 / P3**
- 文件開頭標註狀態（待評審 / 已批准 / 已完成）

---

## 3. 開發流程規範

### 3.1 必跑檢查

```bash
pnpm install --frozen-lockfile   # 安裝（CI/部署用）
pnpm dev                        # 本機開發
pnpm run type-check             # 型別檢查，必須 exit 0
pnpm run lint                   # 程式碼風格，必須 exit 0
pnpm run build                  # 生產建置，必須 exit 0
```

**提交前必須全數通過。** 目前三者皆為 exit 0（`lint` 為 0 error / 0 warning），改版時的 1 error + 32 warnings 已於 B-5 修正。

### 3.2 提交訊息格式

採用 Conventional Commits，**描述文字使用繁體中文**：

```
feat(首頁): 新增信任條與服務卡片區塊
fix(路由): 修正深色模式媒體查詢語法錯誤
perf(打包): 移除未使用的 naive-ui 依賴
docs(文件): 新增 Vercel 遷移準備方案
refactor(元件): 抽取頁腳為 SiteFooter 元件
```

### 3.3 分支策略

- 從 `main` 切出功能分支：`feature/visual-redesign`、`chore/vercel-migration` 等
- 不直接推送至 `main`
- 合併前確認 type-check / lint / build 全通過

---

## 4. 技術約束速查

| 項目 | 約定 |
|---|---|
| 語言 | Vue 3 + TypeScript + Composition API（`<script setup lang="ts">`） |
| UI 庫 | **Tailwind CSS**；naive-ui 已移除 |
| 圖標 | FontAwesome 6，前綴一律 `fas`（solid）／`fab`（brands） |
| 圖片 | 置於 `src/assets/img/`，經 `new URL(..., import.meta.url)` 引用（統一走 `src/utils/image.ts`） |
| 路由 | Vue Router 4，History 模式，路徑皆小寫開頭；視圖皆為**懶載入** |
| 共用狀態 | `src/composables/useLightbox.ts`（模組層級 `reactive`）；無需 Pinia |
| 樣式 | 設計 token 集中於 `src/styles/tokens.css` |
| 間距 | 遵循 CJK 密度：正文 14–15px、行高 1.6、區段間距 40–56px |

### 4.1 圖片燈箱預覽規範

圖集類圖片一律以 `PreviewImage` 元件渲染，使用者點擊後進入全螢幕預覽。

| 檔案 | 職責 |
|---|---|
| `src/composables/useLightbox.ts` | 燈箱共用狀態：`open` / `close` / `next` / `prev` / `goTo` / `current` / `total` |
| `src/components/ImageLightbox.vue` | 燈箱 UI，`Teleport to="body"`，`z-[100]` |
| `src/components/PreviewImage.vue` | 可點擊圖片包裝器，傳入 `images` 與 `index` |

約定：

- `ImageLightbox` 在 `App.vue` 全站**只掛載一次**
- 圖片物件為 `{ src: string; alt: string }`，`alt` 必填且為繁體中文
- 元件名稱必須為多字（ESLint `vue/multi-word-component-names`），不可取名 `Lightbox.vue`
- 開啟時鎖定 body 滾動，關閉後復原

已支援：`Esc` 關閉、`←` / `→` 切換、觸控左右滑動（位移 > 50px 且水平位移大於垂直）、底部縮略圖條跳轉。

---

## 5. 設計 token 規範（改版後生效）

改版後，所有顏色、圓角、陰影、間距應引用 CSS 變數，不得在模板中硬編碼色值。

```css
/* src/styles/tokens.css —— 顏色一律使用「R G B」三通道格式 */
:root {
  --brand-700: 11 107 99;    /* 青綠深 */
  --brand-600: 13 128 120;
  --brand-500: 18 150 140;
  --brand-400: 52 173 163;
  --brand-200: 168 218 212;
  --brand-100: 211 236 234;
  --brand-50:  238 248 247;

  --sky-700: 28 95 146;      /* 潔淨白藍 */
  --sky-600: 36 119 181;
  --sky-500: 51 145 207;
  --sky-200: 179 215 240;
  --sky-100: 217 235 248;
  --sky-50:  240 247 252;

  --accent-600: 201 123 8;   /* 暖橙 */
  --accent-500: 240 165 0;
  --accent-100: 253 238 205;
  --accent-50:  254 248 236;

  --ink-900: 15 27 42;
  --ink-700: 47 66 86;
  --ink-600: 70 88 107;
  --ink-400: 133 149 166;
  --line:    227 233 239;
  --line-strong: 207 217 227;

  --surface: 255 255 255;
  --surface-soft: 246 249 252;
  --canvas: 242 247 250;

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;

  --shadow-sm: 0 2px 8px rgba(15, 27, 42, 0.04);
  --shadow-md: 0 4px 16px -2px rgba(15, 27, 42, 0.06);
}
```

**⚠️ 必須使用三通道格式，不可寫成 hex。**

Tailwind 對 `var(--x)`（hex 形式）無法執行透明度運算，會**靜默丟棄**整組帶 `/opacity` 修飾符的工具類 —— 例如 `from-brand-700/95` 不會產生任何 CSS，漸層遮罩失效且沒有任何錯誤訊息。

配合 `tailwind.config.js` 使用 `<alpha-value>` 佔位：

```js
brand: { 700: 'rgb(var(--brand-700) / <alpha-value>)' }
```

`src/assets/base.css` 中直接引用變數處也需以 `rgb(var(--x))` 包裹。

> **驗證方式：** 建置後於 `dist/assets/*.css` 搜尋 `.from-brand-700\/95`，確認有輸出。若查無此規則，代表格式已被改回 hex。

**禁用色值：** `#000` 純黑、紫藍漸層、霓虹光效、高飽和綠（`from-green-500 to-green-300` 類漸層球）。

完整設計規範見 `docs/01-visual-redesign.md`。
