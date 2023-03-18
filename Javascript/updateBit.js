// combination of clearBit and setBit
function updateBit(n, i, value) {
    // clearBit
    let mask = ~(1 << 1) //ith bit is 0 and rest of them are 1
    let clearedBit = n & mask

    // now setBit
    return n | (value << i)
}

// use pen and register for better understanding!