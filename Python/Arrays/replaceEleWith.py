# replace element with greeatest element on the right side
# input : 17, 18, 5, 4, 6, 1
# output: 18, 6, 6, 6, 1, -1
# last element will always be -1

# Logic : traverse array from the last element and compare only two and keep on replacing
# If we do it fro the beginning, quadratic time complexiyt

def replaceElements(arr):
    # initialize newMax = -1
    rightMax = -1

# for (var i = arr.length - 1; i >= 0; i--) {
#   // your code here
# }

    for i in range(len(arr)-1, -1, -1):
        newMax = max(arr[i], rightMax)
        arr[i] = rightMax
        rightMax = newMax

    return arr


print(replaceElements([17, 18, 5, 4, 6, 1]))
