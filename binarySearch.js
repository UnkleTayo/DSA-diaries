function binarySearch(arr, elm) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] === elm) {
      return middle;
    }

    if (elm < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return -1;
}
console.log(binarySearch([2, 5, 6, 9, 10, 16, 35, 69, 585, 900], 900));
