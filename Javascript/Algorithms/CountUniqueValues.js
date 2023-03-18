const countUniqueValues = (arr) => {
    // initializing two pointers and a counter
    let p1 = 0
    let p2 = 1
    let count = 0

    for (const iterator of arr) {
        // since its sorted arr, compare them, if they are same, increment both pointers
        if (arr[p1] === arr[p2]) {
            p1++
            p2++
        }
        // if value at both pointers is diff, increment count
        else { count++ }
    }
    return count
}
console.log(countUniqueValues([1, 1, 1, 1, 1, 2, 3, 4,]));