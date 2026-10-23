class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        if len(nums) <= 1:
          return False;
        
        seen = set();
        for item in nums:
          if(item in seen):
            return True
          else:
            seen.add(item)
        
        return False;