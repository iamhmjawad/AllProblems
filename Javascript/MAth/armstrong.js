function armstrong(n) {
    let original = n
    let lastDig = 0
    let result = 0

    while (n > 0) {
        lastDig = n % 10
        result = result + (lastDig ** 3)
        n = Math.floor(n / 10)
    }
    return original === result
}

console.log(armstrong(43))