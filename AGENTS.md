# AGENTS.md

尚潔清潔服務有限公司官方網站 — Vue 3 + Vite 靜態企業網站（繁體中文／香港）。

本檔案為本專案所有 AI 編碼代理的強制約束。修改程式碼前請先完整閱讀。

---

## 1. 語言規範（最高優先級，不可協商）

**本專案所有面向人類的文字，一律使用繁體中文（香港）。**

涵蓋範圍：

- 網站可見文案：標題、段落、按鈕、導航、頁腳、`alt` 文字
- 程式碼註解：檔頭 `@Description` 區塊、行內註解
- `docs/` 全部文檔
- Git 提交訊息
- 與使用者的溝通與提交說明

**禁止使用簡體中文。** 現存簡體字集中在程式碼註解，修改相關檔案時順帶修正。

### 繁簡轉換須符合香港繁體慣例

不得機械逐字替換。對照原則：

| 簡體 | 繁體（香港慣例） |
|---|---|
| 视频 / 影片 | 影片 |
| 信息 | 資訊 |
| 软件 | 軟體 |
| 打印 | 列印 |
| 默认为 | 預設為 |
| 鼠标 | 滑鼠 |
| 干净 | 乾淨 |
| 办公楼 | 寫字樓 |
| 图标 | 圖示 |

### 禁止引入英文介面文字

按鈕、選單、提示訊息一律使用繁體中文。技術專有名詞（WhatsApp、Email、PDF）可保留原文。

---

## 2. 專案定位與業務背景

- **公司性質**：香港清潔服務（外判保潔）公司，服務對象含寫字樓、餐廳/廚房、住宅、地板打蠟、除甲醛
- **主要流量**：行動裝置（手機）為主，PC 為輔
- **首要轉化目標**：電話諮詢、WhatsApp 對話
- **網站性質**：純前端靜態站點，無後端 API、無資料庫、無環境變數

改版與功能開發時，以上業務背景優先於純技術考量。

---

## 3. 常用指令

```bash
pnpm install --frozen-lockfile   # 安裝依賴
pnpm dev                        # 本機開發（vite --host）
pnpm run type-check             # 型別檢查（vue-tsc），必須 exit 0
pnpm run lint                   # ESLint，必須 exit 0
pnpm run format                 # Prettier 格式化 src/
pnpm run build                  # 生產建置（type-check + vite build）
pnpm run build-only             # 僅打包，不做型別檢查（Vercel 建置用）
```

### 提交前必跑

```bash
pnpm run type-check && pnpm run lint && pnpm run build
```

三者**全部必須** exit 0。當前 `pnpm run lint` 為 exit 1（1 error + 32 warnings），修改相關檔案時應一併修正。

### 依賴管理

- 套件管理器為 **pnpm**（`pnpm-lock.yaml`，lockfileVersion 6.0），**不要使用 npm 或 yarn**
- 新增依賴前先確認確有必要；本專案已有過量依賴問題（見 `docs/03-bug-fixes.md` B-3）
- 移除依賴時需同步移除 `package.json`、`pnpm-lock.yaml` 與程式碼中的引用

---

## 4. 專案結構

```
shangjie-vue3/
├── src/
│   ├── main.ts              應用入口（FontAwesome 註冊）
│   ├── App.vue              全域佈局：Header + RouterView + 頁腳 + 懸浮按鈕
│   ├── router/index.ts      6 條路由（懶載入）
│   ├── views/               頁面視圖 ×6
│   ├── components/          GHeader、ContactBtns、ShangJieIndex + 10 個共享元件
│   ├── composables/         useLightbox.ts（燈箱共用狀態）
│   ├── config/contact.ts    聯絡資訊單一配置來源
│   ├── utils/image.ts       圖片資源取得工具
│   ├── styles/
│   │   ├── tokens.css       設計 token（青綠 + 潔淨白藍，含深色模式）
│   │   └── Tailwind.css     Tailwind 指令入口
│   ├── assets/
│   │   ├── base.css         全域基礎樣式
│   │   ├── main.css         tokens.css + base.css 入口
│   │   └── img/             62 張圖片（CH2O/、floor-waxing/ 子目錄）
│   └── components.d.ts      自動生成
├── docs/                    專案文檔（見第 5 節）
├── public/favicon.ico
├── vercel.json              Vercel 部署配置（SPA rewrites + 靜態資源長快取）
├── vite.config.ts           Vue + Vue JSX 插件，@ → src/ 別名
├── tailwind.config.js       content: ./src/**/*.{vue,js,ts,jsx,tsx} + token 色票
├── .eslintrc.cjs            vue3-essential + TS + prettier
└── .prettierrc.json         no semi / 單引號 / 2 空白 / 100 列寬 / 無尾逗號
```

