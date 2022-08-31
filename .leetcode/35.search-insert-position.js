/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let found = false;
  let highestIndex = nums.length - 1;
  let lowestIndex = 0;
  while (!found) {
    console.log(lowestIndex, highestIndex);
    const middleIndex = Math.floor((lowestIndex + highestIndex) / 2);
    console.log(middleIndex);
    if (target < nums[middleIndex]) {
      highestIndex = middleIndex - 1;
    } else if (target > nums[middleIndex]) {
      lowestIndex = middleIndex + 1;
    } else if (target === nums[middleIndex]) {
      found = true;
      return middleIndex;
    }
  }
};
// @lc code=end

console.log(searchInsert([1, 3, 5, 6], 5));
// console.log(searchInsert([1, 3, 5, 6], 2));
// console.log(searchInsert([1, 3, 5, 6], 6));
