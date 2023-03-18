// CONFUSED

function GCD(a, b) {
    // base case
    if (b === 0) return a
    // recursuve call
    console.log(b, a % b)
    return GCD(b, a % b)
}

console.log(GCD(15, 24))