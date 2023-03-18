const charCount = (str) => {
    let result = {}
    for (let i = 0; i < str.length; i++) {
        let ch = str[i].toLowerCase()
        if (/[a-z0-9]/.test(ch)) {
            result[ch] > 0 ? result[ch]++ : result[ch] = 1
            // result[ch] = ++result[ch] || 1
        }
    }

    return result;
}

console.log(charCount("Hhello Motherfuckers!"));