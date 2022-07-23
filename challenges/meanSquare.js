var solution = function (firstArray, secondArray) {
  if (!Array.isArray(firstArray) || !Array.isArray(secondArray)) {
    throw 'Parameter is not an array!';
  }

  if (firstArray.length !== secondArray.length) return;

  let arrDiff = [];
  for (let i = 0; i < firstArray.length; i++) {
    let absDiff = Math.pow(Math.abs(firstArray[i] - secondArray[i]), 2);
    arrDiff.push(absDiff);
  }

  let sum = arrDiff.reduce((acc, a) => acc + a);

  return sum / firstArray.length;
};

solution([1, 2, 3], [4, 5, 6]);
