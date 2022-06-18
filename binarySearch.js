function binarySearch(arr, elm) {
  let start = 0;
  let end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elm) {
    if (elm < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    var middle = Math.floor((start + end) / 2);
    console.log(start, middle, end);
  }
}

binarySearch([2, 5, 6, 7, 9, 10, 16, 35, 69, 585, 900], 7);
