# https://www.youtube.com/watch?v=G9xeB2-7PqY&list=PLot-Xpze53lfQmTEztbgdp8ALEoydvnRQ&index=49&ab_channel=NeetCode

from collections import Counter


def maxNumBalloons(str):
    countText = Counter(str)
    balloon = Counter("balloon")

    res = float('inf')  # set to infinity

    for c in balloon:
        res = min(res, countText[c] // balloon[c])

    return res


print(maxNumBalloons("nlaebolko"))
