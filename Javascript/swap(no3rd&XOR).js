const swaq = (a, b) => {
    // a = a ^ b
    // a = 10 ^ 11 = 01 = 1
    a ^= b
    // b = a ^ b
    // b = 01 ^ 11 = 10 = 2
    b ^= a
    // a = a ^ b
    // a = 01 ^ 10 = 11 = 3
    a ^= b
    return [a, b]
}

console.log(swaq(2, 3))