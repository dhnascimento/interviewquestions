// Given an array, rotate the array to the right by k steps, where k is non-negative.
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/

// Solution 1
const rotate = function (nums, k) {
  // Empty variable to hold the array's items that will be shifted
  let holder = "";
  while (k > 0) {
    // Remove the last item from the array and store in a variable
    holder = nums.pop();
    // Add the removed item to the beginning of the array
    nums.unshift(holder);
    // Subtract k to move to next step
    k--;
  }
  return nums;
};

// Solution 2 (Leetcode does not accept this for some reason, but it works here)
const rotate2 = function (nums, k) {
  // Top range from the slice
  let end = nums.length + 1;
  // Bottom range from the slice
  let begin = nums.length - k;
  // Save the elements that will be shifted in a variable
  const holder = nums.slice(begin, end);
  // Remove the items that will be shifted from the nums array
  nums.splice(begin, end);
  // Add the remaining items of the original array to the end of the holder arry
  for (item of nums) holder.push(item);
  // Return shifted array
  return holder;
};

// Tests
let nums = [1, 2, 3, 4, 5, 6, 7];
console.log(rotate(nums, 3));

nums = [1, 2, 3, 4, 5, 6, 7];
console.log(rotate2(nums, 3));

let nums2 = [-1, -100, 3, 99];
console.log(rotate(nums2, 2));

nums2 = [-1, -100, 3, 99];
console.log(rotate2(nums2, 2));
