const search = (nums, target) => {
  let left = 0;
  let middle;
  let right = nums.length - 1;

  while (left <= right) {
    middle = Math.round((right - left) / 2) + left;

    if (target === nums[middle]) return middle;

    if (nums[left] <= nums[middle]) {
      if (target >= nums[left] && target <= nums[middle]) {
        right = middle - 1;
      } else left = middle + 1;
    } else {
      if (target >= nums[middle] && target <= nums[right]) {
        left = middle + 1;
      } else right = middle - 1;
    }
  }
  return -1;
};

const nums = [4, 5, 6, 7, 0, 1, 2],
  target = 0;
console.log(search(nums, target));
