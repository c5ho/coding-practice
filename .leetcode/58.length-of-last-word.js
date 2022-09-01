/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  string = s.trim();
  for (let i = string.length; i >= 0; i--) {
    if (string[i] === " ") {
      return string.length - 1 - i;
    }
  }
  return string.length;
};
// @lc code=end
