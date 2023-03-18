def pivotIndex(arr):
    total = sum(arr)
    lSum = 0
    for i in range(len(arr)):
        rSum = total - arr[i] - lSum
        if lSum == rSum:
            return i
        lSum += arr[i]
    return -1


print(pivotIndex([1, 7, 3, 6, 5, 6]))
# https://www.youtube.com/watch?v=u89i60lYx8U&list=PLot-Xpze53lfQmTEztbgdp8ALEoydvnRQ&index=45&ab_channel=NeetCode
