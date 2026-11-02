# 缺陷修復清單

> 狀態：待評審
> 對應需求：修正分析階段發現的各項問題。
> 所有結論均為實測結果，非推測。涉及瀏覽器渲染行為的項目已註明驗證方式。

---

## 0. 重要更正說明

分析初稿曾依據 Node 環境直接呼叫 FontAwesome `icon()` API，得出「三個圖標無法渲染」的結論。**該結論錯誤**，原因如下：

`@fortawesome/vue-fontawesome` 的 `normalizeIconArgs()`（`node_modules/@fortawesome/vue-fontawesome/index.js:373-398`）會**優先**呼叫 `fontawesomeSvgCore.parse.icon()`，而非直接使用陣列的前綴：

```js
function normalizeIconArgs(icon) {
  ...
  if (fontawesomeSvgCore.parse.icon) {
    return fontawesomeSvgCore.parse.icon(icon);   // ← 走這條
  }
  ...
  if (Array.isArray(icon) && icon.length === 2) {
    return { prefix: icon[0], iconName: icon[1] };  // ← 這條實際上不會走到
  }
}
```

`parse.icon()` 會將無效前綴丟棄並回退到預設樣式。實測驗證：

```
fast square-poll-horizontal  -> parsed: {"prefix":null,"iconName":"square-poll-horizontal"}
                               final render: OK prefix=fas icon=square-poll-horizontal
fast phone                   -> parsed: {"prefix":null,"iconName":"phone"}
                               final render: OK prefix=fas icon=phone
fass envelope                -> parsed: {"prefix":null,"iconName":"envelope"}
                               final render: OK prefix=fas icon=envelope
fab whatsapp                -> final render: OK prefix=fab icon=whatsapp
```

瀏覽器實測 DOM 亦確認三個圖標皆已渲染，且 `data-prefix` 均為 `fas`：

```html
<svg class="svg-inline--fa fa-phone ..." data-prefix="fas" data-icon="phone">...</svg>
<svg class="svg-inline--fa fa-envelope ..." data-prefix="fas" data-icon="envelope">...</svg>
```

**結論：圖標當前渲染正常，屬前綴寫法不嚴謹而非功能故障。** 但仍建議修正（見 B-1），理由見下。

---

## A. 功能與正確性問題

### A-1 【P0】電話號碼不一致 — 會直接影響業務 → **已於改版中修復**

**實測：**

| 位置 | 內容 |
|---|---|
| `src/components/ContactBtns.vue:13` | `tel:54901420` |
| `src/components/ContactBtns.vue:23` | WhatsApp `phone=54901420` |
| `src/components/GHeader.vue:54` | `tel:54901420` |
| `src/components/ShangJieIndex.vue:26` | `tel:54901420` |
| `src/components/ShangJieIndex.vue:47` | WhatsApp `phone=54901420` |
| `src/views/businessView.vue:17` | WhatsApp `phone=54901420` |
| `src/views/FloorWaxingView.vue:17` | WhatsApp `phone=54901420` |
| `src/views/RestaurantView.vue:18` | WhatsApp `phone=54901420` |
| **`src/components/ShangJieIndex.vue:271`** | **`電話: 5399 8757`** ← 唯一不同的號碼 |

**影響：** 頁腳顯示的號碼與實際撥號號碼不同，客戶看到頁腳電話撥出去卻打不通，是直接的營業損失與信任危機。

**✅ 修復狀態：已完成（客戶已確認號碼為 `54901420`）。**

已建立單一設定來源 `src/config/contact.ts`，全站改為引用：

