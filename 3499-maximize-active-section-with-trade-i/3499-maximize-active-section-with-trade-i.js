/**
 * @param {string} s
 * @return {number}
 */
 var maxActiveSectionsAfterTrade = function (s) {
    let ones = 0;

    for (let ch of s) {
        if (ch === '1') ones++;
    }

    let runs = [];
    let i = 0;

    while (i < s.length) {
        let j = i;
        while (j < s.length && s[j] === s[i]) j++;

        runs.push({
            ch: s[i],
            len: j - i
        });

        i = j;
    }

    let gain = 0;

    for (let i = 1; i < runs.length - 1; i++) {
        if (
            runs[i].ch === '1' &&
            runs[i - 1].ch === '0' &&
            runs[i + 1].ch === '0'
        ) {
            gain = Math.max(gain, runs[i - 1].len + runs[i + 1].len);
        }
    }

    return ones + gain;
};