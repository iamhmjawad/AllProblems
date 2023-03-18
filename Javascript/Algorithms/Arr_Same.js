// Method 1
// const same = (arr, inputArr) => {
//     let outputArr = []
//     for (let i = 0; i < arr.length; i++) {
//         let e = arr[i]
//         outputArr.push(e * e)
//     }
//     for (let i = 0; i < inputArr.length; i++) {
//         for (let j = 0; j < inputArr.length; j++) {
//             if (inputArr[i] === outputArr[j]) {
//                 outputArr = outputArr.filter(arrayItem => arrayItem !== inputArr[i]);
//             }
//         }
//     }
//     if (outputArr.length === 0) {
//         return true
//     }
//     return false
// }

//Method 2
const same = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false
    }
    for (let i = 0; i < arr1.length; i++) {
        //index of square of arr1[i]
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        // if it is not -1, that means it has some index which exists
        if (correctIndex === -1) {
            return false
        }
        // remove the square value of that index
        arr2.splice(correctIndex, 1)
    }
    // since we have passed every argument so just return true
    return true
}
console.log(same([3, 2, 5], [25, 9, 4]));