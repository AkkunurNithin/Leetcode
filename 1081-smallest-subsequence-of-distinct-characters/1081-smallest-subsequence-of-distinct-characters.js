/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function(s) {
    const last = new Map();

    // Store last occurrence of each character
    for (let i = 0; i < s.length; i++) {
        last.set(s[i], i);
    }

    const stack = [];
    const visited = new Set();

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];

        // Skip if already in stack
        if (visited.has(ch)) continue;

        // Remove larger characters if they appear later
        while (
            stack.length > 0 &&
            stack[stack.length - 1] > ch &&
            last.get(stack[stack.length - 1]) > i
        ) {
            visited.delete(stack.pop());
        }

        stack.push(ch);
        visited.add(ch);
    }

    return stack.join("");
};