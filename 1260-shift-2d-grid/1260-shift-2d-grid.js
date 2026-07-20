/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    let rows = grid.length;
    let cols = grid[0].length;
    let total = rows * cols;
    k = k % total;

    let ans = Array.from({ length: rows }, () => Array(cols));
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
        let index = r * cols + c;
        let newIndex = (index + k) % total;

        let newRow = Math.floor(newIndex / cols);
        let newCol = newIndex % cols;

        ans[newRow][newCol] = grid[r][c];
         }
    }
    return ans;
};