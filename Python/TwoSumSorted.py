def twoSumSorted(arr, target):
    left = 0
    right = len(arr) - 1

    while left < right:
        curSum = arr[left] + arr[right]

        if curSum > target:
            right -= 1
        elif curSum < target:
            left += 1
        else:
            return [left, right]

    return [-1, -1]


print(twoSumSorted([2, 7, 11, 15], 9))
