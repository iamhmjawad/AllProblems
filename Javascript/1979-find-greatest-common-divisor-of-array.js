/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
   
    let smallest = Math.min.apply(null, nums);
    let largest = Math.max.apply(null, nums);
    let gcd = 1;
    for (let i = 1; i <= smallest; i++) {
        if (largest % i === 0 && smallest % i === 0) {
            gcd = i;
        }
    }
    return gcd;
};