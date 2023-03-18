# using XOR, all values except the answer exists twice so they will cancel out each other
# to solve in linear time
def singleNumber(arr):
    res = 0

    for i in arr:
        res = i ^ res

    return res


print(singleNumber([1, 1, 2, 2, 3, 3, 4, 4, 5]))
