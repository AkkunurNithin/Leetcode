/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let actualsum = 0;
    let expectedsum = (n*(n+1))/2;

    for(let i=0; i<n; i++){
        actualsum += nums[i];
    }
    let missnum = expectedsum - actualsum;
    return missnum;
};