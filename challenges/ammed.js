function amendTheSentence(s) {
  let parts = s.split(/(?=[A-Z])/);

  return parts
    .map((e) => {
      return e.toLowerCase();
    })
    .join(' ');
}

console.log(amendTheSentence('HelloWorld'));

var str = 'CodefightsIsAwesome';
var res = str
  .replace(/[A-Z][^A-Z]*/g, (word) => word + ' ')
  .trim()
  .toLowerCase();
