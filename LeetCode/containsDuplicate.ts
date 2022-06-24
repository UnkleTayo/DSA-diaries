function containsDuplicate(nums: number[]): boolean {
  let set: Set<number> = new Set(nums);

  return set.size === nums.length ? true : false;

}


containsDuplicate([1, 2, 3, 1]);