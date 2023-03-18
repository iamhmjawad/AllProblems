const productOfArray = (arr) => {
    let result = 1
    const helper = (helperInput) => {
        if (helperInput.length === 0) {
            return
        }
        result = result * helperInput[0]
        helper(helperInput.slice(1))
    }
    helper(arr)
    return result
}

console.log(productOfArray([1, 2, 3, 4, 5]));

// // Colt Steel's Solution
// function productOfArray(arr) {
//     if (arr.length === 0) {
//         return 1;
//     }
//     return arr[0] * productOfArray(arr.slice(1));
// }