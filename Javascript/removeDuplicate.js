let removeDuplicate2 = function (array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == array[i + 1]) {
      array.splice(array[i], 1);
    }
  }
  return array;
};

console.log(removeDuplicate2([1, 1, 2, 2, 3, 3, 4, 4]));
