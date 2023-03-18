// power of 2 numbers only has one SET bit which is at very first position 
// 2 = 10
// 4 = 100
// 8 = 1000

// ALSO, n-1 will be, right most set Bit will become zero and rest of the bits will get flipped
// 1 = 01
// 3 = 011
// 7 = 0111

// now if we n AND n-1, we should always get zero in case of power of 2 numbers
//  2 & 1 = 100 & 011 = 000

// also, if n is zero, we will return false (0 not power of 2)

// That's it, Time to code


function isPowerTwo(num) {
    return (num && !(num & (num - 1)))
}

console.log(isPowerTwo(64))