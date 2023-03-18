const factCount = (num) => {
    if (num === 1) {
        return 1
    }
    return num * factCount(num - 1)
}

console.log(factCount(4));