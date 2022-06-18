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

function recursiveBinarySearch(arr, elm) {
  return search(arr, elm, 0, arr.length - 1);
}

function search(arr, elm, start, end) {
  if (start > end) {
    return -1;
  }

  let middle = Math.floor((start + end) / 2);

  if (elm === arr[middle]) {
    return middle;
  }
  if (elm < arr[middle]) {
    return search(arr, target, start, middle - 1);
  } else if (elm > arr[middle]) {
    return search(arr, elm, middle + 1, end);
  }
}

console.log(recursiveBinarySearch([2, 5, 6, 9, 10, 16, 35, 69, 585, 900], 900));
