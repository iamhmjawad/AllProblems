def containsDup(arr):
    hashmap = set()
    
    for num in arr:
        if num in hashmap:
            return True
        hashmap.add(num)
    
    return False