def findDisappearedNumbers(nums):
    full_list = [i for i in range(1, len(nums)+1)]  # [1, 2, 3, 4, 5, 6, 7, 8]
    # {1, 2, 3, 4, 5, 6, 7, 8} - {1, 2, 3, 4, 7, 8} = [5,6]
    return list(set(full_list) - set(nums))


print(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))
