// similar to bubble bSort, but instead of placing
// large values into sorted position, it places small
// values into sorted positions

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < arr[min]) {
        min = j;
      }
    }

    if (i !== min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  console.log(arr);
  return arr;
}

const arr = [0, 20, -2, 5];
selectionSort(arr);