### 現有路由

| 路徑 | 視圖 | 內容 |
|---|---|---|
| `/` | `HomeView.vue` | 首頁（內嵌 `ShangJieIndex.vue`） |
| `/detail` | `DetailView.vue` | 除甲醛詳情 |
| `/business` | `businessView.vue` | 寫字樓商業清潔 |
| `/restaurant` | `RestaurantView.vue` | 餐廳廚房清潔 |
| `/floorWaxing` | `FloorWaxingView.vue` | 地板打蠟 |
| `/aboutus` | `AboutUsView.vue` | 關於我們 |

> 檔名 `businessView.vue` 為小寫開頭（與其他 PascalCase 不一致），改版時可一併正規化。

### 共享元件

| 元件 | 職責 |
|---|---|
| `SiteFooter.vue` | 全站頁腳（品牌／服務範圍／聯絡／地址） |
| `PageHero.vue` | 詳情頁頁首橫幅 |
| `ServiceCard.vue` | 服務卡片 |
| `FeatureGrid.vue` | 要點卡片網格 |
| `TrustBar.vue` | 信任要點條 |
| `CTASection.vue` | 行動呼籲區塊 |
| `SectionHeading.vue` | 區段標題 |
| `ContactBtns.vue` | 懸浮聯絡按鈕（桌面圓形／行動底部條） |
| `ImageLightbox.vue` | 全螢幕圖片預覽（鍵盤／滑動／縮略圖導覽） |
| `PreviewImage.vue` | 可點擊圖片包裝器（滑鼠指標與放大鏡提示） |

---

## 5. 專案文檔

動工前先讀對應文件：

| 文件 | 用途 |
|---|---|
| [`docs/README.md`](./docs/README.md) | 文檔索引、待客戶確認事項、專案狀態速覽 |
| [`docs/01-visual-redesign.md`](./docs/01-visual-redesign.md) | 視覺改版方案（設計 token、元件規格、分階段實施） |
| [`docs/02-vercel-migration.md`](./docs/02-vercel-migration.md) | Vercel 遷移準備（`vercel.json`、Node 版本、域名切換） |
| [`docs/03-bug-fixes.md`](./docs/03-bug-fixes.md) | 缺陷清單與優先級 |
| [`docs/04-standards.md`](./docs/04-standards.md) | 語言規範、設計 token、開發流程 |

**文件更新義務**：改動程式碼時，若影響了文件描述的行為或狀態，同步更新對應文件。文件中的「實測」數字（體積、錯誤數、引用數）過期時需一併修正。

---

## 6. 程式碼規範

### 6.1 Vue 寫法

- 一律使用 `<script setup lang="ts">` + Composition API
- 檔頭保留 `@Description` / `@Version` / `@Autor` / `@Date` 區塊，**內容使用繁體中文**，並確保描述與檔案實際用途相符
- 模板中的中文文案使用繁體
- `<img>` 必須有 `alt`（繁體中文）
- 圖片引用沿用既有模式：

```ts
const getImageUrl = (name: string) => {
  return new URL(`../assets/img/${name}`, import.meta.url).href
}
```

> 該寫法為 Vite 的靜態資源處理機制，**不可改為字串拼接或 template literal 以外的形式**。

### 6.2 TypeScript

- `tsconfig.app.json` 繼承 `@vue/tsconfig/tsconfig.dom.json`（含 strict）
- 不得使用 `any`（除非必要且附註說明）
- 路徑別名 `@/` → `src/` 可用

### 6.3 樣式

- 以 Tailwind  utility 為主
- 改版後新增的顏色、圓角、陰影必須引用 `src/styles/tokens.css` 的 CSS 變數，**不得硬編碼色值**
- 禁用純黑 `#000`、紫藍漸層、霓虹光效
- 移除 `animate-pulse`、`animate-bounce` 等廉價動效
- 中文字體使用 `Noto Sans TC`（已在 `index.html` 引入字體連結）

#### ⚠️ 設計 token 必須維持「R G B」三通道格式

`src/styles/tokens.css` 的顏色變數**必須**寫成 `11 107 99` 而非 `#0b6b63`：

```css
--brand-700: 11 107 99;   /* ✅ 三通道 */
--brand-700: #0b6b63;     /* ❌ hex 會讓透明度修飾符靜默失效 */
```

**原因：** Tailwind 對 `var(--x)`（hex 形式）無法執行透明度運算，會**靜默丟棄**整組帶 `/opacity` 修飾符的工具類。例如 `from-brand-700/95` 不會產生任何 CSS，導致漸層遮罩失效且無任何錯誤訊息。

