/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let splitted =s.trim().split(" ").filter((val)=>val!='');
    return splitted.reverse().join(" ");
};

// This is a JavaScript function that takes a string as an input and returns the same string with 
// the words reversed. The function first uses the built-in trim() method to remove any whitespace at 
// the beginning and end of the input string. Then it uses the split() method to split the string into 
// an array of substrings, using a space as the separator. The filter() method is then used to remove 
// any empty strings from the array. The reverse() method is used to reverse the order of the substrings 
// in the array, and finally the join() method is used to join the substrings back together into a single
//  string, using a space as the separator. The reversed string is then returned as the output.