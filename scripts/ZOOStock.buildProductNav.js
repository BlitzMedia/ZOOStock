// Michael's product nav
function buildProductNav(pathname, items) {
  var product_nav = Y.Node.create('<nav style="margin:0 0 5px 0;line-height:1.4" class="ProductItem-nav"><div class="ProductItem-nav-breadcrumb"></div><div class="ProductItem-nav-pagination"></div></nav>');
  if (pathname && pathname.length) {
    var separator = '<span class="ProductItem-nav-breadcrumb-separator"></span>';
    var full_path = '/';
    pathname.forEach(function(frag, i) {
      full_path += frag + '/';
      var sep = i < pathname.length - 1 ? separator : '';
    	var disabled_class = !sep ? 'disabled':'';
      product_nav.one('.ProductItem-nav-breadcrumb').append('<a href="' + full_path + '" class="ProductItem-nav-breadcrumb-link '+disabled_class+'">' + frag + '</a>' + sep);
    })
  }
  if (items && items.length == 3) {
    var items_template = '<a href="/' + pathname[0] + items[1].fullUrl + '" class="ProductItem-nav-pagination-link ProductItem-nav-pagination-link--prev">' +
      '<span class="ProductItem-nav-pagination-link-direction">Previous</span><span class="ProductItem-nav-pagination-link-title">' + items[1].title + '</span></a>' +
      '<span class="ProductItem-nav-pagination-separator ProductItem-nav-pagination-separator--hasPrev ProductItem-nav-pagination-separator--hasNext"></span>' +
      '<a href="/' + pathname[0] + items[2].fullUrl + '" class="ProductItem-nav-pagination-link ProductItem-nav-pagination-link--next">' +
      '<span class="ProductItem-nav-pagination-link-direction">Next</span><span class="ProductItem-nav-pagination-link-title">' + items[2].title + '</span></a>';
    product_nav.one('.ProductItem-nav-pagination').append(items_template);
  }
  return product_nav;
};

function initProductNav() {
  if(Y.one('.Main--blog-item')) {//check if this is a created category or article page
  var pathname = location.pathname ? location.pathname.replace(/^\/|\/$/g, '').split('/') : false;
    var mainContent = Y.one('.Main-content');
    if(mainContent && pathname.length > 1){
      mainContent.prepend(buildProductNav(pathname))
    }
  }
}

window.Squarespace.onInitialize(Y, () => initProductNav());
