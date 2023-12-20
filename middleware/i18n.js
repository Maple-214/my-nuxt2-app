export default function ({ isHMR, app, store, error }) {
  const defaultLocale = app.i18n.fallbackLocale
  // If middleware is called from hot module replacement, ignore it
  if (isHMR) { return }
  // 获取locale
  if (process.client) {
    const locale = localStorage.getItem('lang') || defaultLocale
    // 设置语言
    app.i18n.locale = locale
  }
}
