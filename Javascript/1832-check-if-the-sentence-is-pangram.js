/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    let hashTable = {}
    for (let i = 0; i < letters.length; i++) {
        hashTable[letters[i]] = true
    }
    for (let i = 0; i < sentence.length; i++) {
        if ((hashTable[sentence[i]])) {
            hashTable[sentence[i]] = false
        }
    }
    for (let i = 0; i < letters.length; i++) {
        if (hashTable[letters[i]]) {
            return false
        }
    }
    // console.log(hashTable);
    return true
};