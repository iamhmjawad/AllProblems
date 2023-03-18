def canPlaceFlowers(flowerbed, n):
    # adding 0 in the start and end and makeing a brand new array to deal with edge cases
    f = [0] + flowerbed + [0]
    for i in range(1,len(f)-1): #skipping the first and last bcz they do not exist actually
        if f[i-1] == 0 and f[i] == 0 and f[i+1] ==0:
            f[i] = 1
            n -= 1
    return n <= 0

# https://www.youtube.com/watch?v=ZGxqqjljpUI&list=PLot-Xpze53lfQmTEztbgdp8ALEoydvnRQ&index=37&ab_channel=NeetCode
