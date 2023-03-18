const addBinary = (num1, num2) => {
    // convert bianry to dec syntax: biigInt(0b${num1})
    let sumDec = BigInt(`0b${num1}`) + BigInt(`0b${num2}`)
    // now convert to binary and return
    return sumDec.toString(2)
}
