function decToBin(n) {
    let binary = []
    while (n > 0) {
        binary.push(n % 2)
        n = Math.floor(n / 2)
    }
    return binary.reverse().join('')
}

console.log(decToBin(8))
