from ast import List


def reverseStr1(s: List(str)):
    l, r = 0, len(s)-1
    while l <= r:
        s[l], s[r] = s[r], s[l]
        l, r = l+1, r-1
    return s


# using stack
def reverseStr2(s: List(str)):
    stack = []

    for c in s:
        stack.append(c)

    i = 0
    while stack:
        s[i] = stack.pop()
        i += 1
    return s


# using recursion
def reverseStr3(s: List(str)):
    def recursive(l, r):
        if l < r:
            s[l], s[r] = s[r], s[l]
            recursive(l+1, r-1)
    recursive(0, len(s)-1)
    return s


print(reverseStr3(['m', 'o', 't', 'h', 'e',
      'r', 'f', 'u', 'c', 'k', 'e', 'r']))
