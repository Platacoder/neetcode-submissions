class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        res = [0] * len(nums)
        total_product = 1
        zero_count = 0

        ## Get total product
        ## And total zero count
        for i in range(len(nums)):
            if nums[i] != 0:
                total_product *= nums[i]
            else:
                zero_count += 1
        
        if zero_count > 1:
            return res
        
        if zero_count == 1:
          for j in range(len(nums)):
            if nums[j] == 0:
              res[j] = total_product
            else:
              res[j] = 0
        

        if zero_count == 0:
             for j in range(len(nums)):
               res[j] = total_product // nums[j]

        return res


        

          