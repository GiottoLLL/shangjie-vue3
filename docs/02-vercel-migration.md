# Vercel 遷移準備方案

> 狀態：待評審
> 對應需求：目前部署於阿里雲伺服器，計劃轉移至 Vercel。

---

## 1. 遷移可行性判斷

**結論：完全可行，且成本極低。** 本專案為純前端靜態站點（Vue 3 + Vite），無後端 API、無資料庫、無 SSR，Vercel 的靜態站點託管可直接承載。

### 1.1 專案性質核實

| 檢查項 | 實測結果 | 影響 |
|---|---|---|
| 後端 API | 全專案無 `fetch` / `axios` / API 呼叫 | 無 Serverless 函數需求 |
| 環境變數 | 無 `.env` 檔案，`env.d.ts` 僅含型別宣告 | 無需配置 Secrets |
| 路由模式 | `createWebHistory`（History 模式） | **需 SPA 重寫規則** |
| `vite.config.ts` base | 未設定（預設 `/`） | 部署於根網域，無需 base 調整 |
| 靜態資源 | 39 張圖片於 `src/assets/`，由 Vite 打包處理 | 隨建置產出 |
| `public/` | 僅 `favicon.ico`（git 追蹤中） | 自動複製至 `dist/` |

---

## 2. 必做準備工作

> ✅ 標示「已完成」者為本次改版中一併落實的項目。

### 2.1 【✅ 已完成】SPA 重寫配置

Vue Router 使用 History 模式，直接訪問 `/business`、`/restaurant`、`/floorWaxing`、`/aboutus`、`/detail` 時，伺服器會回傳 404。

