// 137. Single Number II
//
// Given an array of integers, every element appears three times except for one, which appears exactly once. Find that single one.
//
// Note:
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var obj = nums.reduce((accumulator, curVal) => {
        if (curVal in accumulator) {
            accumulator[curVal]++;
        } else {
            accumulator[curVal] = 1;
        }
        return accumulator;
    }, {});

    var keys = Object.keys(obj);
    return Number(keys.filter(key => obj[key] === 1));

};
