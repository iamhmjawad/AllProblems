const maxSubarraySum = (arr, num) => {
    let maxSum = 0
    let tempSUm = 0
    if (arr.length < num) {
        return null
    }
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    tempSUm = maxSum
    for (let i = num; i < arr.length; i++) {
        // This line is important. we are just subtracting the very first element and adding the next from other side
        // do it on the page and you will get an amazing understanding 
        tempSUm = tempSUm - arr[i - num] + arr[i]
        maxSum = Math.max(maxSum, tempSUm)
    }
    return maxSum
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))