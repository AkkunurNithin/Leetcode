/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var gcdValues = function(nums, queries) {
    const maxVal = Math.max(...nums);

    // Frequency of each number
    const freq = new Array(maxVal + 1).fill(0);
    for (const num of nums) {
        freq[num]++;
    }

    // exact[g] = number of pairs whose gcd is exactly g

    const exact = new Array(maxVal + 1).fill(0);

    // Process divisors from largest to smallest
    for (let g = maxVal; g >= 1; g--) {

        // Count numbers divisible by g
        let count = 0;
        for (let multiple = g; multiple <= maxVal; multiple += g) {
            count += freq[multiple];
        }

        // Total pairs divisible by g
        let pairs = count * (count - 1) / 2;

        // Remove pairs already counted for multiples of g
        for (let multiple = g * 2; multiple <= maxVal; multiple += g) {
            pairs -= exact[multiple];
        }

        exact[g] = pairs;
    }

    // Step 4: Prefix sums
    const prefix = new Array(maxVal + 1).fill(0);
    for (let i = 1; i <= maxVal; i++) {
        prefix[i] = prefix[i - 1] + exact[i];
    }

    // Step 5: Answer queries using binary search
    const ans = [];

    for (const q of queries) {
        let left = 1;
        let right = maxVal;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);

            if (prefix[mid] > q) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        ans.push(left);
    }

    return ans;
};