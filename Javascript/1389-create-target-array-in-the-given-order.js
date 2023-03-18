/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
    let target = [];
    for (let i = 0; i < nums.length; i++) {
        target.splice(index[i], 0, nums[i]);
        // The splice() method is used to add or remove elements from an array. 
        // It can be called on an array and takes two or more arguments:

        // The index at which to start adding or removing elements.
        // The number of elements to remove (if any). If you want to add elements rather than 
        // remove them, you can pass 0 as this argument.
        // The elements to add to the array. You can pass as many elements as you like, 
        // separated by commas.
    }
    return target;
};