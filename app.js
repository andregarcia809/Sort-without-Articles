const bands = ['Earth Wind & Fire', 'The Temptations', 'Sly & the Family Stone', 'The Jackson 5', 'Boys || Men', 'The O\' Jays', 'The Islye Brothers', 'The Beatles', 'The Supreme', 'The Gap Band',  'The rolling Stones', 'U2', 'The Beach Boys']

// Skips the Articles of the band name & eleminates white space
function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, '').trim();
}

// sorts bands Alphabetically
const sortedBands = bands.sort((a, b ) => strip(a) > strip(b) ? 1 : -1); //ES6

// Get Element
const BandsEl = document.querySelector('#bands');
BandsEl.innerHTML = sortedBands.map((band) => `<li>${band}</li>`).join(''); //ES6

// let markup = sortedBands.map((band) => { //ES5
//   return `<li>${band}</li>`;
// }).join('');
// BandsEl.innerHTML = markup;
