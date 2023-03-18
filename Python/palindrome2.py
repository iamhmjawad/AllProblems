# can remvoe one character! abac -> True becase removing c will make it a palindrome
def isPalindrom(s):
    l, r = 0, len(s)-1

    while l < r:
        if s[l] != s[r]:
            skipL, skipR = s[l+1:r+1], s[l:r]
            return ((skipL == skipL[::-1]) or (skipR == skipR[::-1]))
        l, r = l+1, r-1
    return True


print(isPalindrom('abbacd'))
