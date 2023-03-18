var checkPalindrome = function (str) {
  let lenOfString = str.length;
  let lastIndex = lenOfString - 1;

  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[lastIndex - i]) {
      return 'Not Palnindrome';
    }
  }
  return 'Palnindrome';
};

console.log(checkPalindrome('abba'));
