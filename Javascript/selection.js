// finds the smallest elements, replaces it with the starting element. 
// skips the sorted element, work on rest of the array
function sort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[i]) {
                let temp = array[j]
                array[j] = array[i]
                array[i] = temp
            }

        }
    }
    return array
}

console.log(sort([5, 3, 7, 4, 2, 76]))