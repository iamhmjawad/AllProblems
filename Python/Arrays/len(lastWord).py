def lengthOfLastWord(str):
    # starting from the back
    i, length = len(str)-1, 0

    # removing any white spaces before the word
    while str[i] == ' ':
        i -= 1

    # counting the characters
    while i >= 0 and str[i] != ' ':
        length += 1
        i -= 1

    return length


print(lengthOfLastWord('hello motherfucker'))
