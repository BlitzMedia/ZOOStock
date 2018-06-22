const body = document.body;
const checkHomepage   = () => body.classList.contains('homepage');
const checkProducts   = () => body.classList.contains('collection-type-blog');
const checkList       = () => body.classList.contains('view-list');
const checkItem       = () => body.classList.contains('view-item');
const checkCustomItem = () => Y.one('.custom-table-block') ? true : false;

// interval passed to reveal
window.sr = ScrollReveal({
  mobile: false,
  viewFactor: 0.1,
  //reset: true,
  distance: '10px'
});

// INIT
function initBlitz() {
  initTranslationButtons()
  initStrangeElements()
  initGalleryButtons()
  animater()
  setProductQuote()
  setCatNav()

  console.log('⚡️');
}

function afterFilters() {
  setFilteredSections();
  setFilterQuoteButtons();
  initAccordions();
}

// Init! ⚡️
window.Squarespace.onInitialize(Y, () => initBlitz());
Y.on('custom-filter:filter-init', e => {
	//console.log(e.customFilter)
  afterFilters()
})

/*

Functions

*/

function initTranslationButtons() {
  if(Y.one('.translateLink')) return;
  var newFlags = {
    'en-US': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAyCAMAAACd646MAAAApVBMVEUAJH0BJX4CJn4DJ39UbKhVbahWbqlXb6lZcKpbcquOnsWPn8aQn8aRoMfPFCvSJTrTJjzTJzzTKD3T2enU2unW3OrY3uvbTl/bT2DfYXHfYnLhbXzhbnzhb33ib33i5vDk6PHl6fLniJTniZTojpnoj5rpkZzpk57wtLvwtr3wt77zxMr319v32Nz88vP98/T99PX99fb+9/j++Pj++fr++vv////6WcwLAAABa0lEQVRYw+3Y2U7DQAwFUDd0wh6WAmFPSwsUwr74/z+NSUWKMpmx7+QBIZT7ECWKNedtZJvykuscriUUjrEV2TL2YygUr6wf8dNsZ1Gal1Q9ICYCaRLMVL+oDIy4hEX2MpABkTZhkZcbkIEQH2GRAwYZAPETPKJkFWRUJESYgf0JMgoiEoQyIqISICMgEAExQQQmACaARBEq40WiCYXxIJ0IkUldJO1KCMzYRSY4YTxJNwt+v7s8rTJ95J80kI/5uVtRbKS+84hj0kDw/CMk+4X0SI/0yF9B+gsyChl6km5PlgUPVydVLu4/Q8h3xdn8jcdbxndeoDOvU+aLI/dvX7lwkcKt2r1+VqY1hRiZViNhbC/QiQkSA19LlHRhBCLQ3EUzIhFsU6MYhRAabphRCXF0gBiAUIYglYEIdZwTGZAABlOBAQloxA4xBBLgssDPEEjAaw8fQyARscBpMwQSUasolyGQiFyqNZjjL0uit54JMrXBAAAAAElFTkSuQmCC',
    'es': 'data:image/png;base64,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'
  }

  var headerButton = document.querySelector('.SocialLinks-link')

  Object.entries(newFlags).forEach(entry => {
    var country = entry[0],
        flag = entry[1];

    var flagButton = headerButton.cloneNode();
    flagButton.className = 'SocialLinks-link translateLink';
    flagButton.innerHTML = `<div class="translateWrap"><img src="${flag}"></div>`;
    flagButton.href = `javascript:bablic.redirectTo('${country}')`;
    headerButton.parentNode.append(flagButton);
  })
}

function initGalleryButtons() {
  // Get links
  var galButtons = document.querySelectorAll('.Index-gallery-item-content-body a')
  // Turn them to buttons
  galButtons.forEach(el => turnToButton(el))


}

function initStrangeElements() {
  // Set video properly
  window.vid = document.querySelector('#zoostock-nav .sqs-video-icon');
  // Set lightbox
  window.lightbox = document.querySelector('.Footer .lightbox-handle');
  // Set CustomItem class
  if( checkCustomItem() ) document.body.classList.add('customItems')
}

// Other functions
function animater() {
  sr.reveal(document.querySelectorAll('.homepage [id*="anim"] .Index-page-content'), {
    distance: '0px'
  });
  // Secuential anims
  sr.reveal(document.querySelectorAll('.sqs-col-3'), { viewFactor: 0.3 }, 50);
  sr.reveal('.sqs-gallery-design-grid-slide', { duration: 500 }, 75);
  sr.reveal('.Index-gallery-item-inner', { duration: 500, opacity: 0.6 }, 75);
  // Multiple Anims
  sr.reveal(document.querySelectorAll('#networking-accesories-components-home-red .spacer-block + .row'));
  sr.reveal(document.querySelectorAll('.homepage .image-card'), { origin: 'left' });
}

function setProductQuote() {
  const lightboxButton = document.querySelector('.Footer .lightbox-handle');
  const translations = window.translations.getAQuote;

  if(checkItem()) {
    // For filtered products
    const getQuoteButton = document.querySelector('#block-getQuote .sqs-block-button-element');
    if(getQuoteButton) getQuoteButton.onclick = e => lightboxButton.click();

    // For catalog
    document.querySelectorAll('.sqs-block-button-element').forEach(el => {
      Object.values(translations).forEach(trans => {
        // Check if it matches any translation
        if (el.text != trans) return;

        el.onclick = e => {
          e.stopPropagation();
          lightboxButton.click()
        }
      })
    })
  }

  if(checkList()) {
    Y.one('body').delegate('click', e => {
      e.preventDefault();
      lightboxButton.click();
    }, '.quoter')

    // document.querySelectorAll('.filtered .button-block a').forEach(el => {
    //   if(el.text === 'Get a Quote') el.onclick = e => {
    //     e.preventDefault();
    //     lightboxButton.click();
    //   }
    // })
  }
}

function setCatNav() {
  if(!checkProducts() && !checkItem()) return;
  if(checkList()) return;
  if(!Y.one('.Main--blog-item') && !Y.one('.ProductItem-nav')) return;

  const archives = document.querySelectorAll('.BlogItem .sqs-block-archive');
  if(!archives) return;
  const cat = document.querySelector('a.Blog-meta-item-category').textContent.trim();
  const title = document.querySelector('.BlogItem-title');
  const target = title.parentNode;

  archives.forEach(archive => {
    target.insertBefore(archive, title);
    archive.querySelectorAll('a').forEach(el => {
      if(el.textContent.trim() === cat) el.classList.add('active');
    })
  })
}

function initAccordions() {
  const accordion = document.querySelector('.Intro .markdown-block')
  const filters = document.querySelector('.customFiltersWrapper')

  // If they are not present
  if(!(filters && accordion)) return;
  filters.append(accordion)

  accordion.querySelectorAll('.markdown-block h4 + p').forEach(el => {
    const target = el;
    const triggerer = el.previousSibling.previousSibling;

    target.classList.add('accTarget')
    triggerer.classList.add('accTrigger')
    triggerer.onclick = e => target.classList.toggle('accShow')
  })
}

const setFilteredSections = () => document.body.classList.add('filteredPage')

function setFilterQuoteButtons() {
  Y.one('body').delegate('click', e => {
      e.preventDefault();
      e.stopPropagation();

      // Click that lightbox!
      window.lightbox.click();
    }, '.quoter')
}
