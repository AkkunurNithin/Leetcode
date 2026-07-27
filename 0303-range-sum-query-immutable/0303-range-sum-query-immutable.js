/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.numbers = nums;
    this.prefixSum = [nums[0]];

    for (let i = 1; i < nums.length; i++) {
        this.prefixSum[i] = this.prefixSum[i - 1] + nums[i];
    }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    if (left === 0) return this.prefixSum[right];

    return this.prefixSum[right] - this.prefixSum[left - 1];
};