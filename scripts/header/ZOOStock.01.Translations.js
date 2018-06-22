// Translation

window.translations = {
  lang: '',
  defaultLang: 'es',
  langIsDefault: true,

  // Translations
  readMoreButton: {
    'es': '+ info',
    'es-ES': '+ info',
    'en-US': 'Read More →'
  },
  getAQuote: {
    'es': 'Presupuesto',
    'es-ES': 'Presupuesto',
    'en-US': 'Get a Quote'
  },
  loadMoreButton: {
    'es': 'Cargar más',
    'es-ES': 'Cargar más',
    'en-US': 'Load more'
  },
  search: {
    'es': 'Buscar',
    'es-ES': 'Buscar',
    'en-US': 'Search'
  }
}

var ZOOStockLang = document.documentElement.getAttribute('lang');
window.Squarespace.onInitialize(Y, () => setLang());
Y.on('custom-filter:filter-init', () => translateDatShit())
bablic.on("translated",() => translateDatShit());

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
  const readMoreButtons = document.querySelectorAll('.readMoreButton');
  const getQuoteButtons = document.querySelectorAll('.quoter');
  const searchTag = document.querySelector('.search-input');

  if(readMoreButtons) readMoreButtons.forEach(button => {
    button.innerText = window.translations.readMoreButton[window.translations.lang];
  });
  if(getQuoteButtons) getQuoteButtons.forEach(button => {
    button.innerText = window.translations.getAQuote[window.translations.lang];
  });

  if(searchTag) searchTag.placeholder = window.translations.search[window.translations.lang];

  Y.on('domready', () => {
    const loadMoreButton = document.querySelector('.loadMoreButton');
    if(loadMoreButton) loadMoreButton.innerText = window.translations.loadMoreButton[window.translations.lang];
  })
}
