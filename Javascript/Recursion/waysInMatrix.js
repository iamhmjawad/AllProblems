function waysInMatrix(rows, columns) {
    if ((rows === 1 || columns === 1)) return 1
    return waysInMatrix(rows - 1, columns) + waysInMatrix(rows, columns - 1)
}

console.log(waysInMatrix(3, 2))
// how many ways, we can move from one plcae to other (in a matrix)
// can only traverse right and bottom
// in case of a single row or a column, there is only one way (which makes the base case)