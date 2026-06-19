/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const set = new Set();
    let dup = 0;
    // let n = Array(nums.length).fill(1).map((val, index) => index+1);
    let n = nums.length;
    console.log(n);
    let arr = []

    for(let num of nums){
        if(set.has(num)){
            dup = num;
        }
        set.add(num);
    }
    arr.push(dup);
    for(let i=1; i<=n; i++){
        if(!set.has(i)){
            set.add(i)
            arr.push(i);
        }
    }
    return arr;
};