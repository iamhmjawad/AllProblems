/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
// Input: key = "the quick brown fox jumps over the lazy dog", 
// message = "vkbs bs t suepuv"
// Output =  "this is a secret"

var decodeMessage = function (key, message) {
    key = Array.from(new Set(key.split(' ').join('')))
    //     Splitting the string key by spaces to create an array of words.
    //     Using the join() method to concatenate all the elements in the array back 
    //     into a single string.
    //     Creating a new Set object from the resulting string, which removes any duplicate characters.
    //     Using the Array.from() method to create an array from the Set object.
    //     The final result will be an array of unique characters from the original key string,
    //     with any duplicate characters removed.

    let keys = 'abcdefghijklmnopqrstuvwxyz';

    const hashTable = {}

    for (let i = 0; i < key.length; i++) {
        hashTable[key[i]] = keys[i]
    }

    let result = '';
    for (let i = 0; i < message.length; i++) {
        if (message[i] === ' ') {
            result += ' '
        } else {
            result += hashTable[message[i]]
        }
    }
    console.log(hashTable);
        return result;

};