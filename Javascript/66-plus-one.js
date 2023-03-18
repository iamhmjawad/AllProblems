/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    const length = digits.length
    for (let i = length - 1; i >= 0; i--) {
        // traversing it from the end, checking if the number is less than 9, just add 1 and return. Super Easy
        if (digits[i] < 9) {
            digits[i]++
            return digits
        }
        // If the last digit is 9 and 9 and then again 9, keep on making them 0's until you reach a point where 
        // digit is less than 9, add 1 to it and return, as you can see above here in 'if' block
        digits[i] = 0
    }
    // Finally, if the number is 99 or 999, resize the array and make the first digit as 1 and rest will
    // be zeroes automatically and return
    digits.unshift(1);
    return digits;
};
