/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    let min = Math.min(...nums);
    let max = Math.max(...nums);

    const set = new Set(nums);
    const ans = [];

    for (let i = min + 1; i < max; i++) {
        if (!set.has(i)) {
            ans.push(i);
        }
    }

    return ans;
};