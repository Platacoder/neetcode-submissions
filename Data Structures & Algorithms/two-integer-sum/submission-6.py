class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        
        difference = {}

        for i in range(len(nums)):

          if nums[i] in difference:
            return [difference.get(nums[i]), i]

          calc = target - nums[i]
          difference[calc] = i