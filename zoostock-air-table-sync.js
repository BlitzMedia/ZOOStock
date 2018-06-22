window.syncedCollections = {
    syncedUrls: 'transceivers,cables,media-converters', //blog urls, comma-separated, where Sync button need to be enabled;
    'media-converters': {
        regenerateCategories: 'no', //categories pages will be deleted and recreated if 'regenerate', if 'update' - only date updates happen (need to keep categories first in blog view)
        airTableUrl: 'https://api.airtable.com/v0/app6ponqcBGtYfPYT/MediaConverters?api_key=keyMmV8ObRgCW8YNy&sortField=Title&sortDirection=desc', //airtable url to get get items from
        //articlePageTemplate - json-coded article page layout
        articlePageTemplate: function(ext_item) {
            return [{
                "columns": [{
                    "rows": [{
                            "columns": [{
                                "blocks": [{
                                    "type": 2,
                                    "id": "title-block",
                                    "value": {
                                        "engine": "wysiwyg",
                                        "source": ext_item.title,
                                        "html": '<h2 class="BlogItem-title">' + ext_item.title + '</h2>',
                                    }
                                }],
                                "span": 5
                            }, {
                                "blocks": [{
                                    "id": "getQuote",
                                    "type": 53,
                                    "value": {
                                        "buttonText": "Presupuesto",
                                        "buttonLink": "#get-quote",
                                        "newWindow": false,
                                        "buttonAlignment": "right",
                                        "buttonSize": "small",
                                        "hSize": null,
                                        "floatDir": null
                                    }
                                }],
                                "span": 3
                            }]
                        },
                        {
                            "columns": [{
                                "blocks": [{
                                    "type": 2,
                                    "id": "description-block",
                                    "value": {
                                        "engine": "wysiwyg",
                                        "source": typeof ext_item['excerpt'] == 'string' ? ext_item['excerpt'] : '<p class="front-hidden">No Data for Description</p>',
                                        "html": typeof ext_item['excerpt'] == 'string' ? ext_item['excerpt'] : '<p class="front-hidden">No Data for Description</p>',
                                    }
                                }, {
                                    "id": "productDetails",
                                    "type": 44,
                                    "value": {
                                        "wysiwyg": {
                                            "source": "",
                                            "isSource": false,
                                            "mode": "markdown",
                                            "engine": "source"
                                        },
                                        "html": window.buildTable(ext_item) || '<p class"front-hidden">No Data for Table</p>',
                                        "hSize": null,
                                        "floatDir": null
                                    }
                                }, {
                                    "id": "productMeta",
                                    "type": 44,
                                    "value": {
                                        "wysiwyg": {
                                            "source": "",
                                            "isSource": false,
                                            "mode": "markdown",
                                            "engine": "source"
                                        },
                                        "html": '<meta itemprop="image" content="' + ext_item.assetUrl + '">' +
                                            '<meta property="og:image" content="' + ext_item.assetUrl + '">' +
                                            '<meta itemprop="thumbnailUrl" content="' + ext_item.assetUrl + '">' +
                                            '<meta name="twitter:image" content="' + ext_item.assetUrl + '">' +
                                            '<link rel="image_src" href="' + ext_item.assetUrl + '" />' +
                                            '<meta property="product:availability" content="instock">' +
                                            '<meta property="product:price:currency" content="USD">',
                                        "hSize": null,
                                        "floatDir": null
                                    }
                                }],
                                "span": 12
                            }]
                        }
                    ],
                    "span": 8
                }, {
                    "blocks": [{
                        "id": "productImages",
                        "type": 44,
                        "value": {
                            "wysiwyg": {
                                "source": "",
                                "isSource": false,
                                "mode": "markdown",
                                "engine": "source"
                            },
                            "html": ext_item['assetUrl'] && ext_item['assetUrl'].length ? '<div class="productImageWrapper"><img class="productImage" src="' + ext_item['assetUrl'] + '" alt="' + ext_item.title + '"/><div class="extraImages"><img class="rohsImage" src="https://zoostock.squarespace.com/s/RoHS_sello.png" alt="RoHS"/><img class="warrantyImage" src="https://zoostock.squarespace.com/s/lifetimewarranty_sello.png" alt="Lifetime Warranty"/><img class="UKASImage" src="https://zoostock.squarespace.com/s/CE.png" alt="CE"/><img class="UKASImage" src="https://zoostock.squarespace.com/s/UKAS.png" alt="UKAS"/></div></div>' : '<p class="front-hidden">No Data for Gallery</p>',
                            "hSize": null,
                            "floatDir": null
                        }
                    }],
                    "span": 4
                }],
            }];
        }
    },
    'cables': {
        regenerateCategories: 'regenerate', //categories pages will be deleted and recreated if 'regenerate', if 'update' - only date updates happen (need to keep categories first in blog view)
        airTableUrl: 'https://api.airtable.com/v0/app6ponqcBGtYfPYT/Cables?api_key=keyMmV8ObRgCW8YNy&sortField=Title&sortDirection=desc', //airtable url to get get items from
        //articlePageTemplate - json-coded article page layout
        articlePageTemplate: function(ext_item) {
            return [{
                "columns": [{
                    "rows": [{
                            "columns": [{
                                "blocks": [{
                                    "type": 2,
                                    "id": "title-block",
                                    "value": {
                                        "engine": "wysiwyg",
                                        "source": ext_item.title,
                                        "html": '<h2 class="BlogItem-title">' + ext_item.title + '</h2>',
                                    }
                                }],
                                "span": 5
                            }, {
                                "blocks": [{
                                    "id": "getQuote",
                                    "type": 53,
                                    "value": {
                                        "buttonText": "Presupuesto",
                                        "buttonLink": "#get-quote",
                                        "newWindow": false,
                                        "buttonAlignment": "right",
                                        "buttonSize": "small",
                                        "hSize": null,
                                        "floatDir": null
                                    }
                                }],
                                "span": 3
                            }]
                        },
                        {
                            "columns": [{
                                "blocks": [{
                                    "type": 2,
                                    "id": "description-block",
                                    "value": {
                                        "engine": "wysiwyg",
                                        "source": typeof ext_item['excerpt'] == 'string' ? ext_item['excerpt'] : '<p class="front-hidden">No Data for Description</p>',
                                        "html": typeof ext_item['excerpt'] == 'string' ? ext_item['excerpt'] : '<p class="front-hidden">No Data for Description</p>',
                                    }
                                }, {
                                    "id": "productDetails",
                                    "type": 44,
                                    "value": {
                                        "wysiwyg": {
                                            "source": "",
                                            "isSource": false,
                                            "mode": "markdown",
                                            "engine": "source"
                                        },
                                        "html": window.buildTable(ext_item) || '<p class"front-hidden">No Data for Table</p>',
                                        "hSize": null,
                                        "floatDir": null
                                    }
                                }, {
                                    "id": "productMeta",
                                    "type": 44,
                                    "value": {
                                        "wysiwyg": {
                                            "source": "",
                                            "isSource": false,
                                            "mode": "markdown",
                                            "engine": "source"
                                        },
                                        "html": '<meta itemprop="image" content="' + ext_item.assetUrl + '">' +
                                            '<meta property="og:image" content="' + ext_item.assetUrl + '">' +
                                            '<meta itemprop="thumbnailUrl" content="' + ext_item.assetUrl + '">' +
                                            '<meta name="twitter:image" content="' + ext_item.assetUrl + '">' +
                                            '<link rel="image_src" href="' + ext_item.assetUrl + '" />' +
                                            '<meta property="product:availability" content="instock">' +
                                            '<meta property="product:price:currency" content="USD">',
                                        "hSize": null,
                                        "floatDir": null
                                    }
                                }],
                                "span": 12
                            }]
                        }
                    ],
                    "span": 8
                }, {
                    "blocks": [{
                        "id": "productImages",
                        "type": 44,
                        "value": {
                            "wysiwyg": {
                                "source": "",
                                "isSource": false,
                                "mode": "markdown",
                                "engine": "source"
                            },
                            "html": ext_item['assetUrl'] && ext_item['assetUrl'].length ? '<div class="productImageWrapper"><img class="productImage" src="' + ext_item['assetUrl'] + '" alt="' + ext_item.title + '"/><div class="extraImages"><img class="rohsImage" src="https://zoostock.squarespace.com/s/RoHS_sello.png" alt="RoHS"/><img class="warrantyImage" src="https://zoostock.squarespace.com/s/lifetimewarranty_sello.png" alt="Lifetime Warranty"/><img class="UKASImage" src="https://zoostock.squarespace.com/s/CE.png" alt="CE"/><img class="UKASImage" src="https://zoostock.squarespace.com/s/UKAS.png" alt="UKAS"/></div></div>' : '<p class="front-hidden">No Data for Gallery</p>',
                            "hSize": null,
                            "floatDir": null
                        }
                    }],
                    "span": 4
                }],
            }];
        }
    },
    'transceivers': { //synced collection url
        regenerateCategories: 'delete', //categories pages will be https://api.airtable.com/v0/app6ponqcBGtYfPYT/Media%20Converters?api_key=keyMmV8ObRgCW8YNy&sortField=Title&sortDirection=descdeleted and recreated if 'regenerate', if 'update' - only date updates happen (need to keep categories first in blog view), if 'delete' - categories deleted
        airTableUrl: 'https://api.airtable.com/v0/app6ponqcBGtYfPYT/Transceivers?api_key=keyMmV8ObRgCW8YNy&sortField=Title&sortDirection=desc', //airtable url to get get items from
        //categoryPageTemplate - json-coded category page layout
        categoryPageTemplate: function(collectionUrl, collId, category) {
            return [{
                "columns": [{
                    "blocks": [{
                        "id": "categorySummary",
                        "type": 55,
                        "value": {
                            "hSize": null,
                            "floatDir": null,
                            "enableLazy": true,
                            "loadAllOrPag": false,
                            "portionLoad": true,
                            "loadPageSize": 5,
                            "loadMoreText": "Load more..",
                            "useSessionCache": true,
                            "customLazyIndex": true,
                            "customLazyIndexUrl": 'https://api.airtable.com/v0/app6ponqcBGtYfPYT/ALL?api_key=keyMmV8ObRgCW8YNy&sortField=Title&filterByFormula=({Categories}="' + category + '")',
                            "collectionUrl": "/" + collectionUrl,
                            "ignoreInit": false,
                            "alternateImages": false,
                            "enableLazyFilter": false,
                            "lazyFilter": { "category": category },
                            "sortSummaryItems": "no-sort",
                            "showShareButtons": "noShare",
                            "buttonsIconAlignment": "center",
                            "buttonsIconSize": "small",
                            "buttonsIconStyle": "square-border",
                            "buttonsIconColor": "black",
                            "mobileSettings": false,
                            "mobileColumnWidth": 150,
                            "mobileGutter": 10,
                            "collectionId": collId,
                            "design": "list",
                            "headerText": "Featured",
                            "textSize": "medium",
                            "pageSize": 3,
                            "imageAspectRatio": "1.5",
                            "columnWidth": 270,
                            "gutter": 60,
                            "listImageSize": 30,
                            "listImageAlignment": "left",
                            "slidesPerRow": 3,
                            "textAlignment": "left",
                            "showTitle": true,
                            "showThumbnail": true,
                            "showExcerpt": true,
                            "showReadMoreLink": false,
                            "showPrice": true,
                            "productQuickViewEnabled": false,
                            "showPastOrUpcomingEvents": "upcoming",
                            "metadataPosition": "below-content",
                            "primaryMetadata": "cats",
                            "secondaryMetadata": "none",
                            "filter": {},
                            "autoCrop": true,
                            "lightbox": false,
                            "mixedContent": true,
                            "blockId": "c39c2267b4ca9298c695"
                        }
                    }],
                    "span": 12
                }]
            }];
        },
        //articlePageTemplate - json-coded article page layout
        articlePageTemplate: function(ext_item) {
            return [{
                "columns": [{
                    "rows": [{
                            "columns": [{
                                "blocks": [{
                                    "type": 2,
                                    "id": "title-block",
                                    "value": {
                                        "engine": "wysiwyg",
                                        "source": ext_item.title,
                                        "html": '<h2 class="BlogItem-title">' + ext_item.title + '</h2>',
                                    }
                                }],
                                "span": 5
                            }, {
                                "blocks": [{
                                    "id": "getQuote",
                                    "type": 53,
                                    "value": {
                                        "buttonText": "Presupuesto",
                                        "buttonLink": "#get-quote",
                                        "newWindow": false,
                                        "buttonAlignment": "right",
                                        "buttonSize": "small",
                                        "hSize": null,
                                        "floatDir": null
                                    }
                                }],
                                "span": 3
                            }]
                        },
                        {
                            "columns": [{
                                "blocks": [{
                                    "type": 2,
                                    "id": "description-block",
                                    "value": {
                                        "engine": "wysiwyg",
                                        "source": typeof ext_item['excerpt'] == 'string' ? ext_item['excerpt'] : '<p class="front-hidden">No Data for Description</p>',
                                        "html": typeof ext_item['excerpt'] == 'string' ? ext_item['excerpt'] : '<p class="front-hidden">No Data for Description</p>',
                                    }
                                }, {
                                    "id": "productDetails",
                                    "type": 44,
                                    "value": {
                                        "wysiwyg": {
                                            "source": "",
                                            "isSource": false,
                                            "mode": "markdown",
                                            "engine": "source"
                                        },
                                        "html": window.buildTable(ext_item) || '<p class"front-hidden">No Data for Table</p>',
                                        "hSize": null,
                                        "floatDir": null
                                    }
                                }, {
                                    "id": "productMeta",
                                    "type": 44,
                                    "value": {
                                        "wysiwyg": {
                                            "source": "",
                                            "isSource": false,
                                            "mode": "markdown",
                                            "engine": "source"
                                        },
                                        "html": '<meta itemprop="image" content="' + ext_item.assetUrl + '">' +
                                            '<meta property="og:image" content="' + ext_item.assetUrl + '">' +
                                            '<meta itemprop="thumbnailUrl" content="' + ext_item.assetUrl + '">' +
                                            '<meta name="twitter:image" content="' + ext_item.assetUrl + '">' +
                                            '<link rel="image_src" href="' + ext_item.assetUrl + '" />' +
                                            '<meta property="product:availability" content="instock">' +
                                            '<meta property="product:price:currency" content="USD">',
                                        "hSize": null,
                                        "floatDir": null
                                    }
                                }],
                                "span": 12
                            }]
                        }
                    ],
                    "span": 8
                }, {
                    "blocks": [{
                        "id": "productImages",
                        "type": 44,
                        "value": {
                            "wysiwyg": {
                                "source": "",
                                "isSource": false,
                                "mode": "markdown",
                                "engine": "source"
                            },
                            "html": ext_item['assetUrl'] && ext_item['assetUrl'].length ? '<div class="productImageWrapper"><img class="productImage" src="' + ext_item['assetUrl'] + '" alt="' + ext_item.title + '"/><div class="extraImages"><img class="rohsImage" src="https://zoostock.squarespace.com/s/RoHS_sello.png" alt="RoHS"/><img class="warrantyImage" src="https://zoostock.squarespace.com/s/lifetimewarranty_sello.png" alt="Lifetime Warranty"/><img class="UKASImage" src="https://zoostock.squarespace.com/s/CE.png" alt="CE"/><img class="UKASImage" src="https://zoostock.squarespace.com/s/UKAS.png" alt="UKAS"/></div></div>' : '<p class="front-hidden">No Data for Gallery</p>',
                            "hSize": null,
                            "floatDir": null
                        }
                    }],
                    "span": 4
                }],
            }];
        }
    }
};
window.syncedCollections['transceivers'] = window.syncedCollections.transceivers;
//Build Table Helpers
(function() {
    var _table_ = document.createElement('table'),
        _tr_ = document.createElement('tr'),
        _th_ = document.createElement('th'),
        _thead_ = document.createElement('thead'),
        _td_ = document.createElement('td');
    var tableData = [];

    function buildHtmlTable(arr) {
        var table = _table_.cloneNode(false);
        table.className = 'custom-table-block custom-table-block-bordered custom-table-block-even-rows';
        table.style.width = '100%';
        addAllColumnHeaders(arr.splice(0, 1), table);
        tableData = arr;
        buildTableBody(arr, table);
        return table.outerHTML;;
    }

    function buildTableBody(arr, table) {
        for (var i = 0, maxi = arr.length; i < maxi; ++i) {
            var tr = _tr_.cloneNode(false);
            tr.className = 'table-row';
            var cells = arr[i];
            for (var j = 0, maxj = cells.length; j < maxj; ++j) {
                var td = _td_.cloneNode(false);
                td.className = 'table-cell';
                if (j === 0) {
                    td.className += ' first-cell';
                } else {
                    td.className += ' next-cell';
                }
                var cellValue = cells[j];
                td.innerHTML = cellValue || '';
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
    }

    function addAllColumnHeaders(arr, table) {
        var columnSet = [],
            thead = _thead_.cloneNode(false);
        var labels = arr[0];
        for (var i = 0, l = labels.length; i < l; i++) {
            var th = _th_.cloneNode(false);
            th.className = 'table-header-th';
            if (i === 0) {
                th.className += ' table-label';
            } else {
                th.className += ' table-header-not-label';
            }
            th.innerHTML = labels[i];
            thead.appendChild(th);
        }
        table.appendChild(thead);
    }

    function buildTable(item_data) {
        var tableData = [
            ['Details', '']
        ];
        item_data.variants.forEach(function(variant) {
            for (var key in variant) {
                if (variant.hasOwnProperty(key) && variant[key]) { //&& testString.indexOf(key) > -1
                    var name = key.trim();
                    var val = variant[key];
                    if (name.indexOf('Price') > -1) {
                        try {
                            val = '$' + parseFloat(val).toFixed(2);
                        } catch (e) {
                            console.warn(e);
                        }
                    }
                    if (val.length && val !== '-1') {
                        tableData.push([name, val]);
                    }
                }
            }
        })
        var tableContent = buildHtmlTable(tableData);
        return tableContent;
    }
    window.buildTable = buildTable;
})();

//Syncing part, probably no need to touch
!function(){var r=window.syncedCollections?window.syncedCollections.syncedUrls:"transceivers,cables",l=null,c=null;function o(e){var o=e?Y.Widget.getByNode(e):Y.one(".sqs-content-manager-blog-content")?Y.Widget.getByNode(Y.one(".sqs-content-manager-blog-content")):null;if(o){var t=o.get("collection");if(-1<r.indexOf(t.get("urlId"))){var n=o.get("contentBox");n.one(".header")&&!n.one("#syncButton")&&(console.log("build sync Button"),l&&l.detach(),n.one(".header").prepend('<button id="syncButton" title="Sync From feed" style="padding:5px 20px;margin:2px 0;display:block;cursor:pointer;background:transparent;border:2px solid #333" data-id="'+t.get("id")+'">Sync Collection with Feed</button>'),n.one("#syncButton").on("click",function(e){if(e.halt(),window.processingBlogSync)console.log("Sync already Started");else{c&&(c.destroy(),c=null);var o=(c=new Y.Squarespace.Widgets.Information({name:"customBlogSync","strings.title":"Syncing with Feed","strings.message":"We are currently syncing",hideAfterTime:null,"strings.confirm":"OK",style:2})).get("contentBox");o&&o.one(".message")&&o.one(".message").setStyles({maxHeight:"500px",overflow:"auto"}),c.on("confirm",function(e){window.processingBlogSync?e.halt():Y.Squarespace.Singletons.Location.requestFrameRefresh()}),Y.fire("sync-Blog",{collId:e.currentTarget.getAttribute("data-id"),info_node:c.get("contentBox")})}}),l=Y.on("syncList",function(){o&&o.loadPage()}),Y.once("destroyInfo",function(){setTimeout(function(){o&&o.loadPage()},2e3)}))}}}console.log("admin sync things"),Y.on("sync-Blog",function(e){var y=e.collId||!1;if(y){var c,o,t=Y.Squarespace.ContentCollectionCache.getById(y),m=t.toJSON().items,n=e.info_node?e.info_node.one(".message"):null;if(window.processingBlogSync=!0,window.ext_items)c=window.ext_items,l();else{var r=window.syncedCollections[t.get("urlId")].airTableUrl||!1;r?(o=r,new Promise(function(t,e){var n,r={records:[]},l=function(o){n=n?"&offset="+n:"",fetch(o+n).then(function(e){return e.json()}).then(function(e){e&&e.records?(r.records=r.records.concat(e.records),h("<b>Fetched "+r.records.length+" items.</b>"),e.offset&&e.offset!==n?(n=e.offset,l(o)):t(r)):(console.error("Corrupted data received"),t(r))}).catch(function(e){console.log(e),h(e),t(r)})};l(o)})).then(function(e){e&&e.records?(c=window.convertAirProductToSQSItem?window.convertAirProductToSQSItem(e,!1):Y.Squarespace.Damask.ContextGlobals.fromFrame("convertAirProductToSQSItem")?Y.Squarespace.Damask.ContextGlobals.fromFrame("convertAirProductToSQSItem")(e,!1):e,l()):console.error("Corrupted data received")}).catch(function(e){console.log(e),h(e)}):console.log("No AirTable Url in config.")}}function h(e){n&&n.prepend(e+"<br/>")}function l(){if(c&&c.length){var r=c.length,p=count_size=c.length,f=!1,l=[];console.log("Fetched "+r+" items from API!"),h("<b>Fetched "+r+" items from API!</b>");var w=t.get("urlId");w?(e=y,new Y.Promise(function(c){var s=[];!function n(r,l){Y.io("/api/content/blogs/"+r+"/posts",{data:{start:l||"",limit:250},on:{success:function(e,o){var t;try{(t=Y.JSON.parse(o.responseText)).results&&t.results.length?(s=t.results?s.concat(t.results):[],t.nextPageStart&&l!==t.nextPageStart?n(r,t.nextPageStart):c(s)):c(s)}catch(e){return console.log("JSON Parse failed!"),!1}},failure:function(e){console.warn("error : "+e.message),c(s)}}})}(e)})).then(function(e){m=e,console.log("Found "+m.length+" items existing."),h("<b>Found "+m.length+" items existing.</b>");var d={};if(m.forEach(function(e){e.sourceUrl&&(d[e.sourceUrl]=e)}),p){if(window.syncedCollections[w]&&window.syncedCollections[w].regenerateCategories&&"no"!==window.syncedCollections[w].regenerateCategories){if("delete"==!window.syncedCollections[w].regenerateCategories){var o=[];c.forEach(function(e){e.id&&l.push(e.id),e.categories&&-1===o.indexOf(e.categories+"")&&o.push(e.categories+"")}),o=o.sort().reverse();var t=[{columns:[{blocks:[{id:"category_template",type:2,value:{engine:"wysiwyg",source:"",html:"<p>No Template there</p>"}}],span:12}]}];o.forEach(function(e){var o=e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/\//g,"-").replace(/^-+/,"").replace(/-+$/,"");window.syncedCollections[w]&&window.syncedCollections[w].categoryPageTemplate&&(t=window.syncedCollections[w].categoryPageTemplate(w,y,e)||t),c.push({recordType:1,recordTypeLabel:"text",type:1,title:e,collectionId:y,urlId:o,categories:[e],variants:[],sourceUrl:"category-page-"+o,addedOn:(new Date).getTime(),publishOn:(new Date).getTime(),excerpt:{html:e+" Page",raw:!1},body:{raw:!1,updatedOn:(new Date).getTime(),layout:{columns:12,rows:t,legacyPromotedLayout:!0}},workflowState:1})}),r=c.length,p=count_size=c.length}m&&m.length&&m.forEach(function(o){o.sourceUrl&&-1<o.sourceUrl.indexOf("category-page-")&&window.syncedCollections[w]&&window.syncedCollections[w].regenerateCategories&&("regenerate"!=window.syncedCollections[w].regenerateCategories&&"delete"!=window.syncedCollections[w].regenerateCategories||(new Y.Squarespace.Models.ContentItem(o)._delete(function(e){console.log("Deleting item "+o.title),h('<b style="color: red;">Deleting item '+o.title+"</b>")}),-1<o.sourceUrl.indexOf("category-page-")&&(delete o.id,delete d[o.sourceUrl])))})}var g=function(){0==p||p<0?(console.log("All "+r+" items have been processed!"),h("<b>All "+r+" items have been processed!</b>"),window.processingBlogSync=!1,Y.fire("destroyInfo"),clearInterval(n),n=null,f=!1,Y.fire("syncList")):f=!1,!(p%50)&&Y.fire("syncList")},u=function(){var e=count_size-p;count_size!==e&&!f&&c[e]&&function(e,o){f=!0;var t={},n=e.title,r=[{columns:[{blocks:[{id:"item_template",type:2,value:{engine:"wysiwyg",source:"",html:"<p>No Template there</p>"}}],span:12}]}];window.syncedCollections[w]&&window.syncedCollections[w].articlePageTemplate&&(r=window.syncedCollections[w].articlePageTemplate(e)||r);var l,c,s=e.fullUrl||e.urlId,i={recordType:1,recordTypeLabel:"text",type:1,forceUpdate:e.forceUpdate,title:n,collectionId:y,urlId:s.replace(/^\/|\/$/g,""),sourceUrl:e.id||e.sourceUrl,addedOn:(new Date).getTime(),updatedOn:(new Date).getTime(),excerpt:{html:e.excerpt&&e.excerpt.length?e.excerpt:"",raw:!1},body:e.body||{layout:{columns:12,rows:r,legacyPromotedLayout:!0,promotedBlockId:null,collectionId:y,parentItemId:null,span:12},updatedOn:(new Date).getTime()},workflowState:1};m&&m.length&&i.sourceUrl&&d[i.sourceUrl]&&d[i.sourceUrl].id&&((t=d[i.sourceUrl]).needUpdate=(l=d[i.sourceUrl],c=i,l.title!==c.title||l.excerpt.html!==c.excerpt.html||l.urlId!==c.urlId||!!c.forceUpdate),t.needUpdate&&(console.log("Updating "+t.title),h("Updating "+t.title),delete t.body,delete t.urlId,delete t.excerpt,delete t.title,delete t.tags,delete t.categories),i.sourceUrl&&-1<i.sourceUrl.indexOf("category-page-")&&window.syncedCollections[w].regenerateCategories&&"update"==window.syncedCollections[w].regenerateCategories&&(t.needUpdate=!0)),t=Y.merge(t,i);var a=new Y.Squarespace.Models.ContentItem(t);t.id&&t.needUpdate||!t.id?(e.categories&&a.set("categories",e.categories),e.tags&&a.set("tags",e.tags),a.set("publishOn",(new Date).getTime()),a.onceAfter("error",function(e){if(e&&e.error){var o=e.error.errors?JSON.stringify(e.error.errors).replace(/{/g,"").replace(/}/g,""):e.error.error;e.error.errors&&e.error.errors.urlId?(console.log("URL Error",o),h("URL Error: <b>"+a.get("urlId")+"</b> - "+o)):(console.log("Some error while processing item",o),h("Some error while processing item - "+o)),p--,g()}}),a.onceAfter("save",function(e){e.parsed&&(console.log("Updated/Created "+o+" - "+e.parsed.title),h("Updated/Created <b>"+o+"</b> - "+e.parsed.title),p--,g())}),a.save()):(p--,g(),u())}(c[e],e),(0==p||p<0)&&g()},n=setInterval(function(){u()},100)}else g()}):(console.log("Can't find collection url"),window.processingBlogSync=!1)}var e}}),window.processingBlogSync=!1;var e=document.querySelectorAll("body")[0];window.panel_observer||(window.panel_observer=new MutationObserver(function(e){e.forEach(function(e){"childList"==e.type&&e.addedNodes[0]&&e.target.className&&-1<e.target.className.indexOf("sqs-content-manager-blog-content")&&o(e.target)})}),window.panel_observer.observe(e,{childList:!0,subtree:!0})),o()}();