配合 `tailwind.config.js` 使用 `<alpha-value>` 佔位：

```js
brand: { 700: 'rgb(var(--brand-700) / <alpha-value>)' }
```

`src/assets/base.css` 中直接引用變數處也需以 `rgb(var(--x))` 包裹。

> **驗證方式：** 建置後於 `dist/assets/*.css` 搜尋 `.from-brand-700\/95`，確認有輸出。若查無此規則，代表格式已被改回 hex。

### 6.4 FontAwesome

前綴必須使用**實際存在**的樣式：

| 前綴 | 樣式 | 套件 |
|---|---|---|
| `fas` | solid | `@fortawesome/free-solid-svg-icons` ✅ 本專案使用 |
| `far` | regular | `@fortawesome/free-regular-svg-icons`（已安裝但未使用） |
| `fab` | brands | `@fortawesome/free-brands-svg-icons` ✅ 本專案使用 |

**禁止使用 `fast`、`fass`** —— 這兩個前綴在 `@fortawesome/free-solid-svg-icons` 中不存在，FontAwesome 會靜默回退到 `fas`，造成程式碼與實際渲染不一致（詳見 `docs/03-bug-fixes.md` B-1）。

新增圖標時必須同時在 `src/main.ts` 的 `library.add(...)` 註冊。

### 6.5 圖片燈箱預覽

圖集類圖片一律透過 `PreviewImage` 元件渲染，使用者可點擊放大預覽。

**架構分工：**

| 檔案 | 職責 |
|---|---|
| `src/composables/useLightbox.ts` | 模組層級 `reactive` 狀態，提供 `open` / `close` / `next` / `prev` / `goTo` / `current` / `total` |
| `src/components/ImageLightbox.vue` | 燈箱 UI，透過 `Teleport to="body"` 渲染，`z-[100]` |
| `src/components/PreviewImage.vue` | 可點擊圖片包裝器，點擊後呼叫 `useLightbox().open(images, index)` |

**使用約定：**

- `ImageLightbox` 在 `App.vue` **全站只掛載一次**，頁面勿重複掛載
- 傳入的 `images` 陣列元素為 `{ src: string; alt: string }`，`alt` 必填且為繁體中文
- 圖片來源沿用 `src/utils/image.ts` 的 `getImageUrl()`，不可硬編碼路徑
- 元件命名必須為**多字**（ESLint `vue/multi-word-component-names`），不可取名 `Lightbox.vue`
- 燈箱開啟時須鎖定 body 滾動，關閉後復原；否則行動端會穿透捲動

**已支援的互動：** `Esc` 關閉、`←` / `→` 切換、觸控左右滑動（位移 > 50px 且水平位移大於垂直）、底部縮略圖條直接跳轉。

---

## 7. 設計改版專屬約束

改版工作進行中時，以下為硬性要求：

### 7.1 移動端優先

- 目標視口 **390 × 844**（iPhone 14 級），向下相容至 360px
- 360px 寬度下**不得出現橫向滾動**
- PC 端採 `max-w-5xl` 居中單欄，不做複雜多欄
- 固定元素（Header、懸浮按鈕）**不得遮擋正文內容**

### 7.2 轉化路徑

- 電話與 WhatsApp 入口必須在所有頁面可達
- 首屏需可見價值主張與主要行動呼籲
- 頁腳（地址／電話／版權）需在**所有頁面**呈現

### 7.3 CJK 排版密度

- 正文 14–15px，行高 1.6
- H1 28–34px，H2 22–26px
- 區段間距 40–56px（不要沿用西方框架的 80px+）
- 段落間距 8–12px，卡片內距 16–22px
- 避免 `text-justify` 對中文排版

### 7.4 視覺驗證義務

**改動 UI 後必須實際截圖確認，不得僅憑程式碼判斷。**

```bash
pnpm dev    # 背景啟動
```

然後使用瀏覽器工具（`browser-use:control-in-app-browser` 技能）：

- 390 × 844 移動端視口：確認 logo 尺寸、懸浮按鈕不遮擋內容、無橫向滾動
- 1280 × 720 PC 視口：確認留白與版面平衡
- 逐頁確認所有圖片載入成功（無 404）
- 確認控制台無錯誤

參考：`docs/01-visual-redesign.md` §4 的階段驗證清單。

