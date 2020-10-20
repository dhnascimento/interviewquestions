// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/

const containsDuplicate = function (nums) {
  // Sets the starting point of the inner loop
  let moving = 1;
  for (let num of nums) {
    for (let i = moving; i < nums.length; i++) {
      // Returns true if item from outer loop is equal to item from the inner loop
      if (num === nums[i]) {
        return true;
      }
    }
    // Change starting index of inner loop
    moving++;
  }
  // Returns false if there is no duplicates
  return false;
};

const tests = {
  // Expected: false
  1: [3, 1],
  // Expected: true
  2: [1, 2, 3, 1],
  // Expected: false
  3: [1, 2, 3, 4],
  // Expected: true
  4: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2],
  // Expected: true
  5: [2, 14, 18, 22, 22],
  // Expect: false
  6: [0],
};

for (let test of Object.values(tests)) {
  console.log(containsDuplicate(test));
}
