// checking prime numbers in a given range

function sieveOfEratosthenes(n) {
    // make an array and fill it with true values
    let isPrime = new Array(n + 1).fill(true)

    // outer loops runs until i*i<=n. lets say n = 15, loop runs 4 times
    for (let i = 2; i * i <= n; i++) {
        // now check if the ith value is true, we check its other factors in the array and make them false
        if (isPrime[i]) {
            // starts from number 4 ( 2*2 )
            for (let j = i * 2; j <= n; j = j + i) {
                isPrime[j] = false
            }
        }

    }

    // now we have the indexes where number is prime
    let primes = []

    for (let i = 2; i <= n; i++) {
        // if it is true, push it in primes array
        if (isPrime[i]) {
            primes.push(i)
        }

    }
    return primes
}

console.log(sieveOfEratosthenes(20))