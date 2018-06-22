// Summaries init

function convertAirProductToSQSItem(data, collectionUrl) {//data from AirTable need to be converted for Squarespace and LZS format with top function
  collectionUrl = !!collectionUrl ? collectionUrl : '/';
  if (collectionUrl.charAt(collectionUrl.length - 1) !== '/') {
    collectionUrl += '/';
  }
  var converted_arr = [];
  if (data && data.records) {
    for (var i = 0; i < data.records.length; i++) {
      var item = data.records[i];
      var converted = false;
      if (item && item.id) {
        converted = { id: item.id, author: {}, forceUpdate: item.fields['Force Update!'] };
        var options = [];
        if (item.fields) {
          for (var key in item.fields) {
            if (key && item.fields.hasOwnProperty(key)) {
              switch (key) {
                case 'Title':
                converted.title = item.fields[key];
                break;
                case 'Description':
                converted.excerpt = item.fields[key];
                break;
                case 'Categories':
                converted.categories = item.fields[key].split(',');
                break;
                case 'Product URL':
                converted.fullUrl = collectionUrl + item.fields[key];
                break;
                case 'Slug Product URL':
                converted.urlId = item.fields[key];
                break;
                case 'Hosted Image URLs':
                converted.assetUrl = item.fields[key];
                converted.systemDataId = true;
                break;
              }
              if (key.indexOf('Option Name') > -1) {
                var index = key.replace(/\D+/g, '');
                var name = item.fields[key];
                var obj = {};
                obj[name] = item.fields['Option Value ' + index] || '';
                options.push(obj);
              }
            }
          }
          converted.variants = options;
        }
      }
      if (converted) {
        converted_arr.push(converted);
      }
    }
  }
  return converted_arr;
}

window.customLazySummaries = {
  separate: [{
    collectionId: '5b291a29575d1ff09437761d,5b29382e2b6a28bf939fb8d7,5b293c2f758d46d3d609fd82',// /transceivers blog collection id, all Lazy Summaries with that collection source will be extended with bottom settings
    emptySlides: true, //clear existing summary items, need to show AirTable loaded only
    //collectionUrl: 'https://api.airtable.com/v0/app6ponqcBGtYfPYT/ALL?api_key=keyuGS5l1Fih4B7GH',//you may force collection url to get more items there or it will use Custom Index Url in Lazy settings
    processDataFunction: convertAirProductToSQSItem,//data from AirTable need to be converted for Squarespace and LZS format with top function

    renderItemDataFunction: function(item_data){//run on items data

      if(item_data.categories&&item_data.categories.indexOf('all')>-1){
        item_data.categories.splice(item_data.categories.indexOf('all'),1);
      }
      return item_data;
    },

    afterRenderItemFunction: function(item) {//run after summary item was built
      item.all('.summary-metadata-item--cats a').each(function(link){
        var cat = link.getContent();
        link.setAttribute('href',link.getAttribute('href').split('?')[0]+cat.toLowerCase());
      });

      // Quick translate
      if(checkLang() === 'es') item.one('.summary-read-more-link').set('innerHTML', '+ info');

      turnToButton(item.one('.summary-read-more-link'));
      addQuoteButton(item.one('.button-block'))

      return item;
    }
  }]
}



/* Other functions  */


function turnToButton(el) {
  if (!el) return;

  var link = el._node;
  link = el._node ? el._node : el;

  link.classList.add('sqs-block-button-element--small', 'sqs-block-button-element', 'zoostock-translatable');
  if(link.classList.contains('summary-read-more-link')) link.classList.remove('summary-read-more-link');

  var Button = Y.Node.create('<div class="flex"><div class="sqs-block button-block sqs-block-button"><div class="sqs-block-content"><div class="sqs-block-button-container--left buttoner" data-alignment="left" data-button-size="small"></div></div></div></div>');
  Button.appendTo(link.parentNode);
  Button.one('.buttoner').append(link);
}

function addQuoteButton(sibling) {
  const getAQuote = window.translations.getAQuote[ZOOStockLang];
  sibling = sibling._node ? sibling._node : sibling;
  const button = Y.Node.create('<div class="sqs-block button-block sqs-block-button" class="block-getQuote"><div class="sqs-block-content"><div class="sqs-block-button-container--right" data-alignment="right" data-button-size="small"><a href="#get-quote" class="quoter sqs-block-button-element--small sqs-block-button-element zoostock-translatable">' + getAQuote + '</a></div></div></div>');
  button.appendTo(sibling.parentNode);
}
