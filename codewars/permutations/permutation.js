function permutations(string) {
  var arr = string.split(''),
    tmp = [...arr];
  console.log(tmp);
  (heads = []), (out = []);
  if (string.length == 1) return [string];
  arr.forEach(function (v) {
    if (heads.indexOf(v) == -1) {
      heads.push(v);
      tmp.splice(tmp.indexOf(v), 1);
      permutations(tmp.join('')).forEach(function (w) {
        out.push(v + w);
      });
      tmp.push(v);
    }
  });
  return out;
}

// function permutations(string) {
//   var hash = {};
//   var resArr = [];
//   var subroutine = function (testStr, newString) {
//     newString = newString || '';
//     if (newString.length === string.length) {
//       hash[newString] = true;
//       return;
//     }
//     for (var i = 0; i < testStr.length; i++) {
//       var cur = testStr[i];
//       var str = newString + cur;
//       var excision = testStr.substring(0, i) + testStr.substring(i + 1);
//       console.log(excision);
//       subroutine(excision, str);
//     }
//   };
//   subroutine(string);
//   for (var key in hash) {
//     resArr.push(key);
//   }
//   return resArr;
// }

console.log(permutations('aabb'));
