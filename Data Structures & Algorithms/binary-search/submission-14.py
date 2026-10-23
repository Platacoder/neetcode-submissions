class Solution:
    def search(self, nums: List[int], target: int) -> int:
        p1 = 0
        p2 = len(nums) - 1
        
        while p1 <= p2:

          eye = (p2 + p1) // 2

          if nums[eye] == target:
            return eye
          if nums[eye] > target:
            p2 = eye - 1
          elif nums[eye] < target:
            p1 = eye + 1
          else:
            return -1

        return -1
        