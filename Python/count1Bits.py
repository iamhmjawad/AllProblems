def countOneBits(n):
    result = 0
    
    while n:
        # n%2 == 1, so add in result if 0, well its zero. who cares
        result += n % 2

        # right shift or n/2
        n = n >> 1
        
    return result

print(countOneBits(3))
        