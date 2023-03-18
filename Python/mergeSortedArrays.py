def mergeSortedArrays(nums1, m, nums2, n):
    # nums1 has enough space to contain all the elements of nums2
    # also, m is the size of elements nums1 already have, not the size of array nums1

    # so we find the last index of nums1 and start filling nums1 from right side
    last = m+n-1

    while m > 0 and n > 0:
        if nums1[m-1] > nums2[n-1]:
            nums1[last] = nums1[m-1]
            m -= 1
        else:
            nums1[last] = nums2[n-1]
            n -= 1

        last -= 1

    # at the end, fill all the leftover elements of nums2 in nums1
    while n > 0:
        nums1[last] = nums2[n-1]
        n, last = n-1, last-1

    return nums1


print(mergeSortedArrays([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
