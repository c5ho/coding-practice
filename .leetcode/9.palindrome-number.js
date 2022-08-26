/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const reversedX = parseInt(x.toString().split("").reverse().join(""));
  return reversedX === x;
};
// @lc code=end
