def insertPosition(nums, target):
    l, r = 0, len(nums)-1

    while l <= r:
        mid = (l+r)//2
        # if we find the element
        if target == nums[mid]:
            return mid
        elif target > nums[mid]:
            l = mid+1
        else:
            r = mid-1

    return l
