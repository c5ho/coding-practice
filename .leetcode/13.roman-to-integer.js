/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let result = 0;
  const stringArray = s.split("");

  for (let i = 0; i <= stringArray.length; i++) {
    switch (stringArray[i]) {
      case "I": {
        switch (stringArray[i + 1]) {
          case "V":
            result += 4;
            i++;
            break;
          case "X":
            result += 9;
            i++;
            break;
          default:
            result += 1;
        }
        break;
      }

      case "V":
        result += 5;
        break;

      case "X": {
        switch (stringArray[i + 1]) {
          case "L":
            result += 40;
            i++;
            break;
          case "C":
            result += 90;
            i++;
            break;
          default:
            result += 10;
        }
        break;
      }

      case "L":
        result += 50;
        break;

      case "C": {
        switch (stringArray[i + 1]) {
          case "D":
            result += 400;
            i++;
            break;
          case "M":
            result += 900;
            i++;
            break;
          default:
            result += 100;
        }
        break;
      }

      case "D":
        result += 500;
        break;

      case "M":
        result += 1000;
        break;
    }
  }
  return result;
};

// @lc code=end
