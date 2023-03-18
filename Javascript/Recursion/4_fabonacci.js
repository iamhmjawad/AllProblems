const fib = (n) => {
    if (n === 0 || n === 1) {
        return n
    }

    let result = fib(n - 1) + fib(n - 2)
    return result
}

console.log(fib(4));