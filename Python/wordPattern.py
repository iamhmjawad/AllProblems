def wordPatter(pattern, str):
    # split the string seperated by comma
    words = str.split(" ")

    if len(words) != len(pattern):
        return False

    charToWord, wordToChar = {}, {}
    for c, w in zip(pattern, words):
        if c in charToWord and charToWord[c] != w:
            return False
        if w in wordToChar and wordToChar[w] != c:
            return False

        charToWord[c] = w
        wordToChar[w] = c

    return True


print(wordPatter('abba', 'cat dog cat cat'))


# https://www.youtube.com/watch?v=W_akoecmCbM&list=PLot-Xpze53lfQmTEztbgdp8ALEoydvnRQ&index=53&ab_channel=NeetCode
