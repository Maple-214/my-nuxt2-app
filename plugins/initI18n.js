if (process.client) {
  const lang = localStorage.getItem('lang') || 'ja'
  localStorage.setItem('lang', lang);
  $('html').attr('lang', lang);
}
