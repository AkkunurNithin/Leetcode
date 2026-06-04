/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let mpp = new Set()

    for(let num of nums){
        if(mpp.has(num)){
            return true;
        }else {
            mpp.add(num);
        }

    }
    return false;
};