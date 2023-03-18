const evenOdd = (num) => {
    // if (num % 2 === 0)
    // basically, if the last bit is 0, then it is even
    // if the last bit is 1, then it is odd
    // so num & 1 will give 0 if the last bit is 0
    if ((num & 1) === 0)
        return "Even"
    else
        return "Odd"

}

console.log(evenOdd(4))