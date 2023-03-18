# start taking sqrs from 1, 2 and so on, if value becomes greater than num(given), we return false
# another approach is binary search, 1 to n
def perfectSqr(num):
    l, r = 1, num
    while l <= r:
        mid = (l+r)//2

        if mid*mid == num:
            return True

        elif mid*mid > num:
            r = mid-1
        else:
            l = mid+1
    return False


print(perfectSqr(14))
