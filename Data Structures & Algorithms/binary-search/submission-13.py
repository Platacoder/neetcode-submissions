class Solution:
    def search(self, nums: List[int], target: int) -> int:
        p1 = 0
        p2 = len(nums) - 1

        if(nums[p1] == target):
            return p1
        if(nums[p2] == target):
            return p2
        
        while (p2 - p1) > 1:

          eye = (p2 + p1) // 2

          if nums[eye] == target:
            return eye
          if nums[eye] > target:
            p2 = eye
          elif nums[eye] < target:
            p1 = eye
          else:
            return -1

        return -1
        