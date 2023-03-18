var merge = function (nums1, m, nums2, n) {
  // idx1 = length of nums1 (without 0's)
  //idx2 = length of nums2
  //idx3 = length of final merged array of nums1
  let idx1 = m - 1, //3
    idx2 = n - 1, //3
    idx3 = m + n - 1; //6
  while (idx2 >= 0) {
    // filling array from right to left starting from 5th index in this case
    // if nums1[idx1] is larger, store it in 5th index and index then gets subtracted
    // nums1[idx1] = 3
    // nums2[idx2] = 3
    // nums1[idx3--] = 5
    // nums1[idx--] = 2
    // nums2[idx--]  =2
    nums1[idx3--] = nums1[idx1] >= nums2[idx2] ? nums1[idx1--] : nums2[idx2--];
  }
//   return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
