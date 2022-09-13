/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let lowest = 0;
  let highest = x;
  // let count = 0;
  // let oldGuess = 0;
  // let middle = 0;
  // let newGuess = 0
  while (lowest <= highest) {
    let middle = Math.floor(lowest + highest) / 2;
    // console.log("count", ++count);
    // console.log("middle", middle, "highest", highest, "lowest", lowest);
    if (highest - middle < 1 || middle - lowest < 1) {
      return middle;
    }
    if (middle * middle === x) {
      return middle;
    }

    if (middle * middle > x) {
      highest = middle - 1;
    } else if (middle * middle < x) {
      lowest = middle + 1;
    }
    // newMiddle = middle;
    // console.log(newMiddle);
    //    return Math.floor(Math.sqrt(x));
  }
  // return highest;
};
// @lc code=end

console.log(mySqrt(Math.pow(2, 31) - 1));
console.log(mySqrt(0));
