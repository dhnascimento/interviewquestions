// Say you have an array prices for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/

const maxProfit = function (prices) {
  // Variable to hold the sum of the profit
  let profit = 0;

  // Itearate through the array starting at the second element
  for (let i = 1; i < prices.length; i++) {
    // If the current item is greater than the previous one, it means profit can be made out of this transaction
    // Otherwise, no point in selling since it would incur in loss
    if (prices[i] > prices[i - 1]) {
      // Add the difference between current and previous item to the profit variable
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
};

const tests = {
  // Expected result: 7
  1: [7, 1, 5, 3, 6, 4],
  // Expected result: 4
  2: [1, 2, 3, 4, 5],
  // Expected result: 0
  3: [7, 6, 4, 3, 1],
};

for (let test of Object.values(tests)) {
  console.log(maxProfit(test));
}
