const linearSearch = (arr, val) => {
    for (let i = 0; i < arr.length; i++) {
        if (val===arr[i]) {
            return i
        }
    }
    return -1
}

// console.log(linearSearch([2,4,6,3,5,5,3,2,5],4));