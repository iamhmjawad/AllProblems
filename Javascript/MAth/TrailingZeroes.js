function trailingZeroes(n) {
    let result = 0
    for (let i = 5; i <= n; i = i * 5) {
        result += Math.floor(n / i)
    }
    return result
}

console.log(trailingZeroes(12))

// finds number of zeros in a factorial, 12!
// n/5+n/25+n/125+....until reaches n
