# 263
# An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.
# Given an integer n, return true if n is an ugly number.

# Input: n = 6
# Output: true
# Explanation: 6 = 2 × 3

# Input: n = 14
# Output: false
# Explanation: 14 is not ugly since it includes the prime factor 7.

def isUgly(n):
    if n <= 0:
        return False

    for i in [2, 3, 5]:
        if n % i == 0:
            n = n//i

    return n == 1


print(isUgly(14))
