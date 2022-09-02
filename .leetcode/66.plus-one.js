/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let last = digits.length - 1;
  while (digits[last] === 9) {
    digits[last] = 0;
    if (last === 0) {
      digits.unshift(1);
      return digits;
    }
    last--;
  }
  digits[last]++;
  return digits;
};
// @lc code=end
