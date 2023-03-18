function search(arr, key) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            return i
        }

    }
    return 0
}


console.log(search([1, 2, 3, 4, 5, 6, 7, 8], 4))