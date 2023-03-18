# 19 True
# 1**2 + 9**2 = 82
# 8**2 + 2**2 = 68
# .
# .
# 1**2 + 0**2 = True

# if other number is repeated more than once, that means we will never reach 1 and return False

def isHappy(n: int) -> bool:
    visits = set()

    while n not in visits:
        visits.add(n)
        n = sumOfSquares(n)

        if n == 1:
            return True
    return False


def sumOfSquares(n):
    output = 0

    while n:
        digit = n % 10
        digit = digit**2
        output += digit
        n = n//10

    return output


print(isHappy(2))
