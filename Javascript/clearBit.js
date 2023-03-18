// making the ith bit 0
function clearBit(n, i) {
    let mask = 1 << i
    // revert all the values by taking one's compliment
    revertMask = ~mask
    // the value we want to be zero at is zero, now peprform AND oper
    console.log(n.toString(2))
    return (n & revertMask).toString(2)

}
console.log(clearBit(309, 4))

//          8 7 6 5 4 3 2 1 0
// num =    1 0 0 1 1 0 1 0 1 
