const f1 = require('./Searches/File1.json')
const f2 = require('./Searches/File2.json')
const f3 = require('./Searches/File3.json')
const f4 = require('./Searches/File4.json')
const f5 = require('./Searches/File5.json')
const f6 = require('./Searches/File6.json')
const f7 = require('./Searches/File7.json')
const f8 = require('./Searches/File8.json')
const f9 = require('./Searches/File9.json')
const f10 = require('./Searches/File10.json')
const f11 = require('./Searches/File11.json')
const f12 = require('./Searches/File12.json')
const f13 = require('./Searches/File13.json')
const f14 = require('./Searches/File14.json')
const f15 = require('./Searches/File15.json')
const f16 = require('./Searches/File16.json')
const f17 = require('./Searches/File17.json')
const f18 = require('./Searches/File18.json')
const f19 = require('./Searches/File19.json')
const f20 = require('./Searches/File20.json')
const f21 = require('./Searches/File21.json')
const f22 = require('./Searches/File22.json')
const f23 = require('./Searches/File23.json')
const f24 = require('./Searches/File24.json')
const f25 = require('./Searches/File25.json')
const f26 = require('./Searches/File26.json')
const f27 = require('./Searches/File27.json')
const f28 = require('./Searches/File28.json')
const f29 = require('./Searches/File29.json')
const f30 = require('./Searches/File30.json')
const f31 = require('./Searches/File31.json')
const f32 = require('./Searches/File32.json')


var allData = [];

f1.event.forEach(item => allData.push(item))
f2.event.forEach(item => allData.push(item))
f3.event.forEach(item => allData.push(item))
f4.event.forEach(item => allData.push(item))
f5.event.forEach(item => allData.push(item))
f6.event.forEach(item => allData.push(item))
f7.event.forEach(item => allData.push(item))
f8.event.forEach(item => allData.push(item))
f9.event.forEach(item => allData.push(item))
f10.event.forEach(item => allData.push(item))
f11.event.forEach(item => allData.push(item))
f12.event.forEach(item => allData.push(item))
f13.event.forEach(item => allData.push(item))
f14.event.forEach(item => allData.push(item))
f15.event.forEach(item => allData.push(item))
f16.event.forEach(item => allData.push(item))
f17.event.forEach(item => allData.push(item))
f18.event.forEach(item => allData.push(item))
f19.event.forEach(item => allData.push(item))
f20.event.forEach(item => allData.push(item))
f21.event.forEach(item => allData.push(item))
f22.event.forEach(item => allData.push(item))
f23.event.forEach(item => allData.push(item))
f24.event.forEach(item => allData.push(item))
f25.event.forEach(item => allData.push(item))
f26.event.forEach(item => allData.push(item))
f27.event.forEach(item => allData.push(item))
f28.event.forEach(item => allData.push(item))
f29.event.forEach(item => allData.push(item))
f30.event.forEach(item => allData.push(item))
f31.event.forEach(item => allData.push(item))
f32.event.forEach(item => allData.push(item))

const words = {}

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}

allData.forEach((item) => {
  var word = item.query.query_text;
  var seperatedWord = word.split(' ');
  
  seperatedWord.forEach((word) => {
    if (!isInArray(word, ['to', 'in', 'is', 'of', 'what', 'the', 'a', 'for', 'and', 'on', 'does', 'with', ])) {
      var word = word.toLowerCase();
      if (words[word]) {
        words[word]++
      } else {
        words[word] = 1;
      }
    }
  })
})

var sortable = [];
for (var word in words) {
  sortable.push([word, words[word]]);
}

sortable.sort(function (a, b) {
  return b[1] - a[1];
});

for (var i=0;i<20;i++) {
  console.log(sortable[i])
}