```ts
export const PHONE = '54901420'
export const PHONE_DISPLAY = '5490 1420'
export const WHATSAPP = '54901420'
export const EMAIL = 'libolang0813@gmail.com'
export const ADDRESS = '新蒲崗景福街114號捷景工業大廈14字樓B室1428'
export const TEL_LINK = `tel:${PHONE}`
export const MAIL_LINK = `mailto:${EMAIL}`
export const WHATSAPP_LINK = `https://api.whatsapp.com/send?phone=${WHATSAPP}`
```

頁腳（`SiteFooter.vue`）、頁首（`GHeader.vue`）、懸浮按鈕（`ContactBtns.vue`）、行動呼籲區（`CTASection.vue`）與各詳情頁均已改用此設定來源，號碼不一致問題已消除。

### A-2 【P0】深色模式媒體查詢語法錯誤 → **已於改版中修復**

**位置：** `src/App.vue:22`

```ts
const mediaQuery = window.matchMedia('(prefers - color - scheme: dark)')
```

**問題：** 連字號兩側有空格。合法的媒體特徵名為 `prefers-color-scheme`，不可插入空格。此查詢式**永遠不會匹配**，`isDarkMode` 恆為 `false`。

**對照：** `src/assets/base.css:39` 使用的是正確寫法 `@media (prefers-color-scheme: dark)` —— 兩處不一致。

**實測佐證：** 瀏覽器控制台僅輸出一行 `App.vue:22` 的 `false`，即 `mediaQuery.matches` 恆為 false。

**影響：** `App.vue:33` 依賴 `isDarkMode` 為 `<RouterView>` 附加 `color: rgb(255 190 84) !important`。此樣式永不生效。但 `base.css` 已有深色模式配色切換，導致**系統深色模式下，背景變深而文字不變**，對比度不足。

**✅ 修復狀態：已完成。** 改版中 `App.vue` 已重寫，深色模式改由 `src/styles/tokens.css` 的 `@media (prefers-color-scheme: dark)` 統一處理，JS 端的媒體查詢與殘留的 `console.log` 一併移除。

### A-3 【P1】5 個頁面缺少頁腳 → **已於改版中修復**

**實測（原狀態）：**

```
AboutUsView.vue:    footer=False
businessView.vue:   footer=False
DetailView.vue:     footer=False
FloorWaxingView.vue:footer=False
HomeView.vue:       footer=False
RestaurantView.vue: footer=False
```

**說明：** `<footer>` 原先寫在 `src/components/ShangJieIndex.vue` 內（首頁專用元件）。首頁透過 `HomeView.vue` → `ShangJieIndex.vue` 間接獲得頁腳；其餘 5 個頁面**完全沒有地址、電話、版權資訊**。

**影響：** 使用者在詳情頁無法取得聯絡方式，只能靠浮動按鈕；SEO 也缺少全站一致的結構化資訊。

**✅ 修復狀態：已完成。** 頁腳已抽為 `src/components/SiteFooter.vue`，置於 `App.vue` 的 `<RouterView>` 之後，**全站 6 個頁面皆已套用**，並包含服務範圍、聯絡方式與公司地址三欄。

### A-4 【P1】`AboutUsView.vue` 與首頁文案大量重複 → **已於改版中修復**

**實測（原狀態）：** `AboutUsView.vue` 含 695 個中文字符，其中「為什麼選擇我們」「清潔服務範圍」兩節與 `ShangJieIndex.vue` 的對應段落**逐字重複**（含相同的 `<span class="text-blue-400 text-xl">` 高亮標記）。

**影響：** 內容維護需雙改；搜尋引擎視為重複內容。

**✅ 修復狀態：已完成。** 「關於我們」頁已重寫為獨立內容：包含公司定位說明、四大公司優勢（自設團隊／專業技術／全場景能力／高效設備）、四項服務承諾清單，以及連至四個服務頁的場景卡片，不再與首頁重複。

### A-5 【P1】頁面註解標頭錯誤 → **已於改版中修復**

**實測（原狀態）：** `src/views/AboutUsView.vue:2` 的註解寫著 `@Description: 详情页-办公楼`，但該檔案實際是「關於我們」頁。同樣的錯誤註解也出現在 `businessView.vue:2` 與 `FloorWaxingView.vue:2`（兩者確實是細節頁，但描述過於籠統）。

**✅ 修復狀態：已完成。** 全部 5 個視圖的檔頭註解已改為繁體中文並準確描述實際用途（如「寫字樓商業清潔服務詳情頁」「餐廳廚房清潔服務詳情頁」「地板打蠟服務詳情頁」「除甲醛服務詳情頁」「關於我們」）。

---

## B. 程式碼品質

### B-1 【P1】FontAwesome 前綴寫法不嚴謹

**位置：**

| 檔案:行 | 現況 | 建議 |
|---|---|---|
| `src/components/GHeader.vue:88` | `['fast', 'square-poll-horizontal']` | `['fas', 'square-poll-horizontal']` |
| `src/components/ContactBtns.vue:32` | `['fast', 'phone']` | `['fas', 'phone']` |
| `src/components/ContactBtns.vue:35` | `['fass', 'envelope']` | `['fas', 'envelope']` |
| `src/components/ContactBtns.vue:38` | `['fab', 'whatsapp']` | ✅ 已正確，維持 |

**當前影響：** 功能正常（因 `parse.icon` 回退到 `fas`），但：

1. `fast`（thin）與 `fass`（sharp solid）**在 `@fortawesome/free-solid-svg-icons` 中不存在**，語意上是想引用細體／銳利樣式，實際拿到的是實心樣式
2. 若未來安裝 `@fortawesome/free-thin-svg-icons` 或 sharp 版本套件，行為會突然改變
3. 開發者閱讀程式碼時會誤以為用了 thin 樣式

**修復：** 統一改為 `fas`（如確實想要 thin 樣式，則安裝 `free-thin-svg-icons` 並用 `fat`）。

> 註：FontAwesome 6 的 thin 前綴是 `fat`，而 `fast` 屬於 sharp family，兩者皆非本專案的有效引用。

### B-2 【P1】naive-ui 完整打包但零使用 — 體積 -81% → **已於改版中修復**

**實測：**

```bash
# 模板中 <n-*> 元件數量
(Get-ChildItem src -Recurse -Include *.vue | Select-String -Pattern "<n-").Count
# → 0
```

但 `src/main.ts` 有 `import naive from 'naive-ui'` 與 `app.use(naive)`。

**對照建置實測（已還原原檔，SHA256 校驗一致）：**

| 建置 | JS 產物 | gzip |
|---|---|---|
| 含 naive-ui | **1,603.98 kB** | 446.54 kB |
| 移除 naive-ui | **303.57 kB** | 97.98 kB |
| **差異** | **-1,300.41 kB (-81%)** | -348.56 kB |

**✅ 修復狀態：已完成。** `naive-ui` 已從 `src/main.ts` 與 `package.json` 移除。同時移除的未使用依賴：`pinia`、`vue3-swiper`、`@fortawesome/free-regular-svg-icons`、`@types/lodash`。

### B-3 【P2】未使用的依賴與腳手架殘留 → **已於改版中修復**

**實測：**

| 項目 | 位置 | 全專案引用數 |
|---|---|---|
| `vue3-swiper` | `package.json` dependencies | **0**（實際使用 `swiper/vue`） |
| `@types/lodash` | `package.json` devDependencies | **0**，且未安裝 `lodash` 本體 |
| `pinia` | `package.json` dependencies | **0**（store 已移除） |
| `@fortawesome/free-regular-svg-icons` | `package.json` dependencies | **0** |
| `src/stores/counter.ts` | Pinia counter store | **0** |
| `src/components/icons/IconCommunity.vue` | 腳手架圖示 | **0** |
| `src/components/icons/IconDocumentation.vue` | 腳手架圖示 | **0** |
| `src/components/icons/IconEcosystem.vue` | 腳手架圖示 | **0** |
| `src/components/icons/IconSupport.vue` | 腳手架圖示 | **0** |
| `src/components/icons/IconTooling.vue` | 腳手架圖示 | **0** |
| `faUser` | `main.ts:28` 已註冊 | **0** |
| `src/assets/logo.svg` | Vite 腳手架預設檔 | **0** |

**✅ 修復狀態：已完成。** 上述檔案已移除，`icons/` 與 `stores/` 目錄已清空（`stores` 目錄本身一併移除）。`faUser` 已從 `library.add()` 移除。

### B-4 【P2】路由未做懶載入 → **已於改版中修復**

**位置：** `src/router/index.ts:10-15` —— 6 個視圖皆為靜態 import。

**影響：** 首屏載入全部頁面程式碼，與 B-2 的體積問題疊加。

**✅ 修復狀態：已完成。** 改為動態 import：

```ts
const router = createRouter({
  routes: [
    { path: '/', component: () => import('../views/HomeView.vue') },
    // ...
  ]
})
```

### B-5 【P2】ESLint 報錯 → **已於改版中修復**

**實測（原狀態）：** `pnpm run lint` → **1 error, 32 warnings**（exit code 1）

**唯一 error：**

```
src/components/ShangJieIndex.vue:155:18  error  Irregular whitespace not allowed  no-irregular-whitespace
```

該處為 `日本專利無光觸媒觸技術` 中的零寬字元（U+200B）夾在「觸」與「技」之間。

**32 個 warnings 主要為未使用的匯入**（`defineComponent` / `onMounted` / `ref` / `computed`）與未使用的變數（`callPhone` / `swiperOptions` / `onSwiper` / `swiperInstance`）。

**✅ 修復狀態：已完成。** 改版中重寫的檔案已移除全部無用匯入與變數；`ShangJieIndex.vue` 的零寬字元已隨文案重寫移除。

### B-6 【P3】Node 版本宣告不一致 → **已於改版中修復**

**實測（原狀態）：**

| 項目 | 值 |
|---|---|
| `.nvmrc` 內容 | `v22.15.0` |
| `.nvmrc` 是否被 git 追蹤 | **否**（`.gitignore:31` 排除，`git ls-files .nvmrc` 回傳空） |
| 本機實際 Node | v18.20.8 |
| `package.json` `engines` | 無 |
| `package.json` `packageManager` | 無 |

**✅ 修復狀態：已完成。** `package.json` 已加入 `"engines": { "node": ">=20" }` 與 `"packageManager": "pnpm@8.3.1"`；`.gitignore` 已移除 `.nvmrc` 排除規則，該檔重新納入版本控制。此項與 Vercel 遷移直接相關，詳見 `docs/02-vercel-migration.md` §2.2。

---

## C. 效能

### C-1 【P1】圖片未壓縮，總量約 13 MB

**實測：** 39 張圖片，最大 `img1-DYzQcWxR.png` **523 kB**，多數在 200–470 kB 區間。

**影響：** 圖片是這個網站的主體內容，佔絕大多數流量。香港行動網絡條件不一，未壓縮的圖片直接影響首屏時間與轉化率。

**修復：** 見 `docs/01-visual-redesign.md` §3.5。

### C-2 【P2】`.nvmrc` 之外的工作區衛生

`dist/` 已在 `.gitignore` 中 ✅；`node_modules` ✅。整體良好。

---

## D. 規範類（不在此展開）

- **全案繁體中文**（含程式碼註解）：見 `docs/04-standards.md`
- **AGENTS.md 開發約束**：見根目錄 `AGENTS.md`

---

## E. 修復優先級總覽

| 編號 | 問題 | 優先級 | 狀態 | 需客戶確認 |
|---|---|---|---|---|
| A-1 | 電話號碼不一致 | P0 | ✅ 已修復（號碼已確認為 `54901420`） | ✅ 已確認 |
| A-2 | 深色模式媒體查詢語法錯誤 | P0 | ✅ 已修復 | 否 |
| A-3 | 5 個頁面缺少頁腳 | P1 | ✅ 已修復 | 否 |
| A-4 | 關於我們頁文案重複 | P1 | ✅ 已修復 | 否 |
| A-5 | 頁面註解標頭錯誤 | P1 | ✅ 已修復 | 否 |
| B-1 | FontAwesome 前綴寫法 | P1 | ✅ 已修復 | 否 |
| B-2 | naive-ui 未使用卻完整打包 | P1 | ✅ 已修復 | 否 |
| B-3 | 未使用依賴與腳手架殘留 | P2 | ✅ 已修復 | 否 |
| B-4 | 路由未懶載入 | P2 | ✅ 已修復 | 否 |
| B-5 | ESLint 1 error + 32 warnings | P2 | ✅ 已修復（0 error / 0 warning） | 否 |
| B-6 | Node 版本宣告不一致 | P3 | ✅ 已修復 | 否 |
| C-1 | 圖片未壓縮 | P1 | ⏳ 未處理（見下） | 否 |

### 改版後實測數據

> 下列數字為 2026-10-30 加入圖片燈箱預覽功能後之最終建置實測值（單位為 KiB，1024 進位）。

| 指標 | 改版前 | 改版後 | 變化 |
|---|---|---|---|
| 首屏 JS 合計 | 1,603.98 kB | **294.42 kB** | **-81.6%** |
| 首屏 JS（gzip） | 446.54 kB | **95.96 kB** | **-78.5%** |
| CSS 合計 | 27.51 kB | 39.07 kB | +11.56 kB |
| 建置耗時 | 28.97 s | **4.84 s** | **-83.3%** |
| `pnpm run lint` | 1 error + 32 warnings | **0 error + 0 warning** | ✅ |
| `pnpm run type-check` | exit 0 | exit 0 | ✅ |
| 圖片總量 | 39 張 / 約 13 MB | 62 張 / 12.6 MB | 引用數增加（改版使用了更多既有圖片） |

**首屏 JS 拆分明細（路由懶載入後）：**

| Chunk | 大小 |
|---|---|
| 入口 `index-*.js` | 178.73 kB |
| `HomeView-*.js` | 115.69 kB |
| `DetailView-*.js` | 10.16 kB |
| `AboutUsView-*.js` | 5.50 kB |
| `businessView-*.js` | 5.02 kB |
| `RestaurantView-*.js` | 5.01 kB |
| `FloorWaxingView-*.js` | 4.70 kB |

> 詳情頁 chunk 均在 5–10 kB，僅在實際造訪時載入。
> 入口 chunk 由 164.28 kB 增至 178.73 kB，係因燈箱元件（`ImageLightbox` / `PreviewImage` / `useLightbox`）於入口層引入所致，換取全站一致的圖片預覽體驗。

### C-1 圖片壓縮（未處理）

本次改版未壓縮圖片。現況 62 張圖片共 12.6 MB，最大單張 523 kB。

**建議處理方式（需客戶確認後執行）：**

1. 以 `sharp` 於建置階段轉為 WebP／AVIF，並產生多尺寸（400w / 800w / 1200w）
2. 首屏 Hero 圖控制在 ≤ 200 kB，詳情頁圖 ≤ 120 kB
3. 加入 `srcset` 讓移動端自動載入較小尺寸
4. Vercel 已設定 `assets/` 的 `immutable` 長快取，重新建置後檔名雜湊會改變，不會造成舊快取污染

> 註：因現有圖片已是原始素材，且客戶未提供更高解析度的原圖，此項需與客戶確認素材來源後再進行。
