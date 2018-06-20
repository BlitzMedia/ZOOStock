window.customFilterSettings = {
    'targets': [
      {
        container: '.collection-5b291a29575d1ff09437761d #block-yui_3_17_2_1_1529421639296_3852',
        items: '.summary-item',
        settings: {
          	performanceMode:true,
            showItemsCount: true, //hide items count
            position: 'left',
          	keepDropdownsOpen: false,
            requestAttrWithAjax: false,
          	mobilePanel: { enabled: true },
          	isotope: {
            	enabled: false,
              columnWidth: '30%'
            },
            simpleFilter: {
              anim: true,
              show: {
                effect: 'slideLeft',
                transitionDuration: 400,
                stagger: 100
              },
              hide: {
                effect: 'slideRight',
                transitionDuration: 300,
                stagger: 60
              }
            },
            filter: {
            	category:false,
            	tag: false,
              items: [
              {
                name: 'Vendor',
                multiple: true,
                getAttr: 'categories'
              },
              {
                name: 'Form Factor',
                multiple: true,
                getAttr: (el, data) => {
                  //el is the real html node of item and data is json-data of this item (product)
                    var arr = [];
                    var variants = data.variants;
                    if (variants && variants.length) {
                      //now loop through all product variants and build array of sizes
                      arr = Y.Array.map(variants, function(variant) {
                        var formFactor = variant['Form Factor'] || '';
                        return formFactor;
                      })
                    }
                    return arr;
                },
              },
              {
                name: 'Data Rate',
                multiple: true,
                getAttr: function(el, data) {
                    var arr = [];
                    var variants = data.variants;
                    if (variants && variants.length) {
                        arr = Y.Array.map(variants, function(variant) {
                            var dataRate = variant['Data Rate'] || '';
                            return dataRate;
                        })
                    }
                    return arr;
                },
              },
              {
                name: 'Media Type',
                multiple: true,
                getAttr: function(el, data) {
                    var arr = [];
                    var variants = data.variants;
                    if (variants && variants.length) {
                        arr = Y.Array.map(variants, function(variant) {
                            var mediaType = variant['Media Type'] || '';
                            return mediaType;
                        })
                    }
                    return arr;
                },
              }]
            },
            sort: {
              enabled: false,
              items: [{
                name: 'Price',
                order: 'asc|desc'
              }]
            },
            search: {
              positionOrder: 100,
              text: 'Search',
              searchFunc: function(el) {
                var result = '',
                textContent = '',
                classes = '';
                el = el._node ? el._node : el;
                textContent = el.textContent.trim();
                classes = el.className;
                result = textContent + ' ' + classes;
                return result;
              },
              enabled: true
           }
        }
    }
  ]
};
