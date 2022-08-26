/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = "";
  for (let i = 0; i < strs[0].length; i++) {
    const commonLetter = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== commonLetter) {
        return result;
      }
      if (j === strs.length - 1) {
        result += commonLetter;
      }
    }
  }
  return result;
};
// @lc code=end
