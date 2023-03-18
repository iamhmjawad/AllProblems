class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # hashmap (if ele is there, return the index, if not add it to the map)
        prevMap = {}
        
        for i, n in enumerate(nums):
            if target - n in prevMap:
                return [prevMap[target - n], i]
            prevMap[n] = i