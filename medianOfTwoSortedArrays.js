// Question source: https://leetcode.com/problems/median-of-two-sorted-arrays/

// There are two sorted arrays nums1 and nums2 of size m and n respectively.
//
// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
//
// Example 1:
// nums1 = [1, 3]
// nums2 = [2]
//
// The median is 2.0
// Example 2:
// nums1 = [1, 2]
// nums2 = [3, 4]
//
// The median is (2 + 3)/2 = 2.5

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var arrConcat = nums1.concat(nums2);
    var sorted = arrConcat.sort((a,b) => a-b);

    if (sorted.length % 2 === 0) {
        var a = sorted.length /2;
        var b = a;

        return (sorted[a-1] + sorted[b])/2;
    } else {
        var x = Math.round(sorted.length/2);
        return sorted[x-1];
    }
};
