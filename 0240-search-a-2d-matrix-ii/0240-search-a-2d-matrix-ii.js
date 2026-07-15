/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
     for(let row of matrix){

         if (target < row[0] || target > row[row.length - 1]) {
            continue;
        }

        let left = 0;
        let right = row.length-1;

        while(left <= right){
            let mid = Math.floor((left+right)/2);

            if(row[mid] === target){
                return true;
            }
            if(row[mid] < target){
                left = mid+1;
            }else{
                right = mid-1;
            }
        }
    }
        return false;
};