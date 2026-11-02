/**
 * @Description: 聯絡資訊單一配置來源
 * @Version: 1.0
 * @Autor: GiottoLLL7
 * @Date: 2026-10-29 17:35:00
 * @LastEditors: GiottoLLL7
 * @LastEditTime: 2026-10-29 17:35:00
 *
 * 全站電話、WhatsApp、電子郵件與地址一律由此匯出，
 * 避免散落硬編碼造成各頁顯示不一致。
 */

/** 電話號碼（不含符號，用於 tel: 與 WhatsApp 連結） */
export const PHONE = '54901420'

/** 電話號碼（顯示用，含空格分隔） */
export const PHONE_DISPLAY = '5490 1420'

/** WhatsApp 號碼 */
export const WHATSAPP = '54901420'

/** 電子郵件 */
export const EMAIL = 'libolang0813@gmail.com'

/** 公司地址 */
export const ADDRESS = '新蒲崗景福街114號捷景工業大廈14字樓B室1428'

/** 撥號連結 */
export const TEL_LINK = `tel:${PHONE}`

/** 郵件連結 */
export const MAIL_LINK = `mailto:${EMAIL}`

/** WhatsApp 對話連結 */
export const WHATSAPP_LINK = `https://api.whatsapp.com/send?phone=${WHATSAPP}`

/** 觸發撥號 */
export const callPhone = (): void => {
  window.location.href = TEL_LINK
}

/** 觸發郵件程式 */
export const mailTo = (): void => {
  window.location.href = MAIL_LINK
}

/** 開啟 WhatsApp 對話 */
export const openWhatsapp = (): void => {
  window.open(WHATSAPP_LINK, '_blank', 'noopener')
}
