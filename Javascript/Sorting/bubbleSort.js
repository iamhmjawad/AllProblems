// Bubble sort is a simple sorting algorithm that works by repeatedly swapping adjacent elements if they are in the wrong order.
function sort(array) {
    let counter = 1
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j + 1]
                array[j + 1] = array[j]
                array[j] = temp
            }

        }
    }
    return array
}

console.log(sort([5, 3, 7, 4, 2, 76]))