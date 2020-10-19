// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/

const removeDuplicates = function (nums) {
  // If the num's array is empty;
  if (nums.length === 0) {
    return 0;
  }

  // For the two-pointer approach: this variable keeps track of the last unique item in the array by it's index
  let counter = 0;

  //  Iterating each element of the array except the first one (it's index will match the value assigned to counter)
  for (let i = 1; i < nums.length; i++) {
    // If value from index i is different from the value from index counter, add 1 to counter and change the index used for the next iteration
    if (nums[i] !== nums[counter]) {
      counter++;
      nums[counter] = nums[i];
    }
  }
  // Return the counter + 1 to account for the array's first element
  return counter + 1;
};

// Testing the function
const tests = {
  // Expected output: 0
  1: [],
  // Expected output: 1
  2: [0],
  // Expected output: 2
  3: [1, 1, 2],
  // Expected output: 5
  4: [0, 0, 0, 1, 1, 2, 2, 2, 3, 4, 4, 4],
};

for (let test of Object.values(tests)) {
  console.log(removeDuplicates(test));
}
