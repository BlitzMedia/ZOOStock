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
  },
  loadMoreButton: {
    'es-ES': 'Cargar más',
    'en-US': 'Load more'
  },
  search: {
    'es-ES': 'Buscar',
    'en-US': 'Search'
  }
}

var ZOOStockLang = document.documentElement.getAttribute('lang');
window.Squarespace.onInitialize(Y, () => setLang());
Y.on('custom-filter:filter-init', () => {
  translateDatShit()
})

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

function translateDatShit() {
  setLang()
  translateButtons()
}

function translateButtons() {
  const loadMoreButton = document.querySelector('.loadMoreButton');
  const readMoreButtons = document.querySelectorAll('.readMoreButton');
  const getQuoteButtons = document.querySelectorAll('.quoter');
  const searchTag = document.querySelector('.search-input');

  loadMoreButton.innerText = window.translations.loadMoreButton[window.translations.lang];
  readMoreButtons.forEach(button => {
    button.innerText = window.translations.readMoreButton[window.translations.lang];
  });
  getQuoteButtons.forEach(button => {
    button.innerText = window.translations.getAQuote[window.translations.lang];
  });
  searchTag.innerText = window.translations.search[window.translations.lang];
}
