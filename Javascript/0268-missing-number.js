/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
// sorting the array
    nums.sort((a, b) => a-b);
// Now looping through the sorted array and comparing i with ith value. 
    
    for(let i=0;i<nums.length;i++){
        if(i !== nums[i])
            return i
    }
//     if the last element is missing
    return nums.length
};