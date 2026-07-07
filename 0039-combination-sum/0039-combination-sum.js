/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
     let result = [];

    function backtrack(index, current, sum) {
        if (sum === target) {
            result.push([...current]);
            return;
        }

        if (sum > target || index === candidates.length) {
            return;
        }

        // Include current element
        current.push(candidates[index]);
        backtrack(index, current, sum + candidates[index]); // same index because reuse is allowed
        current.pop();

        // Skip current element
        backtrack(index + 1, current, sum);
    }

    backtrack(0, [], 0);
    return result;
};