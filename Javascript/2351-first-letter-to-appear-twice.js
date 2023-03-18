/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    // make a hash table
    var hash = {};
    // loop through the string
    for (var i = 0; i < s.length; i++) {
        // if the hash table has the character, return it
        if (hash[s[i]]) {
            return s[i];
        }
        // otherwise, add it to the hash table
        hash[s[i]] = true;
    }  
};