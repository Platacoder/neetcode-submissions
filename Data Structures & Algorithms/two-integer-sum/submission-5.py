class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        
        for i in range(len(nums)):
            p1 = nums[i]

            for j in range(i + 1, len(nums)):
              p2 = nums[j]
              if p1 + p2 == target:
                return [i, j]