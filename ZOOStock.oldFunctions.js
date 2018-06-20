// Parallax Intro
function setParallax() {
  if (!checkHomepage()) return;
  addOverlay();
  const parallax = document.getElementById('parallaxer');
  const observer = new MutationObserver((m) => { hideOverlay();});
  observer.observe(parallax, { attributes : true, attributeFilter : ['style'] });
  var parallaxer = new Parallax(parallax, { scalarX: 2 });
}

function addOverlay() {
  if (!document.body.classList.contains('homepage')) return;
  document.body.classList.add('setOverlay');
  document.getElementById('zoostock-overlay').classList.remove('hideOverlay')
}

function removeOverlay() {
  if(!checkHomepage()) return;

  var gallery = document.querySelector('#index-gallery');
  var overlay = document.getElementById('zoostock-overlay');

  if(!overlay) return;

  overlay.addEventListener('transitionend', function() {
    overlay.remove()
    if(observer) observer.disconnect();
  }, false);

  if(!gallery) return

  observer = new MutationObserver(mutation => {
    mutation.forEach(childMutation => {
      if(childMutation.attributeName === 'class') {
        overlay.classList.add('hideOverlay');
      }
    })
  }),
  config = { attributes: true };
  observer.observe(gallery, config);

  setTimeout(() => hideOverlay(), 500);
}