> **排障準則：** 遇到「點擊無反應」時，**先確認事件處理器是否真的被觸發**（於 handler 內暫時 `console.log`，再用瀏覽器工具查 console），再決定是否改動程式碼。
> 實測案例（2026-10-30）：燈箱點擊無反應，經 console 證實 handler 未執行、且頁面上其他按鈕同樣無反應，最終定位為**瀏覽器分頁狀態異常**（點擊耗時恆為 5.2 秒的可操作性逾時），改開新分頁後功能完全正常 —— 程式碼本身無誤。
> 此类情況切勿直接改寫功能程式碼。

---

## 8. 部署相關約束

- 目標部署平台：**Vercel**（正由阿里雲遷移中）
- `vercel.json` 已包含 SPA rewrites，**修改路由結構時需同步確認 rewrites 規則**
- `build` 腳本包含 type-check，`build-only` 為 Vercel 專用；**Vercel 的 Build Command 應為 `pnpm run build-only`**
- Node 版本以 `package.json` 的 `engines.node` 為準（`>=20`），`.nvmrc` 需納入版本控制
- 切換域名後**保留阿里雲舊站點至少 1 週**作為回滾

---

## 9. 安全與業務資料

- **不得提交任何密鑰、token、憑證**；本專案目前無環境變數，若新增須用 Vercel Environment Variables
- 電話、地址、Email 等業務資料應集中於單一設定來源（規劃於 `src/config/contact.ts`），**不得散落硬編碼在多個元件中**
- 現存不一致：頁腳顯示 `5399 8757`，程式碼撥號 `54901420` —— 修正前**必須先向客戶確認正確號碼**
- 不得在程式碼或文件中寫入真實客戶資料

---

## 10. 提交與分支

- 分支：`feature/*`、`fix/*`、`chore/*`、`docs/*`
- **不直接推送至 `main`**
- 提交訊息採 Conventional Commits，描述用繁體中文：

```
feat(首頁): 新增服務卡片區塊
fix(路由): 修正深色模式媒體查詢語法錯誤
perf(打包): 移除未使用的 naive-ui 依賴
docs(文件): 新增 Vercel 遷移準備方案
```

- 類型：`feat` / `fix` / `perf` / `refactor` / `docs` / `style` / `chore` / `test`

---

## 11. 代理工作守則

1. **先讀文件再動手** —— 涉及改版、部署、缺陷修復時，先讀 `docs/` 對應章節
2. **實測優先於推測** —— 涉及瀏覽器渲染行為的問題，用瀏覽器工具實測確認，不要憑經驗斷言
3. **不越權修改業務內容** —— 電話、地址、服務說明等需客戶確認的項目，標註待確認而非自行決定
4. **UI 改動必須截圖驗證**（見 §7.4）
5. **保持建置綠燈** —— 每次改動後跑 `type-check` + `lint` + `build`
6. **最小必要依賴** —— 不為未使用的功能引入套件
7. **清理臨時產物** —— 實驗用的備份檔、預覽頁面等要移除，且不得殘留在工作區
8. **保留使用者既有改動** —— 工作區可能存在未提交的修改，不可擅自還原或覆蓋

---

## 12. 當前已知待辦（供代理參考）

完整清單見 `docs/03-bug-fixes.md`。**改版已完成**，以下為剩餘項目：

| 優先級 | 項目 | 需客戶確認 |
|---|---|---|
| P1 | 圖片未壓縮（62 張 / 12.6 MB，最大單張 523 kB） | ✅ 是（需確認原圖素材） |
| P2 | 域名 DNS 由阿里雲切換至 Vercel（DNS 權限確認） | ✅ 是 |
| P3 | 正式部署至 Vercel 並綁定自訂網域 | 否 |

**已完成的關鍵改版（2026-10-29）：**

- 視覺改版：青綠 + 潔淨白藍設計系統，10 個共享元件，6 個頁面全部重構
- 聯絡資訊統一至 `src/config/contact.ts`（電話 `54901420`，客戶已確認）
- 深色模式媒體查詢語法已修正，深色模式改由 `src/styles/tokens.css` 統一處理
- naive-ui 等 6 個未使用依賴已移除，7 個腳手架殘留檔已刪除
- 路由改為懶載入，首屏 JS 由 1,603.98 kB 降至 294.42 kB（-81.6%）
- `pnpm run type-check` / `lint` / `build` 全部 exit 0
- Vercel 部署配置完成：`vercel.json`、`engines.node`、`packageManager`、`.nvmrc` 納管

**已完成的功能增強（2026-10-30）：**

- 圖片燈箱預覽：`useLightbox` + `ImageLightbox` + `PreviewImage`（手寫實作，未引入第三方依賴）
- 已接入頁面：寫字樓、餐廳廚房、地板打蠟（圖集）、首頁場景圖、除甲醛工具圖
