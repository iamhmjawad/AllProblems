def majority_element(nums):
    counts = {}
    for num in nums:
        if num in counts:
            counts[num] += 1
        else:
            counts[num] = 1
    # counts.items() is a method that returns a list of key-value pairs (as tuples) in a dictionary.
    for num, count in counts.items():
        if count > len(nums) / 2:
            return num
    return None
