# Approach 1
def isPalindrome(str):
    newStr = ""
    for ch in str:
        # if alphanumeric
        if ch.isalnum():
            # convert uppercase to lowercase and add in newStr
            newStr += ch.lower()
    # if original and reverse are equal
    return newStr = newStr[::-1]
            
    