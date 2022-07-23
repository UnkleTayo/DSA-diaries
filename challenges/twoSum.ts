// function twoSum(nums: number[], target: number): number[] {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j]
//       }
//     }

//   }
// };

function twoSums(nums, target) {
  let numObj = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (numObj[complement] !== undefined) {
      return [numObj[complement], i];
    }
    console.log(numObj[nums[i]])
    numObj[nums[i]] = i;
  }
}

twoSums([2, 7, 11, 15], 9)