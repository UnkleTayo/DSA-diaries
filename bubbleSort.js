function bubbleSort(array) {
  let swapped;
  do {
    swapped = false;
    for (let index = 0; index < array.length - 1; index++) {
      if (array[index] > array[index + 1]) {
        let temp = array[index];
        array[index] = arr[index + 1];
        arr[index + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

const arr = [0, 20, -2, 5];
bubbleSort(arr);

console.log('====================================');
console.log(arr);
console.log('====================================');