**已新增 `vercel.json`：**

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "buildCommand": "pnpm run build-only",
  "outputDirectory": "dist",
  "installCommand": "pnpm install --frozen-lockfile",
  "framework": "vite",
  "rewrites": [
    { "source": "/((?!assets/|favicon.ico).*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

> **重寫規則說明：** 使用負向先行斷言（negative lookahead）排除 `assets/` 與 `favicon.ico`，確保帶雜湊的靜態資源與圖示不被重寫規則攔截而導致 404。靜態資源已設定 `immutable` 長期快取。
>
> `headers` 必須放在 `rewrites` 之後（或獨立宣告），順序會影響規則匹配。

### 2.2 【✅ 已完成】Node 版本宣告

**原存問題（實測確認）：**

- `.nvmrc` 內容為 `v22.15.0`，但 `.gitignore:31` 將 `.nvmrc` 排除，**該檔未被 git 追蹤**（`git ls-files .nvmrc` 回傳空）
- `package.json` **無 `engines` 欄位**，亦無 `packageManager` 欄位
- 本機實際環境為 Node v18.20.8，與 `.nvmrc` 宣告的 v22 不符（建置仍可通過，但屬隱性不一致）

**Vercel 的 Node 版本判定順序：** `package.json` 的 `engines.node` → `package.json` 的 `packageManager` → `.nvmrc` → 平台預設（目前為 Node 22）。

**✅ 已落實的修復：**

```jsonc
// package.json
{
  "engines": {
    "node": ">=20"
  },
  "packageManager": "pnpm@8.3.1"
}
```

並已從 `.gitignore` 移除 `.nvmrc` 排除規則，讓該檔重新納入版本控制。

> 為何 `engines` 用 `>=20` 而非固定版本：Vite 5 官方支援 Node 18/20/22，`>=20` 可容許平台自動選用受支援版本，同時排除 EOL 的 18。

### 2.3 【✅ 已完成】分離 build script 與 type-check

`package.json` 原本的 `build` 腳本為：

```json
"build": "run-p type-check \"build-only {@}\" --"
```

此腳本會在 Vercel 建置時**同時執行型別檢查**。風險：

- `vue-tsc` 為 devDependency，若 Vercel 設定為 `NODE_ENV=production` 安裝依賴，會缺少 `vue-tsc` 導致建置失敗
- 型別檢查失敗會阻擋部署，即使程式碼本身可正常打包

**✅ 已落實：**

```jsonc
// 保留 npm run build 給本機完整驗證
"build": "run-p type-check \"build-only {@}\" --",
// Vercel 專用：只打包，不做型別檢查
"build-only": "vite build",
```

並在 `vercel.json` 中指定 `buildCommand` 為 `pnpm run build-only`，將型別檢查保留在本地與 CI 流程中。

### 2.4 【✅ 已完成】pnpm 與 lockfile 一致性

`pnpm-lock.yaml` 的 `lockfileVersion` 為 `6.0`，對應 pnpm 8.x。

✅ `package.json` 已宣告 `packageManager: "pnpm@8.3.1"`，`vercel.json` 的 `installCommand` 設為 `pnpm install --frozen-lockfile`，確保安裝版本與 lockfile 完全一致。

> 若 Vercel 使用 Corepack，會依 `packageManager` 欄位自動取得對應 pnpm 版本。

---

## 3. 遷移執行步驟

### 3.1 準備階段

- [ ] 新增 `vercel.json`（含 SPA rewrites）
- [ ] `package.json` 新增 `engines.node` 與 `packageManager`
- [ ] `.gitignore` 移除 `.nvmrc` 排除規則
- [ ] 移除 naive-ui 等未使用依賴，降低建置時間與体积（見 `docs/03-bug-fixes.md`）
- [ ] 本地驗證 `pnpm install --frozen-lockfile && pnpm run build` 通過

### 3.2 接入 Vercel

1. 將程式碼推送至 GitHub / GitLab / Bitbucket（Vercel 需從 Git 倉庫部署）
2. Vercel Dashboard → `Add New` → `Project` → 匯入倉庫
3. 框架自動偵測為 **Vite**，輸出目錄預設 `dist`，通常無需手動調整
4. 若偵測失敗，手動設定：
   - Build Command: `pnpm run build-only`
   - Output Directory: `dist`
   - Install Command: `pnpm install --frozen-lockfile`
   - Node.js Version: `20.x` 或 `22.x`
5. 部署 → 取得 `*.vercel.app` 網址

### 3.3 綁定自訂網域

1. Vercel 專案 → `Settings` → `Domains` → 新增網域
2. 將 DNS 記錄指向 Vercel 提供的位址：
   - 頂層網域 `A` 記錄 → `76.76.21.21`
   - `www` 子網域 `CNAME` → `cname.vercel-dns.com`
3. SSL 由 Vercel 自動簽發（免費），無需額外設定

### 3.4 阿里雲切換與回滾

**切換策略（建議）：**

| 階段 | 動作 | 回滾方式 |
|---|---|---|
| 1 | 部署到 `*.vercel.app`，完整驗證所有頁面與手機端 | 無需回滾 |
| 2 | 綁定正式網域，但 DNS 仍指向阿里雲 | 無需回滾 |
| 3 | DNS 切換至 Vercel（TTL 建議先降至 300 秒） | 將 DNS 改回阿里雲，約 5 分鐘生效 |
| 4 | 觀察 24–72 小時，確認無異常後下線阿里雲服務 | 需重新部署舊服務 |

> **重要**：DNS 切換前，務必確認阿里雲上的舊站點**可隨時重新啟動**。建議在切換後至少保留舊站點 1 週，不要立即釋放。

### 3.5 切換前驗收清單

在 `*.vercel.app` 上逐項確認：

- [ ] 首頁 `/` 正常渲染
- [ ] 直接訪問 `/business`（**不是點擊進入**）能正確顯示，不出現 404
- [ ] 直接訪問 `/restaurant`、`/floorWaxing`、`/detail`、`/aboutus` 皆正常
- [ ] 圖片、字型、CSS、JS 皆載入成功（無 404）
- [ ] 電話按鈕（`tel:`）在手機上可撥出
- [ ] WhatsApp 按鈕可開啟正確對話
- [ ] 郵件按鈕（`mailto:`）可開啟郵件程式
- [ ] 390px 寬度下無橫向滾動
- [ ] 輪播圖正常切換
- [ ] `https://` 正常且無混合內容警告

---

## 4. 與阿里雲的差異對照

| 項目 | 阿里雲（現況） | Vercel（目標） |
|---|---|---|
| 部署方式 | 手動 / 腳本上傳構建產物 | Git push 自動部署 |
| 構建環境 | 本機或自建 CI | Vercel 雲端構建 |
| SPA 重寫 | 需自行設定 Nginx `try_files` | `vercel.json` 宣告式配置 |
| SSL | 需自行申請與續期 | 自動簽發與續期 |
| 回滾 | 需自行保留舊版本 | 每次部署可一鍵切回 |
| 預覽環境 | 無 | 每個 PR 自動產生預覽網址 |
| 成本 | 伺服器成本 | 靜態站點免費方案可用 |
| 靜態資源 | 需自行做 CDN | 內建全球 CDN |

---

## 5. 風險與注意事項

| 風險 | 說明 | 緩解 |
|---|---|---|
| **DNS 切換延遲** | 切換期間部分用戶仍走舊站 | TTL 先降至 300 秒；切換後保留舊站 1 週 |
| **建置環境依賴缺失** | `type-check` 依賴 devDependency，`NODE_ENV=production` 下可能缺失 | `buildCommand` 改用 `build-only` |
| **Node 版本漂移** | `.nvmrc` 未入版本控制，平台可能選到不預期版本 | 在 `package.json` 補 `engines.node` |
| **圖片總量 13 MB** | 首屏載入偏慢，影響 SEO 與轉化 | 納入 `docs/01-visual-redesign.md` P3 圖片壓縮 |
| **打包體積 1.6 MB** | JS 過大拖慢首屏 | 移除 naive-ui 後降至 303 kB |
| **無環境變數** | 目前無此需求，但若日後加入統計或表單 API 需重新配置 | Vercel 專案 Settings → Environment Variables |

---

## 6. 待客戶確認事項

1. 是否需要保留阿里雲作為**熱備份**？建議至少保留 1 週。
2. 正式域名目前是否在阿里雲（阿里雲 DNS / 網易 / Cloudflare 等）？DNS 權限歸屬需確認。
3. 是否有需要保留的伺服器端功能（郵件收發、資料收集表單、訪客統計）？目前專案中未發現。
4. 是否需要在 Vercel 設定環境變數（如 GA 統計 ID、WhatsApp Business 帳號）？
