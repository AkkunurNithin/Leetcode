/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
     let sorted = [...arr].sort((a, b) => a - b);

    let rank = new Map();
    let currentRank = 1;

    for (let num of sorted) {
        if (!rank.has(num)) {
            rank.set(num, currentRank++);
        }
    }

    return arr.map(num => rank.get(num));
};