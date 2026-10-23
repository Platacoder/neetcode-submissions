class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        if len(nums) <= 1:
          return False;
        
        map = {};
        for item in nums:
          if(item in map):
            return True
          else:
            map[item] =  True
        
        return False;