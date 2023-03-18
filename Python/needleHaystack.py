# def needleHaystack(haystack, needle):
#     if needle == "":
#         return 0
#     # dont want to check even last element, wouldnt make any sense it needle is lnger than tha haystack
#     for i in range(len(haystack) + 1 - len(needle)):
#         if haystack [i: i+len(needle)] == needle:
#             return i

#     return -1

def needleHaystack2(haystack, needle):
    if needle == "":
        return 0
    # count = 0
    for i in range(len(haystack) + 1 - len(needle)):
        for j in range(len(needle)):  # j starts at 0
            if haystack[i+j] != needle[j]:
                break
            # if needle is found and we have reached
            if j == len(needle) - 1:
                # count += 1
                return i  # i is the starting point of the needle

    # if not found
    return -1
    # return count


print(needleHaystack2("whatthefuckfuck", "fuck"))


# https://www.youtube.com/watch?v=Gjkhm1gYIMw&list=PLot-Xpze53lfQmTEztbgdp8ALEoydvnRQ&index=38&ab_channel=NeetCode
