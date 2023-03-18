function isPalindrome(str) {
    let left = 0
    let right = str.length - 1
    function helperFunction(str) {
        if (left >= right) return true
        if (str[left] !== str[right]) return false
        left++
        right--
        return helperFunction(str)
    }
    return helperFunction(str)
}

console.log(isPalindrome('acaaa'))