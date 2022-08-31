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
  // let found = false;
  let highestIndex = nums.length - 1;
  let lowestIndex = 0;
  while (lowestIndex <= highestIndex) {
    // console.log("low", lowestIndex, "high", highestIndex);
    const middleIndex = Math.floor((lowestIndex + highestIndex) / 2);
    // console.log("middle", middleIndex);
    if (target < nums[middleIndex]) {
      highestIndex = middleIndex - 1;
      // console.log("highest", highestIndex);
    } else if (target > nums[middleIndex]) {
      lowestIndex = middleIndex + 1;
      // console.log("lowest", lowestIndex);
    } else {
      return middleIndex;
    }
  }
  return lowestIndex;
};
// @lc code=end

// console.log(searchInsert([1, 3, 5, 6], 5)); //2
// console.log(searchInsert([1, 3, 5, 6], 2)); //1
// console.log(searchInsert([1, 3, 5, 6], 7)); //4
// console.log(searchInsert([1, 3, 5, 6], -7));
// console.log(searchInsert([2, 3, 5, 6], 1)); //0
