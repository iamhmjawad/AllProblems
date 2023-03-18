const getBit = (num, i) => {
    return (num & (1 << i)) !== 0 ? 1 : 0
}
console.log(getBit(309, 3))

//          8 7 6 5 4 3 2 1 0
// num =    1 0 0 1 1 0 1 0 1 
