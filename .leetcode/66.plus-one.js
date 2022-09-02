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
  console.log(digits);
  console.log(typeof digits.join(""));
  console.log(typeof BigInt(digits.join("").toString(2)));
  console.log(typeof parseInt(digits.join("").toString(2)));
  console.log(parseInt(digits.join("").toString(2)));
  console.log([BigInt(digits.join(""))].toString().split(""));
  // return [parseInt(digits.join("")) + 1].toString().split("");
};
// @lc code=end

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));

// let last = digits.length - 1;
// while (digits[last] === 9) {
//   digits[last] = 0;
//   if (last === 0) {
//     digits.unshift(1);
//     return digits;
//   }
//   last--;
// }
// digits[last]++;
// return digits;
