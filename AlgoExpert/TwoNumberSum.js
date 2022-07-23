function twoNumberSum(array, target) {
  for (let i = 0; i < array.length - 1; i++) {
    const firstNum = array[i];
    for (let j = I + 1; j < array.length; j++) {
      const secondNum = array[j];
      if (firstNum + secondNum === targetSum) {
        return [firstNum, secondNum];
      }
    }
  }

  return [];
}

function twoNumSum(array, targetSum) {
  const nums = {};
  for (const num of array) {
    const potentialMatch = targetSum - num;
    if (potentialMatch in nums) {
      return;
    } else {
      nums[num] = true;
    }
  }

  return [];
}

const tns = (array, targetSum) => {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    currentSum = array[left] + array[right];
    if (currentSum === target) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left++;
    } else if (currentSum > targetSum) {
      right--;
    }
  }

  return [];
};
