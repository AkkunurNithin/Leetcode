/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let temp = [];

    for(let num of arr){
        temp.push(num);

        if(num === 0){
            temp.push(0);
        }
    }
    for(let i=0; i<arr.length; i++){
        arr[i] = temp[i];
    }
};