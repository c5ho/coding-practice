/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  console.log(nums1);
  console.log(nums1.splice(m, n));
  nums1[m] = ...nums2;
  console.log(nums1);
};
// @lc code=end

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
