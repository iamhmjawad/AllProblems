// // Method : forEach
// const sum = (arr) => {
//   let sum = 0;
//   arr.forEach((element) => {
//     sum += element;
//   });
//   return sum;
// };

// Method : Array Reduce
const sum = (arr) => {
  return arr.reduce((acc, cur) => acc + cur, 0);
};

var maximumWealth = function (accounts) {
  let richest_man = 0;
  for (let balance of accounts) {
    const curr_man = sum(balance);
    richest_man = Math.max(curr_man, richest_man);
  }
  return richest_man;
};

console.log(
  maximumWealth([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
