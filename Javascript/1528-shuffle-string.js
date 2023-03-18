/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        arr[indices[i]] = s[i];
        console.log(indices[i], s[i]);
    }
    // console.log(arr);
    return arr.join("");
};