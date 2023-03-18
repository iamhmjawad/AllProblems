# Input: nums = [0,1,2,2,3,0,4,2], val = 2
# Output: 5, nums = [0,1,4,0,3,_,_,_]
# Explanation: Your function should return k = 5, with the first five elements of nums containing
# 0, 0, 1, 3, and 4.
# Note that the five elements can be returned in any order.
# It does not matter what you leave beyond the returned k (hence they are underscores).

def removeElement(nums, target):
    # a pointer which keeps record of where the target val is found
    k = 0
    for i in range(len(nums)):
        if nums[i] != target:
            # nums[k] = nums[i]
            k += 1
    return k


# returns 5 becauase the count - occureNCES of 2 equals 5
print(removeElement([1, 2, 3, 4, 3, 2, 2, 2, 2, 4], 2))
