/*
 * @Description: Tailwind 設定
 * @Version: 1.0
 * @Autor: GiottoLLL7
 * @Date: 2024-05-25 13:46:07
 * @LastEditors: GiottoLLL7
 * @LastEditTime: 2026-10-29 17:35:00
 */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // 以 rgb(var(--x) / <alpha-value>) 形式引用，才能支援透明度修飾符（如 /95）
        brand: {
          50: 'rgb(var(--brand-50) / <alpha-value>)',
          100: 'rgb(var(--brand-100) / <alpha-value>)',
          200: 'rgb(var(--brand-200) / <alpha-value>)',
          400: 'rgb(var(--brand-400) / <alpha-value>)',
          500: 'rgb(var(--brand-500) / <alpha-value>)',
          600: 'rgb(var(--brand-600) / <alpha-value>)',
          700: 'rgb(var(--brand-700) / <alpha-value>)'
        },
        sky: {
          50: 'rgb(var(--sky-50) / <alpha-value>)',
          100: 'rgb(var(--sky-100) / <alpha-value>)',
          200: 'rgb(var(--sky-200) / <alpha-value>)',
          500: 'rgb(var(--sky-500) / <alpha-value>)',
          600: 'rgb(var(--sky-600) / <alpha-value>)',
          700: 'rgb(var(--sky-700) / <alpha-value>)'
        },
        accent: {
          50: 'rgb(var(--accent-50) / <alpha-value>)',
          100: 'rgb(var(--accent-100) / <alpha-value>)',
          500: 'rgb(var(--accent-500) / <alpha-value>)',
          600: 'rgb(var(--accent-600) / <alpha-value>)'
        },
        ink: {
          300: 'rgb(var(--ink-300) / <alpha-value>)',
          400: 'rgb(var(--ink-400) / <alpha-value>)',
          500: 'rgb(var(--ink-500) / <alpha-value>)',
          600: 'rgb(var(--ink-600) / <alpha-value>)',
          700: 'rgb(var(--ink-700) / <alpha-value>)',
          800: 'rgb(var(--ink-800) / <alpha-value>)',
          900: 'rgb(var(--ink-900) / <alpha-value>)'
        },
        line: {
          DEFAULT: 'rgb(var(--line) / <alpha-value>)',
          strong: 'rgb(var(--line-strong) / <alpha-value>)'
        },
        surface: {
          DEFAULT: 'rgb(var(--surface) / <alpha-value>)',
          soft: 'rgb(var(--surface-soft) / <alpha-value>)'
        },
        canvas: 'rgb(var(--canvas) / <alpha-value>)'
      },
      fontFamily: {
        sans: ['Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', 'sans-serif']
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)'
      },
      boxShadow: {
        soft: 'var(--shadow-sm)',
        card: 'var(--shadow-md)',
        lift: 'var(--shadow-lg)'
      },
      maxWidth: {
        container: 'var(--container)'
      },
      // 展開透明度刻度為 0–100 的整數步進。
      // Tailwind 預設刻度僅有 5 的倍數，使用預設刻度以外的值（如 /92）時
      // 該類別會被「靜默丟棄」且不產生任何錯誤訊息，故在此完整展開。
      opacity: Object.fromEntries(
        Array.from({ length: 101 }, (_, i) => [i, String(i / 100)])
      )
    }
  },
  plugins: []
}
