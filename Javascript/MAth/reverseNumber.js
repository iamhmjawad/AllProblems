function reverseNum(n) {
    let original = n
    let reversed = 0
    let lastDig = 0
    while (n > 0) {
        lastDig = n % 10
        reversed = (reversed * 10) + lastDig
        n = Math.floor(n / 10)
    }
    console.log(original)
    return reversed
}

console.log(reverseNum(5234534))