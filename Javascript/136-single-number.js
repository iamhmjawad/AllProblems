/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let hash = {}
    for (let ch of nums) {
        hash[ch] ? delete hash[ch] : hash[ch] = 1
    }
    return Object.keys(hash)[0]
}