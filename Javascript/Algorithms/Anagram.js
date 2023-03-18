const anagram = (str1, str2) => {
    // if not the same length, return false
    if (str1.length !== str2.length) {
        return false
    }
    // make a hash table
    let hash1 = {}
    // loop through str1 and put all charachters' occurences in hash table
    for (const char of str1) {
        // if exists in hash table, add + 1, if not, set its value to 1
        hash1[char] ? hash1[char]++ : hash1[char] = 1
    }

    for (const char of str2) {
        // if char from str2 does not exist in hash table
        if (!hash1[char])
            return false
        else
            // if exists, subtract -1, in the end, hash1 becomes empty and boom
            hash1[char] -= 1
    }
    return true
}

console.log(anagram('ab', 'a'));