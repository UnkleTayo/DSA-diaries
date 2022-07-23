rotateLeft = function (arr) {
  // var result = [];
  let finalArray = [];
  while (arr.length) {
    finalArray.push(...arr.shift());
    arr.map((row) => finalArray.push(row.pop()));
    arr.reverse().map((row) => row.reverse());
  }
  return finalArray;
  // var size = array.length;
  // if (size == 0) return [];
  // if (size == 1) return array[0];
  // var top = array[0].slice(0, -1);
  // var right = array.slice(0, -1).map((a) => a[size - 1]);
  // var bottom = array[size - 1].slice(1).reverse();
  // var left = array
  //   .slice(1)
  //   .map((a) => a[0])
  //   .reverse();
  // var inner = array.slice(1, -1).map((a) => a.slice(1, -1));
  // console.log(inner);
};

rotateLeft([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
]);
