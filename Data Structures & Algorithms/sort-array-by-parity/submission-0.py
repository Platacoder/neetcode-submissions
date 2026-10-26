class Solution:
    def sortArrayByParity(self, nums: List[int]) -> List[int]:
        ## Iterate through the array with two pointers\
        ## Checking if the number is odd, if so then move it forward in place
        i = 0
        j = len(nums) - 1

        while i < j:
            if nums[i] % 2 != 0:
                nums[i], nums[j] = nums[j], nums[i]
                j -= 1
            else:
                i += 1
        return nums
                

        