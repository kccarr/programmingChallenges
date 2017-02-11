/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 // solution one
 // returns [5,6,7,1,2,3,4] with [1,2,3,4,5,6,7] array and k = 3
var rotate = function(nums, k) {
    var arrStart = nums.splice(nums.length -k, k);
    return arrStart.concat(nums);
};
