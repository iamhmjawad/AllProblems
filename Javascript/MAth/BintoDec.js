function binToDec(binary) {
    let decimal = 0
    for (let i = 0; i < binary.length; i++) {
        decimal += binary[binary.length - 1 - i] * (2 ** i)
        // 2^5 + 2^4 + 2^3 + 2^2 + 2^1 + 2^0
    }
    return decimal
}

console.log(binToDec("1000"))
