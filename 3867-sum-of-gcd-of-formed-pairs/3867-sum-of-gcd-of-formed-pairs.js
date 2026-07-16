/**
 * @param {number[]} nums
 * @return {number}
 */
var gcdSum = function(nums) {

    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    const prefixGcd = [];
    let maxSoFar = nums[0];

    for (let i = 0; i < nums.length; i++) {
        maxSoFar = Math.max(maxSoFar, nums[i]);
        prefixGcd.push(gcd(maxSoFar, nums[i]));
    }

    prefixGcd.sort((a, b) => a - b);

    let sum = 0;
    let left = 0;
    let right = prefixGcd.length - 1;

    while (left < right) {
        sum += gcd(prefixGcd[left], prefixGcd[right]);
        left++;
        right--;
    }

    return sum;
};