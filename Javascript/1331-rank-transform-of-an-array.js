/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
	let sorted = Array.from(new Set(arr)).sort((a,b)=>a-b);
  let hashTable = {};
  sorted.forEach((ele,i)=>{
    hashTable[ele] = i+1
  });
  arr.forEach((ele,i)=>{
    arr[i] = hashTable[ele]
  })
  return arr
};

