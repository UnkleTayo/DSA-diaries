function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    // J is index preceeding number to insert

    let j = i - 1;

    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    arr[j + 1] = numberToInsert;
  }
}

const arr = [0, -2, 40, -30, 4, 8];
//  i = 1
// j = 0
// NTI = -2

// is arr[0] = 0 > -2 yes
// arr[0 + 1] = -2 = arr[j]
// which means -2 will replace 0
// [-2, 0, 40, -30, 4, 8]
// j = j - 1;
// j =  0 -1

// is  -1 > 0
// No break out of the while loop
// arr [ j + 1] = number to insert
// arr [ 0 + 1] = 0
// i = 2;
// j = 1;
// NI = 0;

// arr[i] = 0 >= 0 yes
// arr[1] =0  >  0  nO
// DON'T ENTER THE WHILE LOOP
// arr[1] = no to insert
// i = 3
// j = 2
// arr[2] >= 0 yes

insertionSort(arr);
console.log(arr);
