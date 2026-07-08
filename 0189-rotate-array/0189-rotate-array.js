/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

     k = k % nums.length;

    nums.reverse();
    
    let left = 0;
    let right = k-1;

    while(left < right){
      [nums[left],nums[right]]=[nums[right],nums[left]]
       left++;
       right--;
    }

    left = k;
    right = nums.length-1;

    while(left < right){
      [nums[left],nums[right]]=[nums[right],nums[left]]
       left++;
       right--;
    }

    
};