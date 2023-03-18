function setBit(n, i) {
    console.log(n.toString(2))
    return (n | (1 << i)).toString(2)
}

console.log(setBit(309, 1))
//          8 7 6 5 4 3 2 1 0
// num =    1 0 0 1 1 0 1 0 1