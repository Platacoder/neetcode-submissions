class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:

        ## We can simplify this proble by understanding what happens where we multiple
        ## By one zero, if there is one zero in the array every other number will be 
        ## zero except the number in that current index which will just be the product
        ## If there are more than one zero than all the numbers will be zero
        ## if there are no zeros then each number is the product divided by itself

        ## With this we can do a double pass, first pass gets the product and counts the zeros

        ## The next pass then applies the above rules and returns back the output array

        ## Time complexity of O(n), space complexity of O(1)
        
        pre = []
    
        current_prod = 1

        for num in nums:
            pre.append(current_prod)
            current_prod *= num
        
        current_prod = 1

        for i in range(len(nums) - 1, -1, -1):
            pre[i] = pre[i] * current_prod
            current_prod *= nums[i]
        
        return pre
