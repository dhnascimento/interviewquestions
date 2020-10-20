// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/

// Solution 1
const singleNumber = function (nums) {
  // Count of number occurrences in array
  let count = 0;
  for (let num of nums) {
    for (let i = 0; i < nums.length; i++) {
      // If next item is equal to current, add to counter
      if (num === nums[i]) {
        count += 1;
      }
    }
    // If counter equals 1, it means the item only appears once in the array
    if (count === 1) {
      return num;
      // If counter is different than 1, loop again
    } else {
      count = 0;
    }
  }
};

// Solution 2
const singleNumber2 = function (nums) {
  // Create new array to sort nums array
  let array = nums.sort();

  for (let num of array) {
    // If returns false, it means there isn't another equal number in the array, so returns number
    if (!nums.includes(num, array.indexOf(num) + 1)) {
      //
      return num;
    }
  }
};

const tests = {
  // Expected: 1
  1: [2, 2, 1],
  // Expected: 4
  2: [4, 1, 2, 1, 2],
  // Expected: 1
  3: [1],
  // Expected: 354
  4: [
    -336,
    513,
    -560,
    -481,
    -174,
    101,
    -997,
    40,
    -527,
    -784,
    -283,
    -336,
    513,
    -560,
    -481,
    -174,
    101,
    -997,
    40,
    -527,
    -784,
    -283,
    354,
  ],
};

// Results with Solution 1
for (let test of Object.values(tests)) {
  console.log(singleNumber(test));
}

// Results with Solution 2
for (let test of Object.values(tests)) {
  console.log(singleNumber2(test));
}
