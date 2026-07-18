/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
     let min = nums[0];
    let max = nums[0];

    for (let num of nums) {
        if (num < min) min = num;
        if (num > max) max = num;
    }

    function gcd(a, b) {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    }

    return gcd(min, max);
};