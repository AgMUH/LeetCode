const searchInsert = (nums, target) => {
  let right = nums.length - 1;
  let middle;
  let left = 0;

  while (left <= right) {
    middle = Math.round(right - left / 2) + left;

    if (nums[middle] === target) return middle;

    if (target > nums[middle]) {
      left = middle + 1;
    } else right = middle - 1;
  }
  return target < nums[0] ? 0 : middle + 1;
};
const nums = [1, 3, 5, 6];
target = 0;

console.log(searchInsert(nums, target));
