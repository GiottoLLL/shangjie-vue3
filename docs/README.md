# 專案文檔

尚潔清潔服務有限公司 官方網站（Vue 3 + Vite）專案文檔。

> 所有文檔使用**繁體中文**。

---

## 文檔索引

| 文檔 | 內容 | 對應需求 |
|---|---|---|
| [`01-visual-redesign.md`](./01-visual-redesign.md) | 視覺改版方案：現狀基線、設計定位、色彩與字體系統、各頁面改版規格、分階段實施 | 客戶反饋樣式醜，需重做前端（移動端優先） |
| [`02-vercel-migration.md`](./02-vercel-migration.md) | Vercel 遷移準備：可行性判斷、`vercel.json` 配置、Node 版本宣告、域名綁定與回滾策略 | 由阿里雲遷移至 Vercel |
| [`03-bug-fixes.md`](./03-bug-fixes.md) | 缺陷修復清單：功能正確性問題、程式碼品質、效能，含實測證據與優先級 | 已識別問題的修正 |
| [`04-standards.md`](./04-standards.md) | 專案規範：繁體中文要求、開發流程、技術約束、設計 token | 文字全部使用繁體中文 |

專案層級的 AI 開發約束見根目錄 [`AGENTS.md`](../AGENTS.md)。

---

## 快速索引：待客戶確認事項

以下問題需業務方確認後才能動工，彙整自各文檔：

### 聯絡資訊

1. ~~電話號碼~~ → ✅ 已確認為 `54901420`，全站已統一（見 `src/config/contact.ts`）
2. **地址** — 是否仍為「新蒲崗景福街114號捷景工業大廈14字樓B室1428」？
3. **Email** — `libolang0813@gmail.com` 是否為對外正式信箱？

### 品牌與素材

4. **Logo** — 是否保留現有水滴藍標誌，或可重新設計？
5. **圖片素材** — 現有 62 張圖片共 12.6 MB 未壓縮。是否有更高解析度的原圖可用於重新裁切與轉檔？（見 `docs/03-bug-fixes.md` C-1）
6. **目標受眾** — 是否包含 B2B 大客戶（需增加案例／合作品牌展示區）？

### 部署與營運

7. ~~阿里雲熱備份~~ → ✅ 由客戶自行備份，本專案不涉獵
8. **DNS 權限** — 域名 DNS 目前託管於阿里雲，後續切換 Vercel 時的 DNS 變更權限需確認
9. **伺服器端功能** — 是否有需保留的郵件收發、資料收集表單、訪客統計？目前專案未發現此類功能。

---

## 當前專案狀態速覽

| 項目 | 狀態 |
|---|---|
| 型別檢查 `pnpm run type-check` | ✅ 通過（exit 0） |
| 程式碼風格 `pnpm run lint` | ✅ 通過（0 error / 0 warning） |
| 建置 `pnpm run build` | ✅ 成功（約 5 秒） |
| 首屏 JS 體積 | 294.42 kB（gzip 95.96 kB）— 改版前為 1,603.98 kB，**-81.6%** |
| 圖片總量 | 62 張 / 12.6 MB，未壓縮（P3 待處理） |
| 程式碼量 | 約 2,345 行 / 19 個 Vue 元件（新增 10 個共享元件，移除 7 個腳手架殘留檔） |
| 繁體中文 | ✅ 程式碼註解、界面文案、`docs/`、`AGENTS.md` 全數繁體 |
| 圖片燈箱預覽 | ✅ 全站圖集可點擊放大，支援鍵盤／滑動／縮略圖導覽 |
| Vercel 部署準備 | ✅ `vercel.json`、`engines.node`、`packageManager`、`.nvmrc` 納管皆已完成 |
| Git | 單一分支 `main`，1 次提交（initial commit） |

### 新增檔案

| 檔案 | 用途 |
|---|---|
| `src/config/contact.ts` | 聯絡資訊單一配置來源 |
| `src/styles/tokens.css` | 設計 token（青綠 + 潔淨白藍，含深色模式） |
| `src/utils/image.ts` | 圖片資源取得工具 |
| `src/composables/useLightbox.ts` | 圖片燈箱共用狀態（開／關／上下一張／跳轉） |
| `src/components/SiteFooter.vue` | 全站頁腳 |
| `src/components/PageHero.vue` | 詳情頁頁首橫幅 |
| `src/components/ServiceCard.vue` | 服務卡片 |
| `src/components/FeatureGrid.vue` | 要點卡片網格 |
| `src/components/TrustBar.vue` | 信任要點條 |
| `src/components/CTASection.vue` | 行動呼籲區塊 |
| `src/components/SectionHeading.vue` | 區段標題 |
| `src/components/ImageLightbox.vue` | 全螢幕圖片預覽（鍵盤／滑動／縮略圖） |
| `src/components/PreviewImage.vue` | 可點擊圖片包裝器（滑鼠指標 + 放大鏡提示） |
| `vercel.json` | Vercel 部署配置（SPA rewrites + 靜態資源長快取） |
