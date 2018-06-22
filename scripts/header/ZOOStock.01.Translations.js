// Translation

window.translations = {
  lang: '',
  defaultLang: 'es-ES',
  langIsDefault: true,

  // Translations
  readMoreButton: {
    'es-ES': '+ info',
    'en-US': 'Read More →'
  },
  getAQuote: {
    'es-ES': 'Presupuesto',
    'en-US': 'Get a Quote'
  }
}

var ZOOStockLang = document.documentElement.getAttribute('lang');
window.Squarespace.onInitialize(Y, () => setLang());


function isLangDefault() {
  // Will return true if initial state, false if not
  window.translations.langIsDefault = window.translations.lang === window.translations.defaultLang;
}

function setLang() {
  window.translations.lang = document.documentElement.getAttribute('lang');
}

function checkLang() {
  return document.documentElement.getAttribute('lang');
}

setLang();
