/* Get Records */

async function getRecords(endpoint) {
  var response = await fetch(endpoint);
  var json = await response.json();
  var records = json.records;

  return records;
}

/* Super Object */

const megaBuild = {
  masterList: (url, name, slug, appendTo) => {
    const list = Y.Node.create(`
      <div class="firstLevel">
        <a class="firstLevel-item" href="${url}">${name}</a>
        <div class="secondLevel ${slug}"></div>
      </div>
    `)
    appendTo.append(list)
  },
  imageList: img => {
    if(!img) return;
    Y.one('.imageMenu').append(`
      <li class="catImg">
        <img src="${img[0].url}" alt="${img}">
      </li>
    `);
  },
  slaveList: (slaves, slug) => {
    // By record (slave)
    if(!slaves) return

    slaves.forEach(slave => {
      var sublist = Y.Node.create(`
        <a href="${slave.fields.URL}">${slave.fields.Name}</a>
      `);
      Y.one(`.secondLevel.${slug}`).append(sublist);
    })
  },
  megaTemplate: '<div class="megaMenu-wrapper"><div class="Header-nav-item--megamenu-close"></div><div class="megaMenu-innerWrapper"><div class="megaMenu"></div><ul class="imageMenu"></ul></div></div>',

}

/* Our Super Function */

function buildMegaMenu(records, target) {
  target = target.ancestor();
  target.addClass('Header-nav-item--megamenu');

  const nav = Y.Node.create(megaBuild.megaTemplate);
  nav.appendTo(target);

  // By record (master)
  records.forEach(record => {
    const slug = record.fields.Name.toLowerCase().replace(/[0-9]/g, '');

    megaBuild.masterList(record.fields.URL, record.fields.Name, slug, Y.one('.megaMenu'))
    megaBuild.imageList(record.fields.Image)
    megaBuild.slaveList(record.children, slug)
  })
}

/* Our Init Function */

function initMegaMenu() {
  initClickers();
  const catalogLink = Y.one('.Header-nav a[href*="/catalog"]');

  const airtableURL = 'https://api.airtable.com/v0/app6ponqcBGtYfPYT',
        APIkey = 'keyMmV8ObRgCW8YNy';
  const endpoint = `${airtableURL}/Megamenu?api_key=${APIkey}`;

  //window.children = [];

  const fetchResult = getRecords(endpoint);

  fetchResult.then(data => {
    const masterRecords = data.filter(record => record.fields.Hierarchy ===  'master');
    const slaveRecords = data.filter(record => record.fields.Hierarchy ===  'slave');

    masterRecords.sort((r1, r2) => r1.fields.Order - r2.fields.Order);
    slaveRecords.sort((r1, r2) => r1.fields.Order - r2.fields.Order);

    masterRecords.forEach(masterRecord => {
      const masterID = masterRecord.id;
      const childrenRecords = slaveRecords.filter(rec => rec.fields['Master Record'] == masterRecord.id);
      //window.children.push(childrenRecords);

      masterRecord.children = childrenRecords;
    });

    buildMegaMenu(masterRecords, catalogLink);
  })
}

function initClickers() {

  document.querySelector('.Header-nav-item--megamenu').onclick = e => {
    e.preventDefault()
    e.stopPropagation()
    if (document.body.classList.contains('no-touch')) return;

    document.querySelector('.Header-nav-item--megamenu').classList.add('Header-nav-item--megamenu-active')
  }

  document.querySelector('.Header-nav-item--megamenu-close').onclick = e => {
    e.preventDefault()
    e.stopPropagation()

    document.querySelector('.Header-nav-item--megamenu').classList.remove('Header-nav-item--megamenu-active')
  }
}

window.Squarespace.onInitialize(Y, () => initMegaMenu());
